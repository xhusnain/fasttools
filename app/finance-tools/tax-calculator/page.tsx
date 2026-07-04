import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const TaxCalculator = dynamic(() => import("@/components/finance/tax-calculator").then(mod => mod.TaxCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Globe, DollarSign, TrendingUp, BarChart3, PieChart, Target, Building, Users, Award, CheckCircle, BookOpen, Zap, Sparkles, AlertTriangle } from "lucide-react"

const TOOL_TITLE = "Tax Calculator — Federal Income Tax & Refund Estimator"
const TOOL_META_DESC = "Free income tax calculator. Estimate federal income tax, refund, take-home pay, marginal and effective tax rate. Supports all 5 filing statuses (single, married joint, married separate, head of household, qualifying widow). Includes FICA, standard vs itemized deduction comparison, and multi-country support (US/UK/Canada/AU/EU)."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/tax-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Tax Calculator", href: "/finance-tools/tax-calculator" }
  ],
  schemaOptions: {
    name: "Income Tax Calculator with Refund Estimator",
    alternateName: [
      "Income Tax Calculator",
      "Federal Tax Calculator",
      "Tax Refund Calculator",
      "Tax Return Calculator",
      "1040 Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "US federal income tax with progressive marginal brackets (10/12/22/24/32/35/37%)",
      "All 5 IRS filing statuses: single, MFJ, MFS, HoH, qualifying widow",
      "Standard deduction auto-applied by filing status (with senior/blind adjustments)",
      "Itemized deduction support (SALT cap, mortgage interest, charitable, medical)",
      "FICA: Social Security (6.2% to wage base) + Medicare (1.45% + 0.9% surtax)",
      "Self-employment tax (15.3% combined SE tax for 1099 contractors)",
      "AGI (Adjusted Gross Income) calculation with above-the-line deductions",
      "Tax refund / amount owed estimator (compares withholding to liability)",
      "Marginal vs effective tax rate breakdown",
      "Multi-country support: US, UK, Canada, Australia, EU, with local brackets and NI/CPP/superannuation",
      "Common credits factored in (CTC, EITC, education, energy)",
      "Withholding adjustment guidance",
      "100% client-side — your salary and tax data never leave your browser",
      "Free, no signup, no upsell to tax-prep services",
    ],
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function TaxCalculatorPage() {
  const toolContent = {
    toolName: "Tax Calculator",
    definition:
      "A tax calculator estimates income tax, after-tax income, effective tax rate, marginal tax rate, refund, or amount owed from income, filing status, deductions, credits, and withholding.",
    quickAnswer:
      "Enter your income, filing status, deductions, credits, and withholding to estimate federal income tax, take-home pay, refund, or amount owed. The calculator also shows marginal tax rate, effective tax rate, FICA, and a bracket-by-bracket breakdown.",
    keyTakeaways: [
      "Marginal tax rate is the rate on your next dollar of taxable income",
      "Effective tax rate is total tax divided by taxable or gross income",
      "Standard or itemized deductions reduce taxable income before brackets apply",
      "Credits reduce tax directly and can change refund or amount owed",
      "Use official tax forms or a tax professional before filing final returns",
    ],
    overview: "Calculate income tax, estimate refunds, and determine salary deductions instantly. Our free tax calculator supports income tax, GST, VAT, sales tax, and capital gains calculations for 9+ countries. Get accurate tax breakdowns with real tax brackets from official sources.",

    howToSteps: [
      "Select Country: Choose from 9+ countries with real tax brackets and rates.",
      "Enter Salary: Input your annual gross salary in local currency.",
      "Custom Rate (Optional): Override with your own tax rate if needed.",
      "Get Results: View comprehensive tax breakdown and net salary."
    ],

    features: [
      "Multi-Country Tax Calculation",
      "Real Tax Brackets",
      "Social Security Calculation",
      "Progressive Tax System",
      "Custom Tax Rates",
      "Tax Breakdown Analysis",
      "Net Salary Calculation",
      "Mobile-Responsive Design",
      "Professional Tax Planning"
    ],

    useCases: [
      "Income & Salary Calculations: Calculate tax on income and salary, estimate paycheck deductions, weekly/monthly/annual calculations.",
      "Capital Gains & Investment: Capital gains tax calculations, dividend income tax estimates, retirement income tax planning.",
      "Property & Assets: Property tax calculations, rental income tax estimates, vehicle taxes.",
      "Business & Self-Employment: Business tax calculations, 1099 contractor tax calculations, self-employment tax estimates."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Expert Tax Calculation Tool
          </h2>
          <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our calculator is developed by FastTools' financial technology team with expertise in tax law, accounting principles, and international tax regulations. The tool uses current tax brackets and rates from official sources including IRS (Internal Revenue Service), HMRC (Her Majesty's Revenue and Customs), CRA (Canada Revenue Agency), ATO (Australian Taxation Office), and other national tax authorities.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Reviewed by:</strong> FastTools Tax Team | Certified Tax Professionals
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Expertise:</strong> 15+ years combined experience in tax preparation, accounting, and financial planning
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> February 21, 2026 | Verify final numbers with your official tax authority before filing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Supported Countries & Tax Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { country: "United States", currency: "USD", features: ["Federal Tax", "Social Security", "Medicare"] },
              { country: "United Kingdom", currency: "GBP", features: ["Income Tax", "National Insurance"] },
              { country: "Canada", currency: "CAD", features: ["Federal Tax", "CPP", "EI"] },
              { country: "Australia", currency: "AUD", features: ["Income Tax", "Medicare Levy"] },
              { country: "Germany", currency: "EUR", features: ["Income Tax", "Social Security", "Solidarity"] },
              { country: "France", currency: "EUR", features: ["Income Tax", "Social Security", "CSG"] },
              { country: "Japan", currency: "JPY", features: ["Income Tax", "Social Security", "Resident Tax"] },
              { country: "India", currency: "INR", features: ["Income Tax", "Social Security", "Cess"] },
              { country: "Pakistan", currency: "PKR", features: ["Income Tax", "Social Security", "Zakat"] }
            ].map((country, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-1">{country.country}</h3>
                <p className="text-sm text-muted-foreground mb-2">{country.currency}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {country.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Tax Calculation Formulas
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Progressive Tax Formula</h3>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-muted p-2 rounded">Tax = Σ(Bracket Income × Bracket Rate)</p>
              <p className="text-sm text-muted-foreground">Each tax bracket is calculated separately, then summed for total tax. This formula ensures fair taxation across income levels with accurate brackets from official tax authorities.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Effective Tax Rate Formula</h3>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-muted p-2 rounded">Effective Rate = (Total Tax ÷ Gross Income) × 100</p>
              <p className="text-sm text-muted-foreground">The average tax rate across all income levels, showing your overall tax burden as a percentage. This helps you understand your true tax rate compared to your marginal rate.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Marginal Tax Rate Formula</h3>
              <p className="text-sm text-muted-foreground mb-2 font-mono bg-muted p-2 rounded">Marginal Rate = Tax Rate of Highest Bracket</p>
              <p className="text-sm text-muted-foreground">The tax rate on the next dollar earned, important for financial planning and investment decisions. Understanding your marginal rate helps optimize income timing and deductions.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            Tax Authorities & Regulatory Bodies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">United States: IRS</h3>
              <p className="text-sm text-muted-foreground">IRS (Internal Revenue Service) administers federal income tax, Social Security, and Medicare. Our US tax calculator uses current IRS tax brackets, standard deductions, and tax rates for accurate federal tax calculations.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">United Kingdom: HMRC</h3>
              <p className="text-sm text-muted-foreground">HMRC (Her Majesty's Revenue and Customs) manages UK income tax and National Insurance. Our UK tax calculator incorporates HMRC tax bands, personal allowances, and National Insurance rates.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Canada: CRA</h3>
              <p className="text-sm text-muted-foreground">CRA (Canada Revenue Agency) oversees federal and provincial taxes. Our Canada tax calculator uses CRA tax brackets plus provincial rates for comprehensive Canadian tax calculations.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Australia: ATO</h3>
              <p className="text-sm text-muted-foreground">ATO (Australian Taxation Office) administers income tax and GST. Our Australia tax calculator uses ATO tax brackets, Medicare levy rates, and current tax thresholds.</p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What's the best way to determine income tax on my salary?",
        answer: "Input your annual gross salary and choose your country from the dropdown. Our calculator automatically applies the relevant tax brackets, progressive rates, and mandatory deductions including social security contributions to give you accurate results."
      },
      {
        question: "How does gross salary differ from net salary?",
        answer: "Gross salary represents your complete earnings before any tax or deduction is applied. Net salary is the remaining amount you actually receive after all taxes, social security, and other deductions are subtracted. The calculator displays both figures with a comprehensive breakdown of all deductions."
      },
      {
        question: "How do I calculate self-employment tax?",
        answer: "For self-employment income, you need to calculate both income tax and self-employment tax (Social Security and Medicare). Our calculator includes these calculations for freelancers and business owners."
      },
      {
        question: "How accurate are the tax brackets in this calculator?",
        answer: "Our calculator uses current tax brackets and rates for each country. However, tax laws change frequently, so always verify with your local tax authority for the most current information."
      },
      {
        question: "What is progressive taxation and how does it work?",
        answer: "Progressive taxation means higher income is taxed at higher rates. Each bracket is calculated separately - for example, the first $11,000 might be taxed at 10%, the next $33,725 at 12%, and so on."
      },
      {
        question: "How do I calculate my tax refund or amount owed?",
        answer: "Our calculator shows your total tax liability. To estimate refunds or amounts owed, subtract any tax already paid (withholdings) from your total tax liability. Positive amounts mean you owe money, negative amounts mean you'll get a refund."
      },
      {
        question: "What's the difference between marginal and effective tax rates?",
        answer: "Marginal tax rate is the rate on your next dollar of income, while effective tax rate is your average tax rate across all income. Our calculator shows both rates to help with financial planning."
      },
      {
        question: "Is this calculator free to use?",
        answer: "Yes, our tax calculator is completely free to use with no registration required. All features including custom tax rates, detailed breakdowns, and multiple country support are available at no cost."
      },
      {
        question: "Which documents are required for filing taxes?",
        answer: "You'll need W-2 forms showing wages from employers, 1099 forms for contract or freelance income, mortgage interest documents (Form 1098), property tax receipts, records of charitable contributions, medical expense documentation, and any other proof of income or deductible expenses. Organizing these documents throughout the tax year simplifies the filing process."
      },
      {
        question: "Where can I track my tax refund status?",
        answer: "Access the IRS \"Where's My Refund?\" online tool available at irs.gov, which refreshes once per day. Required information includes your Social Security number, tax filing status, and the precise refund amount you're expecting. Electronic filings typically process in approximately 21 days, while mailed returns take around 6-8 weeks. The system displays three processing phases: Return Received, Return Approved, and Refund Sent."
      },
      {
        question: "What is the standard deduction?",
        answer: "The US standard deduction is approximately $15K-$16K for single filers, ~$30K-$32K for married filing jointly, ~$22K-$24K for head of household, and the same as single for married filing separately. Add roughly $1,600-$2,050 if you're 65+ or blind. These amounts adjust annually for inflation — check IRS.gov for the current-year exact dollar amounts. The standard deduction reduces your taxable income without requiring you to itemize. Take whichever is larger: standard deduction or your itemized total."
      },
      {
        question: "How do tax credits differ from tax deductions?",
        answer: "Tax credits provide a direct dollar-for-dollar reduction of your total tax bill (for instance, a $1,000 credit means you pay $1,000 less in taxes). Tax deductions lower the amount of income subject to taxation, with savings varying by your tax bracket (a $1,000 deduction at the 22% rate saves you $220). Generally, credits provide greater financial benefit than deductions."
      },
      {
        question: "What are the penalties for filing taxes late?",
        answer: "Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties."
      },
      {
        question: "How do I calculate tax in the UK?",
        answer: "UK tax calculation has three main components: (1) Income tax above the personal allowance (currently around £12,570) using progressive bands of 20% basic rate, 40% higher rate, and 45% additional rate. (2) National Insurance contributions on earnings above the primary threshold. (3) Optional student loan repayments. Our UK tax calculator handles all three plus the personal allowance taper for high earners (£100K+), providing an accurate estimate of total UK tax liability and take-home pay."
      },
      {
        question: "How do I calculate tax in Canada?",
        answer: "Canadian tax calculation has two layers: federal tax (progressive brackets of 15%, 20.5%, 26%, 29%, 33%) plus provincial tax that varies by province. The calculator also accounts for CPP (Canada Pension Plan) contributions, EI (Employment Insurance) premiums, and the basic personal amount that everyone gets tax-free. Our Canada tax calculator uses current CRA federal brackets plus your selected province to show total tax burden and net income."
      },
      {
        question: "How is income tax calculated?",
        answer: "US federal income tax uses progressive marginal brackets — you only pay the higher rate on income above each threshold. Example with simplified brackets: first ~$11K at 10%, next portion at 12%, next at 22%, and so on. To calculate: (1) start with gross income, (2) subtract adjustments to get AGI, (3) subtract standard or itemized deduction to get taxable income, (4) apply the marginal brackets to compute tentative tax, (5) subtract credits (CTC, EITC, education, energy), (6) add back FICA (Social Security 6.2% + Medicare 1.45%). The result is your total tax liability."
      },
      {
        question: "What is my tax bracket?",
        answer: "Your marginal tax bracket is the rate applied to your NEXT dollar of income. For typical US filers: $0-$11K → 10%, $11K-$45K → 12%, $45K-$95K → 22%, $95K-$182K → 24%, $182K-$232K → 32%, $232K-$579K → 35%, above $579K → 37% (single filer brackets — married filing jointly thresholds are roughly double). These thresholds adjust annually for inflation. Remember: you don't pay the marginal rate on ALL your income — only on income above each threshold."
      },
      {
        question: "What's the difference between marginal and effective tax rate?",
        answer: "Marginal tax rate is the rate on your NEXT dollar of income — your highest bracket. Effective tax rate is your TOTAL tax divided by total income — your average across all brackets. Example: single filer making $100K might be in the 24% marginal bracket but have an effective rate of only ~16% because progressively lower rates apply to the first portions of income. Use marginal rate to decide whether an extra dollar of income is worth it; use effective rate to gauge your overall tax burden."
      },
      {
        question: "How is self-employment tax calculated?",
        answer: "Self-employment (SE) tax = Social Security (12.4%) + Medicare (2.9%) = 15.3% on net earnings from self-employment. As an employee, your employer pays half; as self-employed, you pay both halves. SE tax applies to the first ~$170K of net SE earnings for Social Security (wage base, adjusts yearly), and ALL net SE earnings for Medicare (no cap). High earners (over $200K single / $250K joint) also pay an additional 0.9% Medicare surtax. You can deduct half of your SE tax as an adjustment to income on Form 1040."
      },
      {
        question: "How accurate are online tax calculators?",
        answer: "Reasonably accurate for typical W-2 wage situations — usually within $50-$200 of actual tax owed. Less accurate for: itemizers with complex deductions, AMT scenarios, multiple state tax situations, capital gains with carryover losses, foreign tax credits, business depreciation. For simple returns the calculator above is fine; for complex situations use TurboTax/H&R Block or a CPA to file."
      }
    ],

    relatedTools: [
      { name: "Tax Bracket Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Quarterly Tax Estimator", href: "/finance-tools/quarterly-tax-calculator" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Tax Calculator — Federal Income Tax & Refund Estimator",
        description: "Estimate federal income tax, refund, take-home pay, and marginal/effective rate. Supports all 5 IRS filing statuses, FICA, standard vs itemized deduction, self-employment tax, and multi-country mode (US/UK/Canada/Australia/EU).",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Tax Calculator", href: "/finance-tools/tax-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TaxCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/tax-calculator"
      }}
    />
  )
}
