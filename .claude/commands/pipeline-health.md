---
description: Read-only pipeline status — how many weeks of material are built ahead, the next Potter/cascade week, upcoming toolkits to build, open ⚠ items in the next 4 weeks, and Q4 calendar coverage. Builds nothing; just reports.
allowed-tools: Bash, Read, Grep, Glob
---

You are printing the PBS content-pipeline health report. **Read-only — do not build or edit anything.**

## Step 1 — Buffer
1. `date +%Y-%m-%d` (America/New_York).
2. Current week: anchor **W25 Monday = 2026-06-22**; `current_week = 25 + floor((today - 2026-06-22)/7)`.
3. Highest built week: `ls newsletters/week_*.md` → max NN.
4. **Buffer depth = highest_built − current_week.** Healthy ≥ 4 (current + 3). Report green ≥4 / yellow 2-3 / red <2.

## Step 2 — Scan the next 4 weeks (current_week … current_week+3 that exist)
For each, from its week file:
- **⚠ open items** in the `## Weekly Run of Show` (slots without live content, retarget flags, unresolved Library numbering).
- **Toolkits due** (Monday tool / Thursday handout named in PART 1C) with no matching file in `templates/documents/` yet.
- **Run of Show present?** (flag any week still on the old `## Publishing Timeline` and not yet migrated.)
- **Shocking fact woven?** (flag if no `shocking_fact_bank.md` fact appears in the Thursday/Wed post.)

## Step 3 — Wendell / Potter
From `wendell_potter_cascade_alignment.md`: the **next Potter-publish week** and **next cascade week**; flag if either is inside the 4-week buffer (its alignment + cross-promo must be built).

## Step 4 — Calendar coverage
Is the Q3/Q4 calendar mapped far enough ahead for `/build-pipeline` to keep building (topic assigned beyond highest_built)? If not, say where it runs out.

## Step 5 — Output
A short dashboard:
```
PIPELINE HEALTH — <date>
Buffer: <depth> weeks ahead (current W<NN> · built through W<NN>) [GREEN/YELLOW/RED]
Next Potter publish: W<NN> (<in buffer?>) · Next cascade: W<NN>
Toolkits due (next 4 wks, not yet built): <list or none>
Open ⚠ items (next 4 wks): <list or none>
Not-yet-migrated to Run of Show: <list or none>
Calendar mapped through: W<NN>
ACTIONS: <the 1-3 things to do, e.g. "build W38 toolkit", "resolve W27 Library numbering">
```
