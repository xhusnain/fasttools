import { LoanCalculator } from "@/components/loan-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loan EMI Calculator - Calculate Monthly Payments | Free Finance Tool",
  description:
    "Calculate your loan EMI (monthly payment) instantly. Free loan calculator for home loans, car loans, personal loans. Get accurate EMI, interest, and total payment.",
  keywords: "loan calculator, EMI calculator, mortgage calculator, loan payment calculator, interest calculator",
  openGraph: {
    title: "Loan EMI Calculator | Free Finance Tool",
    description: "Calculate your monthly loan payments (EMI) with our free online calculator.",
  },
}

export default function LoanCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Loan Calculator", href: "/tools/loan-calculator" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Loan EMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your monthly loan payment (EMI) for home loans, car loans, or personal loans. Get instant results
            with total interest and payment breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <LoanCalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
