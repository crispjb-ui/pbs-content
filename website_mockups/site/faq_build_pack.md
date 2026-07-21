# FAQ Page Build Pack — `rxbs.org/faq`

_Created Jul 21, 2026. Next build after the Contract Language Library. **FAQPage schema is the format AI engines quote most readily**, and the 14 Q&As are the buyer-anxiety map rendered as answer content — this page is built to be the citation target for the "how do I know if we are overpaying our PBM"-class queries. Build method: duplicate the live `/glossary` page (same archetype), swap per this pack._

**Content is done.** `website_mockups/site/faq.html` is the finished page: answer-first lede + 14 questions in 4 persona sections + FAQPage schema. Companion files: `faq_jsonld_paste.md` (2 Wix-ready blocks) + the rendered copy source (delivered in chat; regenerate from faq.html anytime).

## 1. Build approach
Native Wix text elements only (never an HTML embed — embedded content is not indexed, and this page IS its text). Duplicate `/glossary`, swap content.

## 2. SEO Basics (Wix → page Settings → SEO)
- **Title tag:** `PBM Questions Plan Sponsors Ask (CFO, HR, and Broker FAQ) | Prescription Benefit Solutions`
- **Meta description:** `The PBM questions self-funded plan sponsors actually ask, answered plainly: how to tell if you are overpaying, fiduciary exposure, renewal leverage, straight answers from your PBM, and more.`
- **URL slug:** `/faq` · **Canonical:** `https://www.rxbs.org/faq` · **Indexable:** ON.

## 3. Structured data — AS BUILT (Jul 21, 2026) + the oversized-block convention

**As built:** the BreadcrumbList lives in the page's SEO panel (Advanced SEO → Structured data). The **FAQPage block lives in Settings → Custom Code** (snippet "FAQ FAQPage", FAQ page only, Head) — NOT the SEO panel. Wix's panel re-formats pasted JSON (pretty-print + its own script wrapper) and counts the added characters against its 7,000-char cap, so the 6,441-char minified block kept failing on Apply. Custom Code renders byte-for-byte with no cap. **Future edits to the FAQ questions: update the page text, the Custom Code snippet, and this repo's paste file together.**

**Convention forward (applies to the guide pages, What We're Seeing, any big schema):** blocks that fit the panel comfortably (~6K chars AFTER Wix's reformatting inflation, so realistically ≤5K minified) go in the panel; anything bigger goes straight to **Settings → Custom Code** (with its own `<script type="application/ld+json">` wrapper, page-specific, Head). Never paste a script wrapper into the SEO panel (the panel adds its own).

**Validation note (2026 reality):** Google's Rich Results Test no longer lists FAQ for general websites (FAQ rich results were restricted to gov/health sites in Aug 2023), so it shows Breadcrumbs only even when the FAQPage markup is perfect. **The validator of record is validator.schema.org** — the live page passed Jul 21, 2026: FAQPage 0 errors / 0 warnings / 1 item + BreadcrumbList clean. The FAQPage payload is for answer engines (AEO), not Google dropdowns.

### Original section 3 (superseded by as-built above)
Delete the glossary's two inherited blocks; paste the 2 blocks from `faq_jsonld_paste.md` (FAQPage 6,456 chars — fits Wix's 7,000-char field; BreadcrumbList 2-level). **The visible on-page Q&A text must match the schema answers** (copy verbatim from the copy source — that is what makes FAQPage rich results and AI citations legitimate rather than spammy).

## 4. Page structure (top to bottom, mapped from the glossary duplicate)
1. **Hero** (dark band): eyebrow `Plan Sponsor FAQ` · H1 + sub-line from the copy source. **Jump chips → the 4 persona anchors:** `CFO & Finance` (`cfo`) · `HR & Benefits` (`hr`) · `Brokers` (`brokers`) · `Working with an auditor` (`auditor`). Four chips — delete the glossary's extras.
2. **Byline** (keep): `By Ginny Crisp, PharmD · Reviews hundreds of PBM contracts a year · Published July 2026 · Updated July 2026`.
3. **Lede** (copy verbatim — answer-first).
4. **Four persona sections**, each: H2 (with anchor ID) + one-line section lead + its Q&A blocks. **Question = H3, answer = paragraph(s) under it.** Do NOT use Wix accordion/collapse elements — collapsed content is weaker for indexing and the page length is fine; the persona chips handle navigation.
5. **Lead CTA** (keep the glossary's Toolkit Library card as-is).
6. **"Keep reading"** — live pages only: Glossary + Contract Language Library. (The guides join when they publish.)
7. **Closing CTA** (keep): request-a-call, `?topic=contract-review`.

## 5. Link discipline inside answers
The copy source already applies confirm-before-link: glossary/CLL/toolkit-library/request-a-call references are live-linked; references to unbuilt pages (guides, what-we-are-seeing, insights) are plain text and get linked when those pages publish. The service-mention links route to `request-a-call?topic=contract-review` per the Jul 21 convention (Our Solutions is slated for rebuild; never link a page mid-sunset).

## 6. Question sections and counts (14 total)
- **If you own the budget (CFO and Finance)** (`cfo`) — 5 questions
- **If you run the benefit (HR and Benefits)** (`hr`) — 5 questions
- **If you advise the plan (Brokers and Consultants)** (`brokers`) — 2 questions
- **About working with an independent auditor** (`auditor`) — 2 questions

## 7. Build checklist (Wix)
- [ ] Duplicate Glossary → rename `Plan Sponsor FAQ` → slug `/faq`; SEO fields per §2.
- [ ] Swap content per §4; set the 4 anchors; rewire 4 chips; delete leftover glossary anchors.
- [ ] Delete inherited JSON-LD; paste the 2 blocks; Publish.
- [ ] Nav: add to the **Resources** dropdown (after Contract Language Library) + footer Reference column.
- [ ] Verify chips scroll; mobile preview; Search Console → request indexing for `/faq`.
- [ ] Tell Claude it renders live → repo re-point pass (FAQ joins the glossary/CLL/for-brokers cross-link set + the answer-page cluster links).
