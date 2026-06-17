// Render every clip in a /clip-podcast manifest across platform formats.
// LinkedIn (4:5) batch first, then vertical 9:16 (Reels / TikTok / Shorts).
//
// Usage:   node render-all-platforms.mjs [manifest.json]
// Prereq:  the episode video at public/<manifest.sourceVideo>  (default public/source.mp4)
// Watch:   progress streams to stdout AND to out/render.log (tee'd by run-and-log.sh)
//
// In this sandbox Remotion's Chromium CDN is blocked, so we point at the
// pre-installed Playwright headless_shell via --browser-executable. Override
// with REMOTION_BROWSER if the path differs in your environment.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";

const manifestPath = process.argv[2] || "../honest-hr-shrm_2026-06-09_clips.json";
const m = JSON.parse(readFileSync(manifestPath, "utf8"));
const fps = m.fps || 30;
const CHROME =
  process.env.REMOTION_BROWSER ||
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";

if (!existsSync(`public/${m.sourceVideo}`)) {
  console.error(
    `\n✗ Missing public/${m.sourceVideo}.\n  Drop the episode video there (named ${m.sourceVideo}) and re-run.\n`
  );
  process.exit(1);
}

mkdirSync("out", { recursive: true });
mkdirSync(".tmp", { recursive: true });

// LinkedIn first (as requested), then the vertical platforms.
const FORMATS = [
  { aspect: "4x5", comp: "Clip4x5", label: "LinkedIn / X feed (1080x1350)" },
  { aspect: "9x16", comp: "Clip9x16", label: "Reels / TikTok / Shorts (1080x1920)" },
];

const t0 = Date.now();
// Use the sandbox's pre-installed headless_shell if present; otherwise let
// Remotion use/download its own Chromium (the normal case on a local machine).
const browserFlag = existsSync(CHROME) ? `--browser-executable="${CHROME}"` : "";
for (const f of FORMATS) {
  console.log(`\n=== FORMAT: ${f.label} ===`);
  for (const clip of m.clips) {
    // captions/words are timed to a ~2s-padded segment; this path plays the full source at
    // absolute inSec, so map them to absolute source seconds = (inSec - 2) + value.
    // overlays/cutaways/audioFade are already absolute and need no shift.
    const adj = {
      ...clip,
      captions: (clip.captions || []).map(c => ({ ...c, startSec: c.startSec + clip.inSec - 2, endSec: c.endSec + clip.inSec - 2 })),
      words: (clip.words || []).map(w => ({ ...w, startSec: w.startSec + clip.inSec - 2, endSec: w.endSec + clip.inSec - 2 })),
    };
    const props = { sourceVideo: m.sourceVideo, fps, clip: adj };
    const propsPath = `.tmp/props-${clip.id}-${f.aspect}.json`;
    writeFileSync(propsPath, JSON.stringify(props));
    const out = `out/${m.date}_${clip.slug || clip.id}_${f.aspect}.mp4`;
    console.log(`▶ ${out}  (${clip.inSec}s–${clip.outSec}s)`);
    execSync(
      `npx remotion render src/index.ts ${f.comp} ${out} --props=${propsPath} ${browserFlag} --log=error`,
      { stdio: "inherit" }
    );
  }
}

rmSync(".tmp", { recursive: true, force: true });
const secs = Math.round((Date.now() - t0) / 1000);
console.log(
  `\n✓ Done in ${secs}s. ${m.clips.length} clips x ${FORMATS.length} formats in ./out`
);
