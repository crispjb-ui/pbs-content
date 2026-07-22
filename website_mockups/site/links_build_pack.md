# /links Build Pack — `rxbs.org/links`

_Created Jul 22, 2026 (Brett-requested, from the meeting-capture video deployment discussion). The owned replacement for Linktree: the bio-link destination for the planned short-video accounts (YouTube Shorts, TikTok, Instagram/Facebook Reels) and any surface that only allows one URL. Traffic lands on rxbs.org where the LinkedIn Insight Tag builds the retargeting pool; per-platform UTMs on the bio URLs give clean attribution._

**Status:** BUILD-READY. No gates — nothing on this page is legal-adjacent or attested. Can be built any time; it only starts earning when the video accounts launch and their bios point here. Until this page is built, new bios point directly at `https://www.rxbs.org/toolkit-library` with the same UTMs.

## 1. SEO / page settings
- **Title tag:** `Links | Ginny Crisp, PharmD — Prescription Benefit Solutions`
- **Meta description:** `Start here: free Plan Sponsor Toolkits, the Benefit Blind Spots newsletter, and how to reach Prescription Benefit Solutions.`
- **URL slug:** `/links`
- **Index:** **OFF (noindex)** — this is a bio-link utility page, thin by design; the real pages it points to are the ones that should rank. (Wix: SEO panel → toggle "Let search engines index this page" off.)
- **Nav:** hidden from menu (crossed-eye in Site Pages & Menu, same as Thank You / RSO / Privacy).
- **Structured data:** none. Delete any JSON-LD inherited if the page is duplicated from another page.

## 2. Page structure (mobile-first — nearly all traffic is phone, 9:16 app referrals)
Single centered column, max width ~420px, generous vertical spacing, paper/white background per the site system. In order:

1. **Avatar circle** — the GC monogram circle used on the content-page bylines (swap to Ginny's headshot in the same pass as the byline-photo swap across glossary/CLL/FAQ/Standards).
2. **Name (H1):** `Ginny Crisp, PharmD` — Plex Sans SemiBold 24, Primary Blue #015880.
3. **One-liner** (16, gray #4D4D4D, centered): `Pharmacy benefits consulting for self-funded employers. We review hundreds of PBM contracts a year. Start here:`
4. **Four buttons** (full-width, Primary Blue #015880 background, white Plex Sans SemiBold 16, radius 8px, ~14px vertical padding, 12px gap between; label + smaller 13px regular sub-line inside each button):

| # | Button label | Sub-line | Link |
|---|---|---|---|
| 1 | Free Plan Sponsor Toolkits | Audit worksheets and frameworks, free download | `https://www.rxbs.org/toolkit-library` |
| 2 | Benefit Blind Spots | The free weekly deep dive on Substack | `https://benefitblindspots.substack.com` |
| 3 | Renewal Second Opinion | A fast independent read before you sign | `https://www.rxbs.org/renewal-second-opinion` |
| 4 | Request a Call | Our team replies within one business day | `https://www.rxbs.org/request-a-call` |

5. **Small text-link row** (13, gray, centered, dot-separated): `The Standards · PBM Glossary · FAQ` → `/standards` · `/glossary` · `/faq`
6. **Footer:** standard global footer (already carries the Privacy Policy link).

**Do not add more buttons.** Four is the cap; link hubs die from menu bloat. If something new must join (e.g., a live briefing registration in September), it REPLACES the weakest button for the campaign window rather than becoming a fifth.

## 3. Per-platform bio URLs (paste-ready — UTMs live on the BIO LINK, never on the page's own buttons)
```
YouTube:   https://www.rxbs.org/links?utm_source=youtube&utm_medium=social&utm_campaign=bio
TikTok:    https://www.rxbs.org/links?utm_source=tiktok&utm_medium=social&utm_campaign=bio
Instagram: https://www.rxbs.org/links?utm_source=instagram&utm_medium=social&utm_campaign=bio
Facebook:  https://www.rxbs.org/links?utm_source=facebook&utm_medium=social&utm_campaign=bio
X:         https://www.rxbs.org/links?utm_source=x&utm_medium=social&utm_campaign=bio
```
The page's internal buttons stay clean (no UTMs) so the landing UTM keeps the session attribution. X's bio currently points at rxbs.org directly; swapping it to the /links URL is optional and can wait until the page proves itself. LinkedIn stays as-is (its surface carries full link real estate already).

## 4. Post-live checklist
- [ ] Hidden from nav + noindex verified.
- [ ] Phone preview: all four buttons tappable above the fold or one short scroll; no horizontal overflow.
- [ ] Buttons verified against live URLs (all four targets are live as of Jul 22, 2026).
- [ ] Freshness-registry row added (conversion-page class, like request-a-call: refresh = button accuracy, not content depth; swap avatar to headshot when available).
- [ ] When the video accounts are created: paste the matching UTM bio URL into each profile (section 3).
