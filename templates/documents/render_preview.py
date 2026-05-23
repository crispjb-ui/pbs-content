#!/usr/bin/env python3
"""Render page 1 of a toolkit PDF to a web preview PNG for the Wix landing page.

The preview is the "product shot" shown in the toolkit landing-page hero and on
the Toolkit Library Repeater cards. It is a render artifact of the PDF (which is
itself a render artifact of the HTML), so it must stay in sync: re-run whenever
the toolkit HTML/PDF changes.

Usage:
    python3 render_preview.py week_18_channel_pricing_audit_worksheet.pdf
    python3 render_preview.py --all          # every *.pdf in this directory

Output: <name>_preview.png at 150 DPI (1275x1650 on US Letter). Commit the PNG
alongside the .html and .pdf. Upload to Wix Media and select it in the toolkit's
CMS row `preview_image` cell.
"""
import sys
import glob
import os
import fitz  # pymupdf

DPI = 150


def render(pdf_path):
    if not pdf_path.endswith(".pdf"):
        print(f"skip (not a pdf): {pdf_path}")
        return
    out = pdf_path[:-4] + "_preview.png"
    doc = fitz.open(pdf_path)
    doc[0].get_pixmap(dpi=DPI).save(out)
    kb = round(os.path.getsize(out) / 1024)
    print(f"{out}  ({kb} KB)")


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    if args[0] == "--all":
        targets = sorted(glob.glob("*.pdf"))
    else:
        targets = args
    for t in targets:
        render(t)


if __name__ == "__main__":
    main()
