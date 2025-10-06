import { TemperatureConverter } from "@/components/temperature-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Temperature Converter - Celsius to Fahrenheit | FastTools",
  description:
    "Free online temperature converter. Convert between Celsius and Fahrenheit instantly. Perfect for weather, cooking, and science.",
  keywords:
    "temperature converter, celsius to fahrenheit, fahrenheit to celsius, temperature conversion, C to F, F to C",
}

export default function TemperatureConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Temperature Converter", href: "/converters/temperature" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Temperature Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert between Celsius and Fahrenheit temperature scales quickly and accurately.
            </p>
          </div>

          <TemperatureConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Temperature Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our temperature converter helps you convert between Celsius and Fahrenheit scales. Perfect for weather
              forecasts, cooking recipes, scientific calculations, and international travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
