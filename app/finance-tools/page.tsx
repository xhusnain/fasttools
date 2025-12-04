import { GToolCard } from "@/ui/gtool-card"

import {
  FileText, DollarSign, Percent, Calculator, Target, TrendingUp,
  Users, CreditCard, Home, BadgePercent, PiggyBank, ChartLine, Coins,
  ScrollText, Landmark, TrendingDown, Banknote
} from "lucide-react"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "Free Online Finance Tools – Budget, Investment & Expense Calculators",
  description: "Free finance tools: budget calculators, savings trackers, loan calculators, investment planners. Perfect for financial planning.",
  path: "/finance-tools",
  includeSchema: false
})

export default function FinanceToolsPage() {
  const tools = [
    {
      title: "Invoice Generator",
      description: "Create professional invoices for your freelance or business work. Add items, calculate totals, and generate invoices instantly.",
      icon: FileText,
      href: "/finance-tools/invoice-generator",
    },
    {
      title: "PayPal Fee Calculator",
      description: "Calculate PayPal transaction fees (2.9% + $0.30) and determine how much you'll receive or need to charge.",
      icon: DollarSign,
      href: "/finance-tools/paypal-fee",
    },
    {
      title: "Discount Calculator",
      description: "Calculate sale prices and savings. Perfect for shopping seasons to find out how much you save with discounts.",
      icon: Percent,
      href: "/finance-tools/discount-calculator",
    },
    {
      title: "Tip Calculator",
      description: "Calculate tips for restaurants and services. Split bills among multiple people with customizable tip percentages.",
      icon: Calculator,
      href: "/finance-tools/tip-calculator",
    },
    {
      title: "Savings Goal Tracker",
      description: "Track your savings goals and see when you'll reach them. Perfect for planning vacations, purchases, or emergency funds.",
      icon: Target,
      href: "/finance-tools/savings-tracker",
    },
    {
      title: "Retirement Goal Planner",
      description: "Plan your retirement with compound interest calculations. See how your savings will grow over time.",
      icon: TrendingUp,
      href: "/finance-tools/retirement-planner",
    },
    {
      title: "Bill Splitter",
      description: "Split bills and expenses fairly among friends or groups. Perfect for restaurants, trips, and shared expenses.",
      icon: Users,
      href: "/finance-tools/bill-splitter",
    },
    {
      title: "Credit Card Payoff Calculator",
      description: "Calculate how long it will take to pay off your credit card debt and how much interest you'll pay.",
      icon: CreditCard,
      href: "/finance-tools/credit-card-payoff",
    },
    {
      title: "Loan Calculator",
      description: "Calculate monthly loan payments, total interest, and amortization schedules. Perfect for car loans, personal loans, and mortgages.",
      icon: DollarSign,
      href: "/finance-tools/loan-calculator",
    },
    {
      title: "Mortgage Calculator",
      description: "Estimate monthly mortgage payments including principal, interest, taxes, and insurance. Plan your home purchase with confidence.",
      icon: Home,
      href: "/finance-tools/mortgage-calculator",
    },
    {
      title: "Tax Calculator",
      description: "Calculate income tax, GST, or VAT. Supports inclusive and exclusive tax calculations for accurate financial planning.",
      icon: FileText,
      href: "/finance-tools/tax-calculator",
    },
    {
      title: "Sales Tax Calculator",
      description: "Calculate sales tax for any US state or custom rate. Get total costs instantly for budgeting and purchasing.",
      icon: BadgePercent,
      href: "/finance-tools/sales-tax-calculator",
    },
    {
      title: "Retirement Calculator",
      description: "Plan your financial future. Estimate retirement savings growth and determine if you're on track for your goals.",
      icon: PiggyBank,
      href: "/finance-tools/retirement-calculator",
    },
    {
      title: "Investment Calculator",
      description: "Project investment growth over time with compound interest. Compare different return rates and contribution strategies.",
      icon: ChartLine,
      href: "/finance-tools/investment-calculator",
    },
    {
      title: "Compound Interest Calculator",
      description: "Visualize the power of compound interest. See how your money grows over time with reinvested earnings.",
      icon: Coins,
      href: "/finance-tools/compound-interest",
    },
    {
      title: "Amortization Calculator",
      description: "Generate detailed amortization schedules for loans. See principal and interest breakdown for each payment period.",
      icon: ScrollText,
      href: "/finance-tools/amortization-calculator",
    },
    {
      title: "Finance Calculator",
      description: "Comprehensive financial calculations for investments, loans, and savings. All-in-one financial planning tool.",
      icon: Landmark,
      href: "/finance-tools/finance-calculator",
    },
    {
      title: "Inflation Calculator",
      description: "Calculate the impact of inflation on purchasing power over time. Understand real value of money.",
      icon: TrendingDown,
      href: "/finance-tools/inflation-calculator",
    },
    {
      title: "Interest Rate Calculator",
      description: "Calculate interest rates for loans and investments. Determine APR, APY, and effective rates.",
      icon: Banknote,
      href: "/finance-tools/interest-rate-calculator",
    },
    {
      title: "Payment Calculator",
      description: "Calculate payment amounts for various loan types. Plan monthly budgets with accurate payment estimates.",
      icon: CreditCard,
      href: "/finance-tools/payment-calculator",
    },
    {
      title: "Salary Calculator",
      description: "Convert between hourly, weekly, monthly, and annual salary. Calculate take-home pay after taxes.",
      icon: Banknote,
      href: "/finance-tools/salary-calculator",
    },
  ]

  const toolContent = {
    toolName: "Finance Tools",
    overview: "Our professional finance tools combine intuitive interfaces with accurate calculations. All invoice generation, PayPal fee calculations, and financial computations run locally for maximum privacy and speed. Whether you're a freelancer, business owner, or planning your personal finances, these tools provide the precision you need.",
    howToSteps: [
      "Select the appropriate tool for your needs from the collection below.",
      "Enter your financial data into the input fields (e.g., loan amount, interest rate, savings goal).",
      "Review the instant calculations and detailed breakdowns provided.",
      "Use the results to make informed financial decisions or generate professional documents like invoices."
    ],
    features: [
      "20+ Professional Finance Tools",
      "100% Free & No Signup Required",
      "Privacy-Focused (Client-Side Processing)",
      "Mobile-Optimized for Any Device",
      "Business-Ready Invoices & Reports",
      "Global Currency Support"
    ],
    aboutTool: `
      ### Accurate Financial Calculations
      Invoice generation with automatic tax calculations, precise PayPal fee computation (2.9% + $0.30), and real-time savings goal tracking — all optimized for business use.

      ### Business-Ready Outputs
      Professional invoice templates, detailed fee breakdowns, and comprehensive financial reports designed for freelancers, small businesses, and personal finance management.

      ### Freelancer & Small Business Tools
      Create professional invoices for clients, calculate accurate PayPal fees for pricing, track business savings goals, and manage freelance finances with precision.

      ### Personal Finance Management
      Plan retirement savings, calculate restaurant tips, split group bills fairly, and optimize personal budgeting with our comprehensive financial calculators.
    `,
    faqs: [
      {
        question: "What are the best free invoice generators and PayPal fee calculators?",
        answer: "Our free invoice generator creates professional business invoices with automatic tax calculations, itemized billing, and PDF export capabilities. The PayPal fee calculator accurately computes transaction fees (2.9% + $0.30 domestic, 3.9% + fixed fee international) helping businesses set proper pricing and maintain profit margins."
      },
      {
        question: "How do invoice generators work and what makes them professional?",
        answer: "Invoice generators use structured templates and automated calculations to create professional invoices that meet business standards. They typically include fields for client information, itemized services or products, tax calculations, discounts, and payment terms."
      },
      {
        question: "What's the best way to use PayPal fee calculators for business?",
        answer: "PayPal fee calculators are essential for online businesses to understand true transaction costs and set appropriate pricing. Use them to determine net amounts after fees, calculate required charges to achieve target amounts, and compare different payment processing options."
      },
      {
        question: "Are these tools safe to use and do they protect my privacy?",
        answer: "Our finance tools prioritize user privacy and security by operating entirely within your browser. All calculations, invoice generation, and financial analyses happen locally on your device, meaning no personal or financial data is transmitted to external servers."
      },
      {
        question: "Can these tools help with business growth and financial planning?",
        answer: "Absolutely! These tools are invaluable for business growth, financial planning, and strategic decision-making. Invoice generators help maintain professional client relationships and ensure timely payments. Fee calculators optimize pricing strategies and improve profit margins."
      }
    ],
    relatedTools: [
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Currency Converter", href: "/converters/currency" }
    ],
    useCases: [
      "Freelancers creating professional invoices",
      "Small businesses calculating PayPal fees",
      "Individuals planning retirement savings",
      "Groups splitting bills and tips",
      "Homeowners estimating mortgage payments",
      "Shoppers calculating sales tax and discounts"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Finance Tools & Calculators",
        description: "Professional-grade financial calculators and business tools for invoice generation, PayPal fee calculation, and personal finance management. All free, fast, and easy to use.",
        titleSize: "large",
        descriptionSize: "medium",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
      ]}
      toolComponent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <GToolCard
              key={`finance-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Free Online Finance Tools – Budget, Investment & Expense Calculators",
        description: "Free finance tools: budget calculators, savings trackers, loan calculators, investment planners. Perfect for financial planning.",
        path: "/finance-tools"
      }}
    />
  )
}
