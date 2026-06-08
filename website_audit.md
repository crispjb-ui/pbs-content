# rxbs.org Website Audit — Funnel, Engagement, Reach

**June 2026.** Based on Ginny's screenshots (homepage full scroll + Toolkit Library) + the search-indexed snapshot. Live crawl blocked by Wix (403), so a couple of items (mobile layout, exact SEO fields) need a confirm. Goal: turn a brochure one-pager into a funnel that captures leads and feeds the content engine's reach.

## Current state
- **Homepage** = one continuous scroll: Hero ("TRANSPARENCY MATTERS") → Our Solutions (6 services) → Our Story → Meet the Team (PharmD-led, real) → Contact form. Plus a "Chat with us" widget.
- **"More" menu** → a **Toolkit Library** (`/toolkit-library`, exists but **unfinished**: the "Start Here / Foundational Frameworks" Tier-1 cards are empty; Tier-2 worksheet cards render with **low-contrast light-on-teal text**) and a **blank Newsletter page**.
- **Search index** shows only 4 pages, three with the default Wix title **"Mysite."**

The good news: the toolkit lead-magnets, a real credentialed team, and the right "transparency" positioning all exist. They're just hidden and half-built.

---

## 🔴 Critical quick wins

1. **Kill the "Mysite" page titles.** Services / Our Solutions / Submit a Request show Wix's default "Mysite" in search. Set a real title + meta on every page (paste-ready set below). Highest impact-to-effort on the site.
2. **Add a CTA button to the hero.** It says "take the first step today" with nothing to click. The only paths are the bottom contact form + chat. Add a primary button → the Toolkit Library, and a secondary → Contact.
3. **Promote the Toolkit Library out of "More" into the MAIN nav** (label it "Free Tools" or "Resources"). It's your entire top-of-funnel; right now it's three clicks deep and unindexed.
4. **Finish the Toolkit Library page:** populate the empty Tier-1 "Foundational Frameworks" cards, and fix card legibility (the light text on light teal fails the readability bar — use Primary Blue text or a white card).
5. **Build the blank Newsletter page** (embed the Substack/LinkedIn newsletter signup). A blank page in the nav is worse than no page.

## 🟡 Funnel support

6. **Surface the toolkits + newsletter ON the homepage.** Add a "Free Tools" teaser block (3 worksheet cards → Toolkit Library) and a newsletter signup block to the scroll. The front door currently hides the funnel.
7. **Reframe the close.** "Contact / general inquiries" → an explicit offer: **"Book a free 20-minute PBM contract gut-check."** Tie the form to the speed-to-lead alert (brett@/ginny@) from `closing_layer_spec.md`. (Note: the gated-toolkit funnel uses its own Wix form per `email_gated_toolkit/`; the homepage contact form should feed the same alert/pipeline.)
8. **Connect Toolkit Library cards to the role funnel** — each "Get the Worksheet" already routes to a `rxbs.org/toolkit/<slug>` landing page; make sure all are wired and indexed.

## 🟢 Trust + reach

9. **Add proof.** "Our Story" is generic ("significant savings," "good hands"). Add the unfakeable anchors: **"We review hundreds of PBM contracts a year,"** the "as seen on" line (Wendell Potter's podcast, Derms on Drugs), and any client outcomes/testimonials. This is what converts a skeptical CFO.
10. **Use the team section.** Real PharmD credentials are a strength. Add 1-2 line bios, **LinkedIn links** (especially Ginny's — the newsletter/authority), so the team reads as the experts they are.
11. **Email capture everywhere.** Newsletter signup ("The Pharmacy Benefits Briefing") in the footer + on the homepage, for visitors not ready to talk.
12. **Social links.** Only a lone LinkedIn icon in Contact. Add LinkedIn (Ginny), X (@ginny_crisp), Substack to the footer.
13. **SEO foundation.** Real titles/metas (below); add the toolkit + library + newsletter pages to the sitemap and index them; target buyer search terms ("PBM audit," "PBM contract review," "pharmacy benefits consultant self-funded"). Consider mirroring 1-2 Substack deep dives as on-site articles so rxbs.org ranks, not just Substack.
14. **Confirm mobile** (no mobile shot yet) — the empty whitespace blocks and the long contact form often break on mobile.

## The shape to move toward
Nav: **Home · Free Tools · Our Solutions · Insights · Our Team · Book a Review** (Toolkit Library + Newsletter promoted out of "More"). Homepage scroll: Hero **with CTA** → Free Tools teaser → Solutions → Proof/As-seen-on → Newsletter capture → Team (with bios/links) → Book a gut-check.

---

## Paste-ready fixes

### Page titles + meta descriptions (fixes the "Mysite" problem today)
> **Home** — Title: `PBM Contract Audits for Self-Funded Employers | Prescription Benefit Solutions` · Meta: `Independent PBM contract audits, claims reviews, and cost-containment consulting for self-funded employers. We review hundreds of PBM contracts a year. Charleston, SC.`
> **Our Solutions** — Title: `PBM Audits, Contract Reviews & Pharmacy Benefit Consulting | PBS` · Meta: `PBM performance audits, contract review and negotiation, PBM comparisons, and pharmacy benefit reviews for self-funded employers and brokers.`
> **Our Story** — Title: `About PBS | Transparency-Driven PBM Consulting | Prescription Benefit Solutions` · Meta: `Clinical pharmacists helping self-funded employers cut pharmacy spend through independent PBM audits and transparent cost containment. Charleston, SC.`
> **Meet the Team** — Title: `Our Team | PharmD-Led PBM Experts | Prescription Benefit Solutions` · Meta: `Meet the clinical pharmacists and account team behind PBS, led by Ginny Crisp, PharmD, reviewing hundreds of PBM contracts a year for self-funded employers.`
> **Contact** — Title: `Book a PBM Contract Gut-Check | Contact Prescription Benefit Solutions` · Meta: `Talk to a clinical pharmacist about your PBM contract. Free 20-minute gut-check for self-funded employers. Charleston, SC · team@rxbs.org · 843-867-3400.`
> **Toolkit Library** — Title: `Free PBM Audit Toolkits for Plan Sponsors | Prescription Benefit Solutions` · Meta: `Free printable PBM audit worksheets and decision frameworks PBS uses across hundreds of contract reviews a year. Download the one that matches your question.`
> **Newsletter** — Title: `The Pharmacy Benefits Briefing | PBM Insights for Plan Sponsors | PBS` · Meta: `Ginny Crisp's weekly briefing decoding PBM contracts and pharmacy spend for self-funded employers. Free.`

### Hero CTA (add buttons under the hero subcopy)
> Primary button: **Get a Free PBM Audit Toolkit** → `/toolkit-library`
> Secondary button: **Book a Contract Gut-Check** → `#contact`

### Homepage "Free Tools" teaser block (new section, right after the hero)
> **Heading:** Start with a free tool, not a sales call.
> **Sub:** The printable audit worksheets we use across hundreds of PBM contract reviews a year. Pull the one that matches your question.
> (3 cards → Toolkit Library) · Button: **Browse the Toolkit Library**

### Proof block (add to Our Story)
> We review hundreds of PBM contracts a year. The same handful of gaps shows up in nearly every one. Our CEO Ginny Crisp, PharmD, decodes them weekly in The Pharmacy Benefits Briefing and recently on Wendell Potter's HEALTH CARE un-covered and Derms on Drugs.

### Newsletter capture block (homepage footer + the newsletter page)
> **Heading:** Read your PBM contract like we do.
> **Sub:** The Pharmacy Benefits Briefing — a weekly 2-minute read for plan sponsors. Free.
> (email field + **Subscribe**) → Substack/LinkedIn newsletter.

### Contact reframe (header + intro line)
> **Header:** Book a free PBM contract gut-check.
> **Intro:** Send your biggest pharmacy-benefits question or your current PBM. A clinical pharmacist will get back to you, usually same day.

---

_Tie-ins: the toolkit landing pages (`email_gated_toolkit/landing_pages/`), the role funnel (`role_funnel_plan.md`), and the closing layer (`closing_layer_spec.md`) already exist; these site changes connect them to the front door. Website SEO checks can fold into `/system-audit`._
