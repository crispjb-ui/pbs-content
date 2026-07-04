import React from "react";
import { AbsoluteFill, Img, staticFile, useVideoConfig } from "remotion";
import { loadFont as loadSans } from "@remotion/google-fonts/IBMPlexSans";
import { loadFont as loadMono } from "@remotion/google-fonts/IBMPlexMono";
import type { Cutaway } from "./Clip";

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

// ── DesignedCoverAny — the PARAMETERIZED designed cover (added Jul 2026). ──
// One component, per-clip props: renders the clip7-quality designed thumbnail for ANY clip by
// reusing the clip's own cutaway payload (equation / stat / bigstat / dotgrid) as the static
// cover visual. Closes the CLIP_RENDER_SPEC "next elevation step" (per-clip designed covers
// without 6 bespoke files). Render via render-designed-covers.mjs, which builds these props
// straight from the manifest.
export type DesignedCoverAnyProps = {
  hookLine1: string;
  hookLine2?: string;
  accent?: string; // substring of a hook line tinted Accent Blue
  showName: string;
  chip?: Cutaway; // the clip's cutaway (payload reused as the cover's static visual)
};

const accentify = (text: string, accent?: string): React.ReactNode => {
  if (accent) {
    const idx = text.toLowerCase().indexOf(accent.toLowerCase());
    if (idx >= 0) {
      return (
        <>
          {text.slice(0, idx)}
          <span style={{ color: ACCENT }}>{text.slice(idx, idx + accent.length)}</span>
          {text.slice(idx + accent.length)}
        </>
      );
    }
  }
  // Fall back to tinting dollar amounts, matching the in-clip hook treatment.
  const parts = text.split(/(\$[\d,]+)/g);
  return parts.map((part, i) =>
    /^\$[\d,]+$/.test(part.trim())
      ? <span key={i} style={{ color: ACCENT, fontFamily: MONO }}>{part}</span>
      : <span key={i}>{part}</span>
  );
};

// ── Static chip renderers (one per cutaway type) ──

const EquationChip: React.FC<{ chip: Cutaway; width: number }> = ({ chip, width }) => {
  const eq = chip.equation!;
  const barW = Math.min(width * 0.72, 760);
  const segAFrac = eq.segANum / eq.totalNum;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontFamily: MONO, fontSize: 64, fontWeight: 700, color: WHITE }}>${eq.totalNum}</span>
        <span style={{ fontFamily: SANS, fontSize: 24, fontWeight: 600, color: WHITE, marginLeft: 14, opacity: 0.8 }}>{eq.totalLabel}</span>
      </div>
      <div style={{ width: barW, height: 64, borderRadius: 12, overflow: "hidden", position: "relative", display: "flex" }}>
        <div style={{ width: `${segAFrac * 100}%`, background: WHITE, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segA}</span>
        </div>
        <div style={{ width: `${(1 - segAFrac) * 100}%`, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 26px ${ACCENT}` }}>
          <span style={{ fontFamily: MONO, fontSize: 30, fontWeight: 700, color: PRIMARY }}>{eq.segB}</span>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: 14, width: barW }}>
        <div style={{ width: `${segAFrac * 100}%`, fontFamily: SANS, fontSize: 21, color: WHITE, fontWeight: 600 }}>{eq.segALabel}</div>
        <div style={{ width: `${(1 - segAFrac) * 100}%`, fontFamily: SANS, fontSize: 21, color: ACCENT, fontWeight: 700 }}>{eq.segBLabel}</div>
      </div>
      {eq.note ? <div style={{ marginTop: 20, fontFamily: SANS, fontSize: 15, color: WHITE, opacity: 0.45 }}>{eq.note}</div> : null}
    </div>
  );
};

const StatChip: React.FC<{ chip: Cutaway }> = ({ chip }) => {
  const st = chip.stat!;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", width: "100%", maxWidth: 760, gap: 18 }}>
      {st.lines.map((ln, i) => {
        const isLast = i === st.lines.length - 1;
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 22,
            background: isLast ? ACCENT : WHITE, borderRadius: 16, padding: "20px 28px",
            boxShadow: isLast ? `0 0 26px ${ACCENT}, 0 10px 30px rgba(0,0,0,0.28)` : "0 10px 30px rgba(0,0,0,0.22)",
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
      {st.callout ? (
        <div style={{ marginTop: 4, alignSelf: "center", fontFamily: SANS, fontSize: 23, fontWeight: 700, color: ACCENT }}>
          {"↑ " + st.callout}
        </div>
      ) : null}
    </div>
  );
};

const BigStatChip: React.FC<{ chip: Cutaway; width: number }> = ({ chip, width }) => {
  const b = chip.big!;
  const value = typeof b.countTo === "number" ? String(b.countTo) : b.value;
  const wordy = /[A-Za-z]{3,}/.test(value);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{
        fontFamily: wordy ? SANS : MONO,
        fontSize: wordy ? (value.length > 10 ? 84 : 108) : 170,
        fontWeight: 700, color: ACCENT, lineHeight: 1.04, textAlign: "center",
        maxWidth: width * 0.84,
        textTransform: wordy ? "uppercase" : "none",
        textShadow: `0 0 22px ${ACCENT}`,
      }}>{value}</div>
      {b.label ? <div style={{ marginTop: 26, fontFamily: SANS, fontSize: 34, fontWeight: 600, color: WHITE, textAlign: "center", lineHeight: 1.25, maxWidth: width * 0.8 }}>{b.label}</div> : null}
      {b.sub ? <div style={{ marginTop: 16, fontFamily: SANS, fontSize: 26, fontWeight: 700, color: ACCENT, textAlign: "center" }}>{b.sub}</div> : null}
    </div>
  );
};

const DotGridChip: React.FC<{ chip: Cutaway; width: number }> = ({ chip, width }) => {
  const g = chip.grid!;
  const cols = g.total <= 4 ? g.total : Math.ceil(Math.sqrt(g.total));
  const dotSize = g.total <= 4 ? 96 : 60;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      {g.label ? <div style={{ fontFamily: SANS, fontSize: 27, fontWeight: 600, color: WHITE, letterSpacing: 2, textTransform: "uppercase" }}>{g.label}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`, gap: 16, justifyContent: "center" }}>
        {Array.from({ length: g.total }).map((_, i) => {
          const isHi = i < g.highlight;
          return <div key={i} style={{
            width: dotSize, height: dotSize, borderRadius: "50%",
            background: isHi ? ACCENT : WHITE, opacity: isHi ? 1 : 0.25,
            boxShadow: isHi ? `0 0 22px ${ACCENT}` : "none",
          }} />;
        })}
      </div>
      <div style={{ fontFamily: MONO, fontSize: 60, fontWeight: 700, color: ACCENT }}>{g.highlight} in {g.total}</div>
      {g.sub ? <div style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: WHITE, textAlign: "center", maxWidth: width * 0.8 }}>{g.sub}</div> : null}
    </div>
  );
};

export const coverAnyDefaultProps: DesignedCoverAnyProps = {
  hookLine1: "Hook line 1",
  hookLine2: "Hook line 2",
  showName: "Honest HR (SHRM)",
};

export const DesignedCoverAny: React.FC<DesignedCoverAnyProps> = ({ hookLine1, hookLine2, accent, showName, chip }) => {
  const { width, height } = useVideoConfig();
  const vertical = height / width > 1.5;
  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY, fontFamily: SANS, display: "flex", flexDirection: "column", alignItems: "center", padding: vertical ? "120px 48px 130px" : "36px 48px 40px" }}>
      {/* Top bar: logo + badge (9:16 padding keeps them clear of the platform cover-crop bands) */}
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Img src={staticFile("pbs-logo-white.png")} style={{ height: 60, width: "auto" }} />
        <div style={{ background: WHITE, color: PRIMARY, padding: "10px 22px", borderRadius: 9, fontSize: 28, fontWeight: 700, letterSpacing: 0.3 }}>
          As seen on {showName}
        </div>
      </div>

      <div style={{ width: "100%", height: 3, background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 30%, ${ACCENT} 70%, transparent 100%)`, marginTop: 28, opacity: 0.5 }} />

      {/* Main content: hook + the clip's payload visual */}
      <div style={{ position: "absolute", top: vertical ? 250 : 128, bottom: vertical ? 230 : 120, left: 56, right: 56, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: vertical ? 64 : 48 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: vertical ? 84 : 76, fontWeight: 700, color: WHITE, lineHeight: 1.12, textAlign: "center" }}>
            {accentify(hookLine1, accent)}
          </div>
          {hookLine2 ? (
            <div style={{ fontSize: vertical ? 58 : 52, fontWeight: 700, color: WHITE, lineHeight: 1.15, textAlign: "center", opacity: 0.95 }}>
              {accentify(hookLine2, accent)}
            </div>
          ) : null}
        </div>

        {chip?.type === "equation" && chip.equation ? <EquationChip chip={chip} width={width} /> : null}
        {chip?.type === "stat" && chip.stat ? <StatChip chip={chip} /> : null}
        {chip?.type === "bigstat" && chip.big ? <BigStatChip chip={chip} width={width} /> : null}
        {chip?.type === "dotgrid" && chip.grid ? <DotGridChip chip={chip} width={width} /> : null}
      </div>

      {/* Bottom attribution */}
      <div style={{ position: "absolute", bottom: vertical ? 150 : 40, left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <div style={{ width: "60%", height: 2, background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 30%, ${ACCENT} 70%, transparent 100%)`, opacity: 0.4 }} />
        <div style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: WHITE, textAlign: "center", opacity: 0.9 }}>
          Ginny Crisp, PharmD · CEO, Prescription Benefit Solutions
        </div>
      </div>
    </AbsoluteFill>
  );
};
