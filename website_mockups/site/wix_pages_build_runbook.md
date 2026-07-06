# Wix Build Runbook v2 — click-by-click for the whole revamp

> **Governed by `website_aeo_master_plan.md` v2 (conversion-first build order) + `MASTER_GAMEPLAN.md` (P1).** _Rebuilt Jul 6, 2026: adds the conversion-spine pages, the four v2 components, Phase 0.5 measurement clicks, and the co-pilot protocol below. The original per-page A-G steps for the content pages are preserved at the bottom; they still govern those pages._

---

## 🟢 BUILD IS GO (Brett, Jul 6, 2026)
**Incremental publish approved: pages go live as each is finished; a mixed old/new look during the build is explicitly accepted.** Two rules survive that: (1) nothing gets LINKED from emails/comments/campaign copy until its page renders and its form works (standing confirm-before-link rule); (2) `/request-a-call` must be live and end-to-end tested BEFORE `/renewal-second-opinion` publishes (its CTA depends on it) — the only hard ordering in the build. Design direction confirmed: the locked system with the v2 amendments (no scroll-reveal in v1, Plex typography, human layer added, conversion components); the dark-hero taste-check with Ginny happens before the Home rebuild, not before the spine pages.

## ⭐ HOW TO USE THIS WITH A CLAUDE SESSION (the co-pilot protocol)

**Brett is not a Wix native. Any model walking him through a build MUST follow this protocol:**

1. **One step at a time.** Give a single action ("In the left toolbar of the Editor, click the Pages icon, it looks like stacked pages"), then WAIT for Brett to confirm what he sees before giving the next step. Never dump a 10-step list and wish him luck.
2. **Describe what he should be looking at** before and after each click ("a panel should slide out listing your site's pages, with a + Add Page button at the bottom"). If what he sees doesn't match, ask him to describe or screenshot the screen and adapt; **Wix renames and moves UI constantly, so treat every menu path in this file as a strong hint, not gospel.** The reliable fallback: the Editor's search bar and the Settings search both find features by name.
3. **Verify every step's result** before moving on (open the preview, check the published URL, view source for schema). Each page section below ends with its own "verify" line; do not skip it.
4. **Copy is never composed live.** Every page's text exists in a source file (named per page below, usually between ▼▲ markers). The session pastes the exact copy into chat for Brett to copy across; nothing gets improvised in the Editor.
5. **Anything code-shaped (Velo, JSON-LD, CMS field keys) the session produces ready-to-paste** and tells Brett exactly where the paste box is. Brett never writes code.
6. **The live toolkit funnel is production.** Any step touching `/toolkit/<slug>`, the Toolkits CMS, or `toolkitLead.web.js` gets a "this is live, here's the revert" warning first, and changes are tested with a real submission immediately after.
7. **End every working session by updating this runbook's checklist** (the ☐ boxes below) and committing, so the next session knows exactly where the build stands.

---

## MASTER CHECKLIST (the build at a glance — update as you go)

**Phase 0 — template + components:** ☐ theme tokens ☐ header nav v2 ☐ footer ☐ saved sections (hero/byline/CTA/related/FAQ/lead-form) ☐ Seasonal Campaign Band ☐ Fiduciary File block ☐ Proof Band ☐ trust-cluster footer block ☐ sitewide schema
**Phase 0.5 — measurement first:** ✅ DONE (Brett, Jul 6, 2026) — GSC key + property verified (pull ran Jul 3 + Jul 6; first data expected within days), Bing import, IndexNow, Wix AI Visibility, sameAs filled, baseline run. Remaining: log the baseline results into `ai_visibility_tracker.md` (paste them to any session); Insight Tag rides the Jul 7 9 AM reminder; conversion events finalize when the call form ships.
**Phase 2 — conversion spine (⏱ Aug 15):** ☐ /request-a-call ☐ /renewal-second-opinion ☐ /for-brokers ☐ /standards ☐ /how-we-charge ☐ /results ☐ /glossary ☐ /contract-language-library ☐ live-site defects fixed
**Phase 3:** ☐ /what-we-are-seeing ☐ /faq ☐ 4 guides ☐ Home/Solutions/About/Insights refits ☐ toolkit retrofit (source field, carefully)

---

## PHASE 0.5 — measurement clicks (do these first; ~1 hour total, several are Ginny's logins)

1. **Robots:** Wix Dashboard → Settings → search "robots" → Robots.txt editor → paste contents of `site/robots.txt` (allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended) → Save. *Verify: open `www.rxbs.org/robots.txt`.*
2. **Google Search Console:** search.google.com/search-console → add property `www.rxbs.org` (verify via Wix's built-in integration: Wix Dashboard → Marketing → SEO → connect) → Sitemaps → submit `https://www.rxbs.org/sitemap.xml`. *Verify: sitemap status "Success."*
3. **Bing Webmaster Tools:** bing.com/webmasters → "Import from Google Search Console" (one click, reuses the GSC verification) → confirm sitemap imported. **This matters more than it looks: ChatGPT retrieves through Bing's index.**
4. **IndexNow:** in Wix Dashboard → Marketing → SEO, confirm IndexNow is enabled (Wix-native toggle; search "IndexNow" in dashboard search if not visible).
5. **Wix AI Visibility Overview:** Dashboard → Analytics → look for "AI Visibility" (2026 feature) → enable. *This automates most of the monthly citation check.*
6. **Baseline:** BEFORE any new page publishes, run the 20-prompt set in `ai_visibility_tracker.md` across the five engines and log it. No baseline = no proof the build worked.
7. **Conversion events:** Dashboard → Analytics → set up events for form submissions (toolkit form, and later the call form). If Wix's native events are limited, note it and move on; the Sheet rows are the ground-truth counter anyway.
8. **sameAs:** in the sitewide Organization/Person schema (Settings → SEO → Structured Data), fill the two LinkedIn URLs (Ginny's profile + company page).

---

## PHASE 0 — the four v2 components (saved sections)

**How to make any saved section in Wix:** build the section once on any page → right-click the section → "Save to My Designs" (or "Add to Saved Sections"; naming varies) → it becomes insertable on any page via Add Section → My Designs. Build these four:

1. **Seasonal Campaign Band** — a full-width strip: one bold line + one button. Current (Sep-Oct): headline `Do not sign the renewal unread.` button `The Renewal Second Opinion →` linking `/renewal-second-opinion`. Colors: Primary Blue background, white text, Accent Blue button. Place under the Home hero. *Quarterly edit: change the line + link only (Jan: the Index; spring: the briefing).*
2. **Fiduciary File block** — heading `Every engagement closes with your Fiduciary File` + the 5-item list + the disclaimer line, copy verbatim from `fiduciary_file_onepager.md` (post-counsel version). Goes at the bottom of every service/money page.
3. **Proof Band** — one strip, four Plex Mono figures with labels: `$78.7M contracted savings (2025)` · `203 clients` · `59 PBM RFPs at a 25% savings rate` · `$469K average PBR savings per client`. (Guardrails baked in: contracted-not-offered; 25% labeled as the RFP rate.) Goes on every money page + /results hero.
4. **Trust-cluster footer block** — three linked lines: `The Standards · Results · How We Charge`. Add to the global footer once; it appears everywhere.

**Header nav v2** (Wix Editor → header → manage menu): `Home · Solutions · Free Tools · Learn ▾ · Why Us ▾ · For Brokers · [Request a Call button]`. "Why Us" dropdown = Standards / Results / How We Charge / About. Button links `/request-a-call`.

---

## PHASE 2 — the conversion spine, page by page (build in this order)

Each page: create page → set slug → SEO title/description → paste body copy from the named source → apply archetype components → paste schema → nav/footer links → publish → verify. The generic A-G mechanics from the v1 section below apply; here is what's SPECIFIC to each.

### 2.1 `/request-a-call` ☐ (the most technical page; do it with a Claude session)
- **Spec:** `email_gated_toolkit/request_a_call_form_spec.md` (fields, backend behavior, notifications).
- Steps: (a) Dashboard → CMS → create collection `CallRequests` with the spec's fields; (b) new page, slug `request-a-call`, light hero + the 5 form fields as Wix input elements (mirror how the toolkit form was built); (c) ask a Claude session to generate the Velo page code + `submitCallRequest` web method from the spec (it mirrors the existing `toolkitLead.web.js` patterns) and paste into the Velo panels indicated; (d) wire the `?topic=` pre-select per the spec; (e) test: submit with a real email → confirm the notification email arrives with lead-history, the CMS row exists, and the confirmation email sends. **Do not link anything to this page until the test passes.**
- Schema: none special (ContactPage optional). Nav: it's the header button.

### 2.2 `/renewal-second-opinion` ☐ ⏱ Aug 15
- **Copy:** `renewal_second_opinion_kit.md` ▼▲ block, verbatim (after Ginny's Decision #1 + price posture).
- Utility archetype: light hero (the "Do not sign the renewal unread" H1), body copy, the 90-Day Check callout as a styled quote block, **Fiduciary File block + Proof Band** at bottom, CTA button → `/request-a-call?topic=renewal-second-opinion`.
- Schema: `Service` (a Claude session generates it from the page copy). Links: /standards (the independence line links there), one toolkit (Contract Review Readiness).
- *Verify: renders on phone; CTA lands on the working form with the topic pre-selected.*

### 2.3 `/for-brokers` ☐
- **Copy:** `broker_partner_track.md` §3, verbatim. Same assembly as 2.2; CTA → `/request-a-call?topic=broker-partnership`. Proof Band yes; Fiduciary File block NO (wrong audience); link to the Toolkit Library ("start with the tools") + /standards.

### 2.4 `/standards` ☐
- **Copy:** `standards_independent_pbm_review.md` ▼▲ block (ONLY after Ginny's authorship pass + counsel read — check `DECISIONS_FOR_GINNY.md` #6 is checked).
- Content archetype WITH byline (it's authored) : dark hero, byline block, body with the five criteria as a numbered list, the questions-to-ask as the blockquote style, version line at bottom.
- Schema: `Article` + `BreadcrumbList`. Links: /how-we-charge, /results, one guide. Add to Why Us dropdown + trust footer.

### 2.5 `/how-we-charge` ☐
- **Copy:** the page block at the bottom of `pricing_architecture_memo.md`, fee slots filled per Ginny's Decision #13. Utility archetype + Proof Band; CTA → request-a-call. Schema: `Service`+FAQ if the Q&A form is used. **Do not publish with bracketed [$X] slots still in the copy.**

### 2.6 `/results` ☐
- Shell version now: hero + Proof Band + "as seen on" strip (Potter · SHRM Honest HR · Derms on Drugs) + 2-3 empty case-study card slots labeled "Client stories publishing as permissions land" + testimonial slots. Case studies slot in from `case_studies/` as the closeout kit permissions them. Schema: `Article`/`AboutPage`. CTA → request-a-call.

### 2.7-2.8 `/glossary` + `/contract-language-library` ☐☐
- Follow the v1 per-page A-G steps below exactly (these two have complete blueprints: `glossary.html`, `contract-language-library.html`). They ship in Phase 2 because every money page's cluster links point at them.

### While in the Editor: the live-site defect fixes ☐
From `website_audit.md`: the 3 pages with default "Mysite" SEO titles (Page Settings → SEO Basics on each), the hero's missing clickable CTA, the blank Newsletter page (either fill with the newsletter signup embed or unpublish), Toolkit Library moved out of the "More" menu into Free Tools.

**THE LINKING RULE (apply on every page as you build):** every content page links to one money page + one toolkit; every money page links to /standards, /results, and /request-a-call. Every page opens with one self-contained answer/definition sentence.

---

## PHASE 3+ — content pages (the original v1 runbook governs; preserved below)

## The pages, in priority order (v1 set — now Phase 2.7-2.8 and Phase 3)
| # | Build | Wix slug (URL) | Blueprint file |
|---|-------|----------------|----------------|
| 1 | **PBM Glossary** | `/glossary` | `glossary.html` |
| 2 | **Contract Language Library** | `/contract-language-library` | `contract-language-library.html` |
| 3 | **What We're Seeing (2025)** | `/what-we-are-seeing` | `what-we-are-seeing.html` |
| 4 | **Guide: PBM Contract Audit** | `/guides/pbm-contract-audit` | `guide-pbm-contract-audit.html` |
| 5 | **Guide: What Is Spread Pricing** | `/guides/what-is-spread-pricing` | `guide-what-is-spread-pricing.html` |
| 6 | **Guide: How to Choose a PBM Auditor** | `/guides/how-to-choose-a-pbm-auditor` | `guide-how-to-choose-a-pbm-auditor.html` |
| 7 | **Compare: PBM Audit vs. Broker Review** | `/guides/pbm-audit-vs-broker-review` | `compare-pbm-audit-vs-broker-review.html` |
| 8 | **FAQ: Questions Plan Sponsors Ask** | `/faq` | `faq.html` |

> The single most important Wix step on every page is pasting the **JSON-LD structured data** (Step D). That is where the AEO value lives, more than the visual build. Short on time: build the body simply, never skip the structured data.

## Per-page steps (repeat for each content page)

Open the matching blueprint HTML in a browser (and a text editor) so you can copy text + JSON-LD as you go.

**A. Create the page** — Wix Editor → Pages → **+ Add Page** → name it. Page Settings → **URL slug** → set per the table. For guides use the `/guides/` prefix if the plan allows nested slugs; otherwise a flat slug, consistently.

**B. SEO basics** — Page Settings → SEO Basics: **Title** = the blueprint `<title>` (already question-shaped); **Meta description** = the blueprint's meta description.

**C. Canonical** — Advanced SEO → Canonical = the blueprint's canonical URL.

**D. Structured data (THE AEO STEP)** — Advanced SEO → Structured Data Markup → +Add. Copy each `<script type="application/ld+json">` block's inner JSON from the blueprint; paste each as its own entry (Glossary: DefinedTermSet + Breadcrumb; Library: Article + Breadcrumb + DefinedTermSet; What We're Seeing: Article + Breadcrumb; Guides/Compare: Article + Breadcrumb + FAQPage (+HowTo on the how-tos); FAQ: FAQPage + Breadcrumb). Validate each at validator.schema.org before saving.

**E. Body** — native Wix elements (never body copy in an HTML-embed iframe). PBS v2 fonts/colors. Dark hero (eyebrow + H1 + one lead paragraph + breadcrumb), one H1 per page, H2 sections in Primary Blue. **Answer-first: the blueprint's first body sentence stays the first paragraph, verbatim.** Copy body text straight from the blueprint. Recreate internal links (+ the v2 linking rule: one money page + one toolkit).

**F. Navigation** — add under **Learn** in the header + the footer Reference column.

**G. Publish + verify** — open the live URL; Rich Results Test + schema validator; check title/canonical in View Source.

## After the pages: site cohesion (unchanged from v1)
Insights page cards → the new internal pages + the Guides & Answers row + FAQ into the Learn menu; Home stats band (real 2025 figures) + Contract Library card link; About (stats + Person/Org schema); Solutions (Service/ItemList schema); toolkit dynamic page (DigitalDocument schema bound to CMS); footers to four columns.

## Done = leadership measurable
With the spine + pages live: the tracker's monthly run should show the source-URL column shifting from Substack-only to `rxbs.org`, AND the lead Sheet's source field should show "Search/AI assistant" rows arriving. Reach + conversion, both measured — that is the v2 definition of the build working.
