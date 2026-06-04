import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const InvestmentCalculator = dynamic(() => import("@/components/finance/investment-calculator"), {
  loading: () => <ToolLoader />
})

const TOOL_TITLE = "Investment Calculator — Compound Growth, Returns & Contributions"
const TOOL_META_DESC = "Free investment calculator. Project future portfolio value with compound growth, regular contributions, and adjustable return rate. Solves for end amount, required contribution, return rate, starting balance, or investment length. Includes year-by-year accumulation table and inflation adjustment."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/investment-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Investment Calculator", href: "/finance-tools/investment-calculator" }
  ],
  schemaOptions: {
    name: "Investment Calculator with Compound Growth",
    alternateName: [
      "Investment Growth Calculator",
      "Portfolio Calculator",
      "Stock Investment Calculator",
      "Investment Return Calculator",
      "Investment Future Value Calculator",
      "Mutual Fund Calculator",
      "ETF Calculator",
      "Index Fund Calculator",
      "Brokerage Account Calculator",
      "Dollar Cost Averaging Calculator",
      "Compound Investment Calculator",
      "401k Growth Calculator",
      "Roth IRA Growth Calculator",
      "Long-term Investment Calculator",
      "Future Portfolio Value Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Solve for any variable: end balance, required contribution, return rate, starting amount, or investment length",
      "Compound growth with daily / monthly / quarterly / annual frequency options",
      "Regular contribution support (monthly or annual deposits)",
      "Contribution timing: beginning of period vs end of period",
      "Year-by-year accumulation table with running balance",
      "Inflation adjustment to show 'real' (purchasing power) value",
      "Pre-tax vs after-tax outcome comparison",
      "Historical asset-class return reference (S&P 500, bonds, real estate)",
      "Dollar-cost averaging (DCA) visualization",
      "Conservative / Balanced / Aggressive / Growth portfolio presets",
      "Side-by-side comparison of two investment scenarios",
      "401(k), IRA, brokerage, and 529 plan use cases",
      "Visual chart: principal vs accumulated growth over time",
      "100% client-side, no signup, no data sent anywhere",
    ],
    ratingValue: "4.8",
    ratingCount: "6310",
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function InvestmentCalculatorPage() {
  const toolContent = {
    toolName: "Investment Calculator",
    definition: "An investment calculator is a financial tool that projects the future value of an investment by combining a starting balance, regular contributions, expected rate of return, and time horizon, using compound growth math to model how the portfolio grows year by year.",
    quickAnswer: "Enter your starting balance, monthly or yearly contribution, expected return rate, and investment time horizon. The calculator projects your future portfolio value with compound growth, year by year. The historical long-run S&P 500 average return has been ~10% nominal / ~7% real (after inflation), so 7% is a reasonable default for long-term stock-heavy portfolios.",
    keyTakeaways: [
      "Future value = starting balance grown at compound interest + future value of recurring contributions",
      "S&P 500 long-run average: ~10% nominal / ~7% after inflation (real). Bonds: ~4-5%. 60/40 mix: ~6-7%",
      "Time matters more than amount: starting 10 years earlier with half the contribution often beats starting later with double",
      "Dollar-cost averaging (DCA) reduces sequence-of-returns risk vs lump-sum investing",
      "Beginning-of-period contributions earn ~1 year more compound interest than end-of-period — small but adds up",
      "Tax drag matters: same 7% return in a Roth IRA outperforms a taxable brokerage by ~20-30% over 30 years",
      "Inflation eats purchasing power: $1M in 30 years is worth ~$412K in today's dollars at 3% inflation",
      "100% client-side — your balance and contribution numbers never leave your browser",
    ],
    overview:
      "Free investment calculator that projects portfolio growth over any time horizon using compound interest math. Solve for any unknown variable — end balance, monthly contribution needed, required return rate, starting amount, or investment length. Supports daily/monthly/quarterly/annual compounding, beginning vs end-of-period contributions, inflation adjustment for 'real' value, and side-by-side scenario comparison. Use it for retirement planning, college savings (529), home down payment, or any long-term financial goal. 100% in-browser, no signup, no broker pitches, no data uploaded.",

    howToSteps: [
      "Pick a calculation mode: End Balance, Required Contribution, Return Rate, Starting Amount, or Investment Length.",
      "Enter the values you know — leave the target field empty.",
      "Set your expected annual return (7% is a reasonable default for a long-term stock-heavy portfolio).",
      "Choose compounding frequency (monthly is standard for most investment accounts).",
      "Pick contribution timing: beginning of period (small advantage) vs end of period (standard 401(k) behavior).",
      "Add an inflation rate if you want results in today's dollars (default 3% matches US long-run average).",
      "Review the projected end balance, total contributions, total growth, and the year-by-year table.",
    ],

    features: [
      "Solve-for-any-variable mode: end balance, contribution, return rate, starting amount, or time",
      "Compound growth with daily, monthly, quarterly, semi-annual, or annual frequency",
      "Recurring contribution input (monthly OR yearly)",
      "Beginning-of-period vs end-of-period contribution timing toggle",
      "Year-by-year accumulation table with running balance, contributions, growth columns",
      "Inflation adjustment: see 'real' purchasing-power value alongside nominal dollars",
      "Asset-allocation presets: Conservative / Balanced / Aggressive / Growth",
      "Portfolio mix to expected return reference table (60/40, 80/20, 100/0)",
      "Tax-treatment comparison: Roth (tax-free growth) vs Traditional (tax-deferred) vs Taxable (tax drag)",
      "Side-by-side comparison of two scenarios (e.g., 7% vs 9% return)",
      "Use cases for 401(k), Roth IRA, Traditional IRA, brokerage, 529 college savings",
      "Visual growth curve chart",
      "Free, no signup, all calculations run in your browser",
    ],

    useCases: [
      "Retirement planning: 'how much will my $500K plus $1K/month grow to in 25 years?'",
      "College savings (529 plan): planning for a kid's tuition starting from birth or age 5",
      "Home down payment: how long to save $80K with $1,000/month at 4% in a HYSA",
      "Goal-based planning: required contribution to hit $1M nest egg in N years",
      "Comparing investment vs debt paydown: opportunity cost analysis",
      "DCA vs lump-sum comparison for a windfall or inheritance",
      "Roth vs Traditional IRA tax-treatment comparison",
      "Setting realistic expectations for stock returns vs bond returns",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Investment Growth Is Calculated</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Future value of an investment with regular contributions follows two formulas combined:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>FV(lump sum)</strong> = P × (1 + r/n)<sup>nt</sup></div>
            <div><strong>FV(contributions)</strong> = C × [((1 + r/n)<sup>nt</sup> − 1) / (r/n)]</div>
            <div><strong>Total FV</strong> = FV(lump sum) + FV(contributions)</div>
            <div className="mt-2">where:</div>
            <div>· <strong>P</strong> = starting principal</div>
            <div>· <strong>C</strong> = recurring contribution per period</div>
            <div>· <strong>r</strong> = annual return rate (decimal)</div>
            <div>· <strong>n</strong> = compounding periods per year (12 = monthly)</div>
            <div>· <strong>t</strong> = number of years</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Worked example.</strong> Start with $10,000, add $500/month, 7% annual return, 30 years, monthly compounding. FV of lump sum ≈ $81,165. FV of $500/month contributions ≈ $612,000. <strong>Total ≈ $693,000.</strong> Of that, you contributed $190,000 ($10K + 30×$6K) and earned $503,000 in compound growth — more than 2.5× what you put in.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Realistic Return Rates by Portfolio Mix</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Historical long-run averages. Real-world returns will vary year to year — sometimes wildly. Use these as planning baselines, not guarantees.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Allocation</th>
                  <th className="p-3 text-left">Historical avg annual return</th>
                  <th className="p-3 text-left">Real (after 3% inflation)</th>
                  <th className="p-3 text-left">Worst-year drawdown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">100% bonds (Treasuries + corporate)</td><td className="p-3">~4-5%</td><td className="p-3">~1-2%</td><td className="p-3">-10%</td></tr>
                <tr><td className="p-3 font-semibold">20/80 stocks/bonds (very conservative)</td><td className="p-3">~5%</td><td className="p-3">~2%</td><td className="p-3">-15%</td></tr>
                <tr><td className="p-3 font-semibold">40/60 (conservative)</td><td className="p-3">~6%</td><td className="p-3">~3%</td><td className="p-3">-20%</td></tr>
                <tr><td className="p-3 font-semibold">60/40 (balanced — classic mix)</td><td className="p-3">~7%</td><td className="p-3">~4%</td><td className="p-3">-30%</td></tr>
                <tr><td className="p-3 font-semibold">80/20 (growth)</td><td className="p-3">~8-9%</td><td className="p-3">~5-6%</td><td className="p-3">-40%</td></tr>
                <tr><td className="p-3 font-semibold">100% S&P 500 (aggressive)</td><td className="p-3">~10%</td><td className="p-3">~7%</td><td className="p-3">-50%</td></tr>
                <tr><td className="p-3 font-semibold">100% small-cap / international tilt</td><td className="p-3">~10-12%</td><td className="p-3">~7-9%</td><td className="p-3">-55%</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Rule of thumb:</strong> use ~7% as the default expected return for a long-term stock-heavy portfolio in this calculator. It approximates the S&P 500&apos;s historical real (after-inflation) return and naturally accounts for the inflation drag. If you use 10% nominal, then add a 3% inflation adjustment for the same result.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Tax Drag: Roth vs Traditional vs Taxable</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The same $500/month at 7% for 30 years lands in dramatically different places depending on the tax treatment of the account:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Account type</th>
                  <th className="p-3 text-left">Contribution tax</th>
                  <th className="p-3 text-left">Growth tax</th>
                  <th className="p-3 text-left">Withdrawal tax</th>
                  <th className="p-3 text-left">Net at age 65 (after tax)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Roth IRA / Roth 401(k)</td><td className="p-3">After-tax (you pay now)</td><td className="p-3 text-green-600">Tax-free</td><td className="p-3 text-green-600">Tax-free</td><td className="p-3 text-green-600">~$612,000</td></tr>
                <tr><td className="p-3 font-semibold">Traditional IRA / 401(k)</td><td className="p-3 text-green-600">Pre-tax (deductible)</td><td className="p-3 text-green-600">Tax-deferred</td><td className="p-3">Taxed as income (~22-24% avg)</td><td className="p-3">~$465,000</td></tr>
                <tr><td className="p-3 font-semibold">Taxable brokerage</td><td className="p-3">After-tax</td><td className="p-3">Taxed yearly on dividends + realized gains</td><td className="p-3">Long-term cap gains 15%</td><td className="p-3">~$485,000</td></tr>
                <tr><td className="p-3 font-semibold">Bonds in taxable account</td><td className="p-3">After-tax</td><td className="p-3 text-red-500">Taxed at ordinary income rate</td><td className="p-3">Already taxed</td><td className="p-3 text-red-500">~$420,000</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Key insight:</strong> tax-advantaged accounts (Roth, Traditional IRA, 401(k), HSA, 529) compound much faster than taxable accounts because no money is leaking out to taxes each year. Use up the tax-advantaged space first, then taxable.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Dollar-Cost Averaging (DCA) vs Lump Sum</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you receive a windfall (inheritance, bonus, sale of a house), should you invest it all at once or spread it out?
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>Math says lump sum wins ~66% of the time.</strong> Markets go up more often than down, so being invested earlier captures more growth on average.</li>
            <li><strong>DCA wins emotionally.</strong> Spreading it out over 6-12 months means if the market drops right after you invest, you don&apos;t lose all your &apos;dry powder.&apos; Many investors literally can&apos;t sleep with lump sum.</li>
            <li><strong>Compromise:</strong> split it 50/50. Invest half immediately, dollar-cost-average the rest over 6 months. Most of the math benefit, much of the emotional comfort.</li>
            <li><strong>Note:</strong> for regular salary contributions (401(k), every-paycheck IRA deposits), you&apos;re already doing DCA — that&apos;s normal, no decision required.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Investment Calculators</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">SEC Investor.gov</th>
                  <th className="p-3 text-left">NerdWallet</th>
                  <th className="p-3 text-left">Calculator.net</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Solve-for-any-variable mode</td><td className="p-3 text-green-600">5 modes</td><td className="p-3 text-red-500">FV only</td><td className="p-3 text-red-500">FV only</td><td className="p-3 text-green-600">multiple</td></tr>
                <tr><td className="p-3 font-semibold">Year-by-year accumulation table</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td><td className="p-3 text-green-600">✓</td></tr>
                <tr><td className="p-3 font-semibold">Beginning vs end-of-period</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-green-600">✓</td></tr>
                <tr><td className="p-3 font-semibold">Inflation adjustment</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">Tax treatment comparison</td><td className="p-3 text-green-600">Roth/Trad/Taxable</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">separate articles</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Portfolio-mix preset</td><td className="p-3 text-green-600">4 presets</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">No signup / no data uploaded</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">tracked</td><td className="p-3">partial</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· investment calculator</li>
            <li>· investment growth calculator</li>
            <li>· portfolio calculator</li>
            <li>· stock investment calculator</li>
            <li>· mutual fund / ETF / index fund calculator</li>
            <li>· brokerage account calculator</li>
            <li>· future portfolio value calculator</li>
            <li>· compound investment calculator</li>
            <li>· dollar-cost averaging (DCA) calculator</li>
            <li>· 401k growth calculator</li>
            <li>· Roth IRA growth calculator</li>
            <li>· long-term investment calculator</li>
            <li>· investment return calculator</li>
            <li>· how much will my investment grow to</li>
            <li>· how much should I invest per month</li>
            <li>· investment goal calculator</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "If you're new to investing, the simplest evidence-based strategy is: max out tax-advantaged accounts first (401(k) match → HSA → Roth IRA → rest of 401(k)), then taxable. Inside each account, buy a low-cost broad-market index fund (VTI, VOO, or a target-date fund). Set up automatic monthly contributions. Don't try to time the market. This boring strategy beats ~80% of professional active managers over 20+ year periods.",

    faqs: [
      {
        question: "How is investment growth calculated?",
        answer: "Future value uses two combined formulas. For the starting lump sum: FV = P × (1 + r/n)^(nt). For recurring contributions: FV = C × [((1 + r/n)^(nt) − 1) / (r/n)]. Total future value = both summed. Where P = principal, C = contribution per period, r = annual return rate (decimal), n = compounding periods per year (12 for monthly), t = years. The calculator above runs both formulas instantly when you enter your inputs."
      },
      {
        question: "What is a realistic rate of return?",
        answer: "Historical long-run averages: 100% bonds ~4-5%, 60/40 stocks/bonds ~7%, 80/20 ~8-9%, 100% S&P 500 ~10% nominal (or ~7% real after inflation). Use 7% as the default expected return for a long-term stock-heavy portfolio. Be skeptical of 'guaranteed 10-15%' promises from individual advisors or funds — sustained outperformance is extremely rare."
      },
      {
        question: "Should I invest a lump sum all at once or spread it out (DCA)?",
        answer: "Math says lump sum wins ~66% of the time because markets trend up over time. Spreading it out (dollar-cost averaging) wins emotionally — if the market drops right after you invest, you'd still have dry powder. Compromise: invest 50% immediately, DCA the rest over 6 months. For regular salary contributions, you're already doing DCA — no decision needed."
      },
      {
        question: "What's the difference between compound frequencies?",
        answer: "Compound frequency is how often interest is added to the principal balance. More frequent compounding leads to slightly faster growth. On $10K at 8% over 20 years: annual compounding → $46,610; monthly compounding → $49,268; daily compounding → $49,520. The difference between monthly and daily is small for most investment scenarios."
      },
      {
        question: "What is the 'beginning' vs 'end' of period contribution setting?",
        answer: "If you contribute at the BEGINNING of each period, that contribution earns interest for the full period. If you contribute at the END, it doesn't earn interest until the next period. Beginning-of-period results in slightly higher total growth — typically 1 extra period of return on each contribution. Default 401(k) contributions are technically end-of-period (paychecks come on payday, money invested same day)."
      },
      {
        question: "How does inflation affect my investment returns?",
        answer: "Inflation reduces purchasing power. If your portfolio earns 7% but inflation is 3%, your 'real' return is about 4%. To plan in today's dollars, use the real return (~7% for stocks after subtracting 3% inflation). Or use the nominal return (10%) and apply a 3% inflation adjustment at the end. Either approach lands at the same purchasing-power answer."
      },
      {
        question: "How do taxes impact investment returns?",
        answer: "Significantly. The same $500/month at 7% for 30 years lands at ~$612K after-tax in a Roth IRA, ~$485K in a taxable brokerage (15% long-term capital gains drag), and ~$465K in a Traditional IRA/401(k) (assuming 22% ordinary income tax bracket in retirement). Tax-advantaged accounts compound much faster because no money leaks out to taxes each year. Always use up tax-advantaged space first."
      },
      {
        question: "Roth vs Traditional — which is better?",
        answer: "Depends on your future vs current tax bracket. If you expect to be in a LOWER tax bracket in retirement (most retirees), Traditional wins because you skip taxes at today's higher rate. If you expect to be in a HIGHER tax bracket in retirement (young person early in career, OR you're saving aggressively), Roth wins. Common best practice: have BOTH — diversifies tax risk and gives you flexibility to manage your retirement tax bracket year by year."
      },
      {
        question: "What is dollar-cost averaging (DCA)?",
        answer: "DCA = investing a fixed dollar amount on a fixed schedule (e.g., $500 every month) regardless of market price. When prices are high, you buy fewer shares; when prices are low, you buy more. This naturally lowers your average cost per share over time and removes emotion from buy timing. Every 401(k) and automatic IRA contribution is DCA."
      },
      {
        question: "How often should I rebalance my portfolio?",
        answer: "Most advisors recommend rebalancing annually, OR when your target allocation drifts by more than 5-10 percentage points (e.g., your 60/40 mix becomes 70/30 because stocks rallied). Rebalancing forces you to 'sell high, buy low' mechanically — a small but consistent return boost. Inside tax-advantaged accounts there's no tax cost to rebalance; inside taxable accounts, prefer rebalancing via new contributions to avoid triggering capital gains."
      },
      {
        question: "What is the Rule of 72?",
        answer: "A mental shortcut to estimate how long your money takes to double: divide 72 by your annual return rate. At 7%, money doubles in 72÷7 ≈ 10.3 years. At 10%, it doubles in 7.2 years. At 4%, it takes 18 years. Useful for sanity-checking long-term projections without a calculator."
      },
      {
        question: "What's the difference between cumulative return and annualized return?",
        answer: "Cumulative return is total percentage growth over the entire period. Annualized return (CAGR — compound annual growth rate) is the equivalent yearly rate that produces the same cumulative outcome. Example: $100 → $200 over 10 years = 100% cumulative return, ~7.18% CAGR. When comparing investments of different time periods, ALWAYS compare CAGR, not cumulative."
      },
      {
        question: "How much should I invest per month?",
        answer: "Rule of thumb: save 10-15% of gross income for retirement starting in your 20s. Later starters: 20% in your 30s, 25-30% in your 40s, max-everything-out in your 50s. The specific monthly amount depends on your goal — use the 'Required Contribution' mode in this calculator to back-solve from your target nest egg, target date, and expected return."
      },
      {
        question: "Can I use this calculator for 529 college savings?",
        answer: "Yes. Enter the current balance as starting amount, your monthly contribution, expected return (5-6% is reasonable for a 529 with an age-based glide path that shifts to bonds as the student nears college), and the years until college. Most parents start at birth and contribute through high school graduation — 18 years of compound growth makes a big difference. The 529 grows tax-free for qualified education expenses."
      },
      {
        question: "Should I pay off debt or invest first?",
        answer: "Compare interest rates. If your debt rate > expected investment return after tax, pay debt first. High-interest credit cards (15-25% APR) → always pay first. Student loans at 5-6% → coin toss; do both if possible. Mortgage at 6-7% → math-mostly says invest, emotion says pay off (especially near retirement). Always: capture the 401(k) match first — that's an instant 50-100% return that beats any debt rate."
      },
      {
        question: "Is this investment calculator free?",
        answer: "100% free. No signup, no email required, no broker pitches, no data sent to any server. Every projection runs locally in your browser. Unlike financial advisor websites that use 'free calculators' as lead-gen for paid services, we don't route you anywhere or sell your information."
      }
    ],

    relatedTools: [
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Investment Calculator — Project Future Portfolio Growth",
        description: "Free investment calculator with compound growth, recurring contributions, tax treatment comparison (Roth/Traditional/Taxable), and inflation adjustment. Solves for any variable.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Investment Calculator", href: "/finance-tools/investment-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <InvestmentCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/investment-calculator"
      }}
    />
  )
}
