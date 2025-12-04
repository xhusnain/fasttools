import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import MortgageCalculator from "@/components/finance/mortgage-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Mortgage Calculator | Free Advanced Home Loan Calculator",
  description:
    "Calculate mortgage payments with our advanced calculator. Get accurate monthly payments, amortization schedules & total interest costs.",
  path: "/finance-tools/mortgage-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" }
  ],
  schemaOptions: {
    name: "Mortgage Calculator | Advanced Home Loan Calculator",
    alternateName: "Professional Mortgage Analysis Tool",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Monthly payment calculations",
      "Amortization schedules",
      "Property tax calculations",
      "Home insurance costs",
      "PMI calculations",
      "HOA fee calculations",
      "Payment optimization",
      "Scenario comparisons"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function MortgageCalculatorPage() {
  const toolContent = {
    toolName: "Mortgage Calculator",
    overview: "Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs for all mortgage types. Free, professional-grade mortgage analysis for optimal home buying decisions.",

    howToSteps: [
      "Enter basic loan information: Home price, down payment, loan term, and interest rate.",
      "Add additional costs: Property taxes, home insurance, PMI, and HOA fees.",
      "Review the calculated monthly payment breakdown.",
      "Check the amortization schedule to see principal vs. interest over time.",
      "Experiment with extra payments to see how much interest you can save."
    ],

    features: [
      "Amortization Schedules: Detailed payment breakdowns showing principal and interest.",
      "Scenario Analysis: Compare different interest rates and terms.",
      "PMI Calculations: Automatic PMI calculation for down payments under 20%.",
      "Payment Timing: Bi-weekly and monthly payment options.",
      "Comprehensive Costs: Includes property taxes, insurance, and HOA fees.",
      "Visual Graphs: Interactive charts for loan balance and interest.",
      "Mobile Friendly: Fully responsive design for all devices.",
      "No Registration: Free to use without signing up."
    ],

    useCases: [
      "Home Buying: Estimate monthly payments for new home purchases.",
      "Refinancing: Compare current loan terms with new offers.",
      "Budget Planning: Determine affordability based on income and debts.",
      "Debt Payoff: Strategize extra payments to pay off mortgage faster.",
      "Investment Analysis: Calculate returns on rental properties.",
      "Loan Comparison: Evaluate Fixed-rate vs. Adjustable-rate mortgages."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Mortgages</h3>
        <p className="mb-4">
          A mortgage is a loan used to purchase or maintain a home, land, or other types of real estate. The borrower agrees to pay the lender over time, typically in a series of regular payments that are divided into principal and interest. The property serves as collateral to secure the loan.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Types of Mortgages</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Fixed-Rate Mortgages:</strong> The interest rate remains the same for the entire term of the loan (commonly 15 or 30 years), providing predictable monthly payments.</li>
          <li><strong>Adjustable-Rate Mortgages (ARMs):</strong> The interest rate is fixed for an initial period and then fluctuates with market conditions, potentially changing your monthly payment.</li>
          <li><strong>Government-Backed Loans:</strong> FHA, VA, and USDA loans offer lower down payment options and flexible credit requirements for qualified borrowers.</li>
          <li><strong>Jumbo Loans:</strong> For luxury properties that exceed conforming loan limits, often requiring higher credit scores and down payments.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Mortgage Payment Strategies</h3>
        <p className="mb-4">
          Optimizing your mortgage payment can save you thousands in interest. Strategies include making one extra payment per year, rounding up payments, or refinancing to a lower rate or shorter term. Even small additional payments applied to the principal can significantly shorten your loan term.
        </p>
      </>
    ),

    proTip: "Making one extra mortgage payment each year can shave years off your loan term and save you thousands of dollars in interest. You can achieve this by paying 1/12th extra each month or making a lump sum payment annually.",

    faqs: [
      {
        question: "What's included in a mortgage payment?",
        answer: "A mortgage payment typically includes principal, interest, property taxes, home insurance, and sometimes PMI (Private Mortgage Insurance) and HOA fees."
      },
      {
        question: "How much should I put down on a house?",
        answer: "The traditional 20% down payment eliminates PMI and often secures better rates. However, FHA loans allow 3.5% down, and VA/USDA loans offer 0% down options. A larger down payment reduces monthly payments and total interest."
      },
      {
        question: "What's the difference between APR and interest rate?",
        answer: "The interest rate is the cost of borrowing funds. The APR (Annual Percentage Rate) includes the interest rate plus other costs like origination fees and closing costs, providing a more complete picture of the loan's cost."
      },
      {
        question: "Should I choose a 15-year or 30-year mortgage?",
        answer: "15-year mortgages have higher monthly payments but lower interest rates and total interest costs. 30-year mortgages offer lower monthly payments but result in higher total interest paid over the life of the loan."
      },
      {
        question: "When should I refinance my mortgage?",
        answer: "Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms (e.g., shorten the term). Ensure the savings outweigh the closing costs."
      },
      {
        question: "How do extra payments affect my mortgage?",
        answer: "Extra payments applied to the principal reduce the loan balance faster, decreasing total interest paid and shortening the loan term."
      },
      {
        question: "What is Private Mortgage Insurance (PMI)?",
        answer: "PMI protects the lender if you default. It's typically required if your down payment is less than 20%. You can remove PMI once you reach 20% equity in your home."
      },
      {
        question: "How do I determine the maximum mortgage I can afford?",
        answer: "Use the 28/36 rule: Housing expenses shouldn't exceed 28% of gross monthly income, and total debt shouldn't exceed 36%. Our calculator helps you estimate affordability based on your income and debts."
      },
      {
        question: "How does my credit score affect my mortgage?",
        answer: "Higher credit scores generally qualify for lower interest rates, reducing monthly payments and total interest. Improving your score before applying can save you significant money."
      },
      {
        question: "Fixed-rate vs. Adjustable-rate mortgage (ARM)?",
        answer: "Fixed-rate offers stability with constant payments. ARMs may have lower initial rates but can increase later. Choose Fixed for long-term stability, or ARM if you plan to move or refinance before the rate adjusts."
      }
    ],

    relatedTools: [
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Compound Interest", href: "/finance-tools/compound-interest" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Mortgage Calculator - Advanced Home Loan Calculator",
        description: "Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MortgageCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Mortgage Calculator | Free Advanced Home Loan Calculator",
        description: "Calculate mortgage payments with our advanced calculator. Get accurate monthly payments, amortization schedules & total interest costs.",
        path: "/finance-tools/mortgage-calculator"
      }}
    />
  )
}