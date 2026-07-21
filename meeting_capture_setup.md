# Meeting Capture Setup — Ginny's face-cam content pipeline

_Created Jul 21, 2026 (Brett-requested). Goal: record Ginny's face + voice through her normal meeting day (Teams + Fathom, tri-screen laptop rig) so client meetings, broker calls, and internal sessions become raw material for the video pipeline, WITHOUT changing what the client sees. The problem being solved: when Ginny presents, Teams shares the deck, so no face view exists anywhere in the Teams/Fathom recording._

## The architecture in one paragraph

Teams keeps doing exactly what it does (deck shared, Fathom recording + transcribing). In parallel, a **local recording captures Ginny's camera full-frame and her mic**, all meeting long. Fathom's transcript + highlights become the INDEX into that footage: find the moment in the transcript, cut the same timestamp from the face cam.

**Audio reality (confirmed Jul 21, 2026): Ginny uses her computer speakers, no headphones.** So the client's voice bleeds onto the local mic track. That makes the local recording, audio-wise, the same thing Fathom already captures with notice: a meeting recording. Treat it accordingly — **the raw local file has Fathom-recording confidentiality (internal raw material, never published as-is)**, and the "Ginny-only" discipline moves from capture time to edit time (rule 1 below). If she ever accepts a single earbud / open-ear option (one AirPod, Shokz), most client audio comes off the track and everything gets easier; offer once, do not fight for it.

## The three rules that make the footage usable

1. **Publishable clips = segments where only Ginny is speaking.** This costs little in practice: the content-rich stretches are her PRESENTING, exactly when the client is silent. Q&A back-and-forth (client voice on track) was mostly non-publishable anyway; those moments become `/question-harvest` entries + 60-second to-camera re-records. Every published cut gets a listen-through confirming no client voice, name, or identifying detail survives.
2. **Camera at eye level, on-axis with the center screen.** Mounted just above where the presentation window sits, so when she presents she is looking almost straight into the lens. An off-to-the-side camera produces a permanent profile view that reads as surveillance footage, not content.
3. **Record 4K (or highest available) horizontal.** The 9:16 vertical crop for LinkedIn happens in post per the render spec in `video_content_bank.md`; 4K source gives room to punch in and reframe. 1080p is the floor, not the target.

## Two capture paths (both work with the current rig)

### Path A — OBS + virtual camera (software-only, $0, start this week)
1. Install OBS Studio on the Lenovo. Scene: the webcam full-frame + her mic as the only audio source.
2. **OBS claims the physical webcam; Teams uses "OBS Virtual Camera" as its camera.** (Windows lets only one app own a webcam, so this is the standard way two apps share one camera: OBS owns it, Teams gets the passthrough.) Client sees her exactly as before.
3. Mic: Windows allows multi-app mic access, so OBS records the mic directly while Teams uses it too. No virtual audio routing needed.
4. Hotkey start/stop (e.g. Ctrl+Shift+R), one file per meeting, filenames `YYYY-MM-DD_meeting-slug.mkv` (record MKV, remux to MP4 — survives crashes). ~2-4 GB/hour at 1080p, more at 4K; a cheap external SSD covers months.

### Path B — phone on a tripod (best image she already owns, also $0)
Her phone on a small tripod, positioned per rule 2, recording 4K locally to the phone. It never touches Teams at all, so there is nothing to configure and nothing that can break the client call. Sync in post is automatic (Descript/Premiere align by waveform against the Fathom audio). Downside: storage offload + battery management, and remembering to hit record; upside: best sensor in the house and total isolation from the meeting stack.

**Recommendation: start with Path B tomorrow (zero setup), migrate to Path A as the daily default once OBS is configured, keep the phone as the second angle for planned recordings.**

## The hardware upgrade that actually matters (~$150-250, when ready)

- **A close mic FIRST (lav clipped on, or a USB mic at arm's length) — moved to first purchase in the no-headphones configuration.** With speakers up and a laptop built-in mic, her voice and the client's land at similar levels plus room echo on the raw track. A close mic makes her voice dominate by a wide margin: better-sounding clips AND client bleed drops to easily-cut-around background level.
- **Eye-level 4K webcam** (e.g. Logitech Brio/MX Brio class), mounted on the center screen's top edge or a small desk arm at eye height. The laptop's built-in camera is below eye level on her riser setup and will always read as looking down at the viewer.
- **Light source facing her** (the window she faces, or a small key light) — the blinds-behind-her arrangement will silhouette her on camera; either face the window or add the light.

## Workflow: from meeting day to clips

1. **During meetings:** recording runs; when Ginny says something that lands (a client asks the anxiety question, she nails an explanation), she taps **Fathom's highlight button** — that is the entire logging burden on her, one tap.
2. **Weekly harvest (Brett):** pull the week's Fathom highlights + transcript search (the buyer-anxiety map's question list is the search vocabulary), map timestamps to the local files, cut candidate segments.
3. **Everything downstream already exists:** candidates go through the standard six-phase pipeline in `video_production_runbook.md` (reveal-first cut, 15-25s short-cut target, Remotion caption template, 9:16 safe zones, `/video-qc` gate, phone preview). This capture system is a new SOURCE feeding the existing pipeline, not a new pipeline.
4. **`/question-harvest` side benefit:** the transcript moments where clients ask questions feed the anxiety map and FAQ even when the footage itself isn't used.

## Compliance guardrails (load-bearing, same family as the closeout-kit rules)

- Fathom's meeting-recording notice stays on for every call, unchanged — it is what covers the meeting audio that bleeds onto the local track.
- **The raw local file is confidential** (same handling as the Fathom recording: internal storage, no sharing outside the production workflow, never published as-is).
- **Nothing client-identifying ever publishes:** no client names, no shared-screen content (never in frame by design), no client voice (edited out per rule 1 — every published cut gets a listen-through). Client-call footage of Ginny explaining a general concept is publishable raw material; anything where she names the client, the numbers, or the situation specifically is either cut around or treated as a re-record prompt ("say the anonymized version to camera in 60 seconds").
- When in doubt, the clip becomes a **re-record prompt, not a publish** — the meeting proved the explanation works; the clean version takes one minute to re-say. This is often the better content anyway (tighter, reveal-first).
- Anonymization rules of record: `engagement_closeout_kit.md`. High-stakes clips pass the normal gates.

## What NOT to do

- Do not rely on Teams recording layouts, Teams Premium composites, or Fathom's speaker view for face footage while screen-sharing. The face view is small, compressed, and framed for the meeting, not for content.
- Do not point a camera at any screen showing client material.
- Do not publish any cut without the client-voice listen-through; in the speakers-up configuration the raw track always contains meeting audio.
