# FastTools GSC Deep Analysis — June 21, 2026

## THE NUMBERS (16 months: Oct 5, 2025 - June 19, 2026)

  Total clicks:        13,300
  Total impressions:   749,000
  Average CTR:         1.8%
  Average position:    10.5

  Indexed:             115 pages
  NOT indexed:         344 pages (75% of site INVISIBLE)
  Total known to Google: 459 URLs

---

## INDEXING DISASTER — THIS IS YOUR #1 PROBLEM

Google knows about 459 URLs but refuses to index 344 of them.

  Reason                                  Pages    What it means
  ─────────────────────────────────────   ─────    ────────────────────────────
  Discovered - currently not indexed       159     Google found the URL but
                                                   WON'T EVEN BOTHER crawling it
  Crawled - currently not indexed           63     Google crawled it and
                                                   REJECTED IT (quality too low)
  Page with redirect                        44     Old URLs still redirecting
  Not found (404)                           29     BROKEN PAGES — dead links
  Excluded by noindex tag                   26     Accidentally blocked (now fixed)
  Redirect error                            14     Broken redirects
  Duplicate, Google chose different canonical  9   www vs non-www confusion

Translation: You built 200+ tool pages, but Google looked at 63 of them
and said "this isn't good enough to index." And 159 more Google won't
even crawl because it doesn't think they matter.

---

## TRAFFIC CONCENTRATION — ONLY 2 TOOLS WORK

Top pages by clicks (16 months):

  Page                                    Clicks    Impressions     CTR
  ──────────────────────────────────────  ──────    ───────────     ───
  /social-media-tools/instagram-dp         3,922     237,717       1.65%
  / (homepage — BRAND SEARCH)              2,674      15,446      17.3%
  /instagram-dp/zoom-profile-picture       2,091      66,362       3.15%
  /social-media-tools/channel-checker      1,139     128,996       0.88%
  /instagram-dp/hd-1080p                     944      39,918       2.37%

That's it. 5 pages = 87% of all traffic.
The other ~200 tool pages are COMPLETELY DEAD.

Top queries:

  Query                  Clicks   Impressions   CTR     Type
  ──────────────────     ──────   ───────────   ───     ─────
  fasttools              1,036    3,120         33%     BRAND
  insta dp viewer          742    81,597        0.9%    organic
  insta zoom               584    22,090        2.6%    organic
  fasttools store          493    683           72%     BRAND
  fast tools               290    3,019        9.6%     BRAND
  instagram dp viewer      252    16,688        1.5%    organic
  insta dp viewer hd       175    2,773         6.3%    organic
  insta profile picture viewer 170  8,867       1.9%    organic
  youtube channel name checker  157  6,904      2.3%    organic

~30% of all clicks are BRAND SEARCHES (people typing "fasttools").
If you remove brand searches, real organic is even lower.

---

## CORE WEB VITALS — EVERY PAGE FAILS (MOBILE)

  Good:               0 pages
  Need improvement:  56 pages (ALL pages with data)
  Poor:               0 pages

ALL 56 pages have ALL THREE issues:
  - INP: longer than 200ms (interaction delay — page is slow to respond)
  - CLS: more than 0.1 (layout shift — content jumps around)
  - LCP: longer than 2.5s (largest contentful paint — slow to load)

Google uses Core Web Vitals as a ranking factor. Every single page
on your site is telling Google "this site is slow and janky on mobile."
This actively HURTS rankings.

---

## WHAT YOU'VE BEEN DOING WRONG — HONEST VERSION

### 1. QUANTITY OVER QUALITY (the biggest mistake)

You built 200+ tools. Google looked at them and said:
  - 159 pages: "not important enough to crawl"
  - 63 pages: "crawled it, not good enough to index"

You should have built 20 excellent tools instead of 200 mediocre ones.
Each of those 200 pages dilutes your site's overall quality score.

### 2. THE SEO WORK WAS ON THE WRONG THINGS

Your seo-audit-progress.md shows months of work on:
  - Adding definition/quickAnswer/keyTakeaways blocks
  - Rewriting title tags and meta descriptions
  - Adding FAQ sections
  - Adding related tools links
  - Adding schema markup

These are all good things, but they're TABLE STAKES — every competitor
already has them. You spent months polishing metadata while:

  - 56 pages fail ALL Core Web Vitals (ranking penalty)
  - 29 pages return 404 (broken site signals)
  - 159 pages aren't even indexed
  - Channel checker gets 128,996 impressions but only 0.88% CTR
    (that's 128,000+ people who saw your result and DIDN'T click)

### 3. CHANNEL CHECKER IS A MASSIVE WASTED OPPORTUNITY

  128,996 impressions → 1,139 clicks → 0.88% CTR

This page is getting shown to people 128K times but almost nobody clicks.
Your title tag or meta description is failing. This should be your #1
quick fix — improving CTR from 0.88% to even 3% would triple traffic
from this page alone.

### 4. NO BACKLINKS = NO AUTHORITY

Your site has essentially no backlink profile (the SEO backlink campaign
across Dev.to/LinkedIn/Blogger/DZone is for geoiphub.com and
clickfortify.com, NOT for fasttools.store). Without backlinks, Google
has no reason to think your 200 tools are worth indexing.

### 5. BROKEN URL RESTRUCTURE LEFT SCARS

The /tools/* → /calculator/* and /finance-tools/* restructure created:
  - 44 pages with redirect chains
  - 14 redirect errors
  - 29 broken 404 pages
  - Previously 26 pages accidentally noindexed

This cleanup is STILL not finished. Every broken page wastes Google's
crawl budget and signals poor site quality.

### 6. TRYING TO RANK EVERYTHING AT ONCE

You're spreading 200 tools across 12+ categories. Each category has
15-30 tools competing for crawl budget. Google allocates crawl budget
based on site authority — a newish site with no backlinks can't get
200 pages indexed. You should pick 10-20 tools, make them the best on
the internet, and let the rest exist as secondary pages.

---

## PRIORITY ACTION PLAN (in order)

### IMMEDIATE (this week)
1. Fix Core Web Vitals — INP, CLS, LCP on all 56 mobile pages
   - This is actively hurting rankings every day
2. Fix the 29 broken 404 pages and 14 redirect errors
3. Improve channel-checker title/meta — 128K impressions at 0.88% CTR
   is leaving thousands of clicks on the table

### SHORT-TERM (2-4 weeks)
4. Pick your top 20 tools with actual search demand and focus
   exclusively on those
5. Remove or consolidate dead pages (0 impressions after months)
6. Submit the 159 "Discovered - not indexed" URLs for re-crawling
   after improving their content
7. Start building backlinks to fasttools.store

### STRATEGIC (ongoing)
8. Stop building new tools until the existing ones get indexed
9. Write actual blog content for topical authority
10. Consider cutting the site from 200 tools to 50 quality tools
