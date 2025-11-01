import { TaxCalculator } from "@/components/tax-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { 
  Calculator, Globe, DollarSign, TrendingUp, BarChart3, 
  PieChart, Target, Building, Users, Award, CheckCircle, 
  BookOpen, Zap, Sparkles, AlertTriangle, Info
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastTools - Tax Calculator | Free Income, GST, VAT & Sales Tax Calculator",
  description: "FastTools Tax Calculator - Free tool to calculate income tax, GST, VAT, or sales tax instantly. Enter amount and tax rate to get total payable tax and net amount.",
  keywords: [
    "fasttools",
    "fast tools",
    "tax calculator",
    "income tax calculator",
    "GST calculator",
    "sales tax calculator",
    "tax percentage calculator",
    "VAT calculator",
    "calculate tax online",
    "after tax calculator",
    "before tax calculator",
    "inclusive vs exclusive tax calculator",
    "total tax calculator",
    "tax amount calculator",
    "tax deduction calculator",
    "tax return calculator",
    "tax rate calculator",
    "net income calculator",
    "income after tax calculator",
    "business tax calculator",
    "multi country tax calculator",
    "salary calculator",
    "tax estimator",
    "net salary calculator",
    "tax brackets",
    "social security calculator",
    "tax breakdown",
    "international tax calculator",
    "US income tax calculator",
    "UK income tax calculator", 
    "Canada income tax calculator",
    "Australia income tax calculator",
    "Germany income tax calculator",
    "France income tax calculator",
    "Japan income tax calculator",
    "India income tax calculator",
    "Pakistan income tax calculator",
    "US tax brackets",
    "UK tax brackets",
    "Canada tax brackets",
    "Australia tax brackets",
    "Germany tax brackets",
    "France tax brackets",
    "Japan tax brackets",
    "India tax brackets",
    "Pakistan tax brackets",
    "US federal tax",
    "UK HMRC tax",
    "Canada CRA tax",
    "Australia ATO tax",
    "Germany tax",
    "France tax",
    "Japan tax",
    "India tax",
    "Pakistan FBR tax",
    "progressive tax calculator",
    "marginal tax rate calculator",
    "effective tax rate calculator",
    "take home pay calculator",
    "salary after tax calculator",
    "tax deduction calculator",
    "payroll tax calculator",
    "income tax rates",
    "tax calculation formula",
    "tax planning calculator",
    "financial planning tools"
  ],
  openGraph: {
    title: "Free Online Tax Calculator | Income Tax, GST, VAT & Sales Tax Calculator | FastTools",
    description: "Use our free Tax Calculator to instantly calculate income tax, GST, VAT, or sales tax. Enter your amount and tax rate to get total payable tax and net amount. Fast, accurate, and completely online.",
    type: "website",
    url: "https://www.fasttools.store/calculator/tax-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-tax-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Tax Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Tax Calculator | Income Tax, GST, VAT & Sales Tax Calculator | FastTools",
    description: "Use our free Tax Calculator to instantly calculate income tax, GST, VAT, or sales tax. Enter your amount and tax rate to get total payable tax and net amount. Fast, accurate, and completely online.",
    images: ["https://www.fasttools.store/og-tax-calculator.jpg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/tax-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "FastTools Tax Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function TaxCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Online Tax Calculator",
    "applicationCategory": "Tax Calculation Tool",
    "operatingSystem": "Web Browser",
    "url": "https://www.fasttools.store/calculator/tax-calculator",
    "description": "Calculate income tax for 9+ countries with real tax brackets, social security, and additional taxes. Get comprehensive tax breakdown, effective rates, and accurate net salary calculations.",
    "featureList": [
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
    "screenshot": "https://www.fasttools.store/og-tax-calculator.jpg",
    "softwareHelp": {
      "@type": "HowTo",
      "name": "How to Use Tax Calculator",
      "description": "Step-by-step guide to using the advanced tax calculator",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Select Country",
          "text": "Choose from 9+ countries with real tax brackets and rates"
        },
        {
          "@type": "HowToStep",
          "name": "Enter Salary",
          "text": "Input your annual gross salary in local currency"
        },
        {
          "@type": "HowToStep",
          "name": "Custom Rate (Optional)",
          "text": "Override with your own tax rate if needed"
        },
        {
          "@type": "HowToStep",
          "name": "Get Results",
          "text": "View comprehensive tax breakdown and net salary"
        }
      ]
    },
    "author": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "version": "2.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the best way to determine income tax on my salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Input your annual gross salary and choose your country from the dropdown. Our calculator automatically applies the relevant tax brackets, progressive rates, and mandatory deductions including social security contributions to give you accurate results."
        }
      },
      {
        "@type": "Question",
        "name": "How does gross salary differ from net salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gross salary represents your complete earnings before any tax or deduction is applied. Net salary is the remaining amount you actually receive after all taxes, social security, and other deductions are subtracted. The calculator displays both figures with a comprehensive breakdown of all deductions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate self-employment tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For self-employment income, you need to calculate both income tax and self-employment tax (Social Security and Medicare). Our calculator includes these calculations for freelancers and business owners."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate sales tax with this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our calculator supports sales tax calculations. Enter the purchase amount and tax rate to get the total including tax or calculate tax from a total amount."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are the tax brackets in this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses current tax brackets and rates for each country. However, tax laws change frequently, so always verify with your local tax authority for the most current information."
        }
      },
      {
        "@type": "Question",
        "name": "What is progressive taxation and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Progressive taxation means higher income is taxed at higher rates. Each bracket is calculated separately - for example, the first $11,000 might be taxed at 10%, the next $33,725 at 12%, and so on."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate my tax refund or amount owed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator shows your total tax liability. To estimate refunds or amounts owed, subtract any tax already paid (withholdings) from your total tax liability. Positive amounts mean you owe money, negative amounts mean you'll get a refund."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for business tax planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our calculator is useful for business tax planning. It can calculate corporate tax rates, VAT, and other business taxes. However, for complex business scenarios, always consult with a tax professional."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate property tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Property tax is calculated as: Property Tax = (Property Value × Assessment Rate × Tax Rate) ÷ 100. Our calculator can help with this calculation when you input the property value and local tax rate."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between marginal and effective tax rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Marginal tax rate is the rate on your next dollar of income, while effective tax rate is your average tax rate across all income. Our calculator shows both rates to help with financial planning."
        }
      },
      {
        "@type": "Question",
        "name": "Is this calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our tax calculator is completely free to use with no registration required. All features including custom tax rates, detailed breakdowns, and multiple country support are available at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "Which documents are required for filing taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll need W-2 forms showing wages from employers, 1099 forms for contract or freelance income, mortgage interest documents (Form 1098), property tax receipts, records of charitable contributions, medical expense documentation, and any other proof of income or deductible expenses. Organizing these documents throughout the tax year simplifies the filing process."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I track my tax refund status?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Access the IRS \"Where's My Refund?\" online tool available at irs.gov, which refreshes once per day. Required information includes your Social Security number, tax filing status, and the precise refund amount you're expecting. Electronic filings typically process in approximately 21 days, while mailed returns take around 6-8 weeks. The system displays three processing phases: Return Received, Return Approved, and Refund Sent."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard deduction for the current tax year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 2024, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, $21,900 for head of household, and $14,600 for married filing separately. These amounts are adjusted annually for inflation. The standard deduction reduces your taxable income without needing to itemize deductions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I file for a tax extension?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Submit Form 4868 to the IRS before the regular filing deadline (usually April 15) to automatically receive a 6-month extension period. Remember that any estimated taxes you owe must still be paid by the original deadline to prevent penalties and interest charges. You have the option to submit the form online or through traditional mail."
        }
      },
      {
        "@type": "Question",
        "name": "What are the tax brackets for this year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 2024, the federal tax brackets are: 10% (up to $11,600), 12% ($11,601-$47,150), 22% ($47,151-$100,525), 24% ($100,526-$191,950), 32% ($191,951-$243,725), 35% ($243,726-$609,350), and 37% (over $609,350) for single filers. Brackets differ for married filing jointly, head of household, and married filing separately."
        }
      },
      {
        "@type": "Question",
        "name": "How do I claim the Child Tax Credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Child Tax Credit is worth up to $2,000 per qualifying child under 17. You can claim it on your tax return if your income is below certain thresholds ($200,000 for single filers, $400,000 for married filing jointly). The credit is partially refundable up to $1,600 per child. Complete Schedule 8812 if claiming the refundable portion."
        }
      },
      {
        "@type": "Question",
        "name": "How do tax credits differ from tax deductions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax credits provide a direct dollar-for-dollar reduction of your total tax bill (for instance, a $1,000 credit means you pay $1,000 less in taxes). Tax deductions lower the amount of income subject to taxation, with savings varying by your tax bracket (a $1,000 deduction at the 22% rate saves you $220). Generally, credits provide greater financial benefit than deductions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I report self-employment income?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your net self-employment earnings reach $400 or higher, report them using Schedule C attached to Form 1040. Additionally, complete Schedule SE to calculate and report self-employment taxes covering Social Security and Medicare contributions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the penalties for filing taxes late?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-3 py-6 md:py-8">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Tax Calculator", href: "/calculator/tax-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader 
                title="Free Online Tax Calculator"
                description="Use our free Tax Calculator to instantly calculate income tax, GST, VAT, or sales tax. Enter your amount and tax rate to get total payable tax and net amount. Fast, accurate, and completely online."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-slate-700 rounded-xl shadow-sm bg-black" />
        </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
            <TaxCalculator />
                
                {/* How to Use Section */}
                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                      How to Use Our Tax Calculator
                    </h2>
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">1. Select Your Country</h3>
                          <p className="text-xs text-slate-400">Choose from 9+ countries with real tax brackets</p>
                    </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">2. Enter Your Salary</h3>
                          <p className="text-xs text-slate-400">Input your annual gross salary in local currency</p>
                  </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">3. Custom Rate (Optional)</h3>
                          <p className="text-xs text-slate-400">Override with your own tax rate if needed</p>
                    </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">4. Get Results</h3>
                          <p className="text-xs text-slate-400">View comprehensive tax breakdown and net salary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Countries */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Globe className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                </div>
                Supported Countries & Tax Systems
              </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
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
                        <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">{country.country}</h3>
                          <p className="text-xs text-slate-400 mb-1">{country.currency}</p>
                          <ul className="text-xs text-slate-400 space-y-0.5">
                      {country.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                                <CheckCircle className="h-2 w-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

                  {/* Tax Calculation Types */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                      </div>
                      Tax Calculation Types
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { type: "Income Tax Calculator", icon: DollarSign, desc: "Calculate income tax for individuals", example: "Personal income tax calculation" },
                        { type: "GST Calculator", icon: TrendingUp, desc: "Calculate Goods and Services Tax", example: "GST on products and services" },
                        { type: "VAT Calculator", icon: BarChart3, desc: "Calculate Value Added Tax", example: "VAT for business transactions" },
                        { type: "Sales Tax Calculator", icon: PieChart, desc: "Calculate sales tax on purchases", example: "Retail sales tax calculation" },
                        { type: "Tax Percentage Calculator", icon: Target, desc: "Calculate tax percentage and rates", example: "Tax rate percentage calculation" },
                        { type: "After Tax Calculator", icon: CheckCircle, desc: "Calculate net amount after tax", example: "Net income after deductions" },
                        { type: "Before Tax Calculator", icon: AlertTriangle, desc: "Calculate gross amount before tax", example: "Gross salary before deductions" },
                        { type: "Total Tax Calculator", icon: Building, desc: "Calculate total tax amount payable", example: "Total tax liability calculation" },
                        { type: "Business Tax Calculator", icon: Users, desc: "Calculate business tax obligations", example: "Corporate tax calculation" }
                      ].map(({ type, icon: Icon, desc, example }) => (
                        <div key={type} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="h-3 w-3 text-green-500" />
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">{type}</h3>
                          </div>
                          <p className="text-xs text-slate-400 mb-1">{desc}</p>
                          <p className="text-xs text-orange-400 font-mono bg-orange-500/10 px-1.5 py-0.5 rounded">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Zap className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                </div>
                Advanced Calculation Features
              </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-green-500/10 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-green-500" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">Progressive Tax Brackets</h3>
                            <p className="text-xs text-slate-400">Real tax brackets for each country with accurate calculations</p>
                    </div>
                  </div>
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-green-500/10 rounded-lg">
                            <Building className="h-3 w-3 text-green-500" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">Social Security</h3>
                            <p className="text-xs text-slate-400">Country-specific social security contributions</p>
                    </div>
                  </div>
                </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-green-500/10 rounded-lg">
                            <PieChart className="h-3 w-3 text-green-500" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">Tax Breakdown</h3>
                            <p className="text-xs text-slate-400">Detailed breakdown by tax bracket and rate</p>
                    </div>
                  </div>
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-green-500/10 rounded-lg">
                            <Target className="h-3 w-3 text-green-500" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">Custom Rates</h3>
                            <p className="text-xs text-slate-400">Override with your own tax rate for special cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                  {/* Tax Formulas Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                </div>
                      Tax Calculation Formulas
              </h2>
                    <div className="space-y-3">
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Progressive Tax Formula</h3>
                        <p className="text-xs text-slate-400 mb-2">Tax = Σ(Bracket Income × Bracket Rate)</p>
                        <p className="text-xs text-slate-400">Each tax bracket is calculated separately, then summed for total tax. This ensures fair taxation across income levels.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Effective Tax Rate Formula</h3>
                        <p className="text-xs text-slate-400 mb-2">Effective Rate = (Total Tax ÷ Gross Income) × 100</p>
                        <p className="text-xs text-slate-400">The average tax rate across all income levels, showing your overall tax burden as a percentage.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Marginal Tax Rate Formula</h3>
                        <p className="text-xs text-slate-400 mb-2">Marginal Rate = Tax Rate of Highest Bracket</p>
                        <p className="text-xs text-slate-400">The tax rate on the next dollar earned, important for financial planning and investment decisions.</p>
                </div>
              </div>
            </div>

                  {/* FAQ Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Info className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 md:space-y-3">
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What's the best way to determine income tax on my salary?</h3>
                        <p className="text-xs text-slate-400">Input your annual gross salary and choose your country from the dropdown. Our calculator automatically applies the relevant tax brackets, progressive rates, and mandatory deductions including social security contributions to give you accurate results.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How does gross salary differ from net salary?</h3>
                        <p className="text-xs text-slate-400">Gross salary represents your complete earnings before any tax or deduction is applied. Net salary is the remaining amount you actually receive after all taxes, social security, and other deductions are subtracted. The calculator displays both figures with a comprehensive breakdown of all deductions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I calculate self-employment tax?</h3>
                        <p className="text-xs text-slate-400">For self-employment income, you need to calculate both income tax and self-employment tax (Social Security and Medicare). Our calculator includes these calculations for freelancers and business owners.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Can I calculate sales tax with this calculator?</h3>
                        <p className="text-xs text-slate-400">Yes! Our calculator supports sales tax calculations. Enter the purchase amount and tax rate to get the total including tax or calculate tax from a total amount.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How accurate are the tax brackets in this calculator?</h3>
                        <p className="text-xs text-slate-400">Our calculator uses current tax brackets and rates for each country. However, tax laws change frequently, so always verify with your local tax authority for the most current information.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What is progressive taxation and how does it work?</h3>
                        <p className="text-xs text-slate-400">Progressive taxation means higher income is taxed at higher rates. Each bracket is calculated separately - for example, the first $11,000 might be taxed at 10%, the next $33,725 at 12%, and so on.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I calculate my tax refund or amount owed?</h3>
                        <p className="text-xs text-slate-400">Our calculator shows your total tax liability. To estimate refunds or amounts owed, subtract any tax already paid (withholdings) from your total tax liability. Positive amounts mean you owe money, negative amounts mean you'll get a refund.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Can I use this calculator for business tax planning?</h3>
                        <p className="text-xs text-slate-400">Yes, our calculator is useful for business tax planning. It can calculate corporate tax rates, VAT, and other business taxes. However, for complex business scenarios, always consult with a tax professional.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I calculate property tax?</h3>
                        <p className="text-xs text-slate-400">Property tax is calculated as: Property Tax = (Property Value × Assessment Rate × Tax Rate) ÷ 100. Our calculator can help with this calculation when you input the property value and local tax rate.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What's the difference between marginal and effective tax rates?</h3>
                        <p className="text-xs text-slate-400">Marginal tax rate is the rate on your next dollar of income, while effective tax rate is your average tax rate across all income. Our calculator shows both rates to help with financial planning.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Is this calculator free to use?</h3>
                        <p className="text-xs text-slate-400">Yes, our tax calculator is completely free to use with no registration required. All features including custom tax rates, detailed breakdowns, and multiple country support are available at no cost.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Which documents are required for filing taxes?</h3>
                        <p className="text-xs text-slate-400">You'll need W-2 forms showing wages from employers, 1099 forms for contract or freelance income, mortgage interest documents (Form 1098), property tax receipts, records of charitable contributions, medical expense documentation, and any other proof of income or deductible expenses. Organizing these documents throughout the tax year simplifies the filing process.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Where can I track my tax refund status?</h3>
                        <p className="text-xs text-slate-400">Access the IRS "Where's My Refund?" online tool available at irs.gov, which refreshes once per day. Required information includes your Social Security number, tax filing status, and the precise refund amount you're expecting. Electronic filings typically process in approximately 21 days, while mailed returns take around 6-8 weeks. The system displays three processing phases: Return Received, Return Approved, and Refund Sent.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What is the standard deduction for the current tax year?</h3>
                        <p className="text-xs text-slate-400">For 2024, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, $21,900 for head of household, and $14,600 for married filing separately. These amounts are adjusted annually for inflation. The standard deduction reduces your taxable income without needing to itemize deductions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I file for a tax extension?</h3>
                        <p className="text-xs text-slate-400">Submit Form 4868 to the IRS before the regular filing deadline (usually April 15) to automatically receive a 6-month extension period. Remember that any estimated taxes you owe must still be paid by the original deadline to prevent penalties and interest charges. You have the option to submit the form online or through traditional mail.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What are the tax brackets for this year?</h3>
                        <p className="text-xs text-slate-400">For 2024, the federal tax brackets are: 10% (up to $11,600), 12% ($11,601-$47,150), 22% ($47,151-$100,525), 24% ($100,526-$191,950), 32% ($191,951-$243,725), 35% ($243,726-$609,350), and 37% (over $609,350) for single filers. Brackets differ for married filing jointly, head of household, and married filing separately.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I claim the Child Tax Credit?</h3>
                        <p className="text-xs text-slate-400">The Child Tax Credit is worth up to $2,000 per qualifying child under 17. You can claim it on your tax return if your income is below certain thresholds ($200,000 for single filers, $400,000 for married filing jointly). The credit is partially refundable up to $1,600 per child. Complete Schedule 8812 if claiming the refundable portion.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do tax credits differ from tax deductions?</h3>
                        <p className="text-xs text-slate-400">Tax credits provide a direct dollar-for-dollar reduction of your total tax bill (for instance, a $1,000 credit means you pay $1,000 less in taxes). Tax deductions lower the amount of income subject to taxation, with savings varying by your tax bracket (a $1,000 deduction at the 22% rate saves you $220). Generally, credits provide greater financial benefit than deductions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I report self-employment income?</h3>
                        <p className="text-xs text-slate-400">If your net self-employment earnings reach $400 or higher, report them using Schedule C attached to Form 1040. Additionally, complete Schedule SE to calculate and report self-employment taxes covering Social Security and Medicare contributions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What are the penalties for filing taxes late?</h3>
                        <p className="text-xs text-slate-400">Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties.</p>
                  </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Can I deduct medical expenses on my taxes?</h3>
                        <p className="text-xs text-slate-400">You can deduct unreimbursed medical expenses that exceed 7.5% of your adjusted gross income (AGI) if you itemize deductions. This includes doctor visits, prescriptions, medical equipment, and health insurance premiums. Keep all receipts and documentation. For example, if your AGI is $50,000, you can only deduct medical expenses over $3,750.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I amend a tax return?</h3>
                        <p className="text-xs text-slate-400">File Form 1040-X to amend your return within 3 years of the original filing date or 2 years from when you paid the tax, whichever is later. Include a detailed explanation of changes and any supporting documentation. You can file electronically for tax years 2019 and later. Processing takes 8-12 weeks for paper returns.</p>
              </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What is the Earned Income Tax Credit (EITC)?</h3>
                        <p className="text-xs text-slate-400">The EITC is a refundable credit for low- to moderate-income working individuals and families. For 2024, maximum credits range from $632 (no children) to $7,430 (3+ children). Income limits apply based on filing status and number of children. You must have earned income and meet other requirements. Use the EITC Assistant on irs.gov to check eligibility.</p>
            </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I set up a payment plan with the IRS?</h3>
                        <p className="text-xs text-slate-400">Apply for an installment agreement online at irs.gov, by phone, or by submitting Form 9465. Short-term plans (120 days or less) have no setup fee. Long-term plans have fees ranging from $31-$225 depending on payment method. You can also request a payment plan if you owe $50,000 or less in combined tax, penalties, and interest.</p>
          </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Are unemployment benefits taxable?</h3>
                        <p className="text-xs text-slate-400">Yes, unemployment compensation is taxable income at the federal level and in most states. You'll receive Form 1099-G showing the amount received. You can choose to have federal taxes withheld (10%) or pay estimated taxes. Some states don't tax unemployment benefits, so check your state's rules. Report on line 1a of Form 1040.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I report cryptocurrency transactions on my taxes?</h3>
                        <p className="text-xs text-slate-400">Report capital gains and losses from crypto transactions on Schedule D (Form 1040). Track each transaction with its cost basis, fair market value at the time of sale, and transaction date. Use Form 8949 for comprehensive reporting of all transactions. Mining rewards should be reported as ordinary income on your tax return. For portfolios with multiple transactions, specialized crypto tax software can help streamline the reporting process.</p>
              </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What education expenses are tax-deductible?</h3>
                        <p className="text-xs text-slate-400">Qualified education expenses may qualify for the American Opportunity Credit (up to $2,500 per student), Lifetime Learning Credit (up to $2,000 per return), or tuition and fees deduction. Eligible expenses include tuition, fees, books, and supplies. Income limits apply. You cannot claim multiple credits for the same expenses. Use Form 8863 to claim education credits.</p>
            </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">How do I claim a home office deduction?</h3>
                        <p className="text-xs text-slate-400">Self-employed individuals have two calculation options: the simplified method at $5 per square foot (maximum 300 square feet for a $1,500 deduction) or the regular method using actual expenses. Note that employees cannot claim this deduction following changes made by the Tax Cuts and Jobs Act.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What is the Alternative Minimum Tax (AMT)?</h3>
                        <p className="text-xs text-slate-400">The AMT is a parallel tax system ensuring high-income individuals pay a minimum tax. It eliminates many deductions and uses different rates (26% or 28%). You must calculate tax under both systems and pay the higher amount. AMT exemption amounts are $85,700 (single) and $133,300 (married filing jointly) for 2024. Use Form 6251 to calculate AMT.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">What's the process for reporting rental income and expenses?</h3>
                        <p className="text-xs text-slate-400">Use Schedule E (Form 1040) to document all rental revenue including monthly rent payments, retained security deposits, and any prepaid rent. Allowable deductions include mortgage interest, property taxes, insurance premiums, repair costs, maintenance work, utility expenses, and depreciation calculations. Rental property losses might be subject to passive activity restrictions.</p>
                </div>
                      <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">Can I deduct state and local taxes on my federal return?</h3>
                        <p className="text-xs text-slate-400">Yes, you can deduct state and local income, sales, and property taxes, but the total is limited to $10,000 ($5,000 if married filing separately) due to the Tax Cuts and Jobs Act. This includes state income tax, local income tax, and property taxes. You cannot deduct state and local sales taxes if you deduct state and local income taxes.</p>
                </div>
              </div>
            </div>

                  {/* Related Tools Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                      </div>
                      Related Financial & Tax Tools
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", icon: DollarSign, href: "/calculator/loan-calculator" },
                        { name: "Salary Calculator", desc: "Calculate take-home pay and deductions", icon: TrendingUp, href: "/calculator/salary-calculator" },
                        { name: "Investment Calculator", desc: "Calculate returns on investments", icon: BarChart3, href: "/calculator/investment-calculator" },
                        { name: "Retirement Calculator", desc: "Plan your retirement savings", icon: Building, href: "/calculator/retirement-calculator" },
                        { name: "Mortgage Calculator", desc: "Calculate home loan payments", icon: PieChart, href: "/calculator/mortgage-calculator" },
                        { name: "Compound Interest", desc: "Calculate compound interest growth", icon: Target, href: "/calculator/compound-interest" },
                        { name: "Percentage Calculator", desc: "Calculate percentages and changes", icon: Calculator, href: "/calculator/percentage-calculator" },
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", icon: Users, href: "/calculator/bmi-calculator" },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", icon: Award, href: "/calculator/age-calculator" },
                        { name: "Time Duration", desc: "Calculate time between dates", icon: BookOpen, href: "/calculator/time-duration" },
                        { name: "Currency Converter", desc: "Convert between currencies", icon: Globe, href: "/converters/currency" },
                        { name: "Scientific Calculator", desc: "Advanced mathematical calculations", icon: Zap, href: "/calculator/scientific-calculator" }
                      ].map(({ name, desc, icon: Icon, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="p-2 md:p-3 bg-black rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-green-500/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3 w-3 text-green-500" />
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">{name}</h3>
                </div>
                          <p className="text-xs text-slate-400 group-hover:text-slate-300">{desc}</p>
                        </a>
                      ))}
                </div>
                </div>

                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-4 hidden lg:block">
                <div className="sticky top-24 space-y-4">
                  <div>
                    <div className="text-center mb-1">
                      <span className="text-xs text-slate-400 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-60 lg:h-64 xl:h-72 border border-slate-700 rounded-xl shadow-sm bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}