import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { WorkdayCalculator } from "@/components/workday-calculator"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Workday Calculator - Calculate Business Days Between Dates | ToolifyHub",
  description:
    "Free online workday calculator. Calculate the number of business days between two dates, excluding weekends. Perfect for project planning and HR.",
  keywords:
    "workday calculator, business days calculator, working days, weekday calculator, business day counter, work days between dates",
  openGraph: {
    title: "Workday Calculator - Calculate Business Days Between Dates",
    description: "Free online workday calculator. Calculate the number of business days between two dates.",
    type: "website",
  },
}

export default function WorkdayCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Workday Calculator", href: "/date-time-tools/workday-calculator" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Workday Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Calculate the number of business days between two dates, excluding weekends. Perfect for project planning,
              HR, and office scheduling.
            </p>
          </div>

          <WorkdayCalculator />

          <AdSpace position="content" />
        </div>
      </div>
    </div>
  )
}
