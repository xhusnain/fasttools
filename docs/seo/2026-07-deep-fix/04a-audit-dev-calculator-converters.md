# Per-tool audit — dev-tools, calculator, converters (2026-07-03)

Verdict legend: INVEST (winnable demand, push) · FIX-CHEAP (small title/slug fix, no spend) ·
CONSOLIDATE (merge + 301) · RETIRE-NOINDEX (unwinnable/dead, noindex) · REPUBLISH-NEW-SLUG
(new exact-phrase slug + 301, Quaid technique).

## DEV-TOOLS (23) — INVEST 4 · FIX-CHEAP 16 · REPUBLISH 2 · RETIRE 1

| Route /dev-tools/ | Verdict | Key fix |
|---|---|---|
| regex-tester | **INVEST** | Proven: ruby/python regex queries rank on the GENERIC page. Spawn `/ruby-regex-tester`, `/python-regex-tester`, `/golang-`, `/php-`, `/java-` variants; keep generic as hub. Current title stuffs 3 languages into one (69ch). |
| jwt-decoder | **INVEST** | GSC impression came from modifier "no install" — phrase appears nowhere on page. Add "no signup / nothing leaves browser" to title + above fold. |
| llm-training-cost | **INVEST** | Fix title/H1 to "llm training cost calculator" (searched phrase). Rising, uncontested. |
| cloudflare-workers-cost | **INVEST** | Winnable brand-specific niche. Add "verified [date]" for pricing rot. Siblings: vercel-cost-calculator, supabase-cost-calculator. |
| cron-expression-generator | FIX-CHEAP | Remove "\| FastTools". Spawn `/github-actions-cron-generator`, `/kubernetes-cronjob-schedule-generator` (tool works unmodified). |
| css-gradient-generator | FIX-CHEAP | Remove brand suffix; spawn `/tailwind-gradient-generator` (tool already outputs Tailwind). |
| color-palette | **REPUBLISH** | → `/color-palette-generator` (slug missing "generator" — the searched phrase). 301 old. Also tailwind variant. |
| slugify-string | **REPUBLISH** | → `/url-slug-generator` (title already targets it; slug is dev jargon). 301 old. |
| base64-encoder | FIX-CHEAP | Head unwinnable; optional `/base64-to-image` variant. Dedupe role vs /converters/base64-file. |
| timestamp-converter | FIX-CHEAP | Keep, zero spend (epochconverter owns it). |
| json-diff | FIX-CHEAP | Exact slug ✓, keep. |
| json-to-csv | FIX-CHEAP | Optional `/json-to-excel` variant (separate large query). |
| sql-to-json | FIX-CHEAP | Honest narrow niche, keep. |
| diff-checker | FIX-CHEAP | Slug = competitor's brand (diffchecker.com). Retitle toward "compare text online". |
| html-to-markdown | FIX-CHEAP | Keep. |
| html-beautifier | FIX-CHEAP | No spend ("html formatter" out-volumes; owned). |
| markdown-previewer | FIX-CHEAP | No spend; tool feature-poor. |
| http-status-codes | FIX-CHEAP | Title only (remove brand); keep as internal hub. |
| mime-types | FIX-CHEAP | Title only. LLM/SERP-answered class. |
| user-agent-parser | FIX-CHEAP | Title only. |
| keycode-info | FIX-CHEAP | Title only; slug is literally competitor domain keycode.info. Zero expectation. |
| hex-to-rgb | FIX-CHEAP | Title only; Google's color-picker widget owns the SERP. |
| html-wysiwyg-editor | **RETIRE-NOINDEX** | Tool can't satisfy intent (no links/images/tables — its own FAQ admits it). |

Leverage: (1) language-variant regex pages; (2) one-commit brand-suffix strip on 8 pages;
(3) zero-code platform variants (github-actions cron, k8s cronjob, tailwind gradient/palette).

## CALCULATOR (24) — INVEST 4 · FIX-CHEAP 4 · CONSOLIDATE 2 · REPUBLISH 2 · RETIRE 12

Cross-cutting: `lib/metadata-base.ts` auto-prepends "Free " → 9 titles blow past 65ch and
keyword loses position 1. Fix once, category-wide.

| Route /calculator/ | Verdict | Key fix |
|---|---|---|
| age-calculator | **INVEST (as hub)** | Head unwinnable, but the future-age question cluster (642+311 impr) belongs to it. Make it the hub of the age/date cluster. Title 71ch → trim. |
| biological-age-calculator | **INVEST** | Winnable niche; best quickAnswer on site. |
| cortisol-peak-calculator | **INVEST** | Answer-shaped niche ("best time to drink coffee cortisol"), near-zero competition. Model page for the site. |
| pregnancy-conception-calculator | **INVEST** | PROVEN (165 impr) yet only 6 inbound links — the least-linked winner. Feed it links + "when did I conceive if due [month]" variants. |
| date-difference | FIX-CHEAP | Support "how long have we been together" (3 clicks/177 impr) with variant answer pages. |
| time-duration | FIX-CHEAP | Question children ("how many hours is 9 to 5"). Title 70ch. |
| love-calculator | FIX-CHEAP | Wire tighter into anniversary/monthsary cluster ("compatibility test" got a click). |
| tdee-macro-calculator | FIX-CHEAP | Survivor of BMR/calorie consolidation. |
| bmr-calculator | **CONSOLIDATE** | 301 → tdee-macro (3-way self-cannibalization). |
| calorie-calculator | **CONSOLIDATE** | 301 → tdee-macro. |
| ip-subnet-calculator | **REPUBLISH** | Split VPC/CIDR planner to `/dev-tools/vpc-cidr-calculator` (winnable dev niche); keep subnet page generic. |
| concrete-calculator | **REPUBLISH** | → `concrete-bag-calculator` + "how many 80lb bags in a yard" answer pages. |
| bmi-calculator | RETIRE-NOINDEX | CDC/NHS/calculator.net + YMYL. |
| body-fat-calculator | RETIRE-NOINDEX | Same. |
| pace-calculator | RETIRE-NOINDEX | |
| ovulation-calculator | RETIRE-NOINDEX | Keep live as conception-page support spoke. |
| pregnancy-calculator | RETIRE-NOINDEX | Funnel equity to conception page. |
| percentage-calculator | RETIRE-NOINDEX | Google answers inline. |
| fraction-calculator | RETIRE-NOINDEX | |
| scientific-calculator | RETIRE-NOINDEX | Desmos owns. |
| gpa-calculator | RETIRE-NOINDEX | .edu walls. |
| standard-deviation-calculator | RETIRE-NOINDEX | Also: 111 FAQs = bloat signal, cut regardless. |
| triangle-calculator | RETIRE-NOINDEX | |
| conversion-calculator | RETIRE-NOINDEX | Slug/title mismatch on a widget-answered mega-head. |

Leverage: (1) build the age/relationship answer cluster (programmatic "how old will I be in
20XX" answer-first pages — the ONE proven demand); (2) kill "Free " auto-prefix; (3) feed the
conception winner sitewide links.

## CONVERTERS (22) — INVEST 2 · REPUBLISH 4 · FIX-CHEAP 12 · CONSOLIDATE 1 · RETIRE 3

| Route /converters/ | Verdict | Key fix |
|---|---|---|
| file-size | **INVEST** | Only proven demand (numeric byte queries, 47+35+30 impr). Spawn exact-slug children: `/bytes-to-mb`, `/bytes-to-kb`, `/kb-to-mb` with computed answer in sentence 1. |
| temperature | **INVEST (narrow)** | Cooking/oven angle only ("177c to fahrenheit" 19 impr). Generic C↔F is widget-answered. |
| json-toml | **REPUBLISH** | → `json-to-toml` (searched phrase has "to"). Winnable uncontested dev index. |
| toml-json | **REPUBLISH** | → `toml-to-json`. |
| toml-yaml | **REPUBLISH** | → `toml-to-yaml`. Title 67ch → trim. |
| yaml-toml | **REPUBLISH** | → `yaml-to-toml`. |
| yaml-json | FIX-CHEAP | → `yaml-to-json` slug in same redirect batch; head saturated, zero further effort. |
| json-yaml | FIX-CHEAP | → `json-to-yaml`; same. |
| xml-json | FIX-CHEAP | → `xml-to-json`; consolidation target. |
| json-xml | **CONSOLIDATE** | 301 into xml-to-json (tool is bidirectional; two pages split signal). |
| currency | **RETIRE-NOINDEX** | Google widget + XE/Wise. Also metadata LIES (claims 150+ currencies/intraday; FAQ admits ~30, daily ECB) — fix copy regardless. |
| length | RETIRE-NOINDEX | Widget-answered. |
| timezone | RETIRE-NOINDEX | Title claims DST awareness; FAQ admits none. Fix the false claim regardless. |
| morse-code | FIX-CHEAP | Trim 69ch title. Head owned by morsecode.world. |
| base64-file | FIX-CHEAP | Retitle keyword-first "File to Base64 Converter…"; dedupe vs dev-tools/base64-encoder. |
| integer-base | FIX-CHEAP | Better: `number-base-converter` phrasing. |
| ascii-binary | FIX-CHEAP | Saturated; minimal. |
| unicode | FIX-CHEAP | → `text-to-unicode` (matches searched phrase). |
| nato-phonetic | FIX-CHEAP | Trim title. |
| roman-numeral | FIX-CHEAP | **BUG: dropped year token renders "the Roman numeral for and other recent years" (3+ places) — fix NOW.** Consider roman-numeral-date-converter child (tattoo intent). |
| text-case | FIX-CHEAP | convertcase.net EMD owns it; trim 71ch title. |
| list-converter | FIX-CHEAP | Retitle around "comma separated list converter"; move SQL-IN-clause tip above fold. |
| /converters hub | FIX-CHEAP | **BUG: Currency card duplicated (lines ~135 & ~177).** |

Also: 6 titles ship literal `--` instead of a dash; 8 titles >65ch.
