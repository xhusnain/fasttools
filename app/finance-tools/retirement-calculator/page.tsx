import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import RetirementCalculator from "@/components/retirement-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Retirement Calculator | Free Advanced Planning Calculator",
  description:
    "Professional retirement planning tool. Calculate savings, withdrawal amounts & retirement income needs with inflation adjustments.",
  path: "/finance-tools/retirement-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
  ],
  schemaOptions: {
    name: "Retirement Calculator | Advanced Planning Calculator",
    alternateName: "Professional Retirement Analysis Tool",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Retirement Savings Calculations",
      "Withdrawal Amount Analysis",
      "Retirement Income Planning",
      "Inflation Adjustments",
      "Scenario Analysis",
      "Social Security Integration",
      "Tax-Advantaged Accounts"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function RetirementCalculatorPage() {
  const toolContent = {
    toolName: "Retirement Calculator",
    overview: "Professional retirement calculator for comprehensive retirement planning. Calculate how much to save, withdrawal amounts, and retirement income needs with inflation adjustments and scenario analysis. Perfect for individuals and financial planners.",

    howToSteps: [
      "Choose a calculation type: 'How much to save', 'Withdrawal amounts', or 'How long savings will last'.",
      "Enter your details: Current age, retirement age, income, and current savings.",
      "Adjust assumptions: Set expected investment returns, inflation rate, and tax considerations.",
      "Review the results: Analyze your projected nest egg and monthly income in retirement.",
      "Plan your strategy: Use the insights to adjust your savings rate or retirement timeline."
    ],

    features: [
      "Retirement Projections: Detailed analysis of savings growth and income needs.",
      "Inflation Adjustments: Account for rising costs to see 'real' value.",
      "Multiple Income Sources: Include Social Security, pensions, and other income.",
      "Scenario Analysis: Compare different savings rates and retirement ages.",
      "Withdrawal Strategies: Optimize how you draw down your savings.",
      "Tax Considerations: Factor in taxes on withdrawals (Traditional vs. Roth).",
      "Visual Charts: Interactive graphs showing savings longevity.",
      "Mobile Friendly: Plan your future from any device."
    ],

    useCases: [
      "Individuals: Set personal retirement goals and track progress.",
      "Financial Planning: Determine if you are on track to retire comfortably.",
      "Early Retirement (FIRE): Analyze feasibility of retiring before age 65.",
      "Catch-Up Planning: Strategies for those starting to save later in life.",
      "Income Optimization: Balance Social Security, 401(k), and IRA withdrawals.",
      "Inflation Protection: Ensure your purchasing power lasts through retirement."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Retirement Planning Strategies</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>10-15% Rule:</strong> Aim to save 10-15% of your pre-tax income annually.</li>
          <li><strong>4% Rule:</strong> A common guideline suggesting you can withdraw 4% of your portfolio in the first year of retirement and adjust for inflation thereafter.</li>
          <li><strong>Income Replacement:</strong> Plan to replace 70-80% of your pre-retirement income to maintain your standard of living.</li>
          <li><strong>Multiple of Income:</strong> Aim to save 15-25 times your annual income by retirement age.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Retirement Income Sources</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Social Security:</strong> Government benefits typically replacing ~40% of income for average earners.</li>
          <li><strong>401(k) & 403(b):</strong> Employer-sponsored plans, often with matching contributions.</li>
          <li><strong>IRAs:</strong> Individual Retirement Accounts (Traditional or Roth) for tax-advantaged savings.</li>
          <li><strong>Personal Savings:</strong> Taxable brokerage accounts, real estate, and other investments.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Why Start Early?</h3>
        <p className="mb-4">
          Compound interest is your best friend in retirement planning. Saving a small amount in your 20s can be more effective than saving a large amount in your 50s. Our calculator demonstrates the powerful impact of time on your investment growth.
        </p>
      </>
    ),

    proTip: "Don't forget about healthcare! Medical expenses can be a significant cost in retirement. Consider contributing to a Health Savings Account (HSA) if eligible, as it offers triple tax benefits and can be used for qualified medical expenses in retirement.",

    faqs: [
      {
        question: "How much should I save for retirement?",
        answer: "Experts generally recommend saving 10-15% of your annual income. Aiming for a nest egg of 10-12 times your final annual salary is a common goal."
      },
      {
        question: "What is the 4% rule?",
        answer: "It suggests withdrawing 4% of your retirement savings in the first year and adjusting for inflation annually. This strategy aims to make your money last for 30 years."
      },
      {
        question: "How does inflation affect my retirement?",
        answer: "Inflation reduces purchasing power. You'll need more money in the future to buy the same goods. Our calculator adjusts for inflation to show 'real' purchasing power."
      },
      {
        question: "When should I start saving?",
        answer: "Immediately. The earlier you start, the more time your money has to compound. Even small contributions early on can grow significantly over decades."
      },
      {
        question: "What is the difference between Traditional and Roth IRAs?",
        answer: "Traditional IRAs offer tax-deductible contributions now but taxable withdrawals later. Roth IRAs use after-tax money now but offer tax-free withdrawals in retirement."
      },
      {
        question: "How much will Social Security provide?",
        answer: "On average, it replaces about 40% of pre-retirement income. The exact amount depends on your earnings history and the age you claim benefits (62-70)."
      },
      {
        question: "Should I prioritize 401(k) or IRA?",
        answer: "Generally, contribute to your 401(k) up to the employer match first (it's free money). Then consider an IRA for more investment choices, and finally max out the 401(k)."
      },
      {
        question: "How do I plan for healthcare costs?",
        answer: "Budget for Medicare premiums, supplemental insurance, and out-of-pocket costs. HSAs are excellent vehicles for saving for future medical expenses tax-free."
      },
      {
        question: "What if I start saving late?",
        answer: "You'll need to save a higher percentage of your income. Take advantage of 'catch-up contributions' allowed in 401(k)s and IRAs for those over age 50."
      },
      {
        question: "How safe is the 4% rule today?",
        answer: "It's a guideline, not a guarantee. With lower bond yields and longer life expectancies, some experts suggest a more conservative 3-3.5% withdrawal rate."
      }
    ],

    relatedTools: [
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Retirement Calculator - Advanced Retirement Planning",
        description: "Professional retirement calculator for comprehensive retirement planning. Calculate how much to save, withdrawal amounts, and retirement income needs with inflation adjustments.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RetirementCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Retirement Calculator | Free Advanced Planning Calculator",
        description: "Professional retirement planning tool. Calculate savings, withdrawal amounts & retirement income needs with inflation adjustments.",
        path: "/finance-tools/retirement-calculator"
      }}
    />
  )
}