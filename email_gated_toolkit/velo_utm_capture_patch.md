# UTM capture patch — toolkit funnel (paste-ready diffs)

**Created:** July 6, 2026. Implements the ads checklist item 2 (`paid_ads_bank.md` → Maximum-conversion checklist): every lead row records WHICH ad/link produced it, end to end (page → backend → CMS → Zapier → Sheet). ⚠ **This touches the LIVE funnel** — apply both edits together, publish, then run one real test submission with `?utm_source=test&utm_campaign=patch-check` and confirm the value lands in the ToolkitLeads row and the Zapier payload before walking away.

## Edit 1 — `velo_toolkit_page_code.js` (page code)

**1a.** Near the other imports (line ~78), `wix-location` may already be imported; if not, add:
```js
import wixLocation from 'wix-location';
```

**1b.** Directly AFTER the `const lead = usingStored ? saved : { ... };` block (line ~249), add:
```js
    // Paid/campaign attribution: carry UTM params (if any) on every submit.
    // Kept OUTSIDE the stored-values object so a returning visitor's new
    // click still records the CURRENT campaign, not the remembered one.
    const q = wixLocation.query || {};
    lead.utm_source = q.utm_source || '';
    lead.utm_campaign = q.utm_campaign || '';
```

*(Nothing else changes; `submitLead(lead, ...)` already passes the whole object.)*

## Edit 2 — `velo_backend_toolkitLead.web.js` (backend)

**2a.** In the UPDATE branch (existing row), alongside the other `row.x = lead.x || row.x` lines, add:
```js
        row.utm_source = lead.utm_source || row.utm_source || '';
        row.utm_campaign = lead.utm_campaign || row.utm_campaign || '';
```

**2b.** In the INSERT branch (new row object), add:
```js
        utm_source: lead.utm_source || '',
        utm_campaign: lead.utm_campaign || '',
```

**2c.** In the Zapier `body: JSON.stringify({ ... })` payload, add:
```js
        utm_source: lead.utm_source || '',
        utm_campaign: lead.utm_campaign || '',
```

## Edit 3 — one-time platform steps

1. **CMS:** add TEXT columns `utm_source` and `utm_campaign` to the `ToolkitLeads` collection (must exist before the code writes them).
2. **Zapier:** in the Google Sheets "add row" step, map the two new fields to two new Sheet columns (add the columns to the Leads tab first). The scorer and alert steps ignore them; no other Zap changes.
3. **Convention reminder:** ad URLs carry `?utm_source=linkedin&utm_medium=paid&utm_campaign=<ad-id>` (e.g. `ad6-cfo-cost`); organic first-comment links stay clean (their attribution is the "How did you hear" field + source context).

**Test matrix (run all three after publish):** clean URL (fields blank, everything else unchanged) · UTM URL new email (fields populated in row + payload) · UTM URL repeat email (row updates, downloads++, current campaign recorded).
