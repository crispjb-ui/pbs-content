---
description: Monthly audience-question harvest. Paste the month's real questions (LinkedIn/X/Substack comments, DMs, briefing Q&A, sales-call questions, toolkit-lead emails) and this updates the buyer-anxiety map, the FAQ blueprint, the Field Note backlog seeds, and the shocking-fact pipeline — turning what buyers actually ask into next month's hooks and answer content.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash
---

You are running the PBS question harvest — the loop that keeps the content system anchored to what buyers ACTUALLY ask rather than what we assume they ask. PBS's own data says naming the buyer's live anxiety beats informational content 10-100x; this is where new anxieties enter the system.

The user pastes the month's collected questions (any format: comment screenshots, DM text, briefing Q&A notes, "a prospect asked me...", the Watsco-style lead emails). If they paste nothing, ask once for whatever they remember, then work with that.

## Step 1 — Normalize and dedupe
Turn the raw input into a clean list: the question as the buyer phrased it (keep their words — the phrasing IS the SEO/AEO data), who asked (persona: CFO / HR-Benefits / Broker / pharmacist / other), and the surface it arrived on. Drop duplicates of questions already fully covered in `buyer_anxiety_map.md`.

## Step 2 — Route each question to its home(s)
- **New anxiety or sharper phrasing** → add/update the row in `buyer_anxiety_map.md` (persona → fear → trigger → the question verbatim → the PBS answer → matching asset).
- **FAQ-shaped** (would help every visitor) → add the Q&A to `website_mockups/site/faq.html` (page copy + FAQPage JSON-LD entry, keeping schema and visible text matched) and flag the Wix edit if /faq is live.
- **Field-Note-shaped** (deserves 400-700 words) → seed it into `field_note_backlog.md` with a one-line angle + the asker context (anonymized).
- **Reveal-shaped** (implies a hidden mechanism people don't know) → add to `shocking_fact_bank.md`'s pipeline/candidates section with a verify flag.
- **"Ask Ginny" video-shaped** (short, personal, high-emotion) → add to `video_content_bank.md`'s Ask-Ginny queue.
- **Glossary-shaped** (a term confusion) → follow the glossary convention: `_glossary_terms.md` first, then the propagation rule.

## Step 3 — The monthly read
Write 3-5 sentences at the top of `buyer_anxiety_map.md`'s changelog (create one if absent): what this month's questions cluster around, whether a NEW anxiety is emerging (2+ independent askers = a signal), and the one drafting implication for the next `/build-week`.

## Step 4 — Commit + report
Commit per repo git practice. Report back: how many questions in, where each was routed, the emerging-cluster read, and anything that needs Ginny's judgment (route those to OPEN_ITEMS, never self-approve a strategy shift). Anonymize every asker in committed files (persona + context only, never names/companies unless already public).
