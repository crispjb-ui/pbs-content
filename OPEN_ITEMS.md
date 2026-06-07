# OPEN ITEMS — pending builds & decisions

_Surfaced by `/pipeline-health` so nothing gets lost between sessions. Remove an item when it ships._

## 🟡 Email funnel: role-segmentation + closing layer (PENDING — plan approved)
Plan committed at `email_gated_toolkit/role_funnel_plan.md`. Decisions locked: booking = `team@rxbs.org` mailto (no external tool); speed-to-lead alerts email **brett@rxbs.org + ginny@rxbs.org**. Not yet built.

**Build order (Zapier/Wix):**
1. Closing layer first (½ day): score step → SQL filter (≥60) → alert email to brett@/ginny@ → pipeline tracker row.
2. Wix form: add **CEO/Owner** role + **company-size** field.
3. Role-branch Email 5 (copy is written in the plan), then Email 4 CTA, then Emails 1-3 + the broker partner fork.

**Decision:** pipeline tracker = **Google Sheets** (locked, no Airtable).
**Spec is written and ready: `email_gated_toolkit/closing_layer_spec.md`** (copy-into-Zapier, ~½ day). **Build target: Monday.** Monday order: (1) create + seed the Google Sheet, (2) add `ceo` role + `size` field to the Wix form, (3) add the score step + Sheets row to the existing Zap, (4) build the 3-step alert Zap, (5) run the 4 tests. Role-branched email copy (in `role_funnel_plan.md`) is Phase 2, after the alert/tracking layer is live.

## 🟢 Brand-awareness pushes (specs ready, activate when bandwidth allows)
- **Podcast outreach sprint** — `podcast_outreach_sprint.md`. Activate: 2-3 pitches/week using the "as seen on Potter + Derm Docs" credential, off the 49-show list in `podcast_pitching_guide.md`; every appearance CTAs to a toolkit (feeds the funnel). Highest-trust reach lever; ready to start.
- **Proprietary data report** — `pbm_contract_data_report_spec.md`. The flagship "what we see across hundreds of contracts" report (qualifiers, never fabricated %). Needs the lightweight review-tally to feed real numbers; then quarterly + annual flagship, gated + PR-pitched.

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
