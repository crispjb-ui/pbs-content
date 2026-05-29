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
 *     Permissions: admin-only insert is fine — the backend module writes with
 *       suppressAuth, so you do NOT need to allow public inserts.
 *
 *   Zapier: paste your live Catch Hook URL into CONFIG.zapierHook.
 * ------------------------------------------------------------------
 */

import { local } from 'wix-storage';
import { submitLead } from 'backend/toolkitLead';

// The Zapier hook, Wix Contacts (CRM) write, ToolkitLeads logging, and the
// repeat-detection all live in backend/toolkitLead.jsw. Paste your hook there.

const CONFIG = {
  // Set to true to HIDE the form for known visitors and show one-click instead.
  // false = pre-fill the form and let them click "Get the Worksheet" (recommended).
  oneClickForReturning: false,

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
      // Remember for next time (client-side, this browser/device)
      local.setItem(CONFIG.storageKey, JSON.stringify(lead));

      // Server-side: Wix Contact (CRM) + ToolkitLeads log + Zapier email
      // sequence, with robust repeat detection (skips Emails 2-5 on repeats).
      await submitLead(lead, toolkitName, toolkitSlug, isReturning);

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
 * This page code calls backend/toolkitLead.jsw (provided separately), which
 * does the Wix Contacts (CRM) write, the ToolkitLeads log, the Zapier POST, and
 * the repeat detection — all server-side. Benefits:
 *   - Zapier hook URL stays off the client.
 *   - CRM + CMS writes run with backend permissions (ToolkitLeads can be
 *     admin-only insert; suppressAuth handles it server-side).
 *   - `repeat` is decided server-side (email already in the log), so repeats are
 *     caught even on a new browser/device.
 * Paste your live Zapier hook into backend/toolkitLead.jsw, not here.
 * ------------------------------------------------------------------
 */
