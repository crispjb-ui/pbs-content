// QC frame extractor — the automated pre-publish gate for rendered clips.
// For every rendered MP4 it pulls still frames at the moments that historically break
// (hook @0.2s + 2s, badge/captions @ mid-clip, nameplate window, end card) and burns the
// platform DEAD-ZONE MASK over each frame in translucent red, so a reviewer (or Claude via
// /video-qc) can see instantly whether any text/chrome sits in a zone the platform covers.
//
//   9:16 mask: top ~8% (status-bar crop) · right ~12% (reaction rail) · bottom ~18% (LinkedIn poster stamp)
//   4:5  mask: left+right ~11% (mobile side crop) · top ~13% (expanded-view header band)
//   (zones per video_content_bank.md → "9:16 in-feed render spec" and CLIP_RENDER_SPEC lesson 8)
//
// Usage:  node qc-frames.mjs                 → QC every MP4 in ./out
//         node qc-frames.mjs out/foo.mp4 …   → QC specific files
// Output: out/qc/<name>_t<sec>.png  (mask burned in) + a per-file summary line.
// Prereq: ffmpeg + ffprobe on PATH. Frames are ~200KB each; delete out/qc/ after review.
import { execSync } from "node:child_process";
import { readdirSync, mkdirSync, existsSync } from "node:fs";
import { basename } from "node:path";

const args = process.argv.slice(2);
const files = args.length
  ? args
  : (existsSync("out") ? readdirSync("out").filter(f => f.endsWith(".mp4")).map(f => `out/${f}`) : []);

if (!files.length) {
  console.error("✗ No MP4s found (looked in ./out). Render first, or pass file paths.");
  process.exit(1);
}
mkdirSync("out/qc", { recursive: true });

const probe = (file) => {
  const j = JSON.parse(execSync(
    `ffprobe -v quiet -print_format json -show_streams -show_format "${file}"`
  ).toString());
  const v = j.streams.find(s => s.codec_type === "video");
  return { w: v.width, h: v.height, dur: parseFloat(j.format.duration) };
};

// Translucent red drawboxes over the platform dead zones.
const maskFilter = (w, h) => {
  const vertical = h / w > 1.5;
  return vertical
    ? [
        `drawbox=x=0:y=0:w=iw:h=ih*0.08:color=red@0.30:t=fill`,        // top status-bar crop
        `drawbox=x=iw*0.88:y=0:w=iw*0.12:h=ih:color=red@0.30:t=fill`,  // right reaction rail
        `drawbox=x=0:y=ih*0.82:w=iw:h=ih*0.18:color=red@0.30:t=fill`,  // bottom LinkedIn stamp
      ].join(",")
    : [
        `drawbox=x=0:y=0:w=iw*0.11:h=ih:color=red@0.30:t=fill`,        // left side crop
        `drawbox=x=iw*0.89:y=0:w=iw*0.11:h=ih:color=red@0.30:t=fill`,  // right side crop
        `drawbox=x=0:y=0:w=iw:h=ih*0.13:color=red@0.30:t=fill`,        // expanded-view header band
      ].join(",");
};

for (const file of files) {
  const { w, h, dur } = probe(file);
  const name = basename(file, ".mp4");
  const vf = maskFilter(w, h);
  // The moments that historically break: hook first frame, hook fully built, badge+captions
  // mid-clip, nameplate/cutaway window, end card.
  const times = [0.2, 2.0, dur * 0.45, Math.max(0, dur - 6), Math.max(0, dur - 1.5)]
    .map(t => Math.min(Math.max(t, 0), Math.max(0, dur - 0.05)));
  const seen = new Set();
  for (const t of times) {
    const key = t.toFixed(1);
    if (seen.has(key)) continue;
    seen.add(key);
    const out = `out/qc/${name}_t${key}.png`;
    execSync(`ffmpeg -y -v error -ss ${key} -i "${file}" -frames:v 1 -vf "${vf}" "${out}"`);
  }
  console.log(`✓ ${name} (${w}x${h}, ${dur.toFixed(1)}s) → ${seen.size} QC frames in out/qc/`);
}

console.log(`
Review each frame: NOTHING critical (hook, captions, logo, badge, nameplate, CTA) may sit
under a red zone, captions must read at thumbnail size, the hook must exist at t0.2, and the
end card must show logo + rxbs.org + CTA. Full checklist: video_content_bank.md →
"9:16 in-feed render spec" → pre-export checklist. Phone preview is still the final gate.`);
