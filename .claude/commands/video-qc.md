---
description: Pre-publish QC gate for rendered video clips. Extracts dead-zone-masked frames from each rendered MP4 (qc-frames.mjs) and visually verifies them against the 9:16/4:5 safe-zone + burn-in checklist, returning PASS/FAIL per clip with specific fixes. The video equivalent of the toolkit _audit_pdfs.py ship gate. Run after every render, before the phone preview.
allowed-tools: Bash, Read, Grep, Glob, Write
---

You are running the pre-publish QC gate on rendered PBS video clips (Phase 4 of `video_production_runbook.md`). A clip that fails does NOT post — this gate exists because the first live 9:16 shipped with six dead-zone defects that were only caught in the live feed.

**Input** = `$ARGUMENTS`: a directory of rendered MP4s (default `social_clips/remotion_starter/out/`), specific MP4 paths, or a directory of already-extracted QC frames (PNGs).

## Step 1 — Extract masked QC frames
If given MP4s: run `node qc-frames.mjs [files…]` from `social_clips/remotion_starter/` (needs ffmpeg + ffprobe). It writes `out/qc/<name>_t<sec>.png` — stills at the historically-breaking moments (hook @0.2s and 2s, mid-clip captions, nameplate window, end card) with the platform dead zones burned in as translucent red boxes (9:16: top ~8% / right ~12% / bottom ~18%; 4:5: sides ~11% / top ~13%). If ffmpeg is unavailable in this environment, say so and ask for the frames (or the MP4s to be QC'd on the render machine).

## Step 2 — Visually verify every frame (Read each PNG)
Check against the canonical checklist (`video_content_bank.md` → "9:16 in-feed render spec" → pre-export checklist). For each clip, per aspect:

- **Dead zones:** NOTHING critical (hook text, captions, logo, "As seen on" badge, nameplate, CTA) under a red zone. Logo/badge/hook sit just BELOW the top band, not flush to the edge.
- **Hook:** present and fully readable at t0.2 (no empty panel frame) and fully built by 2s; hook banner not clipped.
- **Captions:** vertically centered band, 2-4 words/line, big (9:16 ≈ 60px), high-contrast, clear of the right rail, readable when the frame is shrunk to ~400px wide (actually downscale one frame and check).
- **Nameplate:** clear of the bottom band; not colliding with captions.
- **End card:** logo + rxbs.org + one CTA line, fully inside safe area.
- **Hook entrance motion:** the t0.2 and t2.0 frames must differ visibly in the hook area (the staggered/spring entrance is the first-5s pattern interrupt worth ~23% retention; two identical hook frames = a static open = FAIL).
- **v2 clips additionally:** emphasis words render Accent (not broken spans); end-card CTA pill fully visible; punch-in hasn't pushed content into a dead zone at any sampled frame.
- **Retention props (when the manifest specs them):** the `midHook` chip appears at its `atFrac` moment, inside the safe band, NOT covered by a cutaway (extract an extra frame at `duration × atFrac + 1s` to check); a `coldOpen` clip shows the teaser beat + hook at t0.2, the brand-blue seam flash near the teaser's end, the clip restarting after it, and a composition longer by the teaser length.
- **Cover PNGs** (if present in the same out/): hook text matches the clip's frame-0 hook; nothing critical in the outer 10%.

## Step 3 — Report
A table: clip · aspect · PASS/FAIL · specific defects with the frame filename. For any FAIL, name the exact fix (which constant/prop, per `CLIP_RENDER_SPEC.md`). End with the reminder that the final gate is a phone preview in the real LinkedIn feed. If everything passes, say so plainly: "QC PASS — phone-preview one 9:16, then post."

Do not soften findings: a borderline caption at 400px is a FAIL. The cost of a false pass is a burned reach test (W26).
