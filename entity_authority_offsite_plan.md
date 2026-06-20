# Entity Authority & Off-Site Plan (AEO/GEO)

_Created Jun 20, 2026. The off-site, compounding half of AEO/GEO leadership: the things that build the **entity** AI engines trust, which on-site schema alone cannot. These are mostly Ginny-executed (accounts, outreach, submissions); each section is ready to act on. Companion to `website_mockups/site/geo_seo_plan.md` and scored by `ai_visibility_tracker.md`._

## 1. Wikidata entities (#11) — highest-leverage off-site signal
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
