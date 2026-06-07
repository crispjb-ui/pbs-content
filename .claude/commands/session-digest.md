---
description: Digest the current working session into durable system improvements — capture decisions, new rules/conventions, preferences, and open items, then apply the clear ones (CLAUDE.md, OPEN_ITEMS) and propose the ambiguous ones. Run at the END of a substantive session.
allowed-tools: Bash, Read, Grep, Glob, Edit, Write
---

You are digesting PBS working sessions so nothing decided in conversation gets lost. This now runs **automatically**: the SessionStart hook (`.claude/settings.json` → `.claude/hooks/session_digest_check.sh`) detects undigested transcripts at the start of a session and prompts this. You can also run it manually anytime. It reads the JSONL session transcripts directly, so it does not depend on the live conversation being in context.

## Step 1 — Read the transcripts, then extract
Read the PBS session transcripts: the JSONL files in `~/.claude/projects/$(pwd | sed 's#/#-#g')/` newer than `.claude/.last_digest` (plus the current conversation). From them, pull out:
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

## Step 4 — Update marker, commit + report
Write a fresh UTC timestamp to the marker (`date -u +%Y-%m-%dT%H:%M:%SZ > .claude/.last_digest`) so the digested transcripts aren't reprocessed next session. Commit the clear captures + the marker ("session digest <date>"). Report: what was captured, what was auto-applied, and what needs a yes. Note anything that should also feed `/log-metrics` or the calendar.

## Autonomy boundary
Apply clear, explicitly-stated decisions; propose anything judgment-level.

## How the automation works (and its limit)
Activated via the **SessionStart hook** (this repo only): at session start, `.claude/hooks/session_digest_check.sh` checks `~/.claude/projects/` for transcripts newer than `.claude/.last_digest` and, if any, injects a prompt to run this skill. It works because it runs **in this environment**, where the transcripts live. A detached GitHub Action still cannot do this (transcripts aren't in the repo). Caveat: it depends on `~/.claude` persisting across container resets (it did through the June 2026 resets); the digest commits to the repo, so its **output** is durable regardless. First auto-run should be eyeballed once to confirm the hook fired (flagged in OPEN_ITEMS).
