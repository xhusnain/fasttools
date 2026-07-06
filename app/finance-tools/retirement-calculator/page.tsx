import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const RetirementCalculator = dynamic(() => import("@/components/finance/retirement-calculator"), {
  loading: () => <ToolLoader />
})

const TOOL_TITLE = "Retirement Calculator — How Much You Need to Retire"
const TOOL_META_DESC = "Free retirement calculator. Find out how much you need to retire, how long your savings will last, and what monthly income you'll have. Models 401(k), IRA, Social Security, inflation, and 4% withdrawal rule. Includes coast-FIRE and lean-FIRE / fat-FIRE presets."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/retirement-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
  ],
  schemaOptions: {
    name: "Retirement Calculator with 4% Rule & Social Security",
    alternateName: [
      "Retirement Savings Calculator",
      "401k Retirement Calculator",
      "IRA Retirement Calculator",
      "How Much Do I Need to Retire Calculator",
      "Retirement Income Calculator",
      "Retirement Planning Calculator",
      "Retirement Nest Egg Calculator",
      "Retirement Withdrawal Calculator",
      "4 Percent Rule Calculator",
      "25x Rule Calculator",
      "FIRE Calculator",
      "Coast FIRE Calculator",
      "Early Retirement Calculator",
      "Social Security Retirement Calculator",
      "Roth vs Traditional Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Three modes: 'How much to save', 'Withdrawal amounts', 'How long will it last'",
      "Side-by-side projection of nest egg at retirement age",
      "4% safe withdrawal rule + alternate 3% / 3.5% rates for longer retirement",
      "25x annual expenses rule (the inverse of the 4% rule)",
      "Social Security benefit integration with claiming-age toggle (62 / 67 / 70)",
      "401(k) contribution modeling with employer match",
      "Traditional IRA vs Roth IRA tax-treatment comparison",
      "Inflation adjustment for 'real' (purchasing power) results",
      "Pre-retirement vs post-retirement separate return rate inputs",
      "Catch-up contribution support for age 50+ and SECURE 2.0 ages 60-63",
      "FIRE presets: Coast FIRE, Lean FIRE, Fat FIRE, Barista FIRE",
      "Year-by-year drawdown table with running balance",
      "Healthcare/Medicare gap modeling for pre-65 retirees",
      "Includes 70-80% income replacement rule of thumb",
      "100% client-side — your income, savings, and balance never leave your browser",
    ],
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function RetirementCalculatorPage() {
  const toolContent = {
    toolName: "Retirement Calculator",
    definition: "A retirement calculator is a financial planning tool that projects how much you need to save, how your nest egg will grow over time, and how long your savings will last in retirement — combining your current age, savings, contributions, expected returns, inflation, Social Security, and target retirement age.",
    quickAnswer: "Enter your age, current savings, monthly contribution, and target retirement age. The calculator shows your projected nest egg, monthly retirement income, and whether you're on track. The two most common rules of thumb: save 10-15% of gross income starting in your 20s, and aim for 25x your annual retirement expenses (the inverse of the 4% withdrawal rule).",
    keyTakeaways: [
      "Target nest egg = 25 × your annual retirement expenses (the inverse of the 4% rule)",
      "Save 10-15% of gross income starting young; later starters need 20-30%",
      "Aim to have ~1× salary saved by age 30, 3× by 40, 6× by 50, 8× by 60, 10× by 67 (Fidelity benchmarks)",
      "Income replacement: most retirees need 70-80% of pre-retirement income to maintain lifestyle",
      "Social Security replaces ~40% of pre-retirement income for average earners",
      "401(k) match is free money — always contribute at least enough to capture the full match",
      "Catch-up contributions add ~$7,500-$8,000 extra to 401(k) and ~$1,000-$1,100 extra to IRA starting at age 50",
      "Compound growth: $5K/yr from age 25 → ~$1.1M at 65 (7% return). Same $5K/yr from age 35 → ~$540K. Time matters more than amount.",
    ],
    overview:
      "Free retirement calculator that answers three core questions: How much do I need to retire? How much should I save each month? How long will my retirement savings last? The tool combines 401(k) and IRA contributions, Social Security estimates, inflation adjustments, and separate pre-retirement / post-retirement return rates to project your nest egg and monthly retirement income year by year. Built around standard planning rules — 4% safe withdrawal, 25× annual expenses, 70-80% income replacement — but also supports FIRE strategies (Coast FIRE, Lean FIRE, Fat FIRE, Barista FIRE) for early retirees. 100% in-browser, no signup, no financial-advisor pitches.",

    howToSteps: [
      "Pick a mode: 'How much to save' (forward planning), 'Withdrawal amounts' (income in retirement), or 'How long will it last' (drawdown projection).",
      "Enter your current age and target retirement age (default: 67 for full Social Security).",
      "Enter current retirement savings balance across all accounts (401k + IRA + brokerage).",
      "Enter your annual contribution (or monthly — the calculator converts).",
      "Set expected pre-retirement return (default ~7%, the historical S&P 500 average after inflation).",
      "Set expected post-retirement return (default ~5%, more conservative because you'll be more allocated to bonds).",
      "Set inflation assumption (default ~3%, the long-run US average).",
      "Optionally add Social Security expected monthly benefit and claiming age (62, 67, or 70).",
      "Review the projected nest egg, monthly retirement income, and the 'are you on track' verdict.",
    ],

    features: [
      "Three calculation modes: save-target / withdrawal-amount / longevity",
      "4% rule + 3% conservative alternative + 25x expenses framework",
      "Social Security integration with 62 / 67 / 70 claiming-age comparison",
      "401(k) modeling with employer match percentage",
      "Roth vs Traditional IRA tax-treatment side-by-side",
      "Catch-up contribution support (age 50+ and SECURE 2.0 60-63)",
      "Inflation toggle to show 'real' purchasing power vs nominal dollars",
      "Separate pre/post-retirement return rate inputs",
      "FIRE preset shortcuts: Coast, Lean ($25K/yr), Standard ($50K), Fat ($100K+), Barista",
      "Year-by-year nest egg projection table",
      "Year-by-year drawdown table during retirement phase",
      "'On track' indicator using Fidelity age-based benchmarks (1×/3×/6×/8×/10×)",
      "Healthcare gap modeling for pre-Medicare retirees (ages 55-64)",
      "Free, no signup, all data stays in your browser",
    ],

    useCases: [
      "Standard retirement planning at age 30/40/50: am I on track?",
      "FIRE (Financial Independence, Retire Early) feasibility analysis",
      "Coast FIRE: when can I stop contributing and let compound growth finish the job?",
      "Catch-up planning for late starters (50+): how much do I need to save monthly to retire on time?",
      "Social Security claiming-age decision: 62 vs 67 vs 70",
      "401(k) vs Roth IRA contribution priority decision",
      "Drawdown phase: will my $X nest egg last 30 years if I withdraw $Y/month?",
      "Comparing two scenarios: retire at 62 vs retire at 67 — concrete numbers",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How Much Do You Need to Retire?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The simplest, most-cited answer: <strong>25 times your annual retirement expenses</strong>. This is the inverse of the 4% safe withdrawal rule. If you expect to spend $60,000 per year in retirement, you need a $1.5M nest egg. $40,000/year? $1M. $100,000/year? $2.5M.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            But this is just the starting point. Three things adjust it:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>Social Security replaces ~40% of pre-retirement income</strong> for average earners — so you may not need to fund 100% of your expenses from savings.</li>
            <li><strong>Pension income</strong> (if you have one) further reduces the savings burden.</li>
            <li><strong>Life expectancy.</strong> The 4% rule was designed for a 30-year retirement. If you&apos;re retiring at 55 and plan to live to 95 (40 years), use a more conservative 3-3.5% rate, which means saving 28-33× annual expenses instead of 25×.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Are You On Track? Age-Based Savings Benchmarks</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Fidelity&apos;s widely-cited retirement readiness benchmarks. The numbers are multiples of your current annual salary at each age milestone.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Age</th>
                  <th className="p-3 text-left">Target savings</th>
                  <th className="p-3 text-left">If salary is $80K, target balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">30</td><td className="p-3">1× annual salary</td><td className="p-3">$80,000</td></tr>
                <tr><td className="p-3 font-semibold">35</td><td className="p-3">2× annual salary</td><td className="p-3">$160,000</td></tr>
                <tr><td className="p-3 font-semibold">40</td><td className="p-3">3× annual salary</td><td className="p-3">$240,000</td></tr>
                <tr><td className="p-3 font-semibold">45</td><td className="p-3">4× annual salary</td><td className="p-3">$320,000</td></tr>
                <tr><td className="p-3 font-semibold">50</td><td className="p-3">6× annual salary</td><td className="p-3">$480,000</td></tr>
                <tr><td className="p-3 font-semibold">55</td><td className="p-3">7× annual salary</td><td className="p-3">$560,000</td></tr>
                <tr><td className="p-3 font-semibold">60</td><td className="p-3">8× annual salary</td><td className="p-3">$640,000</td></tr>
                <tr><td className="p-3 font-semibold">67 (target)</td><td className="p-3">10× annual salary</td><td className="p-3">$800,000</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            These assume you&apos;ll get partial Social Security AND want to maintain ~80% of your pre-retirement income. If you plan to live more frugally, you can need less; if you want a luxury retirement, you need more.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The 4% Rule Explained</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Pioneered by financial planner Bill Bengen in 1994, the <strong>4% rule</strong> says: in the first year of retirement, withdraw 4% of your nest egg, then adjust that dollar amount for inflation each year thereafter. Historical backtests show this strategy has a high probability of lasting 30 years across a wide range of market conditions.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Example.</strong> $1M nest egg → withdraw $40,000 in year 1. If inflation is 3%, year 2 withdrawal = $41,200. Year 3 = $42,436. And so on, regardless of what the market does.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Caveats:</strong> The 4% rule assumes a 60/40 stock-bond portfolio and a 30-year retirement. If you&apos;re retiring early (FIRE crowd) and need the money to last 40-50 years, drop to 3-3.5%. If sequence-of-returns risk is a concern (bad market in first 5 years of retirement), consider a flexible withdrawal strategy (variable percentage) instead of fixed dollar.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FIRE Variants — Lean / Fat / Coast / Barista</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            FIRE = Financial Independence, Retire Early. Four common flavors based on annual spending in retirement:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">FIRE type</th>
                  <th className="p-3 text-left">Annual spending</th>
                  <th className="p-3 text-left">Nest egg needed (25×)</th>
                  <th className="p-3 text-left">Lifestyle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Lean FIRE</td><td className="p-3">$25K-$40K/yr</td><td className="p-3">$625K-$1M</td><td className="p-3">Frugal, often relocated to LCOL area</td></tr>
                <tr><td className="p-3 font-semibold">Standard FIRE</td><td className="p-3">$40K-$80K/yr</td><td className="p-3">$1M-$2M</td><td className="p-3">Middle-class US lifestyle</td></tr>
                <tr><td className="p-3 font-semibold">Fat FIRE</td><td className="p-3">$100K+/yr</td><td className="p-3">$2.5M+</td><td className="p-3">Upper-middle to luxury</td></tr>
                <tr><td className="p-3 font-semibold">Coast FIRE</td><td className="p-3">Variable</td><td className="p-3">Enough TODAY that compound growth alone gets you to standard retirement</td><td className="p-3">Stop saving, work a low-stress job that covers current expenses</td></tr>
                <tr><td className="p-3 font-semibold">Barista FIRE</td><td className="p-3">$30K-$50K/yr</td><td className="p-3">$750K-$1.25M</td><td className="p-3">Part-time job covers part of expenses + healthcare</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Where to Save: 401(k) vs IRA vs HSA vs Brokerage</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Standard contribution priority order for most working Americans:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>401(k) up to employer match.</strong> This is free money — typically 3-6% employer match. Don&apos;t leave it on the table.</li>
            <li><strong>HSA (Health Savings Account) if eligible.</strong> Triple tax advantage: pre-tax contributions, tax-free growth, tax-free withdrawals for medical expenses. Best account in the US tax code.</li>
            <li><strong>Roth IRA</strong> if your income qualifies (phase-out starts around $146K single / $230K married). Pay tax now, never pay tax on growth or withdrawals.</li>
            <li><strong>Max out 401(k)</strong> after the IRA. Current limit is in the mid-$20Ks per year (check IRS for the exact current number).</li>
            <li><strong>Traditional IRA</strong> if Roth isn&apos;t available (high income) — gets the tax deduction now, pay tax in retirement.</li>
            <li><strong>Taxable brokerage</strong> account for anything beyond the tax-advantaged limits. Use tax-efficient index funds.</li>
          </ol>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Catch-Up Contributions (Age 50+)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you&apos;re behind on retirement savings, the IRS lets you save extra starting at age 50:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>401(k) catch-up:</strong> Additional ~$7,500-$8,000/year on top of the regular limit.</li>
            <li><strong>IRA catch-up:</strong> Additional ~$1,000-$1,100/year.</li>
            <li><strong>SECURE 2.0 enhanced catch-up (ages 60-63):</strong> Larger catch-up of ~$11,000+/year in 401(k) — a temporary 4-year window to put away significantly more.</li>
            <li><strong>High earners must do catch-up as Roth.</strong> If prior-year FICA wages exceeded ~$150K, catch-up contributions must be Roth (after-tax) under SECURE 2.0.</li>
            <li>Check IRS.gov for the current year&apos;s exact dollar amounts — they get adjusted for inflation periodically.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Social Security Claiming Age: 62 vs 67 vs 70</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            You can start claiming Social Security at 62, but it&apos;s reduced by ~30% from your Full Retirement Age (FRA, currently 67 for anyone born 1960 or later). Wait until 70 and your monthly benefit grows by ~24% above FRA. The math:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Claim age</th>
                  <th className="p-3 text-left">% of FRA benefit</th>
                  <th className="p-3 text-left">If FRA benefit = $2,500/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">62 (earliest)</td><td className="p-3">~70%</td><td className="p-3">~$1,750/mo</td></tr>
                <tr><td className="p-3 font-semibold">65</td><td className="p-3">~87%</td><td className="p-3">~$2,175/mo</td></tr>
                <tr><td className="p-3 font-semibold">67 (Full Retirement Age)</td><td className="p-3">100%</td><td className="p-3">$2,500/mo</td></tr>
                <tr><td className="p-3 font-semibold">70 (maximum)</td><td className="p-3">~124%</td><td className="p-3">~$3,100/mo</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Break-even logic:</strong> claiming early (62) vs full retirement age (67) — the cumulative dollars cross over around age 78. If you expect to live past 78, waiting until 67 produces more lifetime income. Past 82-83? Waiting until 70 wins. Past 80 with reasonable health is the rough break-even rule of thumb.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Retirement Calculators</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">Fidelity</th>
                  <th className="p-3 text-left">NerdWallet</th>
                  <th className="p-3 text-left">Bankrate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Nest egg projection</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">4% rule + 25× expenses</td><td className="p-3 text-green-600">✓</td><td className="p-3">partial</td><td className="p-3">partial</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">Social Security claim-age toggle</td><td className="p-3 text-green-600">62 / 67 / 70</td><td className="p-3">separate tool</td><td className="p-3 text-red-500">✗</td><td className="p-3">slider</td></tr>
                <tr><td className="p-3 font-semibold">FIRE presets (Lean / Fat / Coast)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Year-by-year drawdown table</td><td className="p-3 text-green-600">✓</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Pre/post return rate split</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">No account / no signup</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">login</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Client-side / no data uploaded</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">cloud</td><td className="p-3 text-red-500">tracked</td><td className="p-3 text-red-500">tracked</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· retirement calculator / retirement savings calculator</li>
            <li>· retirement planning calculator</li>
            <li>· 401k calculator / 401(k) retirement calculator</li>
            <li>· IRA calculator / Roth IRA calculator</li>
            <li>· how much do I need to retire calculator</li>
            <li>· retirement income calculator</li>
            <li>· retirement nest egg calculator</li>
            <li>· retirement withdrawal calculator</li>
            <li>· 4 percent rule calculator</li>
            <li>· 25x rule calculator</li>
            <li>· FIRE calculator / Coast FIRE / Lean FIRE / Fat FIRE</li>
            <li>· early retirement calculator</li>
            <li>· Social Security retirement calculator</li>
            <li>· Roth vs Traditional calculator</li>
            <li>· retirement age calculator</li>
            <li>· am I on track to retire calculator</li>
          </ul>
        </article>
      </div>
    ),

    proTip: "Don't try to time the market in your retirement accounts — research consistently shows that even professionals can't reliably beat dollar-cost-averaging into low-cost index funds. The biggest move you can make is starting early: $5,000/year from age 25 grows to ~$1.1M by age 65 at 7% returns. The same $5K/year starting at 35 only reaches ~$540K. Time beats every other factor by a wide margin.",

    faqs: [
      {
        question: "How much do I need to retire?",
        answer: "The most-cited answer: 25× your annual retirement expenses (the inverse of the 4% withdrawal rule). If you'll spend $60K/year in retirement, target a $1.5M nest egg. $40K/year → $1M. $100K/year → $2.5M. Adjust DOWN if you'll get significant Social Security (replacing ~40% of pre-retirement income for average earners) or a pension. Adjust UP if you're retiring early — for a 40-year retirement use 28-33× expenses (a 3-3.5% withdrawal rate)."
      },
      {
        question: "How much should I save for retirement?",
        answer: "Save 10-15% of gross income starting in your 20s. Later starters need progressively more — 20% in your 30s, 25-30% in your 40s, max-everything-out in your 50s. The simplest rule: contribute enough to your 401(k) to capture the full employer match (typically 3-6% of salary), then any additional savings goes into IRA / Roth IRA / HSA / taxable brokerage in that priority order."
      },
      {
        question: "What is the 4% rule for retirement?",
        answer: "Coined by financial planner Bill Bengen in 1994. The rule: in year 1 of retirement, withdraw 4% of your nest egg. Each subsequent year, adjust that dollar amount for inflation. Historical backtests show this strategy has a high probability of lasting 30 years across a wide range of market scenarios. Equivalent rule: save 25× your annual expenses. The rule assumes a 60/40 stock/bond portfolio and a 30-year retirement window."
      },
      {
        question: "Is the 4% rule still accurate?",
        answer: "It's a guideline, not a guarantee. Some recent research (post-2020) suggests 3.3-3.5% is safer given lower expected future returns. If you're retiring early and need a 40-50 year retirement, use 3% (~33× annual expenses). If you're flexible — willing to reduce spending in bad market years — you can probably stick with 4%. Most retirees use a hybrid: 4% as a target, with the willingness to dial back in down markets."
      },
      {
        question: "Is $1 million enough to retire?",
        answer: "Depends on your annual expenses. At a 4% withdrawal rate, $1M supports $40K/year of inflation-adjusted spending. Add Social Security (~$2,000-$2,500/mo for average earners, or $24-30K/year) and you're at $64-70K/year of pre-tax income — comfortable for most US households but tight if you live in a HCOL area like NYC or SF, or if you want to travel extensively. $1M is the right number for someone with ~$40-65K in target retirement expenses."
      },
      {
        question: "How long will my retirement money last?",
        answer: "Use the withdrawal calculator mode above. The rough rule: 4% withdrawal rate ≈ 30 years, 3.5% ≈ 35 years, 3% ≈ 40+ years. But sequence-of-returns risk matters — if you hit a bad market in the first 5 years, the math gets worse fast. To increase longevity: (a) hold more bonds early in retirement, (b) be willing to cut spending 10-20% in down markets, (c) have a cash buffer of 1-2 years of expenses outside the volatile portfolio."
      },
      {
        question: "At what age can I retire?",
        answer: "Earliest Social Security: 62 (with ~30% reduction in benefit). Full Retirement Age for Social Security: 67 (for anyone born 1960 or later). Maximum Social Security: 70. Earliest 401(k) withdrawal without penalty: 59½. Earliest IRA withdrawal without penalty: 59½ (Traditional) or 5 years after first Roth contribution (Roth). Earliest pension: typically 55-65 depending on plan. Mathematically, you can retire whenever 25× your annual expenses is saved up — at any age."
      },
      {
        question: "What's the difference between Traditional and Roth IRAs?",
        answer: "Traditional IRA: contributions are tax-deductible NOW, withdrawals in retirement are TAXED as ordinary income. Best if you expect to be in a LOWER tax bracket in retirement than today. Roth IRA: contributions use AFTER-tax money (no deduction now), but all growth and withdrawals in retirement are TAX-FREE. Best if you expect to be in a HIGHER tax bracket in retirement, or value tax-free flexibility. Common advice: have both — diversifies tax risk in retirement."
      },
      {
        question: "Should I prioritize 401(k) or IRA?",
        answer: "Standard order: (1) 401(k) up to employer match (free money). (2) HSA if eligible (triple tax advantage). (3) Roth IRA if your income qualifies. (4) Max out 401(k) the rest of the way. (5) Traditional IRA if Roth isn't available. (6) Taxable brokerage for anything beyond. The 401(k) match is non-negotiable — it's an instant 50-100% return on those dollars. After the match, the IRA usually wins because of more investment choices and lower fees."
      },
      {
        question: "How much will Social Security provide?",
        answer: "Replaces ~40% of pre-retirement income for average earners. For high earners (over the Social Security wage base, ~$168K), the replacement rate is much lower (~25-30%) because Social Security caps the contribution. Specific numbers: average monthly benefit for retirees is ~$1,900, maximum at age 70 is around $5,000+. Check ssa.gov/myaccount for your personalized estimate based on your actual earnings history."
      },
      {
        question: "What's the best age to claim Social Security?",
        answer: "Depends on life expectancy and other income. Break-even math: claiming at 62 vs 67 — cumulative benefits cross around age 78. Claiming at 67 vs 70 — cumulative benefits cross around age 82-83. Rule of thumb: if you expect to live past 80 with reasonable health, waiting maximizes lifetime income. If you have health issues, no surviving spouse who'd benefit from a higher widow's benefit, and need the cash flow earlier, claim at 62-65."
      },
      {
        question: "How does inflation affect my retirement?",
        answer: "Massively. At 3% average inflation, $1 today is worth only $0.55 in 20 years and $0.30 in 40 years. Your retirement number should be in TODAY's dollars (which the calculator above shows by default), and your savings should grow at a rate that outpaces inflation. The long-run real (after-inflation) return of the S&P 500 has been ~7%, which is why most retirement projections use 7% as the pre-retirement return assumption. Social Security is inflation-adjusted (COLAs), but most pensions are not."
      },
      {
        question: "What if I start saving late?",
        answer: "Three moves. (1) Save aggressively — 20-30% of gross income in your 40s, 30-40% in your 50s. (2) Take advantage of catch-up contributions: $7,500-$8,000 extra in 401(k) and ~$1,000 extra in IRA at age 50+, plus the SECURE 2.0 enhanced catch-up of $11,000+ for ages 60-63. (3) Consider working a few extra years — adds 3-5× more saving years AND delays drawdown, dramatically improving the math. Working until 70 instead of 65 typically lets you retire on 30-40% less saved."
      },
      {
        question: "How much should I have saved by 30, 40, 50, 60?",
        answer: "Fidelity's widely-cited benchmarks as multiples of current annual salary: 1× by age 30, 3× by 40, 6× by 50, 8× by 60, 10× by retirement at 67. Example: at age 40 earning $90K, you should ideally have ~$270K saved across retirement accounts. These benchmarks assume you'll get partial Social Security AND want to maintain ~80% of pre-retirement income."
      },
      {
        question: "How do I plan for healthcare costs in retirement?",
        answer: "Two phases. Pre-65: you're not eligible for Medicare yet — budget for ACA/marketplace insurance, typically $700-$1,500/month for a couple depending on income and state. This 'healthcare gap' is the #1 reason early retirees keep working part-time (Barista FIRE). Post-65: Medicare Part A is free, Part B is ~$175/mo, Part D for drugs ~$40-60/mo, and a Medigap supplement plan ~$150-300/mo. Total Medicare expense for a couple is typically $400-700/month. HSAs are the BEST account for funding retirement healthcare — triple tax advantage, can be used for Medicare premiums."
      },
      {
        question: "Is this retirement calculator free?",
        answer: "100% free with no signup, no email required, no credit pull, and zero data sent to any server. Every projection runs in your browser locally. Unlike Fidelity's tools (login required) or Bankrate/NerdWallet (heavy lender tracking and partner referrals), we don't make money from your data or route you to financial advisors. The tool is supported by general site ads outside the calculator itself."
      }
    ],

    relatedTools: [
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Savings Goal Tracker", href: "/finance-tools/savings-tracker" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Retirement Calculator — How Much You Need to Retire",
        description: "Free retirement calculator with 4% rule, 25× rule, Social Security, and FIRE presets. Find your target nest egg, monthly retirement income, and whether you're on track at your age.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RetirementCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/retirement-calculator"
      }}
    />
  )
}
