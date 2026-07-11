#!/usr/bin/env python3
"""PBS link-integrity sweep.

Collects live-surface URLs (rxbs.org + benefitblindspots.substack.com) referenced
across the repo's markdown, requests each once, and reports failures. Enforces the
standing confirm-before-link rule AFTER publish time: a page rename, a Wix slug
change, or a deleted Substack post shows up here instead of as a dead link a
prospect finds.

Skips: template placeholders ([SLUG], <slug>, {var}, "..."), URLs inside files
that are explicitly archives/backlogs, and anchor-only duplicates (checks the
base URL once; anchors are client-side).

Exit code 0 always (reporting tool); failures print between the markers the
workflow lifts into the notify body.
"""
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse, urlunparse

REPO = Path(__file__).resolve().parent.parent
DOMAINS = ("rxbs.org", "benefitblindspots.substack.com")
SKIP_DIRS = {".git", "node_modules", "__pycache__", "renders"}
SKIP_FILE_HINTS = ("backlog", "archive")
PLACEHOLDER = re.compile(r"[\[\]<>{}]|\.\.\.|\bslug\b|SLUG|URL\]|XXXX", re.I)
URL_RE = re.compile(r"https?://[^\s)\"'`>\]]+")


def collect() -> dict[str, set[str]]:
    urls: dict[str, set[str]] = defaultdict(set)
    for path in REPO.rglob("*.md"):
        if any(part in SKIP_DIRS for part in path.parts):
            continue
        if any(h in path.name.lower() for h in SKIP_FILE_HINTS):
            continue
        try:
            text = path.read_text(errors="ignore")
        except OSError:
            continue
        for raw in URL_RE.findall(text):
            url = raw.rstrip(".,;:!?)*_`'\"")
            if not any(d in url for d in DOMAINS):
                continue
            if PLACEHOLDER.search(url):
                continue
            p = urlparse(url)
            base = urlunparse((p.scheme, p.netloc, p.path, "", p.query, ""))
            urls[base].add(str(path.relative_to(REPO)))
    return urls


def check(url: str) -> tuple[bool, str]:
    # HEAD first, GET fallback (some hosts 405 on HEAD). curl keeps deps at zero.
    for extra in (["-I"], []):
        try:
            r = subprocess.run(
                ["curl", "-s", "-o", "/dev/null", "-w", "%{http_code}", "-L",
                 "--max-time", "20", "-A", "PBS-link-check/1.0", *extra, url],
                capture_output=True, text=True, timeout=30,
            )
            code = r.stdout.strip()
            if code.isdigit() and 200 <= int(code) < 400:
                return True, code
            last = code or "no-response"
        except (subprocess.TimeoutExpired, OSError):
            last = "timeout"
    return False, last


def main() -> None:
    urls = collect()
    failures = []
    for url in sorted(urls):
        ok, code = check(url)
        status = "ok" if ok else "FAIL"
        print(f"{status:4} {code:>4}  {url}")
        if not ok:
            refs = sorted(urls[url])
            failures.append((url, code, refs[:4], len(refs)))

    print(f"\nChecked {len(urls)} unique live-surface URLs.")
    print("=== LINK-CHECK REPORT ===")
    if not failures:
        print(f"All {len(urls)} live-surface URLs (rxbs.org + Substack) resolved clean.")
    else:
        print(f"{len(failures)} of {len(urls)} URLs FAILED:")
        for url, code, refs, n in failures:
            more = f" (+{n - len(refs)} more)" if n > len(refs) else ""
            print(f"- `{url}` -> {code}; referenced in: {', '.join(refs)}{more}")
        print("\nFix or re-point these before their referencing content ships (confirm-before-link rule).")
    print("=== END REPORT ===")


if __name__ == "__main__":
    sys.exit(main())
