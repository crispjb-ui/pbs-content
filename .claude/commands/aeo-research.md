---
description: Monthly AEO/SEO best-practices research. Researches how answer engines (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude) and Google search are CURRENTLY evolving for citation/ranking, verifies adversarially, vets for B2B brand-fit, auto-applies safe technique updates to aeo_seo_playbook.md (and the AEO rule files where they conflict), and proposes rule-level changes to OPEN_ITEMS for one-time approval. Research/drafting only; never auto-publishes.
allowed-tools: Bash, Read, Grep, Glob, Write, Edit, WebSearch, WebFetch
---

You are running the PBS monthly AEO/SEO (answer-engine + search) technique research and feeding it back into the content system. Read `CLAUDE.md` first (naming + AEO/citation rules, no-fabrication, the measured-data override). This is the SEARCH counterpart to `/platform-research` (which covers social platforms). It keeps PBS's AEO/SEO *technique* current so the answer pages, Substack articles, and schema stay optimized for how engines actually cite and rank **now**, not how they did when the rules were first written.

**The source of truth this loop maintains is `aeo_seo_playbook.md`** — the current-best-practices record the AEO build loops read (`/build-aeo-page`, `/backfill-substack-aeo`, `/build-week`'s Substack-AEO gate). Edit it in place; if it does not exist, create it with the section structure below + a changelog. This command is **research + drafting only. It never publishes** anything to rxbs.org, Substack, or any engine.

Companion files (read for context, update per the autonomy boundary):
- `substack_aeo_rules.md` — the per-article Substack AEO rule (5 requirements).
- `website_aeo_master_plan.md` — the website build spec (template, archetypes, schema).
- `website_mockups/site/geo_seo_plan.md` — site GEO/SEO strategy.
- `ai_visibility_tracker.md` — the citation scoreboard (read the latest trend log to target research at queries PBS is LOSING).
- `aeo_geo_master_plan.md` — the initiative tracker.

## Step 1 — Research current AEO/SEO technique (adversarial verification)
Run `WebSearch` + `WebFetch` for the current (this-month) state of these, focused on what changes how PBS gets **cited and ranked**:
- **Answer-engine citation behavior** — how ChatGPT (search), Perplexity, Google AI Overviews, Gemini, and Claude currently select and cite sources; what makes content quotable/citable; any shift in how they weight freshness, structure, author/entity signals.
- **Structured data / schema** — new or newly-weighted schema types (Article, FAQPage, HowTo, DefinedTermSet, Organization/Person `sameAs`, etc.), Google's current rich-result + AI-Overview eligibility, any deprecations.
- **`llms.txt` / AI-crawler conventions** — adoption, format changes, whether engines honor it, robots/AI-crawler directives.
- **Answer-first / passage-level optimization** — question-shaped titles, self-contained answer sentences, passage ranking, entity disambiguation (AEO/GEO).
- **Classic SEO signals still load-bearing for B2B** — internal linking, canonical/twin handling, page experience, E-E-A-T / author authority, topical-cluster structure.
- **Where PBS is losing** — pull the `ai_visibility_tracker.md` trend log; target research at the query families a competitor owns or where engines pull Substack instead of the rxbs.org canonical.

**Adversarially verify every finding.** Tag each:
- **CONFIRMED** — primary/authoritative source (Google Search Central, an engine's own docs/blog, schema.org, or 2+ independent reputable SEO/AEO sources) with a date.
- **DIRECTIONAL** — single source / practitioner claim / unverified "hack"; useful signal, not load-bearing.

Cite every finding with source + date. No fabricated figures or invented engine behavior.

## Step 2 — Vet each finding for brand-fit + durability (before anything is applied)
PBS is a **clinical-credibility B2B brand** reaching CFOs, HR directors, and benefits brokers as **Prescription Benefit Solutions**. A technique earns its way into the playbook only if it survives:
1. **Spam/penalty risk.** Reject anything that risks a Google manual action or AI-engine distrust — keyword stuffing, doorway/programmatic thin pages, cloaking, fake schema (markup not matching visible content), link schemes, AI-mass-generated filler. These get PBS *de*-cited, the opposite of the goal.
2. **Brand-fit + naming.** Must hold the CLAUDE.md public-naming rule (spell out Prescription Benefit Solutions; www.rxbs.org; PBS internal-only) and the clinical register. Reject tactics that cheapen authority or chase the wrong audience.
3. **Durability.** Prefer techniques tied to durable engine behavior over chase-the-algorithm tricks that will reverse next month (flag the latter DIRECTIONAL and short-shelf-life).
4. **Measured-data override.** PBS's own logged results (`ai_visibility_tracker.md`, `linkedin_performance_tracker.md`) beat generic advice. Where a researched practice conflicts with PBS's measured data, the measured data wins — note the conflict rather than overwriting it.

Rejected/flagged items are recorded with the reason; they are NOT applied.

## Step 3 — Auto-apply the safe, technique-level updates (mechanical, no approval)
Apply directly by **editing `aeo_seo_playbook.md` in place**:
- Refresh the sections (Answer-engine citation, Schema/structured data, llms.txt/crawlers, Answer-first/passage, Classic-SEO-for-B2B) with current verified guidance, each tagged CONFIRMED/DIRECTIONAL + sourced.
- Add a **dated changelog entry** (`## Changelog` → `### <YYYY-MM-DD>`) listing what changed, with sources.
- Keep measured-data-override notes inline where a best practice conflicts with PBS's logged citation results.
- Where a technique update is a pure spec refresh that an existing rule file already encodes (e.g., a new recommended schema property the `website_aeo_master_plan.md` schema list should mention, or a tightening of the answer-first lead in `substack_aeo_rules.md`), you MAY make the mechanical edit there too — but anything that changes the *substance* of a rule goes to Step 4, not here.

## Step 4 — Propose (do NOT auto-apply) any RULE-level change
Anything that changes a **rule** — a new required article element, a new page archetype, a schema requirement change, a canonical/twin policy shift, or any edit to a `CLAUDE.md` Critical Rule, `substack_aeo_rules.md` requirement, or `website_aeo_master_plan.md` spec that is a judgment call — **append a clearly-labeled proposal to `OPEN_ITEMS.md`** for Ginny's one-time approval. **Do NOT edit `CLAUDE.md` yourself.** Each proposal: the area, the proposed change, the sourced evidence (CONFIRMED/DIRECTIONAL), the brand-fit/durability verdict, and which file/section it would touch. Per the CLAUDE.md "Approve → auto-build" rule, note that an approved rule change must then be encoded in the rule-of-record AND run through `/propagate-rule`.

## Step 5 — Write the two-section notify body
Write `/tmp/notify_body.md`:

```
## ✅ Auto-applied to aeo_seo_playbook.md (FYI)
- <area>: <what changed> (CONFIRMED/DIRECTIONAL, source + date)
- ...

## 🟧 Needs your one-time approval (in OPEN_ITEMS)
- <area>: <proposed rule change> → would touch <file/section>
- ...
```
Lead with `**Monthly AEO/SEO Research** · <date>`. If a section is empty, say so (`- none this month`).

## Autonomy boundary (important)
Technique / spec refreshes that are mechanical + sourced → **auto-apply to `aeo_seo_playbook.md`** (and the obvious mechanical mirror in a rule file). New required elements, archetype changes, schema-requirement changes, and CLAUDE.md / substack_aeo_rules / website_aeo_master_plan rule changes are judgment calls → **propose to OPEN_ITEMS only**. The AEO build loops read `aeo_seo_playbook.md` on their next run, so auto-applied refreshes flow into content automatically; rule changes wait for Ginny's yes. **This loop never publishes; it only researches and drafts.**

## Surfacing approvals (tap-to-approve — required whenever you flag judgment calls)

When this run surfaces judgment-call / "needs Ginny" items (the same ones you add to `OPEN_ITEMS.md`), ALSO write them to `APPROVALS_PENDING.md` at the repo root — one GitHub task-list checkbox per decision (`- [ ]`), each a self-contained one-line summary with an inline link to context where useful. Write ONLY the checkbox lines (the workflow adds the dated heading). No judgment calls this run → do not create the file. The workflow posts these to the standing "✅ PBS — Approvals needed" issue via `.github/scripts/request_approval.sh`. Gitignored; does NOT replace the OPEN_ITEMS write — do both.
