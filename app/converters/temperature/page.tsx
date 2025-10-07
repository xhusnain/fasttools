import { TemperatureConverter } from "@/components/temperature-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Temperature Converter — Celsius (°C) ⇄ Fahrenheit (°F) | SmartToolboxes",
  description:
    "Convert temperatures instantly between Celsius and Fahrenheit. Ideal for weather, cooking, science projects, and travel.",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "C to F",
    "F to C",
    "convert 100 c to f",
    "convert 32 f to c",
    "weather temperature converter",
    "cooking temperature converter",
    "oven temperature c to f",
    "baking temperature c to f",
    "body temperature c to f",
    "scientific temperature",
    "temperature scale conversion",
    "kelvin to celsius",
    "kelvin to fahrenheit",
    "celsius to kelvin",
    "fahrenheit to kelvin",
    "convert degree symbols",
    "temperature chart",
    "free temperature converter",
    "what is 180 c in f",
    "what is 350 f in c",
    "room temperature c to f",
    "fever temperature c to f",
    "water boiling point c to f",
    "water freezing point f to c",
    "grill temperature c to f",
    "air fryer temperature conversion",
    "sous vide temperature fahrenheit celsius",
    "thermometer conversion c f",
    "temperature table c f",
    "convert negative temperatures",
    "absolute zero in c and f",
    "formula c to f and f to c",
    "quick temperature converter",
    "instant c to f conversion",
    "instant f to c conversion",
    "convert 180c to f for baking",
    "convert 375f to c",
    "convert 400f to c",
    "convert 200c to f",
    "convert 425f to c",
    "convert 160c to f",
    "convert 450f to c",
    "convert 0c to f",
    "convert -40c to f",
    "convert 212f to c",
    "convert 98.6f to c",
    "convert 37c to f",
    "kitchen temperature guide",
    "weather temperature scale",
    "science temperature units",
    "unit converter temperature"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/temperature" },
  openGraph: {
    title: "Temperature Converter — °C ⇄ °F",
    description: "Instant Celsius to Fahrenheit conversions for weather, cooking and science.",
    url: "https://www.fasttools.store/converters/temperature",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Temperature Converter", description: "Convert °C and °F instantly." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Temperature Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/converters/temperature",
      description:
        "Convert temperatures between Celsius and Fahrenheit for weather, cooking and science.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Celsius ⇄ Fahrenheit", "Copy results", "Mobile friendly"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Temperature Converter — Celsius (°C) ⇄ Fahrenheit (°F)</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Instantly convert temperatures for weather, cooking and science.</p>
          </div>

          <TemperatureConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Convert Temperatures</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Enter a Value in °C or °F</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Type a temperature in Celsius or Fahrenheit and the other updates automatically.</li>
              <li>Copy results or round to common cooking increments.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Understand the Formula</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>°F = (°C × 9/5) + 32</li>
              <li>°C = (°F − 32) × 5/9</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips and Use Cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Cooking: Convert oven temperatures in recipes from °C to °F and vice‑versa.</li>
              <li>Weather: Read forecasts from international sources.</li>
              <li>Science & Education: Practice conversions with exact formulas.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/converters/length">Length Converter</Link></li>
              <li><Link href="/converters/file-size">File Size Converter</Link></li>
              <li><Link href="/converters/timezone">Timezone Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
