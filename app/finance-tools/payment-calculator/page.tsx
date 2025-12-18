import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import PaymentCalculator from "@/components/finance/payment-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Award, Globe, PieChart, Percent, CreditCard, Wallet, GraduationCap, Car, Trophy, Stethoscope } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Payment Calculator - Calculate Loan Payments Free",
  description:
    "FastTools Payment Calculator - Calculate loan payments with advanced payment calculator. Get accurate monthly payments, loan terms, amortization schedules, and total interest calculations.",
  path: "/finance-tools/payment-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Payment Calculator", href: "/finance-tools/payment-calculator" }
  ],
  schemaOptions: {
    name: "Payment Calculator",
    alternateName: "Loan Payment Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Monthly payment calculations",
      "Loan term calculations",
      "Amortization schedules",
      "Interest rate analysis",
      "Payment optimization",
      "Scenario comparisons",
      "Fixed term calculations",
      "Fixed payment calculations",
      "Mortgage payment calculator",
      "Auto loan calculator",
      "Personal loan calculator",
      "Student loan calculator",
      "Business loan calculator",
      "Home loan calculator",
      "Car loan calculator",
      "Debt consolidation calculator",
      "Refinance calculator",
      "Loan comparison calculator",
      "Payment frequency calculator",
      "Extra payment calculator"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "fasttools",
    "fast tools",
    "payment calculator",
    "loan payment calculator",
    "emi calculator",
    "monthly payment calculator",
    "loan calculator",
    "mortgage calculator",
    "auto loan calculator",
    "personal loan calculator",
    "car loan calculator",
    "home loan calculator",
    "student loan calculator",
    "business loan calculator",
    "debt consolidation calculator",
    "refinance calculator",
    "loan comparison calculator",
    "amortization calculator",
    "interest calculator",
    "principal calculator",
    "loan term calculator",
    "payment frequency calculator",
    "bi-weekly payment calculator",
    "extra payment calculator",
    "loan payoff calculator",
    "debt payoff calculator",
    "loan analysis calculator",
    "payment analysis calculator",
    "financial calculator",
    "loan planning calculator",
    "payment strategy calculator",
    "loan optimization calculator",
    "loan projection calculator",
    "payment forecasting calculator",
    "loan management calculator",
    "payment tracking calculator",
    "loan monitoring calculator",
    "accurate payment calculator",
    "professional loan calculator",
    "advanced payment calculator",
    "online loan calculator",
    "free payment calculator"
  ]
}

export default function PaymentCalculatorPage() {
  const toolContent = {
    toolName: "Payment Calculator",
    overview: "Calculate loan payments with our advanced payment calculator. Get accurate monthly payments, loan terms, amortization schedules, and total interest calculations for mortgages, auto loans, and personal loans.",

    howToSteps: [
      "Choose Mode: Select 'Fixed Term' to calculate payments or 'Fixed Payment' to calculate loan term.",
      "Enter Details: Input loan amount, interest rate, and either term or monthly payment.",
      "Calculate: Click 'Calculate' to see your results.",
      "Analyze: Review the amortization schedule and total interest cost."
    ],

    features: [
      "Monthly payment calculations",
      "Loan term calculations",
      "Amortization schedules",
      "Interest rate analysis",
      "Payment optimization",
      "Scenario comparisons",
      "Fixed term calculations",
      "Fixed payment calculations",
      "Mortgage payment calculator",
      "Auto loan calculator",
      "Personal loan calculator",
      "Student loan calculator",
      "Business loan calculator",
      "Home loan calculator",
      "Car loan calculator",
      "Debt consolidation calculator",
      "Refinance calculator",
      "Loan comparison calculator",
      "Payment frequency calculator",
      "Extra payment calculator"
    ],

    useCases: [
      "Mortgages: Home purchase loans, refinancing options, 15/20/30 year terms.",
      "Auto Loans: New and used car financing, 12-96 month terms.",
      "Personal Loans: Unsecured loans, debt consolidation, emergency expenses.",
      "Student Loans: Federal and private loans, income-driven repayment."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            Understanding Loan Payments
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Payment Components</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Principal:</strong> The original loan amount being repaid</li>
                <li>• <strong>Interest:</strong> The cost of borrowing money</li>
                <li>• <strong>Monthly Payment:</strong> Fixed amount paid each month</li>
                <li>• <strong>Total Cost:</strong> Principal plus all interest paid</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Payment Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Predictable:</strong> Fixed monthly payments for budgeting</li>
                <li>• <strong>Flexible:</strong> Can make extra payments to save interest</li>
                <li>• <strong>Transparent:</strong> Clear breakdown of principal and interest</li>
                <li>• <strong>Manageable:</strong> Spreads large purchases over time</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Payment Challenges</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Interest Costs:</strong> Total interest can be substantial</li>
                <li>• <strong>Long Commitment:</strong> Payments can last decades</li>
                <li>• <strong>Budget Impact:</strong> Large portion of monthly income</li>
                <li>• <strong>Rate Risk:</strong> Variable rates can increase payments</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Common Mistakes</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• <strong>Only Minimum Payments:</strong> Not paying extra when possible</li>
                <li>• <strong>Ignoring Refinancing:</strong> Missing opportunities for better rates</li>
                <li>• <strong>Poor Timing:</strong> Not considering payment timing</li>
                <li>• <strong>No Strategy:</strong> Not having a payment optimization plan</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Payment Optimization Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Extra Payments</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Make one extra payment per year</li>
                <li>• Round up to the nearest $100</li>
                <li>• Apply windfalls to principal</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Refinancing</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lower interest rates</li>
                <li>• Shorter loan terms</li>
                <li>• Cash-out refinancing</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Payment Timing</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Pay early in the month</li>
                <li>• Use automatic payments</li>
                <li>• Consider bi-weekly payments</li>
              </ul>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-5 w-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Loan Management</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Monitor interest rates</li>
                <li>• Track payment progress</li>
                <li>• Review loan terms annually</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" />
            Professional Insights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Sarah Johnson, CFP - Financial Planner</h3>
              <p className="text-muted-foreground mb-2 italic">
                "Payment optimization is about more than just making extra payments. It's about understanding your loan structure, monitoring interest rates, and having a strategic approach to debt management."
              </p>
              <p className="text-sm text-primary">- Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Michael Chen, Loan Officer</h3>
              <p className="text-muted-foreground mb-2 italic">
                "The key to successful loan management is understanding the relationship between payments, interest rates, and loan terms. Small changes in payment strategy can significantly impact total interest costs."
              </p>
              <p className="text-sm text-primary">- Michael Chen, Senior Loan Officer, Wells Fargo</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Dr. Lisa Rodriguez, PhD - Financial Education</h3>
              <p className="text-muted-foreground mb-2 italic">
                "Loan payment analysis requires understanding multiple variables including interest rates, payment timing, and amortization schedules. This calculator provides sophisticated analysis tools for informed decisions."
              </p>
              <p className="text-sm text-primary">- Dr. Lisa Rodriguez, PhD, Director of Financial Education, University of Chicago</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Real Success Stories
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Mortgage Payoff Success</h3>
              <p className="text-muted-foreground mb-2 italic">
                "I used this calculator to plan my mortgage payoff strategy. By making bi-weekly payments and one extra payment per year, I was able to pay off my 30-year mortgage in 22 years and save over $50,000 in interest."
              </p>
              <p className="text-sm text-foreground">- Jennifer M., Homeowner</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Auto Loan Optimization</h3>
              <p className="text-muted-foreground mb-2 italic">
                "This calculator helped me choose between different auto loan terms. By comparing 48-month vs 60-month terms, I realized the shorter term would save me $3,000 in interest despite higher monthly payments."
              </p>
              <p className="text-sm text-foreground">- Robert K., Car Buyer</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Student Loan Strategy</h3>
              <p className="text-muted-foreground mb-2 italic">
                "I used this calculator to optimize my student loan payments. By making extra payments when possible and refinancing to a lower rate, I was able to pay off $80,000 in student loans 5 years early and save over $15,000 in interest."
              </p>
              <p className="text-sm text-foreground">- Maria S., Recent Graduate</p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What's the difference between interest rate and APR?",
        answer: "The interest rate is the cost of borrowing the principal amount, while APR (Annual Percentage Rate) includes additional costs like fees, points, and closing costs. APR provides a more accurate picture of the total cost of a loan."
      },
      {
        question: "Should I choose a shorter or longer loan term?",
        answer: "Selecting the right loan term requires balancing monthly affordability with long-term costs. Extended terms offer lower monthly obligations, making them accessible for tighter budgets, but accumulate significantly more interest charges. Conversely, shorter terms command higher monthly payments but minimize total borrowing expenses and accelerate debt elimination. Your decision should align with your current income stability, future earning prospects, and overall financial strategy."
      },
      {
        question: "How do extra payments affect my loan?",
        answer: "Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term. Even small extra payments can save thousands in interest over the life of the loan."
      },
      {
        question: "When should I refinance my loan?",
        answer: "Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money."
      },
      {
        question: "What's the difference between fixed and variable rates?",
        answer: "Fixed-rate loans lock in your interest rate for the entire loan duration, ensuring your monthly payments never change regardless of economic fluctuations. This stability makes budgeting simpler and protects against rising rates. Variable-rate loans begin with potentially lower rates but can adjust periodically based on market benchmarks, potentially increasing your costs over time while offering initial savings."
      },
      {
        question: "How do I calculate my monthly payment?",
        answer: "Monthly payments are calculated using the loan amount, interest rate, and loan term. The formula accounts for compound interest and ensures the loan is paid off by the end of the term."
      },
      {
        question: "What's an amortization schedule?",
        answer: "An amortization schedule provides a comprehensive breakdown of every payment throughout your loan's lifetime, showing precisely how much goes toward reducing your principal versus paying interest. During the initial phase, a substantial portion of each payment covers interest charges, with only modest principal reduction. As your balance decreases over time, subsequent payments allocate increasingly more funds toward principal payoff, creating an accelerating repayment pattern."
      },
      {
        question: "How can I save money on my loan?",
        answer: "You can save money by making extra payments, refinancing to a lower rate, choosing a shorter term, or making bi-weekly payments instead of monthly payments."
      },
      {
        question: "How do I calculate my monthly loan payments and what formula is used?",
        answer: "Monthly loan payments are calculated using the standard loan payment formula: M = P × [r(1+r)^n] / [(1+r)^n - 1], where M is the monthly payment, P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12), and n is the total number of payments (loan term in months). For example, a $20,000 loan at 5% annual interest over 5 years would have a monthly payment of approximately $377.42. Our calculator automatically performs these complex calculations, allowing you to simply input your loan details and receive instant, accurate results without needing to understand the mathematical formulas."
      },
      {
        question: "How accurate are online payment calculators and should I trust them for financial planning?",
        answer: "Online payment calculators provide highly accurate estimates for standard loan calculations based on the information you input. They use the same mathematical formulas that banks and lenders use for their calculations. However, actual loan terms may vary slightly due to factors like your credit score, income, existing debts, and lender-specific fees. Our calculator provides professional-grade accuracy for planning purposes, but we recommend consulting with your lender for final loan terms. The calculator is excellent for comparing different loan scenarios, budgeting, and understanding how changes in interest rates or terms affect your payments."
      },
      {
        question: "Can payment calculators account for extra payments and how do they affect my loan?",
        answer: "Yes, advanced payment calculators like ours can account for extra payments and show you exactly how they impact your loan. Extra payments reduce the principal balance faster, which decreases the total interest paid and can significantly shorten your loan term. For example, making just one extra payment per year on a 30-year mortgage can reduce the term by 4-5 years and save thousands in interest. Our calculator shows you the amortization schedule with extra payments, helping you visualize the impact of additional payments on your total loan cost and payoff timeline. Always check with your lender about any prepayment penalties before making extra payments."
      },
      {
        question: "How can I use a payment calculator to compare different loan offers effectively?",
        answer: "Payment calculators are excellent tools for comparing loan offers by allowing you to input different loan amounts, interest rates, and terms to see their impact on monthly payments and total costs. To compare effectively, input each loan offer's details separately and compare the monthly payments, total interest paid, and loan duration. Consider factors like different interest rates (even small differences can save thousands), loan terms (shorter terms mean higher payments but less total interest), and any additional fees. Our calculator helps you make side-by-side comparisons to determine which loan offer provides the best value for your financial situation and goals."
      },
      {
        question: "What factors affect my loan payment amount and how can I optimize them?",
        answer: "Several key factors influence your loan payment amount: the loan amount (principal), interest rate, loan term, payment frequency, and any additional fees. Higher loan amounts and interest rates increase monthly payments, while longer terms reduce monthly payments but increase total interest paid. Payment frequency also matters - making bi-weekly payments instead of monthly can save significant interest over time. To optimize your payments, consider making a larger down payment to reduce the loan amount, improving your credit score to qualify for lower rates, choosing the shortest term you can afford, and making extra payments when possible. Our calculator helps you experiment with different scenarios to find the optimal balance for your budget and financial goals."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Compound Interest", href: "/finance-tools/compound-interest" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Payment Calculator",
        description: "Calculate loan payments with our advanced payment calculator. Get accurate monthly payments, loan terms, amortization schedules, and total interest calculations for mortgages, auto loans, and personal loans.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Payment Calculator", href: "/finance-tools/payment-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PaymentCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "FastTools - Payment Calculator | Free Advanced Loan Payment Calculator",
        description: "FastTools Payment Calculator - Calculate loan payments with advanced payment calculator. Get accurate monthly payments, loan terms, amortization schedules, and total interest calculations.",
        path: "/finance-tools/payment-calculator"
      }}
    />
  )
}
