---
description: The fact-verification protocol for anything PBS publishes with external claims (Potter pieces at submission week, shocking-fact bank entries, Index claims, ad copy, comment letters). Encodes the source hierarchy and what counts as confirmed vs attributed vs kill. Run on a file's verify-flag list or on a single claim.
allowed-tools: Bash, Read, Grep, Glob, Edit, WebSearch, WebFetch
---

Target = `$ARGUMENTS` (a file with a "Verify before submission" block, or a single claim in quotes). For each claim, run the protocol and stamp the result.

## The source hierarchy (evidence quality, descending — always cite the highest rung you can reach)
1. **Primary documents:** the statute/rule text (federal register, CMS/FTC dockets), SEC filings, court filings, the company's own announcement, the contract language itself.
2. **Agency/official publications:** FTC reports, CMS fact sheets, state insurance department notices, NCUA/GSC-style datasets.
3. **Expert trade press of record:** Drug Channels, NASHP tracking, established legal analyses (Mintz/Frier Levitt-class firm alerts).
4. **General/trade news:** acceptable for existence-of-event, weak for numbers.
5. **Aggregators/blogs/AI summaries:** never sufficient alone.

## Verdicts (stamp one per claim, in the file)
- **✅ VERIFIED (rung 1-2):** state it plainly in the piece. Log source + date checked next to the claim in the header block.
- **🟡 ATTRIBUTED (rung 3-4 only):** the piece must carry the attribution in-text ("according to [source]") or soften to structural characterization (no number). Never state a rung-3/4 number as bare fact.
- **🔶 MOVED:** the fact was true but changed (a price cut's effective date shifted, a bill died/passed). Update the claim to current state; re-run the piece's surrounding logic (does the argument still hold?). Flag if the argument itself needs Ginny.
- **❌ UNVERIFIABLE / CONTRADICTED:** kill the claim. Replace with structural language that needs no external fact, or cut the passage. NEVER leave it in hoping nobody checks; never "approximately" your way around a dead number.

## Protocol notes
- **Numbers get the strictest treatment:** a number requires rung 1-2 or in-text attribution, no exceptions (the no-fabricated-stats rule extends to un-verifiable real-sounding numbers).
- **Time-sensitive claims re-verify at USE, not at drafting.** A Potter piece verified at draft is re-verified the week it is submitted (regulatory states, dockets, announced-but-not-effective changes are the usual movers).
- **Search discipline:** check the primary source FIRST (the docket, the filing, the company newsroom) before news search; two independent rung-3 sources do not sum to a rung-2.
- **PBS's own practice claims** ("in the contracts we review") are not externally verifiable by design; check them against the anchor bank + metrics guardrails instead, and confirm they claim observation, not statistics.
- **The fact bank:** when verifying `shocking_fact_bank.md` entries, also refresh the entry's citation + last-verified date (the system-audit relies on it).

## Output
Per claim: verdict, source (URL + what it is), date checked, and the in-file edit made (stamp or rewrite). Summary table at the end. Anything ❌ or 🔶-with-argument-impact also goes to the file header as a flag for Ginny. If the target is a Potter piece, finish by confirming the header's verify block is fully stamped; an unstamped claim = the piece is not submission-ready.
