---
description: Turn a closeout-kit win-story capture (case_studies/*.md) into a publishable case study for the /results page, proposals, and the briefing deck — through the anonymization, permission, and broker-hero gates. The proof engine's publishing step.
allowed-tools: Bash, Read, Write, Edit, Grep, Glob
---

Target = `$ARGUMENTS` (a capture file in `case_studies/`). The capture template + compliance rules live in `engagement_closeout_kit.md`; read it first.

## Gate 0 — Permission state (hard stop)
Read the capture's `Permission status` field. `NONE` → you may draft an INTERNAL-ONLY version (marked in the header) for pattern-library use; nothing publishable is produced. `ANONYMIZED-OK` → proceed anonymized. `NAMED-OK` → proceed, still defaulting to anonymized on the site unless the named use is specifically planned (a named logo is spent once; Ginny chooses where).

## Step 1 — The identifiability test (stricter than it feels)
The published profile is industry + size band ONLY. Kill any combination that triangulates: industry + size + geography = fail; a unique detail ("the county's only teaching hospital") = fail; timing that maps to a public event = fail. Rewrite details one level more generic than feels necessary. Test: could a competitor, a broker in that market, or the client's PBM recognize them? If plausibly yes, generalize again.

## Step 2 — The numbers gate
Only figures from the capture's verified fields; label identified vs contracted exactly (the standing guardrail); round to the level the engagement record supports; the illustrative-example disclaimer if readers could act on the numbers as their own. No composite/blended numbers across engagements presented as one client.

## Step 3 — The broker-hero pass
If a broker was in the engagement: they brought PBS in, or they are absent. Never a subtext of "the broker missed this" (the fix when tempted: the SPECIALTY is the gap, not the person). If the story cannot be told without that subtext, it is not publishable; mark it internal.

## Step 4 — Write it (the house shape, ~250-400 words)
1. **The situation** (2-3 sentences: profile, the trigger — renewal, board question, cost trend).
2. **What the review found** (the 2-3 specific mechanics, each in one plain sentence; §-references generalized).
3. **The outcome** (the verified number + what the client did + the Fiduciary File line).
4. **The quote** (if the capture has a permissioned one; title-attributed per its permission level).
Register: the Field Note voice (practical, first-person-plural, zero triumphalism). Title pattern: "How a [profile] found [outcome-class] in [mechanic-class]."

## Step 5 — Route + red-team
Save as `case_studies/published/{slug}.md` with a header (source capture, permission state + date, where it deploys). Run `/red-team` on it (case studies are high-stakes class). Then slot per the closeout kit's payoff table: /results page block, proposal library, briefing deck, broker kit (broker-involved stories only). Update the capture file's status. Commit per the branch workflow.
