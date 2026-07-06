# The PBM Contract Transparency Index — methodology v1 (execution-ready)

**Status:** ready for Ginny's scope approval (Decision #11) and counsel review of the publication rules. Analysts execute the corpus build Nov-Dec 2026; publishes mid-January 2027 with the Fine Print Awards. This is the flagship data asset's mature form: an annual, versioned, methodology-published index that makes Prescription Benefit Solutions the market's referee on PBM contract transparency.

## 1. The defensibility architecture (why this corpus)

The Index scores **publicly procured PBM contracts**: agreements between PBMs and public employers (states, counties, cities, school systems, public universities, utilities) obtained from procurement portals, board packets, and public-records requests. Public documents mean no client confidentiality is touched, every scored clause can be quoted verbatim with a citation, and any reader can verify any score. PBS's private-side experience ("across hundreds of reviews we see...") appears only as aggregate commentary, never as scored data. This separation is the legal spine: **scores come from public paper; color comes from practice.**

## 2. Corpus rules

- **Target: 40-60 contracts** for v1 (enough for pattern claims; analysts' capacity-realistic). Balanced across the big-three PBMs plus a mid-market/transparent-PBM comparison set; mixed plan sizes and regions; agreements executed or amended within ~5 years.
- **Sourcing order:** state procurement portals and comptroller contract databases → county/city board packets (agreements ride as exhibits) → public-university systems → targeted public-records requests to fill PBM/size gaps (admin can file these; most states answer in weeks).
- **Inclusion:** the operative agreement including pricing exhibits and definitions. Exclusions logged with reasons (RFP-only documents, heavily redacted pricing exhibits score only the dimensions their text supports, flagged as partial).
- Every contract gets an ID, source URL/request record, PBM, effective date, and lives-covered estimate. The corpus list publishes with the Index.

## 3. Scoring dimensions (five, 0-2 each, 10-point scale)

Each dimension scores on written, quotable criteria. 2 = protective/transparent language present; 1 = partial or conditioned; 0 = absent, vague, or PBM-favorable. The scoring guide with verbatim example language for every level publishes as an appendix (this is also what makes the Index reproducible, the academic-credibility requirement).

1. **Definitional integrity.** Do the definitions of generic, brand, specialty, rebate, and claim align with industry-standard references, or do they carve value out before guarantees apply? (The Contract Language Library's weak/strong pairs are the scoring anchors.)
2. **Pricing-guarantee verifiability.** Can the guarantee be independently recomputed from the contract's own terms: stated benchmark, stated exclusions, reconciliation rights, penalty for miss?
3. **Rebate transparency.** Full-value pass-through language vs. defined-subset pass-through; disclosure of aggregator/GPO intermediaries; audit rights over rebate reporting.
4. **Audit rights.** Auditor choice, scope, frequency, data access, and cost allocation; or the illusory version (PBM-approved auditor, 90-day windows, sampled claims only).
5. **Exit freedom.** Termination for convenience, notice length, run-out terms, data return, and de-implementation cooperation; or the lock-in version.

**Scoring process:** two analysts score independently against the guide → divergences reconciled by the pharmacist reviewer → Ginny signs the final sheet. Inter-rater agreement is reported in the methodology (that one number buys enormous credibility).

## 4. What publishes (and the naming rules, counsel-reviewed)

- **The distribution, not a league table of employers:** score histograms overall and by dimension; PBM-level medians ONLY where n≥[8] contracts per PBM (below threshold, grouped as "other"). **Employers are never graded or named in commentary** (their contracts are cited as sources, as public records are; the finding is about the PBM-drafted language, and the no-ambulance-chasing rule from the blueprint governs).
- **The headline stat pattern** (each year's edition leads with one): "X% of public PBM contracts reviewed contain no independently verifiable pricing guarantee."
- **Verbatim exhibits:** the strongest and weakest real clauses per dimension, quoted with citations; this section IS the Fine Print Awards' raw material.
- **The methodology + scoring guide + corpus list,** in full. Reproducibility is the moat: critics who re-score become distributors.
- **Formats:** rxbs.org canonical page (Dataset + Article JSON-LD) · 8-10 page PDF in the toolkit system · Substack edition · press one-pager for the journalists' data desk.

## 5. Timeline + owners

| When | What | Who |
|---|---|---|
| Oct 1 ⏱ | Scope + dimensions approved; counsel reads §4 rules | Ginny |
| Oct-Nov | Corpus sourcing (portals first, records requests early — they are the long pole) | Analysts + admin |
| Nov-Dec | Scoring passes + reconciliation | Analysts + pharmacist |
| Early Jan | Findings narrative, Awards selection, design | Ginny + Brett + Claude |
| Mid-Jan ⏱ | Publish (peak engagement window); data desk opens; briefing #2 presents it | All |

## 6. The Fine Print Awards (companion, same publish)

Categories drawn from the verbatim exhibits, anonymized to the language itself (no employer names; PBM attribution only where the same clause appears across enough contracts to be a practice, not an incident). Tone: dry, precise, devastating — "Best Definition of 'Rebate' That Excludes Most Rebates." 4-6 awards maximum; every entry passes Ginny's comfort test and counsel's read. The Awards exist to make the Index quotable at parties; the Index exists to make the Awards defensible in depositions.

## 7. v2+ (so v1 stays small)

Year-over-year deltas ("did public contracts get more transparent?") · state-law overlay (do state PBM reforms show up in the paper?) · the peer-reviewed paper (blueprint 2.2) built on the same corpus · private-side blind benchmarking via the Benchmark Co-op. None of this is v1's problem.
