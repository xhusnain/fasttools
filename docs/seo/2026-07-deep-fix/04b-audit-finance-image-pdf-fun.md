# Per-tool audit — finance-tools, image-tools, pdf-tools, fun-tools (2026-07-03)

## FINANCE-TOOLS (35) — INVEST 5 · FIX-CHEAP 3 · REPUBLISH 2 · CONSOLIDATE 12 · RETIRE 13

Category-wide: content is uniformly decent (~1,600w avg, answer-first, FAQs) but the category
is a **self-referencing orphan island** — zero links from homepage, blog, or the ranking IG
cluster. 25 of 35 pages fight Bankrate/NerdWallet/calculator.net/government heads.

| Route /finance-tools/ | Verdict | Key fix |
|---|---|---|
| paypal-fee | **INVEST** | Only finance page with impressions (~600). 301 → `/paypal-fee-calculator` (slug missing "calculator"). Link from homepage + blog. BUG: heading says "Minimize **Curve** Fees" (line ~378, should be "Currency"). |
| paypal-goods-and-services-fee-calculator | **INVEST** | Perfect exact-phrase slug; only 4 inbound links. Deepen + link from paypal-fee body copy. |
| sales-tax-calculator | **INVEST** | Head unwinnable; build `/sales-tax-calculator/[state]` children — the narrow indexes low-DA can own (1 click proves surfacing). |
| freelance-rate-calculator | **INVEST** | Strongest content (2,220w); zero impressions = link problem. Needs supporting blog posts. |
| zakat-calculator | **INVEST (seasonal)** | Winnable vs charity sites; only 3 inbound links (most orphaned). Live nisab prices before Ramadan. |
| bill-splitter | FIX-CHEAP | Retitle "Split Bill Calculator"; absorb tip-calculator. |
| saas-churn-calculator | FIX-CHEAP | Keep narrow slug; add cross-category links. |
| startup-runway-calculator | FIX-CHEAP | Title only 25ch — extend "— Burn Rate & Months of Cash"; +FAQs. |
| quarterly-tax-estimator | **REPUBLISH** | → `/quarterly-tax-calculator` (nobody types "estimator"). |
| saas-payback-calculator | **REPUBLISH** | → `/cac-payback-calculator` (title already says CAC; slug doesn't). |
| loan-calculator | CONSOLIDATE (hub) | Absorb payment-, interest-rate-, amortization-, finance-calculator. Keep as user hub, no SEO spend. |
| payment-calculator | CONSOLIDATE → loan | |
| amortization-calculator | CONSOLIDATE → loan | |
| interest-rate-calculator | CONSOLIDATE → loan | |
| finance-calculator | RETIRE-NOINDEX | (or fold TVM into loan hub) |
| compound-interest | CONSOLIDATE (hub) | Absorb investment-calculator; chase only "daily compound interest calculator" tails. 19 inbound links wasted on unwinnable head. |
| investment-calculator | CONSOLIDATE → compound-interest | |
| credit-card-payoff | CONSOLIDATE → debt-payoff | Both pitch snowball-vs-avalanche = self-cannibalizing. |
| debt-payoff-calculator | CONSOLIDATE (survivor) | Retarget "debt snowball calculator" long-tail. |
| retirement-calculator | CONSOLIDATE (survivor) | Absorb retirement-planner. Zero SEO spend. |
| retirement-planner | CONSOLIDATE → retirement-calculator | 34 FAQs = bloat. |
| tax-calculator | CONSOLIDATE (survivor) | Absorb tax-bracket-calculator. |
| tax-bracket-calculator | CONSOLIDATE → tax-calculator | |
| tip-calculator | CONSOLIDATE → bill-splitter | |
| mortgage-calculator | RETIRE-NOINDEX | Most competitive calculator query on the internet. |
| auto-loan-calculator | RETIRE-NOINDEX | Title stuffs two heads + slug mismatch. |
| home-affordability-calculator | RETIRE-NOINDEX | |
| rent-vs-buy-calculator | RETIRE-NOINDEX | NYT owns it. |
| inflation-calculator | RETIRE-NOINDEX | BLS (gov). |
| salary-calculator | RETIRE-NOINDEX | Also "↔" glyph in title renders oddly. |
| discount-calculator | RETIRE-NOINDEX | Google inline. |
| net-worth-calculator | RETIRE-NOINDEX | |
| invoice-generator | RETIRE-NOINDEX | EMD competitor owns it. Keep as utility. |
| savings-tracker | RETIRE-NOINDEX | **44 FAQs — worst bloat on site**; intent mismatch (apps/templates). |
| remote-work-savings | RETIRE-NOINDEX | Slug/title/query triple mismatch; near-zero demand; 4 inbound. |

## IMAGE-TOOLS (10) — INVEST 1 · FIX-CHEAP 9

| Route | Verdict | Key fix |
|---|---|---|
| ai-image-detector | **INVEST** | Only mid-competition index in category; genuinely differentiated (5-signal forensics). Trim 71ch title. Spawn "midjourney detector", "is this image ai generated", "ai profile picture detector" variants. |
| background-remover, heic-to-jpg, image-compressor, image-cropper, image-resizer, image-to-text, jpg-to-png, png-to-jpg, webp-to-jpg | FIX-CHEAP | All target TinyPNG/iLoveIMG/remove.bg-class owned heads; zero GSC confirms. Keep as utility + link scaffolding, ZERO further content spend. |

## PDF-TOOLS (8) — INVEST 1 · FIX-CHEAP 7

| Route | Verdict | Key fix |
|---|---|---|
| pdf-signature-checker | **INVEST** | The one winnable PDF niche — only PDF page with impressions; iLovePDF/SmallPDF have NO equivalent; SERP thin. Spawn "verify pdf signature online", "check if pdf is digitally signed" satellites. Reverse the internal mesh: pdf-sign should feed the checker. |
| pdf-sign, pdf-compressor, pdf-splitter-merger, pdf-to-image, pdf-unlocker, pdf-word-converter, image-to-pdf | FIX-CHEAP | Every classic PDF verb is structurally lost to iLovePDF/SmallPDF/Adobe. Keep as utility + equity feeders into signature-checker. Don't split splitter-merger (creates two unwinnable pages). |

## FUN-TOOLS (8) — INVEST 1 · REPUBLISH 2 · FIX-CHEAP 5

| Route | Verdict | Key fix |
|---|---|---|
| monthsary-calculator | **INVEST** | Winnable narrow PH/SEA niche, thin SERP, proven queries (201 impr). Currently THIN (171 lines) and cannibalized by /anniversary which also targets "monthsary" — deepen this page, strip monthsary targeting from anniversary. |
| anniversary | **REPUBLISH** | → `/fun-tools/anniversary-calculator` (slug missing "calculator"). 301. Drop "Same Tool, Many Names" stuffing section. Owns "how long have we been together" long-tail. |
| future-age | **REPUBLISH** | → `/fun-tools/how-old-will-i-be` — the query cluster is "how old will i be in 2050" (642 impr!). Answer above fold. This is the cheapest high-probability win in these 3 categories. |
| birthday-countdown | FIX-CHEAP | Weakest content in category; fix pipe-format title. |
| countdown-timer | FIX-CHEAP | Remove "\| FastTools". Head owned + Google widget. No spend. |
| pomodoro-timer | FIX-CHEAP | pomofocus.io owns it. No spend. |
| wheel-spinner | FIX-CHEAP | Remove "\| FastTools". wheelofnames.com owns it. No spend. |
| meme-generator | FIX-CHEAP | Imgflip is synonymous with the query. Verify "no ads" claim is true. |
