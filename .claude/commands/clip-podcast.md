---
description: Turn a podcast appearance (YouTube link + transcript) into a ready-to-edit social clip plan — 3-5 best moments with timestamps, on-screen hooks, vertical-reframe + PBS caption-template spec, and per-platform post copy with the funnel CTA. This repo makes the plan; your Remotion/editing project renders it. Works off the public YouTube version (no host raw file needed).
allowed-tools: Bash, Read, Grep, Glob, Write, WebSearch, WebFetch
---

You are turning a Ginny podcast appearance into social clips. You produce the **plan + copy**; the actual download/render happens in the separate Remotion/editing project (this content repo has no video tooling and doesn't need it). It works off the **published YouTube episode** — no host raw file required (YouTube compression is invisible on captioned social clips; raw only matters for broadcast).

**Input** = `$ARGUMENTS`: a YouTube URL and/or a path to a transcript. If only a URL, try WebFetch to pull the captions/transcript; if that fails, ask the user to paste the transcript or auto-captions (you need timestamps).

Also read `platform_playbooks.md` (TikTok + YouTube Shorts + LinkedIn video sections) and build the clip plan to the current specs/hooks there. (The playbook is refreshed monthly by `/platform-research`; where it conflicts with PBS's measured data, the measured data wins.)

## Step 1 — Transcript with timestamps
Get the episode transcript with timestamps. You need them to mark clip in/out points.

## Step 2 — Select 3-5 clip moments (use the proven shapes)
Scan for moments matching PBS's highest-performing shapes (see `linkedin_performance_tracker.md` + `shocking_fact_bank.md`):
- a **shocking-fact / genuinely-unknown structural fact** reveal,
- a **decoder** beat (a term decoded plainly),
- a **named-adversary / dollar-comparison** line,
- a **proprietary anchor / story** ("we review hundreds of contracts a year…"),
- a **sharp one-liner / reframe**.
Pick the 3-5 strongest **self-contained 20-60s** moments. No mid-thought cuts; each must stand alone.

## Step 3 — Spec each clip

**One master → two cut lengths → per-platform wrapper (do NOT make a separate edit per platform).** Cut ONE clean master per moment (9:16, burned-in captions, NO competitor watermark). Spec **two lengths** from it: a **short cut ~20-30s** for Shorts (~15-30s) / TikTok (~21-34s) / Instagram Reels (7-30s) / Facebook Reels, and, when the moment supports it, a **long cut ~60-90s** for LinkedIn (its dwell sweet spot). Same footage, same message; only the trim, the length, and the wrapper differ. For Shorts, favor a seamless loop end.

For each: clip #, in/out timestamps, the verbatim quote, the shape it hits, target platform + aspect (**9:16** Shorts/Reels/TikTok or **4:5** LinkedIn/X feed), an **on-screen hook/title** (first 3 words must stop the scroll), a burned-in-caption note (social autoplays muted, captions are mandatory), and the PBS brand treatment per `social_clips/remotion_pbs_caption_template_spec.md`. Keep Ginny centered in the reframe.

## Step 4 — Post copy + per-platform wrapper (the differentiation lives HERE, not in the edit)
The caption in PBS voice (confrontational/decoder hook) + the **funnel CTA**, wrapped per platform (all paste-ready in fenced code blocks):
- **LinkedIn:** native 9:16 upload (long cut), professional confrontation hook, **link in the first comment**, 3 hashtags (CLAUDE.md pillar rule). Post first per the LinkedIn-first rule.
- **YouTube Shorts:** short cut, a **keyword SEARCH title** matching a buyer question (it's YouTube search), **end-card → Subscribe + link in the pinned comment**, seamless loop, <60s.
- **TikTok:** short cut, FYP-native caption + on-screen keywords, **link in bio**, 3-5 hashtags, optional trending audio within 24h.
- **Instagram Reels:** short cut, keyword caption, **link in bio**, a save-bait frame (the decoded payload).
- **Facebook Reels:** short cut, repost of the same master.
- **X:** link in the first reply, 0-1 hashtags.
**Clean no-watermark export** (a TikTok/competitor watermark suppresses the clip on Shorts/Reels). Same message everywhere; only the wrapper changes.

## Step 5 — Output (markdown plan + JSON manifest) + commit
Write TWO files to `social_clips/`:
1. **`<show-slug>_<YYYY-MM-DD>_clips.md`** — the human-readable plan (header + per-clip specs + post copy).
2. **`<show-slug>_<YYYY-MM-DD>_clips.json`** — the machine-readable manifest the Remotion starter renders (schema = `social_clips/remotion_starter/clips.sample.json`):
   `{ show, episodeUrl, date, sourceVideo, fps, clips: [ { id, slug, inSec, outSec, aspect ("9x16"|"4x5"), platform, hookTitle, showName, cta:{text,url}, captions:[{startSec,endSec,text}] } ] }`.
   Caption times are **absolute source seconds** (the composition offsets by `inSec`). If you only have rough timestamps (no word/phrase-level timing), still emit the manifest and flag that a Whisper JSON is needed in the video repo for synced captions.

Commit both. Log the appearance + clips in the tracker (`podcast_pitching_guide.md` Tracking / `podcast_outreach_sprint.md`). The video repo then runs `node render-from-manifest.mjs <clips.json>` against the `social_clips/remotion_starter/` code to render.

## Notes
- **No raw file needed** — public YouTube is the default source; this removes the host-coordination bottleneck.
- **Permission:** Ginny is the guest and may repurpose her own appearance; a courtesy "ok to clip?" to the host is standard and usually encouraged.
- **Don't download/encode video here** — output the plan; the Remotion project consumes it.
