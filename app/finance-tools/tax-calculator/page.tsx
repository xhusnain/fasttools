import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const TaxCalculator = dynamic(() => import("@/components/finance/tax-calculator").then(mod => mod.TaxCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Globe, DollarSign, TrendingUp, BarChart3, PieChart, Target, Building, Users, Award, CheckCircle, BookOpen, Zap, Sparkles, AlertTriangle } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Tax Calculator - Income, GST, VAT & Sales Tax",
  description:
    "Calculate income tax, GST, VAT, and sales tax with country-aware brackets and clear deductions for salary planning.",
  path: "/finance-tools/tax-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Tax Calculator", href: "/finance-tools/tax-calculator" }
  ],
  schemaOptions: {
    name: "Tax Calculator",
    alternateName: "Income Tax Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Multi-Country Tax Calculation",
      "Real Tax Brackets",
      "Social Security Calculation",
      "Progressive Tax System",
      "Custom Tax Rates",
      "Tax Breakdown Analysis",
      "Net Salary Calculation",
      "Mobile-Responsive Design",
      "Professional Tax Planning"
    ]
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
        question: "What is the standard deduction for the current tax year?",
        answer: "For, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, $21,900 for head of household, and $14,600 for married filing separately. These amounts are adjusted annually for inflation. The standard deduction reduces your taxable income without needing to itemize deductions."
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
        answer: "UK tax calculation involves several components: income tax (applied to income above the personal allowance of £12,570 for-25), National Insurance contributions, and potentially student loan repayments. Income tax uses progressive bands: 20% basic rate, 40% higher rate, and 45% additional rate. National Insurance is calculated separately on earnings above the primary threshold. Our UK tax calculator accounts for all these factors, including the personal allowance, tax bands, and National Insurance rates, providing an accurate estimate of your total UK tax liability and take-home pay."
      },
      {
        question: "How do I calculate tax in Canada?",
        answer: "Canadian tax calculation includes federal tax brackets plus provincial tax rates. The federal tax rates are progressive (15%, 20.5%, 26%, 29%, 33%), and each province adds its own rates. The calculator also accounts for CPP (Canada Pension Plan) contributions, EI (Employment Insurance) premiums, and basic personal amounts. Our Canada tax calculator uses CRA tax brackets and provincial rates to provide comprehensive Canadian tax calculations showing your total tax burden and net income."
      }
    ],

    relatedTools: [
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Interest Rate Calculator", href: "/finance-tools/interest-rate-calculator" },
      { name: "Payment Calculator", href: "/finance-tools/payment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Finance Calculator", href: "/finance-tools/finance-calculator" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Tax Calculator",
        description: "Calculate income tax, estimate refunds, and determine salary deductions instantly. Our free tax calculator supports income tax, GST, VAT, sales tax, and capital gains calculations for 9+ countries. Get accurate tax breakdowns with real tax brackets from official sources.",
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
        title: "Tax Calculator - Estimate Tax Liability",
        description:
          "Calculate income tax, GST, VAT, and sales tax with country-aware brackets and clear deductions for salary planning.",
        path: "/finance-tools/tax-calculator"
      }}
    />
  )
}
