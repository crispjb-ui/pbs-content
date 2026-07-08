/*
 * PAGE CODE for rxbs.org/request-a-call — paste into the page's Velo panel.
 * Spec: email_gated_toolkit/request_a_call_form_spec.md.
 *
 * EXPECTED ELEMENT IDs on the page (set in each element's Properties panel):
 *   #inFirstName  (text input)      #inEmail    (text input, email)
 *   #inCompany    (text input)      #ddTopic    (dropdown)
 *   #inNotes      (text box / multiline)
 *   #btnSubmit    (button)          #txtConfirm (text, hidden: the success message)
 *   #txtError     (text, hidden: the failure message)
 *
 * Dropdown #ddTopic choices (value = label is fine):
 *   "Contract review" | "Renewal second opinion" | "Pharmacy Benefits Review" |
 *   "Broker/consultant partnership" | "Something else"
 *
 * ?topic= pre-select values → dropdown mapping:
 *   contract-review, renewal-second-opinion, pharmacy-benefits-review,
 *   broker-partnership, general
 */

import { submitCallRequest } from 'backend/callRequest.web';
import wixLocation from 'wix-location';

const TOPIC_MAP = {
  'contract-review': 'Contract review',
  'renewal-second-opinion': 'Renewal second opinion',
  'pharmacy-benefits-review': 'Pharmacy Benefits Review',
  'broker-partnership': 'Broker/consultant partnership',
  'general': 'Something else',
};

$w.onReady(() => {
  $w('#txtConfirm').hide();
  $w('#txtError').hide();

  // Pre-select the topic from ?topic= (per the spec's contextual CTA links).
  const q = wixLocation.query || {};
  if (q.topic && TOPIC_MAP[q.topic]) {
    $w('#ddTopic').value = TOPIC_MAP[q.topic];
    // Setting .value in code trips Wix's required-field indicator ("Please select
    // an item in the list") even though a value IS selected. Reset it so a deep-link
    // visitor doesn't see a red error on a filled field; it returns on real interaction/submit.
    if ($w('#ddTopic').resetValidityIndication) $w('#ddTopic').resetValidityIndication();
  }

  $w('#btnSubmit').onClick(async () => {
    // Minimal validation; keep friction near zero per the spec.
    const first = ($w('#inFirstName').value || '').trim();
    const email = ($w('#inEmail').value || '').trim();
    const company = ($w('#inCompany').value || '').trim();
    if (!first || !email.includes('@') || !company) {
      $w('#txtError').text = 'Please add your name, work email, and company so our team can reply.';
      $w('#txtError').show();
      return;
    }
    $w('#txtError').hide();
    $w('#btnSubmit').disable();
    $w('#btnSubmit').label = 'Sending...';

    const res = await submitCallRequest({
      first_name: first,
      email: email,
      company: company,
      topic: $w('#ddTopic').value || 'Something else',
      notes: ($w('#inNotes').value || '').trim(),
      source_url: wixLocation.url,
    });

    if (res && res.ok) {
      // The confirmation that matches the real workflow (admin schedules by email).
      $w('#txtConfirm').text = 'Got it. Someone from our team will email you within one business day to find a time.';
      $w('#txtConfirm').show();
      $w('#btnSubmit').label = 'Sent';
      // Optional: conversion-event URL state for the Insight Tag / analytics.
      // wixLocation.to('/request-a-call-thank-you');  // enable if the thank-you page is built
    } else {
      $w('#txtError').text = 'Something went wrong on our end. Email team@rxbs.org and a human will reply.';
      $w('#txtError').show();
      $w('#btnSubmit').enable();
      $w('#btnSubmit').label = 'Request a call';
    }
  });
});
