# Search Console Tracker (organic search performance)

_Created Jun 22, 2026. The automated **search-performance** read for rxbs.org: real impressions, clicks, CTR, average position, and the queries/pages PBS actually ranks for. Complements `ai_visibility_tracker.md` (the manual AI-citation read across the answer engines) and `aeo_seo_playbook.md` (the technique layer). Populated monthly by `tools/gsc_pull.py` via `monthly-search-console.yml`._

## How it runs
`monthly-search-console.yml` runs `tools/gsc_pull.py` on a monthly cron. The script pulls the trailing 28 full days from the Google Search Console API and appends a snapshot under "Monthly snapshots" below. It reads the trends so you can see which buyer queries are gaining impressions, where CTR is weak (a title/meta fix), and which owned pages are climbing.

## One-time setup (required before the first real pull)
The pull needs a Google service-account credential stored as the repo secret **`GSC_SA_KEY`**:
1. Google Cloud Console → create/reuse a project → enable the **Google Search Console API**.
2. Create a **Service Account** → add a **JSON key** → download it.
3. In Search Console for the rxbs.org property: **Settings → Users and permissions → Add user** → paste the service account email (`…iam.gserviceaccount.com`), role **Restricted**.
4. GitHub repo → **Settings → Secrets and variables → Actions → New repository secret** → name **`GSC_SA_KEY`**, paste the full JSON key.
   - Optional: add **`GSC_SITE_URL`** if it's a URL-prefix property (e.g. `https://www.rxbs.org/`). Default is `sc-domain:rxbs.org`.

Until the secret exists, the workflow runs but no-ops with these instructions (it never fails). Prerequisite: the sitemap must be submitted to Search Console (open item) so there's data to read.

## How to read it (the diagnostic)
- **High impressions, low CTR** on a buyer query → the page ranks but the title/meta isn't winning the click. Rewrite the SEO title / meta description (and, for a Substack twin, the question-shaped title per `substack_aeo_rules.md`).
- **Rising impressions, position 8-20** on a target query → almost there; strengthen the owned page + internal links (cross-reference `aeo_seo_playbook.md` and the owned-asset map in `ai_visibility_tracker.md`).
- **A query with no owned page** showing impressions → next content target.
- Cross-reference monthly with the AI-citation scoreboard: classic search position + AI-citation together tell the full "are we the leader" story.

## Monthly snapshots

### 2026-07-03 snapshot (28 days: 2026-06-06 to 2026-07-03) · property `https://www.rxbs.org/`

**Totals:** no data

**Top queries** (clicks · impressions · CTR · avg position):

_No query rows returned (property may be new or low-traffic)._

**Top pages:**

_No page rows returned._

_(none yet — the first snapshot appears here after `GSC_SA_KEY` is set and the workflow runs.)_
