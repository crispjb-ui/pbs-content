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
export type Word = { startSec: number; endSec: number; text: string }; // from Whisper (optional, enables karaoke)
export type Overlay = { startSec: number; endSec: number; big: string; small?: string; position?: "center" | "top" };
export type ImageCut = { startSec: number; endSec: number; src: string; position?: "corner" | "full" }; // src = file in public/
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
  images?: ImageCut[];
  words?: Word[]; // optional; if present, captions render karaoke (active word in Accent)
  captions: Caption[];
};
export type ClipProps = { sourceVideo: string; fps: number; clip: ClipData; coverMode?: boolean };

export const clipDefaultProps: ClipProps = {
  sourceVideo: "source.mp4",
  fps: 30,
  clip: {
    id: "clip1", inSec: 0, outSec: 10, aspect: "9x16",
    hookTitle: "On-screen hook goes here", showName: "Show Name",
    cta: { text: "Free toolkit", url: "rxbs.org/toolkit/pbm-compensation" },
    overlays: [], images: [], words: [], captions: [],
  },
};

export const Clip: React.FC<ClipProps> = ({ sourceVideo, fps, clip, coverMode }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const tSource = clip.inSec + frame / fps;
  const totalFrames = Math.round((clip.outSec - clip.inSec) * fps);

  // ===== COVER MODE: render a single still as the feed thumbnail (hook + face + brand, no captions/UI). =====
  if (coverMode) {
    return (
      <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
        <OffthreadVideo src={staticFile(sourceVideo)} startFrom={Math.round(clip.inSec * fps)} style={{ width, height, objectFit: "cover" }} />
        <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(1,88,128,0.12), rgba(0,0,0,0.66))" }} />
        <div style={{ position: "absolute", top: 30, left: 30, color: WHITE, fontWeight: 700, letterSpacing: 1, fontSize: 30 }}>▲ PBS</div>
        <div style={{ position: "absolute", top: 30, right: 30, background: PRIMARY, color: WHITE, padding: "8px 14px", borderRadius: 6, fontSize: 24, fontWeight: 600 }}>As seen on {clip.showName}</div>
        <div style={{ position: "absolute", bottom: height * 0.16, left: 56, right: 56, textAlign: "center" }}>
          <span style={{ fontSize: clip.aspect === "9x16" ? 96 : 82, fontWeight: 700, color: WHITE, lineHeight: 1.05, background: PRIMARY, boxShadow: `0 0 0 18px ${PRIMARY}`, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{clip.hookTitle}</span>
        </div>
        <div style={{ position: "absolute", bottom: 44, left: 0, right: 0, textAlign: "center", color: WHITE, fontSize: 28, fontWeight: 600 }}>Ginny Crisp, PharmD · Prescription Benefit Solutions</div>
      </AbsoluteFill>
    );
  }

  const active = clip.captions.find((c) => tSource >= c.startSec && tSource <= c.endSec);
  // Karaoke words within the active phrase (only if words[] supplied via Whisper).
  const phraseWords = active && clip.words
    ? clip.words.filter((w) => w.startSec >= active.startSec - 0.05 && w.endSec <= active.endSec + 0.05)
    : null;

  const hookOpacity = interpolate(frame, [0, 8, fps * 2.2, fps * 2.2 + 12], [0, 1, 1, 0], { extrapolateRight: "clamp" });
  const nameOpacity = interpolate(frame, [0, 8, fps * 3.5, fps * 3.5 + 12], [0, 1, 1, 0], { extrapolateRight: "clamp" });

  // (4) Gentle, automatic slow zoom (Ken Burns) so the talking head never feels static.
  const zoom = interpolate(frame, [0, totalFrames], [1.0, 1.06], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", fontFamily: SANS, overflow: "hidden" }}>
      <OffthreadVideo
        src={staticFile(sourceVideo)}
        startFrom={Math.round(clip.inSec * fps)}
        style={{ width, height, objectFit: "cover", transform: `scale(${zoom})` }}
      />

      {/* (6) Progress bar — top, fills as the clip plays. */}
      <div style={{ position: "absolute", top: 0, left: 0, height: 8, width: `${(frame / totalFrames) * 100}%`, background: ACCENT }} />

      {/* Brand watermark + "as seen on" badge. */}
      <div style={{ position: "absolute", top: 28, left: 28, color: WHITE, opacity: 0.85, fontWeight: 700, letterSpacing: 1 }}>▲ PBS</div>
      <div style={{ position: "absolute", top: 28, right: 28, background: PRIMARY, color: WHITE, padding: "8px 14px", borderRadius: 6, fontSize: 24, fontWeight: 600 }}>As seen on {clip.showName}</div>

      {/* Scroll-stopper hook (top third, opening seconds). */}
      <div style={{ position: "absolute", top: height * 0.12, left: 48, right: 48, opacity: hookOpacity }}>
        <span style={{ fontSize: 64, fontWeight: 700, color: WHITE, lineHeight: 1.1, background: PRIMARY, boxShadow: `0 0 0 12px ${PRIMARY}` }}>{clip.hookTitle}</span>
      </div>

      {/* Lower-third name tag. */}
      <div style={{ position: "absolute", bottom: height * 0.2, left: 48, opacity: nameOpacity }}>
        <div style={{ background: WHITE, color: PRIMARY, padding: "10px 16px", borderRadius: 6, fontSize: 30, fontWeight: 700 }}>Ginny Crisp, PharmD</div>
        <div style={{ background: ACCENT, color: PRIMARY, padding: "6px 16px", borderRadius: 6, fontSize: 22, marginTop: 6, fontWeight: 600, display: "inline-block" }}>Prescription Benefit Solutions</div>
      </div>

      {/* (5) Image cutaways — show the toolkit preview (or any public/ image) on screen. */}
      {(clip.images ?? []).map((im, i) => {
        if (tSource < im.startSec || tSource > im.endSec) return null;
        const lf = (tSource - im.startSec) * fps;
        const dur = (im.endSec - im.startSec) * fps;
        const enter = spring({ frame: lf, fps, config: { damping: 14, stiffness: 120 } });
        const exit = interpolate(lf, [dur - 8, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const op = Math.min(enter, exit);
        if (im.position === "full") {
          return <AbsoluteFill key={i} style={{ opacity: op }}><Img src={staticFile(im.src)} style={{ width, height, objectFit: "cover", objectPosition: "top center" }} /></AbsoluteFill>;
        }
        // corner card (bottom-left, above captions): the "here's the worksheet" shot
        const cardW = width * 0.34;
        return (
          <div key={i} style={{ position: "absolute", left: 40, bottom: height * 0.26, width: cardW, opacity: op, transform: `translateY(${(1 - enter) * 30}px)`, boxShadow: "0 14px 44px rgba(0,0,0,0.5)", border: `4px solid ${WHITE}`, borderRadius: 10, overflow: "hidden", background: WHITE }}>
            <Img src={staticFile(im.src)} style={{ width: cardW, height: cardW * 1.1, objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </div>
        );
      })}

      {/* (1) Stat callouts (spring-in). */}
      {(clip.overlays ?? []).map((o, i) => {
        if (tSource < o.startSec || tSource > o.endSec) return null;
        const lf = (tSource - o.startSec) * fps;
        const dur = (o.endSec - o.startSec) * fps;
        const enter = spring({ frame: lf, fps, config: { damping: 13, stiffness: 130, mass: 0.7 } });
        const exit = interpolate(lf, [dur - 9, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const op = Math.min(enter, exit);
        const top = o.position === "top" ? height * 0.2 : height * 0.4;
        return (
          <div key={i} style={{ position: "absolute", top, left: 0, right: 0, textAlign: "center", opacity: op, transform: `scale(${0.72 + enter * 0.28})` }}>
            <div style={{ display: "inline-block", background: PRIMARY, padding: "20px 34px", borderRadius: 18, boxShadow: "0 14px 44px rgba(0,0,0,0.45)", border: `3px solid ${ACCENT}` }}>
              <div style={{ fontFamily: MONO, fontSize: clip.aspect === "9x16" ? 130 : 104, fontWeight: 700, color: ACCENT, lineHeight: 1, letterSpacing: "-0.02em" }}>{o.big}</div>
              {o.small ? <div style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: WHITE, marginTop: 10 }}>{o.small}</div> : null}
            </div>
          </div>
        );
      })}

      {/* (1) Captions — karaoke if words[] present, else the line block. Mandatory either way. */}
      {active ? (
        <div style={{ position: "absolute", bottom: height * 0.16, left: 60, right: 60, textAlign: "center" }}>
          <span style={{ fontSize: 52, fontWeight: 700, color: WHITE, background: "rgba(0,0,0,0.55)", padding: "10px 18px", borderRadius: 10, lineHeight: 1.3, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
            {phraseWords && phraseWords.length
              ? phraseWords.map((w, i) => {
                  const on = tSource >= w.startSec && tSource <= w.endSec;
                  return <span key={i} style={{ color: on ? ACCENT : WHITE }}>{w.text}{" "}</span>;
                })
              : active.text}
          </span>
        </div>
      ) : null}

      {/* CTA strip (last ~3s). */}
      {clip.cta && frame > totalFrames - fps * 3 ? (
        <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, textAlign: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: 30, color: PRIMARY, background: ACCENT, padding: "10px 18px", borderRadius: 8, fontWeight: 600 }}>{clip.cta.text} → {clip.cta.url}</span>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
