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

## Step 4 — Verify (the bleed gate)
Run the canonical audit over ALL toolkits (not just the ones rendered — catches regressions anywhere):
```
cd templates/documents && python3 _audit_pdfs.py
```
- It MUST report **0 flagged**. The script checks: page count vs the 2pp / approved-3pp expectation, footer present on every page, and no body text overlapping the footer band.
- Any flag is a regression to fix before commit (box-model bleed: strip `overflow:hidden`, KEEP `height:11in`, trim spacing — CLAUDE.md "Build-correct-first gate"). Re-render and re-run until 0 flagged.
- The 4 approved 3-page exceptions live in the script's `EXPECT3` set; extend it only with a documented reason.
- Confirm each `<name>_preview.png` was produced.

## Step 5 — Report + commit
List each toolkit rendered, its page count, and any over-2-page flags. If run interactively, `git add` the HTML+PDF+PNG triplet(s) and commit together (CLAUDE.md: never let HTML/PDF/PNG diverge on main); mention the HTML change + the re-render in the message. If run in CI, leave the commit to the workflow step.
