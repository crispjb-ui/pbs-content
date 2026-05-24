#!/usr/bin/env python3
"""Render toolkit-PDF images: the Wix landing-page preview and an X/social crop.

Two artifacts, both rendered from page 1 of the toolkit PDF (which is itself a
render artifact of the HTML), so they stay in sync: re-run whenever the toolkit
HTML/PDF changes.

1. PREVIEW (default): <name>_preview.png, full page 1 at 150 DPI (1275x1650 on
   US Letter). This is the "product shot" for the Wix toolkit landing-page hero
   and the Toolkit Library Repeater cards. Required synced artifact — commit
   alongside the .html and .pdf.

2. X CROP (--x): <name>_x.png, a 1:1 square crop of the top of page 1 (header +
   title + subtitle + first section), sized for the X / social timeline where
   portrait pages get letterboxed. On-demand reusable visual library for X
   posts — not a required per-commit artifact.

Usage:
    python3 render_preview.py week_18_channel_pricing_audit_worksheet.pdf
    python3 render_preview.py --all              # preview PNGs for every *.pdf
    python3 render_preview.py --x <name>.pdf     # X square crop for one
    python3 render_preview.py --x --all          # X crops for every *.pdf
"""
import sys
import glob
import os
import fitz  # pymupdf

DPI = 150


def render_preview(pdf_path):
    out = pdf_path[:-4] + "_preview.png"
    doc = fitz.open(pdf_path)
    doc[0].get_pixmap(dpi=DPI).save(out)
    print(f"{out}  ({round(os.path.getsize(out) / 1024)} KB)")


def render_x_crop(pdf_path):
    """1:1 square crop of the top of page 1, for the X / social timeline."""
    out = pdf_path[:-4] + "_x.png"
    doc = fitz.open(pdf_path)
    pix = doc[0].get_pixmap(dpi=DPI)
    side = pix.width  # square edge = page width; crop the top `width` pixels tall
    crop_h = min(side, pix.height)
    # pymupdf Pixmap supports irect-based construction for cropping
    clip = fitz.IRect(0, 0, pix.width, crop_h)
    cropped = fitz.Pixmap(pix, pix.width, crop_h, clip) if False else None
    # Simpler/robust: re-render the page restricted to the top clip rect.
    page = doc[0]
    rect = page.rect
    top_clip = fitz.Rect(rect.x0, rect.y0, rect.x1, rect.y0 + rect.width)
    pix2 = page.get_pixmap(dpi=DPI, clip=top_clip)
    pix2.save(out)
    print(f"{out}  ({round(os.path.getsize(out) / 1024)} KB)  {pix2.width}x{pix2.height}")


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    x_mode = "--x" in args
    args = [a for a in args if a != "--x"]
    if args and args[0] == "--all":
        targets = sorted(glob.glob("*.pdf"))
    else:
        targets = args
    for t in targets:
        if not t.endswith(".pdf"):
            print(f"skip (not a pdf): {t}")
            continue
        if x_mode:
            render_x_crop(t)
        else:
            render_preview(t)


if __name__ == "__main__":
    main()
