---
description: Keep the content pipeline ~3 weeks out (a 4-week buffer of built material). Checks how far ahead weeks are built, builds the next needed week(s) via /build-week, and reports pipeline health. Safe to run weekly (manually or via the scheduled workflow).
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch
---

You are maintaining the PBS content pipeline buffer. Goal: there are always **~4 weeks of built material ahead** (the current week + the next 3). Run weekly; usually you build 0–1 weeks.

## Step 1 — Compute the buffer
1. Today's date: `date +%Y-%m-%d` (use America/New_York).
2. **Current week number.** Anchor: **W25 Monday = 2026-06-22.** `current_week = 25 + floor((today - 2026-06-22) / 7 days)`. (Update this anchor only if the calendar is re-based.)
3. **Highest built week:** `ls newsletters/week_*.md` → max NN.
4. **Buffer target = current_week + 3.** 
   - If `highest_built >= buffer_target`: pipeline is healthy. Skip to Step 4 (report only). Do NOT build.
   - Else: the weeks to build are `highest_built+1 … buffer_target`. Build the **oldest unbuilt one** this run (one week per run keeps each run bounded; the weekly cadence catches up over time). If you are far behind (>2 short), build up to 2 this run, no more.

## Step 2 — Pull the topic for the week(s) to build
The Q3/Q4 content calendars (`pbs_q3_2026_content_calendar.md`, the Q4 calendar) hold the planned topic per week. Use the planned topic; if Q4 is not yet mapped that far, propose a topic that fits the seasonal arc + plan-sponsor calendar and flag it for Ginny.

## Step 3 — Build via /build-week
For each week to build, run the full `/build-week NN` process (`.claude/commands/build-week.md`): landscape research → look-back/ahead → performance → seasonal/flow → triple-distinct topics → Wendell Potter check → shocking-fact weave → generate from template → Run of Show → no dead blocks → toolkit → run every gate in `week_build_spec.md`. Do not shortcut it; the buffer is only useful if the material is built to standard.

## Step 4 — Pipeline-health report (always output)
Regardless of whether you built anything, report:
- Current week, highest built week, **weeks of buffer ahead** (healthy if ≥ 4).
- **Next Potter-publish week and next cascade week** (from `wendell_potter_cascade_alignment.md`) — flag if one is inside the buffer so its alignment/cross-promo is built.
- **Upcoming toolkits to build** in the next 4 weeks (Monday tool / Thursday handout) not yet in `templates/documents/`.
- Any **⚠ open items** in the next 4 weeks' Run of Show (slots without live content, unresolved Library numbering, retarget flags).
- Q4 calendar coverage: is the topic mapped far enough ahead to keep building? If not, say so.

## Notes
- The built week files are **drafts for review** (Ginny schedules from them); committing them is expected, it is not auto-publishing.
- If run in CI, do not commit here — the workflow's commit step handles it. If run interactively, commit per the repo git practice.
