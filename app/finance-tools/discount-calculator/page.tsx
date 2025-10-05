import { DiscountCalculator } from "@/components/discount-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Discount Calculator - Calculate Sale Prices & Savings | ToolifyHub",
  description:
    "Free discount calculator to find sale prices and savings. Perfect for shopping seasons. Calculate percentage discounts and see how much you save instantly.",
  keywords:
    "discount calculator, sale price calculator, percentage discount, savings calculator, shopping calculator, price reduction calculator",
}

export default function DiscountCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Discount Calculator", href: "/finance-tools/discount-calculator" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Discount Calculator</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Calculate sale prices and find out how much you save
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <DiscountCalculator />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
