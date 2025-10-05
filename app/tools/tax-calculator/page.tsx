import { TaxCalculator } from "@/components/tax-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Income Tax Calculator - Calculate Salary Tax | Free Finance Tool",
  description:
    "Calculate your income tax based on annual salary. Free tax calculator with US federal tax brackets. Estimate your net salary after tax deductions.",
  keywords: "tax calculator, income tax calculator, salary calculator, tax estimator, net salary calculator",
  openGraph: {
    title: "Income Tax Calculator | Free Finance Tool",
    description: "Calculate your income tax and net salary with our free online calculator.",
  },
}

export default function TaxCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Tax Calculator", href: "/tools/tax-calculator" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Income Tax Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your estimated income tax based on your annual salary. Get your net salary, monthly take-home pay,
            and tax breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <TaxCalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
