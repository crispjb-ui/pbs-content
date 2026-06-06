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

## 🔴 Wendell Potter cascade topic conversions (ON HOLD)
Cascade-week topic alignment (`wendell_potter_cascade_alignment.md`) is gated on two inputs from Ginny: **(1) confirmed WP publish day**, **(2) the Opening piece pull-quote/thesis line**. When both land: re-anchor the schedule and wire the cascade reference-back + same-day cross-promo into the week files.

## ✅ Recently closed (for reference)
- W23-W37 rolled through the build system; W26/W35 Tuesday posts built; Library numbering resolved (W25=04, W27=05, W33=06). Hardwired build system + 3 production skills + scheduled pipeline shipped.
