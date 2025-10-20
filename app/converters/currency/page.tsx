import { CurrencyConverter } from "@/components/currency-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Currency Converter | Real-Time Exchange Rates | FastTools",
  description:
    "Convert currencies instantly with our free Currency Converter. Get live exchange rates, convert multiple currencies, compare rates, and export results. Fast, accurate, and mobile-friendly.",
  keywords: [
    "currency converter",
    "free currency converter",
    "live currency converter",
    "real-time exchange rates",
    "online currency calculator",
    "currency exchange calculator",
    "forex converter",
    "exchange rate calculator",
    "money converter",
    "currency rate converter",
    "forex rate converter",
    "currency exchange rate",
    "live currency rates",
    "currency conversion tool",
    "exchange rate tool",
    "currency calculator online",
    "currency converter website",
    "best exchange rate",
    "currency conversion rate",
    "exchange rate converter",
    
    // Secondary Keywords (20)
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
    "currency rate today",
    "live forex rates",
    "exchange rate today",
    "best currency converter",
    "multi-currency converter",
    "historical exchange rates",
    "currency conversion chart",
    "currency pair converter",
    "currency converter with fees",
    
    // Long-tail Keywords (20)
    "free online currency converter",
    "best currency converter online",
    "currency converter with live rates",
    "free currency converter tool online",
    "online currency converter free",
    "currency converter online free",
    "exchange rate calculator free",
    "currency rate calculator free",
    "money converter free",
    "currency exchange calculator free",
    "forex converter free",
    "currency rate converter free",
    "exchange rate converter free",
    "currency converter for travel",
    "international money converter",
    "currency converter for eCommerce",
    "currency converter for freelancers",
    "convert currency by date",
    "currency conversion for booking",
    "currency converter no login",
    
    // Additional SEO Keywords
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
    "cross-currency conversion",
    "currency converter app",
    "money exchange calculator",
    "currency converter free",
    "online currency exchange",
    "currency conversion calculator",
    "exchange rate calculator online",
    "currency converter tool",
    "exchange rate tool online",
    "currency rate tool",
    "money converter online",
    "currency exchange tool",
    "forex converter online",
    "currency rate converter online",
    "exchange rate converter online",
    "currency converter online free",
    "exchange rate calculator free",
    "currency rate calculator free",
    "money converter free",
    "currency exchange calculator free",
    "forex converter free",
    "currency rate converter free",
    "exchange rate converter free"
  ],
  alternates: {
    canonical: "https://www.fasttools.store/converters/currency",
  },
  openGraph: {
    title: "Currency Converter | Real-Time Exchange Rates | FastTools",
    description:
      "Convert currencies instantly with our free Currency Converter. Get live exchange rates, convert multiple currencies, compare rates, and export results. Fast, accurate, and mobile-friendly.",
    url: "https://www.fasttools.store/converters/currency",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Currency Converter - Real-Time Exchange Rates",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter | Real-Time Exchange Rates | FastTools",
    description:
      "Convert currencies instantly with our free Currency Converter. Get live exchange rates, convert multiple currencies, compare rates, and export results.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Currency Converter",
      alternateName: "Live Currency Converter & Exchange Rate Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/currency",
      description:
        "Convert currencies instantly with accurate, real-time exchange rates. Compare conversions, understand fees, and export results.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Real-time exchange rates",
        "Multi-currency conversions",
        "Historical rate lookup",
        "Fee estimation",
        "Copy and export results",
        "Mobile-friendly interface",
        "No registration required",
        "Instant calculations",
        "Multiple currency support",
        "Export functionality"
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
        },
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/converters/currency",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "currency converter, free currency converter, live currency converter, real-time exchange rates, online currency calculator, forex converter, exchange rate calculator, money converter",
      about: {
        "@type": "Thing",
        name: "Currency Conversion",
        description: "Free online tools for converting currencies with real-time exchange rates"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Currency Converter — Real-Time Exchange Rates</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert any currency instantly using accurate, real-time exchange rates. Ideal for travel, shopping, and international invoices.
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CurrencyConverter />

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Understanding Exchange Rates</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Exchange rates represent the value of one currency relative to another. These rates fluctuate constantly based on various economic factors:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Economic Indicators:</strong> GDP growth, inflation rates, employment data</li>
                  <li><strong>Interest Rates:</strong> Central bank policies and interest rate changes</li>
                  <li><strong>Political Stability:</strong> Government policies and political events</li>
                  <li><strong>Market Sentiment:</strong> Investor confidence and risk appetite</li>
                  <li><strong>Trade Balances:</strong> Import/export relationships between countries</li>
                  <li><strong>Speculation:</strong> Currency trading and market expectations</li>
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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Currency Conversion Best Practices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To get the most accurate and cost-effective currency conversions, follow these proven strategies:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Use the mid‑market rate as a baseline and factor in provider fees</li>
                  <li>Timing matters: FX rates fluctuate; small timing differences affect large transfers</li>
                  <li>Weekends/holidays can widen spreads; some providers pause updates</li>
                  <li>Understand fees: banks/cards/transfer apps add spreads or flat fees</li>
                  <li>Respect currency rounding and decimal precision (e.g., JPY = 0 decimals)</li>
                  <li>Compare multiple providers for the best rates</li>
                  <li>Consider using specialist currency services for large amounts</li>
                  <li>Monitor rate trends before making large conversions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Use Cases</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Travel planning and daily budgeting across countries</li>
                  <li>International shopping and price comparison in local currency</li>
                  <li>Freelance invoicing and payouts in client currency</li>
                  <li>Accounting, reporting, and audits with standardized rates</li>
                  <li>Education and research on foreign exchange markets</li>
                  <li>Investment analysis and portfolio management</li>
                  <li>Business expense tracking and reimbursement</li>
                  <li>E-commerce pricing and international sales</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Currency Symbols and Codes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding currency symbols and ISO codes helps you identify and work with different currencies:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>USD ($):</strong> US Dollar - Most traded currency globally</li>
                  <li><strong>EUR (€):</strong> Euro - European Union currency</li>
                  <li><strong>GBP (£):</strong> British Pound Sterling - UK currency</li>
                  <li><strong>JPY (¥):</strong> Japanese Yen - Major Asian currency</li>
                  <li><strong>CAD (C$):</strong> Canadian Dollar - North American currency</li>
                  <li><strong>AUD (A$):</strong> Australian Dollar - Pacific currency</li>
                  <li><strong>CHF (CHF):</strong> Swiss Franc - Safe haven currency</li>
                  <li><strong>CNY (¥):</strong> Chinese Yuan - Emerging market currency</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How accurate are the exchange rates?</h3>
                    <p className="text-muted-foreground">Rates reflect reputable market sources and update frequently. They represent the mid‑market rate; actual transactions may include provider margins.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Do you add fees?</h3>
                    <p className="text-muted-foreground">Results default to live mid‑market rates. Enable fee estimation (if available) to approximate provider spreads.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How often are rates updated?</h3>
                    <p className="text-muted-foreground">Typically every few minutes during active market hours. Historical rates are shown for selected dates if supported.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I export results?</h3>
                    <p className="text-muted-foreground">You can copy results and, if enabled, download CSV for record‑keeping or invoicing.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between buy and sell rates?</h3>
                    <p className="text-muted-foreground">Buy rates are what you pay to purchase foreign currency, while sell rates are what you receive when selling. The difference is the spread.                </p>
              </div>

            </div>

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
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <AdSpace slot="sidebar" className="h-96 border border-border/60 rounded-xl shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}