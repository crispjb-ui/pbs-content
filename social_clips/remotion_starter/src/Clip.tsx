import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Img,
} from "remotion";
import { loadFont as loadSans } from "@remotion/google-fonts/IBMPlexSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const { fontFamily: SANS } = loadSans("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});
const { fontFamily: MONO } = loadMono("normal", {
  weights: ["500", "600", "700"],
  subsets: ["latin"],
});

const PRIMARY = "#015880";
const ACCENT = "#A7E0FA";
const WHITE = "#FFFFFF";

// ── Transcription corrections ──
const CORRECTIONS: Record<string, string> = {
  "GOP": "GLP-1", "GLP1": "GLP-1", "GLP1s": "GLP-1s",
  "passive": "pass-through", "blinds.": "blind.",
};
const correctWord = (w: string) => CORRECTIONS[w] ?? w;

// Highlight dollar amounts in accent blue within hook text
const highlightDollars = (text: string): React.ReactNode => {
  const parts = text.split(/(\$[\d,]+)/g);
  return parts.map((part, i) => {
    if (/^\$[\d,]+$/.test(part.trim())) {
      return <span key={i} style={{ color: ACCENT, fontFamily: MONO, fontWeight: 700 }}>{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
};

// Highlight dollars AND an optional accent phrase (e.g. "Net cost") in accent blue.
const highlightHook = (text: string, accent?: string): React.ReactNode => {
  if (accent) {
    const idx = text.toLowerCase().indexOf(accent.toLowerCase());
    if (idx >= 0) {
      const before = text.slice(0, idx);
      const match = text.slice(idx, idx + accent.length);
      const after = text.slice(idx + accent.length);
      return (
        <>
          {highlightDollars(before)}
          <span style={{ color: ACCENT }}>{match}</span>
          {highlightDollars(after)}
        </>
      );
    }
  }
  return highlightDollars(text);
};

// ── Types ──
export type Caption = { startSec: number; endSec: number; text: string };
export type Word = { startSec: number; endSec: number; text: string };
export type Overlay = {
  startSec: number; endSec: number;
  big: string; small?: string;
  position?: "center" | "top" | "top-left";
  type?: "stat" | "equation";
  equation?: { total: string; segA: string; segALabel: string; segB: string; segBLabel: string; note?: string };
};
export type ImageCut = { startSec: number; endSec: number; src: string; position?: "corner" | "full" };
export type Cutaway = {
  startSec: number; endSec: number;
  type: "equation" | "image" | "stat";
  captionsFromSec?: number;
  equation?: { totalNum: number; totalLabel: string; segA: string; segANum: number; segALabel: string; segB: string; segBNum: number; segBLabel: string; note?: string };
  stat?: {
    title?: string;
    lines: { pre: string; key: string; post?: string }[];
    callout?: string;
    rowFrames?: number[];
    snapFrame?: number;
  };
  src?: string;
  imageTitle?: string;
  imageSubtitle?: string;
};
export type ClipData = {
  id: string; slug?: string;
  inSec: number; outSec: number;
  aspect: "9x16" | "4x5";
  platform?: string;
  hookTitle: string; hookLine2?: string; hookAccent?: string;
  hookBeats?: string[];
  showName: string;
  audioFade?: { startSec: number; endSec: number };
  cta?: { text: string; url: string };
  ctaLine?: string;
  tagline?: string;
  overlays?: Overlay[];
  cutaways?: Cutaway[];
  images?: ImageCut[];
  words?: Word[];
  captions: Caption[];
};
export type ClipProps = { sourceVideo: string; fps: number; clip: ClipData; coverMode?: boolean };

export const clipDefaultProps: ClipProps = {
  sourceVideo: "source.mp4", fps: 30,
  clip: {
    id: "clip1", inSec: 0, outSec: 10, aspect: "9x16",
    hookTitle: "Hook line 1", hookLine2: "Hook line 2", showName: "Show Name",
    cta: { text: "Free toolkit", url: "rxbs.org/toolkit/pbm-compensation" },
    overlays: [], cutaways: [], images: [], words: [], captions: [],
  },
};

// ── Animated Equation Cutaway ──
const EquationCutaway: React.FC<{
  cut: Cutaway; localFrame: number; durFrames: number; fps: number; width: number; height: number;
}> = ({ cut, localFrame, durFrames, fps, width, height }) => {
  const eq = cut.equation!;

  const transIn = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 140 } });
  const transOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const envelope = Math.min(transIn, transOut);
  const envScale = interpolate(transIn, [0, 1], [0.92, 1]);
  const envScaleOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
  const countTo = eq.totalNum;
  const countVal = Math.round(interpolate(localFrame, [0, 12], [0, countTo], { extrapolateRight: "clamp" }));

  const barWidth = interpolate(localFrame, [12, 24], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const splitProg = interpolate(localFrame, [24, 32], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const snapSpring = spring({ frame: Math.max(0, localFrame - 32), fps, config: { damping: 10, stiffness: 200, mass: 0.6 } });
  const snapScale = interpolate(snapSpring, [0, 0.5, 1], [1.0, 1.18, 1.0]);
  const snapGlow = interpolate(localFrame, [32, 36, 44], [0, 20, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const segBColor = localFrame >= 32 ? ACCENT : WHITE;
  const labelSlide = spring({ frame: Math.max(0, localFrame - 34), fps, config: { damping: 14, stiffness: 120 } });

  const barW = width * 0.72;
  const segAFrac = eq.segANum / eq.totalNum;

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY, opacity: envelope, transform: `scale(${Math.min(envScale, envScaleOut)})`, zIndex: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 50px" }}>
        <div style={{ opacity: titleSpring, transform: `translateY(${(1 - titleSpring) * -30}px)`, marginBottom: 28 }}>
          <span style={{ fontFamily: MONO, fontSize: 72, fontWeight: 700, color: WHITE }}>${countVal}</span>
          <span style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: WHITE, marginLeft: 14, opacity: 0.8 }}>{eq.totalLabel}</span>
        </div>
        <div style={{ width: barW, height: 64, borderRadius: 12, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: `${barWidth}%`, height: "100%", background: splitProg > 0 ? "transparent" : WHITE, borderRadius: 12 }} />
          {splitProg > 0 && (
            <div style={{ position: "absolute", top: 0, left: 0, width: `${segAFrac * barWidth}%`, height: "100%", background: WHITE, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px 0 0 12px", opacity: splitProg }}>
              <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segA}</span>
            </div>
          )}
          {splitProg > 0 && (
            <div style={{ position: "absolute", top: 0, left: `${segAFrac * barWidth}%`, width: `${(1 - segAFrac) * barWidth}%`, height: "100%", background: segBColor, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0 12px 12px 0", opacity: splitProg, transform: `scale(${snapScale})`, boxShadow: snapGlow > 0 ? `0 0 ${snapGlow}px ${ACCENT}` : "none" }}>
              <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segB}</span>
            </div>
          )}
        </div>
        <div style={{ display: "flex", marginTop: 14, width: barW }}>
          <div style={{ width: `${segAFrac * 100}%`, fontFamily: SANS, fontSize: 20, color: WHITE, fontWeight: 600, opacity: splitProg }}>{eq.segALabel}</div>
          <div style={{ width: `${(1 - segAFrac) * 100}%`, fontFamily: SANS, fontSize: 20, color: ACCENT, fontWeight: 700, opacity: labelSlide, transform: `translateY(${(1 - labelSlide) * 12}px)` }}>{eq.segBLabel}</div>
        </div>
        {eq.note ? <div style={{ fontFamily: SANS, fontSize: 14, color: WHITE, opacity: 0.4, marginTop: 28 }}>{eq.note}</div> : null}
      </div>
    </AbsoluteFill>
  );
};

// ── Image Cutaway (toolkit with label) ──
const ImageCutaway: React.FC<{
  cut: Cutaway; localFrame: number; durFrames: number; fps: number; width: number; height: number;
}> = ({ cut, localFrame, durFrames, fps, width, height }) => {
  const transIn = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 140 } });
  const transOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const envelope = Math.min(transIn, transOut);
  const envScale = interpolate(transIn, [0, 1], [0.92, 1]);
  const envScaleOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const slowZoom = interpolate(localFrame, [0, durFrames], [1.0, 1.05], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: WHITE, opacity: envelope, transform: `scale(${Math.min(envScale, envScaleOut)})`, zIndex: 20 }}>
      {cut.imageTitle && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: PRIMARY, padding: "14px 28px", fontFamily: SANS, fontSize: 24, fontWeight: 700, color: WHITE, textAlign: "center", zIndex: 1 }}>{cut.imageTitle}</div>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "60px 36px 80px" }}>
        {cut.src && (
          <Img src={staticFile(cut.src)} style={{ maxWidth: width - 72, maxHeight: height - 160, objectFit: "contain", borderRadius: 10, boxShadow: "0 16px 50px rgba(0,0,0,0.12)", transform: `scale(${slowZoom})` }} />
        )}
      </div>
      {cut.imageSubtitle && (
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: PRIMARY, padding: "12px 28px", fontFamily: MONO, fontSize: 22, fontWeight: 600, color: ACCENT, textAlign: "center" }}>{cut.imageSubtitle}</div>
      )}
    </AbsoluteFill>
  );
};

// ── Animated Three-Number Stat Cutaway (rows reveal one at a time) ──
const StatCutaway: React.FC<{
  cut: Cutaway; localFrame: number; durFrames: number; fps: number; width: number; height: number;
}> = ({ cut, localFrame, durFrames, fps }) => {
  const st = cut.stat!;

  const transIn = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 140 } });
  const transOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const envelope = Math.min(transIn, transOut);
  const envScale = interpolate(transIn, [0, 1], [0.92, 1]);
  const envScaleOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
  const rowFrames = st.rowFrames ?? [8, 42, 74];
  const snapFrame = st.snapFrame ?? rowFrames[rowFrames.length - 1] + 8;
  const calloutOp = interpolate(localFrame, [snapFrame + 4, snapFrame + 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY, opacity: envelope, transform: `scale(${Math.min(envScale, envScaleOut)})`, zIndex: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 56px" }}>
        <div style={{ opacity: titleSpring, transform: `translateY(${(1 - titleSpring) * -24}px)`, marginBottom: 34, fontFamily: SANS, fontSize: 30, fontWeight: 600, color: WHITE, letterSpacing: 3, textTransform: "uppercase" }}>
          {st.title ?? "Ask your PBM for"}
        </div>
        {st.lines.map((ln, i) => {
          const rs = spring({ frame: Math.max(0, localFrame - (rowFrames[i] ?? rowFrames[rowFrames.length - 1])), fps, config: { damping: 13, stiffness: 150 } });
          const isLast = i === st.lines.length - 1;
          const snapped = isLast && localFrame >= snapFrame;
          // Snap pop at snapFrame (quick 1 → 1.13 → 1 overshoot).
          const snapSpring = spring({ frame: Math.max(0, localFrame - snapFrame), fps, config: { damping: 10, stiffness: 200, mass: 0.6 } });
          const popScale = snapped ? interpolate(snapSpring, [0, 0.5, 1], [1.0, 1.13, 1.0]) : 1;
          // NET COST then keeps growing toward the viewer (ease-out) until the cutaway exits.
          // Base row maxWidth 680 → 680 * 1.5 = 1020 < 1080, so it never clips the frame edges.
          const growScale = snapped
            ? interpolate(localFrame, [snapFrame, durFrames], [1, 1.5], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" })
            : 1;
          // The other rows ease down + dim so NET COST dominates and doesn't crowd them.
          const dimming = !isLast && localFrame >= snapFrame;
          const dimScale = dimming ? interpolate(localFrame, [snapFrame, snapFrame + 14], [1, 0.95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
          const dimOpacity = dimming ? interpolate(localFrame, [snapFrame, snapFrame + 14], [1, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
          const rowScale = isLast ? popScale * growScale : dimScale;
          // Glow swells along with the grow.
          const glow = snapped ? interpolate(localFrame, [snapFrame, snapFrame + 4, durFrames], [0, 26, 48], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
          const cardBg = snapped ? ACCENT : WHITE;
          return (
            <div key={i} style={{
              opacity: rs * dimOpacity,
              transformOrigin: "center center",
              transform: `translateX(${(1 - rs) * -44}px) scale(${rowScale})`,
              zIndex: isLast ? 2 : 1,
              width: "100%", maxWidth: 680,
              display: "flex", alignItems: "center", gap: 22,
              background: cardBg, borderRadius: 16, padding: "20px 28px", marginBottom: 18,
              boxShadow: glow > 0 ? `0 0 ${glow}px ${ACCENT}, 0 10px 30px rgba(0,0,0,0.25)` : "0 10px 30px rgba(0,0,0,0.22)",
            }}>
              <div style={{ flex: "0 0 auto", width: 56, height: 56, borderRadius: 12, background: PRIMARY, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 30, fontWeight: 700, color: WHITE }}>{i + 1}</div>
              <div style={{ fontFamily: SANS, fontSize: 31, fontWeight: 500, color: PRIMARY, lineHeight: 1.15 }}>
                {ln.pre}{" "}
                <span style={{ fontWeight: 700, fontSize: 35 }}>{ln.key}</span>
                {ln.post ? <span>{" " + ln.post}</span> : null}
              </div>
            </div>
          );
        })}
        {st.callout && (
          <div style={{ opacity: calloutOp, transform: `translateY(${(1 - calloutOp) * 10}px)`, marginTop: 30, fontFamily: SANS, fontSize: 25, fontWeight: 700, color: ACCENT }}>
            {"↑ " + st.callout}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

// ── Duplicate-word filter (e.g. "GLP-1s one" → "GLP-1s") ──
const dedupeWords = (words: Word[]): Word[] => {
  const out: Word[] = [];
  for (let i = 0; i < words.length; i++) {
    const corrected = correctWord(words[i].text);
    // skip "one" immediately after a corrected GLP-1s
    if (corrected === "one" && i > 0 && correctWord(words[i - 1].text).includes("GLP-1")) continue;
    out.push({ ...words[i], text: corrected });
  }
  return out;
};

// ══════════════════════════════════════════
// ██  MAIN CLIP COMPONENT
// ══════════════════════════════════════════
export const Clip: React.FC<ClipProps> = ({ sourceVideo, fps, clip, coverMode }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const totalFrames = Math.round((clip.outSec - clip.inSec) * fps);
  const endFrames = Math.round(2.5 * fps);
  const hookDurFrames = Math.round(3.5 * fps);

  const tSource = clip.inSec + frame / fps;

  // ── COVER MODE ──
  if (coverMode) {
    const coverOffset = Math.round(5 * fps);
    return (
      <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
        <OffthreadVideo src={staticFile(sourceVideo)} startFrom={Math.round(clip.inSec * fps) + coverOffset} style={{ width, height, objectFit: "cover" }} />
        <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)" }} />
        <Img src={staticFile("pbs-logo-white.png")} style={{ position: "absolute", top: 28, left: 28, height: 48, width: "auto", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.75))" }} />
        <div style={{ position: "absolute", top: 26, right: 26, background: PRIMARY, color: WHITE, padding: "7px 14px", borderRadius: 6, fontSize: 22, fontWeight: 600 }}>As seen on {clip.showName}</div>
        <div style={{ position: "absolute", bottom: height * 0.12, left: 40, right: 40, textAlign: "center" }}>
          <div style={{ display: "inline-block", background: PRIMARY, padding: "22px 32px", borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: clip.aspect === "9x16" ? 72 : 60, fontWeight: 700, color: WHITE, lineHeight: 1.1 }}>{highlightDollars(clip.hookTitle)}</div>
            {clip.hookLine2 && <div style={{ fontSize: clip.aspect === "9x16" ? 76 : 64, fontWeight: 700, color: WHITE, lineHeight: 1.1, marginTop: 8 }}>{highlightDollars(clip.hookLine2)}</div>}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 30, left: 0, right: 0, textAlign: "center", color: WHITE, fontSize: 24, fontWeight: 600, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}>Ginny Crisp, PharmD · Prescription Benefit Solutions</div>
      </AbsoluteFill>
    );
  }

  // ── Caption logic (word-level karaoke, deduped) ──
  const active = clip.captions.find((c) => tSource >= c.startSec && tSource <= c.endSec);
  const allWords = clip.words ? dedupeWords(clip.words) : null;
  const phraseWords = active && allWords
    ? allWords.filter((w) => w.startSec >= active.startSec - 0.05 && w.endSec <= active.endSec + 0.05)
    : null;

  // ── Timing zones ──
  const inEndCard = frame >= totalFrames - endFrames;
  const zoom = interpolate(frame, [0, totalFrames - endFrames], [1.0, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── Full-screen cutaway active? (the name plate hides for the whole cutaway) ──
  const cutawayActive = (clip.cutaways ?? []).some((cut) => tSource >= cut.startSec && tSource <= cut.endSec);
  // Captions are suppressed only while the cutaway "owns" the words (e.g. the stat rows ARE the
  // captions). A cutaway may set captionsFromSec to hand the karaoke pill back partway through its hold.
  const captionCutaway = (clip.cutaways ?? []).find((cut) => tSource >= cut.startSec && tSource <= cut.endSec);
  const captionsSuppressed = !!captionCutaway && !(captionCutaway.captionsFromSec != null && tSource >= captionCutaway.captionsFromSec);
  // When the pill rides over a still-visible cutaway, drop it deeper into the safe bottom margin so
  // it clears the centred card (the growing NET COST row + callout).
  const captionOverCutaway = !!captionCutaway && !captionsSuppressed;

  // ── Hook ──
  const hookOp = interpolate(frame, [hookDurFrames - 12, hookDurFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const showBadge = frame > hookDurFrames;

  // ── Name plate (fly in ~2s, hold ~3.5s, fly out) ──
  const plateInFrame = Math.round(2 * fps);
  const plateHold = Math.round(3.5 * fps);
  const plateOutFrame = plateInFrame + plateHold;
  const plateFlyIn = spring({ frame: Math.max(0, frame - plateInFrame), fps, config: { damping: 14, stiffness: 100 } });
  const plateFlyOut = spring({ frame: Math.max(0, frame - plateOutFrame), fps, config: { damping: 14, stiffness: 100 } });
  const plateX = frame < plateInFrame ? -120 : frame >= plateOutFrame ? interpolate(plateFlyOut, [0, 1], [0, -120]) : interpolate(plateFlyIn, [0, 1], [-120, 0]);
  const plateVisible = frame >= plateInFrame && plateX > -119 && !cutawayActive;

  // ── End card ──
  const endLocalFrame = Math.max(0, frame - (totalFrames - endFrames));
  const endFadeIn = interpolate(endLocalFrame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const tagline = clip.tagline || "We audit hundreds of PBM contracts a year.";
  const ctaLine = clip.ctaLine || (clip.cta ? `Free ${clip.cta.text.replace(/^Free /i, "")} \u2192 link in comments` : "");

  // \u2500\u2500 Optional audio tail fade (e.g. duck a trailing half-sentence under the end card) \u2500\u2500
  // startSec/endSec are in the same source-time scale as captions/cutaways; the volume
  // callback frame is the composition frame, so convert via (sec - inSec) * fps.
  const fadeStartFrame = clip.audioFade ? (clip.audioFade.startSec - clip.inSec) * fps : 0;
  const fadeEndFrame = clip.audioFade ? (clip.audioFade.endSec - clip.inSec) * fps : 0;

  // ── Hook staggered reveal: each line-1 beat spring-pops in sequence; line 2 slides in under ──
  const hookBeat = (startFrame: number, big = false): React.CSSProperties => {
    const s = spring({ frame: Math.max(0, frame - startFrame), fps, config: { damping: big ? 8 : 11, stiffness: big ? 185 : 165, mass: big ? 0.7 : 0.5 } });
    const op = interpolate(frame, [startFrame, startFrame + 4], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return { display: "inline-block", transformOrigin: "center bottom", transform: `scale(${s})`, opacity: op };
  };
  const hookLine2In = spring({ frame: Math.max(0, frame - Math.round(1.0 * fps)), fps, config: { damping: 14, stiffness: 110 } });
  const hookL1 = clip.aspect === "4x5" ? 60 : 66;
  const hookL2 = clip.aspect === "4x5" ? 44 : 48;
  // Panel spring-scales in at frame 0 already containing "Cost." (never an empty box);
  // it then auto-grows in width as later beats mount and in height when line 2 mounts.
  const hookPanelScale = interpolate(spring({ frame, fps, config: { damping: 13, stiffness: 210, mass: 0.6 } }), [0, 1], [0.72, 1]);
  const hookLine2Frame = Math.round(1.0 * fps);
  const hookBeatsMode = !!(clip.hookBeats && clip.hookBeats.length);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
      {/* ── Footage (always rendered for audio continuity) ── */}
      <OffthreadVideo
        src={staticFile(sourceVideo)}
        startFrom={Math.round(clip.inSec * fps)}
        volume={clip.audioFade ? (f) => interpolate(f, [fadeStartFrame, fadeEndFrame], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : undefined}
        style={{ width, height, objectFit: "cover", transform: `scale(${zoom})`, opacity: inEndCard ? 0 : 1 }}
      />

      {/* ── Footage overlays (when not in end card) ── */}
      {!inEndCard && (
        <>
          {/* Progress bar */}
          <div style={{ position: "absolute", top: 0, left: 0, height: 6, width: `${(frame / totalFrames) * 100}%`, background: ACCENT, zIndex: 30 }} />

          {/* PBS logo corner (persistent) — layered shadow so the white mark reads on light walls */}
          <Img src={staticFile("pbs-logo-white.png")} style={{ position: "absolute", top: 26, left: 26, height: 56, width: "auto", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.95)) drop-shadow(0 2px 8px rgba(0,0,0,0.65))", zIndex: 30 }} />

          {/* "As seen on" badge — hidden during hook, shown after. Sized up for mobile-feed legibility. */}
          {showBadge && (
            <div style={{
              position: "absolute", top: 26, right: 26,
              background: PRIMARY, color: WHITE,
              padding: "10px 18px", borderRadius: 9,
              fontSize: 30, fontWeight: 700, zIndex: 30,
              boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
              opacity: interpolate(frame, [hookDurFrames, hookDurFrames + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}>
              As seen on {clip.showName}
            </div>
          )}

          {/* ── HOOK TEXT (top band over footage, frame 0, fades ~3.5s) ── */}
          {hookOp > 0 && (
            <div style={{
              position: "absolute",
              top: clip.hookBeats && clip.hookBeats.length ? (clip.aspect === "4x5" ? 94 : 110) : (clip.aspect === "4x5" ? 70 : 90),
              left: 28, right: 28,
              textAlign: "center",
              opacity: hookOp,
              zIndex: 25,
            }}>
              <div style={{
                display: "inline-block",
                background: PRIMARY,
                padding: "22px 32px",
                borderRadius: 16,
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                ...(hookBeatsMode ? { transform: `scale(${hookPanelScale})`, transformOrigin: "top center" } : null),
              }}>
                {hookBeatsMode ? (
                  // Staggered line 1: only revealed beats occupy layout, so the panel auto-grows
                  // in width. Beat 0 ("Cost.") is present from frame 0 — the panel entrance carries
                  // its motion — so no frame ever shows an empty box.
                  <div style={{ fontFamily: SANS, fontSize: hookL1, fontWeight: 700, color: WHITE, lineHeight: 1.12, whiteSpace: "nowrap" }}>
                    {clip.hookBeats!.map((b, i) => {
                      const start = i * Math.round(0.3 * fps);
                      const isAccent = !!clip.hookAccent && b.toLowerCase().includes(clip.hookAccent.toLowerCase());
                      const revealed = frame >= start;
                      const style: React.CSSProperties = i === 0
                        ? { display: "inline-block", whiteSpace: "pre" }
                        : { ...hookBeat(start, isAccent), whiteSpace: "pre", display: revealed ? "inline-block" : "none" };
                      return (
                        <span key={i} style={{ ...style, ...(isAccent ? { color: ACCENT } : null) }}>{(i > 0 ? " " : "") + b}</span>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ fontFamily: SANS, fontSize: clip.aspect === "4x5" ? 56 : 64, fontWeight: 700, color: WHITE, lineHeight: 1.15 }}>
                    {highlightHook(clip.hookTitle, clip.hookAccent)}
                  </div>
                )}
                {clip.hookLine2 && (!hookBeatsMode || frame >= hookLine2Frame) && (
                  <div style={{
                    fontFamily: SANS,
                    fontSize: hookBeatsMode ? hookL2 : (clip.aspect === "4x5" ? 58 : 66),
                    fontWeight: 700, color: WHITE, lineHeight: 1.15, marginTop: hookBeatsMode ? 10 : 8,
                    ...(hookBeatsMode ? { opacity: hookLine2In, transform: `translateY(${(1 - hookLine2In) * 16}px)` } : null),
                  }}>
                    {highlightHook(clip.hookLine2, clip.hookAccent)}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── FULL-SCREEN CUTAWAYS (animated, audio continues) ── */}
          {(clip.cutaways ?? []).map((cut, i) => {
            if (tSource < cut.startSec || tSource > cut.endSec) return null;
            const lf = Math.round((tSource - cut.startSec) * fps);
            const dur = Math.round((cut.endSec - cut.startSec) * fps);
            if (cut.type === "equation" && cut.equation) {
              return <EquationCutaway key={`cut-${i}`} cut={cut} localFrame={lf} durFrames={dur} fps={fps} width={width} height={height} />;
            }
            if (cut.type === "image" && cut.src) {
              return <ImageCutaway key={`cut-${i}`} cut={cut} localFrame={lf} durFrames={dur} fps={fps} width={width} height={height} />;
            }
            if (cut.type === "stat" && cut.stat) {
              return <StatCutaway key={`cut-${i}`} cut={cut} localFrame={lf} durFrames={dur} fps={fps} width={width} height={height} />;
            }
            return null;
          })}

          {/* ── NAME PLATE (lower-left, fly in/out, LARGE logo) ── */}
          {plateVisible && (
            <div style={{
              position: "absolute",
              bottom: clip.aspect === "4x5" ? 110 : 150,
              left: 24,
              transform: `translateX(${plateX}%)`,
              zIndex: 35,
            }}>
              <div style={{
                background: PRIMARY,
                padding: "16px 24px 14px",
                borderRadius: 10,
                borderBottom: `3px solid ${ACCENT}`,
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}>
                <div style={{ fontFamily: SANS, fontSize: 28, fontWeight: 700, color: WHITE, lineHeight: 1.2 }}>Ginny Crisp, PharmD</div>
                <div style={{ fontFamily: SANS, fontSize: 18, fontWeight: 400, color: WHITE, opacity: 0.9, marginTop: 4 }}>CEO · Prescription Benefit Solutions</div>
                <Img src={staticFile("pbs-logo-white.png")} style={{ height: 48, width: "auto", marginTop: 10, opacity: 0.9 }} />
              </div>
            </div>
          )}

          {/* ── KARAOKE CAPTIONS (no-box, outline+shadow, accent pill on active word) ── */}
          {active && !captionsSuppressed ? (
            <div style={{
              position: "absolute",
              top: clip.aspect === "9x16"
                ? (captionOverCutaway ? height * 0.78 : plateVisible ? height * 0.55 : height * 0.65)
                : (captionOverCutaway ? height * 0.82 : plateVisible ? height * 0.58 : height * 0.68),
              left: 32, right: 32,
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              zIndex: 30,
            }}>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                maxWidth: width - 72,
                gap: "4px 0",
              }}>
                {phraseWords && phraseWords.length
                  ? phraseWords.map((w, i) => {
                      const on = tSource >= w.startSec && tSource <= w.endSec;
                      return (
                        <span key={i} style={{
                          display: "inline-block",
                          fontSize: 44,
                          fontWeight: 700,
                          lineHeight: 1.4,
                          fontFamily: SANS,
                          marginRight: 8,
                          ...(on
                            ? {
                                color: PRIMARY,
                                background: ACCENT,
                                borderRadius: 8,
                                padding: "2px 8px",
                              }
                            : {
                                color: WHITE,
                                padding: "2px 8px",
                                textShadow: "2px 2px 0 rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.8), 1px -1px 0 rgba(0,0,0,0.8), -1px 1px 0 rgba(0,0,0,0.8), 0 3px 6px rgba(0,0,0,0.5)",
                              }),
                        }}>{w.text}</span>
                      );
                    })
                  : <span style={{
                      fontSize: 44, fontWeight: 700, lineHeight: 1.4, fontFamily: SANS, color: WHITE,
                      textShadow: "2px 2px 0 rgba(0,0,0,0.8), -1px -1px 0 rgba(0,0,0,0.8), 1px -1px 0 rgba(0,0,0,0.8), -1px 1px 0 rgba(0,0,0,0.8), 0 3px 6px rgba(0,0,0,0.5)",
                    }}>{active.text}</span>
                }
              </div>
            </div>
          ) : null}
        </>
      )}

      {/* ── END CARD (larger logo, single CTA, no company text) ── */}
      {inEndCard && (
        <AbsoluteFill style={{ backgroundColor: PRIMARY, opacity: endFadeIn, zIndex: 50 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 50px" }}>
            <Img src={staticFile("pbs-logo-white.png")} style={{ height: 160, width: "auto", marginBottom: height * 0.06 }} />
            <div style={{ fontFamily: SANS, fontSize: 32, fontWeight: 600, color: WHITE, textAlign: "center", lineHeight: 1.3, marginBottom: 28 }}>{tagline}</div>
            {ctaLine ? <div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 600, color: ACCENT, textAlign: "center", lineHeight: 1.3 }}>{ctaLine}</div> : null}
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
