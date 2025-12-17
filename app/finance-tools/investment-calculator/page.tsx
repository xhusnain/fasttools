import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import InvestmentCalculator from "@/components/finance/investment-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Investment Calculator | Free Advanced Portfolio Calculator",
  description:
    "Professional investment calculator for portfolio analysis. Calculate end amount, return rate, starting amount & investment length.",
  path: "/finance-tools/investment-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Investment Calculator", href: "/finance-tools/investment-calculator" }
  ],
  schemaOptions: {
    name: "Investment Calculator | Advanced Portfolio Calculator",
    alternateName: "Professional Investment Analysis Tool",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Multiple Calculation Modes",
      "Compound Interest Calculations",
      "Investment Accumulation Schedules",
      "Portfolio Analysis",
      "Return Rate Calculations",
      "Investment Scenario Comparisons",
      "Risk Management Strategies"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function InvestmentCalculatorPage() {
  const toolContent = {
    toolName: "Investment Calculator",
    overview: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with our advanced portfolio calculator. Perfect for planning retirement, college savings, or wealth building.",

    howToSteps: [
      "Choose a calculation mode: End Amount, Return Rate, Starting Amount, Additional Contribution, or Investment Length.",
      "Enter your data: Input known values and leave the target field blank.",
      "Select compound frequency (e.g., Annually, Monthly) and contribution timing (End or Beginning).",
      "Review the results: Analyze the calculated values, accumulation schedule, and charts.",
      "Plan your strategy: Use the insights to optimize your investment plan."
    ],

    features: [
      "Multiple Modes: Calculate any variable (End Amount, Return Rate, Starting Amount, Contribution, Length).",
      "Compound Interest: Advanced calculations with customizable frequency options.",
      "Accumulation Schedules: Detailed year-by-year growth tracking.",
      "Portfolio Analysis: Comprehensive tools for strategy evaluation.",
      "Risk Management: Assess different scenarios and diversification strategies.",
      "Real-time Analysis: Instant updates as you adjust parameters.",
      "Visual Charts: Interactive graphs showing growth over time.",
      "Mobile Friendly: Fully responsive design for use on any device."
    ],

    useCases: [
      "Retirement Planning: Project savings and determine required contributions.",
      "College Savings: Plan for education expenses with specific goals.",
      "Wealth Building: Track long-term growth of stocks, bonds, or mutual funds.",
      "Goal Planning: Determine how much to save for a home down payment or major purchase.",
      "Portfolio Optimization: Compare different investment strategies and return rates.",
      "Debt Repayment: Analyze the opportunity cost of paying off debt vs. investing."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Types of Investments</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Stocks & Equities:</strong> Individual stocks, mutual funds, and ETFs offering higher potential returns but higher risk.</li>
          <li><strong>Bonds & Fixed Income:</strong> Government and corporate bonds providing steady income and lower risk.</li>
          <li><strong>Real Estate:</strong> Rental properties and REITs for income and appreciation.</li>
          <li><strong>Alternative Investments:</strong> Commodities, crypto, and private equity for diversification.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Investment Strategies</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Conservative:</strong> Focus on capital preservation (e.g., 60% Bonds, 40% Stocks). Suitable for near-retirement.</li>
          <li><strong>Balanced:</strong> Moderate risk and return (e.g., 50% Stocks, 50% Bonds). Good for middle-aged investors.</li>
          <li><strong>Aggressive:</strong> Higher risk for higher potential returns (e.g., 80% Stocks, 20% Bonds). Best for young investors.</li>
          <li><strong>Growth:</strong> Maximum growth potential (e.g., 90% Stocks, 10% Bonds). Requires high risk tolerance.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Why Use an Investment Calculator?</h3>
        <p className="mb-4">
          Investment success requires planning. Our calculator helps you understand the power of compound interest, the impact of regular contributions, and the importance of starting early. By visualizing your potential growth, you can set realistic goals and stay motivated on your financial journey.
        </p>
      </>
    ),

    proTip: "The 'Rule of 72' is a quick way to estimate doubling time. Divide 72 by your annual return rate to see how many years it takes to double your money. For example, at a 10% return, your money doubles in about 7.2 years.",

    faqs: [
      {
        question: "How accurate are the investment calculations?",
        answer: "Our calculator uses professional-grade financial formulas for compound interest and growth. Results are highly accurate for planning, though actual market returns will vary."
      },
      {
        question: "What is the difference between compound frequencies?",
        answer: "Compound frequency is how often interest is added to the principal. More frequent compounding (e.g., monthly vs. annually) leads to faster growth due to interest earning interest."
      },
      {
        question: "Can I use this for retirement planning?",
        answer: "Yes. You can calculate the future value of your savings, determine necessary monthly contributions, or find the required return rate to reach your retirement goal."
      },
      {
        question: "What is the difference between 'End' and 'Beginning' contribution timing?",
        answer: "'Beginning' contributions earn interest for the full period, resulting in slightly higher returns than 'End' contributions, which are made after the period has passed."
      },
      {
        question: "How often should I rebalance my portfolio?",
        answer: "Most advisors recommend rebalancing annually or when your allocation drifts by 5-10%. This maintains your risk profile and can improve long-term returns."
      },
      {
        question: "What is a realistic rate of return?",
        answer: "Historically, the stock market averages 7-10% annually (before inflation). Conservative portfolios might target 3-5%, while aggressive ones might aim for 8-12%."
      },
      {
        question: "How does inflation affect my returns?",
        answer: "Inflation reduces purchasing power. If you earn 8% but inflation is 3%, your 'real' return is roughly 5%. It's important to aim for returns that outpace inflation."
      },
      {
        question: "What is the difference between cumulative and annualized return?",
        answer: "Cumulative return is the total percentage growth over the entire period. Annualized return is the average yearly growth rate, accounting for compounding."
      },
      {
        question: "How do taxes impact investment returns?",
        answer: "Taxes reduce your net return. Long-term capital gains are taxed at lower rates than short-term gains. Using tax-advantaged accounts (like 401ks or IRAs) can help defer or avoid taxes."
      },
      {
        question: "Can I calculate scenarios for stocks and bonds?",
        answer: "Yes. Simply input the expected return rate for your specific mix of stocks and bonds to see how your portfolio might grow."
      }
    ],

    relatedTools: [
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "Compound Interest", href: "/finance-tools/compound-interest" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Investment Calculator - Advanced Portfolio Analysis",
        description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, and investment length.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Investment Calculator", href: "/finance-tools/investment-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <InvestmentCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Investment Calculator - Analyze Growth & Returns",
        description: "Professional investment calculator for portfolio analysis. Calculate end amount, return rate, starting amount & investment length.",
        path: "/finance-tools/investment-calculator"
      }}
    />
  )
}