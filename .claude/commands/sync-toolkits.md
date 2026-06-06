---
description: Re-render Plan Sponsor Toolkit PDFs and preview PNGs from their HTML so the HTML/PDF/PNG triplet never drifts. Run after editing any toolkit, or with --all to rebuild everything. Verifies 2-page count and footers.
allowed-tools: Bash, Read, Glob
---

You are keeping the toolkit artifacts in sync. Source of truth is the HTML in `templates/documents/`; the PDF and preview PNG are render artifacts that must match it (CLAUDE.md toolkit rules a, a2).

## Step 1 — Decide scope
- `$ARGUMENTS` empty or `--changed`: render only toolkits whose HTML is newer than its PDF, or staged/modified in git (`git status --porcelain templates/documents/*.html` + compare mtimes).
- `$ARGUMENTS` = `--all`: every `templates/documents/*.html`.
- `$ARGUMENTS` = a name/slug: just that toolkit.

## Step 2 — Ensure tools
```
cd templates/documents
python3 -c "import weasyprint" 2>/dev/null || pip install weasyprint
python3 -c "import fitz" 2>/dev/null || pip install pymupdf
```

## Step 3 — Render each in scope
For each `<name>.html`:
```
cd templates/documents
weasyprint <name>.html <name>.pdf
python3 render_preview.py <name>.pdf        # -> <name>_preview.png (150 DPI page 1)
```

## Step 4 — Verify
For each rendered PDF, check page count with pymupdf:
```
python3 -c "import fitz,sys; d=fitz.open('<name>.pdf'); print('<name>', d.page_count, 'pages')"
```
- Expect **2 pages** unless it is a documented 3-page exception (the three Tier-1 evergreen frameworks; `week_24_thursday_contract_amendment_letter`). Flag any other toolkit over 2 pages as a regression to fix (box-model bleed: strip `overflow:hidden`, keep `height:11in`, compress spacing — CLAUDE.md fix pattern).
- Spot-check page 1 and page 2 footers render (not clipped).
- Confirm `<name>_preview.png` was produced.

## Step 5 — Report + commit
List each toolkit rendered, its page count, and any over-2-page flags. If run interactively, `git add` the HTML+PDF+PNG triplet(s) and commit together (CLAUDE.md: never let HTML/PDF/PNG diverge on main); mention the HTML change + the re-render in the message. If run in CI, leave the commit to the workflow step.
