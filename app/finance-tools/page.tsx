import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  FileText,
  DollarSign,
  Percent,
  Calculator,
  Target,
  TrendingUp,
  Users,
  CreditCard,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance & Productivity Tools - Free Online Financial Calculators | ToolifyHub",
  description:
    "Free finance and productivity tools including invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings tracker, retirement planner, bill splitter, and credit card payoff calculator. Perfect for freelancers, businesses, and personal finance management.",
  keywords:
    "finance tools, invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings goal tracker, retirement planner, bill splitter, expense splitter, credit card payoff calculator, financial planning tools, personal finance calculator",
  openGraph: {
    title: "Finance & Productivity Tools - Free Financial Calculators",
    description:
      "Access free finance tools for invoicing, fee calculations, discounts, tips, savings goals, retirement planning, and more.",
    type: "website",
  },
}

export default function FinanceToolsPage() {
  const tools = [
    {
      title: "Invoice Generator",
      description:
        "Create professional invoices for your freelance or business work. Add items, calculate totals, and generate invoices instantly.",
      icon: FileText,
      href: "/finance-tools/invoice-generator",
      popular: true,
    },
    {
      title: "PayPal Fee Calculator",
      description:
        "Calculate PayPal transaction fees (2.9% + $0.30) and determine how much you'll receive or need to charge.",
      icon: DollarSign,
      href: "/finance-tools/paypal-fee",
      popular: true,
    },
    {
      title: "Discount Calculator",
      description:
        "Calculate sale prices and savings. Perfect for shopping seasons to find out how much you save with discounts.",
      icon: Percent,
      href: "/finance-tools/discount-calculator",
      popular: false,
    },
    {
      title: "Tip Calculator",
      description:
        "Calculate tips for restaurants and services. Split bills among multiple people with customizable tip percentages.",
      icon: Calculator,
      href: "/finance-tools/tip-calculator",
      popular: true,
    },
    {
      title: "Savings Goal Tracker",
      description:
        "Track your savings goals and see when you'll reach them. Perfect for planning vacations, purchases, or emergency funds.",
      icon: Target,
      href: "/finance-tools/savings-tracker",
      popular: false,
    },
    {
      title: "Retirement Goal Planner",
      description:
        "Plan your retirement with compound interest calculations. See how your savings will grow over time.",
      icon: TrendingUp,
      href: "/finance-tools/retirement-planner",
      popular: false,
    },
    {
      title: "Bill Splitter",
      description:
        "Split bills and expenses fairly among friends or groups. Perfect for restaurants, trips, and shared expenses.",
      icon: Users,
      href: "/finance-tools/bill-splitter",
      popular: true,
    },
    {
      title: "Credit Card Payoff Calculator",
      description: "Calculate how long it will take to pay off your credit card debt and how much interest you'll pay.",
      icon: CreditCard,
      href: "/finance-tools/credit-card-payoff",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Finance & Productivity Tools</h1>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Free online financial calculators and productivity tools for freelancers, businesses, and personal finance
            management. Calculate fees, create invoices, plan savings, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={tool.href}
              className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  {tool.popular && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      Popular
                    </span>
                  )}
                </div>
                <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  {tool.description}
                </CardDescription>
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
