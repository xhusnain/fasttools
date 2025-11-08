import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer, Calculator, ArrowRight, Search } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Converters: Text, Length, Currency | FastTools",
  description:
    "Free converters for text case, length, file size, currency, time zones, temperature. Fast, accurate, real-time data.",
  keywords: [
    "converter tools",
    "online converter",
    "free converter tools",
    "unit converter",
    "currency converter",
    "text case converter",
    "length converter",
    "temperature converter",
    "timezone converter",
    "file size converter",
    "measurement converter",
    "format converter",
    "data converter",
    "value converter",
    "calculation converter",
    "conversion calculator",
    "conversion tool",
    "converter online",
    "free conversion tools",
    "online conversion",
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
    "temperature scale converter",
    "celsius converter",
    "fahrenheit converter",
    "kelvin converter",
    "time zone converter",
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
    "cash converters alicante",
    "cash converters toowoomba",
    "cash converters palma",
    "cash converters watford",
    "cash converters werribee",
    "cash converters south melbourne",
    "cash converters frankston",
    "cash converters capalaba",
    "cash converters bunbury",
    "cash converters cannington",
    "cash converters caloundra",
    "cash converters benoni",
    "cash converters launceston",
    "cash converters runaway bay",
    "cash converters banbury",
    "cash converters eastbourne",
    "cash converters gosselies",
    "cash converters nz",
    "cash converters loan",
    "cash converters venta recuperable",
    "conversion utilities",
    "measurement tools",
    "formatting tools",
    "data transformation",
    "unit conversion tools",
    "conversion services",
    "digital conversion",
    "conversion platform",
    "conversion website",
    "universal converter online"
  ],
  openGraph: {
    title: "Free Online Converters | Text, Length, Currency & More | FastTools",
    description: "Convert text case, length, file size, currency, time zones, and temperature with our free tools. Fast, accurate, and easy to use conversion tools.",
    type: "website",
    url: "https://www.fasttools.store/converters",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
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
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/converters",
  },
}

export default function ConvertersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Online Converters | Text, Length, Currency & More | FastTools",
    description: "Free online converter tools for text case, length, file size, currency, time zones, and temperature. Fast, accurate, and easy to use conversion tools with real-time data.",
    url: "https://www.fasttools.store/converters",
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
          url: "https://www.fasttools.store/calculator/conversion-calculator"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Text Case Converter",
          description: "Convert text between uppercase, lowercase, title case, camelCase, and snake_case",
          url: "https://www.fasttools.store/converters/text-case"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Length Converter",
          description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units",
          url: "https://www.fasttools.store/converters/length"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Currency Converter",
          description: "Convert between major world currencies with real-time exchange rates",
          url: "https://www.fasttools.store/converters/currency"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Temperature Converter",
          description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales",
          url: "https://www.fasttools.store/converters/temperature"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "File Size Converter",
          description: "Convert between bytes, KB, MB, GB, and TB for file and storage calculations",
          url: "https://www.fasttools.store/converters/file-size"
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Timezone Converter",
          description: "Convert time between different time zones worldwide for international scheduling",
          url: "https://www.fasttools.store/converters/timezone"
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
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Converters",
          item: "https://www.fasttools.store/converters"
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
      url: "https://www.fasttools.store"
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
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
            <Breadcrumbs
              items={[
                { label: "Converters", href: "/converters" },
              ]}
            />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {}
              <div className="text-center space-y-5 animate-fade-in-up">
                <GHeader
                  title="All Conversion Tools"
                  description="Discover our comprehensive collection of free online conversion tools designed for professionals, students, and everyday users. All tools are 100% free, highly accurate, and optimized for both desktop and mobile use."
                  titleSize="medium"
                  descriptionSize="small"
                />
              </div>

              {}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {converters.map((converter, index) => (
                  <Card
                    key={`converters-${converter.href}`}
                    className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="p-3 pb-1">
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-primary/10 border border-primary/20">
                          <converter.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm md:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{converter.title}</CardTitle>
                          <CardDescription className="leading-relaxed text-[11px] md:text-xs text-muted-foreground line-clamp-2">
                            {converter.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <Button asChild className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white group-hover:bg-accent group-hover:text-foreground">
                        <Link href={converter.href} className="flex items-center justify-center gap-1">
                          Use Converter
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-foreground">How Our Converters Actually Work</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Each tool pairs clear UX with verified math. We pre-validate inputs, normalize units, and apply
                    domain‑specific formulas so the output is predictable and repeatable. Wherever live data is needed
                    (for example, currency rates), we reconcile values to consistent time windows to avoid jumpy results.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-heading-accent">Fresh Data, Clean Pipelines</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Exchange rates are refreshed frequently and cached to keep pages fast. Measurement conversions rely on
                    standardized SI and widely accepted imperial definitions. Text utilities preserve whitespace and casing rules
                    precisely, while time tools account for daylight saving and regional offsets by design.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-heading-accent">Built for Accuracy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Calculations use deterministic formulas, sensible rounding, and unit‑aware precision. Temperature, length,
                    and storage conversions respect base definitions; currency values include clear rate sources and timestamps;
                    and every result can be reproduced with the same inputs.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-foreground">Pro Tips and Real‑World Uses</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    A few practical ways to get more from these tools—whether you’re writing, planning, or building.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-heading-accent">Professional Workflow</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Use text case tools to standardize titles and identifiers. Pair currency conversion with time‑zone checks when
                    coordinating invoices across regions. For specs and documentation, rely on unit conversions to keep metrics
                    consistent from draft to delivery.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-heading-accent">Global Operations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Convert prices with transparent rates, then confirm call schedules in the target time zone. Temperature and
                    measurement tools help translate supplier data sheets and logistics requirements without guesswork.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-heading-accent">Study and Everyday Tasks</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Students can cross‑check homework results and lab values quickly. Travelers can plan across currencies and
                    local times. Creators can keep copy consistent across platforms with reliable case and formatting tools.
                  </p>
                </div>

                {}
                {}
                <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Search className="h-4 w-4 text-accent" />
                    </div>
                    Frequently Asked Questions About Converters
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What is a universal converter online and when should I use it?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">A universal converter online is a single place to run common online conversion tasks—unit converter, currency converter, file size converter, and more. Use it when you need quick answers without switching tools; it routes your input to the right calculator automatically.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">How accurate is your currency converter?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Rates are refreshed frequently and normalized to a recent market snapshot. We show clean values for clarity; behind the scenes we compute at higher precision so totals remain consistent even when you recalc minutes later.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Temperature scale converter: °C, °F, and K explained</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our temperature scale converter uses exact formulas: °F = °C × 9/5 + 32 and K = °C + 273.15. Choose Celsius for science and daily weather, Fahrenheit for US contexts, and Kelvin for absolute temperature in scientific work.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Time zone converter: does it handle DST and future dates?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Yes. The time zone converter applies authoritative zone data, so historical and future daylight‑saving rules are accounted for. Planning a meeting months ahead will still map to the correct local time.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">File size converter: MB vs MiB—what should I pick?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Use MB (decimal, 1 MB = 1,000,000 bytes) for storage vendor specs and marketing. Use MiB (binary, 1 MiB = 1,048,576 bytes) for developer tooling and operating systems. Our file size converter supports both and labels them clearly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="hidden lg:block w-72">
              <div className="sticky top-32 space-y-6">
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
