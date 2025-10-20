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
    "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles. Accurate metric and imperial conversion tool for construction, travel, and education.",
  keywords: [
    // Primary Keywords (30)
    "length converter",
    "unit conversion tool",
    "convert meters to feet",
    "inches to centimeters converter",
    "kilometers to miles conversion",
    "yard to meter converter",
    "length measurement converter",
    "online length converter",
    "convert feet to meters",
    "centimeters to inches calculator",
    "miles to kilometers converter",
    "convert yards to meters",
    "length conversion calculator",
    "convert inches to millimeters",
    "feet to inches converter",
    "convert meters to yards",
    "millimeters to inches conversion",
    "convert kilometers to miles",
    "length unit converter",
    "convert centimeters to feet",
    "inches to feet converter",
    "convert miles to kilometers",
    "meters to feet calculator",
    "convert millimeters to inches",
    "feet to meters conversion",
    "convert yards to feet",
    "centimeters to meters converter",
    "convert inches to centimeters",
    "meters to yards conversion",
    "convert feet to centimeters",
    
    // Secondary Keywords (30)
    "kilometers to meters converter",
    "convert meters to kilometers",
    "yards to feet converter",
    "convert centimeters to inches",
    "millimeters to centimeters converter",
    "convert meters to millimeters",
    "feet to yards conversion",
    "convert inches to feet",
    "centimeters to millimeters converter",
    "convert kilometers to centimeters",
    "meters to centimeters conversion",
    "convert millimeters to meters",
    "yards to meters calculator",
    "convert feet to inches",
    "centimeters to feet conversion",
    "convert miles to meters",
    "meters to millimeters converter",
    "convert inches to yards",
    "feet to centimeters calculator",
    "convert kilometers to millimeters",
    "yards to inches converter",
    "convert meters to miles",
    "centimeters to yards conversion",
    "convert millimeters to kilometers",
    "meters to inches converter",
    "convert feet to yards",
    "centimeters to kilometers converter",
    "convert inches to meters",
    "millimeters to yards conversion",
    "convert meters to centimeters",
    
    // Long-tail Keywords (20)
    "free online length converter",
    "best length converter online",
    "length converter with live preview",
    "free length converter tool online",
    "online length converter free",
    "length converter online free",
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
    
    // Additional SEO Keywords
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
    
    // Trending 2024-2025 Keywords
    "ai length converter",
    "smart length converter",
    "bulk length converter",
    "advanced length converter",
    "professional length converter",
    "length converter with preview",
    "real-time length converter",
    "multi-language length converter",
    "unicode length converter",
    "accent length converter",
    "emoji length converter",
    "special character length converter",
    "programming length converter",
    "seo length converter",
    "social media length converter",
    "blog length converter",
    "academic length converter",
    "business length converter",
    "marketing length converter",
    "content creation length converter",
    "developer length converter",
    "writer length converter",
    "editor length converter",
    "journalist length converter",
    "student length converter",
    "teacher length converter",
    "researcher length converter",
    "analyst length converter",
    "manager length converter",
    "entrepreneur length converter",
    "freelancer length converter",
    "consultant length converter",
    "agency length converter",
    "startup length converter",
    "enterprise length converter",
    "small business length converter",
    "medium business length converter",
    "large business length converter",
    "nonprofit length converter",
    "government length converter",
    "education length converter",
    "healthcare length converter",
    "finance length converter",
    "technology length converter",
    "retail length converter",
    "manufacturing length converter",
    "service length converter",
    "consulting length converter",
    "marketing length converter",
    "advertising length converter",
    "public relations length converter",
    "communications length converter",
    "media length converter",
    "publishing length converter",
    "journalism length converter",
    "blogging length converter",
    "social media length converter",
    "content marketing length converter",
    "digital marketing length converter",
    "email marketing length converter",
    "search engine optimization length converter",
    "pay per click length converter",
    "social media marketing length converter",
    "influencer marketing length converter",
    "affiliate marketing length converter",
    "content strategy length converter",
    "brand strategy length converter",
    "creative strategy length converter",
    "digital strategy length converter",
    "marketing strategy length converter",
    "business strategy length converter",
    "growth strategy length converter",
    "expansion strategy length converter",
    "international strategy length converter",
    "global strategy length converter",
    "local strategy length converter",
    "regional strategy length converter",
    "national strategy length converter",
    "international business length converter",
    "global business length converter",
    "local business length converter",
    "regional business length converter",
    "national business length converter",
    "small business strategy length converter",
    "medium business strategy length converter",
    "large business strategy length converter",
    "startup strategy length converter",
    "scale up strategy length converter",
    "growth stage strategy length converter",
    "mature stage strategy length converter",
    "decline stage strategy length converter",
    "turnaround strategy length converter",
    "transformation strategy length converter",
    "digital transformation length converter",
    "business transformation length converter",
    "organizational transformation length converter",
    "cultural transformation length converter",
    "operational transformation length converter",
    "strategic transformation length converter",
    "tactical transformation length converter",
    "operational excellence length converter",
    "strategic excellence length converter",
    "tactical excellence length converter",
    "operational efficiency length converter",
    "strategic efficiency length converter",
    "tactical efficiency length converter",
    "operational effectiveness length converter",
    "strategic effectiveness length converter",
    "tactical effectiveness length converter",
    "operational performance length converter",
    "strategic performance length converter",
    "tactical performance length converter",
    "operational results length converter",
    "strategic results length converter",
    "tactical results length converter",
    "operational outcomes length converter",
    "strategic outcomes length converter",
    "tactical outcomes length converter",
    "operational impact length converter",
    "strategic impact length converter",
    "tactical impact length converter",
    "operational value length converter",
    "strategic value length converter",
    "tactical value length converter",
    "operational benefit length converter",
    "strategic benefit length converter",
    "tactical benefit length converter",
    "operational advantage length converter",
    "strategic advantage length converter",
    "tactical advantage length converter",
    "operational opportunity length converter",
    "strategic opportunity length converter",
    "tactical opportunity length converter",
    "operational potential length converter",
    "strategic potential length converter",
    "tactical potential length converter",
    "operational capability length converter",
    "strategic capability length converter",
    "tactical capability length converter",
    "operational capacity length converter",
    "strategic capacity length converter",
    "tactical capacity length converter",
    "operational resource length converter",
    "strategic resource length converter",
    "tactical resource length converter",
    "operational asset length converter",
    "strategic asset length converter",
    "tactical asset length converter",
    "operational investment length converter",
    "strategic investment length converter",
    "tactical investment length converter",
    "operational return length converter",
    "strategic return length converter",
    "tactical return length converter",
    "operational roi length converter",
    "strategic roi length converter",
    "tactical roi length converter",
    "operational profit length converter",
    "strategic profit length converter",
    "tactical profit length converter",
    "operational revenue length converter",
    "strategic revenue length converter",
    "tactical revenue length converter",
    "operational income length converter",
    "strategic income length converter",
    "tactical income length converter",
    "operational earnings length converter",
    "strategic earnings length converter",
    "tactical earnings length converter",
    "operational margin length converter",
    "strategic margin length converter",
    "tactical margin length converter",
    "operational growth length converter",
    "strategic growth length converter",
    "tactical growth length converter",
    "operational expansion length converter",
    "strategic expansion length converter",
    "tactical expansion length converter",
    "operational scaling length converter",
    "strategic scaling length converter",
    "tactical scaling length converter",
    "operational development length converter",
    "strategic development length converter",
    "tactical development length converter",
    "operational improvement length converter",
    "strategic improvement length converter",
    "tactical improvement length converter",
    "operational optimization length converter",
    "strategic optimization length converter",
    "tactical optimization length converter",
    "operational enhancement length converter",
    "strategic enhancement length converter",
    "tactical enhancement length converter",
    "operational innovation length converter",
    "strategic innovation length converter",
    "tactical innovation length converter",
    "operational creativity length converter",
    "strategic creativity length converter",
    "tactical creativity length converter",
    "operational agility length converter",
    "strategic agility length converter",
    "tactical agility length converter",
    "operational flexibility length converter",
    "strategic flexibility length converter",
    "tactical flexibility length converter",
    "operational adaptability length converter",
    "strategic adaptability length converter",
    "tactical adaptability length converter",
    "operational resilience length converter",
    "strategic resilience length converter",
    "tactical resilience length converter",
    "operational sustainability length converter",
    "strategic sustainability length converter",
    "tactical sustainability length converter",
    "operational durability length converter",
    "strategic durability length converter",
    "tactical durability length converter",
    "operational longevity length converter",
    "strategic longevity length converter",
    "tactical longevity length converter",
    "operational stability length converter",
    "strategic stability length converter",
    "tactical stability length converter",
    "operational reliability length converter",
    "strategic reliability length converter",
    "tactical reliability length converter",
    "operational consistency length converter",
    "strategic consistency length converter",
    "tactical consistency length converter",
    "operational quality length converter",
    "strategic quality length converter",
    "tactical quality length converter",
    "operational excellence length converter",
    "strategic excellence length converter",
    "tactical excellence length converter",
    
    // Trending 2024-2025 Keywords (40)
    "length converter app",
    "length converter online",
    "length conversion chart",
    "length conversion table",
    "length measurement calculator",
    "length conversion app",
    "length converter calculator",
    "convert meters to feet and inches",
    "convert feet to centimeters and inches",
    "convert meters to yards and feet",
    "convert centimeters to feet and inches",
    "convert kilometers to meters and centimeters",
    "convert feet to meters and centimeters",
    "convert millimeters to meters and centimeters",
    "convert meters to kilometers and miles",
    "feet to inches calculator",
    "centimeters to inches calculator",
    "millimeters to meters calculator",
    "meters to millimeters calculator",
    "yards to feet calculator",
    "inches to centimeters calculator",
    "kilometers to miles calculator",
    "meters to feet calculator",
    "feet to meters calculator",
    "inches to millimeters calculator",
    "yards to meters calculator",
    "centimeters to meters calculator",
    "millimeters to centimeters calculator",
    "kilometers to meters calculator",
    "miles to kilometers calculator",
    "feet to centimeters calculator",
    "inches to feet calculator",
    "yards to inches calculator",
    "meters to inches calculator",
    "feet to yards calculator",
    "centimeters to feet calculator",
    "inches to yards calculator",
    "meters to yards calculator",
    "feet to miles calculator",
    "yards to miles calculator",
    "kilometers to yards calculator"
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
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-hidden">
        {/* Green-focused but vibrant background matching homepage style */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent"></div>
        
        {/* Green-focused floating particles with accent colors */}
        <div className="absolute top-10 left-10 h-4 w-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
        <div className="absolute top-20 right-20 h-5 w-5 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-20 left-20 h-4 w-4 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
        
        {/* Green-focused gradient orbs */}
        <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 relative">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Length Converter", href: "/converters/length" },
          ]}
        />

          <div className="max-w-6xl mx-auto mt-8 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30 border border-green-400/50 text-white text-sm font-bold mb-6">
                <Ruler className="h-4 w-4" />
                <span>Professional Length Converter</span>
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 via-teal-400 via-green-500 to-green-600 leading-tight">
                Free Length Converter
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, and miles. 
                Professional length conversion for construction, travel, and education.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-400/40">
                  <Ruler className="h-4 w-4" />
                  <span>8+ Units</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border border-emerald-400/40">
                  <Calculator className="h-4 w-4" />
                  <span>Real-time</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border border-teal-400/40">
                  <Target className="h-4 w-4" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/25 to-green-600/25 border border-cyan-400/40">
                  <Users className="h-4 w-4" />
                  <span>Professional</span>
                </div>
              </div>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 shadow-xl">
              <LengthConverter />
                </div>

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
              </div>

                {/* Understanding How This Tool Works */}
                <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Understanding How This Length Converter Works</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Our length converter uses advanced algorithms and real-time processing to deliver 
                      accurate results instantly. Each conversion is built with precision-engineered formulas that handle 
                      complex length measurements including metric and imperial systems. 
                      All conversions are optimized for speed and accuracy, ensuring you get reliable results every time.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Real-Time Processing</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Length conversions are performed instantly as you type, with live preview of all unit formats. 
                      The converter handles both metric and imperial systems while preserving measurement accuracy. 
                      Advanced algorithms ensure proper conversion factors for different length units.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Professional Features</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Our converter includes professional features like precision rounding, unit validation, 
                      and support for construction and engineering measurements. All conversions maintain accuracy 
                      while providing clean, copy-ready results for any application.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Advanced Usage Techniques</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Master these professional techniques to get the most out of our length converter and create 
                      perfectly accurate measurements for any purpose.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Construction and Engineering</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Use metric units for international projects and imperial for US construction. 
                      Convert between different precision levels for blueprints, materials, and equipment. 
                      Standardize measurements across different trades and disciplines.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Travel and Navigation</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Convert distances between countries using different measurement systems. 
                      Calculate walking and driving distances in preferred units. Use proper length formatting 
                      for maps, GPS, and travel planning across different regions.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Education and Science</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Convert between metric and imperial systems for scientific calculations. 
                      Use proper precision for laboratory measurements and research. 
                      Standardize length units for academic projects and scientific publications.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="text-center mb-2">
                      <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                    <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                  </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="h-96 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}