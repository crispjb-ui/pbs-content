/*
 * PBS Toolkit Landing Page — Velo page code
 * ------------------------------------------------------------------
 * Goal: remove the re-entry friction for returning leads.
 *   - First visit: lead fills a custom form -> we save their details in the
 *     browser (wix-storage local), POST to the Zapier catch hook (fires the
 *     5-email sequence), and log the download internally.
 *   - Return visit (any other toolkit): we recognize them and either PRE-FILL
 *     the form (they click once) or show a ONE-CLICK "get it instantly" button.
 *
 * Why a custom form (not the Wix Forms App):
 *   Wix Forms v2 doesn't let Velo hook the submit (onWixFormSubmitted TypeErrors,
 *   wixForms_onSubmit doesn't fire — confirmed in prior setup). A custom form of
 *   native inputs + a button gives full control of the click, which is what
 *   "remember me" requires. It calls the SAME Zapier hook the Automation used.
 *
 * ------------------------------------------------------------------
 * ONE-TIME EDITOR SETUP (add these native elements to the dynamic toolkit page
 * and give them these IDs, or change the IDs in CONFIG below):
 *
 *   Inputs (Add > Input):
 *     #inputFirstName   (Text input)
 *     #inputEmail       (Text input, type Email)
 *     #inputCompany     (Text input)
 *     #inputRole        (Text input or Dropdown)
 *   Button:
 *     #getButton        ("Get the Worksheet")
 *   Text / boxes (Add > Text, start hidden via Properties panel "Hidden on load"):
 *     #welcomeBack      (Text — "Welcome back, NAME…")
 *     #successMsg       (Text or Box — "Check your inbox in ~2 minutes")
 *     #errorMsg         (Text — validation / send errors)
 *     #editInfoLink     (Text/Button — "Not you? Enter different details")  [optional]
 *     #formBox          (the Box/Container holding the 4 inputs)            [optional, for one-click hide]
 *
 *   Dataset:
 *     The dynamic toolkit page already has a dataset bound to Toolkits.
 *     Set its ID to #toolkitDataset (or change CONFIG.datasetId).
 *
 *   Internal logging collection (CMS) — create once:
 *     Collection "ToolkitLeads" with fields:
 *       first_name (Text), email (Text), company (Text), role (Text),
 *       toolkit_name (Text), toolkit_slug (Text), repeat (Boolean)
 *     Permissions: allow "Anyone" / site visitors to ADD content
 *       (or move the insert to a backend .jsw — see HARDENING note at bottom).
 *
 *   Zapier: paste your live Catch Hook URL into CONFIG.zapierHook.
 * ------------------------------------------------------------------
 */

import { local } from 'wix-storage';
import { fetch } from 'wix-fetch';
import wixData from 'wix-data';

const CONFIG = {
  // PASTE your live Zapier Catch Hook URL here:
  zapierHook: 'https://hooks.zapier.com/hooks/catch/XXXXXXX/YYYYYYY/',

  // Set to true to HIDE the form for known visitors and show one-click instead.
  // false = pre-fill the form and let them click "Get the Worksheet" (recommended).
  oneClickForReturning: false,

  // Internal log collection (set '' to skip internal logging).
  logCollection: 'ToolkitLeads',

  storageKey: 'pbs_lead',
  datasetId: '#toolkitDataset',

  ids: {
    firstName: '#inputFirstName',
    email: '#inputEmail',
    company: '#inputCompany',
    role: '#inputRole',
    button: '#getButton',
    welcomeBack: '#welcomeBack',
    success: '#successMsg',
    error: '#errorMsg',
    editLink: '#editInfoLink',
    formBox: '#formBox',
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$w.onReady(() => {
  const id = CONFIG.ids;

  // ---- Resolve the current toolkit from the dynamic dataset ----
  let toolkitName = '';
  let toolkitSlug = '';
  const ds = $w(CONFIG.datasetId);
  if (ds && ds.onReady) {
    ds.onReady(() => {
      const item = ds.getCurrentItem();
      if (item) {
        toolkitName = item.title || item.name || '';
        toolkitSlug = item.slug || '';
      }
    });
  }

  // ---- Returning visitor? Pre-fill (and optionally one-click) ----
  const saved = safeParse(local.getItem(CONFIG.storageKey));
  const isReturning = !!(saved && saved.email);

  if (isReturning) {
    setVal(id.firstName, saved.first_name);
    setVal(id.email, saved.email);
    setVal(id.company, saved.company);
    setVal(id.role, saved.role);

    showText(id.welcomeBack, `Welcome back, ${saved.first_name || 'there'}. Get this one instantly:`);

    if (CONFIG.oneClickForReturning) {
      hide(id.formBox);                 // hide the inputs entirely
      setLabel(id.button, 'Get the worksheet instantly');
      show(id.editLink);                // "Not you? Enter different details"
    }
  }

  // "Not you?" — clear storage and reveal the form again
  if ($w(id.editLink)) {
    $w(id.editLink).onClick(() => {
      local.removeItem(CONFIG.storageKey);
      clearVal(id.firstName); clearVal(id.email); clearVal(id.company); clearVal(id.role);
      hide(id.welcomeBack); hide(id.editLink);
      show(id.formBox);
      setLabel(id.button, 'Get the Worksheet');
    });
  }

  // ---- Submit ----
  $w(id.button).onClick(async () => {
    hide(id.error);

    // If one-click for a known visitor, use stored values; else read inputs.
    const usingStored = CONFIG.oneClickForReturning && isReturning;
    const lead = usingStored ? saved : {
      first_name: getVal(id.firstName),
      email: getVal(id.email),
      company: getVal(id.company),
      role: getVal(id.role),
    };

    const problem = validate(lead);
    if (problem) { showText(id.error, problem); return; }

    setBusy(id.button, true);
    try {
      // Remember for next time
      local.setItem(CONFIG.storageKey, JSON.stringify(lead));

      // Fire the email sequence (same hook the Wix Automation used)
      await fetch(CONFIG.zapierHook, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, toolkit_name: toolkitName }),
      });

      // Internal log (non-blocking — never fail the user over logging)
      if (CONFIG.logCollection) {
        wixData.insert(CONFIG.logCollection, {
          first_name: lead.first_name,
          email: lead.email,
          company: lead.company,
          role: lead.role,
          toolkit_name: toolkitName,
          toolkit_slug: toolkitSlug,
          repeat: isReturning,
        }).catch((e) => console.warn('ToolkitLeads insert failed:', e));
      }

      hide(id.formBox);
      hide(id.welcomeBack);
      showText(id.success, `You're set, ${lead.first_name || ''}. The ${toolkitName || 'toolkit'} is on its way to ${lead.email} — check your inbox in about 2 minutes.`);
    } catch (err) {
      console.error('Toolkit submit failed:', err);
      showText(id.error, 'Something went wrong sending the toolkit. Please try again, or email team@rxbs.org.');
    } finally {
      setBusy(id.button, false);
    }
  });
});

// ---------- helpers ----------
function validate(lead) {
  if (!lead.first_name || !lead.first_name.trim()) return 'Please enter your first name.';
  if (!lead.email || !EMAIL_RE.test(lead.email)) return 'Please enter a valid email address.';
  if (!lead.company || !lead.company.trim()) return 'Please enter your company.';
  if (!lead.role || !lead.role.trim()) return 'Please enter your role.';
  return null;
}
function safeParse(s) { try { return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function getVal(sel) { const el = $w(sel); return el && el.value ? el.value.trim() : ''; }
function setVal(sel, v) { const el = $w(sel); if (el) el.value = v || ''; }
function clearVal(sel) { const el = $w(sel); if (el) el.value = ''; }
function show(sel) { const el = $w(sel); if (el && el.show) el.show(); }
function hide(sel) { const el = $w(sel); if (el && el.hide) el.hide(); }
function showText(sel, t) { const el = $w(sel); if (el) { if ('text' in el) el.text = t; el.show && el.show(); } }
function setLabel(sel, t) { const el = $w(sel); if (el && 'label' in el) el.label = t; }
function setBusy(sel, busy) { const el = $w(sel); if (!el) return; if (busy) { el.disable && el.disable(); } else { el.enable && el.enable(); } }

/*
 * ------------------------------------------------------------------
 * HARDENING (optional, do after launch):
 * The Zapier hook URL sits in client code above, so a bot could POST to it.
 * To hide it + control CMS inserts with elevated permissions, move both the
 * fetch and the wixData.insert into a backend web module and call it from here:
 *
 *   // backend/toolkitLead.jsw
 *   import { fetch } from 'wix-fetch';
 *   import wixData from 'wix-data';
 *   const HOOK = 'https://hooks.zapier.com/hooks/catch/XXXX/YYYY/';
 *   export async function submitLead(lead, toolkitName, toolkitSlug, repeat) {
 *     await fetch(HOOK, { method:'post', headers:{'Content-Type':'application/json'},
 *       body: JSON.stringify({ ...lead, toolkit_name: toolkitName }) });
 *     await wixData.insert('ToolkitLeads',
 *       { ...lead, toolkit_name: toolkitName, toolkit_slug: toolkitSlug, repeat },
 *       { suppressAuth: true });
 *   }
 *
 * Then in the page code:  import { submitLead } from 'backend/toolkitLead';
 * and replace the fetch + wixData.insert block with:
 *   await submitLead(lead, toolkitName, toolkitSlug, isReturning);
 * With the backend approach you can set the ToolkitLeads collection back to
 * admin-only insert (suppressAuth handles it server-side).
 * ------------------------------------------------------------------
 */
