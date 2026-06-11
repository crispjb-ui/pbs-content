"""Transcribe each seg_clip*.mp4 with faster-whisper (base.en, word timestamps).
Writes word-level data back into the clips manifest JSON.
"""
import json, sys, os

from faster_whisper import WhisperModel

MANIFEST = sys.argv[1] if len(sys.argv) > 1 else "../honest-hr-shrm_2026-06-09_clips.json"
MODEL_SIZE = "base.en"

print(f"Loading model {MODEL_SIZE}...")
model = WhisperModel(MODEL_SIZE, device="cpu", compute_type="int8")

with open(MANIFEST, "r", encoding="utf-8") as f:
    manifest = json.load(f)

for clip in manifest["clips"]:
    seg_path = f"public/seg_{clip['id']}.mp4"
    if not os.path.exists(seg_path):
        print(f"  SKIP {clip['id']}: {seg_path} not found")
        continue

    print(f"  Transcribing {clip['id']} ({seg_path})...")
    segments, info = model.transcribe(seg_path, word_timestamps=True, language="en")

    # The segment file was extracted with 2s padding before clip.inSec.
    # So the audio offset within the segment = clip.inSec - max(0, clip.inSec - 2) = min(2, clip.inSec)
    pad = 2
    seg_offset = max(0, clip["inSec"] - pad)  # absolute time the segment starts at
    clip_in_local = clip["inSec"] - seg_offset  # clip start relative to segment
    clip_out_local = clip["outSec"] - seg_offset  # clip end relative to segment

    words = []
    for segment in segments:
        if segment.words is None:
            continue
        for w in segment.words:
            # Only keep words inside the clip's time window (with small tolerance)
            if w.end < clip_in_local - 0.1:
                continue
            if w.start > clip_out_local + 0.1:
                continue
            words.append({
                "startSec": round(w.start, 3),
                "endSec": round(w.end, 3),
                "text": w.word.strip(),
            })

    clip["words"] = words
    # Also rewrite captions as phrase-level groups (~5-7 words) for the TikTok pager
    phrases = []
    WORDS_PER_PHRASE = 6
    for i in range(0, len(words), WORDS_PER_PHRASE):
        group = words[i : i + WORDS_PER_PHRASE]
        phrases.append({
            "startSec": group[0]["startSec"],
            "endSec": group[-1]["endSec"],
            "text": " ".join(g["text"] for g in group),
        })
    clip["captions"] = phrases
    print(f"    -> {len(words)} words, {len(phrases)} phrases")

# Write updated manifest
with open(MANIFEST, "w", encoding="utf-8") as f:
    json.dump(manifest, f, indent=2, ensure_ascii=False)

print(f"\nManifest updated: {MANIFEST}")
