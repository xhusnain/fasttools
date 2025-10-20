import { SavingsGoalTracker } from "@/components/savings-goal-tracker"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Savings Goal Tracker | Timeline & Progress | FastTools",
  description:
    "Track savings progress toward goals. Set target amount, monthly contributions, and timeline to see when you'll reach your goal.",
  keywords: [
    // Primary Keywords (20)
    "savings goal tracker",
    "free savings goal tracker",
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
    
    // Secondary Keywords (20)
    "budget and savings",
    "automate savings",
    "high yield savings",
    "compound interest savings",
    "visual savings tracker",
    "free savings tracker online",
    "savings goal tracker online",
    "savings calculator online",
    "financial goal planner online",
    "money saving calculator online",
    "emergency fund calculator online",
    "vacation savings calculator online",
    "car savings calculator online",
    "house down payment savings online",
    "wedding savings planner online",
    "sinking funds tracker online",
    "monthly savings plan online",
    "how long to save online",
    "time to reach savings goal online",
    "increase contribution calculator online",
    "step up savings online",
    
    // Long-tail Keywords (20)
    "free online savings goal tracker",
    "best savings goal tracker online",
    "savings goal tracker with live preview",
    "free savings goal tracker tool online",
    "online savings goal tracker free",
    "savings goal tracker online free",
    "savings calculator free online",
    "financial goal planner free online",
    "money saving calculator free online",
    "emergency fund calculator free online",
    "vacation savings calculator free online",
    "car savings calculator free online",
    "house down payment savings free online",
    "wedding savings planner free online",
    "sinking funds tracker free online",
    "monthly savings plan free online",
    "how long to save free online",
    "time to reach savings goal free online",
    "increase contribution calculator free online",
    "step up savings free online",
    "lump sum vs monthly savings free online",
    
    // Additional SEO Keywords
    "progress to goal",
    "savings percentage to goal",
    "savings habit tracker",
    "budget and savings",
    "automate savings",
    "high yield savings",
    "compound interest savings",
    "visual savings tracker",
    "free savings tracker online",
    "savings goal tracker online",
    "savings calculator online",
    "financial goal planner online",
    "money saving calculator online",
    "emergency fund calculator online",
    "vacation savings calculator online",
    "car savings calculator online",
    "house down payment savings online",
    "wedding savings planner online",
    "sinking funds tracker online",
    "monthly savings plan online",
    "how long to save online",
    "time to reach savings goal online",
    "increase contribution calculator online",
    "step up savings online",
    "lump sum vs monthly savings online",
    "progress to goal online",
    "savings percentage to goal online",
    "savings habit tracker online",
    "budget and savings online",
    "automate savings online",
    "high yield savings online",
    "compound interest savings online",
    "visual savings tracker online",
    "free savings tracker online online",
    "savings goal tracker free",
    "savings calculator free",
    "financial goal planner free",
    "money saving calculator free",
    "emergency fund calculator free",
    "vacation savings calculator free",
    "car savings calculator free",
    "house down payment savings free",
    "wedding savings planner free",
    "sinking funds tracker free",
    "monthly savings plan free",
    "how long to save free",
    "time to reach savings goal free",
    "increase contribution calculator free",
    "step up savings free",
    "lump sum vs monthly savings free",
    "progress to goal free",
    "savings percentage to goal free",
    "savings habit tracker free",
    "budget and savings free",
    "automate savings free",
    "high yield savings free",
    "compound interest savings free",
    "visual savings tracker free",
    "free savings tracker online free",
    "savings goal tracker tool",
    "savings calculator tool",
    "financial goal planner tool",
    "money saving calculator tool",
    "emergency fund calculator tool",
    "vacation savings calculator tool",
    "car savings calculator tool",
    "house down payment savings tool",
    "wedding savings planner tool",
    "sinking funds tracker tool",
    "monthly savings plan tool",
    "how long to save tool",
    "time to reach savings goal tool",
    "increase contribution calculator tool",
    "step up savings tool",
    "lump sum vs monthly savings tool",
    "progress to goal tool",
    "savings percentage to goal tool",
    "savings habit tracker tool",
    "budget and savings tool",
    "automate savings tool",
    "high yield savings tool",
    "compound interest savings tool",
    "visual savings tracker tool",
    "free savings tracker online tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/savings-tracker" },
  openGraph: {
    title: "Savings Goal Tracker | Timeline & Progress | FastTools",
    description: "Track savings progress toward goals. Set target amount, monthly contributions, and timeline to see when you'll reach your goal.",
    url: "https://www.fasttools.store/finance-tools/savings-tracker",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Savings Goal Tracker - Savings Timeline & Progress",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Savings Goal Tracker | Timeline & Progress | FastTools",
    description: "Track savings progress toward goals. Set target amount, monthly contributions, and timeline to see when you'll reach your goal.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Savings Goal Tracker",
      alternateName: "Financial Goal Planner",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/finance-tools/savings-tracker",
      description:
        "Track savings towards goals with monthly contributions and projected completion date.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Target amount", 
        "Monthly contribution", 
        "Timeline estimate", 
        "Copy results",
        "Savings calculator",
        "Financial goal planner",
        "Money saving calculator",
        "Emergency fund calculator",
        "Vacation savings calculator",
        "Car savings calculator"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/finance-tools/savings-tracker",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "savings goal tracker, free savings goal tracker, savings calculator, financial goal planner, money saving calculator, emergency fund calculator",
      about: {
        "@type": "Thing",
        name: "Personal Finance and Savings",
        description: "Free online tools for tracking savings goals, financial planning, and money management"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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
