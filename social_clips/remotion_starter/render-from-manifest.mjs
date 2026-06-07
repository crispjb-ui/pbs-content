// Render every clip in a /clip-podcast manifest.
// Usage: node render-from-manifest.mjs clips.json
// Prereq: source video downloaded into public/ and named to match manifest.sourceVideo.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const manifestPath = process.argv[2] || "clips.json";
const m = JSON.parse(readFileSync(manifestPath, "utf8"));
const fps = m.fps || 30;

mkdirSync("out", { recursive: true });
mkdirSync(".tmp", { recursive: true });

for (const clip of m.clips) {
  const compId = clip.aspect === "4x5" ? "Clip4x5" : "Clip9x16";
  const props = { sourceVideo: m.sourceVideo, fps, clip };
  const propsPath = `.tmp/props-${clip.id}.json`;
  writeFileSync(propsPath, JSON.stringify(props));
  const out = `out/${m.date}_${clip.slug || clip.id}_${clip.aspect}.mp4`;
  console.log(`\n▶ Rendering ${out}  (${compId}, ${clip.inSec}s–${clip.outSec}s)`);
  execSync(`npx remotion render src/index.ts ${compId} ${out} --props=${propsPath}`, {
    stdio: "inherit",
  });
}

rmSync(".tmp", { recursive: true, force: true });
console.log(`\n✓ Done. Clips in ./out — post each with the copy from the /clip-podcast plan.`);
