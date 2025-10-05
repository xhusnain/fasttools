import { PayPalFeeCalculator } from "@/components/paypal-fee-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PayPal Fee Calculator - Calculate PayPal Transaction Fees | ToolifyHub",
  description:
    "Free PayPal fee calculator. Calculate PayPal transaction fees (2.9% + $0.30) and determine how much you'll receive or need to charge. Perfect for freelancers and online sellers.",
  keywords:
    "PayPal fee calculator, PayPal fees, transaction fee calculator, PayPal charges, online payment fees, freelancer tools, PayPal calculator",
}

export default function PayPalFeeCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">PayPal Fee Calculator</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Calculate PayPal transaction fees and net amounts
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <PayPalFeeCalculator />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
