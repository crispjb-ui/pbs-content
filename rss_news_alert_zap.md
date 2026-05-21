# RSS News Alert Zap — Migration and Configuration

**Purpose:** Polls Google Alerts RSS feeds for pharmacy benefits news and emails matching items to `crispjb@gmail.com`. Brett uses the inbox stream to stay current on breaking PBM/drug-pricing news, which feeds into Wednesday Roundup curation and Wednesday LinkedIn POV posts.

**Distinct from the Wednesday Roundup automation** (the GitHub Action at `.github/workflows/weekly-roundup.yml`, which runs Tuesday mornings on cron, uses the Claude Code Action to web-search + draft + humanize the Roundup article, and commits the draft directly to main). The Zap below is a lighter-weight always-on inbox stream so breaking news surfaces in real time rather than waiting for the Tuesday batch. The `wednesday_roundup_implementation_guide.md` file describes three setup options for the Roundup (Claude Code Routines / Zapier / GitHub Actions), but only the GitHub Actions option is the one actually wired up.

---

## Migration context (May 21, 2026)

The Zap was originally built on Brett's **free Zapier account** and hits the 100-tasks-per-month tier limit during high-news weeks (which is when breaking news matters most). Ginny's **paid Zapier account** (used for the PBS toolkit email funnel) has substantial task headroom. Migrating the news Zap to the paid account eliminates the limit issue and consolidates both Zaps under one billing entity.

---

## Existing Zap configuration (free account — to be sunset)

Captured from screenshots on May 21, 2026. Use this as the source-of-truth when recreating in the paid account.

### Step 1 — RSS by Zapier · "Select the event"

- **Trigger event:** New Item in Multiple Feeds
- **Polling interval:** 15 minutes
- **Feed URLs (three Google Alerts feeds):**
  - `https://www.google.com/alerts/feeds/17991989331388356952/4714318431491019217`
  - `https://www.google.com/alerts/feeds/17991989331388356952/15092640591485083440`
  - `https://www.google.com/alerts/feeds/17991989331388356952/12055287841271080051`
- **"What Triggers a New Feed Item?":** `smart` (Zapier's smart-deduplication preference — collapses near-duplicate items across the three feeds so the same article doesn't fire three separate emails)

### Step 2 — Email by Zapier · "Send Outbound Email"

| Field | Value |
|---|---|
| To | `crispjb@gmail.com` |
| Subject | `New Alert: {{1__title}}` (literal text "New Alert: " + RSS Title merge tag) |
| Body (HTML or Plain) | Two lines: `Title: {{1__title}}` / `Source URL: {{1__link}}` |
| Attachment | empty |
| From Name | empty (uses Zapier default) |
| Reply To | empty |
| CC | empty |
| BCC | empty |
| Force Linebreaks? | unset (defaults to False) |
| Enable read receipts? | unset (defaults to False) |

### Known cosmetic issue

Google Alerts wraps matched keywords in `<b>` and `</b>` HTML tags inside the RSS title. Because Email by Zapier sends plain text, those tags render literally in the email subject (e.g., "New Alert: New `<b>`Bill`</b>` Accountability Act" instead of "New Alert: New **Bill** Accountability Act"). Currently tolerated; can be cleaned up with a Formatter step (see Optional enhancements below).

---

## Migration steps

### 1. Document the current Zap (5 minutes)

In Brett's free Zapier account, open the existing news Zap. Click into each step, verify every field matches the table above. If anything differs, update this doc with the actual config BEFORE recreating — otherwise the new Zap won't match.

### 2. Build the new Zap in Ginny's paid account (15-20 minutes)

1. Log into Ginny's paid Zapier account
2. **Create Zap** → Trigger: **RSS by Zapier**
3. Trigger event: **New Item in Multiple Feeds**
4. Paste the three Google Alerts feed URLs (one per row in the Feed URLs field)
5. Set "What Triggers a New Feed Item?" to `smart` (or whatever the existing Zap shows)
6. Polling interval: 15 min (paid tier supports tighter intervals if you want; 15 min matches existing behavior)
7. Click **Test** — Zapier pulls recent items from your Alert feeds to confirm the trigger works
8. Action: **Email by Zapier → Send Outbound Email**
9. Configure exactly per the Step 2 table above. Use the dynamic-value picker (the `+` icon next to each field) to insert the RSS title and link tokens — do not type them literally
10. Click **Test step** — confirm a test email arrives at `crispjb@gmail.com` with the expected format
11. **Publish the Zap** (top-right Publish button). Drafts don't fire on real RSS events

### 3. Parallel-run validation (3-5 days)

Leave the free-account Zap running. Both Zaps fire on the same RSS items, so you receive duplicate emails during this window. Acceptable cost. Monitor for:

- New Zap fires on every item the old one fires on (no missed events)
- Email format matches the existing inbox stream
- No errors in the new Zap's run history (Zapier dashboard → Zap History → filter by the new Zap)

### 4. Sunset the free-account Zap

Once you've confirmed 3-5 days of parallel behavior:

1. Open the free-account Zap
2. Toggle it **OFF** at the top of the Zap editor (do not delete yet)
3. Wait another 7-14 days with the new Zap as the sole sender — if anything breaks, you can re-enable the old one quickly
4. After the no-issue window, delete or archive the free-account Zap

Document the sunset date in this file's Change Log section at the bottom.

---

## Optional enhancements (paid-tier multi-step opportunities)

The free-tier 2-step structure is fine as a baseline. The paid tier gives task headroom to add value-add steps. Pick à la carte based on what would actually help; don't add complexity for its own sake.

### Option A — Strip HTML tags from the subject line

**What it does:** Removes the `<b>` and `</b>` artifacts from Google Alerts titles before they hit the email subject. Subject reads cleaner.

**How:** Insert a **Formatter by Zapier → Text → Replace** step between RSS and Email. First Replace: find `<b>`, replace with empty string. Second Replace: find `</b>`, replace with empty string. Use the cleaned output in the Email step's Subject field instead of the raw RSS Title.

**Cost:** +2 Zapier tasks per fire. Low.

**Recommend:** Yes, easy quality-of-life win.

### Option B — Add the Google Alerts feeds to the Roundup's fetch_rss.py instead

**What it does:** Makes the same Google Alerts breaking-news stream visible to the Wednesday Roundup GitHub Action, so the Tuesday-morning draft sees these items alongside the eight industry RSS feeds it already pulls. Solves the same problem (news-stream → Roundup feedback loop) without adding any Zapier steps.

**Why this is the right path (verified May 21, 2026):** `.github/scripts/fetch_rss.py` has a hardcoded `FEEDS` list — currently Drug Channels, Fierce Healthcare, KFF Health News, STAT News, Benefits Pro, PCMA, Pharmacy Times, Modern Healthcare. The script pulls past-7-days items from each feed Tuesday morning and writes them to `newsletters/roundups/rss_weekly_feed.md`, which the Roundup Action then ingests as part of its drafting prompt. The Google Alerts feeds Brett's Zap watches are NOT in that list, so the breaking-news Zap stream is invisible to the Roundup.

**How:**

1. Open `.github/scripts/fetch_rss.py`
2. Add three entries to the `FEEDS` list, one per Google Alerts feed, with descriptive names (e.g., names should match the keyword each Alert is tracking, not just "Google Alert 1"):
   ```python
   ("Google Alert - [keyword]", "https://www.google.com/alerts/feeds/17991989331388356952/4714318431491019217"),
   ("Google Alert - [keyword]", "https://www.google.com/alerts/feeds/17991989331388356952/15092640591485083440"),
   ("Google Alert - [keyword]", "https://www.google.com/alerts/feeds/17991989331388356952/12055287841271080051"),
   ```
3. Commit. Next Tuesday's Roundup Action will pick up the Google Alerts items automatically.

To name each Alert descriptively, log into Google Alerts (`google.com/alerts` under the Google account that owns these feeds), look at the three active alerts, and use the search-query keyword as the name. E.g., if one Alert tracks "PBM lawsuit," the entry becomes `("Google Alert - PBM lawsuit", "https://...4714318431491019217")`.

**Cost:** Zero Zapier tasks added (this enhancement happens entirely in the repo, not in the Zap). Roundup Action runtime increases by ~1-2 seconds for the additional feed fetches.

**Trade-off vs. a Zapier Google Sheet step:** The repo-side approach updates the Roundup automatically each Tuesday. A Zapier Sheet step would give Brett a real-time-visible single-pane view that's queryable any time, not just Tuesday. If both views matter, do both.

**Recommend:** Yes. Highest-leverage enhancement of the four because it directly improves the Roundup output without requiring any Tuesday-morning manual step.

### Option B-alt — Append matched items to a Google Sheet for Brett's own single-pane view

**What it does:** Every RSS item that fires also writes a row to a Google Sheet with columns: date, title, source URL, source domain. Brett gets a continuously-updated table he can scan at any time, alongside the email stream.

**How:** Add a third action step **Google Sheets → Create Spreadsheet Row** alongside the existing email step. Map RSS fields to columns.

**Cost:** +1 Zapier task per fire. Low.

**Recommend:** Optional layer on top of Option B. Do this only if the email inbox is hard to scan when compiling the Wednesday Roundup or when drafting Wednesday POV posts. Otherwise the email stream + the Tuesday Roundup Action covers the same ground.

### Option C — AI categorization step

**What it does:** Adds an OpenAI/Claude action that tags each RSS item by content pillar (Transparency, Contract Insights, Cost Containment, Clinical, Self-Funded, Broker) based on the title and snippet. Tag becomes part of the email subject and/or the Sheet row (if doing Option B).

**How:** Insert an **OpenAI → Conversation** or **Claude → Send Prompt** step between RSS and Email. Prompt: "Given this pharmacy benefits news headline, classify it by PBS content pillar (Transparency / Contract Insights / Cost Containment / Clinical / Self-Funded / Broker). Reply with just the pillar name." Use the response in the Subject line.

**Cost:** +1 Zapier task per fire + AI API call ($0.001-0.005 per item depending on model). Modest.

**Why it might matter:** Pre-categorization makes inbox/Sheet scanning faster. Brett can filter to the pillars he's drafting against this week. Not essential for the current workflow but a nice quality-of-life add if news volume gets high.

**Recommend:** Defer. Add later if news volume becomes a scanning problem.

### Option D — Send via Microsoft Outlook instead of Email by Zapier

**What it does:** Sends the news alert via the same Outlook account (`team@rxbs.org`) used for the PBS toolkit email funnel, instead of the Email-by-Zapier internal sender.

**Why it might matter:** Email by Zapier sends from a generic `@zapier.com` sender domain, which can occasionally get filtered to spam by Gmail. Outlook sends from a real authenticated PBS domain, which is more reliable.

**Cost:** No additional Zapier tasks. Just a different action.

**Trade-off:** The news Zap would be sending from `team@rxbs.org` to `crispjb@gmail.com`, which crosses the PBS business email with personal news intake. May or may not be desirable depending on how Brett uses team@rxbs.org. Could also create a separate `news@rxbs.org` alias if cleaner separation matters.

**Recommend:** Skip unless the current Email-by-Zapier sender starts landing in spam. Email by Zapier has been working fine to date.

### Recommended combined approach

If you want to do enhancements alongside the migration:

1. **Migrate as-is first** (parallel run + sunset)
2. **Add Option A (HTML strip)** as a quick second commit after migration is stable — small change, no decision risk
3. **Defer Options B / C / D** until you have a specific reason to add them. The 2-step migrated Zap is fine as a baseline.

---

## Change Log

| Date | Change | Notes |
|---|---|---|
| _Pending migration_ | Migrate from Brett's free account to Ginny's paid account | Eliminates 100-task/month free-tier limit |
| _Pending sunset_ | Disable free-account Zap | After 3-5 days of parallel validation in paid account |
| _Pending sunset confirmation_ | Delete free-account Zap | After 7-14 additional days with paid as sole sender |
