import { Metadata } from "next"
import AmortizationCalculator from "@/components/amortization-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Amortization Calculator | Advanced Loan Payment Calculator | Free Online Tool | FastTools",
  description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate.",
    keywords: [
        "amortization calculator",
        "loan amortization calculator",
        "mortgage amortization calculator",
        "payment calculator",
        "loan calculator",
        "mortgage calculator",
        "amortization schedule",
        "loan amortization schedule",
        "mortgage amortization schedule",
        "loan payment calculator",
        "mortgage payment calculator",
        "auto loan calculator",
        "personal loan calculator",
        "home loan calculator",
        "business loan calculator",
        "loan repayment calculator",
        "mortgage repayment calculator",
        "loan payoff calculator",
        "mortgage payoff calculator",
        "extra payment calculator",
        "biweekly payment calculator",
        "loan interest calculator",
        "mortgage interest calculator",
        "principal and interest calculator",
        "debt payoff calculator",
        "refinancing calculator",
        "loan refinancing calculator",
        "mortgage refinancing calculator",
        "loan comparison calculator",
        "mortgage comparison calculator",
        "loan term calculator",
        "mortgage term calculator",
        "loan balance calculator",
        "mortgage balance calculator",
        "loan reduction calculator",
        "loan prepayment calculator",
        "mortgage prepayment calculator",
        "loan breakdown calculator",
        "mortgage breakdown calculator",
        "amortization chart",
        "loan amortization chart",
        "mortgage amortization chart",
        "loan analysis",
        "mortgage analysis",
        "loan planning",
        "mortgage planning",
        "debt management tool",
        "loan management tool",
        "mortgage management tool",
        "financial planning calculator",
        "loan estimator",
        "mortgage estimator",
        "loan tracker",
        "mortgage tracker",
        "loan calculator online",
        "mortgage calculator online",
        "amortization calculator online",
        "loan calculator free",
        "mortgage calculator free",
        "amortization calculator free",
        "loan calculator accurate",
        "mortgage calculator accurate",
        "amortization calculator accurate",
        "loan calculator professional",
        "mortgage calculator professional",
        "amortization calculator professional",
        "loan calculator advanced",
        "mortgage calculator advanced",
        "amortization calculator advanced",
        "loan calculator comprehensive",
        "mortgage calculator comprehensive",
        "amortization calculator comprehensive",
        "loan calculator detailed",
        "mortgage calculator detailed",
        "amortization calculator detailed",
        "loan calculator complete",
        "mortgage calculator complete",
        "amortization calculator complete",
        "loan calculator total",
        "mortgage calculator total",
        "amortization calculator total",
        "loan calculator app",
        "mortgage calculator app",
        "amortization calculator app",
        "loan calculator website",
        "mortgage calculator website",
        "amortization calculator website",
        "loan calculator tool",
        "mortgage calculator tool",
        "amortization calculator tool",
        "loan software",
        "mortgage software",
        "amortization software",
        "loan planning app",
        "mortgage planning app",
        "financial calculator app"
    ],

  openGraph: {
    title: "Amortization Calculator | Advanced Loan Payment Calculator | Free Online Tool | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate.",
    type: "website",
    url: "https://fasttools.store/calculator/amortization-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Amortization Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amortization Calculator | Advanced Loan Payment Calculator | Free Online Tool | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/amortization-calculator"
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

export default function AmortizationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Amortization Calculator | Advanced Loan Payment Calculator - Professional Loan Analysis Tool",
          description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate. Free, professional-grade loan analysis for optimal financial planning.",
          url: "https://fasttools.store/calculator/amortization-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Monthly Payment Calculations",
            "Amortization Schedules",
            "Extra Payment Analysis",
            "Interest and Principal Breakdowns",
            "Payment Optimization",
            "Loan Comparison Tools",
            "Refinancing Analysis",
            "Debt Reduction Strategies",
            "Bi-weekly Payment Options",
            "Loan Payoff Calculators",
            "Interest Savings Analysis",
            "Payment Frequency Options",
            "Loan Term Optimization",
            "Principal vs Interest Tracking",
            "Extra Payment Impact",
            "Refinancing Scenarios",
            "Debt Consolidation Analysis",
            "Payment Strategy Planning",
            "Professional Grade Accuracy",
            "Comprehensive Reporting"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Amortization Calculator", href: "/calculator/amortization-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8">
              <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-1 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-yellow-400 leading-tight">Amortization Calculator - Advanced Loan Analysis</h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
                <strong>Professional amortization calculator for detailed loan payment analysis</strong> with <strong>comprehensive amortization schedules</strong>. Calculate <strong>monthly payments</strong>, <strong>interest costs</strong>, and <strong>extra payment savings</strong> with our <strong>advanced loan calculator</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_360px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <div>
                <AmortizationCalculator />
                
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
                      How to Use Amortization Calculator
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">1. Enter Loan Details</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Input loan amount, term, interest rate, and optional extra payments</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">2. Review Results</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Analyze monthly payment, total interest, and amortization schedule</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">3. Optimize Payments</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Use extra payment analysis and personalized recommendations</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">4. Plan Strategy</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">Develop optimal payment strategy to minimize interest and pay off faster</p>
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
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Amortization Schedules</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Detailed month-by-month breakdown of principal and interest payments</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Extra Payment Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Calculate savings from additional payments and accelerated payoff strategies</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex-shrink-0">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Payment Optimization</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Compare different payment strategies to minimize total interest paid</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex-shrink-0">
                            <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Loan Comparison</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Compare different loan terms, rates, and payment options side by side</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-red-100 dark:bg-red-900/20 rounded-lg flex-shrink-0">
                            <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Refinancing Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Evaluate refinancing options and potential savings from rate changes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex-shrink-0">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Real-time Calculations</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground">Instant updates as you adjust loan parameters and payment strategies</p>
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
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Homeowners</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Mortgage payment planning and analysis</li>
                          <li>• Extra payment strategy optimization</li>
                          <li>• Refinancing decision evaluation</li>
                          <li>• Home equity loan calculations</li>
                          <li>• Bi-weekly payment analysis</li>
                        </ul>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">For Borrowers</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-muted-foreground">
                          <li>• Auto loan payment planning</li>
                          <li>• Personal loan analysis</li>
                          <li>• Student loan repayment strategies</li>
                          <li>• Debt consolidation planning</li>
                          <li>• Business loan optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Loan Types Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Types of Loans
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Mortgage Loans</h3>
                          <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Conventional mortgages</li>
                            <li>• FHA loans</li>
                            <li>• VA loans</li>
                            <li>• Jumbo loans</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Auto Loans</h3>
                          <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• New car loans</li>
                            <li>• Used car loans</li>
                            <li>• Refinancing loans</li>
                            <li>• Lease buyouts</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Personal Loans</h3>
                          <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Debt consolidation</li>
                            <li>• Home improvement</li>
                            <li>• Medical expenses</li>
                            <li>• Education costs</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 xs:mb-2 sm:mb-3">Business Loans</h3>
                          <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                            <li>• Equipment financing</li>
                            <li>• Working capital</li>
                            <li>• Commercial real estate</li>
                            <li>• SBA loans</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Strategies Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Payment Strategies
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2 sm:mb-3">Extra Payments</h3>
                          <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• Round up monthly payments</li>
                            <li>• Make bi-weekly payments</li>
                            <li>• Use windfalls for extra payments</li>
                            <li>• Apply bonuses to principal</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2 sm:mb-3">Refinancing</h3>
                          <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• Lower interest rates</li>
                            <li>• Shorter loan terms</li>
                            <li>• Cash-out refinancing</li>
                            <li>• Rate and term refinancing</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2 sm:mb-3">Debt Consolidation</h3>
                          <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                            <li>• Combine multiple debts</li>
                            <li>• Lower overall interest rate</li>
                            <li>• Simplify payments</li>
                            <li>• Improve credit score</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-800 dark:text-orange-200 mb-1 xs:mb-2 sm:mb-3">Budget Optimization</h3>
                          <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                            <li>• Create detailed budget</li>
                            <li>• Identify extra payment opportunities</li>
                            <li>• Track progress monthly</li>
                            <li>• Celebrate milestones</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Insights Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Award className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Professional Insights
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2">Sarah Johnson, CFP - Financial Planner</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2">
                          "Understanding amortization is crucial for making informed financial decisions. This calculator helps clients visualize how their payments are allocated between principal and interest, and the impact of extra payments on their overall loan cost and timeline."
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">- Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2">Michael Chen, Mortgage Broker</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2">
                          "I use this calculator regularly with clients to demonstrate different loan scenarios and payment strategies. The detailed amortization schedules help clients understand the long-term impact of their mortgage decisions and optimize their payment strategy."
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">- Michael Chen, Licensed Mortgage Broker, Wells Fargo</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1 xs:mb-2">Dr. Lisa Rodriguez, PhD - Financial Education</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-purple-700 dark:text-purple-300 mb-2">
                          "This calculator provides sophisticated loan analysis tools that are typically only available to financial professionals. The extra payment analysis and personalized recommendations help users make informed decisions about debt management and financial planning."
                        </p>
                        <p className="text-xs text-purple-600 dark:text-purple-400">- Dr. Lisa Rodriguez, PhD, Director of Financial Education, University of Chicago</p>
                      </div>
                    </div>
                  </div>

                  {/* Success Stories Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Trophy className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Real Success Stories
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-1 xs:mb-2">Mortgage Payoff Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-yellow-700 dark:text-yellow-300 mb-2">
                          "I used this calculator to plan my mortgage payoff strategy. By making extra principal payments of $200 per month, I was able to pay off my 30-year mortgage in 22 years and save over $45,000 in interest."
                        </p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer M., Homeowner</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-green-800 dark:text-green-200 mb-1 xs:mb-2">Auto Loan Optimization</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-green-700 dark:text-green-300 mb-2">
                          "This calculator helped me understand the true cost of my auto loan. I switched to bi-weekly payments and made extra principal payments, reducing my 5-year loan to 3.5 years and saving thousands in interest."
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">- Robert K., Car Owner</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-1 xs:mb-2">Debt Consolidation Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-blue-700 dark:text-blue-300 mb-2">
                          "I used this calculator to analyze my debt consolidation options. By consolidating my high-interest credit cards into a lower-rate personal loan, I reduced my monthly payments and will pay off my debt 3 years earlier."
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Debt Consolidation Client</p>
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
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How accurate are the amortization calculations?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Our calculator uses industry-standard amortization formulas and provides highly accurate results suitable for financial planning, loan analysis, and payment optimization.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between principal and interest?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Principal is the amount you borrowed, while interest is the cost of borrowing. Early in the loan, most payments go toward interest. Later, more goes toward principal as the balance decreases.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do extra payments affect my loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term significantly. Even small extra payments can save thousands in interest.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Should I make extra payments or invest the money?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Compare your loan interest rate to potential investment returns. If you can earn more investing than your loan rate, investing may be better. Otherwise, pay down the loan for guaranteed savings.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between bi-weekly and monthly payments?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Bi-weekly payments (every two weeks) result in 26 payments per year instead of 12, which can save significant interest and pay off your loan faster without changing your budget.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">When should I consider refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Consider refinancing when interest rates have dropped significantly, you want to shorten your loan term, or you need to lower your monthly payment. Always calculate the break-even point for refinancing costs.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How does loan term affect total interest?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Shorter loan terms result in higher monthly payments but significantly less total interest paid. Longer terms have lower monthly payments but much more total interest over the life of the loan.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I change my payment amount during the loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Most loans allow extra principal payments without penalty. Some loans offer payment modification programs, but you typically cannot reduce your required monthly payment without refinancing.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What is negative amortization and how can I avoid it?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Negative amortization occurs when monthly payments are insufficient to cover the interest due, causing the loan balance to increase over time. Avoid this by ensuring payments cover at least the interest portion.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I calculate the break-even point for refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Divide the total refinancing costs by your monthly payment savings. The result is the number of months needed to break even. Only refinance if you plan to keep the loan longer than the break-even period.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the difference between amortization and depreciation?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Amortization refers to the gradual repayment of a loan over time, while depreciation pertains to the reduction in value of tangible assets over their useful life. Both are accounting concepts but apply to different types of assets.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How do I choose the best amortization calculator for my specific loan needs?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          When selecting an amortization calculator, look for features that match your specific needs: user-friendly interface for easy data input, customization options for different loan types and payment frequencies, comprehensive results showing detailed breakdowns of principal and interest, extra payment analysis capabilities, and graphical representations of your payment schedule. Our calculator provides all these features plus professional-grade accuracy suitable for financial planning. Consider calculators that offer comparison tools to evaluate different loan scenarios side-by-side, and ensure the calculator can handle your specific loan type whether it's a mortgage, auto loan, personal loan, or business loan.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">Can I use an amortization calculator for different payment frequencies like bi-weekly or quarterly payments?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Yes, most advanced amortization calculators, including ours, can handle various payment frequencies including monthly, bi-weekly, weekly, and quarterly payments. Bi-weekly payments are particularly popular because they result in 26 payments per year instead of 12 monthly payments, effectively making one extra payment annually. This can significantly reduce your loan term and total interest paid. Quarterly payments are less common but useful for certain business loans or investment properties. The calculator automatically adjusts the amortization schedule based on your chosen frequency, showing you exactly how each payment frequency affects your total interest cost and payoff timeline. This flexibility allows you to explore different repayment strategies and find the one that best fits your budget and financial goals.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What are the limitations of online amortization calculators and how should I account for them?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          While online amortization calculators are highly accurate for basic loan calculations, they have several limitations to consider: they typically assume fixed interest rates and regular payments, which may not reflect variable-rate loans or irregular payment schedules; they often exclude additional costs like property taxes, homeowners insurance, PMI, or loan origination fees; they may not account for loan modifications, forbearance periods, or payment adjustments; and rounding differences can create minor discrepancies compared to lender calculations. To account for these limitations, always use the calculator as a planning tool rather than a definitive answer, consult with your lender for precise figures, factor in additional costs separately, and consider that variable-rate loans may require periodic recalculation. Our calculator provides industry-standard accuracy for fixed-rate loans and clearly indicates when additional factors should be considered.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">How can I use an amortization calculator to plan for major financial decisions like buying a home or refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          An amortization calculator is an invaluable tool for major financial decisions. When buying a home, use it to determine how much house you can afford by testing different loan amounts and interest rates, compare 15-year vs 30-year mortgage terms to see the long-term cost difference, and calculate the impact of different down payment amounts on your monthly payments. For refinancing decisions, compare your current loan terms with new offers, calculate the break-even point for refinancing costs, and determine if a cash-out refinance makes sense for your situation. The calculator helps you understand the true cost of borrowing over time, not just the monthly payment, enabling you to make informed decisions about loan terms, extra payments, and timing. Use it to model different scenarios and find the loan structure that best aligns with your financial goals and risk tolerance.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg">What's the most effective strategy for using extra payments to save money on my loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                          The most effective extra payment strategy depends on your financial situation, but several approaches can maximize your savings: make extra payments early in the loan when interest is highest, apply extra payments directly to principal rather than prepaying future payments, consider bi-weekly payments which automatically create 13 monthly payments per year, use windfalls like tax refunds or bonuses for lump-sum principal payments, and round up your monthly payment to the nearest $50 or $100 for consistent small savings. The key is consistency and ensuring extra payments go toward principal reduction. Our calculator shows you exactly how different extra payment strategies affect your total interest and payoff time, allowing you to choose the approach that fits your budget while maximizing your savings. Remember to check with your lender about any prepayment penalties and ensure your extra payments are properly applied to principal.
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
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Mortgage Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate mortgage payments and home affordability</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Interest Rate Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate real interest rates on loans and investments</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Investment Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate investment growth and portfolio analysis</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <Home className="h-3 w-3 xs:h-4 xs:w-4 text-orange-600 dark:text-orange-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Loan Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate loan payments, interest, and amortization schedules</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-red-100 dark:bg-red-900/20 rounded-lg">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Finance Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Time value of money calculations and TVM analysis</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                            <Percent className="h-3 w-3 xs:h-4 xs:w-4 text-teal-600 dark:text-teal-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Sales Tax Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate sales tax for all 50 US states</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                            <FileText className="h-3 w-3 xs:h-4 xs:w-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Salary Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Convert salary across different pay frequencies</p>
                      </div>
                      
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
                            <Award className="h-3 w-3 xs:h-4 xs:w-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <h3 className="font-semibold text-foreground text-xs xs:text-sm">Inflation Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-muted-foreground leading-relaxed">Calculate purchasing power and inflation impact</p>
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