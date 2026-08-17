# FastTools Recovery Status & Plan — 2026-07-24

18 days after the July 5–6 self-inflicted −97% crash. Still flatlined (~30–40
impressions/day, single-digit clicks). This doc explains why, and the exact
order of operations to fix it.

## Root cause of the continued flatline (NEW finding, 2026-07-24)

**The flagship Instagram DP tool is broken in production.** Every username returns
`{"error":"Failed to fetch Instagram profile"}`.

Traced live:
- Relay `47.84.202.125:8080` is reachable (port open, responds).
- Instagram returns **HTTP 503** *through* the relay → the phone-egress leg of the
  TetherProxy is down, or IG is blocking the egress IP.
- The API route catches the failure and returns the generic 500 message
  (`app/api/instagram/profile/route.ts:100`).

Why this dominates everything else: the entire ranking-recovery thesis (see
`2026-07-13-instagram-seo-recovery-plan.md`) is "make the tool satisfy users so the
bounce-back signal stops." A tool that errors 100% of the time sends the *worst*
possible satisfaction signal. All the Jul 11–13 recovery commits (real 320px image,
honest "HD" copy, FAQPage/HowTo/WebApplication schema, cluster interlinking) are
wasted while the tool is down.

**Fix:** `ssh root@47.84.202.125 'pm2 restart tetherproxy-relay'` + confirm phone
egress is online. This recurs until the relay connection-slot leak / egress
stability is fixed (see instagram-proxy-architecture memory).

## What is NOT the problem (ruled out with evidence)

- **Not the meta tags / schema.** Homepage is `index,follow`, canonical is correct
  non-www, schema shipped on the IG page Jul 13.
- **Not the www URLs in GSC.** `www.fasttools.store/*` 301s correctly to apex; those
  impressions are Google slowly consolidating the old www property. Normal decay.
- **Not deindexing.** Site is indexed; pages still rank, they just get ~zero clicks
  (satisfaction problem) or are still algorithmically suppressed post-crash.
- **Not missing categories.** converters / web-tools / seo-tools / calculator are all
  live with real tools and in the sitemap (102 URLs, all apex).

## Real, fixable gaps (do these AFTER the tool works, not before)

1. **Stale sitemap `lastmod`.** `app/sitemap.ts` hardcodes `2026-03-23` for the IG
   cluster pages that were actually changed Jul 13. Google reads "unchanged since
   March → don't recrawl." Bump the changed pages to their real dates.
2. **No crawl acceleration.** No IndexNow, no automated re-submission. After a prune +
   flagship fix, nothing is pulling Google back to re-evaluate.
3. **No uptime alerting on the flagship API.** The flagship silently died and nobody
   knew. A broken flagship during recovery is catastrophic. Add a health check.

## Order of operations (DO NOT reorder)

1. **Fix relay** → verify `/api/instagram/profile?username=nasa` returns a real
   320×320 `profile_pic_url_hd`, and the download button serves the 320 file.
2. **Then** freshen recrawl signals for the IG cluster ONLY: real `lastmod` in
   sitemap + IndexNow ping + GSC "Request Indexing" on the ~8 IG URLs.
3. **Monitor 2–4 weeks.** Watch the IG cluster queries in GSC (insta dp download,
   instagram profile zoom, ig zoom dp, insta dp viewer).
4. **If recovering:** build a real 1080px backend (session-auth or scraper) to beat
   indown.io on the head term. Bigger project, ToS risk — separate decision.
5. **Everything else stays FROZEN.** No mass content/URL/meta changes. The crash was
   caused by doing too much at once.

## Expectation reset

"Millions of impressions like other sites" = a trust-rebuild outcome over months,
not a tag fix. Near-term realistic target: recover the IG cluster's former volume
by concentrating on being the *best* tool in that SERP. Do not spread effort across
all 63 tools.
