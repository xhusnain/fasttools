import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Online Converters - Text, Length, Currency & More | ToolifyHub",
  description:
    "Free online converter tools for text case, length, file size, currency, time zones, and temperature. Fast, accurate, and easy to use conversion tools.",
  keywords:
    "converter tools, text case converter, length converter, file size converter, currency converter, timezone converter, temperature converter, unit converter, online tools",
  openGraph: {
    title: "Free Online Converters - ToolifyHub",
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
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Online Converters</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert text, measurements, currencies, and more with our free online converter tools. Fast, accurate, and
              easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {converters.map((converter, index) => (
              <Card
                key={converter.href}
                className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                    <converter.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{converter.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                    {converter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
        </div>
      </div>
    </div>
  )
}
