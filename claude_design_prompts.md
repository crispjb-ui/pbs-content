# Claude Design Prompts: PBS LinkedIn Visuals

Reference file. Paste-ready prompts for Claude design (or any generative design tool with brand loaded) to produce 1080 x 1350 LinkedIn feed vertical images.

---

## Brand reference

Every prompt assumes these are loaded:

- **Primary Blue:** #015880 (deep teal-blue)
- **Accent Blue:** #A7E0FA (light blue)
- **Gray:** #4D4D4D (body text)
- **White:** #FFFFFF (backgrounds)
- **Headers:** Krona One
- **Body:** Roboto
- **Dimensions:** 1080 x 1350 px (LinkedIn feed vertical 4:5)
- **Rule:** No logos, no publication badges, no people, no watermarks on LinkedIn feed images. Feed posts come from Ginny Crisp's personal profile, not Benefit Blind Spots.

---

## Format catalog

Twelve templates. Four base formats plus eight metaphor infographics.

**Base formats:**
1. Clean single-image infographic
2. Seven-slide carousel (master template)
3. Whiteboard carousel
4. Contract comparison carousel

**Metaphor infographics (single image):**
5. Iceberg
6. Bridge
7. Funnel
8. Stopwatch
9. Mountain
10. Door / Gateway
11. Tree
12. Maze

---

## 1. Clean single-image infographic

```
Create a clean, professional LinkedIn infographic as an HTML+CSS artifact at 1080 x 1350 pixels (4:5 vertical).

Layout:
- Top 15%: Deep teal-blue (#015880) header band. White Krona One headline, 48pt, centered: "[HEADLINE]". Below it, Accent Blue (#A7E0FA) Roboto Italic subhead, 20pt: "[SUBHEAD]".
- Middle 70%: White background. Five stacked rows, each with bold Krona One label in Primary Blue (left 30%, 36pt) and Roboto Gray body (right 70%, 18pt, left-aligned). 2px Accent Blue horizontal dividers between rows.
- Bottom 15%: Accent Blue footer band. Primary Blue Roboto Bold 16pt centered: "[CTA]".
- 80px horizontal padding, 40px between rows.
- No icons, no logos, no emojis. Typography does the work.

Content: HEADLINE, SUBHEAD, five Label/Body pairs, CTA.

Render as HTML+CSS artifact exportable as PNG.
```

---

## 2. Seven-slide carousel (master)

```
Create a 7-slide LinkedIn carousel as an HTML+CSS artifact. Each slide 1080 x 1350 px. Render all 7 stacked in preview, exportable individually.

Visual system:
- Primary Blue (#015880) backgrounds on cover and closing slides
- White backgrounds on content slides (2-6) with Primary Blue text
- Krona One for headlines (48pt cover, 40pt content)
- Roboto for body (20-22pt) and labels (14-16pt, uppercase, letter-spaced)
- Accent Blue (#A7E0FA) for highlights and key data
- Gray (#4D4D4D) for secondary text
- 60px horizontal padding
- Slide number bottom right: "N / 7" Gray 14pt

Slide 1 cover: full Primary Blue. Krona One headline white 60pt centered. Subhead Accent Blue Roboto Italic 24pt. ">>>" swipe indicator top right.

Slides 2-6 content: white background. Accent Blue label top-left uppercase. Primary Blue Krona One headline 40pt. Gray body 22pt (max 40 words). One visual emphasis per slide: pull number in Primary Blue 80pt, or Accent Blue highlight box.

Slide 7 close: full Primary Blue. Krona One white 48pt. Supporting Accent Blue Roboto 24pt. Footer white Roboto 16pt.

Content: [per slide]
```

---

## 3. Whiteboard carousel (7 slides)

```
Create a 7-slide LinkedIn carousel as HTML+CSS artifact. 1080 x 1350 px per slide.

Visual system:
- Background: soft off-white (#F8F5ED) with subtle paper grain texture, simulating a whiteboard
- All text in handwritten marker style (Caveat or Permanent Marker font)
- Primary Blue (#015880) for marker text
- Accent Blue (#A7E0FA) for marker highlights (drawn rectangles, circles, underlines)
- Gray (#4D4D4D) for secondary
- Slight imperfections: marker strokes not perfectly straight, corners of boxes not quite meeting, light smudges
- No logos
- Slide number bottom right: small Gray "N/7"

Cover: Primary Blue hand-lettered headline 80pt. Gray subhead 28pt. Small arrow and "swipe" bottom right.

Content slides: hand-drawn label box top-left (Primary Blue outline, 18pt inside). Main headline Primary Blue 40pt. One circled or highlighted key phrase in Accent Blue marker. Body Gray 22pt, 3-5 lines. One hand-drawn arrow, bracket, or underline per slide.

Close: hand-lettered takeaway Primary Blue 56pt. Signature-style "— Ginny" line Gray 20pt. Accent Blue horizontal line across bottom.

Style: feels like a pharmacist working through reasoning on a whiteboard. Deliberately imperfect.
```

---

## 4. Contract comparison carousel (7 slides)

```
Create a 7-slide LinkedIn carousel as HTML+CSS artifact. 1080 x 1350 px per slide.

Visual system: split vertical layout with top half and bottom half clearly separated.
- Top half background: Accent Blue (#A7E0FA) with Primary Blue text
- Bottom half background: Primary Blue (#015880) with white text
- Krona One for labels (uppercase, letter-spaced)
- Roboto Italic for quoted contract language
- 60px horizontal, 40px vertical padding
- Slide number bottom right in small Gray

Cover: full Primary Blue. White Krona One 56pt title. Accent Blue Roboto Italic 24pt subhead. Bottom right: "swipe for the comparison".

Content slides (each slide = one provision compared):
- Top half: "WHAT YOU MIGHT SEE" label Krona One 16pt. Weak quoted language Roboto Italic 26pt in quotes. Small caption Roboto Italic 16pt: [what it actually means].
- Bottom half: "WHAT TO ASK FOR" label Krona One Accent Blue 16pt. Strong quoted language white Roboto Italic 24pt in quotes. Provision name tag bottom Accent Blue Roboto Bold 14pt.

Close: full Primary Blue. Krona One white 48pt takeaway. Accent Blue Roboto 20pt support line. Small Accent Blue link: benefitblindspots.substack.com/p/pbm-contract-language-library
```

---

## Claude design project type to use

| Format | Project type | Reason |
|--------|--------------|--------|
| Clean single-image infographic | **Prototype** | HTML+CSS artifact, export as PNG |
| Seven-slide carousel (master) | **Slide deck from template** | Native multi-slide handling, batch export |
| Whiteboard carousel | **Slide deck from template** | Multi-slide, consistent visual system |
| Contract comparison carousel | **Slide deck from template** | Split-layout consistency across slides |
| All metaphor infographics (iceberg, bridge, funnel, stopwatch, mountain, door, tree, maze) | **Prototype** | Single-image vector-style output, export as PNG |

**Rule of thumb:** If it is one image = Prototype. If it is multiple slides = Slide deck from template.

Do NOT use Document (wrong output format) or Website (no clean export path to static image).

**After export from Claude design:**
1. Download the PNG(s) at 1080 x 1350 px
2. Open in Canva for any final tweaks (color match, font adjustments, PBS logo placement if adding for Substack header image)
3. Export final PNG and upload to LinkedIn / Substack

---

## 5. Iceberg: "What You See vs. What You Pay"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration style, not 3D.

TOP 40% (above waterline):
- Sky gradient from very light Accent Blue (#A7E0FA) to white
- Iceberg tip in white with thin Primary Blue outline
- Five small Roboto Bold 16pt labels floating around the tip with thin connecting lines: "Admin fees", "Rebate guarantees", "Pricing discounts", "Clinical programs", "Network access"
- Top label in Krona One Primary Blue 32pt centered: "WHAT YOU SEE"

WATERLINE (4%): Accent Blue horizontal wave line. Small Gray Roboto Italic 14pt right: "contract surface".

BOTTOM 56% (below waterline):
- Gradient from Accent Blue to Primary Blue
- Larger iceberg mass white with thin outline, 70% of section
- Seven white Roboto Bold 16pt labels with connecting lines: "Formulary placement fees", "Market share rebates", "Administrative service fees", "Data licensing revenue", "GPO arrangements", "Manufacturer direct payments", "Affiliate margin on specialty"
- Bottom label Krona One white 32pt centered: "WHAT YOU PAY"

FOOTER (5%): Primary Blue band. White Roboto Bold 14pt centered: "The gap between visible and invisible revenue is where your contract either protects you or does not."

No logos, no people. Palette strict: Primary Blue #015880, Accent Blue #A7E0FA, White, Gray #4D4D4D.
```

---

## 6. Bridge: "Weak Contract Language to Strong Contract Language"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (15%): Krona One Primary Blue 40pt centered: "THE CONTRACT LANGUAGE BRIDGE". Gray Roboto Italic 18pt subhead: "From vague promises to enforceable guarantees".

LEFT TOWER (30% of canvas, bottom-left): Tall Gray (#4D4D4D) rectangle. Above: Krona One Primary Blue 28pt "WHERE YOU ARE". Inside tower, three lines stacked white Roboto Bold 16pt: "'Competitive pricing'", "'Reasonable audit access'", "'Timely turnaround'".

RIGHT TOWER (30% of canvas, bottom-right): Taller Primary Blue rectangle. Above: Krona One Primary Blue 28pt "WHERE YOU GO". Inside, three lines white Roboto Bold 16pt: "'GER minimum 85%'", "'Full claims and rebate audit'", "'48-hour PA turnaround'".

BRIDGE (center, connecting towers): Arc in Accent Blue (#A7E0FA). Three stepping stones on the arc as small Primary Blue circles with white Roboto Bold 14pt numbers 1, 2, 3. Above each: Gray Roboto 14pt: "Audit your current contract", "Benchmark to market", "Redline before renewal".

BOTTOM (10%): Primary Blue band. White Roboto Bold 14pt centered: "Three steps. Three months. Fundamentally different negotiating position."

No logos, no people. Palette: Primary Blue, Accent Blue, Gray, White.
```

---

## 7. Funnel: "Your Pharmacy Dollar: Where It Actually Goes"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (15%): White background. Krona One Primary Blue 44pt centered: "$100 OF PHARMACY SPEND". Gray Roboto Italic 18pt subhead: "Where the dollars go. Most employers never trace this." Primary Blue Krona One 72pt "$100" centered below subhead.

FUNNEL (70%): Wide at top, narrows to point at bottom. Primary Blue outline 3px stroke. Five horizontal bands inside, each a different tint:
- Band 1 widest top: Accent Blue (#A7E0FA) - "Drug acquisition cost" - "$62"
- Band 2: lighter Primary Blue - "Dispensing fee" - "$4"
- Band 3: mid Primary Blue - "PBM admin fee" - "$8"
- Band 4: darker Primary Blue - "Rebate retained by PBM" - "$12"
- Band 5 narrowest bottom: deep Primary Blue - "Net to plan in true savings" - "$14"
Each band: dollar amount in Krona One 36pt white centered. Right of each band: Roboto Bold Gray 18pt label left-aligned.

BOTTOM (15%): Primary Blue background. White Krona One 28pt: "14% NET TO YOUR PLAN". White Roboto 16pt: "The other 86% is the math you need to interrogate."

Note: dollar allocations illustrative, not plan-specific.
No logos, no people. Palette strict.
```

---

## 8. Stopwatch: "How Long Until Your PBM Actually Responds"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (15%): White background. Krona One Primary Blue 40pt centered: "PA TURNAROUND TIME". Gray Roboto Italic 18pt centered subhead: "From prescription to approval. The gap matters."

STOPWATCH (60%, centered): Large circular stopwatch white background with 4px Primary Blue stroke. Hour/minute markers as small Primary Blue lines every 30 degrees. Crown/button top in Primary Blue. Inside, three colored wedges:
- GREEN zone (Accent Blue #A7E0FA), 12 o'clock to 3 o'clock (25% of face): "UNDER 24 HOURS" Primary Blue Roboto Bold 14pt inside wedge
- YELLOW zone (Gray at 30% opacity), 3 o'clock to 9 o'clock (50%): "24 TO 72 HOURS"
- RED zone (deeper Primary Blue full saturation), 9 o'clock to 12 o'clock (25%): "OVER 72 HOURS" white
Clock hand Primary Blue pointing 9 o'clock (entering red). Small Accent Blue center dot.

BELOW STOPWATCH (15%): Three equal columns, label above text below:
- "GREEN" Krona One 22pt Primary Blue. Below: "Access preserved. Friction justifies clinical benefit."
- "YELLOW" Krona One 22pt Gray. Below: "Acceptable for most. Negotiate for faster."
- "RED" Krona One 22pt deep Primary Blue. Below: "Members are abandoning therapy. Fix this."

FOOTER (10%): Primary Blue band. White Krona One 20pt "CHECK YOUR CONTRACT". White Roboto 14pt: "PA turnaround guarantees are negotiable. Most contracts do not have them."

No logos, no people. Palette strict.
```

---

## 9. Mountain: "The 90-Day Renewal Climb"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (12%): White background. Krona One Primary Blue 40pt centered: "THE 90-DAY RENEWAL CLIMB". Gray Roboto Italic 18pt subhead: "Where negotiating position gets built."

MOUNTAIN (73%): Large mountain silhouette filling majority of canvas. Mountain in Primary Blue with three distinct plateau ledges. Sky behind in very pale Accent Blue gradient. Thin path traced up the mountain in dashed white line.

Three plateau labels, each with Krona One Primary Blue label and Roboto body:
- BASE CAMP (bottom-left of mountain): "WEEKS 1-4" label. Body: "Pull data. Benchmark. Identify priorities."
- MID-CAMP (middle of mountain): "WEEKS 5-8" label. Body: "Read the contract. Draft the term sheet. Coordinate with advisors."
- SUMMIT APPROACH (near peak): "WEEKS 9-12" label. Body: "Opening position. PBM meeting. Counter-offer. Close."

Small Primary Blue flag on peak. Above the peak, in Krona One Primary Blue 32pt: "RENEWAL".

BOTTOM (15%): Primary Blue band. White Krona One 22pt "START AT WEEK 1". White Roboto 14pt: "Thirty days out is reactive. Ninety days out is negotiated."

No logos, no people, no figures climbing. Palette strict.
```

---

## 10. Door / Gateway: "Your Audit Rights"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (12%): White background. Krona One Primary Blue 40pt centered: "YOUR AUDIT RIGHTS". Gray Roboto Italic 18pt centered: "The door most employers never open."

DOOR (73%, centered): Large rectangular door shape in Primary Blue, slightly ajar (tilted 10 degrees open showing a sliver of bright Accent Blue behind). Gray frame around the door. Gray doorknob on the right side. Small brass-toned lock plate above the knob.

On the closed/Primary Blue portion of the door, five white Roboto Bold 18pt lines stacked:
"Reasonable notice"
"PBM-approved auditor"
"Summary data only"
"Recovery caps apply"
"One audit per year"

Above the door, Krona One Primary Blue 24pt: "WHAT MOST CONTRACTS SAY"

Through the open sliver of the door (Accent Blue), visible: five white Roboto Bold 14pt lines "What is behind the door" suggesting the recovery, the data, the leverage.

Small Primary Blue key hovering near the lock, with tag Roboto Bold 14pt: "30-DAY NOTICE. NO APPROVAL. FULL SCOPE."

BOTTOM (15%): Primary Blue band. White Krona One 20pt "OPEN THE DOOR". White Roboto 14pt: "Contract language determines whether audit rights have teeth or just exist on paper."

No logos, no people. Palette strict.
```

---

## 11. Tree: "What Your Claims Data Is Growing From"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (12%): White background. Krona One Primary Blue 40pt centered: "WHAT YOUR CLAIMS DATA IS GROWING FROM". Gray Roboto Italic 18pt subhead: "The contract roots under every report."

ABOVE GROUND (40%):
- Ground line Gray horizontal across midsection
- Stylized tree with thick Primary Blue trunk and full canopy in Accent Blue (#A7E0FA)
- Three Krona One Primary Blue 18pt labels floating among canopy: "CLAIMS REPORTS", "REBATE STATEMENTS", "UTILIZATION DATA"
- Small Gray Roboto Italic 14pt caption below canopy: "What you see"

TRUNK (15%): Thick Primary Blue trunk meeting ground at center. White Krona One 18pt down the trunk: "PBM ADJUDICATION".

BELOW GROUND (33%):
- Soil background in pale Gray
- Root system spreading downward from trunk, roots in Primary Blue
- Five Krona One Primary Blue 16pt labels scattered among roots: "DEFINITIONS", "FEE STRUCTURE", "REBATE SCOPE", "AUDIT LIMITS", "TERMINATION TERMS"
- Small Gray Roboto Italic 14pt caption at very bottom: "What you signed"

Thin dashed Primary Blue arrow pointing from roots upward to canopy with small label "everything flows from here".

BOTTOM (not a separate band, integrated at very bottom of below-ground section): Primary Blue text Roboto Bold 16pt centered: "Every number in your reports is a product of your contract."

No logos, no people. Palette strict.
```

---

## 12. Maze: "The Path Through PA"

```
Create a clean LinkedIn infographic at 1080 x 1350 px. Flat vector illustration.

TOP (12%): White background. Krona One Primary Blue 40pt centered: "THE PATH THROUGH PA". Gray Roboto Italic 18pt centered: "Most members walk the long one."

MAZE (73%): White background with Primary Blue maze walls, 4px stroke. Maze covers center of canvas. Entry labeled "PRESCRIPTION" in Krona One Primary Blue 18pt at bottom-left. Exit labeled "APPROVED" in Krona One Primary Blue 18pt at top-right.

Inside maze, two paths drawn:
- LONG PATH: thin Gray dashed line winding through many dead-ends and turns, passing labels Roboto Bold 14pt Gray: "Initial submission", "Denial", "Appeal", "Clinical review", "Additional documentation", "Peer-to-peer", "Re-submission", "Final approval". Estimated time label in Gray: "11 days average".
- SHORT PATH: thick Accent Blue (#A7E0FA) straight line with single label in Primary Blue Roboto Bold 16pt: "GOLD CARD". Estimated time label: "Same day".

Small icons to mark the two entry points (no detailed illustration, just geometric shapes).

BOTTOM (15%): Primary Blue band. White Krona One 22pt "CONTRACTS SHOULD INCLUDE BOTH PATHS". White Roboto 14pt: "Gold card programs exist. They are just rarely requested."

No logos, no people. Palette strict.
```

---

## Format-to-week mapping

Which visual template best fits each upcoming Monday/Tuesday/Thursday visual slot. Use this as the starting recommendation; swap formats week-to-week if a different metaphor fits the specific angle better.

### Metaphor infographics by week (for Tuesday or Monday visual)

| Week | Monday theme | Recommended metaphor | Why |
|------|--------------|---------------------|-----|
| 18 | Drug Pipeline | Mountain | 18-month pipeline climb, preparation vs reaction |
| 19 | Fiduciary Responsibility | Tree | Fiduciary outcomes grow from documented process |
| 20 | Manufacturer Programs | Iceberg | Visible copay card vs submerged plan cost |
| 21 | Compounding Oversight | Maze | PA path for compounding claims |
| 22 | Biosimilar Strategy | Bridge | Brand to biosimilar, rebate economics to net cost |
| 23 | Mid-Year Claims | Iceberg | Reported metrics vs underlying patterns |
| 24 | H1 Review | Funnel | Pharmacy spend flowing through components |
| 25 | Renewal Countdown | Mountain | 90-day climb to renewal |
| 26 | Formulary Management | Tree | Formulary decisions grow from P&T + rebate roots |
| 27 | PBM Evaluation | Door | Opening the evaluation process |
| 28 | Network Design | Funnel | Channel routing and cost split |
| 29 | Rebate Economics | Iceberg | Reported rebates vs retained margin |
| 30 | Site-of-Care | Bridge | Hospital to home infusion path |
| 31 | PBM RFP | Door | The questions that open the contract |
| 32 | Clinical Program ROI | Funnel | Program spend flowing to actual outcomes |
| 33 | Member Communication | Bridge | From benefit change to member understanding |
| 34 | Specialty Management | Tree | Specialty outcomes rooted in management levers |
| 35 | Renewal Negotiation | Stopwatch | Negotiation windows and response timing |
| 36 | Contract Red Flags | Door | Each flag is a closed door worth opening |
| 37 | Renewal Readiness | Mountain | Summit of the 90-day climb |

### Carousel formats by week (for Tuesday visual, Thursday rotation stays intact)

| Week | Monday theme | Recommended carousel |
|------|--------------|---------------------|
| 25 | Renewal Countdown | Whiteboard carousel (already slated) |
| 27 | PBM Evaluation | Whiteboard carousel (stay-or-switch reasoning) |
| 29 | Rebate Economics | Contract comparison carousel (rebate provisions) |
| 31 | PBM RFP | Whiteboard carousel (RFP question framework) |
| 35 | Renewal Negotiation | Contract comparison carousel (renewal provisions) |
| 36 | Contract Red Flags | Contract comparison carousel (red-flag provisions) |
| 37 | Renewal Readiness | Whiteboard carousel (readiness self-assessment) |

### Thursday evergreen rotation (locked, do not swap)

The Thursday LinkedIn feed visual is already assigned to the 3-slot evergreen rotation (Contract Language Decoder messy infographic, Same/Same/Different carousel, 5 Questions carousel) across weeks 17-37. Prompts for those live inside each week's `Thursday Evergreen Rotation` section in the newsletter bundle files. Do not override Thursday with metaphor infographics; the rotation is designed to protect Thursday from same-topic cannibalization with Monday.

---

## Usage tips

1. **Start with the week file.** Open the newsletter bundle for the relevant week. Look for the "Visual Build Note" under the visual's section if present.
2. **Paste the prompt into Claude design.** Pick Prototype or Slide deck per the project-type guide above.
3. **Plug in content.** Every prompt has [BRACKETED] placeholders. Fill with week-specific content from the newsletter file.
4. **Preview and iterate.** If the render is close but needs tuning, tell Claude "tighten spacing on slide 3" or "make the Accent Blue box larger" rather than starting from scratch.
5. **Export PNG.** Prototype exports single PNG. Slide deck exports PNG set.
6. **Canva for logo overlays and final polish** (only for Substack article headers, not LinkedIn feed).
7. **Upload.**

Each week's newsletter file now includes a "Visual Build Note" callout under the Thursday visual section specifying the recommended format and the Claude design prompt reference. Tuesday visual sections in selected weeks also include build notes.

---

## Clean + Messy Hybrid Formats

Formats that combine precise data (clean, defensible) with handwritten authenticity (stop-scroll, human). Higher production time than base formats (45-60 minutes first use, 20-30 minutes with saved Canva template) but the engagement pay-off is substantial. Consider making one of these a monthly recurring slot.

**Why they work:** The clean element makes the visual credible to sophisticated readers. The messy element signals a real human expert did this work, not a marketing team. Bryce Platt's whiteboard chart format is a reference point here.

**Tool mix for all hybrid formats:**
1. Midjourney or DALL-E for the realistic base surface (whiteboard, corkboard, desk, document)
2. Claude design or a chart tool for clean data rendering
3. Canva to composite and add handwritten annotations using Caveat / Permanent Marker / Kalam fonts

---

## 13. Chart-on-Whiteboard

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a chart on a real-looking whiteboard.

LAYER 1 BACKGROUND: Photorealistic whiteboard photographed straight-on. Gray plastic frame visible. Small tray at bottom with 3-4 dry-erase markers (red, blue, black, green). Slight reflections and marker ghosting.

LAYER 2 TITLE (top 15%): Hand-lettered marker style 60pt black ink: "[TITLE]". One key word highlighted with cyan/Accent Blue (#A7E0FA) rectangle behind the word. One word underlined with red marker, slightly wobbly.

LAYER 3 CHART (middle 60%): Precise bar or line chart with clean axes and values. Axis labels in marker style. Bar segments filled with hand-drawn scribble shading (colored pencil or marker hatching, NOT solid color). Chart colors from: Primary Blue #015880, Accent Blue #A7E0FA, orange-red #E67E22, yellow-green #A7C957, dark teal. Value labels above each bar in marker style. Legend bottom with scribble-filled color boxes.

LAYER 4 ANNOTATION (bottom-left 15%): Hand-drawn marker arrow curving from chart to annotation. Handwritten marker text 18pt black: "[CTA]"

LAYER 5 BYLINE (bottom-right 15%): Small circular headshot. Handwritten marker text two lines: "Ginny Crisp, PharmD" / "CEO, Prescription Benefit Solutions"

Style: all writing imperfect but legible. Marker pressure variation. No computer typography. No logos on the whiteboard.

Plug in: TITLE, HIGHLIGHTED WORD, UNDERLINED WORD, CHART TYPE, AXES, DATA, CTA.
```

**Best use:** Monthly "Data Desk" slot. Data-backed single-metric or multi-metric story.

---

## 14. Sticky Note Dashboard

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a dashboard of sticky notes on a corkboard.

LAYER 1 BACKGROUND: Photorealistic corkboard (natural tan cork texture with some depth and grain). Slight shadow around the edges. Optional: coffee stain ring in one corner, small pushpin hole scatter pattern.

LAYER 2 TITLE: Across the top, a single wider white or yellow sticky note pinned with a red or clear pushpin. Handwritten title in black marker 42pt: "[TITLE]". One key word can be circled in red marker.

LAYER 3 DASHBOARD (middle, 70%): Five or six square or rectangular sticky notes arranged in a 2x3 or 3x2 grid, each a different pastel color (yellow #FFF2B3, light pink #FFD1DC, light blue #B3E0FF, mint #B3F5D1, peach #FFD9B3, lavender #E0C3FF). Each sticky note has a slight tilt (5-10 degrees, different directions) and small shadow. Each note pinned with a small plastic pushpin.

On each sticky note, handwritten in black marker style:
- One large metric number, 52pt, centered top: "[NUMBER]"
- Label below, 16pt, bolded: "[METRIC NAME]"
- Tiny caption below that, 12pt: "[CONTEXT]"

LAYER 4 ANNOTATIONS (between sticky notes): One or two short handwritten notes in pen, 14pt: "[OBSERVATION]" with a small arrow pointing to one of the sticky notes.

LAYER 5 BYLINE (bottom-right): Small handwritten marker line: "From PBS contract reviews / Ginny Crisp, PharmD"

Style: realistic sticky note texture with slightly lifted corners. Pushpin shadows. No computer typography. No logos.

Plug in: TITLE, 5-6 METRICS with number, label, context. 1-2 ANNOTATIONS. BYLINE if needed.
```

**Best use:** 5-metric scorecards (H1 Review Week 24, Renewal Readiness Week 37), quarterly "What We're Seeing" reports.

---

## 15. Marked-Up Contract Page

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a contract page with handwritten annotations.

LAYER 1 BACKGROUND: Photorealistic printed contract page. Slightly off-white paper with subtle texture. Standard legal document typesetting. The paper has a slight angle (2-3 degrees tilted), visible on a dark wood desk surface. Small paperclip visible at top-left corner. Subtle shadow under the page. Optional: a pen resting diagonally across lower-right corner.

LAYER 2 CONTRACT TEXT (center, 70%): Dense typeset contract text in standard serif font, approximately 12pt. Realistic legal paragraph structure with numbered sections and sub-sections. Include the exact phrases to highlight (provided below) naturally within the paragraphs. Sample structural language: "Section 4.2 Pricing. PBM shall provide competitive pricing...", "Section 6.1 Audit. Plan Sponsor may audit PBM records upon reasonable notice...", etc.

LAYER 3 HIGHLIGHTS: Specific weasel phrases highlighted in yellow highlighter marker (slightly uneven strokes), 3-4 highlights total across the page. Phrases to highlight: [PROVIDE].

LAYER 4 MARGIN NOTES: In the left or right margins, handwritten red pen notes in all caps or title case, 16pt, with small arrows pointing from the note to the highlighted phrase. Examples:
- "ASK ABOUT THIS"
- "WHO DEFINES 'REASONABLE'?"
- "NO TEETH"
- "MISSING GUARANTEE"

LAYER 5 HEADER (top 10%): Small handwritten title in red marker 24pt: "[PAGE TITLE, e.g., 'PBM CONTRACT: WHAT TO FLAG']". Optional small red arrow pointing to first highlight.

LAYER 6 BYLINE (bottom 5%): Handwritten Ginny signature and credential, small.

Style: realistic paper texture. Highlighter is not perfectly straight. Red pen has slight pressure variation. No computer annotations. All callouts are handwritten.

Plug in: PAGE TITLE, CONTRACT TEXT body (paragraphs), SPECIFIC PHRASES TO HIGHLIGHT, MARGIN NOTE text for each highlight.
```

**Best use:** Contract Language Library companion visuals. Week 36 Contract Red Flags. Whenever the lesson is "this specific phrase does less than you think."

---

## 16. Annotated Email Screenshot

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a screenshot of a PBM email with handwritten annotations overlaid.

LAYER 1 BACKGROUND: Clean screenshot of an email interface, top-down view. Email interface styled neutrally (not clearly Gmail or Outlook, to avoid branding confusion). White background with subtle gray header. Subject line, From field, Date, and body all visible.

LAYER 2 EMAIL CONTENT:
- Sender: "PBM Account Manager" (generic, no real company)
- Subject: "[SUBJECT LINE, e.g., 'Q2 Rebate Performance Update']"
- Date: a recent date
- Body: three or four short paragraphs of realistic PBM boilerplate language. Include exact weasel phrases to be highlighted. Style: professional, vaguely reassuring, nothing specific. Example fragments: "pleased to report competitive performance", "industry-leading rebate structure", "in line with contractual expectations", "market-appropriate pricing".

LAYER 3 HIGHLIGHTS: 3-4 phrases in the email body highlighted with yellow or cyan (Accent Blue #A7E0FA) marker strokes, slightly uneven.

LAYER 4 HANDWRITTEN ANNOTATIONS: Red marker annotations around and between the email text, hand-drawn arrows pointing to each highlighted phrase. Annotations in handwritten style, 16pt:
- "What does 'competitive' actually mean?"
- "Industry-leading vs market-trailing? No benchmark shown."
- "= unverifiable"
- "Ask for the specific number."

LAYER 5 BORDER/CHROME: The email screenshot sits on a slight angle (2-3 degrees) on a neutral surface. Drop shadow under the screenshot.

LAYER 6 HEADER (top 10%): Small handwritten title in black marker 26pt: "[TITLE, e.g., 'YOUR PBM Q2 EMAIL, DECODED']". Small red arrow pointing to first highlight.

LAYER 7 BYLINE (bottom 5%): Handwritten Ginny signature small.

Style: realistic screenshot with legible pseudo-email. Handwritten overlays only. No computer-set callouts. No real company names or logos.

Plug in: EMAIL SUBJECT, EMAIL BODY, PHRASES TO HIGHLIGHT, ANNOTATIONS for each.
```

**Best use:** "What your PBM sent you vs what it means" posts. Week 20 Manufacturer Programs. Any time the lesson is "their language is designed to look professional and say nothing."

---

## 17. Spreadsheet with Marker Overlay

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a spreadsheet screenshot with handwritten marker annotations.

LAYER 1 BACKGROUND: Clean Excel-style grid interface, top-down. Standard gray header row with column letters A-F or so. Row numbers 1-15. White cells with thin gray borders.

LAYER 2 SPREADSHEET CONTENT:
- Row 1: Column headers (e.g., "Drug", "Q1 Spend", "Q2 Spend", "Q3 Spend", "Q4 Spend", "Total")
- Rows 2-12: Realistic claims data. Drug names should be plausible but generic (e.g., "Specialty Drug A", "Brand Drug B", or use real drug category labels). Dollar amounts across quarters trending in some meaningful pattern (growth, anomaly, decline).
- Row 13: Total row with summed values.

LAYER 3 HIGHLIGHTS: One or two rows highlighted with a pale yellow fill. One specific cell circled in red marker with visible ink variation. One column header underlined with red marker.

LAYER 4 HANDWRITTEN ANNOTATIONS:
- Hand-drawn red arrow pointing to the circled cell with annotation, 14pt marker: "[e.g., '47% growth. Why?']"
- Second annotation pointing to the highlighted row: "[e.g., 'Specialty concentration rising']"
- Optional third annotation at the total row: "[e.g., 'Trend exceeds market benchmark']"

LAYER 5 HEADER (top 10%): Handwritten marker title 26pt: "[TITLE, e.g., 'MID-YEAR CLAIMS DATA: THREE FLAGS']"

LAYER 6 SURFACE: Spreadsheet sits on a slight angle on a neutral desk surface with drop shadow.

LAYER 7 BYLINE (bottom 5%): Handwritten Ginny small.

Style: the spreadsheet grid and data must look clean and precise. The annotations are the ONLY hand-drawn elements. This creates the clean/messy contrast.

Plug in: TITLE, COLUMN HEADERS, ROW DATA (drug names + quarterly values), HIGHLIGHTED ROWS/CELLS, ANNOTATIONS.
```

**Best use:** Week 23 Mid-Year Claims. Week 24 H1 Review. Any post where "the data was telling a story nobody was reading."

---

## 18. Ledger with Handwritten Annotations

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing an accountant's ledger page with handwritten entries and marker annotations.

LAYER 1 BACKGROUND: Photorealistic ledger paper. Yellow-tan lined ledger with thin blue horizontal rules and red vertical column dividers. Standard accountant's ledger proportions. Slight paper texture and edge wear.

LAYER 2 LEDGER CONTENT:
- Column headers in neat handwritten black ink at the top: "[HEADERS, e.g., 'Date | Service | Gross Rebate | PBM Retained | Plan Received']"
- 8-12 rows of entries, all in handwritten pen (black ink, consistent but human). Realistic entries with dollar amounts across columns.
- Totals row at the bottom with double underline in black pen.

LAYER 3 ANNOTATIONS: Red pen margin notes and arrows:
- One column circled in red, arrow pointing to it: "[e.g., 'This column is where the leakage lives']"
- Question marks in the margin next to 2-3 rows: "?"
- One row highlighted with yellow marker: "[e.g., pattern worth flagging]"
- A hand-drawn bracket on the right side grouping several rows with a label: "[e.g., 'Admin fees buried']"

LAYER 4 HEADER (top 10%): Handwritten title at the top in black pen, larger than row entries, 28pt: "[TITLE, e.g., 'WHAT YOUR PBM REPORT ACTUALLY SHOWS']". Optional red underline under one word.

LAYER 5 SURFACE: Ledger sits on a dark wood desk. Small wood-barrel pen resting diagonally on the upper-right corner. Slight shadow.

LAYER 6 BYLINE (bottom 5%): Small handwritten line: "— Ginny Crisp, PharmD"

Style: the ledger itself is tidy handwriting, legible, consistent. The red annotations are more urgent and varied in size. The juxtaposition of tidy ledger + urgent red marker is the point.

Plug in: TITLE, COLUMN HEADERS, ROW DATA, ANNOTATIONS.
```

**Best use:** Week 29 Rebate Economics. Week 11 Hidden PBM Revenue follow-up. Any "follow the money" topic.

---

## 19. Prescription Pad with Annotations

```
Create a LinkedIn infographic at 1080 x 1350 pixels showing a prescription pad with printed and handwritten content plus red annotations.

LAYER 1 BACKGROUND: Photorealistic Rx prescription pad. Standard pad dimensions (roughly 4.5 x 6 inches) scaled up to fill most of the canvas. Pale blue or white paper. Top of pad shows printed letterhead area (generic, no real clinic name): "PATIENT NAME:", "DATE:", "Rx:", "REFILLS:", "SIGNATURE:". Small printed Rx symbol in top-left. Bottom edge of pad slightly curled.

LAYER 2 PRINTED + HANDWRITTEN CONTENT:
- Patient name line filled in handwritten script (generic): "[Member]"
- Date filled in
- Rx line: a drug name (real, common, illustrative), dose, and quantity written in physician script
- Refills line: a number
- Signature line: illegible scrawl

LAYER 3 RED ANNOTATIONS: Red marker hand-drawn arrows from margins pointing to specific elements. Handwritten marker notes in the margins, 16pt:
- "[e.g., 'PA required even though patient stable']"
- "[e.g., 'Prescriber documented. Why a full review?']"
- "[e.g., '11 days to approval']"
Red underline under the drug name. Red circle around the PA requirement or other flag.

LAYER 4 HEADER (top 10%): Handwritten marker title just above the prescription pad in larger text, 32pt: "[TITLE, e.g., 'WHERE PRIOR AUTH BURDEN HURTS']"

LAYER 5 SURFACE: Prescription pad sits on a clean clinical or desk surface. Optional stethoscope or pen visible at edge of frame (suggesting medical setting without being busy).

LAYER 6 BYLINE (bottom 5%): Small handwritten line with Ginny's name and clinical pharmacist credential.

Style: pad and printed text look authentic. Handwritten prescription content looks like real physician handwriting (slightly illegible where appropriate, clearly a drug name). Red annotations are urgent and visible.

Plug in: TITLE, DRUG NAME, MEMBER NAME (generic), ANNOTATIONS.
```

**Best use:** Week 16 Prior Authorization. Week 21 Compounding. Week 32 Clinical Program ROI. Any clinical pharmacy topic where the lesson is about physician/patient friction.

---

## Hybrid format summary and production cost

| Format | Best for | First build | Subsequent builds |
|--------|----------|-------------|-------------------|
| 13. Chart-on-Whiteboard | Data-driven monthly showcase | 60 min | 20-30 min |
| 14. Sticky Note Dashboard | 5-metric scorecards | 45 min | 15-20 min |
| 15. Marked-Up Contract Page | Contract language lessons | 60 min | 30-40 min |
| 16. Annotated Email Screenshot | PBM language decode | 45 min | 20-25 min |
| 17. Spreadsheet with Marker Overlay | Claims data stories | 50 min | 20-30 min |
| 18. Ledger with Annotations | Follow-the-money topics | 60 min | 25-35 min |
| 19. Prescription Pad with Annotations | Clinical/PA friction | 45 min | 20-25 min |

**Strategic note:** These are higher production cost per piece than the base formats, but they produce the highest engagement and the most "save" behavior. Rotate one hybrid format per month (not per week) to keep the effort sustainable.

---

## Recommended hybrid format monthly rotation

Consider running one hybrid format per month as a signature Tuesday or Thursday visual:

| Month | Format | Week | Topic |
|-------|--------|------|-------|
| May | Chart-on-Whiteboard | 18 | Drug pipeline spend projections 2026-2027 |
| June | Spreadsheet + Marker | 23 | Mid-year claims data patterns |
| July | Sticky Note Dashboard | 24 | H1 review five metrics |
| August | Annotated Email | 27 | "Your renewal email decoded" |
| September | Ledger + Annotations | 29 | Rebate retention visualization |
| October | Marked-Up Contract Page | 31 | RFP question-by-question markup |
| November | Sticky Note Dashboard | 34 | Specialty management factors |
| December | Marked-Up Contract Page | 36 | Contract red flags with margin notes |
