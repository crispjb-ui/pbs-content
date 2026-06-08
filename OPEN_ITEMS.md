# OPEN ITEMS — pending builds & decisions

_Surfaced by `/pipeline-health` so nothing gets lost between sessions. Remove an item when it ships._

## 🟡 Email funnel: role-segmentation + closing layer (SPEC + CODE READY — build in Wix/Zapier)
Decisions locked (Jun 8): **6 declarative roles** (CEO / CFO / HR / Benefits mgr / Broker / Other — no "just researching"); **employee-count field shows for buyers only** (hidden for Broker/Other); **contextual offering by role** (CEO=exposure read, CFO=spend pressure-test, HR=member-friendly audit, Benefits mgr=audit-rights check, Broker=partner track, Other=nurture); booking = `team@rxbs.org` mailto; alerts → **brett@ + ginny@**; tracker = **Google Sheets**.

**Specs + code in-repo (paste into Wix/Zapier):**
- `email_gated_toolkit/role_funnel_plan.md` — 6 roles, buyer-only size, scoring, contextual offerings, the Code-by-Zapier scorer, full role-branched Email 5 copy.
- `email_gated_toolkit/closing_layer_spec.md` — Google Sheet schema, main-Zap row write, separate speed-to-lead alert Zap, 6-role test matrix.
- `velo_toolkit_page_code.js` — 6-option Role dropdown + buyer-only `#inputSize` with role-driven show/hide; passes `size`.
- `velo_backend_toolkitLead.web.js` — persists `size` (flows to Zapier via `...lead` spread).

**Monday build order (Wix/Zapier — Claude can't click these):** (1) add Role dropdown (6 exact strings) + `#inputSize` dropdown inside `#sizeBox` (Collapsed on load); add `size` Text field to ToolkitLeads; Publish. (2) Create + seed the "PBS Toolkit Leads" Google Sheet (header in the spec; seed the 3 live leads + the CPO intro). (3) Add the Code scorer + Sheets row to the existing Zap. (4) Build the separate alert Zap (filter tier in SQL,PARTNER → email brett@/ginny@). (5) Run the 6-role test matrix. Contextual Email 4/5 copy is Phase 2 after the alert/tracking layer is live.

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
