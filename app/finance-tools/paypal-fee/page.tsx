import { PayPalFeeCalculator } from "@/components/paypal-fee-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "PayPal Fee Calculator | Net Amount & Charges | FastTools",
  description:
    "Calculate PayPal fees and net amounts. Enter country, currency, and rate (e.g., 2.9% + $0.30). See what to charge to receive a target amount.",
  keywords: [
    // Primary Keywords (20)
    "PayPal fee calculator",
    "free PayPal fee calculator",
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
    
    // Secondary Keywords (20)
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
    "PayPal fee calculator free",
    "PayPal fee calculator online",
    "PayPal fee calculator tool",
    "PayPal fee calculator app",
    
    // Long-tail Keywords (20)
    "free online PayPal fee calculator",
    "best PayPal fee calculator online",
    "PayPal fee calculator with live preview",
    "free PayPal fee calculator tool online",
    "online PayPal fee calculator free",
    "PayPal fee calculator online free",
    "PayPal fees free online",
    "transaction fee calculator free online",
    "what to charge PayPal free online",
    "PayPal net received free online",
    "PayPal seller fees free online",
    "PayPal business fees free online",
    "PayPal international fees free online",
    "PayPal micropayments free online",
    "PayPal nonprofit fees free online",
    "PayPal chargeback fee free online",
    "PayPal refund fee free online",
    "PayPal currency conversion fee free online",
    "PayPal fee percent free online",
    "PayPal fixed fee free online",
    
    // Additional SEO Keywords
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
    "PayPal fee calculator free",
    "PayPal fee calculator online",
    "PayPal fee calculator tool",
    "PayPal fee calculator app",
    "PayPal fee calculator free online",
    "PayPal fee calculator online free",
    "PayPal fee calculator tool free",
    "PayPal fee calculator app free",
    "PayPal fee calculator free tool",
    "PayPal fee calculator free app",
    "PayPal fee calculator free online tool",
    "PayPal fee calculator free online app",
    "PayPal fee calculator free tool online",
    "PayPal fee calculator free app online",
    "PayPal fee calculator free online tool free",
    "PayPal fee calculator free online app free",
    "PayPal fee calculator free tool online free",
    "PayPal fee calculator free app online free",
    "PayPal fee calculator free online tool online",
    "PayPal fee calculator free online app online",
    "PayPal fee calculator free tool online tool",
    "PayPal fee calculator free app online app",
    "PayPal fee calculator free online tool online tool",
    "PayPal fee calculator free online app online app",
    "PayPal fee calculator free tool online tool free",
    "PayPal fee calculator free app online app free",
    "PayPal fee calculator free online tool online tool free",
    "PayPal fee calculator free online app online app free",
    "PayPal fee calculator free tool online tool online",
    "PayPal fee calculator free app online app online",
    "PayPal fee calculator free online tool online tool online",
    "PayPal fee calculator free online app online app online",
    "PayPal fee calculator free tool online tool online free",
    "PayPal fee calculator free app online app online free",
    "PayPal fee calculator free online tool online tool online free",
    "PayPal fee calculator free online app online app online free"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/paypal-fee" },
  openGraph: {
    title: "Free PayPal Fee Calculator | Net Amount & What to Charge | FastTools",
    description: "Calculate PayPal fees and net amounts. Enter country, currency, and rate (e.g., 2.9% + $0.30). See what to charge to receive a target amount.",
    url: "https://www.fasttools.store/finance-tools/paypal-fee",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free PayPal Fee Calculator - Net Amount & What to Charge",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PayPal Fee Calculator | Net Amount & What to Charge | FastTools",
    description: "Calculate PayPal fees and net amounts. Enter country, currency, and rate (e.g., 2.9% + $0.30). See what to charge to receive a target amount.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "PayPal Fee Calculator",
      alternateName: "PayPal Fees Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/finance-tools/paypal-fee",
      description:
        "Calculate PayPal fees by country and currency; compute net and required gross amounts.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Country & currency fees", 
        "% + fixed fee", 
        "Net/gross modes", 
        "Copy results",
        "PayPal fees",
        "Transaction fees",
        "Business fees",
        "International fees",
        "Payment processing",
        "Fee calculation"
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
      downloadUrl: "https://www.fasttools.store/finance-tools/paypal-fee",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "PayPal fee calculator, free PayPal fee calculator, PayPal fees, transaction fee calculator, what to charge PayPal, PayPal net received",
      about: {
        "@type": "Thing",
        name: "Payment Processing Fees",
        description: "Free online tools for calculating PayPal fees, transaction costs, and payment processing charges"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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
