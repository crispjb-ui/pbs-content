#!/usr/bin/env python3
"""Pull Google Search Console performance and append a monthly snapshot to
search_console_tracker.md. This is the automated SEARCH-performance read that
complements the manual AI-citation read in ai_visibility_tracker.md.

Auth: a Google service-account JSON key, provided via the GSC_SA_KEY env var
(the full JSON as a repo secret). The service account must be added as a user
on the Search Console property (Settings -> Users and permissions -> Add user,
Restricted is enough). Site URL via GSC_SITE_URL (default: sc-domain:rxbs.org;
use https://www.rxbs.org/ for a URL-prefix property).

Defensive by design: if GSC_SA_KEY is absent or the libs are missing, it prints
setup instructions and exits 0 (never fails the workflow) so the loop is wired
and waiting for the credential rather than red.
"""
import datetime
import json
import os
import sys

TRACKER = os.path.join(os.path.dirname(__file__), os.pardir, "search_console_tracker.md")
SITE_URL = os.environ.get("GSC_SITE_URL", "sc-domain:rxbs.org")
ROW_QUERIES = 25
ROW_PAGES = 15

SETUP = """\
Google Search Console pull skipped: no GSC_SA_KEY credential found (or the
google-api libraries are not installed).

One-time setup to turn this on:
  1. Google Cloud Console -> create a project (or reuse one) -> enable the
     "Google Search Console API".
  2. Create a Service Account -> add a JSON key -> download it.
  3. In Search Console (search.google.com/search-console) for the rxbs.org
     property: Settings -> Users and permissions -> Add user -> paste the
     service account's email (…iam.gserviceaccount.com), role Restricted.
  4. In the GitHub repo: Settings -> Secrets and variables -> Actions ->
     New repository secret -> name GSC_SA_KEY, paste the FULL JSON key.
     (Optional: set a GSC_SITE_URL secret if the property is a URL-prefix
     property, e.g. https://www.rxbs.org/ ; default is sc-domain:rxbs.org.)
The next monthly run (or a manual 'Run workflow') will then pull and log data.
"""


def _fail_soft(msg):
    print(msg)
    sys.exit(0)


def main():
    raw = os.environ.get("GSC_SA_KEY", "").strip()
    if not raw:
        _fail_soft(SETUP)

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except Exception as e:  # libs not installed
        _fail_soft(SETUP + f"\n(import error: {e})")

    try:
        info = json.loads(raw)
    except json.JSONDecodeError as e:
        _fail_soft(f"GSC_SA_KEY is not valid JSON ({e}); skipping. " + SETUP)

    creds = service_account.Credentials.from_service_account_info(
        info, scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    # GSC data lags ~2-3 days; pull the trailing 28 full days ending 3 days ago.
    end = datetime.date.today() - datetime.timedelta(days=3)
    start = end - datetime.timedelta(days=27)
    sd, ed = start.isoformat(), end.isoformat()

    def query(dimensions, limit):
        body = {"startDate": sd, "endDate": ed, "dimensions": dimensions, "rowLimit": limit}
        return svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute().get("rows", [])

    try:
        totals = query([], 1)
        top_queries = query(["query"], ROW_QUERIES)
        top_pages = query(["page"], ROW_PAGES)
    except Exception as e:
        _fail_soft(f"Search Console API call failed ({e}); skipping this run. "
                   "Confirm the service account was added as a user on the property.")

    def fmt_totals(rows):
        if not rows:
            return "no data"
        r = rows[0]
        return (f"clicks {int(r.get('clicks',0))} · impressions {int(r.get('impressions',0))} · "
                f"CTR {r.get('ctr',0)*100:.1f}% · avg position {r.get('position',0):.1f}")

    lines = []
    lines.append(f"### {ed} snapshot (28 days: {sd} to {ed}) · property `{SITE_URL}`")
    lines.append("")
    lines.append(f"**Totals:** {fmt_totals(totals)}")
    lines.append("")
    lines.append("**Top queries** (clicks · impressions · CTR · avg position):")
    lines.append("")
    if top_queries:
        lines.append("| Query | Clicks | Impr | CTR | Pos |")
        lines.append("|---|--:|--:|--:|--:|")
        for r in top_queries:
            q = r["keys"][0].replace("|", "\\|")
            lines.append(f"| {q} | {int(r.get('clicks',0))} | {int(r.get('impressions',0))} | "
                         f"{r.get('ctr',0)*100:.1f}% | {r.get('position',0):.1f} |")
    else:
        lines.append("_No query rows returned (property may be new or low-traffic)._")
    lines.append("")
    lines.append("**Top pages:**")
    lines.append("")
    if top_pages:
        lines.append("| Page | Clicks | Impr | CTR | Pos |")
        lines.append("|---|--:|--:|--:|--:|")
        for r in top_pages:
            p = r["keys"][0].replace("|", "\\|")
            lines.append(f"| {p} | {int(r.get('clicks',0))} | {int(r.get('impressions',0))} | "
                         f"{r.get('ctr',0)*100:.1f}% | {r.get('position',0):.1f} |")
    else:
        lines.append("_No page rows returned._")
    lines.append("")
    snapshot = "\n".join(lines) + "\n"

    # Append under the "## Monthly snapshots" marker.
    with open(TRACKER, "r", encoding="utf-8") as f:
        doc = f.read()
    marker = "## Monthly snapshots"
    if marker in doc:
        head, _, tail = doc.partition(marker)
        doc = head + marker + "\n\n" + snapshot + tail.lstrip("\n")
    else:
        doc = doc.rstrip() + "\n\n## Monthly snapshots\n\n" + snapshot
    with open(TRACKER, "w", encoding="utf-8") as f:
        f.write(doc)

    print(f"Wrote Search Console snapshot for {sd}..{ed} to search_console_tracker.md")


if __name__ == "__main__":
    main()
