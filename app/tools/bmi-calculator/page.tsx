import { BMICalculator } from "@/components/bmi-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index | Free Health Tool",
  description:
    "Calculate your BMI (Body Mass Index) instantly. Free BMI calculator with metric and imperial units. Check if you're underweight, normal, overweight, or obese.",
  keywords: "BMI calculator, body mass index, BMI chart, health calculator, weight calculator",
  openGraph: {
    title: "BMI Calculator | Free Health Tool",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator.",
  },
}

export default function BMICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "BMI Calculator", href: "/tools/bmi-calculator" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">BMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your Body Mass Index (BMI) to assess your weight category. Supports both metric (kg/cm) and
            imperial (lbs/in) units.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <BMICalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
