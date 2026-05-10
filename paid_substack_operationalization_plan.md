# Paid Substack Tier — Operationalization Plan

> **What this is:** The plan for turning on the Substack paid tier without disrupting the lead-magnet flow. Defines what content moves to paid, what stays free, the pricing strategy, the launch sequence, and the operational cadence.

> **Last updated:** May 9, 2026.

---

## The strategic frame (read first)

PBS has two distinct revenue layers that serve different audiences:

**Layer 1 — Consulting engagements (the main business):**
- Free Plan Sponsor Toolkits as lead magnets at rxbs.org/toolkit/*
- Substack publication as the audience-building channel
- Welcome sequence ending in Contract Review CTA
- Revenue: $10-50K per engagement (Contract Review · Amendment process · RFP · ongoing PBR)
- Buyer: plan-sponsor organizations (paying with corporate dollars)

**Layer 2 — Substack paid tier (the future recurring product):**
- $80-100/year subscription
- Subscriber-exclusive content + community + access
- Revenue: $80-100 × subscriber count, recurring
- Buyer: individual professionals (paying personal-development dollars or corporate professional development budget)

The two layers do NOT compete. Toolkits are always free (they drive the consulting funnel). The paid tier monetizes a different value prop entirely: ongoing strategic insight + community + working tools.

The Sandeep Desai inquiry (May 9, 2026) validated the demand for Layer 2. He's a Layer 2 buyer: a PBM oversight professional at a Blue health plan asking to pay for the publication, not to engage PBS for consulting work directly. Layer 2 captures buyers like him who otherwise have no path to spend with PBS.

---

## What goes where (free vs. paid content map)

### Stays free (lead-magnet layer — never gate)

| Content type | Why it's free |
|---|---|
| Plan Sponsor Toolkit handouts (all 25+) | These are the lead magnets driving the consulting funnel. Gating them collapses the Layer 1 revenue stream which dwarfs Layer 2. |
| Monday Substack deep dives | The discovery vehicle for the publication. Public posts get LinkedIn shares, SEO traffic, organic referrals. |
| Wednesday news roundup ("What Crossed My Desk") | Free-tier benefit, drives weekly engagement. |
| Thursday Field Notes | Companion to the Thursday LinkedIn post → Toolkit funnel. Stays public. |
| Substack Notes (daily cadence) | Discovery + engagement layer. Never gated. |
| Contract Language Library | Free + SEO play, evergreen reference asset. Updated quarterly. |

### Moves to paid (Substack premium tier)

| Content type | Cadence | Why it justifies $80-100/yr |
|---|---|---|
| **Quarterly "What We're Seeing" reports** | Q1 / Q2 / Q3 / Q4 | Aggregated patterns from PBS's ~100 contract reviews per year (anonymized). Industry-wide trends only PBS can produce. The Drug Channels parallel at the operational layer. |
| **Biweekly "What I'd Ask" scenarios** | Every 2 weeks (subscriber-only) | Specific situations Ginny would walk through with a client. Existing series in `substack_what_id_ask_series.md`. Tactical, decision-making content. |
| **Monthly subscriber-only Q&A threads** | Last Thursday of each month | Subscribers post questions, Ginny answers in a long thread. Plus a monthly synthesis post. Community + direct expert access. |
| **"What's Changing" mid-week alerts** | When regulatory/market shifts justify | Time-sensitive intelligence: FTC actions, state-level transparency requirements, major PBM strategic moves. Different from the Wednesday public roundup; this is the urgent-action layer. |
| **Premium / "Pro" Toolkit derivatives** | As shipped (initially 3-5, growing) | Excel calculators with custom benchmarks, video walkthroughs, contract redline templates. The free PDF is the introduction; the Pro version is the working tool. |
| **Monthly office hours with Ginny** | One hour per month, group video | Subscribers can drop in with questions. Recorded for those who can't attend live. Community + direct access. |
| **Annual member meetup** | Once a year, video or in-person | Networking + community deepening. Becomes a real benefit at 200+ paid subscribers. |

### What this does NOT do

- Does NOT take any currently-free content and put it behind paywall (no negative subscriber experience)
- Does NOT compete with the Toolkit lead-magnet flow
- Does NOT require new content production beyond what PBS is already planning
- Does NOT depend on having thousands of paid subscribers to be worth running (the math works at 50+ paid subs)

---

## Pricing strategy

### Recommended launch pricing

| Tier | Price | What's included |
|---|---|---|
| **Free** | $0 | Monday deep dive · Wednesday roundup · Thursday Field Note · Substack Notes · Contract Language Library |
| **Premium** | $100/year ($10/month) | Free tier + everything in the "moves to paid" list above |
| **Founding member** | $300/year (one-time tier) | Premium + listed as founding member + lifetime access to monthly office hours · only available for the first 100 subscribers |

### Why $100/year (not $80)

Sandeep proposed $80/year unprompted, which is a useful data point — it tells us $80 is at the lower bound of what informed buyers expect. But:

- **B2B professional development pricing is not consumer pricing.** Most analogous B2B newsletter paid tiers ($Stratechery, Heard On The Street, Drug Channels) sit at $100-300/year.
- **$100 is psychologically cleaner than $80** — it implies more value, signals "real B2B product," and gives room for end-of-year discount promotions ($79 holiday pricing reads as a discount from $100).
- **The Founding Member tier at $300** captures the buyers who want to support PBS specifically and value the office-hours access. Limit to 100 founders. At even 50 founders, that's $15K of upfront cash flow that funds the next year of operations.
- **Volume discount is unnecessary** at this scale. Don't offer team plans until you have a critical mass of individuals.

### Sandeep specifically

Honor his $80 quote. He inquired before the paid tier was officially launched. Reply:

> "Subscription at $80/year for the first year, $100/year on renewal. I'll send the activation link when we turn on the paid tier (target: Q3 2026)."

Do this for any inbound inquiry that arrives before paid tier launches. Limit to ~10 of these "pre-launch grandfathered" subscribers and close it once paid is live.

---

## Launch sequence (90 days)

The paid tier launches in three phases. Don't turn it on until the lead-magnet flow is producing measurable results.

### Phase 0 — Prerequisites (must be true before launch)

Do NOT launch the paid tier until:

- [ ] Wix lead-magnet system is live and stable (Phases 1-4 of `email_gated_toolkit_implementation_guide.md` complete)
- [ ] At least 60-90 days of welcome-sequence data (validates the lead-magnet → Contract Review funnel works)
- [ ] At least 1-2 inbound Contract Review consult inquiries from the welcome sequence (validates Email 5 conversion)
- [ ] Substack free subscriber count: 200+ (provides a base to convert from)
- [ ] At least one quarterly "What We're Seeing" report drafted in advance (you can ship Day 1 of paid tier with a flagship piece)
- [ ] At least 2-3 "What I'd Ask" scenarios drafted in advance
- [ ] Office hours format decided (Zoom, recorded, calendar-scheduled)

If any of these aren't true at the planned launch date, push the launch. The paid tier benefits from a strong opening; a weak opening hurts long-term conversion.

### Phase 1 — Build (Days 1-14)

Operational setup before any subscriber sees a paywall:

1. **Substack admin → Settings → Payments** → enable paid subscriptions
2. **Set pricing tiers**: Free, Premium $100/yr ($10/mo), Founding $300/yr
3. **Stripe connection** (Substack handles this; verify bank account is set)
4. **Tax setup**: confirm 1099 receipt and any state-level tax obligations
5. **Update the publication "About" page** to mention the paid tier without selling hard
6. **Build the launch announcement post** (writes Day 1 of Phase 2)
7. **Pre-write the first 30 days of paid-only content**: 
   - Day 1 paid post: "What We're Seeing: Q[current] 2026 PBM Contract Patterns" (the flagship)
   - Day 8 paid post: "What I'd Ask #1: [scenario from existing backlog]"
   - Day 15 paid post: "What's Changing — [a current regulatory or market shift]"
   - Day 22 paid post: "Premium Toolkit Companion: Channel Pricing Audit Pro Calculator (Excel)"

### Phase 2 — Soft launch (Days 15-45)

Limit visibility. Don't run an aggressive launch campaign — let the paid tier establish quietly so quality is calibrated before scale.

1. **Day 1 of soft launch:** publish the launch announcement post (free tier sees it)
   - Title: "A premium tier for Benefit Blind Spots — what's coming"
   - Content: the "moves to paid" map above, the pricing, the "founding member" offer (capped at 100)
   - CTA: subscribe link
2. **Day 1 (same day):** send the first "What We're Seeing Q[X] 2026" report to all paid subscribers (which is zero on Day 1 — but the post is published behind the paywall and waiting)
3. **Day 1-7:** monitor signups daily. Founding-member tier should start filling. Target: 25-50 founders in week 1.
4. **Day 8-14:** ship the first "What I'd Ask" subscriber-only scenario
5. **Day 15-21:** ship the first "What's Changing" alert
6. **Day 15:** send a paid-only welcome email to all paid subscribers introducing the office hours schedule
7. **Day 22-30:** ship the first "Premium Toolkit Companion" (Excel calculator or equivalent)
8. **Day 30:** first monthly Q&A thread opens

**Soft launch metric goal:** 50-75 paid subscribers by Day 45. If below 25, the paid-tier value prop isn't landing — diagnose and iterate before the public launch.

### Phase 3 — Public launch (Days 46-90)

Visibility expands. Active promotion.

1. **Day 46:** LinkedIn announcement post on Ginny's profile + the company page
2. **Day 46:** Substack Notes thread highlighting the paid-tier benefits
3. **Day 46-50:** email blast to the LinkedIn Newsletter subscriber base (cross-promote)
4. **Day 50-60:** mention the paid tier in the Tuesday LinkedIn first-comment cross-promo (subtle, not aggressive — "Substack premium subscribers got the operational follow-on this week")
5. **Day 60:** founding-member tier closes (100 cap reached or 60 days expired, whichever comes first)
6. **Day 60-90:** steady growth. New paid subscribers via:
   - Welcome sequence Email 5 (mentions paid tier alongside Contract Review)
   - Ongoing LinkedIn Newsletter promotion
   - Substack referral program (every paid subscriber gets a referral link; 3 referrals = 1 month free)
7. **Day 90:** first quarterly review — paid subscriber count, churn, content engagement, revenue

**Public launch metric goal:** 100-150 paid subscribers by Day 90.

---

## Operational cadence (steady-state, post-launch)

Weekly:
- Monday: deep dive ships (free)
- Wednesday: news roundup ships (free)
- Thursday: Field Note ships (free)
- Mid-week: "What's Changing" alert ships ad-hoc when warranted (paid only)

Biweekly:
- Every other Tuesday: "What I'd Ask" scenario ships (paid only)

Monthly:
- Last Thursday: monthly Q&A thread opens (paid only). Subscribers post questions through the weekend; Ginny synthesizes a response post the following Monday/Tuesday.
- One Monday per month: monthly office hours session (paid only, Zoom, recorded). Calendar invite to all paid subscribers; recording posted within 48 hours.

Quarterly:
- First post of the quarter: "What We're Seeing Q[X]" report ships (paid only)
- Quarterly review: subscriber count, churn rate, content engagement, revenue. See the metrics dashboard below.

Annually:
- Member meetup (paid only, video or hybrid in-person/video). When subscriber count justifies (200+).
- Founding member acknowledgment post (one year after launch).
- Annual pricing review.

---

## Metrics dashboard (paid tier)

Track in a simple Google Sheet or Substack admin → Stats. Refresh monthly.

| Metric | Goal Q1 | Goal Q2 | Goal Q4 (year 1) | Action threshold |
|---|---|---|---|---|
| Paid subscribers (cumulative) | 100 | 250 | 500 | Below 50% of goal at any quarter → audit content quality + value prop |
| Founding members (cap 100) | 50 | 100 (closed) | — | If under 25 by Day 45 → soft-launch value prop is weak |
| Monthly recurring revenue (MRR) | $850 | $2,100 | $4,200 | Calculated as paid subs × avg subscription value ÷ 12 |
| Annual recurring revenue (ARR) | $10K | $25K | $50K | At $50K ARR, paid tier covers ~25% of a part-time staffer to operate |
| Free → paid conversion rate | 2-3% | 3-5% | 5-7% | Below 2% sustained → free content is too good (cannibalization) or paid content is too thin |
| Monthly churn rate | <3% | <3% | <2% | Above 5% sustained → content quality issue OR pricing issue |
| Net revenue retention | 100%+ | 100%+ | 100%+ | Below 100% → upgrade/founding-member offers aren't compelling |
| Paid post open rate | >60% | >55% | >50% | Below 40% sustained → content frequency or relevance issue |
| Office hours attendance | 30%+ of paid subs | 25%+ | 20%+ | Stable around 20-30% of paid subs is healthy |

---

## Promotional integration with the lead-magnet flow

Paid tier promotion happens at three touch points within the existing Wix system:

### 1. Welcome sequence Email 5 (already built)

Email 5 currently names the Contract Review as the entry-product offer. Once paid tier is live, update Email 5 to also mention paid Substack:

> "Two ways forward:
> (1) Stay free with Substack, or upgrade to the premium tier ($100/yr) for monthly Q&A, quarterly 'What We're Seeing' reports, and the Premium Toolkit derivatives.
> (2) Consider a Contract Review with PBS for the integrated audit + recommendation."

Same email, two CTAs at different price points: $100 (Substack premium) and $10-50K (Contract Review). Self-selecting.

### 2. Substack post first-comment cross-promo (LinkedIn)

When a Thursday LinkedIn post links to a Substack Field Note in the first comment, the Field Note can periodically reference the paid tier:

> "Premium subscribers got the Excel calculator companion to this audit framework on Tuesday. [Link] · Free subscribers, this Field Note is the practical version."

Subtle, not aggressive. Maybe 1-in-4 first-comment posts mention the paid tier; the rest stay focused on the Substack subscribe ask.

### 3. LinkedIn Newsletter (the executive-summary version)

The Pharmacy Benefits Briefing on LinkedIn Newsletter (~836 subs) is the warmest audience for paid tier conversion — they've already opted into ongoing Ginny content. Once paid tier is live, add a recurring footer to the LinkedIn Newsletter:

> "**Subscriber upgrade:** premium Substack tier at $100/year delivers monthly Q&A, quarterly industry reports, and Premium Toolkit derivatives. Sign up: [link]"

Drives roughly 3-5% conversion from LinkedIn Newsletter sub → paid Substack sub over time.

---

## Budget for content production

The paid tier requires content production beyond what's already shipping. Honest staffing math:

| Content | Time per item | Items per quarter | Quarterly time |
|---|---|---|---|
| Quarterly "What We're Seeing" report | 12-16 hours | 1 | 12-16 hours |
| "What I'd Ask" scenarios | 4-6 hours | 6 (biweekly) | 24-36 hours |
| "What's Changing" alerts | 1-2 hours | 4-8 (ad-hoc) | 4-16 hours |
| Premium Toolkit derivatives | 6-10 hours | 2-3 | 12-30 hours |
| Monthly Q&A synthesis | 3-4 hours | 3 | 9-12 hours |
| Office hours prep + run + recording post | 2 hours | 3 | 6 hours |
| **Total quarterly time investment** | | | **~67-116 hours** |

This is roughly 5-10 hours per week of additional production time. At Ginny's blended rate, this is real opportunity cost. The math justifies it once paid tier reaches ~150-200 paid subs ($15-20K ARR), at which point the recurring revenue offsets the production overhead.

If the paid tier doesn't hit 150+ subs by end of year 1, evaluate whether to scale back the content cadence (drop biweekly "What I'd Ask" to monthly, defer office hours, etc.) until subscriber economics improve.

---

## What can go wrong (and how to avoid it)

| Risk | Mitigation |
|---|---|
| Free subscribers feel bait-and-switched ("I subscribed for the deep dives, now you want $100/yr") | Keep all current free content free. Paid tier adds only NEW content types. Be explicit in launch announcement. |
| Cannibalization of Toolkit lead-magnet funnel | Toolkits stay free. Paid tier doesn't gate any audit framework. The free → paid path is a separate journey from the lead-magnet path. |
| Low conversion (free → paid) | Soft launch validates value prop before public launch. If sub goal is hit by Day 45, content is landing. If not, pause public launch and iterate. |
| High churn after first year | Monitor month-over-month engagement. If paid post open rate drops below 40%, content frequency or relevance is wrong. |
| Office hours unsustainable at scale | Cap attendance per session at 25; if waitlist grows, add a second monthly session. Recording covers people who can't attend live. |
| Founding member promise fatigue | Limit founder benefits to lifetime office-hours access + acknowledgment post. Don't over-promise (e.g., don't promise quarterly 1:1s — that doesn't scale at 100 founders). |
| Pricing confusion at renewal | Auto-renew at the Premium $100 rate (not the Founding $300). Founding-member status is one-time, not recurring. Clearly explain at signup. |

---

## When to revisit this plan

Update this document at:

- **End of soft launch (Day 45)** — if subscriber count is below 25, rework the value prop before public launch
- **End of public launch (Day 90)** — if subscriber count is below 75, evaluate whether to push harder or accept slow growth
- **End of year 1** — full retrospective on cadence, content, pricing. Adjust based on data.
- **Annually thereafter** — pricing review, content cadence review, founding-member benefit review

---

*This plan deliberately starts conservative (soft launch, modest goals) because Substack paid tier is the secondary revenue layer, not the main business. The main business is consulting engagements driven by the free Toolkit lead-magnet flow. Paid tier should never be optimized in a way that compromises the lead-magnet flow.*
