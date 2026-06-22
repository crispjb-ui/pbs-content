# /build-aeo-page

Draft the next owned answer page on rxbs.org: build exactly ONE new `/guides/<topic>` (or `/compare/<topic>`) HTML blueprint in `website_mockups/site/`, following the Phase-0 CONTENT/ANSWER template, then lint, critique, and log it as a draft for review.

This command builds **one** page per run. It does not commit; the calling workflow (`.github/workflows/monthly-aeo-page.yml`) commits the result to `main` as a draft.

---

## Step 1 — Read the plan and inventory what already exists

1. Read `website_aeo_master_plan.md` in full, paying special attention to **Section E (the content-cluster map)** that lists the planned `/guides/<topic>` pages and their priority.
2. Read `aeo_geo_master_plan.md` for the broader AEO/GEO strategy (entity disambiguation, answer-first structure, canonical-twin rules), and skim `aeo_seo_playbook.md` for any current technique refresh (schema, answer-engine citation behavior) to apply on the new page.
3. Glob `website_mockups/site/` for the pages that already exist — `guide-*.html` and `compare-*.html` — and build the list of which cluster-map pages are **already done** vs. **still missing**.

## Step 2 — Pick the single highest-priority MISSING page

From the cluster map, choose the **one** highest-priority page that does NOT yet exist. Candidate topics (use the cluster map's priority order; this is the working set):

- how-to-read-a-pbm-rebate-report
- carve-in-vs-carve-out
- glp1-coverage-self-funded
- 340b-and-self-funded-plans
- copay-accumulators-maximizers
- pbm-rfp-how-to
- erisa-fiduciary-pharmacy
- specialty-pharmacy-carve-out
- what-is-a-transparent-pbm

Build only this one page this run.

## Step 3 — Build the page from the Phase-0 CONTENT/ANSWER template

Create a new HTML blueprint in `website_mockups/site/` (`guide-<slug>.html`, or `compare-<slug>.html` for a comparison topic). Follow the established template **exactly**:

- Copy the **nav + footer** and the `.ghero` / `.crumbs` pattern from `glossary.html`.
- Use the existing `site.css` classes (do not invent new CSS; link the same stylesheet).
- Include the author `.byline` (Ginny Crisp, PharmD).
- Open with an **answer-first first sentence**: one self-contained, quotable sentence that directly answers the buyer query in the title.
- Include the `.lead-cta` block pointing at the matching toolkit for the topic.
- Include the `.related` "Keep reading" block linking to 2-3 adjacent guides/glossary entries.
- Add **JSON-LD** in the head:
  - **Article** — author Person "Ginny Crisp" (PharmD), publisher Organization "Prescription Benefit Solutions", self-canonical `https://www.rxbs.org/guides/<slug>` (or `/compare/<slug>`).
  - **BreadcrumbList**.
  - **FAQPage** (3-5 Q/A drawn from the page body).
  - **HowTo** — only if the topic is a how-to (e.g., how-to-read-a-pbm-rebate-report, pbm-rfp-how-to).

## Step 4 — Brand rules (hard requirements)

- Spell out **"Prescription Benefit Solutions"** everywhere in published copy and schema; never the bare "PBS" on this public surface. Use **www.rxbs.org**.
- **No em dashes** and no " - " hyphen clause separators. Use commas, colons, semicolons, periods, or parentheses.
- Use **only real figures**: $78.7M contracted, 203 clients, ~$469K saved per pharmacy benefit review, 25% RFP savings, "hundreds of contracts a year". No fabricated statistics.
- Include a "results vary by plan" qualifier wherever a figure could be read as a reader's own number.

## Step 5 — Brand lint

Run `python3 tools/brand_lint.py` and fix any **hard violation** flagged on the new page before finishing.

## Step 6 — Critique

Run `/critique` (`.claude/commands/critique.md`) against the new page. Note the flags it returns in the run summary so they land in the commit/notify message for review.

## Step 7 — Update the plan and OPEN_ITEMS

- Update the cluster-map status in `website_aeo_master_plan.md` (mark the page as drafted / built).
- Add a line to `OPEN_ITEMS.md`: the new page slug, "drafted, review pending", and the date.

---

## Output

One new answer page in `website_mockups/site/`, plus the updated `website_aeo_master_plan.md` cluster-map status and a new `OPEN_ITEMS.md` line. Committed as a **draft** by the workflow (review pending on `main`).
