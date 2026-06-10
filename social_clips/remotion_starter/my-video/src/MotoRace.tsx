import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  staticFile,
  Img,
} from "remotion";

// Fonts
const kronaOneFace = new FontFace("Krona One", `url('${staticFile("fonts/KronaOne-Regular.ttf")}')`);
const robotoFace = new FontFace("Roboto", `url('${staticFile("fonts/Roboto.ttf")}')`);
kronaOneFace.load().then((f) => document.fonts.add(f));
robotoFace.load().then((f) => document.fonts.add(f));
const kronaOne = "Krona One, sans-serif";
const roboto = "Roboto, sans-serif";

// Timing
const COUNTDOWN = 90;    // 3s
const RACE = 450;        // 15s
const FINISH = 120;      // 4s
const CELEBRATION = 90;  // 3s
const TOTAL_FRAMES = COUNTDOWN + RACE + FINISH + CELEBRATION;

// Track: a winding path defined as points
// The track winds through curves - bird's eye view
const TRACK_POINTS: [number, number][] = [
  [200, 2800],   // Start line
  [200, 2500],
  [180, 2200],
  [220, 1900],
  [350, 1650],
  [550, 1500],
  [700, 1350],
  [750, 1100],
  [650, 850],
  [450, 700],
  [300, 550],
  [250, 350],
  [350, 180],
  [550, 100],
  [750, 130],
  [900, 280],
  [920, 480],
  [850, 650],
  [750, 800],
  [700, 1000],
  [800, 1200],
  [950, 1350],
  [1050, 1550],
  [1000, 1750],
  [880, 1900],
  [750, 2000],
  [650, 2150],
  [600, 2350],
  [620, 2550],
  [700, 2700],
  [850, 2800],   // Finish line
];

// Convert points to SVG path
function pointsToPath(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i][0] + pts[i + 1][0]) / 2;
    const yc = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q ${pts[i][0]} ${pts[i][1]} ${xc} ${yc}`;
  }
  const last = pts[pts.length - 1];
  d += ` L ${last[0]} ${last[1]}`;
  return d;
}

// Get point along path at t (0-1)
function getPointOnPath(pts: [number, number][], t: number): { x: number; y: number; angle: number } {
  const totalSegments = pts.length - 1;
  const rawIndex = t * totalSegments;
  const index = Math.min(Math.floor(rawIndex), totalSegments - 1);
  const localT = rawIndex - index;

  const p0 = pts[Math.max(0, index)];
  const p1 = pts[Math.min(pts.length - 1, index + 1)];

  const x = p0[0] + (p1[0] - p0[0]) * localT;
  const y = p0[1] + (p1[1] - p0[1]) * localT;

  // Angle for rotation
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // +90 because bike faces "up"

  return { x, y, angle };
}

// ─── MOTORCYCLE ──────────────────────────────────────────
const Motorcycle: React.FC<{
  x: number; y: number; angle: number;
  color: string; glowColor: string;
  isLeading?: boolean; trail?: boolean;
}> = ({ x, y, angle, color, glowColor, isLeading = false, trail = true }) => {
  const frame = useCurrentFrame();

  // Subtle lean wobble
  const wobble = Math.sin(frame * 0.4) * 2;

  return (
    <g transform={`translate(${x}, ${y}) rotate(${angle + wobble})`}>
      {/* Speed trail */}
      {trail && (
        <>
          <line x1="0" y1="8" x2="-2" y2="45" stroke={`${glowColor}40`} strokeWidth="3" strokeLinecap="round" />
          <line x1="3" y1="8" x2="5" y2="40" stroke={`${glowColor}30`} strokeWidth="2" strokeLinecap="round" />
          <line x1="-3" y1="8" x2="-5" y2="38" stroke={`${glowColor}25`} strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {/* Glow under bike */}
      <ellipse cx="0" cy="0" rx="12" ry="6" fill={`${glowColor}30`} filter="url(#bikeGlow)" />

      {/* Bike body */}
      <ellipse cx="0" cy="-2" rx="6" ry="14" fill={color} stroke={glowColor} strokeWidth="1.5" />

      {/* Windshield */}
      <ellipse cx="0" cy="-12" rx="4" ry="5" fill={`${color}CC`} stroke={glowColor} strokeWidth="1" />

      {/* Rider */}
      <circle cx="0" cy="-4" r="4" fill="#222" />
      <ellipse cx="0" cy="0" rx="5" ry="3" fill="#333" />

      {/* Headlight */}
      <circle cx="0" cy="-16" r="2" fill={isLeading ? "#FFF" : glowColor}>
        {isLeading && (
          <animate attributeName="opacity" values="0.8;1;0.8" dur="0.3s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Wheels */}
      <circle cx="0" cy="-14" r="3" fill="none" stroke="#444" strokeWidth="1.5" />
      <circle cx="0" cy="10" r="3" fill="none" stroke="#444" strokeWidth="1.5" />
    </g>
  );
};

// ─── CHECKERED FLAG ──────────────────────────────────────
const CheckeredFlag: React.FC<{ x: number; y: number; wave: number }> = ({ x, y, wave }) => {
  const size = 8;
  const cols = 5;
  const rows = 7;

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Flag pole */}
      <line x1="0" y1="0" x2="0" y2={-rows * size - 20} stroke="#888" strokeWidth="3" />

      {/* Flag */}
      <g transform={`translate(2, ${-rows * size - 18})`}>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const isBlack = (r + c) % 2 === 0;
            // Wave distortion
            const waveOffset = Math.sin((c * 0.5 + wave) * 1.2) * 3;
            return (
              <rect
                key={`${r}-${c}`}
                x={c * size}
                y={r * size + waveOffset}
                width={size}
                height={size}
                fill={isBlack ? "#111" : "#FFF"}
                stroke="#33333320"
                strokeWidth="0.3"
              />
            );
          })
        )}
      </g>

      {/* Gold ball on top */}
      <circle cx="0" cy={-rows * size - 22} r="4" fill="#F1C40F" />
    </g>
  );
};

// ─── TREES / SCENERY ─────────────────────────────────────
const Tree: React.FC<{ x: number; y: number; size?: number }> = ({ x, y, size = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${size})`}>
    <circle cx="0" cy="-8" r="14" fill="#1a5c2a" opacity="0.7" />
    <circle cx="-5" cy="-12" r="10" fill="#1e6b30" opacity="0.6" />
    <circle cx="5" cy="-5" r="11" fill="#186328" opacity="0.5" />
  </g>
);

// ─── COUNTDOWN ───────────────────────────────────────────
const CountdownScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 3, 2, 1, GO!
  const phase = frame < 25 ? 3 : frame < 50 ? 2 : frame < 70 ? 1 : 0;
  const phaseFrame = frame < 25 ? frame : frame < 50 ? frame - 25 : frame < 70 ? frame - 50 : frame - 70;

  const scale = spring({
    frame: phaseFrame, fps,
    config: { damping: 8, stiffness: 200, mass: 0.4 },
  });

  const opacity = phase > 0
    ? interpolate(phaseFrame, [0, 3, 18, 24], [0, 1, 1, 0.3], {
        extrapolateRight: "clamp", extrapolateLeft: "clamp",
      })
    : interpolate(phaseFrame, [0, 3, 12, 18], [0, 1, 1, 0], {
        extrapolateRight: "clamp", extrapolateLeft: "clamp",
      });

  const bgPulse = phase === 0 ? 0.3 : 0;

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0A0A0A",
      justifyContent: "center", alignItems: "center",
    }}>
      {/* Red glow for numbers, green for GO */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: phase > 0
          ? "radial-gradient(circle, rgba(231,76,60,0.2) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(46,204,113,0.3) 0%, transparent 70%)",
      }} />

      {/* Flash on GO */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundColor: phase === 0 ? "#2ECC71" : "transparent",
        opacity: bgPulse,
      }} />

      <h1 style={{
        fontFamily: kronaOne,
        fontSize: phase > 0 ? 180 : 100,
        color: phase > 0 ? "#E74C3C" : "#2ECC71",
        transform: `scale(${scale})`,
        opacity,
        margin: 0,
        textShadow: phase > 0
          ? "0 0 40px rgba(231,76,60,0.5)"
          : "0 0 40px rgba(46,204,113,0.5)",
      }}>
        {phase > 0 ? phase : "GO!"}
      </h1>

      {/* Race lights */}
      <div style={{
        position: "absolute", top: 80,
        display: "flex", gap: 30,
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 40, height: 40, borderRadius: "50%",
            backgroundColor: (3 - phase) > i ? "#E74C3C" : "#333",
            boxShadow: (3 - phase) > i ? "0 0 20px rgba(231,76,60,0.6)" : "none",
            border: "2px solid #555",
          }} />
        ))}
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          backgroundColor: phase === 0 ? "#2ECC71" : "#333",
          boxShadow: phase === 0 ? "0 0 20px rgba(46,204,113,0.6)" : "none",
          border: "2px solid #555",
        }} />
      </div>
    </AbsoluteFill>
  );
};

// ─── MAIN RACE ───────────────────────────────────────────
const RaceScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalRaceFrames = RACE + FINISH;

  // Race progress (0-1) with acceleration curve
  const raceT = Math.min(frame / RACE, 1);

  // Blue bike (player) - slightly faster, takes lead mid-race
  const blueAccel = interpolate(raceT, [0, 0.1, 0.5, 0.8, 1], [0, 0.05, 0.45, 0.82, 1]);

  // Red bike - starts fast, fades
  const redAccel = interpolate(raceT, [0, 0.1, 0.3, 0.7, 1], [0, 0.07, 0.35, 0.72, 0.93]);

  // Yellow bike - steady
  const yellowAccel = interpolate(raceT, [0, 0.1, 0.5, 1], [0, 0.04, 0.38, 0.88]);

  // Green bike - slow start, speeds up
  const greenAccel = interpolate(raceT, [0, 0.2, 0.6, 1], [0, 0.03, 0.32, 0.85]);

  const bluePos = getPointOnPath(TRACK_POINTS, Math.min(blueAccel, 0.99));
  const redPos = getPointOnPath(TRACK_POINTS, Math.min(redAccel, 0.99));
  const yellowPos = getPointOnPath(TRACK_POINTS, Math.min(yellowAccel, 0.99));
  const greenPos = getPointOnPath(TRACK_POINTS, Math.min(greenAccel, 0.99));

  // Camera follows the blue bike
  const camX = 540 - bluePos.x;
  const camY = 540 - bluePos.y;

  // Camera zoom - starts wide, gets tighter during curves
  const baseZoom = 0.38;
  const zoomPulse = Math.sin(raceT * Math.PI * 4) * 0.02;
  const zoom = baseZoom + zoomPulse;

  // Camera rotation follows blue bike direction slightly
  const camRotation = interpolate(bluePos.angle, [-180, 180], [-5, 5]);

  const trackPath = pointsToPath(TRACK_POINTS);

  // Finish line position
  const finishPos = TRACK_POINTS[TRACK_POINTS.length - 1];

  // Has blue crossed finish?
  const blueFinished = blueAccel >= 0.98;

  return (
    <AbsoluteFill style={{ backgroundColor: "#1a3a1a", overflow: "hidden" }}>
      {/* World container - moves with camera */}
      <div style={{
        position: "absolute",
        transform: `translate(${camX}px, ${camY}px) scale(${zoom}) rotate(${camRotation}deg)`,
        transformOrigin: "540px 540px",
        width: 1200,
        height: 3000,
      }}>
        <svg width="1200" height="3000" viewBox="0 0 1200 3000">
          {/* Definitions */}
          <defs>
            <filter id="bikeGlow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <filter id="trackGlow">
              <feGaussianBlur stdDeviation="2" />
            </filter>
            <filter id="shadow">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Grass background */}
          <rect x="0" y="0" width="1200" height="3000" fill="#1a3a1a" />

          {/* Grass texture */}
          {Array.from({ length: 80 }).map((_, i) => (
            <circle
              key={`grass-${i}`}
              cx={((i * 137) % 1200)}
              cy={((i * 251) % 3000)}
              r={2 + (i % 3)}
              fill={`rgba(30, ${80 + (i % 40)}, 40, 0.3)`}
            />
          ))}

          {/* Trees scattered around */}
          {[
            [50, 200], [120, 800], [30, 1400], [100, 2000], [60, 2600],
            [1100, 300], [1050, 900], [1130, 1500], [1080, 2100], [1120, 2700],
            [400, 50], [600, 30], [900, 50],
            [150, 1100], [950, 500], [1000, 1800], [80, 600],
          ].map(([tx, ty], i) => (
            <Tree key={`tree-${i}`} x={tx} y={ty} size={0.8 + (i % 3) * 0.3} />
          ))}

          {/* Track border glow */}
          <path
            d={trackPath}
            fill="none"
            stroke="rgba(167, 224, 250, 0.15)"
            strokeWidth="75"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#trackGlow)"
          />

          {/* Track - asphalt */}
          <path
            d={trackPath}
            fill="none"
            stroke="#2C3E50"
            strokeWidth="60"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Track center line (dashed) */}
          <path
            d={trackPath}
            fill="none"
            stroke="#F1C40F40"
            strokeWidth="2"
            strokeDasharray="20 15"
            strokeLinecap="round"
          />

          {/* Track edge markings */}
          <path
            d={trackPath}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="62"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ mixBlendMode: "overlay" }}
          />

          {/* Start line */}
          <g transform={`translate(${TRACK_POINTS[0][0]}, ${TRACK_POINTS[0][1]})`}>
            {Array.from({ length: 8 }).map((_, i) => (
              <rect
                key={`start-${i}`}
                x={-30 + i * 8}
                y={-3}
                width={8}
                height={6}
                fill={i % 2 === 0 ? "#FFF" : "#111"}
              />
            ))}
          </g>

          {/* Finish line */}
          <g transform={`translate(${finishPos[0]}, ${finishPos[1]})`}>
            {Array.from({ length: 8 }).map((_, r) =>
              Array.from({ length: 8 }).map((_, c) => (
                <rect
                  key={`fin-${r}-${c}`}
                  x={-30 + c * 8}
                  y={-24 + r * 6}
                  width={8}
                  height={6}
                  fill={(r + c) % 2 === 0 ? "#FFF" : "#111"}
                />
              ))
            )}
          </g>

          {/* Checkered flag at finish */}
          <CheckeredFlag
            x={finishPos[0] + 40}
            y={finishPos[1]}
            wave={frame * 0.1}
          />

          {/* BIKES - render back to front by Y position */}
          {[
            { pos: greenPos, color: "#27AE60", glow: "#2ECC71", t: greenAccel },
            { pos: yellowPos, color: "#D4AC0D", glow: "#F1C40F", t: yellowAccel },
            { pos: redPos, color: "#C0392B", glow: "#E74C3C", t: redAccel },
            { pos: bluePos, color: "#015880", glow: "#A7E0FA", t: blueAccel, leading: true },
          ]
            .sort((a, b) => a.pos.y - b.pos.y)
            .map((bike, i) => (
              <Motorcycle
                key={i}
                x={bike.pos.x + (bike.color === "#C0392B" ? 12 : bike.color === "#D4AC0D" ? -12 : bike.color === "#27AE60" ? -8 : 0)}
                y={bike.pos.y}
                angle={bike.pos.angle}
                color={bike.color}
                glowColor={bike.glow}
                isLeading={bike.leading}
              />
            ))}
        </svg>
      </div>

      {/* HUD overlay */}
      <div style={{
        position: "absolute", top: 20, left: 20, right: 20,
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        zIndex: 10,
      }}>
        {/* Position indicator */}
        <div style={{
          backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 10,
          padding: "10px 18px", border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <p style={{
            fontFamily: roboto, fontSize: 14, color: "#999",
            margin: "0 0 2px", textTransform: "uppercase", letterSpacing: 1,
          }}>
            Position
          </p>
          <p style={{
            fontFamily: kronaOne, fontSize: 36, color: "#A7E0FA", margin: 0,
          }}>
            {blueAccel > redAccel ? "1" : "2"}<span style={{ fontSize: 16, color: "#666" }}>/{4}</span>
          </p>
        </div>

        {/* Lap progress */}
        <div style={{
          backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 10,
          padding: "10px 18px", border: "1px solid rgba(255,255,255,0.1)",
        }}>
          <p style={{
            fontFamily: roboto, fontSize: 14, color: "#999",
            margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1,
          }}>
            Progress
          </p>
          <div style={{
            width: 120, height: 6, backgroundColor: "#333", borderRadius: 3,
          }}>
            <div style={{
              width: `${blueAccel * 100}%`, height: "100%",
              backgroundColor: "#A7E0FA", borderRadius: 3,
            }} />
          </div>
        </div>
      </div>

      {/* Speed indicator */}
      <div style={{
        position: "absolute", bottom: 25, right: 25,
        backgroundColor: "rgba(0,0,0,0.7)", borderRadius: 10,
        padding: "8px 16px", border: "1px solid rgba(255,255,255,0.1)",
        zIndex: 10,
      }}>
        <p style={{
          fontFamily: kronaOne, fontSize: 28, color: "#FFF", margin: 0,
        }}>
          {Math.round(140 + Math.sin(frame * 0.15) * 30)}
          <span style={{ fontSize: 14, color: "#999" }}> MPH</span>
        </p>
      </div>

      {/* FINISH flash */}
      {blueFinished && (
        <div style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(167, 224, 250, 0.15)",
          opacity: interpolate(frame - RACE, [0, 10, 20], [0, 0.3, 0], {
            extrapolateRight: "clamp", extrapolateLeft: "clamp",
          }),
          zIndex: 5,
        }} />
      )}
    </AbsoluteFill>
  );
};

// ─── CELEBRATION ─────────────────────────────────────────
const CelebrationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slamScale = spring({
    frame, fps,
    config: { damping: 8, stiffness: 180, mass: 0.5 },
  });

  const subOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp" });

  // Particle sparks
  const sparks = Array.from({ length: 20 }).map((_, i) => {
    const angle = (i / 20) * Math.PI * 2 + frame * 0.02;
    const dist = 100 + frame * 2 + (i % 5) * 20;
    const x = 540 + Math.cos(angle) * dist;
    const y = 450 + Math.sin(angle) * dist;
    const opacity = interpolate(frame, [0, 10, 60, 80], [0, 1, 0.6, 0], {
      extrapolateRight: "clamp",
    });
    return { x, y, opacity, color: i % 3 === 0 ? "#F1C40F" : i % 3 === 1 ? "#A7E0FA" : "#FFF" };
  });

  return (
    <AbsoluteFill style={{
      backgroundColor: "#0A0A0A",
      justifyContent: "center", alignItems: "center",
    }}>
      {/* Sparks */}
      {sparks.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: s.x, top: s.y,
          width: 6, height: 6, borderRadius: "50%",
          backgroundColor: s.color, opacity: s.opacity,
          boxShadow: `0 0 8px ${s.color}`,
        }} />
      ))}

      {/* Radial glow */}
      <div style={{
        position: "absolute", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(1,88,128,0.3) 0%, transparent 70%)",
      }} />

      {/* Checkered flag emoji */}
      <div style={{
        fontSize: 80, marginBottom: 20,
        transform: `scale(${slamScale})`,
      }}>
        🏁
      </div>

      <h1 style={{
        fontFamily: kronaOne, fontSize: 52, color: "#A7E0FA",
        textTransform: "uppercase", textAlign: "center", margin: 0,
        transform: `scale(${slamScale})`,
        textShadow: "0 0 30px rgba(167, 224, 250, 0.4)",
      }}>
        WINNER!
      </h1>

      <p style={{
        fontFamily: roboto, fontSize: 24, color: "#F1C40F",
        margin: "15px 0 0", opacity: subOpacity,
        textAlign: "center",
      }}>
        Blue takes the checkered flag
      </p>
    </AbsoluteFill>
  );
};

// ─── MAIN COMPOSITION ────────────────────────────────────
export const MotoRaceComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0A0A" }}>
      <Sequence durationInFrames={COUNTDOWN}>
        <CountdownScene />
      </Sequence>
      <Sequence from={COUNTDOWN} durationInFrames={RACE + FINISH}>
        <RaceScene />
      </Sequence>
      <Sequence from={COUNTDOWN + RACE + FINISH} durationInFrames={CELEBRATION}>
        <CelebrationScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export const MOTO_RACE_TOTAL_FRAMES = TOTAL_FRAMES;
