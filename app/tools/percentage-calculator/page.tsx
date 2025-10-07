import { PercentageCalculator } from "@/components/percentage-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Percentage Calculator - Calculate Percentages Online | Free Math Tool",
  description:
    "Calculate percentages instantly with our free online percentage calculator. Find what percentage of a number is, percentage increase, decrease, and more.",
  keywords: "percentage calculator, percent calculator, percentage formula, calculate percentage",
  openGraph: {
    title: "Percentage Calculator | Free Math Tool",
    description: "Calculate percentages instantly with our free online calculator.",
  },
}

export default function PercentageCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Percentage Calculator", href: "/tools/percentage-calculator" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Percentage Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate percentages quickly and easily. Perfect for discounts, tips, grades, statistics, and everyday math
            calculations.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <PercentageCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <AdSpace slot="content" className="w-full h-24" />
            </div>
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
