import { TipCalculator } from "@/components/tip-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tip Calculator - Calculate Restaurant Tips & Split Bills | FastTools",
  description:
    "Free tip calculator for restaurants and services. Calculate tips with customizable percentages and split bills among multiple people. Perfect for dining out.",
  keywords:
    "tip calculator, restaurant tip calculator, gratuity calculator, bill splitter, tip percentage calculator, dining calculator",
}

export default function TipCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Tip Calculator", href: "/finance-tools/tip-calculator" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Tip Calculator</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Calculate tips and split bills for restaurants and services
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <TipCalculator />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
