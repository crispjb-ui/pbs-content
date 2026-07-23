# /guide-what-is-spread-pricing — JSON-LD paste blocks

_Four blocks, each its own entry in Wix SEO panel → Advanced → Structured data markup. Raw JSON, no `<script>` wrapper. Validate at validator.schema.org (Breadcrumbs-only at Rich Results Test is expected). `dateModified` bumps only with real changes._

## Block 1 — Article

```
{"@context":"https://schema.org","@type":"Article","headline":"What Is Spread Pricing in a PBM Contract? A Plan Sponsor's Guide","description":"Spread pricing is when a PBM charges a plan more for a drug than it pays the dispensing pharmacy and keeps the difference. This guide explains how it hides inside aggregate pricing guarantees, how to detect it per channel, and what contract language prevents it.","url":"https://www.rxbs.org/guide-what-is-spread-pricing","datePublished":"2026-07-23","dateModified":"2026-07-23","inLanguage":"en","author":{"@type":"Person","@id":"https://www.rxbs.org/#ginny-crisp","name":"Ginny Crisp","honorificSuffix":"PharmD","url":"https://www.rxbs.org/about"},"publisher":{"@type":"Organization","@id":"https://www.rxbs.org/#organization","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"about":[{"@type":"Thing","name":"Spread pricing"},{"@type":"Thing","name":"Pharmacy benefit management"},{"@type":"Thing","name":"Self-funded health plans"}]}
```

## Block 2 — BreadcrumbList

```
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rxbs.org/"},{"@type":"ListItem","position":2,"name":"What Is Spread Pricing","item":"https://www.rxbs.org/guide-what-is-spread-pricing"}]}
```

## Block 3 — FAQPage

```
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is spread pricing in a PBM contract?","acceptedAnswer":{"@type":"Answer","text":"Spread pricing is when a pharmacy benefit manager charges the plan more for a drug than it pays the dispensing pharmacy and keeps the difference as undisclosed margin. The plan sees one price, the pharmacy is reimbursed a lower price, and the PBM retains the gap."}},{"@type":"Question","name":"How is spread pricing different from pass-through pricing?","acceptedAnswer":{"@type":"Answer","text":"Under spread pricing the PBM keeps the difference between what it charges the plan and what it pays the pharmacy. Under pass-through pricing the plan pays exactly what the pharmacy is reimbursed plus a disclosed administrative fee, so there is no hidden margin in the drug cost itself."}},{"@type":"Question","name":"How do you detect spread pricing?","acceptedAnswer":{"@type":"Answer","text":"Detect spread pricing by comparing, per channel and per claim, what the plan was charged against what the pharmacy was actually reimbursed. A gap that is not a disclosed administrative fee is spread. Aggregate-only reporting hides it, so the audit has to reach claim-level and channel-level net cost."}},{"@type":"Question","name":"Is spread pricing legal?","acceptedAnswer":{"@type":"Answer","text":"In the commercial self-funded market, spread pricing is generally legal when the contract's pricing model permits it, which aggregate pricing guarantees often do. It is a contract choice, not an illegal act, which is why the protection is a pass-through pricing model with full audit rights rather than a complaint after the fact."}},{"@type":"Question","name":"What contract language prevents spread pricing?","acceptedAnswer":{"@type":"Answer","text":"A true pass-through definition that requires the plan to pay the actual amount reimbursed to the dispensing pharmacy, a single disclosed administrative fee, channel-level pricing guarantees, and claim-level audit rights to verify what the pharmacy was paid. Aggregate-only guarantees without these terms leave room for spread."}}]}
```

## Block 4 — HowTo

```
{"@context":"https://schema.org","@type":"HowTo","name":"How to detect spread pricing in a PBM contract","step":[{"@type":"HowToStep","name":"Pull pricing at the channel level","text":"Separate retail, mail, and specialty rather than relying on a blended figure, because spread concentrates in whichever channel the PBM controls and a blended average cannot reveal where the margin sits."},{"@type":"HowToStep","name":"Compare the plan charge against pharmacy reimbursement","text":"On the same claims, measure what the plan was charged against what the dispensing pharmacy was actually reimbursed; any gap that is not a single disclosed administrative fee is spread, which requires claim-level access to the reimbursement data."},{"@type":"HowToStep","name":"Watch for DIR and retroactive adjustments","text":"Track DIR and retroactive adjustments that change the effective price weeks after the claim, since they can mask or shift spread after the fact."},{"@type":"HowToStep","name":"Treat missing audit rights as the finding","text":"If the contract does not let the plan reach the pharmacy-reimbursement number, that absence is itself the finding, because a plan that cannot detect spread is by design exposed to it."}]}
```
