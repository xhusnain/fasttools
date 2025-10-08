import { TipCalculator } from "@/components/tip-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Tip Calculator | Restaurant Gratuity & Bill Split | FastTools",
  description:
    "Calculate tips and split bills instantly. Customize tip percentages, include tax, round totals, and share with friends. Fast, accurate, mobile friendly.",
  keywords: [
    // Primary Keywords (20)
    "tip calculator",
    "free tip calculator",
    "restaurant tip calculator",
    "gratuity calculator",
    "tip percentage calculator",
    "how much to tip",
    "15% tip calculator",
    "18% tip calculator",
    "20% tip calculator",
    "split bill calculator",
    "bill splitter with tip",
    "tip on tax or before tax",
    "round tip and total",
    "tip per person",
    "group tip calculator",
    "bar tip calculator",
    "salon tip calculator",
    "delivery tip calculator",
    "valet tip",
    "hotel tip",
    
    // Secondary Keywords (20)
    "tax and tip calculator",
    "server tip calculator",
    "waiter tip",
    "how to calculate tip",
    "tip etiquette",
    "minimum tip guidance",
    "custom tip percentage",
    "cash vs card tip",
    "restaurant bill tip",
    "service charge vs tip",
    "tip suggestions",
    "tip chart",
    "calculate tip after discount",
    "calculate tip on subtotal",
    "tip calculator no ads",
    "free tip calculator",
    "mobile tip calculator",
    "dining calculator",
    "meal bill calculator",
    "table split calculator",
    
    // Long-tail Keywords (20)
    "free online tip calculator",
    "best tip calculator online",
    "tip calculator with live preview",
    "free tip calculator tool online",
    "online tip calculator free",
    "tip calculator online free",
    "restaurant tip calculator free online",
    "gratuity calculator free online",
    "tip percentage calculator free online",
    "how much to tip free online",
    "15% tip calculator free online",
    "18% tip calculator free online",
    "20% tip calculator free online",
    "split bill calculator free online",
    "bill splitter with tip free online",
    "tip on tax or before tax free online",
    "round tip and total free online",
    "tip per person free online",
    "group tip calculator free online",
    "bar tip calculator free online",
    
    // Additional SEO Keywords
    "salon tip calculator",
    "delivery tip calculator",
    "valet tip",
    "hotel tip",
    "tax and tip calculator",
    "server tip calculator",
    "waiter tip",
    "how to calculate tip",
    "tip etiquette",
    "minimum tip guidance",
    "custom tip percentage",
    "cash vs card tip",
    "restaurant bill tip",
    "service charge vs tip",
    "tip suggestions",
    "tip chart",
    "calculate tip after discount",
    "calculate tip on subtotal",
    "tip calculator no ads",
    "free tip calculator",
    "mobile tip calculator",
    "dining calculator",
    "meal bill calculator",
    "table split calculator",
    "friends bill split",
    "large group tip",
    "tip sharing",
    "tip pooling",
    "pre-tax tip",
    "post-tax tip",
    "per-person total",
    "how much to tip delivery",
    "how much to tip hairdresser",
    "how much to tip bartender",
    "how much to tip valet",
    "tip rounding rules",
    "tip calculator app alternative",
    "tip calculator online",
    "restaurant tip calculator online",
    "gratuity calculator online",
    "tip percentage calculator online",
    "how much to tip online",
    "15% tip calculator online",
    "18% tip calculator online",
    "20% tip calculator online",
    "split bill calculator online",
    "bill splitter with tip online",
    "tip on tax or before tax online",
    "round tip and total online",
    "tip per person online",
    "group tip calculator online",
    "bar tip calculator online",
    "salon tip calculator online",
    "delivery tip calculator online",
    "valet tip online",
    "hotel tip online",
    "tax and tip calculator online",
    "server tip calculator online",
    "waiter tip online",
    "how to calculate tip online",
    "tip etiquette online",
    "minimum tip guidance online",
    "custom tip percentage online",
    "cash vs card tip online",
    "restaurant bill tip online",
    "service charge vs tip online",
    "tip suggestions online",
    "tip chart online",
    "calculate tip after discount online",
    "calculate tip on subtotal online",
    "tip calculator no ads online",
    "free tip calculator online",
    "mobile tip calculator online",
    "dining calculator online",
    "meal bill calculator online",
    "table split calculator online",
    "friends bill split online",
    "large group tip online",
    "tip sharing online",
    "tip pooling online",
    "pre-tax tip online",
    "post-tax tip online",
    "per-person total online",
    "how much to tip delivery online",
    "how much to tip hairdresser online",
    "how much to tip bartender online",
    "how much to tip valet online",
    "tip rounding rules online",
    "tip calculator app alternative online",
    "tip calculator free",
    "restaurant tip calculator free",
    "gratuity calculator free",
    "tip percentage calculator free",
    "how much to tip free",
    "15% tip calculator free",
    "18% tip calculator free",
    "20% tip calculator free",
    "split bill calculator free",
    "bill splitter with tip free",
    "tip on tax or before tax free",
    "round tip and total free",
    "tip per person free",
    "group tip calculator free",
    "bar tip calculator free",
    "salon tip calculator free",
    "delivery tip calculator free",
    "valet tip free",
    "hotel tip free",
    "tax and tip calculator free",
    "server tip calculator free",
    "waiter tip free",
    "how to calculate tip free",
    "tip etiquette free",
    "minimum tip guidance free",
    "custom tip percentage free",
    "cash vs card tip free",
    "restaurant bill tip free",
    "service charge vs tip free",
    "tip suggestions free",
    "tip chart free",
    "calculate tip after discount free",
    "calculate tip on subtotal free",
    "tip calculator no ads free",
    "free tip calculator free",
    "mobile tip calculator free",
    "dining calculator free",
    "meal bill calculator free",
    "table split calculator free",
    "friends bill split free",
    "large group tip free",
    "tip sharing free",
    "tip pooling free",
    "pre-tax tip free",
    "post-tax tip free",
    "per-person total free",
    "how much to tip delivery free",
    "how much to tip hairdresser free",
    "how much to tip bartender free",
    "how much to tip valet free",
    "tip rounding rules free",
    "tip calculator app alternative free",
    "tip calculator tool",
    "restaurant tip calculator tool",
    "gratuity calculator tool",
    "tip percentage calculator tool",
    "how much to tip tool",
    "15% tip calculator tool",
    "18% tip calculator tool",
    "20% tip calculator tool",
    "split bill calculator tool",
    "bill splitter with tip tool",
    "tip on tax or before tax tool",
    "round tip and total tool",
    "tip per person tool",
    "group tip calculator tool",
    "bar tip calculator tool",
    "salon tip calculator tool",
    "delivery tip calculator tool",
    "valet tip tool",
    "hotel tip tool",
    "tax and tip calculator tool",
    "server tip calculator tool",
    "waiter tip tool",
    "how to calculate tip tool",
    "tip etiquette tool",
    "minimum tip guidance tool",
    "custom tip percentage tool",
    "cash vs card tip tool",
    "restaurant bill tip tool",
    "service charge vs tip tool",
    "tip suggestions tool",
    "tip chart tool",
    "calculate tip after discount tool",
    "calculate tip on subtotal tool",
    "tip calculator no ads tool",
    "free tip calculator tool",
    "mobile tip calculator tool",
    "dining calculator tool",
    "meal bill calculator tool",
    "table split calculator tool",
    "friends bill split tool",
    "large group tip tool",
    "tip sharing tool",
    "tip pooling tool",
    "pre-tax tip tool",
    "post-tax tip tool",
    "per-person total tool",
    "how much to tip delivery tool",
    "how much to tip hairdresser tool",
    "how much to tip bartender tool",
    "how much to tip valet tool",
    "tip rounding rules tool",
    "tip calculator app alternative tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/tip-calculator" },
  openGraph: {
    title: "Free Tip Calculator | Restaurant Gratuity & Bill Split | FastTools",
    description: "Calculate tips and split bills instantly. Customize tip percentages, include tax, round totals, and share with friends. Fast, accurate, mobile friendly.",
    url: "https://fasttools.store/finance-tools/tip-calculator",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Tip Calculator - Restaurant Gratuity & Bill Split",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tip Calculator | Restaurant Gratuity & Bill Split | FastTools",
    description: "Calculate tips and split bills instantly. Customize tip percentages, include tax, round totals, and share with friends. Fast, accurate, mobile friendly.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Tip Calculator",
      alternateName: "Restaurant Tip Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/finance-tools/tip-calculator",
      description:
        "Calculate tips and split bills with customizable percentages, tax options, and rounding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Custom tip %", 
        "Split per person", 
        "Tax include/exclude", 
        "Rounding", 
        "Share totals",
        "Restaurant tips",
        "Bill splitting",
        "Gratuity calculator",
        "Group dining",
        "Mobile friendly"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/finance-tools/tip-calculator",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "tip calculator, free tip calculator, restaurant tip calculator, gratuity calculator, tip percentage calculator, how much to tip",
      about: {
        "@type": "Thing",
        name: "Restaurant and Service Tips",
        description: "Free online tools for calculating tips, gratuities, and splitting bills at restaurants and for services"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
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
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Tip Calculator — Restaurant Gratuity & Bill Split</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Calculate tips instantly, split per person, and round totals for easy checkout.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <TipCalculator />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use the Tip Calculator</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Enter Bill, Tip %, and People</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Type the bill amount, choose a tip percentage (e.g., 18%), and set number of people.</li>
            <li>Optionally include or exclude tax from the tip base.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Review Per‑Person Totals</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>See tip amount, total, and per‑person breakdown instantly.</li>
            <li>Use rounding to simplify cash payments.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tipping Tips and Etiquette</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Common restaurant tips: 15–20% in many regions; verify local norms.</li>
            <li>Consider service quality and group size policies (auto‑gratuity).</li>
            <li>Tip on the pre‑discount subtotal to fairly reflect service effort.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/bill-splitter">Bill Splitter</Link></li>
            <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            <li><Link href="/finance-tools/paypal-fee">PayPal Fee Calculator</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
