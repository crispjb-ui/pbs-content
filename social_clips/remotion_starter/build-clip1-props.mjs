// One-off: build clip1_4x5.props.json from the manifest in the segment-relative
// convention clip7 uses. clip1's captions/words in the manifest are ALREADY
// relative to seg_clip1.mp4 (Whisper wrote them back per transcribe_clips.py),
// so we just trim them to a clean window and author the spread equation cutaway
// the current Clip.tsx renders (the legacy `overlays` field is no longer drawn).
import { readFileSync, writeFileSync } from "node:fs";

const m = JSON.parse(readFileSync("../honest-hr-shrm_2026-06-09_clips.json", "utf8"));
const c = m.clips.find((x) => x.id === "clip1");

const IN = 2.8;       // start just before "PBMs are allowed" (first caption 2.88)
const CONTENT_END = 23.74; // last kept word "money" ends here
const OUT = 26.24;    // + ~2.5s end card

const props = {
  sourceVideo: "seg_clip1.mp4",
  fps: 30,
  clip: {
    id: "clip1",
    slug: "spread-pricing-glp1",
    inSec: IN,
    outSec: OUT,
    aspect: "4x5",
    platform: "linkedin",
    hookTitle: "They pay the pharmacy $100.",
    hookLine2: "They charge you $120.",
    showName: "Honest HR (SHRM)",
    audioFade: { startSec: CONTENT_END, endSec: CONTENT_END + 0.5 },
    tagline: "We audit hundreds of PBM contracts a year.",
    ctaLine: "Free Channel Pricing Audit Worksheet → link in comments",
    cta: { text: "Channel Pricing Audit Worksheet", url: "rxbs.org/toolkit/channel-pricing" },
    cutaways: [
      {
        type: "equation",
        startSec: 9.7,   // "...could pay the pharmacy one price..."
        endSec: 15.0,    // aligns to a caption boundary; karaoke resumes after
        equation: {
          totalNum: 120, totalLabel: "charged to you",
          segA: "$100", segANum: 100, segALabel: "paid to the pharmacy",
          segB: "$20", segBNum: 20, segBLabel: "SPREAD",
          note: "Illustrative example. Actual amounts vary by plan.",
        },
      },
    ],
    captions: (c.captions || []).filter((x) => x.startSec < CONTENT_END),
    words: (c.words || []).filter((x) => x.endSec <= CONTENT_END + 0.05),
  },
};

writeFileSync("clip1_4x5.props.json", JSON.stringify(props, null, 2));
console.log(
  `clip1_4x5.props.json written: ${props.clip.captions.length} captions, ${props.clip.words.length} words, ` +
  `window ${IN}s-${OUT}s, last word "${props.clip.words.at(-1)?.text}"`
);
