import { LengthConverter } from "@/components/length-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Length Converter — Meters, Feet, Inches, CM, KM & Miles | SmartToolboxes",
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
    "what is 1 foot in cm",
    "length converter online",
    "meter to feet online",
    "feet to meter online",
    "cm to inches online",
    "inches to cm online",
    "mm to inches online",
    "inches to mm online",
    "km to miles online",
    "miles to km online",
    "yards to meters online",
    "meters to yards online",
    "height converter online",
    "distance converter online",
    "measurement converter online",
    "metric to imperial online",
    "imperial to metric online",
    "road distance conversion online",
    "construction measurement converter online",
    "print size inches cm online",
    "tv size inches to cm online",
    "furniture dimensions online",
    "map scale conversion online",
    "track and field distances online",
    "unit conversion table online",
    "SI units online",
    "feet and inches calculator online",
    "inches fraction to decimal online",
    "ruler inches cm online",
    "convert 5 ft 11 in to cm online",
    "convert 180 cm to feet online",
    "convert 10 inches to cm online",
    "convert 100 cm to inches online",
    "convert 1 mile to km online",
    "convert 1 km to miles online",
    "yard to foot online",
    "foot to inch online",
    "meter to centimeter online",
    "centimeter to millimeter online",
    "engineering unit converter online",
    "car tire size inches online",
    "photo print inches cm online",
    "floor plan scale online",
    "pipe diameter inches mm online",
    "wire gauge inches mm online",
    "drill bit inches mm online",
    "convert nautical miles km online",
    "walking distance miles km online",
    "running track meters online",
    "free length converter online",
    "height in cm to feet and inches online",
    "convert 6 feet to cm online",
    "convert 170 cm to feet online",
    "metric conversion chart online",
    "imperial conversion chart online",
    "convert yards to feet online",
    "convert meters to inches online",
    "convert inches to meters online",
    "distance unit list online",
    "what is 1 yard in meters online",
    "what is 1 inch in mm online",
    "what is 1 foot in cm online",
    "length converter free",
    "meter to feet free",
    "feet to meter free",
    "cm to inches free",
    "inches to cm free",
    "mm to inches free",
    "inches to mm free",
    "km to miles free",
    "miles to km free",
    "yards to meters free",
    "meters to yards free",
    "height converter free",
    "distance converter free",
    "measurement converter free",
    "metric to imperial free",
    "imperial to metric free",
    "road distance conversion free",
    "construction measurement converter free",
    "print size inches cm free",
    "tv size inches to cm free",
    "furniture dimensions free",
    "map scale conversion free",
    "track and field distances free",
    "unit conversion table free",
    "SI units free",
    "feet and inches calculator free",
    "inches fraction to decimal free",
    "ruler inches cm free",
    "convert 5 ft 11 in to cm free",
    "convert 180 cm to feet free",
    "convert 10 inches to cm free",
    "convert 100 cm to inches free",
    "convert 1 mile to km free",
    "convert 1 km to miles free",
    "yard to foot free",
    "foot to inch free",
    "meter to centimeter free",
    "centimeter to millimeter free",
    "engineering unit converter free",
    "car tire size inches free",
    "photo print inches cm free",
    "floor plan scale free",
    "pipe diameter inches mm free",
    "wire gauge inches mm free",
    "drill bit inches mm free",
    "convert nautical miles km free",
    "walking distance miles km free",
    "running track meters free",
    "free length converter free",
    "height in cm to feet and inches free",
    "convert 6 feet to cm free",
    "convert 170 cm to feet free",
    "metric conversion chart free",
    "imperial conversion chart free",
    "convert yards to feet free",
    "convert meters to inches free",
    "convert inches to meters free",
    "distance unit list free",
    "what is 1 yard in meters free",
    "what is 1 inch in mm free",
    "what is 1 foot in cm free",
    "length converter AI",
    "meter to feet AI",
    "feet to meter AI",
    "cm to inches AI",
    "inches to cm AI",
    "mm to inches AI",
    "inches to mm AI",
    "km to miles AI",
    "miles to km AI",
    "yards to meters AI",
    "meters to yards AI",
    "height converter AI",
    "distance converter AI",
    "measurement converter AI",
    "metric to imperial AI",
    "imperial to metric AI",
    "road distance conversion AI",
    "construction measurement converter AI",
    "print size inches cm AI",
    "tv size inches to cm AI",
    "furniture dimensions AI",
    "map scale conversion AI",
    "track and field distances AI",
    "unit conversion table AI",
    "SI units AI",
    "feet and inches calculator AI",
    "inches fraction to decimal AI",
    "ruler inches cm AI",
    "convert 5 ft 11 in to cm AI",
    "convert 180 cm to feet AI",
    "convert 10 inches to cm AI",
    "convert 100 cm to inches AI",
    "convert 1 mile to km AI",
    "convert 1 km to miles AI",
    "yard to foot AI",
    "foot to inch AI",
    "meter to centimeter AI",
    "centimeter to millimeter AI",
    "engineering unit converter AI",
    "car tire size inches AI",
    "photo print inches cm AI",
    "floor plan scale AI",
    "pipe diameter inches mm AI",
    "wire gauge inches mm AI",
    "drill bit inches mm AI",
    "convert nautical miles km AI",
    "walking distance miles km AI",
    "running track meters AI",
    "free length converter AI",
    "height in cm to feet and inches AI",
    "convert 6 feet to cm AI",
    "convert 170 cm to feet AI",
    "metric conversion chart AI",
    "imperial conversion chart AI",
    "convert yards to feet AI",
    "convert meters to inches AI",
    "convert inches to meters AI",
    "distance unit list AI",
    "what is 1 yard in meters AI",
    "what is 1 inch in mm AI",
    "what is 1 foot in cm AI",
    "AI length converter",
    "AI meter to feet",
    "AI feet to meter",
    "AI cm to inches",
    "AI inches to cm",
    "AI mm to inches",
    "AI inches to mm",
    "AI km to miles",
    "AI miles to km",
    "AI yards to meters",
    "AI meters to yards",
    "AI height converter",
    "AI distance converter",
    "AI measurement converter",
    "AI metric to imperial",
    "AI imperial to metric",
    "AI road distance conversion",
    "AI construction measurement converter",
    "AI print size inches cm",
    "AI tv size inches to cm",
    "AI furniture dimensions",
    "AI map scale conversion",
    "AI track and field distances",
    "AI unit conversion table",
    "AI SI units",
    "AI feet and inches calculator",
    "AI inches fraction to decimal",
    "AI ruler inches cm",
    "AI convert 5 ft 11 in to cm",
    "AI convert 180 cm to feet",
    "AI convert 10 inches to cm",
    "AI convert 100 cm to inches",
    "AI convert 1 mile to km",
    "AI convert 1 km to miles",
    "AI yard to foot",
    "AI foot to inch",
    "AI meter to centimeter",
    "AI centimeter to millimeter",
    "AI engineering unit converter",
    "AI car tire size inches",
    "AI photo print inches cm",
    "AI floor plan scale",
    "AI pipe diameter inches mm",
    "AI wire gauge inches mm",
    "AI drill bit inches mm",
    "AI convert nautical miles km",
    "AI walking distance miles km",
    "AI running track meters",
    "AI free length converter",
    "AI height in cm to feet and inches",
    "AI convert 6 feet to cm",
    "AI convert 170 cm to feet",
    "AI metric conversion chart",
    "AI imperial conversion chart",
    "AI convert yards to feet",
    "AI convert meters to inches",
    "AI convert inches to meters",
    "AI distance unit list",
    "AI what is 1 yard in meters",
    "AI what is 1 inch in mm",
    "AI what is 1 foot in cm",
    "AI AI AI AI AI"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/length" },
  openGraph: {
    title: "Free Length Converter — Metric and Imperial Units",
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Length Converter — Metric ⇄ Imperial Units</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles accurately.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LengthConverter />

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Understanding Length Units</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Length measurement systems vary around the world, with metric and imperial being the most common:
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Metric System (SI Units)</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Millimeter (mm):</strong> 1/1000 of a meter - Precise measurements, engineering</li>
                  <li><strong>Centimeter (cm):</strong> 1/100 of a meter - Height, small objects</li>
                  <li><strong>Meter (m):</strong> Base unit - Room dimensions, sports</li>
                  <li><strong>Kilometer (km):</strong> 1000 meters - Road distances, travel</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Imperial System</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Inch (in):</strong> 1/12 of a foot - Small measurements, screens</li>
                  <li><strong>Foot (ft):</strong> 12 inches - Height, room dimensions</li>
                  <li><strong>Yard (yd):</strong> 3 feet - Sports fields, fabric</li>
                  <li><strong>Mile (mi):</strong> 5280 feet - Road distances, running</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Popular Conversions</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                  <li>cm ⇄ inches</li>
                  <li>meters ⇄ feet</li>
                  <li>km ⇄ miles</li>
                  <li>mm ⇄ inches</li>
                  <li>yards ⇄ meters</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Use Cases and Applications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Length conversion is essential for various professional and personal activities:
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Construction and DIY</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert blueprints between metric and imperial measurements</li>
                  <li>Calculate material quantities for projects</li>
                  <li>Convert tool measurements (drill bits, screws, pipes)</li>
                  <li>Plan room layouts and furniture placement</li>
                  <li>Calculate flooring and wall covering areas</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Travel and Navigation</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert road distances between countries</li>
                  <li>Understand speed limits in different units</li>
                  <li>Calculate walking and running distances</li>
                  <li>Convert map scales and distances</li>
                  <li>Plan hiking and outdoor activities</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Health and Fitness</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert height measurements for medical records</li>
                  <li>Track running distances in preferred units</li>
                  <li>Convert body measurements for fitness tracking</li>
                  <li>Calculate BMI and health metrics</li>
                  <li>Convert exercise equipment settings</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Precision and Rounding Guidelines</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different applications require different levels of precision:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Construction:</strong> Round to nearest 1/16 inch or 1 mm</li>
                  <li><strong>Engineering:</strong> Maintain full precision for calculations</li>
                  <li><strong>Everyday Use:</strong> Round to 1/4 inch or 1 cm</li>
                  <li><strong>Scientific:</strong> Use exact conversions with full decimal places</li>
                  <li><strong>Medical:</strong> Use appropriate precision for patient safety</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Conversion Formulas and Relationships</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding the mathematical relationships helps with mental calculations:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>1 inch = 2.54 cm</strong> (exact conversion factor)</li>
                  <li><strong>1 foot = 12 inches = 30.48 cm</strong></li>
                  <li><strong>1 yard = 3 feet = 0.9144 meters</strong></li>
                  <li><strong>1 mile = 5280 feet = 1.609 kilometers</strong></li>
                  <li><strong>1 meter = 3.281 feet</strong></li>
                  <li><strong>1 kilometer = 0.621 miles</strong></li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Industry-Specific Applications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different industries have specific length conversion needs:
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Automotive Industry</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert tire sizes between metric and imperial</li>
                  <li>Calculate wheel and rim dimensions</li>
                  <li>Convert engine displacement measurements</li>
                  <li>Calculate fuel efficiency in different units</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Textile and Fashion</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert fabric measurements between systems</li>
                  <li>Calculate pattern sizes and dimensions</li>
                  <li>Convert sizing charts for international markets</li>
                  <li>Calculate material requirements for projects</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Sports and Athletics</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert track and field distances</li>
                  <li>Calculate running and cycling distances</li>
                  <li>Convert swimming pool lengths</li>
                  <li>Calculate sports field dimensions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Accurate Length Conversion</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Follow these guidelines to ensure accurate conversions:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Always double-check critical measurements</li>
                  <li>Use appropriate precision for your application</li>
                  <li>Consider the context and intended use</li>
                  <li>Round results appropriately for practical use</li>
                  <li>Verify conversions with multiple sources when possible</li>
                  <li>Understand the limitations of conversion factors</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How accurate are the length conversions?</h3>
                    <p className="text-muted-foreground">Our converter uses precise conversion factors (e.g., 1 inch = exactly 2.54 cm) to ensure maximum accuracy for all conversions.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I convert between metric and imperial systems?</h3>
                    <p className="text-muted-foreground">Yes, our converter supports all major metric and imperial units, allowing seamless conversion between systems.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I convert height from cm to feet and inches?</h3>
                    <p className="text-muted-foreground">Enter the height in centimeters, and the converter will show the equivalent in feet and inches format (e.g., 5'11").</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between a meter and a yard?</h3>
                    <p className="text-muted-foreground">A meter is slightly longer than a yard (1 meter = 1.094 yards). The meter is the base unit in the metric system, while the yard is an imperial unit.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I use this converter for scientific calculations?</h3>
                    <p className="text-muted-foreground">Yes, our converter provides precise conversions suitable for scientific, engineering, and medical applications.                </p>
              </div>

            </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><Link href="/converters/file-size">File Size Converter</Link></li>
                  <li><Link href="/converters/temperature">Temperature Converter</Link></li>
                  <li><Link href="/converters/timezone">Timezone Converter</Link></li>
                  <li><Link href="/tools/percentage-calculator">Percentage Calculator</Link></li>
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