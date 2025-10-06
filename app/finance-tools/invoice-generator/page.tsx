import { InvoiceGenerator } from "@/components/invoice-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Invoice Generator - Create Professional Invoices Online | FastTools",
  description:
    "Generate professional invoices for free. Perfect for freelancers and small businesses. Add items, calculate totals with tax, and create invoices instantly. No registration required.",
  keywords:
    "invoice generator, free invoice maker, professional invoice, freelance invoice, business invoice, invoice template, online invoice generator, create invoice",
}

export default function InvoiceGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Invoice Generator", href: "/finance-tools/invoice-generator" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Invoice Generator</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">
            Create professional invoices for your freelance or business work
          </p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <InvoiceGenerator />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />
      </div>
    </div>
  )
}
