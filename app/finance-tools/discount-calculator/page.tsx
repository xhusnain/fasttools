import { DiscountCalculator } from "@/components/discount-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Discount Calculator — Sale Price & Savings Calculator | SmartToolboxes",
  description:
    "Calculate sale prices and savings with percentage or fixed discounts. Stack discounts, include tax, and compare before vs after prices.",
  keywords: [
    "discount calculator",
    "sale price calculator",
    "percentage discount",
    "fixed discount",
    "stacked discounts",
    "discount before tax",
    "discount after tax",
    "black friday discount calculator",
    "cyber monday discount calculator",
    "holiday sale calculator",
    "clearance discount calculator",
    "coupon discount",
    "promo code savings",
    "bulk discount calculator",
    "wholesale discount",
    "student discount",
    "employee discount",
    "membership discount",
    "bogo calculator",
    "buy one get one",
    "compare prices",
    "price reduction calculator",
    "retail markdown calculator",
    "msrp vs sale",
    "margin impact",
    "profit after discount",
    "tax and discount",
    "inclusive vs exclusive tax",
    "gst vat discount",
    "percentage off converter",
    "what is 30% off 79.99",
    "how much is 15% off",
    "multiple discount calculator",
    "two discounts in a row",
    "reverse discount calculator",
    "original price from discount",
    "discount needed to reach price",
    "compare two deals",
    "price match calculator",
    "shopping savings calculator",
    "free discount calculator"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/discount-calculator" },
  openGraph: {
    title: "Discount Calculator — Find Sale Prices & Savings",
    description: "Stack percentage and fixed discounts, include tax, and compare deals.",
    url: "https://www.fasttools.store/finance-tools/discount-calculator",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Discount Calculator", description: "Instant percentage and fixed discount savings." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Discount Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/discount-calculator",
      description:
        "Calculate sale prices with stacked discounts, tax options, and savings comparison.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["% and fixed discounts", "Stack multiple", "Tax include/exclude", "Compare deals"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Discount Calculator — Sale Price & Savings</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Stack percentage and fixed discounts, include tax, and compare deals.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <DiscountCalculator />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Calculate Discounts</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Choose Discount Type</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Select percentage or fixed amount; add multiple discounts if needed.</li>
            <li>Toggle tax include/exclude to match store policy.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Compare Savings</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>See original vs discounted price and total savings.</li>
            <li>Use multiple discount order to reflect compounding.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Shopping Tips</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Compare competing deals using total out‑the‑door price.</li>
            <li>Beware stacked percentage order; A then B differs from B then A.</li>
            <li>Confirm if coupons apply before or after sales tax.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/tip-calculator">Tip Calculator</Link></li>
            <li><Link href="/finance-tools/bill-splitter">Bill Splitter</Link></li>
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            <li><Link href="/finance-tools/paypal-fee">PayPal Fee Calculator</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
