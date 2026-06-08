# OPEN ITEMS — pending builds & decisions

_Surfaced by `/pipeline-health` so nothing gets lost between sessions. Remove an item when it ships._

## 🗓️ NEXT SESSION PLAN (set Jun 8 eve, for Jun 9) — run in this order
1. **Load Tier 1 foundational toolkits into Wix.** 3 toolkits fully built (HTML/PDF/preview PNG/X PNG all present in `templates/documents/`: `evergreen_contract_review_readiness_checklist`, `evergreen_optimize_vs_go_to_market_decision_framework`, `evergreen_pbr_pharmacy_benefit_review_framework`). Rows spec'd in `email_gated_toolkit/toolkit_dataset.md`; bulk-import CSV is `email_gated_toolkit/toolkits_csv_for_wix_import.csv`. Wix work: upload the 3 PDFs + preview PNGs to Media; import/add the 3 CMS rows; add a **"Start Here · Foundational Frameworks"** section on the Toolkit Library page above the Tier 2 Repeater; verify each `rxbs.org/toolkit/<slug>` renders + the role-segmented form fires (now that the funnel is live).
2. **Load the remaining Tier 2 toolkits.** Bulk-import CSV ready: `email_gated_toolkit/tier2_toolkits_for_wix_import_no_specialty.csv` (24 toolkits + header; the `_no_specialty` variant is the one to use unless specialty is wanted). Upload each toolkit's PDF + preview PNG to Media, populate `pdf_url`/`preview_image`, confirm landing pages render.
3. **Revise the Toolkit Library mobile view.** Mockup at `website_mockups/toolkit-library.html`. Tighten the Repeater/cards for phone width (card stacking, tap targets, hero preview image legibility). Claude can produce a mobile-spec + revised mockup; Wix layout is the user's clicks.
4. **Revise the PBS website.** `website_audit.md` (paste-ready fixes) + direction mockups `website_mockups/{home,v2_editorial,v3_decoder,v4_conversion,v5_data}.html`. **Decision still open:** which homepage direction (recommended V3 Decoder or V2 Editorial). Pick the direction first, then build it out + the Wix build guide.

_Prep Claude can do ahead of time if asked: confirm CSV columns match the live Wix Toolkits collection schema; render any missing preview PNGs; draft the Toolkit Library mobile spec; build out the chosen website direction._

## 🟢 Email funnel: role-segmentation + closing layer — LIVE (built Jun 8, 2026)
The role-segmented funnel + closing layer is **built and live in Wix/Zapier/Sheets**. What shipped this session:
- **Wix form** (custom Velo, live path): 6-role dropdown + always-visible `#inputSize` (5 bands), buyer-only *requirement* via validate(); `showSizeForBuyersOnly:false` (Wix classic wouldn't reflow the collapse gap, so size shows for all; scorer ignores non-buyer size). Backend persists `size`; CMS `ToolkitLeads.size` field added. Published.
- **Zap #1 (main, "...email flow"):** Catch Hook → CMS GET → **Code-by-Zapier scorer** (keyword role match + numeric size; outputs role_key/branch/score/tier/alert/offer_*) → **Google Sheets Create Row** (writes branch/score/tier, status=new) → existing 5-email sequence. Scorer uses `return {...}` (Zapier Run JS format).
- **Google Sheet "PBS Toolkit Leads" / Leads tab:** 14-col header, 4 dropdowns (branch/tier/status/owner at row 2+), 5 conditional-format tier colors at `A2:N1001` (`=$I2="SQL"` green, PARTNER blue, MQL amber, LEAD/NURTURE gray). Dashboard tab with COUNTIFs.
- **Zap #2 ("Hot Lead Notification"):** Google Sheets New Row → Filter (tier = SQL OR PARTNER) → Email by Zapier → brett@ + ginny@, reply-to = lead email, subject/body with score legend.

**⚠ Confirm before relying on it:** both Zaps **Published** (not Draft); run one **live end-to-end test** (submit form fresh as a CFO via "Not you?"/cleared storage → expect scored row + real brett@/ginny@ alert).

**Phase 2 — contextual emails by role (BUILT Jun 8 eve; pending the user's Zapier paste):** the production scorer (`role_funnel_plan.md` §5) now embeds the full role-branched Email 5 body in each `OFFER.body` and returns it as **`email5_body`** — no Zapier Paths needed (free-tier safe). To finish in Zapier: (1) add a 4th Code-step input `first_name` (← Catch Hook First Name); (2) paste the extended scorer over the existing Code step; (3) Email 5 Body = `{{email5_body}}` + fixed signature, Email 5 Subject = `{{offer_headline}}`; (4) optional Email 4: drop `{{offer_headline}}`/`{{offer_cta}}` near its CTA. Re-test (CEO → SQL/55 + a CEO-specific email5_body) and Publish Zap #1.

**Optional polish (none blocking):** add the `#editInfoLink` "Not you?" element to the toolkit page (returning visitors can switch identity); auto-fill the sheet `date` column (one formula or a Zapier value); add the `toolkit` line back to the alert once a live lead carries it.

## 🟢 Brand-awareness pushes (specs ready, activate when bandwidth allows)
- **Podcast outreach sprint** — `podcast_outreach_sprint.md`. Activate: 2-3 pitches/week using the "as seen on Potter + Derms on Drugs" credential, off the 49-show list in `podcast_pitching_guide.md`; every appearance CTAs to a toolkit (feeds the funnel). Highest-trust reach lever; ready to start.
- **Proprietary data report** — `pbm_contract_data_report_spec.md`. The flagship "what we see across hundreds of contracts" report (qualifiers, never fabricated %). Needs the lightweight review-tally to feed real numbers; then quarterly + annual flagship, gated + PR-pitched.
- **Podcast → social clips** — `/clip-podcast` (YouTube link/transcript → 3-5 clip plan + per-platform copy + funnel CTA) + `social_clips/remotion_pbs_caption_template_spec.md` (build the branded caption template once in the Remotion project). Works off the public YouTube version — no host raw file needed. The repurposing engine for the podcast sprint.

- **Website (rxbs.org) fixes** — `website_audit.md`. The funnel front door (Toolkit Library) exists but is buried in "More," unfinished (empty Tier-1 cards, low-contrast), the newsletter page is blank, and 3 pages show the default "Mysite" SEO title. Paste-ready fixes in the doc (titles/metas, hero CTA, promote Free Tools + Newsletter to main nav, proof + capture blocks, Contact reframe). Highest quick win: the title/meta set.

## 🤝 Warm leads & earned-media (track to close)
- **Chief People Officer intro (NEW, Jun 8 2026)** — the host of **Derms on Drugs** (Dr. Matthew Zirwas) is **introducing PBS to a Chief People Officer**. Warm, referred, decision-maker-tier lead. Next step: confirm the intro lands (email/call), send Ginny's one-line value frame + a relevant toolkit as the soft open, log into the pipeline tracker as a referred SQL when the funnel sheet goes live Monday. Highest-quality lead type (referred + senior + benefits-owner).
- **Derms on Drugs guest spot** — Ginny booked/appearing on Dr. Zirwas's podcast. Reciprocal: the W23 Wed "A Dermatologist Explained PBMs Better Than Anyone in Pharmacy" POV post (Zirwas analogy, used with permission) is the on-platform tie-in. Feeds the "as featured on" credential across the website + podcast-sprint pitches. Clip it via `/clip-podcast` once the YouTube version posts.
- **3 active lead calls** — all three engaged, still working to close. Keep warm; route each to the relevant toolkit + booking mailto.

## ⚙️ Automation cadence (scheduled workflows live)
- **`/critique` → weekly** (Sun) via `.github/workflows/weekly-critique.yml`: auto-critiques the next week to ship, commits a report to `critique_reports/`.
- **`/system-audit` → monthly** (1st) via `.github/workflows/monthly-system-audit.yml`: anti-rot + fact-bank refresh, commits safe fixes + report to `audit_reports/`.
- **`/log-metrics` → manual weekly** (needs Ginny to paste the week's numbers; no auto-run possible). The monthly audit flags if the tracker goes stale.
- **`/quarterly-research` → quarterly** (1st of Jan/Apr/Jul/Oct) via `.github/workflows/quarterly-research.yml`: deep PBM-landscape research → auto-adds sourced facts/recipes to the banks, proposes new topics/Potter pieces to OPEN_ITEMS. The weekly build then picks up the refreshed facts automatically.
- **`/session-digest` → AUTO** via SessionStart hook (this repo): `.claude/settings.json` + `.claude/hooks/session_digest_check.sh`. At session start, if undigested transcripts exist in `~/.claude/projects/`, it prompts the digest → captures decisions/rules into CLAUDE.md + OPEN_ITEMS, commits, updates `.claude/.last_digest`. Reads the JSONL transcripts directly. **⚠ VERIFY the first auto-run actually fires** on the next session start (depends on `~/.claude` persisting across container resets). Can't be a GitHub Action (transcripts aren't in the repo).
- Already scheduled: weekly roundup, weekly build-pipeline.

## 🔴 Wendell Potter cascade topic conversions (ON HOLD)
Cascade-week topic alignment (`wendell_potter_cascade_alignment.md`) is gated on two inputs from Ginny: **(1) confirmed WP publish day**, **(2) the Opening piece pull-quote/thesis line**. When both land: re-anchor the schedule and wire the cascade reference-back + same-day cross-promo into the week files.

## ✅ Recently closed (for reference)
- W23-W37 rolled through the build system; W26/W35 Tuesday posts built; Library numbering resolved (W25=04, W27=05, W33=06). Hardwired build system + 3 production skills + scheduled pipeline shipped.
