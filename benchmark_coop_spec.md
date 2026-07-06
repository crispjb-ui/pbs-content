# The Benchmark Co-op — design spec (soft-launch Q4 2026)

**What it is:** plan sponsors contribute a small set of anonymized pharmacy-plan facts; each contributor receives a personalized benchmark read against the pool; the pool compounds into a proprietary dataset no competitor can assemble without years of trust. Every contributor is, by definition, a warm lead who just showed PBS their numbers.

## The intake (five fields + identity, deliberately tiny)

Contact fields (name, work email, company, role — the standard funnel four) plus:
1. Covered lives (band select, same bands as the funnel).
2. Plan-paid pharmacy spend PMPM, most recent 12 months (band select: <$100 / $100-150 / $150-200 / $200-300 / $300+; bands kill precision anxiety and standardize the data).
3. Specialty share of total pharmacy spend (band select: <35% / 35-50% / 50%+).
4. PBM arrangement type (traditional rebate-credited / pass-through-transparent / unsure — "unsure" is itself a segment-defining answer).
5. Last independent review or market check (within 1 yr / 1-3 yrs / 3+ / never).

**Explicitly NOT collected in v1:** claims files, drug-level data, contract uploads. Low friction, low sensitivity, still enough for a real read.

## What the contributor gets back (the exchange must be real)

Within ~1 week, a personal 1-page read (toolkit visual system): their bands plotted against the pool's distribution, one pharmacist's observation specific to their combination (e.g., high specialty share + traditional arrangement + never reviewed = a named, explainable exposure), and the one toolkit that fits. Sent personally from Ginny's address per the nurture register. **Analysts assemble from a template; pharmacist adds the one observation; ~20 min/contributor at v1 volume.**

## Privacy posture (published on the page, plain words)

Individual responses are never published or shared; only aggregates with n≥10 per cut appear anywhere; contributors are never named; the data is never sold; contributing creates no obligation. Wix collection stores it like ToolkitLeads (the funnel's existing consent + notification pattern applies).

## Where the aggregate goes (the compounding loop)

The quarterly "What We're Seeing" gains a real data section → the quarterly briefing presents it → the Index's private-side commentary cites it ("among plans contributing to our benchmark pool...") → each publication recruits the next cohort. Renewal-season conversations and briefing attendees are the founding-cohort recruiting moments (script line: "contribute five numbers, get your plan's read against the pool").

**v1 success bar:** 25 contributors by Dec 31. Below 10, fold the intake questions into the briefing registration form instead of a standalone page and retry in Q1 with the Index's audience. **Gate:** privacy language past counsel with everything else in the Q4 batch; Brett builds the form page after the P1 website block.
