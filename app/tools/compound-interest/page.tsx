import { CompoundInterestCalculator } from "@/components/compound-interest-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compound Interest Calculator - Investment Growth Calculator | Free Tool",
  description:
    "Calculate compound interest and see how your investment grows over time. Free compound interest calculator with multiple compounding frequencies.",
  keywords: "compound interest calculator, investment calculator, savings calculator, interest calculator",
  openGraph: {
    title: "Compound Interest Calculator | Free Investment Tool",
    description: "Calculate compound interest and see how your investment grows over time.",
  },
}

export default function CompoundInterestPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Compound Interest Calculator", href: "/tools/compound-interest" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Compound Interest Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate compound interest and see how your investment or savings grow over time. Choose from multiple
            compounding frequencies for accurate results.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <CompoundInterestCalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
