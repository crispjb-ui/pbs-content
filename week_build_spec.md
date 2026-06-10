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
- [ ] **Deep-dive-visual rule:** a visual repurposed into the Monday deep dive lives in PART 1 as `### In-Article Visual`, NOT the backlog, NOT a dead block.
- [ ] Genuinely-parked drafts (paused format / displaced topic, no deep-dive home) moved to `evergreen_visual_backlog.md` or `field_note_backlog.md` with full spec; week file left clean.
- [ ] Every scheduled slot in the Run of Show has live, schedulable content (or a ⚠ with a clear next action).

## 7. Toolkit sync (if a toolkit ships)
- [ ] `templates/documents/week_NN_*.html` exists; PDF re-rendered (WeasyPrint) + preview PNG re-rendered (render_preview.py) in the same commit.
- [ ] 2 pages (or an approved 3-page exception); footers render on every page.
- [ ] **Bleed gate (required, Jun 9 2026):** `.page` CSS has `height:11in` and NO `overflow:hidden`; `python3 templates/documents/_audit_pdfs.py` reports **0 flagged** (page count, footer present each page, no body-over-footer overlap). A toolkit is not done until this passes.
- [ ] "Terms used" glossary callout present if PBM technical terms appear; terms pulled from `_glossary_terms.md`.
- [ ] `PART 1C` Toolkit Pairings + Wix Build section present with dataset row + checklist + pairing rationale.

## 8. Channel conventions
- [ ] LinkedIn newsletter: Title Options (3) + Publish Post Copy + First Comment subsections present (PART 2).
- [ ] Hashtags: 3 per post, PascalCase, pillar set with topic-anchor swap; no banned tags; no identical block on consecutive posts.
- [ ] Every paste-ready block (feed copy, first comments, X PART 4B bodies, publish post copy, Notes, reshares) wrapped in a fenced code block.
- [ ] X PART 4B present: one chronological per-day stream (5/weekday, 7/weekend); no within-week duplicate post bodies; LinkedIn-first rule respected (no same-week LinkedIn material in pre-publish X slots).
- [ ] First-comment Substack cross-promo present on posts in a Substack-companion week.
- [ ] No em-dash sentence separators; no fabricated statistics; PBS not RXBS; CEO = Ginny Crisp, PharmD.

## 9. Final
- [ ] HTML/PDF/PNG (if any) committed together; week file committed; pushed; merged to main.
- [ ] Any gate skipped is logged in the commit message with a one-line reason.
