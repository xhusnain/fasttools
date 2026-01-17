import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { CompoundInterestCalculator } from "@/components/finance/compound-interest-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Compound Interest - Calculate Investment Growth Free",
  description:
    "Best free compound interest calculator online for. Calculate compound interest for SIP, fixed deposits, savings, retirement, loans. Supports India, UK, Canada, Australia with daily, monthly, quarterly, annual compounding.",
  path: "/finance-tools/compound-interest",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Compound Interest Calculator", href: "/finance-tools/compound-interest" }
  ],
  schemaOptions: {
    name: "Free Online Compound Interest Calculator",
    alternateName: "Compound Interest and Investment Calculator",
    applicationCategory: "FinanceApplication",
    ratingValue: "4.8",
    ratingCount: "1250",
    featureList: [
      "Multi-Country Interest Rates",
      "Real-Time Calculations",
      "Custom Interest Rates",
      "Yearly Breakdown",
      "Mobile-Responsive Design",
      "Daily, Monthly, Quarterly, Annual Compounding",
      "Investment Planning Tools",
      "No Registration Required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function CompoundInterestPage() {
  const toolContent = {
    toolName: "Compound Interest Calculator",
    overview: "Calculate compound interest for investments, savings, and retirement planning with our free online calculator. Supports multiple countries, currencies, and compounding frequencies (daily, monthly, quarterly, annual). Perfect for SIP calculations, fixed deposits, and long-term financial planning.",

    howToSteps: [
      "Select your country from 9+ options with real interest rates",
      "Enter your principal (initial investment amount)",
      "Set the time period (how long you plan to invest)",
      "Choose compounding frequency (daily, monthly, quarterly, annual)",
      "View detailed breakdown with yearly analysis and total interest earned"
    ],

    features: [
      "Multi-Country Support: 9+ countries including USA, UK, Canada, Australia, India, Germany, France, Japan, Pakistan",
      "Multiple Compounding Frequencies: Daily, monthly, quarterly, and annual compounding options",
      "Real Interest Rates: Pre-populated with current market rates for each country",
      "Custom Rates: Override default rates with your specific interest rate",
      "Detailed Breakdown: Year-by-year growth analysis showing principal and interest",
      "Investment Comparison: Compare compound vs simple interest visually",
      "Monthly Deposits: Calculate growth with regular monthly contributions",
      "Free & Private: No registration, all calculations happen in your browser"
    ],

    useCases: [
      "Retirement Planning: Project long-term savings growth for retirement goals",
      "SIP Calculations: Calculate Systematic Investment Plan returns",
      "Savings Accounts: Estimate growth in high-yield savings accounts",
      "Fixed Deposits: Compare FD returns across different banks",
      "Investment Analysis: Evaluate potential returns on investment portfolios",
      "Education Planning: Plan for future education expenses with compound growth",
      "Wealth Building: Understand how time and compounding build wealth"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is Compound Interest?</h3>
        <p className="mb-4">
          Compound interest is interest calculated on both the initial principal and all accumulated interest from previous periods. Unlike simple interest that only earns on the principal, compound interest creates exponential growth as you earn "interest on interest." Albert Einstein allegedly called it the "eighth wonder of the world."
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Compound Interest Formula</h3>
        <p className="mb-3 font-mono bg-muted p-3 rounded text-sm">
          A = P(1 + r/n)^(nt)
        </p>
        <p className="mb-4">
          Where: <strong>A</strong> = Final amount, <strong>P</strong> = Principal (initial investment), <strong>r</strong> = Annual interest rate (decimal), <strong>n</strong> = Compounding frequency per year, <strong>t</strong> = Time in years
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Compounding Frequencies Explained</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Daily:</strong> Interest compounds 365 times per year (n=365)</li>
          <li><strong>Monthly:</strong> Interest compounds 12 times per year (n=12)</li>
          <li><strong>Quarterly:</strong> Interest compounds 4 times per year (n=4)</li>
          <li><strong>Annual:</strong> Interest compounds once per year (n=1)</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">The Rule of 72</h3>
        <p className="mb-4">
          The Rule of 72 is a quick mental shortcut to estimate how long it takes for your money to double. Simply divide 72 by your annual interest rate percentage:
        </p>
        <div className="bg-muted p-4 rounded mb-6">
          <p className="font-semibold mb-2">Years to Double = 72 ÷ Interest Rate</p>
          <p className="text-sm">Example: At 8% interest, 72 ÷ 8 = 9 years to double your money</p>
          <p className="text-sm">Example: At 6% interest, 72 ÷ 6 = 12 years to double your money</p>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Compound vs Simple Interest</h3>
        <p className="mb-4">
          <strong>Simple Interest:</strong> Calculated only on the principal. $10,000 at 5% earns $500 every year, forever the same amount.
        </p>
        <p className="mb-6">
          <strong>Compound Interest:</strong> Calculated on principal + accumulated interest. $10,000 at 5% earns $500 year 1, $525 year 2, $551.25 year 3, and continues accelerating. After 30 years: simple interest = $25,000 total, compound interest = $43,219 total.
        </p>
      </>
    ),

    proTip: "Start investing early to maximize the power of compound interest. Even small amounts grow significantly over time. A 22-year-old investing $100/month at 7% will have more at 65 than a 32-year-old investing $200/month at the same rate - the 10-year head start makes that much difference!",

    faqs: [
      {
        question: "How do I calculate compound interest?",
        answer: "Use the formula A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual rate, n is compounding frequency, and t is time in years. Our calculator handles this automatically."
      },
      {
        question: "What's the difference between simple and compound interest?",
        answer: "Simple interest calculates returns only on your initial principal. Compound interest calculates earnings on both the original principal and all accumulated interest from prior periods, resulting in exponential growth over time."
      },
      {
        question: "How often should interest compound for maximum growth?",
        answer: "More frequent compounding (daily or monthly) generates higher returns than annual compounding. However, the difference between monthly and daily compounding is relatively small for most investment scenarios."
      },
      {
        question: "Can I use this calculator for retirement planning?",
        answer: "Yes! Enter your current savings, expected annual contributions using the monthly deposits feature, and time until retirement to project your retirement savings growth with compound interest."
      },
      {
        question: "Are the interest rates in this calculator current?",
        answer: "We use current market rates as a baseline for each country, but rates change frequently. Always verify with your financial institution for the most accurate current rates."
      },
      {
        question: "Can I calculate compound interest for different currencies?",
        answer: "Yes! Our calculator supports multiple countries and currencies including USD, EUR, GBP, CAD, AUD, JPY, INR, and PKR with their respective interest rates."
      },
      {
        question: "What is the compound interest formula?",
        answer: "The compound interest formula is A = P(1 + r/n)^(nt), where A = final amount, P = principal, r = annual interest rate, n = number of times interest compounds per year, and t = time in years."
      },
      {
        question: "How do I maximize compound interest growth?",
        answer: "To maximize compound interest: start early, invest regularly, choose higher interest rates when possible, select more frequent compounding periods, and let your money grow over time without withdrawing early."
      },
      {
        question: "Is this calculator free to use?",
        answer: "Yes, our compound interest calculator is completely free with no registration required. All features including custom rates, detailed analysis, and multiple country support are available at no cost."
      },
      {
        question: "How does monthly compounding vs annual compounding compare?",
        answer: "Monthly compounding yields slightly higher returns than annual compounding. For $10,000 at 5% over 10 years: annual compounding = $16,288.95, monthly compounding = $16,470.09, a difference of $181.14."
      },
      {
        question: "What's the best way to use compound interest for savings?",
        answer: "Start early, make regular contributions, choose accounts with higher interest rates, and select more frequent compounding periods. Our calculator's monthly deposits feature shows how regular contributions accelerate growth."
      },
      {
        question: "Can I calculate compound interest for my fixed deposit?",
        answer: "Yes! Select your country, enter your FD amount as principal, set the FD term as time period, choose quarterly compounding (most common for FDs), and enter your FD interest rate to see projected returns."
      },
      {
        question: "How do I calculate SIP returns with compound interest?",
        answer: "Use the monthly deposits feature in our calculator. Enter your initial investment (if any), monthly SIP amount as regular deposits, expected return rate, and investment duration to project SIP growth with compounding."
      },
      {
        question: "What happens if I withdraw early from a compound interest investment?",
        answer: "Early withdrawal can significantly impact returns because you lose out on future compounding. The longer you keep money invested, the more powerful compounding becomes. Many accounts also charge penalties for early withdrawal."
      },
      {
        question: "How accurate is this compound interest calculator?",
        answer: "Our calculator uses standard financial formulas employed by banks and financial institutions. Actual returns may vary based on market conditions, fees, taxes, and changes in interest rates. Use it for planning and estimation purposes."
      }
    ],

    relatedTools: [
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Online Compound Interest Calculator",
        description: "Calculate compound interest for SIP, FD, savings & retirement. Supports 9+ countries with daily, monthly & annual compounding.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Compound Interest Calculator", href: "/finance-tools/compound-interest" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CompoundInterestCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Free Compound Interest Calculator Online | Investment & SIP Calculator",
        description: "Best free compound interest calculator. Calculate SIP, FD, savings & retirement returns. Supports India, UK, USA & more.",
        path: "/finance-tools/compound-interest"
      }}
    />
  )
}