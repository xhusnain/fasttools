import { RetirementPlanner } from "@/components/retirement-planner"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Retirement Planner — Retirement Savings & Goal Calculator | SmartToolboxes",
  description:
    "Plan retirement savings with compound growth. Set target age, contributions, expected return, inflation, and get a clear projection chart.",
  keywords: [
    "retirement planner",
    "retirement calculator",
    "retirement savings calculator",
    "compound interest calculator",
    "retirement goal planner",
    "401k calculator",
    "ira calculator",
    "roth vs traditional",
    "expected rate of return",
    "inflation adjusted",
    "real vs nominal return",
    "safe withdrawal rate",
    "4 percent rule",
    "target retirement age",
    "retirement contributions",
    "employer match",
    "catch up contributions",
    "investment fees impact",
    "portfolio growth projection",
    "retirement timeline",
    "retirement goal shortfall",
    "monthly savings needed",
    "lump sum vs monthly",
    "tax advantaged accounts",
    "asset allocation",
    "risk profile",
    "Monte Carlo simulation",
    "inflation assumption",
    "retirement income need",
    "social security estimate",
    "pension income",
    "annuity income",
    "retirement drawdown",
    "post retirement budget",
    "healthcare costs retirement",
    "fire calculator",
    "financial independence calculator",
    "personal finance planning",
    "free retirement calculator"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/retirement-planner" },
  openGraph: {
    title: "Retirement Planner — Savings Projection",
    description: "Project retirement savings with contributions, returns, and inflation.",
    url: "https://www.fasttools.store/finance-tools/retirement-planner",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Retirement Planner", description: "Plan your retirement savings with confidence." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Retirement Planner",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/retirement-planner",
      description:
        "Plan retirement savings using contributions, expected return, and inflation to see future value.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Contribution schedule", "Inflation adjustment", "Projection chart", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function RetirementPlannerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Retirement Planner", href: "/finance-tools/retirement-planner" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Retirement Planner — Savings Projection & Goals</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Model contributions, expected return, and inflation to reach your target nest egg.</p>
        </div>

        <AdSpace slot="content" className="mb-6 h-24" />

        <RetirementPlanner />

        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Plan Retirement Savings</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Set Target and Assumptions</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Enter target retirement age, initial savings, monthly contribution, and expected annual return.</li>
            <li>Adjust inflation to view real vs nominal projections.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Review Projection and Tune</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Inspect the projected balance over time and contribution breakdown.</li>
            <li>Increase savings or adjust return assumptions to close any shortfall.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Retirement Planning Tips</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Maximize employer matches and use tax‑advantaged accounts.</li>
            <li>Mind investment fees; small differences compound over decades.</li>
            <li>Revisit assumptions yearly and adjust for life changes.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/savings-tracker">Savings Goal Tracker</Link></li>
            <li><Link href="/finance-tools/credit-card-payoff">Credit Card Payoff Calculator</Link></li>
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            </ul>
          </div>

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
  )
}
