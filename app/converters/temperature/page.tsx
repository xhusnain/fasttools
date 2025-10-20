import { TemperatureConverter } from "@/components/temperature-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Temperature Converter | Celsius ⇄ Fahrenheit | FastTools",
  description:
    "Convert temperatures instantly between Celsius and Fahrenheit. Ideal for weather, cooking, science projects, and travel.",
  keywords: [
    // Primary Keywords (20)
    "temperature converter",
    "free temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "C to F",
    "F to C",
    "temperature converter online",
    "celsius fahrenheit converter online",
    "temperature calculator online",
    "c to f converter online",
    "f to c converter online",
    "temperature conversion online",
    "celsius fahrenheit conversion online",
    "temperature converter free",
    "celsius fahrenheit converter free",
    "temperature calculator free",
    "c to f converter free",
    "f to c converter free",
    "temperature conversion free",
    "celsius fahrenheit conversion free",
    
    // Secondary Keywords (20)
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
    "what is 180 c in f",
    "what is 350 f in c",
    "room temperature c to f",
    "fever temperature c to f",
    "water boiling point c to f",
    
    // Long-tail Keywords (20)
    "free online temperature converter",
    "best temperature converter online",
    "temperature converter with live preview",
    "free temperature converter tool online",
    "online temperature converter free",
    "temperature converter online free",
    "celsius to fahrenheit converter free",
    "fahrenheit to celsius converter free",
    "temperature calculator free online",
    "c to f converter free online",
    "f to c converter free online",
    "temperature conversion free online",
    "celsius fahrenheit conversion free online",
    "temperature converter for cooking",
    "temperature converter for weather",
    "temperature converter for science",
    "temperature converter for travel",
    "temperature converter for baking",
    "temperature converter for grilling",
    "temperature converter for air fryer",
    
    // Additional SEO Keywords
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
    title: "Free Temperature Converter | Celsius (°C) ⇄ Fahrenheit (°F) | FastTools",
    description: "Convert temperatures instantly between Celsius and Fahrenheit. Ideal for weather, cooking, science projects, and travel.",
    url: "https://www.fasttools.store/converters/temperature",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Temperature Converter - Celsius (°C) ⇄ Fahrenheit (°F)",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Temperature Converter | Celsius (°C) ⇄ Fahrenheit (°F) | FastTools",
    description: "Convert temperatures instantly between Celsius and Fahrenheit. Ideal for weather, cooking, science projects, and travel.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Temperature Converter",
      alternateName: "Celsius Fahrenheit Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/temperature",
      description:
        "Convert temperatures between Celsius and Fahrenheit for weather, cooking and science.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Celsius ⇄ Fahrenheit", 
        "Copy results", 
        "Mobile friendly",
        "Cooking temperatures",
        "Weather conversions",
        "Scientific calculations",
        "Instant conversion",
        "Precise results",
        "Negative temperatures",
        "Kelvin support"
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
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/converters/temperature",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "temperature converter, free temperature converter, celsius to fahrenheit, fahrenheit to celsius, temperature conversion, cooking temperature, weather temperature",
      about: {
        "@type": "Thing",
        name: "Temperature Measurement",
        description: "Free online tools for converting temperatures between Celsius and Fahrenheit scales"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Temperature Converter — Celsius (°C) ⇄ Fahrenheit (°F)</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Instantly convert temperatures for weather, cooking and science.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TemperatureConverter />

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Temperature Scale Comparison</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding different temperature scales helps you work with international recipes, weather reports, and scientific data:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Celsius (°C):</strong> Water freezes at 0°C, boils at 100°C</li>
                  <li><strong>Fahrenheit (°F):</strong> Water freezes at 32°F, boils at 212°F</li>
                  <li><strong>Kelvin (K):</strong> Absolute zero at 0K, same degree size as Celsius</li>
                  <li><strong>Rankine (°R):</strong> Absolute zero at 0°R, same degree size as Fahrenheit</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Temperature Reference Points</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These reference points help you understand temperature relationships:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Absolute Zero:</strong> -273.15°C / -459.67°F (0K / 0°R)</li>
                  <li><strong>Dry Ice:</strong> -78.5°C / -109.3°F</li>
                  <li><strong>Water Freezing:</strong> 0°C / 32°F</li>
                  <li><strong>Room Temperature:</strong> 20°C / 68°F</li>
                  <li><strong>Body Temperature:</strong> 37°C / 98.6°F</li>
                  <li><strong>Water Boiling:</strong> 100°C / 212°F</li>
                  <li><strong>Oven Baking:</strong> 180°C / 356°F</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Cooking Temperature Guide</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Essential cooking temperatures for different techniques and foods:
                </p>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Baking and Roasting</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Slow Baking:</strong> 120°C / 250°F - Cakes, breads</li>
                  <li><strong>Moderate Baking:</strong> 180°C / 350°F - Cookies, muffins</li>
                  <li><strong>Hot Baking:</strong> 220°C / 425°F - Pizzas, pastries</li>
                  <li><strong>Very Hot:</strong> 250°C / 480°F - Bread crusts, pizza stones</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Meat Cooking Temperatures</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Rare Beef:</strong> 52°C / 125°F</li>
                  <li><strong>Medium Rare:</strong> 57°C / 135°F</li>
                  <li><strong>Medium:</strong> 63°C / 145°F</li>
                  <li><strong>Well Done:</strong> 71°C / 160°F</li>
                  <li><strong>Poultry:</strong> 74°C / 165°F</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Weather Temperature Ranges</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding weather temperature ranges helps you dress appropriately and plan activities:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Extreme Cold:</strong> Below -18°C / 0°F</li>
                  <li><strong>Very Cold:</strong> -18°C to -7°C / 0°F to 20°F</li>
                  <li><strong>Cold:</strong> -7°C to 4°C / 20°F to 40°F</li>
                  <li><strong>Cool:</strong> 4°C to 13°C / 40°F to 55°F</li>
                  <li><strong>Mild:</strong> 13°C to 21°C / 55°F to 70°F</li>
                  <li><strong>Warm:</strong> 21°C to 29°C / 70°F to 85°F</li>
                  <li><strong>Hot:</strong> 29°C to 38°C / 85°F to 100°F</li>
                  <li><strong>Extreme Heat:</strong> Above 38°C / 100°F</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Scientific Temperature Applications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Temperature plays a crucial role in scientific research and industrial processes:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Chemistry:</strong> Reaction rates, solubility, phase changes</li>
                  <li><strong>Physics:</strong> Thermal expansion, gas laws, thermodynamics</li>
                  <li><strong>Biology:</strong> Enzyme activity, cell growth, metabolism</li>
                  <li><strong>Medicine:</strong> Fever detection, hypothermia treatment</li>
                  <li><strong>Engineering:</strong> Material properties, thermal design</li>
                  <li><strong>Food Science:</strong> Preservation, cooking, safety</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Temperature Conversion Tips</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These tips help you convert temperatures quickly and accurately:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Remember that -40°C = -40°F (the only point where both scales meet)</li>
                  <li>For rough estimates: °F ≈ °C × 2 + 30</li>
                  <li>For precise conversions: Use the exact formulas</li>
                  <li>When cooking, round to the nearest 5°F or 2°C for practical use</li>
                  <li>For scientific work, maintain decimal precision</li>
                  <li>Consider the context: weather, cooking, or scientific applications</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the easiest way to convert temperatures?</h3>
                    <p className="text-muted-foreground">Use our free online converter for instant, accurate results. For mental math, remember that °F ≈ °C × 2 + 30 gives a rough estimate.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Why do different countries use different temperature scales?</h3>
                    <p className="text-muted-foreground">Historical reasons and cultural preferences. Celsius is used in most countries, while Fahrenheit is primarily used in the United States.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Which temperature scale is more accurate?</h3>
                    <p className="text-muted-foreground">Both scales are equally accurate. The choice depends on your location, field of work, and personal preference.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I convert negative temperatures?</h3>
                    <p className="text-muted-foreground">Use the same formulas. For example, -10°C = 14°F, and -10°F = -23.3°C. The converter handles negative values automatically.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between Celsius and Fahrenheit?</h3>
                    <p className="text-muted-foreground">Celsius uses water's freezing and boiling points as reference (0°C and 100°C), while Fahrenheit uses different reference points (32°F and 212°F).                </p>
              </div>

            </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><Link href="/converters/length">Length Converter</Link></li>
                  <li><Link href="/converters/file-size">File Size Converter</Link></li>
                  <li><Link href="/converters/timezone">Timezone Converter</Link></li>
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