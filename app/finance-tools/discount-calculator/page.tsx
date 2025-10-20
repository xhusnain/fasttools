import { DiscountCalculator } from "@/components/discount-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Discount Calculator | Sale Price & Savings | FastTools",
  description:
    "Calculate sale prices and savings with percentage or fixed discounts. Stack discounts, include tax, and compare before vs after prices.",
  keywords: [
    // Primary Keywords (20)
    "discount calculator",
    "free discount calculator",
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
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
    "free online discount calculator",
    "best discount calculator online",
    "discount calculator with live preview",
    "free discount calculator tool online",
    "online discount calculator free",
    "discount calculator online free",
    "sale price calculator free online",
    "percentage discount free online",
    "fixed discount free online",
    "stacked discounts free online",
    "discount before tax free online",
    "discount after tax free online",
    "black friday discount calculator free online",
    "cyber monday discount calculator free online",
    "holiday sale calculator free online",
    "clearance discount calculator free online",
    "coupon discount free online",
    "promo code savings free online",
    "bulk discount calculator free online",
    "wholesale discount free online",
    
    // Additional SEO Keywords
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
    "free discount calculator",
    "discount calculator online",
    "sale price calculator online",
    "percentage discount online",
    "fixed discount online",
    "stacked discounts online",
    "discount before tax online",
    "discount after tax online",
    "black friday discount calculator online",
    "cyber monday discount calculator online",
    "holiday sale calculator online",
    "clearance discount calculator online",
    "coupon discount online",
    "promo code savings online",
    "bulk discount calculator online",
    "wholesale discount online",
    "student discount online",
    "employee discount online",
    "membership discount online",
    "bogo calculator online",
    "buy one get one online",
    "compare prices online",
    "price reduction calculator online",
    "retail markdown calculator online",
    "msrp vs sale online",
    "margin impact online",
    "profit after discount online",
    "tax and discount online",
    "inclusive vs exclusive tax online",
    "gst vat discount online",
    "percentage off converter online",
    "what is 30% off 79.99 online",
    "how much is 15% off online",
    "multiple discount calculator online",
    "two discounts in a row online",
    "reverse discount calculator online",
    "original price from discount online",
    "discount needed to reach price online",
    "compare two deals online",
    "price match calculator online",
    "shopping savings calculator online",
    "free discount calculator online",
    "discount calculator free",
    "sale price calculator free",
    "percentage discount free",
    "fixed discount free",
    "stacked discounts free",
    "discount before tax free",
    "discount after tax free",
    "black friday discount calculator free",
    "cyber monday discount calculator free",
    "holiday sale calculator free",
    "clearance discount calculator free",
    "coupon discount free",
    "promo code savings free",
    "bulk discount calculator free",
    "wholesale discount free",
    "student discount free",
    "employee discount free",
    "membership discount free",
    "bogo calculator free",
    "buy one get one free",
    "compare prices free",
    "price reduction calculator free",
    "retail markdown calculator free",
    "msrp vs sale free",
    "margin impact free",
    "profit after discount free",
    "tax and discount free",
    "inclusive vs exclusive tax free",
    "gst vat discount free",
    "percentage off converter free",
    "what is 30% off 79.99 free",
    "how much is 15% off free",
    "multiple discount calculator free",
    "two discounts in a row free",
    "reverse discount calculator free",
    "original price from discount free",
    "discount needed to reach price free",
    "compare two deals free",
    "price match calculator free",
    "shopping savings calculator free",
    "free discount calculator free",
    "discount calculator tool",
    "sale price calculator tool",
    "percentage discount tool",
    "fixed discount tool",
    "stacked discounts tool",
    "discount before tax tool",
    "discount after tax tool",
    "black friday discount calculator tool",
    "cyber monday discount calculator tool",
    "holiday sale calculator tool",
    "clearance discount calculator tool",
    "coupon discount tool",
    "promo code savings tool",
    "bulk discount calculator tool",
    "wholesale discount tool",
    "student discount tool",
    "employee discount tool",
    "membership discount tool",
    "bogo calculator tool",
    "buy one get one tool",
    "compare prices tool",
    "price reduction calculator tool",
    "retail markdown calculator tool",
    "msrp vs sale tool",
    "margin impact tool",
    "profit after discount tool",
    "tax and discount tool",
    "inclusive vs exclusive tax tool",
    "gst vat discount tool",
    "percentage off converter tool",
    "what is 30% off 79.99 tool",
    "how much is 15% off tool",
    "multiple discount calculator tool",
    "two discounts in a row tool",
    "reverse discount calculator tool",
    "original price from discount tool",
    "discount needed to reach price tool",
    "compare two deals tool",
    "price match calculator tool",
    "shopping savings calculator tool",
    "free discount calculator tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/discount-calculator" },
  openGraph: {
    title: "Discount Calculator | Sale Price & Savings | FastTools",
    description: "Calculate sale prices and savings with percentage or fixed discounts. Stack discounts, include tax, and compare before vs after prices.",
    url: "https://www.fasttools.store/finance-tools/discount-calculator",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Discount Calculator - Sale Price & Savings Calculator",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discount Calculator | Sale Price & Savings | FastTools",
    description: "Calculate sale prices and savings with percentage or fixed discounts. Stack discounts, include tax, and compare before vs after prices.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Discount Calculator",
      alternateName: "Sale Price Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/finance-tools/discount-calculator",
      description:
        "Calculate sale prices with stacked discounts, tax options, and savings comparison.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "% and fixed discounts", 
        "Stack multiple", 
        "Tax include/exclude", 
        "Compare deals",
        "Sale price calculator",
        "Percentage discount",
        "Fixed discount",
        "Shopping savings",
        "Price comparison",
        "Black Friday deals"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/finance-tools/discount-calculator",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "discount calculator, free discount calculator, sale price calculator, percentage discount, fixed discount, stacked discounts, shopping savings",
      about: {
        "@type": "Thing",
        name: "Shopping and Discounts",
        description: "Free online tools for calculating discounts, sale prices, and shopping savings"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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
