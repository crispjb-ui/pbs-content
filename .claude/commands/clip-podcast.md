---
description: Turn a podcast appearance (YouTube link + transcript) into a ready-to-edit social clip plan — 3-5 best moments with timestamps, on-screen hooks, vertical-reframe + PBS caption-template spec, and per-platform post copy with the funnel CTA. This repo makes the plan; your Remotion/editing project renders it. Works off the public YouTube version (no host raw file needed).
allowed-tools: Bash, Read, Grep, Glob, Write, WebSearch, WebFetch
---

You are turning a Ginny podcast appearance into social clips. You produce the **plan + copy**; the actual download/render happens in the separate Remotion/editing project (this content repo has no video tooling and doesn't need it). It works off the **published YouTube episode** — no host raw file required (YouTube compression is invisible on captioned social clips; raw only matters for broadcast).

**Input** = `$ARGUMENTS`: a YouTube URL and/or a path to a transcript. If only a URL, try WebFetch to pull the captions/transcript; if that fails, ask the user to paste the transcript or auto-captions (you need timestamps).

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
For each: clip #, in/out timestamps, the verbatim quote, the shape it hits, target platform + aspect (**9:16** Shorts/Reels/TikTok or **4:5** LinkedIn/X feed), an **on-screen hook/title** (first 3 words must stop the scroll), a burned-in-caption note (social autoplays muted — captions are mandatory), and the PBS brand treatment per `social_clips/remotion_pbs_caption_template_spec.md`. Keep Ginny centered in the reframe.

## Step 4 — Post copy (per clip, per platform)
The caption in PBS voice (confrontational/decoder hook), 3 hashtags (CLAUDE.md pillar rule), and the **funnel CTA** (first comment → a relevant toolkit at `rxbs.org/toolkit/…`). X: link in first reply, 0-1 hashtags. Wrap all paste-ready copy in fenced code blocks (paste-clean convention).

## Step 5 — Output + commit
Write the plan to `social_clips/<show-slug>_<YYYY-MM-DD>_clips.md`: header (show, date, episode URL), the per-clip specs + copy, and a closing line noting the source is the YouTube download and rendering uses the PBS Remotion caption template. Commit it. Log the appearance + clips in the podcast tracker (`podcast_pitching_guide.md` Tracking / `podcast_outreach_sprint.md`).

## Notes
- **No raw file needed** — public YouTube is the default source; this removes the host-coordination bottleneck.
- **Permission:** Ginny is the guest and may repurpose her own appearance; a courtesy "ok to clip?" to the host is standard and usually encouraged.
- **Don't download/encode video here** — output the plan; the Remotion project consumes it.
