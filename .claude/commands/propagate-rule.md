---
description: Propagate an approved rule/format change into all built-but-unpublished newsletter week files (and the specs), so an approval is actually implemented across the pipeline, not just documented. Run immediately after Ginny approves a rule-level change.
allowed-tools: Read, Edit, Grep, Glob, Bash
---

You are propagating an APPROVED change across the built week-file backlog. `/build-week` already applies current rules to NEW weeks (it reads CLAUDE.md + `platform_playbooks.md` + `week_build_spec.md`), so this command closes the one gap: the weeks that were **already drafted ahead** (the pipeline is built ~through W37) do not retro-update themselves. This is the step that makes "once I approve, it builds into the newsletter files" real.

Trigger: Ginny approves a rule-level or format change (a `/platform-research` proposal, an experiment outcome like the long-form-X or first-comment-timing trial, or any new convention). The change to apply is given in the invocation (e.g., `/propagate-rule first-comment Variant B becomes the default`).

## Step 1 — Pin the change (one line)
State exactly: WHAT changes, in WHICH week-file section (PART 1 deep dive / 1B field note / 2 newsletter / 3 LinkedIn feed / 4 Notes / 4B X), and the exact edit pattern (add a line, swap a slot, change a format/cadence, retire a tag).

## Step 2 — Encode in the rule-of-record FIRST (so NEW weeks inherit it)
Before touching week files, confirm the change is written into the right source of truth so `/build-week` applies it going forward:
- channel best-practice / format / cadence → `platform_playbooks.md` (+ `x_account_strategy.md` if X)
- a load-bearing content rule → `CLAUDE.md` + the matching `week_build_spec.md` gate line
If it is not yet encoded there, encode it now. (Skip only if it is already in the rule-of-record.)

## Step 3 — Determine the target weeks (never touch the past)
- Anchor: W25 Monday = 2026-06-22. `current_week = 25 + floor((today America/New_York − 2026-06-22) / 7)`.
- Targets = every built week file from the **next unpublished week** (current_week, or current_week+1 if this week's Monday already passed) through the **last built week** (`ls newsletters/week_*.md | sort` → highest NN). Do NOT edit already-published/past weeks. List the target weeks before editing.

## Step 4 — Apply consistently
For each target week file, apply the change to the correct section with the SAME pattern, matched to that week's topic and voice. Surgical Edit-tool edits only; preserve everything else. If it is an experiment rollout, reuse the exact per-week pattern from the trial (e.g., the `[LONG-FORM X TRIAL]` slot, or the `[A/B TEST — Variant …]` tag). Brand rules: no em-dash/hyphen separators, spell out "Prescription Benefit Solutions" (no bare "PBS" in published copy), no fabricated stats.

## Step 5 — Verify, commit, log
- Run `python3 tools/brand_lint.py` (must stay clean).
- Commit the changed week files as drafts: `Propagate approved change: <one line> into W{n}-W{m}`.
- In `OPEN_ITEMS.md`, mark the approved item **"propagated to W{n}-W{m} on <date>"** so the loop is closed and auditable.
- Report: the one-line change, the weeks touched, and the per-week placement.

## Note
This is the backlog half. The forward half is automatic: because the change is in the rule-of-record (Step 2), every future `/build-week` run already includes it. Together they mean an approval lands everywhere, past-built and future, with one command.
