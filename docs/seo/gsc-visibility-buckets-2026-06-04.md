# FastTools GSC Visibility Buckets — 2026-06-04

This tracker uses the user's GSC query paste as the SEO signal source.

Important distinction:

- A page can be structurally complete and still be weak SEO.
- If a tool has no visible GSC query evidence, treat it as weak until page-level
  GSC data proves otherwise.
- If a tool has impressions but no/low clicks, treat it as a CTR and intent-match
  rewrite candidate.
- Only pages with real clicks/rank movement should be defended instead of
  rewritten aggressively.

## Current Bucket Counts

| Bucket | Count | Meaning |
|---|---:|---|
| Base tool pages in category data | 179 | Static tool routes currently exposed in categories/search/sitemap |
| Tools with pasted-query visibility evidence | 36 | Some GSC query evidence exists, even if clicks are low |
| Weak until proven otherwise | 143 | No pasted-query evidence; needs semantic rewrite or GSC page export confirmation |

These counts exclude dynamic variant pages. Instagram DP has 5 variant pages and
YouTube channel checker has 4 variant pages in the sitemap; those should be
tracked separately because their intent is narrower than the parent tool.

## Weak-Bucket Rewrite Log

| Date | Category | Routes | What changed |
|---|---|---|---|
| 2026-06-04 | Converters | `/converters/xml-json` | Expanded intent coverage for XML to JSON, SOAP, RSS/Atom, sitemap.xml, attributes, namespaces, arrays, CDATA, and conversion pitfalls |
| 2026-06-04 | Image tools | `/image-tools/image-to-text` | Expanded OCR coverage for screenshots, scanned docs, receipts, invoices, language choice, handwriting limits, accuracy, and privacy review |
| 2026-06-04 | Image tools | `/image-tools/image-compressor` | Corrected supported formats to JPG/PNG/WebP, removed unsupported GIF/EXIF/format-conversion claims, expanded KB/MB target, quality, resolution, and upload-limit intent |
| 2026-06-04 | PDF tools | `/pdf-tools/pdf-compressor` | Corrected compression behavior to image-based page rebuilding, removed false selectable-text/font-optimization claims, added searchability warning and scan/photo PDF intent |
| 2026-06-04 | Image tools | `/image-tools/image-resizer` | Corrected preset count and one-image workflow, removed false batch/Lanczos claims, expanded exact-size and social-dimension examples |
| 2026-06-04 | Image tools | `/image-tools/image-cropper` | Removed unsupported social preset and round-preview claims, expanded aspect-ratio, exact-pixel, output-format, and Canvas behavior coverage |
| 2026-06-04 | PDF tools | `/pdf-tools/image-to-pdf` | Added real 75-image and 25 MB per-image limits, expanded JPG/PNG output guidance for photos, scans, screenshots, and large PDFs |
| 2026-06-04 | PDF tools | `/pdf-tools/pdf-to-image` | Removed unsupported DPI, thumbnail, transparent PNG, and 500-page claims, tightened output-format and render-quality intent |
| 2026-06-04 | Web tools | `/web-tools/dns-ssl-checker` | Removed unsupported propagation/competitor labels and duplicate fingerprint copy, expanded DNS record, SSL expiry, TXT verification, and tool-limit coverage |
| 2026-06-04 | Web tools | `/web-tools/whois-lookup` | Removed unlimited-rate claim, added RDAP availability and registry-limit guidance, and strengthened domain lookup internal links |
| 2026-06-04 | Security tools | `/security-tools/image-steganography` | Corrected LSB capacity math and actual text-only single-image workflow, removed batch/bit-depth/capacity-indicator claims, expanded PNG, password, decode, and limitation coverage |
| 2026-06-04 | SEO tools | `/seo-tools/blog-titles`, `/seo-tools/keyword-density`, `/seo-tools/lorem-ipsum`, `/seo-tools/schema-markup-generator`, `/seo-tools/text-similarity-checker` | Corrected generator capabilities, removed unsupported scoring/ngram/export/HTML/diff/algorithm claims, updated 2026 title templates, and tightened schema guidance against current Google structured-data rules |
| 2026-06-04 | Education tools | `/education-tools/citation-generator` | Updated citation copy for Chicago author-date/current-edition reality, removed brittle competitor/paywall claims, and expanded DOI/ISBN metadata limits and final-review guidance |
| 2026-06-04 | Dev tools | `/dev-tools/diff-checker`, `/dev-tools/sql-to-json`, `/dev-tools/timestamp-converter` | Corrected diff output from applyable patch to review-focused unified-style text, rewrote SQL page around actual INSERT INTO VALUES support, fixed timestamp microsecond directionality, and refreshed crawl dates |
| 2026-06-04 | Dev tools | `/dev-tools/color-palette`, `/dev-tools/html-wysiwyg-editor` | Softened absolute palette privacy/limit claims, rewrote WYSIWYG page around actual contenteditable controls, removed unsupported tables/links/images/colors/source-editing claims, and refreshed crawl dates |
| 2026-06-04 | Dev tools | `/dev-tools/base64-encoder`, `/dev-tools/jwt-decoder` | Corrected Base64 file/data-URI wording, removed no-limit/no-upload overclaims, changed JWT verification UI/copy so it no longer implies browser-side cryptographic verification, and refreshed crawl dates |
| 2026-06-04 | Dev tools | `/dev-tools/json-to-csv`, `/dev-tools/json-diff` | Upgraded JSON-to-CSV to support union headers, dot-notation flattening, delimiters, BOM downloads, and robust escaping; rewrote JSON Diff around actual path-level results and removed unsupported patch/export/match-by-key claims |
| 2026-06-04 | Dev tools | `/dev-tools/html-beautifier`, `/dev-tools/html-to-markdown`, `/dev-tools/markdown-previewer` | Rewrote HTML Beautifier around actual beautify/minify/comment controls, upgraded HTML-to-Markdown to DOM-based common-tag conversion, added basic Markdown preview sanitization, and removed unsupported syntax-highlighting/math/Mermaid/export/URL claims |
| 2026-06-04 | Dev tools | `/dev-tools/css-gradient-generator`, `/dev-tools/hex-to-rgb`, `/dev-tools/slugify-string`, `/dev-tools/cron-expression-generator` | Corrected visual/scheduling tool copy around actual CSS/Tailwind gradient output, HEX/RGB/HSL-only color conversion, slugify normalization rules, and 5-field cron behavior; improved slug accent handling and cron next-run day-field semantics |
| 2026-06-04 | Dev tools | `/dev-tools/http-status-codes`, `/dev-tools/mime-types`, `/dev-tools/keycode-info`, `/dev-tools/user-agent-parser`, `/dev-tools/cloudflare-workers-cost`, `/dev-tools/llm-training-cost` | Corrected reference/cost pages around actual HTTP/SMTP/FTP data, mime-db lookup behavior, KeyboardEvent fields, ua-parser-js output, Cloudflare included allowances/GB-second duration math, and volatile GPU pricing limitations |

## Crawl Blockers Found

- `/dev-tools/sql-to-json` was still in `noindex` while also being listed in
  the sitemap. It has been removed from `noindex` after the page rewrite.
- `/seo-tools/text-similarity-checker` and `/converters/xml-json` were also
  removed from `noindex` because they were already audited and rewritten in this
  pass.
- `/dev-tools/color-palette` and `/dev-tools/html-wysiwyg-editor` were removed
  from `noindex` after their Dev Tools copy audit.

## Converter / Image / PDF Priority Plan

This group should be handled as a connected cluster because users often move
between image, PDF, and file-size workflows.

| Priority | Pages | Reason |
|---|---|---|
| 1 | `/converters/file-size`, `/converters/temperature`, `/converters/timezone` | Already have pasted-query evidence; improve CTR, examples, exact-value answers, and related internal links |
| 2 | `/image-tools/image-compressor`, `/image-tools/image-resizer`, `/image-tools/image-cropper`, `/image-tools/image-to-text` | High commercial/utility demand, strong workflow links to PDF/image conversion and upload limits |
| 3 | `/pdf-tools/image-to-pdf`, `/pdf-tools/pdf-compressor`, `/pdf-tools/pdf-to-image`, `/pdf-tools/pdf-word-converter` | Common file-conversion searches and strong relationship to image tools |
| 4 | `/pdf-tools/pdf-sign`, `/pdf-tools/pdf-signature-checker`, `/pdf-tools/pdf-splitter-merger`, `/pdf-tools/pdf-unlocker` | Useful but must be precise about limits, privacy, signatures, passwords, and legal expectations |
| 5 | `/converters/json-xml`, `/converters/xml-json`, `/converters/json-yaml`, `/converters/yaml-json`, `/converters/json-toml`, `/converters/toml-json`, `/converters/yaml-toml`, `/converters/toml-yaml` | Developer converter cluster; needs examples for config/API formats and schema pitfalls |
| 6 | `/converters/base64-file`, `/converters/text-case`, `/converters/list-converter`, `/converters/ascii-binary`, `/converters/integer-base`, `/converters/unicode`, `/converters/roman-numeral`, `/converters/morse-code`, `/converters/nato-phonetic`, `/converters/length`, `/converters/currency` | Long-tail utility cluster; rewrite one-by-one with exact examples and common-value FAQs |

## Tools With Pasted-Query Visibility Evidence

These are not automatically "done." Some are ranking/clicking, some have
impressions but weak CTR, and some only appear through long-tail queries. They
should be defended or improved based on GSC page-level data.

| Category | Routes | Evidence cluster |
|---|---|---|
| Ad tools | `/ad-tools/roas-calculator` | `roas calculator`, `free roas calculator` |
| AI tools | `/ai-tools/ai-api-cost-calculator`, `/ai-tools/ai-code-detector`, `/ai-tools/qr-generator` | AI API cost, AI code checker, static/non-expiring QR queries |
| Calculators | `/calculator/age-calculator`, `/calculator/bmi-calculator`, `/calculator/concrete-calculator`, `/calculator/date-difference`, `/calculator/ip-subnet-calculator`, `/calculator/pregnancy-calculator`, `/calculator/pregnancy-conception-calculator` | age/future date, BMI, concrete, date difference, IPs, pregnancy/conception |
| Converters | `/converters/file-size`, `/converters/temperature`, `/converters/timezone` | bytes/MB/KB, Celsius/Fahrenheit, UTC/timezone |
| Crypto tools | `/crypto-tools/bip39-generator`, `/crypto-tools/otp-generator`, `/crypto-tools/token-generator`, `/crypto-tools/totp-qr-code-generator` | seed phrase, OTP/TOTP, token generator |
| Dev tools | `/dev-tools/regex-tester` | Ruby regex tester |
| Finance tools | `/finance-tools/paypal-fee`, `/finance-tools/paypal-goods-and-services-fee-calculator`, `/finance-tools/sales-tax-calculator`, `/finance-tools/savings-tracker` | PayPal fee/G&S, sales tax, savings tracker |
| Fun tools | `/fun-tools/anniversary`, `/fun-tools/birthday-countdown`, `/fun-tools/future-age`, `/fun-tools/monthsary-calculator` | anniversary, relationship, future age, monthsary, birthday timer |
| SEO tools | `/seo-tools/meta-tags`, `/seo-tools/word-counter` | open graph/meta tags, word/tag counting |
| Social media tools | `/social-media-tools/channel-checker`, `/social-media-tools/hashtag-counter`, `/social-media-tools/instagram-dp`, `/social-media-tools/instagram-profile-picture-viewer`, `/social-media-tools/youtube-channel-name-generator`, `/social-media-tools/youtube-tags`, `/social-media-tools/youtube-thumbnail` | Instagram DP, YouTube handle/name, tags, thumbnails, hashtags |

## Weak Until Proven Otherwise — By Category

These are the pages to treat as weak SEO unless the page-level GSC export shows
impressions that were not visible in the pasted query list.

### AI Tools — 9

- `/ai-tools/ai-paraphraser`
- `/ai-tools/ai-readability-analyzer`
- `/ai-tools/ai-text-detector`
- `/ai-tools/caption-generator`
- `/ai-tools/lyrics-generator`
- `/ai-tools/pet-names`
- `/ai-tools/text-summarizer`
- `/ai-tools/text-to-speech`
- `/ai-tools/token-to-word-converter`

### Calculator — 17

- `/calculator/biological-age-calculator`
- `/calculator/bmr-calculator`
- `/calculator/body-fat-calculator`
- `/calculator/calorie-calculator`
- `/calculator/conversion-calculator`
- `/calculator/cortisol-peak-calculator`
- `/calculator/fraction-calculator`
- `/calculator/gpa-calculator`
- `/calculator/love-calculator`
- `/calculator/ovulation-calculator`
- `/calculator/pace-calculator`
- `/calculator/percentage-calculator`
- `/calculator/scientific-calculator`
- `/calculator/standard-deviation-calculator`
- `/calculator/tdee-macro-calculator`
- `/calculator/time-duration`
- `/calculator/triangle-calculator`

### Converters — 19

- `/converters/ascii-binary`
- `/converters/base64-file`
- `/converters/currency`
- `/converters/integer-base`
- `/converters/json-toml`
- `/converters/json-xml`
- `/converters/json-yaml`
- `/converters/length`
- `/converters/list-converter`
- `/converters/morse-code`
- `/converters/nato-phonetic`
- `/converters/roman-numeral`
- `/converters/text-case`
- `/converters/toml-json`
- `/converters/toml-yaml`
- `/converters/unicode`
- `/converters/xml-json`
- `/converters/yaml-json`
- `/converters/yaml-toml`

### Crypto Tools — 9

- `/crypto-tools/bcrypt`
- `/crypto-tools/encrypt-decrypt`
- `/crypto-tools/hash-text`
- `/crypto-tools/hmac-generator`
- `/crypto-tools/password-generator`
- `/crypto-tools/password-strength-analyzer`
- `/crypto-tools/rsa-generator`
- `/crypto-tools/ulid-generator`
- `/crypto-tools/uuid-generator`

### Dev Tools — 22

- `/dev-tools/base64-encoder`
- `/dev-tools/cloudflare-workers-cost`
- `/dev-tools/color-palette`
- `/dev-tools/cron-expression-generator`
- `/dev-tools/css-gradient-generator`
- `/dev-tools/diff-checker`
- `/dev-tools/hex-to-rgb`
- `/dev-tools/html-beautifier`
- `/dev-tools/html-to-markdown`
- `/dev-tools/html-wysiwyg-editor`
- `/dev-tools/http-status-codes`
- `/dev-tools/json-diff`
- `/dev-tools/json-to-csv`
- `/dev-tools/jwt-decoder`
- `/dev-tools/keycode-info`
- `/dev-tools/llm-training-cost`
- `/dev-tools/markdown-previewer`
- `/dev-tools/mime-types`
- `/dev-tools/slugify-string`
- `/dev-tools/sql-to-json`
- `/dev-tools/timestamp-converter`
- `/dev-tools/user-agent-parser`

### Education Tools — 1

- `/education-tools/citation-generator`

### Finance Tools — 31

- `/finance-tools/amortization-calculator`
- `/finance-tools/auto-loan-calculator`
- `/finance-tools/bill-splitter`
- `/finance-tools/compound-interest`
- `/finance-tools/credit-card-payoff`
- `/finance-tools/debt-payoff-calculator`
- `/finance-tools/discount-calculator`
- `/finance-tools/finance-calculator`
- `/finance-tools/freelance-rate-calculator`
- `/finance-tools/home-affordability-calculator`
- `/finance-tools/inflation-calculator`
- `/finance-tools/interest-rate-calculator`
- `/finance-tools/investment-calculator`
- `/finance-tools/invoice-generator`
- `/finance-tools/loan-calculator`
- `/finance-tools/mortgage-calculator`
- `/finance-tools/net-worth-calculator`
- `/finance-tools/payment-calculator`
- `/finance-tools/quarterly-tax-estimator`
- `/finance-tools/remote-work-savings`
- `/finance-tools/rent-vs-buy-calculator`
- `/finance-tools/retirement-calculator`
- `/finance-tools/retirement-planner`
- `/finance-tools/saas-churn-calculator`
- `/finance-tools/saas-payback-calculator`
- `/finance-tools/salary-calculator`
- `/finance-tools/startup-runway-calculator`
- `/finance-tools/tax-bracket-calculator`
- `/finance-tools/tax-calculator`
- `/finance-tools/tip-calculator`
- `/finance-tools/zakat-calculator`

### Fun Tools — 4

- `/fun-tools/countdown-timer`
- `/fun-tools/meme-generator`
- `/fun-tools/pomodoro-timer`
- `/fun-tools/wheel-spinner`

### Image Tools — 6

- `/image-tools/ai-image-detector`
- `/image-tools/background-remover`
- `/image-tools/image-compressor`
- `/image-tools/image-cropper`
- `/image-tools/image-resizer`
- `/image-tools/image-to-text`

### PDF Tools — 8

- `/pdf-tools/image-to-pdf`
- `/pdf-tools/pdf-compressor`
- `/pdf-tools/pdf-sign`
- `/pdf-tools/pdf-signature-checker`
- `/pdf-tools/pdf-splitter-merger`
- `/pdf-tools/pdf-to-image`
- `/pdf-tools/pdf-unlocker`
- `/pdf-tools/pdf-word-converter`

### Security Tools — 1

- `/security-tools/image-steganography`

### SEO Tools — 5

- `/seo-tools/blog-titles`
- `/seo-tools/keyword-density`
- `/seo-tools/lorem-ipsum`
- `/seo-tools/schema-markup-generator`
- `/seo-tools/text-similarity-checker`

### Social Media Tools — 3

- `/social-media-tools/influencer-rate-calculator`
- `/social-media-tools/link-in-bio`
- `/social-media-tools/tiktok-engagement-calculator`

### Web Tools — 8

- `/web-tools/auth-generator`
- `/web-tools/device-info`
- `/web-tools/dns-ssl-checker`
- `/web-tools/html-escape`
- `/web-tools/outlook-safelink-decoder`
- `/web-tools/url-encoder`
- `/web-tools/url-parser`
- `/web-tools/whois-lookup`

## Working Order After This Correction

1. Keep defending `/social-media-tools/instagram-dp` and related Instagram
   profile-picture pages because they have the clearest clicks.
2. Rewrite impression/no-click or low-click pages by query family: YouTube
   handles, Instagram variants, PayPal, OTP/token, temperature/file-size,
   pregnancy/conception, and anniversary/future-age.
3. For all no-evidence pages, start by category and rewrite the highest-search
   demand tools first:
   converters, image/PDF, dev tools, AI tools, web tools, then the remaining
   finance/calculator/fun pages.
4. After each batch, submit updated URLs through the indexing workflow and wait
   for GSC page-level data before marking a page as strong.
