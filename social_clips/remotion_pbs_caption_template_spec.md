# PBS Remotion Caption Template — Spec

**Created June 2026.** One reusable, parameterized Remotion composition so every podcast/social clip is on-brand with **zero per-clip design work**. Build it once in the Remotion project; `/clip-podcast` plans feed it per clip. The content repo holds this spec; the Remotion project implements it.

## Why a single template
The weekly clip cadence (from `podcast_outreach_sprint.md`) only scales if branding is automatic. A parameterized composition (props in → finished clip out) means a clip is: drop in the source + caption track + a few fields → render. No designing each time. (Same scalability logic as the toolkit preview-PNG decision in CLAUDE.md.)

## Output sizes (two compositions, same system)
- **9:16 — 1080×1920** for Shorts / Reels / TikTok.
- **4:5 — 1080×1350** for the LinkedIn / X feed.

## Brand system (PBS v2 — must match CLAUDE.md)
- **Fonts:** IBM Plex Sans (captions, titles, lower-third); IBM Plex Mono for any number/stat/$ figure (tabular).
- **Colors:** Primary Blue `#015880`, Accent Blue `#A7E0FA`, Gray `#4D4D4D`, White `#FFFFFF`.
- **Wordmark:** PBS triangle wordmark as a small persistent watermark (low opacity, top corner away from platform UI).

## Elements (all parameterized as props)
1. **Source video** — the centered, reframed clip (prop: source file + crop focus on Ginny).
2. **Burned-in captions (mandatory)** — large, high-contrast, lower-third, phrase-by-phrase reveal; **Accent Blue highlight on the key word** of each phrase. Plex Sans SemiBold. (Most social video is watched muted; captions are non-negotiable.)
3. **On-screen hook/title** — top third, the scroll-stopper from the clip plan (Plex Sans Bold, two-tone Primary/Accent). Appears first ~2s.
4. **Lower-third name tag** — "Ginny Crisp, PharmD · Prescription Benefit Solutions" on the opening few seconds.
5. **"As seen on [Show]" badge** — small, top corner (prop: show name).
6. **Optional 1-2s intro + outro cards** — outro = PBS triangle + "Benefit Blind Spots" + the clip's CTA (prop: CTA text + toolkit URL).
7. **Safe areas** — keep all text out of the bottom ~15% and top ~10% (platform UI/caption overlap on Reels/TikTok) **and the side ~11%** (LinkedIn/X mobile feed crops ~10-12% off the sides on playback; left-anchored captions + name plate got clipped on the live clip7 upload). Keep all text in the center ~78%; captions are centered. See `remotion_starter/CLIP_RENDER_SPEC.md` lesson 8 (the `SAFE_X`/`SAFE_CORNER` implementation).

## Props (the composition's inputs)
`sourcePath` · `aspect` (9:16 | 4:5) · `captionTrack` (timed text) · `hookTitle` · `showName` · `ctaText` · `ctaUrl`.

## Mobile-feed legibility (mandatory, mirrors the CLAUDE.md decoder rule)
Type large enough to read at thumbnail; high contrast; cap on-screen text density; preview at small size before export.

## Pipeline fit
`/clip-podcast` (this repo) → clip plan with timestamps + hook + caption + CTA → Remotion render with this template (the video project) → export per platform → post with the planned copy + first-comment funnel CTA. Source = the public YouTube download (no raw file needed).
