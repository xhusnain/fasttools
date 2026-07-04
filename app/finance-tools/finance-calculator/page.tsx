import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const FinanceCalculator = dynamic(() => import("@/components/finance/finance-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"

const TOOL_TITLE = "Finance Calculator — Time Value of Money (TVM, FV, PV, PMT)"
const TOOL_META_DESC = "Free finance calculator for time-value-of-money (TVM) math. Solve for any of FV (future value), PV (present value), PMT (payment), I/Y (interest rate), or N (number of periods). Works for investments, loans, annuities, retirement planning, and bond pricing."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/finance-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Finance Calculator", href: "/finance-tools/finance-calculator" }
  ],
  schemaOptions: {
    name: "Finance Calculator — TVM Solver",
    alternateName: [
      "TVM Calculator",
      "Time Value of Money Calculator",
      "Future Value Calculator",
      "Present Value Calculator",
      "Annuity Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "5-variable TVM solver: FV, PV, PMT, I/Y, N — solve for any one given the other four",
      "Future value of a single lump sum",
      "Future value of an annuity (recurring payments)",
      "Present value of a single lump sum",
      "Present value of an annuity",
      "Solve for required payment (PMT)",
      "Solve for required interest rate (I/Y)",
      "Solve for number of periods (N)",
      "Beginning vs end of period (annuity due vs ordinary annuity)",
      "Multiple compounding frequencies (daily, monthly, quarterly, annually)",
      "Amortization schedule output",
      "Standard scientific-calculator-style display",
      "Built-in TVM formula reference for students and finance classes",
      "100% client-side, no signup, no data uploaded",
    ],
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
    definition:
      "A finance calculator solves time-value-of-money variables such as future value, present value, payment, interest rate, and number of periods.",
    quickAnswer:
      "Enter four known TVM values and leave one blank to solve for FV, PV, PMT, I/Y, or N. Use it for loans, annuities, investments, retirement planning, bond math, and finance coursework.",
    keyTakeaways: [
      "TVM means money today is worth more than the same amount later because it can earn returns",
      "The five core variables are FV, PV, PMT, I/Y, and N",
      "Payment timing matters: ordinary annuity payments occur at period end; annuity due payments occur at period beginning",
      "Use negative values for cash outflows and positive values for cash inflows",
      "This replaces common BA II Plus or HP-style TVM calculations in a browser",
    ],
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
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Investment Calculator", href: "/finance-tools/compound-interest" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Payment Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Finance Calculator — TVM (FV, PV, PMT, I/Y, N)",
        description: "5-variable time-value-of-money solver. Solve for any one of FV, PV, PMT, I/Y, or N. Works for investments, loans, annuities, retirement planning, and bond pricing.",
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
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/finance-calculator"
      }}
    />
  )
}
