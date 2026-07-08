/*
 * PBS Toolkit Landing Page — Velo page code
 * Custom native-input form (live path). useCustomForm:false reverts to the
 * legacy Wix Forms App. Role-segmented; size field visible to all, required
 * only for buyers. Guarded against double-click double-submits.
 * On success, redirects to /thank-you (CONFIG.thankYouPath) for the ads conversion.
 */

import { local } from 'wix-storage';
import { submitLead } from 'backend/toolkitLead.web';
import wixLocation from 'wix-location';

const CONFIG = {
  useCustomForm: true,
  oneClickForReturning: true,
  // FALSE = size field visible for everyone (no Wix-reflow gap); required only
  // for buyers via validate(); scorer ignores a non-buyer's answer.
  showSizeForBuyersOnly: false,

  storageKey: 'pbs_lead',
  datasetId: '#dynamicDataset',

  // On success, redirect here instead of the inline message: kills the phantom
  // box + gives the ads-conversion URL (rule: URL contains /thank-you). '' = keep inline.
  thankYouPath: '/thank-you',

  ids: {
    firstName: '#inputFirstName',
    email: '#inputEmail',
    company: '#inputCompany',
    role: '#inputRole',
    size: '#inputSize',
    sizeBox: '#sizeBox',
    button: '#getButton',
    welcomeBack: '#welcomeBack',
    success: '#successMsg',
    error: '#errorMsg',
    editLink: '#editInfoLink',
    formBox: '#formBox',
    legacyForm: '#form1',
    legacyMask: '#box19',
  },
};

// Branch a role label -> 'buyer' | 'partner' | 'nurture' by KEYWORD (mirrors the
// Zapier scorer), so dropdown wording/capitalization can vary safely.
function roleBranch(role) {
  const r = (role || '').toLowerCase();
  if (/broker|consult/.test(r)) return 'partner';
  if (/ceo|owner|president|cfo|finance|hr|benefits|people|manager|administrat/.test(r)) return 'buyer';
  return 'nurture';
}
const isBuyerRole = (role) => roleBranch(role) === 'buyer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$w.onReady(() => {
  const id = CONFIG.ids;
  let formCollapsed = false;   // one-click "Welcome back" hides inputs; size stays hidden too
  let submitting = false;      // blocks double-click double-submits (one POST per click)

  const inputEls = [id.firstName, id.email, id.company, id.role];
  const hideInputs = () => { inputEls.forEach(hide); hide(id.size); };
  const showInputs = () => { inputEls.forEach(show); };

  // ===== REVERT SWITCH =====
  if (!CONFIG.useCustomForm) {
    show(id.legacyForm); show(id.legacyMask);
    hideInputs(); hide(id.button); hide(id.welcomeBack);
    hide(id.success); hide(id.error); hide(id.editLink);
    return;
  }
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

  // ---- Returning visitor? ----
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
      hideInputs();
      formCollapsed = true;
      setLabel(id.button, 'Get the worksheet instantly');
      show(id.editLink);
    }
  }

  // ---- Size field visibility ----
  function syncSizeField() {
    if (formCollapsed) { hide(id.size); hide(id.sizeBox); return; }
    if (!CONFIG.showSizeForBuyersOnly) { show(id.sizeBox); show(id.size); return; }
    if (isBuyerRole(getVal(id.role))) {
      show(id.sizeBox); show(id.size);
    } else {
      clearVal(id.size);
      hide(id.size); hide(id.sizeBox);
    }
  }
  const roleEl = $w(id.role);
  if (roleEl && roleEl.onChange) roleEl.onChange(syncSizeField);
  syncSizeField();

  // "Not you?"
  const editEl = $w(id.editLink);
  if (editEl && editEl.onClick) {
    editEl.onClick(() => {
      local.removeItem(CONFIG.storageKey);
      clearVal(id.firstName); clearVal(id.email); clearVal(id.company); clearVal(id.role); clearVal(id.size);
      formCollapsed = false;
      hide(id.welcomeBack); hide(id.editLink);
      showInputs();
      syncSizeField();
      setLabel(id.button, 'Get the Worksheet');
    });
  }

  // ---- Submit ----
  $w(id.button).onClick(async () => {
    if (submitting) return;   // block rapid double-clicks — each submit is one Zapier POST = one email
    submitting = true;
    hide(id.error);

    if (!toolkitName) {
      const it = ds && ds.getCurrentItem && ds.getCurrentItem();
      if (it) { toolkitName = it.title_fld || it.title || it.name || ''; toolkitSlug = it.slug || ''; }
    }

    const usingStored = CONFIG.oneClickForReturning && isReturning;
    const lead = usingStored ? saved : {
      first_name: getVal(id.firstName),
      email: getVal(id.email),
      company: getVal(id.company),
      role: getVal(id.role),
      size: isBuyerRole(getVal(id.role)) ? getVal(id.size) : '',
    };

    const problem = validate(lead);
    if (problem) { showText(id.error, problem); submitting = false; return; }

    setBusy(id.button, true);
    try {
      local.setItem(CONFIG.storageKey, JSON.stringify(lead));
      await submitLead(lead, toolkitName, toolkitSlug, isReturning);

      // Success -> redirect to the shared thank-you page (also the ads-conversion URL).
      // local.setItem above already saved the returning-visitor memory, so one-click survives.
      if (CONFIG.thankYouPath) {
        wixLocation.to(CONFIG.thankYouPath);
        return;
      }
      hideInputs();
      hide(id.welcomeBack);
      showText(id.success, `You're set, ${lead.first_name || ''}. The ${toolkitName || 'toolkit'} is on its way to ${lead.email} — check your inbox in about 2 minutes.`);
    } catch (err) {
      console.error('Toolkit submit failed:', err);
      showText(id.error, 'Something went wrong sending the toolkit. Please try again, or email team@rxbs.org.');
    } finally {
      setBusy(id.button, false);
      submitting = false;
    }
  });
});

// ---------- helpers ----------
function validate(lead) {
  if (!lead.first_name || !lead.first_name.trim()) return 'Please enter your first name.';
  if (!lead.email || !EMAIL_RE.test(lead.email)) return 'Please enter a valid email address.';
  if (!lead.company || !lead.company.trim()) return 'Please enter your company.';
  if (!lead.role || !lead.role.trim()) return 'Please select your role.';
  if (isBuyerRole(lead.role) && (!lead.size || !lead.size.trim())) return 'Please select your number of employees.';
  return null;
}
function safeParse(s) { try { return s ? JSON.parse(s) : null; } catch (e) { return null; } }
function getVal(sel) { const el = $w(sel); return el && el.value ? el.value.trim() : ''; }
function setVal(sel, v) { const el = $w(sel); if (el) el.value = v || ''; }
function clearVal(sel) { const el = $w(sel); if (el) el.value = ''; }
function show(sel) { const el = $w(sel); if (el) { if (el.expand) el.expand(); else if (el.show) el.show(); } }
function hide(sel) { const el = $w(sel); if (el) { if (el.collapse) el.collapse(); else if (el.hide) el.hide(); } }
function showText(sel, t) { const el = $w(sel); if (el) { if ('text' in el) el.text = t; if (el.expand) el.expand(); else if (el.show) el.show(); } }
function setLabel(sel, t) { const el = $w(sel); if (el && 'label' in el) el.label = t; }
function setBusy(sel, busy) { const el = $w(sel); if (!el) return; if (busy) { el.disable && el.disable(); } else { el.enable && el.enable(); } }
