import fitz, re, glob, os

# 1-page by design: relationship/one-pager documents (not audit worksheets)
EXPECT1 = {
    "broker_partner_one_pager",  # Broker Partner Program one-pager (Jul 3, 2026, broker_partner_track.md)
    "independence_attestation",  # Client-facing independence attestation, 1-page letter (Jul 22, 2026, standards_independence_attestation.md §2)
}
EXPECT3 = {
    "evergreen_contract_review_readiness_checklist",
    "evergreen_optimize_vs_go_to_market_decision_framework",
    "evergreen_pbr_pharmacy_benefit_review_framework",
    "week_24_thursday_contract_amendment_letter",
}
FOOT = re.compile(r"rxbs\.org|Benefit Blind Spots", re.I)
PGNUM = re.compile(r"^\s*(page\s*)?\d+\s*((of|/)\s*\d+)?\s*$", re.I)

rows = []
for pdf in sorted(glob.glob("*.pdf")):
    base = pdf[:-4]
    expect = 3 if base in EXPECT3 else (1 if base in EXPECT1 else 2)
    doc = fitz.open(pdf)
    n = doc.page_count
    flags = []
    for i, pg in enumerate(doc):
        H = pg.rect.height
        foot_rects = pg.search_for("rxbs.org") or pg.search_for("Benefit Blind Spots")
        # footer lives in the bottom quarter of the sheet; in-body rxbs.org
        # mentions (contact lines, toolkit links) must not masquerade as it
        foot_rects = [r for r in foot_rects if r.y0 > H * 0.75]
        foot_top = min((r.y0 for r in foot_rects), default=None)
        # lowest body text (exclude footer + page-number-only blocks)
        body_max = 0.0
        for b in pg.get_text("blocks"):
            x0,y0,x1,y1,txt = b[0],b[1],b[2],b[3],b[4]
            t = (txt or "").strip()
            if not t: continue
            if FOOT.search(t) or PGNUM.match(t): continue
            body_max = max(body_max, y1)
        if foot_top is None:
            flags.append(f"p{i+1}: NO FOOTER")
        else:
            # content overlapping/under the footer band
            if body_max > foot_top + 2:
                flags.append(f"p{i+1}: body overlaps footer (body {body_max:.0f} > footer {foot_top:.0f})")
            # footer itself within ~12pt of sheet bottom edge = clip risk
            foot_bottom = max(r.y1 for r in foot_rects)
            if foot_bottom > H - 6:
                flags.append(f"p{i+1}: footer at sheet edge ({foot_bottom:.0f}/{H:.0f})")
        # near-empty trailing page (bleed remnant)
        if i == n-1 and i+1 > expect:
            chars = len(pg.get_text("text").strip())
            flags.append(f"p{i+1}: EXTRA PAGE ({chars} chars)")
    if n != expect and not any("EXTRA PAGE" in f for f in flags):
        flags.append(f"page count {n} (expected {expect})")
    doc.close()
    status = "OK" if not flags else "FLAG"
    rows.append((status, base, n, expect, flags))

# print: flagged first
rows.sort(key=lambda r: (r[0]=="OK", r[1]))
nflag = sum(1 for r in rows if r[0]=="FLAG")
print(f"=== TOOLKIT PDF AUDIT — {len(rows)} files, {nflag} flagged ===\n")
for status, base, n, expect, flags in rows:
    if status == "FLAG":
        print(f"[FLAG] {base}  ({n}pp, expect {expect})")
        for f in flags: print(f"        - {f}")
print("\n--- clean ---")
for status, base, n, expect, flags in rows:
    if status == "OK":
        print(f"  OK  {base}  ({n}pp)")
