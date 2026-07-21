# /about Team Section — build pack

_Created Jul 21, 2026 (Brett direction: "highlight all employees, maybe not as prominently and in depth as Ginny; new employee Caroline needs to be added and maybe Brett"). This CHANGES the Meet the Team sunset plan: instead of deleting outright, the team grid folds INTO `/about` as a section, and Meet the Team 301s to `/about#team`. One entity page, everybody on it — Ginny deep, everyone else as cards._

## Why on /about, not a revived separate page

The entity-consolidation logic that built /about: one page carries the firm's people signal (the AI engines' E-E-A-T read), instead of splitting it across surfaces. A card grid adds ~one viewport to /about; nobody needs a second click. The Jul baseline flagged "no team bios" as a gap on every engine — this closes it. If the team doubles in size later, it can split back out.

## Section design (below Ginny's existing deep section)

- **Section heading:** `The team` (H2, Primary Blue, Accent Blue underline rule, anchor id `team`).
- **Intro line (1 sentence, carries the capacity story):** `Prescription Benefit Solutions ran 706 client engagements in 2025 with the team below: clinical pharmacists doing the analysis, and account leads who stay with each client year-round.` (verified metric; adjust only against `2025_success_metrics_activation_plan.md`).
- **Card grid, 3-up desktop / 1-up mobile.** Each card: existing photo (reuse the Meet the Team headshots — consistent garden-background set, they look good), name + credential, title, one role line (template below). **Ginny does NOT get a card** — her deep section above IS her treatment; the grid opens with Rachel.
- **Email decision:** the current page publishes individual emails. Keeping them is consistent and approachable; the tradeoff is scraper spam to six inboxes. Recommendation: **drop individual emails from the cards, keep team@rxbs.org on the page footer** — the request-a-call form is the routing surface now. Brett/Ginny call; either works.

## The cards (role lines drafted; confirm titles current)

| Name | Title (as published today) | Draft role line |
|---|---|---|
| Rachel Selinger, PharmD | Clinical Pharmacist | Runs the clinical side of reviews: formulary, utilization management, and the drug-level analysis behind every finding. |
| Traci Maland | Administrative Services Director | Keeps every engagement moving: scheduling, deliverables, and the client experience end to end. |
| Stephanie Uruejoma | Executive Director of Accounts | Leads client accounts and the delivery calendar across the book. |
| Jade Bessent | Strategic Account Executive | Works client accounts day to day: data requests, PBM follow-ups, findings delivery. |
| Jessica Chambers | Strategic Account Executive | Works client accounts day to day: data requests, PBM follow-ups, findings delivery. (Differentiate from Jade's line at build if desired.) |
| **Caroline [LAST NAME]** | **[TITLE]** | **[NEEDS INPUT — see below]** |
| Brett Crisp *(optional, recommended)* | [e.g., Marketing & Growth] | Runs the firm's content, publishing, and growth systems. *(Bio source of truth: `team/brett_crisp_bio.md`. Including him is honest about who builds the public surface; keep the card last.)* |

_Vary Jade/Jessica's lines slightly at build so no two cards read identical (Humanize principle applies to the site too)._

## Needs from Brett/Ginny before build

1. **Caroline:** full name, exact title, credential if any (PharmD? analyst?), headshot in the same photo style (or a placeholder-consistent one until the next team shoot).
2. **Brett card yes/no** + preferred title.
3. Confirm the six published titles are current.
4. Email decision (individual emails on cards vs team@ only).

## JSON-LD addition (append to the /about Person/Organization markup)

Add each member to the Organization as `employee` — one `Person` node per card:

```
{"@type":"Person","name":"Rachel Selinger","honorificSuffix":"PharmD","jobTitle":"Clinical Pharmacist","worksFor":{"@id":"https://www.rxbs.org/#organization"}}
```

(Repeat per member with their fields; Ginny's existing full Person node is untouched. Keep the block under Wix's per-field character limit — the employee nodes are small; if tight, trim to name/jobTitle/worksFor.)

## Sunset-plan amendment

- Meet the Team → **301 to `/about#team`** (was: plain `/about`). Our Story / MAP redirects unchanged.
- The OPEN_ITEMS "delete Meet the Team?" decision for Ginny becomes: "team grid moves into /about (photos reused), THEN the old page deletes with the 301" — an easier yes.

## Build steps (Wix, ~30 min once inputs are in)

1. /about page → add the `team` anchor + H2 + intro line below Ginny's section.
2. Add a 3-column repeater or static grid; paste photos from the old page's media; name/title/role line per the table.
3. Append the employee Person nodes to the /about structured-data field; re-validate.
4. Publish; verify `/about#team` scrolls correctly.
5. Delete Meet the Team; add the 301 in URL Redirect Manager.
