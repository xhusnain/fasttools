import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import {
  Wallet, DollarSign, TrendingUp, BarChart3, Shield, Calculator,
  Target, BookOpen, Brain, Scale, PiggyBank, Home, CreditCard
} from "lucide-react"

const NetWorthCalculator = dynamic(
  () => import("@/components/finance/net-worth-calculator").then(mod => mod.NetWorthCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Net Worth Calculator — Personal Financial Health Tool"
const TOOL_NAME = "Net Worth Calculator"
const TOOL_META_DESC = "Free net worth calculator. Add assets and liabilities to see your total net worth, liquid net worth, debt-to-asset ratio, financial health grade, and age-percentile comparison vs Federal Reserve benchmarks. 100% client-side, no signup."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/net-worth-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/net-worth-calculator" }
  ],
  definition: "Net worth is the total value of everything you own (assets) minus everything you owe (liabilities). The formula is: Net Worth = Total Assets - Total Liabilities. It represents your overall financial position at a specific point in time.",
  schemaOptions: {
    name: "Net Worth Calculator with Age-Percentile Comparison",
    alternateName: [
      "Personal Net Worth Calculator",
      "Net Worth Tracker",
      "Calculate My Net Worth",
      "Wealth Calculator",
      "Liquid Net Worth Calculator",
      "Household Net Worth Calculator",
      "Assets and Liabilities Calculator",
      "Financial Health Calculator",
      "Net Worth by Age Calculator",
      "Net Worth Percentile Calculator",
      "Debt-to-Asset Ratio Calculator",
      "Total Wealth Calculator",
      "Am I On Track Financially Calculator",
      "Where Do I Stand Financially Calculator",
      "FIRE Net Worth Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Total net worth = assets − liabilities",
      "Liquid net worth (cash + stocks − total liabilities)",
      "6 asset categories: cash, investments, retirement, real estate, vehicles, other",
      "6 liability categories: mortgage, student loans, auto loans, credit cards, personal loans, other",
      "Debt-to-asset ratio with color-coded health indicator (excellent/good/fair/risky)",
      "Financial health grade (A+ through D)",
      "Age-based percentile comparison using Federal Reserve SCF data",
      "Median and average net worth benchmarks by age (20s/30s/40s/50s/60s/70s+)",
      "Asset allocation breakdown with visual bar chart",
      "Liability breakdown with visual bar chart",
      "FIRE / wealth-tier indicator (Lean FIRE, FI, Top 10%, Top 1%)",
      "Quarter-over-quarter tracking guidance",
      "Copy results to clipboard / export",
      "100% client-side — your balances never leave your browser",
      "Free, no signup, no usage limits",
    ]
  },
  faqs: [
    { question: "What is net worth?", answer: "Net worth is the total value of everything you own (assets) minus everything you owe (liabilities). The formula is: Net Worth = Total Assets - Total Liabilities. A positive net worth means your assets exceed your debts, while a negative net worth means you owe more than you own." },
    { question: "How do you calculate net worth?", answer: "Add up all your assets (cash, savings, investments, retirement accounts, real estate, vehicles, and valuables), then add up all your liabilities (mortgage, student loans, auto loans, credit card debt, personal loans). Subtract total liabilities from total assets. The result is your net worth." },
    { question: "What is a good net worth for my age?", answer: "The median net worth by age is approximately: under 30: $6,600; 30-39: $23,093; 40-49: $68,698; 50-59: $180,227; 60-69: $373,000. Being above the median means you're doing better than half of households in your age group. Source: Federal Reserve Survey of Consumer Finances." },
    { question: "Should I include my house in my net worth?", answer: "Yes. Include your home's current market value as an asset and your remaining mortgage balance as a liability. The difference — your home equity — contributes to your net worth. For many Americans, home equity is the largest component of net worth." },
    { question: "Should I include my 401(k) in net worth?", answer: "Yes. Include all retirement accounts (401(k), IRA, Roth IRA, 403(b), pension) in your net worth calculation. These are assets you own, even though you may face penalties for early withdrawal before age 59½." },
    { question: "Does income count toward net worth?", answer: "No. Income is not included in net worth. Net worth only measures what you own minus what you owe at a specific point in time. However, higher income can help you build net worth faster through saving and investing." },
    { question: "Can your net worth be negative?", answer: "Yes. Your net worth is negative when total liabilities exceed total assets. This is common for recent graduates with student loans or people with significant mortgage debt relative to other assets. A negative net worth isn't permanent — it improves as you pay down debt and build assets." },
    { question: "What is liquid net worth?", answer: "Liquid net worth is the value of your liquid assets (cash, savings, stocks, bonds) minus all liabilities — excluding illiquid assets like real estate, retirement accounts with early withdrawal penalties, and collectibles. It shows how much wealth you could access quickly in an emergency." },
    { question: "What is a good debt-to-asset ratio?", answer: "Below 20% is excellent, 20-40% is good, 40-60% is fair and warrants attention, above 60% is high risk. The ratio is calculated by dividing total liabilities by total assets. Lower is better — it means a larger share of your assets are truly yours." },
    { question: "What net worth is considered wealthy?", answer: "In the United States, a net worth of $1 million puts you roughly in the top 10-12% of households. $2.5 million puts you in the top 5%. $11 million or more puts you in the top 1%. However, 'wealthy' is relative to your age, location, and lifestyle needs." },
    { question: "How often should I calculate my net worth?", answer: "Calculate your net worth at least quarterly (every 3 months) to track progress. Many financial advisors recommend monthly tracking. Major life events — buying a home, paying off a loan, receiving an inheritance — are also good times to recalculate." },
    { question: "What is the difference between net worth and income?", answer: "Income is the money you earn over a period (salary, business revenue, investment returns). Net worth is a snapshot of what you own minus what you owe at one point in time. A high-income person with high spending and debt can have a low net worth, while a moderate-income person who saves consistently can have a high net worth." }
  ],
  howToSteps: [
    "Optionally enter your age for percentile comparison against national benchmarks",
    "Enter the current value of your assets: cash, investments, retirement accounts, real estate, vehicles, and other valuables",
    "Enter your outstanding liabilities: mortgage, student loans, auto loans, credit card debt, personal loans, and other debts",
    "Click 'Calculate My Net Worth' to see your total net worth, liquid net worth, debt-to-asset ratio, financial health grade, and age percentile ranking"
  ],
  toolName: "Net Worth Calculator"
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function NetWorthCalculatorPage() {
  const toolContent = {
    toolName: "Net Worth Calculator — Calculate Your Personal Net Worth and Financial Health",
    quickAnswer: "Net worth equals everything you own (assets) minus everything you owe (liabilities). Enter your assets and debts below to instantly see your total net worth, liquid net worth, debt-to-asset ratio, financial health grade, and how you compare to others your age.",
    keyTakeaways: [
      "Net Worth = Total Assets - Total Liabilities — it's the single best measure of your financial health",
      "The median US household net worth is $192,900 (Federal Reserve SCF 2022) — heavily skewed by age",
      "Liquid net worth (cash + investments - debts) shows what you can actually access quickly",
      "A debt-to-asset ratio below 20% is excellent; above 60% signals financial risk",
      "Track net worth quarterly — it's more meaningful than income for measuring financial progress"
    ],
    overview:
      "Calculate your personal net worth instantly with this free online calculator. Enter your assets — cash, savings, investments, retirement accounts, real estate, vehicles, and other valuables — then enter your liabilities — mortgage, student loans, auto loans, credit card debt, and other debts. Get your total net worth, liquid net worth, debt-to-asset ratio with health rating, a financial health grade (A+ through D), asset allocation breakdown, and an age-based percentile comparison using Federal Reserve Survey of Consumer Finances data. All calculations run in your browser — free, instant, no signup.",
    definition: "Net worth is the total value of everything you own (assets) minus everything you owe (liabilities). It represents your overall financial position at a specific point in time.",
    howToSteps: [
      { title: "Enter Your Age (Optional)", description: "Add your age to see how your net worth compares to the national median and average for your age group." },
      { title: "List Your Assets", description: "Enter the current value of your cash, investments, retirement accounts, real estate, vehicles, and other assets." },
      { title: "List Your Liabilities", description: "Enter outstanding balances on your mortgage, student loans, auto loans, credit cards, personal loans, and other debts." },
      { title: "Review Your Results", description: "See your total net worth, liquid net worth, debt-to-asset ratio, financial grade, and age percentile ranking." }
    ],
    features: [
      { title: "Comprehensive Categories", description: "6 asset and 6 liability categories covering cash, investments, retirement, real estate, vehicles, and all debt types.", icon: "Wallet" },
      { title: "Liquid Net Worth", description: "See both total and liquid net worth — what you can actually access quickly without selling property or raiding retirement.", icon: "DollarSign" },
      { title: "Debt-to-Asset Ratio", description: "Color-coded health indicator showing what percentage of your assets are offset by debt (below 20% = excellent).", icon: "BarChart3" },
      { title: "Age Percentile Ranking", description: "Compare your net worth to the national median and average for your age group using Federal Reserve data.", icon: "Target" },
      { title: "Financial Health Grade", description: "Get an A+ through D grade based on your debt ratio and overall financial position.", icon: "Shield" },
      { title: "No Signup Required", description: "Free, instant results with copy-to-clipboard. No email, no account, no data stored on any server.", icon: "Shield" }
    ],
    useCases: [
      { title: "Financial Health Check", description: "Get a clear snapshot of your overall financial position — assets, debts, and where you stand relative to peers." },
      { title: "Retirement Planning", description: "Understand your starting point for retirement. Include all retirement accounts to see how close you are to your goal." },
      { title: "Debt Progress Tracking", description: "Recalculate quarterly to see how paying down debt improves your net worth and debt-to-asset ratio over time." },
      { title: "Financial Goal Setting", description: "Use your current net worth as a baseline and set targets for growth through saving, investing, and debt reduction." }
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            How to Calculate Your Net Worth
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Net worth is the simplest and most powerful measure of financial health. The formula is straightforward: <strong>Net Worth = Total Assets - Total Liabilities</strong>. Add up everything you own, subtract everything you owe, and the result is your net worth. A positive number means you own more than you owe. A negative number — common for recent graduates — means your debts exceed your assets.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            What to Include in Your Net Worth
          </h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Assets (What You Own)</th>
                  <th className="p-3 text-left">Liabilities (What You Owe)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3">Cash, checking, savings, CDs, money market</td>
                  <td className="p-3">Mortgage balance (primary + other properties)</td>
                </tr>
                <tr>
                  <td className="p-3">Stocks, bonds, mutual funds, ETFs, crypto</td>
                  <td className="p-3">Student loans (federal + private)</td>
                </tr>
                <tr>
                  <td className="p-3">401(k), IRA, Roth IRA, 403(b), pension</td>
                  <td className="p-3">Auto loans, boat loans</td>
                </tr>
                <tr>
                  <td className="p-3">Home market value, rental property, land</td>
                  <td className="p-3">Credit card balances</td>
                </tr>
                <tr>
                  <td className="p-3">Vehicles (current market value)</td>
                  <td className="p-3">Personal loans, medical debt</td>
                </tr>
                <tr>
                  <td className="p-3">Business ownership, jewelry, collectibles</td>
                  <td className="p-3">HELOC, business loans, tax debt</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>What NOT to include:</strong> Income (salary is not an asset), future Social Security benefits, expected inheritance, or the value of your human capital/earning potential. Net worth is a snapshot of what you own and owe <em>right now</em>.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Average Net Worth by Age
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Net worth varies dramatically by age. The median (middle value) is more representative than the average because averages are skewed by ultra-wealthy outliers. Here are the latest benchmarks from the Federal Reserve Survey of Consumer Finances and Empower:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Age Group</th>
                  <th className="p-3 text-right">Median Net Worth</th>
                  <th className="p-3 text-right">Average Net Worth</th>
                  <th className="p-3 text-left">Key Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Under 30</td>
                  <td className="p-3 text-right">$6,600</td>
                  <td className="p-3 text-right">$139,243</td>
                  <td className="p-3">Student loans often create negative net worth</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">30-39</td>
                  <td className="p-3 text-right">$23,093</td>
                  <td className="p-3 text-right">$325,952</td>
                  <td className="p-3">Home buying and career growth begin building wealth</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">40-49</td>
                  <td className="p-3 text-right">$68,698</td>
                  <td className="p-3 text-right">$750,578</td>
                  <td className="p-3">Peak earning years, significant home equity</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">50-59</td>
                  <td className="p-3 text-right">$180,227</td>
                  <td className="p-3 text-right">$1,364,050</td>
                  <td className="p-3">Retirement savings and paid-down mortgages accelerate growth</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">60-69</td>
                  <td className="p-3 text-right">$373,000</td>
                  <td className="p-3 text-right">$1,577,907</td>
                  <td className="p-3">Peak net worth for most households</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">70+</td>
                  <td className="p-3 text-right">$357,000</td>
                  <td className="p-3 text-right">$1,456,151</td>
                  <td className="p-3">Slight decline as retirees draw down savings</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-sm text-muted-foreground">Sources: Federal Reserve Survey of Consumer Finances (2022), Empower Average Net Worth by Age</p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            Liquid Net Worth vs Total Net Worth
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Total net worth includes everything — but not all assets are equally accessible. Liquid net worth only counts assets you can quickly convert to cash (within days to weeks) without penalties or significant loss:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-left">Total Net Worth</th>
                  <th className="p-3 text-left">Liquid Net Worth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Includes</td>
                  <td className="p-3">Everything: cash, investments, retirement, home, cars, jewelry</td>
                  <td className="p-3">Only cash, savings, and non-retirement investments</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Excludes</td>
                  <td className="p-3">Nothing</td>
                  <td className="p-3">Real estate, vehicles, retirement accounts, collectibles</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Best For</td>
                  <td className="p-3">Overall financial picture</td>
                  <td className="p-3">Emergency preparedness, short-term financial flexibility</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Limitation</td>
                  <td className="p-3">May overstate accessible wealth (can&apos;t sell your house overnight)</td>
                  <td className="p-3">Understates true wealth (ignores home equity and retirement)</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Debt-to-Asset Ratio: What It Means
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The debt-to-asset ratio measures what percentage of your assets are financed by debt. It is calculated as: <strong>Debt-to-Asset Ratio = (Total Liabilities / Total Assets) &times; 100</strong>. A lower ratio means more of your assets are truly &quot;yours.&quot;
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Ratio</th>
                  <th className="p-3 text-left">Rating</th>
                  <th className="p-3 text-left">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-green-600">0-20%</td>
                  <td className="p-3 font-semibold text-green-600">Excellent</td>
                  <td className="p-3">Very low debt relative to assets. Strong financial position.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-600">20-40%</td>
                  <td className="p-3 font-semibold text-blue-600">Good</td>
                  <td className="p-3">Manageable debt level. On track for most financial goals.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-600">40-60%</td>
                  <td className="p-3 font-semibold text-amber-600">Fair</td>
                  <td className="p-3">Significant debt. Focus on paying down balances before adding new debt.</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-600">60%+</td>
                  <td className="p-3 font-semibold text-red-600">High Risk</td>
                  <td className="p-3">Most of your assets are offset by debt. Prioritize aggressive debt reduction.</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            How to Increase Your Net Worth
          </h2>
          <div className="space-y-4">
            {[
              { title: "Pay down high-interest debt first", desc: "Credit card debt at 20%+ destroys net worth. Every $1,000 paid off is $1,000 added to net worth plus saved interest." },
              { title: "Maximize retirement contributions", desc: "401(k) employer matches are free money. Max out contributions to grow tax-advantaged assets that compound for decades." },
              { title: "Build an emergency fund", desc: "3-6 months of expenses in cash prevents new debt from unexpected events, protecting the net worth you've built." },
              { title: "Invest consistently", desc: "Even $200/month in a low-cost index fund at 7% annual return grows to ~$120,000 in 20 years." },
              { title: "Avoid lifestyle inflation", desc: "When income increases, direct raises toward savings and investments rather than increasing spending proportionally." },
              { title: "Track net worth quarterly", desc: "What gets measured gets managed. Regular tracking reveals trends and motivates continued progress." },
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-green-500/10 text-green-500 font-bold text-sm">{i + 1}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{tip.title}</h4>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    ),
    aboutToolText: "This net worth calculator provides a comprehensive financial health snapshot by calculating total net worth, liquid net worth, debt-to-asset ratio, and age-based percentile ranking using Federal Reserve data.",
    faqs: [
      { question: "What is net worth?", answer: "Net worth = total assets - total liabilities. It's the single best measure of your overall financial position at a point in time." },
      { question: "How do you calculate net worth?", answer: "Add up all assets (cash, investments, retirement, real estate, vehicles), subtract all liabilities (mortgage, loans, credit cards). The result is your net worth." },
      { question: "What is a good net worth for my age?", answer: "Median net worth: under 30 = $6,600; 30s = $23,093; 40s = $68,698; 50s = $180,227; 60s = $373,000. Above the median means you're ahead of half of households." },
      { question: "Should I include my house?", answer: "Yes. Include home market value as an asset and mortgage balance as a liability. The difference (home equity) is often the largest net worth component." },
      { question: "Should I include my 401(k)?", answer: "Yes. All retirement accounts (401k, IRA, Roth IRA, pension) are assets, even if you can't access them penalty-free until 59½." },
      { question: "Does income count toward net worth?", answer: "No. Income is not an asset. Net worth only measures what you own minus what you owe. Higher income helps build net worth through saving." },
      { question: "Can net worth be negative?", answer: "Yes. This is common with student loans or when liabilities exceed assets. It improves as you pay down debt and build assets over time." },
      { question: "What is liquid net worth?", answer: "Liquid net worth = cash + investments - all liabilities. It excludes illiquid assets like real estate and retirement accounts." },
      { question: "What is a good debt-to-asset ratio?", answer: "Below 20% is excellent, 20-40% good, 40-60% fair, above 60% high risk. Lower means more of your assets are truly yours." },
      { question: "What net worth is considered wealthy?", answer: "$1M puts you in the top 10-12%. $2.5M is top 5%. $11M+ is top 1% of US households." },
      { question: "How often should I calculate net worth?", answer: "At least quarterly. Monthly is even better. Also recalculate after major events like buying a home or paying off a large debt." },
      { question: "What is the difference between net worth and income?", answer: "Income is money earned over time. Net worth is a snapshot of what you own vs owe. High income with high spending can mean low net worth." }
    ],
    relatedTools: [
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Debt Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Net Worth Calculator — Personal Financial Health",
        description: "Add assets and liabilities to see total net worth, liquid net worth, debt-to-asset ratio, financial health grade, and age-percentile vs Federal Reserve benchmarks. Free, instant, no signup.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <NetWorthCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/net-worth-calculator"
      }}
    />
  )
}
