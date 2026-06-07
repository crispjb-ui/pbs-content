---
description: Quarterly deep landscape research on the PBM / pharmacy-benefits world, then feed it back into the content system — auto-apply safe sourced updates (shocking-fact bank, X recipe bank), and propose strategy-level changes (new topics, Potter pieces) for review. The deep, expansion counterpart to the monthly /system-audit (which only maintains).
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch, WebFetch
---

You are running the PBS quarterly landscape research and turning it into content improvements. Read `CLAUDE.md` first (voice, brand rules, no-fabrication). This is heavier and broader than the monthly `/system-audit`: the audit *verifies and prunes* what exists; this *researches the quarter and expands* the inputs.

## Step 1 — Deep research (cited)
Run the deep-research harness (the `/deep-research` skill, or fan out WebSearch + WebFetch and adversarially verify) on this fixed question:

> What are the most significant PBM / pharmacy-benefits developments of the past quarter that matter to self-funded employers? Cover: FTC and other regulatory actions; federal + state PBM legislation; major lawsuits/settlements; vertical-integration / M&A moves; newly-surfaced PBM mechanisms or "hidden structure" facts (offshore aggregators, GPO fee layers, copay maximizer vendors, routing schemes, etc.); drug-pricing shifts (GLP-1, biosimilars, specialty); and what the transparency ecosystem (FTC, Drug Channels, 46brooklyn, Cuban/Ciaccia/Fein, Potter) is focused on now.

Write a cited report to `research/landscape_<YYYY>_Q<n>.md`: 6–10 developments, each with what happened, the source link, and the employer/plan-sponsor implication. No fabricated figures; cite every number.

## Step 2 — Auto-apply the safe, additive content updates
These are low-risk and sourced, so apply them and commit:
- **`shocking_fact_bank.md`:** add any genuinely-unknown, sourced structural facts the research surfaced (full entry format: fact + citation + paste-ready LinkedIn/X hooks + which week/pillar fits). Retire any entry that has become common knowledge (move it to the recipe bank as a standard decoder). Verify/refresh figures on existing entries.
- **`x_recipe_post_bank.md`:** add any newly-nameable PBM program as a recipe (7-ingredient format).
- Note in each: source + date, so it's traceable.

## Step 3 — Propose (do NOT auto-apply) the judgment-level changes
Write these to the report's "Recommended actions" section AND to `OPEN_ITEMS.md` for Ginny's review — do not silently rewrite strategy:
- **New week topics / calendar additions** for the upcoming quarter (an emerging theme worth a Monday deep dive or a Thursday breakout), with where it fits the seasonal arc and the plan-sponsor calendar.
- **New Potter pieces** if a development warrants a series chapter — respect the Series Narrative Arc (callback/handoff/map anchor) in `wendell_potter_piece_outlines.md`.
- **Shape/strategy shifts** the data implies (a topic getting hot, a format to lean into, an amplifier focus).
- A flagship **data-report** angle if the quarter's patterns suggest one (`pbm_contract_data_report_spec.md`).

## Step 4 — Commit + report
Commit the research report + the safe bank updates (the proposals stay as text in OPEN_ITEMS, not auto-built). Report: the 3 biggest developments, what was auto-added to the banks, and the top proposals awaiting Ginny's go.

**Autonomy boundary (important):** facts and recipes are additive + sourced → auto-apply. New topics, Potter pieces, and strategy pivots are judgment calls → propose only. The weekly `/build-week` then naturally picks up the refreshed fact bank on its next run, so approved content improvements flow automatically; the strategy changes wait for a human yes.
