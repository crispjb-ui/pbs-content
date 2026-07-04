// Render a DESIGNED cover PNG for every clip in a manifest (the clip7-quality thumbnail,
// parameterized — hook + the clip's own cutaway payload as the static visual; no video needed).
//
// Usage:  node render-designed-covers.mjs [manifest.json] [clipId]
// Output: out/designed_cover_<slug>_<aspect>.png
//   - 4x5  → LinkedIn custom thumbnail (pencil icon on the attached video → thumbnail → upload)
//   - 9x16 → TikTok / Reels / Shorts cover chosen at upload
//
// This supersedes the generic render-covers.mjs stills for clips whose manifest carries a
// cutaway payload; keep render-covers.mjs for clips without one.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const arg2 = process.argv[2];
const manifestPath = (arg2 && arg2.endsWith(".json")) ? arg2 : "../honest-hr-shrm_2026-06-09_clips.json";
const clipFilter = (arg2 && !arg2.endsWith(".json")) ? arg2 : process.argv[3];
const m = JSON.parse(readFileSync(manifestPath, "utf8"));
const clips = clipFilter ? m.clips.filter(c => c.id === clipFilter || c.slug === clipFilter) : m.clips;
if (clipFilter && !clips.length) { console.error(`\n✗ No clip matching "${clipFilter}".\n`); process.exit(1); }

mkdirSync("out", { recursive: true });
mkdirSync(".tmp", { recursive: true });

const FORMATS = [
  { aspect: "4x5", comp: "DesignedCoverAny4x5" },
  { aspect: "9x16", comp: "DesignedCoverAny9x16" },
];

for (const clip of clips) {
  // Hook: beats joined read as the spoken hook; otherwise the title. Line 2 carries the payoff.
  const props = {
    hookLine1: (clip.hookBeats && clip.hookBeats.length) ? clip.hookBeats.join(" ") : clip.hookTitle,
    hookLine2: clip.hookLine2,
    accent: clip.hookAccent,
    showName: clip.showName || m.show,
    chip: (clip.cutaways && clip.cutaways[0]) || undefined,
  };
  const pp = `.tmp/designed-cover-${clip.id}.json`;
  writeFileSync(pp, JSON.stringify(props));
  for (const f of FORMATS) {
    const out = `out/designed_cover_${clip.slug || clip.id}_${f.aspect}.png`;
    console.log(`▶ ${out}`);
    execSync(`npx remotion still src/index.ts ${f.comp} ${out} --props=${pp}`, { stdio: "inherit" });
  }
}

rmSync(".tmp", { recursive: true, force: true });
console.log("\n✓ Designed covers in ./out — upload as the thumbnail/cover when posting (CLIP_RENDER_SPEC lesson 6).");
