# FastTools Tool Semantic SEO Map — 2026-06-03

This file tracks the content/semantic SEO layer separately from internal
linking. Internal links help discovery; this map is about whether each page
answers the exact query intent users are searching.

## Sources Used

- GSC query export pasted by the user on 2026-06-03.
- Live competitor SERP checks on 2026-06-03.
- Google Search Central guidance:
  - https://developers.google.com/search/docs/fundamentals/creating-helpful-content
  - https://developers.google.com/search/docs/fundamentals/seo-starter-guide
  - https://developers.google.com/search/docs/essentials/spam-policies
- PayPal official US merchant fees, last updated May 19, 2026:
  - https://www.paypal.com/us/business/paypal-business-fees

## Semantic Rule

For each tool page, do not just add keyword variants. Build the page around the
searcher's job:

- title/H1 leads with the dominant query phrase
- quick answer gives the result/use in one or two sentences
- definition explains the tool plainly
- key takeaways answer what users compare before clicking
- about section includes formula, rules, limits, examples, and edge cases
- FAQs answer real GSC/PAA-style questions in original wording
- related tools link the next natural workflow step

Avoid synonym walls and keyword stuffing. Google explicitly says its systems can
understand related queries, and spam policies call keyword stuffing risky.

## 2026-06-04 Visibility Correction

The site-wide semantic-field audit confirms every static tool has
`definition`, `quickAnswer`, and `keyTakeaways`, but that is not the same as
strong SEO. Per the user's correction, any tool without pasted-query GSC
visibility should be treated as weak until a page-level GSC export proves
otherwise.

Detailed visibility buckets are now tracked in:

- `docs/seo/gsc-visibility-buckets-2026-06-04.md`

Current working interpretation:

- `36` base tools have some pasted-query visibility evidence.
- `143` base tools are weak until proven otherwise.
- Impression/no-click pages need CTR and intent rewrites.
- No-evidence pages need one-by-one semantic rewrites by category.

## Query Clusters From Pasted GSC Data

| Cluster | Main user intent | Primary queries seen | Page targets |
|---|---|---|---|
| Instagram DP / profile picture | View, zoom, download full-size Instagram profile photo | `insta zoom`, `insta dp viewer`, `instagram profile picture viewer`, `insta dp download`, `instagram dp viewer`, `instagram profile picture zoom`, `instagram full size profile picture`, `private account instagram dp download` | `/social-media-tools/instagram-dp`, `/social-media-tools/instagram-profile-picture-viewer`, Instagram DP variants |
| YouTube name / handle availability | Check if a YouTube channel name, username, or handle is available/taken | `youtube channel name checker`, `youtube handle checker`, `youtube channel name availability`, `check youtube handle`, `youtube username checker`, `youtube handle availability checker tool` | `/social-media-tools/channel-checker`, channel-checker variants |
| Anniversary / future age | Calculate relationship duration, monthsary, future age | `anniversary calculator`, `monthsary calculator`, `how old will i be in 2050`, `future age`, `relationship calculator how long been together` | `/fun-tools/anniversary`, `/fun-tools/monthsary-calculator`, `/fun-tools/future-age` |
| PayPal fees | Calculate fee, net amount, gross-up amount, G&S fees | `paypal fee calculator`, `paypal fees calculator`, `paypal calculator`, `calculate paypal fees`, `paypal g&s fee calculator`, `fee calculator paypal` | `/finance-tools/paypal-fee`, `/finance-tools/paypal-goods-and-services-fee-calculator` |
| OTP / token / security | Generate TOTP, QR setup, random token, secure token | `totp qr code generator`, `otp generator online`, `otp token generator`, `generate token`, `secure token generator`, `api token generator` | `/crypto-tools/otp-generator`, `/crypto-tools/totp-qr-code-generator`, `/crypto-tools/token-generator` |
| Temperature / file size converters | Quick unit conversion and exact common values | `temperature converter`, `177c to fahrenheit`, `1500 bytes to mb`, `1000000 bytes to kb`, `1000000000 bytes to mb` | `/converters/temperature`, `/converters/file-size` |
| Pregnancy / conception | Calculate conception date and pregnancy timeline | `pregnancy calculator`, `conception date calculator`, `what is conception date calculator`, `ultrasound conception calculator` | `/calculator/pregnancy-calculator`, `/calculator/pregnancy-conception-calculator` |
| YouTube metadata / thumbnails | Extract tags, download thumbnails, research video SEO | `youtube tag extractor`, `copy tags from youtube video`, `extract tags youtube shorts`, `youtube thumbnails download` | `/social-media-tools/youtube-tags`, `/social-media-tools/youtube-thumbnail` |
| Image / PDF utilities | Compress, resize, OCR, convert, sign PDFs | weak/uncopied in pasted GSC, likely many zero-impression pages | Image/PDF groups in `seo-audit-progress.md` |
| Long-tail utility tools | Morse, Roman numerals, converters, dev utilities | weak/uncopied in pasted GSC, likely zero/low impression until indexed better | Converter/dev/crypto groups in `seo-audit-progress.md` |

## Live Competitor Observations

| Query family | Competitor pattern | FastTools content action |
|---|---|---|
| PayPal fee calculator | Top pages answer fee, net received, and "ask for" amount immediately; they show quick reference tables and gross-up formula. | Add top quick answer, current fee explanation, gross-up language, and accurate 2026 fee examples. Started on `/finance-tools/paypal-fee`. |
| YouTube channel checker | Competitors emphasize handle rules, availability/taken language, no signup, and multi-platform brand consistency. | Keep page centered on `channel name availability`, `YouTube handle`, `username checker`, and "check if taken". Variants should each target one cluster. |
| Instagram DP viewer | Competitors focus on full-size/HD profile picture, anonymous/no login, private account limitations, and download/zoom intent. | Defend current ranking, but variants should each answer one narrow intent: HD 1080p, private account, anonymous viewer, PC viewer, zoom profile. |
| Morse code translator | Competitors emphasize text-to-Morse, Morse-to-English, audio, spacing rules, alphabet chart, SOS examples. | Page already has most semantic elements; next pass should add more query-specific FAQs only if GSC confirms impressions. |

## Legacy Pages Upgraded With Top Semantic Answer Fields

These pages had long content but were missing one or more of:
`quickAnswer`, `definition`, `keyTakeaways`. The current audit now shows:

- `179` static tool pages checked
- `0` missing `quickAnswer`
- `0` missing `definition`
- `0` missing `keyTakeaways`

| Priority | Pages |
|---|---|
| Finance with existing or likely search demand | Done: `/finance-tools/paypal-fee`, `/finance-tools/salary-calculator`, `/finance-tools/tip-calculator`, `/finance-tools/bill-splitter`, `/finance-tools/invoice-generator`, `/finance-tools/finance-calculator`, `/finance-tools/interest-rate-calculator`, `/finance-tools/payment-calculator`, `/finance-tools/tax-calculator`, `/finance-tools/sales-tax-calculator`, `/finance-tools/compound-interest`, `/finance-tools/retirement-planner`, `/finance-tools/quarterly-tax-estimator`, `/finance-tools/inflation-calculator`, `/finance-tools/savings-tracker`, `/finance-tools/discount-calculator`, `/finance-tools/auto-loan-calculator` |
| Calculator pages | Done: `/calculator/age-calculator`, `/calculator/bmi-calculator`, `/calculator/bmr-calculator`, `/calculator/body-fat-calculator`, `/calculator/calorie-calculator`, `/calculator/conversion-calculator`, `/calculator/date-difference`, `/calculator/fraction-calculator`, `/calculator/gpa-calculator`, `/calculator/ip-subnet-calculator`, `/calculator/love-calculator`, `/calculator/pace-calculator`, `/calculator/percentage-calculator`, `/calculator/pregnancy-calculator`, `/calculator/pregnancy-conception-calculator`, `/calculator/standard-deviation-calculator`, `/calculator/time-duration`, `/calculator/triangle-calculator` |
| Ads | Done: `/ad-tools/roas-calculator` |

## One-By-One Work Order

1. For pages absent from the pasted GSC list, treat them as likely zero-impression
   candidates and upgrade by category: converters, dev tools, image/PDF, crypto.
2. Request/export page-level GSC data so every tool can be labeled:
   zero impressions, impressions/no clicks, or ranking/clicking.
3. Next pass should go beyond the top semantic answer fields and deepen the
   `aboutTool`, examples, FAQs, and competitor comparison sections for pages
   that still have no impressions after crawl/index refresh.
