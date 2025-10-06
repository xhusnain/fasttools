import { CreditCardPayoff } from "@/components/credit-card-payoff"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator - Calculate Debt Payoff Timeline | FastTools",
  description:
    "Free credit card payoff calculator. Calculate how long it will take to pay off your credit card debt and how much interest you'll pay. Plan your debt-free journey.",
  keywords:
    "credit card payoff calculator, debt payoff calculator, credit card debt calculator, interest calculator, debt repayment calculator, credit card calculator",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Credit Card Payoff Calculator</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Calculate how long it will take to pay off your credit card debt
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <CreditCardPayoff />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
