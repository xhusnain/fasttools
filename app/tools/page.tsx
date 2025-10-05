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
  title: "All Tools - Free Online Calculators | Age, BMI, Loan, Tax & More",
  description:
    "Browse all available free online tools including age calculator, BMI calculator, loan EMI calculator, tax calculator, and more. Fast, accurate, and easy to use.",
  keywords:
    "online calculators, free tools, age calculator, BMI calculator, loan calculator, tax calculator, percentage calculator",
  openGraph: {
    title: "All Tools | Free Online Calculators",
    description: "Browse all available free online calculation tools.",
  },
}

export default function ToolsPage() {
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
  )
}
