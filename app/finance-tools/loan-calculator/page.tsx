import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { EMICalculator } from "@/components/finance/emi-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Target, CheckCircle, Home, Car, CreditCard, GraduationCap, TrendingUp, BarChart3, Clock, Shield, Info } from "lucide-react"

const TOOL_TITLE = "Loan EMI Calculator - Calculate Installments Free"
const TOOL_NAME = "Loan EMI Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Free EMI calculator for home, car, personal & education loans. Calculate monthly EMI, total interest & amortization schedule. Works for all major banks.",
  path: "/finance-tools/loan-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/loan-calculator" }
  ],
  schemaOptions: {
    name: "Advanced EMI Calculator | Home Loan, Car Loan & Personal Loan Calculator",
    alternateName: "Loan Calculator, EMI Calculator India, Loan Payment Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Calculate EMI for various loan types",
      "Detailed amortization schedule",
      "Yearly payment breakdown",
      "Visual charts and graphs",
      "Prepayment calculations",
      "User-friendly interface",
      "Free to use",
      "RBI guidelines compliance"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "loan calculator",
    "emi calculator",
    "home loan calculator",
    "car loan calculator",
    "personal loan calculator",
    "education loan calculator",
    "loan amortization schedule",
    "loan interest calculator",
    "mortgage calculator",
    "auto loan calculator",
    "student loan calculator",
    "business loan calculator",
    "loan payment calculator",
    "emi calculator india",
    "sbi home loan calculator",
    "hdfc loan calculator"
  ]
}

export default function LoanCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Calculate monthly installment amounts for home loans, car loans, personal loans, and education loans. Get accurate EMI calculations, detailed loan amortization schedules, yearly payment breakdowns, and visual charts for comprehensive loan analysis.",

    howToSteps: [
      "Select Loan Type: Choose between Home Loan, Car Loan, Personal Loan, or Education Loan.",
      "Enter Loan Amount: Input the principal loan amount you wish to borrow.",
      "Set Interest Rate: Enter the annual interest rate offered by your lender.",
      "Choose Loan Tenure: Select the loan duration in years or months."
    ],

    features: [
      "Multi-Loan Support: Calculate EMI for Home, Car, Personal, and Education loans.",
      "Detailed Amortization: View month-by-month breakdown of principal and interest.",
      "Visual Analysis: Interactive charts and graphs for better financial understanding.",
      "Prepayment Options: Calculate impact of extra payments on loan tenure and interest.",
      "Yearly Breakdown: See annual summary of payments and outstanding balance.",
      "Bank Standard Accuracy: Uses standard formulas used by major banks (SBI, HDFC, ICICI).",
      "Mobile Friendly: Responsive design works perfectly on all devices.",
      "Free & Secure: No registration required, completely free to use."
    ],

    useCases: [
      "Home Loan Planning: Calculate monthly payments for house purchase.",
      "Car Loan Analysis: Estimate monthly installments for vehicle financing.",
      "Personal Loan Budgeting: Plan repayment for personal expenses.",
      "Education Loan Management: Calculate costs for higher education financing.",
      "Loan Comparison: Compare different loan offers and tenures.",
      "Prepayment Strategy: Analyze impact of extra payments on interest."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <CheckCircle className="h-6 w-6 text-primary" />
            What is EMI? Understanding Equated Monthly Installment
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              <strong>Equated Monthly Installment (EMI)</strong> is the fixed monthly payment amount that borrowers pay to banks like <strong>State Bank of India (SBI)</strong>, <strong>HDFC Bank</strong>, <strong>ICICI Bank</strong>, <strong>Axis Bank</strong>, and other financial institutions until the loan is fully repaid. According to <strong>Reserve Bank of India (RBI)</strong> guidelines, EMI consists of both the interest component and the principal repayment portion.
            </p>
            <p>
              Here's how it works: The <strong>monthly installment amount</strong> is calculated by distributing the combined principal and interest obligations across the loan's repayment period. Each EMI payment includes both components, with the interest portion being more substantial in earlier payments (typically 70-80% of the first EMI goes toward interest) and decreasing over time as the principal balance reduces.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">EMI Calculation Formula</h3>
              <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
              </code>
              <p className="text-xs text-muted-foreground mt-2">
                Where: P = Principal Loan Amount, r = Monthly Interest Rate (Annual Rate ÷ 12), n = Loan Tenure in Months
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Home className="h-6 w-6 text-primary" />
            Types of Loans and EMI Calculator Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-heading-accent" />
                <h3 className="text-lg font-semibold text-heading-accent">Home Loan EMI Calculator</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Tenure: 5-30 years (commonly 20-25 years)</li>
                <li>Interest Rate: 8.5% - 9.5% (varies by lender)</li>
                <li>Tax benefits on interest (Sec 24b) and principal (Sec 80C)</li>
                <li>Prepayment options available</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-heading-accent" />
                <h3 className="text-lg font-semibold text-heading-accent">Car Loan EMI Calculator</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Tenure: 1-7 years (commonly 4-5 years)</li>
                <li>Interest Rate: 8.5% - 11% (varies by lender)</li>
                <li>Fixed vs Floating rate options</li>
                <li>Calculates total cost of ownership</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-heading-accent" />
                <h3 className="text-lg font-semibold text-heading-accent">Personal Loan EMI Calculator</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Tenure: 1-5 years</li>
                <li>Interest Rate: 10.5% - 24% (unsecured)</li>
                <li>Quick disbursal, no collateral</li>
                <li>Ideal for short-term financial needs</li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-heading-accent" />
                <h3 className="text-lg font-semibold text-heading-accent">Education Loan EMI Calculator</h3>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Tenure: 5-15 years</li>
                <li>Interest Rate: 8% - 14%</li>
                <li>Moratorium period benefits</li>
                <li>Tax deduction on interest (Sec 80E)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <TrendingUp className="h-6 w-6 text-primary" />
            EMI vs Other Payment Methods
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Payment Method</th>
                  <th className="p-3">EMI</th>
                  <th className="p-3">Step-up EMI</th>
                  <th className="p-3">Step-down EMI</th>
                  <th className="p-3">Balloon Payment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Monthly Payment</td>
                  <td className="p-3">Fixed</td>
                  <td className="p-3">Increases</td>
                  <td className="p-3">Decreases</td>
                  <td className="p-3">Lower + Final Lump Sum</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Total Interest</td>
                  <td className="p-3">Standard</td>
                  <td className="p-3">Lower</td>
                  <td className="p-3">Higher</td>
                  <td className="p-3">Higher</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Suitability</td>
                  <td className="p-3">All borrowers</td>
                  <td className="p-3">Young professionals</td>
                  <td className="p-3">Senior citizens</td>
                  <td className="p-3">Business owners</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BarChart3 className="h-6 w-6 text-primary" />
            Advanced Features & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-heading-accent">Visual Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Our calculator provides interactive charts and graphs to visualize your loan journey. See exactly how your money is split between principal and interest over time.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Amortization charts</li>
                <li>Principal vs Interest breakdown</li>
                <li>Yearly payment summaries</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-heading-accent">Prepayment Planning</h3>
              <p className="text-sm text-muted-foreground">
                Understand the power of prepayments. Even small extra payments can significantly reduce your loan tenure and total interest paid.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Calculate interest savings</li>
                <li>Estimate tenure reduction</li>
                <li>Plan lump sum payments</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What is an Equated Monthly Installment (EMI)?",
        answer: "An Equated Monthly Installment (EMI) represents a consistent monthly repayment that borrowers commit to lenders on a predetermined schedule. Each installment combines portions of the borrowed principal with accrued interest charges, systematically reducing the outstanding loan balance until complete repayment is achieved within the agreed loan term."
      },
      {
        question: "How is EMI calculated?",
        answer: "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P = Principal loan amount, r = Monthly interest rate (annual rate divided by 12), n = Number of monthly installments. This standard formula is used by all banks including SBI, HDFC, ICICI, Axis Bank, and other financial institutions in India."
      },
      {
        question: "Can EMI amount change during the loan tenure?",
        answer: "Yes, EMI can change under certain conditions: Floating Interest Rate loans where EMI varies with market rates set by RBI, Prepayments that reduce principal, Loan Restructuring where terms are modified, and Interest Rate Resets for variable rate loans. Fixed-rate loans maintain the same EMI throughout the tenure."
      },
      {
        question: "What are the consequences of missing or skipping an EMI payment?",
        answer: "Missing or skipping EMI payments can result in several negative outcomes: Late Payment Penalties imposed by banks (typically 2-4% of EMI amount), Credit Score Damage that impacts your creditworthiness for future loans, Potential Legal Proceedings for repeated defaults including asset seizure, and Additional Interest Charges compounding on the overdue balance."
      },
      {
        question: "Is it beneficial to prepay my loan to reduce EMI?",
        answer: "Prepaying your loan can be highly beneficial: Interest Savings by reducing principal amount, Reduced Loan Tenure leading to earlier debt-free status, Lower Total Interest paid over the loan duration, and EMI Reduction if you choose to maintain the same tenure. However, check for prepayment penalties with your lender."
      },
      {
        question: "Which EMI calculator is best?",
        answer: "The best EMI calculator is one that provides accurate calculations, is easy to use, offers detailed breakdowns, and supports multiple loan types. Our EMI calculator uses the same formula that banks use, ensuring accuracy. It provides comprehensive features including detailed amortization schedules, yearly payment breakdowns, visual charts and graphs, and prepayment calculations."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Payment Calculator", href: "/finance-tools/payment-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Loan EMI Calculator - Calculate Monthly Installments",
        description: "Free EMI calculator for home, car, personal & education loans. Calculate monthly EMI, interest & amortization schedule instantly.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/loan-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <EMICalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free EMI calculator for home, car, personal & education loans. Calculate monthly EMI, total interest & amortization schedule. Works for all major banks.",
        path: "/finance-tools/loan-calculator"
      }}
    />
  )
}
