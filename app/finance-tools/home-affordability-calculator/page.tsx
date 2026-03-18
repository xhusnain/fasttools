import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Home, DollarSign, TrendingUp, BarChart3, Shield,
  CheckCircle, AlertTriangle, Lightbulb, CreditCard, Percent
} from "lucide-react"

const HomeAffordabilityCalculator = dynamic(
  () => import("@/components/finance/home-affordability-calculator").then(mod => mod.HomeAffordabilityCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Home Affordability Calculator — How Much House Can I Afford?"
const TOOL_NAME = "Home Affordability Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "How much house can you afford? Free home affordability calculator based on income, debts, down payment & interest rate. Get max home price, monthly payment breakdown & DTI ratio.",
  path: "/finance-tools/home-affordability-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/home-affordability-calculator" }
  ],
  schemaOptions: {
    name: "Home Affordability Calculator | How Much House Can I Afford",
    alternateName: "House Affordability Calculator, Mortgage Affordability Calculator, Home Buying Calculator, How Much Home Can I Afford",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Calculate maximum home price from income and debts",
      "Monthly payment breakdown (P&I, tax, insurance, PMI, HOA)",
      "Front-end and back-end DTI ratio calculation",
      "Affordability rating (Very Comfortable to Overextended)",
      "Down payment and closing cost estimation",
      "Price range comparison (Conservative to Stretch)",
      "15, 20, and 30-year loan term options",
      "PMI calculation for down payments under 20%",
      "Total interest over life of loan",
      "Copy results to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function HomeAffordabilityCalculatorPage() {
  const toolContent = {
    toolName: "Home Affordability Calculator — Find Your Maximum Home Price",
    overview: "Find out exactly how much house you can afford based on your income, monthly debts, down payment, interest rate, and location costs. Get your maximum home price, complete monthly payment breakdown (principal, interest, taxes, insurance, PMI, HOA), debt-to-income ratio, and a comparison of four price levels from conservative to stretch.",

    definition: "A home affordability calculator determines the maximum home price you can purchase based on your gross income, existing debts, down payment, mortgage rate, and property costs. It uses the debt-to-income (DTI) ratio — the percentage of your gross monthly income that goes to debt payments — to determine your borrowing limit.",

    quickAnswer: "With a $85,000 annual income, $500/month in debts, 20% down payment, and 6.75% interest rate, you can afford approximately a $340,000-$380,000 home with a monthly payment around $2,500-$2,800. The exact amount depends on property taxes, insurance, and HOA fees in your area.",

    keyTakeaways: [
      "The 28/36 rule: spend no more than 28% of gross income on housing and 36% on total debt — this is the gold standard lenders use",
      "Lenders allow up to 43% DTI for conventional loans, but 36% or below is the comfort zone for most homebuyers",
      "Down payments under 20% require Private Mortgage Insurance (PMI) — typically 0.5-1% of the loan amount annually",
      "Closing costs add 2-5% of the home price on top of your down payment — budget $8,000-$15,000 for a $300K home",
      "A 1% change in interest rate on a $300K loan changes your monthly payment by approximately $180-$200"
    ],

    howToSteps: [
      "Enter your annual gross household income and total monthly debt payments (car loans, student loans, credit cards, etc.).",
      "Set your down payment percentage, interest rate, and preferred loan term (15, 20, or 30 years).",
      "Optionally expand advanced settings for property tax rate, home insurance, and HOA fees.",
      "Click Calculate to see your maximum home price, monthly breakdown, DTI ratio, and price range comparison."
    ],

    features: [
      "Income-Based Calculation: Works backwards from your income and debts to find the maximum home price you can afford.",
      "Full Monthly Breakdown: Principal, interest, property tax, home insurance, PMI, and HOA fees — not just P&I.",
      "DTI Ratio Analysis: Both front-end (housing only) and back-end (all debts) ratios with color-coded ratings.",
      "Price Range Comparison: Four price levels (Conservative, Comfortable, Maximum, Stretch) with DTI for each.",
      "PMI Detection: Automatically adds PMI when down payment is below 20% of home price.",
      "Closing Cost Estimate: Calculates approximate closing costs (3% of home price) and total cash needed at closing.",
      "Loan Summary: Total amount paid over the life of the loan, total interest, and payoff year.",
      "Flexible Loan Terms: Compare 15-year, 20-year, and 30-year mortgages instantly."
    ],

    useCases: [
      "First-Time Homebuyers: Determine your budget before starting your home search.",
      "Pre-Approval Planning: Know your price range before applying for mortgage pre-approval.",
      "Location Comparison: Adjust property tax rates and insurance to compare affordability across cities and states.",
      "Down Payment Planning: See how different down payment amounts affect your maximum home price and PMI.",
      "Interest Rate Sensitivity: Test how rate changes affect your affordability and monthly payment.",
      "Debt Payoff Strategy: See how paying off car loans or credit cards before buying increases your home budget.",
      "Upgrade Planning: Current homeowners planning to move up can calculate their next home's affordability."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Home className="h-6 w-6 text-primary" />
            How Much House Can I Afford? The Complete Guide
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              How much house you can afford depends on three key factors: <strong>your income</strong>, <strong>your existing debts</strong>, and <strong>the costs of homeownership</strong> (mortgage, taxes, insurance). Lenders use the <strong>debt-to-income (DTI) ratio</strong> to determine your maximum borrowing capacity.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">The 28/36 Rule</h3>
              <div className="space-y-2">
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Front-End DTI: Housing costs should be ≤ 28% of gross monthly income
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Back-End DTI: Total debt payments should be ≤ 36% of gross monthly income
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Maximum (conventional): Lenders allow up to 43% back-end DTI
                </code>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BarChart3 className="h-6 w-6 text-primary" />
            Home Affordability by Income
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Annual Income</th>
                  <th className="p-3">Conservative (28% DTI)</th>
                  <th className="p-3">Comfortable (36% DTI)</th>
                  <th className="p-3">Maximum (43% DTI)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">$60,000</td>
                  <td className="p-3 text-green-500">$210K – $240K</td>
                  <td className="p-3 text-blue-500">$260K – $300K</td>
                  <td className="p-3 text-yellow-500">$310K – $350K</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">$85,000</td>
                  <td className="p-3 text-green-500">$300K – $340K</td>
                  <td className="p-3 text-blue-500">$370K – $420K</td>
                  <td className="p-3 text-yellow-500">$440K – $500K</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">$120,000</td>
                  <td className="p-3 text-green-500">$420K – $480K</td>
                  <td className="p-3 text-blue-500">$520K – $600K</td>
                  <td className="p-3 text-yellow-500">$630K – $720K</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">$180,000</td>
                  <td className="p-3 text-green-500">$630K – $720K</td>
                  <td className="p-3 text-blue-500">$790K – $900K</td>
                  <td className="p-3 text-yellow-500">$940K – $1.08M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            *Assumes 20% down payment, 6.75% rate, 30-year term, $500/month existing debts, 1.1% property tax. Your actual affordability varies by location, debts, and rates.
          </p>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips to Afford More Home
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Lower Your DTI
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Pay off car loans before applying (biggest impact)</li>
                <li>Pay down credit card balances to reduce minimums</li>
                <li>Avoid taking on new debt 6+ months before buying</li>
                <li>Consider refinancing student loans to lower payments</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Percent className="h-5 w-5" />
                Optimise Your Mortgage
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Improve credit score to 740+ for best rates</li>
                <li>Compare rates from 3-5 lenders (saves $10K-$30K)</li>
                <li>Consider 15-year term for lower rate (0.5-0.75% less)</li>
                <li>Buy mortgage points if staying 7+ years (1 point = 0.25% lower)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "Just because you CAN afford a home at 43% DTI doesn't mean you SHOULD. Financial advisors recommend keeping total housing costs under 28% of gross income. This leaves room for savings, investments, emergencies, and life enjoyment. The 'comfortable' range in our calculator (85% of max) is where most financially healthy homebuyers land.",

    faqs: [
      {
        question: "How much house can I afford on a $80,000 salary?",
        answer: "With an $80,000 salary, 20% down payment, 6.75% interest rate, and $500/month in existing debts, you can afford approximately $290,000-$380,000 depending on your DTI comfort level. At the conservative 28% DTI, expect ~$290K. At the conventional maximum 43% DTI, up to ~$380K. Property taxes, insurance, and HOA fees in your area also affect the final number."
      },
      {
        question: "What is the 28/36 rule for home buying?",
        answer: "The 28/36 rule is a guideline that says: (1) No more than 28% of your gross monthly income should go to housing costs (mortgage, taxes, insurance — called 'front-end DTI'); (2) No more than 36% should go to total debt payments including housing (called 'back-end DTI'). For a $7,000/month gross income, that means max $1,960 for housing and $2,520 for all debts combined. Most financial advisors recommend staying within this range."
      },
      {
        question: "What is DTI and what should mine be?",
        answer: "DTI (Debt-to-Income ratio) is the percentage of your gross monthly income that goes to debt payments. There are two types: Front-end DTI (housing costs only) and Back-end DTI (all debts including housing). For conventional mortgages, lenders typically require back-end DTI under 43%. For FHA loans, up to 50% may be allowed. The comfortable range recommended by financial advisors is 36% or below."
      },
      {
        question: "How much down payment do I need?",
        answer: "Conventional loans require as little as 3-5% down. FHA loans require 3.5%. VA and USDA loans offer 0% down. However, putting down less than 20% means you'll pay PMI (Private Mortgage Insurance), which adds 0.5-1% of the loan amount annually to your costs. A 20% down payment eliminates PMI and gives you the most competitive rates. For a $350,000 home: 3.5% = $12,250, 10% = $35,000, 20% = $70,000."
      },
      {
        question: "What is PMI and how much does it cost?",
        answer: "PMI (Private Mortgage Insurance) is required when your down payment is less than 20% of the home price. It protects the lender (not you) if you default. PMI typically costs 0.5-1% of the loan amount per year, added to your monthly payment. On a $300,000 loan, that's $125-$250/month. PMI can be removed once you reach 20% equity (80% LTV). Our calculator automatically adds PMI when your down payment is below 20%."
      },
      {
        question: "How do interest rates affect home affordability?",
        answer: "Interest rates have a massive impact on affordability. On a $300,000 loan over 30 years: at 5% rate, monthly P&I = $1,610. At 6% = $1,799. At 7% = $1,996. At 8% = $2,201. Each 1% increase reduces your maximum affordable home price by approximately 10-12%. A buyer who could afford $400,000 at 5% might only afford $350,000 at 7%. This is why rate shopping across multiple lenders is critical."
      },
      {
        question: "What costs are included in a monthly mortgage payment?",
        answer: "A full monthly mortgage payment (PITI+) includes: Principal (pays down the loan balance), Interest (cost of borrowing), Property Tax (annual tax divided by 12, typically 0.5-2.5% of home value), Home Insurance (hazard/homeowner's insurance, ~$100-$200/month), PMI (if down payment < 20%, ~$50-$250/month), and HOA fees (if applicable, $50-$500+/month). Many people only consider P&I and are surprised by the full cost."
      },
      {
        question: "How much are closing costs?",
        answer: "Closing costs typically range from 2-5% of the home purchase price. On a $350,000 home, expect $7,000-$17,500 in closing costs. They include: origination fees (0.5-1%), appraisal ($300-$500), title insurance ($500-$1,500), inspection ($300-$500), attorney fees, recording fees, and prepaid items (property tax, insurance, HOA). Some lenders offer 'no-closing-cost' mortgages but with higher interest rates."
      },
      {
        question: "Should I get a 15-year or 30-year mortgage?",
        answer: "15-year mortgages have 0.5-0.75% lower interest rates, save $100,000+ in interest, and build equity faster. But monthly payments are 40-50% higher. 30-year mortgages have lower monthly payments, more flexibility, and let you invest the difference. Best approach: get a 30-year mortgage but make extra payments when you can. This gives flexibility while allowing faster payoff. Our calculator supports both — compare the monthly payments."
      },
      {
        question: "Is this calculator accurate for FHA, VA, or USDA loans?",
        answer: "This calculator uses conventional loan standards (43% max DTI). FHA loans allow up to 50% DTI with lower down payments (3.5%). VA loans have no PMI and no down payment requirement. USDA loans offer 0% down in eligible rural areas. For these programs, you may afford more than this calculator shows. However, the monthly payment breakdown and cost calculations remain accurate — just adjust the down payment and PMI fields accordingly."
      },
      {
        question: "How do property taxes vary by state?",
        answer: "Property tax rates vary dramatically by state. Lowest: Hawaii (0.29%), Alabama (0.41%), Colorado (0.51%). Highest: New Jersey (2.47%), Illinois (2.27%), New Hampshire (2.18%). National average: 1.1%. On a $400,000 home, property taxes range from $1,160/year (Hawaii) to $9,880/year (New Jersey). This $8,720 annual difference equals $727/month — enough to change your affordable home price by $100,000+. Always adjust the property tax rate for your specific area."
      },
      {
        question: "Should I buy the most expensive house I can afford?",
        answer: "No. Financial experts strongly recommend buying below your maximum. Reasons: (1) Life happens — job changes, medical expenses, repairs; (2) A lower payment lets you save and invest; (3) Being 'house poor' (spending max on housing, nothing left for life) is the #1 regret of homebuyers; (4) Maintenance costs add 1-2% of home value per year. Target the 'Comfortable' range in our calculator (85% of max), not the 'Maximum' or 'Stretch' levels."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Amortization Calculator", href: "/finance-tools/amortization-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Home Affordability Calculator — How Much House Can I Afford?",
        description: "Find out how much house you can afford based on income, debts, down payment & mortgage rate. Free with monthly payment breakdown and DTI analysis.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/home-affordability-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HomeAffordabilityCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "How much house can you afford? Free home affordability calculator based on income, debts, down payment & interest rate. Get max home price, monthly payment breakdown & DTI ratio.",
        path: "/finance-tools/home-affordability-calculator"
      }}
    />
  )
}
