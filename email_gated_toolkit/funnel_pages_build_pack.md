# Funnel Pages Build Pack — Request-a-Call + Thank-You

**Created:** Jul 6, 2026. Assembly-ready content for the two funnel pages that unblock the July website build. The **Velo code already exists** (`velo_call_request_page_code.js` + `velo_backend_callRequest.web.js`), so this pack is the *visible page + config* layer: paste-ready copy, form/element spec, schema, and the two emails. Specs of record: `request_a_call_form_spec.md` and (thank-you) the redirect/conversion decision in `WIX_SETUP_TODO.md`.

Both pages use the toolkit-landing visual system (PBS v2: Primary Blue #015880, Accent Blue #A7E0FA, Gray #4D4D4D, IBM Plex Sans). Public-surface naming rule applies: spell out **Prescription Benefit Solutions** and use **www.rxbs.org**.

---

# PAGE 1 — Request-a-Call · `rxbs.org/request-a-call`

Archetype: Utility/Conversion. Job: low-friction call request, **no calendar/scheduler** (Ginny's admin arranges by email). Replaces the mailto: dead-ends.

## 1a. Element IDs (MUST match the Velo page code exactly)

The #1 failure mode on Wix forms is mismatched element IDs (see the `WIX_SETUP_TODO.md` graveyard). Set each element's ID in its Properties panel to exactly these:

| Element | ID | Type |
|---|---|---|
| First name | `#inFirstName` | Text input |
| Work email | `#inEmail` | Text input (email) |
| Company | `#inCompany` | Text input |
| Topic | `#ddTopic` | Dropdown |
| Notes / timing | `#inNotes` | Text box (multiline) |
| Submit | `#btnSubmit` | Button |
| Success message | `#txtConfirm` | Text (start hidden) |
| Error message | `#txtError` | Text (start hidden) |

**Dropdown `#ddTopic` choices** (value = label; must match the Velo `TOPIC_MAP` labels):
`Contract review` · `Renewal second opinion` · `Pharmacy Benefits Review` · `Broker/consultant partnership` · `Something else`

`?topic=` deep-link values that pre-select the dropdown: `contract-review`, `renewal-second-opinion`, `pharmacy-benefits-review`, `broker-partnership`, `general`.

## 1b. Paste-ready page copy

**Eyebrow:** REQUEST A CALL

**H1:** Request a call.

**Subhead:** Tell us what you are trying to figure out. Someone from Prescription Benefit Solutions who actually reads these contracts will email you within one business day to find a time. No sales sequence, no scheduler to wrestle with.

**Form field labels + placeholders:**
- First name
- Work email
- Company
- What would you like to talk through? _(dropdown)_
- Anything we should know before the call? _(placeholder: "A few sentences on your situation, and whether mornings or afternoons generally work better.")_

**Button:** Request a call

**Success message (`#txtConfirm`):** Got it. Someone from our team will email you within one business day to find a time that works. Talk soon.

**Error message (`#txtError`):** Something went wrong sending that. Email us directly at team@rxbs.org and we will take it from there.

**Under-form reassurance line:** We review hundreds of PBM contracts a year. This is a conversation, not a pitch.

**Secondary option line:** Prefer email? Reach us anytime at team@rxbs.org.

**Privacy microcopy:** We use your email only to arrange the call. [Privacy](https://www.rxbs.org/privacy).

> ✅ **RESOLVED Jul 22, 2026 — `/privacy` is LIVE.** The "Privacy" word is hyperlinked to `https://www.rxbs.org/privacy` on the live request-a-call microcopy and the thank-you footnote (re-added the day the page published). The Jul 8 suppress-the-link note below this line is historical only.

## 1c. JSON-LD schema (paste into Wix SEO Settings → this page → Advanced → Structured data markup)

```
{"@context":"https://schema.org","@type":"ContactPage","name":"Request a Call — Prescription Benefit Solutions","url":"https://www.rxbs.org/request-a-call","description":"Request a call with Prescription Benefit Solutions to talk through a PBM contract review, renewal second opinion, or pharmacy benefits review.","isPartOf":{"@type":"WebSite","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"about":{"@type":"Organization","@id":"https://www.rxbs.org/#organization"}}
```

## 1d. CMS collection to create first — `CallRequests`

TEXT fields (Velo writes these; permissions "Anyone can submit" handled in code via suppressAuth):
`first_name` · `email` · `company` · `topic` · `notes` · `source_url` · `matched_tier` · `matched_downloads` _(Wix adds `_createdDate`)_

## 1e. The two emails (Zapier Catch Hook → Outlook)

**Notification** → ginny@rxbs.org + admin + brett@ (reply-to = requester):

> **Subject:** [CALL REQUEST - {{topic}}] {{first_name}}, {{company}}{{tier_suffix}}
>
> New call request from the website.
>
> Name: {{first_name}}
> Company: {{company}}
> Email: {{email}}  (reply directly to this email to reach them)
> Topic: {{topic}}
> Notes / timing: {{notes}}
> {{matched_block}}  ← when matched to a toolkit lead: "Existing lead — tier {{matched_tier}}, {{matched_downloads}} downloads."
> Source: {{source_url}}
> Submitted: {{_createdDate}}

`tier_suffix` = ` - SQL lead, {{matched_downloads}} downloads` when matched, else empty.

**Confirmation** → requester (immediate):

> **Subject:** We got your request — Prescription Benefit Solutions
>
> Hi {{first_name}},
>
> Thanks for reaching out. Someone from our team will email you within one business day to find a time that works for a call.
>
> If it is easier, just reply to this email with anything else you would like us to know beforehand.
>
> Talk soon,
> The team at Prescription Benefit Solutions
> team@rxbs.org · www.rxbs.org

## 1f. Build checklist (Wix)

- [ ] Create the `CallRequests` CMS collection (fields above).
- [ ] Build the page at `/request-a-call`; add the 5 inputs + button + 2 hidden text elements; set the **exact element IDs** in 1a.
- [ ] Paste `velo_call_request_page_code.js` into the page's Velo panel; paste `velo_backend_callRequest.web.js` as `backend/callRequest.web.js`.
- [ ] Create the 2-step Zapier Zap (Catch Hook → Outlook notification + confirmation); paste the live hook URL into the backend file's `ZAPIER_CALL_HOOK`.
- [ ] Paste the JSON-LD (1c). Leave the page **indexable** (unlike the thank-you page).
- [ ] **Test with a real submission** before linking anything to it. Confirm: CMS row written, notification lands with reply-to set, confirmation email arrives.
- [ ] Only after it renders live + tests clean: Claude sweeps the mailto: CTAs (emails 5/7/8, role plan §5, broker track) to `?topic=` deep links.

---

# PAGE 2 — Thank-You · `rxbs.org/thank-you`

Job: the post-submit confirmation the toolkit forms redirect to (fixes the "phantom box" UX bug) **and** the stable URL the LinkedIn ad conversion fires on. **One generic page serves every toolkit** (keep it toolkit-agnostic so it works for all `/toolkit/<slug>` forms). Visual reference: `landing_pages/thank_you_template.html` (genericize its Channel-Pricing text with the copy below).

## 2a. Page setup
- **noindex:** in Wix SEO Settings for this page, turn **off** "Let search engines index this page" (it is a post-conversion page, not a content page).
- No form; static content. Build in the Wix editor from the template's visual design + the copy below.

## 2b. Paste-ready copy (toolkit-agnostic)

**H1:** Your toolkit is on the way

**Lede:** Check your inbox in the next couple of minutes. Your Plan Sponsor Toolkit is on its way as a PDF you can print, save, or share with your broker.

**What happens next** _(numbered list)_
1. **Right now:** an email from team@rxbs.org with your download link. If it is not there in 5 minutes, check spam or junk.
2. **Day 2:** a second worksheet on a different PBM mechanic. Same format, new angle.
3. **Day 5:** a Field Note from Benefit Blind Spots, paired to the framework you just downloaded.
4. **Day 9:** an invitation to The Pharmacy Benefits Briefing, the weekly executive briefing on LinkedIn.
5. **Day 14:** the two ways forward. Stay free with the publication, or talk with us about a PBM contract review.

> ⚠ **KEEP IN SYNC WITH THE EMAIL FLOW.** This "What happens next" list narrates the live Day 0/2/5/9/14 sequence, so any change to the email flow/offers must update this page in the same pass. **Known pending change:** when Email 5 flips to the v2 "THREE Ways Forward" (`05_two_ways_forward.md` v2, activates when `/renewal-second-opinion` is live ~Aug 15), update item 5 to: *"**Day 14:** the three ways forward. Stay free, get a fast Renewal Second Opinion, or run a full PBM contract review."* Same rule applies to any future cadence/offer edit (new day, changed offer, added rung).

**Secondary CTA — "Get the weekly publication free":** Benefit Blind Spots ships a deep dive every Monday and a tactical Field Note every Thursday. Subscribe before the next email arrives.
Button → `https://benefitblindspots.substack.com?utm_source=wix&utm_medium=thank-you&utm_campaign=toolkit-thankyou`

**Footnote:** Email did not arrive? Reply to team@rxbs.org with your address and we will resend. We use the email you provided only to deliver the toolkit and an occasional update; unsubscribe anytime. [Privacy](https://www.rxbs.org/privacy).

**Footer:** Prescription Benefit Solutions · Charleston, SC · team@rxbs.org · www.rxbs.org · benefitblindspots.substack.com

## 2c. Wire the redirect + the conversion (the payoff)
- [ ] In each toolkit form's success behavior, set **redirect → `/thank-you`** (replaces the inline success message; kills the phantom-box bug).
- [ ] Then create the LinkedIn conversion (URL-based, no code): Campaign Manager → **Measurement → Conversion tracking → Create conversion** → name `Toolkit Lead` → **by URL, URL contains `/thank-you`** → default attribution → associate with the ad account. (Insight Tag `9364474` is already live.) Test one submission registers it before any ad spend.
- [ ] Full steps mirrored in `WIX_SETUP_TODO.md` (the phantom-box + conversion-event items).

---

_When both pages render live: mark the `request_a_call_form_spec.md` §6 checklist and the `WIX_SETUP_TODO.md` conversion items, then run the mailto sweep._
