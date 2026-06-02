/*
 * backend/toolkitLead.web.js  — Velo WEB MODULE (new .web.js format)
 * ------------------------------------------------------------------
 * Save in Wix as:  backend/toolkitLead.web.js
 * Frontend imports it as:  import { submitLead } from 'backend/toolkitLead.web';
 *
 * Exports must be wrapped in webMethod(Permissions.Anyone, ...) in the .web.js
 * format (unlike the legacy .jsw format which exported plain async functions).
 *
 * Handles a toolkit lead submission server-side:
 *   1) Wix Contacts (CRM) — appendOrCreateContact, dedupes by email.
 *   2) ToolkitLeads CMS collection — ONE ROW PER EMAIL (no duplicate records).
 *        First download inserts; later downloads UPDATE the row (downloads++,
 *        repeat=true, toolkit_name/slug, toolkits_requested history, last_download).
 *   3) Zapier catch hook — fires the welcome email sequence. Payload includes
 *        `repeat`; a Zapier Filter after Email 1 skips Emails 2-5 when repeat=true.
 * ------------------------------------------------------------------
 */

import { Permissions, webMethod } from 'wix-web-module';
import { fetch } from 'wix-fetch';
import wixData from 'wix-data';
import { contacts } from 'wix-crm-backend';

// PASTE your live Zapier Catch Hook URL here:
const ZAPIER_HOOK = 'https://hooks.zapier.com/hooks/catch/XXXXXXX/YYYYYYY/';
const LOG_COLLECTION = 'ToolkitLeads';

export const submitLead = webMethod(
  Permissions.Anyone,
  async (lead, toolkitName, toolkitSlug, repeatHint) => {
    // 1) CRM — create or update the Wix Contact (dedupes by email).
    try {
      await contacts.appendOrCreateContact({
        name: { first: lead.first_name },
        emails: [{ email: lead.email }],
        company: lead.company,
        jobTitle: lead.role,
      });
    } catch (e) {
      console.warn('appendOrCreateContact (CRM) failed:', e);
    }

    // 2) ToolkitLeads — UPSERT: one row per email, no duplicate records.
    let isRepeat = !!repeatHint;
    try {
      const existing = await wixData.query(LOG_COLLECTION)
        .eq('email', lead.email)
        .limit(1)
        .find({ suppressAuth: true });

      if (existing.totalCount > 0) {
        isRepeat = true;
        const row = existing.items[0];
        row.downloads = (row.downloads || 1) + 1;
        row.repeat = true;
        row.first_name = lead.first_name || row.first_name;
        row.company = lead.company || row.company;
        row.role = lead.role || row.role;
        row.toolkit_name = toolkitName;
        row.toolkit_slug = toolkitSlug;
        row.last_download = new Date();
        const slugs = (row.toolkits_requested || '')
          .split(',').map(s => s.trim()).filter(Boolean);
        if (toolkitSlug && !slugs.includes(toolkitSlug)) slugs.push(toolkitSlug);
        row.toolkits_requested = slugs.join(', ');
        await wixData.update(LOG_COLLECTION, row, { suppressAuth: true });
      } else {
        await wixData.insert(LOG_COLLECTION, {
          first_name: lead.first_name,
          email: lead.email,
          company: lead.company,
          role: lead.role,
          toolkit_name: toolkitName,
          toolkit_slug: toolkitSlug,
          toolkits_requested: toolkitSlug || '',
          downloads: 1,
          repeat: false,
          last_download: new Date(),
        }, { suppressAuth: true });
      }
    } catch (e) {
      console.warn('ToolkitLeads upsert failed:', e);
    }

    // 3) Email sequence via Zapier (repeat flag drives the Email 2-5 filter).
    await fetch(ZAPIER_HOOK, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, toolkit_name: toolkitName, toolkit_slug: toolkitSlug, repeat: isRepeat }),
    });

    return { ok: true, repeat: isRepeat };
  }
);
