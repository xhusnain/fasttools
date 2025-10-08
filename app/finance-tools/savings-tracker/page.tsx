import { SavingsGoalTracker } from "@/components/savings-goal-tracker"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Savings Goal Tracker — Savings Timeline & Progress | SmartToolboxes",
  description:
    "Track savings progress toward goals. Set target amount, monthly contributions, and timeline to see when you’ll reach your goal.",
  keywords: [
    "savings goal tracker",
    "savings calculator",
    "financial goal planner",
    "money saving calculator",
    "emergency fund calculator",
    "vacation savings calculator",
    "car savings calculator",
    "house down payment savings",
    "wedding savings planner",
    "sinking funds tracker",
    "monthly savings plan",
    "how long to save",
    "time to reach savings goal",
    "increase contribution calculator",
    "step up savings",
    "lump sum vs monthly savings",
    "progress to goal",
    "savings percentage to goal",
    "savings habit tracker",
    "budget and savings",
    "automate savings",
    "high yield savings",
    "compound interest savings",
    "visual savings tracker",
    "free savings tracker online"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/savings-tracker" },
  openGraph: {
    title: "Savings Goal Tracker — Reach Your Target",
    description: "Set a savings goal and monthly contribution to see your timeline.",
    url: "https://www.fasttools.store/finance-tools/savings-tracker",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Savings Goal Tracker", description: "Plan and track savings progress online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Savings Goal Tracker",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/savings-tracker",
      description:
        "Track savings towards goals with monthly contributions and projected completion date.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Target amount", "Monthly contribution", "Timeline estimate", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function SavingsTrackerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Savings Goal Tracker — Reach Your Target</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Set a target, add monthly contributions, and see your projected completion date.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <SavingsGoalTracker />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Plan and Track Savings</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Define Your Goal</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Set a target amount and desired date or monthly contribution.</li>
            <li>Enter your current savings to see progress.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Adjust and Automate</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Increase or decrease contributions to meet your target timeline.</li>
            <li>Automate transfers to stay consistent and build momentum.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Savings Tips</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Set up separate sinking funds for specific goals.</li>
            <li>Use high‑yield accounts to improve returns with low risk.</li>
            <li>Celebrate milestones to stay motivated.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/retirement-planner">Retirement Planner</Link></li>
            <li><Link href="/finance-tools/credit-card-payoff">Credit Card Payoff</Link></li>
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
