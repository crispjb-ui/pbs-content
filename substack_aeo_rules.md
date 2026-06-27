# Substack AEO Rule — Every Article, Going Forward

_Created Jun 20, 2026. The durable standard for optimizing every Substack article (Monday deep dive, Thursday field note, Wednesday roundup) for AI search (AEO/GEO). Companion to `website_mockups/site/geo_seo_plan.md` (site strategy) and `ai_visibility_tracker.md` (scoreboard). Enforced by `week_build_spec.md` §8 and `/critique`. Summarized in CLAUDE.md "AEO/citation rule."_

## Why this rule exists
Substack is the **crawlable AI-citation surface** in the PBS ecosystem. LinkedIn is login-walled and largely invisible to ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude; the website is the owned canonical; Substack is where the weekly answer-shaped content actually gets read by the engines. So every Substack article must be built to be **liftable** (one clean answer an engine can quote) and **routable** (a link that sends the credit back to www.rxbs.org).

## The rule (all five apply to every Substack article)

**1. Question-shaped SEO title, separate from the display title.**
The display title stays in PBS voice (confrontational, curiosity-gap, named-actor). The **SEO title** is set to the literal buyer query and entered in Substack's SEO Title field (Settings → SEO on the post). They are usually different.
- Display: *"Who Really Controls Your Drug List"*
- SEO title: *"Who Controls a Self-Funded Plan's Drug Formulary? (PBM Formulary Control Explained)"*
- In the week file, record BOTH on the deep dive and the field note:
  - `**Display Title:** ...`
  - `**SEO Title (AEO):** ...`  ← question/query-shaped, matches how a plan sponsor would ask an AI
  - `**SEO Subtitle:** ...` (already a standing rule; keep it)

**2. Answer-first opening: one self-contained, quotable sentence.**
The first sentence (or a clearly-bolded lead line right after the title) must answer the article's core question on its own, with no setup, so an engine can lift it verbatim. The story-driven opening can still follow, but the extractable answer comes first or is surfaced as a lead line.
- Pattern: *"A formulary is the list of drugs a plan covers, and in most self-funded plans the PBM controls it, which means the PBM decides which drugs are preferred, excluded, or moved between tiers, and the rebate economics that ride on those choices."*
- The existing "thesis early" rule is the floor; this tightens it to **one liftable sentence**.

**3. Outbound link to the www.rxbs.org canonical / money page.**
Every article links at least once to the owned domain at the point the tool/concept is referenced, routing authority and readers to rxbs.org. Pick the most relevant target:
- the week's toolkit landing page `www.rxbs.org/toolkit/<slug>` (preferred when the week ships a toolkit; the slug is in PART 1C),
- `www.rxbs.org/contract-language-library` (contract-language topics),
- `www.rxbs.org/glossary` (definitional topics),
- `www.rxbs.org/what-we-are-seeing` (data/aggregate-pattern topics),
- a `/guides/<topic>` pillar page when one exists.
This is in addition to the embedded toolkit PDF, not instead of it.

**4. Answer-shaped structure.**
5-6 bold section headers phrased as the sub-questions a reader (or an engine) would ask; short, declarative topic sentences; definitions stated plainly on first use (link the glossary term where natural). One question = one citable unit. (This already aligns with the deep-dive format rules; AEO just makes the "phrase headers as questions/answers" explicit.)

**5. Entity-naming + attribution.**
Spell out **"Prescription Benefit Solutions"** on first mention in the body (then "we" / "our firm"); use **www.rxbs.org**; never the bare "PBS" in published copy. Keep the real proprietary anchors (they are the citation moat: "we review hundreds of PBM contracts a year," the 2025 figures from `proprietary_anchor_bank.md`). Author is **Ginny Crisp, PharmD** (carry Person/author identity; on the website twin this is Person schema).

## What this rule does NOT change
- The PBS display-title craft, the Humanize Check, the no-em-dash and no-fabricated-stats rules, the blockquote conventions, and the deep-dive narrative voice all still govern. AEO sits on top; it never flattens the voice into generic SEO copy.
- LinkedIn post hooks stay confrontational and are NOT rewritten to question-shape (LinkedIn is not the citation surface; its job is reach + entity).

## Pre-publish check (fast)
1. Is the SEO title the literal buyer question, distinct from the display title?
2. Can an engine lift one sentence from the opening that answers the question on its own?
3. Is there at least one outbound link to a www.rxbs.org canonical page?
4. Are the section headers answer-shaped, with plain definitions on first use?
5. Is the firm name spelled out, anchors real, author Ginny Crisp, PharmD?

If any answer is no, fix before scheduling.

## Backfill status
- **W25 forward: rewritten to this standard** (Jun 20, 2026). SEO titles set, answer-first openings, outbound rxbs.org links, firm-name spelled out in Substack bodies.
- **W06-W24: backfill COMPLETE** (Jun 27, 2026). Every deep dive and field note from W06 through W37 now carries the Display/SEO-AEO title split, an answer-first liftable lead, an outbound link to a LIVE rxbs.org toolkit page in the body, answer-shaped headers, and the spelled-out firm name. The earlier "links already present" assumption for W23/W24 was found inaccurate (links lived only in PART 1C / first comment), so body links were added. W06 and W09 are single-article launch weeks (deep dive only, no field note). **No remaining week-file Substack articles need AEO backfill.**
- **Still open (separate workstream):** the evergreen standalone Substack posts (Contract Language Library, "What We're Seeing," "What I'd Ask," glossary) are optimized via their rxbs.org canonical twins (website blueprints), not the week-file backfill.
