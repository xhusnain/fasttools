import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import FinanceCalculator from "@/components/finance/finance-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Finance Calculator | Free Advanced TVM Calculator",
  description:
    "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules and investment analysis.",
  path: "/finance-tools/finance-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Finance Calculator", href: "/finance-tools/finance-calculator" }
  ],
  schemaOptions: {
    name: "Finance Calculator | Advanced TVM Calculator",
    alternateName: "Professional Financial Analysis Tool",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Time Value of Money Calculations",
      "Future Value and Present Value",
      "Periodic Payment Calculations",
      "Interest Rate Determination",
      "Number of Periods Calculation",
      "Amortization Schedule Generation",
      "Investment Scenario Analysis"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function FinanceCalculatorPage() {
  const toolContent = {
    toolName: "Finance Calculator",
    overview: "Professional finance calculator for time value of money (TVM) calculations. Calculate Future Value (FV), Present Value (PV), Payment (PMT), Interest Rate (I/Y), and Number of Periods (N) with our advanced tool. Perfect for students, financial professionals, and personal investment planning.",

    howToSteps: [
      "Enter known values for FV, PV, PMT, I/Y, and N.",
      "Leave the field you want to calculate blank.",
      "Select 'End' or 'Beginning' for payment timing (End is standard for loans).",
      "Click 'Calculate' to solve for the missing variable.",
      "Review the detailed results and amortization schedule."
    ],

    features: [
      "TVM Calculations: Solve for any of the 5 TVM variables (FV, PV, PMT, I/Y, N).",
      "Amortization Schedules: View detailed breakdowns of principal and interest.",
      "Investment Analysis: Compare different investment scenarios and returns.",
      "Professional Compatibility: Uses formulas compatible with BA II Plus and HP 12CP.",
      "Payment Timing: Support for both End-of-Period and Beginning-of-Period payments.",
      "Visual Charts: Interactive graphs to visualize growth or payoff.",
      "Mobile Friendly: Fully responsive for calculations on the go."
    ],

    useCases: [
      "Students: Perfect for finance and accounting coursework (CFA, CPA prep).",
      "Professionals: Quick and accurate calculations for client meetings.",
      "Retirement Planning: Project future savings based on current contributions.",
      "Loan Analysis: Calculate payments, interest rates, or loan terms.",
      "Investment Strategy: Compare ROI on different investment opportunities.",
      "Lease vs. Buy: Analyze the financial impact of leasing versus buying assets."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is Time Value of Money (TVM)?</h3>
        <p className="mb-4">
          The Time Value of Money is a fundamental financial concept stating that money available today is worth more than the same amount in the future due to its potential earning capacity. This core principle underlies all interest and investment calculations.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Key Variables Explained</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>FV (Future Value):</strong> The value of an asset at a specific date in the future.</li>
          <li><strong>PV (Present Value):</strong> The current value of a future sum of money or stream of cash flows.</li>
          <li><strong>PMT (Payment):</strong> The amount paid or received periodically (e.g., monthly mortgage payment).</li>
          <li><strong>I/Y (Interest Rate):</strong> The annual interest rate per period.</li>
          <li><strong>N (Number of Periods):</strong> The total number of payment periods.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Professional Grade Accuracy</h3>
        <p className="mb-4">
          Our calculator uses the same standard formulas and numerical methods (Newton-Raphson) as professional financial calculators like the Texas Instruments BA II Plus and HP 12CP. This ensures you get precise results suitable for academic and professional use.
        </p>
      </>
    ),

    proTip: "Pay attention to the sign convention! In TVM calculations, money leaving your pocket (like a deposit or loan payment) is typically entered as a negative number, while money coming to you (like a loan amount received) is positive. Getting the signs right is crucial for accurate results.",

    faqs: [
      {
        question: "How accurate are the TVM calculations?",
        answer: "Our calculator uses industry-standard formulas identical to professional financial calculators (BA II Plus, HP 12CP), ensuring high precision for academic and professional use."
      },
      {
        question: "What is the difference between 'End' and 'Beginning' mode?",
        answer: "'End' mode assumes payments occur at the end of each period (standard for loans/mortgages). 'Beginning' mode assumes payments at the start (common for leases and annuities). This significantly affects the result."
      },
      {
        question: "Can I calculate the interest rate (I/Y)?",
        answer: "Yes. Enter PV, FV, N, and PMT, then leave I/Y blank. The calculator uses advanced numerical methods to solve for the effective interest rate."
      },
      {
        question: "How do I calculate loan payments?",
        answer: "Enter the loan amount as PV (positive), interest rate as I/Y, and term as N. Leave PMT blank and calculate. The result will be negative, representing money you pay out."
      },
      {
        question: "How do I calculate retirement savings?",
        answer: "Enter current savings as PV (negative), monthly contribution as PMT (negative), expected return as I/Y, and years to retirement as N. Calculate FV to see your projected nest egg."
      },
      {
        question: "Why is my result negative?",
        answer: "TVM calculations use cash flow sign conventions. Negative numbers represent cash outflows (investments, payments), while positive numbers represent inflows (loans received, withdrawals)."
      },
      {
        question: "Can I use this for business finance?",
        answer: "Yes, it's excellent for capital budgeting, NPV analysis (using PV), lease valuation, and evaluating business loan options."
      },
      {
        question: "How do I calculate ROI?",
        answer: "Enter initial investment as PV (negative), final value as FV (positive), and duration as N. Calculate I/Y to find your annual Return on Investment."
      },
      {
        question: "Is this calculator suitable for CFA/CPA exams?",
        answer: "While you can't use it during the exam, it's perfect for study and practice as it uses the same logic and formulas as approved exam calculators."
      },
      {
        question: "How do I calculate mortgage affordability?",
        answer: "Enter the monthly payment you can afford as PMT (negative), interest rate as I/Y, and term as N. Calculate PV to see the maximum loan amount you can afford."
      }
    ],

    relatedTools: [
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Compound Interest", href: "/finance-tools/compound-interest" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Finance Calculator - Advanced TVM Analysis",
        description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules and investment analysis.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Finance Calculator", href: "/finance-tools/finance-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <FinanceCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Finance Calculator | Free Advanced TVM Calculator",
        description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules and investment analysis.",
        path: "/finance-tools/finance-calculator"
      }}
    />
  )
}