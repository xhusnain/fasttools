# FastTools Deep SEO Fix Plan — 2026-07-03

Branch: `seo-deep-fix-2026-07` (work here; nothing committed/pushed per instruction).
Inputs: fresh GSC 7d/28d query data (file 01), full metadata inventory of 214 pages (file 02),
architecture audit (file 03), per-tool audits of ALL ~200 tools by 8 auditors (files 04a–04d).

## The diagnosis in one paragraph

FastTools is not failing because the pages are thin — content quality is uniformly above
tool-farm average. It is failing because **~150 of 194 tools target head terms that
calculator.net / iLovePDF / QuillBot / Bankrate / Google's own widgets structurally own**,
while the site has near-zero backlink authority; because **the pages Google can't reach through
contextual links stay unindexed** (159 discovered-not-indexed, 63 crawled-not-indexed — the
site relies on sitemap + mega-menu, with a 5-post blog and zero links from the only ranking
cluster); and because the one cluster that DOES rank (Instagram DP) is leaking its biggest
demand pools through **a sitemap'd 404 on the download variant (~18K impressions unowned)**,
sub-1% CTR titles, orphaned variants (sibling-link slice bug), and self-cannibalizing
channel-checker titles. Your own data proves the Quaid thesis: narrow high-relevance variants
convert at 10–44% CTR while generic heads sit under 1%. The plan: fix the money cluster first,
prune/consolidate the dead weight to sharpen topical authority, and rebuild only in narrow
winnable indexes with proper hub→variant link chains.

## Verdict totals across every tool (~200 pages audited)

| Verdict | Count | Meaning |
|---|---|---|
| INVEST | ~26 | Winnable demand — fix titles/content/links and push |
| FIX-CHEAP | ~80 | One-line title/slug/link fixes; zero further content spend |
| CONSOLIDATE | ~19 | Merge + 301 (self-cannibalizing duplicates) |
| REPUBLISH-NEW-SLUG | ~20 | Exact-phrase slug + 301 (Quaid technique) |
| RETIRE-NOINDEX | ~36 | Unwinnable heads / dead weight dragging site quality |

---

# PHASE 0 — Emergency (do first, ~1 day)

1. **Restore `/social-media-tools/instagram-dp/download`** — add `download` key to
   `dp-variants.ts`. Sitemap already advertises it at priority 0.9; it 404s (June 21 revert
   deleted the variant, kept the sitemap line). ~18K impressions of download intent unowned.
   Title: `Insta DP Download — Save Instagram Profile Picture Full Size HD`.
2. **Fix the sibling-link slice bug** `instagram-dp/[slug]/page.tsx:44-47` — zoom (the #1
   click variant) and anonymous-viewer receive ZERO sibling links.
3. **Kill the "Free " auto-prefix** in `lib/metadata-base.ts:201-203` and the brand-strip
   transform — what's in page files is not what ships; 9+ titles blow past 65ch. Titles get
   decided in ONE place: the page files.
4. **Fix template bugs shipping to Google**: roman-numeral dropped-year text; converters hub
   duplicate Currency card; paypal-fee "Curve"→"Currency"; timezone + currency metadata claims
   their own FAQs contradict; crypto hub aboutTool containing meta-SEO strategy copy.
5. **Trust protection**: prune `alternateName` arrays sitewide from 10–16 → ≤5 real synonyms
   (they're the net catching "seed phrase WITH BALANCE" scam-seekers and competitor-bait);
   delete "Same Tool, Many Names" sections; reword token-generator's pastebin/ghp_ sentence.

# PHASE 1 — Money cluster (week 1)

**Instagram DP** (90% of clicks; the only authority you have):
- Retitle main page: `Insta DP Viewer — View & Download Instagram DP Full Size (HD)`
  (front-loads the 18K-impression query stuck at 0.97% CTR).
- private-account title: add "& Download" (download-phrased private queries hit 10.9–44% CTR).
- hd-1080p: retitle to include "download" + replace boilerplate with real overrides.
- zoom-profile-picture: real content + German H2/FAQ (GSC shows German + Arabic queries);
  consider 301 → `/instazoom` (one-word brand query, 30/867).
- Link ALL variants from main page; full sibling mesh (copy youtube-thumbnail template, which
  is the gold standard).
- New variants (evidence-backed): `insta-pfp-viewer` (1,023 impr orphaned), `full-size`
  ("instadp" 1,191 impr), after download ships.
- Replace dp-variant boilerplate that leaks SEO-ops language ("Long-tail keyword intent
  matching") — doorway signal.
- **Add instagram-dp to the sitewide footer** (your strongest page isn't in it; channel-checker is).

**Channel-checker** (~4K availability impressions at 0.15% CTR — dead snippet):
- Main title → `YouTube Name Checker — Is That Channel Name or @Handle Taken?`; H1 →
  "YouTube Name & Handle Checker" (STOP saying "Availability" on main — the
  channel-name-checker variant becomes sole owner of availability phrasing → kills the
  5-way snippet rotation).
- Main page must link its 4 variants (currently links zero — broken hub chain).
- 301 `handle-availability-2026` → `handle-availability` (dated slug decays every January).

# PHASE 2 — Prune & consolidate (weeks 1–2) — sharpen topical authority

- **Noindex the ~36 RETIRE pages** (mortgage, bmi, percentage, currency, length, timezone,
  word-counter, lorem-ipsum, ai-text-detector, paraphraser, summarizer, pet-names,
  device-info, etc. — full lists in 04a–04c). Keep tools live for users; add to
  `lib/noindex.ts` + drop from sitemap/IndexNow. This is the teal.com lesson: dead generic
  pages dilute what Google thinks the site is about.
- **Execute the ~19 CONSOLIDATE merges with 301s**: bmr+calorie→tdee-macro;
  credit-card-payoff→debt-payoff; retirement-planner→retirement-calculator;
  tax-bracket→tax; tip→bill-splitter; investment→compound-interest;
  payment/amortization/interest-rate→loan; json-xml→xml-to-json;
  totp-qr-code-generator→otp-generator (identical component!); keyword-density→word-counter
  decision; security-tools hub fate.
- **Batch the ~20 REPUBLISH slugs** (one deploy, 301 all): paypal-fee→paypal-fee-calculator;
  future-age→how-old-will-i-be; anniversary→anniversary-calculator;
  json-toml→json-to-toml (+3 TOML pairs); color-palette→color-palette-generator;
  slugify-string→url-slug-generator; quarterly-tax-estimator→quarterly-tax-calculator;
  saas-payback→cac-payback-calculator; password-strength-analyzer→password-strength-checker;
  auth-generator→basic-auth-header-generator; blog-titles→blog-title-generator; etc.
  Per Quaid: the new slug gets judged with TODAY'S topical authority, not 2025's.

# PHASE 3 — Build only in winnable indexes (weeks 2–6)

Rank-ordered by evidence strength:

1. **Age/relationship answer cluster** (proven: 642+311+201+177+654 impr on question queries):
   hub = age-calculator; spokes = how-old-will-i-be (republished future-age) + programmatic
   answer-first pages "how old will I be in 2030/2040/2050", "how long have we been
   together", monthsary (deepened, de-cannibalized), anniversary-calculator, conception
   (the least-linked proven winner — feed it links + "when did I conceive if due [month]"
   variants). Every answer in sentence 1; chain-linked hub→spoke→spoke.
2. **Regex language variants**: ruby-regex-tester (already ranks on the GENERIC page!),
   python-, golang-, php-, java-; generic page becomes hub.
3. **PayPal fee cluster**: paypal-fee-calculator + goods-and-services page deepened; links
   from homepage + a blog post.
4. **pdf-signature-checker** satellites ("verify pdf signature online", "check if pdf is
   digitally signed") — the only PDF niche the giants don't serve.
5. **Byte-conversion children**: bytes-to-mb, bytes-to-kb, kb-to-mb (numeric queries are the
   only converter demand; answer in sentence 1).
6. **Zero-code platform variants**: github-actions-cron-generator,
   kubernetes-cronjob-schedule-generator, tailwind-gradient-generator, wifi-qr-code-generator,
   break-even-roas-calculator, doi-to-bibtex, isbn-to-citation, song-idea-generator,
   kokoro-tts-online, flesch-kincaid/smog/gunning-fog calculators, sales-tax state pages.
7. **INVEST pushes**: ai-image-detector, ai-api-cost-calculator (ADD IT TO ITS OWN HUB — it's
   missing), ai-code-detector, hmac, ulid, otp, image-steganography (URL-inspect first — zero
   impressions despite perfect setup = likely indexation), outlook-safelink-decoder,
   freelance-rate, zakat (before Ramadan), biological-age, cortisol-peak.

# PHASE 4 — Systemic (ongoing)

- **Internal-link architecture**: every new/INVEST page must be reachable by contextual
  in-content links from a page that gets traffic — not just sitemap/menus (159
  discovered-not-indexed pages are the receipt). Fix best-page orphaning (strongest pages
  consistently have the fewest inbound links).
- **Content engine**: blog has 5 posts. 1–2 posts/week targeting question queries in the
  winnable clusters, each linking 3–5 tool pages with keyword anchors. Use GSC page-2 phrases
  as H2s on pages that already get impressions (Quaid's cornerstone move).
- **CWV**: all pages fail INP/CLS/LCP on mobile. Reserve fixed heights for AdSense slots and
  ToolLoader placeholders; audit INP on the heavy tool components.
- **Backlinks**: nothing here fixes zero authority. Partner swaps (Quaid's playbook),
  Bing Webmaster Tools competitor-backlink mining, one linkable asset in the IG niche
  (e.g. Instagram profile-picture size/format reference study).
- **Measurement cadence**: after each phase, GSC → compare 28d windows per cluster; expect
  title-CTR effects in ~2 weeks, republish effects in 2–6 weeks. Do NOT revert titles again
  in under 4 weeks (the June 10→21 whiplash destroyed the download page and muddied all data).

## What NOT to do (mistakes the data already convicted)
1. No more new tools in saturated categories — 150 zero-impression pages is the verdict.
2. No more metadata polishing on RETIRE pages ("table stakes on unwinnable SERPs").
3. No title churn faster than 4 weeks; no reverts that delete pages the sitemap references.
4. No keyword walls: alternateName stuffing, "Same Tool, Many Names" sections, 30–111-item
   FAQ dumps (savings-tracker has 44!) — all are quality-signal liabilities now.
5. Don't chase queries you don't want: scam-intent ("seed phrase with balance") and
   leaked-token hunters are matching you today — that's a trust problem, not traffic.
