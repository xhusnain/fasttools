import { DateDifferenceCalculator } from "@/components/date-difference-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Date Difference Calculator - Calculate Days Between Dates | Free Online Tool",
  description:
    "Calculate the exact difference between two dates in years, months, days, weeks, and hours. Free date difference calculator with accurate results.",
  keywords: "date difference calculator, days between dates, date calculator, time between dates",
  openGraph: {
    title: "Date Difference Calculator | Free Online Tool",
    description: "Calculate the exact difference between two dates in years, months, and days.",
  },
}

export default function DateDifferencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Date Difference Calculator", href: "/tools/date-difference" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Date Difference Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate the exact time difference between two dates. Perfect for project planning, event countdowns, and
            tracking milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <DateDifferenceCalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
