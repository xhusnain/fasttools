# FastTools SEO Audit Progress — 200-Tool Deep Audit

> One-at-a-time deep SEO audit of every FastTools tool. Per tool:
> read code → identify GSC queries → research competitors → rewrite
> title/meta → improve AEO content (quickAnswer, definition, key
> takeaways) → improve GEO content (LLM-citable patterns) → add
> internal links → optionally split into variant pages → build + commit
> → tick off below.

> ⚠️ **2026 policy update (May 2026) — read `.claude/memory/seo-skill.md` first.**
> FAQ rich results were deprecated **May 7 2026** (HowTo back in 2023), and
> Google's official AI guide says to stop chasing `llms.txt`/`ai.txt`, synonym
> walls, and verbatim People-Also-Ask copy. The methodology + depth standards
> below are revised to match. **Net: keep the deep `aboutTool` work — that's the
> real win — and drop the stuffing.**

**Already ranking — SKIP:** `/social-media-tools/instagram-dp` (32,947 imp / 307 clicks — defended, do not touch)

**Status legend:** [ ] not started · [~] partial (titles/meta only) · [x] deep done

**Visibility rule added 2026-06-04:** `[x]` only means a page has been
structurally/deep-content improved. It does **not** mean SEO is strong. If a
tool has no pasted-query GSC evidence, keep treating it as weak until
page-level GSC data proves otherwise. See
`docs/seo/gsc-visibility-buckets-2026-06-04.md`.

---

## Discovery audit — 2026-06-03

Goal: find tools that exist in the sitemap but are weakly discoverable from
FastTools itself. These are likely candidates for no impressions, very low
impressions, or impressions with no clicks until GSC page-level data confirms
the exact bucket.

**Fixed in this pass**

- All 179 static tool pages are now present in `app/data/categories-data.ts`.
- All 179 static tool pages are now present in `lib/search-data.ts`.
- The first 19 highest-risk hidden pages were added to `data/navigation.ts`.
- Semantic keyword/query map added at `docs/seo/tool-semantic-keyword-map-2026-06-03.md`.
- `/finance-tools/paypal-fee` started as the first content-semantic rewrite:
  added definition, quick answer, key takeaways, and current 2026 fee language.
- First finance semantic batch also started:
  `/finance-tools/salary-calculator`, `/finance-tools/tip-calculator`,
  `/finance-tools/invoice-generator`, and `/finance-tools/bill-splitter`
  now have definition, quick answer, and key takeaways blocks.
- Full semantic answer-field audit completed:
  all `179` static tool pages now have `definition`, `quickAnswer`, and
  `keyTakeaways` fields for top-of-page semantic extraction.
- GSC visibility bucket tracker added:
  `36` base tools have pasted-query visibility evidence and `143` base tools
  are weak until proven otherwise.
- First non-finance/non-calculator weak-bucket content pass started:
  `/converters/xml-json` and `/image-tools/image-to-text` now have deeper
  semantic sections, query-intent FAQs, use cases, pitfalls, and related-tool
  links.
- Converter/image/PDF cluster pass started:
  `/image-tools/image-compressor` and `/pdf-tools/pdf-compressor` were corrected
  for tool-accurate SEO claims and expanded around KB/MB targets, upload limits,
  compression levels, scan/photo PDFs, searchability limits, and workflow links.
- Continued image/PDF weak-bucket batch:
  `/image-tools/image-resizer`, `/image-tools/image-cropper`,
  `/pdf-tools/image-to-pdf`, and `/pdf-tools/pdf-to-image` were corrected
  against actual tool behavior and expanded for exact-size, aspect-ratio,
  page-range, JPG/PNG/WebP, and workflow intent.
- Remaining-category weak-bucket pass started:
  `/web-tools/dns-ssl-checker`, `/web-tools/whois-lookup`, and
  `/security-tools/image-steganography` were corrected against actual tool
  behavior and expanded for DNS/SSL limits, RDAP availability, TXT verification,
  LSB capacity, PNG preservation, password encryption, and decode-limit intent.
- SEO-tools weak-bucket batch completed:
  `/seo-tools/blog-titles`, `/seo-tools/keyword-density`,
  `/seo-tools/lorem-ipsum`, `/seo-tools/schema-markup-generator`, and
  `/seo-tools/text-similarity-checker` were corrected for actual UI behavior,
  stale-year output, schema policy, text similarity algorithm limits, and
  placeholder-text output modes.
- Education weak-bucket pass completed:
  `/education-tools/citation-generator` now avoids stale Chicago-edition and
  brittle competitor/paywall claims, and adds clearer DOI/ISBN metadata and
  final style-guide review guidance.
- Dev-tools weak-bucket pass started:
  `/dev-tools/diff-checker`, `/dev-tools/sql-to-json`, and
  `/dev-tools/timestamp-converter` were corrected against actual component
  behavior. SQL-to-JSON now targets simple `INSERT INTO ... VALUES` conversion
  instead of unsupported dump/CREATE/SELECT workflows; diff checker now describes
  its `.diff` export as review-focused unified-style text, not an applyable Git
  patch; timestamp converter now distinguishes microsecond timestamp input from
  date-to-seconds/milliseconds output.
- Dev-tools noindex/page-claim pass continued:
  `/dev-tools/color-palette` had absolute privacy/no-limit language softened
  while preserving supported harmony, image extraction, WCAG, and export intent;
  `/dev-tools/html-wysiwyg-editor` was rewritten around the actual
  contenteditable toolbar and now clearly says links, images, tables, colors,
  font controls, source editing, and page-builder features are not supported.
- Dev-tools security/encoding pass continued:
  `/dev-tools/base64-encoder` now accurately describes file upload as Base64
  payload output rather than a full data-URI generator, and no longer claims
  no size/rate limits. `/dev-tools/jwt-decoder` now avoids no-logging/no-limit
  promises and the UI no longer presents its demo signature check as real
  cryptographic verification; share-link copy now warns that token data is
  encoded in the URL.
- Dev-tools JSON workflow pass continued:
  `/dev-tools/json-to-csv` now actually supports union headers across rows,
  dot-notation flattening, JSON-stringified arrays, comma/semicolon/tab
  delimiters, UTF-8 BOM downloads, and proper CSV escaping. `/dev-tools/json-diff`
  was rewritten around its real path-level added/removed/modified output and no
  longer claims JSON Patch export, match-by-key arrays, ignore-path rules, or
  patch downloads.
- Dev-tools HTML/Markdown pass continued:
  `/dev-tools/html-beautifier` now describes the actual beautify/minify,
  2/4/8-space indent, comment, stats, copy, and download workflow instead of a
  full HTML Tidy/minifier. `/dev-tools/html-to-markdown` now uses a DOM-based
  converter for common article/document tags and has copy-accurate SEO.
  `/dev-tools/markdown-previewer` now documents actual marked/GFM preview
  behavior, includes basic rendered-HTML sanitization, and no longer claims
  syntax highlighting, Mermaid, math, TOC, export, or exact GitHub parity.
- Dev-tools visual/scheduling pass continued:
  `/dev-tools/css-gradient-generator` now avoids unsupported OKLCH, mesh,
  alpha, and universal Tailwind-output claims; `/dev-tools/hex-to-rgb` now
  targets real HEX/RGB/HSL/RGBA/HSLA behavior instead of HSV/OKLCH/named-color
  claims; `/dev-tools/slugify-string` now matches the actual slug rules with
  improved accent normalization; `/dev-tools/cron-expression-generator` now
  targets standard 5-field cron and its next-run preview handles the common Unix
  day-of-month/day-of-week OR behavior.
- Dev-tools reference/cost pass continued:
  `/dev-tools/http-status-codes` now matches the actual searchable HTTP/SMTP/FTP
  reference and no longer claims Cloudflare vendor codes; `/dev-tools/mime-types`
  now targets the real `mime-db` lookup/table behavior; `/dev-tools/keycode-info`
  now displays `which`, `repeat`, and `isComposing`; `/dev-tools/user-agent-parser`
  now auto-loads the current UA and avoids bot/JSON/preset claims;
  `/dev-tools/cloudflare-workers-cost` now applies the paid-plan CPU inclusion
  and Durable Objects GB-second duration math; `/dev-tools/llm-training-cost`
  now frames cloud GPU pricing as approximate planning rates instead of stable
  guaranteed prices.
- Crawl blocker cleanup started:
  removed `noindex` from `/converters/xml-json`,
  `/seo-tools/text-similarity-checker`, `/dev-tools/sql-to-json`,
  `/dev-tools/color-palette`, and `/dev-tools/html-wysiwyg-editor` after their
  content rewrites, so the improved pages are not hidden from indexing.
- No accidental pasted/client text found in `app`, `lib`, or `data`.

**First hidden-page batch now exposed in categories + search + nav**

| Group | Paths |
|---|---|
| AI / dev | `/ai-tools/ai-api-cost-calculator`, `/dev-tools/llm-training-cost`, `/dev-tools/cloudflare-workers-cost` |
| Calculators / converters | `/calculator/tdee-macro-calculator`, `/calculator/biological-age-calculator`, `/calculator/cortisol-peak-calculator`, `/converters/morse-code` |
| Finance | `/finance-tools/debt-payoff-calculator`, `/finance-tools/freelance-rate-calculator`, `/finance-tools/home-affordability-calculator`, `/finance-tools/net-worth-calculator`, `/finance-tools/quarterly-tax-estimator`, `/finance-tools/remote-work-savings`, `/finance-tools/rent-vs-buy-calculator`, `/finance-tools/saas-churn-calculator`, `/finance-tools/saas-payback-calculator`, `/finance-tools/zakat-calculator` |
| Social | `/social-media-tools/influencer-rate-calculator`, `/social-media-tools/tiktok-engagement-calculator` |

**Category/search omissions now fixed**

| Surface | Paths |
|---|---|
| Category cards | `/ai-tools/ai-paraphraser`, `/ai-tools/text-summarizer`, `/ai-tools/text-to-speech`, `/converters/roman-numeral`, `/crypto-tools/bip39-generator`, `/crypto-tools/encrypt-decrypt`, `/crypto-tools/hash-text`, `/crypto-tools/password-generator`, `/crypto-tools/password-strength-analyzer`, `/crypto-tools/rsa-generator`, `/crypto-tools/ulid-generator`, `/dev-tools/diff-checker`, `/dev-tools/sql-to-json`, `/dev-tools/timestamp-converter`, `/education-tools/citation-generator`, `/finance-tools/auto-loan-calculator`, `/finance-tools/tax-bracket-calculator`, `/fun-tools/meme-generator`, `/image-tools/background-remover`, `/seo-tools/text-similarity-checker`, `/seo-tools/word-counter`, `/web-tools/dns-ssl-checker`, `/web-tools/whois-lookup` |
| Internal search | `/ai-tools/token-to-word-converter`, `/finance-tools/auto-loan-calculator`, `/finance-tools/salary-calculator`, `/image-tools/image-compressor` |

**Next one-by-one SEO order**

1. Fix pages with GSC impressions but no/low clicks: converters, PayPal/finance,
   OTP/token, and YouTube/Instagram variants from the pasted query list.
2. Then work through tools absent from the pasted query list, starting with the
   pages that were hidden from category/search before this pass.
3. Request or export GSC page-level data to separate true zero-impression pages
   from pages that have impressions under uncopied queries.

---

## Group A — Highest GSC near-miss (do first, biggest immediate ROI)

| # | Tool | Path | GSC Signal | Status |
|---|---|---|---|---|
## Group B — Mid signal, growth potential (~5–50 GSC imp)

| # | Tool | Path | Status |
|---|---|---|---|
| 21 | YouTube Thumbnail Downloader | `/social-media-tools/youtube-thumbnail` | [x] |
| 22 | Influencer Rate Calculator | `/social-media-tools/influencer-rate-calculator` | [x] |
| 23 | Link-in-Bio Generator | `/social-media-tools/link-in-bio` | [x] |
| 23a | Hashtag Counter | `/social-media-tools/hashtag-counter` | [x] |
| 23b | Instagram DP | `/social-media-tools/instagram-dp` | [x] |
| 23c | TikTok Engagement Calculator | `/social-media-tools/tiktok-engagement-calculator` | [x] |
| 23d | YouTube Channel Name Generator | `/social-media-tools/youtube-channel-name-generator` | [x] |
| 23e | YouTube Tag Extractor | `/social-media-tools/youtube-tags` | [x] |
| 24 | Birthday Countdown | `/fun-tools/birthday-countdown` | [x] |
| 24a | Anniversary | `/fun-tools/anniversary` | [x] |
| 24b | Future Age | `/fun-tools/future-age` | [x] |
| 25 | Countdown Timer & Stopwatch | `/fun-tools/countdown-timer` | [x] |
| 26 | Wheel Spinner | `/fun-tools/wheel-spinner` | [x] |
| 27 | Meme Generator | `/fun-tools/meme-generator` | [x] |
| 28 | Pomodoro Timer | `/fun-tools/pomodoro-timer` | [x] |
| 29 | Age Calculator | `/calculator/age-calculator` | [x] |
| 30 | BMI Calculator | `/calculator/bmi-calculator` | [x] |
| 31 | BMR Calculator | `/calculator/bmr-calculator` | [x] |
| 32 | Calorie Calculator | `/calculator/calorie-calculator` | [x] |
| 33 | TDEE Macro Calculator | `/calculator/tdee-macro-calculator` | [x] |
| 34 | Percentage Calculator | `/calculator/percentage-calculator` | [x] |
| 35 | GPA Calculator | `/calculator/gpa-calculator` | [~] |
| 36 | Scientific Calculator | `/calculator/scientific-calculator` | [x] |
| 37 | Date Difference Calculator | `/calculator/date-difference` | [~] |
| 38 | Time Duration Calculator | `/calculator/time-duration` | [x] |
| 39 | Love Calculator | `/calculator/love-calculator` | [~] |
| 40 | Ovulation Calculator | `/calculator/ovulation-calculator` | [x] |
| 41 | Body Fat Calculator | `/calculator/body-fat-calculator` | [x] |
| 42 | Biological Age Calculator | `/calculator/biological-age-calculator` | [~] |
| 43 | Cortisol Peak Calculator | `/calculator/cortisol-peak-calculator` | [~] |
| 44 | Fraction Calculator | `/calculator/fraction-calculator` | [x] |
| 45 | Triangle Calculator | `/calculator/triangle-calculator` | [x] |
| 46 | Standard Deviation Calculator | `/calculator/standard-deviation-calculator` | [x] |
| 47 | Conversion Calculator | `/calculator/conversion-calculator` | [x] |
| 48 | Pace Calculator | `/calculator/pace-calculator` | [x] |
| 48a | Pregnancy Calculator | `/calculator/pregnancy-calculator` | [x] |
| 48b | Pregnancy Conception Calculator | `/calculator/pregnancy-conception-calculator` | [x] |
| 48c | Concrete Calculator | `/calculator/concrete-calculator` | [x] |
| 48d | IP Subnet Calculator | `/calculator/ip-subnet-calculator` | [x] |

## Group C — Converters

| # | Tool | Path | Status |
|---|---|---|---|
| 49 | File Size Converter | `/converters/file-size` | [ ] |
| 50 | Length Converter | `/converters/length` | [ ] |
| 51 | Temperature Converter | `/converters/temperature` | [ ] |
| 52 | Text Case Converter | `/converters/text-case` | [ ] |
| 53 | Timezone Converter | `/converters/timezone` | [ ] |
| 54 | List Converter | `/converters/list-converter` | [ ] |
| 55 | Base64 File Converter | `/converters/base64-file` | [ ] |
| 56 | YAML ↔ JSON | `/converters/yaml-json` | [ ] |
| 57 | JSON ↔ YAML | `/converters/json-yaml` | [ ] |
| 58 | TOML ↔ JSON | `/converters/toml-json` | [ ] |
| 59 | JSON ↔ TOML | `/converters/json-toml` | [ ] |
| 60 | YAML ↔ TOML | `/converters/yaml-toml` | [ ] |
| 61 | TOML ↔ YAML | `/converters/toml-yaml` | [ ] |
| 62 | XML ↔ JSON | `/converters/xml-json` | [x] |
| 63 | JSON ↔ XML | `/converters/json-xml` | [ ] |
| 64 | Morse Code | `/converters/morse-code` | [ ] |
| 65 | NATO Phonetic | `/converters/nato-phonetic` | [ ] |
| 66 | Roman Numeral | `/converters/roman-numeral` | [ ] |
| 67 | ASCII ↔ Binary | `/converters/ascii-binary` | [ ] |
| 68 | Integer Base | `/converters/integer-base` | [ ] |
| 69 | Unicode | `/converters/unicode` | [ ] |

## Group D — Crypto / Security

| # | Tool | Path | Status |
|---|---|---|---|
| 70 | Password Generator | `/crypto-tools/password-generator` | [x] |
| 71 | Encrypt / Decrypt | `/crypto-tools/encrypt-decrypt` | [x] |
| 72 | Hash Text | `/crypto-tools/hash-text` | [x] |
| 73 | HMAC Generator | `/crypto-tools/hmac-generator` | [x] |
| 74 | RSA Key Pair Generator | `/crypto-tools/rsa-generator` | [x] |
| 75 | Bcrypt | `/crypto-tools/bcrypt` | [x] |
| 76 | Token Generator | `/crypto-tools/token-generator` | [x] |
| 77 | UUID Generator | `/crypto-tools/uuid-generator` | [x] |
| 78 | ULID Generator | `/crypto-tools/ulid-generator` | [x] |
| 79 | Password Strength Analyzer | `/crypto-tools/password-strength-analyzer` | [x] |
| 80 | Image Steganography | `/security-tools/image-steganography` | [x] |
| 80a | BIP39 Mnemonic Generator | `/crypto-tools/bip39-generator` | [x] |
| 80b | OTP / TOTP Generator | `/crypto-tools/otp-generator` | [x] |

## Group E — Dev Tools

| # | Tool | Path | Status |
|---|---|---|---|
| 81 | Diff Checker | `/dev-tools/diff-checker` | [x] |
| 82 | Color Palette | `/dev-tools/color-palette` | [x] |
| 83 | CSS Gradient Generator | `/dev-tools/css-gradient-generator` | [x] |
| 84 | JWT Decoder | `/dev-tools/jwt-decoder` | [x] |
| 85 | JSON Diff | `/dev-tools/json-diff` | [x] |
| 86 | JSON to CSV | `/dev-tools/json-to-csv` | [x] |
| 87 | SQL to JSON | `/dev-tools/sql-to-json` | [x] |
| 88 | HTML Beautifier | `/dev-tools/html-beautifier` | [x] |
| 89 | HTML to Markdown | `/dev-tools/html-to-markdown` | [x] |
| 90 | Markdown Previewer | `/dev-tools/markdown-previewer` | [x] |
| 91 | HTML WYSIWYG Editor | `/dev-tools/html-wysiwyg-editor` | [x] |
| 92 | Base64 Encoder | `/dev-tools/base64-encoder` | [x] |
| 93 | Cron Expression Generator | `/dev-tools/cron-expression-generator` | [x] |
| 94 | MIME Types | `/dev-tools/mime-types` | [x] |
| 95 | HTTP Status Codes | `/dev-tools/http-status-codes` | [x] |
| 96 | Keycode Info | `/dev-tools/keycode-info` | [x] |
| 97 | Hex to RGB | `/dev-tools/hex-to-rgb` | [x] |
| 98 | Slugify String | `/dev-tools/slugify-string` | [x] |
| 99 | User-Agent Parser | `/dev-tools/user-agent-parser` | [x] |
| 100 | LLM Training Cost | `/dev-tools/llm-training-cost` | [x] |
| 101 | Cloudflare Workers Cost | `/dev-tools/cloudflare-workers-cost` | [x] |
| 101a | Regex Tester | `/dev-tools/regex-tester` | [x] |

## Group F — AI Tools

| # | Tool | Path | Status |
|---|---|---|---|
| 102 | Text Summarizer | `/ai-tools/text-summarizer` | [x] |
| 103 | Text to Speech | `/ai-tools/text-to-speech` | [x] |
| 104 | AI Text Detector | `/ai-tools/ai-text-detector` | [x] |
| 105 | AI Code Detector | `/ai-tools/ai-code-detector` | [x] |
| 106 | AI Readability Analyzer | `/ai-tools/ai-readability-analyzer` | [x] |
| 107 | AI Paraphraser | `/ai-tools/ai-paraphraser` | [x] |
| 108 | QR Generator | `/ai-tools/qr-generator` | [x] |
| 109 | Caption Generator | `/ai-tools/caption-generator` | [x] |
| 110 | Lyrics Generator | `/ai-tools/lyrics-generator` | [x] |
| 111 | Pet Names | `/ai-tools/pet-names` | [x] |
| 112 | Token to Word Converter | `/ai-tools/token-to-word-converter` | [x] |

## Group G — Finance

| # | Tool | Path | Status |
|---|---|---|---|
| 113 | Loan Calculator | `/finance-tools/loan-calculator` | [ ] |
| 114 | Auto Loan Calculator | `/finance-tools/auto-loan-calculator` | [ ] |
| 115 | Mortgage Calculator | `/finance-tools/mortgage-calculator` | [ ] |
| 116 | Amortization Calculator | `/finance-tools/amortization-calculator` | [ ] |
| 117 | Compound Interest | `/finance-tools/compound-interest` | [ ] |
| 118 | Credit Card Payoff | `/finance-tools/credit-card-payoff` | [ ] |
| 119 | Debt Payoff Calculator | `/finance-tools/debt-payoff-calculator` | [ ] |
| 120 | Discount Calculator | `/finance-tools/discount-calculator` | [ ] |
| 121 | Inflation Calculator | `/finance-tools/inflation-calculator` | [ ] |
| 122 | Interest Rate Calculator | `/finance-tools/interest-rate-calculator` | [ ] |
| 123 | Investment Calculator | `/finance-tools/investment-calculator` | [ ] |
| 124 | Retirement Calculator | `/finance-tools/retirement-calculator` | [ ] |
| 125 | Retirement Planner | `/finance-tools/retirement-planner` | [ ] |
| 126 | Home Affordability Calculator | `/finance-tools/home-affordability-calculator` | [ ] |
| 127 | Rent vs Buy Calculator | `/finance-tools/rent-vs-buy-calculator` | [ ] |
| 128 | Salary Calculator | `/finance-tools/salary-calculator` | [ ] |
| 129 | Tax Calculator | `/finance-tools/tax-calculator` | [ ] |
| 130 | Tax Bracket Calculator | `/finance-tools/tax-bracket-calculator` | [ ] |
| 131 | Quarterly Tax Estimator | `/finance-tools/quarterly-tax-estimator` | [ ] |
| 132 | Sales Tax Calculator | `/finance-tools/sales-tax-calculator` | [ ] |
| 133 | Net Worth Calculator | `/finance-tools/net-worth-calculator` | [ ] |
| 134 | Payment Calculator | `/finance-tools/payment-calculator` | [ ] |
| 135 | Finance Calculator | `/finance-tools/finance-calculator` | [ ] |
| 136 | Bill Splitter | `/finance-tools/bill-splitter` | [ ] |
| 137 | Tip Calculator | `/finance-tools/tip-calculator` | [ ] |
| 138 | Invoice Generator | `/finance-tools/invoice-generator` | [ ] |
| 139 | Freelance Rate Calculator | `/finance-tools/freelance-rate-calculator` | [ ] |
| 140 | Zakat Calculator | `/finance-tools/zakat-calculator` | [ ] |
| 141 | SaaS Churn Calculator | `/finance-tools/saas-churn-calculator` | [ ] |
| 142 | SaaS Payback Calculator | `/finance-tools/saas-payback-calculator` | [ ] |
| 143 | Startup Runway Calculator | `/finance-tools/startup-runway-calculator` | [ ] |
| 144 | Remote Work Savings | `/finance-tools/remote-work-savings` | [ ] |
| 145 | ROAS Calculator | `/ad-tools/roas-calculator` | [ ] |

## Group H — Image / PDF

| # | Tool | Path | Status |
|---|---|---|---|
| 146 | Image Cropper | `/image-tools/image-cropper` | [x] |
| 147 | Image Compressor | `/image-tools/image-compressor` | [x] |
| 148 | Image Resizer | `/image-tools/image-resizer` | [x] |
| 149 | Image to Text (OCR) | `/image-tools/image-to-text` | [x] |
| 149a | Image to PDF | `/pdf-tools/image-to-pdf` | [x] |
| 150 | AI Image Detector | `/image-tools/ai-image-detector` | [ ] |
| 151 | PDF Sign | `/pdf-tools/pdf-sign` | [ ] |
| 152 | PDF Signature Checker | `/pdf-tools/pdf-signature-checker` | [ ] |
| 153 | PDF Splitter / Merger | `/pdf-tools/pdf-splitter-merger` | [ ] |
| 154 | PDF Unlocker | `/pdf-tools/pdf-unlocker` | [ ] |
| 155 | PDF Compressor | `/pdf-tools/pdf-compressor` | [x] |
| 156 | PDF to Word | `/pdf-tools/pdf-word-converter` | [ ] |
| 157 | PDF to Image | `/pdf-tools/pdf-to-image` | [x] |

## Group I — SEO / Web / Education

| # | Tool | Path | Status |
|---|---|---|---|
| 158 | Word Counter | `/seo-tools/word-counter` | [x] |
| 159 | Keyword Density | `/seo-tools/keyword-density` | [x] |
| 160 | Schema Markup Generator | `/seo-tools/schema-markup-generator` | [x] |
| 161 | Lorem Ipsum | `/seo-tools/lorem-ipsum` | [x] |
| 162 | Blog Titles | `/seo-tools/blog-titles` | [x] |
| 162a | Meta Tags | `/seo-tools/meta-tags` | [x] |
| 163 | Text Similarity Checker | `/seo-tools/text-similarity-checker` | [x] |
| 164 | URL Encoder | `/web-tools/url-encoder` | [x] |
| 165 | URL Parser | `/web-tools/url-parser` | [x] |
| 166 | HTML Escape | `/web-tools/html-escape` | [x] |
| 167 | Device Info | `/web-tools/device-info` | [x] |
| 168 | Auth Generator | `/web-tools/auth-generator` | [x] |
| 169 | Outlook SafeLink Decoder | `/web-tools/outlook-safelink-decoder` | [x] |
| 170 | DNS / SSL Checker | `/web-tools/dns-ssl-checker` | [x] |
| 171 | Citation Generator | `/education-tools/citation-generator` | [x] |

## Group J — Variant pages (already in sitemap)

| # | Tool | Path | Status |
|---|---|---|---|
| 172 | Insta DP — Private Account | `/social-media-tools/instagram-dp/private-account` | [ ] |
| 173 | Insta DP — HD 1080p | `/social-media-tools/instagram-dp/hd-1080p` | [ ] |
| 174 | Insta DP — PC Viewer | `/social-media-tools/instagram-dp/pc-viewer` | [ ] |
| 175 | Insta DP — Zoom Profile | `/social-media-tools/instagram-dp/zoom-profile-picture` | [ ] |
| 176 | Insta DP — Anonymous | `/social-media-tools/instagram-dp/anonymous-viewer` | [ ] |
| 177 | Channel Checker — Handle Avail 2026 | `/social-media-tools/channel-checker/handle-availability-2026` | [ ] |
| 178 | Channel Checker — Name Checker | `/social-media-tools/channel-checker/channel-name-checker` | [ ] |
| 179 | Channel Checker — Check If Taken | `/social-media-tools/channel-checker/check-if-taken` | [ ] |

## Group K — Tools to potentially BUILD (huge GSC imp, no tool exists)

| # | Tool idea | GSC Signal | Status |
|---|---|---|---|
| 180 | TikTok Video Downloader (no watermark) | 337 + 316 + 262 + 235 + 173 imp on various TikTok downloader queries | [ ] (build) |
| 181 | Conception Date Calculator (standalone) | "date of conception calculator" 142 imp, "estimated conception date" 21 imp | [ ] (consider variant of pregnancy-conception) |

---

## Methodology per tool

For each tool, do this in order:

1. **Read** the current `page.tsx` and any associated `/[slug]/` variants
2. **Pull GSC queries** for that tool from the user's pasted data
3. **WebSearch** top 3 competitors ranking for the dominant query
4. **Audit**: title, meta description, H1, quickAnswer, definition, keyTakeaways, FAQs, useCases, related tools, schema, internal links
5. **Rewrite** title/meta to lead with the dominant query phrase (preserve "Free" once, no keyword stuffing)
6. **Improve AEO**: tight `definition` ≤ 30 words, `quickAnswer` ≤ 2 sentences, 5–7 punchy `keyTakeaways`
7. **Improve GEO** (= just good SEO): add a comparison vs the top competitor (use real names: namechk, namecheckup, removebg, paypal.com fees page, etc.). **Skip synonym/term-mapping walls** — Google resolves synonyms itself; one natural mention of common names is enough
8. **Internal links**: add 4–6 contextually relevant `relatedTools` entries
9. **Variants**: if a tool has 3+ distinct keyword clusters with real GSC impressions, create variant pages (like instagram-dp has 5 variants)
10. **Build verify**: `npx tsc --noEmit` minimum, full `npm run build` every 3–5 tools
11. **Commit** with tool name in subject
12. **Tick off** above and remove the row

---

## Cumulative progress

- Total tools: 179 + 8 variants = 187
## Depth standards

After user feedback that batches 24+ were too shallow (just related-tools
swaps + 1-2 FAQs), the **new depth target** for every tool is:

1. **WebFetch top 5 competitors** for the dominant query — capture their
   real `<title>`, `<meta description>`, H1, H2s, FAQ questions **as research /
   gap analysis** (to find what to cover & beat — not to copy; see step 9)
2. Rewrite **title** following competitor pattern (modifier-stack title
   like "Mortgage Calculator with PMI, Taxes & Insurance (May 2026)")
3. Rewrite **meta description** with current data points (rates,
   prices, percentages — whatever's current for that tool's domain)
4. Set **schemaOptions.alternateName** to a *handful* of genuine alternate
   names users actually search (real product/competitor names + natural
   synonyms) — **not** a 10+ keyword wall (Google handles synonyms itself)
5. Rewrite **schemaOptions.featureList** with 12-15 specific features
   matching what competitors actually showcase
6. Update header.title + header.description to match
7. Rewrite **overview**, **definition**, **quickAnswer**,
   **keyTakeaways** with current data
8. Build **aboutTool** with 6-10 deep sections (THE win — first-hand substance):
   - The actual formula or math
   - A current-data reference table (rates, prices, limits — dated)
   - Comparison tables (15 vs 30, FHA vs conventional, etc.)
   - Competitor comparison table with honest assessment (incl. where they win)
   - A short trust note (how we compute / what we don't store)
   - ~~"Same tool, many names" synonym block~~ → **dropped; reads as stuffing**
9. Build **5–10 high-quality FAQs** answering real People-Also-Ask questions
   **in our own words** — original, useful answers; **never paste PAA verbatim**
   (recycled copy risks the scaled-content-abuse policy). Quality over count.
   FAQ rich results are gone (May 2026); the content is for users + AI citation
10. Rewrite **relatedTools** with 8-10 workflow-relevant crosslinks

## Progress

- Site-wide infrastructure: ✅ done
- Group A (20 tools): ✅ Deep audits (close to new standard but pre-dating it)
- Groups B-D (~50 tools): partial — internal linking improved
- **Tools at NEW full deep standard: 45/199**
  - Finance (33): mortgage, loan, auto-loan, retirement, compound-interest,
    investment, credit-card-payoff, debt-payoff, amortization, interest-rate,
    tax, salary, net-worth, inflation, home-affordability, rent-vs-buy,
    sales-tax, tip, discount, bill-splitter, invoice-generator, payment,
    finance, tax-bracket, retirement-planner, quarterly-tax-estimator,
    freelance-rate, zakat, saas-churn, saas-payback, startup-runway,
    remote-work-savings, ROAS
  - Image (6): cropper, compressor, resizer, image-to-text, ai-image-detector,
    background-remover
  - PDF (7): pdf-sign, pdf-signature-checker, pdf-splitter-merger,
    pdf-unlocker, pdf-compressor, pdf-word-converter, pdf-to-image
- All evergreen — no specific date references
- Total tools touched: 101 / 199
- Build verified clean throughout
