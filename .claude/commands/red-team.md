---
description: Adversarial pre-publish review for high-stakes public assets (Index, Fine Print Awards, Standards, findings guarantee, paid ads, proof claims, case studies, Potter pieces). Attacks the draft the way a PBM lawyer, a broker partner, a compliance reviewer, and a hostile journalist would. Run BEFORE anything in this class publishes; the monthly critique sweep auto-runs it on changed high-stakes files.
allowed-tools: Bash, Read, Grep, Glob, Edit
---

You are attacking a draft, not improving it. Target = `$ARGUMENTS` (file path). Produce findings ranked by severity; apply ONLY mechanical fixes (a guardrail phrase, a naming-rule violation); everything judgment-level is FLAGGED, never silently rewritten. **High-stakes class:** anything scoring/naming PBMs (Index, Awards), any fee/guarantee/results claim, the Standards, ads, case studies, Potter pieces, comment letters.

Run all six attacks:

## Attack 1 — The PBM counsel read (defamation/disparagement)
Could any sentence be characterized as a false statement of fact about a named company? Checks: every named-company claim is either (a) sourced to a public record/filing (cite in-text or in the verify block), (b) framed as PBS's direct professional observation of contract language patterns, or (c) opinion clearly stated as opinion. Aggregate patterns beat single-company accusations; "the contracts we review" beats "Company X does." Scores/awards: methodology-published, corpus-public, n-thresholds respected (no PBM-level claims below the stated n).

## Attack 2 — The compliance/guardrail sweep (mechanical; fix in place)
The 2025-metrics rules: $78.7M is CONTRACTED (never conflated with $86.7M identified); 25% is the RFP rate, never "average"; PBS claims solo; identified-vs-contracted never mixed in one breath with the guarantee. Disclaimer present where dollar figures are actionable. No fabricated statistics (every number traces to a source or the engagement record). Naming rule (spell out Prescription Benefit Solutions in public copy). No em-dash separators. Anonymization: no detail-combination that identifies a client (industry + size + geography together = fail); no employer named or gradeable in Index/Awards commentary.

## Attack 3 — The broker-partner read
Would ANY broker (Hylant first) reading this feel blamed, bypassed, or exposed? The tripwire: implying a broker missed something. Structural framing ("the specialty is the gap") passes; competence framing fails. Broker-owned-competitor contrast: stated as what PBS IS, never who the competitor is owned by in an attacking register.

## Attack 4 — The hostile journalist read
What is the least charitable accurate headline this draft supports? If that headline is about PBS ("consultant guarantees savings," "firm grades customers' contracts"), the framing needs work before the substance does. Check the guarantee/pricing language cannot be quoted to promise outcomes ("identifies opportunities" not "saves you").

## Attack 5 — The regulator/legal-instrument check (Potter pieces, comment letters, Standards)
Every named statute, rule, docket, agency authority: is the characterization accurate and current? (Feed uncertain items to `/verify-fact`.) Prescriptions ask for things the named regulator can actually do.

## Attack 6 — The backfire scan
If this succeeds and gets attention: what is the counterattack, and does the draft preempt it? (Index → "biased methodology": is reproducibility airtight? Guarantee → "gimmick": is the basis sentence attached everywhere? Awards → "unprofessional": is every entry precise and sourced?)

## Output
A findings table (severity CRITICAL/HIGH/NOTE · location · attack # · the sentence · the fix or the flag), mechanical fixes applied in place with a one-line log, judgment items written to the draft's header as `⚠ RED-TEAM:` lines plus OPEN_ITEMS if publication-blocking. Verdict line: CLEAR TO PUBLISH / CLEAR AFTER FLAGS RESOLVED / DO NOT PUBLISH (with the one reason). Never soften substance to duck controversy: the brand is precise confrontation; the red team removes recklessness, not teeth.
