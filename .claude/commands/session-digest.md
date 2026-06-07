---
description: Digest the current working session into durable system improvements — capture decisions, new rules/conventions, preferences, and open items, then apply the clear ones (CLAUDE.md, OPEN_ITEMS) and propose the ambiguous ones. Run at the END of a substantive session.
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
---

You are digesting the current working session so nothing decided in conversation gets lost. **Run this at the end of a substantive session.** It works in-session because the conversation transcript is only available here — it is not in the repo, so this cannot run as a detached scheduled job (see the note at the end).

## Step 1 — Extract from this session
Read back over the conversation and pull out:
- **Decisions / rulings** — concrete calls made (e.g., "Library 04 = W25," "speed-to-lead alerts go to brett@ + ginny@," "Google Sheets not Airtable," "booking stays a team@ mailto for now").
- **New rules / conventions** that should be durable and live in CLAUDE.md.
- **Preferences** expressed (tone, cadence, what to avoid, format likes/dislikes).
- **Open items / deferrals** that belong in OPEN_ITEMS.md.
- **Updates implied** for a skill, spec, bank, calendar, or week file.

## Step 2 — Apply the clear, durable ones
- Add unambiguous new rules/decisions to the correct section of CLAUDE.md, matching the existing convention style and dating them.
- Add deferred work to OPEN_ITEMS.md.
- Fix any doc/spec/bank a decision clearly changed.

## Step 3 — Propose the ambiguous / strategic ones
List anything that's a judgment call or strategy shift for Ginny to confirm — do not silently bake it in.

## Step 4 — Commit + report
Commit the clear captures ("session digest <date>"). Report: what was captured, what was auto-applied, and what needs a yes. Note anything that should also feed `/log-metrics` or the calendar.

## Autonomy boundary
Apply clear, explicitly-stated decisions; propose anything judgment-level.

## Why this can't be a detached weekly GitHub Action
Chat transcripts live in the Claude Code session, not in the git repo, and this container is ephemeral — a fresh CI checkout has no access to them. So the realistic "automatic" is: **run `/session-digest` at the end of each working session** (a habit, or a Stop-hook reminder via the update-config skill). If session transcripts are ever persisted to an accessible store, a scheduled digest becomes possible; until then, in-session is the only place it works.
