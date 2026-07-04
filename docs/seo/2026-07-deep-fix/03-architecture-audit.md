# Architecture Audit vs the PageRank / Topical-Authority Playbook — 2026-07-03

Graded against the David Quaid principles (slug = strongest relevance signal;
low-authority sites win only narrow indexes; links from *ranking* pages pass
authority; sitemap-only discovery ⇒ discovered-not-indexed; answer above the
fold; no brand suffix in competitive titles) plus the June 21 GSC audit.

## P0 — Concrete bugs found

### 1. Sitemap advertises a 404 for the site's #2 demand pool
- `app/sitemap.ts:52` lists `/social-media-tools/instagram-dp/download`
  (priority 0.9, lastModified 2026-06-10).
- Commit `eb941572` (Jun 10) created that variant for the **~35K-impression
  "insta dp download" cluster**. The Jun 21 revert (`c48ff4fb`) restored
  `dp-variants.ts` to the May 26 version — **deleting the `download` variant
  but leaving the sitemap entry**. The `[slug]` route `notFound()`s unknown
  slugs ⇒ Google is being told to crawl a 404 at priority 0.9.
- GSC: "insta dp download" 49 clicks / 9,350 impr (0.5% CTR), "instagram dp
  download" 40 / 7,756, "download insta dp" 1 / 981, "instadp download"
  2 / 304 … the download intent is the single largest un-served cluster.
- Fix: either restore a download variant page (recommended — it ranked; the
  revert was about *titles*, not about download existing) or remove the
  sitemap line. Restoring = biggest single win available.

### 2. `lib/metadata-base.ts` auto-prepends "Free " to every schema'd title
- Line ~201: `if (shouldIncludeSchema(path) && !/\bfree\b/i.test(title)) title = "Free " + title`.
- Silently pushes ~9+ calculator titles past 65–70 chars and demotes the
  target keyword out of position 1 on EVERY tool page whose author didn't
  write "free" themselves. The author-written metaTitle in the page file is
  NOT what ships. Remove the auto-prefix; let pages opt in manually at the end
  ("… — Free") only where it fits.

### 3. Template bugs shipping to Google
- `/converters/roman-numeral`: dropped year token — renders "the Roman numeral
  for and other recent years" (3+ places). Reads broken to users and Google.
- `/converters` hub: Currency Converter card duplicated (lines ~135 and ~177).
- `/converters/timezone` metaTitle claims DST awareness; its own FAQ admits
  fixed offsets, no DST. `/converters/currency` hero claims "150+ currencies,
  updated throughout the day"; FAQ admits ~30 currencies, once-daily ECB.
  Metadata that contradicts page content = quality/trust signal against you.

## P1 — Structural violations of the playbook

### 4. The money page is under-linked sitewide
- Footer (33 links) links `channel-checker`, bmi-calculator, currency, etc. —
  but **not `/social-media-tools/instagram-dp`**, the page earning ~90% of
  clicks. Quaid: authority flows through links; your strongest page should be
  in the sitewide footer and the weak-but-promising pages should be linked
  FROM the ranking pages.
- `instagram-dp` main page links only 3 of 5 variants inline
  (zoom, hd-1080p, private-account); `pc-viewer` and `anonymous-viewer` hang
  off the hub only via config. Variant pages don't link sibling→sibling in a
  chain (Quaid's page→page→page context chain).

### 5. Discovery is sitemap-first, not link-first
- 194 tools are discovered via: sitemap (459 URLs), category hubs, nav
  mega-menu (135 links), footer. That is exactly the "random XML list with no
  context, no backlinks, no authority" pattern Quaid says produces
  *discovered-currently-not-indexed* (159 pages) and *crawled-not-indexed*
  (63 pages).
- Blog has **5 posts** (guides were deleted in `9e4dc23b "remove blogs
  guides"`). There is no content engine creating contextual in-content links
  from pages-with-traffic to tool pages. The ONLY pages with traffic (IG
  cluster) link to nothing outside their own cluster — fine for focus, but it
  means no other cluster can inherit authority from them.

### 6. Topical dilution: 16 categories, one earning cluster
- GSC: ~150 of 194 tools have zero impressions. Per the teal.com lesson in the
  podcast (job pages diluted resume authority), 150 dead generic pages
  (bmi/percentage/currency/length/timezone…) tell Google "this is a random
  everything site" while the site's actual entity is "Instagram profile
  picture tools". Cutting/noindexing the unwinnable heads and consolidating
  duplicates *raises* the average and sharpens the entity.

### 7. Brand suffix still on 11 competitive pages
- 8 dev-tools + `/fun-tools/countdown-timer`, `/fun-tools/wheel-spinner`,
  plus non-tool pages (fine). Note: `createMetadata` strips "| FastTools" at
  render time (line ~197) — so the shipped titles are OK, BUT the stripping +
  "Free " prepending means **what's in the code is not what's in the SERP**
  for dozens of pages. Decide titles in ONE place (the page files), delete
  both transforms.

## P2 — Systemic

### 8. Core Web Vitals still failing everywhere (June GSC: 56/56 pages
  "needs improvement" — INP >200ms, CLS >0.1, LCP >2.5s on mobile).
  AdSense (`adsbygoogle` in layout.tsx) without reserved ad-slot heights is
  the classic CLS/INP source; dynamic tool loading with `ToolLoader`
  placeholder swap adds CLS. Reserve fixed heights for ad slots + loaders.

### 9. International demand ignored
- GSC shows German-language queries ("insta zoom profilbild", "instazoom
  profil") and Arabic ("زووم انستا") hitting English pages. "instazoom" is a
  German-market term with real volume. No hreflang/localized variant exists.

### 10. Scam-magnet matches
- Queries like "12/24 word seed phrase generator **with balance**" and
  `pastebin.com "ghp_" "github" token` match the site. Content on
  seed-phrase/token pages must explicitly NOT court "with balance" phrasing —
  attracting scam-seekers is a quality and trust liability.

## What's already GOOD (don't redo)
- Canonicals, redirect registry (56 rules) for the /tools/* restructure,
  noindex plumbing exists (list currently empty — correctly, after the
  earlier over-noindex mistake), fake aggregateRating removed, cannibalization
  fix (instagram-profile-picture-viewer canonicals to instagram-dp),
  robots.txt sane, llms.txt present, every tool has answer-first
  quickAnswer/definition/keyTakeaways blocks and ~8 relatedTools links.
