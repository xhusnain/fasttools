import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import InterestRateCalculator from "@/components/finance/interest-rate-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home } from "lucide-react"

const baseMetadata = createMetadata({
  title: "FastTools - Interest Rate Calculator | Free Advanced Loan Rate Calculator",
  description:
    "FastTools Interest Rate Calculator - Calculate real interest rates on loans with fixed terms and monthly payments. Advanced Newton-Raphson method for precise rate calculation and loan optimization.",
  path: "/finance-tools/interest-rate-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" }
  ],
  schemaOptions: {
    name: "Interest Rate Calculator",
    alternateName: "Loan Rate Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Newton-Raphson Method Calculation",
      "Amortization Schedule Generation",
      "Rate Comparison Analysis",
      "Payment Breakdown Analysis",
      "Loan Optimization Recommendations",
      "Rate Optimization Tips",
      "Refinancing Guidance",
      "Multi-Rate Comparison",
      "Payment History Tracking",
      "Professional Loan Analysis",
      "APR vs Interest Rate Analysis",
      "Fixed vs Variable Rate Comparison",
      "Simple vs Compound Interest",
      "Loan Term Optimization",
      "Credit Score Impact Analysis",
      "Refinancing Calculator",
      "Loan Comparison Tools",
      "Payment Schedule Generator",
      "Interest Rate Trends",
      "Financial Planning Tools"
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
    "interest rate calculator",
    "loan interest rate calculator",
    "simple interest rate calculator",
    "compound interest rate calculator",
    "effective interest rate calculator",
    "monthly interest rate calculator",
    "annual interest rate calculator",
    "interest rate calculator online",
    "loan rate calculator",
    "mortgage interest rate calculator",
    "personal loan interest calculator",
    "car loan interest calculator",
    "credit card interest rate calculator",
    "fixed deposit interest rate calculator",
    "savings interest rate calculator",
    "FD interest calculator",
    "bank interest rate calculator",
    "investment interest calculator",
    "interest rate finder",
    "interest calculator tool",
    "interest rate comparison",
    "interest rate analysis",
    "interest rate estimation",
    "interest rate computation",
    "interest rate formula calculator",
    "interest amount calculator",
    "loan repayment interest calculator",
    "loan cost calculator",
    "calculate loan interest rate",
    "calculate bank interest",
    "calculate savings interest",
    "how to calculate interest rate",
    "interest rate calculator with steps",
    "interest calculator app",
    "interest calculator free online",
    "interest rate calculator accurate",
    "daily interest rate calculator",
    "weekly interest calculator",
    "quarterly interest calculator",
    "APR calculator",
    "APY calculator",
    "rate of return calculator",
    "financial interest calculator",
    "investment return calculator",
    "interest calculator Pakistan",
    "interest calculator India",
    "interest calculator UK",
    "interest calculator USA"
  ]
}

export default function InterestRateCalculatorPage() {
  const toolContent = {
    toolName: "Interest Rate Calculator",
    overview: "Calculate real interest rates on loans with our advanced interest rate calculator. Get precise rate calculations, amortization analysis, loan optimization, and professional recommendations for optimal financial planning.",

    howToSteps: [
      "Enter Loan Details: Input loan amount, term (years/months), and monthly payment amount.",
      "Calculate Interest Rate: Our calculator uses Newton-Raphson method for precise rate calculation.",
      "Analyze Results: Review calculated rate, total interest, and optimization recommendations.",
      "Get Professional Insights: Receive detailed amortization analysis and loan optimization tips."
    ],

    features: [
      "Newton-Raphson Method Calculation",
      "Amortization Schedule Generation",
      "Rate Comparison Analysis",
      "Payment Breakdown Analysis",
      "Loan Optimization Recommendations",
      "Rate Optimization Tips",
      "Refinancing Guidance",
      "Multi-Rate Comparison",
      "Payment History Tracking",
      "Professional Loan Analysis",
      "APR vs Interest Rate Analysis",
      "Fixed vs Variable Rate Comparison",
      "Simple vs Compound Interest",
      "Loan Term Optimization",
      "Credit Score Impact Analysis",
      "Refinancing Calculator",
      "Loan Comparison Tools",
      "Payment Schedule Generator",
      "Interest Rate Trends",
      "Financial Planning Tools"
    ],

    useCases: [
      "For Borrowers & Consumers: Calculate actual interest rates, compare loan offers, understand true cost, plan refinancing, analyze dealer offers.",
      "For Financial Planning: Optimize loan terms, calculate refinancing benefits, plan debt consolidation, analyze investment vs loan decisions, professional advice."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Understanding Interest Rates
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">What is Interest Rate?</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                An interest rate represents the fee that financial institutions charge customers when lending funds, calculated as a percentage of the loan's original principal amount. This percentage determines your borrowing expenses and significantly impacts the cumulative interest amount you'll pay throughout your loan's lifetime.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Example:</strong> 8% interest rate on $100 = $8 interest per year</div>
                  <div><strong>Total Cost:</strong> $100 principal + $8 interest = $108 at year-end</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Simple vs. Compound Interest</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Simple interest is calculated on principal only, while compound interest is calculated on principal plus accrued interest. Most loans use compound interest, which means interest earns interest over time.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Simple Interest</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Calculated on principal only</li>
                    <li>• Interest = Principal × Rate × Time</li>
                    <li>• Used in some short-term loans</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Compound Interest</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Calculated on principal + interest</li>
                    <li>• Interest earns interest over time</li>
                    <li>• Used in most modern loans</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Fixed vs. Variable Rates</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Fixed rates remain constant throughout the loan term, while variable rates can fluctuate based on market conditions, inflation, or other economic factors.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Fixed Rates</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rate stays the same</li>
                    <li>• Predictable payments</li>
                    <li>• Higher initial rates</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Variable Rates</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rate can change</li>
                    <li>• Payment amounts vary</li>
                    <li>• Lower initial rates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is the Newton-Raphson method?",
        answer: "The Newton-Raphson method is highly accurate for interest rate calculations, typically converging to within 0.001% of the true rate. It's the industry standard for complex financial calculations and provides precise results for loan analysis."
      },
      {
        question: "Can I use this for any type of loan?",
        answer: "Yes, this calculator works for any fixed-rate loan including mortgages, auto loans, personal loans, and business loans. It's particularly useful when you know the payment amount but not the rate, which is common with dealer financing."
      },
      {
        question: "What if my loan has variable rates?",
        answer: "This calculator is designed for fixed-rate loans. For variable-rate loans, you would need to know the current rate or use a different calculation method that accounts for rate changes over time."
      },
      {
        question: "How does this compare to online loan calculators?",
        answer: "Most online calculators require you to input the interest rate to calculate payments. This calculator does the reverse - it finds the rate when you know the payment amount, which is often the case with dealer financing and existing loans."
      },
      {
        question: "What factors affect interest rates?",
        answer: "Interest rates are affected by credit score, loan term, down payment, loan type, economic conditions, and lender policies. Higher credit scores and shorter terms typically result in lower rates, while economic factors can cause rate fluctuations."
      },
      {
        question: "How do interest rates affect my monthly mortgage payments?",
        answer: "Interest rates directly influence your monthly mortgage payments. A higher interest rate increases your monthly payment, while a lower rate decreases it. For example, on a $300,000 loan at 7.5% interest, your monthly payment would be approximately $2,100. If the rate drops to 6.5%, the payment decreases to about $1,900, saving you $200 per month. Even a 0.5% difference can save thousands over the life of your loan."
      },
      {
        question: "What factors determine the interest rate I receive on my loan?",
        answer: "Several key factors influence the interest rate offered to you: Credit Score (higher scores secure lower rates), Loan Amount and Term (larger loans or longer terms may carry different rates), Down Payment (larger down payments reduce lender risk and can lower rates), Market Conditions (Federal Reserve policies and economic factors affect prevailing rates), Loan Type (secured loans typically have lower rates than unsecured), and Employment History (stable income demonstrates repayment ability). Understanding these factors helps you position yourself for better rates."
      },
      {
        question: "Is it beneficial to pay points to lower my interest rate?",
        answer: "Paying points (upfront fees to reduce your interest rate) can be advantageous if you plan to stay in your home for several years. Each point typically costs 1% of your loan amount and reduces your rate by 0.25%. For example, on a $400,000 loan, paying 2 points ($8,000) might reduce your rate from 7% to 6.5%, saving about $200 monthly. You'd break even in about 3.3 years. However, if you plan to sell or refinance soon, the upfront cost may not be recouped through monthly savings."
      },
      {
        question: "How often do interest rates change and what causes fluctuations?",
        answer: "Interest rates can fluctuate daily based on market conditions, economic indicators, and Federal Reserve policies. Key factors include Federal Reserve decisions (Fed meetings every 6-8 weeks), Economic indicators (inflation rates, employment data, GDP growth), Market demand (high loan demand drives rates up, low demand lowers them), Global events (economic uncertainty can affect rates), and Bond market performance (10-year Treasury yields influence mortgage rates). Rates can change multiple times per day, which is why it's important to lock in rates when you find a favorable one."
      },
      {
        question: "Can I negotiate my interest rate with lenders and how?",
        answer: "Yes, interest rates can often be negotiated! To improve your negotiating position: Improve your credit score (scores above 750 qualify for the best rates), Shop around with multiple lenders (get quotes from at least 3-5 lenders), Consider paying points (upfront fees can lower your rate), Show strong financials (stable income, low debt-to-income ratio), Be prepared to walk away (lenders may offer better terms to keep your business), and Time your application (rates can vary by season and market conditions). Many borrowers successfully negotiate 0.125% to 0.5% lower rates, which can save thousands over the loan term."
      }
    ],

    relatedTools: [
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Interest Rate Calculator",
        description: "Calculate real interest rates on loans with our advanced interest rate calculator. Get precise rate calculations, amortization analysis, loan optimization, and professional recommendations for optimal financial planning.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <InterestRateCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "FastTools - Interest Rate Calculator | Free Advanced Loan Rate Calculator",
        description: "FastTools Interest Rate Calculator - Calculate real interest rates on loans with fixed terms and monthly payments. Advanced Newton-Raphson method for precise rate calculation and loan optimization.",
        path: "/finance-tools/interest-rate-calculator"
      }}
    />
  )
}