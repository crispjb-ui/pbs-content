# Video Production Runbook — the best-practice process (canonical)

_Created Jul 4, 2026 from the end-to-end audit of the SHRM "Honest HR" batch (the test case: 7 clips planned Jun 9 → clip7 shipped Jun 17 → first 9:16 shipped W26 → two live-feed defect rounds → dimension-gated fix Jul 1). This file is the **definition of done for every Ginny video**, scripted or repurposed — the video counterpart of `week_build_spec.md`. The specs it gates against live where they always did (`video_content_bank.md` → "9:16 in-feed render spec", `social_clips/remotion_starter/CLIP_RENDER_SPEC.md`, `remotion_pbs_caption_template_spec.md`); this file is the PROCESS that guarantees they're applied, in order, every time._

## What the SHRM test case taught (failure → gate)

| What actually happened | The gate that now prevents it |
|---|---|
| First live 9:16 shipped with 6 dead-zone defects (captions clipped under the reaction rail, hook cropped at the top, logo/badge invisible, nameplate colliding with LinkedIn's stamp) — caught by Ginny in the live feed, AFTER publishing | **Phase 4 QC gate:** `qc-frames.mjs` renders dead-zone-masked frames; `/video-qc` visually verifies them; phone preview is the final check. No clip posts without passing. |
| The prose spec was fixed Jun 27 but the code wasn't until Jul 1 — the batch nearly re-rendered on the stale component | **One canonical spec per concern** (map below) + the QC gate catches drift regardless of which doc lagged. |
| Aspect-gating bug: fixes keyed on `clip.aspect`, which the render scripts pass to BOTH formats → "re-render showed no differences" | **Dimension-based gating** (`height/width > 1.5`) is the standing convention; QC frames are per-rendered-file, so a silently-skipped fix is visible. |
| Caption timing double-shifted by the 2s extraction pad → karaoke ~2s late | Timing convention documented in `CLIP_RENDER_SPEC.md`; QC frame at mid-clip shows the active karaoke word vs. the spoken moment. |
| The compromised render burned the W26 9:16 reach test (686 impr / 72% in-network / 14s avg watch) — the strategic question "does 9:16 unlock the video tab?" is STILL unanswered because the artifact was defective | **Never run a strategy test on an unverified render.** A reach test only counts when the clip passed Phase 4. |
| Result data landed in `linkedin_performance_tracker.md` but the bank's shipped-video log still said "reach pending" | **Phase 6:** `/log-metrics` writes video rows to BOTH the tracker and `video_content_bank.md` → Shipped video performance log, same paste. |

## The process (six phases, each with a gate)

**Phase 0 — Source.** Mode A (scripted talking-head, from `video_content_bank.md` → Active shoot-list) or Mode B (podcast repurpose via `/clip-podcast`). The bank is the only source of concepts; `/build-week` pulls the Wednesday 9:16 slot from it. *Gate: the concept is in the bank with a shape + anchor; no ad-hoc topics.*

**Phase 1 — Plan / script.** Every clip or script must state: the **shape** (reveal > dollar-comparison > decoder > origin, per measured ceilings), hook in the first 3s, one proprietary anchor, ONE idea per clip, target lengths (short cut **15-25s** — the completion zone; LinkedIn long cut only when value-dense, ≤75s), the toolkit CTA. Reveal-shaped scripts build to the 7-element formula, video edition (`video_content_bank.md`). **Hook & retention spec** (per the bank's "Hook & retention playbook," refreshed monthly by `/video-research`): hook = ONE promise, spoken + on-screen together; ≥1 cutaway per clip; clips >25s carry a `midHook` re-engagement beat; a late-landing money line may take a **selective** `coldOpen` teaser (not every clip — skip when the clip already opens strong); countable payloads order weakest→strongest and say so; scripted concepts carry TWO hook variants (the alternate is the retest). *Gate: a reach-slot video that is not reveal- or dollar-shaped needs a stated reason (vocabulary decoders measured 8-30x below reveals in summer).*

**Phase 1b — Film (Mode A only).** Ginny records to the bank's **"Mode A shoot kit"** spec (`video_content_bank.md`): rear camera 4K/30 native 9:16, eye-level tripod, window light facing her, quiet room (wired lav if available), chest-up framing with headroom/margin for the punch-in crop, the recurring on-brand location (office/desk/bookshelf — never car/walking/lifestyle backdrops), hook memorized + beats spoken (never read), BOTH hook variants recorded, 3-5s clean silence before/after each take, nothing burned in (no in-app captions/filters/music — Remotion adds all overlays), file transferred by AirDrop/cable. *Gate: footage that violates the capture spec (backlit, bad audio, edge-tight framing) gets re-shot, not "fixed in the edit" — no render repairs capture.*

**Phase 2 — Manifest + captions.** `/clip-podcast` emits the `.md` plan + `.json` manifest; Whisper (`transcribe_clips.py`) writes word-level timing back; correction map covers PBM-term mis-hears. Timing convention: captions are segment-relative (2s pad), cutaways/overlays/fades are absolute source seconds. *Gate: every audible word has an on-screen home; clips start on a full sentence; no orphaned audio tail.*

**Phase 3 — Render.** `git pull` first (the render machine must have the current component — the Jul 1 fixes were once stranded on a branch), then `cd social_clips/remotion_starter && node render-with-extract.mjs [v1|v2|clipId]`. Designed covers: `node render-designed-covers.mjs`. Elevations ship as **v2 second versions** (`*v2` manifest entries), never edits to a shipped v1. *Gate: render completes for both formats; the 9:16 is the LinkedIn hero.*

**Phase 4 — QC (the gate that was missing).** Two steps, in order:
1. **Masked-frame check:** `node qc-frames.mjs` → dead-zone-masked stills in `out/qc/` (hook @0.2s + 2s, mid-clip captions, nameplate window, end card). Run `/video-qc` to have Claude verify them against the pre-export checklist, or eyeball them: nothing critical under a red zone, captions 2-4 words/line and thumbnail-legible, hook present from the first frame, end card = logo + rxbs.org + CTA.
2. **Phone preview:** the passing 9:16 viewed on an actual phone in the LinkedIn feed AND expanded view.
*Gate: a clip that fails either step does not post. This is the video `_audit_pdfs.py` — a ship gate, not a later cleanup pass.*

**Phase 5 — Publish.** Wednesday slot, 8:30 AM ET, **9:16 uploaded as a native file from Ginny's personal profile** (never a link), designed-cover PNG as the custom thumbnail where offered, link-free body copy from the clip plan, first comment → the clip's toolkit, LinkedIn-first rule (no X scoop before the LinkedIn post), one video per day (no double-posting against a static). *Gate: the week file / clip plan's copy is what posts — no improvised captions.*

**Phase 6 — Measure + learn.** At ~48h and ~7d capture impressions, video views, avg watch (compute completion % against clip length), in/out-of-network split, saves, followers. Paste into `/log-metrics`, which logs the tracker AND the bank's shipped-video log in the same pass. Two consecutive soft ships of the same shape → the shape rotates down (bank's fatigue rule). `/video-research` (monthly, 20th) re-ranks the shoot-list on this data. *Gate: no video row may sit "pending" in the bank once the tracker has the numbers.*

## Spec map (one canonical home per concern — drift killed two render cycles)

| Concern | Canonical file |
|---|---|
| Safe zones / burn-in / caption sizing (prose) | `video_content_bank.md` → "9:16 in-feed render spec" |
| As-built render constants, treatments, lessons, v2 features | `social_clips/remotion_starter/CLIP_RENDER_SPEC.md` |
| Template props / brand system | `social_clips/remotion_pbs_caption_template_spec.md` |
| The implementation itself | `social_clips/remotion_starter/src/Clip.tsx` (+ `DesignedCoverAny.tsx`) |
| Concepts, shoot-list, performance log, formula | `video_content_bank.md` |
| Process + gates (this file) | `video_production_runbook.md` |

When a live-feed review changes a constant: fix `Clip.tsx` in the same session as the spec prose, and `/system-audit` checks the two agree (drift item below).

## Automation map — what runs itself, what Claude does, what only Ginny can do

**Already automated (standing):** `/video-research` monthly bank refresh (20th) · `/build-week` pulls the Wednesday slot from the bank · `/clip-podcast` turns any appearance into plan + manifest · `/platform-research` refreshes the playbook the clip plans read.

**New with this runbook:** `qc-frames.mjs` (deterministic dead-zone frames) · `/video-qc` (Claude visually verifies the frames + checklist → PASS/FAIL per clip) · `render-designed-covers.mjs` (per-clip designed thumbnails, both aspects, zero design labor) · v2 elevated treatment as second versions.

**Recommended next agents (proposed, not yet built):**
1. **Clip-scout on new appearances** — when a new podcast episode URL lands, a session runs `/clip-podcast` automatically and posts the plan for approval (extends the podcast-sprint loop).
2. **Video-metrics nudge** — the existing weekly metrics reminder explicitly lists any video shipped that week with the fields to capture (avg watch, in-network %), so completion data never goes missing.
3. **Spec-drift check in `/system-audit`** — monthly: confirm `Clip.tsx` constants match the bank's 9:16 spec numbers and `CLIP_RENDER_SPEC.md`'s table.
4. **A/B ledger** — when both a v1 and v2 of the same moment have shipped, `/log-metrics` writes a one-line verdict (which treatment won on completion) so the treatment set self-tunes.

**Only Ginny (by design):** filming Mode A scripts (phone, 9:16, hook first), the phone preview, the actual upload + first comment, and any spend.

## Standing strategy note (from the measured data, Jul 2026)

The static shocking-fact reveal is the proven organic engine (5.5-17.8K); video's job right now is **(a) the Wednesday format swap** that carries the same named-actor confrontation, **(b) the person-entity** (talking-head authority no competitor in the niche is running), and **(c) the still-open 9:16 video-tab reach test** — which only counts on a Phase-4-clean render. Do not scale video cadence past weekly until a clean 9:16 shows the video tab actually reaches non-followers; if two clean tests stay in-network and modest, video stays the trust/variety format while static reveals keep the reach job.
