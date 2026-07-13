# Entity Authority & Off-Site Plan (AEO/GEO)

_Created Jun 20, 2026. The off-site, compounding half of AEO/GEO leadership: the things that build the **entity** AI engines trust, which on-site schema alone cannot. These are mostly Ginny-executed (accounts, outreach, submissions); each section is ready to act on. Companion to `website_mockups/site/geo_seo_plan.md` and scored by `ai_visibility_tracker.md`._

## 1. Wikidata entities (#11) — highest-leverage off-site signal — ✅ DONE Jul 13, 2026

**Both items LIVE (created by Brett, Jul 13, 2026):**
- **Prescription Benefit Solutions → Q140537123** — instance of: business · country: US · headquarters: Charleston SC · official website: rxbs.org (language-of-work qualifier: English) · inception: 2016 · industry: consulting · founded by: Ginny Crisp · LinkedIn company ID: rx-bs. Statements referenced to rxbs.org + the LinkedIn company page.
- **Ginny Crisp → Q140537997** — instance of: human · occupation: pharmacist + consultant · employer: Q140537123 · position held: chief executive officer · educated at: UNC Eshelman School of Pharmacy · citizenship: US · LinkedIn personal profile ID: ginnycrisp. Every statement referenced (LinkedIn profile / rxbs.org).

The two items cross-link (employer ↔ founded by) and corroborate the on-site Organization + Person schema exactly — the disambiguation fix for the "PBS = Public Broadcasting Service" collision at the LLM-grounding layer. Watch the monthly `ai_visibility_tracker.md` runs for entity-prompt movement; a Knowledge Panel becomes possible as these age. Account note: created under a company-named Wikidata account; if a username-policy notice ever arrives, request a rename — the items stand regardless.

_Original spec retained below for reference._
LLMs weight Wikidata disproportionately for entity grounding, and it is far easier to get into than Wikipedia (no notability bar as steep; structured statements, not prose). Create two items at [wikidata.org](https://www.wikidata.org) (free account).

**Item A — Prescription Benefit Solutions (organization)**
- Label: `Prescription Benefit Solutions`
- Description: `American independent pharmacy benefits consulting firm`
- Statements: instance of (P31) → business (Q4830453) / consulting firm; country (P17) → United States; headquarters location (P159) → Charleston, South Carolina; official website (P856) → https://www.rxbs.org; industry (P452) → pharmacy benefit management / health care consulting; founded by (P112) → Ginny Crisp; inception (P571) → [founding year].
- Sitelinks/identifiers: official website; LinkedIn company ID (P4264) once confirmed.

**Item B — Ginny Crisp (person)**
- Label: `Ginny Crisp`
- Description: `American pharmacist and pharmacy benefits consultant`
- Statements: instance of (P31) → human (Q5); occupation (P106) → pharmacist (Q105186) and consultant; employer (P108) → Prescription Benefit Solutions; position held (P39) → chief executive officer; educated at (P69) → [PharmD school]; country of citizenship (P27) → United States; official website / social: X username (P2002) → ginny_crisp; described at URL → https://www.rxbs.org/about.

**Why:** once these exist and corroborate the on-site Organization + Person schema (matching name, role, location, website), the entity resolves cleanly and the "Prescription Benefit Solutions" vs. "PBS / Public Broadcasting Service" collision stops hurting. Feeds a Google Knowledge Panel over time.

## 2. Substack Recommendations network (#17) — biggest Substack-growth lever
Substack's native cross-recommendation is the highest-yield growth path and is currently unused. Get **Benefit Blind Spots** recommended by aligned publications.
- **Primary target: Wendell Potter / HEALTH CARE un-covered.** The relationship already exists (Ginny is a contributor). Ask for a mutual Substack Recommendation. PBS recommends his publication back.
- **Secondary targets:** drug-pricing / benefits Substacks in the transparency lane (e.g., Drug Channels-adjacent writers, benefits-consultant newsletters, health-policy writers Ginny engages on X).
- **Mechanic:** Substack Dashboard → Settings → Recommendations → add the publications PBS wants to recommend; then ask each to reciprocate.
- **The ask (paste-ready, for the next Potter touch):**
  > "Would you be open to a mutual Substack recommendation? I'd add HEALTH CARE un-covered to Benefit Blind Spots' recommendations, and if it's a fit on your side, a recommendation back would put the pharmacy-contract work in front of exactly the readers it's for. Happy to go first."
- **Measure:** subscribers attributed to "Recommendations" in Substack's growth source breakdown.

## 3. Off-site / community presence (#19) — where AI Overviews and ChatGPT graze
Google AI Overviews and ChatGPT lean heavily on third-party listicles, Reddit, and Quora. Schema cannot fake this; presence has to be earned.
- **"Best of" listicles:** get "Prescription Benefit Solutions" included in roundups like "best independent PBM auditors / pharmacy benefits consultants for self-funded employers." Pitch the firm to the authors of existing listicles; the 2025 proof figures ($78.7M contracted, 203 clients) and the Potter/Derms-on-Drugs credentials are the hook.
- **Reddit / Quora (Ginny's expert voice, disclosed):** answer real questions in r/benefits, r/HealthInsurance, r/humanresources, and Quora on "how do I audit my PBM," "is spread pricing legal," "should we carve out pharmacy." Give a genuinely useful answer first; disclose the affiliation; link the relevant rxbs.org guide/glossary page only where it actually helps. Never astroturf; one helpful disclosed expert answer is worth more than ten promotional ones.
- **Directories / NAP consistency:** keep Name + Charleston, SC + www.rxbs.org identical across LinkedIn (company + Ginny), Google Business Profile, Crunchbase, and any benefits-industry directories (Health Rosetta, Mitigate). Inconsistent NAP fragments the entity.

## 4. Google Knowledge Panel (compounds from 1-3)
Not directly "created"; it emerges once the entity is well-corroborated. The inputs are exactly the above: Organization + Person schema (live), Wikidata (#1), consistent NAP (#3), and third-party mentions (#3 + the Potter contributor pieces + podcast guesting). Once a panel appears, claim it via Google's "claim this knowledge panel" flow.

## Sequence (fastest entity lift first)
1. Wikidata Item A + B (an afternoon; immediate grounding value).
2. Confirm + standardize NAP across LinkedIn/GBP/Crunchbase; fill the `sameAs` LinkedIn URLs in the site schema.
3. Potter mutual Substack recommendation ask (next touch).
4. Reddit/Quora expert answers (ongoing, ~1-2/week).
5. Listicle outreach (ongoing).
6. Watch for a Knowledge Panel; claim when it appears.

_All of this is tracked for movement in `ai_visibility_tracker.md` (the "competitors cited" + "source URL" columns reveal where off-site presence is still needed)._

---

# EXECUTION GAME PLAN (added Jul 10, 2026 — who builds what, where)

_The strategic sections above stand; this is the operational layer. Key reassignment: the original plan tagged everything 🟧 Ginny, but most items need no Ginny identity — **Brett executes Sprints 1-2; Ginny owns only the relationship asks and the Reddit/Quora voice (Brett can draft).** Why this is the priority: branded web mentions are the single strongest AI-visibility predictor (0.664 correlation, Ahrefs 75K-brand study), Reddit ≈ 47% of Perplexity's top consideration citations, and every item below was still unstarted at the Jul 6 baseline while Innovative Rx Strategies led every surface._

## SPRINT 1 — Brett, one sitting (~3-4 hrs), no dependencies, do first

### 1a. Wikidata items (~1 hr) — highest single lever
- Go to **wikidata.org** → create a free account (any account; does NOT need to be Ginny's).
- Create **Item A (org)** and **Item B (Ginny)** exactly per §1 above. Now-confirmed values: educated at (P69) → **UNC Eshelman School of Pharmacy** (Q7845916); occupation → pharmacist; position → chief executive officer.
- **Add references to every statement** (this is what keeps items from being flagged): official website rxbs.org/about, the LinkedIn URLs, the HEALTH CARE un-covered contributor page (third-party corroboration), the SHRM podcast episode page.
- Skip any statement you can't reference; a lean, well-referenced item beats a full, unreferenced one.

### 1b. Directory + NAP sweep (~1.5 hrs) — identical everywhere: `Prescription Benefit Solutions · Charleston, SC · www.rxbs.org`
| Surface | Action | Note |
|---|---|---|
| **Google Business Profile** | Create/claim at business.google.com | Verification may need postcard/phone at the Charleston address (Ginny supplies address choice). Category: "Business management consultant" or closest health-benefits fit. THE prerequisite for Google reviews + Knowledge Panel. |
| **Bing Places** | bingplaces.com — import from GBP once GBP exists | 5 min; Bing feeds ChatGPT. |
| **Crunchbase** | Create the org profile (free tier) | Founded year, Charleston, rxbs.org, Ginny as founder/CEO. LLMs train on Crunchbase. |
| **Shortlister (myshortlister.com)** | **Vendor signup / "Get Listed"** → build the PBS vendor profile | The baseline found their "Top Pharmacy Benefits Consultants" listicle ranking for the consideration queries. Being IN their marketplace is the path INTO that listicle. Use the credentials one-pager content + 2025 proof stats. |
| **LinkedIn company page** | Confirm name/location/website exact | Also feeds `sameAs`. |
| **Health Rosetta / Mitigate Partners** | Evaluate only (membership orgs, may have cost/commitments) | Log a yes/no with Ginny; don't force. |

### 1c. Google reviews seeding (15 min setup, after GBP verifies)
- Generate the GBP review link; fold the ask into the existing testimonial asks (`engagement_closeout_kit.md` rules: never testimonial + referral in the same email). Target: 3-5 reviews by September. Gemini explicitly flagged "limited public reviews" at baseline.

## SPRINT 2 — Ginny, ~30 min total (relationship asks only she can make)

### 2a. Potter mutual Substack Recommendation (5 min)
- Substack Dashboard → Settings → Recommendations → add HEALTH CARE un-covered first, then send the paste-ready ask in §2 above on the next Potter touch.

### 2b. Secondary recommendation targets (10 min)
- 2-3 asks to aligned newsletters Ginny already engages (drug-pricing/benefits Substacks, X relationships). Same template.

### 2c. Testimonial + review asks (15 min)
- The standing 3-testimonial ask (client + broker + CFO) now does double duty: site quote cards AND Google reviews. Ginny picks the 3-5 names; Brett sends per the closeout-kit rules.

## ONGOING — the weekly branded-mention engine (45 min/week, split)

### 3a. Reddit + Quora expert answers (1-2/week; Ginny's voice, Brett may draft for her approval)
- **Account setup first (Brett, once):** create Ginny's Reddit account NOW and let it age; build light karma with a few normal comments before any expert answer. Brand-new accounts posting expert content get removed.
- **Where:** r/humanresources, r/HealthInsurance, r/employeebenefits, r/smallbusiness (self-funded threads); Quora topics: PBM, pharmacy benefits, self-funded health plans. Verify each sub's self-promo rules at execution; several ban links entirely.
- **The play:** answer real questions ("how do I audit my PBM," "is spread pricing legal," "should we carve out pharmacy") with a genuinely useful answer; disclose the affiliation ("I run an independent pharmacy benefits consulting firm"); link a glossary/guide page ONLY where allowed and helpful. **The naked branded mention is the win even with no link** (ghost-citation research) — never force a URL into a link-hostile sub.
- **Sourcing questions:** saved Reddit searches for "PBM," "pharmacy benefits," "rebate"; 10 min/week scan.

### 3b. Listicle outreach (Brett, 1 pitch/week until placed)
- **Target list:** the Shortlister consultants listicle (via the 1b vendor profile), plus every listicle/roundup the monthly tracker's "top third-party sources" column surfaces (baseline set: the pages engines cite instead of rxbs.org — out-answer OR get added).
- **Pitch template (from team@rxbs.org or Ginny's email):** two sentences — who PBS is (independent, pharmacist-led, no PBM ties) + the proof ($78.7M contracted savings across 203 clients in 2025; HEALTH CARE un-covered contributor; SHRM podcast) + the ask (inclusion in the roundup) + link to rxbs.org/about. No follow-up past one bump.

### 3c. Podcast guesting (already running — reclassify as an off-site AEO channel)
- Every episode page is a third-party branded mention + backlink. Keep `podcast_pitching_guide.md` cadence; log appearances in the tracker as entity signals.

## LATER / TRIGGERED
- **Wikipedia:** do NOT attempt now (notability bar; premature attempts get deleted and salt the well). Trigger: after the January 2027 Transparency Index publishes + earns press coverage, reassess with the Potter byline + podcast trail as sources.
- **Knowledge Panel:** watch monthly (search "Prescription Benefit Solutions"); when a panel appears, claim it via Google's flow. It emerges from Sprints 1-2; it is not directly buildable.

## Measurement hooks
- Log each completed item in `ai_visibility_tracker.md`'s trend log (so citation movement can be attributed).
- Wix AI Visibility's mention/sentiment columns pick up branded-mention growth; the monthly 20-prompt run watches the consideration queries where off-site is the deciding layer.
- Sprint-1 done = all six 1b rows live + both Wikidata items published. Ongoing healthy = 1-2 Reddit/Quora answers logged weekly + 1 listicle pitch out weekly.
