"""Fetch RSS feeds and write the past 7 days of stories to a markdown file.

Used by .github/workflows/weekly-roundup.yml before the Claude step so the
roundup draft has both curated RSS input and Claude's web search.

Feed list is declared below. Edit FEEDS to add, remove, or fix URLs.
Failures on any single feed are logged and skipped; the file is always written
so the workflow never breaks if one source is down.
"""

from __future__ import annotations

import datetime as dt
from pathlib import Path
from zoneinfo import ZoneInfo

import feedparser

FEEDS: list[tuple[str, str]] = [
    ("Drug Channels", "https://www.drugchannels.net/feeds/posts/default"),
    ("Fierce Healthcare - Payers", "https://www.fiercehealthcare.com/rss/payer"),
    ("KFF Health News", "https://kffhealthnews.org/feed/"),
    ("STAT News - Pharma", "https://www.statnews.com/category/pharma/feed/"),
    ("Benefits Pro", "https://www.benefitspro.com/feed/"),
    ("PCMA Blog", "https://www.pcmanet.org/feed/"),
    ("Pharmacy Times", "https://www.pharmacytimes.com/rss"),
    ("Modern Healthcare", "https://www.modernhealthcare.com/rss.xml"),
]

OUTPUT = Path("newsletters/roundups/rss_weekly_feed.md")
LOOKBACK_DAYS = 7
EASTERN = ZoneInfo("America/New_York")


def entry_datetime(entry) -> dt.datetime | None:
    for key in ("published_parsed", "updated_parsed"):
        t = entry.get(key)
        if t:
            return dt.datetime(*t[:6], tzinfo=dt.timezone.utc)
    return None


def clean_summary(text: str, limit: int = 500) -> str:
    import re
    text = re.sub(r"<[^>]+>", "", text or "")
    text = re.sub(r"\s+", " ", text).strip()
    return (text[: limit - 1] + "…") if len(text) > limit else text


def fetch_feed(name: str, url: str, cutoff: dt.datetime) -> list[dict]:
    print(f"Fetching: {name} ({url})")
    try:
        parsed = feedparser.parse(url, request_headers={"User-Agent": "pbs-roundup/1.0"})
        if parsed.bozo and not parsed.entries:
            print(f"  ! parse error, no entries: {parsed.bozo_exception}")
            return []
    except Exception as exc:  # noqa: BLE001
        print(f"  ! fetch failed: {exc}")
        return []

    items = []
    for entry in parsed.entries:
        when = entry_datetime(entry)
        if when is None or when < cutoff:
            continue
        items.append(
            {
                "title": (entry.get("title") or "Untitled").strip(),
                "url": entry.get("link") or "",
                "date": when.astimezone(EASTERN).strftime("%Y-%m-%d"),
                "summary": clean_summary(entry.get("summary") or entry.get("description") or ""),
            }
        )
    print(f"  {len(items)} stories in the past {LOOKBACK_DAYS} days")
    return items


def render(sections: list[tuple[str, list[dict]]]) -> str:
    now = dt.datetime.now(EASTERN).strftime("%Y-%m-%d %H:%M %Z")
    lines = [
        "# Weekly RSS Feed Stories",
        "",
        f"*Fetched: {now}. Lookback: past {LOOKBACK_DAYS} days.*",
        "",
        "---",
        "",
    ]
    total = sum(len(items) for _, items in sections)
    if total == 0:
        lines += ["*No stories found in the lookback window.*", ""]
        return "\n".join(lines)

    for name, items in sections:
        if not items:
            continue
        lines.append(f"## {name}")
        lines.append("")
        for item in items:
            lines.append(f"### {item['title']}")
            lines.append(f"- **Date:** {item['date']}")
            if item["url"]:
                lines.append(f"- **URL:** {item['url']}")
            if item["summary"]:
                lines.append(f"- **Summary:** {item['summary']}")
            lines.append("")
    return "\n".join(lines)


def main() -> None:
    cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=LOOKBACK_DAYS)
    sections = [(name, fetch_feed(name, url, cutoff)) for name, url in FEEDS]
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(render(sections), encoding="utf-8")
    total = sum(len(items) for _, items in sections)
    print(f"Wrote {OUTPUT} with {total} stories across {len(FEEDS)} feeds.")


if __name__ == "__main__":
    main()
