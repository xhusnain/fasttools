import { CurrencyConverter } from "@/components/converters/currency-converter"
import { Top10CurrenciesTable } from "@/components/finance/top10-currencies-table"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import Link from "next/link"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Currency Converter",
  description: "Convert currencies instantly with live exchange rates. Free currency converter with multiple currencies. Fast, accurate, mobile-friendly.",
  metaTitle: "Currency Converter - Convert Currency Online (Free) 2026",
  metaDescription: "Free online Currency Converter. Convert currency rates instantly. Fast, accurate, and no signup required.",
  path: "/converters/currency",

  header: {
    title: "FastTools Currency Converter - Real-Time Exchange Rates",
    description: "Convert any currency instantly with FastTools.store's accurate, real-time exchange rates. Perfect for travel planning, international shopping, business invoicing, and investment tracking. Free, fast, and reliable.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Currency Converter", href: "/converters/currency" },
  ],

  content: {
    overview: "Our free currency converter and online currency calculator provide real-time exchange rates for accurate currency conversion across 100+ currencies worldwide. Whether you need to convert USD to EUR for European travel, convert GBP to USD for international business, or convert AED to PKR for remittances, this live currency converter delivers instant results with current exchange rate today data. As a comprehensive money converter and forex converter, our tool serves as both an exchange rate calculator and a currency rate converter, helping you understand currency exchange rates and live forex rates before making financial decisions. The multi-currency converter supports popular pairs like USD to INR, CAD to USD, AUD to USD, JPY to USD, and CNY to USD, making it the best currency converter online for travelers, freelancers, and businesses. Our currency conversion calculator provides mid-market rate explanations, helping you understand the difference between bank vs market exchange rates, which is crucial when using currency converter with fees for actual transactions. For developers and businesses, we offer a free currency converter API and live currency converter API that provides real-time exchange rates API access, making it easy to integrate currency conversion API functionality into applications. The currency exchange API supports historical exchange rates lookup, allowing you to convert currency by date for accounting and financial reporting. Whether you're using this as a currency converter for travel, currency converter for eCommerce, or currency converter for freelancers creating invoices, our accurate currency converter ensures you get the best exchange rate estimates. The mobile currency converter works offline with cached rates, and our currency converter no login requirement means instant access without registration. Understanding currency symbols and codes, including the complete ISO currency codes list, helps you identify currencies correctly, while our currency rounding rules ensure proper formatting for different currencies. For those working with digital assets, the tool can help estimate conversions for cryptocurrency to fiat transactions, though actual crypto to USD converter or crypto to EUR converter rates may vary. The travel budget currency calculator feature helps plan international trips, while cross-currency conversion capabilities support complex multi-currency scenarios. As a comprehensive currency converter tool and exchange rate tool online, our platform serves as both a money exchange calculator and a forex converter online, providing everything from basic currency rate converter functionality to advanced features like currency pair converter analysis and currency conversion chart visualization.",

    howToSteps: [
      "Choose Currencies and Amount: Select your From currency (e.g., USD) and To currency (e.g., EUR). Enter an amount (e.g., 150.00). Optionally pick a date to reference historical rates if supported.",
      "View Live Rates and Results: The tool fetches the latest market rate and calculates your converted amount. See secondary conversions to popular currencies for context. Copy, share, or export the result if available.",
      "Compare and Fine‑Tune: Toggle fee estimation to understand bank/processor spreads. Review historical trends to choose a favorable conversion time. Round results based on currency-specific minor units (e.g., 2 decimals for USD/EUR, 0 for JPY)."
    ],

    features: [
      "Real-time exchange rates",
      "Instant currency conversion",
      "100+ supported currencies",
      "Mobile-friendly interface",
      "Historical rate tracking",
      "Top 10 currencies table",
      "Free to use forever",
      "No registration required"
    ],

    useCases: [
      "Travel Planning: Convert home currency to destination currency for budgeting.",
      "International Business: Calculate invoice amounts and payments in different currencies.",
      "Online Shopping: Check prices in your local currency when buying from international stores.",
      "Investment Tracking: Monitor value of foreign assets and investments.",
      "Remittances: Calculate how much money your family will receive."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Global Currency Reference</h3>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Symbol</th>
                <th className="p-3">Currency Name</th>
                <th className="p-3">Trader Nickname</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">USD</td>
                <td className="p-3">$</td>
                <td className="p-3">United States Dollar</td>
                <td className="p-3">"Greenback"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">EUR</td>
                <td className="p-3">€</td>
                <td className="p-3">Euro</td>
                <td className="p-3">"Fiber"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">GBP</td>
                <td className="p-3">£</td>
                <td className="p-3">British Pound Sterling</td>
                <td className="p-3">"Cable"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">JPY</td>
                <td className="p-3">¥</td>
                <td className="p-3">Japanese Yen</td>
                <td className="p-3">"Yen"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">CAD</td>
                <td className="p-3">C$</td>
                <td className="p-3">Canadian Dollar</td>
                <td className="p-3">"Loonie"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AUD</td>
                <td className="p-3">A$</td>
                <td className="p-3">Australian Dollar</td>
                <td className="p-3">"Aussie"</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">CHF</td>
                <td className="p-3">Fr.</td>
                <td className="p-3">Swiss Franc</td>
                <td className="p-3">"Swissy"</td>
              </tr>
            </tbody>
          </GTable>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Why Exchange Rates Fluctuate</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
            <li className="p-3 bg-muted/40 rounded border border-border/50">
              <h4 className="font-semibold text-sm mb-1">Interest Rates</h4>
              <p className="text-xs text-muted-foreground">Higher interest rates offer lenders in an economy a higher return relative to other countries, attracting foreign capital and causing the exchange rate to rise.</p>
            </li>
            <li className="p-3 bg-muted/40 rounded border border-border/50">
              <h4 className="font-semibold text-sm mb-1">Inflation</h4>
              <p className="text-xs text-muted-foreground">Typically, a country with a consistently lower inflation rate exhibits a rising currency value, as its purchasing power increases relative to other currencies.</p>
            </li>
            <li className="p-3 bg-muted/40 rounded border border-border/50">
              <h4 className="font-semibold text-sm mb-1">Economic Performance</h4>
              <p className="text-xs text-muted-foreground">Strong economic performance attracts foreign investors, increasing demand for the country's currency and driving up the exchange rate.</p>
            </li>
            <li className="p-3 bg-muted/40 rounded border border-border/50">
              <h4 className="font-semibold text-sm mb-1">Geopolitical Stability</h4>
              <p className="text-xs text-muted-foreground">Political turmoil causes a loss of confidence in a currency and a movement of capital to the currencies of more stable countries.</p>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: The "Real" Exchange Rate
          </h4>
          <p className="italic text-blue-700 dark:text-blue-300">
            "Be wary of '0% Commission' claims. Banks and kiosks often markup the exchange rate by 2-5% over the 'Mid-Market Rate' (the rate you see on Google or Reuters). This markup is a hidden fee. Consistently comparing the offered rate to the real-time mid-market rate can save you significant amounts on transfers."
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Finance Team</p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How accurate are FastTools currency exchange rates?",
        answer: "FastTools.store provides highly accurate, real-time exchange rates that are updated throughout the day to reflect current market conditions. The rates shown represent mid-market rates (the average between buy and sell rates). When you actually exchange currency through banks or exchange services, you'll typically pay slightly different rates due to service fees and spread margins."
      },
      {
        question: "How often does FastTools update exchange rates?",
        answer: "FastTools.store updates exchange rates in real-time during market hours to ensure you always have the most current information. Major currencies like USD, EUR, GBP, and JPY update more frequently. During weekends or holidays, rates may update less frequently or use last known rates."
      },
      {
        question: "What's the difference between buy and sell rates?",
        answer: "The Buy Rate is the rate at which you can buy foreign currency (usually higher), while the Sell Rate is the rate at which you can sell it (usually lower). The Mid-Market Rate shown in our converter is the average between these two. Banks make profit from the 'spread' or difference between these rates."
      },
      {
        question: "How do I get the best exchange rates?",
        answer: "To get the best rates, compare multiple providers (banks, online services, currency exchanges), check total costs including fees, and avoid airport exchange kiosks which often have the worst rates. Services like Wise or Revolut often offer competitive rates compared to traditional banks."
      },
      {
        question: "What factors affect exchange rates?",
        answer: "Exchange rates are influenced by interest rates, inflation, economic growth, political stability, trade balance, and central bank policies. Market sentiment and geopolitical events also play significant roles in currency value fluctuations."
      },
      {
        question: "How do I use currency conversion for travel?",
        answer: "Use the converter to plan your budget, compare hotel and flight prices in different currencies, and understand daily expenses like food and transport. It's also helpful to check rates before exchanging cash to ensure you're getting a fair deal."
      },
      {
        question: "How do I handle currency conversion for business?",
        answer: "For business, use the converter to calculate invoice amounts, record transactions in your base currency for accounting, and estimate costs for international suppliers. Consistent documentation of exchange rates used is important for tax reporting."
      },
      {
        question: "What are the best practices for currency conversion?",
        answer: "Research rates beforehand, understand all fees involved, avoid last-minute conversions, and keep records of your transactions. Converting larger amounts at once can sometimes reduce percentage-based fees."
      }
    ],

    relatedTools: [
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function CurrencyConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <>
          <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
            <CurrencyConverter />

            {/* API Button */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Need API Access?</h4>
                  <p className="text-xs text-muted-foreground">Integrate currency conversion into your app</p>
                </div>
                <Link
                  href="/converters/currency-api"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-foreground rounded-md hover:bg-primary transition-colors text-sm font-medium"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Get Free API
                </Link>
              </div>
            </div>
          </div>

          {/* Top 10 Currencies Table */}
          <Top10CurrenciesTable />
        </>
      )}
    />
  )
}