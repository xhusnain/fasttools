import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const AmortizationCalculator = dynamic(() => import("@/components/finance/amortization-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Amortization Calculator | Free Loan Payment Calculator",
  description:
    "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings.",
  path: "/finance-tools/amortization-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Amortization Calculator", href: "/finance-tools/amortization-calculator" }
  ],
  schemaOptions: {
    name: "Amortization Calculator | Advanced Loan Payment Calculator",
    alternateName: "Professional Loan Analysis Tool",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Monthly Payment Calculations",
      "Amortization Schedules",
      "Extra Payment Analysis",
      "Interest and Principal Breakdowns",
      "Payment Optimization",
      "Loan Comparison Tools",
      "Refinancing Analysis"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function AmortizationCalculatorPage() {
  const toolContent = {
    toolName: "Amortization Calculator",
    overview: "Professional amortization calculator for detailed loan payment analysis with comprehensive amortization schedules. Calculate monthly payments, interest costs, and extra payment savings with our advanced loan calculator. Perfect for mortgages, auto loans, and personal loans.",

    howToSteps: [
      "Enter loan details: Loan amount, term (years/months), and interest rate.",
      "Add optional extra payments to see how much you can save.",
      "Review the monthly payment and total interest cost.",
      "Analyze the amortization schedule to track principal vs. interest over time.",
      "Use the charts to visualize loan balance reduction."
    ],

    features: [
      "Amortization Schedules: Detailed month-by-month breakdown of principal and interest.",
      "Extra Payment Analysis: Calculate savings from additional payments.",
      "Payment Optimization: Compare different strategies to minimize interest.",
      "Loan Comparison: Evaluate different loan terms and rates side by side.",
      "Refinancing Analysis: See potential savings from rate changes.",
      "Real-time Calculations: Instant updates as you adjust parameters.",
      "Visual Charts: Interactive graphs showing loan payoff progress.",
      "Mobile Friendly: Works perfectly on all devices."
    ],

    useCases: [
      "Mortgages: Plan home loan payments and payoff strategies.",
      "Auto Loans: Calculate monthly costs for new or used cars.",
      "Personal Loans: Analyze repayment plans for debt consolidation.",
      "Business Loans: Estimate costs for equipment or working capital.",
      "Student Loans: Plan repayment strategies for education debt.",
      "Refinancing: Determine if refinancing makes financial sense."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is Amortization?</h3>
        <p className="mb-4">
          Amortization is the process of paying off a debt over time through regular payments. A portion of each payment goes toward the principal (the loan amount) and the rest goes toward interest. Early in the loan term, a larger portion of your payment goes to interest. As the loan matures, more of your payment goes toward reducing the principal.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Payment Strategies</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Extra Payments:</strong> Making additional payments toward the principal reduces the loan balance faster, saving interest and shortening the term.</li>
          <li><strong>Bi-Weekly Payments:</strong> Paying half your monthly payment every two weeks results in one extra full payment per year, accelerating payoff.</li>
          <li><strong>Refinancing:</strong> Replacing your current loan with a new one at a lower interest rate can significantly reduce monthly payments and total interest.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Why Use an Amortization Calculator?</h3>
        <p className="mb-4">
          Understanding your amortization schedule empowers you to make better financial decisions. You can see exactly how much of your payment is "wasted" on interest versus building equity. This tool helps you visualize the impact of extra payments, showing you precisely how much time and money you can save.
        </p>
      </>
    ),

    proTip: "Even small extra payments can have a huge impact. Rounding up your payment to the nearest $50 or $100 is an effortless way to pay off your loan faster and save on interest without drastically affecting your monthly budget.",

    faqs: [
      {
        question: "How accurate are the amortization calculations?",
        answer: "Our calculator uses standard financial formulas employed by banks and financial institutions, ensuring professional-grade accuracy for your planning."
      },
      {
        question: "What's the difference between principal and interest?",
        answer: "Principal is the amount borrowed. Interest is the cost of borrowing. Early payments are mostly interest; later payments are mostly principal."
      },
      {
        question: "How do extra payments affect my loan?",
        answer: "Extra payments reduce the principal balance directly. This lowers the interest charged in future periods and shortens the overall loan term."
      },
      {
        question: "Should I make extra payments or invest?",
        answer: "Compare your loan rate to expected investment returns. If you can earn more investing (after taxes) than your loan rate, investing might be better. Paying debt offers a guaranteed 'return'."
      },
      {
        question: "Bi-weekly vs. monthly payments?",
        answer: "Bi-weekly payments result in 26 half-payments per year, equivalent to 13 full monthly payments. This extra payment annually accelerates payoff and saves interest."
      },
      {
        question: "When should I refinance?",
        answer: "Consider refinancing if rates drop, your credit improves, or you want to change the term. Ensure the monthly savings outweigh the closing costs (break-even point)."
      },
      {
        question: "How does loan term affect interest?",
        answer: "Shorter terms (e.g., 15 years) have higher monthly payments but much lower total interest. Longer terms (e.g., 30 years) have lower monthly payments but higher total interest."
      },
      {
        question: "Can I change my payment amount?",
        answer: "You can usually pay more (extra principal) without penalty, but you cannot pay less than the required amount without refinancing or loan modification."
      },
      {
        question: "What is negative amortization?",
        answer: "It occurs when payments don't cover the interest due, causing the loan balance to grow. Standard amortizing loans avoid this by setting payments high enough to cover interest and principal."
      },
      {
        question: "How do I calculate break-even for refinancing?",
        answer: "Divide total closing costs by monthly savings. The result is the months needed to recover the costs. If you stay longer than this, refinancing saves money."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Amortization Calculator - Advanced Loan Analysis",
        description: "Professional amortization calculator for detailed loan payment analysis with comprehensive amortization schedules. Calculate monthly payments, interest costs, and extra payment savings.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Amortization Calculator", href: "/finance-tools/amortization-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AmortizationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Amortization Calculator - Analyze Loan Payoff",
        description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings.",
        path: "/finance-tools/amortization-calculator"
      }}
    />
  )
}