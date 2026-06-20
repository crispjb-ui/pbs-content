#!/usr/bin/env python3
"""
PBS brand + schema linter.

Enforces the deterministic CLAUDE.md rules that were previously hand-checked.
Runs in CI (.github/workflows/brand-lint.yml) on every push/PR and as a local
Stop hook (advisory). HARD checks exit non-zero; SOFT checks only warn.

Scope is deliberately the PUBLIC WEB SURFACE (website_mockups/site/*.html), where
copy must be clean. Internal strategy docs and newsletter image-prompt specs are
NOT hard-gated (they legitimately quote rules like "never use RXBS" and carry
em-dashes in image prompts), so gating them would only produce false positives.
The toolkit 2-page gate is enforced separately by templates/documents/_audit_pdfs.py
(authoritative, reads the rendered PDFs), which CI runs as its own step.

HARD (fail the build) — website_mockups/site/*.html:
  - no em-dash (U+2014)            (use commas / colons / periods)
  - no bare standalone "PBS"       (spell out "Prescription Benefit Solutions")
  - no "RXBS"                      (banned; the domain is www.rxbs.org, lowercase)
  - every <script type=application/ld+json> block parses as valid JSON
  - <title> and <link rel=canonical> present

SOFT (warn only, never fail):
  - em-dash / bare "PBS" counts inside newsletters/*.md (informational)

Usage: python tools/brand_lint.py [--soft-only]
"""
import sys, re, json, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

EMDASH = "—"
BARE_PBS = re.compile(r"(?<![A-Za-z])PBS(?![A-Za-z])")
RXBS = re.compile(r"(?<![A-Za-z])RXBS(?![A-Za-z])")  # uppercase only; lowercase rxbs.org is fine
JSONLD = re.compile(r'<script type="application/ld\+json">(.*?)</script>', re.S)

hard, soft = [], []

# ---- HARD: site HTML (the canonical web surface; must be clean) ----
site = sorted(glob.glob("website_mockups/site/*.html"))
for f in site:
    s = open(f, encoding="utf-8").read()
    if EMDASH in s:
        hard.append(f"{f}: contains an em-dash (U+2014); use commas/colons/periods")
    if BARE_PBS.search(s):
        hard.append(f"{f}: bare 'PBS' on a public surface; spell out 'Prescription Benefit Solutions'")
    if RXBS.search(s):
        hard.append(f"{f}: contains banned 'RXBS' (domain is www.rxbs.org, lowercase)")
    for i, block in enumerate(JSONLD.findall(s), 1):
        try:
            json.loads(block)
        except Exception as e:
            hard.append(f"{f}: JSON-LD block #{i} is invalid JSON ({e})")
    if "<title>" not in s:
        hard.append(f"{f}: missing <title>")
    if 'rel="canonical"' not in s:
        soft.append(f"{f}: missing <link rel=canonical> (recommended on every page)")

# ---- SOFT: newsletter prose informational counts ----
nl_em = nl_pbs = 0
for f in glob.glob("newsletters/**/*.md", recursive=True):
    s = open(f, encoding="utf-8").read()
    nl_em += s.count(EMDASH)
    nl_pbs += len(BARE_PBS.findall(s))
if nl_em:
    soft.append(f"newsletters/: {nl_em} em-dash occurrences (mostly image-prompt/specs; review only if in published Substack prose)")
if nl_pbs:
    soft.append(f"newsletters/: {nl_pbs} bare 'PBS' occurrences (acceptable in image prompts / LinkedIn-anchor copy; not in Substack PART 1/1B prose)")

# ---- report ----
print(f"== PBS brand/schema lint == ({len(site)} site pages checked)")
for w in soft:
    print(f"  warn: {w}")
if hard and "--soft-only" not in sys.argv:
    print()
    for h in hard:
        print(f"  FAIL: {h}")
    print(f"\n{len(hard)} hard violation(s).")
    sys.exit(1)
print(f"\nclean: 0 hard violations ({len(soft)} soft warning(s)).")
sys.exit(0)
