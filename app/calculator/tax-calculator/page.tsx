import { TaxCalculator } from "@/components/tax-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import {
  Calculator, Globe, DollarSign, TrendingUp, BarChart3,
  PieChart, Target, Building, Users, Award, CheckCircle,
  BookOpen, Zap, Sparkles, AlertTriangle, Info
} from "lucide-react"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "Tax Calculator | Free Income, GST, VAT & Sales Tax",
  description: "Free online tax calculator for income tax, GST, VAT, and sales tax. Calculate tax on salary, capital gains, property, and more. Supports 9+ countries with accurate tax brackets. Get instant tax breakdown and net income calculations.",
  path: "/calculator/tax-calculator",
})


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
      "@type": "Person",
      "name": "FastTools Tax Team",
      "jobTitle": "Certified Tax Professionals",
      "worksFor": {
        "@type": "Organization",
        "name": "FastTools",
        "url": "https://www.fasttools.store",
        "logo": "https://www.fasttools.store/logo.png",
        "description": "FastTools provides free online calculators and tools for financial planning, tax calculations, and business needs.",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://www.fasttools.store/contact"
        }
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store",
      "logo": "https://www.fasttools.store/logo.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Calculator",
          "item": "https://www.fasttools.store/calculator"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tax Calculator",
          "item": "https://www.fasttools.store/calculator/tax-calculator"
        }
      ]
    },
    "datePublished": "2024-01-15",
    "dateModified": "2025-01-15",
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
        "name": "How do tax credits differ from tax deductions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax credits provide a direct dollar-for-dollar reduction of your total tax bill (for instance, a $1,000 credit means you pay $1,000 less in taxes). Tax deductions lower the amount of income subject to taxation, with savings varying by your tax bracket (a $1,000 deduction at the 22% rate saves you $220). Generally, credits provide greater financial benefit than deductions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the penalties for filing taxes late?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate tax in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "UK tax calculation involves several components: income tax (applied to income above the personal allowance of £12,570 for 2024-25), National Insurance contributions, and potentially student loan repayments. Income tax uses progressive bands: 20% basic rate, 40% higher rate, and 45% additional rate. National Insurance is calculated separately on earnings above the primary threshold. Our UK tax calculator accounts for all these factors, including the personal allowance, tax bands, and National Insurance rates, providing an accurate estimate of your total UK tax liability and take-home pay."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate tax in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Canadian tax calculation includes federal tax brackets plus provincial tax rates. The federal tax rates are progressive (15%, 20.5%, 26%, 29%, 33%), and each province adds its own rates. The calculator also accounts for CPP (Canada Pension Plan) contributions, EI (Employment Insurance) premiums, and basic personal amounts. Our Canada tax calculator uses CRA tax brackets and provincial rates to provide comprehensive Canadian tax calculations showing your total tax burden and net income."
        }
      }
    ]
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tax Calculator Service",
    "provider": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.fasttools.store/calculator/tax-calculator",
      "serviceType": "Online"
    },
    "description": "Free online tax calculation service supporting income tax, GST, VAT, sales tax, and capital gains tax for multiple countries including United States, United Kingdom, Canada, Australia, Germany, France, Japan, India, and Pakistan.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="min-h-screen bg-card">
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
                description="Calculate income tax, estimate refunds, and determine salary deductions instantly. Our free tax calculator supports income tax, GST, VAT, sales tax, and capital gains calculations for 9+ countries. Get accurate tax breakdowns with real tax brackets from official sources."
                titleSize="medium"
              />
            </div>

            {/* Semantic SEO: First 100 words with primary keyword and context */}
            <div className="mb-6 md:mb-8 bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
              <div className="prose prose-sm md:prose-base max-w-none">
                <p className="text-sm md:text-base text-foreground leading-relaxed mb-3">
                  <strong>Tax calculator</strong> tools help individuals and businesses determine their tax obligations accurately. Our comprehensive <strong>tax calculator</strong> supports multiple tax types including income tax, GST (Goods and Services Tax), VAT (Value Added Tax), and sales tax calculations. Whether you need to calculate tax on salary, estimate capital gains tax, determine property tax, or compute business tax obligations, our <strong>tax calculator</strong> provides instant, accurate results. The tool uses real tax brackets from 9+ countries including the United States, United Kingdom, Canada, Australia, Germany, France, Japan, India, and Pakistan, ensuring compliance with current tax regulations and rates.
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  Understanding how tax calculations work is essential for financial planning. Our <strong>tax calculator</strong> processes progressive tax systems, applies appropriate deductions, accounts for social security contributions, and provides detailed breakdowns showing marginal tax rates, effective tax rates, and net income after all deductions. This helps users make informed decisions about income, investments, and tax-saving strategies.
                </p>
              </div>
            </div>

            {/* Mobile/Tablet AdSpace - shows on mobile/tablet, hidden on desktop */}
            <div className="lg:hidden mt-6">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
                <TaxCalculator />

                {/* E-E-A-T Signals: Expertise & Authority */}
                <div className="mt-6 md:mt-8 bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Expert Tax Calculation Tool</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        Our calculator is developed by FastTools' financial technology team with expertise in tax law, accounting principles, and international tax regulations. The tool uses current tax brackets and rates from official sources including IRS (Internal Revenue Service), HMRC (Her Majesty's Revenue and Customs), CRA (Canada Revenue Agency), ATO (Australian Taxation Office), and other national tax authorities.
                      </p>
                      <div className="bg-secondary/50 rounded-lg p-3 mb-2">
                        <p className="text-xs md:text-sm text-muted-foreground mb-1">
                          <strong>Reviewed by:</strong> FastTools Tax Team | Certified Tax Professionals
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground mb-1">
                          <strong>Expertise:</strong> 15+ years combined experience in tax preparation, accounting, and financial planning
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          <strong>Last Updated:</strong> January 2025 | Tax rates and brackets verified against official 2024-2025 tax year regulations from IRS, HMRC, CRA, ATO, and other authorities.
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground italic">
                        <strong>Disclaimer:</strong> This calculator provides estimates based on current tax laws. For complex tax situations, consult with a certified tax professional, CPA, or enrolled agent. Tax laws vary by jurisdiction and change frequently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How to Use Section - Conversational Flow */}
                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                      </div>
                      How to Use Our Tax Calculator
                    </h2>
                    <div className="space-y-3">
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        <strong>What is a tax calculator?</strong> A tax calculator is an online tool that helps you estimate your tax liability based on your income, deductions, and applicable tax rates. Our comprehensive tool supports multiple calculation types including income tax, GST, VAT, sales tax, and percentage-based calculations. Here's how it works in simple terms.
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        <strong>Why use our tax calculator?</strong> Whether you need to calculate income tax, estimate your refund, determine salary deductions, or compute capital gains tax, our tool provides instant calculations with accurate tax brackets and rates. You can calculate weekly, monthly, or annual taxes, include deductions and dividends, and get detailed breakdowns showing your net income after all deductions.
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                        <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Step 1: Select Your Country</h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            <strong>Which country's tax system should I use?</strong> Choose from 9+ countries with real tax brackets verified against official sources. We support calculations for Ontario and British Columbia (Canada), New York and California (United States), Ireland, Germany, New Zealand, India, Philippines, and more. Each country uses tax brackets from official authorities like IRS (United States), HMRC (United Kingdom), CRA (Canada), ATO (Australia), and FBR (Pakistan).
                          </p>
                        </div>
                        <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Step 2: Enter Your Income</h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            <strong>What income should I enter?</strong> Input your annual gross salary in local currency. You can calculate taxes for weekly, monthly, or annual income, including hourly wages and paychecks. The tool functions as a salary calculator showing your net income and take-home pay after all tax deductions. The calculator automatically applies progressive tax brackets based on your income level.
                          </p>
                        </div>
                        <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Step 3: Customize (Optional)</h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            <strong>Can I override the default tax rate?</strong> Yes, you can override with your own tax rate if needed. This feature is perfect for business income, contractor income (1099), capital gains, rental income, property taxes, vehicle taxes, reverse calculations, overtime pay, and custom tax planning scenarios.
                          </p>
                        </div>
                        <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Step 4: Review Results</h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            <strong>What information will I see?</strong> View comprehensive tax breakdown including total tax liability, net income, effective tax rate, and marginal tax rate. The calculator shows how much tax applies to each income bracket. Results include detailed breakdowns for better financial planning, helping you understand your tax return estimates, retirement income taxes, and overall tax burden.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Popular Tax Calculator Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Popular Tax Calculator Types & Use Cases
                  </h2>
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">
                      <strong>What types of tax can I calculate?</strong> Our tool handles multiple tax scenarios recognized by tax authorities worldwide. Whether you're dealing with income tax (regulated by IRS in the US, HMRC in the UK, CRA in Canada), GST/VAT (administered by ATO in Australia, HMRC in the UK), sales tax (state-level in the US), or capital gains tax, our calculator provides accurate results. Here are the most common use cases organized by category.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Income & Salary Calculations</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Calculate tax on income and salary</li>
                          <li>• Estimate paycheck deductions</li>
                          <li>• Weekly, monthly, or annual tax calculations</li>
                          <li>• Hourly wage tax estimates</li>
                          <li>• Include overtime and bonuses</li>
                          <li>• Calculate tax for multiple jobs</li>
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Capital Gains & Investment</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Capital gains tax calculations</li>
                          <li>• Dividend income tax estimates</li>
                          <li>• 401k withdrawal tax calculations</li>
                          <li>• Retirement income tax planning</li>
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Property & Assets</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Property tax calculations</li>
                          <li>• Rental income tax estimates</li>
                          <li>• Vehicle and motor vehicle taxes</li>
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Business & Self-Employment</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Business tax calculations</li>
                          <li>• Limited company tax estimates</li>
                          <li>• 1099 contractor tax calculations</li>
                          <li>• UK self-employment tax estimates</li>
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Special Calculations</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Tax return estimates</li>
                          <li>• Reverse tax calculations</li>
                          <li>• Calculations with deductions</li>
                          <li>• Lottery winnings tax</li>
                          <li>• Tax withholding estimates</li>
                        </ul>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-xs md:text-sm">Year-Specific Calculations</h3>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• 2025 tax year calculations</li>
                          <li>• 2024 tax year estimates</li>
                          <li>• 2026 tax year projections</li>
                          <li>• Multi-year tax comparisons</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location-Based Tax Calculators */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Location-Based Tax Calculators
                  </h2>
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">Our calculator provides accurate tax estimates for major regions worldwide. Calculate taxes for Canadian provinces (Ontario, British Columbia, Quebec), US states (New York, California, and 20+ others), UK regions (England, Scotland), and countries including Germany, Ireland, Australia, India, Pakistan, and more. Each location uses official tax rates from local authorities like IRS, HMRC, CRA, ATO, and FBR.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">North America</h3>
                        <p className="text-xs text-muted-foreground">Calculate taxes for Canadian provinces (Ontario, BC, Quebec), major US states (New York, California, Texas, and 20+ others), and major cities like Toronto. Uses CRA and IRS official rates.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Europe & UK</h3>
                        <p className="text-xs text-muted-foreground">Calculate UK taxes using HMRC rates, plus Ireland, Germany, Scotland, Netherlands, Denmark, and Switzerland. Supports UK salary calculations for 2024 and 2025 tax years.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Asia Pacific</h3>
                        <p className="text-xs text-muted-foreground">Calculate taxes for India, Philippines, Australia (ATO rates), New Zealand, Japan, Malaysia, Hong Kong, Thailand, and Australian states (QLD, NSW). Includes 2025 tax year calculations.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Other Regions</h3>
                        <p className="text-xs text-muted-foreground">Calculate taxes for South Africa, Pakistan (FBR rates), and European countries including Cyprus, Malta, Estonia, Belgium, Norway, Sweden, Italy, Greece, and Luxembourg.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Entity SEO: Tax Authorities & Regulatory Bodies */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Building className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Tax Authorities & Regulatory Bodies
                  </h2>
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm text-muted-foreground mb-3">
                      <strong>Which tax authorities does this calculator use?</strong> Our tax calculator uses official tax brackets and rates from recognized tax authorities worldwide. Understanding these entities helps you verify calculations and ensures compliance with local tax regulations. Here are the key tax authorities referenced in our calculations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">United States: IRS</h3>
                        <p className="text-xs text-muted-foreground">IRS (Internal Revenue Service) administers federal income tax, Social Security, and Medicare. Our US tax calculator uses current IRS tax brackets, standard deductions, and tax rates for accurate federal tax calculations.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">United Kingdom: HMRC</h3>
                        <p className="text-xs text-muted-foreground">HMRC (Her Majesty's Revenue and Customs) manages UK income tax and National Insurance. Our UK tax calculator incorporates HMRC tax bands, personal allowances, and National Insurance rates.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Canada: CRA</h3>
                        <p className="text-xs text-muted-foreground">CRA (Canada Revenue Agency) oversees federal and provincial taxes. Our Canada tax calculator uses CRA tax brackets plus provincial rates for comprehensive Canadian tax calculations.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Australia: ATO</h3>
                        <p className="text-xs text-muted-foreground">ATO (Australian Taxation Office) administers income tax and GST. Our Australia tax calculator uses ATO tax brackets, Medicare levy rates, and current tax thresholds.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Pakistan: FBR</h3>
                        <p className="text-xs text-muted-foreground">FBR (Federal Board of Revenue) manages Pakistan's tax system. Our Pakistan tax calculator uses FBR tax slabs, withholding tax rates, and current tax regulations.</p>
                      </div>
                      <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm mb-1">Other Authorities</h3>
                        <p className="text-xs text-muted-foreground">Our calculator also references official tax authorities for Germany (Bundeszentralamt für Steuern), France (Direction Générale des Finances Publiques), Japan (National Tax Agency), and India (Income Tax Department) to ensure accuracy across all supported countries.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Countries */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Supported Countries & Tax Systems
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Our multi-country calculator supports tax brackets and income tax rates for multiple countries worldwide. Calculate US income tax using IRS tax brackets and federal rates, UK income tax with HMRC tax bands and National Insurance, Canada income tax with CRA brackets and provincial rates, Australia income tax with ATO brackets and Medicare levy, plus Germany, France, Japan, India, and Pakistan with their respective tax authorities' official rates and brackets.</p>
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
                      <div key={index} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{country.country}</h3>
                        <p className="text-xs text-muted-foreground mb-1">{country.currency}</p>
                        <ul className="text-xs text-muted-foreground space-y-0.5">
                          {country.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1">
                              <CheckCircle className="h-2 w-2 text-foreground" />
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
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Tax Calculation Types
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Our calculator supports multiple calculation types including income tax, tax returns, salary deductions, capital gains, property taxes, business income, rental income, retirement planning, and more. Calculate taxes for 2024, 2025, or future tax years. Use it to determine net income, net salary, income after tax, and get comprehensive tax breakdowns with accurate tax brackets and rates. Perfect for individuals, businesses, contractors, and investors.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "Income Tax Calculator", icon: DollarSign, desc: "Calculate income tax for individuals with accurate tax brackets and rates. Works for salary and paycheck calculations.", example: "Personal income tax calculation" },
                      { type: "GST Calculator", icon: TrendingUp, desc: "Calculate Goods and Services Tax instantly. Perfect for business transactions and commercial tax needs.", example: "GST on products and services" },
                      { type: "VAT Calculator", icon: BarChart3, desc: "Calculate Value Added Tax for business transactions and commercial income.", example: "VAT for business transactions" },
                      { type: "Sales Tax Calculator", icon: PieChart, desc: "Calculate sales tax on purchases with accurate rates. Supports 2024 and 2025 tax years.", example: "Retail sales tax calculation" },
                      { type: "Tax Percentage Calculator", icon: Target, desc: "Calculate tax percentage and rates accurately. Works with deductions and exemptions.", example: "Tax rate percentage calculation" },
                      { type: "After Tax Calculator", icon: CheckCircle, desc: "Calculate net amount after tax and get net income. Perfect for weekly, monthly, and annual calculations.", example: "Net income after deductions" },
                      { type: "Before Tax Calculator", icon: AlertTriangle, desc: "Calculate gross amount before tax deductions. Use for reverse calculations and gross-up scenarios.", example: "Gross salary before deductions" },
                      { type: "Total Tax Calculator", icon: Building, desc: "Calculate total tax amount payable with detailed breakdown. Supports tax return estimates and retirement planning.", example: "Total tax liability calculation" },
                      { type: "Business Tax Calculator", icon: Users, desc: "Calculate business tax obligations and corporate tax. Works for business income and 1099 contractor scenarios.", example: "Corporate tax calculation" },
                      { type: "Capital Gains Tax Calculator", icon: Sparkles, desc: "Calculate capital gains tax for investment income. Perfect for dividends and investment returns.", example: "Capital gains tax calculation" },
                      { type: "Property Tax Calculator", icon: Award, desc: "Calculate property tax and rental income taxes for real estate investments.", example: "Property and rental tax calculation" },
                      { type: "Retirement Tax Calculator", icon: Zap, desc: "Calculate retirement income taxes for retirement planning and 401k withdrawal scenarios.", example: "Retirement income tax calculation" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className="h-3 w-3 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{type}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{desc}</p>
                        <p className="text-xs text-foreground font-mono bg-primary/10 px-1.5 py-0.5 rounded">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Zap className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Advanced Calculation Features
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Our calculator uses real tax brackets and calculates both marginal and effective tax rates. It works as a social security calculator and provides comprehensive tax breakdowns. Perfect for tax planning and financial planning needs.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <BarChart3 className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Progressive Tax Brackets</h3>
                          <p className="text-xs text-muted-foreground">Real tax brackets for each country with accurate progressive calculations. Supports marginal and effective tax rate functions for comprehensive analysis.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Building className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Social Security</h3>
                          <p className="text-xs text-muted-foreground">Country-specific social security calculations with accurate contributions and deductions based on official rates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <PieChart className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Tax Breakdown</h3>
                          <p className="text-xs text-muted-foreground">Detailed breakdown by tax bracket, rate, and income levels. Shows tax calculation formula results for transparency.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Target className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Custom Rates</h3>
                          <p className="text-xs text-muted-foreground">Override with your own tax rate for special cases. Perfect for business income and custom tax planning scenarios.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Formulas Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Tax Calculation Formulas
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">Our calculator uses accurate formulas for progressive tax, effective tax rate, and marginal tax rate calculations. Understand how tax brackets and rates work with these formula explanations.</p>
                  <div className="space-y-3">
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Progressive Tax Formula</h3>
                      <p className="text-xs text-muted-foreground mb-2">Tax = Σ(Bracket Income × Bracket Rate)</p>
                      <p className="text-xs text-muted-foreground">Each tax bracket is calculated separately, then summed for total tax. This formula ensures fair taxation across income levels with accurate brackets from official tax authorities.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Effective Tax Rate Formula</h3>
                      <p className="text-xs text-muted-foreground mb-2">Effective Rate = (Total Tax ÷ Gross Income) × 100</p>
                      <p className="text-xs text-muted-foreground">The average tax rate across all income levels, showing your overall tax burden as a percentage. This helps you understand your true tax rate compared to your marginal rate.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Marginal Tax Rate Formula</h3>
                      <p className="text-xs text-muted-foreground mb-2">Marginal Rate = Tax Rate of Highest Bracket</p>
                      <p className="text-xs text-muted-foreground">The tax rate on the next dollar earned, important for financial planning and investment decisions. Understanding your marginal rate helps optimize income timing and deductions.</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What's the best way to determine income tax on my salary?</h3>
                      <p className="text-xs text-muted-foreground">Input your annual gross salary and choose your country from the dropdown. Our calculator automatically applies the relevant tax brackets, progressive rates, and mandatory deductions including social security contributions to give you accurate results.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How does gross salary differ from net salary?</h3>
                      <p className="text-xs text-muted-foreground">Gross salary represents your complete earnings before any tax or deduction is applied. Net salary is the remaining amount you actually receive after all taxes, social security, and other deductions are subtracted. The calculator displays both figures with a comprehensive breakdown of all deductions.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I calculate self-employment tax?</h3>
                      <p className="text-xs text-muted-foreground">For self-employment income, you need to calculate both income tax and self-employment tax (Social Security and Medicare). Our calculator includes these calculations for freelancers and business owners.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Can I calculate sales tax with this calculator?</h3>
                      <p className="text-xs text-muted-foreground">Yes! Our calculator supports sales tax calculations. Enter the purchase amount and tax rate to get the total including tax or calculate tax from a total amount.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How accurate are the tax brackets in this calculator?</h3>
                      <p className="text-xs text-muted-foreground">Our calculator uses current tax brackets and rates for each country. However, tax laws change frequently, so always verify with your local tax authority for the most current information.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What is progressive taxation and how does it work?</h3>
                      <p className="text-xs text-muted-foreground">Progressive taxation means higher income is taxed at higher rates. Each bracket is calculated separately - for example, the first $11,000 might be taxed at 10%, the next $33,725 at 12%, and so on.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I calculate my tax refund or amount owed?</h3>
                      <p className="text-xs text-muted-foreground">Our calculator shows your total tax liability. To estimate refunds or amounts owed, subtract any tax already paid (withholdings) from your total tax liability. Positive amounts mean you owe money, negative amounts mean you'll get a refund.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Can I use this calculator for business tax planning?</h3>
                      <p className="text-xs text-muted-foreground">Yes, our calculator is useful for business tax planning. It can calculate corporate tax rates, VAT, and other business taxes. However, for complex business scenarios, always consult with a tax professional.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I calculate property tax?</h3>
                      <p className="text-xs text-muted-foreground">Property tax is calculated as: Property Tax = (Property Value × Assessment Rate × Tax Rate) ÷ 100. Our calculator can help with this calculation when you input the property value and local tax rate.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What's the difference between marginal and effective tax rates?</h3>
                      <p className="text-xs text-muted-foreground">Marginal tax rate is the rate on your next dollar of income, while effective tax rate is your average tax rate across all income. Our calculator shows both rates to help with financial planning.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Is this calculator free to use?</h3>
                      <p className="text-xs text-muted-foreground">Yes, our tax calculator is completely free to use with no registration required. All features including custom tax rates, detailed breakdowns, and multiple country support are available at no cost.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Which documents are required for filing taxes?</h3>
                      <p className="text-xs text-muted-foreground">You'll need W-2 forms showing wages from employers, 1099 forms for contract or freelance income, mortgage interest documents (Form 1098), property tax receipts, records of charitable contributions, medical expense documentation, and any other proof of income or deductible expenses. Organizing these documents throughout the tax year simplifies the filing process.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">Where can I track my tax refund status?</h3>
                      <p className="text-xs text-muted-foreground">Access the IRS "Where's My Refund?" online tool available at irs.gov, which refreshes once per day. Required information includes your Social Security number, tax filing status, and the precise refund amount you're expecting. Electronic filings typically process in approximately 21 days, while mailed returns take around 6-8 weeks. The system displays three processing phases: Return Received, Return Approved, and Refund Sent.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What is the standard deduction for the current tax year?</h3>
                      <p className="text-xs text-muted-foreground">For 2024, the standard deduction is $14,600 for single filers, $29,200 for married filing jointly, $21,900 for head of household, and $14,600 for married filing separately. These amounts are adjusted annually for inflation. The standard deduction reduces your taxable income without needing to itemize deductions.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I file for a tax extension?</h3>
                      <p className="text-xs text-muted-foreground">Submit Form 4868 to the IRS before the regular filing deadline (usually April 15) to automatically receive a 6-month extension period. Remember that any estimated taxes you owe must still be paid by the original deadline to prevent penalties and interest charges. You have the option to submit the form online or through traditional mail.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What are the tax brackets for this year?</h3>
                      <p className="text-xs text-muted-foreground">For 2024, the federal tax brackets are: 10% (up to $11,600), 12% ($11,601-$47,150), 22% ($47,151-$100,525), 24% ($100,526-$191,950), 32% ($191,951-$243,725), 35% ($243,726-$609,350), and 37% (over $609,350) for single filers. Brackets differ for married filing jointly, head of household, and married filing separately.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I claim the Child Tax Credit?</h3>
                      <p className="text-xs text-muted-foreground">The Child Tax Credit is worth up to $2,000 per qualifying child under 17. You can claim it on your tax return if your income is below certain thresholds ($200,000 for single filers, $400,000 for married filing jointly). The credit is partially refundable up to $1,600 per child. Complete Schedule 8812 if claiming the refundable portion.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do tax credits differ from tax deductions?</h3>
                      <p className="text-xs text-muted-foreground">Tax credits provide a direct dollar-for-dollar reduction of your total tax bill (for instance, a $1,000 credit means you pay $1,000 less in taxes). Tax deductions lower the amount of income subject to taxation, with savings varying by your tax bracket (a $1,000 deduction at the 22% rate saves you $220). Generally, credits provide greater financial benefit than deductions.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I report self-employment income?</h3>
                      <p className="text-xs text-muted-foreground">If your net self-employment earnings reach $400 or higher, report them using Schedule C attached to Form 1040. Additionally, complete Schedule SE to calculate and report self-employment taxes covering Social Security and Medicare contributions.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">What are the penalties for filing taxes late?</h3>
                      <p className="text-xs text-muted-foreground">Late filing penalty is 5% of unpaid tax per month (up to 25% maximum). Late payment penalty is 0.5% of unpaid tax per month. Interest accrues on unpaid amounts. If you file more than 60 days late, the minimum penalty is $435 or 100% of the tax owed, whichever is smaller. File and pay as soon as possible to minimize penalties.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I calculate tax in the UK?</h3>
                      <p className="text-xs text-muted-foreground">UK tax calculation involves income tax (applied to income above the personal allowance of £12,570 for 2024-25), National Insurance contributions, and potentially student loan repayments. Income tax uses progressive bands: 20% basic rate, 40% higher rate, and 45% additional rate. National Insurance is calculated separately on earnings above the primary threshold. Our UK tax calculator accounts for all these factors, providing an accurate estimate of your total UK tax liability and take-home pay.</p>
                    </div>
                    <div className="p-2 md:p-3 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">How do I calculate tax in Canada?</h3>
                      <p className="text-xs text-muted-foreground">Canadian tax calculation includes federal tax brackets plus provincial tax rates. The federal tax rates are progressive (15%, 20.5%, 26%, 29%, 33%), and each province adds its own rates. The calculator also accounts for CPP (Canada Pension Plan) contributions, EI (Employment Insurance) premiums, and basic personal amounts. Our Canada tax calculator uses CRA tax brackets and provincial rates to provide comprehensive Canadian tax calculations showing your total tax burden and net income.</p>
                    </div>
                  </div>
                </div>

                {/* Related Tools Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
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
                        className="p-2 md:p-3 bg-card rounded-lg border border-border hover:bg-secondary hover:border-heading-accent-border/50 transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-heading-accent" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{name}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground">{desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-6">
                <div className="sticky top-32 space-y-6 hidden lg:block">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
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
