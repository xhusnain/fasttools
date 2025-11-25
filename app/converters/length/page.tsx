import { LengthConverter } from "@/components/length-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { ToolContentEnhancement } from "@/components/tool-content-enhancement"
import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"
import Link from "next/link"

const baseMetadata = createMetadata({
  title: "Length Converter | Free Meters, Feet, Inches, CM Converter",
  description:
    "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, miles. Accurate metric and imperial conversion tool for construction, travel, and education.",
  path: "/converters/length",
})

export const metadata: Metadata = {
  ...baseMetadata,
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
            { label: "Converters", href: "/converters" },
            { label: "Length Converter", href: "/converters/length" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <GHeader
                  title="Free Length Converter"
                  description="Convert meters ⇄ feet, inches ⇄ cm, km ⇄ miles and more with precise, fast results."
                  titleSize="medium"
                  descriptionSize="small"
                />
              </div>

              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              {/* Tool Card */}
              <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                <LengthConverter />
              </div>

              {/* Comprehensive Content Section */}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                {/* What is Length Converter Section */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">What is a Length Converter?</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-base">
                      A length converter is an essential tool that transforms measurements between different unit systems, primarily the metric system (meters, centimeters, kilometers) and the imperial system (feet, inches, yards, miles). This tool is indispensable for professionals, students, and everyday users who need to work with measurements from different countries or industries that use varying measurement standards.
                    </p>
                    <p className="text-base">
                      Our free length converter provides instant, accurate conversions between over 20 different length units, including meters, feet, inches, centimeters, millimeters, kilometers, yards, miles, nautical miles, and even astronomical units. Whether you're working on a construction project, planning international travel, studying science, or simply need to understand measurements from different sources, this tool eliminates the need for manual calculations and conversion tables.
                    </p>
                    <p className="text-base">
                      The converter uses standardized conversion factors recognized internationally, ensuring precision for critical applications in engineering, construction, manufacturing, and scientific research. All conversions happen instantly in your browser, with no data sent to external servers, ensuring complete privacy and security for your measurements.
                    </p>
                    <p className="text-base">
                      Our comprehensive length converter and distance conversion calculator handles all major unit conversions you'll encounter in daily life and professional work. Whether you need to convert meters to feet for construction blueprints, convert centimeters to inches for international product specifications, or convert kilometers to miles for travel planning, this interactive length converter provides instant, accurate results. The tool seamlessly converts between metric and imperial systems—perfect for converting millimeters to inches in engineering drawings, converting yards to meters in sports fields, or converting nautical miles to kilometers for maritime navigation. For height measurements, our height converter easily converts cm to feet and inches, making it ideal for medical records, fitness tracking, or international ID requirements. Construction professionals rely on our engineering length converter and construction length converter to convert between survey units, handle decimal to fraction conversions for precise measurements, and convert scale lengths to real-world dimensions. Digital designers use our pixel conversion features to convert pixels to inches at specific DPI settings, convert px to cm for print layouts, or convert points and picas to inches for typography. This free length converter online serves as both a distance converter and a comprehensive length conversion calculator with formulas, supporting everything from converting miles to feet for road measurements to converting micrometers to meters for scientific research. Whether you're using it as an imperial to metric converter or a metric to imperial converter, our tool provides accurate conversions for all your length conversion needs, making it the perfect online length converter for professionals and students alike.
                    </p>
                  </div>
                </article>

                {/* How to Use Section */}
                    <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use Our Length Converter</h2>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">1</span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Enter Your Value:</strong> Type or paste the length value you want to convert in the input field. You can enter values with or without units (e.g., "5.5" or "5.5 meters").</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">2</span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Select Source Unit:</strong> Choose the unit of your input value from the dropdown menu. Options include meters, feet, inches, centimeters, kilometers, miles, yards, and many more.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">3</span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Select Target Unit:</strong> Choose the unit you want to convert to. The converter will automatically display the equivalent value in your selected unit.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">4</span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">View Results:</strong> The converted value appears instantly in real-time as you type. You can copy the result to your clipboard or use it directly in your work.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center">5</span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Mixed Format Support:</strong> For imperial measurements, you can enter values in combined formats like "5 feet 11 inches" or "6'11" and the converter will handle them automatically.</span>
                    </li>
                  </ol>
                </article>

                {/* Common Use Cases Section */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Common Use Cases for Length Conversion</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Construction and Architecture:</strong> Converting between metric and imperial measurements when working with international building codes, blueprints, or material specifications. Essential for contractors, architects, and engineers working on projects that span different measurement systems.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">International Travel:</strong> Understanding distances in different countries. Converting kilometers to miles when driving in the US, or meters to feet when visiting countries using imperial measurements. Also useful for understanding road signs, map distances, and travel planning.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Education and Learning:</strong> Students and teachers use length converters to understand measurement systems, complete homework assignments, and prepare for exams that may require conversions between metric and imperial units.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Fitness and Sports:</strong> Converting running distances (miles to kilometers), track measurements, and understanding race distances in different unit systems. Essential for athletes training internationally or comparing performance metrics.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Manufacturing and Engineering:</strong> Converting technical specifications, tolerances, and dimensions when working with international suppliers or clients. Critical for maintaining precision in manufacturing processes.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Real Estate:</strong> Converting property dimensions, lot sizes, and room measurements between different measurement systems when dealing with international properties or clients.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Scientific Research:</strong> Converting measurements in scientific papers, laboratory data, and research findings that may use different unit systems depending on the field or country of origin.</span>
                    </li>
                  </ul>
                </article>

                {/* Why Choose Our Tool Section */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose Our Length Converter?</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Instant Accuracy:</strong> All conversions use internationally recognized conversion factors, ensuring precision for professional and academic use. No approximations or rounding errors.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Comprehensive Unit Support:</strong> Convert between 20+ length units including metric (meters, centimeters, kilometers, millimeters), imperial (feet, inches, yards, miles), nautical (nautical miles), and scientific units (light years, astronomical units).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Mixed Format Handling:</strong> Enter measurements in combined formats like "5 feet 11 inches" or "6'11" and the converter automatically parses and converts them correctly.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Real-Time Conversion:</strong> See results instantly as you type, with no delays or page refreshes. Perfect for quick conversions during work or study.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Privacy and Security:</strong> All conversions happen locally in your browser. Your measurements never leave your device, ensuring complete privacy and security.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Mobile-Friendly Design:</strong> Works perfectly on smartphones, tablets, and desktop computers. Access accurate conversions anywhere, anytime.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <span className="text-base leading-relaxed"><strong className="text-foreground">Completely Free:</strong> No registration, no hidden costs, no premium features locked behind paywalls. All conversion capabilities are available free forever.</span>
                    </li>
                  </ul>
                </article>

                {/* Length Converter FAQ */}
                <div className="p-6 rounded-lg bg-card border border-border shadow mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Length Converter FAQ</h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">How do I convert between feet+inches and centimeters accurately?</h3>
                      <p>Enter feet and inches in the mixed format (for example, 5 ft 11 in). The tool normalizes it and converts directly to centimeters using exact definitions (1 in = 2.54 cm). For reverse, convert cm to decimal feet and optionally split back into ft+in.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What precision should I use for construction measurements?</h3>
                      <p>Match the smallest practical unit on site. For wood framing, 1/16 in (≈1.6 mm) is common; for metalwork, tighter tolerances may be needed. Keep internal precision high but round displays for readability, then note the rounding rule on drawings.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Meters to feet: why doesn't my calculator match my colleague's number?</h3>
                      <p>Differences usually come from rounding at different steps. Convert once with full precision, then round at the end to an agreed decimal or fractional inch. If values must match exactly, share the factor and rounding policy with your team.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Can I paste values with units (like "3.2 m" or "12 in")?</h3>
                      <p>Yes—unit‑aware parsing accepts common suffixes. If the input is ambiguous, specify the unit explicitly or use the unit selector. The converter validates and rejects impossible combinations to prevent silent errors.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What's the difference between decimal feet and feet+inches, and when should I use each?</h3>
                      <p>Decimal feet (e.g., 5.92 ft) is compact and ideal for calculations and spreadsheets. Feet+inches (5 ft 11 in) is human‑friendly on site. Convert to decimal for math, then present as feet+inches for field work.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">How do I convert map scales or drawings accurately?</h3>
                      <p>First convert the drawing measurement to true units using the scale (e.g., 1 cm on paper = 2 m in reality), then change units as needed (m ⇄ ft). Document the scale and unit system on the drawing to avoid misreads.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Miles vs kilometers: any quick mental checks?</h3>
                      <p>Use 5 miles ≈ 8 km and 1 mile ≈ 1.6 km for estimates. For exact work, rely on the converter and keep one extra decimal place internally before rounding your final number.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Why do some specs list millimeters instead of centimeters?</h3>
                      <p>Millimeters remove decimal points and reduce rounding ambiguity in fabrication. If a spec is in mm, keep it in mm until the end, then convert for presentation only.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Can I use the converter offline at a jobsite?</h3>
                      <p>Yes. Length and unit calculations run in your browser. You'll only need a connection to load the page the first time; after that, basic conversions continue to work offline.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What are the most common unit mistakes to avoid?</h3>
                      <p>Avoid mixing systems within the same figure (e.g., meters and feet together) and avoid early rounding. Convert once, round at the end, and always annotate the unit and precision you used.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar with AdSense */}
            <div className="hidden lg:block w-64 xl:w-72">
              <div className="sticky top-32 space-y-6">
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}