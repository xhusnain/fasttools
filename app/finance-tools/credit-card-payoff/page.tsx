import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const CreditCardPayoff = dynamic(() => import("@/components/finance/credit-card-payoff").then(mod => mod.CreditCardPayoff), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Target, TrendingUp, BarChart3, CreditCard, Award, DollarSign, Percent, Zap, HelpCircle, ExternalLink, PiggyBank } from "lucide-react"
import type { Metadata } from "next"

const TOOL_TITLE = "Credit Card Payoff - Plan Debt Freedom"
const TOOL_NAME = "Credit Card Payoff Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Free credit card payoff calculator with debt payoff timeline, interest savings, and avalanche vs snowball methods. Calculate how long to pay off credit card debt and save thousands in interest.",
  path: "/finance-tools/credit-card-payoff",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/credit-card-payoff" }
  ],
  schemaOptions: {
    name: "Free Credit Card Payoff Calculator",
    alternateName: "Debt Payoff Timeline & Interest Savings Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Avalanche vs snowball",
      "Extra payments",
      "Debt‑free date",
      "Interest savings",
      "Credit card debt calculator",
      "Debt payoff calculator",
      "Payoff timeline",
      "Interest rate calculator",
      "Debt repayment plan",
      "Debt consolidation calculator"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "credit card payoff calculator",
    "free credit card payoff calculator",
    "credit card debt calculator",
    "debt payoff calculator",
    "payoff timeline",
    "interest savings",
    "avalanche method",
    "snowball method",
    "debt repayment plan",
    "extra payment calculator",
    "monthly payment to pay off debt",
    "how long to pay off credit card",
    "debt free date calculator",
    "interest rate calculator",
    "apr credit card calculator",
    "how to pay off credit card debt fast",
    "credit card debt payoff strategy",
    "debt free calculator",
    "pay off credit card calculator",
    "credit card payoff timeline"
  ]
}

export default function CreditCardPayoffPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Free credit card payoff calculator with debt payoff timeline, interest savings, and avalanche vs snowball methods. Calculate how long to pay off credit card debt and save thousands in interest. Perfect for debt management and financial planning.",

    howToSteps: [
      "Enter Current Balance: Input the total amount you owe on your credit card.",
      "Input Interest Rate (APR): Enter the annual percentage rate (APR) for your card.",
      "Set Monthly Payment: Enter the amount you plan to pay each month.",
      "Review Payoff Timeline: See exactly how many months it will take to be debt-free.",
      "Analyze Interest Savings: Compare different payment amounts to see how much interest you can save."
    ],

    features: [
      "Debt Payoff Timeline: Precise payoff timelines based on balance, APR, and payments. Detailed month-by-month breakdowns.",
      "Interest Savings Calculator: Calculate savings from extra payments and debt consolidation. Side-by-side comparisons.",
      "Avalanche vs Snowball Methods: Compare strategies. Avalanche targets high APR; Snowball targets small balances.",
      "Extra Payment Optimization: Optimize extra payments for maximum impact. Payment allocation strategies and analysis."
    ],

    useCases: [
      "How to Pay Off Credit Card Debt Fast: Proven strategies, step-by-step plans, and realistic timelines.",
      "Credit Card Debt Payoff Strategy: Personalized recommendations and strategy comparisons (Avalanche vs Snowball).",
      "Debt Free Calculator: Calculate exact debt-free date with multiple scenario modeling and milestone tracking.",
      "Pay Off Credit Card Calculator: Handle complex scenarios with multiple cards, different APRs, and varying payments.",
      "Credit Card Payoff Timeline: Visualize progress with interactive timelines and payment schedules.",
      "Debt Payoff Plan: Comprehensive plan with budget integration and progress monitoring."
    ],

    faqs: [
      {
        question: "How do I use the Credit Card Payoff Calculator effectively?",
        answer: "Using our credit card payoff calculator is simple: enter your current balance, APR, and monthly payment amount. The calculator will instantly show your payoff timeline, total interest paid, and payoff date. You can also experiment with extra payments to see how they accelerate your debt freedom and save money on interest."
      },
      {
        question: "What's the difference between avalanche and snowball debt payoff methods?",
        answer: "The avalanche method targets debts with the highest interest rates first, minimizing total interest paid and saving money long-term. The snowball method pays off smallest balances first, providing psychological wins and motivation. Our calculator shows you the impact of both strategies so you can choose what works best for you."
      },
      {
        question: "How much can I save by making extra payments on my credit card?",
        answer: "Extra payments can save you thousands in interest and years of payments. Even small increases like $25-50 per month can make a significant difference. Our calculator shows you exactly how much you'll save and how much faster you'll become debt-free with different extra payment amounts."
      },
      {
        question: "Is it better to pay off credit cards or invest extra money?",
        answer: "Generally, it's better to pay off high-interest credit card debt first, as the guaranteed return (saved interest) typically exceeds average investment returns. However, this depends on your specific APR, investment opportunities, and risk tolerance. Our calculator helps you see the true cost of carrying debt."
      },
      {
        question: "Should I consider a balance transfer to pay off credit card debt faster?",
        answer: "Balance transfers can be effective if you can get a lower APR and pay off the balance during the promotional period. However, consider transfer fees, your ability to pay off the balance, and what happens after the promotional rate ends. Our calculator can help you compare the costs and benefits."
      },
      {
        question: "How does credit card interest work and how is it calculated?",
        answer: "Credit card interest is typically calculated daily using your average daily balance and APR. Interest compounds, meaning you pay interest on interest. Our calculator uses precise formulas to show you exactly how interest accumulates and how payments are applied to principal vs. interest."
      },
      {
        question: "What's the minimum payment vs. extra payment impact on payoff time?",
        answer: "Minimum payments are designed to keep you in debt longer, often taking decades to pay off. Extra payments dramatically reduce payoff time and total interest. Our calculator shows you the stark difference between minimum payments and even modest extra payments, helping you understand the true cost of minimum payments."
      },
      {
        question: "Can I use this calculator for multiple credit cards at once?",
        answer: "Our calculator is designed for single credit card analysis, but you can use it multiple times for different cards. For multiple cards, we recommend using the avalanche method (highest APR first) or snowball method (lowest balance first) to prioritize which card to pay off first."
      },
      {
        question: "How accurate is the payoff date calculation?",
        answer: "Our calculator uses precise mathematical formulas to ensure accurate payoff date calculations. We account for daily interest compounding, payment timing, and principal reduction. The calculations are accurate to the month, giving you a reliable timeline for debt freedom planning."
      },
      {
        question: "What if my credit card APR changes during the payoff period?",
        answer: "If your APR changes, you can recalculate using the new rate to see how it affects your payoff timeline and total interest. Our calculator allows you to experiment with different APRs to see the impact of rate changes on your debt payoff strategy."
      }
    ],

    aboutTool: `
      ### Credit Card Payoff Calculator
      Our Credit Card Payoff Calculator is a powerful financial tool designed to help you become debt-free faster. By analyzing your current balance, interest rate, and monthly payments, it provides a clear timeline for when you'll be debt-free and how much interest you'll pay.

      ### Key Features
      - **Payoff Timeline:** Visualize your journey to debt freedom with a clear month-by-month timeline.
      - **Interest Analysis:** See exactly how much of your payment goes to principal vs. interest.
      - **Savings Calculator:** Discover how small increases in monthly payments can save you thousands in interest.
      - **Strategy Comparison:** Compare different payoff strategies to find the one that works best for your budget.
    `,

    relatedTools: [
      { name: "Savings Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Credit Card Payoff Calculator – Debt Payoff Timeline & Interest Savings",
        description: "Free credit card payoff calculator with debt payoff timeline, interest savings, and avalanche vs snowball methods. Calculate how long to pay off credit card debt and save thousands in interest. Perfect for debt management and financial planning.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/credit-card-payoff" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <CreditCardPayoff />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free credit card payoff calculator with debt payoff timeline, interest savings, and avalanche vs snowball methods. Calculate how long to pay off credit card debt and save thousands in interest.",
        path: "/finance-tools/credit-card-payoff"
      }}
    />
  )
}
