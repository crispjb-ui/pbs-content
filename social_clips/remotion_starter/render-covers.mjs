// Render a cover/thumbnail PNG for every clip in a manifest (hook + face + brand).
// Usage: node render-covers.mjs clips.json
// Output: out/cover_<slug>_<aspect>.png  → upload as the cover on TikTok/Shorts/X (and LinkedIn where offered).
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const m = JSON.parse(readFileSync(process.argv[2] || "clips.json", "utf8"));
const fps = m.fps || 30;
mkdirSync("out", { recursive: true });
mkdirSync(".tmp", { recursive: true });

for (const clip of m.clips) {
  const compId = clip.aspect === "4x5" ? "Clip4x5" : "Clip9x16";
  const props = { sourceVideo: m.sourceVideo, fps, clip, coverMode: true };
  const pp = `.tmp/cover-${clip.id}.json`;
  writeFileSync(pp, JSON.stringify(props));
  // Grab the background frame ~40% into the clip (usually a good, mid-expression shot of the speaker).
  const frameAt = Math.round((clip.outSec - clip.inSec) * fps * 0.4);
  const out = `out/cover_${clip.slug || clip.id}_${clip.aspect}.png`;
  console.log(`▶ cover ${out} (frame ${frameAt})`);
  execSync(`npx remotion still src/index.ts ${compId} ${out} --frame=${frameAt} --props=${pp}`, { stdio: "inherit" });
}

rmSync(".tmp", { recursive: true, force: true });
console.log("\n✓ Covers in ./out — upload as the cover/thumbnail when posting.");
