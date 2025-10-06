import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  ArrowRight,
  Calendar,
  Activity,
  DollarSign,
  Percent,
  Clock,
  Wallet,
  TrendingUp,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Free Online Tools & Calculators | Age, BMI, Loan, Tax & More | ToolifyHub",
  description:
    "Browse 50+ free online tools including age calculator, BMI calculator, loan EMI calculator, tax calculator, percentage calculator, and more. Fast, accurate, and easy to use. No registration required.",
  keywords: [
    "online calculators",
    "free tools",
    "age calculator",
    "BMI calculator",
    "loan calculator",
    "tax calculator",
    "percentage calculator",
    "date calculator",
    "time calculator",
    "financial calculators",
    "health calculators",
    "conversion tools",
    "utilities",
    "web tools",
    "productivity tools"
  ],
  openGraph: {
    title: "All Free Online Tools & Calculators | ToolifyHub",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
    type: "website",
    url: "https://toolifyhub.com/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Online Tools & Calculators",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
  },
  alternates: {
    canonical: "https://toolifyhub.com/tools",
  },
}

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Free Online Tools & Calculators",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
    url: "https://toolifyhub.com/tools",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools",
      description: "Collection of free online tools and calculators",
      numberOfItems: 50,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Age Calculator",
          description: "Calculate your exact age in years, months, and days",
          url: "https://toolifyhub.com/tools/age-calculator"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BMI Calculator",
          description: "Calculate your Body Mass Index (BMI)",
          url: "https://toolifyhub.com/tools/bmi-calculator"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Loan EMI Calculator",
          description: "Calculate your monthly loan payment (EMI)",
          url: "https://toolifyhub.com/tools/loan-calculator"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Tax Calculator",
          description: "Calculate your estimated income tax",
          url: "https://toolifyhub.com/tools/tax-calculator"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Percentage Calculator",
          description: "Calculate percentages quickly and easily",
          url: "https://toolifyhub.com/tools/percentage-calculator"
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
          item: "https://toolifyhub.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://toolifyhub.com/tools"
        }
      ]
    }
  }

  const tools = [
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days from your birth date.",
      icon: Calculator,
      href: "/tools/age-calculator",
    },
    {
      title: "Date Difference Calculator",
      description: "Calculate the exact difference between two dates in years, months, days, and more.",
      icon: Calendar,
      href: "/tools/date-difference",
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index (BMI) to assess your weight category.",
      icon: Activity,
      href: "/tools/bmi-calculator",
    },
    {
      title: "Loan EMI Calculator",
      description: "Calculate your monthly loan payment (EMI) with total interest breakdown.",
      icon: DollarSign,
      href: "/tools/loan-calculator",
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages quickly for discounts, tips, grades, and more.",
      icon: Percent,
      href: "/tools/percentage-calculator",
    },
    {
      title: "Time Duration Calculator",
      description: "Calculate the time duration between two times in hours and minutes.",
      icon: Clock,
      href: "/tools/time-duration",
    },
    {
      title: "Income Tax Calculator",
      description: "Calculate your estimated income tax and net salary based on annual income.",
      icon: Wallet,
      href: "/tools/tax-calculator",
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate compound interest and see how your investment grows over time.",
      icon: TrendingUp,
      href: "/tools/compound-interest",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Tools", href: "/tools" }]} />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">All Calculation Tools</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Explore our collection of free online tools designed to make your tasks easier and faster. All tools are
            100% free, accurate, and easy to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              className="hover:shadow-lg transition-all hover:border-primary/30 border-border/50 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription className="leading-relaxed text-sm">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all">
                  <Link href={tool.href}>
                    Use Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}
