import {
  AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence, staticFile, Img, Audio,
} from "remotion";
import { inter, space, LOGO_WHITE, DARK, BLUE, CYAN, PURPLE, GREEN, AMBER, SLATE, CARD, DIM, WHITE, RED, TEAL, Reveal, Scene, Sidebar, Highlight } from "./wp-shared";

const INTRO = 90;
const CLIENTS = 240;
const CLIENT_DETAIL = 210;
const PROJECTS = 210;
const PBR_BOARD = 210;
const OUTRO = 90;
const TOTAL = INTRO + CLIENTS + CLIENT_DETAIL + PROJECTS + PBR_BOARD + OUTRO;

/* ─── PBM Badge ──────────────────────────────────────── */
const PbmBadge: React.FC<{ name: string }> = ({ name }) => {
  const colors: Record<string, string> = { CVS: "#DC2626", OptumRx: TEAL, TrueRx: BLUE, Prime: GREEN, MedOne: PURPLE };
  const bg = colors[name] || DIM;
  return (
    <span style={{ fontFamily: inter, fontSize: 9, color: WHITE, backgroundColor: bg, padding: "2px 7px", borderRadius: 4, fontWeight: 500, whiteSpace: "nowrap" }}>{name}</span>
  );
};

/* ─── Status Badge ───────────────────────────────────── */
const StatusBadge: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span style={{ fontFamily: inter, fontSize: 9, color: WHITE, backgroundColor: color, padding: "2px 8px", borderRadius: 4, fontWeight: 500, whiteSpace: "nowrap" }}>{label}</span>
);

/* ─── Action Buttons ─────────────────────────────────── */
const ActionButtons: React.FC = () => (
  <div style={{ display: "flex", gap: 3 }}>
    <span style={{ fontFamily: inter, fontSize: 8, color: WHITE, backgroundColor: TEAL, padding: "2px 6px", borderRadius: 3, fontWeight: 600 }}>360</span>
    <span style={{ fontFamily: inter, fontSize: 8, color: WHITE, backgroundColor: BLUE, padding: "2px 6px", borderRadius: 3, fontWeight: 600 }}>Edit</span>
    <span style={{ fontFamily: inter, fontSize: 8, color: WHITE, backgroundColor: RED, padding: "2px 6px", borderRadius: 3, fontWeight: 600 }}>Delete</span>
  </div>
);

// ─── INTRO ───────────────────────────────────────────────
const IntroScene: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ts = spring({ frame: f, fps, config: { damping: 8, stiffness: 180, mass: 0.5 } });
  const lw = interpolate(spring({ frame: Math.max(0, f - 8), fps, config: { damping: 12 } }), [0, 1], [0, 250]);
  const ga = 135 + f * 0.3;
  return (
    <Scene dur={INTRO}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(${ga}deg, ${DARK} 0%, #0F172A 40%, #1a1040 100%)` }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${SLATE}20 1px, transparent 1px), linear-gradient(90deg, ${SLATE}20 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.3 }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${BLUE}25 0%, transparent 70%)`, top: "20%", left: "60%", transform: "translate(-50%,-50%)" }} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <Reveal d={5}><Img src={LOGO_WHITE} style={{ width: 180, opacity: 0.5, marginBottom: 15 }} /></Reveal>
        <h1 style={{ fontFamily: space, fontSize: 68, color: WHITE, textAlign: "center", margin: 0, transform: `scale(${ts})`, fontWeight: 700, letterSpacing: -2 }}>
          PBS <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work Platform</span>
        </h1>
        <div style={{ width: lw, height: 3, background: `linear-gradient(90deg, ${BLUE}, ${CYAN})`, margin: "16px 0", borderRadius: 2 }} />
        <Reveal d={20}><p style={{ fontFamily: inter, fontSize: 22, color: DIM, margin: 0, letterSpacing: 1 }}>Pharmacy Benefits Consulting, Unified</p></Reveal>
        <Reveal d={35}><p style={{ fontFamily: inter, fontSize: 15, color: `${DIM}99`, margin: "10px 0 0" }}>CRM &bull; Project Management &bull; Analytics</p></Reveal>
      </AbsoluteFill>
    </Scene>
  );
};

// ─── CLIENTS SCENE ──────────────────────────────────────
const ClientsScene: React.FC = () => {
  const f = useCurrentFrame();
  const stats = [
    { label: "TOTAL CLIENTS", value: "351" },
    { label: "ACTIVE CLIENTS", value: "271" },
    { label: "OFFICES", value: "19" },
    { label: "CONTACTS", value: "128" },
  ];
  const filters = ["All Offices", "All PBMs", "All Statuses", "All Plan Years"];
  const rows = [
    { id: "#541", name: "Bluffton University", office: "—", pbm: null, year: "July 1", status: "Unknown", sColor: AMBER, pbmColor: "" },
    { id: "#540", name: "Muncie Power Products", office: "—", pbm: null, year: "Jan 1", status: "Unknown", sColor: AMBER, pbmColor: "" },
    { id: "#539", name: "Test Client", office: "Orlando", pbm: "CVS", year: "October 1", status: "Unknown", sColor: AMBER, pbmColor: RED },
    { id: "#538", name: "Health Transit Pool Auth.", office: "Toledo", pbm: "TrueRx", year: "Jan 1", status: "Active", sColor: GREEN, pbmColor: BLUE },
    { id: "#537", name: "EWI", office: "Ann Arbor", pbm: null, year: "Jan 1", status: "Unknown", sColor: AMBER, pbmColor: "" },
    { id: "#518", name: "Wagner-Meinert", office: "Indianapolis", pbm: null, year: "Jan 1", status: "Active", sColor: GREEN, pbmColor: "" },
    { id: "#514", name: "Ventech Solutions", office: "Dublin", pbm: "OptumRx", year: "Jan 1", status: "Active", sColor: GREEN, pbmColor: TEAL },
    { id: "#513", name: "US Farathane", office: "Troy", pbm: "Prime", year: "Jan 1", status: "Broker Termed", sColor: PURPLE, pbmColor: GREEN },
    { id: "#510", name: "TUV SUD America", office: "Cleveland", pbm: null, year: "Jan 1", status: "Active", sColor: GREEN, pbmColor: "" },
  ];

  // Cursor animation: clicks on Health Transit row
  const cursorShow = f > 140 && f < 200;
  const cursorX = interpolate(f, [140, 160], [600, 420], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorY = interpolate(f, [140, 160], [300, 356], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clickFlash = f > 160 && f < 165;
  const rowHighlight = f > 160 ? 3 : -1;

  return (
    <Scene dur={CLIENTS}>
      <AbsoluteFill style={{ flexDirection: "row" }}>
        <Sidebar active="clients" />
        <div style={{ flex: 1, padding: "12px 18px", overflow: "hidden" }}>
          {/* Breadcrumb */}
          <Reveal d={3}>
            <p style={{ fontFamily: inter, fontSize: 10, color: DIM, margin: "0 0 4px" }}>
              Home › <span style={{ color: WHITE }}>Clients</span>
            </p>
          </Reveal>

          {/* Header */}
          <Reveal d={5}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <h2 style={{ fontFamily: space, fontSize: 22, color: WHITE, margin: 0, fontWeight: 600 }}>All Clients ⓘ</h2>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ backgroundColor: SLATE, borderRadius: 6, padding: "4px 10px" }}>
                  <span style={{ fontFamily: inter, fontSize: 11, color: DIM }}>Settings</span>
                </div>
                <div style={{ backgroundColor: TEAL, borderRadius: 6, padding: "4px 10px" }}>
                  <span style={{ fontFamily: inter, fontSize: 11, color: WHITE, fontWeight: 600 }}>+ Add Client</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stat cards */}
          <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
            {stats.map((s, i) => (
              <Reveal key={i} d={8 + i * 4}>
                <div style={{ flex: 1, backgroundColor: CARD, borderRadius: 8, padding: "8px 12px", border: `1px solid ${SLATE}60` }}>
                  <p style={{ fontFamily: inter, fontSize: 9, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>{s.label}</p>
                  <p style={{ fontFamily: space, fontSize: 24, color: WHITE, margin: "2px 0 0", fontWeight: 700 }}>{s.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Search & Filters */}
          <Reveal d={25}>
            <div style={{ display: "flex", gap: 5, marginBottom: 8, alignItems: "center" }}>
              <div style={{ flex: 1.5, backgroundColor: SLATE, borderRadius: 6, padding: "5px 8px", border: `1px solid ${SLATE}80` }}>
                <span style={{ fontFamily: inter, fontSize: 9, color: DIM }}>Search by name, ID, office, or status...</span>
              </div>
              {filters.map((fl) => (
                <div key={fl} style={{ backgroundColor: SLATE, borderRadius: 6, padding: "5px 7px", border: `1px solid ${SLATE}80`, display: "flex", alignItems: "center", gap: 3 }}>
                  <span style={{ fontFamily: inter, fontSize: 9, color: DIM }}>{fl}</span>
                  <span style={{ fontSize: 7, color: DIM }}>▼</span>
                </div>
              ))}
              <div style={{ backgroundColor: SLATE, borderRadius: 6, padding: "5px 7px", border: `1px solid ${SLATE}80` }}>
                <span style={{ fontFamily: inter, fontSize: 9, color: DIM }}>Sort: Client ID ↓</span>
              </div>
              <span style={{ fontFamily: inter, fontSize: 9, color: DIM, padding: "0 4px" }}>Clear Filters</span>
            </div>
          </Reveal>

          {/* Alert */}
          <Reveal d={30}>
            <div style={{ backgroundColor: `${AMBER}15`, borderRadius: 6, padding: "5px 10px", marginBottom: 8, border: `1px solid ${AMBER}30`, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 10 }}>⚠️</span>
              <span style={{ fontFamily: inter, fontSize: 9, color: AMBER }}>2 clients have data that needs review</span>
              <span style={{ marginLeft: "auto", fontSize: 9, color: GREEN }}>●</span>
            </div>
          </Reveal>

          {/* Client count */}
          <Reveal d={32}>
            <p style={{ fontFamily: inter, fontSize: 9, color: DIM, margin: "0 0 4px" }}>Showing 351 clients</p>
          </Reveal>

          {/* Table */}
          <Reveal d={35}>
            <div style={{ backgroundColor: CARD, borderRadius: 8, border: `1px solid ${SLATE}60`, overflow: "hidden" }}>
              {/* Header */}
              <div style={{ display: "flex", padding: "6px 10px", borderBottom: `1px solid ${SLATE}40` }}>
                {["CLIENT ID ↓", "CLIENT NAME", "BROKER OFFICE", "PBM", "PLAN YEAR", "STATUS", "ACTIONS"].map((h) => (
                  <p key={h} style={{ flex: h === "CLIENT NAME" ? 1.5 : 1, fontFamily: inter, fontSize: 8, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.5, fontWeight: 600 }}>{h}</p>
                ))}
              </div>
              {/* Rows */}
              {rows.map((row, i) => (
                <Reveal key={i} d={40 + i * 4}>
                  <div style={{
                    display: "flex", padding: "5px 10px", alignItems: "center",
                    borderBottom: i < rows.length - 1 ? `1px solid ${SLATE}20` : "none",
                    backgroundColor: rowHighlight === i ? `${BLUE}10` : "transparent",
                    border: rowHighlight === i ? `1px solid ${BLUE}30` : "1px solid transparent",
                  }}>
                    <p style={{ flex: 1, fontFamily: inter, fontSize: 10, color: DIM, margin: 0 }}>{row.id}</p>
                    <p style={{ flex: 1.5, fontFamily: inter, fontSize: 10, color: WHITE, margin: 0, fontWeight: 500 }}>{row.name}</p>
                    <p style={{ flex: 1, fontFamily: inter, fontSize: 10, color: DIM, margin: 0 }}>{row.office}</p>
                    <div style={{ flex: 1 }}>{row.pbm ? <PbmBadge name={row.pbm} /> : <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>—</span>}</div>
                    <p style={{ flex: 1, fontFamily: inter, fontSize: 10, color: DIM, margin: 0 }}>{row.year}</p>
                    <div style={{ flex: 1 }}><StatusBadge label={row.status} color={row.sColor} /></div>
                    <div style={{ flex: 1 }}><ActionButtons /></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </AbsoluteFill>


      {/* Cursor */}
      {cursorShow && <div style={{ position: "absolute", left: cursorX, top: cursorY, width: 16, height: 20, zIndex: 40, fontSize: 18, transform: "scaleX(-1)" }}>👆</div>}
      {clickFlash && <div style={{ position: "absolute", left: cursorX - 5, top: cursorY - 5, width: 24, height: 24, borderRadius: "50%", backgroundColor: `${BLUE}40`, zIndex: 39 }} />}

      {/* Label */}
      <Reveal d={5} s={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", zIndex: 20 }}>
        <div style={{ display: "inline-block", backgroundColor: `${BLUE}15`, border: `1px solid ${BLUE}40`, borderRadius: 20, padding: "4px 16px" }}>
          <span style={{ fontFamily: inter, fontSize: 11, color: BLUE, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Client Management</span>
        </div>
      </Reveal>
    </Scene>
  );
};
// ─── CLIENT DETAIL SCENE ────────────────────────────────
const ClientDetailScene: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Modal slides in from right
  const modalDelay = 15;
  const modalProgress = spring({ frame: Math.max(0, f - modalDelay), fps, config: { damping: 15, stiffness: 80 } });
  const modalX = interpolate(modalProgress, [0, 1], [600, 0]);
  const modalOp = interpolate(f, [modalDelay, modalDelay + 10], [0, 1], { extrapolateRight: "clamp" });
  const bgDim = interpolate(f, [modalDelay, modalDelay + 15], [0, 0.4], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // Tab highlight: overview active, then switch to show nav sections
  const activeTab = f < 120 ? "overview" : f < 160 ? "pbm" : "overview";

  const clientNav = [
    { section: "CLIENT", items: [
      { id: "overview", icon: "ⓘ", label: "Overview" },
      { id: "360", icon: "◎", label: "360 Hub" },
      { id: "contacts", icon: "👥", label: "Contacts" },
    ]},
    { section: "PLAN & BENEFITS", items: [
      { id: "pbm", icon: "📄", label: "PBM History" },
      { id: "plan", icon: "📊", label: "Plan Design" },
      { id: "drug", icon: "💊", label: "Drug Coverage" },
      { id: "programs", icon: "📋", label: "Programs" },
    ]},
    { section: "REVIEWS", items: [
      { id: "pbr", icon: "🟡", label: "PBR" },
      { id: "rfp", icon: "📕", label: "RFP" },
      { id: "followups", icon: "☑️", label: "Follow-ups" },
    ]},
    { section: "WORK", items: [
      { id: "wprojects", icon: "📁", label: "Projects" },
      { id: "requests", icon: "📥", label: "Requests" },
      { id: "formhistory", icon: "📋", label: "Form History" },
      { id: "documents", icon: "☁️", label: "Documents" },
    ]},
  ];

  const fields = [
    { l: "CLIENT ID", v: "#538" }, { l: "CLIENT NAME", v: "Health Transit Pool Authorities" },
    { l: "OFFICE", v: "Toledo" }, { l: "PLAN YEAR", v: "Jan 1" },
    { l: "STATUS", v: "Active" }, { l: "CURRENT PBM", v: "TrueRx" },
    { l: "TERM DATE", v: "N/A" }, { l: "PBS START DATE", v: "N/A" },
    { l: "STATE", v: "Ohio" }, { l: "WEBSITE", v: "N/A" },
  ];

  return (
    <Scene dur={CLIENT_DETAIL}>
      {/* Dimmed background */}
      <AbsoluteFill style={{ flexDirection: "row", filter: `brightness(${1 - bgDim * 0.5})` }}>
        <Sidebar active="clients" />
        <div style={{ flex: 1, padding: "16px 20px", opacity: 0.3 }}>
          <h2 style={{ fontFamily: space, fontSize: 22, color: WHITE, margin: 0, fontWeight: 600 }}>All Clients</h2>
        </div>
      </AbsoluteFill>

      {/* Detail modal */}
      <div style={{
        position: "absolute", top: 20, left: 60, right: 20, bottom: 20,
        backgroundColor: "#111827", borderRadius: 12, border: `1px solid ${SLATE}60`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)", overflow: "hidden",
        opacity: modalOp, transform: `translateX(${modalX}px)`, zIndex: 30,
        display: "flex", flexDirection: "column",
      }}>
        {/* Top bar */}
        <div style={{ backgroundColor: `${SLATE}30`, padding: "10px 16px", borderBottom: `1px solid ${SLATE}40`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontFamily: space, fontSize: 17, color: WHITE, margin: 0, fontWeight: 600, fontStyle: "italic" }}>#538 - Health Transit Pool Authorities</h3>
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ fontFamily: inter, fontSize: 10, color: WHITE, backgroundColor: TEAL, padding: "3px 10px", borderRadius: 4, fontWeight: 500 }}>New Request</span>
            <span style={{ fontFamily: inter, fontSize: 10, color: WHITE, backgroundColor: BLUE, padding: "3px 10px", borderRadius: 4, fontWeight: 500 }}>Edit Client</span>
            <span style={{ fontFamily: inter, fontSize: 10, color: WHITE, backgroundColor: RED, padding: "3px 10px", borderRadius: 4, fontWeight: 500, border: `1px solid ${RED}` }}>Delete Client</span>
            <span style={{ fontFamily: inter, fontSize: 14, color: DIM, padding: "0 4px", cursor: "pointer" }}>✕</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Left nav */}
          <div style={{ width: 140, borderRight: `1px solid ${SLATE}30`, padding: "8px 0", overflow: "hidden" }}>
            {clientNav.map((group) => (
              <div key={group.section}>
                <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: "6px 10px 2px", textTransform: "uppercase", letterSpacing: 0.8, fontWeight: 600 }}>{group.section}</p>
                {group.items.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <div key={item.id} style={{
                      display: "flex", alignItems: "center", padding: "4px 10px", gap: 5,
                      backgroundColor: isActive ? `${BLUE}15` : "transparent",
                      borderLeft: isActive ? `3px solid ${GREEN}` : "3px solid transparent",
                    }}>
                      <span style={{ fontSize: 9 }}>{item.icon}</span>
                      <span style={{ fontFamily: inter, fontSize: 10, color: isActive ? WHITE : DIM, fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right content */}
          <div style={{ flex: 1, padding: "10px 18px", overflow: "hidden" }}>
            {/* Field pairs in 2-column grid */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {fields.map((field, i) => (
                <Reveal key={i} d={modalDelay + 8 + i * 3}>
                  <div style={{ width: 340, padding: "6px 0", borderBottom: `1px solid ${SLATE}15` }}>
                    <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>{field.l}</p>
                    <p style={{ fontFamily: inter, fontSize: 13, color: WHITE, margin: "2px 0 0", fontWeight: 500 }}>{field.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Logo upload */}
            <Reveal d={modalDelay + 45}>
              <div style={{ padding: "6px 0" }}>
                <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>LOGO</p>
                <p style={{ fontFamily: inter, fontSize: 11, color: BLUE, margin: "2px 0 0" }}>+ Upload</p>
              </div>
            </Reveal>

            {/* Commissions */}
            <Reveal d={modalDelay + 50}>
              <div style={{ marginTop: 10, backgroundColor: CARD, borderRadius: 8, padding: "10px 14px", border: `1px solid ${SLATE}40` }}>
                <h4 style={{ fontFamily: space, fontSize: 14, color: WHITE, margin: "0 0 8px", fontWeight: 600 }}>Commissions</h4>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { label: "Broker", color: TEAL },
                    { label: "Alt Funding", color: GREEN },
                    { label: "PEPM", color: RED },
                  ].map((c) => (
                    <div key={c.label} style={{ flex: 1, backgroundColor: `${c.color}08`, borderRadius: 6, padding: "8px 10px", border: `1px solid ${c.color}25` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontFamily: inter, fontSize: 10, color: c.color, fontWeight: 600 }}>{c.label}</span>
                        <span style={{ fontFamily: inter, fontSize: 9, color: WHITE, backgroundColor: TEAL, padding: "1px 6px", borderRadius: 3, fontWeight: 500 }}>+ Add</span>
                      </div>
                      <p style={{ fontFamily: inter, fontSize: 9, color: DIM, margin: 0 }}>No rates recorded</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Important Notes */}
            <Reveal d={modalDelay + 60}>
              <div style={{ marginTop: 10 }}>
                <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.5 }}>IMPORTANT NOTES</p>
                <p style={{ fontFamily: inter, fontSize: 11, color: WHITE, margin: "2px 0 0", fontWeight: 500 }}>No notes</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>


      <Reveal d={5} s={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", zIndex: 35 }}>
        <div style={{ display: "inline-block", backgroundColor: `${CYAN}15`, border: `1px solid ${CYAN}40`, borderRadius: 20, padding: "4px 16px" }}>
          <span style={{ fontFamily: inter, fontSize: 11, color: CYAN, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>360° Client View</span>
        </div>
      </Reveal>
    </Scene>
  );
};
// ─── PROJECTS SCENE ─────────────────────────────────────
const ProjectsScene: React.FC = () => {
  const f = useCurrentFrame();
  const boards = [
    { name: "2026 Consults_High Level Board", type: "Consultation - High Level", color: AMBER, total: 3, active: 2, completed: 0 },
    { name: "Test Contract Board", type: "Contract - High Level", color: GREEN, total: 5, active: 4, completed: 0 },
    { name: "Test Contracts", type: "Contract - High Level", color: GREEN, total: 3, active: 0, completed: 0 },
    { name: "test", type: "Implementation - High Level - 2026", color: DIM, total: 5, active: 5, completed: 0 },
    { name: "CY26 Q1 SB1 PBR High Level Board", type: "PBR - High Level - 2026", color: BLUE, total: 27, active: 27, completed: 0 },
    { name: "CY26 Q2 SB2 PBR High Level Board", type: "PBR - High Level - 2026", color: BLUE, total: 34, active: 34, completed: 0 },
    { name: "Test RFP", type: "RFP - High Level", color: PURPLE, total: 3, active: 0, completed: 0 },
  ];
  const archived = [
    { name: "2025 Implementation High Level Board (Test)", type: "Implementation - High Level - 2026", color: GREEN, total: 2, active: 0, completed: 0, label: "Archived" },
    { name: "CY26 Q1 SB1 PBR High Level Board", type: "PBR - High Level - 2025", color: BLUE, total: 5, active: 3, completed: 0, label: "Archived" },
    { name: "CY26 Q1 SB1 PBR High Level Board", type: "PBR - High Level - 2025", color: BLUE, total: 9, active: 6, completed: 0, label: "Archived" },
    { name: "CY26 Q2 SB2 PBR High Level Board", type: "PBR - High Level - 2026", color: BLUE, total: 30, active: 30, completed: 0, label: "Archived" },
  ];

  // Cursor clicks on SB2 board (index 5)
  const cursorShow = f > 130 && f < 190;
  const cursorX = interpolate(f, [130, 150], [600, 880], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cursorY = interpolate(f, [130, 150], [300, 85], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const clickFlash = f > 150 && f < 155;
  const boardHighlight = f > 150 ? 5 : -1;

  return (
    <Scene dur={PROJECTS}>
      <AbsoluteFill style={{ flexDirection: "row" }}>
        <Sidebar active="projects" />
        <div style={{ flex: 1, padding: "12px 18px", overflow: "hidden" }}>
          {/* Top bar */}
          <Reveal d={3}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <span style={{ fontFamily: inter, fontSize: 11, color: WHITE, fontWeight: 500 }}>My Work</span>
                <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>71 total assigned</span>
              </div>
              <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>▼ Show</span>
            </div>
          </Reveal>
          <Reveal d={3}>
            <p style={{ fontFamily: inter, fontSize: 10, color: DIM, margin: "0 0 6px" }}>Home › Projects</p>
          </Reveal>

          {/* Header */}
          <Reveal d={5}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <h2 style={{ fontFamily: space, fontSize: 20, color: WHITE, margin: 0, fontWeight: 600 }}>All Project Boards</h2>
                <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>(7)</span>
                <span style={{ fontSize: 10, color: DIM }}>ⓘ</span>
              </div>
              <div style={{ backgroundColor: BLUE, borderRadius: 6, padding: "4px 10px" }}>
                <span style={{ fontFamily: inter, fontSize: 10, color: WHITE, fontWeight: 600 }}>+ Create Board</span>
              </div>
            </div>
          </Reveal>

          {/* Active boards grid */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            {boards.map((board, i) => (
              <Reveal key={i} d={10 + i * 5}>
                <div style={{
                  width: 128, backgroundColor: CARD, borderRadius: 8, padding: "10px 10px 8px",
                  borderLeft: `4px solid ${board.color}`, borderTop: `1px solid ${SLATE}40`,
                  borderRight: `1px solid ${SLATE}40`, borderBottom: `1px solid ${SLATE}40`,
                  boxShadow: boardHighlight === i ? `0 0 10px ${BLUE}30` : "none",
                  border: boardHighlight === i ? `1px solid ${BLUE}40` : undefined,
                  borderLeftWidth: 4, borderLeftColor: board.color, borderLeftStyle: "solid",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <p style={{ fontFamily: inter, fontSize: 10, color: WHITE, margin: 0, fontWeight: 600, lineHeight: 1.3, maxWidth: 100 }}>{board.name}</p>
                    <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>⋮</span>
                  </div>
                  <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: "3px 0 6px" }}>{board.type}</p>
                  <div style={{ display: "flex", gap: 3 }}>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${BLUE}30`, padding: "1px 4px", borderRadius: 3 }}>{board.total} total</span>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${GREEN}30`, padding: "1px 4px", borderRadius: 3 }}>{board.active} active</span>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${DIM}30`, padding: "1px 4px", borderRadius: 3 }}>{board.completed} completed</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Archived header */}
          <Reveal d={50}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
              <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>▼</span>
              <span style={{ fontFamily: inter, fontSize: 12, color: WHITE, fontWeight: 600 }}>Archived Boards</span>
              <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>(4)</span>
            </div>
          </Reveal>

          {/* Archived boards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {archived.map((board, i) => (
              <Reveal key={i} d={55 + i * 5}>
                <div style={{
                  width: 128, backgroundColor: CARD, borderRadius: 8, padding: "10px 10px 8px",
                  borderLeft: `4px solid ${board.color}`, borderTop: `1px dashed ${SLATE}40`,
                  borderRight: `1px dashed ${SLATE}40`, borderBottom: `1px dashed ${SLATE}40`,
                  opacity: 0.7,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <p style={{ fontFamily: inter, fontSize: 10, color: WHITE, margin: 0, fontWeight: 600, lineHeight: 1.3, maxWidth: 85 }}>{board.name}</p>
                    <span style={{ fontFamily: inter, fontSize: 10, color: DIM }}>⋮</span>
                  </div>
                  <div style={{ display: "flex", gap: 3, marginTop: 2 }}>
                    <span style={{ fontFamily: inter, fontSize: 7, color: AMBER, backgroundColor: `${AMBER}15`, padding: "1px 4px", borderRadius: 3 }}>Archived</span>
                  </div>
                  <p style={{ fontFamily: inter, fontSize: 8, color: DIM, margin: "3px 0 6px" }}>{board.type}</p>
                  <div style={{ display: "flex", gap: 3 }}>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${BLUE}30`, padding: "1px 4px", borderRadius: 3 }}>{board.total} total</span>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${GREEN}30`, padding: "1px 4px", borderRadius: 3 }}>{board.active} active</span>
                    <span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: `${DIM}30`, padding: "1px 4px", borderRadius: 3 }}>{board.completed} completed</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </AbsoluteFill>


      {/* Cursor */}
      {cursorShow && <div style={{ position: "absolute", left: cursorX, top: cursorY, width: 16, height: 20, zIndex: 40, fontSize: 18, transform: "scaleX(-1)" }}>👆</div>}
      {clickFlash && <div style={{ position: "absolute", left: cursorX - 5, top: cursorY - 5, width: 24, height: 24, borderRadius: "50%", backgroundColor: `${BLUE}40`, zIndex: 39 }} />}

      <Reveal d={5} s={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", zIndex: 20 }}>
        <div style={{ display: "inline-block", backgroundColor: `${GREEN}15`, border: `1px solid ${GREEN}40`, borderRadius: 20, padding: "4px 16px" }}>
          <span style={{ fontFamily: inter, fontSize: 11, color: GREEN, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>Project Boards</span>
        </div>
      </Reveal>
    </Scene>
  );
};
// ─── PBR BOARD SCENE ────────────────────────────────────
const PBRBoardScene: React.FC = () => {
  const f = useCurrentFrame();
  const statusPills = [
    { label: "All Eligible", color: BLUE, active: true },
    { label: "Unscheduled", color: TEAL, active: false },
    { label: "Scheduled", color: AMBER, active: false },
    { label: "Need to Format/Prep DATA", color: PURPLE, active: false },
    { label: "Entry", color: DIM, active: false },
    { label: "Need to Load and Validate", color: GREEN, active: false },
    { label: "Sent Back to Team for Issues", color: RED, active: false },
    { label: "Need to Review Pharmacist", color: AMBER, active: false },
  ];
  const statusPills2 = [
    { label: "Still Scrub this Pharm?!", color: PURPLE, active: false },
    { label: "Waiting on Client Meeting", color: DIM, active: false },
    { label: "AI Review", color: CYAN, active: false },
    { label: "Complete", color: GREEN, active: false },
  ];
  const cols = ["CLIENT ID", "CLIENT", "PBM", "EMAIL", "SOURCE", "STATUS", "PBR OPTION", "DATA QUEUE", "MTG DATE", "SCHED", "SAVINGS", "DONE", "PHARMACIST", "ANALYST", "DUE DATE"];
  const rows = [
    { id: "#54", client: "Cleveland Electric", pbm: "TrueRx", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#59", client: "Corrigan, Krause, Harrison...", pbm: "TrueRx", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#70", client: "Covert Management", pbm: "Prime", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#32", client: "Lacis Enterprises", pbm: "Prime", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#57", client: "WDC Acquisition", pbm: "MedOne", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#06", client: "Snph Management", pbm: "Prime", email: "📧", source: "Not Sent", status: "SB", statusLabel: "All Eligible" },
    { id: "#168", client: "On Tool & Die", pbm: "Prime", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#311", client: "Fire-Dex", pbm: "MedOne", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
    { id: "#306", client: "Episcopal School of Jax", pbm: "MedOne", email: "📧", source: "core", status: "SB", statusLabel: "All Eligible" },
  ];

  return (
    <Scene dur={PBR_BOARD}>
      <AbsoluteFill style={{ flexDirection: "row" }}>
        <Sidebar active="projects" />
        <div style={{ flex: 1, padding: "8px 12px", overflow: "hidden" }}>
          {/* Top bar */}
          <Reveal d={3}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
              <p style={{ fontFamily: inter, fontSize: 9, color: DIM, margin: 0 }}>Projects › CY26 Q2 SB2 PBR High Level Board › Corrigan, Krause...</p>
            </div>
          </Reveal>

          {/* Board header */}
          <Reveal d={5}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div>
                <h2 style={{ fontFamily: space, fontSize: 18, color: WHITE, margin: 0, fontWeight: 600 }}>CY26 Q2 SB2 PBR High Level Board</h2>
                <p style={{ fontFamily: inter, fontSize: 9, color: DIM, margin: "1px 0 0" }}>PBR - High Level - 2026</p>
              </div>
              <div style={{ display: "flex", gap: 5 }}>
                <span style={{ fontFamily: inter, fontSize: 9, color: WHITE, backgroundColor: TEAL, padding: "3px 8px", borderRadius: 4, fontWeight: 500 }}>+ Add Card</span>
                <span style={{ fontFamily: inter, fontSize: 9, color: DIM, backgroundColor: SLATE, padding: "3px 8px", borderRadius: 4 }}>New Request</span>
                <span style={{ fontFamily: inter, fontSize: 9, color: DIM, backgroundColor: SLATE, padding: "3px 8px", borderRadius: 4 }}>Manage Columns</span>
              </div>
            </div>
          </Reveal>

          {/* Alert */}
          <Reveal d={8}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 10 }}>⚠️</span>
              <span style={{ fontFamily: inter, fontSize: 9, color: AMBER }}>3x at risk</span>
              <span style={{ fontFamily: inter, fontSize: 9, color: RED }}>(?+14 days)</span>
            </div>
          </Reveal>

          {/* Filters row */}
          <Reveal d={10}>
            <div style={{ display: "flex", gap: 4, marginBottom: 6, alignItems: "center", flexWrap: "wrap" }}>
              {["Select a view", "Search:", "Search cards...", "Status:", "All Statuses", "Due:", "Any Date", "Client:", "All Clients", "Assignee:", "All Assignees", "Team:", "All Teams"].map((fl, i) => (
                <span key={i} style={{
                  fontFamily: inter, fontSize: 7.5, color: i <= 1 || i === 3 || i === 5 || i === 7 || i === 9 || i === 11 ? DIM : WHITE,
                  backgroundColor: i === 0 ? `${TEAL}30` : SLATE, padding: "2px 5px", borderRadius: 3,
                  border: i === 0 ? `1px solid ${TEAL}` : `1px solid ${SLATE}80`,
                }}>{fl}</span>
              ))}
              <span style={{ fontFamily: inter, fontSize: 8, color: DIM }}>Clear Filters</span>
              <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
                <span style={{ fontFamily: inter, fontSize: 8, color: DIM, backgroundColor: SLATE, padding: "2px 6px", borderRadius: 3 }}>Board</span>
                <span style={{ fontFamily: inter, fontSize: 8, color: WHITE, backgroundColor: `${BLUE}30`, padding: "2px 6px", borderRadius: 3 }}>Table</span>
              </div>
            </div>
          </Reveal>

          {/* Status pills */}
          <Reveal d={15}>
            <div style={{ display: "flex", gap: 3, marginBottom: 2, flexWrap: "wrap" }}>
              {statusPills.map((p, i) => (
                <span key={i} style={{
                  fontFamily: inter, fontSize: 7, color: WHITE, fontWeight: 500,
                  backgroundColor: p.active ? p.color : `${p.color}25`,
                  padding: "2px 6px", borderRadius: 10, border: `1px solid ${p.color}50`,
                }}>{p.label}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
              {statusPills2.map((p, i) => (
                <span key={i} style={{
                  fontFamily: inter, fontSize: 7, color: WHITE, fontWeight: 500,
                  backgroundColor: `${p.color}25`,
                  padding: "2px 6px", borderRadius: 10, border: `1px solid ${p.color}50`,
                }}>{p.label}</span>
              ))}
            </div>
          </Reveal>

          {/* "All Eligible" section */}
          <Reveal d={20}>
            <div style={{ backgroundColor: CARD, borderRadius: 8, border: `1px solid ${SLATE}40`, overflow: "hidden" }}>
              {/* Section header */}
              <div style={{ padding: "4px 8px", borderBottom: `1px solid ${SLATE}40`, display: "flex", justifyContent: "flex-end" }}>
                <span style={{ fontFamily: inter, fontSize: 9, color: RED, fontWeight: 500 }}>All Eligible</span>
              </div>
              {/* Table header */}
              <div style={{ display: "flex", padding: "4px 8px", borderBottom: `1px solid ${SLATE}30` }}>
                {cols.map((c, i) => (
                  <p key={c} style={{
                    flex: i === 1 ? 1.3 : i === 2 ? 0.6 : i === 3 || i === 4 || i === 5 ? 0.5 : 0.7,
                    fontFamily: inter, fontSize: 6.5, color: DIM, margin: 0, textTransform: "uppercase", letterSpacing: 0.3, fontWeight: 600,
                    whiteSpace: "nowrap", overflow: "hidden",
                  }}>{c}</p>
                ))}
              </div>
              {/* Rows */}
              {rows.map((row, i) => (
                <Reveal key={i} d={25 + i * 3}>
                  <div style={{
                    display: "flex", padding: "3px 8px", alignItems: "center",
                    borderBottom: i < rows.length - 1 ? `1px solid ${SLATE}15` : "none",
                  }}>
                    <div style={{ flex: 0.1, display: "flex", alignItems: "center" }}>
                      <span style={{ fontSize: 7, color: DIM }}>▶</span>
                    </div>
                    <p style={{ flex: 0.6, fontFamily: inter, fontSize: 8, color: DIM, margin: 0 }}>{row.id}</p>
                    <p style={{ flex: 1.3, fontFamily: inter, fontSize: 8, color: BLUE, margin: 0, fontWeight: 500 }}>{row.client} 📋</p>
                    <div style={{ flex: 0.6 }}><PbmBadge name={row.pbm} /></div>
                    <p style={{ flex: 0.5, fontFamily: inter, fontSize: 8, color: DIM, margin: 0 }}>{row.email}</p>
                    <div style={{ flex: 0.5 }}><span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: GREEN, padding: "1px 4px", borderRadius: 3 }}>core</span></div>
                    <div style={{ flex: 0.5 }}><span style={{ fontFamily: inter, fontSize: 7, color: WHITE, backgroundColor: BLUE, padding: "1px 4px", borderRadius: 3 }}>SB</span></div>
                    <div style={{ flex: 0.7 }}><span style={{ fontFamily: inter, fontSize: 7, color: GREEN, backgroundColor: `${GREEN}15`, padding: "1px 4px", borderRadius: 3 }}>All Eligible</span></div>
                    {/* Remaining columns as dashes */}
                    {[0,1,2,3,4,5,6].map((ci) => (
                      <p key={ci} style={{ flex: ci === 5 ? 0.9 : 0.7, fontFamily: inter, fontSize: 8, color: DIM, margin: 0 }}>
                        {ci === 5 ? "rachel@rxbs.org" : "-"}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Additional sections collapsed */}
          <Reveal d={60}>
            <div style={{ marginTop: 6 }}>
              {["Unscheduled  0 items", "Scheduled  1 items", "Need to Format/Prep DATA  0 items"].map((sec) => (
                <div key={sec} style={{ display: "flex", gap: 5, alignItems: "center", padding: "3px 8px", borderBottom: `1px solid ${SLATE}15` }}>
                  <span style={{ fontSize: 7, color: AMBER }}>▼</span>
                  <span style={{ fontFamily: inter, fontSize: 9, color: AMBER, fontWeight: 500 }}>{sec}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </AbsoluteFill>


      <Reveal d={5} s={{ position: "absolute", bottom: 14, left: 0, right: 0, textAlign: "center", zIndex: 20 }}>
        <div style={{ display: "inline-block", backgroundColor: `${PURPLE}15`, border: `1px solid ${PURPLE}40`, borderRadius: 20, padding: "4px 16px" }}>
          <span style={{ fontFamily: inter, fontSize: 11, color: PURPLE, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>PBR Project Boards</span>
        </div>
      </Reveal>
    </Scene>
  );
};

// ─── OUTRO ───────────────────────────────────────────────
const OutroScene: React.FC = () => {
  const f = useCurrentFrame(); const { fps } = useVideoConfig();
  const ts = spring({ frame: f, fps, config: { damping: 10, stiffness: 120 } });
  const lw = interpolate(spring({ frame: Math.max(0, f - 10), fps, config: { damping: 12 } }), [0, 1], [0, 200]);
  return (
    <AbsoluteFill style={{ background: `linear-gradient(135deg, ${DARK} 0%, #0F172A 50%, #1a1040 100%)`, justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${SLATE}20 1px, transparent 1px), linear-gradient(90deg, ${SLATE}20 1px, transparent 1px)`, backgroundSize: "60px 60px", opacity: 0.15 }} />
      <h1 style={{ fontFamily: space, fontSize: 48, color: WHITE, textAlign: "center", margin: 0, transform: `scale(${ts})`, fontWeight: 700, letterSpacing: -1 }}>
        PBS <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work Platform</span>
      </h1>
      <div style={{ width: lw, height: 3, background: `linear-gradient(90deg, ${BLUE}, ${CYAN})`, margin: "14px 0", borderRadius: 2 }} />
      <Reveal d={12}><p style={{ fontFamily: inter, fontSize: 18, color: DIM, margin: 0 }}>team@rxbs.org &bull; www.rxbs.org</p></Reveal>
      <Reveal d={20}><Img src={LOGO_WHITE} style={{ width: 160, marginTop: 20, opacity: 0.5 }} /></Reveal>
    </AbsoluteFill>
  );
};

// ─── MAIN ────────────────────────────────────────────────
export const PBSWorkPlatformComposition = () => {
  let t = 0;
  const seq = (dur: number, el: React.ReactNode) => { const s = <Sequence key={t} from={t} durationInFrames={dur}>{el}</Sequence>; t += dur; return s; };
  return (
    <AbsoluteFill style={{ backgroundColor: DARK }}>
      {seq(INTRO, <IntroScene />)}
      {seq(CLIENTS, <ClientsScene />)}
      {seq(CLIENT_DETAIL, <ClientDetailScene />)}
      {seq(PROJECTS, <ProjectsScene />)}
      {seq(PBR_BOARD, <PBRBoardScene />)}
      {seq(OUTRO, <OutroScene />)}
    </AbsoluteFill>
  );
};

export const PBS_WORK_PLATFORM_TOTAL = TOTAL;
