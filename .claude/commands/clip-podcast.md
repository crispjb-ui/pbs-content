---
description: Turn a podcast appearance (YouTube link + transcript) into a ready-to-edit social clip plan — 3-5 best moments with timestamps, on-screen hooks, vertical-reframe + PBS caption-template spec, and per-platform post copy with the funnel CTA. This repo makes the plan; your Remotion/editing project renders it. Works off the public YouTube version (no host raw file needed).
allowed-tools: Bash, Read, Grep, Glob, Write, WebSearch, WebFetch
---

You are turning a Ginny podcast appearance into social clips. You produce the **plan + copy**; the actual download/render happens in the separate Remotion/editing project (this content repo has no video tooling and doesn't need it). It works off the **published YouTube episode** — no host raw file required (YouTube compression is invisible on captioned social clips; raw only matters for broadcast).

**Input** = `$ARGUMENTS`: a YouTube URL and/or a path to a transcript. If only a URL, try WebFetch to pull the captions/transcript; if that fails, ask the user to paste the transcript or auto-captions (you need timestamps).

Also read `platform_playbooks.md` (TikTok + YouTube Shorts + LinkedIn video sections) and build the clip plan to the current specs/hooks there. (The playbook is refreshed monthly by `/platform-research`; where it conflicts with PBS's measured data, the measured data wins.)

**Process of record: `video_production_runbook.md`.** Every clip this command plans runs the six-phase gated pipeline — the plan/manifest you produce here is Phases 1-2; the render machine then does Phase 3 (render), **Phase 4 (QC gate: `qc-frames.mjs` + `/video-qc` + phone preview — no clip posts without passing)**, Phase 5 (publish per the plan's copy), Phase 6 (measure into the bank's shipped log). State this hand-off at the end of every clip plan.

## Step 1 — Transcript with timestamps
Get the episode transcript with timestamps. You need them to mark clip in/out points.

## Step 2 — Select 3-5 clip moments (reveal-first, per the measured shape ceilings)
Scan for moments matching PBS's highest-performing shapes, **in this priority order** (reveals measured 5.5-17.8K organic vs vocabulary decoders 595-789 in the same summer weeks — see `linkedin_performance_tracker.md`, `shocking_fact_bank.md` → "Why it works", and `video_content_bank.md` → "The reveal formula, video edition"):
1. a **shocking hidden-structure reveal** (promise-then-loophole: the protection the viewer believes in, then the mechanism that voids it),
2. a **named-adversary / dollar-comparison** line,
3. a **decoder** beat — only when it can be re-framed as a reveal (open with the belief it breaks, not the definition),
4. a **proprietary anchor / story** or **sharp one-liner / reframe**.
Pick the 3-5 strongest **self-contained** moments. No mid-thought cuts; each must stand alone. **Length discipline: target 15-25s for the master moment** (the measured completion zone — an 18s clip held ~94% watch, a 32s clip held ~44%); go past ~30s only when every extra second is payload, never for wind-up. One idea per clip. If a clip in the plan is not reveal- or dollar-shaped, say why it earns the slot anyway.

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

   **Elevated treatment is the DEFAULT for new clips (added Jul 4, 2026):** every clip in a NEW manifest carries `elevate: true` and an `emphasisWords` array (the clip's 4-6 payload nouns — the terms that must read at a glance in a muted feed). This turns on the v2 treatment (punch-in editing rhythm, Accent-tinted emphasis words, animated end card) that shipped as `*v2` second versions on the SHRM batch; new batches simply start there. Where a clip has a countable/number moment, spec a matching `cutaways` entry (equation / stat / bigstat / dotgrid — no code needed for those four). The "second versions, never overwrite" rule applies to EDITS of already-shipped clips, not to new batches. Optional `music: {src, volume}` stays off until a licensed track exists in `public/`.

   **Designed covers:** note in the plan that the render machine runs `node render-designed-covers.mjs <manifest>` — every clip gets a designed thumbnail (both aspects) generated from its cutaway payload; the 4x5 is the LinkedIn custom thumbnail, the 9x16 the TikTok/Reels/Shorts cover.

Commit both. Log the appearance + clips in the tracker (`podcast_pitching_guide.md` Tracking / `podcast_outreach_sprint.md`). The video repo then runs `node render-from-manifest.mjs <clips.json>` against the `social_clips/remotion_starter/` code to render.

## Notes
- **No raw file needed** — public YouTube is the default source; this removes the host-coordination bottleneck.
- **Permission:** Ginny is the guest and may repurpose her own appearance; a courtesy "ok to clip?" to the host is standard and usually encouraged.
- **Don't download/encode video here** — output the plan; the Remotion project consumes it.
