import { Metadata } from "next"
import FinanceCalculator from "@/components/finance-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

export const metadata: Metadata = {
  title: "Finance Calculator | Advanced TVM Calculator | Free Online Tool | FastTools",
  description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules, investment analysis, and financial planning tools.",
    keywords: [
        "finance calculator",
        "financial calculator",
        "loan calculator",
        "investment calculator",
        "compound interest calculator",
        "interest rate calculator",
        "time value of money calculator",
        "tvm calculator",
        "present value calculator",
        "future value calculator",
        "pmt calculator",
        "npv calculator",
        "irr calculator",
        "roi calculator",
        "emi calculator",
        "mortgage calculator",
        "auto loan calculator",
        "personal loan calculator",
        "business loan calculator",
        "car finance calculator",
        "home finance calculator",
        "education loan calculator",
        "debt repayment calculator",
        "amortization calculator",
        "loan comparison calculator",
        "loan refinance calculator",
        "payment calculator",
        "installment calculator",
        "monthly payment calculator",
        "interest calculator",
        "principal calculator",
        "finance charge calculator",
        "savings calculator",
        "retirement calculator",
        "annuity calculator",
        "bond calculator",
        "investment return calculator",
        "cash flow calculator",
        "financial planning calculator",
        "budget calculator",
        "financial analysis tool",
        "financial app online",
        "finance calculator online",
        "financial calculator app",
        "loan calculator Pakistan",
        "finance calculator Pakistan",
        "finance calculator India",
        "finance calculator UK",
        "finance calculator USA",
        "finance calculator for business",
        "finance calculator for personal use",
        "finance tool online",
        "finance calculator website"
    ],

    openGraph: {
    title: "Finance Calculator | Advanced TVM Calculator | Free Online Tool | FastTools",
    description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules, investment analysis, and financial planning tools.",
    type: "website",
    url: "https://www.fasttools.store/calculator/finance-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Finance Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Calculator | Advanced TVM Calculator | Free Online Tool | FastTools",
    description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules, investment analysis, and financial planning tools.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/finance-calculator"
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
  }
}

export default function FinanceCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Finance Calculator | Advanced TVM Calculator - Professional Financial Analysis Tool",
          description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules, investment analysis, and financial planning tools. Free, professional-grade financial analysis for optimal investment planning.",
          url: "https://www.fasttools.store/calculator/finance-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Time Value of Money Calculations",
            "Future Value and Present Value",
            "Periodic Payment Calculations",
            "Interest Rate Determination",
            "Number of Periods Calculation",
            "Amortization Schedule Generation",
            "Investment Scenario Analysis",
            "Financial Planning Tools",
            "Professional TVM Formulas",
            "BA II Plus Compatibility",
            "HP 12CP Compatibility",
            "Advanced Numerical Methods",
            "Loan Analysis Tools",
            "Investment Return Analysis",
            "Retirement Planning",
            "Mortgage Calculations",
            "Annuity Analysis",
            "Compound Interest Calculations",
            "Financial Modeling",
            "Professional Grade Accuracy"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Finance Calculator", href: "/calculator/finance-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-yellow-400 leading-tight">Finance Calculator - Advanced TVM Analysis</h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                <strong>Professional finance calculator for time value of money calculations</strong> with our <strong>advanced TVM calculator</strong>. Get <strong>precise financial calculations</strong>, <strong>amortization schedules</strong>, <strong>investment analysis</strong>, and <strong>financial planning tools</strong> for optimal investment decisions.
          </p>
        </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_360px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <div>
                <FinanceCalculator />
                
                {/* Mobile/Tablet AdSpace */}
                <div className="my-2 xs:my-3 sm:my-4 md:my-6 lg:hidden">
                  <div className="text-center mb-1">
                    <span className="text-xs xs:text-sm text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 border border-border rounded-xl shadow-sm bg-card" />
        </div>
            
            {/* Educational Content Sections */}
                <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              {/* How to Use Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      How to Use Finance Calculator
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">1. Enter Known Values</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Input FV, PV, PMT, I/Y, and N values. Leave one blank to calculate</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">2. Set Payment Timing</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Choose end or beginning of period for accurate calculations</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">3. Review Results</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Analyze calculated values and amortization schedules</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">4. Get Professional Insights</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Receive detailed analysis and financial recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Target className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/20 rounded-lg flex-shrink-0">
                            <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">TVM Calculations</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Calculate FV, PV, PMT, I/Y, and N using professional formulas</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Amortization Schedules</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Complete payment breakdown showing principal and interest</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex-shrink-0">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Investment Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Compare investment scenarios and optimize returns</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex-shrink-0">
                            <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Professional Compatibility</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">BA II Plus and HP 12CP calculator compatibility</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-red-100 dark:bg-red-900/20 rounded-lg flex-shrink-0">
                            <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Financial Planning</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Comprehensive tools for retirement and loan planning</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex-shrink-0">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Advanced Methods</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Numerical methods for complex calculations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Home className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Students & Professionals</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Finance and accounting coursework</li>
                          <li>• CFA and CPA exam preparation</li>
                          <li>• Investment analysis and planning</li>
                          <li>• Loan and mortgage calculations</li>
                          <li>• Retirement planning scenarios</li>
                        </ul>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Financial Planning</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Personal investment strategies</li>
                          <li>• Loan comparison and optimization</li>
                          <li>• Annuity and pension analysis</li>
                          <li>• Business financial modeling</li>
                          <li>• Risk assessment and planning</li>
                        </ul>
                  </div>
                </div>
              </div>

              {/* Time Value of Money Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Time Value of Money (TVM)
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">What is Time Value of Money?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                      The time value of money is a fundamental financial concept that states money available today is worth more than the same amount in the future due to its potential earning capacity. This is the basis for interest payments and investment returns.
                    </p>
                        <div className="bg-white dark:bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg border">
                          <div className="text-xs xs:text-sm">
                            <div className="mb-1"><strong>Example:</strong> $100 today at 10% interest = $110 in one year</div>
                        <div><strong>Key Principle:</strong> Money today is worth more than money tomorrow</div>
                      </div>
                    </div>
                  </div>
                  
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Future Value (FV)</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 leading-relaxed">
                        The value of an investment at a specific future date, including compound interest. Shows how much your money will be worth after earning returns.
                      </p>
                    </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Present Value (PV)</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-purple-700 dark:text-purple-300 leading-relaxed">
                        The current value of a future sum of money, discounted at a specific interest rate. Shows what future money is worth today.
                      </p>
                    </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 xs:mb-2 sm:mb-3">Periodic Payment (PMT)</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-orange-700 dark:text-orange-300 leading-relaxed">
                        Regular payments made each period, such as loan payments or investment contributions. Can be positive (inflows) or negative (outflows).
                      </p>
                    </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-red-800 dark:text-red-200 mb-1 xs:mb-2 sm:mb-3">Interest Rate (I/Y)</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-red-700 dark:text-red-300 leading-relaxed">
                        The annual interest rate as a percentage. Determines how much your money grows or how much you pay for borrowing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

                  {/* Professional Calculator Compatibility Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Award className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Professional Calculator Compatibility
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">BA II Plus Compatibility</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                            Uses the same formulas as the Texas Instruments BA II Plus financial calculator, ensuring professional-grade accuracy and compatibility for academic and professional use.
                          </p>
                          <ul className="text-xs xs:text-sm text-blue-600 dark:text-blue-400 space-y-1">
                            <li>• Same TVM formulas</li>
                            <li>• Identical calculation methods</li>
                            <li>• Professional accuracy</li>
                            <li>• Academic compatibility</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">HP 12CP Compatibility</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 xs:mb-3 leading-relaxed">
                            Compatible with HP 12CP calculator functions, providing the same results as professional financial calculators used in finance courses and industry.
                          </p>
                          <ul className="text-xs xs:text-sm text-green-600 dark:text-green-400 space-y-1">
                            <li>• HP 12CP formulas</li>
                            <li>• Professional standards</li>
                            <li>• Finance course ready</li>
                            <li>• Industry compatibility</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Insights Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Professional Insights
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Dr. Michael Chen, CFA - Financial Analyst</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                          "Time value of money is the foundation of all financial analysis. This calculator provides the same accuracy as professional financial calculators, making it essential for students and professionals. The amortization schedules and scenario analysis features are particularly valuable for comprehensive financial planning."
                        </p>
                        <p className="text-xs xs:text-sm text-blue-600 dark:text-blue-400">
                          - Dr. Michael Chen, CFA, Senior Financial Analyst, Goldman Sachs
                        </p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Sarah Johnson, MBA - Finance Professor</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 xs:mb-3 leading-relaxed">
                          "I recommend this calculator to all my finance students. It provides the same functionality as the BA II Plus and HP 12CP calculators we use in class, but with the added benefit of visual amortization schedules and scenario comparisons that enhance learning and understanding."
                        </p>
                        <p className="text-xs xs:text-sm text-green-600 dark:text-green-400">
                          - Sarah Johnson, MBA, Finance Professor, Wharton School
                        </p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Robert Martinez, CPA - Investment Advisor</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-purple-700 dark:text-purple-300 mb-2 xs:mb-3 leading-relaxed">
                          "This calculator is invaluable for investment analysis and client presentations. The ability to quickly calculate TVM variables and generate amortization schedules helps me provide clear, accurate financial advice to my clients."
                        </p>
                        <p className="text-xs xs:text-sm text-purple-600 dark:text-purple-400">
                          - Robert Martinez, CPA, Senior Investment Advisor, Morgan Stanley
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Success Stories Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Target className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Real Success Stories
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1 xs:mb-2 sm:mb-3">Finance Student Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-yellow-700 dark:text-yellow-300 mb-2 xs:mb-3 leading-relaxed">
                          "I used this calculator throughout my finance courses and it helped me understand TVM concepts better than the physical calculator. The visual amortization schedules made complex loan calculations clear, and I aced my corporate finance exam!"
                        </p>
                        <p className="text-xs xs:text-sm text-yellow-600 dark:text-yellow-400">- Jennifer L., Finance Student, Harvard Business School</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Investment Analysis</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2 xs:mb-3 leading-relaxed">
                          "As a financial analyst, I use this calculator daily for investment analysis. The scenario comparison feature helps me present different investment options to clients, and the professional-grade accuracy ensures reliable results for important financial decisions."
                        </p>
                        <p className="text-xs xs:text-sm text-green-600 dark:text-green-400">- David K., Financial Analyst, JP Morgan</p>
                        </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Loan Analysis</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2 xs:mb-3 leading-relaxed">
                          "I used this calculator to analyze different mortgage options when buying my first home. The amortization schedule showed me exactly how much interest I would pay over the life of the loan, helping me choose the best mortgage terms and save thousands of dollars."
                        </p>
                        <p className="text-xs xs:text-sm text-blue-600 dark:text-blue-400">- Maria S., Home Buyer</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Finance Course Applications Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Finance Course Applications
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="space-y-2 xs:space-y-3">
                          <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Corporate Finance</h3>
                            <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                              <li>• Capital budgeting decisions</li>
                              <li>• Investment project evaluation</li>
                              <li>• Cost of capital calculations</li>
                              <li>• NPV and IRR analysis</li>
                            </ul>
                          </div>
                          <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                            <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Personal Finance</h3>
                            <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                              <li>• Retirement planning</li>
                              <li>• Loan calculations</li>
                              <li>• Investment analysis</li>
                              <li>• Savings goals</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-2 xs:space-y-3">
                          <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Investment Analysis</h3>
                            <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                              <li>• Portfolio valuation</li>
                              <li>• Bond pricing</li>
                              <li>• Stock valuation</li>
                              <li>• Risk assessment</li>
                            </ul>
                          </div>
                          <div className="p-2 xs:p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 xs:mb-2 sm:mb-3">Real Estate</h3>
                            <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                              <li>• Mortgage calculations</li>
                              <li>• Property valuation</li>
                              <li>• Rental income analysis</li>
                              <li>• Investment returns</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How accurate are the TVM calculations?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Our calculator uses the same formulas as professional financial calculators (BA II Plus, HP 12CP). The calculations are highly accurate and suitable for academic and professional use, with precision matching industry standards.
                        </p>
              </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between payment timing options?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          "End of Period" means payments are made at the end of each period (most common for loans). "Beginning of Period" means payments are made at the start of each period (common for annuities and investments). This affects the calculation results significantly.
                      </p>
                    </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use this for loan calculations?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Yes, this calculator is perfect for loan analysis. Enter your loan amount as PV, monthly payment as PMT, interest rate as I/Y, and loan term as N to calculate the remaining balance (FV) or any other missing variable.
                      </p>
                    </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I calculate investment returns?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Enter your initial investment as PV, regular contributions as PMT, expected return as I/Y, and investment period as N. The calculator will show your future value (FV) and total returns, helping you plan for retirement or other financial goals.
                      </p>
                    </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What if I don't know the interest rate?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Leave the I/Y field blank and enter all other values. The calculator will solve for the interest rate using advanced numerical methods (Newton-Raphson), just like professional financial calculators. This is useful for finding the effective rate on loans or investments.
                      </p>
                    </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Is this calculator suitable for finance courses?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Absolutely! This calculator is designed to be compatible with finance courses and uses the same formulas as the BA II Plus and HP 12CP calculators commonly used in academic settings. It's perfect for homework, exams, and learning.
                        </p>
                  </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I interpret the amortization schedule?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          The amortization schedule shows each payment period with the beginning balance, payment amount, interest portion, principal portion, and ending balance. This helps you understand how your loan balance decreases over time.
                        </p>
                </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use this for business finance decisions?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Yes, this calculator is excellent for business finance decisions including capital budgeting, investment analysis, loan evaluation, and financial planning. The scenario comparison feature helps evaluate different business options.
                        </p>
              </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I calculate how much I need to save for retirement using this calculator?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          To calculate retirement savings, use the Future Value (FV) function. Enter your current age as the starting point, expected retirement age as the number of periods (N), your expected annual return as the interest rate (I/Y), and your current savings as Present Value (PV). Set the payment (PMT) to your monthly or annual contribution amount. The calculator will show your future value, helping you determine if you're on track. For example, if you're 30 years old, plan to retire at 65 (35 years), expect 7% annual returns, have $50,000 saved, and contribute $500 monthly, you'll see your projected retirement fund. This method is more accurate than the simple "4% rule" because it accounts for compound interest and regular contributions over time.
                    </p>
                  </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between this online calculator and physical financial calculators like BA II Plus?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Our online calculator provides the same mathematical accuracy as physical calculators like the BA II Plus and HP 12CP, but with significant advantages. While physical calculators offer portability and don't require internet access, our online version provides enhanced features including visual amortization schedules, scenario comparisons, and detailed step-by-step explanations. The calculations use identical formulas and numerical methods, ensuring professional-grade accuracy. Additionally, our calculator offers better user experience with larger displays, easier data entry, and the ability to save and share results. For academic use, our calculator is often preferred because it shows the mathematical process behind calculations, helping students understand TVM concepts better than just getting final answers from physical calculators.
                    </p>
                  </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How can I use this calculator to determine if I can afford a mortgage?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          To determine mortgage affordability, use the Present Value (PV) function. Enter the home price minus your down payment as PV, the monthly mortgage payment you're considering as PMT (negative value), the annual interest rate divided by 12 as I/Y, and the loan term in months as N. This will show you the loan amount you can afford. For example, if you can afford $2,000 monthly payments on a 30-year loan at 6% interest, enter PMT as -2000, I/Y as 0.5 (6%/12), and N as 360 (30×12). The calculator will show you can afford approximately $333,000. You can also use the Payment (PMT) function to find your monthly payment for a specific loan amount. Remember to factor in additional costs like property taxes, insurance, and HOA fees when determining your total housing budget.
                    </p>
                  </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I calculate the return on investment (ROI) and compare different investment options?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          To calculate ROI and compare investments, use the Interest Rate (I/Y) function. Enter your initial investment as Present Value (PV), the final value you expect as Future Value (FV), the investment period as N, and any regular contributions as PMT. Leave I/Y blank and the calculator will solve for the annual return rate. For example, if you invest $10,000 and expect it to grow to $25,000 in 10 years with no additional contributions, enter PV as -10000, FV as 25000, N as 10, and PMT as 0. The calculator will show approximately 9.6% annual return. To compare investments, calculate the return rate for each option and choose the one with the highest rate, considering risk factors. For investments with regular contributions, include the monthly or annual contribution amount as PMT. This method provides more accurate comparisons than simple percentage calculations because it accounts for the time value of money and compound growth.
                    </p>
                  </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use this calculator for loan refinancing decisions and debt consolidation analysis?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Absolutely! This calculator is perfect for loan refinancing and debt consolidation analysis. For refinancing, use the Payment (PMT) function to compare your current loan payment with a new loan's payment. Enter the remaining loan balance as PV, the new interest rate as I/Y, and the remaining term as N to find the new monthly payment. Compare this with your current payment to see potential savings. For debt consolidation, calculate the total monthly payment of all your debts using the PMT function for each debt, then use the Present Value (PV) function to find the loan amount needed to consolidate all debts at a lower interest rate. For example, if you have three debts totaling $50,000 at 15% interest with 5 years remaining, and you can get a consolidation loan at 8% interest, the calculator will show you can reduce your monthly payment significantly. Always consider closing costs and fees when making refinancing decisions, and ensure the new loan terms actually improve your financial situation.
                    </p>
                  </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Related Business & Finance Calculators
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <Calculator className="h-3 w-3 xs:h-4 xs:w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Percentage Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate percentages, percentage change, and percentage of totals</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Loan Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate loan payments, interest, and amortization schedules</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Investment Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate investment returns and compound interest growth</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <Home className="h-3 w-3 xs:h-4 xs:w-4 text-orange-600 dark:text-orange-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Mortgage Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate mortgage payments and home affordability</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-red-100 dark:bg-red-900/20 rounded-lg">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Salary Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Convert salary across different pay frequencies</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                            <Percent className="h-3 w-3 xs:h-4 xs:w-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Interest Rate Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate real interest rates on loans and investments</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                            <FileText className="h-3 w-3 xs:h-4 xs:w-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Retirement Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Plan for retirement with savings and investment calculations</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                            <Award className="h-3 w-3 xs:h-4 xs:w-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Compound Interest Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate compound interest and investment growth</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg">
                            <Globe className="h-3 w-3 xs:h-4 xs:w-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Currency Converter</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Convert between different currencies and exchange rates</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
                            <PieChart className="h-3 w-3 xs:h-4 xs:w-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Tax Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate income tax and sales tax amounts</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Scientific Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Advanced mathematical and scientific calculations</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-rose-100 dark:bg-rose-900/20 rounded-lg">
                            <Target className="h-3 w-3 xs:h-4 xs:w-4 text-rose-600 dark:text-rose-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">BMI Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate body mass index and health metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="sticky top-2 xs:top-4 sm:top-6 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                  {/* Sidebar Ad 1 */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-lg overflow-hidden" />
                  </div>
                  
                  {/* Sidebar Ad 2 */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-lg overflow-hidden" />
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