# Live Content Feed — Implementation Spec (Substack RSS)

_How the "Latest from Benefit Blind Spots" section (homepage) and the Insights page feed get their content. Created Jun 9, 2026._

## Source
- **Substack RSS:** `https://benefitblindspots.substack.com/feed` (clean, public, includes title, link, pubDate, description/excerpt, sometimes enclosure image). This is the single source — it covers deep dives, roundups, and field notes.
- **LinkedIn newsletter:** no stable public RSS (LinkedIn removed it). Don't try to feed it; just link to it with a "Subscribe on LinkedIn" button. Since the Monday Substack and LinkedIn newsletter share the topic, nothing is lost.

## Recommended build: Velo http-function → Repeater (on-brand, no third-party branding)
1. **Backend** (`backend/http-functions.js` or a `.web.js` module): a function that `fetch()`es the Substack feed, parses the XML, and returns the latest N items as JSON `{title, link, date, excerpt, type}`. Cache for ~30-60 min (Substack updates a few times/week; no need to hit it per page view).
   - Derive `type` (Deep Dive / Field Note / Roundup) from the title or a tag if present; otherwise omit the badge.
   - Strip HTML from the excerpt, truncate to ~140 chars.
2. **Page:** a Repeater styled as the `.pcard` in `site.css` (date + type badge, title, excerpt, "Read on Substack →"). On page load, Velo calls the function and binds the results to the Repeater. Homepage shows 3; Insights shows 6.
3. **Fallback:** if the fetch fails, the Repeater shows nothing (or a static "Read on Substack" card) — never a broken state.

## Faster no-code fallback (if you don't want Velo yet)
- Use an RSS-to-widget service (RSS.app or Elfsight "RSS Feed"): point it at the Substack feed, style to brand colors, embed the widget via an Wix HTML/embed element. Downside: a small third-party badge and less styling control. Good enough to launch; swap to the Velo version later.

## Why this is worth it beyond looks
- **Freshness for GEO/SEO:** the homepage and Insights page update themselves every time you publish (≈3×/week). Fresh, internally-linked content is exactly what AI engines and Google reward, with zero manual upkeep.
- **Cross-channel funnel:** every site visitor sees the latest work and a one-click path to Substack/LinkedIn subscription.

## Placement (already in the templates)
- `index.html` → "From Benefit Blind Spots" section (3 cards) + buttons to Insights and LinkedIn.
- `insights.html` → full feed (6 cards) + Evergreen Reference Libraries (Contract Language Library, "What I'd Ask," "What We're Seeing," Toolkit Library) + Subscribe cards (Substack + LinkedIn).

## Evergreen resource links (hard-coded, not RSS)
These don't change often — link directly, no feed needed:
- PBM Contract Language Library → `benefitblindspots.substack.com/p/pbm-contract-language-library`
- "What I'd Ask" series, "What We're Seeing" quarterly report → their Substack URLs
- Plan Sponsor Toolkit Library → `/toolkit-library` (internal)
