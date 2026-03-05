import type { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const CurrencyConverter = dynamic(
  () =>
    import("@/components/converters/currency-converter").then(
      (mod) => mod.CurrencyConverter
    ),
  { loading: () => <ToolLoader /> }
)

const Top10CurrenciesTable = dynamic(
  () =>
    import("@/components/finance/top10-currencies-table").then(
      (mod) => mod.Top10CurrenciesTable
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Currency Converter",
  description:
    "Convert currencies with live exchange-rate data for travel, pricing, and payment planning.",
  metaTitle: "Currency Converter (Live Rates) - Free Online Tool",
  metaDescription:
    "Convert between global currencies with live exchange rates. Free online currency converter for travel, business, and budgeting.",
  path: "/converters/currency",
  keywords: [
    "currency converter",
    "live exchange rates",
    "usd to eur converter",
    "money converter",
    "forex converter",
    "free currency converter",
  ],

  header: {
    title: "Currency Converter",
    description:
      "Convert between major world currencies with live rate lookup and instant result updates.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Currency Converter", href: "/converters/currency" },
  ],

  content: {
    definition:
      "A Currency Converter is a free tool that calculates how much one currency is worth in another using live exchange rates from global financial markets.",
    quickAnswer:
      "Enter an amount, select your source and target currencies, and get an instant conversion using live exchange rates. Supports 150+ currencies including USD, EUR, GBP, JPY, and crypto pairs. No signup required.",
    keyTakeaways: [
      "Live exchange rates updated throughout the day from market data",
      "Supports 150+ world currencies and common crypto pairs",
      "Bank rates differ from market rates due to fees and spreads (typically 1-3% markup)",
      "Best time to exchange: mid-week (Tuesday-Thursday) when volatility is lower",
      "Always compare rates across multiple providers before large transfers",
    ],
    overview:
      "Use this tool to convert one currency to another in seconds. It is useful for travel budgets, invoices, international purchases, and quick exchange-rate checks during planning.",

    howToSteps: [
      "Enter an amount in the input field.",
      "Select source and target currencies.",
      "Review the converted amount and latest update time.",
      "Swap currencies to compare the reverse rate.",
    ],

    features: [
      "Live currency conversion",
      "Large supported currency list",
      "One-click currency swap",
      "Instant recalculation after input changes",
      "Top currency reference table",
      "No signup required",
    ],

    useCases: [
      "Travel budgeting and trip cost estimates",
      "Freelance and client invoice checks",
      "E-commerce price comparisons",
      "International payment planning",
      "Quick exchange-rate comparisons before transfers",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-lg font-bold text-heading-accent">
            Common Currency Codes
          </h3>
          <GTable>
            <thead className="bg-muted font-semibold text-foreground">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Currency</th>
                <th className="p-3">Region</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">USD</td>
                <td className="p-3">US Dollar</td>
                <td className="p-3">United States</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">EUR</td>
                <td className="p-3">Euro</td>
                <td className="p-3">Eurozone</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">GBP</td>
                <td className="p-3">Pound Sterling</td>
                <td className="p-3">United Kingdom</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">JPY</td>
                <td className="p-3">Japanese Yen</td>
                <td className="p-3">Japan</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">CAD</td>
                <td className="p-3">Canadian Dollar</td>
                <td className="p-3">Canada</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">AUD</td>
                <td className="p-3">Australian Dollar</td>
                <td className="p-3">Australia</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Are the rates on this converter live?",
        answer:
          "Rates are fetched from a live exchange-rate source and updated during use. Final transfer rates can differ by provider fees or spreads.",
      },
      {
        question: "Can I use this for business invoices?",
        answer:
          "Yes. It is useful for planning and quoting. For accounting records, also log the source, timestamp, and provider-specific settlement rate.",
      },
      {
        question: "Why is my bank rate different from this tool?",
        answer:
          "Banks and payment apps add margins and service fees. This tool gives a market reference conversion, not a guaranteed settlement quote.",
      },
      {
        question: "Does this tool support many currencies?",
        answer:
          "Yes. The converter supports a broad set of global currencies and lets you switch pairs instantly.",
      },
      {
        question: "Is the currency converter free?",
        answer:
          "Yes. The converter is free to use and does not require signup.",
      },
    ],

    relatedTools: [
      { name: "Currency API", href: "/converters/currency-api" },
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Finance Tools", href: "/finance-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CurrencyConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <>
          <div className="rounded-lg border border-border bg-card p-4 shadow sm:p-5">
            <CurrencyConverter />

            <div className="mt-4 border-t border-border pt-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-foreground">
                    Need API Access?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Use our currency API page for developer integration docs.
                  </p>
                </div>
                <Link
                  href="/converters/currency-api"
                  className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-foreground hover:bg-primary"
                >
                  Get API Docs
                </Link>
              </div>
            </div>
          </div>

          <Top10CurrenciesTable />
        </>
      )}
    />
  )
}
