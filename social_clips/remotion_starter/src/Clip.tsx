import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
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

// ── Transcription correction fallback (manifest is already corrected; this catches stragglers) ──
const CORRECTIONS: Record<string, string> = {
  "GOP": "GLP-1", "GLP1": "GLP-1", "GLP1s": "GLP-1s",
  "passive": "pass-through", "blinds.": "blind.",
};
const correctWord = (w: string) => CORRECTIONS[w] ?? w;

// Highlight dollar amounts and key numbers in accent blue within hook text
const highlightDollars = (text: string): React.ReactNode => {
  const parts = text.split(/(\$[\d,]+|(?:^|\s)\d+(?:\s|$|%))/g);
  return parts.map((part, i) => {
    if (/^\$[\d,]+$/.test(part.trim()) || /^\d+%?$/.test(part.trim())) {
      return <span key={i} style={{ color: ACCENT, fontFamily: MONO, fontWeight: 700 }}>{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
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
  equation?: { totalNum: number; totalLabel: string; segA: string; segANum: number; segALabel: string; segB: string; segBNum: number; segBLabel: string; note?: string };
  stat?: { lines: { value: string; label: string; highlight?: boolean }[] };
  src?: string; // for image type
  imageTitle?: string; // label on image cutaway
  imageSubtitle?: string;
};
export type ClipData = {
  id: string; slug?: string;
  inSec: number; outSec: number;
  aspect: "9x16" | "4x5";
  platform?: string;
  hookTitle: string; hookLine2?: string;
  showName: string;
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

  // Transition envelope
  const transIn = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 140 } });
  const transOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const envelope = Math.min(transIn, transOut);
  const envScale = interpolate(transIn, [0, 1], [0.92, 1]);
  const envScaleOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Staggered build phases (at 30fps)
  // 0-12: title springs in, number counts up
  const titleSpring = spring({ frame: localFrame, fps, config: { damping: 14, stiffness: 100 } });
  const countTo = eq.totalNum;
  const countVal = Math.round(interpolate(localFrame, [0, 12], [0, countTo], { extrapolateRight: "clamp" }));

  // 12-24: bar grows width
  const barWidth = interpolate(localFrame, [12, 24], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // 24-32: bar splits, segA settles
  const splitProg = interpolate(localFrame, [24, 32], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // 32-44: segB SNAPS to accent with scale pop + glow
  const snapSpring = spring({ frame: Math.max(0, localFrame - 32), fps, config: { damping: 10, stiffness: 200, mass: 0.6 } });
  const snapScale = interpolate(snapSpring, [0, 0.5, 1], [1.0, 1.18, 1.0]);
  const snapGlow = interpolate(localFrame, [32, 36, 44], [0, 20, 8], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const segBColor = localFrame >= 32 ? ACCENT : WHITE;
  const labelSlide = spring({ frame: Math.max(0, localFrame - 34), fps, config: { damping: 14, stiffness: 120 } });

  const barW = width * 0.72;
  const segAFrac = eq.segANum / eq.totalNum;

  return (
    <AbsoluteFill style={{
      backgroundColor: PRIMARY,
      opacity: envelope,
      transform: `scale(${Math.min(envScale, envScaleOut)})`,
      zIndex: 20,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 50px" }}>
        {/* Title + count-up number */}
        <div style={{ opacity: titleSpring, transform: `translateY(${(1 - titleSpring) * -30}px)`, marginBottom: 28 }}>
          <span style={{ fontFamily: MONO, fontSize: 72, fontWeight: 700, color: WHITE }}>${countVal}</span>
          <span style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: WHITE, marginLeft: 14, opacity: 0.8 }}>{eq.totalLabel}</span>
        </div>

        {/* Bar that grows then splits */}
        <div style={{ width: barW, height: 64, borderRadius: 12, overflow: "hidden", position: "relative" }}>
          {/* Single bar (pre-split) */}
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: `${barWidth}%`, height: "100%",
            background: splitProg > 0 ? "transparent" : WHITE,
            borderRadius: 12,
          }} />
          {/* Segment A (appears on split) */}
          {splitProg > 0 && (
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: `${segAFrac * barWidth}%`, height: "100%",
              background: WHITE,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "12px 0 0 12px",
              opacity: splitProg,
            }}>
              <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segA}</span>
            </div>
          )}
          {/* Segment B (snaps to accent) */}
          {splitProg > 0 && (
            <div style={{
              position: "absolute", top: 0, left: `${segAFrac * barWidth}%`,
              width: `${(1 - segAFrac) * barWidth}%`, height: "100%",
              background: segBColor,
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "0 12px 12px 0",
              opacity: splitProg,
              transform: `scale(${snapScale})`,
              boxShadow: snapGlow > 0 ? `0 0 ${snapGlow}px ${ACCENT}` : "none",
            }}>
              <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segB}</span>
            </div>
          )}
        </div>

        {/* Labels under bar segments */}
        <div style={{ display: "flex", marginTop: 14, width: barW }}>
          <div style={{ width: `${segAFrac * 100}%`, fontFamily: SANS, fontSize: 20, color: WHITE, fontWeight: 600, opacity: splitProg }}>{eq.segALabel}</div>
          <div style={{
            width: `${(1 - segAFrac) * 100}%`, fontFamily: SANS, fontSize: 20, color: ACCENT, fontWeight: 700,
            opacity: labelSlide, transform: `translateY(${(1 - labelSlide) * 12}px)`,
          }}>{eq.segBLabel}</div>
        </div>

        {eq.note ? <div style={{ fontFamily: SANS, fontSize: 14, color: WHITE, opacity: 0.4, marginTop: 28 }}>{eq.note}</div> : null}
      </div>
    </AbsoluteFill>
  );
};

// ── Animated Stat Cutaway (generic number reveal) ──
const StatCutaway: React.FC<{
  cut: Cutaway; localFrame: number; durFrames: number; fps: number; width: number; height: number;
}> = ({ cut, localFrame, durFrames, fps, width, height }) => {
  const lines = cut.stat?.lines ?? [];
  const transIn = spring({ frame: localFrame, fps, config: { damping: 12, stiffness: 140 } });
  const transOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const envelope = Math.min(transIn, transOut);
  const envScale = interpolate(transIn, [0, 1], [0.92, 1]);
  const envScaleOut = interpolate(localFrame, [durFrames - 10, durFrames], [1, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      backgroundColor: PRIMARY,
      opacity: envelope,
      transform: `scale(${Math.min(envScale, envScaleOut)})`,
      zIndex: 20,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 50px", gap: 24 }}>
        {lines.map((line, i) => {
          const stagger = i * 14;
          const lineSpring = spring({ frame: Math.max(0, localFrame - stagger), fps, config: { damping: 12, stiffness: 150 } });
          const isHL = line.highlight;
          const snapPop = isHL
            ? spring({ frame: Math.max(0, localFrame - stagger - 4), fps, config: { damping: 10, stiffness: 200, mass: 0.6 } })
            : 1;
          const popScale = isHL ? interpolate(snapPop, [0, 0.5, 1], [1.0, 1.15, 1.0]) : 1;
          const glow = isHL ? interpolate(localFrame, [stagger + 4, stagger + 10, stagger + 20], [0, 16, 6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
          return (
            <div key={i} style={{
              opacity: lineSpring,
              transform: `translateY(${(1 - lineSpring) * 20}px) scale(${popScale})`,
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: MONO, fontSize: isHL ? 100 : 80, fontWeight: 700,
                color: isHL ? ACCENT : WHITE, lineHeight: 1,
                textShadow: glow > 0 ? `0 0 ${glow}px ${ACCENT}` : "none",
              }}>{line.value}</div>
              <div style={{ fontFamily: SANS, fontSize: 24, fontWeight: 600, color: isHL ? ACCENT : WHITE, marginTop: 6, opacity: 0.85 }}>{line.label}</div>
            </div>
          );
        })}
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
    <AbsoluteFill style={{
      backgroundColor: WHITE,
      opacity: envelope,
      transform: `scale(${Math.min(envScale, envScaleOut)})`,
      zIndex: 20,
    }}>
      {/* Title bar */}
      {cut.imageTitle && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          background: PRIMARY, padding: "14px 28px",
          fontFamily: SANS, fontSize: 24, fontWeight: 700, color: WHITE, textAlign: "center",
          zIndex: 1,
        }}>{cut.imageTitle}</div>
      )}
      {/* Image */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", padding: "60px 36px 80px" }}>
        {cut.src && (
          <Img src={staticFile(cut.src)} style={{
            maxWidth: width - 72, maxHeight: height - 160, objectFit: "contain",
            borderRadius: 10, boxShadow: "0 16px 50px rgba(0,0,0,0.12)",
            transform: `scale(${slowZoom})`,
          }} />
        )}
      </div>
      {/* Bottom label */}
      {cut.imageSubtitle && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: PRIMARY, padding: "12px 28px",
          fontFamily: MONO, fontSize: 22, fontWeight: 600, color: ACCENT, textAlign: "center",
        }}>{cut.imageSubtitle}</div>
      )}
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// ██  MAIN CLIP COMPONENT
// ══════════════════════════════════════════
export const Clip: React.FC<ClipProps> = ({ sourceVideo, fps, clip, coverMode }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const totalFrames = Math.round((clip.outSec - clip.inSec) * fps);
  const endFrames = Math.round(2.5 * fps);
  const hookDurFrames = Math.round(3.5 * fps); // hook visible for ~3.5s then fades

  const tSource = clip.inSec + frame / fps;

  // ── COVER MODE (flattering still + hook overlay for feed thumbnail) ──
  if (coverMode) {
    // Use a frame ~5s into the clip (usually a confident mid-sentence moment)
    const coverOffset = Math.round(5 * fps);
    return (
      <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
        <OffthreadVideo src={staticFile(sourceVideo)} startFrom={Math.round(clip.inSec * fps) + coverOffset} style={{ width, height, objectFit: "cover" }} />
        <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.65) 100%)" }} />
        {/* PBS logo */}
        <Img src={staticFile("pbs-logo-white.png")} style={{ position: "absolute", top: 28, left: 28, height: 48, width: "auto", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.75))" }} />
        {/* "As seen on" badge */}
        <div style={{ position: "absolute", top: 26, right: 26, background: PRIMARY, color: WHITE, padding: "7px 14px", borderRadius: 6, fontSize: 22, fontWeight: 600 }}>As seen on {clip.showName}</div>
        {/* Hook text — dominant, lower portion */}
        <div style={{ position: "absolute", bottom: height * 0.12, left: 40, right: 40, textAlign: "center" }}>
          <div style={{ display: "inline-block", background: PRIMARY, padding: "22px 32px", borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: clip.aspect === "9x16" ? 72 : 60, fontWeight: 700, color: WHITE, lineHeight: 1.1 }}>
              {highlightDollars(clip.hookTitle)}
            </div>
            {clip.hookLine2 && (
              <div style={{ fontSize: clip.aspect === "9x16" ? 76 : 64, fontWeight: 700, color: WHITE, lineHeight: 1.1, marginTop: 8 }}>
                {highlightDollars(clip.hookLine2)}
              </div>
            )}
          </div>
        </div>
        {/* Name line */}
        <div style={{ position: "absolute", bottom: 30, left: 0, right: 0, textAlign: "center", color: WHITE, fontSize: 24, fontWeight: 600, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))" }}>Ginny Crisp, PharmD · Prescription Benefit Solutions</div>
      </AbsoluteFill>
    );
  }

  // ── Caption logic ──
  const active = clip.captions.find((c) => tSource >= c.startSec && tSource <= c.endSec);
  const phraseWords = active && clip.words
    ? clip.words.filter((w) => w.startSec >= active.startSec - 0.05 && w.endSec <= active.endSec + 0.05)
    : null;

  // ── Timing zones ──
  const inEndCard = frame >= totalFrames - endFrames;
  const zoom = interpolate(frame, [0, totalFrames - endFrames], [1.0, 1.06], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── Hook overlay (visible from frame 0, fades out at ~3.5s) ──
  const hookOp = interpolate(frame, [hookDurFrames - 12, hookDurFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const showBadge = frame > hookDurFrames;

  // ── Name plate (fly in from left ~2s, hold ~3.5s, fly out) ──
  const plateInFrame = Math.round(2 * fps);  // starts at 2s
  const plateHold = Math.round(3.5 * fps);   // visible for 3.5s
  const plateOutFrame = plateInFrame + plateHold;
  const plateFlyIn = spring({ frame: Math.max(0, frame - plateInFrame), fps, config: { damping: 14, stiffness: 100 } });
  const plateFlyOut = spring({ frame: Math.max(0, frame - plateOutFrame), fps, config: { damping: 14, stiffness: 100 } });
  const plateX = frame < plateInFrame ? -120 : frame >= plateOutFrame ? interpolate(plateFlyOut, [0, 1], [0, -120]) : interpolate(plateFlyIn, [0, 1], [-120, 0]);
  const plateVisible = frame >= plateInFrame && plateX > -119;

  // ── End card ──
  const endStart = totalFrames - endFrames;
  const endLocalFrame = Math.max(0, frame - endStart);
  const endFadeIn = interpolate(endLocalFrame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const tagline = clip.tagline || "We audit hundreds of PBM contracts a year.";
  const ctaLine = clip.ctaLine || (clip.cta ? `Free ${clip.cta.text.replace(/^Free /i, "")} \u2192 link in comments` : "");

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
      {/* ── Footage (always rendered) ── */}
      <OffthreadVideo
        src={staticFile(sourceVideo)}
        startFrom={Math.round(clip.inSec * fps)}
        style={{ width, height, objectFit: "cover", transform: `scale(${zoom})`, opacity: inEndCard ? 0 : 1 }}
      />

      {/* ── Footage overlays (when not in end card) ── */}
      {!inEndCard && (
        <>
          {/* Progress bar */}
          <div style={{ position: "absolute", top: 0, left: 0, height: 6, width: `${(frame / totalFrames) * 100}%`, background: ACCENT, zIndex: 30 }} />

          {/* PBS logo corner (persistent) */}
          <Img src={staticFile("pbs-logo-white.png")} style={{ position: "absolute", top: 24, left: 24, height: 40, width: "auto", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.7))", zIndex: 30 }} />

          {/* "As seen on" badge — suppressed during hook */}
          {showBadge && (
            <div style={{ position: "absolute", top: 22, right: 22, background: PRIMARY, color: WHITE, padding: "6px 12px", borderRadius: 6, fontSize: 20, fontWeight: 600, zIndex: 30, opacity: interpolate(frame, [hookDurFrames, hookDurFrames + 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
              As seen on {clip.showName}
            </div>
          )}

          {/* ── HOOK TEXT over footage (top band, big, brand-blue panel, frame 0 onward) ── */}
          {hookOp > 0 && (
            <div style={{
              position: "absolute",
              top: clip.aspect === "4x5" ? 70 : 90,
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
              }}>
                <div style={{ fontFamily: SANS, fontSize: clip.aspect === "4x5" ? 56 : 64, fontWeight: 700, color: WHITE, lineHeight: 1.15 }}>
                  {highlightDollars(clip.hookTitle)}
                </div>
                {clip.hookLine2 && (
                  <div style={{ fontFamily: SANS, fontSize: clip.aspect === "4x5" ? 58 : 66, fontWeight: 700, color: WHITE, lineHeight: 1.15, marginTop: 8 }}>
                    {highlightDollars(clip.hookLine2)}
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
            if (cut.type === "stat" && cut.stat) {
              return <StatCutaway key={`cut-${i}`} cut={cut} localFrame={lf} durFrames={dur} fps={fps} width={width} height={height} />;
            }
            if (cut.type === "image" && cut.src) {
              return <ImageCutaway key={`cut-${i}`} cut={cut} localFrame={lf} durFrames={dur} fps={fps} width={width} height={height} />;
            }
            return null;
          })}

          {/* ── ANIMATED NAME PLATE (lower-left, fly in/out) ── */}
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
                padding: "14px 22px 12px",
                borderRadius: 10,
                borderBottom: `3px solid ${ACCENT}`,
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              }}>
                <div style={{ fontFamily: SANS, fontSize: 28, fontWeight: 700, color: WHITE, lineHeight: 1.2 }}>Ginny Crisp, PharmD</div>
                <div style={{ fontFamily: SANS, fontSize: 18, fontWeight: 400, color: WHITE, opacity: 0.9, marginTop: 4 }}>CEO · Prescription Benefit Solutions</div>
                <Img src={staticFile("pbs-logo-white.png")} style={{ height: 34, width: "auto", marginTop: 8, opacity: 0.8 }} />
              </div>
            </div>
          )}

          {/* ── KARAOKE CAPTIONS (~78% down; shifts up when name plate is visible) ── */}
          {active ? (
            <div style={{
              position: "absolute",
              top: plateVisible ? height * 0.62 : height * 0.76,
              left: 32, right: 32,
              display: "flex",
              justifyContent: "center",
              zIndex: 30,
            }}>
              <div style={{
                background: "rgba(0,0,0,0.72)",
                padding: "12px 20px",
                borderRadius: 12,
                textAlign: "center",
                maxWidth: width - 72,
              }}>
                <span style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.35, color: WHITE, display: "inline" }}>
                  {phraseWords && phraseWords.length
                    ? phraseWords.map((w, i) => {
                        const on = tSource >= w.startSec && tSource <= w.endSec;
                        return (
                          <span key={i} style={{
                            color: on ? ACCENT : WHITE,
                            textShadow: on ? `0 0 12px ${ACCENT}` : "none",
                          }}>{correctWord(w.text)}{" "}</span>
                        );
                      })
                    : active.text}
                </span>
              </div>
            </div>
          ) : null}
        </>
      )}

      {/* ── END CARD ── */}
      {inEndCard && (
        <AbsoluteFill style={{ backgroundColor: PRIMARY, opacity: endFadeIn, zIndex: 50 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 50px" }}>
            <Img src={staticFile("pbs-logo-white.png")} style={{ height: 100, width: "auto", marginBottom: height * 0.06 }} />
            <div style={{ fontFamily: SANS, fontSize: 32, fontWeight: 600, color: WHITE, textAlign: "center", lineHeight: 1.3, marginBottom: 28 }}>{tagline}</div>
            {ctaLine ? <div style={{ fontFamily: MONO, fontSize: 26, fontWeight: 600, color: ACCENT, textAlign: "center", lineHeight: 1.3 }}>{ctaLine}</div> : null}
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
