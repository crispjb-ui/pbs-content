# Wix Toolkit Library — Step-by-Step Build Runbook

_Reconciled to current state (Jun 2026): 26 Tier 2 items imported with text fields; 4 live + funnelling (channel-pricing, biosimilar, midyear-claims, specialty-routing); Tier 1 not loaded; a repeater exists but shows stock photos + too much text + duplicate "Start Here" cards. This fixes all of that. Do the phases in order._

**Rule the whole time:** do NOT overwrite the `pdf_url` or `preview_image` of the 4 live items. Everything below is additive or page-side.

---

## PHASE 0 — Back up + confirm fields (5 min)
1. **CMS → Toolkits → More Actions → Export.** Save the file. (Instant rollback if anything goes sideways.)
2. **CMS → Toolkits → Manage Fields.** Add only the two missing fields:
   - `pillar` — **Text**
   - `card_desc` — **Text**
   **Use the existing native `Image` field for the thumbnail — do NOT create a separate `preview_image` field** (the 4 live items already populate `Image` with the toolkit cover; that's the product shot). Anywhere this runbook says `preview_image`, use the existing **Image** field instead.
   Confirm these already exist: `tier`, `is_featured`, `is_archived`.

## PHASE 1 — Bulk-fill pillar + card_desc (one import, 5 min)
3. **CMS → Toolkits → More Actions → Import CSV** → `email_gated_toolkit/tier2_pillar_carddesc_update.csv`.
4. When prompted, choose **Update existing items**, match on **Title**.
   - This file has ONLY Title + pillar + card_desc, so it fills those two fields for all 26 and **cannot touch** your live `pdf_url`s or images. Verify a couple items afterward.

## PHASE 2 — Upload all media once (10 min)
5. **Media Manager → Upload** → drag in **all 29 `*_preview.png`** (from `templates/documents/`) in one batch.
6. Drag in **all 29 `*.pdf`** in one batch.
   (Uploading everything up front is faster than uploading inside each item.)

## PHASE 3 — Fill each item's image + PDF link (the grind, ~1 hr)
For every Tier 2 item (**skip the 4 live ones except to add their `preview_image` if missing**):
7. CMS → Toolkits → click the item.
8. **preview_image** → click the tile → choose the matching `<name>_preview.png` from Media.
9. **pdf_url** → in Media, click the item's PDF → **Copy URL** → paste into `pdf_url`. (This clears the old red "[Upload…]" placeholder error.)
10. **is_archived** = unchecked (visible). Leave `second_toolkit_*` and `field_note_*` **blank for now** — those are email-funnel only, not shown on the library.
11. **Save.**

> Tip: keep two browser tabs, one on the CMS item, one on Media, to copy URLs fast. Match by the slug in the filename (e.g., `week_21_quarterly_reporting_checklist` → the Quarterly Reporting item).

## PHASE 4 — Load Tier 1 (3 items, 15 min)
12. **CMS → Toolkits → Add Item** ×3 (or import `toolkits_csv_for_wix_import.csv` and update/create). Create:
    - Contract Review Readiness Checklist
    - Optimize Existing vs Go-to-Market Decision Framework
    - Pharmacy Benefit Review Framework
13. For each: set `tier` = **1**, `is_featured` = **TRUE**, `pillar` = **Foundational**, fill `card_desc` (from `toolkit_dataset.md`), upload its `preview_image`, paste its `pdf_url`, and the rich fields (eyebrow/headline/etc. are in `toolkit_dataset.md`). Save + **Publish** each.

## PHASE 5 — Fix the page (datasets + card bindings)
Open **Editor → Toolkit Library page.**

### 5a. Strip the card down to the mockup
14. On the card inside the **Start Here** repeater: **delete** the eyebrow, headline, headline_emphasis, and subtitle text elements, and **delete the scenic/stock background image**. Keep only: one **Image** element, one **Title** text, one **card_desc** text, one **Button**.

### 5b. Bind the Start Here repeater
15. Select the repeater → **Connect to Data** (plug icon) → **Create Dataset** → collection **Toolkits** → mode **Read-only**. Name it `dsStartHere`.
16. Select that dataset → **Settings → Filter → Add Filter:** `tier` **is** `1` (or `is_featured` is `true`). Set **items to display** = 3.
17. Bind the card elements (select each → **Connect to CMS** icon):
    - **Image** → "Image connects to" = **preview_image**; alt text = `image_alt_text` (or Title).
    - **Title text** → "Text connects to" = **Title**.
    - **card_desc text** → "Text connects to" = **card_desc**.
    - **Button** → "Link connects to" = **Toolkits item** (the connected dynamic page); label = static "Get the framework".
18. The 3 Start Here cards now show Contract Review Readiness / Optimize vs Go-to-Market / PBR, each with its own preview.

### 5c. Tier 2 — pick one layout
**Simplest (launch this first):** one repeater, all Tier 2 in a grid.
19. Select the Tier 2 repeater → Connect to Data → **new dataset** `dsToolkits` → Toolkits, Read-only.
20. Dataset **Filter:** `tier` is `2` **AND** `is_archived` is `false`. **Sort:** by `pillar` (A→Z), then Title.
21. Bind the same four elements as 5b (image→preview_image, title→Title, desc→card_desc, button→Toolkits item, label "Get the worksheet"). Strip extra text/stock image as in 14.

**Optional (nicer, do later):** group by pillar = duplicate the Tier 2 repeater 5×, each with its own dataset filtered `pillar is "<Pillar Name>"`, with a section heading above each. Same bindings.

## PHASE 6 — QA (15 min)
22. **Preview.** Confirm: every card shows its real preview image (no deserts), correct Title + one-line desc, and "Get the…" links to that toolkit's `/toolkit/<slug>` page.
23. Click into 2–3 toolkit pages; submit a **test form** on one not-yet-live toolkit → confirm Email 1 delivers the right PDF (use a filter-free Gmail).
24. Toggle to **mobile** view in the editor; confirm cards stack and text is legible (no text-over-photo).

## PHASE 7 — Go live
25. Add **Toolkit Library** (and **Insights**) to the **site menu** (Editor → Menus & Pages).
26. **Publish.**

---

### Field-binding quick map (card)
| Card element | CMS field | Notes |
|---|---|---|
| Image | `preview_image` | the product shot; alt = `image_alt_text` |
| Title text | `Title` | bold, Primary Blue |
| Description text | `card_desc` | one line |
| Button | link → **Toolkits item** (dynamic page) | label static ("Get the worksheet") |
| (do NOT put on card) | eyebrow / headline / headline_emphasis / subtitle | these belong on the landing page only |

### Dataset filters
| Repeater | Filter | Display |
|---|---|---|
| Start Here | `tier` = 1 (or `is_featured` = true) | 3 |
| Tier 2 (single) | `tier` = 2 AND `is_archived` = false | all, sort by `pillar` |
| Per-pillar (optional) | `pillar` = "<name>" AND `is_archived` = false | all |

### Defer (email funnel only — not needed to publish the library)
`pdf_url` is needed for delivery; `second_toolkit_name/pdf_url/blurb` and `field_note_title/url/blurb` are only used by Emails 2–3 and can be filled per toolkit as each funnel activates.
