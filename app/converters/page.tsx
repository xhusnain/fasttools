import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Online Converters - Text, Length, Currency & More | FastTools",
  description:
    "Free online converter tools for text case, length, file size, currency, time zones, and temperature. Fast, accurate, and easy to use conversion tools.",
  keywords:
    "converter tools, text case converter, length converter, file size converter, currency converter, timezone converter, temperature converter, unit converter, online tools",
  openGraph: {
    title: "Free Online Converters - FastTools",
    description: "Convert text case, length, file size, currency, time zones, and temperature with our free tools.",
    type: "website",
  },
}

export default function ConvertersPage() {
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
                key={converter.href}
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Converter Tools?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our converter tools are designed to help you quickly and accurately convert between different units, 
                formats, and measurements. Whether you're working on a project, traveling, or studying, our tools provide 
                the precision and ease of use you need.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Free to use with no registration required</li>
                <li>Accurate conversions with up-to-date data</li>
                <li>Mobile-friendly and responsive design</li>
                <li>Fast, instant results</li>
                <li>Support for multiple unit systems</li>
                <li>Copy and export results easily</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Converter Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular converter tools that help thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Text Case Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert text between uppercase, lowercase, title case, camelCase, and more.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Currency Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between major world currencies with real-time exchange rates.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Length Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between meters, feet, inches, centimeters, and other length units.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Temperature Converter</h3>
                  <p className="text-sm text-muted-foreground">Convert between Celsius, Fahrenheit, and Kelvin temperature scales.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
