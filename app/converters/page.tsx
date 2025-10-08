import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer, ArrowRight } from "lucide-react"
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
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Text Case Converter",
          description: "Convert text between uppercase, lowercase, title case, camelCase, and snake_case",
          url: "https://fasttools.store/converters/text-case"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Length Converter",
          description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units",
          url: "https://fasttools.store/converters/length"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Currency Converter",
          description: "Convert between major world currencies with real-time exchange rates",
          url: "https://fasttools.store/converters/currency"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Temperature Converter",
          description: "Convert between Celsius, Fahrenheit, and Kelvin temperature scales",
          url: "https://fasttools.store/converters/temperature"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "File Size Converter",
          description: "Convert between bytes, KB, MB, GB, and TB for file and storage calculations",
          url: "https://fasttools.store/converters/file-size"
        },
        {
          "@type": "ListItem",
          position: 6,
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
    },
    {
      title: "Length Converter",
      description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units.",
      icon: Ruler,
      href: "/converters/length",
    },
    {
      title: "File Size Converter",
      description: "Convert between bytes, KB, MB, GB, and TB. Perfect for understanding file and storage sizes.",
      icon: HardDrive,
      href: "/converters/file-size",
    },
    {
      title: "Currency Converter",
      description: "Convert between major world currencies including USD, EUR, GBP, JPY, INR, and more.",
      icon: DollarSign,
      href: "/converters/currency",
    },
    {
      title: "Time Zone Converter",
      description:
        "Convert time between different time zones worldwide. Perfect for scheduling international meetings.",
      icon: Globe,
      href: "/converters/timezone",
    },
    {
      title: "Temperature Converter",
      description: "Convert between Celsius and Fahrenheit temperature scales quickly and accurately.",
      icon: Thermometer,
      href: "/converters/temperature",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Online Converters</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert text, measurements, currencies, and more with our free online converter tools. Fast, accurate, and
              easy to use.
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {converters.map((converter, index) => (
              <Card
                key={`converters-${converter.href}`}
                className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <converter.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground mb-3">{converter.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                    {converter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all">
                    <Link href={converter.href}>
                      Use Converter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Ad Space - Between Tools and Content */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          {/* SEO Content Section */}
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Free Online Converter Tools?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our comprehensive collection of <strong>converter tools</strong> is designed to help you quickly and accurately convert between different units, 
                formats, and measurements. Whether you're working on a project, traveling internationally, or studying, our <strong>free conversion tools</strong> provide 
                the precision and ease of use you need for any conversion task.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Free to use</strong> with no registration required</li>
                <li><strong>Accurate conversions</strong> with up-to-date data and real-time rates</li>
                <li><strong>Mobile-friendly</strong> and responsive design for all devices</li>
                <li><strong>Fast, instant results</strong> with no waiting time</li>
                <li><strong>Support for multiple unit systems</strong> including metric, imperial, and international standards</li>
                <li><strong>Copy and export results</strong> easily for your projects</li>
                <li><strong>No download required</strong> - all tools work in your browser</li>
                <li><strong>Regular updates</strong> to ensure accuracy and reliability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Comprehensive Converter Tool Categories</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>online converter</strong> platform offers specialized tools for every conversion need:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Text & Format Converters</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>text case converter</strong> supports multiple text transformations including uppercase, lowercase, title case, 
                sentence case, camelCase, snake_case, and more. Perfect for developers, writers, and content creators who need 
                consistent text formatting across different platforms and applications.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Measurement & Unit Converters</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Convert between different measurement systems with our <strong>length converter</strong>, <strong>temperature converter</strong>, 
                and <strong>file size converter</strong>. Whether you need to convert meters to feet, Celsius to Fahrenheit, or bytes to gigabytes, 
                our tools provide accurate conversions with support for international standards.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Financial & Currency Converters</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>currency converter</strong> provides real-time exchange rates for major world currencies including USD, EUR, GBP, JPY, INR, 
                and more. Perfect for travelers, international businesses, and anyone dealing with multiple currencies.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">Time & Date Converters</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Convert time between different time zones worldwide with our <strong>timezone converter</strong>. Perfect for scheduling 
                international meetings, coordinating with global teams, and managing time across different regions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Converter Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular <strong>converter tools</strong> that help thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Text Case Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert text between uppercase, lowercase, title case, camelCase, snake_case, and more formatting options.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Currency Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between major world currencies with real-time exchange rates and live market data.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Length Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between meters, feet, inches, centimeters, kilometers, miles, and other length units.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Temperature Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between Celsius, Fahrenheit, and Kelvin temperature scales with precise calculations.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">File Size Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between bytes, KB, MB, GB, TB, and other file size units for storage calculations.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Timezone Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert time between different time zones worldwide for international scheduling and coordination.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Advanced Conversion Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>conversion tools</strong> offer advanced features that make complex conversions simple and accurate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Real-time data updates</strong> for currency and exchange rates</li>
                <li><strong>Multiple unit support</strong> for comprehensive conversion options</li>
                <li><strong>Precision calculations</strong> with decimal support for accurate results</li>
                <li><strong>Historical data</strong> for currency conversion analysis</li>
                <li><strong>Bulk conversion</strong> capabilities for multiple values</li>
                <li><strong>Export functionality</strong> for saving conversion results</li>
                <li><strong>Mobile optimization</strong> for on-the-go conversions</li>
                <li><strong>Offline capability</strong> for basic conversions without internet</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use Cases for Our Converter Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>free online converter tools</strong> serve a wide range of professional and personal needs:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Developers:</strong> Text case conversion for code formatting and variable naming</li>
                <li><strong>Travelers:</strong> Currency conversion for international trips and expenses</li>
                <li><strong>Students:</strong> Unit conversion for science, math, and engineering projects</li>
                <li><strong>Businesses:</strong> Time zone conversion for global team coordination</li>
                <li><strong>Content Creators:</strong> Text formatting for social media and blog posts</li>
                <li><strong>Engineers:</strong> Measurement conversion for technical projects</li>
                <li><strong>Researchers:</strong> Data format conversion for analysis and reporting</li>
                <li><strong>Designers:</strong> File size conversion for optimizing digital assets</li>
              </ul>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
