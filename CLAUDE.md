# PBS Content Ecosystem - Claude Context

## Critical Rules

- **Company name:** Prescription Benefit Solutions. Never use RXBS. **Public-content naming (added Jun 19, 2026, required behavior):** in all published/public surfaces (website, Substack, LinkedIn, X, schema/JSON-LD, llms.txt) **spell out "Prescription Benefit Solutions" and use www.rxbs.org; "PBS" is internal shorthand only.** The bare abbreviation collides with Public Broadcasting Service and dilutes AI-entity disambiguation (AEO/GEO). This shifts proprietary anchors away from "at PBS" toward "at Prescription Benefit Solutions" or first-person "we" (e.g., "we review hundreds of PBM contracts a year"). Internal repo docs/notes may keep "PBS" for brevity; published copy may not. Backfill older week files as bandwidth allows; the `week_build_spec.md` §8 gate enforces it forward.
- **AEO/citation rule (added Jun 19, 2026):** Substack is the crawlable AI-citation surface; LinkedIn is login-walled and builds the person-entity + reach, NOT citations. Every Substack deep dive / field note: (1) set a **question-shaped SEO title** (separate from the confrontational display title) matching the buyer query, (2) **open with one self-contained, quotable answer sentence**, (3) **link outbound to the rxbs.org canonical/money page** (glossary, contract-language-library, toolkit landing page, or pillar guide). Evergreen pillars (Contract Language Library, glossary, quarterly data) get a **canonical twin on rxbs.org** (self-canonical; Substack links back). **Full Substack rule (every article, all five requirements): `substack_aeo_rules.md`.** Site strategy: `website_mockups/site/geo_seo_plan.md`; scoreboard: `ai_visibility_tracker.md`.
- **Approve → auto-build into the week files (added Jun 20, 2026, required behavior):** when Ginny approves a rule-level or format change (a `/platform-research` proposal, an experiment outcome like the long-form-X or first-comment-timing trial, or any new convention), it is not "done" until BOTH happen: **(1) encode it in the rule-of-record** so every future `/build-week` inherits it (`platform_playbooks.md` / `x_account_strategy.md` for channel-format/cadence; `CLAUDE.md` + the matching `week_build_spec.md` §8 gate for a content rule), AND **(2) run `/propagate-rule`** to build it into the already-drafted week-file backlog (the pipeline is built ~through W37; those weeks do not retro-update themselves). Forward weeks are automatic via the rule-of-record; the backlog is handled by `/propagate-rule` (`.claude/commands/propagate-rule.md`), which retrofits every built-but-unpublished week and never touches past/published weeks. So one approval lands everywhere, past-built and future. Mark the OPEN_ITEMS item "propagated to W{n}-W{m}" when done.
- **CEO attribution:** Ginny Crisp, PharmD (not "Dr. Ginny Crisp" because Dr. and PharmD are redundant)
- **No em dashes or hyphens as sentence separators.** Never use " - " to separate clauses mid-sentence (e.g., "the worst outcome - high spend" or "least understood - and most manipulated - aspects"). Use commas, colons, semicolons, periods, or parentheses instead. Hyphens are fine for compound words (self-funded, cost-plus) and formatting labels (Slide 1 - Cover).
- **No fabricated statistics.** Use "significant," "substantial," "meaningful" instead of invented numbers.
- **Branch workflow (added June 12, 2026; PR-review-link addition July 1, 2026):** Ginny works on `main`. Before a session ends, merge the session's work into `main` and push (standing permission given June 12, 2026: "push everything to main, that is where i work"). Don't leave finished work stranded on session branches; Ginny's local clone pulls `main` for scheduling and the video pipeline. **Always merge to main, and always give Ginny a tappable review link in the chat reply (July 1, 2026 standing instruction: "Always merge to main, also I need to be able to be linked to the review").** Ginny reviews on GitHub mobile, so the workflow is: finish work on the session branch → **rebase onto the latest `origin/main` first** (the scheduled automations — system-audit, roundup, pipeline — commit to `main` mid-session, so a stale branch will revert them if merged naively; rebasing preserves them) → open a PR (base `main`) → merge it (rebase-merge to keep `main` linear) → **paste the PR URL in the reply.** The PR is the review surface even though it's merged immediately; the standing "don't open a PR unless asked" is overridden by this standing instruction.
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
- **6-beat post architecture (added Jun 18, 2026; scope broadened same day to all post copy):** Adapted from Richard van der Blom's 2026 Algorithm Insights framework, reconciled to PBS's measured data. **Scope:** applies to the COPY of EVERY LinkedIn post. On **text-only** posts (Wednesday POV, Friday tease, newsletter publish copy, longer X) all six beats live in the body. On **visual-first** posts (Tuesday/Thursday carousel, infographic, messy infographic, video) the VISUAL already carries Beat 1 (Hook = the two-tone headline) and Beat 4 (Core Message = the central payload), with the footer line as Beat 5 (Conclusion) per the Substack image-prompt recipe; the **post copy + first comment** then carry Beat 2 (Promise — light, since the visible visual is most of the payoff), Beat 3 (Positioning / anchor), Beat 5 (Conclusion / takeaway line), and Beat 6 (CTE = the first-comment cross-promo + save prompt). Beats 1/3/6 on visual posts are largely already enforced by the Thursday/Tuesday Excellence rules, so the **net-new** checks there are the Promise beat and an explicit Conclusion line in the caption, plus the closed-vs-open CTE selector. Every text post should run, in order: **(1) Hook** — confrontational / named-actor (the existing Wednesday-hook + confrontation rules govern this; PBS's own data says confrontational beats informational 10-100x, *stronger* than vdB's claim, so keep the PBS hook hierarchy — do NOT swap in vdB's "personal experience always wins," which for PBS is network-maintenance, not the conversion ceiling). **(2) Promise** — one or two lines giving the cold reader the payoff for reading on; substantive, never the influencer "in the next 90 seconds I'll show you three things" voice (that trips the Humanize Check AI-tell test). **(3) Positioning** — the proprietary anchor, since ~50% of viewers now come from outside the network and this may be their first PBS post. **Vary it every time:** rotate the 2025 metrics ("132 benefit reviews, avg $469K saved"; "59 RFPs, 25% savings"; "$78.7M contracted across 203 employers") rather than repeating "we review hundreds of contracts a year" verbatim — LinkedIn flags a repeated templated footer as a negative quality signal. **Pull from `proprietary_anchor_bank.md`** (the rotating supply of verified 2025 anchors, matched to pillar/topic, with the no-repeat-within-~4 rule and the contracted-not-offered / 25%-is-RFP guardrails; held for Q3 social use). **(4) Core Message** — the actual value, formatted and scannable, target ~1,400-1,800 characters. **(5) Conclusion** — one line that crystallizes the takeaway; don't leave the reader to infer it. **(6) Call to Engage (CTE)** — a question or bold statement, NEVER a commercial CTA in the body (the link stays in the first comment, per feed-never-links-externally); pick a **closed question** when the goal is comments, an **open question** when the goal is reach / DMs. **Application:** draft first, then retrofit to the beats naturally — never write TO the skeleton (forced structure reads as AI). **Override:** these are directional; where any beat conflicts with PBS's WORKING/WEAK measured data, the measured data wins. Enforced at ship by `/critique` item 9 and the `week_build_spec.md` §8 gate.
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

**2025 firm results (proof metrics, reconciled Jun 18, 2026; source `2025_success_metrics_activation_plan.md`):** 706 client engagements (up from 679 in 2024) · 203 unique clients · national footprint · **$78.7M contracted savings** ($86.7M identified). By line: Pharmacy Benefit Reviews 132 engagements / 93 clients / 18.7% avg / **$469K avg/client**; PBM RFPs 59 / 51 clients / **25%** / **$562K avg/client**; Contract reviews 86 / 82 clients / 8.4% / $169K avg/client; All Others 429. **Guardrails on any public use:** headline the **contracted** $78.7M (offered $86.7M is "identified opportunities" only); **25% is the RFP rate, never "average"**; verified numbers only (no extrapolation); PBS claims these **solo** (separated from Hylant). These are the rotating **Positioning-beat anchors** — pull/log from `proprietary_anchor_bank.md` (no-repeat-within-~4, matched to pillar/topic). **Social use held for Q3, weighted to the Sep–Oct surge;** the website proof page (next revamp) is the canonical home first. Woven into W31–W37 feed posts as the August/September rollout.

**Target Audience:** Self-funded employers, CFOs, HR Directors, CEOs, and benefits brokers/consultants who manage pharmacy benefits.

## Content Direction

**Default: Client-Centric Framing** - Frame content from the perspective of the self-funded employer (PBS's client):
- Plan cost impact and ROI
- Contract leverage and negotiation
- Financial exposure and risk management
- Strategic decision-making for plan sponsors

**When to Use Member-Centric:** Topics specifically addressing employee/plan participant experience or affordability impact.

**Buyer-anxiety lens (added Jun 23, 2026, source: `buyer_anxiety_map.md`):** organize content around the decision-maker's **anxiety**, not just the topic ("what keeps them up at night"). PBS's own data shows naming the discomfort beats informational content 10-100x, so the map (personas CFO / HR-Benefits / Broker → live fears → trigger → the question they'd actually ask → the PBS answer → the matching asset) is a **source file** for hooks across the system: `/build-week` (Wednesday POV + Friday tease state a fear plainly), `/video-research` (anxiety-anchored 9:16 scripts), and `/ads-research` (the "What keeps you up at night" ad series, one ad per anxiety). The two-way answer surfaces: the **"Ask Ginny" DM → video-reply** recurring format (people DM their PBM question, Ginny records 9:16 replies to a few — feeds the video bank; format spec in `video_content_bank.md`) and a queued evergreen **FAQ hub on rxbs.org** (FAQPage schema, doubles as AEO). New anxieties surfaced by DM'd questions or contract reviews get added back to the map.

## Four-Channel Content Ecosystem

### Channel 1: LinkedIn Feed
- **Profile:** Ginny Crisp's personal LinkedIn
- **Followers:** 2,091 (as of June 12, 2026; was 2,040 on June 5, 1,903 on May 25, 1,374 on April 3)
- **Frequency:** 4x/week + company reshares
- **Tone:** Confident clinical provocation. Short. Declarative. One stat as hook.

| Day | Format | Time |
|-----|--------|------|
| Tuesday | Carousel / Infographic / Messy Infographic | 8:30 AM EST |
| Tuesday | Company Reshare | 1:30 PM EST |
| Wednesday | Strong POV Text Post (confrontational hook) **or native 9:16 video** (see video-tab rule) | 8:30 AM EST |
| Thursday | Carousel / Infographic / Messy Infographic | 8:30 AM EST |
| Thursday | Company Reshare | 1:30 PM EST |
| Friday | Tease Hook Text Post (teases next week's newsletter) | 8:30 AM EST |

**Posting-time test (concluded May 8, 2026 — reverted to 8:30 AM EST starting W19 Monday May 11):** Tue-Fri feed posts ran at 10:00 AM EST for four weeks (W16-W18) on research-backed "optimal time" guidance. Result across four weeks: no non-amplified post cleared 4K impressions. Highest non-Cuban 10 AM result was the W18 Channel Pricing messy infographic at 3,948 impressions; documented 8:30 AM era floors for the same format ran 5-15K non-amplified. Documented decoder floor of 20-25K (Cuban-cluster inclusive) did not return at 10 AM either — W16 PA decoder hit 7,048 only after Cuban repost. PBS's target audience (CFOs, HR Directors, brokers) appears to skew early-morning Eastern; "10 AM optimal" is generic professional-audience research that does not match PBS's plan-sponsor decision-maker segment specifically. **Reverted to 8:30 AM starting W19.** First full 8:30 AM week monitoring expectation: decoder, dollar-comparison, and messy-infographic posts should return to 5-15K non-amplified floor. If they do not, time was not the issue and other variables need examination.

**Native video / video-tab rule (added Jun 18, 2026):** LinkedIn's 2026 video push makes native vertical video a dual-distribution surface: a native **9:16** upload appears in the **main feed AND the recommendation-driven video tab** (which reaches non-followers, TikTok-style); landscape and 4:5 get only the main feed. So for video: **post the 9:16 render, uploaded as a file (never a YouTube/Vimeo link), from Ginny's personal profile** (company-page organic reach has collapsed), hook in the first 3 seconds, captions burned in, link in the first comment. **Slot video into the WEDNESDAY slot** as a format swap for the confrontational text POV (a clip carries the same named-actor confrontation), which preserves the higher-impact Tuesday and Thursday VISUAL slots (carousel / Library / messy infographic) and the Friday newsletter tease. A video is still a feed post (it occupies the Wednesday slot), not a free extra — do not double-post a video and a static post the same day (both land in the main feed → cannibalization). The repurposed-podcast clip pipeline (`social_clips/`) is therefore a reach/discovery play, not just repurposing. **Cadence: every other Wednesday for now (the SHRM batch is scheduled W26-W36 in `social_clips/honest-hr-shrm_2026-06-09_clips.md`); target is WEEKLY video once the clip pipeline is deep enough — which depends on feeding it more source material via the podcast outreach sprint + `/clip-podcast`.** Full research + caveats: `linkedin_2026_algorithm_deep_dive.md`. **9:16 in-feed render spec (added Jun 27, 2026, from the first live 9:16): build every clip to the safe zones** — LinkedIn crops/overlays the edges, so keep all critical content in the center 60-70% and OUT of the top ~5-8% (device crop), right ~12% (reaction rail), bottom ~18% (poster name/caption chrome); **captions CENTERED and large (2-4 words/line, ~2x), never lower-third, off the right edge, Accent-Blue karaoke**; hook banner below the top crop; **logo lives on a 2-3s end card (logo + rxbs.org + first-comment CTA)**, not just a corner; burned-in nameplate only for off-platform travel (LinkedIn stamps it in-feed); preview on a phone before export. Full spec: `video_content_bank.md` → "9:16 in-feed render spec"; Remotion implementation: `social_clips/remotion_pbs_caption_template_spec.md`.

**Personal post cadence and craft (added May 8, 2026; substantially refined May 25, 2026 after the anniversary-post data):** Personal posts ship **occasionally — once every 4-6 weeks max** — on **weekend placement** unless the date is occasion-specific (an anniversary posts on the anniversary, regardless of day). They are **additions**, not replacements: never drop a Tue-Fri scheduled professional post to make room for one. Topic guardrails: family milestones, career reflections, professional/conference travel, profession-identity occasions, gratitude. Avoid politics, polarizing causes, or anything that pulls Ginny's expert positioning sideways.

**Two tiers of personal post, with very different outcomes (the May 25, 2026 finding):**

- **Casual snapshot (low craft):** a quick photo + caption. W18 daughter Summit Championship cheer post returned 47 reactions / 1,650 impressions / 0 followers / 0 subs, and **drifted** to Insurance 31% / Greater Indianapolis 7% (local peer network, not buyers). Conversion genuinely ~zero; value is pure warmth. Use sparingly.

- **High-craft milestone (written as a piece):** the W21 17th-anniversary post (May 24). Returned **18,917 impressions / 11,475 reached / 201 profile viewers / 111 reactions / 16 comments**, held the **core plan-sponsor audience with no drift** (10,001+ employees 29%, Senior 27%, Hospitals & Health Care 15%), and drove a follower spike the post-level "+4 followers" metric under-counts (LinkedIn only attributes follows clicked on the post itself, not the far larger profile-visit-driven follows; total followers 1,866 → 1,903 over the window, funnel carrying through to newsletter 913 → 930). **High-craft milestone posts are a profile-visit and follower engine, NOT zero-conversion.** The "conversion is zero by design" framing applies to casual snapshots, not to crafted milestone posts.

**What made the anniversary post work (replicable craft checklist):**
1. **Specific anchors throughout** — exact years (20 together, 17 married), named places, named people, counted houses ("four houses, two we built"). Specificity reads as real and unfakeable (same principle as the Humanize Check).
2. **Naming locations reactivated geographic networks.** Chapel Hill pulled the pharmacy-school network, Columbus the residency network, Charleston the local community, producing geographically-clustered follows. These are warm extended-network follows (referral pathways), not net-new national buyers — exactly the network-maintenance deliverable personal posts are for. **Location call-outs are a personal-post lever only; never transplant to professional posts, where geographic clustering pulls against national plan-sponsor reach.**
3. **Then-and-now photo** (combined collage, not a stack of separate images) drove dwell.
4. **Universal-resonance narrative** (marriage, moves, building a life) carried broad reach while the craft held the professional audience.

**Milestone menu (occasions worth documenting, all guardrail-safe):**
- **Annual anniversaries:** wedding anniversary (reusable yearly, fresh angle each time), PBS founding anniversary, pharmacy-school-grad or licensure anniversary ("X years since I became a pharmacist").
- **Career-origin reflections:** residency completion, a formative early career moment (anonymized), "what I wish I knew when I started," a mentor-gratitude post (high warmth, strong network reactivation).
- **Audience/company milestones:** newsletter subscriber milestones ("1,000 subscribers to The Pharmacy Benefits Briefing"), follower milestones, "Nth PBM contract reviewed" — these thank the audience (warmth) AND signal momentum (credibility) AND reactivate the existing audience.
- **Profession-identity occasions:** National Pharmacy Week / Pharmacist Appreciation, a speaking engagement or podcast appearance, conference travel.
- **Seasonal/calendar:** New Year reflection (Jan, PBS's peak-engagement window), Thanksgiving gratitude, working-parent/back-to-school reflection.
- **Use sparingly, high craft only:** kids' milestones (graduation, college). The W18 cheer post shows casual kid-snapshots drift to local network; post these only as written pieces, never quick snapshots.

**Bottom line:** conversion is no longer "zero by design" across the board — high-craft milestone posts measurably drive profile visits, follows, and network reactivation while holding the core audience. The lever is craft + specific anchors + a photo + universal resonance, posted within the 4-6-week cadence and the guardrails. Full data in `linkedin_performance_tracker.md` Personal Post Performance section.

### Channel 2: LinkedIn Newsletter
- **Name:** "The Pharmacy Benefits Briefing"
- **Subscribers:** 1,051 (as of June 12, 2026; was 1,017 on June 5 when it crossed 1,000, 930 on May 25, 605 on April 3)
- **Frequency:** Weekly, Mondays at 7:45 AM EST
- **Length:** 350-500 words (~2-minute read)
- **Tone:** Executive briefing. Story-driven opening. First sentence is substance.
- **CTA:** Must reference specific Substack-exclusive content (not generic "read more")

### Channel 3: Substack Deep Dive
- **Publication Name:** "Benefit Blind Spots" (NOT Ginny's personal account)
- **Tagline:** "What your pharmacy benefits aren't showing you"
- **URL:** benefitblindspots.substack.com
- **Handle:** @ginnycrisp
- **Subscribers:** 98 (as of June 12, 2026; 2 paid. Was 97 on June 5, ~80 on May 25 (1 paid), 15 on April 3). Second paid sub added in early June.
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

### Channel 6: X / Twitter (added May 22, 2026)
- **Account:** Ginny Crisp, PharmD — `@ginny_crisp` (existing account since March 2013; live as of May 24, 2026 with bio, header, pinned post set)
- **Role:** Amplification + policy/journalist relationships. NOT a direct-conversion channel; measure by reach + amplification events (Cuban/Ciaccia/Fein reposts), not newsletter subs.
- **Frequency:** 3 scheduled posts/day + same-hour reactions when PBM news breaks
- **Content skew:** ~40% named-adversary/dollar comparison, ~30% breaking-news reactions, ~20% decoders, ~10% origin (capped 1/week). NOT topic-locked to the Monday deep dive. Origin stories underperform on X — they are the Substack Notes format, not the X format.
- **Vibe:** punchier than LinkedIn, shorter wind-up, more teeth. Same proprietary anchor, half the words. Links in the first reply, never the post body (links suppress X reach). Hashtags 0-1 max (NOT the LinkedIn 3-tag rule).
- **Visuals:** attach the strongest library assets (toolkit preview PNGs, Tue/Thu messy-infographic heroes, Library carousel slides). Tue/Thu LinkedIn visuals are prime X drivers; X-specific visuals are fine when no library asset fits.
- **Full strategy:** `x_account_strategy.md` (account setup, content mix, engagement patrol list, tracking).
- **Where weekly posts live:** `PART 4B: X (TWITTER) POSTS` in each newsletter week file (see convention below).

**PART 4B convention (added May 22, 2026, required behavior):** Every newsletter week file includes a `PART 4B: X (TWITTER) POSTS` section placed directly after PART 4 (Substack Notes) and before PART 5 (Publishing Checklist). It holds that week's 3-posts/day X content (labeled by day + AM/midday/PM slot), `[VISUAL]` flags where an asset attaches, and a note on any same-hour news reactions. **X content is NOT locked to the week's Monday topic** — it skews to breaking PBM news and the Cuban-bait shapes per the content mix in `x_account_strategy.md`. Pull the week's Tuesday and Thursday LinkedIn visuals in as X drivers where they fit; create X-specific visuals when no library asset matches a strong angle. The W21 file PART 4B is the canonical example (X launch week). When drafting a new week file from scratch, include PART 4B automatically; backfill prior weeks as bandwidth allows.

**LinkedIn Newsletter publish convention (added June 2, 2026, required behavior):** Every newsletter week file's `PART 2: LINKEDIN NEWSLETTER` section must include two subsections placed after the Newsletter Body / signoff and before `PART 2B` / `PART 3`:

  (1) `### Newsletter Title Options` — three title variants to pick from before scheduling. The LinkedIn newsletter title IS the SEO headline for the issue, so the options should range across the established working shapes: one that matches the Substack deep dive title (conventional cross-channel consistency), one confrontational/question opener (named-actor where the topic supports it), and one number-led/action-oriented option. The drafter picks one; the others stay as alternates.

  (2) `### LinkedIn Newsletter Publish Post Copy` — the short ~65-word feed announcement LinkedIn requires when publishing a newsletter (the "post" that goes out with the article to subscribers' feeds). Format: opening line `New issue of The Pharmacy Benefits Briefing.` + one-line topic tease (confrontational where the topic supports it) + one line on what the briefing covers + one line on the Substack value-add (the toolkit / framework / data) + 3 hashtags per the CLAUDE.md hashtag rule (pillar default with topic-anchor swap on the second tag). W20 and W21 are the canonical examples.

  (3) `### LinkedIn Newsletter First Comment` (added June 2026, after the Wix toolkit funnel went production-live) — the first comment to post on the newsletter announcement, used as a lead-gen cross-promo to the gated toolkit landing page. Three-part structure: (a) one brief topic line tied to the Monday deep-dive theme, (b) one line advertising the Benefit Blind Spots deep dive with its link, (c) one line offering that week's toolkit / worksheet with the direct landing-page link `rxbs.org/toolkit/<slug>`. Wrap the paste-ready comment in a fenced code block. Below it, an italic publisher note flags that the toolkit link goes live only once that week's PART 1C Wix build is complete; if the landing page is not built by Monday, drop the third line and route to the deep dive (which embeds the tool). Use the Monday deep-dive toolkit slug when the week ships one (W23, W24); otherwise use that week's Thursday worksheet slug framed as "this week's companion worksheet." W23 is the canonical example.

Without these subsections the LinkedIn newsletter cannot be scheduled cleanly — Ginny needs to pick the title, paste the feed announcement, and post the first comment when LinkedIn prompts. When drafting a new week file from scratch, include all three subsections automatically; backfill prior weeks as bandwidth allows. W22 forward is the lock-in standard for (1) and (2); W23 forward for (3).

**Post copy code-block convention (added June 2, 2026, required behavior):** Every paste-ready post copy block in the newsletter week files — LinkedIn feed Post Copy, First Comment, X PART 4B post bodies, LinkedIn Newsletter Publish Post Copy, Substack Notes copy, Company Reshare copy, and anything else intended for direct paste into a publishing surface — must be wrapped in a **fenced code block** (triple backticks). Rationale: GitHub renders code blocks as preformatted monospace with a built-in copy button, which preserves whitespace exactly and copies as plain text. When Ginny pastes into LinkedIn, X, or Substack, the numbered lists, line breaks, and blank-line paragraph spacing land intact. Without code blocks, GitHub's markdown renderer converts `1.` and `**bold**` into HTML elements that don't survive paste — numbers disappear, bold disappears, spacing flattens. LinkedIn does not render markdown bold; for emphasis use UPPERCASE sparingly or skip bold entirely (the structure carries readability inside a code block). The narrative deep-dive article body and the newsletter body content stay in regular markdown (those are read on Substack and in the LinkedIn newsletter editor, not pasted). Apply this convention to all newsletter week files from **W23 forward**; backfill prior weeks as bandwidth allows. **ASCII-only for X post bodies (added Jun 23, 2026):** every PART 4B X post-body code block must be **pure ASCII** — straight quotes only (never curly `" " ' '`), no em-dash/en-dash, no arrows (`→`), no `…`/`≤`/non-breaking spaces. X's scheduler rejects some non-ASCII content as "the content of your post is invalid," and a device's Smart Quotes setting can re-curl straight quotes on paste, so the source file must be clean ASCII to start. (Root cause traced Jun 23, 2026: the failing posts were curled by the device, not the file; the device fix is turning off macOS/iOS Smart Quotes/Punctuation, and the repo fix is ASCII-only X bodies. All W21-W37 X bodies were swept clean.) LinkedIn/Substack tolerate smart punctuation, so this hard ASCII rule is X-specific.

**Hardwired week-build system (added June 2026, required behavior — every week W26 forward is built through it):** The rigorous build process is encoded so it runs identically every week, not re-improvised. Three artifacts:
- **`/build-week NN`** (`.claude/commands/build-week.md`) executes the build end to end.
- **`newsletters/templates/week_build_template.md`** is the skeleton every new week is generated from.
- **`week_build_spec.md`** is the definition of done: the gate checklist every week must pass before ship (any skipped gate logged with a reason).

The system enforces these conventions, new as of this session:
  (1) **Landscape research first.** Before topics, scan what's actually happening (roundup-style WebSearch + the repo RSS + amplifier activity; `deep-research` skill for tentpole weeks). Topic timeliness, the X news-reaction slots, and the shocking fact's currency all key off this.
  (2) **Look-back AND look-ahead.** Scan the last ~6 weeks AND the coming planned weeks (plus the Q calendars) and `linkedin_performance_tracker.md`. No topic reused or near-adjacent within ~6 weeks in either direction; the week builds on the prior and hands off to the next. Use only WORKING frameworks (decoder, named-actor dollar comparison, shocking-fact reveal, 5-questions carousel, Library NN, high-craft milestone); never the KNOWN-WEAK set (informational/no-villain explainer, musing, price-list-without-actor, paused Whiteboard, casual snapshot).
  (3) **Seasonal fit + flow.** Place each week on the seasonal arc (summer trough = lean into shocking-fact/named-adversary, lighter holiday weeks; Sep–Oct surge = load the strongest content + breakouts + earned media) and the plan-sponsor calendar; the quarter reads as one arc, not random drops.
  (4) **Weekly Run of Show.** Every week file opens (after the title/build notes) with a `## Weekly Run of Show`: a publish-order table with a **Where** column pointing to each item's section/Post number, reconciled to the built content (no drift), `⚠` flagging any open item. Replaces the old `## Publishing Timeline`. W25 is the canonical example.
  (5) **Deep-dive-visual rule.** A Tuesday/Thursday visual REPURPOSED into the Monday deep dive moves INTO the deep dive (PART 1) as an `### In-Article Visual` — not the backlog, not left as a dead DO-NOT-SHIP block in PART 3. Only genuinely-parked drafts (paused format / displaced topic with no deep-dive home) go to `evergreen_visual_backlog.md` / `field_note_backlog.md`. No REPURPOSED / DO-NOT-SHIP carcasses remain in a live week file; every Run-of-Show slot has live content or a ⚠.
  (6) **Shocking-fact weaving.** Every week weaves at least one sourced fact from `shocking_fact_bank.md` into a real post (Thursday breakout first, else Wednesday POV / X AM amplifier), with citation + PBS anchor. A bank entry is not "used" until it lives in an actual post.

**LinkedIn-first rule (added May 22, 2026, required behavior):** An X post must NOT use a LinkedIn post's visual or material before that LinkedIn post publishes. This protects the Thursday Excellence reveal especially: the Thursday LinkedIn post + Field Note + first-comment Substack cross-promo is the week's conversion stack, and an X post scooping the Thursday material earlier in the week would undercut it. X posts that reuse a same-week LinkedIn visual or topic (a Tuesday Library NN driver, a Thursday decoder amplifier) must be scheduled AFTER that LinkedIn post goes live. Same-day-after-publish amplification is encouraged; pre-publish scooping is not. When drafting PART 4B, do not place any Thursday-LinkedIn-post material in the Mon-Wed X slots.

### Publishing Flow (Every Week)

```
SUBSTACK DEEP DIVE (7:30 AM Mon) - Full analytical deep dive with integrated actionable tool
    |
LINKEDIN NEWSLETTER (7:45 AM Mon) - Briefing version, CTA references specific Substack exclusive
    |
LINKEDIN CAROUSEL/INFO (8:30 AM Tue) - Standalone value, DIFFERENT TOPIC from Monday
    |
SUBSTACK ROUNDUP (7:30 AM Wed) - "What Crossed My Desk" weekly news roundup (automated draft)
    |
LINKEDIN TEXT POST (8:30 AM Wed) - Confrontational hook, no links
    |
SUBSTACK FIELD NOTE (7:30 AM Thu) - Shorter tactical article
    |
LINKEDIN CAROUSEL/INFO (8:30 AM Thu) - Weekly theme visual, first comment links to field note
    |
LINKEDIN TEASE HOOK (8:30 AM Fri) - Text post teasing next Monday's content
```

**Key Principles:**
- Newsletters own Monday. LinkedIn Feed never links externally.
- LinkedIn Newsletter bridges to Substack with specific exclusive-content CTA.
- Substack must offer unique value LinkedIn doesn't (actionable tools, templates, checklists).
- Tuesday visual MUST differ from Monday newsletter topic to prevent cannibalization.
- Thursday visual carries the weekly theme (3 days after newsletter, no overlap).
- Wednesday roundup is automated (draft generated Tuesday, reviewed before publish).
- LinkedIn feed posts publish at 8:30 AM EST (the 10:00 AM "optimal time" test concluded May 8, 2026 and was reverted starting W19; see the Posting-time test note under Channel 1).
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

**Refer-back-first once the library is built (added Jun 23, 2026, required behavior — supersedes the prior default that every qualifying week mints handouts):** The toolkit library is now ~29 deep (built across W16–W37) and covers most core PBM topics, so the default flips from *build the library* to *leverage the library*. **Do NOT mint a new toolkit just to fill a week's slot.** Before creating any new toolkit, check `email_gated_toolkit/toolkit_dataset.md`: if an existing toolkit already covers the week's topic/mechanic, **reuse it** (link the live `rxbs.org/toolkit/<slug>` in the Monday deep dive body, the Thursday Field Note body, and the first comments; refresh its preview/X crop if needed) rather than producing a near-duplicate. **Mint a new toolkit ONLY when the week's topic is genuinely unique and has no existing match** in the library. This concentrates downloads, inbound links, and AEO/citation authority on fewer, stronger canonical assets, and frees Q4 production for the Sep–Oct surge. The two-handout-per-week pattern is the ceiling, not a quota; a week with no genuine gap ships zero new toolkits and refers back to existing ones.

These handouts are the **lead-magnet ladder**. A vendor request for the PA scorecard validated the format the week it shipped. When paid subscriptions or email-gated downloads turn on, these become the gated assets that drive Substack subscriber conversion.

**Rules of production:**

(a) **Source of truth is the HTML in `templates/documents/`. The PDF is a render artifact and must stay in sync with the HTML at every commit (added May 21, 2026, required behavior).** Whenever Claude edits a toolkit HTML, Claude re-renders the matching PDF via WeasyPrint and includes both files in the same commit. The HTML and the PDF are never allowed to diverge on main. WeasyPrint is installed in the session environment (`pip install weasyprint` if not already present); render with `cd templates/documents && weasyprint <name>.html <name>.pdf`. Commit message should mention both the HTML change and the PDF re-render. If the user uploads the PDF to Wix Media for the live lead-magnet, the regenerated file from the commit is the version they upload — replacing the existing file at the existing pdf_url so leads continue to receive the updated worksheet via Email 1.

(a2) **Landing-page preview PNG is a third synced artifact (added May 22, 2026, required behavior).** Every toolkit PDF also has a `<name>_preview.png` — page 1 of the PDF rendered to a web image at 150 DPI (1275x1650 on US Letter). This is the "product shot" the Wix toolkit landing page shows in its hero and the Toolkit Library Repeater shows on its cards; lead-magnet pages convert better showing the real deliverable than an abstract placeholder. The preview is a render artifact of the PDF, so it stays in sync the same way: whenever Claude re-renders a toolkit PDF, Claude also re-renders its preview PNG and includes all three files (HTML, PDF, PNG) in the same commit. Render with `cd templates/documents && python3 render_preview.py <name>.pdf` (or `python3 render_preview.py --all` to rebuild every preview). The helper script uses pymupdf (`pip install pymupdf` if not present). Do NOT hand-make the PNG by screenshotting the PDF — always render it so it stays pixel-synced with the source. (The same script also produces an on-demand 1:1 X/social crop via `python3 render_preview.py --x <name>.pdf` → `<name>_x.png`, a square top-crop sized for the X timeline. The X crop is an optional reusable visual for X posts, NOT a required per-commit synced artifact like the preview.) The preview is intentionally the raw rendered page, not a Canva mockup frame: the raw page is already on-brand (PBS v2 visual system) and requires zero per-toolkit design labor, which is what makes it scalable across the weekly toolkit cadence. (A Canva premium-frame treatment was considered and rejected as non-scalable — it would require manual design per toolkit every week.)

(b) **Visual system is fixed.** PBS triangle wordmark in the page header, "PLAN SPONSOR TOOLKIT" eyebrow, numbered Primary Blue section pills, traffic-light Green/Yellow/Red indicators where there is a scoring rubric, redline-list section markers (§) where there is contract language, footer with "Benefit Blind Spots" attribution + rxbs.org + Substack URL + page number on every page. PBS v2 typography only (Plex Sans SemiBold display, Plex Sans Regular body, Plex Mono for numeric benchmarks and dates). PBS triangle wordmark in the page header, "PLAN SPONSOR TOOLKIT" eyebrow, numbered Primary Blue section pills, traffic-light Green/Yellow/Red indicators where there is a scoring rubric, redline-list section markers (§) where there is contract language, footer with "Benefit Blind Spots" attribution + rxbs.org + Substack URL + page number on every page. PBS v2 typography only (Plex Sans SemiBold display, Plex Sans Regular body, Plex Mono for numeric benchmarks and dates).

(c) **Length target: 2 pages.** PA scorecard fit two pages by design; future scorecards should aim for the same. If a tool needs more than 2 pages, the tool itself is too sprawling; tighten the rubric before tightening the layout.

**2-page audit + the box-model bleed fix (added June 4, 2026; footer-anchor correction added June 4, 2026 evening).** A full audit found 7 toolkits had bled past 2 pages. Root cause: the `.page` CSS used `height: 11in` (or `min-height: 11in`) plus `overflow: hidden`, and `overflow: hidden` on a fixed-height block fragments in WeasyPrint so each `.page` div renders as ~2 physical pages. Fix pattern (now standard for every toolkit): **remove only `overflow: hidden`, KEEP `height: 11in`** (keep `page-break-after: always`), trim oversized page padding, and compress section/list/table spacing until each `.page` div's content fits one sheet. **Do NOT remove `height: 11in` — the `.footer` is `position: absolute; bottom: 0.35in` anchored to `.page`, so a content-height `.page` un-anchors the footer from the sheet bottom and it clips at the page break (this is exactly the regression that happened when `height` was first removed alongside `overflow`; restoring `height: 11in` re-anchored the footers). The footer needs the fixed-height page to land in the right place; the overflow is what fragments. Strip overflow, keep height.** Diagnose by dumping per-PDF-page text (`pymupdf`) to see exactly which block spills, and check page 1 and 2 footers render in full. Fixed to 2 pages: W16, W18 (drug pipeline), W17 (carve-out), W19-W23, W24 H1 scorecard, W25-W37 Thursday handouts. **Approved 3-page exceptions (a "really good reason," do not re-flag):** the three foundational Tier-1 frameworks (`evergreen_contract_review_readiness_checklist`, `evergreen_optimize_vs_go_to_market_decision_framework`, `evergreen_pbr_pharmacy_benefit_review_framework`) are comprehensive reference frameworks; and `week_24_thursday_contract_amendment_letter` is a legal letter template (letterhead + amendment body + signature block) that runs naturally to 3 pages. All other toolkits must be 2 pages.

**Build-correct-first gate (added Jun 9, 2026; required behavior for every Q4 toolkit and every toolkit edit forward).** The bleed kept recurring because the *prototype* `.page` CSS itself carried `overflow: hidden`, so every new toolkit copied the bug. As of Jun 9, 2026 the source files are clean: `overflow: hidden` was stripped from week_16, week_18 (channel pricing), week_19, week_20 (copay), and week_22 (biosimilar), and week_17's page-1 overlap was trimmed; all 29 now pass. **The canonical `.page` rule every new toolkit copies is now: `width:8.5in; height:11in; margin:24px auto; padding:<top> 0.65–0.7in <bottom> 0.65–0.7in; position:relative; page-break-after:always; break-after:page;` with NO `overflow` property**, and `.footer { position:absolute; left/right:~0.7in; bottom:0.35in }`. Two hard requirements before any toolkit is committed: **(1)** its `.page` rule MUST contain `height:11in` and MUST NOT contain `overflow:hidden`; **(2)** run `python3 templates/documents/_audit_pdfs.py` and it MUST report **0 flagged** — the script checks each PDF's page count against the 2pp (or approved-3pp) expectation, that the footer renders on every page, and that no body text overlaps the footer band. A toolkit is **not done until the audit is clean**; this is a ship gate, not a later cleanup pass. Never commit or hand off a toolkit PDF that has not passed `_audit_pdfs.py`. The 4 approved 3-page exceptions live in the script's `EXPECT3` set; add a new approved exception there only with a documented reason. Pre-commit sequence for any toolkit: edit HTML → `weasyprint <name>.html <name>.pdf` → `python3 render_preview.py <name>.pdf` → `python3 _audit_pdfs.py` (must be 0 flagged) → commit HTML+PDF+PNG together.

(d) **Naming convention:** `templates/documents/week_{NN}_{topic_slug}.html` and `.pdf`. Week number is two-digit, zero-padded, matching the newsletter file (e.g., `newsletters/week_16_prior_authorization.md` → `templates/documents/week_16_pa_roi_audit_scorecard.html`). Examples: `week_16_pa_roi_audit_scorecard.html`, `week_17_carve_out_decision_scorecard.html`, `week_18_drug_pipeline_watch_list.html`, `week_19_fiduciary_documentation_checklist.html`. Slug is lowercased, underscore-separated, derived from the Monday topic. Week prefix keeps the toolkit roster aligned with the newsletter calendar at a glance.

(e) **Production cadence:** new scorecards ship by the Saturday before the Monday Substack deep dive that introduces them. The toolkit handout is referenced in the Substack article's tool section ("the printable scorecard is available below" + embedded PDF). Backfill earlier weeks as time allows; prioritize whatever ships next.

(f) **The toolkit is referenced from the LinkedIn newsletter CTA when present.** Update the standard CTA from "this week's Benefit Blind Spots includes a [specific tool]" to "this week's Benefit Blind Spots includes a [specific tool], plus a printable plan-sponsor scorecard" when a toolkit handout exists.

(g) **Substack PDF embed (added May 5, 2026):** The toolkit PDF embeds **natively in the Substack post editor via drag-and-drop**. Drop the `.pdf` from `templates/documents/` directly into the post body where the embed should render — Substack converts it to a styled inline file tile that readers can click to view or download. No external hosting (Google Drive, Dropbox) needed. The `**[EMBED PDF: <path>]**` marker in week files is the placement instruction for the publisher; replace it with the dragged-in PDF tile when publishing the post.

(h) **Per-week PART 1C Toolkit Pairings + Wix Build section (added May 14, 2026, required behavior):** Every newsletter week file that ships a Plan Sponsor Toolkit handout (Monday integrated tool, Thursday Field Note handout, or both) must include a `PART 1C: PLAN SPONSOR TOOLKIT PAIRINGS + WIX BUILD` section placed after the Field Note build (PART 1B) and before the LinkedIn Newsletter section (PART 2). This section is the operational source-of-truth for the Wix work Ginny does that week to wire up the new toolkit(s) as lead magnets.

For each toolkit shipping that week, the section contains:

  (1) **Wix Toolkits dataset row** — the full set of column values for the Wix Data Collection row: `slug`, `name`, `pdf_url` (filled after Wix Media upload), `preview_image` (Image-type field; the `<name>_preview.png` selected after Wix Media upload), `mechanic_phrase`, `pillar`, `second_toolkit_name`, `second_toolkit_pdf_url`, `second_toolkit_blurb`, `field_note_title`, `field_note_url` (filled after Field Note publishes). Note: `preview_image` is an **Image-type** column, not a text URL — upload the PNG to Wix Media and select it in the cell so the dynamic-page Image element binds cleanly. One-time setup (done once, not per toolkit): add the `preview_image` column to the collection, then on the dynamic landing page drop an Image element in the hero and bind it to `preview_image`. After that the preview renders automatically for every row, exactly like `name` and `pdf_url` do today.

  (2) **Wix build checklist** — the per-toolkit weekly clicks: upload PDF **and `<name>_preview.png`** to Wix Media Manager, paste the PDF public URL into the `pdf_url` cell and select the PNG in the `preview_image` cell, add row to Toolkits collection, verify landing page renders at `rxbs.org/toolkit/<slug>` (including the hero preview image), submit test form, confirm Email 1 fires within 5 min with the right PDF. After Thursday Field Note publishes, update the `field_note_url` cell with the live Substack URL.

  (3) **Pairing rationale** — 1-2 sentences explaining why `second_toolkit` and `field_note` were selected per the pairing rules in `email_gated_toolkit/toolkit_dataset.md` (different mechanic from the first; PBM Compensation as the universal "zoom out" anchor for single-revenue-stream audits; Tier 1 toolkits pair down to Tier 2 mechanics; PBM Compensation entry pairs to Quarterly Reporting).

The repo-level companion file `email_gated_toolkit/toolkit_dataset.md` consolidates all toolkit pairings across the calendar; PART 1C is the week-file mirror that puts the same information in the natural workflow place. Without PART 1C, the Wix Email 2-5 sequence cannot be configured for the new toolkit and the toolkit cannot ship as a lead magnet.

Applies to all newsletter week files from W20 forward. Backfill prior weeks (W16-W19) as bandwidth allows; do not block forward content production on backfill. When a week ships zero toolkits (rare), the section can be omitted with a one-line note `_No Plan Sponsor Toolkit shipping this week._` so the absence is intentional and visible.

(i) **Glossary convention for toolkit handouts (added May 21, 2026, required behavior on every new toolkit and every toolkit update).** Every toolkit HTML in `templates/documents/` that uses PBM technical terms in narrative content (net cost, AWP, MAC, GER, dispensing fee, rebate, biosimilar, fiduciary, etc.) must include a "Terms used" callout block on page 1, directly under the subtitle and before the first section. The callout uses the `.terms-used` CSS class established in `week_18_channel_pricing_audit_worksheet.html` (compact gray-text block with Accent Blue left border). Each term defined in one line using the **Compact form for callouts** from the canonical glossary at `templates/documents/_glossary_terms.md`. The canonical glossary file is the single source of truth — definitions live there; toolkits pull the subset of terms they use.

  **Workflow when building or updating a toolkit:**
  - Scan the toolkit's narrative content for PBM technical terms (strip base64 image data first via `sed -E 's/data:image\/[^"]*//g; s/<[^>]+>/ /g'` if grepping the HTML directly).
  - For each term the toolkit uses, look up the compact form in `_glossary_terms.md`. Drop it into the page 1 `.terms-used` callout.
  - Add the toolkit's name to the term's `**Used in:**` list in `_glossary_terms.md` so a future definition change propagates correctly.
  - If the toolkit uses a term not yet in `_glossary_terms.md`, add the term to the glossary file FIRST with full definition + compact form, then reference it in the toolkit.
  - **Hard constraint: 2-page page count.** Most toolkits are intentionally 2 pages. The callout adds ~3-4 lines under the subtitle on page 1. If a toolkit's page 1 is already tight, trim the callout to the 2-3 most-critical terms rather than overflowing to page 3. If even a trimmed callout would force a page break, flag the toolkit as a spacing exception in the commit message and skip the callout (the inline use of the term in body text is the fallback definition mechanism).

  **Propagation when a definition is refined:** if the wording of a term changes in `_glossary_terms.md`, update every toolkit listed under that term's `**Used in:**` field with the new wording. Re-render the affected PDFs.

  **Canonical pattern reference:** `templates/documents/week_18_channel_pricing_audit_worksheet.html` is the prototype for the callout structure (CSS + markup placement). Future toolkits copy the same pattern.

## Six Content Pillars

1. **Transparency & Industry Education** - How the PBM industry works
2. **PBM Contract Insights** - Contract language, audit rights, negotiation
3. **Cost Containment Strategies** - Practical approaches to reduce spend
4. **Clinical Pharmacy Perspectives** - Drug therapy, adherence, clinical programs
5. **Self-Funded Employer Guidance** - Decision frameworks for plan sponsors
6. **Broker/Consultant Resources** - Content for benefits advisors

## Performance Data (Updated April 21, 2026)

### Primary conversion metric: followers per 10K impressions

LinkedIn auto-prompts newsletter subscription immediately after a follow, so follower gain is a near-direct proxy for newsletter subscribers. Optimize posts for this conversion rate, not raw impression ceiling. Totals as of June 12, 2026: **2,091 LinkedIn followers (was 2,040 Jun 5), 1,051 newsletter subscribers (was 1,017 Jun 5; crossed 1,000 early June), 98 Substack subscribers (2 paid)**. The W21 17th-anniversary personal post (May 24) is the documented engine behind the May 22→25 jump: 18,917 impressions / 201 profile viewers / no audience drift (held 10,001+ / Senior / Hospitals & Health Care) drove follows that LinkedIn under-attributes to the post, and the follow → newsletter auto-prompt funnel carried into the newsletter +17. See the refined personal-post rule (Channel 1) and `linkedin_performance_tracker.md` Personal Post Performance section. First paid Substack sub attributed to W19 Fiduciary deep dive May 11, $80 revenue. Cuban amplification confirmed for two consecutive weeks (Apr 19 cluster, Apr 30 W17 carve-out POV); Cuban likes-only on W18 Thursday Channel Pricing and W19 Wednesday PCMA produced zero reach lift, validating the May 8 likes-only rule (second and third confirming data points). **W20 Manufacturer Programs Monday deep dive (May 18) cleared 145 Substack views, the new single-post view record, surpassing W18 Pipeline's 119/127 mature.** 4 new subs from W20 Mon deep dive (3 traceable to LinkedIn first-comment cross-promo, 1 direct). Substack lead-magnet ladder is now load-bearing: gated-PDF behind free-sub + LinkedIn first-comment cross-promo = 4-5 subs per Monday deep dive across W18, W19, W20 — even before the Wix landing page goes live. Inbound-email behavior (mailto:team@rxbs.org clicks) reproduced across W19 Fiduciary (5 clicks) and W20 Reading the Rebate Report (5 clicks), establishing it as a third documented Substack-conversion mechanism alongside gated-PDF and first-comment cross-promo.

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
- **"Best-kept secret" is a proven confrontational opener** alongside the dollar-comparison structure already in the Wednesday hook rule. **Its highest-performing variant is the genuinely-unknown structural-fact reveal (added June 2026):** a hidden piece of PBM plumbing the plan-sponsor audience truly did not know, delivered as a shock rather than just labeled a "secret." Canonical proof: the offshore rebate-aggregator/GPO reveal ("Your PBM passes through 100% of manufacturer rebates. The rebate aggregator does not have to.") hit **17,816 impressions / 40 comments / 33 saves / 18 followers** in early June 2026, roughly 10x the same week's informational biosimilar posts (779-1,453 impressions) and clearing the summer-slowdown floor that held every other post that week under 3.6K. **This was confirmed fully organic (no Cuban or amplifier that week),** which makes ~17.8K the organic ceiling for the shape in a slow season; a documented Cuban repost (+60-75%) would project it toward 28-31K. The lever is the shock of the unknown fact, not the word "secret." **Reach for this type whenever a genuinely little-known hidden-structure fact is available:** offshore rebate aggregators/GPOs (the real entities are Ascent, Emisar, Zinc), the GPO fee layer skimmed before "pass-through" even begins, copay maximizers draining the full card value off the deductible, PBM-owned specialty/mail-order routing as a margin funnel. Once a fact becomes widely understood (spread pricing and DIR are now broadly known to this audience), it stops shocking; rotate to the next genuinely-unknown one. The X recipe bank entry 20 (`x_recipe_post_bank.md`, "GPO Offshore Rebate Routing") is the paste-ready seed for this shape.
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

**First-comment Substack cross-promo rule (added May 8, 2026, required behavior):** Every LinkedIn post that ships in a week with a Substack companion (Monday deep dive, Wednesday roundup, Thursday field note) includes the Substack link in the **first comment** on the LinkedIn post, written so it makes sense to a reader who just saw the visual or read the text post. Confirmed conversion lever: W18 attributed ~6-7 free Substack subs to first-comment links across two posts — Pipeline Monday deep dive (2 free subs from linkedin.com source per Substack analytics) and Channel Pricing Thursday Field Note (4-5 free subs same-day). Subs went 55 → 65 in 7 days (+18%), with ~60-70% of growth traceable to this mechanism. **Format of the first comment:** one or two sentences naming what is in the Substack post specifically (the toolkit handout, the action plan, the data table), followed by the link. Do not write a generic "read more on Substack" comment — name the asset. Skip the cross-promo only on weeks where the LinkedIn post is intentionally evergreen and pillar-different from the Substack content. **(Reframed Jun 18, 2026 per the LinkedIn 2026 deep dive: treat the first-comment link as a conversion/tracking mechanism, NOT a reach multiplier. The 2026 algorithm no longer rewards the "link in first comment" workaround the way 2022-2024 advice claimed; its value is clean attribution plus the conversion path. It still belongs in the comment because body links carry a real reach penalty, so keep the post body link-free. See `linkedin_2026_algorithm_deep_dive.md`.)**

**Library NN rule (reference-asset metric, added Apr 24; cadence updated May 8, 2026):** Library 01 (April 21, Week 16 Tuesday) shipped as the first branded Contract Comparison carousel with side-by-side redlines on contract language. 3-day actuals: 2,129 impressions, +2 followers, 14 saves, 4 reposts. Against an 18K / 22-follower / 7-save forecast derived from comparable decoder carousels, reach and conversion came in at 9-12% of forecast while saves came in at 200%. The Library NN pattern is **bookmark-first, feed-distributed-second** — LinkedIn's algorithm does not reward carousels dense with redlines and legal quotes the way it rewards dollar comparisons or simple decoders, but the audience bookmarks them at rates no other PBS format matches. **Schedule Library entries on reference-asset logic, not feed-reach ambition.** Success metric: 12+ saves in first 2 weeks; 30-day profile viewer count; Substack Contract Language Library traffic lift. **Do not pull, deprioritize, or rework a Library NN entry based on first-week feed impressions alone.** Library entries get a contingent Substack Note cross-promo once save count crosses 10 (save count becomes the social-proof hook).

**Cadence (updated May 8, 2026):** Library NN entries now ship **every 2 weeks** on Tuesday, doubled from the prior every-3-weeks cadence. Reasoning: each Library entry is a save-driven asset that compounds (saves → 30-day profile views → LinkedIn auto-prompt newsletter signups → Substack via cross-promo), and the Substack Contract Language Library reservoir has 25+ provisions documented to support tighter cadence without repetition. Forward schedule (Tuesday slots):

- Library 01 — W16 (Apr 21, 2026) ✓ shipped
- Library 02 — W21 (May 26, 2026) — Five Clauses the Best Brokers Check First (Broker pillar)
- Library 03 — W23 (Jun 9, 2026) — Audit Rights (PBM Contract Insights pillar)
- Library 04 — W25 (Jun 23, 2026) — Five Termination Clauses That Decide Whether You Can Actually Leave (Termination & Transition, PBM Contract Insights pillar)
- Library 05 — W27 (Jul 7, 2026) — Five Reporting Clauses That Let You Actually Run the PBM Review
- Library 06 — W33 (Aug 18, 2026) — Five Clauses That Anchor Q4 Broker Conversations
- Library 07+ — opportunistic, not pinned to a fixed 2-week grid; number consecutively from 06 as each entry is actually built

**Cadence realigned to as-built (June 3, 2026; numbering superseded by the June 2026 resolution below).** The every-2-week aspiration drifted in production; W29, W31, W35, and W37 did NOT ship Library carousels (their Tuesdays carry paused-Whiteboard drafts or other cycle visuals), so they are NOT Library weeks. Treat the cadence as opportunistic: a Tuesday becomes a Library week only when a Contract Comparison carousel is actually drafted for it, and it takes the next consecutive number. Every Library-shipping week must carry the `## Substack Contract Library Update — Library 0X Week` section.

**Numbering RESOLVED (June 2026, authoritative — matches the forward schedule above):** W25 WAS subsequently built as a Library carousel (Library 04, Termination clauses), so the built sequence is SIX, not five: **Library 01 = W16, 02 = W21, 03 = W23, 04 = W25, 05 = W27, 06 = W33.** The Library-shipping weeks that carry the update section are therefore **W21 / W23 / W25 / W27 / W33.** _(Propagation note: conformed Jul 1, 2026 — W27's two cover eyebrows now read "LIBRARY 05" and the W33 file was renumbered throughout to "Library 06," resolving the W27/W33 collision.)_

**Slot reassignment rule:** when a Library NN entry lands on a Tuesday whose currently-planned post is a different format (messy infographic, clean infographic, non-Library carousel), move the displaced post to `evergreen_visual_backlog.md` with full preservation (slide spec, post copy, image prompt) so it can be slotted into a future open Tuesday or Thursday. **Do not delete displaced content** — it represents drafted work that fits any future non-Library slot whose pillar/format matches. The May 8 displacement of W23 Tuesday's "The Contract Clause That Saved a Client Six Figures" Chart-on-Whiteboard Messy Infographic into backlog entry #24 is the canonical example.

**Provision rotation:** each Library entry features a different provision family from the Substack Contract Language Library: pricing guarantees, rebate definitions, audit rights, termination language, specialty routing, formulary management, step therapy, renewal and amendment, performance remediation, manufacturer payment categories. Cycle through the provision families in order; do not repeat within 6 entries.

**Library NN ↔ Substack Contract Language Library feeding loop (added Apr 24, revised May 20, 2026):** The Substack Contract Language Library (`benefitblindspots.substack.com/p/pbm-contract-language-library`) is an evergreen free post that holds the full protective language for every PBM contract provision PBS surfaces through Library NN carousels and contract reviews. The file `substack_contract_language_library.md` in this repo is the **source of truth**; the live Substack post holds a rendered copy that gets refreshed via whole-article paste each time the article body is updated in this file. The article body lives between `▼ BEGIN PASTE ▼` and `▲ END PASTE ▲` markers in the file — those markers define exactly what gets copied. The Substack post is the **content reservoir** for the LinkedIn Library NN carousel series; each Library NN carousel surfaces 5 clauses from one provision family that lives in the Library, and the closing slide funnels readers back to the Library Substack post.

**Library continuous-update workflow (revised May 20, 2026, replaces prior quarterly cadence):**

(a) **Continuous, not quarterly.** The article body in `substack_contract_language_library.md` is always current. When a Library NN carousel ships, or when a contract review surfaces a new provision worth documenting, Claude updates the article body in place (between the `▼ BEGIN PASTE ▼` / `▲ END PASTE ▲` markers) on the same session Ginny asks for the update. There is no Update Queue, no quarterly batching, no deferred paste-ready blocks. The previous quarterly-cadence + paste-ready-blocks workflow (Apr-May 2026) was retired May 20, 2026 because Ginny found whole-article paste lower-friction than block-by-block paste, and continuous updates keep the Library closer in sync with what LinkedIn readers are seeing in the carousels.

(b) **Trigger to update.** Ginny says something like: *"update the contract library for Library 0X"* / *"add this provision"* / *"amend the X clause."* Claude opens `substack_contract_language_library.md`, locates the right section (Pricing Guarantees / Rebate Provisions / Audit Rights / Clinical Program / Termination and Transition / Specialty Pharmacy / or a new section if the provision family doesn't fit existing ones), inserts the new provision or replaces the existing one using the same format pattern that's already in the file (`**Provision: [Name]**` heading, `What you might see:` blockquote with vague language, `What it actually means:` plain-English line, `What you should ask for:` blockquote with protective language, optional `*Illustrative example for educational purposes...*` disclaimer, `---` separator).

(c) **Commit and tell Ginny.** Claude commits the change to the active branch (or `main` if not on a feature branch) with a short message naming the Library NN source and the provisions added/amended. Then Claude tells Ginny: *"The article body is updated. Open the live Substack post in edit mode, copy everything between the `▼ BEGIN PASTE ▼` and `▲ END PASTE ▲` markers in `substack_contract_language_library.md`, paste it over the existing post body, publish."*

(d) **After Ginny confirms the Substack push, update the Update Log.** Ginny reports back that the Substack post is updated. Claude moves the `_Pending: next push_` row of the Update Log to a dated row with the actual push date, and opens a fresh `_Pending: next push_` row for the next round of provisions. This keeps a historical record of which provisions shipped to Substack on which date.

(e) **Content-building rule that depends on the library:** when drafting a new Library NN carousel, Claude opens `substack_contract_language_library.md` first to see what provisions are already documented and what's in the Upcoming Library NN section (planning notes for which provisions are slated for which carousel). Library NN carousels should surface provisions that either already live in the Library or are planned for it; do not invent new clauses for a carousel that don't fit the feeding loop. When a week's topic has a contract-language angle and the Library has a matching provision documented, prefer a Library NN carousel for that week's Tuesday Contract Comparison slot over inventing a new clause set.

(f) **What was retired:** the Apr-May 2026 quarterly cadence (Jan 1 / Apr 1 / Jul 1 / Oct 1 push dates), the per-quarter Update Queue (Q3 2026, Q4 2026, etc.) with paste-ready blocks under `▼ START COPY ▼` / `▲ END COPY ▲` markers, and the proactive-alert session-start behavior that fired heads-up notifications in the 30-day window before each quarterly push. All retired May 20, 2026 in favor of the continuous-update model.

(g) **In-week reference prompt convention (added May 20, 2026, required behavior on every Library NN-shipping newsletter file).** Every newsletter week file where a Library NN carousel ships (as-built Library weeks: W21 / W23 / W25 / W27 / W33; future Library weeks are opportunistic per the cadence note above, not a fixed grid) must include a `## Substack Contract Library Update — Library 0X Week` section placed after the "What I'd Ask" Substack content and before the Monthly Q&A section (or before the next non-Substack content section if there's no Monthly Q&A that week). The section contains the publishing prompt block-quoted (`> Open the live Substack post at ... in edit mode. Copy everything between the ▼ BEGIN PASTE ▼ and ▲ END PASTE ▲ markers in substack_contract_language_library.md and paste over the existing post body. Publish.`) plus a bullet list of the provisions Library NN is expected to have added or amended in the article body that week, so Ginny can confirm Claude has merged them before pushing. The W21 file (Library 02) is the canonical example of this convention. **When drafting a Library NN-shipping week's file from scratch, include this section automatically.** Non-Library-shipping weeks (W22, W24, W26, etc.) do not include this section.

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

**Mobile-feed legibility rule (added June 3, 2026, mandatory for all messy-infographics and decoders):** The recurring failure mode for decoders is type too small to read in the LinkedIn mobile feed, the documented cause of past contract-decoder underperformance. Every messy-infographic / decoder prompt must: keep realistic fine print minimal so the decoded payload dominates the center ~70% of the frame; cap at five generously-spaced items; make the title and primary labels readable at thumbnail size (~400px wide, the in-feed pre-tap state) with translations readable on tap; use high contrast and large bold annotations; and pass a mandatory Canva legibility check (preview at ~400px or on a phone, enlarge anything hard to read) before export. Highest-risk formats are the photoreal documents dense with small text (Marked-Up Contract Page, Annotated Email, Spreadsheet with Marker, Ledger Annotated, annotated invoice); apply it most aggressively there. Full operational detail in `claude_design_prompts.md` → "Mobile-feed legibility (mandatory for every prompt)."

**Timeline / date-story visual rule (added June 12, 2026, from the W24 amendment-window build):** Calendar-grid photoreal compositions are a double trap: month grids are inherently fine print (a multi-month spread fails the ~400px check even when generated perfectly), and generators routinely misalign weekday columns. For any date / deadline / timeline story, default to the **whiteboard vertical timeline** (Chart-on-Whiteboard single-image messy infographic, in active rotation; distinct from the PAUSED Whiteboard carousel): 4:5-native, conference-room-scale marker type, and no grids to misalign. If calendar grids are used at all, max two large grids, and verify weekday alignment against the real year. **Date-math gate for every deadline visual:** each date shown must back-calculate to a real deadline before the prompt ships (e.g., 90-day notice for a Jan 1 effective date = Oct 3 literal, **Oct 1 working anchor** — round, weekday, month-count-safe; the W24 image initially shipped a late-August circle that back-calculated to nothing). **In-scene headline/footer pattern for whiteboard and flip-chart visuals:** write the headline ON the board in navy marker (≈#015880) and "rxbs.org" small in a corner; handwritten marker type sidesteps the generator-botches-clean-type problem, no Canva headline band is needed, and the Canva step reduces to the small PBS logo only (logos never go in generation prompts). **ChatGPT image-edit caveat:** selection edits frequently redraw beyond the mask; after any edit, re-verify the date/text fingerprint (circled dates in correct weekday columns, labels unmangled) before shipping. W24's "Mid-Year Amendment Window" Thursday visual is the canonical example of the full pattern.

**Clean infographic rotation (4 templates):**

Rotate through Iceberg → Funnel → Mountain → Bridge in order across clean-infographic slots. These four cover the most common argument shapes (hidden cost, flow, climb, weak-to-strong). Stopwatch, Door, Tree, Maze are saved for topic-specific weeks where the metaphor is obvious.

**Clean conceptual infographic over Marked-Up Contract Page when the thesis is a flow/comparison/score (added Jun 18, 2026).** A Marked-Up Contract Page photoreal is a static document; it cannot show the *argument*. When the post's thesis is "money routes around a gate" (use a **Bypass/Funnel** — W26 Tuesday "5 manufacturer payments that bypass the rebate pass-through"), "the same inputs flip the outcome" (use a scoreboard/whiteboard — W25 Thursday "RFP scoring: the winner flips"), or "score your plan" (use a **Scorecard** — W26 deep-dive Formulary Independence Scorecard), reach for the clean conceptual infographic. It dramatizes the thesis and is far more legible at thumbnail than legalese. Reserve the Marked-Up Contract Page for genuine contract-language decoders where the redline IS the payload.

**AI image-generation (ChatGPT / Gemini) is a proven production path for clean scorecard / conceptual infographics (added Jun 18, 2026).** Tested on the W26 Formulary Independence Scorecard: the dense scored table rendered clean. **Chosen treatment:** color-code score numerals (`0` Gray / `1` amber / `2` Green) so each row reads as traffic-light at a glance; large numbered pills; rounded score-band pills. **Brand correction:** render the title in **IBM Plex Sans SemiBold**, not a condensed poster face (PBS holds a clinical-credibility register — the same reason Krona One was retired). Canva remains the fallback if a regen mangles text. (Dense legalese photoreal still generates unreliably; this applies to clean conceptual layouts.)

**Test-and-prune cadence:**

After every three full 6-week cycles (~18 weeks), pull per-template impression, save, comment, and conversion-rate (followers per 10K) data. Top two templates in each format class stay in rotation; bottom one or two drop out. The rotation concentrates around what is actually performing.

**Library NN series placement inside the rotation:**

Library NN (PBM Contract Language carousel series, linked to the Contract Library Substack post) occupies Contract Comparison slots. A new Library entry drops every ~3 weeks when a Contract Comparison slot comes up in the carousel rotation. Template choice is fixed (Contract Comparison) but the clause set rotates: each Library entry targets a different provision family (pricing guarantees, rebate definitions, audit rights, termination language, specialty routing, formulary management, step therapy, renewal and amendment).

**Integration rule for weekly briefs (hard rule):**

When a week's Tuesday or Thursday visual is being scheduled, the brief in the week file is rewritten **holistically** so topic, template, slide-by-slide copy, image generation prompt, and caption read as **one integrated spec**. Never stack a "template rule" layer on top of an existing "topic copy" layer as two separate sets of directions in the same week file. A brief that reads as two overlapping instruction sets is a brief that gets misbuilt.

## Wix Toolkit Lead-Gen Funnel Status (updated June 2026 — production-live)

**Status (June 2026): LIVE and production-proven.** The custom Velo form funnel has now processed its first real inbound lead end-to-end: the toolkit-delivery email reached the lead and the new-submission notification reached Ginny at team@rxbs.org. The earlier three cleanup items (disable native Wix Email 1-5, switch Zapier delays to production, publish the Zap) are complete, and the first Wix-Forms-App-path lead (Sandeep) landed Jun 1 before the custom form went live Jun 2. The **custom Velo form is the live production path**; the Wix Forms App version stays only as the instant-revert fallback (`useCustomForm` flag). Full operational detail and as-built specifics are in `email_gated_toolkit/WIX_SETUP_TODO.md` (see the "DEPLOYED & WORKING" section). The historical Zapier-path notes below are retained for reference.

The Channel Pricing toolkit lead-gen funnel reached **functionally complete and end-to-end tested** at `rxbs.org/toolkit/channel-pricing`. All 5 emails fire from Zapier with correct CMS-driven merge tags per submission. Full operational status is tracked in `email_gated_toolkit/WIX_SETUP_TODO.md`. This section is the high-level pointer.

### Working architecture (the path that actually works)

```
User submits form on rxbs.org/toolkit/<slug>
    ↓
Wix Forms App processes the submission (Submissions DB + native notification email to Ginny)
    ↓
Wix Automation "5 email welcome" fires on Form Submitted trigger
    ↓
Automation Action: Send HTTP request → POSTs 5 fields to Zapier Catch Hook
    (first_name, email, company, role, toolkit_name)
    ↓
Zapier Step 1: Catch Hook receives payload
    ↓
Zapier Step 2: Webhooks GET → calls Velo HTTP function backend/http-functions.js get_toolkit
    Returns all 9 CMS fields for the matching Toolkits row
    (toolkit_slug, toolkit_name, pdf_url, second_toolkit_*, field_note_*)
    ↓
Zapier Steps 3, 5, 7, 9, 11: Microsoft Outlook Send (Emails 1, 2, 3, 4, 5)
    Form fields from Step 1 via {{1__*}}, toolkit fields from Step 2 via {{2__*}}
    ↓
Zapier Steps 4, 6, 8, 10: Delay by Zapier (production: Day 0 / +2 / +3 / +4 / +5)
```

### What's working

- Wix landing page live; 5-field form (4 visible: first_name, email, company, role + 1 hidden: toolkit_name)
- Velo page code on `Toolkits (Item)` populates the hidden toolkit_name field from CMS via `setFieldValues` (just one field; no white-box workaround needed)
- Velo backend HTTP function `backend/http-functions.js → get_toolkit` queries Toolkits CMS by title_fld and returns the full row as JSON; reachable at `https://www.rxbs.org/_functions/toolkit?name=<toolkit name>`
- Wix Automation "5 email welcome" fires reliably on every form submission; **Send HTTP request action** POSTs 5 fields to Zapier
- Zapier Zap wires all 5 emails (Microsoft Outlook Send) with CMS-driven merge tags. Each email tested end-to-end and confirmed to deliver with the right toolkit-specific PDF link, Field Note title, Field Note URL, and UTM-tagged Substack/LinkedIn links
- Channel Pricing CMS row fully populated; Tier 1 toolkit rows (Contract Review Readiness, Optimize vs Go-to-Market, PBR Framework) fully spec'd in `email_gated_toolkit/toolkit_dataset.md` + CSV ready for bulk import

### What's dead — do NOT attempt to revive

These approaches were tried and confirmed not viable for this Wix tier/form version. Documented here so future sessions don't re-discover the same dead ends:

- **`$w('#form1').onWixFormSubmitted(...)` page-level Velo event** — TypeError on Wix Forms v2. The new Forms App doesn't expose this method. (Confirmed May 20, 2026 via Wix Logs.)
- **`backend/events.js` with `wixForms_onSubmit` Service Plugin event** — does not fire on Wix Forms v2. Different event API for the new Forms App. (Confirmed May 20, 2026 via Wix Logs.)
- **Native Wix → Zapier integration ("Find Item" / "Wix Form Submitted" Zapier triggers/actions)** — requires Wix Business+ tier. PBS is on Wix Free; the Wix app is greyed out in Zapier action search. (Confirmed May 20, 2026.)
- **6-hidden-field form with `setFieldValues` populating all 6** — only `toolkit_name` reliably populates because the other 5 field keys got mismatched on re-add. With the Velo HTTP function approach, only 1 hidden field is needed (toolkit_name as the CMS lookup key); the rest of the toolkit data is fetched server-side at email-send time.

### Three cleanup items (COMPLETED June 2026 — retained for reference)

_All three are done; the funnel is production-live (see the Status line at the top of this section, which supersedes this list). Kept here only to document what the cleanup entailed._

1. **Disable Wix's native Email 1-5 actions** in the "5 email welcome" Wix Automation. Currently both chains fire on every submission (Wix sends its 5 + Zapier sends its 5 = recipient gets 10 emails). Keep only the trigger + the Send HTTP request action.
2. **Switch Zapier delays from 1-minute test values to production**: Day 0 (no delay), Delay 2 days between Email 1→2, Delay 3 days between Email 2→3, Delay 4 days between Email 3→4, Delay 5 days between Email 4→5.
3. **Publish the Zap** (top-right Publish button — currently in Draft). Until published, Zapier won't run on live form submissions.

### Landing-page promotion (UPDATED Jun 2026 — library fully live)

**The full toolkit library is live on the website**: every toolkit landing page renders at `rxbs.org/toolkit/<slug>`. The earlier "de-promote until funnel cleanup" gate is **lifted**. From **Week 25 forward**:
- Place the **live toolkit landing-page link** (`rxbs.org/toolkit/<slug>`) directly in the **Monday deep dive body** and the **Thursday Field Note body**, at the point the integrated tool / handout is referenced (in addition to the embedded PDF, not instead of it).
- LinkedIn and X **first comments route to the toolkit landing page** (not only the Substack post).
- Always confirm the page renders at `rxbs.org/toolkit/<slug>` before using its link.

Earlier weeks (W24 and before) keep their existing routing unless retrofitted. The `<slug>` for any toolkit is in `email_gated_toolkit/toolkit_dataset.md`.

### Tier 1 toolkit rollout (queued behind cleanup)

- 3 Tier 1 rows ready for bulk CSV import to Wix CMS once cleanup is complete
- 3 Tier 1 PDFs ready in `templates/documents/` (evergreen_contract_review_readiness_checklist.pdf, evergreen_optimize_vs_go_to_market_decision_framework.pdf, evergreen_pbr_pharmacy_benefit_review_framework.pdf)
- Toolkit Library page needs Tier 1 section added above the existing Tier 2 Repeater (label as "Start Here · Foundational Frameworks")
- Once added, the SAME Zapier chain handles every toolkit landing page automatically. The Velo HTTP function looks up whichever toolkit_name comes through the webhook; no per-toolkit Zapier branching required.

### Testing gotcha to remember (May 18 evening, still relevant)

When test-recipient Gmail addresses have personal filters routing Substack-mentioning emails to a separate folder, Email 2 will appear "missing" from the inbox even though Microsoft + Gmail both confirm delivery. Use a fresh Gmail alias without filters for test sends, or check the user's Substack/labeled folders before assuming a delivery failure.

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
                                             #   PART 4B: X (Twitter) Posts
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
- **AEO/GEO initiative tracker (status/owner across all workstreams):** aeo_geo_master_plan.md
- **Website build spec (template, archetypes, IA, schema):** website_aeo_master_plan.md
- **Substack AEO rule (every article):** substack_aeo_rules.md
- **AI-citation scoreboard:** ai_visibility_tracker.md
- **Off-site entity authority:** entity_authority_offsite_plan.md
- **Site blueprints + design system:** website_mockups/site/ (`site.css`, `geo_seo_plan.md`, `wix_pages_build_runbook.md`)
- **Automation system (scheduled workflows + quality gates):** `.github/workflows/README.md` (16 workflows: weekly pipeline/roundup/critique-auto-fix/monday-brief, monthly system-audit/AEO-page/Substack-backfill/citation-reminder/platform-research/AEO-research/search-console/video-research/ads-research, weekly metrics-reminder, quarterly research, push-time brand-lint; the weekly critique now runs Wed night via `/critique-fix` and AUTO-APPLIES resolvable fixes to the week file, leaving only unresolvable items (external URLs, human data) flagged for Thursday scheduling; run-notifications post to one rolling GitHub issue that @mentions + is assigned to `@crispjb`; the notify steps use `${{ secrets.NOTIFY_PAT || secrets.GITHUB_TOKEN }}` so a real-user PAT makes runs actually email — bot/`GITHUB_TOKEN`-authored comments never notify, which is why subscribing alone produced no email; add the `NOTIFY_PAT` secret to turn email on). **Two issue surfaces (added Jul 1, 2026):** run notifications go to **"🔔 PBS automation log"** (via `notify_issue.sh`; every run that committed appends a "Review this run's changes" commit link, or a ⚠ warning if its push failed), and judgment-call approvals go to a SEPARATE standing **"✅ PBS — Approvals needed"** issue (via `request_approval.sh`) as **tap-to-approve GitHub checkboxes** — Ginny checks the ones she approves from mobile, then a Claude session builds each checked item via a review-linked PR and ticks it off. The audit/quarterly/ads/video commands write their "needs Ginny" items as `- [ ]` lines to gitignored `APPROVALS_PENDING.md`, which a "Surface approvals" workflow step posts. Checking a box records approval only; it does not auto-build. Every committing workflow rebases-then-retries its push so concurrent runs (e.g. monthly+quarterly on the 1st) can't reject each other and lose work. The **daily first-comments reminder runs as a scheduled Claude Code web session** (Triggers, configured in the web app, outside the repo) invoking `/first-comments-today` and delivering to the Claude app, NOT a GitHub workflow. Brand/schema linter: `tools/brand_lint.py` (also a Stop hook). Content loops draft to `main` for review; nothing auto-publishes.
- **Platform best-practices playbook (10 platforms (LinkedIn, Substack, X, YouTube Shorts, TikTok, Instagram, Facebook, Threads, YouTube long-form, Reddit/Quora), refreshed monthly):** platform_playbooks.md. The build reads it automatically: `/build-week` (Step 0b) and `/clip-podcast` draft each platform's content to the current best practices in it, so the monthly `/platform-research` refresh applies without manual rework (measured WORKING/WEAK data overrides where they conflict).
- **Search / AEO visibility (three layers):** `aeo_seo_playbook.md` is the search/answer-engine **technique** layer, refreshed monthly by `/aeo-research` (the SEO counterpart to platform-research; `/build-aeo-page` + `/backfill-substack-aeo` read it). `search_console_tracker.md` is the automated **organic-search performance** read (impressions/clicks/CTR/position via `tools/gsc_pull.py` + `monthly-search-console.yml`; needs the `GSC_SA_KEY` secret, no-ops until set). `ai_visibility_tracker.md` is the **AI-citation** read (20-prompt set across the 5 engines, manual because the engines are login-walled; monthly reminder). Strategy: `aeo_geo_master_plan.md` (tracker) + `website_aeo_master_plan.md` (build spec) + `substack_aeo_rules.md` (per-article rule).
- **Two content-bank engines (added Jun 23, 2026):** **`video_content_bank.md`** (video concepts/scripts/shoot-list for Ginny, scripted talking-head + repurposed clips) is refreshed monthly by `/video-research` (`monthly-video-research.yml`, 20th — video best practices + competitor/advisor video teardown + PBS video results); `/build-week` pulls the Wednesday 9:16 slot from its Active shoot-list and `/clip-podcast` from its repurpose queue. **`paid_ads_bank.md`** (LinkedIn ad concepts wired to the live toolkit funnel) + **`competitor_ad_teardown.md`** (LinkedIn Ad Library sweep; ad longevity = working proxy) are refreshed monthly by `/ads-research` (`monthly-ads-research.yml`, 24th). Both engines auto-maintain their banks and **propose every judgment call to OPEN_ITEMS** (video: cadence/format rules; ads: every spend/launch/budget decision). **Ads are PRE-LAUNCH and never auto-spend; nothing auto-publishes.** Benchmark set for both: independent PBM auditors/consultants + benefits-broker advisors.

## Website AEO/GEO Build Status (added Jun 20, 2026)

A full AI-search (AEO/GEO) optimization pass ran on the rxbs.org website + the Substack content engine. **`aeo_geo_master_plan.md` is the initiative tracker (status/owner/sequence across website, Substack, social, off-site, measurement); `website_aeo_master_plan.md` is the website build spec (the build-once template, two archetypes, IA, schema).** This is a status pointer.

**Strategy locked:** be the *cited* source in ChatGPT / Perplexity / Google AI Overviews / Gemini / Claude, then convert that high-intent traffic. Substack is the crawlable citation surface; LinkedIn is login-walled (entity + reach, not citations); **rxbs.org is the owned canonical** (evergreen content mirrored there, Substack links back). Naming + AEO rules are in Critical Rules above.

**Built this session (Wix-ready blueprints in `website_mockups/site/`, not yet built in Wix):**
- 7 new owned answer pages: `glossary`, `contract-language-library`, `what-we-are-seeing` (real 2025 data), + 4 guides (`guide-pbm-contract-audit`, `guide-what-is-spread-pricing`, `guide-how-to-choose-a-pbm-auditor`, `compare-pbm-audit-vs-broker-review`).
- **Phase-0 template** built into all blueprints: shared `.byline` / `.lead-cta` / `.related` components in `site.css`; author byline + inline lead-magnet CTA + "Keep reading" cluster block on every content page; `HowTo` schema on the 3 how-to guides; `WebSite`+`SearchAction` + enriched `Organization` on Home; the **"How did you hear about us?" source field** on all forms. 31 JSON-LD blocks valid.
- Two page archetypes defined (Content/Answer vs Utility/Conversion); live-page retrofit spec (Toolkit Library `CollectionPage`/`ItemList` + the 29 toolkit pages' source field via the Velo funnel) in the master plan.
- **W25-W37 Substack articles rewritten** to `substack_aeo_rules.md` (question-shaped SEO titles, answer-first leads, outbound rxbs.org canonical links, firm name spelled out).

**The single build runs in phases (per the master plan): Phase 0 = build the master template FIRST (everything derives from it) → 1 lock IA/URL map → 2 the 7 pages → 3 wire conversion → 4 content waves → 5 off-site + measurement.**

**Open (Ginny/Wix actions):** build the pages in Wix per `wix_pages_build_runbook.md`; fill `sameAs` LinkedIn URLs; submit sitemap to Search Console + Bing; supply testimonials / 2 team bios / Ginny headshot; execute `entity_authority_offsite_plan.md` (Wikidata, Substack Recommendations, listicles); run the `ai_visibility_tracker.md` baseline. Full open-items list in OPEN_ITEMS.md.


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
