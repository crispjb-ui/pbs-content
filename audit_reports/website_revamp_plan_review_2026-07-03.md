# Website Revamp Plan — Deep-Dive Review + Improvements (Jul 3, 2026)

_Requested by Ginny: "Deep dive on the plan for the revamped website and all supporting documents. The finished product must establish Ginny and Prescription Benefit Solutions as the pharmacy expert and go-to resource for self-funded employers. GEO and AI search results must be maximized."_

**Scope reviewed:** `website_aeo_master_plan.md`, `aeo_geo_master_plan.md`, `website_mockups/site/` (all 14 page blueprints + llms.txt + robots.txt + runbooks + rss_feed_spec), `substack_aeo_rules.md`, `aeo_seo_playbook.md`, `entity_authority_offsite_plan.md`, `ai_visibility_tracker.md`, plus a fresh mid-2026 research pass on how ChatGPT, Perplexity, Google AI Overviews/AI Mode, Gemini, and Claude actually select citations today.

---

## 1. Verdict

**The plan's core architecture is right and matches the 2026 evidence.** Owned answer pages on rxbs.org + Substack as the crawlable supply line + entity disambiguation (spelled-out firm name) + answer-first liftable leads + structured data + the off-site entity plan is exactly the stack the current data supports. Every JSON-LD block in the blueprints parses (38 blocks after this session's fixes), the naming rule is 100% enforced in published copy, and the answer-first/question-shaped-header discipline is consistently executed on all 7 answer pages.

**The three biggest strategic gaps** the review found, in order of leverage:

1. **Bing is the missing engine.** ChatGPT retrieves via Bing's index + OAI-SearchBot; if rxbs.org is weak in Bing it is largely invisible to the #1 B2B research chatbot. The plan says "submit sitemap to Bing" in passing, but Bing Webmaster Tools verification + IndexNow (Wix supports it natively) should be a named, first-week action with the same priority as the Wix page builds.
2. **The third-party mention layer is underweighted relative to on-site work.** The strongest 2026 predictor of AI visibility is branded web mentions (Ahrefs, 75K-brand study: 0.664 correlation vs 0.218 for backlinks). For consideration queries ("best independent PBM audit firm"), engines synthesize from third-party listicles and Reddit, which barely exist in this niche — that's an opening. The plan has listicles/Reddit in Phase 5 as a Ginny side-task; the evidence says the listicle/PR/mention layer is co-equal with the page builds, and the niche is empty enough to dominate fast.
3. **No person-entity home for Ginny.** Every byline says "By Ginny Crisp, PharmD" but there is no dedicated author/bio page for the entity to resolve to, and the Person schema had no `url`, no credential object, no `@id`. AI engines increasingly resolve trust to person entities. This is the single biggest E-E-A-T hole in an otherwise strong plan (partially patched this session; the page itself still needs building).

---

## 2. What the plan already gets right (validated against current evidence)

- **Owned canonical + Substack twin.** Correct and confirmed: AI engines cite crawlable, self-contained answer pages; Substack is crawlable, LinkedIn is not. The canonical-twin rule routes the authority home.
- **Answer-first liftable sentence + question-shaped headers.** Definition-first passages show ~2x citation rates in 2026 benchmarks. The Substack AEO rule (5 requirements) is the right per-article standard, and the W06–W37 backfill is done.
- **Proprietary data as citation bait.** The Princeton GEO study's two strongest levers are statistics (+32%) and quotable content (+41%). The 2025 proof metrics and "What We're Seeing" page are exactly this play.
- **Entity naming.** The "Prescription Benefit Solutions, never bare PBS" rule is precisely what entity-disambiguation requires (the Public Broadcasting Service collision is real).
- **robots.txt allows everything.** Correct call — as large publishers wall off AI crawlers (Cloudflare's 2026 defaults), small expert sites that stay open become disproportionately citable.
- **The 20-prompt visibility tracker** is the right scoreboard design; the "source URL" diagnostic (Substack vs rxbs.org) is the right steering signal.
- **llms.txt kept at low priority.** Vindicated: Google formally stated (June 2026) it ignores llms.txt; OpenAI never fetches it at meaningful volume. Wix now auto-generates one anyway. Zero further effort is the right investment.
- **Phase-0 template-first build order** and the frozen URL map are the right way to avoid touching every page twice and breaking citations later.

---

## 3. Fixed this session (committed to the blueprints)

All mechanical defects found by the audit were fixed in `website_mockups/site/` (38 JSON-LD blocks re-validated, brand lint clean):

| # | Fix | Files |
|---|-----|-------|
| 1 | **faq.html was an orphan** — zero inbound links despite being the best buyer-anxiety AEO asset. Added "Plan Sponsor FAQ" to the footer Reference column on all 14 pages + a card in the Insights "Guides & Answers" grid. | all pages |
| 2 | **llms.txt omitted every answer page it exists to promote.** Added the full "Answer pages" section (glossary, contract library, what-we're-seeing, 3 guides, compare, FAQ, insights) + the Substack URL. | llms.txt |
| 3 | **Stale `alternateName:"PBS"`** still sat in the paste-ready Organization block of `geo_seo_plan.md` (contradicting the locked Jun 19 naming decision — would have been pasted into Wix). Removed. | geo_seo_plan.md |
| 4 | **Entity `@id` graph.** Organization (`#organization`) and Person (`#ginny-crisp`) now carry stable `@id`s, referenced from every Article's `author`/`publisher` — one entity, not 14 disconnected copies. Person also gained `url`, and `hasCredential` (PharmD as EducationalOccupationalCredential). | index, about, all Article pages |
| 5 | **Wrong author modeling** (`"jobTitle":"PharmD"`) on 2 pages → `honorificSuffix`, consistent sitewide. | guide-how-to-choose, compare |
| 6 | **Missing dates:** contract-language-library Article had no `datePublished`/`dateModified` (bad for a page whose pitch is "continuously updated"); 2 guides lacked `dateModified`. All added; every Article publisher now carries `logo`. | 3 files |
| 7 | **Glossary anchor addressability:** every DefinedTerm now carries its anchor `url` (e.g. `/glossary#spread-pricing`) + `inDefinedTermSet` — engines can cite a specific definition. Added 2 missing terms other pages were linking to as if they existed: **Audit rights** and **Termination and transition** (24 terms now). | glossary.html |
| 8 | **Mislinked anchors:** 6 links pointed "audit-rights / termination" text at `#fiduciary` (wrong concept). Retargeted to the new `#audit-rights`. | guide-how-to-choose, compare |
| 9 | **solutions.html schema modeling error:** `position` sat on `Service` (invalid — it's a `ListItem` property). Remodeled as ListItem→item:Service; added the missing 6th service (Broker & Consultant Partnership) + BreadcrumbList. | solutions.html |
| 10 | **Zero schema on the two hub pages:** library.html now carries the CollectionPage+ItemList block the master plan itself specifies (bind to CMS in Wix for all 29); insights.html now carries CollectionPage + BreadcrumbList. | library, insights |
| 11 | **Duplicate FAQPage questions across URLs:** "What is a PBM contract audit?" and "What is spread pricing?" were marked up on index.html AND their dedicated guides (conflicting canonical answers). Removed from the index FAQPage block; visible copy kept; markup stays on the deepest page. | index.html |
| 12 | **Run-on sentence** (missing punctuation) in guide-how-to-choose §broker — a sentence an engine might quote broken. Fixed. | guide-how-to-choose |
| 13 | **Bylines now link to About** (until the dedicated author page exists) — bylines previously linked nowhere. Footer `www.rxbs.org` dead `href="#"` fixed on all pages. | all content pages |
| 14 | **robots.txt:** added the newer agents (Claude-User, Amazonbot, DuckAssistBot, Meta-ExternalFetcher, MistralAI-User, YouBot). Belt-and-suspenders; nothing was blocked before. | robots.txt |

---

## 4. Recommended improvements (ranked)

### P0 — do before/alongside the Wix build (highest leverage per hour)

1. **Verify rxbs.org in Bing Webmaster Tools + confirm IndexNow is firing** (Wix native). ChatGPT's retrieval = Bing + OAI-SearchBot. ~30 minutes, one-time, and it unblocks the largest B2B answer engine. _(Ginny, one-time — same sitting as the Google Search Console sitemap submission already on the list.)_
2. **Enable Wix's new AI Visibility Overview** (launched mid-2026, native in Wix Analytics): tracks brand citations, mentions, sentiment across ChatGPT/Gemini/Perplexity, with competitor benchmarking. Automates a large part of the manual 20-prompt tracker. Keep the manual tracker as ground truth; let Wix do the monthly heavy lifting. _(Ginny, one-time toggle.)_
3. **Run the AI-visibility baseline BEFORE the 7 pages go live in Wix.** It's still unrun. Without a pre-build baseline there is no before/after proof that the build moved citations — the exact evidence "establish Ginny as THE expert" needs. _(Ginny, ~40 min once.)_
4. **Weld the brand name to every quotable stat (anti-ghost-citation formatting).** ~62% of AI citations never name the brand. Standard: any liftable sentence carrying a proprietary number must contain the firm name in the same sentence — "Prescription Benefit Solutions reviewed 132 pharmacy benefit plans in 2025, saving an average of $469,000 per client" — on rxbs.org, in Substack leads, and in the toolkit pages. Cheap to enforce via the §8 gate + `/critique`; turns citations into name-carrying mentions.
5. **Build the dedicated Ginny Crisp author page** (`/about/ginny-crisp` or `/ginny-crisp`): ProfilePage + full Person schema (PharmD credential, alumniOf, headshot, sameAs → LinkedIn/X/Substack/Wikidata, list of guest pieces + podcast appearances), every byline sitewide links to it, identical byline string everywhere. This is the person-entity anchor for "Who is Ginny Crisp PharmD" and AI attribution. _(Claude can blueprint it next session; needs Ginny's headshot + PharmD school for alumniOf.)_

### P1 — elevate the off-site/mention layer from side-task to co-equal workstream

6. **Manufacture the "best PBM audit firms" listicle layer.** The consideration queries have almost no third-party roundups to synthesize from — fast dominance is available. Three moves: (a) pitch inclusion in broker/benefits trade-press vendor roundups (BenefitsPro, EBN, Fierce Healthcare newsletters), (b) directory listings (Health Rosetta, Mitigate, Crunchbase, GBP), (c) PBS's own honest "who does this work" comparison content (the compare page already planned). The 2025 proof figures are the pitch hook.
7. **PR the "What We're Seeing" data as the flagship citable asset.** Branded mentions are the #1 AI-visibility predictor, and nothing earns mentions like exclusive primary data in a niche with no public benchmarks. Keep it at a stable URL, refresh quarterly (don't replace), pitch the headline numbers each refresh. The queued flagship data report (OPEN_ITEMS ⑥, "how often the net-cost promise survives the contract definitions") is the single highest-leverage citation asset in the entire pipeline — recommend scoping it for the Sep–Oct surge.
8. **Make podcast guesting a transcript play.** Prioritize shows that publish indexable transcripts + YouTube versions; supply the transcript if the host doesn't. Each appearance = third-party branded mention + crawlable expert long-form + YouTube (a top ChatGPT citation source). Add this criterion to `podcast_pitching_guide.md` target scoring.
9. **Reddit/Quora cadence per the existing plan** — now with sharper evidence: Reddit is ~47% of Perplexity's and ~40% of ChatGPT's category-level citations. The 1-2/week disclosed-expert cadence in `entity_authority_offsite_plan.md` is right; it just shouldn't wait for Phase 5.
10. **Wikidata now, not Phase 5.** One hour, no notability bar, feeds every engine's entity graph, and directly attacks the PBS/Public Broadcasting Service collision. Everything else compounds on top of it.

### P2 — page roadmap additions (wave 2, in this order)

11. **`/results` (case studies / proof page).** CLAUDE.md already names "the website proof page (next revamp)" as the canonical home of the 2025 metrics, but it's not in the URL map. Add it: 2025 stat band + 2-3 anonymized case studies (client permission already being collected) + testimonials. This is also where the queued Q3 social stat-drip should point.
12. **"How much does a PBM audit cost?" page** (or a first-class FAQ section + schema on the pricing question). Classic high-intent buyer query almost nobody in the niche answers in crawlable form; even a ranges/"how we charge, and no PBM money" answer wins the citation and pre-qualifies leads.
13. **Individual service pages** (`/pbm-contract-audit`, `/pharmacy-claims-review`, `/pbm-rfp`). Solutions is one page of six un-linkable cards; commercial queries deserve dedicated money pages with Service schema + FAQ + cluster links. The informational guides currently have no commercial twin to hand off to.
14. **`/for-brokers` partner page.** Brokers are content pillar 6, a named persona, and the "behind your broker" positioning is a differentiator — and the broker persona currently has no owned page (and zero toolkits). Also the natural landing surface for the GWCU-style partner funnel.
15. **Rebate-aggregator/GPO pillar guide.** The proven 17.8K-impression shock topic has a glossary entry but no dedicated crawlable answer page. Highest-energy topic in the bank without an owned URL.
16. **Newsletter/subscribe page + contact page + privacy/terms.** Subscribe buttons currently dead-end; privacy/terms absence is a trust signal on a site collecting emails.

### Technical/process notes folded into the runbook expectations

- **Verify Wix rendering:** after each page builds, curl the live URL and confirm the body copy is in the initial HTML (Velo/dataset-hydrated content can be invisible to non-JS AI crawlers — GPTBot/ClaudeBot don't execute JavaScript). Applies doubly to the RSS-fed Insights cards: they're a Googlebot freshness asset, NOT an AI-crawler asset; the evergreen pages carry the AEO load.
- **SearchAction:** the sitewide WebSite schema points at `rxbs.org/search?q=` — only keep `potentialAction` if Wix site search is actually enabled at that URL; otherwise delete the `potentialAction` property when pasting (invalid markup is worse than none).
- **Freshness cadence, not fake-fresh:** put glossary / contract library / each guide on a quarterly substantive-refresh rotation (new provision, updated stat, current-year reference) with `dateModified` updated in schema AND visibly. Date-bumping without changes is now detected and penalized.
- **Forms must stay agent-completable:** agentic browsers (ChatGPT Atlas, Comet) now fill lead forms; keep the toolkit form simple labeled fields, no CAPTCHA walls.
- **Watch for the new measurement surfaces:** Google Search Console's generative-AI performance report (rolling out since Jun 2026 — leave Google's AI-grounding toggle ON), and GA4's native "AI Assistant" channel. Expect undercounting (35-70% of AI referrals arrive referrer-less); the form's "How did you hear about us?" field stays the ground truth.
- **KPI hierarchy:** mentions > citations > AI-referred sessions > toolkit conversions. Citations ≠ clicks (Perplexity citations produce a visit only ~12-18% of the time) and citations ≠ mentions. Track both, as the tracker's Cited?/Source URL columns already do.

---

## 5. Where each recommendation lives now

- **Applied (this PR):** all §3 fixes; `aeo_seo_playbook.md` changelog updated with the confirmed 2026 technique findings; instrumentation notes added to `ai_visibility_tracker.md`; new-item rows added to `aeo_geo_master_plan.md`.
- **Proposed for Ginny's yes (OPEN_ITEMS):** author page build, `/results` page, cost page, service pages, `/for-brokers`, listicle/PR workstream elevation, transcript-first podcast criterion, Bing/IndexNow + Wix AI Visibility Overview + baseline-before-build sequencing.
- **No change recommended:** the Phase-0 template-first build order, the URL map, the two archetypes, the Substack AEO rule, the naming rule, the canonical-twin model — all validated.
