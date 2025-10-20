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
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance Tools: Invoice, PayPal Fee, Tip | FastTools",
  description:
    "Free finance and productivity tools including invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings tracker, retirement planner, bill splitter, and credit card payoff calculator. Perfect for freelancers, businesses, and personal finance management.",
  keywords: [
    // Primary Keywords (20)
    "finance tools",
    "free finance tools",
    "invoice generator",
    "PayPal fee calculator",
    "discount calculator",
    "tip calculator",
    "savings goal tracker",
    "retirement planner",
    "bill splitter",
    "expense splitter",
    "credit card payoff calculator",
    "financial planning tools",
    "personal finance calculator",
    "financial calculators",
    "business finance tools",
    "freelancer tools",
    "money management tools",
    "budget calculator",
    "investment calculator",
    "loan calculator",
    
    // Secondary Keywords (20)
    "invoice generator online",
    "PayPal fee calculator online",
    "discount calculator online",
    "tip calculator online",
    "savings goal tracker online",
    "retirement planner online",
    "bill splitter online",
    "expense splitter online",
    "credit card payoff calculator online",
    "financial planning tools online",
    "personal finance calculator online",
    "financial calculators online",
    "business finance tools online",
    "freelancer tools online",
    "money management tools online",
    "budget calculator online",
    "investment calculator online",
    "loan calculator online",
    "free finance tools online",
    "online finance tools",
    
    // Long-tail Keywords (20)
    "free online finance tools",
    "best finance tools online",
    "finance tools with live preview",
    "free finance tools tool online",
    "online finance tools free",
    "finance tools online free",
    "invoice generator free online",
    "PayPal fee calculator free online",
    "discount calculator free online",
    "tip calculator free online",
    "savings goal tracker free online",
    "retirement planner free online",
    "bill splitter free online",
    "expense splitter free online",
    "credit card payoff calculator free online",
    "financial planning tools free online",
    "personal finance calculator free online",
    "financial calculators free online",
    "business finance tools free online",
    "freelancer tools free online",
    
    // Additional SEO Keywords
    "money management tools",
    "budget calculator",
    "investment calculator",
    "loan calculator",
    "invoice generator online",
    "PayPal fee calculator online",
    "discount calculator online",
    "tip calculator online",
    "savings goal tracker online",
    "retirement planner online",
    "bill splitter online",
    "expense splitter online",
    "credit card payoff calculator online",
    "financial planning tools online",
    "personal finance calculator online",
    "financial calculators online",
    "business finance tools online",
    "freelancer tools online",
    "money management tools online",
    "budget calculator online",
    "investment calculator online",
    "loan calculator online",
    "free finance tools online",
    "online finance tools",
    "finance tools free",
    "invoice generator free",
    "PayPal fee calculator free",
    "discount calculator free",
    "tip calculator free",
    "savings goal tracker free",
    "retirement planner free",
    "bill splitter free",
    "expense splitter free",
    "credit card payoff calculator free",
    "financial planning tools free",
    "personal finance calculator free",
    "financial calculators free",
    "business finance tools free",
    "freelancer tools free",
    "money management tools free",
    "budget calculator free",
    "investment calculator free",
    "loan calculator free",
    "free finance tools free",
    "finance tools tool",
    "invoice generator tool",
    "PayPal fee calculator tool",
    "discount calculator tool",
    "tip calculator tool",
    "savings goal tracker tool",
    "retirement planner tool",
    "bill splitter tool",
    "expense splitter tool",
    "credit card payoff calculator tool",
    "financial planning tools tool",
    "personal finance calculator tool",
    "financial calculators tool",
    "business finance tools tool",
    "freelancer tools tool",
    "money management tools tool",
    "budget calculator tool",
    "investment calculator tool",
    "loan calculator tool",
    "free finance tools tool"
  ],
  openGraph: {
    title: "Free Finance Tools | Invoice Generator, PayPal Fee Calculator & More | FastTools",
    description:
      "Free finance and productivity tools including invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings tracker, retirement planner, bill splitter, and credit card payoff calculator.",
    url: "https://www.fasttools.store/finance-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Finance Tools - Invoice Generator, PayPal Fee Calculator & More",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Finance Tools | Invoice Generator, PayPal Fee Calculator & More | FastTools",
    description: "Free finance and productivity tools including invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings tracker, retirement planner, bill splitter, and credit card payoff calculator.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/finance-tools",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Finance Tools | Invoice Generator, PayPal Fee Calculator & More | FastTools",
  description: "Free finance and productivity tools including invoice generator, PayPal fee calculator, discount calculator, tip calculator, savings tracker, retirement planner, bill splitter, and credit card payoff calculator.",
  url: "https://www.fasttools.store/finance-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "Finance Tools Collection",
    description: "Comprehensive collection of free online finance tools and calculators for business, personal finance, and financial planning",
    numberOfItems: 8,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Invoice Generator", description: "Create professional invoices with taxes, discounts, and branding", url: "https://www.fasttools.store/finance-tools/invoice-generator" },
      { "@type": "ListItem", position: 2, name: "PayPal Fee Calculator", description: "Calculate PayPal fees and determine net amounts or required charges", url: "https://www.fasttools.store/finance-tools/paypal-fee" },
      { "@type": "ListItem", position: 3, name: "Discount Calculator", description: "Calculate sale prices and savings for shopping and discounts", url: "https://www.fasttools.store/finance-tools/discount-calculator" },
      { "@type": "ListItem", position: 4, name: "Tip Calculator", description: "Calculate tips and split bills among multiple people", url: "https://www.fasttools.store/finance-tools/tip-calculator" },
      { "@type": "ListItem", position: 5, name: "Savings Goal Tracker", description: "Track your savings goals and see when you'll reach them", url: "https://www.fasttools.store/finance-tools/savings-tracker" },
      { "@type": "ListItem", position: 6, name: "Retirement Planner", description: "Plan your retirement with compound interest calculations", url: "https://www.fasttools.store/finance-tools/retirement-planner" },
      { "@type": "ListItem", position: 7, name: "Bill Splitter", description: "Split expenses fairly among friends or groups", url: "https://www.fasttools.store/finance-tools/bill-splitter" },
      { "@type": "ListItem", position: 8, name: "Credit Card Payoff Calculator", description: "Calculate how long it will take to pay off your credit card debt", url: "https://www.fasttools.store/finance-tools/credit-card-payoff" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Finance Tools", item: "https://www.fasttools.store/finance-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "Finance and Financial Planning",
    description: "Free online tools for financial calculations, business finance, personal finance, and financial planning"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://www.fasttools.store"
  }
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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Finance & Productivity Tools</h1>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Free online financial calculators and productivity tools for freelancers, businesses, and personal finance
            management. Calculate fees, create invoices, plan savings, and more.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card
              key={tool.href}
              className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  {tool.popular && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary border border-secondary/20">
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
                <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                  <Link href={tool.href}>
                    Use Tool
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Finance Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our comprehensive collection of <strong>finance tools</strong> is designed to help freelancers, small businesses, and individuals manage their 
              financial tasks efficiently. From creating professional invoices to calculating fees and planning 
              savings goals, our <strong>free finance tools</strong> provide the accuracy and ease of use you need for any financial calculation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Free to use</strong> with no registration required</li>
              <li><strong>Professional-grade calculations</strong> and formatting for business use</li>
              <li><strong>Mobile-friendly</strong> and responsive design for all devices</li>
              <li><strong>Download and export results</strong> easily for your records</li>
              <li><strong>No data sent to servers</strong> for maximum privacy and security</li>
              <li><strong>Always up-to-date</strong> with current rates and standards</li>
              <li><strong>Accurate calculations</strong> with real-time updates and precise algorithms</li>
              <li><strong>Multiple formats</strong> supporting various financial calculations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Comprehensive Finance Tool Categories</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>finance tools</strong> are organized into specialized categories to meet all your financial needs:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Business & Freelancer Tools</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Invoice generator for creating professional invoices, PayPal fee calculator for transaction fees, 
              and business finance tools. Essential for freelancers, consultants, and small business owners.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Finance & Budgeting</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Savings goal tracker, retirement planner, and personal finance calculator. Perfect for budgeting, 
              financial planning, and achieving your financial goals.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Shopping & Expense Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discount calculator for sale prices, tip calculator for restaurants, and bill splitter for shared expenses. 
              Great for managing daily expenses and group activities.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Debt & Credit Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Credit card payoff calculator for debt management, loan calculator for borrowing decisions, 
              and financial planning tools. Essential for debt reduction and credit management.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Finance Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover our most popular <strong>finance tools</strong> that help thousands of users manage their financial tasks:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Invoice Generator</h3>
                <p className="text-sm text-muted-foreground">Create professional invoices with taxes, discounts, and branding. Perfect for freelancers and small businesses.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">PayPal Fee Calculator</h3>
                <p className="text-sm text-muted-foreground">Calculate PayPal fees and determine net amounts or required charges. Essential for online businesses.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Tip Calculator</h3>
                <p className="text-sm text-muted-foreground">Calculate tips and split bills among multiple people. Great for restaurants and group dining.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Bill Splitter</h3>
                <p className="text-sm text-muted-foreground">Split expenses fairly among friends or groups. Perfect for trips, shared expenses, and group activities.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Savings Goal Tracker</h3>
                <p className="text-sm text-muted-foreground">Track your savings goals and see when you'll reach them. Perfect for planning vacations and major purchases.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Retirement Planner</h3>
                <p className="text-sm text-muted-foreground">Plan your retirement with compound interest calculations. See how your savings will grow over time.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Advanced Finance Features</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>finance tools</strong> include advanced features for professional and personal use:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Real-time Calculations:</strong> Instant updates as you type</li>
              <li><strong>Multiple Currencies:</strong> Support for various currency formats</li>
              <li><strong>Export Options:</strong> Download and share results easily</li>
              <li><strong>Mobile Optimization:</strong> Perfect experience on all devices</li>
              <li><strong>No Registration:</strong> Use immediately without creating accounts</li>
              <li><strong>Privacy Focused:</strong> All calculations run locally in your browser</li>
              <li><strong>Professional Formatting:</strong> Business-ready outputs and reports</li>
              <li><strong>Educational Content:</strong> Learn about financial concepts and best practices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use Cases for Our Finance Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>free finance tools</strong> are perfect for various financial scenarios:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Business & Freelancing</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Creating professional invoices for clients</li>
              <li>Calculating PayPal and payment processor fees</li>
              <li>Managing business expenses and budgets</li>
              <li>Planning business growth and investments</li>
              <li>Tracking business financial goals</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Finance</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Planning retirement and long-term savings</li>
              <li>Managing personal budgets and expenses</li>
              <li>Calculating tips and splitting bills</li>
              <li>Tracking savings goals and milestones</li>
              <li>Managing debt and credit card payments</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Group Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Splitting restaurant bills and group expenses</li>
              <li>Planning group trips and shared costs</li>
              <li>Managing shared household expenses</li>
              <li>Calculating fair contributions for events</li>
              <li>Organizing group financial activities</li>
            </ul>
          </div>
        </div>

        {/* Comprehensive Finance Tools Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Comprehensive Finance Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  Invoice Generator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to creating professional invoices with best practices and templates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master invoice generation with our comprehensive guide covering legal requirements, 
                  templates, payment terms, and professional standards for freelancers and businesses.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/finance-tools/invoice-generator">Try Invoice Generator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  PayPal Fee Calculator Guide
                </CardTitle>
                <CardDescription>
                  Master PayPal fee calculations with comprehensive guide to transaction fees and international payments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn PayPal fee structure, international fees, currency conversion, and strategies to 
                  minimize costs for your business transactions.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/finance-tools/paypal-fee">Try PayPal Fee Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-purple-500" />
                  Discount Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to discount strategies, pricing psychology, and sale calculations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master discount calculations with our comprehensive guide covering strategies, 
                  pricing psychology, and business applications for retail and e-commerce.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/finance-tools/discount-calculator">Try Discount Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-orange-500" />
                  Tip Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to tipping etiquette, calculations, and bill splitting strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master tip calculations with our comprehensive guide covering etiquette, 
                  percentages, international customs, and digital tipping methods.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/finance-tools/tip-calculator">Try Tip Calculator</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final Ad Space - Bottom Content */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </div>
      </div>
    </>
  )
}
