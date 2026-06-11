import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
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

// clip7 cover — "Demand these 3 numbers" (reporting transparency, SHRM Honest HR)
const ROWS: { pre: string; key: string; post?: string; highlight?: boolean }[] = [
  { pre: "What the drug", key: "COST" },
  { pre: "What your", key: "REBATES", post: "were" },
  { pre: "Your", key: "NET COST", highlight: true },
];

export const DesignedCoverClip7: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: PRIMARY,
        fontFamily: SANS,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "36px 48px 40px",
      }}
    >
      {/* ── TOP BAR: logo + badge ── */}
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Img src={staticFile("pbs-logo-white.png")} style={{ height: 52, width: "auto" }} />
        <div
          style={{
            background: WHITE,
            color: PRIMARY,
            padding: "8px 18px",
            borderRadius: 8,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 0.3,
          }}
        >
          As seen on Honest HR (SHRM)
        </div>
      </div>

      {/* ── ACCENT DIVIDER ── */}
      <div
        style={{
          width: "100%",
          height: 3,
          background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 30%, ${ACCENT} 70%, transparent 100%)`,
          marginTop: 28,
          opacity: 0.5,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: "absolute",
          top: 128,
          bottom: 120,
          left: 56,
          right: 56,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 52,
        }}
      >
        {/* Hook text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: WHITE, lineHeight: 1.12, textAlign: "center" }}>
            Cost. Rebates.{" "}
            <span style={{ color: ACCENT }}>Net cost.</span>
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: WHITE, lineHeight: 1.15, textAlign: "center", opacity: 0.95 }}>
            Your PBM won&rsquo;t show you all three.
          </div>
        </div>

        {/* Three-number reveal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", width: "100%", maxWidth: 760, gap: 18 }}>
          {ROWS.map((ln, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
                background: ln.highlight ? ACCENT : WHITE,
                borderRadius: 16,
                padding: "20px 28px",
                boxShadow: ln.highlight
                  ? `0 0 26px ${ACCENT}, 0 10px 30px rgba(0,0,0,0.28)`
                  : "0 10px 30px rgba(0,0,0,0.22)",
              }}
            >
              <div
                style={{
                  flex: "0 0 auto",
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: PRIMARY,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: MONO,
                  fontSize: 30,
                  fontWeight: 700,
                  color: WHITE,
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 31, fontWeight: 500, color: PRIMARY, lineHeight: 1.15 }}>
                {ln.pre}{" "}
                <span style={{ fontWeight: 700, fontSize: 35 }}>{ln.key}</span>
                {ln.post ? <span>{" " + ln.post}</span> : null}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 4, alignSelf: "center", fontFamily: SANS, fontSize: 23, fontWeight: 700, color: ACCENT }}>
            ↑ the one that decides everything
          </div>
        </div>
      </div>

      {/* ── BOTTOM: attribution ── */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            width: "60%",
            height: 2,
            background: `linear-gradient(90deg, transparent 0%, ${ACCENT} 30%, ${ACCENT} 70%, transparent 100%)`,
            opacity: 0.4,
          }}
        />
        <div style={{ fontFamily: SANS, fontSize: 26, fontWeight: 600, color: WHITE, textAlign: "center", opacity: 0.9 }}>
          Ginny Crisp, PharmD · CEO, Prescription Benefit Solutions
        </div>
      </div>
    </AbsoluteFill>
  );
};
