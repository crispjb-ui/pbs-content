# Wix Build Checklist — Toolkit Library Revamp

_Paint-by-numbers manual steps to ship the revamped Toolkit Library in Wix. Claude produces the blueprint + data; these are the click-steps a human does in the Wix editor. Created Jun 9, 2026._

**Blueprint:** `website_mockups/toolkit-library-v2.html` (open in a browser for the exact look — desktop tiles + mobile rows, real product-shot cards, Start-Here + pillar groups).
**Data source of truth:** `email_gated_toolkit/toolkit_dataset.md` → "Library display fields" table (pillar + preview_image + card_desc for all 29).
**Assets:** `templates/documents/*.pdf` (the toolkit) and `templates/documents/*_preview.png` (the card thumbnail).

---

## Phase A — Add the 3 new collection columns (one-time)

The funnel already uses the `Toolkits` collection. The revamp needs three fields it didn't:

- [ ] Open **CMS → Toolkits** collection → **Manage Fields**.
- [ ] Add field `pillar` — **Text**. (Not in the import CSV; fill from the dataset mapping table.)
- [ ] Add field `card_desc` — **Text**. (Short library-card line; from the mapping table.)
- [ ] Add field `preview_image` — **Image** (NOT URL/Text). This is the product-shot thumbnail.
- [ ] Confirm these already exist (from the funnel CSV): `tier`, `is_featured`, `is_archived`, `slug`, `name`/`Title`, `pdf_url`, `pillar`-adjacent display fields.

> One-time page binding (done once, applies to every row afterward): on the library Repeater, bind the card image element to `preview_image`; on the dynamic landing page hero, bind its image element to `preview_image` too.

---

## Phase B — Load the rows (Tier 1 first, then Tier 2)

**Tier 1 (3 rows) — do these first, they're fully spec'd and high-value:**
- [ ] Import or hand-enter the 3 Tier 1 rows from `toolkit_dataset.md` (contract-review-readiness, optimize-vs-go-to-market, pbr-framework). Set `tier=1`, `is_featured=TRUE`, `pillar=Foundational`.
- [ ] For each, fill `card_desc` from the mapping table.

**Tier 2 (26 rows) — bulk:**
- [ ] CMS → Toolkits → **Import CSV** → `email_gated_toolkit/tier2_toolkits_for_wix_import.csv` (use the `_no_specialty` variant only if you're intentionally dropping the specialty-routing row).
- [ ] After import, the CSV does **not** include `pillar` or `card_desc` — add them per the mapping table (26 quick cells, or re-export the CSV with the two columns appended first).

> Loading a row instantly lights up its landing page + 5-email funnel, independent of the library page. So even partial loads are productive.

---

## Phase C — Upload the assets to Wix Media

For each toolkit row:
- [ ] Upload `templates/documents/<base>.pdf` to **Media Manager** → paste its public URL into the row's `pdf_url` cell. (Channel Pricing + the 2nd-toolkit PDFs already live — see dataset.)
- [ ] Upload `templates/documents/<base>_preview.png` to **Media Manager** → select it in the row's `preview_image` Image cell.

(`<base>` names are in the mapping table, e.g. `week_21_quarterly_reporting_checklist`.)

---

## Phase D — Build the library page (mirror the blueprint)

Match `toolkit-library-v2.html` section-for-section. The page chrome (nav + footer) should use whichever homepage direction is chosen (v2–v5); the card grid is the same across all four.

- [ ] Page header: H1 "Plan Sponsor Toolkit Library" + the lede line (copy from blueprint).
- [ ] Optional pillar quick-nav (anchor chips) — nice on desktop with 29 items.
- [ ] **Start Here section:** a Repeater filtered to `tier = 1` (or `is_featured = TRUE`). Star accent on the heading.
- [ ] **One Repeater per pillar** (or one Repeater grouped/filtered by `pillar`), in this order: PBM Contract Insights, Transparency & Industry Education, Cost Containment Strategies, Clinical Pharmacy Perspectives, Self-Funded Employer Guidance. (Broker/Consultant Resources has 0 — omit.)
- [ ] **Card design** (per blueprint): white card, 1px border; product-shot thumb on top (desktop) / small thumb left (mobile); Accent-blue corner triangle; "Free" tag; uppercase pillar label; bold Primary-Blue title; `card_desc`; Primary-Blue "Get the …" CTA with arrow.
- [ ] Card link → the toolkit's dynamic page `/toolkit/{slug}`.
- [ ] Hover state: subtle lift + Accent-blue border (desktop).

---

## Phase E — Brand QA + verify

- [ ] Colors only from the v2 system: Primary #015880, Accent #A7E0FA, Gray #4D4D4D, paper #FAFAF7, white. IBM Plex Sans (Plex Mono for any numerics).
- [ ] **Contrast fix (from mockups README):** any Accent-blue button gets Primary-Blue text, never white/light on Accent.
- [ ] Mobile check at ~390px: cards collapse to horizontal rows, thumbnails legible, titles not truncated awkwardly.
- [ ] Click 2–3 cards → confirm each lands on the right `/toolkit/<slug>` page with the matching hero `preview_image`.
- [ ] Submit one test form end-to-end → confirm Email 1 delivers the correct PDF (use a filter-free Gmail alias per the testing gotcha in WIX_SETUP_TODO.md).

---

## Data gotchas to clear (tracked, do not skip)

- [ ] **Channel Pricing `field_note_url`** is a confirm-placeholder (the old value was a wrong slug). Paste the real W18 "What We See When We Audit Channel Pricing" Substack URL before Email 3 ships to Channel Pricing leads.
- [ ] **Tier 1 `field_note_url`s** are placeholders (FN-03 / FN-05 / FN-10 not yet published). Email 3 for those 3 rows shouldn't ship until the Field Notes exist or the link is repointed.
- [ ] **`pillar` is editorial** — review the mapping table once; move any toolkit you'd bucket differently.

---

## What stays Claude's job vs yours

- **Claude (repo):** blueprint HTML, the dataset mapping, CSVs, PDFs + preview PNGs, this checklist, any copy edits.
- **You (Wix editor):** add the 3 columns, import the CSV, upload PDFs/PNGs to Media, drag the Repeaters + bind fields, set the nav/footer skin to the chosen direction, publish.
