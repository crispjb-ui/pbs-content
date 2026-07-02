# Week Build Spec — Definition of Done

**Created June 2026.** The gate checklist every newsletter week file must pass before it ships. `/build-week NN` runs against this; a week is **not done** until every gate is ✓ (or an exception is logged with a reason). This is the single source of "rigorous" — it consolidates the load-bearing CLAUDE.md rules into one runnable checklist. CLAUDE.md remains the full rationale; this is the pass/fail.

## 0. Inputs (gather first)
- [ ] Week number, the 7 dates (Mon→Sun), and the Monday deep-dive topic.
- [ ] The mapped **shocking fact** for this week from `shocking_fact_bank.md` (fact→week table). If none mapped, pick the best-fitting unused entry.
- [ ] Whether a Plan Sponsor Toolkit ships (Monday tool and/or Thursday handout).
- [ ] Library week? (Contract Comparison carousel drafted → yes, next consecutive number.)

## 0.3 Landscape research (what's going on in the works — new, required, do FIRST)
Ground the week in what's actually happening before touching topics.
- [ ] **Current-news scan (roundup-style):** WebSearch + the repo RSS feed (`newsletters/roundups/rss_weekly_feed.md`, `rss_news_alert_zap.md`, recent `newsletters/roundups/`) for the latest PBM / pharmacy-benefit developments in the build window: FTC actions, state PBM legislation, lawsuits, payer/PBM earnings, manufacturer moves, and amplifier activity (Cuban / Ciaccia / Fein / Drug Channels / 46brooklyn).
- [ ] **Overarching look:** for a tentpole week (Sep–Oct surge, a Potter-paired week, a marquee topic) run the `deep-research` skill for a cited landscape read before drafting.
- [ ] Tie findings into (a) topic timeliness, (b) the X breaking-news reaction slots, (c) a check that the chosen shocking fact is still current (not overtaken by newer news).
- [ ] Record the 3–5 most relevant developments in the week's build notes; flag any that warrant a same-week news-reaction post or a roundup mention.

## 0.5 Look-back review (required BEFORE drafting — new)
The build learns from history first; it does not draft blind.
- [ ] **Topic look-back AND look-ahead (both directions):** scan the last ~6 week files **and** the next several planned/drafted weeks (the Q3/Q4 content calendars + any drafted future week files) — their `## Weekly Run of Show` + Mon/Tue/Thu titles. Write both the recent-topic list and the coming-topic list into this week's build notes. Do **not** reuse a topic, or a near-adjacent one, within ~6 weeks in **either** direction. The week must sit cleanly between what came before and what comes next: it builds on the prior week and hands off to the next without colliding or repeating. If the planned topic collides backward or forward, shift the angle or pick a distinct one. (Adjacent-but-close still counts as a collision per Ginny — keep real distance.)
- [ ] **Performance look-back:** open `linkedin_performance_tracker.md` (All-Time rankings + Performance by Format + the "Recent breakouts" log). Confirm each slot's chosen framework is in the **WORKING set** — decoder, named-actor dollar comparison, shocking-fact reveal, 5-questions carousel, Library NN save-asset, high-craft personal milestone. Do **not** build a framework in the **KNOWN-WEAK set**: informational / no-named-villain explainer, musing text, price-list-without-an-actor, paused Whiteboard carousel, casual personal snapshot. If a slot's only fit is a weak framework, reshape it before drafting.
- [ ] **Decoder-fatigue check:** if the last two decoders came in under ~15K with low comments/saves, run a different shape this week.
- [ ] Record the look-back findings (recent topics avoided + frameworks chosen and why) in the week file so the reasoning is auditable.

## 1. Topic distinctness (load-bearing)
- [ ] **Triple-distinct line written:** Mon / Tue / Thu+Field Note on one line. If any two collapse to the same subject family, redraft. Adjacent pillar OK; same subject not OK. (CLAUDE.md triple-distinct rule.)
- [ ] Tuesday visual topic ≠ Monday newsletter topic (anti-cannibalization).
- [ ] Field Note exclusively supports the Thursday LinkedIn concept (decoupled from Monday by default).

## 1.5 Seasonal fit + flow (new, required)
The calendar is an arc, not a pile of weeks.
- [ ] **Season match** (CLAUDE.md Seasonal Patterns): Jan–Mar peak (load the strongest content) · Apr spring dip · May Memorial Day dip · **Jun–Aug summer slowdown** (lean HARDER into shocking-fact reveals + named-adversary; floors are lower; lighter/personal weeks acceptable) · **Sep–Oct back-to-business surge** (the peak window — load best content, breakout attempts, and the earned-media amplifiers here). Holiday weeks (Memorial Day, Jul 4, Thanksgiving) run lighter and profession-identity/personal-safe.
- [ ] **Plan-sponsor calendar alignment:** the topic fits where buyers are in their year (mid-year claims → renewal countdown → PBM evaluation / RFP → negotiation → contract red flags → renewal readiness → Q4 planning → January benchmarking). The week should map to a real decision the audience is making that month.
- [ ] **Flow:** the week reads as the next step in the quarter's arc — builds on the prior week, and the Friday tease sets up next Monday. No random topic drops.
- [ ] **Stack for the surge:** in the summer trough, bank breakout-grade assets (shocking facts, Potter pieces, toolkits) for Sep–Oct rather than spending them in the slow window.

## 1.7 Wendell Potter contributorship (new, required when applicable)
Check `wendell_potter_cascade_alignment.md`, `wendell_potter_contributorship_strategy.md`, and the Potter publish schedule against this week.
- [ ] **Potter-publish week** (a HEALTH CARE un-covered piece ships this week): build the same-day cross-promo to the WP article (LinkedIn + X tagging @wendellpotter) per the strategy; do NOT scoop the piece before it publishes; coordinate the week's topic so it does not collide with the piece.
- [ ] **Cascade week** (the PBS week AFTER a Potter piece): align the Monday deep-dive topic to the prior Potter piece per the cascade-alignment map (SWAP or REFRAME as documented), and build the cascade reference-back block — Monday newsletter opener + deep-dive callout + an early-week Note/X back-link to the now-published piece.
- [ ] **Series arc advanced:** any Potter piece built or queued must read as a chapter in the one continuous series story (`wendell_potter_piece_outlines.md` → Series Narrative Arc): open with a callback to the prior piece + the map, anchor to one of the five revenue streams, close with a handoff to the next, carry the recurring black-box/tollbooth image and refrain, and plant/pay off the cross-piece seeds. Not a standalone essay.
- [ ] **Guest-authoring + podcast cadence kept:** confirm the every-other-week Potter guest article and the Potter video-podcast commitments are reflected; the next Potter piece's topic and copy are queued so the Potter pipeline never goes dark.
- [ ] If none apply, note "no Potter dependency this week" so the check is visible.

## 2. Shocking-fact weaving (new, required)
- [ ] At least one sourced fact from `shocking_fact_bank.md` is built into a real post this week — Thursday breakout first choice, else Wednesday POV or the X AM amplifier.
- [ ] The fact carries its citation framing ("the FTC found…") and is paired with a PBS proprietary anchor. No naked stat; no fabricated figure (re-verify the number at build time).
- [ ] **The week's REACH POST is a shocking hidden-structure reveal, NOT a vocabulary decoder (added Jun 26, 2026 — load-bearing in summer).** Measured across W23/W24/W25: a **named-actor vocabulary decoder** ("5 X Terms Decoded" / "winner flips" scoreboard) tops out ~4-5K in summer, while a **shocking hidden-structure reveal** (a genuinely-unknown piece of PBM plumbing — offshore rebate aggregators by name, the GPO fee skimmed before pass-through, formulary-exclusivity payments, copay maximizers, owned-pharmacy routing) clears 15-18K organic *even in the trough*. So the **Thursday reach slot (or the Wednesday POV if Thursday is a carousel/video week) must BE a shocking hidden-structure reveal**, not default to a "5 Terms Decoded" messy infographic. If the strongest reveal is currently scheduled on Tuesday or buried in the deep dive, **move it to the Thursday reach slot** and demote the vocabulary decoder. A "5 Terms Decoded" Thursday in a summer week is a build-default miss — reshape it. (Pull the reveal from `shocking_fact_bank.md` / `x_recipe_post_bank.md` entry 20; reframe from "here are the terms" to "here is the hidden thing they do.")

## 3. Thursday Excellence (every Thursday post)
- [ ] Format = messy infographic / photoreal preferred (or Slot-C carousel reformatted to that aesthetic).
- [ ] Confrontational, named-actor hook.
- [ ] Proprietary anchor (PBS specificity) in the post copy.
- [ ] First comment names the same-day Field Note asset specifically.
- [ ] Field Note exclusively supports the LinkedIn concept.
- [ ] 5-trait audit documented in the file.

## 4. Tuesday Excellence (every Tuesday post)
- [ ] Confrontational/provocative hook + proprietary anchor + named-actor where supported.
- [ ] First-comment routing per the tree (Library→Contract Library; topic-aligned→Monday deep dive; else evergreen Substack; else omit but still hit the craft bar).
- [ ] If Library week: `## Substack Contract Library Update — Library 0X Week` section present; clauses surfaced live in `substack_contract_language_library.md`.

## 5. Run of Show (new, required)
- [ ] File opens with `## Weekly Run of Show` (replaces `## Publishing Timeline`): publish-order table, every item by day+time, with a **Where** column pointing to the content (PART / Post #).
- [ ] **Reconciled to built content** — every row matches the actual section title (no drift). Stale rows are a fail.
- [ ] `⚠` flags any open item (e.g., a slot without a live post). No silent gaps.

## 6. No dead weight in the live file (new, required)
- [ ] Zero `REPURPOSED` / `DO NOT SHIP` carcasses left in PART 3.
- [ ] **Deep-dive-visual rule:** a visual repurposed into the Monday deep dive lives in PART 1 as `### In-Article Visual`, NOT the backlog, NOT a dead block. **Every `### In-Article Visual` MUST include a ready-to-paste `#### AI Image Generation Prompt`** (ChatGPT/Gemini path), not just an "Infographic Concept" layout description — the concept alone can't be generated. Write the prompt to the Substack image-prompt recipe + the clean-scorecard/conceptual AI-generation guidance (brand palette, traffic-light coding where scored, IBM Plex Sans SemiBold title not a condensed poster face, thumbnail-legible, no logos in the prompt), with a note to add the PBS logo in Canva after.
- [ ] Genuinely-parked drafts (paused format / displaced topic, no deep-dive home) moved to `evergreen_visual_backlog.md` or `field_note_backlog.md` with full spec; week file left clean.
- [ ] Every scheduled slot in the Run of Show has live, schedulable content (or a ⚠ with a clear next action).

## 7. Toolkit sync (if a toolkit ships)
- [ ] **Refer-back-first check (added Jun 23, 2026, required):** before minting any new toolkit, confirm `email_gated_toolkit/toolkit_dataset.md` has NO existing toolkit covering this week's topic/mechanic. If one exists, **reuse it** (link the live `rxbs.org/toolkit/<slug>` in the deep dive + Field Note + first comments; no new asset) and skip the rest of this section. Mint a new toolkit ONLY for a genuinely-unique topic with no match. A week with no gap ships zero new toolkits.
- [ ] `templates/documents/week_NN_*.html` exists; PDF re-rendered (WeasyPrint) + preview PNG re-rendered (render_preview.py) in the same commit.
- [ ] 2 pages (or an approved 3-page exception); footers render on every page.
- [ ] **Bleed gate (required, Jun 9 2026):** `.page` CSS has `height:11in` and NO `overflow:hidden`; `python3 templates/documents/_audit_pdfs.py` reports **0 flagged** (page count, footer present each page, no body-over-footer overlap). A toolkit is not done until this passes.
- [ ] "Terms used" glossary callout present if PBM technical terms appear; terms pulled from `_glossary_terms.md`.
- [ ] `PART 1C` Toolkit Pairings + Wix Build section present with dataset row + checklist + pairing rationale.
- [ ] **Live toolkit link in body (W25 forward, library is fully live):** the Monday deep dive body and the Thursday Field Note body each include the live `rxbs.org/toolkit/<slug>` link where the integrated tool / handout is referenced (in addition to the embedded PDF). First comments route to the toolkit landing page. Confirm each page renders before shipping. (Slugs in `email_gated_toolkit/toolkit_dataset.md`.)
- [ ] **Toolkit tease after the intro (deep dive):** a short tease right after the opening promises the end-of-article tool (names what the reader walks away with) to pull them through to the bottom. NO link in the tease (a top link pulls readers out); the link + embedded PDF live at the tool near the end.

## 8. Channel conventions
- [ ] **6-beat architecture (every post's copy):** text-only posts (Wed POV, Fri tease, newsletter publish copy, longer X) run all six in the body — Hook → Promise (substantive payoff line, not influencer "in the next 90 seconds" voice) → Positioning (proprietary anchor, *varied/fresh* — rotate anchors from `proprietary_anchor_bank.md`, never a repeated boilerplate footer; no-repeat-within-~4; 2025 metrics held for Q3 social) → Core Message (formatted, ~1,400-1,800 chars) → Conclusion (one crystallized takeaway line) → CTE (question or bold statement, never a commercial CTA in body; closed Q for comments, open Q for reach/DMs). Visual-first posts (Tue/Thu carousel/infographic/video): the visual carries Hook + Core Message + Conclusion-footer; check the **copy + first comment** for the Promise (light), Positioning, Conclusion takeaway, and CTE — net-new beyond Tue/Thu Excellence is the Promise + explicit Conclusion. Where a beat conflicts with WORKING/WEAK measured data, the data wins. (Rationale: CLAUDE.md "6-beat post architecture"; enforced in `/critique` item 9.)
- [ ] LinkedIn newsletter: Title Options (3) + Publish Post Copy + First Comment subsections present (PART 2).
- [ ] Hashtags: 3 per post, PascalCase, pillar set with topic-anchor swap; no banned tags; no identical block on consecutive posts.
- [ ] Every paste-ready block (feed copy, first comments, X PART 4B bodies, publish post copy, Notes, reshares) wrapped in a fenced code block.
- [ ] X PART 4B present: one chronological per-day stream (5/weekday, 7/weekend); no within-week duplicate post bodies; LinkedIn-first rule respected (no same-week LinkedIn material in pre-publish X slots).
- [ ] **X post bodies are pure ASCII (added Jun 23, 2026):** every PART 4B post-body code block contains only ASCII — straight quotes `"` `'` (no curly `" " ' '`), no em-dash/en-dash (`—`/`–` → comma/period/hyphen), no arrows (`→` → period or `->`), no `…`/`≤`/NBSP. X's scheduler rejects some non-ASCII as "content is invalid," and the device can re-curl quotes, so the source must ship clean ASCII. Quick check: `python3 -c "import sys;[print(repr(l)) for l in open(sys.argv[1]) if any(ord(c)>127 for c in l)]" <week file>` and clear anything inside a PART 4B code block.
- [ ] First-comment Substack cross-promo present on posts in a Substack-companion week.
- [ ] **Platform best-practice conformance:** each platform's content matches the current `platform_playbooks.md` entry (hook style, format, spec, cadence); deviations only where PBS measured data overrides. (Refreshed monthly by /platform-research.)
- [ ] **AEO/crawlability gate (Substack pieces — added Jun 19, 2026):** each deep dive + field note (a) has a **question-shaped SEO title** matching the buyer query (set separately from the confrontational display title), (b) **opens with one self-contained, quotable answer sentence** (no buried lede), (c) **links outbound to the rxbs.org canonical/money page** for the topic (glossary, contract-language-library, the toolkit landing page, or the relevant pillar guide). Rationale: Substack is the crawlable AI-citation surface; LinkedIn is not. See `website_mockups/site/geo_seo_plan.md`.
- [ ] **Entity-naming:** public copy spells out **"Prescription Benefit Solutions"** and uses **www.rxbs.org**; "PBS" is internal shorthand only (collides with Public Broadcasting Service for LLMs).
- [ ] No em-dash sentence separators; no fabricated statistics; CEO = Ginny Crisp, PharmD.

## 9. Final
- [ ] HTML/PDF/PNG (if any) committed together; week file committed; pushed; merged to main.
- [ ] Any gate skipped is logged in the commit message with a one-line reason.
