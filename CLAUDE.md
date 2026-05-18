# PBS Content Ecosystem - Claude Context

## Critical Rules

- **Company name:** Prescription Benefit Solutions (PBS). Never use RXBS.
- **CEO attribution:** Ginny Crisp, PharmD (not "Dr. Ginny Crisp" because Dr. and PharmD are redundant)
- **No em dashes or hyphens as sentence separators.** Never use " - " to separate clauses mid-sentence (e.g., "the worst outcome - high spend" or "least understood - and most manipulated - aspects"). Use commas, colons, semicolons, periods, or parentheses instead. Hyphens are fine for compound words (self-funded, cost-plus) and formatting labels (Slide 1 - Cover).
- **No fabricated statistics.** Use "significant," "substantial," "meaningful" instead of invented numbers.
- **Wednesday roundup date rule (added May 5, 2026):** The roundup is drafted Tuesday and ships Wednesday at 7:30 AM EST. Every date string inside the roundup file (article title, `**Publish:**` line, SEO Title, SEO URL Slug, Meta Description if dated, AND the date subtitle inside the image-generation prompt) refers to the **Wednesday publish date**, never the Tuesday generation date. Before saving any roundup draft, scan every date occurrence and confirm it is Wednesday. The only Tuesday dates in the file are (a) the `Generated:` header timestamp and (b) the filename slug `roundup_YYYY_MM_DD.md`, which is intentionally Tuesday so files sort by drafting day. This rule was added because the image prompt has previously rendered with Tuesday's date, mismatching the rest of the file.
- **Disclaimer policy (updated April 17, 2026):** Use "Illustrative example for educational purposes. Actual amounts vary by plan." ONLY when the preceding content includes specific dollar figures, percentages, or calculations a reader might act on as if they were their own numbers. Do NOT use the disclaimer after qualitative narrative (member stories, client conversations, "we see this pattern" observations) with no quantitative claim. The disclaimer carries more weight when it only appears where it matters.
- **Wednesday LinkedIn hook test:** Every Wednesday text post must pass the confrontation test: names an adversary, creates a knowledge gap, or provokes discomfort. Informational openers consistently hit 183-499 impressions. Confrontational openers hit 1,993-41,594. The dollar-comparison structure (e.g., "$20 vs $100 for the same drug"; "$25-40 admin, $60-80 clinical") has drawn 7-30 comments per post.
- **Weekly winning-profile post rule (added May 8, 2026):** Every week's 4-post LinkedIn calendar must include at least one post that hits **5+ of the 10 documented winning traits**: (1) decoder shape, (2) dollar-comparison shape, (3) named-actor framing, (4) plan-sponsor-actionable, (5) confrontational hook, (6) messy infographic format, (7) first-comment Substack cross-promo, (8) proprietary anchor, (9) save-driven structure, (10) single-image / photoreal aesthetic. The W18 Channel Pricing Thursday post hit 7 traits and broke out at 17K+ impressions, +22 followers, 18 saves, 17 comments, 24% Hospitals & Health Care segment penetration on a non-Cuban, 10 AM publish — the canonical reference for what the profile delivers. Each week's drafting starts with: *"Which of the 4 posts will be the 5+-trait post? Build that first; backfill the others around it."* For weeks where the natural topic doesn't support 5+ traits (Memorial Day, July 4 personal slow-week, member-communication-heavy weeks), explicitly acknowledge the gap and pick the highest-trait achievable post — no faking it.

  **Two-track winning-profile architecture (refined May 8, 2026 evening):** PBS runs **two parallel winning-profile tracks per week** with two distinct cross-promo paths, two distinct cadences, and two distinct reader behaviors:

  | Track | Day | Format preference | Cross-promo target | Cadence | Reader behavior |
  |---|---|---|---|---|---|
  | **Track A — Reach + Field Note conversion** | **Thursday (every week)** | Messy infographic / photoreal aesthetic (Marked-Up Contract Page, Chart-on-Whiteboard, Sticky Note Dashboard, Ledger Annotated, paper-card photoreal, pill-bottle photoreal). Slot A/B/C carousels can also fit when reformatted with photoreal aesthetic (W19 5 Formulary Questions paper-card carousel demonstrated this). | **Same-day Substack Field Note** | Every week | Reach + comments + saves + fast Substack conversion. W18 Channel Pricing pattern. |
  | **Track B — Save-driven reference + Contract Library** | **Tuesday (every 2 weeks)** | Contract Comparison carousel (Library NN aesthetic — Plex Mono off-white paper, redline aesthetic) | **Substack Contract Language Library** (always-on evergreen) | Every 2 weeks | Saves, 30-day profile views, long-tail bookmark behavior. Library 01 pattern. |

  Both tracks ship in Library weeks (every 2 weeks). In non-Library weeks only Track A ships; Tuesday non-Library carries cycle-rotation visuals without dedicated cross-promo. **Track A is the secret-sauce track per the data** — messy infographic photoreal aesthetic on Thursday is the highest-reach format and the strongest Substack-conversion path. Track B is the reference-asset complement.
- **Field-Note-pairing rule (added May 8, 2026; refined evening of May 8 to Thursday-only; cannibalization clarification added May 9, 2026):** Track A's Thursday LinkedIn post and the same-week Substack Field Note (Thu 7:30 AM) should be on the **same topic** so the first-comment Substack cross-promo on the LinkedIn post drives subscribers to a Field Note that delivers the deeper read. The W18 Channel Pricing pattern is canonical: Thursday Channel Pricing messy infographic (LinkedIn) + Thursday "What We See When We Audit Channel Pricing" Field Note (Substack) + first-comment link → 4-5 free Substack subs traceable. When the existing Field Note doesn't match the Thursday LinkedIn post, retarget the Field Note (move the displaced draft to `field_note_backlog.md` with re-anchoring notes). **Track B's Tuesday Library NN carousel is NOT subject to this rule** — Library NN's natural cross-promo target is the Contract Language Library (always-on evergreen Substack post), not the Field Note, so Library NN does not need same-day Field Note pairing. Library NN can ship Tuesday and the Field Note can ship Thursday on a different topic without breaking the cross-promo logic.

  **Triple-distinct topic rule (load-bearing, added May 9, 2026; adjacency ceiling refined May 9, 2026 evening):** Monday LinkedIn newsletter topic, Tuesday LinkedIn topic, and Thursday LinkedIn / Field Note topic must all be **three different topics** to satisfy both anti-cannibalization and Thursday Excellence simultaneously. **Adjacent is the ceiling, not same subject matter is the floor.** Thursday LinkedIn / Field Note may sit in an adjacent pillar or related plan-sponsor concern (W18 canonical pattern: Monday Drug Pipeline / Thursday Channel Pricing — adjacent plan-sponsor audit-rights territory, different subject matter), but must not share Monday's specific subject. The W15 cannibalization compression triggers on subject-matter overlap, not pillar-family proximity, so adjacent works. Same subject (Monday Biosimilar / Thursday Biosimilar Provisions) breaks; adjacent (Monday Biosimilar / Thursday Specialty Routing) holds. The W15 data point (Thursday on Monday topic = 340 impressions vs. 22K floor) established the cannibalization rule; the W18 data point (Thursday on Field Note topic distinct from Monday = 17K + 4-5 Substack subs) established the Thursday Excellence rule. The two rules only coexist when Field Note is **decoupled from Monday's topic by default**. Field Notes do NOT automatically inherit Monday's topic; Field Notes serve the Thursday cross-promo lever. Monday's depth is handled by Monday's integrated tool / toolkit handout, not by Thursday's Field Note. **Pre-publish check: write the three topics on a single line (Mon / Tue / Thu+Field Note). If any two collapse to the same topic family, redraft.** Canonical correct setups: W18 (Pipeline / CFO Numbers / Channel Pricing), W19 (Fiduciary / Library 01 Pricing Guarantees / Formulary Questions), W23 (Mid-Year Claims / Library 03 Audit Rights / Admin Fees). Canonical broken setups: W20 (Manufacturer Programs / Iceberg / Manufacturer $5,000 — Mon = Thu, biosimilar-style cannibalization), W22 pre-fix (Biosimilar / CFO Numbers / Biosimilar Provisions — Mon = Thu). When a week has Mon + Field Note already aligned, retarget the Field Note (not Monday); the displaced Field Note draft goes to `field_note_backlog.md` for a future week where Monday's topic is in a different pillar family.
- **Thursday Excellence Rule (added May 8, 2026 evening, required behavior on every Thursday post W20 forward):** Every Thursday LinkedIn post must hit the W18 Channel Pricing breakout standard. The W18 reference: 17K impressions / +22 followers / 18 saves / 17 comments / 4-5 attributed Substack subs / 24% Hospitals & Health Care segment penetration on a non-Cuban 10 AM publish. The five components, all required:

  **(1) Format = messy infographic, photoreal aesthetic preferred.** Marked-Up Contract Page, Chart-on-Whiteboard, Sticky Note Dashboard, Ledger Annotated, paper-card photoreal, pill-bottle photoreal, contract-page-with-red-pen aesthetic. Single image at 1080x1350 px. The "secret sauce" format per the data. Slot A/B/C carousel weeks must reformat to messy-infographic-adjacent aesthetic (W19 5 Formulary Questions paper-card carousel demonstrated this works for Slot C).

  **(2) Hook = confrontational, named-actor.** Names PBM (or provider, manufacturer, or rebate aggregator) as the actor. Names the plan as the victim or the contract as the leverage point. Creates a knowledge gap or provokes discomfort. Confrontational hooks documented to outperform informational openers by 10-100x in the data set. Examples that hit the bar: *"Same drug. Same dose. Same manufacturer. Three channels. Three different prices, set by the same PBM."* / *"Five admin fee line items on your monthly PBM invoice. Five definitions the PBM wrote."* / *"$1,200 cream. $47 alternative. Same active ingredient."*

  **(3) Post Copy must include a proprietary anchor.** A PBS-specific data point AI cannot fake: *"hundreds of PBM contracts a year at PBS,"* *"the same five line items show up under different labels on nearly every contract,"* *"we run channel pricing audits as a standard part of our work."* The Humanize Check rule (Apr 19) requires one unfakeable detail per post; on Thursday this is non-negotiable.

  **(4) First Comment MUST reference the same-day Substack Field Note specifically and exclusively support the concept in the LinkedIn post.** This is the cross-promo conversion mechanism. Format: one or two sentences naming what is in the Field Note specifically (the diagnostic framework, the action plan, the data table, the redline language) — not generic "read more on Substack." The Field Note must EXCLUSIVELY support the LinkedIn post's concept; no diluted topics, no off-theme tangents. The pairing is the reason readers click through. W18 result: 4-5 free Substack subs from one post via this mechanism. **Skipping this on a Thursday post is breaking the rule.**

  **(5) Field Note exclusively supports the LinkedIn post's concept.** Same topic, deeper application. If LinkedIn is decoder, Field Note is operational follow-on (how to use the decoded vocabulary). If LinkedIn is dollar-comparison, Field Note is the audit framework that surfaces the gap. Field Note title may even reference the LinkedIn post explicitly (W23 Field Note title: *"Decoded the Admin Fees. Now Audit Them."* — directly references Thursday's "5 Admin Fee Terms Decoded" carousel). When the existing Field Note draft doesn't support the LinkedIn concept, retarget the Field Note and park the displaced draft in `field_note_backlog.md`. Do NOT keep mismatched Field Notes paired with elevated Thursday LinkedIn posts; the cross-promo conversion breaks.

  **Audit verification:** Every Thursday post draft must pass a 5-trait checklist before shipping. Document in the week file: which winning-profile traits the post hits, the proprietary anchor used, the first-comment text naming the Field Note asset specifically, and the Field Note title that exclusively supports the concept. If any of the 5 components fails, redraft before shipping; do NOT ship a half-elevated Thursday post. Thursday is the dominant LinkedIn day per the data (17K reach + 4-5 sub conversion vs. typical Tuesday at 1-3K with little sub conversion); compromised Thursday content is the highest-leverage drift on the calendar.
- **Tuesday Excellence Rule (added May 9, 2026, required behavior on every Tuesday post W21 forward):** Tuesday posts are not throwaway. Both Library NN Tuesdays (every 2 weeks) and non-Library Tuesdays (alternating) must be drafted to the same craft standard as Thursday: strong confrontational hook, proprietary anchor, named-actor framing where the topic supports it, and a deliberate cross-promo path. The cross-promo target differs by Tuesday type:

  **Library NN Tuesdays:** First comment routes to the Substack **Contract Language Library** (`benefitblindspots.substack.com/p/pbm-contract-language-library`), naming the specific provision family the carousel covers and what the Library expands on (full protective language, additional clauses in the same family). Library NN's bookmark-driven metric stays primary (12+ saves in 2 weeks); the Contract Library cross-promo is the long-tail conversion path.

  **Non-Library Tuesdays:** Cross-promo target depends on topic alignment:
  - If the Tuesday topic naturally supports the Monday Substack deep dive (same pillar, complementary angle, not topic-cannibalizing), first comment can route to the Monday deep dive with a specific asset reference (the integrated tool, the section, the framework).
  - If the Tuesday topic is genuinely non-topic (cycle-rotation pillar play), first comment can route to the most topic-relevant evergreen Substack asset (Contract Language Library, "What I'd Ask" scenario, prior Field Note).
  - If no Substack asset is a clean fit, **the first comment is omitted** and the post stands alone — but the post copy itself still hits the craft bar (confrontational hook, proprietary anchor, plan-sponsor-actionable). Standalone Tuesday is fine; lazy Tuesday is not.

  **Required components on every Tuesday post (Library and non-Library):**
  (1) Confrontational or provocative hook (named actor when topic supports; knowledge-gap or stat-shock when not).
  (2) Proprietary anchor (PBS specificity: hundreds of contracts a year, "every contract we review," specific clause numbers, scenario PBS has actually seen).
  (3) Strong image prompt with a topic-encoding central element (Substack image-prompt-recipe rules apply where the format is messy infographic or photoreal aesthetic).
  (4) Pillar hashtag set (3 tags, PascalCase, topic-anchor override where relevant).
  (5) First comment routing per the tree above (Library / topic-aligned Monday / evergreen Substack / omit).

  **What this rule prevents:** drafting non-Library Tuesdays as cycle-fill that meets the pillar grid but reads as filler against an elevated Thursday. The cycle grid sets pillar and format class, not craft standard. Both Tuesday types must hit the bar.
- **Tuesday visual ≠ Monday newsletter topic.** Data shows same-topic overlap causes algorithm cannibalization (623 vs 22,047 impressions).
- **Thursday visual evergreen rotation (updated April 19, 2026):** Thursday LinkedIn feed visual rotates through three evergreen formats on pillars DIFFERENT from Monday's topic, to protect Thursday reach from same-topic fatigue. Rotation: A) Contract Language Decoder (messy infographic) on **PBM Contract Insights**, B) "Same X. Same Y. Different Z." (carousel) on **Transparency & Industry Education** (shifted from Cost Containment, which averaged 3.2K impressions vs. Transparency's 26K ceiling), C) "5 Questions Your PBM Hopes You Don't Ask" (carousel) on **Clinical Pharmacy Perspectives** (shifted from Transparency; the format proved there, so the pillar experiment moves to a pillar with a viral track record). Week 15 Thursday visual on Monday topic hit 340 impressions; rotating to different pillar protects against that compression.
- **Tuesday visual 6-week pillar cycle (added April 19, 2026):** Tuesday non-topic visual rotates through a 6-week template-and-pillar grid so every pillar appears at least once per cycle while the top-performing pillars get weighted more through Thursday's evergreen doubling. Cycle: W1) Messy Infographic × PBM Contract Insights, W2) Carousel × Self-Funded Employer Guidance, W3) Infographic × Cost Containment Strategies, W4) Messy Infographic × Transparency & Industry Education, W5) Carousel × Broker/Consultant Resources, W6) Infographic × Clinical Pharmacy Perspectives. Cycle anchor: Week 17 = Cycle-W1. When the assigned Tuesday pillar collides with that week's Monday theme (would violate the anti-cannibalization rule), swap the Tuesday slot with the next non-colliding pillar in the cycle and carry the displaced pillar to the next available slot. Over any rolling 6-week window, distribution across 12 non-topic slots (Tuesday ×6 + Thursday ×6) is: PBM Contract Insights ×3, Transparency ×3, Clinical Pharmacy ×3, Cost Containment ×1, Self-Funded ×1, Broker ×1.
- **Brokers as partners, PBMs as adversaries.** Broker sensitivity is a real constraint (Week 14 Stop-Loss newsletter deleted over this). Content should explicitly frame brokers and consultants as the allies who flag these gaps, with the PBM as the structural adversary. Never implies that brokers missed something.
- **LinkedIn hashtag rule (added May 5, 2026):** **3 hashtags per post. Hard ceiling at 5.** 2026 algorithm data: posts with 1-3 hashtags average ~14.7 likes and convert ~12.6% better than zero-hashtag posts; 6+ hashtags trip LinkedIn's spam filter and suppress distribution. Hashtags are no longer a discovery mechanism (LinkedIn removed follow-hashtag in 2024-2025); they now function as SEO + topic-classification signals telling the algorithm who to surface the post to. **Format:** PascalCase always (`#SelfFundedEmployers`, never `#selffundedemployers`); placement at the bottom of the post body, after CTA, single line space-separated. **Composition:** 1 broad audience/industry tag + 2 niche topic tags. **Pillar rotation (use the post's pillar to pick the set):**

  | Pillar | Default 3-tag set |
  |--------|-------------------|
  | 1. Transparency & Industry Education | `#PBMTransparency #DrugPricing #PharmacyBenefits` |
  | 2. PBM Contract Insights | `#PBMContracts #SelfFundedEmployers #PharmacyBenefits` |
  | 3. Cost Containment Strategies | `#PharmacyCosts #SelfFundedEmployers #EmployeeBenefits` |
  | 4. Clinical Pharmacy Perspectives | `#ClinicalPharmacy #SpecialtyPharmacy #PharmacyBenefits` |
  | 5. Self-Funded Employer Guidance | `#SelfFundedEmployers #PlanSponsors #EmployeeBenefits` |
  | 6. Broker/Consultant Resources | `#BenefitsBrokers #PBMConsulting #EmployeeBenefits` |

  **Topic-anchor overrides:** when a post is anchored on a specific drug/program/regulation, swap the second tag for the topic anchor: `#GLP1`, `#Biosimilars`, `#340B`, `#ERISA`, `#FiduciaryDuty`, `#Compounding`, `#PBMRenewal`, `#Formulary`, `#StopLoss`, `#GeneTherapy`, `#CopayCards`, `#Rebates`, `#PBMRFP`, `#SiteOfCare`, `#NetworkDesign`, `#ChannelPricing`. Keep the broad tag and the audience tag from the pillar set; substitute only the topic slot. **Banned tags:** `#Motivation`, `#Hustle`, `#Success`, `#Leadership`, `#Inspiration` (too broad to give the algorithm useful data; pull the wrong audience). **Don't repeat the same exact 3-tag block on consecutive posts;** if Tuesday and Thursday both fall on the same pillar, vary the topic slot or audience slot to avoid pattern detection.
- **Blockquote formatting (added April 17, 2026):** Use markdown blockquotes (`>` prefix) on Substack deep dives, field notes, LinkedIn newsletters, and welcome emails for three content types: (1) sample contract language (both "what you might see" vague versions and "what to ask for" protective versions), (2) sample questions to send a PBM, (3) scoring rubrics and labeled-block structures that were formerly markdown tables. Blockquotes render on Substack as a vertical left-border accent that visually separates the copy-ready language from the surrounding narrative. Never use markdown tables in Substack-destination sections (they strip on paste). Use blockquote + line breaks instead.
- **Humanize Check (added April 19, 2026):** LinkedIn is saturated with four AI formulas: (1) Setup/reveal ("Most people think X. They're actually Y."), (2) Rule of three ("The same X. The same Y. The same Z."), (3) Contrast pivot ("Different X. Different Y. Same Z."), (4) Negation reveal ("That's not X. It's Y."). PBS uses all four legitimately. The difference between a human post and AI slop is the **anchor**, not the structure. **Rules:** (a) **One unfakeable detail per post.** A dollar figure PBS has seen, a specific contract section (§5.03), a drug name, a date ("last quarter"), a scene moment ("the room went quiet"). Something a ghostwriter or AI could not produce without being in the room. (b) **One formula per post, not stacked.** If the opener is Formula 4, supporting beats should be narrative, not Formula 2 or 3 underneath it. Tony Robbins stacked all four and got called out. (c) **Proprietary-data lines AI can't fake:** "We review hundreds of contracts a year. This phrase appears in most of them." The specificity requires having done the work. (d) **AI-tell blacklist:** "Here's the thing," "The truth is," "Most people don't realize," "paradigm," "game-changer," "at the end of the day," "It's not X. It's Y." with em-dashes (already a brand rule). (e) **Rotate origin-story posts weekly.** Pharmacist background, specific career moments. Highest-signal human format in Substack data. (f) **Irregular sentence length.** Rhythmic cadence (short-long-short-long) reads as AI. Arrhythmic reads as human. (g) **Proven formulas still in playbook:** "Same X. Same Y. Different Z." stays (22K impression proof point), but every slot must be anchored with proprietary specificity (exact PBM type, contract section, client scenario). If competitors AI-slop the structure, the signal erodes without the anchor. **Pre-publish check:** Can a reader point to one thing in this post only PBS could have written? If no, rewrite.
- **AI-Detection Scores Are Informational Only (added May 13, 2026; supersedes earlier same-day rule):** Originality.ai and similar AI-detection tools cannot reliably distinguish AI-drafted content from human-written formulaic policy/reform content. Empirical results from May 13, 2026 testing: AI-drafted Piece 4 humanize variants scored 89% and 100% AI-likely; the same content run through Originality's own humanizer tool also scored 100% AI-likely; approximately half of Wendell Potter's currently-published HEALTH CARE un-covered contributor roster scores 90-100% AI-likely on the same tool (indicating his editorial workflow does not gate on detection). The genre format (metaphor-led opener, named adversaries, prescriptive ending) is itself an Originality-detection trigger regardless of authorship; formulaic policy-reform writing flags near 100% even when written by a human in raw text. **Detection scores are therefore informational only, not gating.** The PBS Humanize Check rule (Apr 19) remains the load-bearing voice-authenticity metric — proprietary anchor, named villains by company, one unfakeable detail per piece, no AI-tell blacklist phrases, no em-dash separators. The earlier May 13 "AI-Detection Pass Rule" with a <10% target is rescinded as unworkable. If a future external publication explicitly requires AI-detection screening as a gating step in its editorial workflow, this rule revisits and Path C (human writer only, no AI tools in workflow including Grammarly and Word Editor) becomes the required workflow for that publication only. Until then: voice authenticity is the test that matters.

## Client Overview

| Field | Value |
|-------|-------|
| Company | Prescription Benefit Solutions (PBS) |
| Website | www.rxbs.org |
| Email | team@rxbs.org |
| Location | Charleston, SC |
| CEO | Ginny Crisp, PharmD |
| Industry | Pharmacy benefits consulting |

**What PBS Does:** PBM audits, contract language development, claims reviews, cost containment consulting for self-funded employers. PBS reviews hundreds of PBM contracts a year.

**Target Audience:** Self-funded employers, CFOs, HR Directors, CEOs, and benefits brokers/consultants who manage pharmacy benefits.

## Content Direction

**Default: Client-Centric Framing** - Frame content from the perspective of the self-funded employer (PBS's client):
- Plan cost impact and ROI
- Contract leverage and negotiation
- Financial exposure and risk management
- Strategic decision-making for plan sponsors

**When to Use Member-Centric:** Topics specifically addressing employee/plan participant experience or affordability impact.

## Four-Channel Content Ecosystem

### Channel 1: LinkedIn Feed
- **Profile:** Ginny Crisp's personal LinkedIn
- **Followers:** 1,374 (as of April 3, 2026)
- **Frequency:** 4x/week + company reshares
- **Tone:** Confident clinical provocation. Short. Declarative. One stat as hook.

| Day | Format | Time |
|-----|--------|------|
| Tuesday | Carousel / Infographic / Messy Infographic | 8:30 AM EST |
| Tuesday | Company Reshare | 1:30 PM EST |
| Wednesday | Strong POV Text Post (confrontational hook required) | 8:30 AM EST |
| Thursday | Carousel / Infographic / Messy Infographic | 8:30 AM EST |
| Thursday | Company Reshare | 1:30 PM EST |
| Friday | Tease Hook Text Post (teases next week's newsletter) | 8:30 AM EST |

**Posting-time test (concluded May 8, 2026 — reverted to 8:30 AM EST starting W19 Monday May 11):** Tue-Fri feed posts ran at 10:00 AM EST for four weeks (W16-W18) on research-backed "optimal time" guidance. Result across four weeks: no non-amplified post cleared 4K impressions. Highest non-Cuban 10 AM result was the W18 Channel Pricing messy infographic at 3,948 impressions; documented 8:30 AM era floors for the same format ran 5-15K non-amplified. Documented decoder floor of 20-25K (Cuban-cluster inclusive) did not return at 10 AM either — W16 PA decoder hit 7,048 only after Cuban repost. PBS's target audience (CFOs, HR Directors, brokers) appears to skew early-morning Eastern; "10 AM optimal" is generic professional-audience research that does not match PBS's plan-sponsor decision-maker segment specifically. **Reverted to 8:30 AM starting W19.** First full 8:30 AM week monitoring expectation: decoder, dollar-comparison, and messy-infographic posts should return to 5-15K non-amplified floor. If they do not, time was not the issue and other variables need examination.

**Personal post cadence (added May 8, 2026):** Personal posts (family milestones, career reflections, professional travel) ship **occasionally — once every 4-6 weeks max** — on **weekend placement** (Saturday or Sunday). Personal posts are **additions**, not replacements: never drop a Tue-Fri scheduled professional post to make room for one. Treat conversion as **zero by design** — the deliverables are algorithmic warmth (LinkedIn rewards varied content + high engagement-rate posts), brand humanization (reinforces "clinical pharmacist with opinions" positioning that AI-slop competitors cannot fake), and network maintenance (Ginny's broader professional network resurfacing as referral pathways). W18 daughter Summit Championship cheer post returned 47 reactions / 1,650 impressions / 3.15% engagement rate — 3-6× LinkedIn average, 0 followers gained, 0 Substack subs, demographics drift to Insurance 31% / Greater Indianapolis 7% (Ginny's local peer network, not plan-sponsor decision-makers). Topic guardrails: family milestones, career reflections, conference travel. Avoid politics, polarizing causes, or anything that pulls Ginny's expert positioning sideways.

### Channel 2: LinkedIn Newsletter
- **Name:** "The Pharmacy Benefits Briefing"
- **Subscribers:** 605 (as of April 3, 2026)
- **Frequency:** Weekly, Mondays at 7:45 AM EST
- **Length:** 350-500 words (~2-minute read)
- **Tone:** Executive briefing. Story-driven opening. First sentence is substance.
- **CTA:** Must reference specific Substack-exclusive content (not generic "read more")

### Channel 3: Substack Deep Dive
- **Publication Name:** "Benefit Blind Spots" (NOT Ginny's personal account)
- **Tagline:** "What your pharmacy benefits aren't showing you"
- **URL:** benefitblindspots.substack.com
- **Handle:** @ginnycrisp
- **Subscribers:** 15 (as of April 3, 2026)
- **Frequency:** Weekly, Mondays at 7:30 AM EST (15 min before LinkedIn Newsletter)
- **Length:** 1,400-1,600 words (~6-minute read)
- **Tone:** Analytical authority with personal voice. Uses "I" and "we" framing.

### Channel 4: Substack Field Note
- **Publication:** Benefit Blind Spots
- **Frequency:** Weekly, Thursdays at 7:30 AM EST
- **Length:** 400-700 words (~3-minute read)
- **Tone:** Practical, tactical, grounded in "we see this in our work" voice

### Channel 5: Substack Wednesday Roundup
- **Publication:** Benefit Blind Spots
- **Name:** "What Crossed My Desk This Week"
- **Frequency:** Weekly, Wednesdays at 7:30 AM EST
- **Length:** 400-600 words (~2-3 minute read)
- **Tone:** Informed authority with personal filter. Not a news aggregator. A clinical pharmacist telling you which stories matter for your plan.
- **Content:** 4-5 curated news stories from the past week, each with Ginny's take on employer impact
- **Automation:** Draft generated Tuesday morning via Claude Code Routine (RSS + web search), reviewed and edited before publish
- **Visual:** Accent Blue (#A7E0FA) background header images (distinct from Monday deep teal-blue and Thursday white)
- **Paywall:** Free (discovery/SEO play)

### Publishing Flow (Every Week)

```
SUBSTACK DEEP DIVE (7:30 AM Mon) - Full analytical deep dive with integrated actionable tool
    |
LINKEDIN NEWSLETTER (7:45 AM Mon) - Briefing version, CTA references specific Substack exclusive
    |
LINKEDIN CAROUSEL/INFO (10:00 AM Tue) - Standalone value, DIFFERENT TOPIC from Monday
    |
SUBSTACK ROUNDUP (7:30 AM Wed) - "What Crossed My Desk" weekly news roundup (automated draft)
    |
LINKEDIN TEXT POST (10:00 AM Wed) - Confrontational hook, no links
    |
SUBSTACK FIELD NOTE (7:30 AM Thu) - Shorter tactical article
    |
LINKEDIN CAROUSEL/INFO (10:00 AM Thu) - Weekly theme visual, first comment links to field note
    |
LINKEDIN TEASE HOOK (10:00 AM Fri) - Text post teasing next Monday's content
```

**Key Principles:**
- Newsletters own Monday. LinkedIn Feed never links externally.
- LinkedIn Newsletter bridges to Substack with specific exclusive-content CTA.
- Substack must offer unique value LinkedIn doesn't (actionable tools, templates, checklists).
- Tuesday visual MUST differ from Monday newsletter topic to prevent cannibalization.
- Thursday visual carries the weekly theme (3 days after newsletter, no overlap).
- Wednesday roundup is automated (draft generated Tuesday, reviewed before publish).
- LinkedIn feed posts shifted to 10:00 AM EST (research-backed optimal time).
- Three Substack articles per week (Mon deep dive, Wed roundup, Thu field note) supported by research for niche B2B cadence.

## Substack Content Strategy

### Article Format (Deep Dives)
- **Story-driven opening** with "I" or "we" voice and a specific example
- **Thesis stated early** (not buried at the end)
- **Narrative paragraphs** (3-5 sentences each, not sub-header-then-1-sentence)
- **5-6 bold section headers** (not 20+ italic sub-headers)
- **Actionable tool integrated** into the article body (template, checklist, walkthrough, scorecard)
- **Engagement CTA at end:** question to reader + share prompt + subscribe prompt
- **Minimal horizontal rules** (2-3 max, not between every section)
- **SEO subtitle** on every article

### Notes Strategy (Revised April 20, 2026)
- **3 Notes per day, 7 days/week** (~21 Notes/week), scheduled a week at a time via Substack's scheduler
- **Daily cadence: 2 origin-story / personal-experience Notes + 1 rotating content Note**
- **On launch days (Mon article, Wed roundup, Thu field note), the rotating slot is replaced by the launch teaser**
- Engagement data (April 2026): origin-story/personal Notes are the only format generating reciprocal engagement even from small-follower accounts. Provocative one-liners, industry observations, and expertise-only Notes have averaged <1 like per post. Double the personal-story slot; retire the non-performing formats to a single rotating slot per day.
- Published under Benefit Blind Spots publication (not personal)
- Engagement with other writers' Notes handled separately by Ginny daily

| Day | Morning (7-8 AM) | Midday (12-1 PM) | Afternoon (4-5 PM) |
|-----|------------------|------------------|---------------------|
| Mon | Article launch teaser + link | Origin story / personal | Origin story / personal |
| Tue | Origin story / personal | Rotating content (expertise insight, provocative one-liner, industry observation, or question) | Origin story / personal |
| Wed | Roundup teaser + link | Origin story / personal | Origin story / personal |
| Thu | Field Note teaser + link | Origin story / personal | Origin story / personal |
| Fri | Origin story / personal | Rotating content (forward-look or expertise insight) | Origin story / personal |
| Sat | Origin story / personal | Rotating content | Origin story / personal |
| Sun | Origin story / personal | Rotating content | Origin story / personal |

**Weekly mix:** 14 origin-story/personal Notes + 3 launch teasers + 4 rotating content Notes = 21 Notes/week.

### Subscriber Value-Add Content
- **Monthly Q&A Thread:** Last Thursday of each month, subscriber-only
- **Quarterly "What We're Seeing" Report:** Aggregated PBS contract review patterns, subscriber-only
- **Contract Language Library:** Free evergreen post (SEO/discovery play), updated quarterly
- **"What I'd Ask" Series:** Biweekly Tuesday, scenario-based question posts, subscriber-only

## Substack Differentiation from LinkedIn Newsletter

The Substack deep dive must contain content the LinkedIn newsletter does NOT include. Each week's Substack article integrates an actionable tool:

| Week | Substack-Exclusive Tool |
|------|------------------------|
| 14 | Stop-loss pharmacy language review (5 provisions to check) |
| 15 | 340B claims identification walkthrough (5-step process) |
| 16 | PA ROI audit template (scoring rubric + optimization plan) |
| 17 | Carve-out decision scorecard (10-factor evaluation) |
| 18 | Drug pipeline watch list 2026-2027 (5 categories + prep steps) |
| 19 | Fiduciary documentation checklist (5 categories + one-page test) |
| 20 | Copay card financial impact calculator (5-step model) |
| 21 | Quarterly Reporting Checklist (15-line audit framework + paste-ready broker request) |
| 22 | Biosimilar readiness assessment (6-factor checklist + scoring framework) |
| 23 | Mid-year claims red flag checklist (5-pattern assessment + interventions) |
| 24 | H1 benchmark dashboard (5 metrics + renewal readiness scorecard) |

The LinkedIn newsletter CTA references the specific exclusive tool: "This week's Benefit Blind Spots includes a [specific tool]. That [tool] is exclusive to the Substack: [link]"

### Plan Sponsor Toolkit deliverables (added Apr 24; expanded May 9, 2026 to two-handout-per-week)

Every Monday Substack deep dive whose integrated tool is a scorecard, checklist, framework, or scoring rubric ships a **branded printable handout** in `templates/documents/`. HTML source plus WeasyPrint-rendered PDF, same visual system as `week_16_pa_roi_audit_scorecard.html` (the Week 16 PA ROI Audit Scorecard, the first in the series).

**Two handouts per week (added May 9, 2026):** Each week now ships **two reference documents** — one paired with the Monday deep dive, one paired with the Thursday Field Note + LinkedIn conversion triad. The Thursday handout is the lead-magnet attached to the Thursday cross-promo (W18 Channel Pricing Audit Worksheet pattern); the Monday handout is the lead-magnet attached to the Monday deep dive's integrated tool (W16 PA ROI Audit Scorecard pattern). Naming convention: `templates/documents/week_{NN}_monday_{topic_slug}.html/.pdf` and `templates/documents/week_{NN}_thursday_{topic_slug}.html/.pdf`. When a week has only one deserving tool (Monday OR Thursday but not both), ship the one and skip the other rather than padding.

These handouts are the **lead-magnet ladder**. A vendor request for the PA scorecard validated the format the week it shipped. When paid subscriptions or email-gated downloads turn on, these become the gated assets that drive Substack subscriber conversion.

**Rules of production:**

(a) **Source of truth is the HTML in `templates/documents/`.** The PDF is a render artifact. To update content, edit the HTML and re-render.

(b) **Visual system is fixed.** PBS triangle wordmark in the page header, "PLAN SPONSOR TOOLKIT" eyebrow, numbered Primary Blue section pills, traffic-light Green/Yellow/Red indicators where there is a scoring rubric, redline-list section markers (§) where there is contract language, footer with "Benefit Blind Spots" attribution + rxbs.org + Substack URL + page number on every page. PBS v2 typography only (Plex Sans SemiBold display, Plex Sans Regular body, Plex Mono for numeric benchmarks and dates).

(c) **Length target: 2 pages.** PA scorecard fit two pages by design; future scorecards should aim for the same. If a tool needs more than 2 pages, the tool itself is too sprawling; tighten the rubric before tightening the layout.

(d) **Naming convention:** `templates/documents/week_{NN}_{topic_slug}.html` and `.pdf`. Week number is two-digit, zero-padded, matching the newsletter file (e.g., `newsletters/week_16_prior_authorization.md` → `templates/documents/week_16_pa_roi_audit_scorecard.html`). Examples: `week_16_pa_roi_audit_scorecard.html`, `week_17_carve_out_decision_scorecard.html`, `week_18_drug_pipeline_watch_list.html`, `week_19_fiduciary_documentation_checklist.html`. Slug is lowercased, underscore-separated, derived from the Monday topic. Week prefix keeps the toolkit roster aligned with the newsletter calendar at a glance.

(e) **Production cadence:** new scorecards ship by the Saturday before the Monday Substack deep dive that introduces them. The toolkit handout is referenced in the Substack article's tool section ("the printable scorecard is available below" + embedded PDF). Backfill earlier weeks as time allows; prioritize whatever ships next.

(f) **The toolkit is referenced from the LinkedIn newsletter CTA when present.** Update the standard CTA from "this week's Benefit Blind Spots includes a [specific tool]" to "this week's Benefit Blind Spots includes a [specific tool], plus a printable plan-sponsor scorecard" when a toolkit handout exists.

(g) **Substack PDF embed (added May 5, 2026):** The toolkit PDF embeds **natively in the Substack post editor via drag-and-drop**. Drop the `.pdf` from `templates/documents/` directly into the post body where the embed should render — Substack converts it to a styled inline file tile that readers can click to view or download. No external hosting (Google Drive, Dropbox) needed. The `**[EMBED PDF: <path>]**` marker in week files is the placement instruction for the publisher; replace it with the dragged-in PDF tile when publishing the post.

(h) **Per-week PART 1C Toolkit Pairings + Wix Build section (added May 14, 2026, required behavior):** Every newsletter week file that ships a Plan Sponsor Toolkit handout (Monday integrated tool, Thursday Field Note handout, or both) must include a `PART 1C: PLAN SPONSOR TOOLKIT PAIRINGS + WIX BUILD` section placed after the Field Note build (PART 1B) and before the LinkedIn Newsletter section (PART 2). This section is the operational source-of-truth for the Wix work Ginny does that week to wire up the new toolkit(s) as lead magnets.

For each toolkit shipping that week, the section contains:

  (1) **Wix Toolkits dataset row** — the full set of column values for the Wix Data Collection row: `slug`, `name`, `pdf_url` (filled after Wix Media upload), `mechanic_phrase`, `pillar`, `second_toolkit_name`, `second_toolkit_pdf_url`, `second_toolkit_blurb`, `field_note_title`, `field_note_url` (filled after Field Note publishes).

  (2) **Wix build checklist** — the per-toolkit weekly clicks: upload PDF to Wix Media Manager, paste public URL into the dataset row, add row to Toolkits collection, verify landing page renders at `rxbs.org/toolkit/<slug>`, submit test form, confirm Email 1 fires within 5 min with the right PDF. After Thursday Field Note publishes, update the `field_note_url` cell with the live Substack URL.

  (3) **Pairing rationale** — 1-2 sentences explaining why `second_toolkit` and `field_note` were selected per the pairing rules in `email_gated_toolkit/toolkit_dataset.md` (different mechanic from the first; PBM Compensation as the universal "zoom out" anchor for single-revenue-stream audits; Tier 1 toolkits pair down to Tier 2 mechanics; PBM Compensation entry pairs to Quarterly Reporting).

The repo-level companion file `email_gated_toolkit/toolkit_dataset.md` consolidates all toolkit pairings across the calendar; PART 1C is the week-file mirror that puts the same information in the natural workflow place. Without PART 1C, the Wix Email 2-5 sequence cannot be configured for the new toolkit and the toolkit cannot ship as a lead magnet.

Applies to all newsletter week files from W20 forward. Backfill prior weeks (W16-W19) as bandwidth allows; do not block forward content production on backfill. When a week ships zero toolkits (rare), the section can be omitted with a one-line note `_No Plan Sponsor Toolkit shipping this week._` so the absence is intentional and visible.

## Six Content Pillars

1. **Transparency & Industry Education** - How the PBM industry works
2. **PBM Contract Insights** - Contract language, audit rights, negotiation
3. **Cost Containment Strategies** - Practical approaches to reduce spend
4. **Clinical Pharmacy Perspectives** - Drug therapy, adherence, clinical programs
5. **Self-Funded Employer Guidance** - Decision frameworks for plan sponsors
6. **Broker/Consultant Resources** - Content for benefits advisors

## Performance Data (Updated April 21, 2026)

### Primary conversion metric: followers per 10K impressions

LinkedIn auto-prompts newsletter subscription immediately after a follow, so follower gain is a near-direct proxy for newsletter subscribers. Optimize posts for this conversion rate, not raw impression ceiling. Totals as of May 8, 2026: **1,726 LinkedIn followers, 836 newsletter subscribers, 65 Substack subscribers**. Cuban amplification confirmed for two consecutive weeks (Apr 19 cluster, Apr 30 W17 carve-out POV). Substack growth +18% week-over-week (May 4-8); ~6-7 of W18's +10 Substack subs traced to LinkedIn first-comment cross-promo. W18 Pipeline Monday deep dive cleared **119 Substack views** (4.76× typical), the highest single-post Substack view count in the data set since launch.

### All-time top posts by impressions (top 10)

| Rank | Impr | Post | Shape |
|------|------|------|-------|
| 1 | 64,323 | GLP-1 "1 in 12" | Topic: GLP-1 |
| 2 | 42,968 | 340B "$20 vs $100 same drug" (Mark Cuban reposted + commented, Apr 15) | Dollar comparison + amplifier |
| 3 | 39,025 | Generic drugs cost pennies to make, plans pay dollars | Dollar comparison |
| 4 | 26,491 | Express Scripts "flipped" drugs (news + article) | News critique |
| 5 | 24,830 | DIR fees are pharmacy's best-kept secret | Decoder |
| 6 | 23,275 | PBM contracts have their own language | Decoder (messy infographic) |
| 7 | 22,289 | PA "everyone agrees is broken" (Cuban commented, Apr 17 Fri) | POV / soft consensus |
| 8 | 21,444 | White bagging saves employers money (specialty) | Specialty / site-of-care |
| 9 | 20,683 | 5 PBM Reporting Questions carousel | 5-Questions evergreen carousel |
| 10 | 20,563 | Copay Accumulators ("There is a program running…") | Decoder |

### Key patterns from the data

- **Decoder shape is the most consistent conversion engine.** Three of top nine posts are decoder plays across two formats (messy infographic, text post). Floor: 20-25K impressions. Conversion rate: 9-12 followers per 10K, roughly 2-4x broad-topic content. Decoder content is the primary path from LinkedIn feed to newsletter subscriber, not just engagement.
- **Dollar comparison shape sits above decoder on impression ceiling.** Floor: ~39K. Ceiling with amplifier: 38-40K+. Converts at lower rates than decoder (~3-5 per 10K) but generates the most comments and reach.
- **GLP-1 is a topic-level amplifier.** 64K all-time ceiling. Any carousel, infographic, or text post that leads with GLP-1 gets a distribution bonus regardless of format.
- **Mark Cuban is a reliable amplifier on PBM/340B adversarial content.** Cuban-assisted posts see +60-75% reach vs. non-amplified baseline. Content shapes he engages with: dollar comparison, industry-adversary framing, decoder of PBM practices, 340B critique. Cannot be engineered per post; should be factored as a distribution variable when those shapes are on the calendar.
- **Cuban likes-only effect (added May 8, 2026):** Cuban likes alone produce **zero amplification**. The +60-75% reach lift documented above requires Cuban *comments or reposts* — likes are a vanity signal that does not move the algorithm. W18 confirmed this directly: Cuban liked all six PBS posts that week with no measurable reach lift on any of them. When Cuban engages with a post, check whether it is a like-only or a comment/repost before treating it as an amplification event in the tracker.
- **"Best-kept secret" is a proven confrontational opener** alongside the dollar-comparison structure already in the Wednesday hook rule.
- **Hospitals & Health Care is a new and growing audience segment** (9-19% of post viewers across recent posts). Pulled in by 340B and contract-language content. Worth treating as a named audience tier alongside the existing 24-41% 10,001+ employee segment.
- **Library 01 behaves as a reference document, not a feed post.** First branded Contract Comparison carousel shipped April 21, 2026. 3-day actuals: **2,129 impressions, +2 followers, 14 saves, 4 reposts, 3 sends, 25 profile viewers**. Against the 18K / 22-follower / 7-save / 11-repost forecast from comparable prior decoder carousels, reach and conversion came in at 9-12% of forecast while saves came in at 200% of forecast. The divergence is consistent: contract-language carousels dense with redlines and side-by-side legal quotes do not travel on the LinkedIn feed the way dollar comparisons or simple decoders do, but they get bookmarked at rates no other PBS format matches. **Reframe Library NN as bookmark-driven reference assets** whose success metric is saves and long-tail profile visits, not first-week impressions. Backfill Library 02-N against the same metric set.
- **Confrontational hooks outperform informational by 10-100x** on LinkedIn (carried from prior data set, still holds).
- **Newsletter is the primary conversion engine:** 735 subs at 49% open rate, accelerating.
- **Saves correlate with educational depth:** checklists, frameworks, comparisons get bookmarked.

### Content Shape Library (reach for these when drafting)

Four proven structural shapes with measured floors, plus one reference-asset pattern. Each can be executed in multiple formats (text post, messy infographic, carousel, clean infographic). When drafting a Tuesday visual, Wednesday text post, or Substack note, start here.

| Shape | What it is | Floor (impressions) | Conv. rate (followers / 10K) | Best formats |
|-------|------------|---------------------|------------------------------|--------------|
| **Decoder** | "What X means" / "What they say vs. what it means" / contract or clinical terms translated | 20-25K | 9-12 | Messy infographic, Contract Comparison carousel, text post |
| **Dollar comparison** | "$X vs $Y for the same drug/service/scenario" | ~39K | 3-5 | Text post (Wednesday hook), One Number carousel |
| **Best-kept secret** | "X is pharmacy's best-kept secret. X means…" | ~25K | 6-8 | Text post, messy infographic |
| **5-Questions evergreen** | "5 questions your PBM hopes you don't ask" / "5 PBM reporting questions" format | ~20K | 5-7 | Carousel (locked as Thursday Slot C) |
| **Library NN reference asset** | Contract Comparison carousel with side-by-side weak/strong redlines on contract language | 2-3K first-week impressions (bookmark-driven, not feed-driven) | 1-2 (first week); real return is saves + 30-day profile visits | Contract Comparison carousel only |

**Decoder rule (reader-actionability, added Apr 24 after Weeks 15-16 review):** Decoder is the workhorse — lean into it until fatigue signals appear. Fatigue signal: two consecutive decoder posts with impressions below 15K, comments in low single digits, or saves below 3. When that happens, pause the next scheduled decoder slot and run a different shape (dollar comparison, industry news, origin story) while reassessing. **Additionally, before greenlighting any decoder, apply the reader-actionability test:** can a self-funded plan sponsor act on Monday based on this post? Contract-language decoders pass (PBM Contracts decoder: 11.8 / 10K conversion). Decoders of mechanisms that live outside the plan sponsor's direct control fail (340B pricing-gap decoder: 2.3 / 10K, below band — 340B economics sit with providers and hospitals, not plan sponsors). If the answer is no, reshape as a Wednesday POV (awareness play) rather than a Thursday decoder (conversion play).

**Dollar comparison rule (named-actor, added Apr 24):** Dollar comparison works only when the hook names someone getting fleeced. Template: `[Plan type] pays [$X]. [Actor] pays [$Y]. Same [drug / service / member]. [Actor] keeps the difference.` The 340B "$20 vs $100" post hit 42,968 impressions because it named the plan as payer and the provider as spread-keeper (and Cuban amplified). The admin-fee "$25-40 admin. $60-80 clinical. Some bundle it." post hit 1,336 impressions because it read as a price list, not an accusation — no named actor, no named victim, 36% distribution into Hospitals & Health Care entry-level workers instead of plan-sponsor decision-makers. Price disclosures are not dollar comparisons. Before scheduling a Wednesday dollar-comparison hook, check: who is the actor keeping the difference, and is the post naming them.

**First-comment Substack cross-promo rule (added May 8, 2026, required behavior):** Every LinkedIn post that ships in a week with a Substack companion (Monday deep dive, Wednesday roundup, Thursday field note) includes the Substack link in the **first comment** on the LinkedIn post, written so it makes sense to a reader who just saw the visual or read the text post. Confirmed conversion lever: W18 attributed ~6-7 free Substack subs to first-comment links across two posts — Pipeline Monday deep dive (2 free subs from linkedin.com source per Substack analytics) and Channel Pricing Thursday Field Note (4-5 free subs same-day). Subs went 55 → 65 in 7 days (+18%), with ~60-70% of growth traceable to this mechanism. **Format of the first comment:** one or two sentences naming what is in the Substack post specifically (the toolkit handout, the action plan, the data table), followed by the link. Do not write a generic "read more on Substack" comment — name the asset. Skip the cross-promo only on weeks where the LinkedIn post is intentionally evergreen and pillar-different from the Substack content.

**Library NN rule (reference-asset metric, added Apr 24; cadence updated May 8, 2026):** Library 01 (April 21, Week 16 Tuesday) shipped as the first branded Contract Comparison carousel with side-by-side redlines on contract language. 3-day actuals: 2,129 impressions, +2 followers, 14 saves, 4 reposts. Against an 18K / 22-follower / 7-save forecast derived from comparable decoder carousels, reach and conversion came in at 9-12% of forecast while saves came in at 200%. The Library NN pattern is **bookmark-first, feed-distributed-second** — LinkedIn's algorithm does not reward carousels dense with redlines and legal quotes the way it rewards dollar comparisons or simple decoders, but the audience bookmarks them at rates no other PBS format matches. **Schedule Library entries on reference-asset logic, not feed-reach ambition.** Success metric: 12+ saves in first 2 weeks; 30-day profile viewer count; Substack Contract Language Library traffic lift. **Do not pull, deprioritize, or rework a Library NN entry based on first-week feed impressions alone.** Library entries get a contingent Substack Note cross-promo once save count crosses 10 (save count becomes the social-proof hook).

**Cadence (updated May 8, 2026):** Library NN entries now ship **every 2 weeks** on Tuesday, doubled from the prior every-3-weeks cadence. Reasoning: each Library entry is a save-driven asset that compounds (saves → 30-day profile views → LinkedIn auto-prompt newsletter signups → Substack via cross-promo), and the Substack Contract Language Library reservoir has 25+ provisions documented to support tighter cadence without repetition. Forward schedule (Tuesday slots):

- Library 01 — W16 (Apr 21, 2026) ✓ shipped
- Library 02 — W21 (May 26, 2026) — Five Clauses the Best Brokers Check First (Broker pillar)
- Library 03 — W23 (Jun 9, 2026) — Audit Rights (PBM Contract Insights pillar)
- Library 04 — W25 (Jun 23, 2026)
- Library 05 — W27 (Jul 7, 2026)
- Library 06 — W29 (Jul 21, 2026)
- Library 07 — W31 (Aug 4, 2026)
- Library 08 — W33 (Aug 18, 2026)
- Library 09 — W35 (Sep 1, 2026)
- Library 10 — W37 (Sep 15, 2026)

**Slot reassignment rule:** when a Library NN entry lands on a Tuesday whose currently-planned post is a different format (messy infographic, clean infographic, non-Library carousel), move the displaced post to `evergreen_visual_backlog.md` with full preservation (slide spec, post copy, image prompt) so it can be slotted into a future open Tuesday or Thursday. **Do not delete displaced content** — it represents drafted work that fits any future non-Library slot whose pillar/format matches. The May 8 displacement of W23 Tuesday's "The Contract Clause That Saved a Client Six Figures" Chart-on-Whiteboard Messy Infographic into backlog entry #24 is the canonical example.

**Provision rotation:** each Library entry features a different provision family from the Substack Contract Language Library: pricing guarantees, rebate definitions, audit rights, termination language, specialty routing, formulary management, step therapy, renewal and amendment, performance remediation, manufacturer payment categories. Cycle through the provision families in order; do not repeat within 6 entries.

**Library NN ↔ Substack Contract Language Library feeding loop (added Apr 24):** The Substack Contract Language Library (`benefitblindspots.substack.com/p/pbm-contract-language-library`) is an evergreen free post updated quarterly with new contract provisions PBS sees in the hundreds of contracts reviewed each year. The file `substack_contract_language_library.md` in this repo is the **source of truth**; Substack holds a rendered copy that is synced on a quarterly cadence (Jan / Apr / Jul / Oct, first business day of the month). That Substack post is the **content reservoir** for the LinkedIn Library NN carousel series. Each Library NN carousel surfaces 5 clauses from one provision family that already lives in the Substack Library. Closing slide of every Library NN carousel funnels back to the Substack Library (where the full protective language lives).

**Library quarterly-update workflow (added Apr 24, required behavior):**

(a) **Feed the Library continuously.** Whenever content-building surfaces a contract provision that is not already in the main sections of `substack_contract_language_library.md`, append it to the current-quarter Update Queue in that file *before* the week's work is committed. This applies when drafting a new Library NN carousel, a field note on contract language, a "What I'd Ask" scenario, or any week file that redlines a clause. **Append in paste-ready block format** (added May 8, 2026): each provision must be formatted as a copy-paste-ready block under a destination-section header (`### → PASTE INTO: \`### [section name]\` section`), wrapped between `▼ START COPY ▼` and `▲ END COPY ▲` markers. The block contents must match the live Substack post's existing provision format exactly (`**Provision: [Name]**`, `What you might see:` blockquote, `What it actually means:` plain-English line, `What you should ask for:` blockquote, optional disclaimer line, `---` separator). When the quarterly push comes due, Ginny copies each block byte-for-byte into the matching section of the live Substack post. **No editing or reformatting at quarterly-push time** — that's the friction the format eliminates.

(b) **Alert proactively, every session, in the 30-day window before each quarterly push (added May 8, 2026, required behavior).** Ginny does not maintain calendar reminders. The quarterly-push trigger is built into Claude's session-start behavior instead. **Every session, before responding to the user's first message, check today's date against the quarterly push schedule (Jul 1, Oct 1, Jan 1, Apr 1).**

  - **If today is within 30 days BEFORE an upcoming push date AND the corresponding Update Queue in `substack_contract_language_library.md` has unpushed paste-ready blocks:** surface a heads-up at the top of the first response. Format: *"Heads up — Substack library [Q-NUM] push is due in [X] days. [Y] provisions queued and paste-ready. Want to walk through the 5-minute workflow now or later this week?"* Do not block the user's actual request; deliver the alert as a one-liner above the normal response.

  - **If today is past an upcoming push date AND the queue has unpushed blocks:** escalate the language. Format: *"Substack library [Q-NUM] push is [X] days overdue. [Y] paste-ready blocks waiting. Want to do it now?"* Same one-liner placement above the user's actual request.

  - **If today is within the 30-day window but the queue is empty:** no alert needed.

  - **If the user accepts the offer:** open `substack_contract_language_library.md`, walk Ginny through each `▼ START COPY ▼ / ▲ END COPY ▲` block in order, name the destination section in the live Substack post for each, and confirm completion. After the push, move the queue entries to the Update Log table at the top of the file, change the "Last pushed to Substack" date, open a fresh empty queue for next quarter, and confirm with Ginny.

  - **If the user defers:** acknowledge ("OK, I'll re-flag it next session"), do not nag in the same session, but the next session will fire the same alert because the queue is still pending.

  This mechanism replaces calendar-based reminders entirely. Ginny does not need to remember the push date. The CLAUDE.md rule fires the alert in every session within the window automatically.

(c) **Close and reopen the queue after each push.** Once Ginny confirms the Substack post has been updated, move the shipped items from the Update Queue into the Update Log, update the "Last pushed to Substack" date at the top of the library file, and open a fresh empty queue for the next quarter.

(d) **If a Library NN carousel ships within 2 weeks of a quarter boundary**, surface its provisions to the Update Queue immediately and roll them into that quarter's push rather than waiting.

(e) **Content-building rules that depend on the library:** when drafting a new Library NN carousel, open `substack_contract_language_library.md` first and pick the provision family to feature from what is already documented there — do not invent new clauses for a carousel that are not already in the reservoir (or in the pending queue). When a week's topic has a contract-language angle and the library has a matching provision documented, prefer a Library NN carousel for that week's Tuesday Contract Comparison slot over inventing a new clause set. The quarterly update cadence is what sustains the carousel series long-term: a bigger reservoir means more Library NN entries can ship without repeating clauses.

**`[REPURPOSED — DO NOT SHIP TO LINKEDIN]` convention (added Apr 30, required behavior):** Posts in week files marked with the heading suffix `[REPURPOSED — DO NOT SHIP TO LINKEDIN]` are not LinkedIn calendar posts. Their content has been moved into the corresponding Monday Substack deep dive as a supporting section. **Do not schedule, draft, or ship a post under that heading to LinkedIn.** The Thursday slot it occupies is filled by the planned Slot A / B / C evergreen rotation post listed immediately below it (e.g., "5 Rebate Terms Decoded" was the W17 Thursday Slot A; the Carve-In/Out Whiteboard Carousel above it was REPURPOSED and shipped accidentally on Apr 30, replacing the Slot A post that did not run). When the calendar drift happens, log the missed Slot A post into `evergreen_visual_backlog.md` so it can be slotted into the next available Thursday where the topic does not collide. The renamed tag (formerly just `[REPURPOSED]`) is intentionally verbose so a quick visual scan of the week file does not mistake the post for a live calendar item.

**Evergreen visual backlog rule (added Apr 24, required behavior):** `evergreen_visual_backlog.md` catalogs 21 never-shipped Tuesday/Thursday carousel and infographic concepts with full slide-by-slide specs. These were drafted for specific weeks (W17-W37), repurposed to their respective Monday Substack deep dives, and freed up for future use. Concepts are evergreen and pillar-scoped, so they fit any future Tuesday or Thursday slot whose format class and pillar match. **Required content-building behavior:** (a) when filling a Tuesday or Thursday slot that does not have a fixed topic — holiday weeks, low-energy weeks, slot-pillar collisions with the Monday newsletter, decoder-fatigue substitutions, cycle slots whose assigned pillar does not have an obvious week-topic fit — open `evergreen_visual_backlog.md` first and check whether a backlog concept matches the slot's format class and pillar before drafting a new visual. (b) when a backlog concept is used, lift the slide spec from the cited source-week file, refresh the cover eyebrow / context labels to the publishing week, and update the inventory table's Status column from `available` to `published [date, week-N]`. (c) target a burn-down cadence of 8-10 backlog entries across Q3-Q4 so the reserve does not stockpile indefinitely while staying available for unforeseen content gaps. Distinct from `repurpose_queue.md`, which tracks viral-hit posts being redistributed across channels.

**Field Note backlog rule (added May 5, 2026, required behavior):** `field_note_backlog.md` catalogs drafted Substack Field Notes that were displaced from their original week (e.g., when a week's Thursday Field Note was retargeted to match the Thursday LinkedIn visual + Plan Sponsor Toolkit handout, leaving the original draft homeless). Each backlog entry preserves the full body, meta, and header image prompt; a re-anchoring checklist flags time-sensitive references that must be refreshed before reuse. **Required content-building behavior:** (a) when filling a Thursday Field Note slot whose topic is unclear — weeks where the deep dive's natural Thursday companion does not have an obvious angle, holiday weeks needing low-effort fill, weeks where the originally-planned Field Note has been pulled — open `field_note_backlog.md` first and check whether a backlog draft matches the slot's pillar before drafting from scratch. (b) when a backlog draft is used, lift body/meta/image prompt from the file, re-anchor time-sensitive references to the publishing week, refresh the **Pillar:** marker if the destination week's mix has changed, and update the inventory table Status column from `available` to `published [date, week-N]`. (c) when a Field Note is displaced from a week file, move the full draft into the backlog with a "Why it was displaced" note before deleting it from the week file — never let a drafted Field Note disappear without parking. Parallels `evergreen_visual_backlog.md` (visuals) and `repurpose_queue.md` (viral redistribution).

### Seasonal Patterns

- **Jan-Mar:** Peak LinkedIn engagement (PBS's best window)
- **Apr (early):** Spring break/Easter dip
- **May (Memorial Day week):** Significant engagement dip
- **Jun-Aug:** Summer slowdown (lean on newsletter, email unaffected)
- **Sep-Oct:** Back-to-business surge (plan strongest content here)

## Brand Guidelines

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #015880 | Cover slides, headers |
| Accent Blue | #A7E0FA | Solution slides, highlights |
| Gray | #4D4D4D | Body text |
| White | #FFFFFF | Background |

### Typography (v2 — updated April 21, 2026)

Two typefaces. One rule per channel. Never mix within a single file.

**Office register: Corbel.** Shipped with Microsoft Office since 2007; already on every broker's and employer's machine; renders identically across Office on web, desktop, and print. Used in: PowerPoint (RFP decks, proposals, client reviews), Word (reports, exhibits, contract memos), Excel (pricing workbooks, audit sheets), Outlook (email body, signatures), PDFs exported from any of the above.

**Digital register: IBM Plex.** Open-source, free forever. **Plex Sans** for UI, body, and headers; **Plex Mono** for numeric data (NDCs, AWP, WAC, DAW codes, contract numbers, pricing, member counts, dates); **Plex Serif** for long-form case studies and policy pieces only. Used in: rxbs.org, the CRM, web-only PDFs, newsletter / Substack / LinkedIn carousels, every image prompt in this repo, and any HTML deliverable.

**Weights in use:** four only. Regular (400), Medium (500), SemiBold (600), Bold (700). Do not specify Extra-Light, Thin, Black, or any other weight; they break on broker machines and in print.

**The numeric rule:** put numbers in Plex Mono, always. Tabular figures align decimals and read as audited. On the web use `<span class="pbs-num">` or `<td class="pbs-td-num">`; in image prompts specify "Plex Mono Medium, tabular figures" for any dollar value, date, NDC, contract section, or stat count.

**Emphasis:** italic, never bold inside running prose. Reserve bold for headings and UI controls.

**Uppercase:** labels and micro-captions only, with +4% to +8% letter tracking. Never on buttons, headings, or body.

**Retired.** Krona One is retired from the system (read too quirky-editorial for a clinical-credibility category). Roboto is kept only as a fallback for machines missing Plex; never specified as primary.

**Office opt-in from HTML.** If an HTML file will be printed to PDF and attached to an Office deliverable, add `class="pbs-office"` on the `<body>` tag to render the whole file in Corbel.

### Substack Image Prompt Recipe (Added April 20, 2026 — type specs updated April 21, 2026)

Every Substack image prompt (Monday deep dive header, Thursday field note header, Wednesday roundup header, Reference Channel standalone header) starting Week 17 applies this recipe, which is based on the Week 16 PA field note prompt that produced the strongest image result to date.

**Six required elements:**

1. **Central icon encodes the topic content.** The icon carries a topic-specific label or text inside it (e.g., "PA" inside the clock, "GLP-1" inside the pill capsule, "§5.03" inside a magnifying glass). The icon is not a generic symbol, it is a container for content.
2. **Implied motion or time-passing cue.** A dynamic element that gives the generator a narrative to render. Examples: clock hands pointing to different positions, progress rings partially filled, arrows in directional flow, tilted scales, calendar pages turning, magnifying glass at a tilt.
3. **Specifically named accent targets.** Name the exact elements that get Accent Blue (#A7E0FA) treatment. Not "with light blue highlights" — state it like "the filled segment of the ring," "three radiating arrows," "the opening door outline."
4. **Repeating geometric detail.** A rhythmic element that gives image generators texture to render precisely. Examples: tick marks around a circular face, hash marks on a timeline, numbered segments, radiating dotted lines, ascending bar marks.
5. **Two-tone headline text in Plex Sans SemiBold.** Split the headline across Primary Blue (#015880) and Accent Blue (#A7E0FA) on white backgrounds, Primary Blue and White on Accent Blue backgrounds, or White and Accent Blue on Gray (Reference) backgrounds. Single-color subtitles read as template; two-tone reads as editorial design. Subtitles with dates, counts, or stat values use Plex Mono Medium, tabular figures.
6. **Clean negative space.** Skip grid-pattern or textured backgrounds when the central composition is strong.

**Channel-specific backgrounds:**

| Channel | Background | Badge (top-right) | Two-tone headline |
|---------|------------|-------------------|-------------------|
| Monday deep dive | Primary Blue (#015880) — locked April 22, 2026 so Monday never shares a background with Thursday field notes | None | White + Accent Blue |
| Wednesday roundup | Accent Blue (#A7E0FA) | "WHAT CROSSED MY DESK" | Primary Blue + White |
| Thursday field note | White (#FFFFFF) | "FIELD NOTE" | Primary Blue + Accent Blue |
| Reference Channel (standalone / evergreen) | Gray (#4D4D4D) | Per asset: "CONTRACT LIBRARY", "MONTHLY Q&A", "WHAT I'D ASK", "WHAT WE'RE SEEING · Q[#]" | White + Accent Blue |

Reference Channel covers standalone and evergreen assets that sit outside the weekly Mon/Wed/Thu cadence: the pinned Contract Language Library, the last-Thursday Monthly Q&A Thread, the biweekly "What I'd Ask" scenarios, and the quarterly "What We're Seeing" report. Primary Blue is unreadable on Gray (#4D4D4D); use White + Accent Blue for all text on this background, and Primary Blue only for text inside the Accent Blue badge.

**Format specs:**
- Monday deep dive header: 2240 x 1200 px, Topic Icon template
- Wednesday roundup header: 2240 x 1200 px, Topic Icon template
- Thursday field note header: 1200 x 600 px final (generate at 2240 x 1260 for detail), Data Highlight template
- Reference Channel header: 2240 x 1260 px, Topic Icon template

### Visual Template Rotation (v1 — April 21, 2026)

The 6-week Tuesday pillar cycle and the Thursday 3-slot evergreen rotation set **pillar and format class** per slot. This section sets **which specific template** gets used within each format class. Decoder content is weighted because it is the highest-converting shape in the data.

**Format classes and their slots:**

- **Carousel slots** (4 per 6-week window): Tu Cycle-W2, Tu Cycle-W5, Th Slot B, Th Slot C.
- **Messy infographic slots** (3 per 6-week window): Tu Cycle-W1, Tu Cycle-W4, Th Slot A.
- **Clean infographic slots** (2 per 6-week window): Tu Cycle-W3, Tu Cycle-W6.

**Carousel rotation (3 templates, decoder-weighted):**

| Template | Share | When to reach for it |
|----------|-------|----------------------|
| **Contract Comparison** (redline aesthetic) | ~67% | Contract language, decoder, Library NN series. Primary slot home. Share increased while Whiteboard is paused. |
| **One Number** (stat per slide) | ~33% | Quantitative argument, dollar comparisons, stat-forward topics. Share increased while Whiteboard is paused. |
| ~~Whiteboard (hand-drawn reasoning)~~ | **PAUSED (May 8, 2026)** | Format failed two consecutive scaled tests: W17 Carve-In/Out Whiteboard Carousel returned 1,790 impressions at 1 week (well below 20-25K decoder floor); W18 Tuesday GLP-1 Whiteboard Decoder Carousel returned 758 impressions on the highest-ceiling topic in the data set (~30× below floor). Pharmaceutical Manufacturing reached 27% of the audience on the GLP-1 carousel — algorithm fed it sideways into pharma industry rather than out to plan-sponsor decision-makers, suggesting the format reads "clinical/pharmacy" rather than "self-funded employer" regardless of topic. Format is paused from active rotation pending controlled retest with a single variable change before re-adding. Until retest, share redistributes to Contract Comparison and One Number. |

Template #2 (Seven-slide master) is **retired from active rotation**. It remains in `claude_design_prompts.md` as the base template but should not be scheduled. The three narrative carousels above cover every job the master was doing.

**Messy infographic rotation (4 templates, decoder-weighted):**

| Template | Share | Notes |
|----------|-------|-------|
| **Contract Language Decoder** variant (Marked-Up Contract Page / dictionary layout) | ~50% | Thursday Slot A is locked as this. The proven 22-25K floor lives here. Tuesday messy slots can also run this pattern when the topic is decoder-shaped. |
| **Chart-on-Whiteboard** | ~17% | Precise data on a whiteboard surface, handwritten annotations |
| **Sticky Note Dashboard** | ~17% | Multi-element clustered insights, feels like post-audit notes |
| **Ledger Annotated** | ~17% | Financial-detail topics, handwritten flagging |

Retired from active rotation until re-proven: Annotated Email, Spreadsheet with Marker, Prescription Pad. Keep in the design catalog, bring back if a specific topic calls for them.

**Clean infographic rotation (4 templates):**

Rotate through Iceberg → Funnel → Mountain → Bridge in order across clean-infographic slots. These four cover the most common argument shapes (hidden cost, flow, climb, weak-to-strong). Stopwatch, Door, Tree, Maze are saved for topic-specific weeks where the metaphor is obvious.

**Test-and-prune cadence:**

After every three full 6-week cycles (~18 weeks), pull per-template impression, save, comment, and conversion-rate (followers per 10K) data. Top two templates in each format class stay in rotation; bottom one or two drop out. The rotation concentrates around what is actually performing.

**Library NN series placement inside the rotation:**

Library NN (PBM Contract Language carousel series, linked to the Contract Library Substack post) occupies Contract Comparison slots. A new Library entry drops every ~3 weeks when a Contract Comparison slot comes up in the carousel rotation. Template choice is fixed (Contract Comparison) but the clause set rotates: each Library entry targets a different provision family (pricing guarantees, rebate definitions, audit rights, termination language, specialty routing, formulary management, step therapy, renewal and amendment).

**Integration rule for weekly briefs (hard rule):**

When a week's Tuesday or Thursday visual is being scheduled, the brief in the week file is rewritten **holistically** so topic, template, slide-by-slide copy, image generation prompt, and caption read as **one integrated spec**. Never stack a "template rule" layer on top of an existing "topic copy" layer as two separate sets of directions in the same week file. A brief that reads as two overlapping instruction sets is a brief that gets misbuilt.

## Wix Toolkit Lead-Gen Funnel Status (as of May 18, 2026)

The Channel Pricing toolkit lead-gen funnel is **partially live** at `rxbs.org/toolkit/channel-pricing` and is the current acquisition entry point for the email-gated toolkit strategy. Full operational status and remaining work is tracked in `email_gated_toolkit/WIX_SETUP_TODO.md`. This section is the high-level pointer.

**What's working:**
- Wix landing page live, form captures submissions, Velo populates hidden CMS fields, submissions land in Wix Submissions DB
- Channel Pricing CMS row fully populated; Tier 1 toolkit rows (Contract Review Readiness, Optimize vs Go-to-Market, PBR Framework) fully spec'd in `email_gated_toolkit/toolkit_dataset.md` + CSV ready for bulk import
- Wix's default "New submission received" form notification to Ginny works reliably
- Wix Automation 5-email chain proved capable of full delivery (7 emails delivered May 15, +1 on May 18)

**What's blocked (the funnel can't ship yet):**
- Wix Free Email Marketing tier per-recipient anti-flood suppression causes the custom 5-email automation chain to fire inconsistently — same trigger fires once then goes dormant; per-recipient throttling blocks repeated test sends
- Decision (May 18): bypass Wix Automations entirely via Zapier; Zapier endpoint set up but the Wix-side webhook delivery doesn't fire because the new Wix Forms App doesn't support legacy Velo events (`onWixFormSubmit`, `onWixFormSubmitted`, or `wixForms_onSubmit` backend hook). Need to try v2 API (`onSubmissionCreated` from `wix-forms.v2/onSubmissionCreated`)
- Ginny declined the Wix Forms native auto-reply fallback (May 18); continuing Zapier path in a future session
- Phantom-box UX issue: form's success behavior shows inline message that gets hidden by the cover box; planned fix is redirect-to-thank-you-page

**Funnel ship blockers, prioritized:**
1. Test the v2 Wix Forms backend hook in `/backend/events.js` (code drafted in `WIX_SETUP_TODO.md`) → confirms whether Zapier path can be unblocked
2. If v2 hook fires: build out the 5 Zapier email actions per `email_gated_toolkit/zapier_implementation_spec.md` and disable the Wix Automation chain
3. If v2 hook also fails: escalate (Wix support OR upgrade Wix tier OR rebuild on a different platform)
4. Switch form success behavior to redirect-to-thank-you-page (cosmetic + UX)
5. Set up SPF/DKIM authentication on `rxbs.org` for inbox deliverability at scale

**Do NOT ship Wix Forms auto-reply as a fallback for Email 1** (per Ginny's May 18 direction). The 5-email chain via Zapier is the target architecture; partial-shipping with native auto-reply loses the nurture sequence value and creates technical debt around migrating later.

**Tier 1 toolkit rollout (queued behind funnel reliability):**
- 3 Tier 1 rows ready for bulk CSV import to Wix CMS once funnel works end-to-end
- 3 Tier 1 PDFs ready in `templates/documents/` (evergreen_contract_review_readiness_checklist.pdf, evergreen_optimize_vs_go_to_market_decision_framework.pdf, evergreen_pbr_pharmacy_benefit_review_framework.pdf)
- Toolkit Library page needs Tier 1 section added above the existing Tier 2 Repeater (label as "Start Here · Foundational Frameworks")

**Until the funnel is functional, the Channel Pricing landing page should NOT be promoted in ads, sig lines, or LinkedIn first comments.** Substack and LinkedIn first-comment cross-promo continues to route to Substack posts (which work) rather than the toolkit landing page (which captures the lead but doesn't deliver Email 1 reliably).

## Repository Structure

```
/home/user/Main/
├── CLAUDE.md                                 # This file - session context
├── PBS_CONTENT_PROJECT_SUMMARY.md           # Full project summary
├── pbs_q1_2026_content_calendar.md          # Q1 calendar + performance data
├── pbs_q1_2026_post_copy.md                 # Detailed LinkedIn post copy
├── pbs_q2_2026_content_calendar.md          # Q2 calendar + seasonal framework
├── linkedin_performance_tracker.md          # All-time post performance + weekly analysis
├── substack_engagement_guide.md             # Substack engagement strategy + reply patterns
├── substack_qa_template.md                  # Monthly subscriber Q&A thread templates
├── substack_what_were_seeing.md             # Quarterly "What We're Seeing" report template
├── substack_contract_language_library.md    # PBM Contract Language Library (free, SEO play)
├── substack_what_id_ask_series.md           # "What I'd Ask" biweekly scenario series
├── podcast_pitching_guide.md               # Podcast guesting strategy, 22 target shows, pitch templates
├── wednesday_roundup_implementation_guide.md # Automation setup for weekly roundup
├── repurpose_queue.md                       # Viral-hit posts queued for cross-channel redistribution
├── evergreen_visual_backlog.md              # 21 never-shipped Tue/Thu carousel + infographic concepts with full slide specs, available for any future open slot
├── field_note_backlog.md                    # Drafted Substack Field Notes displaced from their original week, available for future Thursday slot
└── newsletters/
    ├── templates/
    │   └── wednesday_roundup_template.md    # Format template for automated roundup
    ├── roundups/                            # Weekly roundup drafts (auto-generated)
    ├── week_06_glp1_coverage.md             # Week 6-37 newsletter bundles
    ├── week_07_mac_pricing_transparency.md  # Each file contains:
    └── ... (through week_37)                #   PART 1: Substack article
                                             #   PART 1B: Field Note
                                             #   PART 1C: Toolkit Pairings + Wix Build
                                             #   PART 2: LinkedIn Newsletter
                                             #   PART 3: LinkedIn Feed Posts
                                             #   PART 4: Substack Notes
                                             #   PART 5: Publishing Checklist
                                             #   PART 6: Assets Needed
                                             #   PART 7: Metrics Tracking
```

## Key Reference Files

- **Full project context:** PBS_CONTENT_PROJECT_SUMMARY.md
- **Post copy details:** pbs_q1_2026_post_copy.md
- **Q2 calendar + seasonal framework:** pbs_q2_2026_content_calendar.md
- **Performance data:** linkedin_performance_tracker.md
- **Newsletter content:** newsletters/ directory
- **Substack strategy:** substack_engagement_guide.md
- **Podcast strategy:** podcast_pitching_guide.md

## Tone Reference (Quick)

| Channel | Tone | Opening Style |
|---------|------|---------------|
| LinkedIn Feed | Confident provocation | Confrontational hook that stops scroll |
| LinkedIn Newsletter | Executive briefing with Substack bridge | Story-driven opening, specific CTA to Substack exclusive |
| Substack Deep Dive | Analytical authority with personal voice | "I reviewed..." or "We see this pattern..." story, thesis early |
| Substack Wednesday Roundup | Informed authority with personal filter | "Four stories this week..." curated news with Ginny's take |
| Substack Field Note | Practical, tactical | "We have been reviewing..." grounded in current work |
| Substack Notes | Provocative one-liners + engagement | Confrontational hooks (same style as LinkedIn) |
| Podcast | Expert conversational | Clinical pharmacist who reviews 100 contracts/year |

---

*Last updated: April 16, 2026*
*For complete details on any topic, refer to PBS_CONTENT_PROJECT_SUMMARY.md*
