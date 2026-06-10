import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Calculator, DollarSign, Shield, Calendar, TrendingUp, Building,
  Award, CheckCircle, BookOpen, FileText, AlertTriangle, Users,
  Target, PiggyBank, BarChart3
} from "lucide-react"

const QuarterlyTaxEstimator = dynamic(
  () => import("@/components/finance/quarterly-tax-estimator").then(mod => mod.QuarterlyTaxEstimator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Quarterly Tax Estimator — 1099 / Self-Employment Estimated Tax"
const TOOL_META_DESC = "Free quarterly estimated tax calculator for 1099 freelancers, contractors, and self-employed workers. Calculates self-employment tax (15.3%), federal income tax, safe harbor (90/100/110% rule), April/June/Sept/Jan payment schedule, and underpayment penalty risk."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/quarterly-tax-estimator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Quarterly Tax Estimator", href: "/finance-tools/quarterly-tax-estimator" }
  ],
  schemaOptions: {
    name: "1099 Quarterly Estimated Tax Calculator",
    alternateName: [
      "1099 Tax Calculator",
      "Self-Employment Tax Calculator",
      "Quarterly Estimated Tax Calculator",
      "Estimated Tax Payment Calculator",
      "IRS Form 1040-ES Calculator",
      "Freelancer Tax Calculator",
      "Contractor Tax Calculator",
      "Gig Worker Tax Calculator",
      "SE Tax Calculator",
      "Safe Harbor Tax Calculator",
      "Underpayment Penalty Estimator",
      "Quarterly Estimated Payments Calculator",
      "1099 Estimated Tax Calculator",
      "Schedule SE Calculator",
      "QBI Deduction Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Quarterly estimated tax calculation (Q1/Q2/Q3/Q4 payments)",
      "Self-employment tax breakdown (Social Security 12.4% + Medicare 2.9% = 15.3%)",
      "Safe harbor rule analysis (pay 100% of last year's tax, or 110% if AGI > $150K)",
      "IRS due dates: April 15, June 15, September 15, January 15",
      "Federal tax bracket-by-bracket visualization",
      "Mixed W-2 + 1099 income support (W-2 withholding counts toward estimated tax)",
      "SEP-IRA / Solo 401(k) retirement contribution tax savings modeling",
      "What-if scenario comparison (higher income, more deductions, etc.)",
      "Show-my-math step-by-step calculation trace",
      "QBI (Section 199A) deduction for qualified business income (20% pass-through)",
      "Half-of-SE-tax deduction adjustment to AGI",
      "Underpayment penalty estimator (current IRS rate)",
      "Exportable tax summary for record-keeping",
      "100% client-side — your income data never leaves your browser",
    ],
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function QuarterlyTaxEstimatorPage() {
  const toolContent = {
    toolName: "1099 Quarterly Tax Estimator",
    definition:
      "A quarterly tax estimator calculates estimated federal tax payments for freelancers, contractors, self-employed workers, and other taxpayers with income not fully covered by withholding.",
    quickAnswer:
      "Enter your expected 1099 income, deductions, filing status, prior-year tax, and any W-2 withholding to estimate quarterly payments. The calculator includes self-employment tax, federal income tax, safe harbor checks, and the April, June, September, and January IRS payment schedule.",
    keyTakeaways: [
      "Freelancers and contractors often need estimated tax payments because no employer withholds tax",
      "Self-employment tax includes Social Security and Medicare tax on net self-employment earnings",
      "Safe harbor rules can reduce underpayment penalty risk when income is uncertain",
      "Quarterly due dates usually fall in April, June, September, and January",
      "Business deductions and retirement contributions can reduce taxable income and estimated payments",
    ],
    overview: "Calculate exactly how much to pay in quarterly estimated taxes on your 1099 income. This free estimator covers self-employment tax (Social Security 12.4% + Medicare 2.9% = 15.3%), federal income tax, and safe harbor analysis — so you never face IRS underpayment penalties. Built for freelancers, contractors, and gig workers earning 1099 income. Uses current IRS brackets and standard deduction (verify final numbers on IRS.gov for the tax year you're filing).",

    howToSteps: [
      "Enter Income: Input your expected annual 1099 income and filing status. Optionally add W-2 income if you have mixed income sources.",
      "Add Deductions: Enter total business deductions and optional retirement contributions (SEP-IRA, Solo 401k) to reduce your taxable income.",
      "Prior Year Info: Enter last year's total tax and AGI from your Form 1040 — this enables safe harbor calculation to protect you from penalties.",
      "Get Results: View your quarterly payment schedule, full tax breakdown, what-if scenarios, and step-by-step calculation trace."
    ],

    features: [
      "Self-Employment Tax Calculator: Calculates Social Security (12.4%) and Medicare (2.9%) taxes with accurate wage cap handling",
      "Safe Harbor Analysis: Automatically compares 90% current-year vs 100%/110% prior-year methods to find the lowest safe payment",
      "Quarterly Payment Schedule: Shows exact amounts and due dates (April 15, June 15, September 15, January 15) with IRS payment links",
      "Mixed Income Support: Handles combined W-2 salary and 1099 self-employment income with proper withholding offsets",
      "Formula Transparency: \"Show My Math\" panel reveals every step of the calculation — no black box",
      "What-If Scenarios: Compare base, conservative (-20%), and growth (+20%) income scenarios side by side",
      "Retirement Tax Optimizer: See how SEP-IRA, Solo 401(k), or Traditional IRA contributions reduce your quarterly payments",
      "Federal Bracket Visualization: Visual bar chart showing how your income is taxed across all 7 federal brackets",
      "QBI Deduction: Automatically applies the 20% Qualified Business Income deduction for pass-through income",
      "Export & Copy: Download your complete tax summary as a text file or copy to clipboard for your accountant",
      "Custom Income Distribution: Distribute income unevenly across quarters for freelancers with variable income",
      "Additional Medicare Tax: Accounts for the 0.9% surtax on high earners above the filing-status threshold"
    ],

    useCases: [
      "Freelancers & Contractors: Designers, developers, writers, and consultants earning 1099-NEC income can estimate quarterly payments before each IRS deadline.",
      "Gig Workers: Rideshare drivers, delivery workers, and marketplace sellers with variable income can use custom quarterly distribution to plan payments accurately.",
      "Side Hustlers: W-2 employees with additional 1099 income can calculate how much extra estimated tax to pay after accounting for employer withholding.",
      "Self-Employed Business Owners: Sole proprietors can optimize tax liability by modeling retirement contributions and business deductions before making quarterly payments."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Expert-Built Quarterly Tax Estimator
          </h2>
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              This quarterly tax estimator is built using current IRS guidelines, including Publication 505 (Tax Withholding and Estimated Tax) and Form 1040-ES instructions. Brackets and deductions update annually via IRS Revenue Procedure inflation adjustments — verify the current-year numbers on IRS.gov before filing. Every formula is transparent — click &quot;Show My Math&quot; to see how your estimate is calculated step by step.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Sources:</strong> IRS Publication 505 | Form 1040-ES | Revenue Procedure 2025-11
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Tax Year:</strong> Current (brackets and deductions update annually for inflation adjustments — verify on IRS.gov before filing)
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Verify with IRS or a tax professional before filing.</strong> Tool uses current IRS guidance, but rates and forms can change annually.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            IRS Safe Harbor Rule Explained
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The IRS safe harbor rule protects you from underpayment penalties if you pay enough estimated tax during the year. There are two methods to meet safe harbor — our calculator automatically compares both and recommends the one that saves you the most money.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Current-Year Method (90%)
                </h3>
                <p className="text-sm text-muted-foreground mb-2 font-mono bg-muted p-2 rounded">Required = Current Year Tax × 90%</p>
                <p className="text-sm text-muted-foreground">Pay at least 90% of your estimated current-year tax liability. Best when you expect lower income than last year.</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Prior-Year Method (100%/110%)
                </h3>
                <p className="text-sm text-muted-foreground mb-2 font-mono bg-muted p-2 rounded">Required = Prior Year Tax × 100% (or 110%)</p>
                <p className="text-sm text-muted-foreground">Pay 100% of last year&apos;s tax (110% if your AGI exceeded $150,000). Best when income is rising.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Quarterly Tax Due Dates
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold">Quarter</th>
                  <th className="text-left py-2 font-semibold">Income Period</th>
                  <th className="text-left py-2 font-semibold">Due Date</th>
                  <th className="text-left py-2 font-semibold">Form</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2">Q1</td>
                  <td className="py-2 text-muted-foreground">Jan 1 – Mar 31</td>
                  <td className="py-2 font-medium">April 15</td>
                  <td className="py-2 text-muted-foreground">1040-ES</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Q2</td>
                  <td className="py-2 text-muted-foreground">Apr 1 – May 31</td>
                  <td className="py-2 font-medium">June 15</td>
                  <td className="py-2 text-muted-foreground">1040-ES</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Q3</td>
                  <td className="py-2 text-muted-foreground">Jun 1 – Aug 31</td>
                  <td className="py-2 font-medium">September 15</td>
                  <td className="py-2 text-muted-foreground">1040-ES</td>
                </tr>
                <tr>
                  <td className="py-2">Q4</td>
                  <td className="py-2 text-muted-foreground">Sep 1 – Dec 31</td>
                  <td className="py-2 font-medium">January 15 (next year)</td>
                  <td className="py-2 text-muted-foreground">1040-ES</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            If a due date falls on a weekend or federal holiday, the deadline moves to the next business day. Pay via <a href="https://www.irs.gov/payments/direct-pay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IRS Direct Pay</a> or <a href="https://www.eftps.gov/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EFTPS</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Self-Employment Tax Formula
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">SE Tax Calculation</h3>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">SE Tax Base = Net SE Income × 92.35%</p>
                <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">Social Security = min(SE Tax Base, $176,100) × 12.4%</p>
                <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">Medicare = SE Tax Base × 2.9%</p>
                <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded">Total SE Tax = Social Security + Medicare</p>
              </div>
              <p className="text-sm text-muted-foreground mt-3">The 92.35% multiplier (100% − 7.65%) accounts for the employer-equivalent portion of FICA taxes. You can deduct half of your SE tax from your adjusted gross income.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Additional Medicare Tax</h3>
              <p className="text-sm text-muted-foreground font-mono bg-muted p-2 rounded mb-2">0.9% on combined income above $200,000 (single) or $250,000 (MFJ)</p>
              <p className="text-sm text-muted-foreground">This surtax applies to high earners and is calculated on combined W-2 wages plus SE income exceeding the threshold for your filing status.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Federal Tax Brackets (current year)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold">Rate</th>
                  <th className="text-left py-2 font-semibold">Single</th>
                  <th className="text-left py-2 font-semibold">Married Filing Jointly</th>
                  <th className="text-left py-2 font-semibold">Head of Household</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rate: '10%', single: '$0 – $11,925', mfj: '$0 – $23,850', hoh: '$0 – $17,000' },
                  { rate: '12%', single: '$11,926 – $48,475', mfj: '$23,851 – $96,950', hoh: '$17,001 – $64,850' },
                  { rate: '22%', single: '$48,476 – $103,350', mfj: '$96,951 – $206,700', hoh: '$64,851 – $103,350' },
                  { rate: '24%', single: '$103,351 – $197,300', mfj: '$206,701 – $394,600', hoh: '$103,351 – $197,300' },
                  { rate: '32%', single: '$197,301 – $250,525', mfj: '$394,601 – $501,050', hoh: '$197,301 – $250,500' },
                  { rate: '35%', single: '$250,526 – $626,350', mfj: '$501,051 – $751,600', hoh: '$250,501 – $626,350' },
                  { rate: '37%', single: 'Over $626,350', mfj: 'Over $751,600', hoh: 'Over $626,350' },
                ].map((row) => (
                  <tr key={row.rate} className="border-b border-border">
                    <td className="py-2 font-medium">{row.rate}</td>
                    <td className="py-2 text-muted-foreground">{row.single}</td>
                    <td className="py-2 text-muted-foreground">{row.mfj}</td>
                    <td className="py-2 text-muted-foreground">{row.hoh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Standard deductions (approximate ranges, adjust annually for inflation): Single/MFS ~$15K, Married Filing Jointly ~$30K, Head of Household ~$22.5K. Check IRS.gov for current-year exact amounts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Who Needs to Pay Quarterly Estimated Taxes?
          </h2>
          <div className="bg-card border border-border rounded-xl p-4 md:p-6">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The IRS requires you to pay estimated taxes if you expect to owe $1,000 or more in federal tax after subtracting withholding and credits. This applies to most self-employed individuals, freelancers, and contractors who receive 1099 income.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Freelancers & Consultants", desc: "Designers, developers, writers, marketers, and other professionals receiving 1099-NEC income" },
                { title: "Gig Workers", desc: "Rideshare drivers (Uber, Lyft), delivery workers (DoorDash, Instacart), and marketplace sellers" },
                { title: "Independent Contractors", desc: "Construction, healthcare, legal, and other contract workers not on a company payroll" },
                { title: "Side Hustlers", desc: "W-2 employees with additional freelance, rental, or investment income exceeding $1,000 in tax" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            How This Tool Compares
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-semibold">Feature</th>
                  <th className="text-center py-2 font-semibold">FastTools</th>
                  <th className="text-center py-2 font-semibold">TurboTax</th>
                  <th className="text-center py-2 font-semibold">Keeper</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Free to use (no account)', ft: true, tt: false, k: true },
                  { feature: 'Safe harbor analysis', ft: true, tt: false, k: false },
                  { feature: 'Show calculation steps', ft: true, tt: false, k: false },
                  { feature: 'W-2 + 1099 mixed income', ft: true, tt: true, k: true },
                  { feature: 'Retirement contribution impact', ft: true, tt: false, k: false },
                  { feature: 'What-if scenarios', ft: true, tt: false, k: false },
                  { feature: 'Custom quarterly distribution', ft: true, tt: false, k: false },
                  { feature: 'Export/download results', ft: true, tt: false, k: false },
                  { feature: 'QBI deduction included', ft: true, tt: true, k: true },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-2 text-muted-foreground">{row.feature}</td>
                    <td className="py-2 text-center">{row.ft ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : '—'}</td>
                    <td className="py-2 text-center">{row.tt ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : '—'}</td>
                    <td className="py-2 text-center">{row.k ? <CheckCircle className="h-4 w-4 text-green-500 mx-auto" /> : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Common 1099 Deductions That Reduce Your Quarterly Taxes
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { title: "Home Office", desc: "Simplified method: $5/sq ft up to 300 sq ft ($1,500 max). Regular method: actual expenses pro-rated by office percentage." },
              { title: "Vehicle & Mileage", desc: "Standard mileage rate updates annually (recently around 67¢ per business mile). Check IRS.gov for the current year's rate. Track mileage logs with a smartphone app for IRS compliance." },
              { title: "Health Insurance", desc: "Self-employed individuals can deduct 100% of health, dental, and long-term care insurance premiums above-the-line." },
              { title: "Retirement Contributions", desc: "SEP-IRA (up to 25% of net SE income), Solo 401(k) ($23,500 employee + 25% employer), or Traditional IRA ($7,000)." },
              { title: "Software & Subscriptions", desc: "Business software, cloud services, project management tools, and professional subscriptions are fully deductible." },
              { title: "Professional Services", desc: "Accountant fees, legal counsel, and business consulting are deductible as ordinary business expenses." },
            ].map((item) => (
              <div key={item.title} className="p-3 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How much should I set aside for 1099 taxes?",
        answer: "A common rule of thumb is to set aside 25-30% of your gross 1099 income for federal taxes. This covers both self-employment tax (15.3%) and federal income tax. However, the exact amount depends on your filing status, total income, deductions, and tax bracket. Our calculator gives you a precise quarterly payment amount based on your specific situation, including safe harbor analysis to prevent underpayment penalties."
      },
      {
        question: "What is the safe harbor rule for estimated taxes?",
        answer: "The IRS safe harbor rule lets you avoid underpayment penalties by paying the lesser of: (1) 90% of your current year's tax liability, or (2) 100% of your prior year's tax (110% if your prior-year AGI exceeded $150,000, or $75,000 if married filing separately). Our calculator automatically compares both methods and recommends the option that results in the lowest required payment while still meeting safe harbor requirements."
      },
      {
        question: "How do I avoid the IRS underpayment penalty?",
        answer: "To avoid the IRS underpayment penalty (Form 2210), you must either: pay at least 90% of your current year's tax through estimated payments and withholding, pay 100% of last year's tax (110% for high earners), owe less than $1,000 when you file, or have withholding that covers your tax liability. Making equal quarterly payments by each due date (April 15, June 15, September 15, January 15) is the simplest strategy."
      },
      {
        question: "What is the self-employment tax rate?",
        answer: "The self-employment tax rate is 15.3%, consisting of 12.4% for Social Security (on the first ~$170K of net SE income — the Social Security wage base adjusts annually) and 2.9% for Medicare (on all net SE income). An additional 0.9% Medicare surtax applies to combined income exceeding $200,000 (single) or $250,000 (married filing jointly). Note: SE tax is calculated on 92.35% of your net self-employment income, and you can deduct half of your SE tax from your adjusted gross income."
      },
      {
        question: "When are quarterly estimated taxes due?",
        answer: "Federal quarterly estimated tax due dates are: Q1 (Jan-Mar income) due April 15; Q2 (Apr-May income) due June 15; Q3 (Jun-Aug income) due September 15; Q4 (Sep-Dec income) due January 15 of the following year. If a due date falls on a weekend or federal holiday, the deadline moves to the next business day. Pay using IRS Direct Pay, EFTPS, or by mailing Form 1040-ES payment vouchers."
      },
      {
        question: "Do I need to pay quarterly taxes on side hustle income?",
        answer: "Yes, if you expect to owe $1,000 or more in federal tax on your side hustle income after subtracting W-2 withholding. If your W-2 employer withholds enough tax to cover your total liability (including side income), you may not need to make quarterly payments. Use our calculator with both your W-2 income/withholding and 1099 income to see if you need to make additional estimated payments."
      },
      {
        question: "What is the annualized installment method?",
        answer: "The annualized installment method (IRS Form 2210, Schedule AI) lets freelancers with uneven income pay estimated taxes based on income actually earned in each period rather than dividing annual income equally. This helps if you earn significantly more in some quarters than others — for example, a freelancer earning $50,000 in Q4 but only $5,000 in Q1 can pay lower estimates early in the year without penalty."
      },
      {
        question: "How do I calculate quarterly taxes with W-2 and 1099 income?",
        answer: "First, calculate your total tax liability on all income (W-2 + 1099). Then subtract your W-2 withholding from the total. The remaining amount is what you need to pay through quarterly estimated payments. Our calculator handles this automatically — enter both your W-2 income/withholding and 1099 income, and it shows exactly how much additional estimated tax to pay each quarter."
      },
      {
        question: "What deductions can 1099 contractors claim?",
        answer: "Common 1099 deductions include: home office expenses ($5/sq ft simplified, up to $1,500), vehicle mileage (around 67¢/mile — check current IRS rate), health insurance premiums, retirement contributions (SEP-IRA, Solo 401k), business supplies and equipment, software subscriptions, professional development, marketing costs, and business travel. You can also deduct half of your self-employment tax. Keep records and receipts for all deductions."
      },
      {
        question: "What happens if I miss a quarterly tax payment?",
        answer: "Missing a quarterly payment can result in an underpayment penalty calculated using Form 2210. The penalty is essentially interest on the underpaid amount, currently at 7% annual rate, charged from the payment due date until April 15 of the following year. The penalty applies per quarter, so missing Q1 accrues more interest than missing Q4. You can still make a late payment to reduce the penalty amount — paying something is always better than paying nothing."
      }
    ],

    relatedTools: [
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Tax Bracket Calculator", href: "/finance-tools/tax-bracket-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Quarterly Tax Estimator — 1099 Self-Employment",
        description: "Calculate quarterly estimated tax payments for freelancers, contractors, and self-employed workers. Includes self-employment tax (15.3%), federal income tax, safe harbor analysis (90/100/110%), and underpayment penalty risk.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Quarterly Tax Estimator", href: "/finance-tools/quarterly-tax-estimator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <QuarterlyTaxEstimator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/quarterly-tax-estimator"
      }}
    />
  )
}
