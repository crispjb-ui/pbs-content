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
