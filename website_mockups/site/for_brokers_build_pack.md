# /for-brokers — Wix build pack (assembly-ready)

_Created Jul 13, 2026, for Brett's 2-hour build block. Copy source of truth: `broker_partner_track.md` §3 (reproduced here paste-ready). Archetype: **Utility/Conversion** (no byline, no lead-magnet inline CTA; answer-first lead; Service schema). Design recipes identical to the glossary/RSO builds: dark hero `#0c1a22`-style navy, page background `#FAFAF7`, white cards with 1px `#E3E6E8` border + 4px Accent `#A7E0FA` left strip + radius 10-12px, headings Plex Sans SemiBold `#015880`, body `#4D4D4D`, buttons `#015880` white 14pt radius 8px. Timing: built same week two fiduciary firms entered vetting; this page speaks to exactly that reader._

## Page setup
- New page, name **For Brokers**, slug **`for-brokers`** (URL map v2 slot; freeze it).
- Nav: top-level **For Brokers** item (per the v2 nav plan it merits top level — the second persona's door). If the current menu is crowded, place after Resources; do NOT bury under More.

## §1 · HERO (dark navy section, like the glossary hero)
- Eyebrow (Accent Blue, uppercase, small): `FOR BROKERS & CONSULTANTS`
- H1 (white): `Your clients' pharmacy questions, answered by an independent bench.`
- Lead paragraph (white, this is the answer-first sentence):

```
Prescription Benefit Solutions works behind brokers and consultants, not around them. You stay the relationship lead. We bring the clinical pharmacist's read of the PBM contract, the claims, and the renewal.
```

- Hero button (Accent style: `#A7E0FA` bg, `#015880` text): `Start a partner conversation` → link `https://www.rxbs.org/request-a-call?topic=broker-partnership` (TOPIC_MAP key verified live; pre-selects "Broker/consultant partnership").

## §2 · WHAT WE DO FOR YOUR CLIENTS (THROUGH YOU) — 4 white cards (2×2 grid desktop, stacked mobile), each with the accent left strip
Card titles 17pt SemiBold `#015880`; body 14pt `#4D4D4D`:

1. **PBM contract reviews and audits** — The redline agenda before your client signs or renews.
2. **Pharmacy claims reviews** — Where the spend is actually going, mechanic by mechanic.
3. **PBM RFP support** — Independent scoring, so the incumbent's story gets tested.
4. **Renewal-season second opinions** — A fast, independent read when the timeline is tight.

## §3 · HOW THE PARTNERSHIP WORKS — 3 numbered steps (numbered pills in Primary Blue, like the toolkit section pills)

1. **You bring us in.** Your client hears about us from you, and every deliverable reinforces that you brought the expertise.
2. **We do the pharmacy work.** Clinical pharmacists who review hundreds of PBM contracts a year, independent of any PBM revenue.
3. **You lead the conversation.** Findings go through you, in a form you can present. We join the client meeting when you want us there, in the role you define.

## §4 · PROOF BAND (Primary Blue `#015880` full-width band, white + Accent text, numbers in Plex Mono)

```
In 2025, Prescription Benefit Solutions delivered $78.7M in contracted savings across 203 clients, including 59 PBM RFPs at a 25% savings rate.
```

_Guardrails (do not vary): "contracted," never offered/identified; 25% is the RFP rate, never "average"; PBS claims these solo._
Layout: three stat blocks — `$78.7M` / `contracted savings, 2025` · `203` / `clients` · `59 RFPs` / `25% savings rate` — with the sentence above or below.

## §5 · START WITH THE TOOLS (white card, accent strip — same recipe as the glossary Lead CTA card)
- Title: `Start with the tools`
- Body:

```
The full Plan Sponsor Toolkit library is free and co-usable with your clients today. Many of our broker partnerships started with a broker running a worksheet with a client. If a worksheet would land better with your logo next to ours, ask us about co-branding.
```

- Button: `Browse the toolkit library` → the live Toolkit Library page (link type Page, same window).

## §6 · KEEP READING (live pages only — the internal-linking rule: this money page also links the glossary; /standards + /results join this block WHEN they go live, not before)
- Small heading `Useful with clients` + two links: **PBM Glossary** → `/glossary` · **Contract Language Library** → `https://benefitblindspots.substack.com/p/pbm-contract-language-library` (new window; re-point to the on-site page when built — same deferred trigger as the glossary's).

## §7 · CLOSING CTA (white card, accent strip)
- One line: `A 20-minute conversation is the easiest way to see the fit. No client required.`
- Button: `Start a partner conversation` → `https://www.rxbs.org/request-a-call?topic=broker-partnership`

## §8 · SEO panel (Pages → For Brokers → SEO basics)
- Title tag:

```
Independent Pharmacy Benefits Bench for Brokers & Consultants | Prescription Benefit Solutions
```

- Meta description:

```
Prescription Benefit Solutions works behind benefits brokers and consultants: PBM contract reviews, claims audits, RFP support, and renewal second opinions. You stay the relationship lead. $78.7M contracted savings across 203 clients in 2025.
```

## §9 · Structured data (Settings → SEO → Advanced → Structured Data Markup; two entries)

**Markup 1 — name `For Brokers Service`:**

```json
{"@context":"https://schema.org","@type":"Service","name":"Independent pharmacy benefits support for brokers and consultants","serviceType":"Pharmacy benefits consulting (broker partnership)","provider":{"@type":"Organization","name":"Prescription Benefit Solutions","url":"https://www.rxbs.org"},"areaServed":"United States","audience":{"@type":"Audience","audienceType":"Benefits brokers and consultants"},"description":"Prescription Benefit Solutions works behind brokers and consultants: PBM contract reviews and audits, pharmacy claims reviews, PBM RFP support, and renewal-season second opinions, delivered with the broker as relationship lead.","url":"https://www.rxbs.org/for-brokers"}
```

**Markup 2 — name `For Brokers BreadcrumbList`:**

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.rxbs.org/"},{"@type":"ListItem","position":2,"name":"For Brokers","item":"https://www.rxbs.org/for-brokers"}]}
```

## §10 · Post-publish checklist
- [ ] Publish → validator.schema.org on `https://www.rxbs.org/for-brokers` (Service + BreadcrumbList, 0 errors)
- [ ] Click-test: hero button + closing CTA pre-select "Broker/consultant partnership" on the form; toolkit-library button; glossary link
- [ ] Nav shows For Brokers (desktop + mobile)
- [ ] Search Console: URL Inspection → Request Indexing
- [ ] Add the page to `evergreen_freshness_registry.md` (live-asset pool) + mark the OPEN_ITEMS item ⑤ / gameplan P1 #8 done
- [ ] When `/standards` and `/results` go live: add both to §6 (the money-page linking rule)
