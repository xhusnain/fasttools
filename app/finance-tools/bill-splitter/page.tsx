import { BillSplitter } from "@/components/bill-splitter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bill Splitter - Split Bills & Expenses Fairly | ToolifyHub",
  description:
    "Free bill splitter to divide expenses fairly among friends or groups. Perfect for restaurants, trips, and shared expenses. Calculate tips and split amounts easily.",
  keywords:
    "bill splitter, expense splitter, split bill calculator, group expense calculator, shared expense calculator, restaurant bill splitter",
}

export default function BillSplitterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Bill Splitter", href: "/finance-tools/bill-splitter" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Bill Splitter</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Split bills and expenses fairly among friends or groups
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <BillSplitter />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
