#!/usr/bin/env python3
"""Retrofit existing post-copy blocks in W23-W37 to fenced code blocks.

Per the June 2026 CLAUDE.md convention: paste-ready post copy must be wrapped
in fenced code blocks so GitHub's copy button preserves numbered lists, line
breaks, and blank-line paragraph spacing for LinkedIn / X / Substack paste.

Targets `#### Post Copy`, `#### First Comment`, `#### Reshare Copy`, and
`#### Caption (use instead...` sections. Idempotent (skips already-wrapped
content).
"""
import re
from pathlib import Path

TARGETS = [
    re.compile(r"^Post Copy\s*$"),
    re.compile(r"^First Comment\s*$"),
    re.compile(r"^Reshare Copy\s*$"),
    re.compile(r"^Caption \(use instead.*$"),
]


def is_target_header(line: str) -> bool:
    m = re.match(r"^####\s+(.+?)\s*$", line.rstrip())
    if not m:
        return False
    title = m.group(1).strip()
    return any(p.match(title) for p in TARGETS)


def wrap_sections(content: str) -> str:
    lines = content.split("\n")
    out = []
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        out.append(line)
        if is_target_header(line):
            # advance past blank lines following header
            j = i + 1
            while j < n and lines[j].strip() == "":
                out.append(lines[j])
                j += 1
            if j >= n:
                i = j
                continue
            # already wrapped? skip
            if lines[j].lstrip().startswith("```"):
                i = j
                continue
            # find content end (next #### / --- / ## / # / EOF)
            k = j
            while k < n:
                s = lines[k].lstrip()
                if (
                    s.startswith("####")
                    or s.startswith("## ")
                    or s.startswith("# ")
                    or lines[k].strip() == "---"
                ):
                    break
                k += 1
            # trim trailing blanks
            end = k - 1
            while end >= j and lines[end].strip() == "":
                end -= 1
            if end < j:
                i = j
                continue
            out.append("```")
            for idx in range(j, end + 1):
                out.append(lines[idx])
            out.append("```")
            # add the blank lines we skipped over between content and next boundary
            for idx in range(end + 1, k):
                out.append(lines[idx])
            i = k
            continue
        i += 1
    return "\n".join(out)


def main():
    files = sorted(Path("newsletters").glob("week_2[3-9]_*.md")) + sorted(
        Path("newsletters").glob("week_3[0-7]_*.md")
    )
    for f in files:
        before = f.read_text()
        after = wrap_sections(before)
        if before != after:
            f.write_text(after)
            diff_lines = sum(1 for a, b in zip(before.split("\n"), after.split("\n")) if a != b)
            added = len(after.split("\n")) - len(before.split("\n"))
            print(f"updated {f.name}: +{added} lines")
        else:
            print(f"unchanged {f.name}")


if __name__ == "__main__":
    main()
