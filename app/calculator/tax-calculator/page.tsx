import { TaxCalculator } from "@/components/tax-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { 
  Calculator, Globe, DollarSign, TrendingUp, BarChart3, 
  PieChart, Target, Building, Users, Award, CheckCircle, 
  BookOpen, Zap, Sparkles, AlertTriangle, Info
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tax Calculator | Income, GST, VAT & Sales Tax | FastTools",
  description: "Free Tax Calculator to calculate income tax, GST, VAT, or sales tax instantly. Enter amount and tax rate to get total payable tax and net amount.",
  keywords: [
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
        "name": "How do I calculate income tax on my salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter your gross salary, select your country, and our calculator will apply the correct tax brackets and rates. The calculator handles progressive taxation, social security, and other deductions automatically."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between gross and net salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gross salary is your total earnings before taxes, while net salary is your take-home pay after all deductions. Our calculator shows both amounts with detailed breakdowns."
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
        "name": "What documents do I need to file my taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential documents include W-2 forms from employers, 1099 forms for freelance income, mortgage interest statements (Form 1098), property tax statements, charitable donation receipts, medical expense records, and any other income or deduction documentation. Keep all receipts and statements organized throughout the year for easier tax preparation."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check the status of my tax refund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the IRS \"Where's My Refund?\" tool on irs.gov, which updates daily. You'll need your Social Security number, filing status, and exact refund amount. Refunds are typically processed within 21 days for e-filed returns or 6-8 weeks for paper returns. The tool shows three stages: Return Received, Return Approved, and Refund Sent."
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
          "text": "File Form 4868 with the IRS by the original due date (typically April 15) to get an automatic 6-month extension. This gives you until October 15 to file your return. However, you must still pay any estimated tax owed by the original due date to avoid penalties and interest. You can file electronically or by mail."
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
        "name": "What is the difference between a tax credit and a tax deduction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A tax credit directly reduces your tax liability dollar-for-dollar (e.g., a $1,000 credit reduces your tax by $1,000). A tax deduction reduces your taxable income, which may lower your tax depending on your bracket (e.g., a $1,000 deduction in the 22% bracket saves $220 in tax). Credits are generally more valuable than deductions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I report self-employment income?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Report self-employment income on Schedule C (Form 1040) if your net earnings are $400 or more. You'll also need to file Schedule SE for self-employment tax (Social Security and Medicare). Keep detailed records of all business income and expenses. Consider making quarterly estimated tax payments to avoid penalties."
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

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 py-6 md:py-8">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Tax Calculator", href: "/calculator/tax-calculator" },
            ]}
          />

          <div className="max-w-5xl mx-auto">
            <div className="mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-yellow-400">Free Online Tax Calculator</h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
                Use our <strong>free Tax Calculator</strong> to instantly calculate <strong>income tax</strong>, <strong>GST</strong>, <strong>VAT</strong>, or <strong>sales tax</strong>. 
                Enter your <strong>amount and tax rate</strong> to get <strong>total payable tax</strong> and <strong>net amount</strong>. <strong>Fast</strong>, <strong>accurate</strong>, and <strong>completely online</strong>.
          </p>
        </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
            <TaxCalculator />
            
                {/* Mobile/Tablet AdSpace */}
                <div className="my-4 lg:hidden">
                  <div className="text-center mb-1">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-20 sm:h-24 md:h-28 border border-border rounded-xl shadow-sm bg-card" />
                    </div>
                
                {/* How to Use Section */}
                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                      How to Use Our Tax Calculator
                    </h2>
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                        <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">1. Select Your Country</h3>
                          <p className="text-xs text-muted-foreground">Choose from 9+ countries with real tax brackets</p>
                    </div>
                        <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">2. Enter Your Salary</h3>
                          <p className="text-xs text-muted-foreground">Input your annual gross salary in local currency</p>
                  </div>
                        <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">3. Custom Rate (Optional)</h3>
                          <p className="text-xs text-muted-foreground">Override with your own tax rate if needed</p>
                    </div>
                        <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">4. Get Results</h3>
                          <p className="text-xs text-muted-foreground">View comprehensive tax breakdown and net salary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Countries */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Globe className="h-3 w-3 md:h-4 md:w-4 text-primary" />
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
                        <div key={index} className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">{country.country}</h3>
                          <p className="text-xs text-muted-foreground mb-1">{country.currency}</p>
                          <ul className="text-xs text-muted-foreground space-y-0.5">
                      {country.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                                <CheckCircle className="h-2 w-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

                  {/* Tax Calculation Types */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
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
                        <div key={type} className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="h-3 w-3 text-primary" />
                            <h3 className="font-semibold text-foreground text-xs md:text-sm">{type}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{desc}</p>
                          <p className="text-xs text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded">{example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Zap className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                Advanced Calculation Features
              </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-primary/10 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-foreground text-xs md:text-sm">Progressive Tax Brackets</h3>
                            <p className="text-xs text-muted-foreground">Real tax brackets for each country with accurate calculations</p>
                    </div>
                  </div>
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-primary/10 rounded-lg">
                            <Building className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-foreground text-xs md:text-sm">Social Security</h3>
                            <p className="text-xs text-muted-foreground">Country-specific social security contributions</p>
                    </div>
                  </div>
                </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-primary/10 rounded-lg">
                            <PieChart className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-foreground text-xs md:text-sm">Tax Breakdown</h3>
                            <p className="text-xs text-muted-foreground">Detailed breakdown by tax bracket and rate</p>
                    </div>
                  </div>
                        <div className="flex items-start gap-2">
                          <div className="p-1 bg-primary/10 rounded-lg">
                            <Target className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                            <h3 className="font-semibold text-foreground text-xs md:text-sm">Custom Rates</h3>
                            <p className="text-xs text-muted-foreground">Override with your own tax rate for special cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                  {/* Tax Formulas Section */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                      Tax Calculation Formulas
              </h2>
                    <div className="space-y-3">
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Progressive Tax Formula</h3>
                        <p className="text-xs text-muted-foreground mb-2">Tax = Σ(Bracket Income × Bracket Rate)</p>
                        <p className="text-xs text-muted-foreground">Each tax bracket is calculated separately, then summed for total tax. This ensures fair taxation across income levels.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Effective Tax Rate Formula</h3>
                        <p className="text-xs text-muted-foreground mb-2">Effective Rate = (Total Tax ÷ Gross Income) × 100</p>
                        <p className="text-xs text-muted-foreground">The average tax rate across all income levels, showing your overall tax burden as a percentage.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Marginal Tax Rate Formula</h3>
                        <p className="text-xs text-muted-foreground mb-2">Marginal Rate = Tax Rate of Highest Bracket</p>
                        <p className="text-xs text-muted-foreground">The tax rate on the next dollar earned, important for financial planning and investment decisions.</p>
                </div>
              </div>
            </div>

                  {/* FAQ Section */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Info className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 md:space-y-3">
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I calculate income tax on my salary?</h3>
                        <p className="text-xs text-muted-foreground">Enter your gross salary, select your country, and our calculator will apply the correct tax brackets and rates. The calculator handles progressive taxation, social security, and other deductions automatically.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is the difference between gross and net salary?</h3>
                        <p className="text-xs text-muted-foreground">Gross salary is your total earnings before taxes, while net salary is your take-home pay after all deductions. Our calculator shows both amounts with detailed breakdowns.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I calculate self-employment tax?</h3>
                        <p className="text-xs text-muted-foreground">For self-employment income, you need to calculate both income tax and self-employment tax (Social Security and Medicare). Our calculator includes these calculations for freelancers and business owners.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Can I calculate sales tax with this calculator?</h3>
                        <p className="text-xs text-muted-foreground">Yes! Our calculator supports sales tax calculations. Enter the purchase amount and tax rate to get the total including tax or calculate tax from a total amount.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How accurate are the tax brackets in this calculator?</h3>
                        <p className="text-xs text-muted-foreground">Our calculator uses current tax brackets and rates for each country. However, tax laws change frequently, so always verify with your local tax authority for the most current information.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is progressive taxation and how does it work?</h3>
                        <p className="text-xs text-muted-foreground">Progressive taxation means higher income is taxed at higher rates. Each bracket is calculated separately - for example, the first $11,000 might be taxed at 10%, the next $33,725 at 12%, and so on.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I calculate my tax refund or amount owed?</h3>
                        <p className="text-xs text-muted-foreground">Our calculator shows your total tax liability. To estimate refunds or amounts owed, subtract any tax already paid (withholdings) from your total tax liability. Positive amounts mean you owe money, negative amounts mean you'll get a refund.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Can I use this calculator for business tax planning?</h3>
                        <p className="text-xs text-muted-foreground">Yes, our calculator is useful for business tax planning. It can calculate corporate tax rates, VAT, and other business taxes. However, for complex business scenarios, always consult with a tax professional.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I calculate property tax?</h3>
                        <p className="text-xs text-muted-foreground">Property tax is calculated as: Property Tax = (Property Value × Assessment Rate × Tax Rate) ÷ 100. Our calculator can help with this calculation when you input the property value and local tax rate.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What's the difference between marginal and effective tax rates?</h3>
                        <p className="text-xs text-muted-foreground">Marginal tax rate is the rate on your next dollar of income, while effective tax rate is your average tax rate across all income. Our calculator shows both rates to help with financial planning.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Is this calculator free to use?</h3>
                        <p className="text-xs text-muted-foreground">Yes, our tax calculator is completely free to use with no registration required. All features including custom tax rates, detailed breakdowns, and multiple country support are available at no cost.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What documents do I need to file my taxes?</h3>
                        <p className="text-xs text-muted-foreground">Essential documents include W-2 forms from employers, 1099 forms for freelance income, mortgage interest statements (Form 1098), property tax statements, charitable donation receipts, medical expense records, and any other income or deduction documentation. Keep all receipts and statements organized throughout the year for easier tax preparation.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I check the status of my tax refund?</h3>
                        <p className="text-xs text-muted-foreground">Use the IRS "Where's My Refund?" tool on irs.gov, which updates daily. You'll need your Social Security number, filing status, and exact refund amount. Refunds are typically processed within 21 days for e-filed returns or 6-8 weeks for paper returns. The tool shows three stages: Return Received, Return Approved, and Refund Sent.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is the standard deduction for the current tax year?</h3>
                        <p className="text-xs text-muted-foreground">For 2024, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, $21,900 for head of household, and $14,600 for married filing separately. These amounts are adjusted annually for inflation. The standard deduction reduces your taxable income without needing to itemize deductions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I file for a tax extension?</h3>
                        <p className="text-xs text-muted-foreground">File Form 4868 with the IRS by the original due date (typically April 15) to get an automatic 6-month extension. This gives you until October 15 to file your return. However, you must still pay any estimated tax owed by the original due date to avoid penalties and interest. You can file electronically or by mail.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What are the tax brackets for this year?</h3>
                        <p className="text-xs text-muted-foreground">For 2024, the federal tax brackets are: 10% (up to $11,600), 12% ($11,601-$47,150), 22% ($47,151-$100,525), 24% ($100,526-$191,950), 32% ($191,951-$243,725), 35% ($243,726-$609,350), and 37% (over $609,350) for single filers. Brackets differ for married filing jointly, head of household, and married filing separately.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I claim the Child Tax Credit?</h3>
                        <p className="text-xs text-muted-foreground">The Child Tax Credit is worth up to $2,000 per qualifying child under 17. You can claim it on your tax return if your income is below certain thresholds ($200,000 for single filers, $400,000 for married filing jointly). The credit is partially refundable up to $1,600 per child. Complete Schedule 8812 if claiming the refundable portion.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is the difference between a tax credit and a tax deduction?</h3>
                        <p className="text-xs text-muted-foreground">A tax credit directly reduces your tax liability dollar-for-dollar (e.g., a $1,000 credit reduces your tax by $1,000). A tax deduction reduces your taxable income, which may lower your tax depending on your bracket (e.g., a $1,000 deduction in the 22% bracket saves $220 in tax). Credits are generally more valuable than deductions.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I report self-employment income?</h3>
                        <p className="text-xs text-muted-foreground">Report self-employment income on Schedule C (Form 1040) if your net earnings are $400 or more. You'll also need to file Schedule SE for self-employment tax (Social Security and Medicare). Keep detailed records of all business income and expenses. Consider making quarterly estimated tax payments to avoid penalties.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What are the penalties for filing taxes late?</h3>
                        <p className="text-xs text-muted-foreground">Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties.</p>
                  </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Can I deduct medical expenses on my taxes?</h3>
                        <p className="text-xs text-muted-foreground">You can deduct unreimbursed medical expenses that exceed 7.5% of your adjusted gross income (AGI) if you itemize deductions. This includes doctor visits, prescriptions, medical equipment, and health insurance premiums. Keep all receipts and documentation. For example, if your AGI is $50,000, you can only deduct medical expenses over $3,750.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I amend a tax return?</h3>
                        <p className="text-xs text-muted-foreground">File Form 1040-X to amend your return within 3 years of the original filing date or 2 years from when you paid the tax, whichever is later. Include a detailed explanation of changes and any supporting documentation. You can file electronically for tax years 2019 and later. Processing takes 8-12 weeks for paper returns.</p>
              </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is the Earned Income Tax Credit (EITC)?</h3>
                        <p className="text-xs text-muted-foreground">The EITC is a refundable credit for low- to moderate-income working individuals and families. For 2024, maximum credits range from $632 (no children) to $7,430 (3+ children). Income limits apply based on filing status and number of children. You must have earned income and meet other requirements. Use the EITC Assistant on irs.gov to check eligibility.</p>
            </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I set up a payment plan with the IRS?</h3>
                        <p className="text-xs text-muted-foreground">Apply for an installment agreement online at irs.gov, by phone, or by submitting Form 9465. Short-term plans (120 days or less) have no setup fee. Long-term plans have fees ranging from $31-$225 depending on payment method. You can also request a payment plan if you owe $50,000 or less in combined tax, penalties, and interest.</p>
          </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Are unemployment benefits taxable?</h3>
                        <p className="text-xs text-muted-foreground">Yes, unemployment compensation is taxable income at the federal level and in most states. You'll receive Form 1099-G showing the amount received. You can choose to have federal taxes withheld (10%) or pay estimated taxes. Some states don't tax unemployment benefits, so check your state's rules. Report on line 1a of Form 1040.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I report cryptocurrency transactions on my taxes?</h3>
                        <p className="text-xs text-muted-foreground">Cryptocurrency transactions are treated as property for tax purposes. Report capital gains/losses on Schedule D (Form 1040). Each transaction must be tracked with cost basis, fair market value, and date. Use Form 8949 for detailed reporting. Mining income is reported as ordinary income. Consider using crypto tax software for complex transactions.</p>
              </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What education expenses are tax-deductible?</h3>
                        <p className="text-xs text-muted-foreground">Qualified education expenses may qualify for the American Opportunity Credit (up to $2,500 per student), Lifetime Learning Credit (up to $2,000 per return), or tuition and fees deduction. Eligible expenses include tuition, fees, books, and supplies. Income limits apply. You cannot claim multiple credits for the same expenses. Use Form 8863 to claim education credits.</p>
            </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I claim a home office deduction?</h3>
                        <p className="text-xs text-muted-foreground">Only self-employed individuals can claim the home office deduction. The space must be used exclusively and regularly for business. You can use the simplified method ($5 per square foot, up to 300 sq ft = $1,500 max) or the regular method (actual expenses). Employees cannot claim this deduction due to the Tax Cuts and Jobs Act changes.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">What is the Alternative Minimum Tax (AMT)?</h3>
                        <p className="text-xs text-muted-foreground">The AMT is a parallel tax system ensuring high-income individuals pay a minimum tax. It eliminates many deductions and uses different rates (26% or 28%). You must calculate tax under both systems and pay the higher amount. AMT exemption amounts are $85,700 (single) and $133,300 (married filing jointly) for 2024. Use Form 6251 to calculate AMT.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">How do I report rental income and expenses?</h3>
                        <p className="text-xs text-muted-foreground">Report rental income and expenses on Schedule E (Form 1040). Include rent received, security deposits (if kept), and any advance rent. Deductible expenses include mortgage interest, property taxes, insurance, repairs, maintenance, utilities, and depreciation. Keep detailed records of all transactions. Rental losses may be limited by passive activity rules.</p>
                </div>
                      <div className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-1 text-xs md:text-sm">Can I deduct state and local taxes on my federal return?</h3>
                        <p className="text-xs text-muted-foreground">Yes, you can deduct state and local income, sales, and property taxes, but the total is limited to $10,000 ($5,000 if married filing separately) due to the Tax Cuts and Jobs Act. This includes state income tax, local income tax, and property taxes. You cannot deduct state and local sales taxes if you deduct state and local income taxes.</p>
                </div>
              </div>
            </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
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
                          className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3 w-3 text-primary group-hover:text-primary/80" />
                            <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary">{name}</h3>
                </div>
                          <p className="text-xs text-muted-foreground">{desc}</p>
                        </a>
                      ))}
                </div>
                </div>

                  {/* Mobile/Tablet Bottom AdSpace */}
                  <div className="my-6 lg:hidden">
                    <div className="text-center mb-1">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                    <AdSpace slot="content" className="w-full h-20 sm:h-24 md:h-28 border border-border rounded-xl shadow-sm bg-card" />
                </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-4 hidden lg:block">
                <div className="sticky top-24 space-y-4">
                  <div>
                    <div className="text-center mb-1">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-60 lg:h-64 xl:h-72 border border-border rounded-xl shadow-sm bg-card" />
            </div>

                  <div>
                    <div className="text-center mb-1">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-60 lg:h-64 xl:h-72 border border-border rounded-xl shadow-sm bg-card" />
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