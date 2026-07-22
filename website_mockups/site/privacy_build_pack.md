# /privacy Build Pack — `rxbs.org/privacy`

_Created Jul 22, 2026, the day after `/standards` went live. Counsel gate WAIVED (Brett decision, Jul 21, 2026); Ginny's signed attestation substitutes — the privacy companion attestation (`standards_independence_attestation.md` §1) covers the PHI paragraph and the address rule, CLEARED Jul 21. This page is the LAST gate before September LinkedIn ad spend: LinkedIn ads and Lead Gen Forms require a reachable privacy URL, and Wix Forms reference it for GDPR/CCPA._

**Copy of record:** `email_gated_toolkit/privacy_policy.md` — the page body runs from the `# Privacy Policy` heading through the end of the **Contact us** section. The trailing italic template note ("This privacy policy is provided as a template…") does NOT publish; it is a repo-side maintenance note. Build method: plain long-form Wix page; no design system, no chips, no hero band needed. A simple text page is correct for this archetype (Utility, not Content/Answer).

## 1. Two human inputs before publish (the only open decisions)
- [ ] **Business address:** fill `[STREET ADDRESS]` + `[ZIP]` in the Contact section with the business address of record. **Never the home address** — this is part of the attested companion language. Ginny/Brett pick which address publishes.
- [ ] **Dates:** set **Effective Date** and **Last Updated** to the actual publish date (both lines at the top of the policy).

Everything else was resolved Jul 16 (third-party list reconciled to the live stack) and attested Jul 21 (PHI paragraph). No other blanks remain.

## 2. SEO basics
- **Title tag:** `Privacy Policy | Prescription Benefit Solutions`
- **Meta description:** `How Prescription Benefit Solutions collects, uses, and protects information submitted through rxbs.org, our newsletters, and our Plan Sponsor Toolkit downloads.`
- **URL slug:** `/privacy` · **Canonical:** `https://www.rxbs.org/privacy` · **Indexable:** ON (standard for a privacy page).

## 3. Structured data
None. A privacy page is not a citation asset; Wix's default WebPage handling is sufficient. Do not paste any JSON-LD blocks, and if the page is duplicated from another page, delete any inherited blocks from the SEO panel.

## 4. Page structure
1. **H1:** `Privacy Policy`
2. **Dates line** directly under the H1: `Effective Date: [publish date]` / `Last Updated: [publish date]` (Plex Mono if the theme offers it; plain text is fine).
3. **Body:** the sections from the copy of record, each `##` heading as an H2, lists as lists, links live (the five third-party privacy-policy URLs open in a new tab).
4. **No lead-magnet CTA, no Keep-reading block, no closing CTA.** A privacy page that sells reads wrong; the only actionable line is `team@rxbs.org`, which appears in the policy text where it belongs.
5. **Footer/nav placement:** link the page from the site's global footer as `Privacy Policy` (small text). It does NOT go in the top nav and does NOT join the Resources dropdown.

## 5. Verbatim rule
The **PHI paragraph** ("We do not collect protected health information (PHI)… separate from this site.") and the **address rule** are attested language (Ginny's Jul 21 companion attestation): copy exactly; any wording change re-opens the attestation. The rest of the policy text was approved as written (Brett, Jul 16 approvals issue; gate waived Jul 21) and is not edited autonomously per the legal-adjacent rule — the annual review (pair it with the January attestation re-walk) is the designated edit window, plus immediately upon any material change in data practices (new analytics tool, new email vendor, new form field class).

## 6. Post-publish (run in order; tell Claude when it renders live)
- [ ] Search Console → request indexing for `/privacy`.
- [ ] **Re-add the suppressed Privacy hyperlinks** (dead-link rule lifts): the request-a-call microcopy privacy sentence, the thank-you footnote, and the Renewal Second Opinion form's underlined 'Privacy' word (OPEN_ITEMS flagged it — verify it now targets the live page).
- [ ] **Global footer:** add the `Privacy Policy` link site-wide (one footer edit).
- [ ] **Toolkit form surfaces:** confirm the toolkit landing-page form and the welcome-email footer reference `rxbs.org/privacy` where a privacy link belongs.
- [ ] Repo pass (Claude): freshness-registry row for `/privacy` (annual-cadence note, verbatim-lock note on the PHI paragraph); OPEN_ITEMS status flip; September ad-plan item updated to "privacy gate CLEARED."
- [ ] **September unblock:** LinkedIn Ads / Lead Gen Forms get `https://www.rxbs.org/privacy` as the privacy URL when the campaigns are built (`paid_ads_bank.md` is pre-launch; nothing auto-spends).
