/*
 * PBS Toolkit Landing Page — Velo page code
 * ------------------------------------------------------------------
 * Goal: remove re-entry friction for returning leads, and prevent the
 * 5-email nurture from re-firing on repeats — WITHOUT losing the ability to
 * instantly revert to the proven Wix Forms App + Automation path.
 *
 *   - First visit: lead fills a custom form -> save details in the browser
 *     (wix-storage local), call backend submitLead (CRM + ToolkitLeads upsert +
 *     Zapier), show success.
 *   - Return visit: recognized via local storage -> ONE-CLICK "get it instantly"
 *     using saved details (CONFIG.oneClickForReturning = true). The backend
 *     upsert means a repeat click NEVER creates a duplicate internal record, and
 *     `repeat: true` makes Zapier send only Email 1 (the PDF), skipping 2-5.
 *
 * REVERT SWITCH (hidden rollback to the old form):
 *   CONFIG.useCustomForm controls which form is live on the page.
 *     true  = custom form active (this new flow); legacy Wix Forms App form hidden.
 *     false = custom form hidden; legacy Wix Forms App form shown, and the existing
 *             Wix Automation handles submissions exactly as it does today.
 *   To revert: set useCustomForm = false, click Publish. No data migration, no
 *   Zapier changes. Both forms live on the page; only one is ever visible, so only
 *   one path can fire (no double-sends).
 *
 * Why a custom form (not the Wix Forms App): Wix Forms v2 doesn't let Velo hook
 * the submit (onWixFormSubmitted TypeErrors, wixForms_onSubmit doesn't fire —
 * confirmed). A custom form of native inputs + a button gives full control of the
 * click, which "remember me" + one-click require. It calls the SAME Zapier hook.
 *
 * ------------------------------------------------------------------
 * ONE-TIME EDITOR SETUP (add these native elements to the dynamic toolkit page
 * and give them these IDs, or change the IDs in CONFIG below):
 *
 *   Inputs (Add > Input):
 *     #inputFirstName   (Text input)
 *     #inputEmail       (Text input, type Email)
 *     #inputCompany     (Text input)
 *     #inputRole        (Dropdown) — options, EXACT strings (scorer keys on them):
 *                         CEO / Owner
 *                         CFO / Finance leader
 *                         HR / Benefits leader
 *                         Benefits / plan manager
 *                         Broker / Consultant
 *                         Other (TPA / pharmacy / vendor)
 *     #inputSize        (Dropdown) — buyer-only; options, EXACT strings:
 *                         Fewer than 100
 *                         100–499
 *                         500–2,499
 *                         2,500–9,999
 *                         10,000+
 *     #sizeBox          (Box wrapping #inputSize) — set "Collapsed on load".
 *                         Shows only when Role is a buyer; hidden for Broker/Other.
 *   Button:
 *     #getButton        ("Get the Worksheet")
 *   Text / boxes (set "Collapsed on load" in the Properties panel):
 *     #welcomeBack #successMsg #errorMsg #editInfoLink
 *   Also set the OLD form #form1 to "Collapsed on load" (custom form shows by default;
 *   the revert flag expands #form1 and collapses the custom form).
 *   Legacy form (KEEP IT ON THE PAGE for revert):
 *     #wixFormsApp      — the original Wix Forms App form element. Leave it placed
 *                         on the page; this code shows/hides it via the revert flag.
 *   Dataset:
 *     The dynamic toolkit page's Toolkits dataset, ID #toolkitDataset.
 *
 *   Internal logging collection (CMS) — create/confirm fields once:
 *     Collection "ToolkitLeads":
 *       first_name (Text), email (Text), company (Text), role (Text), size (Text),
 *       toolkit_name (Text), toolkit_slug (Text),
 *       toolkits_requested (Text), downloads (Number), repeat (Boolean),
 *       last_download (Date and Time)
 *     Permissions: admin-only insert is fine — backend writes with suppressAuth.
 *
 *   Zapier: paste your live Catch Hook URL into backend/toolkitLead.jsw.
 * ------------------------------------------------------------------
 */

import { local } from 'wix-storage';
import { submitLead } from 'backend/toolkitLead.web';

const CONFIG = {
  // ---- REVERT SWITCH ----  true = new custom form ; false = old Wix Forms App form.
  // To roll back: set false, Publish. (See header.)
  useCustomForm: true,

  // For a recognized returning visitor: true = one-click instant (hide inputs),
  // false = pre-fill the form and let them click. Backend upsert prevents any
  // duplicate internal record either way.
  oneClickForReturning: true,

  // Hide the size field for non-buyers? Wix's classic editor would not reflow the
  // button up when it collapsed (it left a gap), so default is FALSE = the size
  // field stays visible for everyone. validate() still REQUIRES it only for buyers,
  // and the scorer ignores a non-buyer's answer, so data quality is unchanged.
  // Flip to true ONLY inside a layout that reflows on collapse (e.g. a Wix Studio
  // vertical stack).
  showSizeForBuyersOnly: false,

  storageKey: 'pbs_lead',
  datasetId: '#dynamicDataset',   // your existing dataset ID

  ids: {
    firstName: '#inputFirstName',
    email: '#inputEmail',
    company: '#inputCompany',
    role: '#inputRole',         // Dropdown — the 6 roles in ROLES below
    size: '#inputSize',         // Dropdown — the 5 size bands; BUYER roles only
    sizeBox: '#sizeBox',        // wrapper around #inputSize (collapsed for non-buyers); set "Collapsed on load"
    button: '#getButton',
    welcomeBack: '#welcomeBack',
    success: '#successMsg',
    error: '#errorMsg',
    editLink: '#editInfoLink',
    formBox: '#formBox',    // deprecated/unused — fields are ungrouped so the layout can reflow
    legacyForm: '#form1',   // your existing Wix Forms App form = revert target (ID is form1)
    legacyMask: '#box19',   // container box masking #form1's un-hideable hidden fields; collapses with the old form
  },
};

// Branch a role label -> 'buyer' | 'partner' | 'nurture' by KEYWORD, not exact
// text, so the dropdown wording/capitalization can vary ("CFO / Finance Leader"
// vs "...leader", "HR" vs "HR Director") without breaking the buyer-only size
// field. Mirrors the Zapier scorer's roleKey() so the two never disagree.
function roleBranch(role) {
  const r = (role || '').toLowerCase();
  if (/broker|consult/.test(r)) return 'partner';
  if (/ceo|owner|president|cfo|finance|hr|benefits|people|manager|administrat/.test(r)) return 'buyer';
  return 'nurture';   // "Other (TPA / pharmacy / vendor)" and anything unrecognized
}
const isBuyerRole = (role) => roleBranch(role) === 'buyer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$w.onReady(() => {
  const id = CONFIG.ids;
  let formCollapsed = false;   // true when one-click "Welcome back" hides the inputs; size must stay hidden too

  // Show/hide the input fields together WITHOUT needing the #formBox group, so the
  // fields can be ungrouped in the Editor (ungrouping lets Wix reflow the layout
  // when #inputSize collapses). Replaces the old hide(#formBox)/show(#formBox).
  const inputEls = [id.firstName, id.email, id.company, id.role];
  const hideInputs = () => { inputEls.forEach(hide); hide(id.size); };
  const showInputs = () => { inputEls.forEach(show); };   // size handled by syncSizeField()

  // ===== REVERT SWITCH =====
  // If the custom form is OFF, restore the old path: show the Wix Forms App form,
  // hide every custom element, and stop. The Wix Automation handles the rest.
  if (!CONFIG.useCustomForm) {
    show(id.legacyForm); show(id.legacyMask);   // bring the old form + its mask back together
    hideInputs(); hide(id.button); hide(id.welcomeBack);
    hide(id.success); hide(id.error); hide(id.editLink);
    return;
  }
  // Custom form ON: collapse the legacy form AND its masking box so neither shows
  // (and the mask can't float over the new form). Only one path can ever fire.
  hide(id.legacyForm); hide(id.legacyMask);

  // ---- Resolve the current toolkit from the dynamic dataset ----
  let toolkitName = '';
  let toolkitSlug = '';
  const ds = $w(CONFIG.datasetId);
  if (ds && ds.onReady) {
    ds.onReady(() => {
      const item = ds.getCurrentItem();
      if (item) {
        toolkitName = item.title_fld || item.title || item.name || '';
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
    setVal(id.size, saved.size);

    showText(id.welcomeBack, `Welcome back, ${saved.first_name || 'there'}. Get this one instantly:`);

    if (CONFIG.oneClickForReturning) {
      hideInputs();                     // hide the inputs entirely
      formCollapsed = true;             // keep the size field hidden in this state
      setLabel(id.button, 'Get the worksheet instantly');
      show(id.editLink);                // "Not you? Enter different details"
    }
  }

  // ---- Size field visibility ----
  // Default (showSizeForBuyersOnly = false): the size field stays visible for
  // everyone (no collapse, so no Wix-reflow gap). validate() still requires it
  // only for buyers; the scorer ignores a non-buyer's answer.
  // If the flag is true (only inside a reflowing layout), it shows for buyers and
  // collapses for Broker/Other.
  function syncSizeField() {
    if (formCollapsed) { hide(id.size); hide(id.sizeBox); return; }   // one-click "Welcome back" state
    if (!CONFIG.showSizeForBuyersOnly) { show(id.sizeBox); show(id.size); return; }
    if (isBuyerRole(getVal(id.role))) {
      show(id.sizeBox); show(id.size);
    } else {
      clearVal(id.size);   // drop any stale value so non-buyers submit size empty
      hide(id.size); hide(id.sizeBox);
    }
  }
  const roleEl = $w(id.role);
  if (roleEl && roleEl.onChange) roleEl.onChange(syncSizeField);
  syncSizeField();   // set initial state (handles returning-visitor prefilled role)

  // "Not you?" — clear storage and reveal the form again (optional element; safe if absent)
  const editEl = $w(id.editLink);
  if (editEl && editEl.onClick) {
    editEl.onClick(() => {
      local.removeItem(CONFIG.storageKey);
      clearVal(id.firstName); clearVal(id.email); clearVal(id.company); clearVal(id.role); clearVal(id.size);
      formCollapsed = false;   // form is visible again
      hide(id.welcomeBack); hide(id.editLink);
      showInputs();
      syncSizeField();   // re-evaluate size visibility now that the form is shown
      setLabel(id.button, 'Get the Worksheet');
    });
  }

  // ---- Submit ----
  $w(id.button).onClick(async () => {
    hide(id.error);

    // Safety: ensure we have the current toolkit (covers a very fast click
    // before the dataset onReady closure above has run).
    if (!toolkitName) {
      const it = ds && ds.getCurrentItem && ds.getCurrentItem();
      if (it) { toolkitName = it.title_fld || it.title || it.name || ''; toolkitSlug = it.slug || ''; }
    }

    // If one-click for a known visitor, use stored values; else read inputs.
    const usingStored = CONFIG.oneClickForReturning && isReturning;
    const lead = usingStored ? saved : {
      first_name: getVal(id.firstName),
      email: getVal(id.email),
      company: getVal(id.company),
      role: getVal(id.role),
      // BUYER roles only; empty for Broker/Other (the scorer skips the size add)
      size: isBuyerRole(getVal(id.role)) ? getVal(id.size) : '',
    };

    const problem = validate(lead);
    if (problem) { showText(id.error, problem); return; }

    setBusy(id.button, true);
    try {
      // Remember for next time (client-side, this browser/device)
      local.setItem(CONFIG.storageKey, JSON.stringify(lead));

      // Server-side: Wix Contact (CRM) + ToolkitLeads UPSERT (one row per email,
      // no duplicates) + Zapier email sequence, with server-side repeat detection
      // (repeats get Email 1 only).
      await submitLead(lead, toolkitName, toolkitSlug, isReturning);

      hideInputs();
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
  if (!lead.role || !lead.role.trim()) return 'Please select your role.';
  // Size is required only for BUYER roles (the field is hidden for everyone else).
  if (isBuyerRole(lead.role) && (!lead.size || !lead.size.trim())) return 'Please select your number of employees.';
  return null;
}
function safeParse(s) { try { return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function getVal(sel) { const el = $w(sel); return el && el.value ? el.value.trim() : ''; }
function setVal(sel, v) { const el = $w(sel); if (el) el.value = v || ''; }
function clearVal(sel) { const el = $w(sel); if (el) el.value = ''; }
// Use collapse/expand (removes layout space, no gap) with hide/show as fallback.
function show(sel) { const el = $w(sel); if (el) { if (el.expand) el.expand(); else if (el.show) el.show(); } }
function hide(sel) { const el = $w(sel); if (el) { if (el.collapse) el.collapse(); else if (el.hide) el.hide(); } }
function showText(sel, t) { const el = $w(sel); if (el) { if ('text' in el) el.text = t; if (el.expand) el.expand(); else if (el.show) el.show(); } }
function setLabel(sel, t) { const el = $w(sel); if (el && 'label' in el) el.label = t; }
function setBusy(sel, busy) { const el = $w(sel); if (!el) return; if (busy) { el.disable && el.disable(); } else { el.enable && el.enable(); } }

/*
 * ------------------------------------------------------------------
 * Calls backend/toolkitLead.jsw, which does the Wix Contacts (CRM) write, the
 * ToolkitLeads UPSERT (one row per email), the Zapier POST, and repeat detection
 * — all server-side. Paste your live Zapier hook into the backend file, not here.
 * ------------------------------------------------------------------
 */
