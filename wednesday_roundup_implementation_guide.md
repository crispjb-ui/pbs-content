# Wednesday Roundup: Implementation Guide

## "What Crossed My Desk This Week" - Weekly News Roundup
### Setup Guide for Automated Research, Compilation, and Drafting

---

## Overview

**What this does:** Every Tuesday morning, an automated workflow collects the past week's pharmacy benefits news from two sources (your RSS feed + targeted web search), filters for employer relevance, and writes a draft Substack article in Ginny's voice. You review, tweak, and publish Wednesday at 7:30 AM.

**Publishing schedule:**
- Tuesday 7:30 AM: Automation delivers draft to GitHub branch
- Tuesday morning: Ginny reviews, edits, adds personal commentary
- Wednesday 7:30 AM: Publish on Substack (Benefit Blind Spots)

**Format:** 400-600 words, 4-5 stories, each with Ginny's take. Free content (not paywalled).

---

## OPTION A: Claude Code Routines (Recommended Starting Point)

### Step 1: Set Up the Routine

Open Claude Code in the Main repo. Run:

```
/schedule
```

When prompted, describe what you want:

```
Every Tuesday at 7:30 AM EST, do the following:

1. Read CLAUDE.md in this repo for voice rules and brand guidelines.

2. Search the web for pharmacy benefits industry news from the past 7 days
   using these search queries (run each one):
   
   a. "PBM" AND (lawsuit OR regulation OR merger OR settlement) past 7 days
   b. "Express Scripts" OR "CVS Caremark" OR "Optum Rx" news past 7 days
   c. FDA AND (drug approval OR advisory committee) AND pharmacy past 7 days
   d. "biosimilar" AND (launch OR approval OR interchangeable) past 7 days
   e. "GLP-1" OR "Wegovy" OR "Ozempic" AND (coverage OR pricing) past 7 days
   f. "drug pricing" AND (legislation OR CMS OR HHS) past 7 days
   g. "self-funded employer" AND (pharmacy OR PBM) past 7 days
   h. "340B" AND (ruling OR contract pharmacy) past 7 days
   i. "stop-loss" AND (pharmacy OR specialty OR gene therapy) past 7 days
   j. "ERISA" AND (PBM OR pharmacy OR fiduciary) past 7 days

3. From all results, select the 5 most significant stories for self-funded
   employers. Rank by: employer cost impact first, regulatory change second,
   market shift third, clinical development fourth.
   
   Skip: press releases without substance, opinion pieces without data,
   stories older than 7 days, duplicate coverage of the same story.

4. Write a Substack article following the template in
   newsletters/templates/wednesday_roundup_template.md

5. Write a preview image generation prompt following the template specs.

6. HUMANIZE PASS (built into the writing process, not a separate step):
   Before saving, review the entire article and rewrite as needed:
   
   REMOVE these AI patterns:
   - "It's important to note" / "It's worth mentioning"
   - "Let's dive in" / "Let's explore" / "Let's break this down"
   - "In today's landscape" / "In the current environment"
   - "navigating" (as buzzword)
   - "leverage" as verb meaning "use"
   - "holistic" / "robust" / "comprehensive" (as filler)
   - "key takeaways" / "actionable insights"
   - Excessive bolding mid-paragraph
   - Overly parallel list structures that read like AI output
   
   ADD personal voice:
   - Use "I" naturally: "I flagged this because..." or "I have been watching this..."
   - Use "we" for PBS: "We see this pattern in contracts..."
   - Add specific professional context: "In my experience reviewing contracts..."
   - Vary sentence length. Mix short punchy with longer explanatory.
   - Add conversational transitions between stories
   
   ENFORCE these rules:
   - No em dashes or hyphens as sentence separators (use commas, colons, periods)
   - No fabricated statistics (use "significant," "substantial," "meaningful")
   - Brokers are PARTNERS: "The best brokers are already flagging this"
   - PBM practices are the adversary where appropriate
   - Every story framed through employer cost/risk lens
   - Must sound like Ginny Crisp, PharmD wrote it personally, not like AI
     summarized news feeds
   
   Save ONLY the humanized version. Do not save a pre-humanized draft.

7. Save the output to newsletters/roundups/roundup_YYYY_MM_DD.md
   on a new branch called claude/roundup-YYYY-MM-DD.

8. The article must follow all rules in CLAUDE.md:
   - Voice: Ginny Crisp, PharmD
   - Company name: Prescription Benefit Solutions (PBS), never RXBS
   - CEO: Ginny Crisp, PharmD (not "Dr. Ginny Crisp")
```

### Step 2: Verify the Routine Was Created

After setup, Claude Code will confirm the schedule. You can view and manage routines at:

```
claude.ai/code/routines
```

### Step 3: Weekly Review Workflow

Every Tuesday morning:
1. Check your email or GitHub for the new branch
2. Open the draft at `newsletters/roundups/roundup_YYYY_MM_DD.md`
3. The draft is already humanized (built into the automation prompt)
4. Review for content accuracy and Ginny's voice. Adjust any takes that don't feel right.
5. Merge the branch or copy the content to Substack
6. Schedule for Wednesday 7:30 AM publish on Substack

> **NOTE:** The humanize pass is built into Step 6 of the automation prompt. The draft should arrive already sounding like Ginny. If it does not, run `/humanize` manually as a backup. After the first 2-3 weeks, evaluate whether the built-in humanize is sufficient or whether a manual pass is still needed.

---

## OPTION B: Zapier + Claude API (If You Want RSS Integration)

This option uses your existing RSS-to-email Zapier workflow and adds Claude API processing.

### Step 1: Modify Your Existing RSS Zap

Your current flow: RSS → Zapier → Email (daily)

**Add a parallel path:** RSS → Zapier → Google Sheet (daily accumulation)

In Zapier:
1. Open your existing RSS Zap
2. Add a new action step after the RSS trigger (parallel to email)
3. Action: "Google Sheets - Create Spreadsheet Row"
4. Spreadsheet: Create one called "PBS Weekly News Feed"
5. Columns: Date | Headline | Source | URL | Summary
6. Map the RSS fields to these columns

This accumulates every story in a spreadsheet. Each day adds new rows.

### Step 2: Create the Tuesday Compilation Zap

Create a NEW Zap:

**Trigger:** Schedule by Zapier
- Frequency: Every week
- Day: Tuesday
- Time: 7:00 AM EST

**Action 1:** Google Sheets - Get Many Spreadsheet Rows
- Spreadsheet: "PBS Weekly News Feed"
- Filter: Date >= 7 days ago
- This pulls the past week's accumulated stories

**Action 2:** Webhooks by Zapier - POST (Claude API call for web search)
- URL: `https://api.anthropic.com/v1/messages`
- Headers:
  ```
  x-api-key: [YOUR_ANTHROPIC_API_KEY]
  anthropic-version: 2023-06-01
  content-type: application/json
  ```
- Body (raw JSON):
  ```json
  {
    "model": "claude-sonnet-4-6",
    "max_tokens": 4000,
    "messages": [{
      "role": "user",
      "content": "You are a pharmacy benefits research assistant. Search the web for pharmacy benefits industry news from the past 7 days using these queries. For each query, return the top 2-3 results with headline, source, date, URL, and a 2-sentence summary.\n\nQueries:\n1. PBM lawsuit OR regulation OR merger past 7 days\n2. FDA drug approval pharmacy past 7 days\n3. biosimilar launch OR approval past 7 days\n4. GLP-1 coverage OR pricing past 7 days\n5. drug pricing legislation OR CMS past 7 days\n6. self-funded employer pharmacy OR PBM past 7 days\n7. 340B ruling OR contract pharmacy past 7 days\n\nReturn results as a structured list. Deduplicate. Only include stories from the past 7 days."
    }]
  }
  ```

**Action 3:** Webhooks by Zapier - POST (Claude API call for article draft)
- URL: `https://api.anthropic.com/v1/messages`
- Headers: Same as above
- Body: See the full prompt in the "Automation Prompt" section below
- Input: Combine the RSS stories from Action 1 + search results from Action 2

**Action 4:** Choose ONE output destination:
- **GitHub:** Use the "GitHub - Create File" action to push the draft to your repo
- **Email:** Send the draft to Ginny for review
- **Google Doc:** Create a new doc with the draft for editing

### Step 3: Clean Up the Spreadsheet

Add a final action to the Zap:
- Google Sheets: Delete rows older than 7 days
- This keeps the sheet from growing indefinitely

---

## OPTION C: GitHub Actions (If You Prefer Everything in GitHub)

### Step 1: Add Your API Key as a GitHub Secret

1. Go to your repo: github.com/crispjb-ui/Main
2. Settings → Secrets and variables → Actions
3. New repository secret: `ANTHROPIC_API_KEY` = your key

### Step 2: Create the Workflow File

Create the file `.github/workflows/weekly-roundup.yml` in your repo:

```yaml
name: Weekly Pharmacy Benefits Roundup

on:
  schedule:
    - cron: '30 12 * * 2'  # Every Tuesday at 7:30 AM EST (12:30 UTC)
  workflow_dispatch:  # Allows manual trigger for testing

jobs:
  generate-roundup:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Generate roundup draft
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Read CLAUDE.md for voice and brand rules.
            Read newsletters/templates/wednesday_roundup_template.md for the article format.
            
            Search for pharmacy benefits industry news from the past 7 days:
            1. PBM industry news (lawsuits, regulation, mergers)
            2. FDA drug approvals relevant to pharmacy benefits
            3. Biosimilar launches and approvals
            4. GLP-1 coverage and pricing developments
            5. Drug pricing legislation and CMS actions
            6. Self-funded employer pharmacy news
            7. 340B program developments
            
            Select the 5 most significant stories for self-funded employers.
            Write the article following the template exactly.
            Include a preview image generation prompt.
            
            IMPORTANT: Before saving, run a humanize pass on the article.
            Remove AI-sounding language (It's important to note, Let's dive in,
            navigate, robust, comprehensive, actionable insights). Add personal
            "I" and "we" voice throughout. Vary sentence length. No em dashes
            as sentence separators. Brokers are partners. PBM is adversary.
            Must sound like Ginny Crisp wrote it, not like AI summarized news.
            Save ONLY the humanized version.
            
            Save to newsletters/roundups/roundup_$(date +%Y_%m_%d).md
            Commit and push to a new branch: claude/roundup-$(date +%Y-%m-%d)

      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v5
        with:
          title: "Weekly Roundup Draft - Week of $(date +%B' '%d)"
          body: "Automated weekly pharmacy benefits roundup. Review, edit, and publish."
          branch: claude/roundup-draft
          base: main
```

### Step 3: Test It

Go to Actions tab in your repo → "Weekly Pharmacy Benefits Roundup" → "Run workflow" to test manually before the first Tuesday.

---

## The Automation Prompt (Used by All Options)

This is the full prompt that Claude receives. Customize for whichever option you choose:

```
You are Ginny Crisp, PharmD, CEO of Prescription Benefit Solutions (PBS).
You review approximately 100 PBM contracts annually. You are writing your
weekly "What Crossed My Desk This Week" column for Benefit Blind Spots
(your Substack publication).

## Voice Rules
- Use "I" and "we" naturally
- Confident clinical authority, not academic
- No em dashes or hyphens as sentence separators
- No fabricated statistics
- Brokers and carriers are partners, not adversaries
- PBM practices are the adversary where appropriate
- Company name: Prescription Benefit Solutions (PBS), never RXBS
- CEO: Ginny Crisp, PharmD (not "Dr. Ginny Crisp")

## Input
Here are this week's pharmacy benefits news stories from RSS feeds
and targeted web search:

[RSS STORIES INSERTED HERE BY AUTOMATION]

[WEB SEARCH RESULTS INSERTED HERE BY AUTOMATION]

## Task
1. From all stories, select the 4-5 most significant for self-funded
   employers. Rank by employer cost impact first.

2. Write the article following this exact structure:

TITLE: What Crossed My Desk This Week: [Date Range]
SUBTITLE: [SEO-optimized, 40-60 characters]

OPENING (2-3 sentences): Brief personal framing. "Four stories this
week that self-funded employers need on their radar." or "Busy week
in pharmacy benefits. Here is what matters for your plan."

STORY 1: [Most significant]
- Headline in bold
- Source and date in italics
- 2-3 sentences: what happened (factual)
- 2-3 sentences: Ginny's take (why it matters for employers, what
  to do about it, connect to PBS expertise where natural)

STORY 2-4: Same format as Story 1

STORY 5 (optional): "One more worth watching" - shorter, 2-3 sentences total

CLOSING: 2-3 sentences. Forward-looking. "If any of these stories
affect your plan, the time to act is before the next renewal cycle."
Or connect to the Monday deep dive topic.

CTA: "Questions about how any of these developments affect your plan?
Reach out at team@rxbs.org."

## Article Meta (at end of file)
- SEO Title
- SEO URL Slug: what-crossed-my-desk-YYYY-MM-DD
- Tags: pharmacy benefits news, PBM, self-funded employers, weekly roundup

## Preview Image Prompt (at end of file)
Write a Canva/AI image generation prompt for the header image:
- Dimensions: 1200 x 600 px
- Background: Accent Blue (#A7E0FA)
- "WHAT CROSSED MY DESK" in deep teal-blue (#015880) Krona One
- Week date range in Gray (#4D4D4D) Roboto
- 3-4 small flat icons representing that week's story categories
- "Benefit Blind Spots" badge top-left
- PBS logo bottom-right (dark version)
- No photographs, flat corporate style

## Humanize Pass (Built Into Writing, Not a Separate Step)

Before saving the article, review the entire draft and rewrite as needed.
Save ONLY the humanized version.

REMOVE these AI patterns if they appear anywhere:
- "It's important to note" / "It's worth mentioning" / "It's worth noting"
- "Let's dive in" / "Let's explore" / "Let's break this down"
- "In today's landscape" / "In the current environment"
- "navigating" (when used as a buzzword)
- "leverage" as a verb meaning "use" (replace with "use," "apply," or rephrase)
- "holistic" / "robust" / "comprehensive" (when used as filler)
- "key takeaways" / "actionable insights" / "deep dive" (as section headers)
- Excessive bolding of phrases mid-paragraph
- Overly parallel list structures that read like AI bullet-point output

ADD personal voice throughout:
- Use "I" naturally: "I flagged this because..." or "I have been watching..."
- Use "we" for PBS team: "We see this pattern in contracts..."
- Add specific professional context: "In my experience reviewing contracts..."
- Vary sentence length. Mix short punchy sentences with longer explanatory ones.
- Add conversational transitions between stories: "The second story this week
  connects to something we have been tracking..." not just "Story 2:"
- Sound like a pharmacist with opinions, not like a news feed

ENFORCE these rules:
- No em dashes or hyphens as sentence separators (use commas, colons, 
  semicolons, periods, or parentheses)
- No fabricated statistics (use "significant," "substantial," "meaningful")
- Brokers are PARTNERS: "The best brokers are already flagging this" or
  "Your broker can help you evaluate this"
- PBM practices are the adversary where appropriate
- Each story framed through employer cost/risk lens
- Total article: 400-600 words
- Company name: Prescription Benefit Solutions (PBS), never RXBS
- CEO: Ginny Crisp, PharmD (not "Dr. Ginny Crisp")

The article that gets saved must read like Ginny Crisp sat down Tuesday
morning, read the week's news, and wrote her take. Not like software
processed an RSS feed.
```

---

## RSS Feed Sources to Subscribe To (If You Need More)

Add these to your Zapier RSS trigger if you don't already have them:

| Source | RSS/Feed URL | Why |
|--------|-------------|-----|
| Drug Channels (Adam Fein) | drugchannels.net/feeds/posts/default | #1 PBM economics analysis |
| Fierce Healthcare - Payers | fiercehealthcare.com/rss/payer | Payer/employer news |
| FDA Drug Approvals | fda.gov/about-fda/contact-fda/stay-informed (RSS available) | New approvals |
| Kaiser Health News | khn.org/feed/ | Policy + pricing |
| STAT News - Pharma | statnews.com/category/pharma/feed/ | Drug development |
| Modern Healthcare | modernhealthcare.com/rss | Industry news |
| Benefits Pro | benefitspro.com/feed/ | Employer benefits |
| PCMA Blog | pcmanet.org/feed/ | PBM industry perspective |
| Self-Insurance Institute | siia.org (check for RSS) | Self-funded employer news |
| Pharmacy Times | pharmacytimes.com/rss | Clinical pharmacy news |

---

## Folder Structure

```
/home/user/Main/
├── newsletters/
│   ├── templates/
│   │   └── wednesday_roundup_template.md    ← Format template (create next)
│   ├── roundups/
│   │   ├── roundup_2026_07_01.md           ← Weekly drafts land here
│   │   ├── roundup_2026_07_08.md
│   │   └── ...
│   ├── week_25_renewal_countdown.md
│   └── ...
└── .github/
    └── workflows/
        └── weekly-roundup.yml               ← If using Option C
```

---

## Quick Start Checklist

- [ ] Choose your option: Routines (A), Zapier (B), or GitHub Actions (C)
- [ ] If Option B: Add Google Sheet accumulation to existing RSS Zap
- [ ] If Option C: Add ANTHROPIC_API_KEY to GitHub secrets
- [ ] Create the roundup template file (next file in this guide)
- [ ] Create the `newsletters/roundups/` directory
- [ ] Run a manual test before the first automated Tuesday
- [ ] Review first draft, provide feedback, iterate on prompt
- [ ] After 2-3 good weeks, trust the automation and just review/edit

---

*Guide created: April 2026*
*For questions on implementation: team@rxbs.org*
