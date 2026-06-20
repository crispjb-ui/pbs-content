# Platform Playbooks — best practices by channel (living doc)

_Created Jun 20, 2026. The current best-practice playbook for every channel PBS posts to (or may): **LinkedIn, Substack, X, YouTube Shorts, TikTok, Instagram, Facebook, Threads, YouTube (long-form), Reddit/Quora.** Refreshed **monthly** by `/platform-research` (`.github/workflows/monthly-platform-research.yml`), which web-researches each platform with adversarial verification, auto-applies format/spec/tactic updates here (dated in the Changelog), and proposes rule-level changes to `OPEN_ITEMS.md` for one-time approval._

## How this file is used (so findings actually get applied)
- **`/build-week` and `/clip-podcast` read this file as a required input.** They draft each platform's content (posts AND video clips) to the CURRENT best practices below. Update this file → the next build applies it automatically.
- **`week_build_spec.md` §8** gates conformance; `/critique` scores against it.
- **Two hard overrides:** (1) **PBS's measured data wins.** Where a generic best practice conflicts with PBS's logged WORKING/WEAK results (`linkedin_performance_tracker.md`), the measured data governs. (2) **Brand-fit filter.** PBS is a clinical-credibility B2B brand reaching CFOs / HR / brokers as Prescription Benefit Solutions. Reach that pulls the wrong audience or risks platform ToS is rejected, not chased. "Max reach" is in service of reaching plan sponsors, not vanity views.
- **Confidence tags:** CONFIRMED (first-party or consistent across many sources) vs. directional (vendor-aggregated, reverse-engineered). Treat percentages as directional.

---

## X (Twitter)
**Role:** amplification + policy/journalist relationships (Cuban/Ciaccia/Fein). NOT direct conversion. **Source of truth = `x_account_strategy.md` (PBS-measured).**
- Hooks: lead with the confrontation, no wind-up; the "named program · hidden extraction" recipe + "guess which…" close are PBS-proven (`x_recipe_post_bank.md`).
- Links in the FIRST REPLY, never the body (links suppress reach). 0-1 hashtags. Tagging > hashtagging.
- Visuals (Tue/Thu library assets, toolkit PNGs) outperform text-only. Threads/multi-image travel further.
- Amplification is the lever: reaction speed when Cuban posts (weekend = his active window, PBS data). Measure reposts/quotes, not likes (likes-only = zero lift).

## LinkedIn (feed + newsletter)
**Role:** primary growth engine + the person-entity. **Source of truth = `linkedin_2026_algorithm_deep_dive.md` + CLAUDE.md (PBS-measured).**
- Ranking: dwell → comment *quality* → saves → reposts → reactions (weakest). First ~60 min is the gate. 8:30 AM ET (PBS A/B beat 10 AM).
- **Native 9:16 video gets dual distribution (feed + recommendation video tab → non-followers).** Upload the file natively (never a YouTube/Vimeo link), hook in 3s, captions burned in, post from Ginny's personal profile, link in first comment. This is the bridge to the TikTok/Shorts clip pipeline.
- 3 hashtags (PascalCase), confrontational hooks (10-100x informational), first-comment Substack cross-promo (conversion/tracking, not a reach multiplier in 2026).

## Substack
**Role:** the crawlable AI-citation surface + deep audience. **Source of truth = `substack_aeo_rules.md`.**
- Every article: question-shaped SEO title (separate from display), one quotable answer sentence up top, outbound link to the rxbs.org canonical.
- Notes: 3/day, origin-story/personal weighted (the only format generating reciprocal engagement).
- **Biggest untapped growth lever: Recommendations** (get recommended by Potter + aligned newsletters) — see `entity_authority_offsite_plan.md`.

## Facebook (Reels + Page) — _newer surface for PBS_
**Role:** secondary distribution; Reels can reach non-followers. Lowest priority of the six for a B2B plan-sponsor audience (skews consumer), so use as a **repost surface for the strongest video clips**, not a bespoke channel.
- **Reels reach non-followers first** (tested before your own audience), so a strong clip can travel without paid spend. _(directional)_
- **Completion rate is king:** a 15s Reel most people finish beats a 60s Reel they swipe; viewers decide in <3s. _(directional)_
- Meaningful Social Interactions weighting: **a Share-to-Story or Save is worth far more than a Like.** Long comments + shares > reactions. _(directional)_
- Meta **deprioritizes** low-value reposts, reaction clips without commentary, and stitches. 80/20 value-to-promo; overly promotional content is penalized. _(directional)_
- **PBS fit:** repurpose the same captioned 9:16 clip used for Shorts/TikTok; do not build Facebook-first. Revisit priority only if analytics show plan-sponsor reach.
- Sources: [Fanpage Karma](https://www.fanpagekarma.com/insights/the-facebook-algorithm-2026-explained-what-marketers-need-to-know/), [Postoria](https://postoria.io/blog/facebook-algorithms), [Omnichat](https://blog.omnichat.ai/facebook-algorithm-increase-reach/).

## TikTok — _planned video surface; treat as reach/discovery_
**Role (planned):** top-of-funnel reach + discovery for the podcast-clip pipeline. B2B rarely closes on TikTok, but it builds high-intent interest **when the next step is frictionless** (bio link → newsletter/toolkit). Skew to POVs, frameworks, opinionated takes the audience can reference.
**Current best practices (2026):**
- **Hook in the first 1-2 seconds; retention is the dominant signal.** Vendor sources cite a **~70%+ completion target to go viral in 2026** (up from ~50% in 2024). Get past the 5-second mark for "qualified views." _(directional)_
- **Length has shifted: 60-180s now outperforms 15s clips** for reach (room for a real point). Still hook instantly. _(directional)_
- **Audio:** trending sounds give a boost, but **original audio is favored**; if using a trend, use it within ~24h of it trending. _(directional)_
- **3-5 hashtags** (some say 3); captions + keywords help categorization and **TikTok search** (treat TikTok as a search engine). _(directional)_
- **Niche-relevance > broad reach:** the 2026 algorithm favors community-aligned, native, original content over reposts. Adding a new perspective beats reposting. _(CONFIRMED across sources)_
- **Legit "hacks" to test (ToS-safe), each pending brand-fit:** photo/carousel posts (strong reach lane, good for a "5 things" decoder); reply-to-comment videos (mine the comments for follow-on posts); TikTok Series (gated deeper content); posting in the first 24h of a trend. **Avoid:** engagement-pod/follow-for-follow schemes, reposting others' clips, watermarked cross-posts (TikTok suppresses visible competitor watermarks).
- **PBS fit:** the named-adversary / "guess which…" decoder shapes that work on X translate well; lead with the confrontation, keep it native (not a polished ad), captions burned in. Bio link → newsletter or a toolkit landing page so the next step is frictionless.
- Sources: [Buffer](https://buffer.com/resources/tiktok-algorithm/), [Sprout Social](https://sproutsocial.com/insights/tiktok-algorithm/), [Hootsuite](https://blog.hootsuite.com/tiktok-algorithm/), [Socialync](https://www.socialync.io/blog/tiktok-algorithm-2026-what-works-now), [Socialinsider B2B](https://www.socialinsider.io/blog/tiktok-for-b2b/), [editorialge B2B](https://editorialge.com/tiktok-for-b2b/).

## YouTube Shorts — _planned video surface; you don't know it yet, so start here_
**Role (planned):** evergreen, searchable discovery (Shorts surface + YouTube search) → channel subscribers. Longer shelf life than TikTok (Shorts keep getting served for weeks/months), which suits evergreen PBM explainers.
**Current best practices (2026):**
- **Watch-through rate is THE metric.** The algorithm weighs watch time, swipe-aways, and how fast people leave. ~3 seconds to hook. _(CONFIRMED across sources)_
- **Length:** shorter Shorts (15-30s) often get higher completion; sources note **13s and 60s perform notably well**. Shorts can now run up to 3 minutes (vertical/square), but completion still rules. **Start PBS Shorts at ~20-40s.** _(directional)_
- **First 48 hours get a temporary boost** → consistent posting cadence matters; regular posting trains the algorithm to test you with new viewers. _(directional)_
- **Interaction now ranks Shorts** more: comments, shares, **remixes**. End with a question to drive comments. _(directional)_
- **Seamless loop** (last frame flows into the first) lifts replays/watch-through. **No competitor watermarks** (TikTok logo etc. suppresses Shorts). Vertical 9:16 1080×1920, burned-in captions (most watch muted). _(CONFIRMED)_
- **End-screen / CTA → subscribe** (Shorts → channel growth is the model); put the conversion link in the channel/bio and pinned comment, not the Short body.
- **Discovery differs from TikTok:** Shorts leans more on **title + search relevance** (it's YouTube), so write a real keyword title; TikTok leans on the FYP + audio. Same clip, different title/tag treatment.
- **PBS fit:** evergreen decoder clips ("What is spread pricing", "5 admin fees decoded") fit Shorts' long shelf life and search behavior perfectly; pair each Short with a keyword title matching a buyer question (the AEO logic, in video form) and an end-card to the newsletter.
- Sources: [Social Champ](https://www.socialchamp.com/blog/youtube-shorts-algorithm/), [Metricool](https://metricool.com/youtube-shorts-algorithm/), [vidIQ](https://vidiq.com/blog/post/youtube-shorts-algorithm/), [Riverside](https://riverside.com/blog/youtube-shorts-algorithm), [Miraflow Jan 2026 update](https://miraflow.ai/blog/youtube-shorts-algorithm-update-january-2026).

## Instagram (Reels + feed) — _planned video surface_
**Role (planned):** part of the cross-post video trio (with TikTok + Shorts). Reels reach non-followers; B2B works when treated as a distribution engine, not a brand film. Lower buyer-density than LinkedIn, so a repost/discovery surface for the strongest clips, not bespoke.
- **Watch time is the #1 signal; 3-second hold rate is decisive** (sources: >60% hold outperforms <40% by ~5-10x reach). Hook in the first 3s. _(directional)_
- **Length:** 7-90s; **7-30s** for completion/new-reach, 30-90s for depth to existing followers. _(directional)_
- **Sends/DMs and Saves weighted ~3-5x likes** for reaching new audiences; design the clip to be shared/saved (a quotable decoder frame). _(directional)_
- Original content + (optional) trending audio; vertical 9:16; burned-in captions; keyword-rich caption (IG is also a search surface). _(directional)_
- **PBS fit:** repurpose the same captioned 9:16 clip; link in bio (IG suppresses in-caption links); the "5 things / decoder" frames are save-bait. Sources: [Hootsuite](https://blog.hootsuite.com/instagram-reels/), [Gainsty](https://www.gainsty.com/blog/instagram-reels-in-2026), [creatorflow](https://creatorflow.so/blog/instagram-algorithm-2026/).

## Threads — _newer text surface_
**Role:** secondary text/conversation surface (Meta's X competitor); reply-driven reach, growing B2B presence. Low effort if cross-posted from the X/LinkedIn text shapes.
- Favors **conversation and replies** over links; text + image; threading a point works. Reach skews to replies received early. _(directional, to verify by the loop)_
- **PBS fit:** the named-adversary / decoder one-liners from X translate; keep it ally-positive, no link in the body. Treat as low-priority cross-post until data justifies more. _(to verify)_

## YouTube (long-form) — _the clip SOURCE + a search surface_
**Role:** home for full podcast appearances and interviews (the SHRM / Honest HR / Potter-podcast material) that the Shorts/clips are cut FROM, and a discovery surface (YouTube is the #2 search engine). The channel is the asset library; Shorts feed subscribers to it.
- **Watch time + click-through** (title + thumbnail) drive long-form; add **chapters**, keyword titles matching buyer questions, and an end-screen → newsletter/site. _(directional)_
- Publish the full guesting episodes here (where rights allow) so they're searchable and so Shorts can link back to the full piece. _(to verify by the loop)_
- **PBS fit:** evergreen "explainer" longforms + the podcast catalog; this is the canonical home the Shorts point to. Pairs with the `clip-podcast` pipeline (clips are cut from these).

## Reddit & Quora — _community + AEO citation surface_
**Role:** disclosed expert answers that build the entity AND get cited by AI engines (Google AI Overviews + ChatGPT lean on Reddit/Quora). **Detailed playbook + guardrails already in `entity_authority_offsite_plan.md`.**
- Answer real questions in **r/benefits, r/HealthInsurance, r/humanresources** and on Quora ("how do I audit my PBM," "is spread pricing legal," "carve in vs out"): give a genuinely useful answer first, disclose the affiliation, link the matching rxbs.org guide/glossary only where it helps. ~1-2/week.
- **Never astroturf** (one helpful disclosed answer beats ten promo ones); Reddit punishes self-promotion hard. _(CONFIRMED — community norm)_
- **PBS fit:** high — these are buyer-intent questions and an AEO win at once; the constraint is authenticity + cadence, not reach mechanics.

## Not prioritized (for a B2B plan-sponsor audience)
Pinterest, Snapchat, and consumer-only surfaces are out of scope for now (wrong audience for self-funded employers / CFOs / brokers). The monthly loop will flag if that ever changes; revisit only on evidence.

## Cross-platform clip rule (the video pipeline)
One captioned 9:16 clip can feed **LinkedIn (native, Wed slot) → YouTube Shorts (keyword title, end-card) → TikTok (native hook, bio link) → Instagram Reels → Facebook Reels (repost)**, cut from the full episode on **YouTube (long-form)**. Build it once via `/clip-podcast`, then tailor per-platform per the sections above (LinkedIn first per the LinkedIn-first rule). The clip pipeline lives in `social_clips/` + the `clip-podcast` skill.

---

## Changelog
- **2026-06-20 — initial seed.** Established baselines for all six platforms; TikTok + YouTube Shorts + Facebook Reels researched fresh (sources inline). X / LinkedIn / Substack summarized from the PBS-measured docs. Next: `/platform-research` refreshes monthly (15th), auto-applying spec/tactic updates here and proposing any rule change to OPEN_ITEMS.
