# Per-tool audit — crypto, security, web, ai, seo, education, ad tools (2026-07-03)

## CRYPTO-TOOLS (13+hub) — INVEST 3 · FIX-CHEAP 9 · REPUBLISH 1 · CONSOLIDATE 1

| Route /crypto-tools/ | Verdict | Key fix |
|---|---|---|
| hmac-generator | **INVEST** | Best winnable narrow index in category; per-service webhook signature table is differentiated. Push "hmac sha256 generator" + webhook-debugging tails. |
| ulid-generator | **INVEST** | Textbook narrow low-competition index. |
| otp-generator | **INVEST** | "otp generator" 0/36 impressions — indexed, needs push. "totp generator" (dev) is the winnable slice. |
| totp-qr-code-generator | **CONSOLIDATE** | Renders the IDENTICAL OtpGenerator component as otp-generator — duplicate page, same queries, 0 clicks. 301 into otp-generator or truly differentiate. |
| bip39-generator | FIX-CHEAP ⚠️ | Only impression-earner in category, BUT its 15 alternateNames + "Same Tool, Many Names" section is the net catching SCAM queries ("seed phrase with balance", "trust wallet free"). Prune to ~6 names, delete the variants section. Trust protection first. |
| token-generator | FIX-CHEAP ⚠️ | Page literally contains "GitHub… ghp_… Stripe scans pastebin sites" — this is why leaked-token hunters (`pastebin.com "ghp_" token`, 37 impr) land here. Reword that sentence. |
| bcrypt | FIX-CHEAP | Slug near-miss ("bcrypt generator"), not worth churn. |
| hash-text | FIX-CHEAP | Slug matches no phrase, but heads unwinnable anyway — leave. |
| encrypt-decrypt | FIX-CHEAP | |
| password-generator | FIX-CHEAP | Mega head (Bitwarden/LastPass). Keep for users; zero SEO spend. |
| password-strength-analyzer | **REPUBLISH** | → `/password-strength-checker` (searched phrase; nobody says "analyzer"). 301. |
| rsa-generator | FIX-CHEAP | |
| uuid-generator | FIX-CHEAP | Retarget content weight toward "uuid v7 generator" (winnable slice). |
| hub | FIX-CHEAP | ⚠️ aboutTool contains meta-SEO copy written ABOUT SEO strategy, visible to users — delete. |

## SECURITY-TOOLS (1+hub) — INVEST 1 · CONSOLIDATE 1

- image-steganography: **INVEST** — strongest single-page setup in whole audit (exact slug,
  deep honest content, own supporting blog post, beatable competitors) yet ZERO impressions →
  smells like indexation problem, not content. URL-inspect in GSC first. Add "decode hidden
  text from image" anchors from image-tools.
- hub: one-tool category = stub signal. Add 2–3 tools or fold into crypto-tools.

## WEB-TOOLS (8+hub) — INVEST 1 · REPUBLISH 1 · FIX-CHEAP 6 · RETIRE 1

| Route /web-tools/ | Verdict | Key fix |
|---|---|---|
| outlook-safelink-decoder | **INVEST** | Real narrow IT/SOC demand, weak competition — classic low-authority win. Add supporting blog post (like steganography has). |
| auth-generator | **REPUBLISH** | → `/basic-auth-header-generator` ("basic auth generator" is the searched phrase; current slug matches nothing). |
| dns-ssl-checker | FIX-CHEAP | Slug fuses two unwinnable heads and matches neither; splitting creates two losers — leave as utility, zero spend. |
| whois-lookup | FIX-CHEAP | Pivot title/H1 prominence toward "RDAP Lookup" (winnable slice; page already has real RDAP substance). |
| device-info | **RETIRE-NOINDEX** | Matches no winnable query; overlaps dev-tools/user-agent-parser; alternateName stuffs competitor names. |
| html-escape | FIX-CHEAP | |
| url-encoder | FIX-CHEAP | urlencoder.org owns it. No spend. |
| url-parser | FIX-CHEAP | "utm parameter decoder" is the narrow angle. |

## AI-TOOLS (12+hub) — INVEST 3 · REPUBLISH 4 · CONSOLIDATE 1 · RETIRE 4

| Route /ai-tools/ | Verdict | Key fix |
|---|---|---|
| ai-api-cost-calculator | **INVEST** | Best page in category, current pricing, real growing demand — **and it's MISSING from the /ai-tools hub grid** (near-orphan). Add the card. Variants: claude-api-cost-calculator. |
| ai-code-detector | **INVEST** | Narrow uncontested index (GPTZero/Originality don't own "ai CODE detector"). Trim 65ch title. "copilot detector" variants open. |
| token-to-word-converter | **INVEST** | Fix 240ch meta description; refresh stale Claude-3-era numbers; add "how many words is 1000 tokens" anchor sections. |
| lyrics-generator | **REPUBLISH** | GSC shows "song idea generator" converting as a mere alternateName → make it a real page `/song-idea-generator`. |
| text-to-speech | **REPUBLISH (variant)** | Hidden asset: Kokoro TTS runs in-browser — "kokoro tts online" is real + uncontested. Spawn `/kokoro-tts-online`. |
| qr-generator | **REPUBLISH (variants)** | Spawn `/wifi-qr-code-generator` + "qr code that never expires" page. Head unwinnable. |
| ai-readability-analyzer | **REPUBLISH (variants)** | Drop misleading "ai-" prefix; spawn per-formula pages: flesch-kincaid-calculator, smog-index-calculator, gunning-fog-calculator (narrow + winnable). |
| caption-generator | CONSOLIDATE | Support page for social cluster; every variant contested. Zero further spend. |
| pet-names | RETIRE-NOINDEX | Rover/Purina own it. |
| ai-paraphraser | RETIRE-NOINDEX | QuillBot. Thinnest page in category. |
| ai-text-detector | RETIRE-NOINDEX | Originality/GPTZero/ZeroGPT — canonical unwinnable index. |
| text-summarizer | RETIRE-NOINDEX | QuillBot. |
| hub | FIX-CHEAP | Add missing ai-api-cost-calculator card. |

## SEO-TOOLS (7+hub) — FIX-CHEAP 5 · CONSOLIDATE 1 · RETIRE 2

| Route /seo-tools/ | Verdict | Key fix |
|---|---|---|
| schema-markup-generator | FIX-CHEAP + variants | Spawn per-type pages: faq-schema-generator, product-schema-generator, localbusiness-schema-generator (narrow, decent intent). Trim 230ch description. |
| text-similarity-checker | FIX-CHEAP | "content cannibalization checker" angle is uncontested. |
| meta-tags | FIX-CHEAP | Title/H1/slug identity conflict — pick one. Trim 280ch description. |
| blog-titles | FIX-CHEAP | 301 → `/blog-title-generator` (slug ≠ phrase). Low expectation. |
| keyword-density | CONSOLIDATE | word-counter already does better keyword density — merge or differentiate. |
| word-counter | RETIRE-NOINDEX | wordcounter.net fortress; page is a PageRank sink receiving ~10 internal links — reduce them. Keep tool for users. |
| lorem-ipsum | RETIRE-NOINDEX | lipsum.com eternal #1; also miscategorized. |

## EDUCATION-TOOLS (1+hub) / AD-TOOLS (1, no hub)

- citation-generator: **REPUBLISH (variants)** — head is a Scribbr/EasyBib fortress, but the
  tool's CrossRef/OpenLibrary auto-fill = spawn `/doi-to-bibtex` and `/isbn-to-citation`
  (narrow, technical, clunky incumbents). Keep main page as-is.
- roas-calculator: FIX-CHEAP + variant — **BROKEN breadcrumb points to /calculator (no
  ad-tools hub exists — category orphan)**. Spawn `/break-even-roas-calculator` (uncontested,
  tool already computes it). Cut 30 FAQs to ~10; delete duplicated benchmark paragraph.

## Cross-cutting (whole site)
1. **alternateName stuffing**: every page ships 10–16 schema alternateNames including
   competitor bait ("QuillBot Alternative", "Iancoleman BIP39 Alternative") — the #1
   scam-query/broad-match magnet and quality risk. Cap at ~5 genuine synonyms SITEWIDE.
2. Meta descriptions >160ch on 5+ pages (auto-truncated, CTA dies).
3. **Best-page orphaning pattern**: the strongest pages (ai-api-cost-calculator,
   roas-calculator, conception-calculator, zakat, paypal-g&s) consistently have the WEAKEST
   internal-link support — the inverse of the PageRank playbook.
