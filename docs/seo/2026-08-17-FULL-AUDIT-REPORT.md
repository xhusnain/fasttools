# FastTools SEO Decline Audit — 2026-08-17

**Scope:** Root-cause investigation of the daily impressions/clicks decline that began ~Aug 9
(e.g. "insta dp viewer": 27 clicks / 2,942 impressions Jul 19–Aug 15, but 0 clicks / 62
impressions Aug 9–15; near-zero in the Aug 16–17 24h window).
**Method:** 26 parallel audit agents — full 102-URL live crawl, infra/robots/sitemap/schema audit,
Core Web Vitals, Google-side research (updates, docs, GSC changes), and per-cluster competitor
comparison covering every tool page. ~1.5M tokens of evidence, all findings verified against the
live site.

---

## Root cause verdict (confidence-ranked)

### 1. Flagship tool was DEAD sitewide — CONFIRMED, FIXED TODAY
`/api/instagram/profile` returned **502 on 100% of requests**. Every search visitor to the
7-page Instagram DP cluster (the majority of the site's clicks) hit an infinite spinner and
bounced back to the SERP. The phone-tether egress was flapping (connect → AUTH_OK → dead in
seconds, code 1006), then went silent; `pm2 restart` does NOT fix this failure mode.
The July-24 uptime alarm never ran because it sat on an unmerged branch (scheduled GitHub
Actions only run from the default branch) — so the outage was silent, again.
**The decline window matches the outage. The impression collapse (not just clicks) is the
signature of a ranking demotion, consistent with sustained negative engagement signals.**

**Fixed:** relay now has a direct-egress fallback (tetherproxy `41ec8ca`, Instagram-domains
allowlist) — tool verified live end-to-end. Alarm merged to main (`f1f6305d`), first run green,
probes every 15 min. **Phone egress still needs physical attention** (see action plan).

### 2. AdSense Offerwall + Auto-ads CLS — CONFIRMED live, needs AdSense dashboard action
A content-BLOCKING "Unlock more content" Offerwall modal fires for first-time mobile visitors —
a textbook intrusive interstitial (Google penalizes these directly, on top of the engagement
damage). Ad injection also swings CLS to **0.652** on the flagship (threshold 0.1) in the
ad-heavy variant. If Offerwall was enabled/ramped in early August, it is plausibly a co-trigger
of the Aug 9 slide. **Only the account owner can check/disable this** (AdSense → Privacy &
messaging → Offerwall; Auto ads → disable in-page formats).

### 3. Machine-detectable fake freshness on every page — CONFIRMED, FIXED TODAY
`lib/metadata-base.ts` stamped every tool page's schema with `datePublished: "2024-01-01"`
(fabricated — pages didn't exist then) and `dateModified: new Date()` at render time — so
Google saw "modified today" on every crawl of ~100 URLs while the sitemap said March. During a
quality re-evaluation window this is a self-inflicted spam-adjacent signal. Removed sitewide.

### 4. Google-side context — no confirmed update, but real volatility
No confirmed August 2026 core/spam update (Search Status Dashboard clean; last confirmed =
June spam update, Jun 24–26, which explicitly scoped **doorway abuse and scaled content
abuse**). However trackers logged unconfirmed volatility spikes Aug 1–3, Aug 5–6 (sharpest)
and Aug 12–14 — the decline sits inside quiet re-ranking, which AMPLIFIES site-side weaknesses
(#1–#3) rather than replacing them as the cause.

### 5. Stale recrawl / index inertia — CONFIRMED
Google's index still serves pre-June-migration `www` URLs and pre-July titles for multiple
pages (name-generator, fun-tools, homepage snippet still says "200+ tools"). The domain's
crawl priority is very low post-crash; the July content fixes were largely never re-evaluated.
The IG-cluster sitemap lastmod freshening (stranded since Jul 24) deployed today.

---

## Confirmed site-wide defects (fixed in this pass)
- Fabricated `datePublished` + render-time `dateModified` in WebApplication schema → removed;
  dates now emitted only when a real date is passed.
- Meta descriptions truncated mid-word with a literal `...` (`slice(0,157)+"..."`) on every
  page whose description exceeded 160 chars → word-boundary truncation, no ellipsis.
- FAQPage + HowTo + DefinedTerm JSON-LD emitted on every tool page (FAQ rich results are
  gov/health-only since Aug 2023; HowTo deprecated Sep 2023) → no longer emitted; visible FAQ
  content untouched.
- No `og:image` on any tool page → deterministic default added.
- Organization `sameAs` pointed at a 404 GitHub repo on every page → removed.
- Homepage claimed "All 200+ Free Online Tools" (site has ~63) → corrected to 60+.
- Homepage schema had the same fake-date churn → hardcoded real date.
- Shared tool-loader fallback claimed "All processing happens locally" on server-backed tools
  (false trust claim) → removed.
- `/social-media-tools/instagram-profile-picture-viewer` half-duplicate (indexable, own
  title/H1, cross-canonical to instagram-dp, conflicting og:url/schema signals, absent from
  sitemap) cannibalized the flagship → hard 301 into `/social-media-tools/instagram-dp`, route
  deleted, 4 internal links + llms.txt cleaned.
- `/calculator/pregnancy-calculator` (deleted page, still indexed, real "pregnancy week
  calculator" demand) died on a 404 → 301 to pregnancy-conception-calculator.

## Confirmed per-page trust/YMYL defects (fixed in this pass)
- paypal-fee: wrong IRS 1099-K threshold ($600; OBBBA restored $20k/200-txn), phantom
  micropayment/QR capabilities, "100% Accuracy" overclaim, 12× keyword stuffing.
- pregnancy-conception: fake "FastTools Biology & Research Team" expert box, wrong
  "full term at 35 weeks post-conception" claim, inverted keyword placement.
- ip-subnet-calculator: fabricated "CCNP Reviewed"/"Network Engineering Team" credentials,
  render-time "Last Updated" date.
- future-age: mathematically wrong 2050 answer, false "dedicated current-age tool" claim,
  competitor table.
- ai-image-detector: false deepfake/Midjourney/DALL-E detection claims (tool is EXIF +
  frequency heuristics).
- regex-tester: title claimed live Ruby/Python execution (JS engine only).
- bill-splitter: advertised itemized/custom/tax/round-up features the tool doesn't have.
- hashtag-counter: self-contradicting TikTok limits + false competitor claim.
- link-in-bio: promised a hosted shareable URL the tool can't produce; "Linktree Alternative"
  baked into schema names.
- anniversary: competitor comparison table.
- youtube-tags API: view-count fragments leaked into the tag list (garbage output).

## SERP reality (from 22 competitor-cluster agents)
fasttools.store is currently **absent from virtually every head-term SERP it targets**; only
`channel-checker` (~#6 "youtube handle checker") and `future-age` (~#7 "future age calculator")
still place. Verdicts:
- **Winnable now:** youtube handle checker (indie-site SERP), youtube tag extractor,
  ai code detector, hashtag counter, permanent qr code, pdf signature verification,
  random token generator, pregnancy conception calculator, instagram DP cluster (was ranking
  pre-crash; winners are small indie sites).
- **Unwinnable head terms (stop investing):** jwt decoder (jwt.io/auth vendors), timestamp
  converter (EMD veterans), bytes-to-mb (Google widget), how-old-will-i-be-in-20XX (widget +
  zero-click), love calculator, pomodoro timer, image to text / background remover (Adobe,
  Canva, Photoroom), heic/png/webp converters (CloudConvert/Adobe/Canva — also the pages appear
  to not even be indexed), blog title generator, free link in bio tools (hosted SaaS only),
  ai text detector (ML-model brands), bip39/totp/seed-phrase head terms, mime type list (MDN/IANA),
  whois (registrars).
- **Doorway-risk clusters (next phase):** instagram-dp 7 variants (40–70% duplicate),
  youtube-thumbnail 9 variants (6 serve identical output), channel-checker 5 pages (72–74%
  sentence-identical, zero variant links from main page, main-page keyword cannibalized by a
  variant). The June spam update targeted exactly this pattern.

## Environment limitations
- CrUX field data unavailable (PSI keyless quota exhausted; and traffic is likely below CrUX
  thresholds post-crash).
- GSC API access not available in this session — position data, Manual Actions check, URL
  Inspection, and Request Indexing require the owner (see action plan).
- AdSense dashboard (Offerwall/Auto-ads settings + enable dates) requires the owner.
