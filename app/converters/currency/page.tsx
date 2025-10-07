import { CurrencyConverter } from "@/components/currency-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Currency Converter — Real-Time Exchange Rates & Fast Online Conversion | SmartToolboxes",
  description:
    "Convert currencies instantly with our free Currency Converter. Get live exchange rates, convert multiple currencies, compare rates, and export results. Fast, accurate, and mobile-friendly.",
  keywords: [
    "currency converter",
    "live currency converter",
    "real-time exchange rates",
    "convert USD to EUR",
    "convert EUR to USD",
    "convert GBP to USD",
    "convert USD to INR",
    "convert CAD to USD",
    "convert AUD to USD",
    "convert JPY to USD",
    "convert CNY to USD",
    "convert AED to PKR",
    "convert SAR to PKR",
    "convert USD to PKR",
    "online currency calculator",
    "currency exchange calculator",
    "forex converter",
    "currency rate today",
    "live forex rates",
    "exchange rate today",
    "best currency converter",
    "multi-currency converter",
    "historical exchange rates",
    "currency conversion chart",
    "currency pair converter",
    "currency converter with fees",
    "currency conversion for travel",
    "international money converter",
    "currency converter for eCommerce",
    "currency converter for freelancers",
    "convert currency by date",
    "currency conversion widget",
    "currency conversion API",
    "real-time currency rates API",
    "currency exchange comparison",
    "currency spread calculator",
    "currency conversion for booking",
    "currency converter no login",
    "free currency converter",
    "accurate currency converter",
    "mobile currency converter",
    "currency converter offline tips",
    "currency converter for invoices",
    "currency rounding rules",
    "currency symbols and codes",
    "ISO currency codes list",
    "foreign exchange rates",
    "bank vs market exchange rates",
    "mid-market rate explanation",
    "currency conversion examples",
    "convert cryptocurrency to fiat",
    "crypto to USD converter",
    "crypto to EUR converter",
    "travel budget currency calculator",
    "cross-currency conversion"
  ],
  alternates: {
    canonical: "https://www.smarttoolboxes.com/converters/currency",
  },
  openGraph: {
    title: "Currency Converter — Real-Time Exchange Rates",
    description:
      "Free online currency converter with live exchange rates, fee awareness, and export options.",
    url: "https://www.smarttoolboxes.com/converters/currency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter — Real-Time Exchange Rates",
    description:
      "Instant conversions with live rates, fee insight, and export options.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Currency Converter",
      alternateName: "Live Currency Converter & Exchange Rate Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/converters/currency",
      description:
        "Convert currencies instantly with accurate, real-time exchange rates. Compare conversions, understand fees, and export results.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Real-time exchange rates",
        "Multi-currency conversions",
        "Historical rate lookup",
        "Fee estimation",
        "Copy and export results",
      ],
      publisher: {
        "@type": "Organization",
        name: "SmartToolboxes",
        url: "https://www.smarttoolboxes.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.smarttoolboxes.com/favicon.ico",
        },
      },
    }),
  },
}

export default function CurrencyConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Currency Converter", href: "/converters/currency" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Currency Converter — Real-Time Exchange Rates</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert any currency instantly using accurate, real-time exchange rates. Ideal for travel, shopping, and international invoices.
            </p>
          </div>

          <CurrencyConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use the Currency Converter</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Choose Currencies and Amount</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Select your From currency (e.g., USD) and To currency (e.g., EUR).</li>
              <li>Enter an amount (e.g., 150.00).</li>
              <li>Optionally pick a date to reference historical rates if supported.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) View Live Rates and Results</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>The tool fetches the latest market rate and calculates your converted amount.</li>
              <li>See secondary conversions to popular currencies for context.</li>
              <li>Copy, share, or export the result if available on your UI.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">3) Compare and Fine‑Tune</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Toggle fee estimation to understand bank/processor spreads.</li>
              <li>Review historical trends to choose a favorable conversion time.</li>
              <li>Round results based on currency-specific minor units (e.g., 2 decimals for USD/EUR, 0 for JPY).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Why Use Our Currency Converter?</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Fast, Accurate, and Free</h3>
            <p className="text-muted-foreground leading-relaxed">Convert currencies in under a second using reliable, up-to-date rates.</p>
            <h3 className="text-xl font-semibold mt-4 mb-2 text-foreground">Built for Travelers, Shoppers, and Professionals</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Travelers: Estimate daily budgets, hotel costs, and ATM withdrawals.</li>
              <li>Online Shoppers: Compare international prices and shipping fees.</li>
              <li>Freelancers & Businesses: Price quotes, invoices, and payouts in foreign currencies.</li>
              <li>Investors & Researchers: Track relative value changes and historical movements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Popular Conversion Pairs</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <li>USD ⇄ EUR</li>
              <li>USD ⇄ GBP</li>
              <li>USD ⇄ CAD</li>
              <li>USD ⇄ AUD</li>
              <li>USD ⇄ JPY</li>
              <li>EUR ⇄ GBP</li>
              <li>EUR ⇄ CHF</li>
              <li>USD ⇄ INR</li>
              <li>USD ⇄ CNY</li>
              <li>USD ⇄ AED / SAR / PKR</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Accurate Currency Conversion</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Use the mid‑market rate as a baseline and factor in provider fees.</li>
              <li>Timing matters: FX rates fluctuate; small timing differences affect large transfers.</li>
              <li>Weekends/holidays can widen spreads; some providers pause updates.</li>
              <li>Understand fees: banks/cards/transfer apps add spreads or flat fees.</li>
              <li>Respect currency rounding and decimal precision (e.g., JPY = 0 decimals).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Use Cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Travel planning and daily budgeting across countries.</li>
              <li>International shopping and price comparison in local currency.</li>
              <li>Freelance invoicing and payouts in client currency.</li>
              <li>Accounting, reporting, and audits with standardized rates.</li>
              <li>Education and research on foreign exchange markets.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
            <h3 className="text-xl font-semibold mb-1 text-foreground">How accurate are the exchange rates?</h3>
            <p className="text-muted-foreground">Rates reflect reputable market sources and update frequently. They represent the mid‑market rate; actual transactions may include provider margins.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1 text-foreground">Do you add fees?</h3>
            <p className="text-muted-foreground">Results default to live mid‑market rates. Enable fee estimation (if available) to approximate provider spreads.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1 text-foreground">How often are rates updated?</h3>
            <p className="text-muted-foreground">Typically every few minutes during active market hours. Historical rates are shown for selected dates if supported.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1 text-foreground">Can I export results?</h3>
            <p className="text-muted-foreground">You can copy results and, if enabled, download CSV for record‑keeping or invoicing.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/converters/file-size">File Size Converter</Link></li>
              <li><Link href="/converters/length">Length Converter</Link></li>
              <li><Link href="/converters/temperature">Temperature Converter</Link></li>
              <li><Link href="/converters/timezone">Timezone Converter</Link></li>
              <li><Link href="/finance-tools/tip-calculator">Tip Calculator</Link></li>
              <li><Link href="/finance-tools/bill-splitter">Bill Splitter</Link></li>
              <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
              <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
              <li><Link href="/image-tools/pdf-tools">PDF Tools</Link></li>
              <li><Link href="/image-tools/pdf-unlocker">PDF Unlocker</Link></li>
              <li><Link href="/image-tools/screenshot-to-text">Screenshot to Text</Link></li>
              <li><Link href="/seo-tools/meta-tags">Meta Tag Generator</Link></li>
              <li><Link href="/seo-tools/keyword-density">Keyword Density Checker</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
