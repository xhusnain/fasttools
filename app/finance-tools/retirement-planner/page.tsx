import { RetirementPlanner } from "@/components/retirement-planner"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Retirement Goal Planner - Plan Your Retirement Savings | FastTools",
  description:
    "Free retirement planner with compound interest calculations. See how your retirement savings will grow over time and plan for a secure financial future.",
  keywords:
    "retirement planner, retirement calculator, retirement savings calculator, compound interest calculator, retirement goal planner, financial planning",
}

export default function RetirementPlannerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Retirement Planner", href: "/finance-tools/retirement-planner" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Retirement Goal Planner</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Plan your retirement with compound interest calculations
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <RetirementPlanner />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
