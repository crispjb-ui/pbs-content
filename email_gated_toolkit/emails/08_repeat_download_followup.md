# Email 8 — Repeat-Download Personal Follow-Up (behavior-triggered)

**Created:** July 3, 2026 (approved from the 6-month strategy audit). A second (or seventeenth) toolkit download is the strongest buying signal the funnel produces: it is how GWCU announced itself. Today the system suppresses the automation for repeat downloaders (the `repeat` flag stops Emails 2-5 refiring) but nothing affirmative happens. This closes that gap with a personal note from Ginny, not an automation email.

**Trigger:** the `repeat` flag on a submission (the Velo backend already sets it and increments `downloads`).
- **Phase 1 (now, zero build):** the existing Ginny-notification email on every submission includes the repeat state. Standing rule: any lead reaching **3+ total downloads**, or any **SQL/PARTNER-tier lead on their 2nd download**, gets this note from Ginny within 2 business days. Worked as a sales-hour item.
- **Phase 2 (when Zapier bandwidth allows):** add a filter step to the notification Zap that flags `downloads >= 3` submissions with a `[HOT - REPEAT]` subject prefix so they are unmissable, mirroring the SQL/PARTNER alert pattern. (This also implements the `closing_layer_spec.md` Phase-2 "+25 second download" re-scoring intent without touching the scorer.)

**Sender:** Ginny personally, from team@rxbs.org, admin cc'd (scheduling pattern). NOT sent through the marketing automation; the entire value is that it is visibly a human noticing.

---

## Body template — buyer roles (SQL/MQL/LEAD)

```
Hi {{first_name}},

I noticed you have picked up a few of our worksheets now ({{toolkit_2_or_3_names}}
most recently). That usually means someone is working through a real
question about their pharmacy benefit, not just collecting PDFs.

So, an open offer: if you want, I will spend 20 minutes on the phone
walking through whatever the worksheets are surfacing. No charge and no
pitch; it is genuinely useful for me to hear what plan sponsors are
running into, and usually I can point you at the two or three things
worth checking first in your situation.

If that sounds worthwhile, reply with a sentence on what you are looking
at and my colleague (cc'd) will find us a time.

And if you are just building a reference library, that is fine too. They
are free for a reason.

- Ginny

Ginny Crisp, PharmD, BCACP | Chief Executive Officer
team@rxbs.org | www.rxbs.org
```

## Body template — broker/consultant roles (PARTNER)

```
Hi {{first_name}},

I noticed you have been working through our toolkit library. Brokers and
consultants who collect several of these are usually equipping client
conversations, which is exactly what they are for.

Two things, in case they are useful:

(1) If you ever want a version with your logo next to ours for a client
    meeting, we do that. Just ask.

(2) If a client situation ever calls for an independent pharmacy read
    behind you (contract review, claims audit, renewal second opinion),
    that is the whole model here: you lead the relationship, we do the
    pharmacy work.

Either way, glad the library is earning its keep. If a short call to
compare notes would be useful, my colleague (cc'd) can find a time.

- Ginny
```

---

## Rules

- **The 20-minute offer is real and free; it is not a disguised sales call.** Its conversion mechanism is the same one that runs the whole system: demonstrated expertise plus generosity. If the situation warrants an engagement, that surfaces naturally.
- One send per lead per quarter maximum, regardless of further downloads.
- Log every send and outcome in the Sheet (`last_action = repeat-followup`, notes on reply). Response rate on this note is worth tracking separately; behavior-triggered personal notes typically outperform every scheduled email in the stack.
- Naming, guardrail, and Humanize rules apply. Bulk-library downloaders (10+, the GWCU pattern) skip this template entirely and go straight to the Broker Partner track first-touch (`broker_partner_track.md`, Template P1).
