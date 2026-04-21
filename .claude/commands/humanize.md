---
description: Rewrite a PBS draft in place to pass the Humanize Check from CLAUDE.md
argument-hint: <file-path>
allowed-tools: Read, Edit, Write, Grep
---

You are running the PBS Humanize pass on a draft article.

**Target file:** $ARGUMENTS

If no path was passed, stop and ask the user which draft to humanize.

## Step 1. Load rules and draft

1. Read `CLAUDE.md` in the project root. Locate the "Humanize Check" section under Critical Rules, and note the rules for em dashes, fabricated statistics, company name (PBS, never RXBS), CEO attribution (Ginny Crisp, PharmD, never "Dr. Ginny Crisp"), and broker framing (partners, not missed-something).
2. Read the draft at `$ARGUMENTS`.

## Step 2. Flag violations

Scan for every instance of the items below. Record what you find; do not rewrite yet.

**AI-tell blacklist (remove or rewrite):**
- "Here's the thing"
- "The truth is"
- "Most people don't realize"
- "paradigm"
- "game-changer"
- "at the end of the day"
- "It's important to note"
- "Let's dive in"
- "navigating" or "navigate" as a verb
- "leverage" as a verb
- "holistic"
- "robust"
- "comprehensive"
- "key takeaways"
- "actionable insights"
- "It's not X. It's Y." patterns that use em dashes
- Excessive mid-paragraph bolding
- Three or more parallel list structures stacked in a row

**Brand rule violations:**
- "RXBS" anywhere (replace with "PBS" or "Prescription Benefit Solutions")
- "Dr. Ginny Crisp" (replace with "Ginny Crisp, PharmD")
- Em dashes or " - " used as sentence separators (replace with commas, colons, semicolons, periods, or parentheses). Compound-word hyphens like "self-funded" and "cost-plus" stay. Label hyphens like "Slide 1 - Cover" stay.
- Fabricated statistics or invented dollar figures (replace with "significant," "substantial," or "meaningful," or cite a sourced number)
- Broker criticism or "your broker missed this" framing (reframe so brokers are partners flagging the gap and the PBM is the structural adversary)

**Structural checks:**
- Rhythmic short-long-short cadence across three or more consecutive sentences. Break the pattern with an arrhythmic rewrite.
- Two or more LinkedIn formulas stacked in one post. The four formulas are: Setup/reveal ("Most people think X. They're actually Y."), Rule of three ("The same X. The same Y. The same Z."), Contrast pivot ("Different X. Different Y. Same Z."), Negation reveal ("That's not X. It's Y."). Keep one. Rewrite the others as narrative.

## Step 3. Confirm one unfakeable anchor

The draft must contain at least one line only PBS could have written. Acceptable anchors:
- A specific contract section reference (e.g., "§5.03")
- A named drug or drug class tied to a specific scenario
- A dated reference ("last quarter," "this week")
- A proprietary-volume line ("We review approximately 100 PBM contracts annually," "This phrase appears in most of them")
- A clinical pharmacy scene moment ("the room went quiet")
- A pharmacist-origin moment tied to a specific career event

If no anchor is present, add one that is consistent with facts already established in CLAUDE.md. Do not fabricate new statistics, clients, or dollar figures.

## Step 4. Rewrite in place

Apply each fix with the Edit tool. When a section needs larger restructuring, rewrite it to sound like a clinical pharmacist with an opinion, not a news aggregator.

Preserve:
- The draft's thesis and story selection
- Factual claims already present (do not invent news)
- The "Status: DRAFT" header if present
- Markdown structure, section headers, article meta, and image prompt
- Direct quotes and source citations

## Step 5. Post-pass report

After editing, print a short plaintext report:
- Count of AI-tell phrases removed, with the original phrases listed
- Count of brand-rule violations fixed (em dashes, RXBS, Dr. Ginny, etc.)
- Confirmation that an unfakeable anchor is present, quoted verbatim
- Any violations left unfixed because fixing them would alter factual content (flag for human review, do not guess)

Do not commit. Let the human review the diff first.
