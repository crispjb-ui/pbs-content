import {
  AbsoluteFill,
  Img,
  Video,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  OffthreadVideo,
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

// Colors
const PRIMARY_BLUE = "#015880";
const ACCENT_BLUE = "#A7E0FA";
const DARK_OVERLAY = "rgba(0, 0, 0, 0.55)";

// ─── PROPS ───────────────────────────────────────────────
// To use this template, pass these as props or change the defaults
export type BreakingNewsProps = {
  articleScreenshot: string; // path to article screenshot in public/
  speakerVideo: string; // path to Ginny's video in public/
  headline: string; // e.g. "GLP-1 Costs Surge 40% for Employers"
  tagline?: string; // e.g. "What this means for your plan"
  speakerName?: string;
  speakerTitle?: string;
};

const DEFAULT_PROPS: BreakingNewsProps = {
  articleScreenshot: "sample-article.png",
  speakerVideo: "sample-speaker.mp4",
  headline: "HEADLINE GOES HERE",
  tagline: "Expert analysis from PBS",
  speakerName: "Ginny Crisp, PharmD",
  speakerTitle: "CEO, Prescription Benefit Solutions",
};

// Timing
const INTRO_FRAMES = 75; // 2.5s branded intro
const ARTICLE_REVEAL_FRAMES = 45; // 1.5s article zooms in
const SPEAKER_TOTAL = 600; // 20s of speaker + article (adjust to match video length)
const OUTRO_FRAMES = 120; // 4s CTA
const TOTAL_FRAMES = INTRO_FRAMES + ARTICLE_REVEAL_FRAMES + SPEAKER_TOTAL + OUTRO_FRAMES;

// ─── BREAKING BANNER ─────────────────────────────────────
const BreakingBanner: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({
    frame, fps,
    config: { damping: 15, stiffness: 100 },
  });

  const bannerWidth = interpolate(slideIn, [0, 1], [0, 100]);

  // Pulsing glow on "BREAKING"
  const pulse = interpolate(
    Math.sin(frame * 0.15),
    [-1, 1],
    [0.7, 1]
  );

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 15,
      overflow: "hidden",
    }}>
      {/* Red banner bar */}
      <div style={{
        width: `${bannerWidth}%`,
        backgroundColor: "#C0392B",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
      }}>
        {/* BREAKING tag */}
        <div style={{
          backgroundColor: "white",
          color: "#C0392B",
          fontFamily: kronaOne,
          fontSize: 18,
          fontWeight: 400,
          padding: "4px 14px",
          borderRadius: 3,
          letterSpacing: 2,
          textTransform: "uppercase",
          opacity: pulse,
          whiteSpace: "nowrap",
        }}>
          BREAKING
        </div>

        {/* Headline text */}
        <p style={{
          color: "white",
          fontFamily: roboto,
          fontSize: 20,
          fontWeight: 600,
          margin: 0,
          letterSpacing: 0.5,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {text}
        </p>
      </div>
    </div>
  );
};

// ─── SPEAKER FRAME (PIP) ─────────────────────────────────
const SpeakerFrame: React.FC<{
  videoSrc: string;
  name: string;
  title: string;
}> = ({ videoSrc, name, title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pop in with spring
  const popIn = spring({
    frame, fps,
    config: { damping: 12, stiffness: 100 },
  });

  const scale = interpolate(popIn, [0, 1], [0.3, 1]);
  const opacity = interpolate(popIn, [0, 1], [0, 1]);

  // Name tag slides up
  const nameTagOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const nameTagY = interpolate(
    spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 15 } }),
    [0, 1], [15, 0]
  );

  return (
    <div style={{
      position: "absolute",
      bottom: 30,
      left: 30,
      zIndex: 20,
      transform: `scale(${scale})`,
      opacity,
      transformOrigin: "bottom left",
    }}>
      {/* Video in rounded rectangle */}
      <div style={{
        width: 340,
        height: 340,
        borderRadius: 20,
        overflow: "hidden",
        border: "4px solid white",
        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        backgroundColor: "#222",
      }}>
        {/* Placeholder when no real video */}
        <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: PRIMARY_BLUE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
        }}>
          <Img
            src={LOGO_DIAMOND}
            style={{ width: 80, height: 80 }}
          />
          <p style={{
            color: ACCENT_BLUE,
            fontFamily: roboto,
            fontSize: 16,
            margin: 0,
            textAlign: "center",
          }}>
            Speaker video
            <br />
            goes here
          </p>
        </div>
      </div>

      {/* Name tag */}
      <div style={{
        marginTop: 10,
        opacity: nameTagOpacity,
        transform: `translateY(${nameTagY}px)`,
      }}>
        <div style={{
          backgroundColor: PRIMARY_BLUE,
          padding: "8px 16px",
          borderRadius: 8,
          borderLeft: `4px solid ${ACCENT_BLUE}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}>
          <p style={{
            color: "white",
            fontFamily: roboto,
            fontSize: 18,
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.3,
          }}>
            {name}
          </p>
          <p style={{
            color: ACCENT_BLUE,
            fontFamily: roboto,
            fontSize: 14,
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.3,
          }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── ARTICLE BACKGROUND ──────────────────────────────────
const ArticleBackground: React.FC<{
  src: string;
  zoomStart?: number;
}> = ({ src, zoomStart = 1 }) => {
  const frame = useCurrentFrame();

  // Slow zoom on article for visual interest
  const scale = interpolate(
    frame,
    [0, 600],
    [zoomStart, zoomStart + 0.08],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      {/* Article screenshot */}
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          transform: `scale(${scale})`,
        }}
      />
      {/* Dark overlay so text/speaker pops */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(
          180deg,
          rgba(0,0,0,0.3) 0%,
          rgba(0,0,0,0.15) 30%,
          rgba(0,0,0,0.4) 70%,
          rgba(0,0,0,0.7) 100%
        )`,
      }} />
    </AbsoluteFill>
  );
};

// ─── PBS WATERMARK ───────────────────────────────────────
const PBSWatermark: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [10, 25], [0, 0.7], {
    extrapolateRight: "clamp",
  });

  return (
    <Img
      src={LOGO_WHITE}
      style={{
        position: "absolute",
        top: 60,
        right: 20,
        width: 180,
        opacity,
        zIndex: 15,
      }}
    />
  );
};

// ─── INTRO ───────────────────────────────────────────────
const Intro: React.FC<{ headline: string }> = ({ headline }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 80, mass: 0.7 } });

  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 12 } }),
    [0, 1], [0, 60]
  );

  const headlineOpacity = interpolate(frame, [30, 45], [0, 1], { extrapolateRight: "clamp" });
  const headlineY = interpolate(
    spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 15 } }),
    [0, 1], [20, 0]
  );

  const exitOpacity = interpolate(frame, [60, INTRO_FRAMES], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE, justifyContent: "center", alignItems: "center", opacity: exitOpacity }}>
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_BLUE}30 0%, transparent 70%)`,
        top: "50%", left: "50%", transform: "translate(-50%, -55%)",
      }} />

      <Img src={LOGO_WHITE} style={{ width: 420, opacity: logoOpacity, transform: `scale(${logoScale})` }} />

      <div style={{ width: dividerWidth, height: 2, backgroundColor: ACCENT_BLUE, marginTop: 30, marginBottom: 20 }} />

      <p style={{
        color: ACCENT_BLUE, fontSize: 28, fontFamily: roboto, fontStyle: "italic",
        fontWeight: 300, letterSpacing: 1, margin: 0, textAlign: "center",
        maxWidth: 700, padding: "0 40px", lineHeight: 1.4,
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
      }}>
        {headline}
      </p>
    </AbsoluteFill>
  );
};

// ─── ARTICLE REVEAL ──────────────────────────────────────
const ArticleReveal: React.FC<{ articleSrc: string; headline: string }> = ({ articleSrc, headline }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Article zooms in from small
  const revealScale = spring({
    frame, fps,
    config: { damping: 15, stiffness: 60, mass: 0.8 },
  });

  const scale = interpolate(revealScale, [0, 1], [1.3, 1.05]);
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity }}>
      <ArticleBackground src={articleSrc} zoomStart={scale} />
      <BreakingBanner text={headline} />
    </AbsoluteFill>
  );
};

// ─── MAIN CONTENT (ARTICLE + SPEAKER PIP) ────────────────
const MainContent: React.FC<{
  articleSrc: string;
  videoSrc: string;
  headline: string;
  speakerName: string;
  speakerTitle: string;
}> = ({ articleSrc, videoSrc, headline, speakerName, speakerTitle }) => {
  return (
    <AbsoluteFill>
      <ArticleBackground src={articleSrc} />
      <BreakingBanner text={headline} />
      <PBSWatermark />
      <SpeakerFrame
        videoSrc={videoSrc}
        name={speakerName}
        title={speakerTitle}
      />
    </AbsoluteFill>
  );
};

// ─── OUTRO / CTA ─────────────────────────────────────────
const Outro: React.FC<{ tagline: string }> = ({ tagline }) => {
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
        color: ACCENT_BLUE, fontSize: 38, fontFamily: kronaOne, fontWeight: 400,
        textAlign: "center", textTransform: "uppercase", margin: 0, lineHeight: 1.3,
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
        maxWidth: 800, padding: "0 50px",
      }}>
        Get the full analysis
      </h1>

      <div style={{ width: dividerWidth, height: 3, backgroundColor: ACCENT_BLUE, margin: "25px 0" }} />

      <p style={{
        color: "#FFFFFF", fontSize: 26, fontFamily: roboto, fontWeight: 400,
        textAlign: "center", margin: 0, opacity: subOpacity,
        transform: `translateY(${subY}px)`, maxWidth: 700, lineHeight: 1.5, padding: "0 50px",
      }}>
        {tagline}
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
export const BreakingNewsComposition: React.FC<Partial<BreakingNewsProps>> = (props) => {
  const p = { ...DEFAULT_PROPS, ...props };
  const articleSrc = staticFile(p.articleScreenshot);
  const videoSrc = staticFile(p.speakerVideo);

  return (
    <AbsoluteFill style={{ backgroundColor: PRIMARY_BLUE }}>
      <Sequence durationInFrames={INTRO_FRAMES}>
        <Intro headline={p.headline} />
      </Sequence>
      <Sequence from={INTRO_FRAMES} durationInFrames={ARTICLE_REVEAL_FRAMES}>
        <ArticleReveal articleSrc={articleSrc} headline={p.headline} />
      </Sequence>
      <Sequence from={INTRO_FRAMES + ARTICLE_REVEAL_FRAMES} durationInFrames={SPEAKER_TOTAL}>
        <MainContent
          articleSrc={articleSrc}
          videoSrc={videoSrc}
          headline={p.headline}
          speakerName={p.speakerName || "Ginny Crisp, PharmD"}
          speakerTitle={p.speakerTitle || "CEO, Prescription Benefit Solutions"}
        />
      </Sequence>
      <Sequence from={INTRO_FRAMES + ARTICLE_REVEAL_FRAMES + SPEAKER_TOTAL} durationInFrames={OUTRO_FRAMES}>
        <Outro tagline={p.tagline || "Expert analysis from PBS"} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const BREAKING_NEWS_TOTAL_FRAMES = TOTAL_FRAMES;
