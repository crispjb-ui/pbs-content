/*
 * backend/callRequest.web.js — Velo WEB MODULE for the Request-a-Call form
 * ------------------------------------------------------------------------
 * Save in Wix as:  backend/callRequest.web.js
 * Frontend imports:  import { submitCallRequest } from 'backend/callRequest.web';
 * Spec: email_gated_toolkit/request_a_call_form_spec.md (Jul 3, 2026).
 * Mirrors backend/toolkitLead.web.js patterns (same CRM + CMS + hook shape).
 *
 * ONE-TIME SETUP BEFORE PASTE:
 *   1) Create CMS collection `CallRequests` with TEXT fields:
 *        first_name, email, company, topic, notes, source_url,
 *        matched_tier, matched_downloads   (+ Wix adds _createdDate)
 *      Permissions: "Anyone can submit" via code (suppressAuth used below).
 *   2) Paste the live Zapier Catch Hook URL below (create a 2-step Zap:
 *      Catch Hook -> Outlook "Send Email" to ginny@ + brett@ + admin,
 *      reply-to = {{email}}, subject per the spec; optionally + a Sheet row).
 *   3) TEST with a real submission before linking anything to the page.
 */

import { Permissions, webMethod } from 'wix-web-module';
import { fetch } from 'wix-fetch';
import wixData from 'wix-data';
import { contacts } from 'wix-crm-backend';

// PASTE your live Zapier Catch Hook URL here (the CALL-REQUEST hook, not the toolkit one):
const ZAPIER_CALL_HOOK = 'https://hooks.zapier.com/hooks/catch/XXXXXXX/ZZZZZZZ/';
const CALL_COLLECTION = 'CallRequests';
const LEADS_COLLECTION = 'ToolkitLeads';

export const submitCallRequest = webMethod(
  Permissions.Anyone,
  async (req) => {
    // req = { first_name, email, company, topic, notes, source_url }

    // 1) CRM — create/update the Wix Contact, tagged by label if available.
    try {
      await contacts.appendOrCreateContact({
        name: { first: req.first_name },
        emails: [{ email: req.email }],
        company: req.company,
      });
    } catch (e) {
      console.warn('appendOrCreateContact (CRM) failed:', e);
    }

    // 2) Match against ToolkitLeads by email so the alert carries history.
    let matchedTier = '';
    let matchedDownloads = 0;
    try {
      const hit = await wixData.query(LEADS_COLLECTION)
        .eq('email', req.email)
        .limit(1)
        .find({ suppressAuth: true });
      if (hit.totalCount > 0) {
        matchedTier = hit.items[0].tier || hit.items[0].branch || 'known lead';
        matchedDownloads = hit.items[0].downloads || 1;
        // Mark the lead row so the sales hour sees the raised hand.
        const row = hit.items[0];
        row.last_action = 'call-requested';
        await wixData.update(LEADS_COLLECTION, row, { suppressAuth: true });
      }
    } catch (e) {
      console.warn('ToolkitLeads match failed (non-fatal):', e);
    }

    // 3) CallRequests row (the record of the raised hand).
    try {
      await wixData.insert(CALL_COLLECTION, {
        first_name: req.first_name,
        email: req.email,
        company: req.company,
        topic: req.topic,
        notes: req.notes || '',
        source_url: req.source_url || '',
        matched_tier: matchedTier,
        matched_downloads: String(matchedDownloads),
      }, { suppressAuth: true });
    } catch (e) {
      console.error('CallRequests insert failed:', e);
    }

    // 4) Zapier — the instant alert (ginny@ + brett@ + admin, reply-to = lead).
    //    Subject building happens in Zapier from these fields.
    try {
      await fetch(ZAPIER_CALL_HOOK, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: req.first_name,
          email: req.email,
          company: req.company,
          topic: req.topic,
          notes: req.notes || '',
          source_url: req.source_url || '',
          matched_tier: matchedTier,
          matched_downloads: matchedDownloads,
        }),
      });
    } catch (e) {
      console.error('Zapier call-hook failed:', e);
      return { ok: false };
    }

    return { ok: true, matched: !!matchedTier };
  }
);
