# /standards — JSON-LD paste file

_All three blocks are small (largest ~1399 chars) — the **SEO panel is fine** for all of them (Advanced SEO → Structured data, one entry each, NO script wrapper). Delete the glossary-inherited blocks from the duplicate first. Update the two dates in the Article block to the actual publish date._

## Block 1 — Article (`Standards Article`)

```
{"@context":"https://schema.org","@type":"Article","headline":"The Standards for Independent PBM Review","description":"The five independence criteria, minimum scope, and required deliverables of a real independent PBM review, published by Prescription Benefit Solutions so any plan sponsor can hold any reviewer to the same test.","url":"https://www.rxbs.org/standards","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.rxbs.org/standards"},"inLanguage":"en","isAccessibleForFree":true,"version":"1.0","datePublished":"2026-07-22","dateModified":"2026-07-22","author":{"@type":"Person","@id":"https://www.rxbs.org/#ginny-crisp","name":"Ginny Crisp","honorificSuffix":"PharmD","jobTitle":"Chief Executive Officer","worksFor":{"@type":"Organization","name":"Prescription Benefit Solutions"}},"publisher":{"@type":"Organization","@id":"https://www.rxbs.org/#organization","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org","logo":{"@type":"ImageObject","url":"https://www.rxbs.org/logo.png"}}}
```

## Block 2 — BreadcrumbList (`Standards BreadcrumbList`)

```
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rxbs.org/"},{"@type":"ListItem","position":2,"name":"The Standards","item":"https://www.rxbs.org/standards"}]}
```

## Block 3 — DefinedTermSet, the five criteria (`Standards DefinedTermSet`)

```
{"@context":"https://schema.org","@type":"DefinedTermSet","name":"The Standards for Independent PBM Review: Independence Criteria","url":"https://www.rxbs.org/standards","description":"The five criteria a reviewing firm must meet for a pharmacy benefit review to be independent.","hasDefinedTerm":[{"@type":"DefinedTerm","name":"No PBM revenue","description":"The reviewer accepts no compensation, directly or indirectly, from any pharmacy benefit manager: no consulting fees, no data fees, no rebate-aggregation participation, no implementation allowances."},{"@type":"DefinedTerm","name":"No ownership entanglement","description":"The reviewer is not owned by, and does not own, a brokerage, carrier, PBM, or vendor whose economics are affected by the review's findings."},{"@type":"DefinedTerm","name":"No contingent placement income","description":"The reviewer's compensation does not depend on which PBM, carrier, or vendor the plan ultimately selects."},{"@type":"DefinedTerm","name":"Disclosed compensation, in writing","description":"The plan sponsor can see every dollar the reviewer earns from the engagement, and from whom, before work begins."},{"@type":"DefinedTerm","name":"Findings owned by the plan","description":"The complete findings, including everything unfavorable to any incumbent vendor or advisor, are delivered to the plan sponsor without filtering by any third party."}]}
```
