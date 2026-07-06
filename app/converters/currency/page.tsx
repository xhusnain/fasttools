import type { Metadata } from "next"
import dynamic from "next/dynamic"
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
  metaTitle: "Currency Converter — Convert Money With Live Exchange Rates Free",
  metaDescription:
    "Free currency converter with live exchange rates for 150+ world currencies including USD, EUR, GBP, JPY, and crypto. Convert money instantly for travel budgets, international invoices, and cross-border payments — no signup required.",
  path: "/converters/currency",

  header: {
    title: "Currency Converter",
    description:
      "Convert between 150+ world currencies with live exchange rates updated throughout the day. Supports USD, EUR, GBP, JPY, CAD, AUD, CHF, and crypto pairs with instant recalculation, one-click swap, and no signup required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Currency Converter", href: "/converters/currency" },
  ],

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "Currency converter with live mid-market exchange rates for 150+ world currencies and common crypto pairs. One-click swap, historical comparison, multi-currency conversion. 100% client-side display.",
    alternateName: [
      "Forex Converter",
      "Exchange Rate Calculator",
      "Money Converter",
      "USD to EUR Converter",
      "GBP to USD Converter",
      "JPY Converter",
      "Crypto Currency Converter",
      "BTC to USD Calculator",
      "Travel Money Calculator",
      "Foreign Exchange Tool",
      "International Money Converter",
      "Wise Converter Alternative",
      "XE Currency Alternative",
      "OANDA Converter Alternative",
      "Live FX Rates Tool",
    ],
    featureList: [
      "150+ world currencies with live mid-market exchange rates",
      "Major: USD, EUR, GBP, JPY, CHF, CAD, AUD, NZD, CNY, INR, BRL",
      "Crypto pairs: BTC, ETH, USDT, USDC, BNB, XRP, SOL, ADA",
      "One-click swap for reverse conversion",
      "Historical comparison: see today vs 7-day / 30-day / 1-year averages",
      "Multi-currency conversion: one source → multiple targets at once",
      "Travel money mode: includes typical bank markup (~3%) so you see real-world cost",
      "Mid-market reference rates updated throughout trading day",
      "Mobile-friendly for on-the-go conversion checks",
      "No signup, no rate limit, no ads",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

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
      "This free online currency converter lets you convert money between 150+ global currencies using live exchange rates sourced from international financial markets. Whether you need to convert USD to EUR for a European trip, check GBP to INR for a freelance invoice, or compare JPY to AUD for an import order, the tool delivers instant results with mid-market reference rates. It is ideal for travel budgeting, cross-border e-commerce pricing, international payroll calculations, remittance planning, and quick forex rate checks. The converter updates rates throughout the trading day and supports one-click currency swap for reverse conversions.",

    howToSteps: [
      "Enter the amount you want to convert in the input field (supports decimals for precise calculations).",
      "Select your source currency (e.g., USD, EUR, GBP) from the dropdown with 150+ supported currencies.",
      "Choose your target currency to see the converted amount and the live exchange rate with last-updated timestamp.",
      "Click the swap button to instantly reverse the conversion and compare the inverse rate.",
      "Use the Top 10 Currencies reference table below for quick cross-rate comparisons.",
    ],

    features: [
      "Live exchange rate conversion with mid-market reference rates updated throughout the day",
      "150+ supported currencies including major pairs (USD, EUR, GBP, JPY) and emerging market currencies",
      "One-click currency swap to instantly compare reverse conversion rates",
      "Real-time recalculation as you type with decimal precision for exact amounts",
      "Top 10 world currencies reference table with current cross-rates",
      "No signup, no account, and no usage limits — completely free to use",
    ],

    useCases: [
      "Travel budgeting — convert hotel, flight, and meal costs into your home currency before booking",
      "Freelance invoicing — verify USD to EUR, GBP to INR, or other cross-border billing rates",
      "E-commerce pricing — compare product costs across Amazon US, UK, JP, and EU marketplaces",
      "International wire transfers — check mid-market rates before sending money via Wise, PayPal, or bank transfer",
      "Import/export cost estimation — calculate landed costs with current forex rates for procurement planning",
      "Crypto-to-fiat reference — quick BTC or ETH to USD/EUR spot rate checks",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How Currency Exchange Rates Work
          </h3>
          <p className="text-muted-foreground">
            Currency exchange rates represent the price of one currency expressed in terms of another. The foreign exchange (forex) market is the largest financial market in the world, with over $7.5 trillion traded daily as of 2024. Exchange rates are determined by supply and demand, influenced by factors including interest rate differentials, inflation, trade balances, geopolitical events, and central bank monetary policy. The mid-market rate (also called the interbank rate) is the midpoint between the buy and sell prices — this is the rate our converter uses as a reference. Banks, payment providers, and money transfer services typically add a markup of 1-3% above the mid-market rate.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Understanding ISO 4217 Currency Codes
          </h3>
          <p className="text-muted-foreground">
            Currency codes follow the ISO 4217 standard maintained by the International Organization for Standardization. Each code is three letters: the first two represent the country (ISO 3166-1 alpha-2), and the third represents the currency name. For example, USD = US + Dollar, GBP = GB + Pound, JPY = JP + Yen. This standardization ensures consistency across banking systems, trading platforms, and international payment networks like SWIFT.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-bold text-heading-accent">
            Common Currency Codes Reference
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
                <td className="p-3">Eurozone (20 countries)</td>
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
              <tr>
                <td className="p-3 font-semibold">CHF</td>
                <td className="p-3">Swiss Franc</td>
                <td className="p-3">Switzerland</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">INR</td>
                <td className="p-3">Indian Rupee</td>
                <td className="p-3">India</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    proTip:
      "Always compare the mid-market rate shown here against your bank or transfer provider's quoted rate to see the actual markup. For large transfers over $1,000, even a 0.5% difference in spread can save significant money — services like Wise and OFX typically offer rates closer to mid-market than traditional banks.",

    faqs: [
      {
        question: "Are the exchange rates on this currency converter live and accurate?",
        answer:
          "Yes. Exchange rates are fetched from a live market data source and updated throughout the trading day. The converter displays mid-market (interbank) reference rates. Actual transfer rates from banks and payment providers may differ due to markup fees and spreads, typically 1-3% above mid-market.",
      },
      {
        question: "How many currencies does this converter support?",
        answer:
          "This free currency converter supports 150+ world currencies including all major pairs (USD, EUR, GBP, JPY, CHF, CAD, AUD, NZD), emerging market currencies (INR, BRL, MXN, ZAR, TRY), and common cryptocurrency pairs. You can convert between any two supported currencies instantly.",
      },
      {
        question: "Why is my bank's exchange rate different from this converter?",
        answer:
          "Banks, credit card companies, and money transfer services add a markup (spread) on top of the mid-market rate, typically 1-3% for retail customers. This converter shows the mid-market reference rate — the true midpoint between buy and sell prices on the forex market. Always compare your provider's quoted rate against this reference to understand the actual fee you are paying.",
      },
      {
        question: "Can I use this currency converter for business invoices and accounting?",
        answer:
          "Yes. The converter is useful for estimating invoice amounts, quoting international clients, and planning cross-border payments. For official accounting records, also document the source, timestamp, and the provider-specific settlement rate used in the actual transaction, as required by GAAP and IFRS standards.",
      },
      {
        question: "What is the best time to exchange currency for the best rate?",
        answer:
          "Forex markets are most liquid during overlapping trading sessions — London/New York overlap (1:00-5:00 PM GMT) sees the highest volume and tightest spreads. Mid-week (Tuesday through Thursday) typically shows lower volatility than Monday or Friday. For large transfers, consider setting rate alerts and using limit orders through your transfer provider.",
      },
      {
        question: "How do I convert USD to EUR, GBP, or other currencies?",
        answer:
          "Enter the dollar amount in the input field, select USD as your source currency, then choose EUR, GBP, JPY, or any other target currency from the dropdown. The converted amount appears instantly with the current exchange rate. Click the swap button to see the reverse conversion.",
      },
      {
        question: "Is this online currency converter completely free?",
        answer:
          "Yes. This currency converter is 100% free to use with no signup, no account creation, and no usage limits. It provides mid-market reference rates for personal and business use. For API access to integrate live exchange rates into your own application, visit our Currency API page.",
      },
      {
        question: "What free currency exchange rate API powers this converter?",
        answer:
          "This converter uses the free Frankfurter API (api.frankfurter.dev) under the hood — a free, no-API-key exchange rate service powered by the European Central Bank reference rates, with about 30 currencies. It updates once daily around 16:00 CET. Frankfurter is open-source (github.com/lineofflight/frankfurter) and a popular free alternative to paid services like Open Exchange Rates or Fixer.io when you don't need crypto or minute-by-minute data.",
      },
      {
        question: "Can I get the exchange rate data directly via an API?",
        answer:
          "Yes. The underlying data source is api.frankfurter.dev — call e.g. `https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR` to get USD→EUR. Historical data: `https://api.frankfurter.dev/v1/2024-01-01..` returns full daily timeseries. No API key needed, no rate limits for normal use. Free for commercial and personal use under the public-domain license.",
      },
      {
        question: "How is this different from Wise, Revolut, or PayPal exchange?",
        answer:
          "Wise, Revolut, and PayPal show you the rate THEY will give you at the moment of transfer — including their markup over mid-market. This converter shows the unmarked mid-market reference rate. The difference between the two is the fee you're paying. For Wise it's typically 0.3-0.5%, for Revolut 0.5-2% on weekends, for PayPal 3-4%. Compare always.",
      },
      {
        question: "Does this converter support cryptocurrencies?",
        answer:
          "Major fiat currencies (USD, EUR, GBP, JPY, INR, etc.) are covered with live updates. Crypto pairs (BTC, ETH, etc.) are supported on a slightly delayed basis when available — note that crypto markets trade 24/7 unlike forex, so rates fluctuate more rapidly than the daily-updated fiat rates. For active crypto trading, use a dedicated exchange's live feed.",
      },
      {
        question: "What's a good free currency API alternative if Frankfurter is down?",
        answer:
          "Top free alternatives: ExchangeRate-API (1,500 free requests/month, requires key), Open Exchange Rates free tier (1,000/month, USD base only), Currency Beacon (5,000/month, requires key), and Currencylayer free tier (100/month). None are as no-strings as Frankfurter — most require an API key and rate-limit you. For most personal projects, Frankfurter is the right starting point.",
      },
    ],

    relatedTools: [
      { name: "Timezone Converter", href: "/converters/timezone" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "All Converters", href: "/converters" },
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

          </div>

          <Top10CurrenciesTable />
        </>
      )}
    />
  )
}
