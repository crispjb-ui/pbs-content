# /what-we-are-seeing — JSON-LD paste blocks

_Two blocks, each its own entry in Wix SEO panel → Advanced → Structured data markup. Raw JSON, no `<script>` wrapper. Validate at validator.schema.org. The Article description is guardrail-clean (contracted savings; no "identified"); `dateModified` moves at the annual January refresh._

## Block 1 — Article

```
{"@context":"https://schema.org","@type":"Article","headline":"What We're Seeing in PBM Contracts: 2025 in Review","description":"Aggregate findings from hundreds of pharmacy benefit manager contract reviews across 203 self-funded employer clients in 2025, including $78.7 million in contracted savings and an average of roughly $469,000 in contracted savings per pharmacy benefit review client.","url":"https://www.rxbs.org/what-we-are-seeing","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.rxbs.org/what-we-are-seeing"},"datePublished":"2026-07-23","dateModified":"2026-07-23","inLanguage":"en","author":{"@type":"Person","@id":"https://www.rxbs.org/#ginny-crisp","name":"Ginny Crisp","honorificSuffix":"PharmD","jobTitle":"Chief Executive Officer","url":"https://www.rxbs.org/about"},"publisher":{"@type":"Organization","@id":"https://www.rxbs.org/#organization","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"about":[{"@type":"Thing","name":"Pharmacy Benefit Managers"},{"@type":"Thing","name":"PBM Contracts"},{"@type":"Thing","name":"Self-funded health plans"}]}
```

## Block 2 — BreadcrumbList

```
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rxbs.org/"},{"@type":"ListItem","position":2,"name":"What We're Seeing","item":"https://www.rxbs.org/what-we-are-seeing"}]}
```
