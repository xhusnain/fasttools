import { CreditCardPayoff } from "@/components/credit-card-payoff"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Credit Card Payoff Calculator | Debt Payoff Timeline & Interest | FastTools",
  description:
    "Estimate months to debt‑free, total interest, and payoff date. Compare avalanche vs snowball methods and extra payments.",
  keywords: [
    // Primary Keywords (20)
    "credit card payoff calculator",
    "free credit card payoff calculator",
    "credit card debt calculator",
    "debt payoff calculator",
    "payoff timeline",
    "interest savings",
    "avalanche method",
    "snowball method",
    "debt repayment plan",
    "extra payment calculator",
    "monthly payment to pay off debt",
    "how long to pay off credit card",
    "debt free date calculator",
    "interest rate calculator",
    "apr credit card calculator",
    "minimum payment calculator",
    "balance transfer calculator",
    "debt consolidation calculator",
    "credit utilization",
    "debt payoff schedule",
    
    // Secondary Keywords (20)
    "amortization credit card",
    "compound interest on debt",
    "reduce interest charges",
    "principal vs interest",
    "debt snowball vs avalanche",
    "debt payoff worksheet",
    "credit score and debt",
    "how to pay off debt faster",
    "budget for debt payoff",
    "biweekly payments",
    "one extra payment per year",
    "debt stacking",
    "multiple card payoff",
    "order of payoff",
    "highest apr first",
    "lowest balance first",
    "credit card payment strategy",
    "free debt calculator",
    "online payoff calculator",
    "debt freedom plan",
    "snowball spreadsheet alternative",
    
    // Long-tail Keywords (20)
    "free online credit card payoff calculator",
    "best credit card payoff calculator online",
    "credit card payoff calculator with live preview",
    "free credit card payoff calculator tool online",
    "online credit card payoff calculator free",
    "credit card payoff calculator online free",
    "credit card debt calculator free online",
    "debt payoff calculator free online",
    "payoff timeline free online",
    "interest savings free online",
    "avalanche method free online",
    "snowball method free online",
    "debt repayment plan free online",
    "extra payment calculator free online",
    "monthly payment to pay off debt free online",
    "how long to pay off credit card free online",
    "debt free date calculator free online",
    "interest rate calculator free online",
    "apr credit card calculator free online",
    "minimum payment calculator free online",
    
    // Additional SEO Keywords
    "balance transfer calculator",
    "debt consolidation calculator",
    "credit utilization",
    "debt payoff schedule",
    "amortization credit card",
    "compound interest on debt",
    "reduce interest charges",
    "principal vs interest",
    "debt snowball vs avalanche",
    "debt payoff worksheet",
    "credit score and debt",
    "how to pay off debt faster",
    "budget for debt payoff",
    "biweekly payments",
    "one extra payment per year",
    "debt stacking",
    "multiple card payoff",
    "order of payoff",
    "highest apr first",
    "lowest balance first",
    "credit card payment strategy",
    "free debt calculator",
    "online payoff calculator",
    "debt freedom plan",
    "snowball spreadsheet alternative",
    "avalanche spreadsheet alternative",
    "credit counseling tools",
    "reduce credit card interest",
    "optimize payments",
    "calculate payoff date",
    "total interest paid",
    "extra principal payment",
    "fixed payment required",
    "what if scenarios debt",
    "simulate rate change",
    "simulate extra payment",
    "simulate balance transfer",
    "credit card payoff calculator online",
    "credit card debt calculator online",
    "debt payoff calculator online",
    "payoff timeline online",
    "interest savings online",
    "avalanche method online",
    "snowball method online",
    "debt repayment plan online",
    "extra payment calculator online",
    "monthly payment to pay off debt online",
    "how long to pay off credit card online",
    "debt free date calculator online",
    "interest rate calculator online",
    "apr credit card calculator online",
    "minimum payment calculator online",
    "balance transfer calculator online",
    "debt consolidation calculator online",
    "credit utilization online",
    "debt payoff schedule online",
    "amortization credit card online",
    "compound interest on debt online",
    "reduce interest charges online",
    "principal vs interest online",
    "debt snowball vs avalanche online",
    "debt payoff worksheet online",
    "credit score and debt online",
    "how to pay off debt faster online",
    "budget for debt payoff online",
    "biweekly payments online",
    "one extra payment per year online",
    "debt stacking online",
    "multiple card payoff online",
    "order of payoff online",
    "highest apr first online",
    "lowest balance first online",
    "credit card payment strategy online",
    "free debt calculator online",
    "online payoff calculator online",
    "debt freedom plan online",
    "snowball spreadsheet alternative online",
    "avalanche spreadsheet alternative online",
    "credit counseling tools online",
    "reduce credit card interest online",
    "optimize payments online",
    "calculate payoff date online",
    "total interest paid online",
    "extra principal payment online",
    "fixed payment required online",
    "what if scenarios debt online",
    "simulate rate change online",
    "simulate extra payment online",
    "simulate balance transfer online",
    "credit card payoff calculator free",
    "credit card debt calculator free",
    "debt payoff calculator free",
    "payoff timeline free",
    "interest savings free",
    "avalanche method free",
    "snowball method free",
    "debt repayment plan free",
    "extra payment calculator free",
    "monthly payment to pay off debt free",
    "how long to pay off credit card free",
    "debt free date calculator free",
    "interest rate calculator free",
    "apr credit card calculator free",
    "minimum payment calculator free",
    "balance transfer calculator free",
    "debt consolidation calculator free",
    "credit utilization free",
    "debt payoff schedule free",
    "amortization credit card free",
    "compound interest on debt free",
    "reduce interest charges free",
    "principal vs interest free",
    "debt snowball vs avalanche free",
    "debt payoff worksheet free",
    "credit score and debt free",
    "how to pay off debt faster free",
    "budget for debt payoff free",
    "biweekly payments free",
    "one extra payment per year free",
    "debt stacking free",
    "multiple card payoff free",
    "order of payoff free",
    "highest apr first free",
    "lowest balance first free",
    "credit card payment strategy free",
    "free debt calculator free",
    "online payoff calculator free",
    "debt freedom plan free",
    "snowball spreadsheet alternative free",
    "avalanche spreadsheet alternative free",
    "credit counseling tools free",
    "reduce credit card interest free",
    "optimize payments free",
    "calculate payoff date free",
    "total interest paid free",
    "extra principal payment free",
    "fixed payment required free",
    "what if scenarios debt free",
    "simulate rate change free",
    "simulate extra payment free",
    "simulate balance transfer free",
    "credit card payoff calculator tool",
    "credit card debt calculator tool",
    "debt payoff calculator tool",
    "payoff timeline tool",
    "interest savings tool",
    "avalanche method tool",
    "snowball method tool",
    "debt repayment plan tool",
    "extra payment calculator tool",
    "monthly payment to pay off debt tool",
    "how long to pay off credit card tool",
    "debt free date calculator tool",
    "interest rate calculator tool",
    "apr credit card calculator tool",
    "minimum payment calculator tool",
    "balance transfer calculator tool",
    "debt consolidation calculator tool",
    "credit utilization tool",
    "debt payoff schedule tool",
    "amortization credit card tool",
    "compound interest on debt tool",
    "reduce interest charges tool",
    "principal vs interest tool",
    "debt snowball vs avalanche tool",
    "debt payoff worksheet tool",
    "credit score and debt tool",
    "how to pay off debt faster tool",
    "budget for debt payoff tool",
    "biweekly payments tool",
    "one extra payment per year tool",
    "debt stacking tool",
    "multiple card payoff tool",
    "order of payoff tool",
    "highest apr first tool",
    "lowest balance first tool",
    "credit card payment strategy tool",
    "free debt calculator tool",
    "online payoff calculator tool",
    "debt freedom plan tool",
    "snowball spreadsheet alternative tool",
    "avalanche spreadsheet alternative tool",
    "credit counseling tools tool",
    "reduce credit card interest tool",
    "optimize payments tool",
    "calculate payoff date tool",
    "total interest paid tool",
    "extra principal payment tool",
    "fixed payment required tool",
    "what if scenarios debt tool",
    "simulate rate change tool",
    "simulate extra payment tool",
    "simulate balance transfer tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/credit-card-payoff" },
  openGraph: {
    title: "Free Credit Card Payoff Calculator | Debt Payoff Timeline & Interest | FastTools",
    description: "Estimate months to debt‑free, total interest, and payoff date. Compare avalanche vs snowball methods and extra payments.",
    url: "https://fasttools.store/finance-tools/credit-card-payoff",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Credit Card Payoff Calculator - Debt Payoff Timeline & Interest",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Credit Card Payoff Calculator | Debt Payoff Timeline & Interest | FastTools",
    description: "Estimate months to debt‑free, total interest, and payoff date. Compare avalanche vs snowball methods and extra payments.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Credit Card Payoff Calculator",
      alternateName: "Debt Payoff Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/finance-tools/credit-card-payoff",
      description:
        "Estimate payoff time, interest, and compare avalanche vs snowball with extra payments.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Avalanche vs snowball", 
        "Extra payments", 
        "Debt‑free date", 
        "Interest savings",
        "Credit card debt calculator",
        "Debt payoff calculator",
        "Payoff timeline",
        "Interest rate calculator",
        "Debt repayment plan",
        "Debt consolidation calculator"
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
      downloadUrl: "https://fasttools.store/finance-tools/credit-card-payoff",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "credit card payoff calculator, free credit card payoff calculator, credit card debt calculator, debt payoff calculator, payoff timeline, interest savings",
      about: {
        "@type": "Thing",
        name: "Debt Management and Credit Card Payoff",
        description: "Free online tools for credit card debt payoff, debt management, and financial planning"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
}

export default function CreditCardPayoffPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Credit Card Payoff", href: "/finance-tools/credit-card-payoff" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Credit Card Payoff Calculator — Debt‑Free Timeline</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">See your payoff date, total interest, and savings from extra payments.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <CreditCardPayoff />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Plan Your Debt Payoff</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Enter Balances, APRs, and Payments</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Add each card balance, interest rate (APR), and current payment.</li>
            <li>Choose a strategy: avalanche (highest APR first) or snowball (lowest balance first).</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Add Extra Payments and Compare</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Simulate extra monthly or one‑time payments to reduce interest.</li>
            <li>Review new payoff date and total interest savings.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Faster Payoff</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Focus on highest APR first (avalanche) for maximum interest savings.</li>
            <li>Automate payments and avoid new charges during payoff.</li>
            <li>Consider balance transfers cautiously—account for fees and promo periods.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/retirement-planner">Retirement Planner</Link></li>
            <li><Link href="/finance-tools/savings-tracker">Savings Goal Tracker</Link></li>
            <li><Link href="/finance-tools/paypal-fee">PayPal Fee Calculator</Link></li>
            <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
