import { RetirementPlanner } from "@/components/retirement-planner"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Retirement Planner | Retirement Savings & Goal Calculator | FastTools",
  description:
    "Plan retirement savings with compound growth. Set target age, contributions, expected return, inflation, and get a clear projection chart.",
  keywords: [
    // Primary Keywords (20)
    "retirement planner",
    "free retirement planner",
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
    
    // Secondary Keywords (20)
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
    "free retirement calculator",
    "retirement planner online",
    
    // Long-tail Keywords (20)
    "free online retirement planner",
    "best retirement planner online",
    "retirement planner with live preview",
    "free retirement planner tool online",
    "online retirement planner free",
    "retirement planner online free",
    "retirement calculator free online",
    "retirement savings calculator free online",
    "compound interest calculator free online",
    "retirement goal planner free online",
    "401k calculator free online",
    "ira calculator free online",
    "roth vs traditional free online",
    "expected rate of return free online",
    "inflation adjusted free online",
    "real vs nominal return free online",
    "safe withdrawal rate free online",
    "4 percent rule free online",
    "target retirement age free online",
    "retirement contributions free online",
    "employer match free online",
    
    // Additional SEO Keywords
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
    "free retirement calculator",
    "retirement planner online",
    "retirement calculator online",
    "retirement savings calculator online",
    "compound interest calculator online",
    "retirement goal planner online",
    "401k calculator online",
    "ira calculator online",
    "roth vs traditional online",
    "expected rate of return online",
    "inflation adjusted online",
    "real vs nominal return online",
    "safe withdrawal rate online",
    "4 percent rule online",
    "target retirement age online",
    "retirement contributions online",
    "employer match online",
    "catch up contributions online",
    "investment fees impact online",
    "portfolio growth projection online",
    "retirement timeline online",
    "retirement goal shortfall online",
    "monthly savings needed online",
    "lump sum vs monthly online",
    "tax advantaged accounts online",
    "asset allocation online",
    "risk profile online",
    "Monte Carlo simulation online",
    "inflation assumption online",
    "retirement income need online",
    "social security estimate online",
    "pension income online",
    "annuity income online",
    "retirement drawdown online",
    "post retirement budget online",
    "healthcare costs retirement online",
    "fire calculator online",
    "financial independence calculator online",
    "personal finance planning online",
    "free retirement calculator online",
    "retirement planner free",
    "retirement calculator free",
    "retirement savings calculator free",
    "compound interest calculator free",
    "retirement goal planner free",
    "401k calculator free",
    "ira calculator free",
    "roth vs traditional free",
    "expected rate of return free",
    "inflation adjusted free",
    "real vs nominal return free",
    "safe withdrawal rate free",
    "4 percent rule free",
    "target retirement age free",
    "retirement contributions free",
    "employer match free",
    "catch up contributions free",
    "investment fees impact free",
    "portfolio growth projection free",
    "retirement timeline free",
    "retirement goal shortfall free",
    "monthly savings needed free",
    "lump sum vs monthly free",
    "tax advantaged accounts free",
    "asset allocation free",
    "risk profile free",
    "Monte Carlo simulation free",
    "inflation assumption free",
    "retirement income need free",
    "social security estimate free",
    "pension income free",
    "annuity income free",
    "retirement drawdown free",
    "post retirement budget free",
    "healthcare costs retirement free",
    "fire calculator free",
    "financial independence calculator free",
    "personal finance planning free",
    "free retirement calculator free",
    "retirement planner tool",
    "retirement calculator tool",
    "retirement savings calculator tool",
    "compound interest calculator tool",
    "retirement goal planner tool",
    "401k calculator tool",
    "ira calculator tool",
    "roth vs traditional tool",
    "expected rate of return tool",
    "inflation adjusted tool",
    "real vs nominal return tool",
    "safe withdrawal rate tool",
    "4 percent rule tool",
    "target retirement age tool",
    "retirement contributions tool",
    "employer match tool",
    "catch up contributions tool",
    "investment fees impact tool",
    "portfolio growth projection tool",
    "retirement timeline tool",
    "retirement goal shortfall tool",
    "monthly savings needed tool",
    "lump sum vs monthly tool",
    "tax advantaged accounts tool",
    "asset allocation tool",
    "risk profile tool",
    "Monte Carlo simulation tool",
    "inflation assumption tool",
    "retirement income need tool",
    "social security estimate tool",
    "pension income tool",
    "annuity income tool",
    "retirement drawdown tool",
    "post retirement budget tool",
    "healthcare costs retirement tool",
    "fire calculator tool",
    "financial independence calculator tool",
    "personal finance planning tool",
    "free retirement calculator tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/retirement-planner" },
  openGraph: {
    title: "Free Retirement Planner | Retirement Savings & Goal Calculator | FastTools",
    description: "Plan retirement savings with compound growth. Set target age, contributions, expected return, inflation, and get a clear projection chart.",
    url: "https://fasttools.store/finance-tools/retirement-planner",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Retirement Planner - Retirement Savings & Goal Calculator",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Retirement Planner | Retirement Savings & Goal Calculator | FastTools",
    description: "Plan retirement savings with compound growth. Set target age, contributions, expected return, inflation, and get a clear projection chart.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Retirement Planner",
      alternateName: "Retirement Savings Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/finance-tools/retirement-planner",
      description:
        "Plan retirement savings using contributions, expected return, and inflation to see future value.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Contribution schedule", 
        "Inflation adjustment", 
        "Projection chart", 
        "Copy results",
        "Retirement calculator",
        "401k calculator",
        "IRA calculator",
        "Compound interest",
        "Financial planning",
        "Investment growth"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/finance-tools/retirement-planner",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "retirement planner, free retirement planner, retirement calculator, retirement savings calculator, compound interest calculator, 401k calculator",
      about: {
        "@type": "Thing",
        name: "Retirement Planning and Financial Planning",
        description: "Free online tools for retirement planning, financial planning, and investment growth calculations"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <RetirementPlanner />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
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

        </div>
      </div>
  )
}
