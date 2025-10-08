import { PayPalFeeCalculator } from "@/components/paypal-fee-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PayPal Fee Calculator — Net Amount & What to Charge | SmartToolboxes",
  description:
    "Calculate PayPal fees and net amounts. Enter country, currency, and rate (e.g., 2.9% + $0.30). See what to charge to receive a target amount.",
  keywords: [
    "PayPal fee calculator",
    "PayPal fees",
    "transaction fee calculator",
    "what to charge PayPal",
    "PayPal net received",
    "PayPal seller fees",
    "PayPal business fees",
    "PayPal international fees",
    "PayPal micropayments",
    "PayPal nonprofit fees",
    "PayPal chargeback fee",
    "PayPal refund fee",
    "PayPal currency conversion fee",
    "PayPal fee percent",
    "PayPal fixed fee",
    "PayPal invoice fee",
    "PayPal donation fee",
    "PayPal personal vs business",
    "PayPal fee by country",
    "PayPal fee calculator india",
    "PayPal fee calculator uk",
    "PayPal fee calculator eu",
    "PayPal fee calculator canada",
    "PayPal fee calculator australia",
    "PayPal goods and services fee",
    "PayPal friends and family",
    "PayPal fee formula",
    "PayPal fee explained",
    "PayPal marketplace fee",
    "PayPal payment processor",
    "PayPal vs stripe fees",
    "PayPal vs wise fees",
    "PayPal to bank fee",
    "PayPal withdrawal fee",
    "PayPal invoice generator",
    "PayPal fee calculator free"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/paypal-fee" },
  openGraph: {
    title: "PayPal Fee Calculator — Net & Gross Calculator",
    description: "Find net received and how much to charge after PayPal fees.",
    url: "https://www.fasttools.store/finance-tools/paypal-fee",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "PayPal Fee Calculator", description: "Calculate PayPal fees and net amount." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PayPal Fee Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/paypal-fee",
      description:
        "Calculate PayPal fees by country and currency; compute net and required gross amounts.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Country & currency fees", "% + fixed fee", "Net/gross modes", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function PayPalFeeCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">PayPal Fee Calculator — Net Received & Required Gross</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Know your net amount or what to charge after PayPal fees in your country.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <PayPalFeeCalculator />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Calculate PayPal Fees</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Choose Country, Currency, and Fee Rate</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Enter the percentage (e.g., 2.9%) and fixed fee (e.g., $0.30) that applies to you.</li>
            <li>Switch between net received and required gross modes.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Review Results and Share</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>See exact net amount or how much to charge to receive a target amount.</li>
            <li>Copy results for invoices or checkout notes.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Lower Fees</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Consider micropayments pricing for small transactions if available.</li>
            <li>Compare alternatives like Stripe or Wise for cross‑border payments.</li>
            <li>Avoid currency conversion when possible to reduce extra fees.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
            <li><Link href="/converters/currency">Currency Converter</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
