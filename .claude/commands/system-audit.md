---
description: Monthly anti-rot + self-improvement sweep. Scans the rule-set and skills for drift/conflicts, refreshes the shocking-fact bank (retire common-knowledge facts, promote/verify pipeline candidates), and checks bank/backlog/cadence consistency. Read-mostly; proposes fixes.
allowed-tools: Bash, Read, Grep, Glob, WebSearch, Edit
---

You are running the monthly PBS system audit. The content engine, conventions, and banks accrete over time; without a sweep they drift, conflict, and go stale. Find the rot and propose (or apply, where safe and obvious) fixes.

## 1. Rule-set drift + conflict (CLAUDE.md is large)
- Scan `CLAUDE.md` for **internal contradictions** (e.g., a reverted decision still referenced elsewhere — the 10:00 AM vs 8:30 AM posting-time artifact was one), stale dates, and rules that newer rules supersede but didn't remove.
- Check that the conventions match what the week files + skills actually do (Run of Show, deep-dive-visual rule, fact-weaving, hashtag rule, code-block rule). Flag any rule the build no longer follows, or any build behavior not captured as a rule.

## 2. Skills / conventions consistency
- List `.claude/commands/*` and confirm each still matches CLAUDE.md and the build spec. Flag overlap, contradiction, or a skill referencing a renamed file/path.
- Confirm `week_build_spec.md`, `week_build_template.md`, and `/build-week` agree.

## 3. Shocking-fact bank freshness (self-improvement)
- For each entry in `shocking_fact_bank.md`: is it still **genuinely unknown** to the plan-sponsor audience, or has it become common knowledge (spread, DIR already did) and lost its shock? Retire stale ones to the recipe bank as standard decoders.
- **Verify figures** with WebSearch (FTC/Congressional/Drug Channels) — flag any number that may have updated; never let a stale or unverifiable figure stay (no-fabrication rule).
- **Promote a pipeline candidate** if a slot opened: research one, confirm the source, write it up in the bank format with paste-ready hooks.

## 4. Banks / backlogs / cadence
- `evergreen_visual_backlog.md` + `field_note_backlog.md`: anything stale or already shipped that should be marked? Burn-down on track?
- Library cadence: numbering consistent across CLAUDE.md + week files (04 W25 / 05 W27 / 06 W33)?
- `repurpose_queue.md`: any breakout not yet repurposed?
- `OPEN_ITEMS.md`: anything shipped that should be cleared, or stale?

## 5. Learning-loop health
- Is `linkedin_performance_tracker.md` current (has it been fed via `/log-metrics` recently)? If it's gone stale, the build's performance look-back is running on old data — flag it as the top issue, because it silently degrades every build.

## Output
A short audit report: drift/conflicts found, fact-bank changes made/proposed, cadence/backlog issues, and learning-loop health. Apply only the safe, obvious fixes (retire a clearly-stale fact, fix a clearly-contradictory line) and commit those; list the judgment-call items for the user to decide. Add anything material to `OPEN_ITEMS.md`.

## Surfacing approvals (tap-to-approve — required whenever you flag judgment calls)

When this run surfaces judgment-call / "needs Ginny" items (the same ones you add to `OPEN_ITEMS.md`), ALSO write them to `APPROVALS_PENDING.md` at the repo root — one GitHub task-list checkbox per decision, each a single self-contained line with a one-line summary and, where useful, an inline link to the fuller context (the report or an OPEN_ITEMS anchor). Example lines:

    - [ ] ① "Budgeting for the rebate-free PBM" Monday deep dive — strong Sep–Oct fit ([context](research/landscape_2026_Q2.md))
    - [ ] Library-numbering fix — W27 eyebrows to 05, W33 to 06

Write ONLY the `- [ ]` checkbox lines (no heading; the workflow adds the dated section heading). If there are no judgment calls this run, do not create the file. The workflow posts these to the standing "✅ PBS — Approvals needed" GitHub issue via `.github/scripts/request_approval.sh`, where Ginny taps to approve from mobile; a Claude session then builds each checked item via a review-linked PR. `APPROVALS_PENDING.md` is gitignored (never committed). This does NOT replace the OPEN_ITEMS write — do both.
