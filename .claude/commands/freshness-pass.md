---
description: Monthly evergreen-content freshness rotation. Picks the 2-3 stalest LIVE canonical assets from evergreen_freshness_registry.md, drafts a SUBSTANTIVE refresh for each (new stat/example/term, updated dates, dateModified bump), updates the repo sources, and flags the Wix/Substack edits. Protects the AEO freshness premium; never date-bumps without real changes.
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, WebFetch
---

You are running the PBS evergreen freshness pass. Rationale (from `aeo_seo_playbook.md` §6, CONFIRMED): AI-cited URLs are ~26% fresher than organic and ~half of cited content is <13 weeks old; engines also detect and penalize date-bumping without substantive change. So: real refreshes, on a rotation.

## Step 1 — Pick the rotation
Read `evergreen_freshness_registry.md`. Select the **2-3 LIVE assets with the oldest "Last substantive refresh"** (skip `not live` rows; skip anything refreshed <8 weeks ago unless the pool is exhausted). Note each asset's refresh-notes column — it constrains what kind of refresh fits.

## Step 2 — Draft each refresh (substantive, on-voice, rule-compliant)
For each selected asset, make a REAL improvement, smallest-that-counts:
- **Glossary:** add one genuinely new buyer-relevant term (check `_glossary_terms.md` + recent `/quarterly-research` findings first) OR sharpen 2-3 definitions with what contract reviews are currently surfacing. Follow the full propagation rule in CLAUDE.md toolkit-glossary convention (i): blueprint + JSON-LD paste file + Wix edit flag.
- **Toolkits:** refresh the 1-2 oldest by build week — update a stat, a year reference ("2026 renewal season"), an example range; re-render per the `/sync-toolkits` triplet rule (HTML → PDF → preview PNG, `_audit_pdfs.py` clean).
- **Pages (RSO, request-a-call, etc.):** seasonal-accuracy pass (dates, deadlines, the current campaign's framing) per the registry's notes column.
- **Contract Language Library:** check the Update Log's last push date; if >8 weeks, flag to Ginny with the provisions pending rather than inventing new ones.
- Verify any external fact you touch (`/verify-fact` standard: no fabricated numbers; "significant/substantial" over invented stats).
- Where the asset has schema, note that `dateModified` must move WITH the visible change (both, never just one).

## Step 3 — Update the repo + registry
Apply the edits to the repo source files (blueprints, paste files, toolkit HTML + re-renders). Update the registry: move each refreshed asset's date, append a Refresh log row stating WHAT changed (one line each).

## Step 4 — Flag the human step
The live surfaces need hands: write the specific Wix/Substack edit instructions (which page, which element/panel, what to paste) into the notify body at `/tmp/notify_body.md`, and add any non-obvious judgment call to `APPROVALS_PENDING.md`. Never claim the live site was updated — only the repo sources were.

## Guardrails
- Substantive or nothing: if an asset has no honest improvement available, skip it and say so (do not touch its date).
- All standing rules bind: no em-dash separators, firm name spelled out, verified numbers only, brand typography, 2-page toolkit limit, mobile legibility.
- Do not commit (the workflow's commit step handles it) when run via automation; commit normally when run manually.
