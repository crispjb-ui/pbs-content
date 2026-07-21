# Contract Language Library — JSON-LD paste file (`rxbs.org/contract-language-library`)

_Paste each block below into **Wix → Page SEO → Advanced SEO → Structured data markup** as its own markup entry (same as the glossary build). All three together are ~3,200 characters, well under Wix's 7,000-char per-field limit. If the build date slips past July 2026, update `datePublished`/`dateModified` to the actual go-live date before pasting._

_Propagation rule of record (CLAUDE.md, Library workflow c2): every future Substack Library push also updates the blueprint `contract-language-library.html`, this paste file (bump `dateModified`), and flags the matching Wix edit._

## Block 1 — Article

```
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PBM Contract Language Library: Weak vs. Protective Clauses",
  "description": "A free, side-by-side reference showing the vague language plan sponsors typically see in a PBM Services Agreement next to the protective language they should ask for instead.",
  "url": "https://www.rxbs.org/contract-language-library",
  "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.rxbs.org/contract-language-library"},
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "author": {
    "@type": "Person",
    "@id": "https://www.rxbs.org/#ginny-crisp",
    "name": "Ginny Crisp",
    "honorificSuffix": "PharmD",
    "jobTitle": "Chief Executive Officer",
    "worksFor": {"@type": "Organization", "name": "Prescription Benefit Solutions"}
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.rxbs.org/#organization",
    "name": "Prescription Benefit Solutions",
    "url": "https://www.rxbs.org",
    "logo": {"@type": "ImageObject", "url": "https://www.rxbs.org/logo.png"}
  }
}
```

## Block 2 — BreadcrumbList

```
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rxbs.org/"},
    {"@type": "ListItem", "position": 2, "name": "Contract Language Library", "item": "https://www.rxbs.org/contract-language-library"}
  ]
}
```

## Block 3 — DefinedTermSet (the AEO payload)

```
{
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "name": "PBM Contract Language Library",
  "url": "https://www.rxbs.org/contract-language-library",
  "description": "Side-by-side weak vs. protective language for the major provision families in a PBM Services Agreement.",
  "hasDefinedTerm": [
    {"@type": "DefinedTerm", "name": "Pricing Guarantees", "description": "Generic effective rate, brand discount guarantees, generic drug definition, and spread pricing provisions that determine what a plan actually pays per claim."},
    {"@type": "DefinedTerm", "name": "Rebate Provisions", "description": "Rebate passthrough and rebate guarantee provisions that govern how much manufacturer revenue reaches the plan."},
    {"@type": "DefinedTerm", "name": "Audit Rights", "description": "Audit access, remedy, frequency, scope, auditor identity, binding findings, and cost responsibility provisions that decide whether a plan can verify its own pricing and rebates."},
    {"@type": "DefinedTerm", "name": "Clinical Program Provisions", "description": "Prior authorization and formulary management provisions that govern approvals, denials, and net-cost-versus-rebate formulary decisions."},
    {"@type": "DefinedTerm", "name": "Termination and Transition", "description": "Termination notice, termination for convenience, auto-renewal, and data-transfer provisions that decide whether a plan can actually leave."},
    {"@type": "DefinedTerm", "name": "Specialty Pharmacy", "description": "Specialty routing and affiliated-pharmacy disclosure provisions that govern pricing transparency on specialty claims."},
    {"@type": "DefinedTerm", "name": "Biosimilar Provisions", "description": "Biosimilar formulary placement and brand-to-biosimilar transition provisions that determine whether the lowest-net-cost option is preferred."}
  ]
}
```

_Note on the breadcrumb: the blueprint's middle crumb was "Insights" (`/insights`), a page not yet built in Wix. Per the confirm-before-link rule the paste block above is 2-level (Home → Contract Language Library), matching how the glossary shipped. When an Insights hub page goes live, add it back as position 2._
