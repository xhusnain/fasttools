import { GToolCard } from "@/ui/gtool-card"
import {
  FileText,
  DollarSign,
  Percent,
  Calculator,
  Target,
  TrendingUp,
  Users,
  CreditCard,
  Home,
  BadgePercent,
  PiggyBank,
  ChartLine,
  Coins,
  ScrollText,
  Landmark,
  TrendingDown,
  Banknote,
  Shield,
  Activity,
  Briefcase,
} from "lucide-react"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata-base"

const financeTools = [
  {
    title: "Invoice Generator",
    description:
      "Create professional invoices for freelance or business work with tax and total calculations.",
    icon: FileText,
    href: "/finance-tools/invoice-generator",
  },
  {
    title: "PayPal Fee Calculator",
    description:
      "Calculate PayPal processing fees and the amount you receive after transaction costs.",
    icon: DollarSign,
    href: "/finance-tools/paypal-fee",
  },
  {
    title: "Discount Calculator",
    description:
      "Calculate sale prices, discount amounts, and final totals for shopping or pricing decisions.",
    icon: Percent,
    href: "/finance-tools/discount-calculator",
  },
  {
    title: "Tip Calculator",
    description:
      "Calculate tips quickly and split bills fairly across multiple people.",
    icon: Calculator,
    href: "/finance-tools/tip-calculator",
  },
  {
    title: "Savings Goal Tracker",
    description:
      "Track savings progress and estimate when you will reach your goal amount.",
    icon: Target,
    href: "/finance-tools/savings-tracker",
  },
  {
    title: "Retirement Goal Planner",
    description:
      "Plan retirement contributions and estimate long-term portfolio growth.",
    icon: TrendingUp,
    href: "/finance-tools/retirement-planner",
  },
  {
    title: "Bill Splitter",
    description:
      "Split shared expenses for friends, trips, or group events with clear totals.",
    icon: Users,
    href: "/finance-tools/bill-splitter",
  },
  {
    title: "Credit Card Payoff Calculator",
    description:
      "Estimate debt payoff time and interest costs for credit card balances.",
    icon: CreditCard,
    href: "/finance-tools/credit-card-payoff",
  },
  {
    title: "Loan Calculator",
    description:
      "Estimate monthly payments, total interest, and amortization for personal loans.",
    icon: DollarSign,
    href: "/finance-tools/loan-calculator",
  },
  {
    title: "Mortgage Calculator",
    description:
      "Calculate monthly home loan payments including principal and interest details.",
    icon: Home,
    href: "/finance-tools/mortgage-calculator",
  },
  {
    title: "Tax Calculator",
    description:
      "Estimate income tax, GST, or VAT to understand net and gross amounts.",
    icon: FileText,
    href: "/finance-tools/tax-calculator",
  },
  {
    title: "1099 Quarterly Tax Estimator",
    description:
      "Calculate quarterly estimated tax payments for 1099 income with safe harbor analysis and SE tax breakdown.",
    icon: Shield,
    href: "/finance-tools/quarterly-tax-estimator",
  },
  {
    title: "Sales Tax Calculator",
    description:
      "Calculate sales tax for US states or custom tax rates with total cost output.",
    icon: BadgePercent,
    href: "/finance-tools/sales-tax-calculator",
  },
  {
    title: "Retirement Calculator",
    description:
      "Project retirement savings outcomes using return rates and contribution schedules.",
    icon: PiggyBank,
    href: "/finance-tools/retirement-calculator",
  },
  {
    title: "Investment Calculator",
    description:
      "Estimate investment growth over time with recurring contributions and returns.",
    icon: ChartLine,
    href: "/finance-tools/investment-calculator",
  },
  {
    title: "Compound Interest Calculator",
    description:
      "Visualize compounding effects and compare long-term savings scenarios.",
    icon: Coins,
    href: "/finance-tools/compound-interest",
  },
  {
    title: "Amortization Calculator",
    description:
      "Generate payment schedules showing principal and interest for each period.",
    icon: ScrollText,
    href: "/finance-tools/amortization-calculator",
  },
  {
    title: "Finance Calculator",
    description:
      "Solve core time-value-of-money variables for planning and financial analysis.",
    icon: Landmark,
    href: "/finance-tools/finance-calculator",
  },
  {
    title: "Inflation Calculator",
    description:
      "Estimate purchasing power changes over time based on inflation assumptions.",
    icon: TrendingDown,
    href: "/finance-tools/inflation-calculator",
  },
  {
    title: "Interest Rate Calculator",
    description:
      "Solve for unknown interest rates from payment, term, and principal inputs.",
    icon: Banknote,
    href: "/finance-tools/interest-rate-calculator",
  },
  {
    title: "Payment Calculator",
    description:
      "Calculate periodic payment amounts for different loan and financing setups.",
    icon: CreditCard,
    href: "/finance-tools/payment-calculator",
  },
  {
    title: "Salary Calculator",
    description:
      "Convert salary across hourly, monthly, and yearly views with planning support.",
    icon: Banknote,
    href: "/finance-tools/salary-calculator",
  },
  {
    title: "SaaS Churn Rate Calculator",
    description:
      "Calculate customer churn, revenue churn, retention rate, CLV & 12-month projections for SaaS businesses.",
    icon: Activity,
    href: "/finance-tools/saas-churn-calculator",
  },
  {
    title: "Freelance Hourly Rate Calculator",
    description:
      "Calculate your ideal freelance rate based on desired income, taxes, expenses, billable hours & profit margin.",
    icon: Briefcase,
    href: "/finance-tools/freelance-rate-calculator",
  },
  {
    title: "SaaS Payback Period Calculator",
    description:
      "Calculate months to recover CAC, LTV:CAC ratio, customer lifetime value & 36-month ROI projection.",
    icon: TrendingUp,
    href: "/finance-tools/saas-payback-calculator",
  },
]

export const metadata: Metadata = createMetadata({
  title:
    "Free Finance Calculators: Loan, Mortgage, Tax, Investment & Budget Tools",
  description:
    "Use free finance tools for loan, mortgage, tax, salary, savings, and investment planning. Fast, accurate calculators with no signup required.",
  path: "/finance-tools",
  includeSchema: false,
  breadcrumbs: [{ label: "Finance Tools", href: "/finance-tools" }],
  itemList: {
    name: "Finance Tools",
    description: "Free online finance calculators and business finance tools.",
    items: financeTools.map((tool) => ({
      name: tool.title,
      description: tool.description,
      url: tool.href,
    })),
  },
})

export default function FinanceToolsPage() {
  const toolContent = {
    toolName: "Finance Tools",
    overview:
      "This category focuses on high-intent money decisions: borrowing, budgeting, taxes, debt payoff, and long-term investing. Use these calculators to estimate payments, compare scenarios, and plan with clearer numbers before you commit.",
    howToSteps: [
      "Choose the specific finance task (loan, tax, retirement, salary, or pricing).",
      "Enter your values such as amount, rate, term, and payment assumptions.",
      "Review totals, monthly breakdowns, and scenario comparisons.",
      "Use the results to plan budgets, pricing, or savings targets with confidence.",
    ],
    features: [
      "24 focused finance calculators",
      "Fast browser-based calculations",
      "Budgeting, debt, tax, and investment coverage",
      "Cross-links between related money decisions",
      "No signup required",
      "Mobile-friendly workflows",
    ],
    aboutTool: `
      ### Built for Real Financial Decisions
      From monthly payment estimates to long-term retirement projections, these tools help you move from rough guesses to clear, actionable numbers.

      ### Useful for Personal and Business Use
      Individuals can plan debt payoff and savings goals, while freelancers and small businesses can handle invoicing, pricing, and fee calculations.

      ### Better Comparison Before You Commit
      Test different rates, terms, and contribution levels quickly so you can compare outcomes before selecting a loan, pricing plan, or investment path.
    `,
    faqs: [
      {
        question: "Which finance calculator should I start with?",
        answer:
          "Start with the tool that matches your immediate decision: Loan or Mortgage for borrowing, Tax or Sales Tax for purchase planning, and Investment or Retirement for long-term growth.",
      },
      {
        question: "Are these finance calculations accurate?",
        answer:
          "The tools use standard finance formulas and are suitable for planning and comparison. For regulated decisions, confirm numbers with your lender, accountant, or financial advisor.",
      },
      {
        question: "Can I compare multiple scenarios?",
        answer:
          "Yes. A practical workflow is to run baseline inputs first, then adjust one variable at a time (rate, term, contribution, or tax) and compare the impact.",
      },
      {
        question: "Do these tools work for business workflows?",
        answer:
          "Yes. Tools like Invoice Generator, PayPal Fee Calculator, Discount Calculator, and Salary Calculator are useful for day-to-day operations and pricing decisions.",
      },
      {
        question: "Are the finance tools free?",
        answer:
          "Yes. The calculators in this category are free to use with no account required.",
      },
    ],
    relatedTools: [
      { name: "Online Calculators", href: "/calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
    ],
    useCases: [
      "Compare loan and mortgage affordability",
      "Estimate debt payoff timelines",
      "Plan retirement and contribution targets",
      "Calculate tax-inclusive and tax-exclusive totals",
      "Price products or services with fee awareness",
      "Track progress toward savings milestones",
    ],
  }

  return (
    <ToolPageLayout
      header={{
        title: "Finance Tools & Calculators",
        description:
          "Free calculators for borrowing, budgeting, taxes, investments, and pricing decisions.",
        titleSize: "large",
        descriptionSize: "medium",
        centered: true,
        color: "blue",
      }}
      breadcrumbs={[{ label: "Finance Tools", href: "/finance-tools" }]}
      toolComponent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {financeTools.map((tool) => (
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
        title:
          "Free Finance Calculators: Loan, Mortgage, Tax, Investment & Budget Tools",
        description:
          "Use free finance tools for loan, mortgage, tax, salary, savings, and investment planning. Fast, accurate calculators with no signup required.",
        path: "/finance-tools",
      }}
    />
  )
}
