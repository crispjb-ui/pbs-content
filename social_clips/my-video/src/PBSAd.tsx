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

// Fonts
const kronaOneFace = new FontFace("Krona One", `url('${staticFile("fonts/KronaOne-Regular.ttf")}')`);
const robotoFace = new FontFace("Roboto", `url('${staticFile("fonts/Roboto.ttf")}')`);
kronaOneFace.load().then((f) => document.fonts.add(f));
robotoFace.load().then((f) => document.fonts.add(f));
const kronaOne = "Krona One, sans-serif";
const roboto = "Roboto, sans-serif";

const LOGO_WHITE = staticFile("White on Transparent (2).png");
const LOGO_DIAMOND = staticFile("Original on Transparent_diamond (2).png");

// Colors
const PRIMARY_BLUE = "#015880";
const ACCENT_BLUE = "#A7E0FA";
const DARK_BG = "#061924";
const SOFT_WHITE = "#ECF0F1";
const DIM_TEXT = "#7F8C8D";
const GOLD = "#F39C12";

// Timing
const HOOK = 90;           // 3s
const PROBLEM = 150;       // 5s
const AUTHORITY = 120;     // 4s
const SERVICES = 210;      // 7s
const DIFFERENTIATOR = 135; // 4.5s
const TAGLINE = 120;       // 4s
const CTA = 105;           // 3.5s
const TOTAL_FRAMES = HOOK + PROBLEM + AUTHORITY + SERVICES + DIFFERENTIATOR + TAGLINE + CTA;

// ─── REVEAL TEXT ─────────────────────────────────────────
const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style = {} }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = Math.max(0, frame - delay);
  const opacity = interpolate(f, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(
    spring({ frame: f, fps, config: { damping: 18, stiffness: 80 } }),
    [0, 1], [20, 0]
  );
  return <div style={{ opacity, transform: `translateY(${y}px)`, ...style }}>{children}</div>;
};

// ─── SCENE WRAPPER ───────────────────────────────────────
const Scene: React.FC<{
  children: React.ReactNode;
  duration: number;
  fadeIn?: number;
  fadeOut?: number;
}> = ({ children, duration, fadeIn = 8, fadeOut = 12 }) => {
  const frame = useCurrentFrame();
  const fi = interpolate(frame, [0, fadeIn], [0, 1], { extrapolateRight: "clamp" });
  const fo = interpolate(frame, [duration - fadeOut, duration], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ backgroundColor: DARK_BG, opacity: Math.min(fi, fo) }}>
      {children}
    </AbsoluteFill>
  );
};

// ─── 1. HOOK ─────────────────────────────────────────────
const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Scale = spring({
    frame, fps,
    config: { damping: 10, stiffness: 180, mass: 0.5 },
  });

  return (
    <Scene duration={HOOK}>
      {/* Subtle flash */}
      <div style={{
        position: "absolute", inset: 0, backgroundColor: ACCENT_BLUE,
        opacity: interpolate(frame, [0, 6], [0.25, 0], { extrapolateRight: "clamp" }),
      }} />

      {/* Ambient glow */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${PRIMARY_BLUE}40 0%, transparent 70%)`,
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
        <h1 style={{
          fontFamily: kronaOne, fontSize: 36, color: SOFT_WHITE,
          textAlign: "center", textTransform: "uppercase", margin: 0,
          lineHeight: 1.3, transform: `scale(${line1Scale})`,
        }}>
          YOUR PBM ALREADY
          <br />
          KNOWS THESE NUMBERS.
        </h1>

        <Reveal delay={18}>
          <div style={{
            width: 100, height: 3, backgroundColor: ACCENT_BLUE, margin: "22px auto",
          }} />
        </Reveal>

        <Reveal delay={25}>
          <p style={{
            fontFamily: roboto, fontSize: 30, color: ACCENT_BLUE,
            textAlign: "center", margin: 0, fontWeight: 500,
          }}>
            You probably don't.
          </p>
        </Reveal>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 2. THE PROBLEM ──────────────────────────────────────
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Two columns that reveal: PBM sees vs You see
  return (
    <Scene duration={PROBLEM}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 50 }}>
        <div style={{
          display: "flex", gap: 40, width: "100%", maxWidth: 900,
        }}>
          {/* PBM Column */}
          <div style={{ flex: 1 }}>
            <Reveal delay={5}>
              <p style={{
                fontFamily: kronaOne, fontSize: 20, color: ACCENT_BLUE,
                textTransform: "uppercase", margin: "0 0 18px", letterSpacing: 2,
              }}>
                What your PBM sees
              </p>
            </Reveal>

            {["Acquisition costs", "Rebate flows", "Margin structures", "Utilization patterns", "Pricing spreads"].map((item, i) => (
              <Reveal key={i} delay={15 + i * 10}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 10, marginBottom: 12,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%", backgroundColor: ACCENT_BLUE,
                  }} />
                  <p style={{
                    fontFamily: roboto, fontSize: 20, color: SOFT_WHITE,
                    margin: 0, fontWeight: 400,
                  }}>
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Divider */}
          <Reveal delay={10}>
            <div style={{
              width: 1, backgroundColor: `${SOFT_WHITE}20`,
              alignSelf: "stretch",
            }} />
          </Reveal>

          {/* You Column */}
          <div style={{ flex: 1 }}>
            <Reveal delay={60}>
              <p style={{
                fontFamily: kronaOne, fontSize: 20, color: DIM_TEXT,
                textTransform: "uppercase", margin: "0 0 18px", letterSpacing: 2,
              }}>
                What you see
              </p>
            </Reveal>

            <Reveal delay={70}>
              <div style={{
                backgroundColor: `${DIM_TEXT}10`, border: `1px solid ${DIM_TEXT}30`,
                borderRadius: 12, padding: "25px 20px", textAlign: "center",
              }}>
                <p style={{
                  fontFamily: roboto, fontSize: 22, color: DIM_TEXT,
                  margin: 0, lineHeight: 1.6,
                }}>
                  Summary reports.
                  <br />
                  Aggregated data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p style={{
                fontFamily: roboto, fontSize: 18, color: GOLD,
                margin: "18px 0 0", fontStyle: "italic",
              }}>
                That gap is where the money lives.
              </p>
            </Reveal>
          </div>
        </div>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 3. AUTHORITY ────────────────────────────────────────
const AuthorityScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animated counter
  const counterProgress = interpolate(frame, [20, 55], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const count = Math.round(100 * counterProgress);

  const countScale = spring({
    frame: Math.max(0, frame - 15), fps,
    config: { damping: 10, stiffness: 100 },
  });

  return (
    <Scene duration={AUTHORITY}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
        {/* Glow behind number */}
        <div style={{
          position: "absolute", width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT_BLUE}15 0%, transparent 60%)`,
        }} />

        <Reveal delay={5}>
          <p style={{
            fontFamily: roboto, fontSize: 18, color: DIM_TEXT,
            textTransform: "uppercase", letterSpacing: 3, margin: "0 0 10px",
            textAlign: "center",
          }}>
            We review approximately
          </p>
        </Reveal>

        <p style={{
          fontFamily: kronaOne, fontSize: 120, color: ACCENT_BLUE, margin: 0,
          transform: `scale(${countScale})`, textAlign: "center", lineHeight: 1,
        }}>
          {count}
        </p>

        <Reveal delay={10}>
          <p style={{
            fontFamily: kronaOne, fontSize: 24, color: SOFT_WHITE,
            textTransform: "uppercase", margin: "5px 0 0", textAlign: "center",
            letterSpacing: 2,
          }}>
            PBM contracts every year
          </p>
        </Reveal>

        <Reveal delay={50}>
          <p style={{
            fontFamily: roboto, fontSize: 20, color: DIM_TEXT,
            margin: "20px 0 0", textAlign: "center", fontStyle: "italic",
          }}>
            We know what to look for.
          </p>
        </Reveal>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 4. SERVICES ─────────────────────────────────────────
const ServicesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const services = [
    { icon: "🔍", title: "PBM Contract Audits", desc: "Independent pricing and terms review" },
    { icon: "📝", title: "Contract Language", desc: "Protective clauses for renewals" },
    { icon: "📊", title: "Claims Analysis", desc: "Identify pricing gaps and overpayments" },
    { icon: "💡", title: "Cost Containment", desc: "Specialty, biosimilar, and site-of-care strategies" },
  ];

  return (
    <Scene duration={SERVICES}>
      <AbsoluteFill style={{ justifyContent: "center", padding: "60px 50px" }}>
        <Reveal delay={0}>
          <p style={{
            fontFamily: kronaOne, fontSize: 26, color: ACCENT_BLUE,
            textTransform: "uppercase", textAlign: "center", margin: "0 0 35px",
            letterSpacing: 1,
          }}>
            WE CLOSE THE VISIBILITY GAP
          </p>
        </Reveal>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 20, maxWidth: 900, margin: "0 auto",
        }}>
          {services.map((svc, i) => (
            <Reveal key={i} delay={20 + i * 25}>
              <div style={{
                backgroundColor: `${PRIMARY_BLUE}30`,
                border: `1px solid ${PRIMARY_BLUE}60`,
                borderRadius: 14, padding: "22px 20px",
                display: "flex", gap: 14, alignItems: "flex-start",
              }}>
                <span style={{ fontSize: 32, flexShrink: 0 }}>{svc.icon}</span>
                <div>
                  <p style={{
                    fontFamily: roboto, fontSize: 18, color: SOFT_WHITE,
                    fontWeight: 600, margin: "0 0 4px",
                  }}>
                    {svc.title}
                  </p>
                  <p style={{
                    fontFamily: roboto, fontSize: 15, color: DIM_TEXT,
                    margin: 0, lineHeight: 1.4,
                  }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 5. DIFFERENTIATOR ───────────────────────────────────
const DifferentiatorScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Scene duration={DIFFERENTIATOR}>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 70 }}>
        <Reveal delay={0}>
          <p style={{
            fontFamily: roboto, fontSize: 18, color: DIM_TEXT,
            textTransform: "uppercase", letterSpacing: 3, margin: "0 0 20px",
            textAlign: "center",
          }}>
            We are not a broker. Not a PBM.
          </p>
        </Reveal>

        <Reveal delay={15}>
          <h2 style={{
            fontFamily: kronaOne, fontSize: 34, color: SOFT_WHITE,
            textTransform: "uppercase", textAlign: "center", margin: 0,
            lineHeight: 1.3,
          }}>
            WE WORK EXCLUSIVELY
            <br />
            <span style={{ color: ACCENT_BLUE }}>FOR EMPLOYERS</span>
          </h2>
        </Reveal>

        <Reveal delay={35}>
          <div style={{
            width: 80, height: 3, backgroundColor: GOLD, margin: "25px auto",
          }} />
        </Reveal>

        <Reveal delay={45}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
            textAlign: "center", margin: 0, lineHeight: 1.6, fontWeight: 400,
          }}>
            Independent pharmacy benefits consulting.
            <br />
            Clinical rigor. Financial clarity.
            <br />
            No conflicts of interest.
          </p>
        </Reveal>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 6. TAGLINE ──────────────────────────────────────────
const TaglineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    frame: Math.max(0, frame - 5), fps,
    config: { damping: 12, stiffness: 80 },
  });
  const logoOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });

  const taglineOpacity = interpolate(frame, [25, 40], [0, 1], { extrapolateRight: "clamp" });
  const taglineY = interpolate(
    spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 15 } }),
    [0, 1], [15, 0]
  );

  const subtitleOpacity = interpolate(frame, [45, 58], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Scene duration={TAGLINE} fadeOut={15}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${PRIMARY_BLUE}50 0%, transparent 60%)`,
        top: "50%", left: "50%", transform: "translate(-50%, -55%)",
      }} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <Img src={LOGO_WHITE} style={{
          width: 480, opacity: logoOpacity, transform: `scale(${logoScale})`,
        }} />

        <div style={{
          marginTop: 30, opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}>
          <div style={{
            width: 60, height: 2, backgroundColor: ACCENT_BLUE,
            margin: "0 auto 18px",
          }} />
          <p style={{
            fontFamily: kronaOne, fontSize: 22, color: ACCENT_BLUE,
            textTransform: "uppercase", textAlign: "center", margin: 0,
            letterSpacing: 3,
          }}>
            Transparency Driven Solutions
          </p>
        </div>

        <p style={{
          fontFamily: roboto, fontSize: 18, color: DIM_TEXT,
          textAlign: "center", margin: "20px 0 0", opacity: subtitleOpacity,
        }}>
          Charleston, SC
        </p>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 7. CTA ──────────────────────────────────────────────
const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });

  const headlineOpacity = interpolate(frame, [5, 18], [0, 1], { extrapolateRight: "clamp" });
  const headlineY = interpolate(
    spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 15 } }),
    [0, 1], [20, 0]
  );
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 12 } }),
    [0, 1], [0, 80]
  );
  const emailOpacity = interpolate(frame, [20, 33], [0, 1], { extrapolateRight: "clamp" });
  const webOpacity = interpolate(frame, [28, 40], [0, 1], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [35, 48], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      backgroundColor: PRIMARY_BLUE, justifyContent: "center", alignItems: "center",
      opacity: bgOpacity,
    }}>
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_BLUE}20 0%, transparent 70%)`,
        top: "30%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <h1 style={{
        color: ACCENT_BLUE, fontSize: 34, fontFamily: kronaOne, fontWeight: 400,
        textAlign: "center", textTransform: "uppercase", margin: 0, lineHeight: 1.3,
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
        maxWidth: 800, padding: "0 50px",
      }}>
        Learn what your PBM
        <br />
        isn't showing you.
      </h1>

      <div style={{ width: dividerWidth, height: 3, backgroundColor: ACCENT_BLUE, margin: "25px 0" }} />

      <p style={{
        color: "#FFFFFF", fontSize: 28, fontFamily: roboto, fontWeight: 400,
        margin: 0, opacity: webOpacity,
      }}>
        www.rxbs.org
      </p>

      <p style={{
        color: "#FFFFFF", fontSize: 32, fontFamily: roboto, fontWeight: 500,
        margin: "12px 0 0", opacity: emailOpacity, letterSpacing: 1,
      }}>
        team@rxbs.org
      </p>

      <Img src={LOGO_WHITE} style={{
        position: "absolute", bottom: 40, width: 260, opacity: logoOpacity,
      }} />
    </AbsoluteFill>
  );
};

// ─── MAIN COMPOSITION ────────────────────────────────────
export const PBSAdComposition = () => {
  let t = 0;
  const seq = (duration: number, el: React.ReactNode) => {
    const s = <Sequence key={t} from={t} durationInFrames={duration}>{el}</Sequence>;
    t += duration;
    return s;
  };

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_BG }}>
      {seq(HOOK, <HookScene />)}
      {seq(PROBLEM, <ProblemScene />)}
      {seq(AUTHORITY, <AuthorityScene />)}
      {seq(SERVICES, <ServicesScene />)}
      {seq(DIFFERENTIATOR, <DifferentiatorScene />)}
      {seq(TAGLINE, <TaglineScene />)}
      {seq(CTA, <CTAScene />)}
    </AbsoluteFill>
  );
};

export const PBS_AD_TOTAL_FRAMES = TOTAL_FRAMES;
