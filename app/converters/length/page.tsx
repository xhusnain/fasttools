import { LengthConverter } from "@/components/length-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Length Converter — Meters, Feet, Inches, CM, KM & Miles | SmartToolboxes",
  description:
    "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles. Accurate metric and imperial conversion.",
  keywords: [
    "length converter",
    "meter to feet",
    "feet to meter",
    "cm to inches",
    "inches to cm",
    "mm to inches",
    "inches to mm",
    "km to miles",
    "miles to km",
    "yards to meters",
    "meters to yards",
    "height converter",
    "distance converter",
    "measurement converter",
    "metric to imperial",
    "imperial to metric",
    "road distance conversion",
    "construction measurement converter",
    "print size inches cm",
    "tv size inches to cm",
    "furniture dimensions",
    "map scale conversion",
    "track and field distances",
    "unit conversion table",
    "SI units",
    "feet and inches calculator",
    "inches fraction to decimal",
    "ruler inches cm",
    "convert 5 ft 11 in to cm",
    "convert 180 cm to feet",
    "convert 10 inches to cm",
    "convert 100 cm to inches",
    "convert 1 mile to km",
    "convert 1 km to miles",
    "yard to foot",
    "foot to inch",
    "meter to centimeter",
    "centimeter to millimeter",
    "engineering unit converter",
    "car tire size inches",
    "photo print inches cm",
    "floor plan scale",
    "pipe diameter inches mm",
    "wire gauge inches mm",
    "drill bit inches mm",
    "convert nautical miles km",
    "walking distance miles km",
    "running track meters",
    "free length converter",
    "height in cm to feet and inches",
    "convert 6 feet to cm",
    "convert 170 cm to feet",
    "metric conversion chart",
    "imperial conversion chart",
    "convert yards to feet",
    "convert meters to inches",
    "convert inches to meters",
    "distance unit list",
    "what is 1 yard in meters",
    "what is 1 inch in mm",
    "what is 1 foot in cm"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/length" },
  openGraph: {
    title: "Length Converter — Metric and Imperial Units",
    description:
      "Convert meters, feet, inches, centimeters, kilometers, yards and miles instantly with accurate results.",
    url: "https://www.fasttools.store/converters/length",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Length Converter", description: "Fast metric ⇄ imperial conversions for daily use." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Length Converter",
      alternateName: "Distance Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/converters/length",
      description:
        "Convert length units across metric and imperial systems for construction, travel and education.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Metric and imperial units", "Feet+inches support", "Copy results", "Mobile friendly"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function LengthConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Length Converter", href: "/converters/length" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Length Converter — Metric ⇄ Imperial Units</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles accurately.</p>
          </div>

          <LengthConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use the Length Converter</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Choose Units and Enter a Value</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Select the source and target units (e.g., meters to feet).</li>
              <li>Optionally use feet+inches input when converting heights.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) View Accurate Results</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Results update instantly and can be copied for reuse.</li>
              <li>Round to common precision for building and DIY work.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Popular Conversions</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <li>cm ⇄ inches</li>
              <li>meters ⇄ feet</li>
              <li>km ⇄ miles</li>
              <li>mm ⇄ inches</li>
              <li>yards ⇄ meters</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/converters/file-size">File Size Converter</Link></li>
              <li><Link href="/converters/temperature">Temperature Converter</Link></li>
              <li><Link href="/converters/timezone">Timezone Converter</Link></li>
              <li><Link href="/tools/percentage-calculator">Percentage Calculator</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
