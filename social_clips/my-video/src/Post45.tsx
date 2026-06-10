import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

// Load brand fonts locally
const kronaOneFace = new FontFace(
  "Krona One",
  `url('${staticFile("fonts/KronaOne-Regular.ttf")}')`
);
const robotoFace = new FontFace(
  "Roboto",
  `url('${staticFile("fonts/Roboto.ttf")}')`
);
kronaOneFace.load().then((f) => document.fonts.add(f));
robotoFace.load().then((f) => document.fonts.add(f));

const kronaOne = "Krona One, sans-serif";
const roboto = "Roboto, sans-serif";

// Assets
const LOGO_WHITE = staticFile("White on Transparent (2).png");
const POST45_IMAGE = staticFile("Post 45 - What Your PBM Contract Says vs. What it Means.04.07.2026.jpg");

// Timing
const INTRO_FRAMES = 90;
const REVEAL_FRAMES = 660; // ~22 seconds for the progressive reveal
const HOLD_FRAMES = 90; // 3 seconds holding full image
const OUTRO_FRAMES = 120;
const TOTAL_FRAMES = INTRO_FRAMES + REVEAL_FRAMES + HOLD_FRAMES + OUTRO_FRAMES;

// Colors
const PRIMARY_BLUE = "#015880";
const ACCENT_BLUE = "#A7E0FA";

// Reveal zones - each section of the whiteboard to uncover
// Coordinates are percentages of the image (top, left, width, height)
const REVEAL_ZONES = [
  // Title: "PBM Contract Language Decoder"
  { top: 0, left: 0, width: 100, height: 18, startFrame: 0, duration: 60 },
  // Column headers: "What It Says" / "What It Could Mean" + "Watch out!"
  { top: 18, left: 0, width: 100, height: 10, startFrame: 50, duration: 50 },
  // Row 1: Transparent pricing → Visible to PBM (not you)
  { top: 28, left: 0, width: 45, height: 15, startFrame: 100, duration: 45 },
  { top: 28, left: 45, width: 55, height: 15, startFrame: 140, duration: 45 },
  // Row 2: Market-competitive rates → Compared to PBM's own book
  { top: 43, left: 0, width: 45, height: 14, startFrame: 200, duration: 45 },
  { top: 43, left: 45, width: 55, height: 14, startFrame: 240, duration: 45 },
  // Row 3: Guaranteed discounts → Off an inflated benchmark
  { top: 57, left: 0, width: 45, height: 14, startFrame: 300, duration: 45 },
  { top: 57, left: 45, width: 55, height: 14, startFrame: 340, duration: 45 },
  // Row 4: Pass-through rebates → After admin fees deducted
  { top: 71, left: 0, width: 45, height: 14, startFrame: 400, duration: 45 },
  { top: 71, left: 45, width: 55, height: 14, startFrame: 440, duration: 45 },
  // Bottom message: "The Visibility Gap lives here..."
  { top: 85, left: 0, width: 100, height: 15, startFrame: 510, duration: 60 },
];

// ─── INTRO ───────────────────────────────────────────────
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const glowOpacity = interpolate(frame, [10, 30, 50], [0, 0.5, 0.3], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp" });
  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 80, mass: 0.7 } });
  const hookOpacity = interpolate(frame, [35, 50], [0, 1], { extrapolateRight: "clamp" });
  const hookY = interpolate(
    spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 15 } }),
    [0, 1], [20, 0]
  );
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12 } }),
    [0, 1], [0, 60]
  );
  const exitOpacity = interpolate(frame, [75, INTRO_FRAMES], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE, justifyContent: "center", alignItems: "center", opacity: exitOpacity }}>
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_BLUE}35 0%, transparent 70%)`,
        opacity: glowOpacity, top: "50%", left: "50%", transform: "translate(-50%, -60%)",
      }} />
      <Img src={LOGO_WHITE} style={{ width: 520, opacity: logoOpacity, transform: `scale(${logoScale})` }} />
      <div style={{ width: dividerWidth, height: 2, backgroundColor: ACCENT_BLUE, marginTop: 35, marginBottom: 20 }} />
      <div style={{ opacity: hookOpacity, transform: `translateY(${hookY}px)`, textAlign: "center" }}>
        <p style={{ color: ACCENT_BLUE, fontSize: 30, fontFamily: roboto, fontStyle: "italic", fontWeight: 300, letterSpacing: 1.5, margin: 0 }}>
          PBM contracts have their own language
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ─── PROGRESSIVE REVEAL OF ACTUAL WHITEBOARD IMAGE ───────
const WhiteboardReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Build a clip-path that reveals sections progressively
  // Each zone gets its own masked copy of the full image

  return (
    <AbsoluteFill style={{ backgroundColor: "#E8E8E0" }}>
      {/* Light background matching whiteboard edges */}
      <div style={{
        position: "absolute",
        top: 20, left: 20, right: 20, bottom: 20,
        backgroundColor: "#F5F5F0",
        borderRadius: 8,
        boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
      }} />

      {/* Each zone reveals a portion of the image */}
      {REVEAL_ZONES.map((zone, i) => {
        const localFrame = frame - zone.startFrame;
        if (localFrame < 0) return null;

        // Reveal wipes from left to right within each zone
        const revealProgress = spring({
          frame: localFrame,
          fps,
          config: { damping: 18, stiffness: 60, mass: 0.8 },
        });

        // Slight fade in as well
        const opacity = interpolate(localFrame, [0, 10], [0, 1], {
          extrapolateRight: "clamp",
        });

        // Clip the image to only show this zone's area,
        // with the right edge animated to reveal left-to-right
        const clipLeft = zone.left;
        const clipTop = zone.top;
        const clipRight = 100 - (zone.left + zone.width * revealProgress);
        const clipBottom = 100 - (zone.top + zone.height);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity,
              clipPath: `inset(${clipTop}% ${clipRight}% ${clipBottom}% ${clipLeft}%)`,
            }}
          >
            <Img
              src={POST45_IMAGE}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        );
      })}

      {/* Marker dot that follows the current writing position */}
      {(() => {
        // Find which zone is currently being revealed
        let activeZone = REVEAL_ZONES[0];
        for (const zone of REVEAL_ZONES) {
          if (frame >= zone.startFrame && frame <= zone.startFrame + zone.duration + 10) {
            activeZone = zone;
            break;
          }
        }

        const localFrame = frame - activeZone.startFrame;
        if (localFrame < 0 || localFrame > activeZone.duration + 5) return null;

        const progress = spring({
          frame: Math.max(0, localFrame),
          fps,
          config: { damping: 18, stiffness: 60, mass: 0.8 },
        });

        // Marker position tracks the reveal edge
        const markerX = activeZone.left + activeZone.width * progress;
        const markerY = activeZone.top + activeZone.height * 0.5;

        // Fade marker in/out
        const markerOpacity = interpolate(
          localFrame,
          [0, 5, activeZone.duration - 5, activeZone.duration],
          [0, 0.8, 0.8, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            style={{
              position: "absolute",
              left: `${markerX}%`,
              top: `${markerY}%`,
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#333",
              opacity: markerOpacity,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
        );
      })()}
    </AbsoluteFill>
  );
};

// ─── HOLD (full image visible) ───────────────────────────
const HoldFullImage: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle zoom during hold
  const scale = interpolate(frame, [0, HOLD_FRAMES], [1, 1.02], {
    extrapolateRight: "clamp",
  });

  // Fade out at end
  const opacity = interpolate(frame, [HOLD_FRAMES - 15, HOLD_FRAMES], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#E8E8E0", opacity }}>
      <Img
        src={POST45_IMAGE}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: `scale(${scale})`,
        }}
      />
    </AbsoluteFill>
  );
};

// ─── OUTRO / CTA ─────────────────────────────────────────
const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const headlineOpacity = interpolate(frame, [10, 25], [0, 1], { extrapolateRight: "clamp" });
  const headlineY = interpolate(
    spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 15 } }),
    [0, 1], [25, 0]
  );
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 12 } }),
    [0, 1], [0, 80]
  );
  const subOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(
    spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 15 } }),
    [0, 1], [20, 0]
  );
  const emailOpacity = interpolate(frame, [45, 60], [0, 1], { extrapolateRight: "clamp" });
  const webOpacity = interpolate(frame, [55, 70], [0, 1], { extrapolateRight: "clamp" });
  const bottomLogoOpacity = interpolate(frame, [60, 75], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE, justifyContent: "center", alignItems: "center", opacity: bgOpacity }}>
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_BLUE}20 0%, transparent 70%)`,
        top: "30%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <h1 style={{
        color: ACCENT_BLUE, fontSize: 42, fontFamily: kronaOne, fontWeight: 400,
        textAlign: "center", textTransform: "uppercase", margin: 0, lineHeight: 1.3,
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
        maxWidth: 800, padding: "0 50px",
      }}>
        Every word was chosen carefully.
      </h1>

      <div style={{ width: dividerWidth, height: 3, backgroundColor: ACCENT_BLUE, margin: "30px 0" }} />

      <p style={{
        color: "#FFFFFF", fontSize: 28, fontFamily: roboto, fontWeight: 400,
        textAlign: "center", margin: 0, opacity: subOpacity,
        transform: `translateY(${subY}px)`, maxWidth: 700, lineHeight: 1.5, padding: "0 50px",
      }}>
        Was it chosen for your benefit, or theirs?
        <br />
        We help employers find out.
      </p>

      <p style={{
        color: "#FFFFFF", fontSize: 36, fontFamily: roboto, fontWeight: 500,
        margin: "35px 0 8px", opacity: emailOpacity, letterSpacing: 1,
      }}>
        team@rxbs.org
      </p>

      <p style={{
        color: "rgba(255,255,255,0.5)", fontSize: 20, fontFamily: roboto, fontWeight: 300,
        margin: 0, opacity: webOpacity,
      }}>
        www.rxbs.org
      </p>

      <Img src={LOGO_WHITE} style={{ position: "absolute", bottom: 40, width: 280, opacity: bottomLogoOpacity }} />
    </AbsoluteFill>
  );
};

// ─── MAIN COMPOSITION ────────────────────────────────────
export const Post45Composition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE }}>
      <Sequence durationInFrames={INTRO_FRAMES}>
        <Intro />
      </Sequence>
      <Sequence from={INTRO_FRAMES} durationInFrames={REVEAL_FRAMES}>
        <WhiteboardReveal />
      </Sequence>
      <Sequence from={INTRO_FRAMES + REVEAL_FRAMES} durationInFrames={HOLD_FRAMES}>
        <HoldFullImage />
      </Sequence>
      <Sequence from={INTRO_FRAMES + REVEAL_FRAMES + HOLD_FRAMES} durationInFrames={OUTRO_FRAMES}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

export const POST45_TOTAL_FRAMES = TOTAL_FRAMES;
