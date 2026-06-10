import {
  AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Img,
} from "remotion";

const interFace = new FontFace("Inter", `url('${staticFile("fonts/Inter.ttf")}')`);
const spaceFace = new FontFace("Space Grotesk", `url('${staticFile("fonts/SpaceGrotesk.ttf")}')`);
interFace.load().then((f) => document.fonts.add(f));
spaceFace.load().then((f) => document.fonts.add(f));

export const inter = "Inter, sans-serif";
export const space = "Space Grotesk, sans-serif";
export const LOGO_WHITE = staticFile("White on Transparent (2).png");

export const DARK = "#0B1120";
export const BLUE = "#3B82F6";
export const CYAN = "#06B6D4";
export const PURPLE = "#8B5CF6";
export const GREEN = "#10B981";
export const AMBER = "#F59E0B";
export const SLATE = "#1E293B";
export const CARD = "#151D2E";
export const DIM = "#64748B";
export const WHITE = "#F1F5F9";
export const RED = "#DC2626";
export const TEAL = "#0D9488";

export const Reveal: React.FC<{ d?: number; children: React.ReactNode; s?: React.CSSProperties }> = ({ d = 0, children, s = {} }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lf = Math.max(0, f - d);
  const op = interpolate(lf, [0, 10], [0, 1], { extrapolateRight: "clamp" });
  const y = interpolate(spring({ frame: lf, fps, config: { damping: 18, stiffness: 80 } }), [0, 1], [20, 0]);
  return <div style={{ opacity: op, transform: `translateY(${y}px)`, ...s }}>{children}</div>;
};

export const Scene: React.FC<{ dur: number; children: React.ReactNode }> = ({ dur, children }) => {
  const f = useCurrentFrame();
  const fi = interpolate(f, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const fo = interpolate(f, [dur - 12, dur], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ backgroundColor: DARK, opacity: Math.min(fi, fo) }}>{children}</AbsoluteFill>;
};

/* ─── Sidebar matching real PBS Work Platform ─────────── */

export const Sidebar: React.FC<{ active?: string }> = ({ active = "overview" }) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "clients", label: "Clients", icon: "👥", badge: 2 },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "rfp", label: "RFP Dashboard", icon: "📋", arrow: true },
    { id: "requests", label: "Requests", icon: "📥", badge: 8 },
    { id: "workqueue", label: "Work Queue", icon: "📝", badge: 73 },
    { id: "scheduler", label: "PBR Scheduler", icon: "📅" },
    { id: "financials", label: "Financials", icon: "💲" },
    { id: "contacts", label: "Contacts", icon: "👤" },
  ];

  const recentClients = [
    "Health Transit Pool Auth.",
    "Ventech Solutions",
    "Adam's Memorial",
    "ACS Industries, Inc.",
    "Acument",
  ];

  return (
    <div style={{
      width: 148, backgroundColor: "#0D1526", borderRight: `1px solid ${SLATE}50`,
      display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden",
    }}>
      {/* Logo */}
      <div style={{ padding: "10px 10px 6px" }}>
        <Img src={LOGO_WHITE} style={{ height: 26, opacity: 0.85 }} />
      </div>

      {/* User */}
      <div style={{ padding: "4px 10px 6px", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", backgroundColor: BLUE,
          display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0,
        }}>
          <span style={{ fontFamily: inter, fontSize: 10, color: WHITE, fontWeight: 700 }}>B</span>
        </div>
        <span style={{ fontFamily: inter, fontSize: 11, color: WHITE, fontWeight: 500 }}>Brett Crisp</span>
      </div>

      {/* Notification icons */}
      <div style={{
        display: "flex", gap: 8, padding: "2px 10px 8px",
        borderBottom: `1px solid ${SLATE}30`,
      }}>
        <span style={{ fontSize: 11, opacity: 0.7 }}>🔔</span>
        <span style={{ fontSize: 11, opacity: 0.7 }}>🟡</span>
        <span style={{ fontFamily: inter, fontSize: 11, color: DIM }}>↗</span>
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, padding: "4px 0", overflow: "hidden" }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", padding: "5px 8px", gap: 5,
              backgroundColor: isActive ? `${BLUE}15` : "transparent",
              borderLeft: isActive ? `3px solid ${BLUE}` : "3px solid transparent",
            }}>
              <span style={{ fontSize: 11, flexShrink: 0 }}>{item.icon}</span>
              <span style={{
                fontFamily: inter, fontSize: 10.5, color: isActive ? WHITE : DIM,
                fontWeight: isActive ? 500 : 400, flex: 1, whiteSpace: "nowrap",
              }}>{item.label}</span>
              {item.badge != null && (
                <span style={{
                  fontFamily: inter, fontSize: 8, color: WHITE, backgroundColor: RED,
                  borderRadius: 8, padding: "1px 4px", minWidth: 14, textAlign: "center",
                  fontWeight: 600, flexShrink: 0,
                }}>{item.badge}</span>
              )}
              {item.arrow && <span style={{ fontSize: 9, color: DIM, flexShrink: 0 }}>›</span>}
            </div>
          );
        })}

        {/* Recent Clients */}
        <div style={{ padding: "8px 10px 3px" }}>
          <span style={{
            fontFamily: inter, fontSize: 8, color: DIM, textTransform: "uppercase",
            letterSpacing: 0.8, fontWeight: 600,
          }}>Recent Clients</span>
        </div>
        {recentClients.map((c) => (
          <div key={c} style={{ padding: "2px 10px 2px 16px" }}>
            <span style={{
              fontFamily: inter, fontSize: 9, color: `${DIM}bb`,
              whiteSpace: "nowrap", overflow: "hidden",
            }}>{c}</span>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div style={{ borderTop: `1px solid ${SLATE}30`, padding: "4px 0" }}>
        {[
          { icon: "🛡", label: "Admin" },
          { icon: "❓", label: "Help" },
          { icon: "⚙️", label: "Settings" },
        ].map((item) => (
          <div key={item.label} style={{
            display: "flex", alignItems: "center", padding: "3px 10px", gap: 5,
            borderLeft: "3px solid transparent",
          }}>
            <span style={{ fontSize: 10, flexShrink: 0 }}>{item.icon}</span>
            <span style={{ fontFamily: inter, fontSize: 10.5, color: DIM }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Highlight box ───────────────────────────────────── */

export const Highlight: React.FC<{
  x: number; y: number; w: number; h: number;
  d: number; color?: string; label?: string; labelPos?: "top" | "bottom" | "right";
}> = ({ x, y, w, h, d, color = CYAN, label, labelPos = "top" }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lf = Math.max(0, f - d);
  if (lf < 0) return null;

  const progress = spring({ frame: lf, fps, config: { damping: 12, stiffness: 100 } });
  const pulse = 0.5 + 0.3 * Math.sin(lf * 0.1);

  const labelX = labelPos === "right" ? x + w + 10 : x;
  const labelY = labelPos === "top" ? y - 28 : labelPos === "bottom" ? y + h + 8 : y + h / 2 - 12;

  return (
    <>
      <div style={{
        position: "absolute", left: x - 3, top: y - 3,
        width: w + 6, height: h + 6,
        border: `2px solid ${color}`,
        borderRadius: 8,
        opacity: progress,
        boxShadow: `0 0 ${10 * pulse}px ${color}40, inset 0 0 ${6 * pulse}px ${color}15`,
        zIndex: 25,
        pointerEvents: "none",
      }} />
      {label && (
        <div style={{
          position: "absolute", left: labelX, top: labelY,
          opacity: interpolate(lf, [5, 15], [0, 1], { extrapolateRight: "clamp" }),
          zIndex: 26,
        }}>
          <span style={{
            fontFamily: inter, fontSize: 12, color, fontWeight: 600,
            backgroundColor: `${color}15`, padding: "3px 10px", borderRadius: 6,
            border: `1px solid ${color}40`,
          }}>
            {label}
          </span>
        </div>
      )}
    </>
  );
};
