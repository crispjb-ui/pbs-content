# PBM Glossary — Canonical Term Definitions

> **Purpose.** Single source of truth for technical-term definitions used across Plan Sponsor Toolkit handouts in `templates/documents/`. Each toolkit pulls its relevant subset of these definitions into a compact "Terms used" callout (Option A+ pattern: inline parenthetical on first use, optional callout block under the subtitle if space permits). Future toolkit builds and updates pull from this file rather than re-deriving definitions, keeping language consistent across the library.
>
> **Update workflow.** When a new term comes up that isn't in this file, add it here first (full definition + initial "Used in" entry), then use it in the toolkit. When a definition is refined, update here and propagate to every toolkit listed under "Used in" for that term.
>
> **Format pattern in toolkits.** Definitions appear in compact form: *Term* = brief definition. The full definitions in this file may be longer; toolkits compress to a single line each in the callout. The page 2 variant (when space allows for a full glossary block) uses the fuller wording below.

---

## Net cost per script

**Definition:** What your plan actually pays for a single prescription after AWP discount, dispensing fee, and any rebate allocation. Not the AWP "list" price the PBM may quote. The figure that affects your annual plan spend.

**Compact form for callouts:** *Net cost* = what your plan actually pays per script after AWP discount, dispensing fee, and rebate allocation.

**Used in:** W18 Channel Pricing, W20 Thu Rebate Report, W22 Biosimilar Readiness, W25 Thu RFP Scoring

---

## AWP (Average Wholesale Price)

**Definition:** A published reference price for a drug, maintained by data sources like Medi-Span or First Databank. PBM pricing guarantees are typically expressed as a percentage discount off AWP (e.g., "AWP minus 18%"). AWP is not a real transaction price; it's a reference rate. The actual cost to your plan depends on the specific AWP source the contract names and how frequently it's updated.

**Compact form for callouts:** *AWP* = Average Wholesale Price, a published reference rate PBM discount guarantees are expressed against.

**Used in:** W18 Channel Pricing, W24 H1 Renewal Readiness, W28 Thu GER Audit, W36 Thu Definition Variance

---

## MAC (Maximum Allowable Cost)

**Definition:** A PBM-set ceiling price for what the plan pays on generic dispensing. The PBM publishes the MAC list, updates it, and controls which generics make the list and which do not. Two PBMs can set different MAC prices for the same generic drug.

**Compact form for callouts:** *MAC* = Maximum Allowable Cost, a PBM-set ceiling for generic reimbursement.

**Used in:** W25 Thu RFP Scoring, W28 Thu GER Audit

---

## WAC (Wholesale Acquisition Cost)

**Definition:** The manufacturer's published list price to wholesalers, before any rebates, discounts, or secondary economics. Closer to a real market reference than AWP but still not a final transaction price.

**Compact form for callouts:** *WAC* = Wholesale Acquisition Cost, the manufacturer's published list price to wholesalers (pre-rebate, pre-discount).

**Used in:** (none currently — included for future use)

---

## GER (Generic Effective Rate)

**Definition:** A negotiated percentage discount off AWP for generic dispensing, measured at the aggregate plan level over a period (typically quarterly or annually). The contract states a minimum GER (e.g., "AWP minus 87%") that the PBM must hit; if performance falls short, remediation kicks in if the contract has true-up language.

**Compact form for callouts:** *GER* = Generic Effective Rate, the negotiated minimum percentage discount off AWP for generics.

**Used in:** W18 Channel Pricing, evergreen Contract Review Readiness, evergreen Optimize vs Go-to-Market, evergreen PBR Framework, W23 Thu Midyear Claims, W24 H1 Renewal Readiness, W24 Thu Contract Amendment Letter, W28 Thu GER Audit, W34 Thu Midyear Guarantee, W36 Thu Definition Variance, W37 Thu Pre-Meeting Renewal

---

## Dispensing fee

**Definition:** A flat fee the PBM charges the plan per script, in addition to the ingredient cost of the drug. Typical ranges: $0.50-$3.00 per retail script, $0-$1.00 per mail-order script, $0 to a flat dispensing rate for specialty (often built into the specialty channel's separate pricing methodology).

**Compact form for callouts:** *Dispensing fee* = a flat per-script administrative fee the PBM charges in addition to ingredient cost.

**Used in:** W18 Channel Pricing, W29 Thu Network Configuration, W34 Thu Midyear Guarantee, W37 Thu Pre-Meeting Renewal

---

## Ingredient cost

**Definition:** The PBM's charge to the plan for the drug itself, before dispensing fee. Calculated as AWP minus the contracted discount percentage for that drug category and channel.

**Compact form for callouts:** *Ingredient cost* = the PBM's charge for the drug itself (AWP minus contracted discount), before dispensing fee.

**Used in:** W28 Thu GER Audit

---

## Rebate (passthrough, guarantee, allocation)

**Definition:** Manufacturer payments to the PBM in connection with plan utilization. The contract specifies what percentage of rebates flow back to the plan (passthrough percentage) and may include a per-script minimum (rebate guarantee). The rebate the plan actually receives depends on how the contract defines "eligible" rebate revenue — many contracts exclude administrative fees, market-share payments, and other manufacturer compensation categories from the passthrough definition.

**Compact form for callouts:** *Rebate passthrough* = the percentage of manufacturer rebates the contract requires the PBM to pass through to the plan. The actual amount depends on how "rebate" is defined in the contract.

**Used in:** W19 Fiduciary Documentation, W20 Thu Rebate Report

---

## Spread pricing

**Definition:** When the PBM charges the plan more for a drug than it pays the dispensing pharmacy, and retains the difference. "Aggregate pricing" guarantees (which measure pricing performance across the entire book of business rather than per claim) typically permit spread pricing; "pass-through pricing" guarantees prohibit it. The contract's pricing-methodology section determines which model applies.

**Compact form for callouts:** *Spread pricing* = when the PBM charges the plan more than it pays the dispensing pharmacy and keeps the difference. Allowed under aggregate guarantees; prohibited under pass-through guarantees.

**Used in:** W27 Thu PBM Compensation

---

## Variance band

**Definition:** A color-coded range (green / yellow / red on the worksheet) showing how far apart the highest-channel net cost is from the lowest-channel net cost for the same drug. Specific thresholds defined inside each worksheet that uses this concept.

**Compact form for callouts:** *Variance band* = traffic-light range on the worksheet showing per-channel spread. Defined on page 2.

**Used in:** W18 Channel Pricing

---

## Formulary tier

**Definition:** The coverage level the PBM assigns to a drug on the formulary (typically Tier 1 generic preferred, Tier 2 brand preferred, Tier 3 non-preferred, Tier 4 specialty). Tier placement affects member cost-share and influences utilization patterns. Drugs can move between tiers, and the contract typically gives the PBM authority over tier changes with limited plan-sponsor approval rights.

**Compact form for callouts:** *Formulary tier* = the coverage level the PBM assigns to a drug, affecting member cost-share and utilization.

**Used in:** W18 Channel Pricing, W22 Biosimilar Readiness

---

## Step therapy

**Definition:** A utilization-management protocol that requires a member to try and fail one or more lower-cost or preferred drugs before the PBM will approve coverage of a higher-cost or non-preferred drug. The contract specifies which drug classes are subject to step therapy and the override criteria.

**Compact form for callouts:** *Step therapy* = a protocol requiring members to try lower-cost or preferred drugs before the PBM approves higher-cost alternatives.

**Used in:** W18 Drug Pipeline, W22 Thu Specialty Routing, W26 Thu Step Therapy Override

---

## Prior authorization (PA)

**Definition:** A utilization-management protocol that requires the prescribing physician to submit clinical justification and receive PBM approval before the plan covers a specific drug. PBM PA criteria may be based on published clinical guidelines or on PBM-proprietary criteria; the contract typically gives the PBM authority over criteria selection.

**Compact form for callouts:** *Prior authorization (PA)* = a protocol requiring the prescriber to obtain PBM approval before the plan covers a drug.

**Used in:** W18 Drug Pipeline, W23 Thu Midyear Claims, W26 Thu Step Therapy Override, W33 Thu Member Transition

---

## Specialty pharmacy

**Definition:** A pharmacy that dispenses high-cost specialty drugs (typically injectables, biologics, oral oncology, immunology). Most PBM contracts route specialty claims to a PBM-owned or PBM-affiliated specialty pharmacy. The plan sponsor may or may not have visibility into the pricing spread between what the specialty pharmacy pays for the drug and what the plan pays.

**Compact form for callouts:** *Specialty pharmacy* = the pharmacy that dispenses high-cost specialty drugs; PBM contracts typically route to a PBM-owned or affiliated specialty pharmacy.

**Used in:** W18 Drug Pipeline, W22 Thu Specialty Routing, W32 Thu Fiduciary Compliance

---

## Biosimilar

**Definition:** A drug that is highly similar to (and may be interchangeable with) an already-approved biologic reference drug. Biosimilars enter the market after the reference biologic's exclusivity expires, typically at meaningful list-price discounts. Whether a biosimilar saves the plan money depends on the PBM's formulary placement (preferred vs. non-preferred), the rebate structure on the reference biologic, and the channel routing.

**Compact form for callouts:** *Biosimilar* = a highly similar version of an approved biologic drug, typically launched at a list-price discount after the reference biologic's exclusivity expires.

**Used in:** W18 Drug Pipeline, W21 Quarterly Reporting, W22 Biosimilar Readiness, W24 H1 Renewal Readiness, W25 Thu RFP Scoring

---

## 340B

**Definition:** A federal program that requires drug manufacturers to provide outpatient drugs at reduced prices to specific health-care providers (typically safety-net hospitals and federally qualified health centers). Plan-sponsor relevance: when claims dispensed at 340B contract pharmacies route through the plan's PBM, the pricing economics differ from non-340B dispensing — the PBM may or may not pass the 340B discount through to the plan.

**Compact form for callouts:** *340B* = a federal program requiring discounted outpatient drug pricing for safety-net providers. PBM contracts vary in whether 340B-discounted claims pass the savings to the plan.

**Used in:** (none in current toolkit narrative content — included for future use)

---

## DIR (Direct and Indirect Remuneration)

**Definition:** Originally a Medicare Part D regulatory term, now used more broadly for after-the-claim retroactive fees or rebates that flow between the PBM, pharmacies, and the plan. DIR fees can change the effective price of a script weeks or months after dispensing, making transparent net-cost calculation difficult.

**Compact form for callouts:** *DIR* = Direct and Indirect Remuneration, retroactive fees or rebates that flow after the claim is processed and can change the effective net cost.

**Used in:** (none in current toolkit narrative content — included for future use)

---

## DAW code (Dispense As Written)

**Definition:** A code attached to a prescription indicating whether the prescriber required dispensing of the brand drug versus permitting generic substitution. DAW codes 0-9 each carry different reimbursement implications under the PBM contract; DAW codes can be a source of plan-cost leakage if the PBM is reimbursing brand prices on prescriptions that could have been filled with a generic.

**Compact form for callouts:** *DAW code* = a Dispense As Written code on the prescription indicating brand-vs-generic dispensing requirements. Carries reimbursement implications under the PBM contract.

**Used in:** (none in current toolkit narrative content — included for future use)

---

## NDC (National Drug Code)

**Definition:** The unique identifier assigned by the FDA to a specific drug product (manufacturer, strength, dosage form, and package size). PBM pricing guarantees and exclusion lists are typically expressed by NDC. NDC-level specificity in a contract is more protective than category-level specificity.

**Compact form for callouts:** *NDC* = National Drug Code, the FDA's unique identifier for a specific drug product; the contract's most granular pricing-specification unit.

**Used in:** W30 Thu COB Audit

---

## Carve-out / carve-in

**Definition:** Carve-out = the plan sponsor contracts directly with a PBM for pharmacy benefits, separate from the medical plan. Carve-in = pharmacy benefits are bundled into the medical plan contract. Each model has tradeoffs in pricing transparency, data access, and administrative complexity.

**Compact form for callouts:** *Carve-out* = direct PBM contract separate from the medical plan. *Carve-in* = pharmacy benefits bundled with the medical plan.

**Used in:** W17 Carve-Out Decision, W20 Copay Card Calculator, W30 Thu COB Audit

---

## Maximizer / accumulator

**Definition:** PBM-administered programs that change how manufacturer copay card payments are applied. Accumulators don't count copay card dollars toward the member's deductible or out-of-pocket maximum. Maximizers raise the copay to capture the full annual copay card value and route those dollars to the PBM or plan rather than reducing the member's cost-share progress. Both programs affect plan economics and member financial experience.

**Compact form for callouts:** *Accumulator / maximizer* = PBM programs that change how manufacturer copay card payments apply; can affect both plan economics and member financial experience.

**Used in:** W20 Copay Card Calculator, W30 Thu COB Audit, W35 Thu Termination Clause

---

## Alternative funding program (AFP)

**Definition:** A third-party arrangement that removes certain high-cost specialty drugs from the plan's standard pharmacy benefit and sources them instead through manufacturer patient-assistance programs, charitable foundations, or international and cash-pay channels, with a vendor coordinating enrollment. Plans use AFPs to lower specialty spend, and in many cases they do. Whether one fits is a design-and-disclosure question, not an inherent good or bad: how the vendor is paid (frequently a percentage of claimed savings), whether the plan can see who keeps each captured assistance dollar, the member-communication and eligibility considerations of routing members to assistance programs, and how the arrangement interacts with the plan document and stop-loss coverage. (Neutral-tool framing per the copay-program neutrality rule: critique the undisclosed economics, not the tool.)

**Compact form for callouts:** *Alternative funding program (AFP)* = a third-party program that sources certain specialty drugs outside the standard pharmacy benefit (manufacturer assistance, foundations, or international/cash channels); value depends on the vendor's fee model, disclosure, and plan and stop-loss fit.

**Used in:** (public glossary; included for future toolkit use)

---

## Rebate aggregator

**Definition:** An entity, frequently PBM-affiliated and in several cases domiciled offshore, that contracts with drug manufacturers to negotiate and collect rebates on behalf of one or more PBMs. Because the aggregator sits between the manufacturer and the PBM, rebate dollars and fees can be retained at the aggregator level before the PBM's stated "pass-through" to the plan even begins. The plan sponsor often has no contractual visibility into the aggregator's economics. (Real entities operating in this layer include Ascent, Emisar, and Zinc.)

**Compact form for callouts:** *Rebate aggregator* = a PBM-affiliated (sometimes offshore) entity that collects manufacturer rebates before they reach the PBM's pass-through to the plan, often outside the plan's contractual visibility.

**Used in:** (public glossary; included for future toolkit use)

---

## Fiduciary

**Definition:** Under ERISA, a plan sponsor that exercises discretionary authority or control over plan management is a fiduciary and is held to a "prudent expert" standard. Pharmacy-benefit decisions (PBM selection, contract negotiation, ongoing oversight) are fiduciary acts. Documentation of process — what was reviewed, who was consulted, what was decided and why — is the protection against fiduciary breach claims.

**Compact form for callouts:** *Fiduciary* = under ERISA, the legal duty owed by plan sponsors who make decisions affecting plan management. PBM-related decisions are fiduciary acts requiring prudent-process documentation.

**Used in:** W18 Channel Pricing, W19 Fiduciary Documentation, W21 Quarterly Reporting, W32 Thu Fiduciary Compliance

---

## How toolkits reference this file

Each toolkit's source HTML can pull the **Compact form for callouts** line for any term it uses, dropping it into a "Terms used" callout block under the toolkit's subtitle on page 1. When a definition is refined here, the toolkits listed under "Used in" should be updated to reflect the new wording.

The compact form is intentionally one-line so 4-5 terms fit on one page-1 callout without forcing layout into a third page. Toolkits with substantial space available may use the fuller definitions on a page 2 glossary block; toolkits with tight layouts (most of the existing 2-page handouts) stick to the compact form only.
