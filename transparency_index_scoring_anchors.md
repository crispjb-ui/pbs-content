# Transparency Index — Scoring Anchors v1 (the graded examples that make scoring reproducible)

**Created:** July 6, 2026, as the execution companion to `transparency_index_methodology.md` §3. This is the artifact that lets two analysts (or any model) score the same contract the same way: for each of the five dimensions, real-pattern example language for every score level. **Anchor language below is representative of the patterns PBS reviews and the Contract Language Library documents; during the Nov-Dec corpus pass, analysts REPLACE each anchor with a verbatim clause from the public corpus (cited), which makes the published guide fully reproducible.** Scoring rule of thumb everywhere: **2 = the plan can verify and act without the PBM's permission; 1 = the right exists but the PBM holds a key; 0 = the language forecloses or omits it.**

**Process reminders (from the methodology):** two analysts score independently → divergences reconciled by the pharmacist reviewer → Ginny signs. Score what the WORDS do, not what the vendor intends; when torn between two scores, ask "who holds the key?" Partial exhibits score only the dimensions their text supports (flag `partial`).

---

## Dimension 1 — Definitional integrity (do the definitions preserve or carve out value?)

**Score 2 — definitions align with independent references and close the gaps:**
> "Rebates" means any and all compensation or remuneration of any kind received by PBM or any affiliate, subsidiary, or contracted intermediary from any pharmaceutical manufacturer in connection with Plan utilization, including without limitation formulary payments, administrative fees, data fees, price protection payments, and inflation payments.
Markers: "any and all," affiliates/intermediaries included, an inclusive enumerated list with "without limitation," terms defined by external reference (e.g., generic status by FDA Orange Book) rather than PBM designation.

**Score 1 — defined, but the PBM keeps a lever:**
> "Rebates" means retrospective rebates received by PBM from manufacturers pursuant to formulary rebate agreements, excluding bona fide service fees and administrative compensation.
Markers: a real definition with named exclusions; or key categories (brand/generic/specialty) defined "as designated by PBM's standard classification, applied consistently."

**Score 0 — circular, absent, or PBM-discretionary:**
> "Rebates" means amounts characterized as rebates under PBM's rebate agreements. / "Specialty Drugs" means those drugs identified on PBM's Specialty Drug List, as amended by PBM from time to time.
Markers: the definition points back to the PBM's own paper; unilateral amendment "from time to time"; a money term used but never defined.

## Dimension 2 — Pricing-guarantee verifiability (could the plan recompute the guarantee?)

**Score 2:**
> The guaranteed discounts shall be measured against [named benchmark] as published by [named source] on the date of adjudication; the exclusions from the guarantee calculation are limited to those enumerated in Exhibit C; PBM shall provide, upon request, claim-level data sufficient for Plan Sponsor or its designee to independently reconcile guarantee performance, with any shortfall paid at 100% within 60 days.
Markers: named benchmark + source + timing, closed exclusion list, claim-level reconciliation data as a right, dollar-for-dollar true-up with a deadline.

**Score 1:**
> PBM guarantees an overall effective discount of [X]% measured across all claim types in the aggregate, reconciled annually against PBM's books and records; exclusions include, but are not limited to, those set forth in Exhibit C.
Markers: real guarantee but aggregate/blended measurement (offsetting between categories), open-ended exclusions ("but not limited to"), reconciliation from the PBM's records without an independent-data right.

**Score 0:**
> PBM shall use commercially reasonable efforts to achieve competitive pricing. / Guarantee reconciliation shall be performed by PBM, whose determination shall be final.
Markers: efforts language instead of numbers; the graded party grades itself, finally.

## Dimension 3 — Rebate transparency (does the money's path show?)

**Score 2:**
> PBM shall pass through to Plan Sponsor 100% of all Rebates (as inclusively defined) received by PBM or any affiliate or intermediary, disclose the identity and ownership of any rebate aggregator or group purchasing organization in the flow, and provide reporting sufficient to trace amounts received from manufacturers to amounts credited to the Plan, subject to audit under Section [X].
Markers: 100% of the INCLUSIVE definition, intermediaries disclosed by name and ownership, manufacturer-to-plan traceability, audit hook.

**Score 1:**
> PBM shall pass through 100% of Rebates received by PBM. Guaranteed minimum rebates of $[X] per brand claim shall apply.
Markers: honest pass-through of a NARROW definition (the aggregator layer sits outside "received by PBM"), or a per-claim minimum standing in for flow transparency; no intermediary disclosure.

**Score 0:**
> Plan Sponsor acknowledges that PBM retains compensation from manufacturers as part of PBM's overall compensation, in amounts not required to be disclosed.
Markers: retention acknowledged and undisclosed; or rebate terms wholly absent from the operative agreement.

## Dimension 4 — Audit rights (real flashlight or ceremonial one?)

**Score 2:**
> Plan Sponsor may, through an independent auditor of its choosing, audit claims, rebate calculations, and guarantee performance covering the preceding 24 months, no more than annually, upon 30 days' notice; PBM shall provide standard-format claim-level extracts within 30 days; the cost of the audit shall be borne by Plan Sponsor except that PBM shall bear it if findings exceed 2% of audited amounts.
Markers: plan-selected auditor, look-back ≥18 months, notice ≤30-45 days, standardized extracts with a delivery clock, no PBM veto, findings-shift on fees.

**Score 1:**
> Plan Sponsor may audit once per contract year through a mutually agreed independent auditor, upon 90 days' notice, covering the preceding 12 months; auditor shall execute PBM's standard confidentiality agreement; rebate agreements may be reviewed on-site in summary form.
Markers: the right exists but the PBM holds keys: mutual-agreement (veto) on the auditor, 90-day notice, ≤12-month window, summary-only or on-site-only data.

**Score 0:**
> Any audit shall be conducted by a firm from PBM's approved auditor list, at Plan Sponsor's expense, limited to a sample of claims selected in consultation with PBM, no more than once during the Term.
Markers: PBM-approved auditor lists, sampling control, once-per-term, or audit rights absent.

## Dimension 5 — Exit freedom (can the plan actually leave?)

**Score 2:**
> Plan Sponsor may terminate this Agreement without cause upon 90 days' written notice. Upon termination, PBM shall provide standard-format claims history and open prior-authorization files within 30 days at no charge, shall continue paying earned Rebates attributable to pre-termination claims as received, and shall reasonably cooperate with the successor administrator.
Markers: termination for convenience ≤90-120 days, free standard-format data return with a clock, post-termination rebate tail paid, transition cooperation.

**Score 1:**
> Either party may terminate without cause upon 180 days' notice, effective only as of the end of a contract year. De-implementation services shall be provided at PBM's then-current rates. Rebates attributable to the final two quarters shall be forfeited if termination occurs mid-year.
Markers: convenience exit exists but with long notice, year-end-only effectiveness, priced de-implementation, partial rebate forfeiture.

**Score 0:**
> This Agreement shall automatically renew for successive three-year terms unless notice is given not less than 270 days prior to expiration. Termination for convenience is not permitted during any Term. Upon any termination, all unpaid Rebates shall be forfeited and PBM's data extract fees shall apply.
Markers: no convenience exit, long auto-renew cliffs, rebate forfeiture as an exit tax, priced data ransom.

---

## Worked scoring discipline (apply to every contract)
- Score from the operative agreement + exhibits only; marketing/summary documents never count.
- A protective clause elsewhere contradicted by an exhibit scores the WORSE reading (the exhibit is where the money is).
- Record the pincite (page/section) for every score; the published guide quotes one verbatim anchor per level per dimension from the corpus.
- Inter-rater divergence of 1 point → pharmacist reconciles; divergence of 2 points → the anchor language above is ambiguous and gets refined (log it; the anchors version-bump with the Index).
