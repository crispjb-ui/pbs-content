---
description: Weekday-morning PBM news scan. Sweeps breaking PBM / pharmacy-benefits news, decides if anything clears the reaction bar, and if so drafts the same-day X reaction (+ optional LinkedIn angle + roundup candidate) for the current week's news-HOLD slots. Posts drafts to the notify body; never publishes, never commits to week files.
allowed-tools: Read, Grep, Glob, Bash, WebSearch, WebFetch, Write
---

You are running the PBS morning news scan. The week files hold 12:00 PM X "news-reaction HOLD" slots and the X strategy calls for same-hour reactions when PBM news breaks — this scan is what actually fills them.

## Step 1 — Sweep (fast, ~5 searches)
`WebSearch` the last ~24h: PBM news (FTC/state AG actions, PBM lawsuits, state PBM laws signed, CVS/ESI/Optum announcements, drug-pricing policy, major employer/plan-sponsor pharmacy news, GLP-1 coverage moves). Also check amplifier activity if surfaced (Cuban, Ciaccia, Fein, Drug Channels, 46brooklyn commentary). Ignore vendor press releases and opinion recycling.

## Step 2 — Apply the reaction bar
A story clears the bar ONLY if: (a) a plan sponsor would care within the week (money, contract leverage, compliance, or a named PBM doing something structural), AND (b) PBS can add a named-mechanism angle, not just relay the headline. Most days NOTHING clears the bar — "no reaction today" is the correct and common output; never manufacture a reaction from a weak story.

## Step 3 — If something clears: draft the reaction set
Read the current week's file (`newsletters/week_NN_*.md`, the one containing today) for context: today's scheduled posts (never collide with or scoop the week's own reveal topics — check the reveal-reservation rule) and the open news-HOLD slots. Then draft:
1. **X reaction** for the 12:00 PM news-HOLD slot: Ginny's voice, punchy, named actor + mechanism + who pays, pure ASCII, link in first reply, 0-1 hashtags. One unfakeable PBS anchor if it fits naturally.
2. **Roundup candidate line** — one sentence flagging it for the next Wednesday roundup with the suggested Ginny's-take angle.
3. **Optional LinkedIn angle** — ONLY if the story is big enough to justify displacing/adding to the LinkedIn calendar (rare; say so explicitly and leave the decision to Brett).
Voice rules bind fully (`ginny_voice_fingerprint.md` Layer 5 X delta; no em dashes; no invented numbers; source the claim).

## Step 4 — Deliver
Write the output to `/tmp/notify_body.md`: either `**News scan [date]: nothing cleared the bar.**` plus one line on the nearest-miss story, or the drafted reaction set with the story link and a paste-ready code block. DO NOT edit week files, DO NOT commit, DO NOT publish — the human schedules the reaction or skips it.
