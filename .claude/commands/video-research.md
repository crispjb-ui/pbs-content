---
description: Monthly video-content engine. Researches what video is working for Ginny/PBS's niche + platforms, teardowns direct-competitor and benefits-advisor video, analyzes PBS's own video results, then auto-updates video_content_bank.md (new scripted concepts, repurpose picks, re-ranked shoot-list, retire fatigued) and proposes any rule-level change to OPEN_ITEMS. Research/drafting only; never publishes.
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch, WebFetch
---

You are running the PBS monthly **video** engine and feeding it back into the content system. Read `CLAUDE.md` first (the native-video / 9:16 Wednesday rule, brand rules, no-fabrication, the measured-data override). This engine keeps `video_content_bank.md` stocked with strong, current concepts so `/build-week` (the Wednesday 9:16 slot) and `/clip-podcast` (repurposed clips) always pull from fresh, proven material.

**The source of truth this engine maintains is `video_content_bank.md`.** Edit it in place. This command is **research + drafting only. It never publishes** to any platform.

Read for context every run:
- `platform_playbooks.md` — current video best practices (LinkedIn 9:16/video-tab, YouTube Shorts, TikTok, Reels, X). Apply the latest specs/hooks; the measured-data override below still wins.
- `linkedin_performance_tracker.md` — PBS's own video + post performance, the WORKING/WEAK shapes, the shocking-fact-gate finding, the summer-floor reads.
- `shocking_fact_bank.md` + `x_recipe_post_bank.md` — source material for new hooks.
- `buyer_anxiety_map.md` — the pain-point lens; turn anxiety rows into 9:16 talking-head scripts (fear in the first 3s, answer in the middle, asset CTA). Also maintain the **"Ask Ginny" DM → video-reply** recurring format in the bank, and add any new anxiety surfaced by DM'd questions back to the map.
- `social_clips/` + `podcast_outreach_sprint.md` — the repurpose pipeline state.

## Step 1 — Research current video best practices + competitor teardown (adversarial verification)
- **Platform video state:** confirm the current spec/hook/length/cadence that matters for PBS video on LinkedIn 9:16 (+ video tab), YouTube Shorts, TikTok, Instagram Reels, X (pull from `platform_playbooks.md` + a light WebSearch/WebFetch refresh; do not re-research what the playbook already has this month).
- **Competitor / like-brand video teardown (benchmark set: independent PBM auditors / pharmacy-benefits consultants, and benefits-broker / advisor thought leaders):** find their recent video on LinkedIn / YouTube / TikTok. For each notable one, log: who, the hook, the shape, length, the format/production style, and any visible signal of what's working (views/engagement where public, posting frequency, what they repeat). Note what travels and what falls flat for the **same plan-sponsor/broker audience PBS targets**.
- Tag each finding **CONFIRMED** (authoritative/primary or 2+ sources, dated) or **DIRECTIONAL** (single/inferred). Cite source + date. No fabricated metrics.

## Step 2 — Analyze PBS's own video results
From the "Shipped video performance log" in the bank + the tracker: which shapes/hooks/lengths worked, which underperformed. Apply the **shape ceilings** PBS has measured (shocking hidden-structure reveal ~15-18K vs vocabulary decoder ~4-5K in summer; origin strong on LinkedIn/Reels, weak on X). Flag **fatigue** (two consecutive soft ships of the same shape → rotate that shape down).

## Step 3 — Auto-update the bank (mechanical, no approval)
Edit `video_content_bank.md` in place:
- **Add 3-6 new scripted concepts** (Mode A) built from PBS's proven shapes + fresh `shocking_fact_bank` material + what the competitor teardown shows is working for this audience. Each gets: hook (first 3s), shape, a 45-90s beat sheet, the proprietary anchor, target platforms + the two length cuts, status.
- **Update the repurpose queue** (Mode B) with any new source appearance.
- **Re-rank the Active shoot-list** (top 3-5 ready concepts) on freshness + the working/weak read, so `/build-week` pulls the strongest next.
- **Retire** fatigued/stale concepts to the Retired section with the reason.
- Add a dated `## Changelog` entry listing what changed + sources.

## Step 4 — Propose (do NOT auto-apply) any rule-level change
Anything that changes a **rule** (a new video cadence, a format swap to a standing slot, a CLAUDE.md video-rule change) → append a clearly-labeled proposal to `OPEN_ITEMS.md` (do NOT edit CLAUDE.md yourself). State the change, the sourced evidence (CONFIRMED/DIRECTIONAL), the brand-fit verdict, and which file/section it would touch.

## Step 5 — Notify
Write `/tmp/notify_body.md`:
```
## ✅ Auto-applied to video_content_bank.md (FYI)
- <what changed: N new concepts, shoot-list re-rank, retirements> (sources)

## 🟧 Needs your one-time approval (in OPEN_ITEMS)
- <proposed rule change> → would touch <file/section>  (or: - none this month)
```
Lead with `**Monthly Video Research** · <date>` and end with a one-tap link to the bank: `https://github.com/<owner>/<repo>/blob/main/video_content_bank.md`.

## Autonomy boundary
New concepts, shoot-list re-ranks, repurpose picks, retirements = mechanical → **auto-apply to `video_content_bank.md`**. New cadence/slot/format rules = judgment → **propose to OPEN_ITEMS only**. `/build-week` + `/clip-podcast` read the bank on their next run, so auto-applied concepts flow into content automatically. **Never publishes; never auto-spends.**

## Surfacing approvals (tap-to-approve — required whenever you flag judgment calls)

When this run surfaces judgment-call / "needs Ginny" items (the same ones you add to `OPEN_ITEMS.md`), ALSO write them to `APPROVALS_PENDING.md` at the repo root — one GitHub task-list checkbox per decision, each a single self-contained line with a one-line summary and, where useful, an inline link to the fuller context (the report or an OPEN_ITEMS anchor). Example lines:

    - [ ] ① "Budgeting for the rebate-free PBM" Monday deep dive — strong Sep–Oct fit ([context](research/landscape_2026_Q2.md))
    - [ ] Library-numbering fix — W27 eyebrows to 05, W33 to 06

Write ONLY the `- [ ]` checkbox lines (no heading; the workflow adds the dated section heading). If there are no judgment calls this run, do not create the file. The workflow posts these to the standing "✅ PBS — Approvals needed" GitHub issue via `.github/scripts/request_approval.sh`, where Ginny taps to approve from mobile; a Claude session then builds each checked item via a review-linked PR. `APPROVALS_PENDING.md` is gitignored (never committed). This does NOT replace the OPEN_ITEMS write — do both.
