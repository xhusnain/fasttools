import { CurrencyConverter } from "@/components/currency-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Currency Converter - USD, EUR, GBP, INR & More | FastTools",
  description:
    "Free online currency converter. Convert between major world currencies including USD, EUR, GBP, JPY, INR, and more.",
  keywords: "currency converter, exchange rate, USD to EUR, money converter, forex converter, currency exchange",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Currency Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert between major world currencies with our free currency converter tool.
            </p>
          </div>

          <CurrencyConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Currency Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our currency converter helps you convert between major world currencies. Perfect for travel planning,
              international shopping, and financial calculations. Note: This demo uses sample exchange rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
