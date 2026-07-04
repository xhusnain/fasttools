// Deliberately noindexed pages (robots meta via createMetadata + excluded from
// sitemap/IndexNow via app/sitemap.ts indexablePages filter).
//
// History: an earlier version of this list noindexed ~34 pages whose "0 clicks"
// were actually caused by the un-redirected /tools/* restructure (they were
// 404ing) — that was wrong and the list was cleared.
//
// 2026-07-03: re-populated from the per-tool audit in docs/seo/2026-07-deep-fix/
// (04a–04d). Every path below had 6+ months of ZERO GSC impressions while
// targeting head terms structurally owned by calculator.net / NerdWallet /
// QuillBot-class incumbents, government sites, or Google's own SERP widgets.
// The pages stay live for users; they are just removed from the index so ~150
// dead pages stop diluting what Google thinks this site is about.
// Evidence + verdict per page: docs/seo/2026-07-deep-fix/04a-04d.
export const noindexPaths: string[] = [
  // calculator — unwinnable heads / YMYL (04a)
  "/calculator/bmi-calculator",
  "/calculator/body-fat-calculator",
  "/calculator/pace-calculator",
  "/calculator/ovulation-calculator",
  "/calculator/pregnancy-calculator",
  "/calculator/percentage-calculator",
  "/calculator/fraction-calculator",
  "/calculator/scientific-calculator",
  "/calculator/gpa-calculator",
  "/calculator/standard-deviation-calculator",
  "/calculator/triangle-calculator",
  "/calculator/conversion-calculator",

  // finance-tools — Bankrate/NerdWallet/gov-owned heads (04b)
  "/finance-tools/mortgage-calculator",
  "/finance-tools/auto-loan-calculator",
  "/finance-tools/home-affordability-calculator",
  "/finance-tools/rent-vs-buy-calculator",
  "/finance-tools/inflation-calculator",
  "/finance-tools/salary-calculator",
  "/finance-tools/discount-calculator",
  "/finance-tools/net-worth-calculator",
  "/finance-tools/invoice-generator",
  "/finance-tools/savings-tracker",
  "/finance-tools/remote-work-savings",
  "/finance-tools/finance-calculator",

  // converters — Google-widget-answered / saturated (04a)
  "/converters/currency",
  "/converters/length",
  "/converters/timezone",

  // web-tools / dev-tools (04c / 04a)
  "/web-tools/device-info",
  "/dev-tools/html-wysiwyg-editor",

  // ai-tools — QuillBot/GPTZero-class incumbents (04c)
  "/ai-tools/pet-names",
  "/ai-tools/ai-paraphraser",
  "/ai-tools/ai-text-detector",
  "/ai-tools/text-summarizer",

  // seo-tools — wordcounter.net / lipsum.com fortresses (04c)
  "/seo-tools/word-counter",
  "/seo-tools/lorem-ipsum",

  // security-tools hub — one-tool category is a stub signal (04c). The tool page
  // itself (/security-tools/image-steganography, INVEST) keeps its URL untouched
  // pending the GSC URL-inspect; noindex only the hub. Alternative considered:
  // folding into crypto-tools — rejected for now (URL churn on the strongest
  // single-page setup in the audit while its indexation problem is undiagnosed).
  "/security-tools",
]
