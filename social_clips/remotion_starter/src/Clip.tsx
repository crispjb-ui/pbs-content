import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
// Brand fonts. npm i @remotion/google-fonts
import { loadFont as loadSans } from "@remotion/google-fonts/IBMPlexSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";

const { fontFamily: SANS } = loadSans();
const { fontFamily: MONO } = loadMono();

// PBS v2 brand (must match social_clips/remotion_pbs_caption_template_spec.md + CLAUDE.md)
const PRIMARY = "#015880";
const ACCENT = "#A7E0FA";
const GRAY = "#4D4D4D";
const WHITE = "#FFFFFF";

export type Caption = { startSec: number; endSec: number; text: string };
// Animated stat callout: a big number/term that pops on-brand when spoken.
export type Overlay = {
  startSec: number;
  endSec: number;
  big: string;            // the headline stat: "1 in 12", "62", "+60%", "30%"
  small?: string;         // supporting label under it
  position?: "center" | "top"; // default center
};
export type ClipData = {
  id: string;
  slug?: string;
  inSec: number;
  outSec: number;
  aspect: "9x16" | "4x5";
  platform?: string;
  hookTitle: string;
  showName: string;
  cta?: { text: string; url: string };
  overlays?: Overlay[];
  captions: Caption[];
};
export type ClipProps = { sourceVideo: string; fps: number; clip: ClipData };

export const clipDefaultProps: ClipProps = {
  sourceVideo: "source.mp4",
  fps: 30,
  clip: {
    id: "clip1",
    inSec: 0,
    outSec: 10,
    aspect: "9x16",
    hookTitle: "On-screen hook goes here",
    showName: "Show Name",
    cta: { text: "Free toolkit", url: "rxbs.org/toolkit/pbm-compensation" },
    overlays: [],
    captions: [],
  },
};

export const Clip: React.FC<ClipProps> = ({ sourceVideo, fps, clip }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const tSource = clip.inSec + frame / fps; // current time in the SOURCE video (absolute seconds)

  const active = clip.captions.find(
    (c) => tSource >= c.startSec && tSource <= c.endSec
  );

  // Hook title: first ~2.2s. Lower-third: first ~3.5s.
  const hookOpacity = interpolate(frame, [0, 8, fps * 2.2, fps * 2.2 + 12], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  const nameOpacity = interpolate(frame, [0, 8, fps * 3.5, fps * 3.5 + 12], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS }}>
      {/* Source video, trimmed to the clip and reframed to fill (cover). */}
      {/* NOTE: if your Remotion version rejects startFrom, use trimBefore={Math.round(clip.inSec*fps)}. */}
      <OffthreadVideo
        src={staticFile(sourceVideo)}
        startFrom={Math.round(clip.inSec * fps)}
        style={{ width, height, objectFit: "cover" }}
      />

      {/* Brand watermark (triangle wordmark placeholder; swap for the PBS asset). */}
      <div style={{ position: "absolute", top: 28, left: 28, color: WHITE, opacity: 0.85, fontWeight: 700, letterSpacing: 1 }}>
        ▲ PBS
      </div>

      {/* "As seen on" badge (top-right, out of platform UI). */}
      <div style={{ position: "absolute", top: 28, right: 28, background: PRIMARY, color: WHITE, padding: "8px 14px", borderRadius: 6, fontSize: 24, fontWeight: 600 }}>
        As seen on {clip.showName}
      </div>

      {/* Scroll-stopper hook title (top third, first seconds). */}
      <div style={{ position: "absolute", top: height * 0.12, left: 48, right: 48, opacity: hookOpacity }}>
        <span style={{ fontSize: 64, fontWeight: 700, color: WHITE, lineHeight: 1.1, background: PRIMARY, boxShadow: `0 0 0 12px ${PRIMARY}` }}>
          {clip.hookTitle}
        </span>
      </div>

      {/* Lower-third name tag (opening seconds). */}
      <div style={{ position: "absolute", bottom: height * 0.2, left: 48, opacity: nameOpacity }}>
        <div style={{ background: WHITE, color: PRIMARY, padding: "10px 16px", borderRadius: 6, fontSize: 30, fontWeight: 700 }}>
          Ginny Crisp, PharmD
        </div>
        <div style={{ background: ACCENT, color: PRIMARY, padding: "6px 16px", borderRadius: 6, fontSize: 22, marginTop: 6, fontWeight: 600, display: "inline-block" }}>
          Prescription Benefit Solutions
        </div>
      </div>

      {/* ===== Animated stat callouts ===== */}
      {/* Each overlay springs in (scale + fade), holds, fades out. Plex Mono big number on Primary card with Accent text. */}
      {(clip.overlays ?? []).map((o, i) => {
        if (tSource < o.startSec || tSource > o.endSec) return null;
        const localFrame = (tSource - o.startSec) * fps;
        const durFrames = (o.endSec - o.startSec) * fps;
        const enter = spring({ frame: localFrame, fps, config: { damping: 13, stiffness: 130, mass: 0.7 } });
        const exit = interpolate(localFrame, [durFrames - 9, durFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const scale = 0.72 + enter * 0.28;
        const opacity = Math.min(enter, exit);
        const top = o.position === "top" ? height * 0.2 : height * 0.4;
        return (
          <div key={i} style={{ position: "absolute", top, left: 0, right: 0, textAlign: "center", opacity, transform: `scale(${scale})` }}>
            <div style={{ display: "inline-block", background: PRIMARY, padding: "20px 34px", borderRadius: 18, boxShadow: "0 14px 44px rgba(0,0,0,0.45)", border: `3px solid ${ACCENT}` }}>
              <div style={{ fontFamily: MONO, fontSize: clip.aspect === "9x16" ? 130 : 104, fontWeight: 700, color: ACCENT, lineHeight: 1, letterSpacing: "-0.02em" }}>
                {o.big}
              </div>
              {o.small ? (
                <div style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: WHITE, marginTop: 10 }}>
                  {o.small}
                </div>
              ) : null}
            </div>
          </div>
        );
      })}

      {/* Burned-in captions (mandatory; safe zone above bottom ~15%). */}
      {active ? (
        <div style={{ position: "absolute", bottom: height * 0.16, left: 60, right: 60, textAlign: "center" }}>
          <span style={{ fontSize: 52, fontWeight: 700, color: WHITE, background: "rgba(0,0,0,0.55)", padding: "10px 18px", borderRadius: 10, lineHeight: 1.25, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
            {active.text}
          </span>
        </div>
      ) : null}

      {/* CTA strip (last ~3s). */}
      {clip.cta && frame > ctaStartFrame(clip, fps) ? (
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, textAlign: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: 30, color: PRIMARY, background: ACCENT, padding: "10px 18px", borderRadius: 8, fontWeight: 600 }}>
            {clip.cta.text} → {clip.cta.url}
          </span>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

// Show the CTA in the final ~3 seconds of the clip.
function ctaStartFrame(clip: ClipData, fps: number) {
  const total = Math.round((clip.outSec - clip.inSec) * fps);
  return total - fps * 3;
}
