import { TipCalculator } from "@/components/tip-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tip Calculator — Restaurant Gratuity & Bill Split | SmartToolboxes",
  description:
    "Calculate tips and split bills instantly. Customize tip percentages, include tax, round totals, and share with friends. Fast, accurate, mobile friendly.",
  keywords: [
    "tip calculator",
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
    "tip calculator app alternative"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/finance-tools/tip-calculator" },
  openGraph: {
    title: "Tip Calculator — Restaurant Gratuity & Split Bills",
    description:
      "Instantly calculate tips and split restaurant bills with per‑person totals and rounding.",
    url: "https://www.smarttoolboxes.com/finance-tools/tip-calculator",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Tip Calculator", description: "Fast tip and bill split calculator." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Tip Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/finance-tools/tip-calculator",
      description:
        "Calculate tips and split bills with customizable percentages, tax options, and rounding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Custom tip %", "Split per person", "Tax include/exclude", "Rounding", "Share totals"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
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
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Tip Calculator — Restaurant Gratuity & Bill Split</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Calculate tips instantly, split per person, and round totals for easy checkout.</p>
        </div>

        <AdSpace slot="content" className="mb-6 h-24" />

        <TipCalculator />

        <AdSpace slot="content" className="mt-6 h-24" />

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
