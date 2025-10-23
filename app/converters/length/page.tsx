import { LengthConverter } from "@/components/length-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Ruler, Calculator, Target, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Length Converter | Meters, Feet, Inches, CM | FastTools",
  description:
    "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, miles. Accurate metric and imperial conversion tool.",
  keywords:[
    "length converter",
    "convert length",
    "length conversion",
    "convert meters to feet",
    "meters to feet converter",
    "feet to meters converter",
    "cm to inches",
    "centimeters to inches",
    "inches to cm converter",
    "km to miles",
    "kilometers to miles converter",
    "miles to kilometers",
    "convert mm to inches",
    "millimeters to inches converter",
    "convert inches to mm",
    "feet and inches converter",
    "convert ft in to cm",
    "yards to meters",
    "meters to yards converter",
    "convert miles to meters",
    "nautical miles to kilometers",
    "convert kilometers to nautical miles",
    "convert micrometers to meters",
    "convert nanometers to meters",
    "light year to kilometers",
    "convert lightyears to meters",
    "height converter cm to ft",
    "convert height cm to feet and inches",
    "convert cm to ft and in",
    "convert inches to feet",
    "imperial to metric converter",
    "metric to imperial converter",
    "length conversion table",
    "length converter chart",
    "online length converter",
    "free length converter online",
    "distance converter",
    "distance conversion calculator",
    "convert miles to feet",
    "convert feet to yards",
    "convert meters to centimeters",
    "convert cm to meters",
    "convert meters to millimeters",
    "convert kilometers to meters",
    "convert meters to kilometers",
    "scale converter length",
    "convert scale length to real length",
    "convert furlongs to miles",
    "convert rods to feet",
    "convert chains to meters",
    "engineering length converter",
    "construction length converter",
    "convert survey units",
    "convert between metric and imperial length",
    "convert imperial length units online",
    "convert inches and fractions to decimal",
    "decimal to fraction length converter",
    "convert feet inches fraction to decimal",
    "convert px to cm",
    "convert pixels to inches at dpi",
    "convert pixels to inches",
    "convert pt to inches",
    "convert pica to inches",
    "convert mm to pt",
    "convert cm to pt",
    "interactive length converter",
    "length conversion calculator with formula",
    "how many inches in a meter",
    "how many cm in a mile",
    "convert height meters to feet"
  ],

  alternates: { canonical: "https://www.fasttools.store/converters/length" },
  openGraph: {
    title: "Free Length Converter | Convert Meters, Feet, Inches, CM, KM & Miles | FastTools",
    description:
      "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles. Accurate metric and imperial conversion tool for construction, travel, and education.",
    url: "https://www.fasttools.store/converters/length",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Length Converter - Convert Meters, Feet, Inches, CM, KM & Miles",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Length Converter | Convert Meters, Feet, Inches, CM, KM & Miles | FastTools",
    description: "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles. Accurate metric and imperial conversion tool for construction, travel, and education.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Length Converter",
      alternateName: "Distance Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/length",
      description:
        "Convert length units across metric and imperial systems for construction, travel and education.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Metric and imperial units", 
        "Feet+inches support", 
        "Copy results", 
        "Mobile friendly",
        "Precise conversions",
        "Multiple unit support",
        "Construction tools",
        "Travel calculations",
        "Engineering precision",
        "Educational resources"
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
      downloadUrl: "https://www.fasttools.store/converters/length",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "length converter, free length converter, meter to feet, feet to meter, cm to inches, inches to cm, km to miles, miles to km, height converter, distance converter",
      about: {
        "@type": "Thing",
        name: "Length Measurement",
        description: "Free online tools for converting length measurements between metric and imperial systems"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function LengthConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Length Converter", href: "/converters/length" },
          ]}
        />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Ruler className="h-4 w-4" />
                    <span>Professional Length Converter</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full"></div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">Free Length Converter</h1>
                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Convert meters ⇄ feet, inches ⇄ cm, km ⇄ miles and more with precise, fast results.
                  </p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <Ruler className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">8+ Units</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                      <Calculator className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">Real-time</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <Target className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">Free Forever</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <Users className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Professional</span>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet Ad - Top */}
                <div className="block xl:hidden mb-6">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Tool Card */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <LengthConverter />
                </div>

                {/* Mobile/Tablet Ad - After Tool */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Understanding How This Tool Works */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">Understanding How This Length Converter Works</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Conversions are computed with standardized factors for metric and imperial units. Input validation and
                      sensible rounding keep values readable while preserving accuracy.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Real-Time Processing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Results update as you type. Mixed formats (like feet+inches) are handled cleanly and converted to any target unit.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Professional Features</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Precision controls, unit hints, and copy‑ready output help in construction, engineering, education, and travel planning.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">Advanced Usage Techniques</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Practical guidance for real‑world tasks across construction, travel, and science.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Construction and Engineering</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Convert between blueprint scales, material specs, and measurement systems without manual tables.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Travel and Navigation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Switch quickly between miles and kilometers when comparing maps, routes, or fitness trackers.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Education and Science</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Use consistent units across lab notes and reports; rely on exact factors, not approximations.
                    </p>
                  </div>

                  {/* Mobile Bottom Ad */}
                  <div className="block xl:hidden mt-8">
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                  </div>

                {/* Length Converter FAQ */}
                <div className="p-6 rounded-lg bg-card border border-border shadow mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">Length Converter FAQ</h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I convert between feet+inches and centimeters accurately?</h3>
                      <p>Enter feet and inches in the mixed format (for example, 5 ft 11 in). The tool normalizes it and converts directly to centimeters using exact definitions (1 in = 2.54 cm). For reverse, convert cm to decimal feet and optionally split back into ft+in.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What precision should I use for construction measurements?</h3>
                      <p>Match the smallest practical unit on site. For wood framing, 1/16 in (≈1.6 mm) is common; for metalwork, tighter tolerances may be needed. Keep internal precision high but round displays for readability, then note the rounding rule on drawings.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Meters to feet: why doesn’t my calculator match my colleague’s number?</h3>
                      <p>Differences usually come from rounding at different steps. Convert once with full precision, then round at the end to an agreed decimal or fractional inch. If values must match exactly, share the factor and rounding policy with your team.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I paste values with units (like “3.2 m” or “12 in”)?</h3>
                      <p>Yes—unit‑aware parsing accepts common suffixes. If the input is ambiguous, specify the unit explicitly or use the unit selector. The converter validates and rejects impossible combinations to prevent silent errors.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What’s the difference between decimal feet and feet+inches, and when should I use each?</h3>
                      <p>Decimal feet (e.g., 5.92 ft) is compact and ideal for calculations and spreadsheets. Feet+inches (5 ft 11 in) is human‑friendly on site. Convert to decimal for math, then present as feet+inches for field work.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I convert map scales or drawings accurately?</h3>
                      <p>First convert the drawing measurement to true units using the scale (e.g., 1 cm on paper = 2 m in reality), then change units as needed (m ⇄ ft). Document the scale and unit system on the drawing to avoid misreads.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Miles vs kilometers: any quick mental checks?</h3>
                      <p>Use 5 miles ≈ 8 km and 1 mile ≈ 1.6 km for estimates. For exact work, rely on the converter and keep one extra decimal place internally before rounding your final number.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Why do some specs list millimeters instead of centimeters?</h3>
                      <p>Millimeters remove decimal points and reduce rounding ambiguity in fabrication. If a spec is in mm, keep it in mm until the end, then convert for presentation only.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use the converter offline at a jobsite?</h3>
                      <p>Yes. Length and unit calculations run in your browser. You’ll only need a connection to load the page the first time; after that, basic conversions continue to work offline.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the most common unit mistakes to avoid?</h3>
                      <p>Avoid mixing systems within the same figure (e.g., meters and feet together) and avoid early rounding. Convert once, round at the end, and always annotate the unit and precision you used.</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="hidden lg:block w-64 xl:w-72">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}