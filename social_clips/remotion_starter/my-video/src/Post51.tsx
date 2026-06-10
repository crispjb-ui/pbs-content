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

// Colors
const PRIMARY_BLUE = "#015880";
const ACCENT_BLUE = "#A7E0FA";
const DARK_BG = "#0A1929";
const GREEN_MONEY = "#2ECC71";
const RED_ALERT = "#E74C3C";
const GOLD = "#F39C12";
const SOFT_WHITE = "#ECF0F1";
const DIM_TEXT = "#7F8C8D";

// Timing (30fps)
const HOOK = 75;          // 2.5s
const PATIENT = 135;      // 4.5s - patient needs medication
const DOCTOR = 120;       // 4s - doctor at 340B hospital prescribes
const PHARMACY = 135;     // 4.5s - filled at contract pharmacy
const CLAIM = 135;        // 4.5s - claim hits the plan
const SPREAD = 135;       // 4.5s - the spread revealed
const INVISIBLE = 120;    // 4s - invisible in your data
const QUESTION = 105;     // 3.5s - the key question
const OUTRO = 90;         // 3s
const TOTAL_FRAMES = HOOK + PATIENT + DOCTOR + PHARMACY + CLAIM + SPREAD + INVISIBLE + QUESTION + OUTRO;

// ─── CINEMATIC TEXT REVEAL ───────────────────────────────
const RevealText: React.FC<{
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
    [0, 1], [25, 0]
  );

  return (
    <div style={{ opacity, transform: `translateY(${y}px)`, ...style }}>
      {children}
    </div>
  );
};

// ─── SCENE WRAPPER (handles fade transitions) ────────────
const Scene: React.FC<{
  children: React.ReactNode;
  bg?: string;
  fadeOut?: number; // frames before end to start fading
  duration: number;
}> = ({ children, bg = DARK_BG, fadeOut = 15, duration }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const fadeOutOp = interpolate(frame, [duration - fadeOut, duration], [1, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{
      backgroundColor: bg,
      opacity: Math.min(fadeIn, fadeOutOp),
    }}>
      {children}
    </AbsoluteFill>
  );
};

// ─── 1. HOOK ─────────────────────────────────────────────
const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slamScale = spring({
    frame, fps,
    config: { damping: 8, stiffness: 220, mass: 0.4 },
  });

  const lineW = interpolate(
    spring({ frame: Math.max(0, frame - 6), fps, config: { damping: 12 } }),
    [0, 1], [0, 200]
  );

  const sub1 = interpolate(frame, [15, 25], [0, 1], { extrapolateRight: "clamp" });
  const sub2 = interpolate(frame, [25, 35], [0, 1], { extrapolateRight: "clamp" });

  return (
    <Scene duration={HOOK} bg={DARK_BG}>
      {/* Flash */}
      <div style={{
        position: "absolute", inset: 0, backgroundColor: ACCENT_BLUE,
        opacity: interpolate(frame, [0, 5], [0.35, 0], { extrapolateRight: "clamp" }),
      }} />

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <h1 style={{
          fontFamily: kronaOne, fontSize: 80, color: "#FFF",
          textTransform: "uppercase", textAlign: "center", margin: 0,
          transform: `scale(${slamScale})`, lineHeight: 1,
        }}>
          25-50%
        </h1>
        <div style={{ width: lineW, height: 3, backgroundColor: RED_ALERT, margin: "12px 0 16px" }} />
        <p style={{
          fontFamily: roboto, fontSize: 26, color: SOFT_WHITE, textAlign: "center",
          margin: 0, opacity: sub1, lineHeight: 1.5,
        }}>
          Your provider buys the drug at a massive discount.
        </p>
        <p style={{
          fontFamily: roboto, fontSize: 26, color: RED_ALERT, textAlign: "center",
          margin: "6px 0 0", opacity: sub2, fontWeight: 600,
        }}>
          Your plan still pays full price.
        </p>
      </AbsoluteFill>

      <Img src={LOGO_WHITE} style={{
        position: "absolute", bottom: 25, right: 25, width: 140, opacity: 0.35,
      }} />
    </Scene>
  );
};

// ─── 2. PATIENT ──────────────────────────────────────────
const PatientScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconScale = spring({
    frame: Math.max(0, frame - 5), fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <Scene duration={PATIENT} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        {/* Big patient icon */}
        <div style={{
          fontSize: 120, transform: `scale(${iconScale})`, marginBottom: 25,
        }}>
          🧑‍💼
        </div>

        <RevealText delay={10}>
          <p style={{
            fontFamily: kronaOne, fontSize: 34, color: ACCENT_BLUE,
            textTransform: "uppercase", textAlign: "center", margin: 0,
            letterSpacing: 1,
          }}>
            Meet your employee
          </p>
        </RevealText>

        <RevealText delay={25}>
          <p style={{
            fontFamily: roboto, fontSize: 24, color: SOFT_WHITE,
            textAlign: "center", margin: "16px 0 0", lineHeight: 1.6,
          }}>
            They need a specialty medication.
            <br />
            A biologic. $2,000/month.
          </p>
        </RevealText>

        <RevealText delay={45}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: DIM_TEXT,
            textAlign: "center", margin: "20px 0 0", fontStyle: "italic",
          }}>
            Their doctor practices at a 340B-eligible hospital.
          </p>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 3. DOCTOR / HOSPITAL ────────────────────────────────
const DoctorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconScale = spring({
    frame: Math.max(0, frame - 5), fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Price animation
  const priceReveal = interpolate(frame, [45, 60], [0, 1], { extrapolateRight: "clamp" });
  const priceScale = spring({
    frame: Math.max(0, frame - 45), fps,
    config: { damping: 8, stiffness: 180 },
  });

  return (
    <Scene duration={DOCTOR} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        <div style={{
          fontSize: 110, transform: `scale(${iconScale})`, marginBottom: 20,
        }}>
          🏥
        </div>

        <RevealText delay={8}>
          <p style={{
            fontFamily: kronaOne, fontSize: 30, color: GOLD,
            textTransform: "uppercase", textAlign: "center", margin: 0,
          }}>
            The hospital is a 340B covered entity
          </p>
        </RevealText>

        <RevealText delay={22}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
            textAlign: "center", margin: "16px 0 0", lineHeight: 1.6,
          }}>
            By law, drug manufacturers must sell medications
            <br />
            to this hospital at a steep discount.
          </p>
        </RevealText>

        {/* Price comparison */}
        <div style={{
          display: "flex", gap: 40, marginTop: 30,
          opacity: priceReveal, transform: `scale(${priceScale})`,
        }}>
          <div style={{
            backgroundColor: `${GREEN_MONEY}15`, border: `2px solid ${GREEN_MONEY}`,
            borderRadius: 12, padding: "14px 28px", textAlign: "center",
          }}>
            <p style={{ fontFamily: roboto, fontSize: 16, color: GREEN_MONEY, margin: 0, fontWeight: 600 }}>
              Hospital pays
            </p>
            <p style={{ fontFamily: kronaOne, fontSize: 32, color: GREEN_MONEY, margin: "4px 0 0" }}>
              $1,000
            </p>
          </div>
          <div style={{
            display: "flex", alignItems: "center",
            color: DIM_TEXT, fontSize: 18, fontFamily: roboto,
          }}>
            vs.
          </div>
          <div style={{
            backgroundColor: `${DIM_TEXT}15`, border: `2px solid ${DIM_TEXT}40`,
            borderRadius: 12, padding: "14px 28px", textAlign: "center",
          }}>
            <p style={{ fontFamily: roboto, fontSize: 16, color: DIM_TEXT, margin: 0, fontWeight: 600 }}>
              Wholesale price
            </p>
            <p style={{ fontFamily: kronaOne, fontSize: 32, color: DIM_TEXT, margin: "4px 0 0",
              textDecoration: "line-through",
            }}>
              $2,000
            </p>
          </div>
        </div>

        <RevealText delay={65}>
          <p style={{
            fontFamily: roboto, fontSize: 15, color: DIM_TEXT,
            textAlign: "center", margin: "20px 0 0", fontStyle: "italic",
          }}>
            Illustrative example for educational purposes. Actual amounts vary by plan.
          </p>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 4. CONTRACT PHARMACY ────────────────────────────────
const PharmacyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconScale = spring({
    frame: Math.max(0, frame - 5), fps,
    config: { damping: 10, stiffness: 120 },
  });

  return (
    <Scene duration={PHARMACY} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        <div style={{
          fontSize: 100, transform: `scale(${iconScale})`, marginBottom: 20,
        }}>
          💊
        </div>

        <RevealText delay={8}>
          <p style={{
            fontFamily: kronaOne, fontSize: 28, color: ACCENT_BLUE,
            textTransform: "uppercase", textAlign: "center", margin: 0,
          }}>
            The prescription goes to a
            <br />
            contract pharmacy
          </p>
        </RevealText>

        <RevealText delay={25}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
            textAlign: "center", margin: "18px 0 0", lineHeight: 1.6,
          }}>
            Could be a national retail chain.
            <br />
            Could be a specialty pharmacy.
          </p>
        </RevealText>

        <RevealText delay={45}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
            textAlign: "center", margin: "12px 0 0", lineHeight: 1.6,
          }}>
            Your employee picks up the medication.
            <br />
            Looks like any other prescription.
          </p>
        </RevealText>

        <RevealText delay={65}>
          <p style={{
            fontFamily: roboto, fontSize: 20, color: GOLD,
            textAlign: "center", margin: "18px 0 0", fontWeight: 500,
          }}>
            Nothing flags it as a 340B transaction.
          </p>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 5. THE CLAIM ────────────────────────────────────────
const ClaimScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconScale = spring({
    frame: Math.max(0, frame - 5), fps,
    config: { damping: 10, stiffness: 120 },
  });

  // Price slam
  const priceDelay = 40;
  const priceScale = spring({
    frame: Math.max(0, frame - priceDelay), fps,
    config: { damping: 8, stiffness: 200, mass: 0.5 },
  });
  const priceOpacity = interpolate(frame, [priceDelay, priceDelay + 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Scene duration={CLAIM} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        <div style={{
          fontSize: 100, transform: `scale(${iconScale})`, marginBottom: 20,
        }}>
          📋
        </div>

        <RevealText delay={8}>
          <p style={{
            fontFamily: kronaOne, fontSize: 28, color: RED_ALERT,
            textTransform: "uppercase", textAlign: "center", margin: 0,
          }}>
            The claim hits your plan
          </p>
        </RevealText>

        <RevealText delay={22}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
            textAlign: "center", margin: "16px 0 0", lineHeight: 1.6,
          }}>
            Your PBM processes it at the standard rate.
            <br />
            No 340B discount is passed through.
          </p>
        </RevealText>

        {/* Price tag slam */}
        <div style={{
          marginTop: 30, opacity: priceOpacity,
          transform: `scale(${priceScale})`,
          backgroundColor: `${RED_ALERT}15`, border: `3px solid ${RED_ALERT}`,
          borderRadius: 14, padding: "18px 40px", textAlign: "center",
        }}>
          <p style={{ fontFamily: roboto, fontSize: 18, color: RED_ALERT, margin: 0, fontWeight: 600 }}>
            Your plan reimburses
          </p>
          <p style={{ fontFamily: kronaOne, fontSize: 48, color: "#FFF", margin: "6px 0 0" }}>
            $1,800
          </p>
          <p style={{ fontFamily: roboto, fontSize: 16, color: DIM_TEXT, margin: "4px 0 0" }}>
            The drug was acquired for $1,000
          </p>
        </div>

        <RevealText delay={70}>
          <p style={{
            fontFamily: roboto, fontSize: 15, color: DIM_TEXT,
            textAlign: "center", margin: "18px 0 0", fontStyle: "italic",
          }}>
            Illustrative example for educational purposes. Actual amounts vary by plan.
          </p>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 6. THE SPREAD ───────────────────────────────────────
const SpreadScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animated counter for the spread amount
  const counterProgress = interpolate(frame, [15, 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const spreadAmount = Math.round(800 * counterProgress);

  const boxScale = spring({
    frame: Math.max(0, frame - 10), fps,
    config: { damping: 8, stiffness: 150 },
  });

  // Pulsing glow
  const pulse = 0.5 + 0.3 * Math.sin(frame * 0.1);

  return (
    <Scene duration={SPREAD} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        <RevealText delay={0}>
          <p style={{
            fontFamily: kronaOne, fontSize: 32, color: GOLD,
            textTransform: "uppercase", textAlign: "center", margin: "0 0 30px",
          }}>
            THE SPREAD
          </p>
        </RevealText>

        {/* Big spread amount */}
        <div style={{
          transform: `scale(${boxScale})`,
          backgroundColor: `${GOLD}10`,
          border: `3px solid ${GOLD}`,
          borderRadius: 20, padding: "30px 60px", textAlign: "center",
          boxShadow: `0 0 ${40 * pulse}px ${GOLD}30`,
        }}>
          <p style={{
            fontFamily: kronaOne, fontSize: 72, color: "#FFF", margin: 0,
          }}>
            ${spreadAmount}
          </p>
          <p style={{
            fontFamily: roboto, fontSize: 20, color: GOLD, margin: "8px 0 0",
            fontWeight: 500,
          }}>
            per fill = provider revenue
          </p>
        </div>

        <RevealText delay={50}>
          <p style={{
            fontFamily: roboto, fontSize: 24, color: SOFT_WHITE,
            textAlign: "center", margin: "28px 0 0", lineHeight: 1.6,
          }}>
            The hospital acquired for <span style={{ color: GREEN_MONEY, fontWeight: 600 }}>$1,000</span>.
            <br />
            Your plan reimbursed <span style={{ color: RED_ALERT, fontWeight: 600 }}>$1,800</span>.
          </p>
        </RevealText>

        <RevealText delay={70}>
          <p style={{
            fontFamily: roboto, fontSize: 22, color: DIM_TEXT,
            textAlign: "center", margin: "16px 0 0", fontStyle: "italic",
          }}>
            Your plan funded the gap. You never saw it.
          </p>
        </RevealText>

        <p style={{
          position: "absolute", bottom: 30,
          fontFamily: roboto, fontSize: 14, color: DIM_TEXT,
          textAlign: "center", fontStyle: "italic",
        }}>
          Illustrative example for educational purposes. Actual amounts vary by plan.
        </p>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 7. INVISIBLE ────────────────────────────────────────
const InvisibleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Glitch/scan effect
  const scanY = (frame * 8) % 1080;

  return (
    <Scene duration={INVISIBLE} bg={DARK_BG}>
      {/* Scan line */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        top: scanY, height: 2,
        background: `linear-gradient(90deg, transparent, ${ACCENT_BLUE}30, transparent)`,
        zIndex: 5,
      }} />

      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 60,
      }}>
        <RevealText delay={0}>
          <p style={{
            fontFamily: kronaOne, fontSize: 38, color: "#FFF",
            textTransform: "uppercase", textAlign: "center", margin: 0,
            lineHeight: 1.3,
          }}>
            NONE OF THIS
            <br />
            <span style={{ color: RED_ALERT }}>IS VISIBLE</span>
            <br />
            IN YOUR CLAIMS DATA
          </p>
        </RevealText>

        <RevealText delay={25} style={{ marginTop: 30 }}>
          <div style={{
            backgroundColor: `${RED_ALERT}10`, border: `1px solid ${RED_ALERT}40`,
            borderRadius: 12, padding: "20px 35px",
          }}>
            <p style={{
              fontFamily: roboto, fontSize: 22, color: SOFT_WHITE,
              textAlign: "center", margin: 0, lineHeight: 1.7,
            }}>
              Most PBMs <span style={{ color: RED_ALERT, fontWeight: 600 }}>don't identify</span> 340B claims.
              <br />
              The transaction looks like any other fill.
              <br />
              The discount stays hidden.
            </p>
          </div>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 8. THE QUESTION ─────────────────────────────────────
const QuestionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <Scene duration={QUESTION} bg={DARK_BG}>
      <AbsoluteFill style={{
        justifyContent: "center", alignItems: "center", padding: 70,
      }}>
        <RevealText delay={0}>
          <p style={{
            fontFamily: roboto, fontSize: 24, color: DIM_TEXT,
            textAlign: "center", margin: "0 0 20px", textTransform: "uppercase",
            letterSpacing: 3,
          }}>
            The real question
          </p>
        </RevealText>

        <RevealText delay={12}>
          <p style={{
            fontFamily: kronaOne, fontSize: 34, color: ACCENT_BLUE,
            textTransform: "uppercase", textAlign: "center", margin: 0,
            lineHeight: 1.3,
          }}>
            IS 340B GOOD OR BAD?
          </p>
        </RevealText>

        <RevealText delay={30}>
          <div style={{
            width: 80, height: 3, backgroundColor: GOLD, margin: "25px auto",
          }} />
        </RevealText>

        <RevealText delay={38}>
          <p style={{
            fontFamily: roboto, fontSize: 26, color: "#FFF",
            textAlign: "center", margin: 0, lineHeight: 1.6, fontWeight: 400,
          }}>
            That's not the question.
            <br />
            <br />
            The question is whether it's
            <br />
            <span style={{ color: GOLD, fontWeight: 600, fontSize: 30 }}>
              visible in your data
            </span>.
          </p>
        </RevealText>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── 9. OUTRO ────────────────────────────────────────────
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [5, 18], [0, 1], { extrapolateRight: "clamp" });
  const headlineY = interpolate(
    spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 15 } }),
    [0, 1], [20, 0]
  );
  const dividerWidth = interpolate(
    spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 12 } }),
    [0, 1], [0, 80]
  );
  const emailOpacity = interpolate(frame, [22, 35], [0, 1], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [30, 42], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      backgroundColor: PRIMARY_BLUE, justifyContent: "center", alignItems: "center",
    }}>
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${ACCENT_BLUE}20 0%, transparent 70%)`,
        top: "30%", left: "50%", transform: "translate(-50%, -50%)",
      }} />

      <h1 style={{
        color: ACCENT_BLUE, fontSize: 36, fontFamily: kronaOne, fontWeight: 400,
        textAlign: "center", textTransform: "uppercase", margin: 0, lineHeight: 1.3,
        opacity: headlineOpacity, transform: `translateY(${headlineY}px)`,
        maxWidth: 800, padding: "0 50px",
      }}>
        Ask your PBM:
        <br />
        Do you identify 340B claims?
      </h1>

      <div style={{ width: dividerWidth, height: 3, backgroundColor: ACCENT_BLUE, margin: "25px 0" }} />

      <p style={{
        color: "#FFFFFF", fontSize: 32, fontFamily: roboto, fontWeight: 500,
        margin: 0, opacity: emailOpacity, letterSpacing: 1,
      }}>
        team@rxbs.org
      </p>

      <Img src={LOGO_WHITE} style={{
        position: "absolute", bottom: 40, width: 280, opacity: logoOpacity,
      }} />
    </AbsoluteFill>
  );
};

// ─── MAIN COMPOSITION ────────────────────────────────────
export const Post51Composition = () => {
  let t = 0;
  const seq = (duration: number, el: React.ReactNode) => {
    const s = <Sequence key={t} from={t} durationInFrames={duration}>{el}</Sequence>;
    t += duration;
    return s;
  };

  return (
    <AbsoluteFill style={{ backgroundColor: DARK_BG }}>
      {seq(HOOK, <HookScene />)}
      {seq(PATIENT, <PatientScene />)}
      {seq(DOCTOR, <DoctorScene />)}
      {seq(PHARMACY, <PharmacyScene />)}
      {seq(CLAIM, <ClaimScene />)}
      {seq(SPREAD, <SpreadScene />)}
      {seq(INVISIBLE, <InvisibleScene />)}
      {seq(QUESTION, <QuestionScene />)}
      {seq(OUTRO, <OutroScene />)}
    </AbsoluteFill>
  );
};

export const POST51_TOTAL_FRAMES = TOTAL_FRAMES;
