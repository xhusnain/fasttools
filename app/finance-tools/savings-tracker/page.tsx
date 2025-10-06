import { SavingsGoalTracker } from "@/components/savings-goal-tracker"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Savings Goal Tracker - Track Your Savings Progress | FastTools",
  description:
    "Free savings goal tracker to monitor your progress and calculate when you'll reach your financial goals. Perfect for planning vacations, purchases, or emergency funds.",
  keywords:
    "savings goal tracker, savings calculator, financial goal planner, savings progress tracker, money saving calculator",
}

export default function SavingsTrackerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Savings Goal Tracker</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Track your savings progress and calculate when you'll reach your goals
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <SavingsGoalTracker />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
