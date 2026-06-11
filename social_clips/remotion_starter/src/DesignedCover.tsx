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

export const DesignedCover: React.FC = () => {
  const barTotal = 820; // wider bar
  const paidFrac = 100 / 120;
  const spreadFrac = 20 / 120;

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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Img
          src={staticFile("pbs-logo-white.png")}
          style={{ height: 52, width: "auto" }}
        />
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

      {/* ── MAIN CONTENT (vertically centered between header and footer) ── */}
      <div
        style={{
          position: "absolute",
          top: 120,
          bottom: 110,
          left: 48,
          right: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 48,
        }}
      >
        {/* Hook text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: WHITE,
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            They pay the pharmacy{" "}
            <span style={{ color: ACCENT, fontFamily: MONO, fontWeight: 700 }}>
              $100
            </span>
            .
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: WHITE,
              lineHeight: 1.15,
              textAlign: "center",
            }}
          >
            They charge you{" "}
            <span style={{ color: ACCENT, fontFamily: MONO, fontWeight: 700 }}>
              $120
            </span>
            .
          </div>
        </div>

        {/* Bar visualization */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Total label above bar */}
        <div
          style={{
            fontFamily: MONO,
            fontSize: 30,
            fontWeight: 600,
            color: ACCENT,
            marginBottom: 16,
            letterSpacing: 0.5,
          }}
        >
          $120 billed to plan
        </div>

        {/* Split bar */}
        <div
          style={{
            display: "flex",
            width: barTotal,
            height: 84,
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          {/* $100 pharmacy segment */}
          <div
            style={{
              width: barTotal * paidFrac,
              height: "100%",
              background: WHITE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 36,
                fontWeight: 700,
                color: PRIMARY,
              }}
            >
              $100
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 22,
                fontWeight: 600,
                color: PRIMARY,
                opacity: 0.7,
              }}
            >
              paid to pharmacy
            </span>
          </div>

          {/* $20 spread segment */}
          <div
            style={{
              width: barTotal * spreadFrac,
              height: "100%",
              background: ACCENT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 34,
                fontWeight: 700,
                color: PRIMARY,
              }}
            >
              $20
            </span>
          </div>
        </div>

        {/* "PBM keeps = SPREAD" label — centered under bar, bold + larger */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 14,
          }}
        >
          <div
            style={{
              width: 32,
              height: 2,
              background: ACCENT,
              opacity: 0.5,
            }}
          />
          <span
            style={{
              fontFamily: SANS,
              fontSize: 24,
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: 1.5,
            }}
          >
            PBM KEEPS THE SPREAD
          </span>
          <div
            style={{
              width: 32,
              height: 2,
              background: ACCENT,
              opacity: 0.5,
            }}
          />
        </div>

        {/* Illustrative example disclaimer */}
        <div
          style={{
            fontFamily: SANS,
            fontSize: 16,
            fontWeight: 400,
            color: WHITE,
            opacity: 0.4,
            marginTop: 20,
            letterSpacing: 0.4,
          }}
        >
          Illustrative example for educational purposes. Actual amounts vary by
          plan.
        </div>
      </div>
      </div>

      {/* ── BOTTOM: attribution (pinned) ── */}
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
        <div
          style={{
            fontFamily: SANS,
            fontSize: 26,
            fontWeight: 600,
            color: WHITE,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Ginny Crisp, PharmD · CEO, Prescription Benefit Solutions
        </div>
      </div>
    </AbsoluteFill>
  );
};
