# /backfill-substack-aeo

Backfill exactly ONE older newsletter week file (W06-W25) to the Substack AEO rules, the same way W26-W37 were built from the start. This brings the Substack deep dive (PART 1) and field note (PART 1B) up to the AEO/citation standard so they earn AI citations.

This command backfills **one** week per run. It does not commit; the calling workflow (`.github/workflows/monthly-substack-backfill.yml`) commits the result to `main` as a draft.

---

## Step 1 — Find the next week to backfill

Search `newsletters/week_06_*.md` through `newsletters/week_25_*.md` and find the **lowest-numbered** week whose PART 1 deep dive does NOT yet contain a `SEO Title (AEO)` line (grep for `SEO Title (AEO)`). That lowest-numbered week without the line is the next one to backfill. Backfill only that one week this run.

## Step 2 — Apply `substack_aeo_rules.md` to PART 1 and PART 1B only

Read `substack_aeo_rules.md` and apply it to the chosen file's **PART 1 (deep dive)** and **PART 1B (field note)** ONLY, exactly the way W26-W37 were done:

- Add the title lines at the top of each article:
  - `**Display Title:**` (the existing confrontational/display title)
  - `**SEO Title (AEO):**` (a question-shaped title matching the buyer query)
  - `**SEO Subtitle:**`
- Add an **answer-first bolded lead sentence**: one self-contained, quotable sentence answering the SEO-title query, at the very top of the article body.
- Add exactly one **outbound `https://www.rxbs.org/...` canonical link** (glossary, contract-language-library, toolkit landing page, or pillar guide) at the natural money-page reference point.
- Spell out **"Prescription Benefit Solutions"** in the Substack prose (never the bare "PBS" in published copy).

**Do NOT touch** PART 2 (LinkedIn Newsletter), PART 3 (LinkedIn Feed), PART 4 (Notes), PART 4B (X), image prompts, or the Run of Show. This is a Substack-prose-only backfill scoped to PART 1 and PART 1B.

## Step 3 — Brand lint

Run `python3 tools/brand_lint.py`. It must stay **clean** (no new hard violations introduced by the backfill). Fix anything the backfill tripped, then finish.

---

## Output

One backfilled week file (PART 1 + PART 1B brought to the Substack AEO rules), committed as a **draft** by the workflow (review pending on `main`).
