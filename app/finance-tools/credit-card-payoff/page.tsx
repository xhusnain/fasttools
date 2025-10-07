import { CreditCardPayoff } from "@/components/credit-card-payoff"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator — Debt Payoff Timeline & Interest | SmartToolboxes",
  description:
    "Estimate months to debt‑free, total interest, and payoff date. Compare avalanche vs snowball methods and extra payments.",
  keywords: [
    "credit card payoff calculator",
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
    "simulate balance transfer"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/finance-tools/credit-card-payoff" },
  openGraph: {
    title: "Credit Card Payoff Calculator — Timeline & Interest",
    description: "Plan debt payoff with avalanche or snowball and see interest savings.",
    url: "https://www.smarttoolboxes.com/finance-tools/credit-card-payoff",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Credit Card Payoff Calculator", description: "Estimate debt‑free date and interest paid." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Credit Card Payoff Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/finance-tools/credit-card-payoff",
      description:
        "Estimate payoff time, interest, and compare avalanche vs snowball with extra payments.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Avalanche vs snowball", "Extra payments", "Debt‑free date", "Interest savings"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
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

        <AdSpace slot="content" className="mb-6 h-24" />

        <CreditCardPayoff />

        <AdSpace slot="content" className="mt-6 h-24" />

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
