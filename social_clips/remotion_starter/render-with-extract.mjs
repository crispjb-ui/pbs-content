// Pre-extract each clip's segment with ffmpeg, then render via Remotion.
// This avoids OOM from Remotion's compositor seeking into a large source video.
//
// Usage:  node render-with-extract.mjs [manifest.json]
// Prereq: the episode video at public/<manifest.sourceVideo>  (default public/source.mp4)
//         ffmpeg on PATH
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, copyFileSync } from "node:fs";

// Usage:  node render-with-extract.mjs [manifest.json] [clipId]
//   - render one clip:  node render-with-extract.mjs clip4   (default manifest)
//   - render all:       node render-with-extract.mjs
const arg2 = process.argv[2];
const manifestPath = (arg2 && arg2.endsWith(".json")) ? arg2 : "../honest-hr-shrm_2026-06-09_clips.json";
const clipFilter = (arg2 && !arg2.endsWith(".json")) ? arg2 : process.argv[3];
const m = JSON.parse(readFileSync(manifestPath, "utf8"));
const fps = m.fps || 30;
const clips = clipFilter ? m.clips.filter(c => c.id === clipFilter || c.slug === clipFilter) : m.clips;
if (clipFilter && !clips.length) { console.error(`\n✗ No clip matching "${clipFilter}".\n`); process.exit(1); }
if (clipFilter) console.log(`(rendering only: ${clips.map(c => c.id).join(", ")})`);

if (!existsSync(`public/${m.sourceVideo}`)) {
  console.error(`\n✗ Missing public/${m.sourceVideo}.\n`);
  process.exit(1);
}

mkdirSync("out", { recursive: true });
mkdirSync(".tmp", { recursive: true });

// Step 1: Pre-extract each clip's segment with ffmpeg (fast keyframe seek + re-encode short segment)
console.log("=== STEP 1: Extracting clip segments with ffmpeg ===");
for (const clip of m.clips) {
  const pad = 2; // seconds of padding before/after for safety
  const ss = Math.max(0, clip.inSec - pad);
  const duration = (clip.outSec - clip.inSec) + pad * 2;
  const segPath = `.tmp/seg_${clip.id}.mp4`;

  if (existsSync(segPath)) {
    console.log(`  ✓ ${segPath} (cached)`);
    continue;
  }

  console.log(`  ▶ Extracting ${clip.id}: ${clip.inSec}s–${clip.outSec}s → ${segPath}`);
  execSync(
    `ffmpeg -y -ss ${ss} -i "public/${m.sourceVideo}" -t ${duration} -c:v libx264 -preset fast -crf 18 -c:a aac -b:a 128k "${segPath}"`,
    { stdio: "inherit" }
  );
}

// Step 2: Render each clip x format via Remotion using the short segment
console.log("\n=== STEP 2: Rendering clips via Remotion ===");
const FORMATS = [
  { aspect: "4x5", comp: "Clip4x5", label: "LinkedIn / X feed (1080x1350)" },
  { aspect: "9x16", comp: "Clip9x16", label: "Reels / TikTok / Shorts (1080x1920)" },
];

const t0 = Date.now();
for (const f of FORMATS) {
  console.log(`\n--- FORMAT: ${f.label} ---`);
  for (const clip of clips) {
    const pad = 2;
    const ss = Math.max(0, clip.inSec - pad);

    // Adjust clip timecodes to the extracted segment's clock (segment frame 0 = ss).
    // captions/words are ALREADY timed to a ~2s-padded segment (the same pad this extractor uses),
    // so they pass through UNSHIFTED — keeping karaoke in sync with the audio. (Adding the pad again
    // was what pushed captions ~2s late.) inSec/outSec and the ABSOLUTE-source fields
    // (overlays/cutaways/audioFade/fitWindows) shift by -ss into the segment clock.
    const adjustedClip = {
      ...clip,
      inSec: clip.inSec - ss,
      outSec: clip.outSec - ss,
      captions: clip.captions || [],
      words: clip.words || [],
      overlays: (clip.overlays || []).map(o => ({ ...o, startSec: o.startSec - ss, endSec: o.endSec - ss })),
      images: (clip.images || []).map(im => ({ ...im, startSec: im.startSec - ss, endSec: im.endSec - ss })),
      cutaways: (clip.cutaways || []).map(c => ({ ...c, startSec: c.startSec - ss, endSec: c.endSec - ss, captionsFromSec: c.captionsFromSec != null ? c.captionsFromSec - ss : undefined })),
      audioFade: clip.audioFade ? { startSec: clip.audioFade.startSec - ss, endSec: clip.audioFade.endSec - ss } : undefined,
      fitWindows: (clip.fitWindows || []).map(w => ({ ...w, startSec: w.startSec - ss, endSec: w.endSec - ss })),
    };

    // The segment file is in .tmp/ but Remotion serves from public/,
    // so we copy (or symlink) it there temporarily.
    const segSrc = `.tmp/seg_${clip.id}.mp4`;
    const segDst = `public/seg_${clip.id}.mp4`;
    if (!existsSync(segDst)) {
      copyFileSync(segSrc, segDst); // cross-platform (was `cp`, which is Unix-only / fails on Windows)
    }

    const props = { sourceVideo: `seg_${clip.id}.mp4`, fps, clip: adjustedClip };
    const propsPath = `.tmp/props-${clip.id}-${f.aspect}.json`;
    writeFileSync(propsPath, JSON.stringify(props));

    const out = `out/${m.date}_${clip.slug || clip.id}_${f.aspect}.mp4`;
    console.log(`  ▶ ${out}  (${clip.inSec}s–${clip.outSec}s)`);

    try {
      execSync(
        `npx remotion render src/index.ts ${f.comp} ${out} --props=${propsPath} --concurrency=2 --log=error`,
        { stdio: "inherit", timeout: 300000 }
      );
      console.log(`  ✓ ${out}`);
    } catch (e) {
      console.error(`  ✗ FAILED: ${out} — ${e.message}`);
    }
  }
}

// Cleanup: remove segment copies from public/
for (const clip of m.clips) {
  const segDst = `public/seg_${clip.id}.mp4`;
  if (existsSync(segDst)) rmSync(segDst);
}

rmSync(".tmp", { recursive: true, force: true });
const secs = Math.round((Date.now() - t0) / 1000);
console.log(`\n✓ Done in ${secs}s. ${m.clips.length} clips × ${FORMATS.length} formats → ./out`);
