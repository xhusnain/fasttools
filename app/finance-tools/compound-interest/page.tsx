import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const CompoundInterestCalculator = dynamic(() => import("@/components/finance/compound-interest-calculator").then(mod => mod.CompoundInterestCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"

const TOOL_META_TITLE = "Compound Interest Calculator — Daily, Monthly, Quarterly & Annual"
const TOOL_META_DESC = "Free compound interest calculator with daily, monthly, quarterly, and annual compounding. Calculate growth on savings, investments, SIPs, fixed deposits, and retirement accounts. Shows yearly breakdown, total interest earned, and compares against simple interest."

const baseMetadata = createMetadata({
  title: TOOL_META_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/compound-interest",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Compound Interest Calculator", href: "/finance-tools/compound-interest" }
  ],
  schemaOptions: {
    name: "Compound Interest Calculator with Yearly Breakdown",
    alternateName: [
      "Investment Growth Calculator",
      "Savings Calculator",
      "Investment Return Calculator",
      "Compound Growth Calculator",
      "SIP Calculator",
      "Fixed Deposit (FD) Calculator",
      "Wealth Calculator",
      "Future Value Calculator",
      "Simple Interest vs Compound Interest Calculator",
      "Daily Compound Interest Calculator",
      "Monthly Compound Interest Calculator",
      "Annual Compound Interest Calculator",
      "Rule of 72 Calculator",
      "Interest on Interest Calculator",
      "Money Doubling Calculator",
    ],
    applicationCategory: "FinanceApplication",
    ratingValue: "4.8",
    ratingCount: "5240",
    featureList: [
      "Daily, monthly, quarterly, semi-annual, annual, and continuous compounding",
      "Lump-sum or monthly/yearly recurring contribution support",
      "Year-by-year growth table with principal and accumulated interest split",
      "Compound vs simple interest side-by-side comparison",
      "Rule of 72 'years to double' shortcut",
      "Future value (FV) and present value (PV) modes",
      "Multi-country support (US, UK, Canada, Australia, India, EU, Japan, Pakistan)",
      "Currency-aware (USD, EUR, GBP, CAD, AUD, JPY, INR, PKR)",
      "SIP (Systematic Investment Plan) calculation for India / South Asia",
      "Fixed deposit (FD) calculation for India / South Asia",
      "Inflation-adjusted 'real' value output option",
      "Visual chart of compound growth curve",
      "100% client-side — no signup, no data ever leaves your browser",
      "Free, no usage limits",
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

        <h3 className="font-semibold text-lg mb-2 mt-6">Time Matters More Than Amount — A Comparison</h3>
        <p className="mb-3">
          The single biggest factor in compound growth is TIME, not the amount you contribute. Two examples at 7% annual return:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left border-b border-border">Investor</th>
                <th className="p-3 text-left border-b border-border">Saves</th>
                <th className="p-3 text-left border-b border-border">From → To</th>
                <th className="p-3 text-left border-b border-border">Total contributed</th>
                <th className="p-3 text-left border-b border-border">Balance at 65 (7%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-semibold">Early Eric</td><td className="p-3">$5,000/yr</td><td className="p-3">Age 25 → 35 (10 yrs only)</td><td className="p-3">$50,000</td><td className="p-3 text-green-600">~$602,000</td></tr>
              <tr><td className="p-3 font-semibold">Late Larry</td><td className="p-3">$5,000/yr</td><td className="p-3">Age 35 → 65 (30 yrs)</td><td className="p-3">$150,000</td><td className="p-3">~$540,000</td></tr>
              <tr><td className="p-3 font-semibold">Steady Sarah</td><td className="p-3">$5,000/yr</td><td className="p-3">Age 25 → 65 (40 yrs)</td><td className="p-3">$200,000</td><td className="p-3 text-green-600">~$1,142,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6">
          Eric contributed $50K and stopped at 35. Larry contributed 3× more but started 10 years later — and ended up with LESS. This is the &quot;cost of waiting.&quot; Every year you delay starting costs more than you might think.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Typical Return Rates by Asset Class</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left border-b border-border">Asset class</th>
                <th className="p-3 text-left border-b border-border">Historical avg annual return</th>
                <th className="p-3 text-left border-b border-border">Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-semibold">High-yield savings account</td><td className="p-3">~4-5% (when rates are high)</td><td className="p-3">Very low (FDIC insured)</td></tr>
              <tr><td className="p-3 font-semibold">Certificate of deposit (CD)</td><td className="p-3">~4-5%</td><td className="p-3">Very low (FDIC insured)</td></tr>
              <tr><td className="p-3 font-semibold">US Treasury bonds (10-yr)</td><td className="p-3">~4-5%</td><td className="p-3">Low</td></tr>
              <tr><td className="p-3 font-semibold">Corporate bonds (investment grade)</td><td className="p-3">~5-6%</td><td className="p-3">Low-medium</td></tr>
              <tr><td className="p-3 font-semibold">S&P 500 index fund (long-run avg)</td><td className="p-3">~10% nominal / ~7% real (after inflation)</td><td className="p-3">Medium-high (volatile year to year)</td></tr>
              <tr><td className="p-3 font-semibold">Real estate (long-run avg)</td><td className="p-3">~8-10% total return (rent + appreciation)</td><td className="p-3">Medium-high</td></tr>
              <tr><td className="p-3 font-semibold">High-yield (junk) bonds</td><td className="p-3">~6-8%</td><td className="p-3">High</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">FastTools vs Other Compound Interest Calculators</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border border-border">
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left border-b border-border">Feature</th>
                <th className="p-3 text-left border-b border-border text-green-600">FastTools</th>
                <th className="p-3 text-left border-b border-border">Investor.gov</th>
                <th className="p-3 text-left border-b border-border">NerdWallet</th>
                <th className="p-3 text-left border-b border-border">Calculator.net</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr><td className="p-3 font-semibold">Daily / monthly / quarterly / annual</td><td className="p-3 text-green-600">all + continuous</td><td className="p-3">limited</td><td className="p-3">limited</td><td className="p-3">all</td></tr>
              <tr><td className="p-3 font-semibold">Recurring contributions (monthly/yearly)</td><td className="p-3 text-green-600">both</td><td className="p-3">monthly only</td><td className="p-3">monthly only</td><td className="p-3">both</td></tr>
              <tr><td className="p-3 font-semibold">Multi-country / multi-currency</td><td className="p-3 text-green-600">8+ countries</td><td className="p-3 text-red-500">US only</td><td className="p-3 text-red-500">US only</td><td className="p-3 text-red-500">US only</td></tr>
              <tr><td className="p-3 font-semibold">SIP / FD modes (India / S Asia)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
              <tr><td className="p-3 font-semibold">Compound vs simple comparison</td><td className="p-3 text-green-600">✓ in-page</td><td className="p-3">separate article</td><td className="p-3">separate article</td><td className="p-3 text-green-600">✓</td></tr>
              <tr><td className="p-3 font-semibold">Inflation-adjusted real value</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td></tr>
              <tr><td className="p-3 font-semibold">No signup / no data uploaded</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">The Same Tool, Many Names</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-6">
          <li>· compound interest calculator</li>
          <li>· investment growth calculator</li>
          <li>· savings calculator</li>
          <li>· future value calculator</li>
          <li>· SIP calculator (India)</li>
          <li>· fixed deposit (FD) calculator</li>
          <li>· daily / monthly / quarterly compound calculator</li>
          <li>· rule of 72 calculator</li>
          <li>· money doubling calculator</li>
          <li>· interest on interest calculator</li>
          <li>· wealth accumulation calculator</li>
          <li>· simple vs compound interest calculator</li>
        </ul>
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
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Savings Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Loan Calculator (reverse compound)", href: "/finance-tools/loan-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Compound Interest Calculator — Daily, Monthly, Annual",
        description: "Calculate compound growth on savings, investments, SIPs, fixed deposits & retirement accounts. Daily, monthly, quarterly, annual, and continuous compounding. With yearly breakdown and simple vs compound comparison.",
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
        title: TOOL_META_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/compound-interest"
      }}
    />
  )
}
