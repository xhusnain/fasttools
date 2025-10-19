import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer, Calculator, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Online Converters | Text, Length, Currency & More | FastTools",
  description:
    "Free online converter tools for text case, length, file size, currency, time zones, and temperature. Fast, accurate, and easy to use conversion tools with real-time data.",
  keywords: [
    // Primary Keywords (20)
    "converter tools",
    "online converter",
    "free converter tools",
    "unit converter",
    "text case converter",
    "length converter",
    "currency converter",
    "temperature converter",
    "timezone converter",
    "file size converter",
    "unit conversion",
    "measurement converter",
    "format converter",
    "data converter",
    "value converter",
    "calculation converter",
    "conversion calculator",
    "conversion tool",
    "converter online",
    "free conversion tools",
    
    // Secondary Keywords (20)
    "text converter",
    "case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "camelCase converter",
    "snake_case converter",
    "currency exchange",
    "exchange rate converter",
    "money converter",
    "dollar converter",
    "euro converter",
    "pound converter",
    "yen converter",
    "rupee converter",
    "temperature scale",
    "celsius converter",
    "fahrenheit converter",
    "kelvin converter",
    "time zone converter",
    
    // Long-tail Keywords (20)
    "free online text case converter",
    "best currency converter online",
    "free unit converter tool online",
    "online length converter free",
    "free temperature converter tool",
    "timezone converter online free",
    "file size converter free online",
    "text case converter online free",
    "currency converter with live rates",
    "free online unit converter tool",
    "measurement converter online free",
    "format converter free online",
    "data converter tool free",
    "value converter online free",
    "calculation converter free tool",
    "conversion calculator online free",
    "conversion tool free online",
    "converter online free tool",
    "free conversion tools online",
    "online converter tool free",
    
    // Additional SEO Keywords
    "conversion utilities",
    "measurement tools",
    "formatting tools",
    "data transformation",
    "unit conversion tools",
    "conversion services",
    "online conversion",
    "digital conversion",
    "conversion platform",
    "conversion website"
  ],
  openGraph: {
    title: "Free Online Converters | Text, Length, Currency & More | FastTools",
    description: "Convert text case, length, file size, currency, time zones, and temperature with our free tools. Fast, accurate, and easy to use conversion tools.",
    type: "website",
    url: "https://fasttools.store/converters",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Online Converters - Text, Length, Currency & More",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Converters | Text, Length, Currency & More | FastTools",
    description: "Convert text case, length, file size, currency, time zones, and temperature with our free tools. Fast, accurate, and easy to use.",
    images: ["https://fasttools.store/og-image.svg"],
  },
}

export default function ConvertersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Online Converters | Text, Length, Currency & More | FastTools",
    description: "Free online converter tools for text case, length, file size, currency, time zones, and temperature. Fast, accurate, and easy to use conversion tools with real-time data.",
    url: "https://fasttools.store/converters",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Converter Tools",
      description: "Comprehensive collection of free online converter tools for text, measurements, currency, and more",
      numberOfItems: 7,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Conversion Calculator",
          description: "Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions",
          url: "https://fasttools.store/calculator/conversion-calculator"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Text Case Converter",
          description: "Convert text between uppercase, lowercase, title case, camelCase, and snake_case",
          url: "https://fasttools.store/converters/text-case"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Length Converter",
          description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units",
          url: "https://fasttools.store/converters/length"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Currency Converter",
          description: "Convert between major world currencies with real-time exchange rates",
          url: "https://fasttools.store/converters/currency"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Temperature Converter",
          description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales",
          url: "https://fasttools.store/converters/temperature"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "File Size Converter",
          description: "Convert between bytes, KB, MB, GB, and TB for file and storage calculations",
          url: "https://fasttools.store/converters/file-size"
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Timezone Converter",
          description: "Convert time between different time zones worldwide for international scheduling",
          url: "https://fasttools.store/converters/timezone"
        }
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Converters",
          item: "https://fasttools.store/converters"
        }
      ]
    },
    about: {
      "@type": "Thing",
      name: "Online Conversion Tools",
      description: "Free online tools for converting text, measurements, currency, and other data formats"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FastTools",
      url: "https://fasttools.store"
    }
  }

  const converters = [
    {
      title: "Text Case Converter",
      description: "Convert text between uppercase, lowercase, title case, sentence case, camelCase, and snake_case.",
      icon: Type,
      href: "/converters/text-case",
      color: "blue"
    },
    {
      title: "Length Converter",
      description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units.",
      icon: Ruler,
      href: "/converters/length",
      color: "green"
    },
    {
      title: "File Size Converter",
      description: "Convert between bytes, KB, MB, GB, and TB. Perfect for understanding file and storage sizes.",
      icon: HardDrive,
      href: "/converters/file-size",
      color: "purple"
    },
    {
      title: "Currency Converter",
      description: "Convert between major world currencies including USD, EUR, GBP, JPY, INR, and more.",
      icon: DollarSign,
      href: "/converters/currency",
      color: "yellow"
    },
    {
      title: "Time Zone Converter",
      description:
        "Convert time between different time zones worldwide. Perfect for scheduling international meetings.",
      icon: Globe,
      href: "/converters/timezone",
      color: "cyan"
    },
    {
      title: "Temperature Converter",
      description: "Convert between Celsius and Fahrenheit temperature scales quickly and accurately.",
      icon: Thermometer,
      href: "/converters/temperature",
      color: "red"
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <div className="relative overflow-hidden">
          {/* Green-focused but vibrant background matching homepage style */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent"></div>
          
          {/* Green-focused floating particles with accent colors */}
          <div className="absolute top-10 left-10 h-4 w-4 bg-green-500 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-green-500/50"></div>
          <div className="absolute top-20 right-20 h-5 w-5 bg-emerald-500 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-emerald-500/50"></div>
          <div className="absolute bottom-20 left-20 h-4 w-4 bg-teal-500 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-teal-500/50"></div>
          <div className="absolute bottom-10 right-10 h-3 w-3 bg-cyan-500 rounded-full animate-bounce animation-delay-1500 shadow-lg shadow-cyan-500/50"></div>
          <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-green-400 rounded-full animate-bounce animation-delay-2000 shadow-lg shadow-green-400/50"></div>
          <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-emerald-400 rounded-full animate-bounce animation-delay-2500 shadow-lg shadow-emerald-400/50"></div>
          
          {/* Green-focused gradient orbs */}
          <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl animate-spin animation-delay-2000"></div>
          <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 rounded-full blur-3xl animate-spin animation-delay-3000"></div>
          
          <div className="container mx-auto px-4 py-8 relative">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Converters", href: "/converters" },
              ]}
            />

            <div className="max-w-6xl mx-auto mt-8 space-y-8">
              {/* Hero Section */}
              <div className="text-center space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30 border border-green-400/50 text-white text-sm font-bold mb-6">
                  <Type className="h-4 w-4 animate-pulse" />
                  <span>Professional Converter Tools</span>
                  <div className="h-2 w-2 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 via-teal-400 via-green-500 to-green-600 leading-tight">
                  All Conversion Tools
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive collection of free online conversion tools designed for professionals, students, 
                  and everyday users. All tools are 100% free, highly accurate, and optimized for both desktop and mobile use.
                </p>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-400/40">
                    <Type className="h-4 w-4" />
                    <span>7+ Tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border border-emerald-400/40">
                    <Globe className="h-4 w-4" />
                    <span>Global Use</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border border-teal-400/40">
                    <Calculator className="h-4 w-4" />
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/25 to-green-600/25 border border-cyan-400/40">
                    <ArrowRight className="h-4 w-4" />
                    <span>Professional</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {converters.map((converter, index) => (
                  <Card
                    key={`converters-${converter.href}`}
                    className="border-2 border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader className="p-4">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-${converter.color}-500/20 to-${converter.color}-600/20 flex items-center justify-center mb-3 border border-${converter.color}-400/30 shadow-lg`}>
                        <converter.icon className={`h-5 w-5 text-${converter.color}-400`} />
                      </div>
                      <CardTitle className="text-base font-bold text-white mb-2">{converter.title}</CardTitle>
                      <CardDescription className="leading-relaxed text-xs text-white/80">
                        {converter.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button asChild className="w-full h-9 text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                        <Link href={converter.href}>
                          Use Converter
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
              </div>

              {/* Understanding How These Tools Work */}
              <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                  <h2 className="text-xl font-bold mb-4 text-white">Understanding How These Conversion Tools Work</h2>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Our conversion tools use advanced algorithms and real-time data processing to deliver 
                    accurate results instantly. Each converter is built with precision-engineered formulas that handle 
                    complex conversions including currency exchange rates, unit measurements, text formatting, and time zone calculations. 
                    All tools are optimized for speed and accuracy, ensuring you get reliable results every time.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 text-white">Real-Time Data Processing</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Currency converters are updated with live exchange rates from major financial markets, while 
                    measurement converters use standardized international units. Text converters handle multiple 
                    formatting styles with precision, and time zone converters account for daylight saving time changes.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 text-white">Precision and Accuracy</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    All conversions are performed with high precision using industry-standard formulas and algorithms. 
                    Temperature conversions use exact mathematical relationships, length conversions support both metric 
                    and imperial systems, and file size conversions handle binary and decimal calculations accurately.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                  <h2 className="text-xl font-bold mb-4 text-white">Advanced Usage Techniques</h2>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Master these professional techniques to get the most out of our conversion tools and make 
                    informed decisions based on accurate data.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 text-white">Professional Development</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Use text case converters for consistent code formatting and variable naming conventions. 
                    Combine currency converters with time zone tools for international business planning. 
                    Use measurement converters for technical documentation and engineering projects.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 text-white">International Business</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Currency converters help with international transactions and expense tracking. Time zone 
                    converters are essential for scheduling global meetings and coordinating with international teams. 
                    Temperature converters assist with weather data analysis and scientific calculations.
                  </p>
                  
                  <h3 className="text-lg font-bold mb-3 text-white">Educational and Personal Use</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Students can use these tools for science projects, math homework, and geography studies. 
                    Travelers benefit from currency and time zone converters for trip planning. Content creators 
                    use text converters for consistent formatting across platforms and social media.
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
          </div>
        </div>
      </div>
    </>
  )
}
