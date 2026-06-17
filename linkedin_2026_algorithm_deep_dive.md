# LinkedIn 2026 Algorithm & Product Deep Dive (for PBS)

**Researched:** June 2026, via multi-source web research with adversarial verification.
**Why:** Ginny's growth engine is LinkedIn (feed + newsletter + new 9:16 clips). Two product shifts (Creator Marketplace, the video tab) and a viral "algorithm tax" infographic (Richard van der Blom) prompted this audit of what's real and what it means for PBS.

**Source-quality caveat (important):** LinkedIn does not publish its ranking spec. Most "2026 algorithm" numbers come from vendors reverse-engineering scraped post datasets, not LinkedIn. First-party facts (the video push, newsletter notifications, pod enforcement) are CONFIRMED; the percentages are directional. WebFetch was blocked (403) in the research environment, so confirmations rest on consistent cross-source search summaries from reputable outlets (LinkedIn newsroom, Social Media Today, TechCrunch, Digiday, Buffer, Sprout, Hootsuite, GeekWire), not full-text reads.

---

## 1. The "brand-deal reach penalty" claim — DEBUNKED

The infographic claimed: Brand Collaboration label = −45% reach, brand-partnership hashtag = −35%, both = −65% (attributed to van der Blom's "Algorithm Insights Report 2026").

**Verdict: UNCONFIRMED / almost certainly fabricated or garbled.** Across ~12 targeted searches the figures appear nowhere — not in any digest of van der Blom's report, not in any other analyst's data, not from LinkedIn. The three numbers have the tell of invented precision (two penalties that conveniently stack to a third). LinkedIn officially frames the **Brand Partnership tag as a transparency/credibility feature**, not a demotion ([LinkedIn Help](https://www.linkedin.com/help/linkedin/answer/a1627083), [Social Media Today](https://www.socialmediatoday.com/news/linkedin-rolls-out-brand-partnership-tags/691582/)). The −35% likely mis-derives from the unrelated "10+ hashtags risk ~30–50% suppression" spam rule.

**Direct implication for PBS:** none of Ginny's non-paid patterns trip a brand-deal penalty, because the penalty as described doesn't exist. "As seen on Honest HR / HEALTH CARE un-covered," toolkit CTAs (rxbs.org), tagging Wendell Potter, and Substack cross-promo are **fine as-is.** Do not change them on account of that infographic.

**Source credibility note:** van der Blom is the most-cited algorithm source but runs a LinkedIn-training consultancy (Just Connecting); the report is a paid lead magnet, not peer-reviewed, with sample sizes that shift between editions (10K → 600K → 1.8M → 1.3M posts). Independent reviewer Kara Redman ([comparative review of 6 reports](https://newsletter.kararedman.com/p/i-binged-6-linkedin-algorithm-reports)) found external-link effects "the most contested data point across every source." Treat all of it as directional, not gospel.

---

## 2. The video tab — the real opportunity (HIGH PRIORITY)

**LinkedIn is betting heavily on video, and it's first-party confirmed:**
- A dedicated TikTok-style vertical video feed exists in the mobile app (tested Mar 2024, immersive feed Dec 2024 → CA/UK/AU, desktop 2025). ([TechCrunch Mar 2024](https://techcrunch.com/2024/03/27/linkedin-is-experimenting-with-a-tiktok-like-video-feed-in-its-app/), [Social Media Today](https://www.socialmediatoday.com/news/linkedin-tests-dedicated-video-feed/711566/))
- LinkedIn reports **video watch time +36% YoY**; it crossed **$5B/quarter (video ads +30%)** — press calls it the "TikTok pivot." ([GeekWire Jan 28 2026](https://geekwire.com/2026/linkedin-passes-5b-in-quarterly-revenue.../), Microsoft FY26 Q1 IR). CONFIRMED.
- **Native vertical (9:16) video gets DOUBLE distribution** — main feed *and* the video tab; landscape gets only the main feed. The video tab is **recommendation-driven (surfaces creators you don't follow)**, ranked on interest + dwell time, not your social graph. (LIKELY; consistent across Buffer, Loomly, Lia Haberman, aligned with TechCrunch's original framing.)

**Specs/best practice (LIKELY, vendor-aggregated):** 9:16 1080×1920; 30–90s sweet spot (retention drops after ~2 min); burned-in captions mandatory (~80–85% watch muted); hook in first 3 seconds; upload the file natively (never paste a YouTube/Vimeo link — reported ~30% reach loss); post from the **personal profile** (company-page organic reach reportedly fell ~60% by 2026).

**What this means for PBS:** the SHRM clips just built (native 9:16, captioned, hook-first, 15–25s, safe-area-correct) are *exactly* the format LinkedIn is force-feeding to a discovery surface that reaches beyond Ginny's ~2,091 followers. **The clip investment is now a reach/discovery play, not just a feed post.** This is the single highest-leverage finding.

---

## 3. Creator Marketplace — positioning signal, low urgency

Brand↔creator paid-matchmaking inside Campaign Manager; launched ~mid-June 2026; **US + Canada only (not US-only), English-only, invite-only alpha**; other regions "no announced timeline." Targets individual B2B thought-leaders, but the payoff is *brand-deal discovery*. ([LinkedIn newsroom](https://news.linkedin.com/2026/how-b2b-brands-can-drive-impact-with-creators-and-stronger-creat), [Digiday](https://digiday.com/marketing/linkedin-wants-to-own-b2b-creator-discovery-with-new-creator-marketplace/), [Social Media Today](https://www.socialmediatoday.com/news/linkedin-launches-its-own-creator-marketplace/822569/)) CONFIRMED.

**For PBS:** mostly a visibility/credibility signal. Worth getting Ginny invited (positioning), but it's not a content lever and not urgent — PBS doesn't run paid brand deals.

---

## 4. 2026 algorithm deltas for an organic B2B creator

- **Body links suppress reach — modestly** (~15–25%, contested; not the "60%" folklore). One dataset (SayWhat) even found links *increased* reach, so magnitude is genuinely unsettled. (LIKELY direction.)
- **First-comment links are NO LONGER a clear reach hack** (the biggest change from old advice). Some 2026 practitioner reports even claim LinkedIn now detects "bridge behavior" and suppresses comment links. Unconfirmed by LinkedIn, but the free-reach-boost era is over. **Keep first-comment links for clean tracking/conversion, not as a reach multiplier; keep the post body fully native.**
- **Hashtags = SEO/topic-classification, not discovery** (follow-hashtag removed 2024–25). 3 is optimal, ≤5 ceiling, niche > generic. **Validates the existing CLAUDE.md rule exactly.**
- **Ranking hierarchy: dwell time → comment *quality* (substantive, on-topic, from credible profiles) → saves → reposts → reactions (weakest).** Saves are confirmed high-value — **validates the Library NN save-driven play.**
- **First ~60 min is the gate** (strong first hour → ~2.3x reach). Validates early-morning EST timing.
- **Newsletters bypass the feed** via email + push + in-app notification to every subscriber; 40–50% open rates, highest-reach format. **Validates making the Monday newsletter the conversion bridge** (and the Potter cascade we just put there).
- **Engagement pods are now an enforced liability** — LinkedIn publicly committed to making them "entirely ineffective," with quiet shadow-suppression formalized in ToS. Real organic amplifiers (e.g., a Cuban repost) are categorically different and fine.
- **Cadence: 2–5 posts/week is the validated band** (LinkedIn VP: ~2x/week → up to 5x more profile views). PBS's 4x/week sits right in it.
- **Timing:** generic 2026 guidance splits between Tue–Thu mornings and a newer afternoon/evening trend — **PBS's own A/B data (8:30 AM EST beats 10 AM) overrides both.** Trust the first-party result.

---

## 5. PBS action plan (prioritized)

1. **Treat the clips as a discovery channel.** Upload SHRM clips natively as 9:16 from Ginny's **personal profile**, hook in 3s, captions on, link in first comment. The video tab can reach well beyond her follower count. Make vertical video a standing cadence (the Q3 video test is clearly worth running).
2. **Ignore the brand-deal-penalty infographic.** No change to "as seen on," CTAs, Potter tags, or Substack cross-promo.
3. **Reframe first-comment links** from "reach lever" to "tracking/conversion." Keep them (low downside), keep post bodies native, and watch for any reach hit. Don't put links in the body.
4. **Keep doing what the data validated:** 3-hashtag rule, 8:30 AM EST, save-driven Library NN, dwell/comment-quality-first content (decoders, carousels), newsletter as the highest-reach bridge, no pods.
5. **Get Ginny invited to Creator Marketplace** for positioning; deprioritize otherwise.

---

## 6. Proposed CLAUDE.md updates (for review, not yet applied)

- **New strategy note (Channel 1 / video):** native 9:16 vertical video now gets dual distribution (feed + recommendation-driven video tab); prioritize it as a discovery surface, post from personal profile, file uploaded natively, link in first comment. The podcast-clip pipeline is a reach play, not just repurposing.
- **First-comment cross-promo rule (amend):** reframe its documented value as conversion/tracking, not a reach multiplier (2026 algorithm no longer rewards the workaround; body links still penalized so the link still belongs in the comment).
- **Validated, no change:** hashtag rule, 8:30 AM timing, Library NN save metric, newsletter-as-conversion-bridge, no-pods.

---

## Sources (key)
- LinkedIn newsroom (Creator Marketplace); Digiday; Social Media Today (Creator Marketplace, video feed, pods, brand-partnership tags); TechCrunch (video feed Mar 2024); GeekWire (Jan 28 2026, $5B/video ads); Buffer (algorithm + video); Sprout Social (hashtags, algorithm); Hootsuite (algorithm, first-hour); Kara Redman (algorithm-report skepticism); LinkedIn Help (Brand Partnership tag). Full URLs inline above.

*Caveat: vendor percentages are directional; first-party items (video push, newsletter notifications, pod enforcement, Creator Marketplace geography) are the load-bearing CONFIRMED facts.*
