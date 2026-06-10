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
const LOGO_DIAMOND = staticFile("Original on Transparent_diamond (2).png");

const SLIDES = [
  staticFile("post47_slide-1.png"),
  staticFile("post47_slide-2.png"),
  staticFile("post47_slide-3.png"),
  staticFile("post47_slide-4.png"),
  staticFile("post47_slide-5.png"),
  staticFile("post47_slide-6.png"),
  staticFile("post47_slide-7.png"),
];

// Timing
const INTRO_FRAMES = 90; // 3 seconds
const FRAMES_PER_SLIDE = 180; // 6 seconds per slide
const TRANSITION_FRAMES = 18;
const OUTRO_FRAMES = 120; // 4 seconds
const CAROUSEL_FRAMES = FRAMES_PER_SLIDE * SLIDES.length;
const TOTAL_FRAMES = INTRO_FRAMES + CAROUSEL_FRAMES + OUTRO_FRAMES;

// Colors
const PRIMARY_BLUE = "#015880";
const ACCENT_BLUE = "#A7E0FA";

// ─── INTRO ───────────────────────────────────────────────
const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Glow pulses in
  const glowOpacity = interpolate(
    frame,
    [10, 30, 50],
    [0, 0.5, 0.3],
    { extrapolateRight: "clamp" }
  );

  // White logo fades in
  const logoOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 80, mass: 0.7 },
  });

  // Hook text appears
  const hookOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const hookY = interpolate(
    spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 15 } }),
    [0, 1],
    [20, 0]
  );

  // Divider grows
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12 } }),
    [0, 1],
    [0, 60]
  );

  // Exit: everything fades out
  const exitOpacity = interpolate(frame, [75, INTRO_FRAMES], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PRIMARY_BLUE,
        justifyContent: "center",
        alignItems: "center",
        opacity: exitOpacity,
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_BLUE}35 0%, transparent 70%)`,
          opacity: glowOpacity,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      {/* Full white logo */}
      <Img
        src={LOGO_WHITE}
        style={{
          width: 520,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
        }}
      />

      {/* Divider */}
      <div
        style={{
          width: dividerWidth,
          height: 2,
          backgroundColor: ACCENT_BLUE,
          marginTop: 35,
          marginBottom: 20,
        }}
      />

      {/* Hook text */}
      <div
        style={{
          opacity: hookOpacity,
          transform: `translateY(${hookY}px)`,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: ACCENT_BLUE,
            fontSize: 30,
            fontFamily: roboto,
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: 1.5,
            margin: 0,
          }}
        >
          Stop-loss gaps you're missing
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ─── CAROUSEL SLIDE ──────────────────────────────────────
const Slide: React.FC<{
  src: string;
  index: number;
}> = ({ src, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideStart = index * FRAMES_PER_SLIDE;
  const localFrame = frame - slideStart;

  // Entry: slide in from right
  const enterProgress = spring({
    frame: localFrame,
    fps,
    config: { damping: 20, stiffness: 120, mass: 0.8 },
  });

  // Exit: slide out to left
  const exitStart = FRAMES_PER_SLIDE - TRANSITION_FRAMES;
  const exitProgress =
    localFrame > exitStart
      ? spring({
          frame: localFrame - exitStart,
          fps,
          config: { damping: 20, stiffness: 120, mass: 0.8 },
        })
      : 0;

  const translateX =
    interpolate(enterProgress, [0, 1], [1080, 0]) +
    interpolate(exitProgress, [0, 1], [0, -1080]);

  // First slide fades in instead of sliding
  const opacity =
    index === 0
      ? interpolate(localFrame, [0, 12], [0, 1], {
          extrapolateRight: "clamp",
        })
      : 1;

  // Subtle zoom
  const scale = interpolate(localFrame, [0, FRAMES_PER_SLIDE], [1, 1.03], {
    extrapolateRight: "clamp",
  });

  if (
    localFrame < -TRANSITION_FRAMES ||
    localFrame > FRAMES_PER_SLIDE + TRANSITION_FRAMES
  ) {
    return null;
  }

  return (
    <AbsoluteFill
      style={{
        transform:
          index === 0 && localFrame < exitStart
            ? `scale(${scale})`
            : `translateX(${translateX}px) scale(${scale})`,
        opacity,
      }}
    >
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AbsoluteFill>
  );
};

// ─── CAROUSEL SECTION ────────────────────────────────────
const Carousel: React.FC = () => {
  const frame = useCurrentFrame();

  const currentSlide = Math.min(
    Math.floor(frame / FRAMES_PER_SLIDE),
    SLIDES.length - 1
  );

  // Progress bar
  const progress = Math.min(frame / CAROUSEL_FRAMES, 1);

  // Dots fade in
  const dotsOpacity = interpolate(frame, [5, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE }}>
      {SLIDES.map((s, i) => (
        <Slide key={i} src={s} index={i} />
      ))}

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 4,
          backgroundColor: "rgba(255,255,255,0.15)",
          zIndex: 20,
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            backgroundColor: ACCENT_BLUE,
          }}
        />
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 20,
          opacity: dotsOpacity,
        }}
      >
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === currentSlide ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor:
                i === currentSlide ? ACCENT_BLUE : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ─── OUTRO / CTA ─────────────────────────────────────────
const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background fades in
  const bgOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Diamond pops in
  const diamondScale = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // CTA headline
  const headlineOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(
    spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 15 } }),
    [0, 1],
    [25, 0]
  );

  // Divider line grows
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 12 } }),
    [0, 1],
    [0, 80]
  );

  // Subtitle
  const subOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subY = interpolate(
    spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 15 } }),
    [0, 1],
    [20, 0]
  );

  // Email
  const emailOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Website
  const webOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Full logo at bottom
  const bottomLogoOpacity = interpolate(frame, [65, 80], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: PRIMARY_BLUE,
        justifyContent: "center",
        alignItems: "center",
        opacity: bgOpacity,
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_BLUE}20 0%, transparent 70%)`,
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* CTA Headline - Krona One to match carousel headers */}
      <h1
        style={{
          color: ACCENT_BLUE,
          fontSize: 42,
          fontFamily: kronaOne,
          fontWeight: 400,
          textAlign: "center",
          textTransform: "uppercase",
          margin: 0,
          lineHeight: 1.3,
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
          maxWidth: 800,
          padding: "0 50px",
        }}
      >
        Don't wait for a
        <br />
        $2M claim to find out.
      </h1>

      {/* Divider */}
      <div
        style={{
          width: dividerWidth,
          height: 3,
          backgroundColor: ACCENT_BLUE,
          margin: "30px 0",
        }}
      />

      {/* Subtitle - Roboto to match carousel body text */}
      <p
        style={{
          color: "#FFFFFF",
          fontSize: 28,
          fontFamily: roboto,
          fontWeight: 400,
          textAlign: "center",
          margin: 0,
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          maxWidth: 700,
          lineHeight: 1.5,
          padding: "0 50px",
        }}
      >
        Get your stop-loss policy reviewed
        <br />
        for pharmacy coverage gaps.
      </p>

      {/* Email */}
      <p
        style={{
          color: "#FFFFFF",
          fontSize: 36,
          fontFamily: roboto,
          fontWeight: 500,
          margin: "35px 0 8px",
          opacity: emailOpacity,
          letterSpacing: 1,
        }}
      >
        team@rxbs.org
      </p>

      {/* Website */}
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 20,
          fontFamily: roboto,
          fontWeight: 300,
          margin: 0,
          opacity: webOpacity,
        }}
      >
        www.rxbs.org
      </p>

      {/* Bottom logo */}
      <Img
        src={LOGO_WHITE}
        style={{
          position: "absolute",
          bottom: 40,
          width: 280,
          opacity: bottomLogoOpacity,
        }}
      />
    </AbsoluteFill>
  );
};

// ─── MAIN COMPOSITION ────────────────────────────────────
export const MyComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE }}>
      <Sequence durationInFrames={INTRO_FRAMES}>
        <Intro />
      </Sequence>
      <Sequence from={INTRO_FRAMES} durationInFrames={CAROUSEL_FRAMES}>
        <Carousel />
      </Sequence>
      <Sequence from={INTRO_FRAMES + CAROUSEL_FRAMES} durationInFrames={OUTRO_FRAMES}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

export { TOTAL_FRAMES };
