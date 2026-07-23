# /guide-pbm-contract-audit — JSON-LD paste blocks

_Four blocks, each pasted as its own entry in Wix SEO panel → Advanced → Structured data markup. Raw JSON only — no `<script>` wrapper (the panel adds its own). Validate at validator.schema.org after publish (Rich Results Test will show Breadcrumbs only — expected). Dates are the Jul 23, 2026 publish date; bump `dateModified` only with a real content change._

## Block 1 — Article

```
{"@context":"https://schema.org","@type":"Article","headline":"What Is a PBM Contract Audit, and How Do You Audit a PBM Contract?","description":"An independent PBM contract audit reviews the pricing methodology, rebate definitions, audit rights, termination terms, and specialty routing in a pharmacy benefit contract to find where a self-funded plan overpays.","url":"https://www.rxbs.org/guide-pbm-contract-audit","datePublished":"2026-07-23","dateModified":"2026-07-23","inLanguage":"en","author":{"@type":"Person","@id":"https://www.rxbs.org/#ginny-crisp","name":"Ginny Crisp","honorificSuffix":"PharmD","url":"https://www.rxbs.org/about"},"publisher":{"@type":"Organization","@id":"https://www.rxbs.org/#organization","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"about":[{"@type":"Thing","name":"PBM contract audit"},{"@type":"Thing","name":"Pharmacy benefit management"},{"@type":"Thing","name":"Self-funded health plans"}]}
```

## Block 2 — BreadcrumbList

```
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rxbs.org/"},{"@type":"ListItem","position":2,"name":"PBM Contract Audit Guide","item":"https://www.rxbs.org/guide-pbm-contract-audit"}]}
```

## Block 3 — FAQPage

```
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a PBM contract audit?","acceptedAnswer":{"@type":"Answer","text":"A PBM contract audit is an independent review of a pharmacy benefit manager contract that examines its pricing methodology, rebate definitions, audit rights, termination terms, and specialty routing to find where a self-funded plan is overpaying or carrying unprotected risk."}},{"@type":"Question","name":"How is a PBM contract audit different from a claims review?","acceptedAnswer":{"@type":"Answer","text":"A contract audit reads the rules that govern your spend, the language that decides what the PBM can charge. A claims review checks whether the PBM followed those rules on actual claims. The contract sets the ceiling; the claims test whether the PBM hit it. You need both, and the contract audit comes first because weak language makes the claims compliant by definition."}},{"@type":"Question","name":"Does my self-funded plan need a PBM contract audit?","acceptedAnswer":{"@type":"Answer","text":"If your plan is self-funded, you carry the pharmacy spend directly and the PBM's contract language decides how much of it is avoidable. Plan sponsors are ERISA fiduciaries, and reviewing the contract that governs a major plan expense is part of the documented, prudent process that duty requires."}},{"@type":"Question","name":"How do you start a PBM contract audit?","acceptedAnswer":{"@type":"Answer","text":"Start by gathering the full executed contract with every exhibit, amendment, and pricing schedule, then have an independent reviewer with no PBM revenue tie read the pricing methodology, rebate definitions, audit-rights, and termination sections against what protective language looks like. The output is a list of specific terms to renegotiate before renewal."}},{"@type":"Question","name":"How often should a PBM contract be audited?","acceptedAnswer":{"@type":"Answer","text":"Review the contract at least once a year and always before a renewal or RFP. Pricing guarantees, rebate definitions, and formulary authority drift over the contract term, and the renewal window is the only point of real leverage to fix the language."}}]}
```

## Block 4 — HowTo

```
{"@context":"https://schema.org","@type":"HowTo","name":"How to audit a PBM contract","step":[{"@type":"HowToStep","name":"Examine what the contract governs","text":"Read the contract section by section against protective-language benchmarks, covering pricing methodology, rebate definitions, audit rights, termination, and specialty routing, the five areas where contract language routinely leaks money."},{"@type":"HowToStep","name":"Distinguish the contract audit from a claims review","text":"Confirm the language itself is protective before testing compliance, because a claims review can find the PBM compliant while the plan still overpays if the contract permitted it."},{"@type":"HowToStep","name":"Establish why a self-funded plan needs the audit","text":"Recognize that a self-funded plan carries pharmacy spend directly and that reviewing the contract is part of the documented, prudent fiduciary process ERISA requires."},{"@type":"HowToStep","name":"Start the audit","text":"Gather the complete executed contract with every exhibit and amendment, then have an independent reviewer read it against protective-language benchmarks and produce a prioritized list of clauses to renegotiate before renewal."}]}
```
