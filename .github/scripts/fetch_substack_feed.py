#!/usr/bin/env python3
"""Fetch the Benefit Blind Spots public RSS feed and snapshot it to
.substack_feed.json (untracked) for the URL-fill workflow, plus emit a
watchdog verdict: did anything publish today (America/New_York)?

Stdlib-only (no feedparser): Substack serves plain RSS 2.0.

Usage: python .github/scripts/fetch_substack_feed.py
Writes: .substack_feed.json  {"fetched_at": ..., "entries": [{title, link, published_et}]}
Prints: WATCHDOG_OK / WATCHDOG_MISSING <expected> / WATCHDOG_FETCH_ERROR (consumed by the workflow).
"""
import json
import ssl
import sys
import urllib.request
import xml.etree.ElementTree as ET_XML
from datetime import datetime
from email.utils import parsedate_to_datetime
from zoneinfo import ZoneInfo

FEED_URL = "https://benefitblindspots.substack.com/feed"
ET = ZoneInfo("America/New_York")

# What the publishing calendar expects, by ET weekday (0=Mon)
EXPECTED = {
    0: "Monday deep dive (7:30 AM ET)",
    2: "Wednesday roundup 'What Crossed My Desk' (7:30 AM ET)",
    3: "Thursday Field Note (7:30 AM ET)",
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "PBS-content-automation/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.read()
    except ssl.SSLError:
        # proxy environments with a custom CA bundle
        ctx = ssl.create_default_context(cafile="/root/.ccr/ca-bundle.crt")
        with urllib.request.urlopen(req, timeout=30, context=ctx) as r:
            return r.read()


def main() -> int:
    try:
        raw = fetch(FEED_URL)
        root = ET_XML.fromstring(raw)
    except Exception as exc:  # never fail the workflow on a feed hiccup
        print(f"WATCHDOG_FETCH_ERROR {exc}")
        return 0

    entries = []
    for item in root.iter("item"):
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        pub = (item.findtext("pubDate") or "").strip()
        published_et = ""
        if pub:
            try:
                published_et = parsedate_to_datetime(pub).astimezone(ET).isoformat()
            except (TypeError, ValueError):
                pass
        entries.append({"title": title, "link": link, "published_et": published_et})

    with open(".substack_feed.json", "w") as f:
        json.dump({
            "fetched_at": datetime.now(ET).isoformat(),
            "feed_url": FEED_URL,
            "entries": entries,
        }, f, indent=2)

    now = datetime.now(ET)
    expected = EXPECTED.get(now.weekday())
    if expected:
        today = now.date().isoformat()
        published_today = [e for e in entries if e["published_et"][:10] == today]
        if published_today:
            print(f"WATCHDOG_OK {len(published_today)} post(s) published today: "
                  + "; ".join(e["title"] for e in published_today))
        else:
            print(f"WATCHDOG_MISSING {expected}")
    else:
        print("WATCHDOG_OK non-publish day")
    return 0


if __name__ == "__main__":
    sys.exit(main())
