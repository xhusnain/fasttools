 import { ConversionCalculator } from "@/components/conversion-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, Ruler, Thermometer, DollarSign, Clock, Weight, Volume, Square, Gauge, Zap, Globe, Target, TrendingUp, BookOpen, Users, Award, CheckCircle, AlertCircle, History } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastTools - Unit Converter 2025 | Free 1000+ Unit Conversions",
  description:
    "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
  abstract: "Professional unit conversion calculator supporting 1000+ units across 12+ categories. Convert length, weight, temperature, currency, time, area, volume, speed, power, energy, and pressure with mathematical precision.",
  category: "Technology",
  classification: "Unit Conversion Tool",
  authors: [{ name: "FastTools Team", url: "https://www.fasttools.store" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.fasttools.store"),
  applicationName: "FastTools",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "conversion calculator",
    "converting calculator",
    "unit converter",
    "online converter",
    "free converter",
    "unit conversion",
    "measurement converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "currency converter",
    "time converter",
    "area converter",
    "volume converter",
    "speed converter",
    "power converter",
    "energy converter",
    "pressure converter",
    "conversion tool",
    "converter online",
    "free conversion calculator",
    "metric converter",
    "imperial converter",
    "unit calculator",
    "measurement tool",
    "conversion table",
    "unit conversion tool",
    "conversion formula",
    "conversion chart",
    "unit converter online",
    "conversion calculator online",
    "free unit converter",
    "online unit converter",
    "conversion tool online",
    "unit conversion calculator",
    "measurement conversion",
    "conversion utility",
    "unit converter tool",
    "conversion app",
    "conversion website",
    "conversion platform",
    "free online conversion calculator",
    "best unit converter online",
    "comprehensive conversion calculator",
    "advanced unit converter tool",
    "multi-unit conversion calculator",
    "universal conversion calculator",
    "all-in-one conversion tool",
    "complete unit converter",
    "professional conversion calculator",
    "scientific unit converter",
    "engineering conversion tool",
    "academic conversion calculator",
    "business conversion tool",
    "travel conversion calculator",
    "cooking conversion tool",
    "construction conversion calculator",
    "medical unit converter",
    "sports conversion tool",
    "weather conversion calculator",
    "technology conversion tool",
    "conversion utilities",
    "measurement tools",
    "unit conversion services",
    "conversion platform",
    "digital conversion tools",
    "conversion solutions",
    "unit conversion website",
    "conversion calculator app",
    "online conversion services",
    "conversion tool collection",
    
    // Length Conversion Keywords (20+ keywords)
    "meter to feet", "feet to meters", "inch to cm", "cm to inch", "yard to meter", "meter to yard",
    "mile to km", "km to mile", "foot to inch", "inch to foot", "centimeter to millimeter",
    "millimeter to centimeter", "kilometer to mile", "nautical mile to km", "furlong to meter",
    "rod to meter", "chain to meter", "fathom to meter", "cable to meter", "league to km",
    "light year to km", "parsec to km", "angstrom to nanometer", "micron to millimeter",
    "mil to millimeter", "thou to millimeter", "point to inch", "pica to inch",
    
    // Weight Conversion Keywords (20+ keywords)
    "pound to kg", "kg to pound", "ounce to gram", "gram to ounce", "ton to kg", "kg to ton",
    "stone to pound", "pound to stone", "grain to gram", "gram to grain", "dram to gram",
    "gram to dram", "scruple to gram", "gram to scruple", "pennyweight to gram", "gram to pennyweight",
    "troy ounce to gram", "gram to troy ounce", "troy pound to kg", "kg to troy pound",
    "carat to gram", "gram to carat", "metric ton to kg", "kg to metric ton", "short ton to kg",
    "long ton to kg", "hundredweight to kg", "kg to hundredweight", "slug to kg", "kg to slug",
    
    // Temperature Conversion Keywords (20+ keywords)
    "celsius to fahrenheit", "fahrenheit to celsius", "celsius to kelvin", "kelvin to celsius",
    "fahrenheit to kelvin", "kelvin to fahrenheit", "rankine to celsius", "celsius to rankine",
    "fahrenheit to rankine", "rankine to fahrenheit", "reaumur to celsius", "celsius to reaumur",
    "delisle to celsius", "celsius to delisle", "newton to celsius", "celsius to newton",
    "romer to celsius", "celsius to romer", "wedgwood to celsius", "celsius to wedgwood",
    "gas mark to celsius", "celsius to gas mark", "absolute zero", "room temperature",
    "body temperature", "boiling point", "freezing point", "triple point", "critical temperature",
    
    // Currency Conversion Keywords (20+ keywords)
    "USD to EUR", "EUR to USD", "GBP to USD", "USD to GBP", "JPY to USD", "USD to JPY",
    "INR to USD", "USD to INR", "CAD to USD", "USD to CAD", "AUD to USD", "USD to AUD",
    "CHF to USD", "USD to CHF", "CNY to USD", "USD to CNY", "KRW to USD", "USD to KRW",
    "BRL to USD", "USD to BRL", "MXN to USD", "USD to MXN", "RUB to USD", "USD to RUB",
    "ZAR to USD", "USD to ZAR", "TRY to USD", "USD to TRY", "exchange rate", "currency rate",
    
    // Time Conversion Keywords (20+ keywords)
    "seconds to minutes", "minutes to seconds", "hours to minutes", "minutes to hours",
    "days to hours", "hours to days", "weeks to days", "days to weeks", "months to days",
    "days to months", "years to days", "days to years", "decades to years", "years to decades",
    "centuries to years", "years to centuries", "millennia to years", "years to millennia",
    "microseconds to seconds", "seconds to microseconds", "milliseconds to seconds",
    "seconds to milliseconds", "nanoseconds to seconds", "seconds to nanoseconds",
    "picoseconds to seconds", "seconds to picoseconds", "femtoseconds to seconds",
    "seconds to femtoseconds", "attoseconds to seconds", "seconds to attoseconds",
    
    // Area Conversion Keywords (20+ keywords)
    "square meter to square feet", "square feet to square meter", "acre to square meter",
    "square meter to acre", "hectare to acre", "acre to hectare", "square inch to square cm",
    "square cm to square inch", "square yard to square meter", "square meter to square yard",
    "square mile to square km", "square km to square mile", "square rod to square meter",
    "square meter to square rod", "square chain to square meter", "square meter to square chain",
    "square furlong to square meter", "square meter to square furlong", "square league to square km",
    "square km to square league", "barn to square meter", "square meter to barn",
    "circular inch to square cm", "square cm to circular inch", "circular mil to square mm",
    "square mm to circular mil", "township to square km", "square km to township",
    "section to square km", "square km to section", "quarter section to acre",
    
    // Volume Conversion Keywords (20+ keywords)
    "liter to gallon", "gallon to liter", "cubic meter to cubic feet", "cubic feet to cubic meter",
    "cubic inch to cubic cm", "cubic cm to cubic inch", "cubic yard to cubic meter",
    "cubic meter to cubic yard", "pint to liter", "liter to pint", "quart to liter",
    "liter to quart", "cup to milliliter", "milliliter to cup", "tablespoon to milliliter",
    "milliliter to tablespoon", "teaspoon to milliliter", "milliliter to teaspoon",
    "fluid ounce to milliliter", "milliliter to fluid ounce", "barrel to liter",
    "liter to barrel", "bushel to liter", "liter to bushel", "peck to liter",
    "liter to peck", "gill to milliliter", "milliliter to gill", "dram to milliliter",
    "milliliter to dram", "minim to milliliter", "milliliter to minim", "drop to milliliter",
    
    // Speed Conversion Keywords (20+ keywords)
    "kmh to mph", "mph to kmh", "mps to kmh", "kmh to mps", "knot to kmh", "kmh to knot",
    "fps to mps", "mps to fps", "fpm to mps", "mps to fpm", "fph to kmh", "kmh to fph",
    "mach to kmh", "kmh to mach", "light speed to kmh", "kmh to light speed",
    "sound speed to kmh", "kmh to sound speed", "c to kmh", "kmh to c", "mach 1 to kmh",
    "kmh to mach 1", "mach 2 to kmh", "kmh to mach 2", "mach 3 to kmh", "kmh to mach 3",
    "supersonic speed", "subsonic speed", "hypersonic speed", "transonic speed",
    
    // Power Conversion Keywords (20+ keywords)
    "watt to horsepower", "horsepower to watt", "kilowatt to horsepower", "horsepower to kilowatt",
    "megawatt to horsepower", "horsepower to megawatt", "gigawatt to horsepower", "horsepower to gigawatt",
    "watt to btu per hour", "btu per hour to watt", "kilowatt to btu per hour", "btu per hour to kilowatt",
    "watt to calorie per second", "calorie per second to watt", "watt to erg per second",
    "erg per second to watt", "watt to foot pound per second", "foot pound per second to watt",
    "watt to joule per second", "joule per second to watt", "watt to newton meter per second",
    "newton meter per second to watt", "watt to volt ampere", "volt ampere to watt",
    "watt to kilovolt ampere", "kilovolt ampere to watt", "watt to megavolt ampere",
    
    // Energy Conversion Keywords (20+ keywords)
    "joule to calorie", "calorie to joule", "kilojoule to calorie", "calorie to kilojoule",
    "megajoule to calorie", "calorie to megajoule", "gigajoule to calorie", "calorie to gigajoule",
    "joule to btu", "btu to joule", "kilojoule to btu", "btu to kilojoule", "megajoule to btu",
    "btu to megajoule", "gigajoule to btu", "btu to gigajoule", "joule to kilowatt hour",
    "kilowatt hour to joule", "kilojoule to kilowatt hour", "kilowatt hour to kilojoule",
    "megajoule to kilowatt hour", "kilowatt hour to megajoule", "gigajoule to kilowatt hour",
    "kilowatt hour to gigajoule", "joule to electron volt", "electron volt to joule",
    "kilojoule to electron volt", "electron volt to kilojoule", "megajoule to electron volt",
    
    // Pressure Conversion Keywords (20+ keywords)
    "pascal to psi", "psi to pascal", "bar to psi", "psi to bar", "atmosphere to psi",
    "psi to atmosphere", "torr to pascal", "pascal to torr", "millibar to pascal",
    "pascal to millibar", "kilopascal to psi", "psi to kilopascal", "megapascal to psi",
    "psi to megapascal", "gigapascal to psi", "psi to gigapascal", "pascal to bar",
    "bar to pascal", "kilopascal to bar", "bar to kilopascal", "megapascal to bar",
    "bar to megapascal", "gigapascal to bar", "bar to gigapascal", "pascal to atmosphere",
    "atmosphere to pascal", "kilopascal to atmosphere", "atmosphere to kilopascal",
    "megapascal to atmosphere", "atmosphere to megapascal", "gigapascal to atmosphere",
    
    // Data Storage Conversion Keywords (20+ keywords)
    "byte to bit", "bit to byte", "kilobyte to byte", "byte to kilobyte", "megabyte to kilobyte",
    "kilobyte to megabyte", "gigabyte to megabyte", "megabyte to gigabyte", "terabyte to gigabyte",
    "gigabyte to terabyte", "petabyte to terabyte", "terabyte to petabyte", "exabyte to petabyte",
    "petabyte to exabyte", "zettabyte to exabyte", "exabyte to zettabyte", "yottabyte to zettabyte",
    "zettabyte to yottabyte", "nibble to bit", "bit to nibble", "word to byte", "byte to word",
    "double word to byte", "byte to double word", "quad word to byte", "byte to quad word",
    "octet to byte", "byte to octet", "nybble to bit", "bit to nybble", "sector to byte",
    
    // Trending General Keywords (20+ keywords)
    "unit converter online", "free unit converter", "online conversion calculator",
    "measurement converter", "universal unit converter", "unit conversion tool",
    "conversion calculator online", "unit converter app", "conversion table",
    "unit conversion chart", "conversion formula", "unit conversion calculator",
    "metric to imperial converter", "imperial to metric converter", "scientific unit converter",
    "engineering unit converter", "academic unit converter", "business unit converter",
    "travel unit converter", "cooking unit converter", "construction unit converter",
    "medical unit converter", "sports unit converter", "weather unit converter",
    "technology unit converter", "digital unit converter", "mobile unit converter",
    "desktop unit converter", "web unit converter", "offline unit converter"
  ],
  openGraph: {
    title: "Advanced Conversion Calculator | Free Online Unit Converter",
    description: "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
    type: "website",
    url: "https://www.fasttools.store/calculator/conversion-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Conversion Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Conversion Calculator | Free Online Unit Converter",
    description: "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/conversion-calculator"
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  other: {
    "fb:app_id": "your-facebook-app-id",
    "article:author": "FastTools Team",
    "article:section": "Technology Tools",
    "article:tag": "unit converter, conversion calculator, measurement tool",
    "og:locale": "en_US",
    "og:locale:alternate": "en_GB",
    "og:type": "website",
    "og:updated_time": new Date().toISOString(),
    "twitter:site": "@fasttools",
    "twitter:creator": "@fasttools",
    "twitter:domain": "fasttools.store",
    "twitter:app:name:iphone": "FastTools",
    "twitter:app:name:ipad": "FastTools",
    "twitter:app:name:googleplay": "FastTools",
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "FastTools Converter",
    "application-name": "FastTools",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#2563eb",
    "color-scheme": "light dark",
    "supported-color-schemes": "light dark",
    "prefers-color-scheme": "light dark"
  },
}

export default function ConversionCalculatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Online Unit Converter",
    "description": "Convert between 1000+ units instantly with our comprehensive conversion calculator. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
    "url": "https://www.fasttools.store/calculator/conversion-calculator",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "1.0",
    "featureList": [
      "1000+ Unit Conversions",
      "Real-time Currency Rates",
      "12+ Conversion Categories",
      "Mathematical Precision",
      "Mobile Responsive",
      "Free Forever"
    ],
    "screenshot": "https://www.fasttools.store/og-image.svg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Professional Engineer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent conversion tool with precise calculations and comprehensive unit coverage."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-4 py-6 max-w-6xl">
      <Breadcrumbs
        items={[
          { label: "Calculator", href: "/calculator" },
          { label: "Conversion Calculator", href: "/calculator/conversion-calculator" },
        ]}
      />

        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-orange-500 text-foreground text-xs font-medium mb-4">
              <Calculator className="h-3 w-3" />
              <span>Professional Unit Converter</span>
            </div>

            <GHeader 
              title="Free Online Unit Converter"
              description="Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions."
              titleSize="medium"
              descriptionSize="small"
            />

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border">
                <Calculator className="h-3 w-3 text-primary" />
                <span className="text-primary font-medium">1000+ Units</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border">
                <Users className="h-3 w-3 text-heading-accent" />
                <span className="text-heading-accent font-medium">1M+ Users</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border">
                <Zap className="h-3 w-3 text-primary" />
                <span className="text-primary font-medium">Free Forever</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border">
                <Target className="h-3 w-3 text-primary" />
                <span className="text-primary font-medium">Professional</span>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Ad - After Stats */}
          <div className="block lg:hidden my-6">
            <div className="text-center mb-2">
              <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
            </div>
            <AdSpace slot="content" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
          </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-4 lg:gap-8">
          <div className="space-y-4 lg:space-y-6">
            <ConversionCalculator />
            

              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                  <div className="p-1.5 bg-primary rounded-lg">
                    <BookOpen className="h-4 w-4 text-foreground" />
                  </div>
                  Why Use Our Conversion Calculator?
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Professional Accuracy</h3>
                    <p className="text-xs text-foreground">Precise mathematical formulas with 6 decimal place accuracy for professional applications.</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Real-Time Currency</h3>
                    <p className="text-xs text-foreground">Live exchange rates updated every few minutes for current conversion values.</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Comprehensive Coverage</h3>
                    <p className="text-xs text-foreground">1000+ units across 12+ categories with metric, imperial, and international systems.</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">No Limits</h3>
                    <p className="text-xs text-foreground">Unlimited conversions for free without any restrictions or hidden costs.</p>
                  </div>
                </div>
              </div>


              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                  <div className="p-1.5 bg-primary rounded-lg">
                    <Calculator className="h-4 w-4 text-foreground" />
                  </div>
                  The Science Behind Unit Conversion
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Mathematical Precision</h3>
                    <p className="text-xs text-foreground">Uses precise conversion factors from international standards with 6 decimal place accuracy.</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">International Standards</h3>
                    <p className="text-xs text-foreground">Adheres to SI, imperial, and US customary units for global compatibility.</p>
                </div>
              </div>
            </div>

              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                  <div className="p-1.5 bg-primary rounded-lg">
                    <Users className="h-4 w-4 text-foreground" />
                  </div>
                  Professional Applications
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Engineering & Construction</h3>
                    <p className="text-xs text-foreground">Structural calculations, material conversions, international specifications</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Scientific Research</h3>
                    <p className="text-xs text-foreground">Laboratory measurements, data analysis, research collaboration</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Business & Finance</h3>
                    <p className="text-xs text-foreground">Currency conversion, supply chain, international trade</p>
                  </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">Education & Learning</h3>
                    <p className="text-xs text-foreground">Student assignments, STEM support, research projects</p>
                  </div>
                </div>
              </div>


            <div className="mt-8 space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                  <div className="p-1.5 bg-primary rounded-lg">
                    <BookOpen className="h-4 w-4 text-foreground" />
                    </div>
                  How to Use Our Calculator
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">1. Select Category</h3>
                    <p className="text-xs text-foreground">Choose from 12+ conversion categories</p>
                    </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">2. Choose Units</h3>
                    <p className="text-xs text-foreground">Select from and to units</p>
                    </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">3. Enter Value</h3>
                    <p className="text-xs text-foreground">Input the value to convert</p>
                    </div>
                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-1 text-sm">4. Get Results</h3>
                    <p className="text-xs text-foreground">View instant conversion results</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-heading-accent-border dark:bg-heading-accent-border/30 rounded-lg">
                    <Calculator className="h-5 w-5 text-heading-accent dark:text-heading-accent" />
                  </div>
                  Conversion Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { category: "Length", icon: Ruler, desc: "Meters, feet, inches, kilometers, miles", example: "1 meter = 3.281 feet" },
                    { category: "Weight", icon: Weight, desc: "Kilograms, pounds, ounces, tons", example: "1 kg = 2.205 pounds" },
                    { category: "Temperature", icon: Thermometer, desc: "Celsius, Fahrenheit, Kelvin", example: "0°C = 32°F" },
                    { category: "Currency", icon: DollarSign, desc: "USD, EUR, GBP, JPY, INR", example: "1 USD = 0.85 EUR" },
                    { category: "Time", icon: Clock, desc: "Seconds, minutes, hours, days", example: "1 hour = 3600 seconds" },
                    { category: "Area", icon: Square, desc: "Square meters, square feet, acres", example: "1 m² = 10.764 ft²" },
                    { category: "Volume", icon: Volume, desc: "Liters, gallons, cubic meters", example: "1 liter = 0.264 gallons" },
                    { category: "Speed", icon: Gauge, desc: "km/h, mph, m/s, knots", example: "1 km/h = 0.621 mph" },
                    { category: "Power", icon: Zap, desc: "Watts, horsepower, kilowatts", example: "1 kW = 1.341 HP" },
                    { category: "Energy", icon: Globe, desc: "Joules, calories, kWh, BTU", example: "1 kWh = 3412 BTU" },
                    { category: "Pressure", icon: Target, desc: "Pascal, bar, psi, atm", example: "1 bar = 14.504 psi" },
                    { category: "Data", icon: Calculator, desc: "Bytes, KB, MB, GB, TB", example: "1 GB = 1024 MB" }
                  ].map(({ category, icon: Icon, desc, example }) => (
                    <div key={category} className="p-4 bg-card rounded-lg border border-border dark:border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-slate-800 dark:text-foreground">{category}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">{desc}</p>
                      <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-card border border-border rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  Why Use Our Advanced Conversion Calculator?
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Precision & Accuracy</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">International Standards Compliance</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">Our calculator adheres to NIST, BIPM, and ISO standards for unit conversions, ensuring accuracy for professional applications.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">6 Decimal Place Precision</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">All conversions maintain high precision for scientific, engineering, and financial calculations.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">Real-time Currency Rates</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">Currency conversions use current exchange rates for accurate financial calculations.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Comprehensive Coverage</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">1000+ Unit Combinations</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">Covering metric, imperial, US customary, and international unit systems.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">12+ Conversion Categories</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure, and data storage.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-slate-800 dark:text-foreground">Professional Applications</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">Perfect for engineering, science, business, cooking, travel, and everyday calculations.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-heading-accent-border dark:bg-heading-accent-border/30 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-heading-accent dark:text-heading-accent" />
                  </div>
                  How to Use Our Advanced Conversion Calculator
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <h3 className="text-lg font-semibold text-heading-accent">Select Category</h3>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Choose from 12+ conversion categories including length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure, and data storage.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <h3 className="text-lg font-semibold text-heading-accent">Choose Units</h3>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Select your source unit (From) and target unit (To) from the comprehensive dropdown menus with 1000+ unit options.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary text-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <h3 className="text-lg font-semibold text-heading-accent">Enter Value</h3>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Input the value you want to convert and get instant, accurate results with 6 decimal place precision.</p>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Pro Tips for Best Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Use decimal notation for precise calculations</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Check conversion history for repeated calculations</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Use swap function to quickly reverse conversions</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Copy results for easy sharing and documentation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Bookmark for quick access to your favorite conversions</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">Verify results with multiple conversion sources for critical calculations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-card border border-border rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  Common Use Cases for Conversion Calculator
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-heading-accent">Professional & Business</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Engineering calculations and measurements</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>International business and currency conversion</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Scientific research and data analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Construction and architectural planning</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-heading-accent">Education & Personal</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Student homework and assignments</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Travel planning and currency exchange</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Cooking and recipe conversions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-foreground" />
                        <span>Fitness and health measurements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-foreground" />
                  </div>
                  Common Conversion Problems & Solutions
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Cooking & Baking Conversions</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Recipe calls for cups, but you only have grams</h4>
                          <p className="text-sm text-foreground mb-2">Solution: Use our weight converter to convert cups to grams accurately.</p>
                          <div className="text-xs text-foreground">
                            <strong>Example:</strong> 1 cup flour = 120g, 1 cup sugar = 200g, 1 cup butter = 227g
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Oven temperature in wrong units</h4>
                          <p className="text-sm text-foreground mb-2">Solution: Convert between Celsius and Fahrenheit instantly.</p>
                          <div className="text-xs text-foreground">
                            <strong>Example:</strong> 180°C = 356°F, 350°F = 177°C
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Travel & International Conversions</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Speed limits in different units</h4>
                          <p className="text-sm text-foreground mb-2">Solution: Convert between km/h and mph for safe driving.</p>
                          <div className="text-xs text-foreground">
                            <strong>Example:</strong> 100 km/h = 62 mph, 70 mph = 113 km/h
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Currency exchange confusion</h4>
                          <p className="text-sm text-foreground mb-2">Solution: Real-time currency conversion with current exchange rates.</p>
                          <div className="text-xs text-heading-accent dark:text-heading-accent">
                            <strong>Example:</strong> $100 USD = €85 EUR, £100 GBP = $127 USD
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Engineering & Construction</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Metric vs Imperial measurements</h4>
                          <p className="text-sm text-foreground mb-2">Solution: Convert between metric and imperial systems for international projects.</p>
                          <div className="text-xs text-foreground">
                            <strong>Example:</strong> 1 meter = 3.281 feet, 1 inch = 2.54 cm
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Problem: Pressure unit confusion</h4>
                          <p className="text-sm text-heading-accent mb-2">Solution: Convert between Pascal, bar, psi, and atmosphere units.</p>
                          <div className="text-xs text-foreground">
                            <strong>Example:</strong> 1 bar = 14.504 psi, 1 atm = 101,325 Pa
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Scientific & Medical</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-2">Problem: Temperature scale confusion</h4>
                          <p className="text-sm text-muted-foreground mb-2">Solution: Convert between Celsius, Fahrenheit, and Kelvin scales.</p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Example:</strong> 37°C = 98.6°F, 0°C = 273.15K
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-2">Problem: Dosage calculations</h4>
                          <p className="text-sm text-muted-foreground mb-2">Solution: Convert between mg, g, ml, and other medical units.</p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Example:</strong> 1 g = 1000 mg, 1 ml = 1 cc
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-heading-accent-border dark:bg-heading-accent-border/30 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-heading-accent dark:text-heading-accent" />
                  </div>
                  Real-World Conversion Examples & Case Studies
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Case Study 1: International Recipe Conversion</h3>
                      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-2">Scenario: Converting European Recipe to US Measurements</h4>
                        <p className="text-sm text-foreground mb-3">
                          Sarah found a French recipe calling for 250g flour, 200ml milk, and 180°C oven temperature. 
                          She needed to convert these to US measurements.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground">250g flour</span>
                            <span className="font-mono text-foreground">≈ 2 cups</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">200ml milk</span>
                            <span className="font-mono text-foreground">≈ 0.85 cups</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">180°C oven</span>
                            <span className="font-mono text-foreground">≈ 356°F</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Case Study 2: Construction Project</h3>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-2">Scenario: Converting Building Plans from Metric to Imperial</h4>
                        <p className="text-sm text-foreground mb-3">
                          An architect needed to convert building dimensions from meters to feet for a US construction project.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground">3.5 meters height</span>
                            <span className="font-mono text-foreground">≈ 11.48 feet</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">50 m² area</span>
                            <span className="font-mono text-foreground">≈ 538 ft²</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">2.5 tons concrete</span>
                            <span className="font-mono text-foreground">≈ 5,512 lbs</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Case Study 3: Travel Planning</h3>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-2">Scenario: Planning a European Road Trip</h4>
                        <p className="text-sm text-foreground mb-3">
                          Mark was planning a road trip through Europe and needed to understand speed limits, distances, and fuel consumption.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-heading-accent dark:text-heading-accent">130 km/h speed limit</span>
                            <span className="font-mono text-foreground">≈ 81 mph</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-heading-accent dark:text-heading-accent">500 km distance</span>
                            <span className="font-mono text-foreground">≈ 311 miles</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-heading-accent dark:text-heading-accent">€1.50 per liter</span>
                            <span className="font-mono text-foreground">≈ $6.50 per gallon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Case Study 4: Scientific Research</h3>
                      <div className="p-4 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-2">Scenario: Laboratory Temperature Conversion</h4>
                        <p className="text-sm text-foreground mb-3">
                          A researcher needed to convert experimental temperatures between different scales for international collaboration.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground">25°C room temp</span>
                            <span className="font-mono text-foreground">= 77°F, 298K</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">100°C boiling</span>
                            <span className="font-mono text-foreground">= 212°F, 373K</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground">0°C freezing</span>
                            <span className="font-mono text-foreground">= 32°F, 273K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Target className="h-5 w-5 text-foreground" />
                  </div>
                  Expert Conversion Tips & Tricks
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Quick Mental Math Tricks</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Temperature Conversion Shortcuts</h4>
                          <div className="space-y-2 text-sm text-foreground">
                            <p><strong>Celsius to Fahrenheit:</strong> Double it, add 30 (rough estimate)</p>
                            <p><strong>Fahrenheit to Celsius:</strong> Subtract 30, divide by 2</p>
                            <p><strong>Example:</strong> 20°C ≈ 70°F (20×2+30=70)</p>
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Length Conversion Tricks</h4>
                          <div className="space-y-2 text-sm text-foreground">
                            <p><strong>Meters to Feet:</strong> Multiply by 3, add 10%</p>
                            <p><strong>Kilometers to Miles:</strong> Multiply by 0.6</p>
                            <p><strong>Example:</strong> 10m ≈ 33ft (10×3+3=33)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Professional Accuracy Tips</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Always Double-Check Critical Conversions</h4>
                          <div className="space-y-2 text-sm text-foreground">
                            <p>• Use multiple sources for important calculations</p>
                            <p>• Verify with reverse conversion</p>
                            <p>• Check against known reference points</p>
                            <p>• Document your conversion factors</p>
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Common Conversion Mistakes to Avoid</h4>
                          <div className="space-y-2 text-sm text-foreground">
                            <p>• Mixing up multiplication and division</p>
                            <p>• Using outdated conversion factors</p>
                            <p>• Forgetting to include units in final answer</p>
                            <p>• Rounding too early in calculations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Industry-Specific Conversion Tips</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Cooking & Baking</h4>
                        <ul className="text-sm text-foreground space-y-1">
                          <li>• 1 cup = 240ml (liquid)</li>
                          <li>• 1 cup flour = 120g</li>
                          <li>• 1 cup sugar = 200g</li>
                          <li>• 1 tablespoon = 15ml</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Construction</h4>
                        <ul className="text-sm text-foreground space-y-1">
                          <li>• 1 meter = 3.281 feet</li>
                          <li>• 1 inch = 2.54 cm</li>
                          <li>• 1 square meter = 10.764 sq ft</li>
                          <li>• 1 cubic meter = 35.315 cu ft</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Travel</h4>
                        <ul className="text-sm text-foreground space-y-1">
                          <li>• 1 km = 0.621 miles</li>
                          <li>• 1 liter = 0.264 gallons</li>
                          <li>• 1 kg = 2.205 pounds</li>
                          <li>• 1 km/h = 0.621 mph</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-card border border-border rounded-lg">
                    <History className="h-5 w-5 text-primary" />
                  </div>
                  The History & Evolution of Unit Conversion
                </h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Ancient Measurement Systems</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-2">Egyptian Cubit (2700 BCE)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Based on the length from elbow to fingertip, approximately 52.4 cm or 20.6 inches.</p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Modern equivalent:</strong> 1 cubit = 0.524 meters
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-2">Roman Foot (753 BCE)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Standardized foot measurement, approximately 29.6 cm or 11.65 inches.</p>
                          <div className="text-xs text-muted-foreground">
                            <strong>Modern equivalent:</strong> 1 Roman foot = 0.296 meters
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-heading-accent">Modern Standardization</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">Metric System (1795)</h4>
                          <p className="text-sm text-foreground mb-2">Introduced during the French Revolution, based on decimal system and natural constants.</p>
                          <div className="text-xs text-foreground">
                            <strong>Key innovation:</strong> 1 meter = 1/10,000,000 of Earth's meridian
                          </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2">International System (1960)</h4>
                          <p className="text-sm text-foreground mb-2">SI units established for global scientific and commercial use.</p>
                          <div className="text-xs text-heading-accent dark:text-heading-accent">
                            <strong>Current standard:</strong> 7 base units define all measurements
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold text-heading-accent mb-4">Why Unit Conversion Matters Today</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Global Trade</h4>
                        <p className="text-sm text-muted-foreground">
                          International commerce requires accurate conversion between metric and imperial systems for seamless transactions.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Scientific Research</h4>
                        <p className="text-sm text-muted-foreground">
                          Global collaboration in research demands precise unit conversion for data sharing and replication.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-heading-accent">Technology</h4>
                        <p className="text-sm text-muted-foreground">
                          Modern technology requires conversion between digital units, physical measurements, and international standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-card border border-border rounded-lg">
                    <Calculator className="h-5 w-5 text-primary" />
                  </div>
                  Complete Conversion Formulas & Examples
                </h2>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-heading-accent">Length Conversions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Metric to Imperial</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-heading-accent dark:text-heading-accent mb-2">
                              1 meter = 3.281 feet
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 5 meters = 16.405 feet
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-heading-accent dark:text-heading-accent mb-2">
                              1 kilometer = 0.621 miles
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 10 km = 6.21 miles
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-heading-accent dark:text-heading-accent mb-2">
                              1 centimeter = 0.394 inches
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 25 cm = 9.84 inches
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Imperial to Metric</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 foot = 0.305 meters
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 6 feet = 1.83 meters
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 mile = 1.609 kilometers
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 5 miles = 8.05 km
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 inch = 2.54 centimeters
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 12 inches = 30.48 cm
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-heading-accent">Weight Conversions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Common Weight Conversions</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 kilogram = 2.205 pounds
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 70 kg = 154.35 pounds
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 pound = 0.454 kilograms
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 150 pounds = 68.04 kg
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 ounce = 28.35 grams
                            </div>
                            <div className="text-xs text-foreground">
                              Example: 8 ounces = 226.8 grams
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Cooking Conversions</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 cup flour = 120 grams
                            </div>
                            <div className="text-xs text-foreground">
                              Baking measurements
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 tablespoon = 15 milliliters
                            </div>
                            <div className="text-xs text-foreground">
                              Liquid measurements
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 teaspoon = 5 milliliters
                            </div>
                            <div className="text-xs text-foreground">
                              Small measurements
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-heading-accent">Temperature Conversions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Celsius to Fahrenheit</h4>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <div className="text-sm font-mono text-foreground mb-2">
                            °F = (°C × 9/5) + 32
                          </div>
                          <div className="text-xs text-foreground mb-3">
                            Example: 25°C = (25 × 9/5) + 32 = 77°F
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span>0°C =</span>
                              <span className="font-mono">32°F (freezing point)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>20°C =</span>
                              <span className="font-mono">68°F (room temperature)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>100°C =</span>
                              <span className="font-mono">212°F (boiling point)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Fahrenheit to Celsius</h4>
                        <div className="p-4 bg-card rounded-lg border border-border">
                          <div className="text-sm font-mono text-foreground mb-2">
                            °C = (°F - 32) × 5/9
                          </div>
                          <div className="text-xs text-foreground mb-3">
                            Example: 86°F = (86 - 32) × 5/9 = 30°C
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span>32°F =</span>
                              <span className="font-mono">0°C (freezing point)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>68°F =</span>
                              <span className="font-mono">20°C (room temperature)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>212°F =</span>
                              <span className="font-mono">100°C (boiling point)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-heading-accent">Area & Volume Conversions</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Area Conversions</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 square meter = 10.764 square feet
                            </div>
                            <div className="text-xs text-heading-accent">
                              Example: 50 m² = 538.2 ft²
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-foreground mb-2">
                              1 acre = 4,047 square meters
                            </div>
                            <div className="text-xs text-heading-accent">
                              Example: 2 acres = 8,094 m²
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-slate-700 dark:text-foreground">Volume Conversions</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-heading-accent mb-2">
                              1 liter = 0.264 gallons
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Example: 10 liters = 2.64 gallons
                            </div>
                          </div>
                          <div className="p-4 bg-card rounded-lg border border-border">
                            <div className="text-sm font-mono text-heading-accent mb-2">
                              1 gallon = 3.785 liters
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Example: 5 gallons = 18.93 liters
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Award className="h-5 w-5 text-foreground" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How accurate are the conversion calculations?",
                      a: "Our calculator uses precise mathematical formulas and provides results accurate to 6 decimal places for most conversions, ensuring professional-grade accuracy."
                    },
                    {
                      q: "Do you support real-time currency conversion?",
                      a: "Yes, our currency converter uses live exchange rates updated every few minutes to provide the most current conversion values."
                    },
                    {
                      q: "Can I convert between different measurement systems?",
                      a: "Absolutely! Our calculator supports metric, imperial, US customary, and international measurement systems with seamless conversion between them."
                    },
                    {
                      q: "How do I convert historical currency values?",
                      a: "While we focus on current rates, you can use our calculator with historical exchange rates by inputting the specific rate you need."
                    },
                    {
                      q: "What makes this conversion calculator different from others?",
                      a: "Our calculator offers 1000+ unit combinations across 12+ categories, 6 decimal place precision, real-time currency rates, conversion history, and professional-grade accuracy following international standards."
                    },
                    {
                      q: "Can students use this calculator for homework and exams?",
                      a: "Yes! Our calculator is perfect for students learning about measurement systems, dimensional analysis, and unit conversions. It includes educational content and examples that help students understand the underlying concepts."
                    },
                    {
                      q: "Is the conversion calculator free to use?",
                      a: "Absolutely! Our conversion calculator is completely free to use with no registration required. You can access it anytime from any device and convert between units instantly."
                    },
                    {
                      q: "What types of conversions are supported?",
                      a: "We support 12+ categories including length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure, and data storage. We cover both metric and imperial systems with 1000+ unit combinations."
                    },
                    {
                      q: "How do I use the conversion history feature?",
                      a: "The conversion history automatically saves your recent conversions. Click 'Show History' to view past calculations, and click on any history item to reload those values for quick re-conversion."
                    },
                    {
                      q: "Are the conversion factors based on official standards?",
                      a: "Yes, all conversion factors are based on official international standards including NIST, BIPM, and ISO standards, ensuring accuracy for professional and scientific applications."
                    },
                    {
                      q: "What's the difference between metric and imperial weight measurements?",
                      a: "Metric uses kilograms, grams, and tonnes while imperial uses pounds, ounces, and tons. Our calculator seamlessly converts between these systems - for instance, 1 kilogram equals 2.20462 pounds, and 1 pound equals 0.453592 kilograms."
                    },
                    {
                      q: "How do I convert Celsius to Fahrenheit for cooking?",
                      a: "For cooking conversions, use the formula: °F = (°C × 9/5) + 32. Our calculator handles this automatically - 180°C becomes 356°F (perfect for baking), and 200°C becomes 392°F (ideal for roasting)."
                    },
                    {
                      q: "Can I convert between different currency pairs like USD to EUR?",
                      a: "Yes! Our currency converter supports all major currency pairs including USD to EUR, GBP to USD, JPY to USD, INR to USD, and many more. We use real-time exchange rates updated every few minutes for accurate conversions."
                    },
                    {
                      q: "Can I convert between different power units like watts to horsepower?",
                      a: "Absolutely! Our calculator converts between watts, horsepower, kilowatts, and BTUs. For example, 1 horsepower equals 745.7 watts, and 1 kilowatt equals 1.341 horsepower. Perfect for automotive, engineering, and electrical applications."
                    },
                    {
                      q: "How do I convert between different energy units like joules to calories?",
                      a: "1 calorie equals 4.184 joules, and 1 joule equals 0.239 calories. Our calculator handles all energy conversions including joules, calories, kilowatt-hours, and BTUs - essential for physics, chemistry, and engineering calculations."
                    },
                    {
                      q: "What's the difference between PSI and Pascal pressure units?",
                      a: "PSI (pounds per square inch) is imperial while Pascal is metric. 1 PSI equals 6,894.76 Pascals. Our calculator converts between PSI, Pascal, Bar, Atmosphere, and Torr - crucial for engineering, automotive, and scientific applications."
                    },
                    {
                      q: "How do I convert between different data storage units like bytes to gigabytes?",
                      a: "1 gigabyte equals 1,073,741,824 bytes (binary) or 1,000,000,000 bytes (decimal). Our calculator handles both binary and decimal systems, converting between bits, bytes, KB, MB, GB, TB, PB, and larger units."
                    },
                    {
                      q: "Can I convert between different time units like seconds to hours?",
                      a: "Yes! Our calculator converts between seconds, minutes, hours, days, weeks, months, years, and even smaller units like milliseconds, microseconds, and nanoseconds. Perfect for scientific calculations and time management."
                    },
                    {
                      q: "How accurate are temperature conversions between Celsius, Fahrenheit, and Kelvin?",
                      a: "Our temperature conversions are mathematically precise. The formulas are: °F = (°C × 9/5) + 32, K = °C + 273.15, and °C = (5/9) × (°F - 32). We handle all temperature scales including Rankine, Réaumur, and Delisle."
                    },
                    {
                      q: "What's the best way to convert between metric and imperial length measurements?",
                      a: "Our calculator provides seamless conversion between metric (meters, centimeters, millimeters) and imperial (feet, inches, yards, miles) systems. For example, 1 meter = 3.28084 feet, and 1 foot = 0.3048 meters. Essential for international projects and travel."
                    },
                    {
                      q: "How do I convert between different volume units for cooking and baking?",
                      a: "Our calculator handles all cooking measurements including cups, tablespoons, teaspoons, fluid ounces, milliliters, and liters. For example, 1 cup = 236.588 milliliters, and 1 tablespoon = 14.7868 milliliters. Perfect for international recipes and professional kitchens."
                    },
                    {
                      q: "Can I convert between different area units for land measurement?",
                      a: "Yes! Our calculator converts between square meters, square feet, acres, hectares, square yards, and square miles. For example, 1 acre = 4,046.86 square meters, and 1 hectare = 2.47105 acres. Essential for real estate, agriculture, and land surveying."
                    },
                    {
                      q: "How do I convert between different speed units for aviation and maritime use?",
                      a: "Our calculator handles all speed conversions including km/h, mph, knots, m/s, and fps. For example, 1 knot = 1.852 km/h, and 1 mph = 1.60934 km/h. Perfect for pilots, sailors, and transportation professionals."
                    },
                    {
                      q: "What's the difference between US and UK gallon measurements?",
                      a: "US gallon = 3.78541 liters, UK gallon = 4.54609 liters. Our calculator handles both systems, making it perfect for international trade, fuel consumption calculations, and cross-border commerce."
                    },
                    {
                      q: "How do I convert between different weight units for precious metals?",
                      a: "Our calculator includes troy ounces, troy pounds, carats, and grains for precious metals. For example, 1 troy ounce = 31.1035 grams, and 1 carat = 0.2 grams. Essential for jewelry, numismatics, and precious metal trading."
                    },
                    {
                      q: "Can I convert between different pressure units for scuba diving?",
                      a: "Yes! Our calculator converts between PSI, Bar, Atmosphere, and Torr. For example, 1 atmosphere = 14.696 PSI, and 1 Bar = 14.5038 PSI. Essential for diving, aviation, and high-altitude activities."
                    },
                    {
                      q: "How do I convert between different energy units for solar panel calculations?",
                      a: "Our calculator handles all energy conversions including watts, kilowatts, BTUs, and kilowatt-hours. For example, 1 kilowatt-hour = 3,412 BTU, and 1 watt = 3.412 BTU/hour. Perfect for renewable energy calculations and electrical engineering."
                    },
                    {
                      q: "What's the best way to convert between different data transfer rates?",
                      a: "Our calculator converts between bits per second, bytes per second, kilobits per second, megabits per second, and gigabits per second. For example, 1 Mbps = 1,000,000 bits per second. Essential for network engineering and internet speed calculations."
                    },
                    {
                      q: "How do I convert between different temperature scales for scientific research?",
                      a: "Our calculator supports all temperature scales including Celsius, Fahrenheit, Kelvin, Rankine, Réaumur, Delisle, Newton, and Rømer. For example, absolute zero is 0K, -273.15°C, or -459.67°F. Perfect for physics, chemistry, and engineering research."
                    },
                    {
                      q: "Can I convert between different angle measurements for navigation?",
                      a: "Yes! Our calculator converts between degrees, radians, gradians, and turns. For example, 1 radian = 57.2958 degrees, and 1 turn = 360 degrees. Essential for navigation, astronomy, and engineering calculations."
                    },
                    {
                      q: "What's the difference between short ton, long ton, and metric ton?",
                      a: "Short ton (US) = 2,000 pounds, long ton (UK) = 2,240 pounds, metric ton = 1,000 kilograms. Our calculator handles all three systems, making it perfect for international trade, shipping, and industrial applications."
                    },
                    {
                      q: "Can I convert between different frequency units for radio and electronics?",
                      a: "Yes! Our calculator converts between hertz, kilohertz, megahertz, gigahertz, and terahertz. For example, 1 MHz = 1,000,000 Hz, and 1 GHz = 1,000 MHz. Perfect for radio frequency calculations and electronics engineering."
                    },
                    {
                      q: "How do I convert between different magnetic field units?",
                      a: "Our calculator handles magnetic field conversions including tesla, gauss, weber, and henry. For example, 1 tesla = 10,000 gauss, and 1 weber = 1 tesla × square meter. Essential for physics and electrical engineering applications."
                    },
                    {
                      q: "What's the best way to convert between different radiation units?",
                      a: "Our calculator converts between becquerel, curie, gray, sievert, and rem. For example, 1 curie = 37,000,000,000 becquerel, and 1 gray = 100 rad. Essential for medical physics, nuclear engineering, and radiation safety calculations."
                    }
                  ].map(({ q, a }, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg border border-border dark:border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm sm:text-base">{q}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="sticky top-32 space-y-6 hidden lg:block">
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
