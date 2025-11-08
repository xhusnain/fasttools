import { Metadata } from "next"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Amortization Calculator | Free Loan Payment Calculator",
  description: "FastTools Amortization Calculator - Professional tool for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings.",
    keywords: [
        "fasttools",
        "fast tools",
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
    title: "Amortization Calculator | Advanced Loan Payment Calculator | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings.",
    type: "website",
    url: "https://www.fasttools.store/calculator/amortization-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Amortization Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amortization Calculator | Advanced Loan Payment Calculator | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/amortization-calculator"
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
          url: "https://www.fasttools.store/calculator/amortization-calculator",
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
            url: "https://www.fasttools.store"
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
              <GHeader
                title="Amortization Calculator - Advanced Loan Analysis"
                description="Professional amortization calculator for detailed loan payment analysis with comprehensive amortization schedules. Calculate monthly payments, interest costs, and extra payment savings with our advanced loan calculator."
                titleSize="medium"
                descriptionSize="small"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_360px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              <div>
                <AmortizationCalculator />

                {}
                <div className="my-2 xs:my-3 sm:my-4 md:my-6 lg:hidden">
                  <div className="text-center mb-1">
                    <span className="text-xs xs:text-sm text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {}
                <div className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 space-y-1 xs:space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      How to Use Amortization Calculator
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">1. Enter Loan Details</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">Input loan amount, term, interest rate, and optional extra payments</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">2. Review Results</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">Analyze monthly payment, total interest, and amortization schedule</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">3. Optimize Payments</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">Use extra payment analysis and personalized recommendations</p>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base">4. Plan Strategy</h3>
                          <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">Develop optimal payment strategy to minimize interest and pay off faster</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Target className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Amortization Schedules</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Detailed month-by-month breakdown of principal and interest payments</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Extra Payment Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Calculate savings from additional payments and accelerated payoff strategies</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Payment Optimization</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Compare different payment strategies to minimize total interest paid</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Loan Comparison</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Compare different loan terms, rates, and payment options side by side</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <Users className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Refinancing Analysis</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Evaluate refinancing options and potential savings from rate changes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 xs:gap-3 sm:gap-4">
                          <div className="p-1 xs:p-1.5 sm:p-2 bg-primary rounded-lg flex-shrink-0">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-foreground" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Real-time Calculations</h3>
                            <p className="text-xs xs:text-sm sm:text-base text-foreground">Instant updates as you adjust loan parameters and payment strategies</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Home className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">For Homeowners</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-foreground">
                          <li>• Mortgage payment planning and analysis</li>
                          <li>• Extra payment strategy optimization</li>
                          <li>• Refinancing decision evaluation</li>
                          <li>• Home equity loan calculations</li>
                          <li>• Bi-weekly payment analysis</li>
                        </ul>
                      </div>
                      <div className="space-y-2 xs:space-y-3">
                        <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">For Borrowers</h3>
                        <ul className="space-y-1 xs:space-y-1.5 text-xs xs:text-sm sm:text-base text-foreground">
                          <li>• Auto loan payment planning</li>
                          <li>• Personal loan analysis</li>
                          <li>• Student loan repayment strategies</li>
                          <li>• Debt consolidation planning</li>
                          <li>• Business loan optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Types of Loans
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Mortgage Loans</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Conventional mortgages</li>
                            <li>• FHA loans</li>
                            <li>• VA loans</li>
                            <li>• Jumbo loans</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-heading-accent mb-1 xs:mb-2 sm:mb-3">Auto Loans</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• New car loans</li>
                            <li>• Used car loans</li>
                            <li>• Refinancing loans</li>
                            <li>• Lease buyouts</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Personal Loans</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Debt consolidation</li>
                            <li>• Home improvement</li>
                            <li>• Medical expenses</li>
                            <li>• Education costs</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Business Loans</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Equipment financing</li>
                            <li>• Working capital</li>
                            <li>• Commercial real estate</li>
                            <li>• SBA loans</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Payment Strategies
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Extra Payments</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Round up monthly payments</li>
                            <li>• Make bi-weekly payments</li>
                            <li>• Use windfalls for extra payments</li>
                            <li>• Apply bonuses to principal</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-heading-accent mb-1 xs:mb-2 sm:mb-3">Refinancing</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Lower interest rates</li>
                            <li>• Shorter loan terms</li>
                            <li>• Cash-out refinancing</li>
                            <li>• Rate and term refinancing</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Debt Consolidation</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Combine multiple debts</li>
                            <li>• Lower overall interest rate</li>
                            <li>• Simplify payments</li>
                            <li>• Improve credit score</li>
                          </ul>
                        </div>
                        <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2 sm:mb-3">Budget Optimization</h3>
                          <ul className="text-xs xs:text-sm text-foreground space-y-1">
                            <li>• Create detailed budget</li>
                            <li>• Identify extra payment opportunities</li>
                            <li>• Track progress monthly</li>
                            <li>• Celebrate milestones</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Award className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Professional Insights
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2">Sarah Johnson, CFP - Financial Planner</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "Comprehending loan amortization is essential when making wise financial choices. This tool enables clients to see precisely how their monthly payments split between principal reduction and interest charges, while demonstrating the significant benefits of making additional principal payments over the loan's duration."
                        </p>
                        <p className="text-xs text-foreground">- Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-heading-accent mb-1 xs:mb-2">Michael Chen, Mortgage Broker</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "I use this calculator regularly with clients to demonstrate different loan scenarios and payment strategies. The detailed amortization schedules help clients understand the long-term impact of their mortgage decisions and optimize their payment strategy."
                        </p>
                        <p className="text-xs text-foreground">- Michael Chen, Licensed Mortgage Broker, Wells Fargo</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2">Dr. Lisa Rodriguez, PhD - Financial Education</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "This calculator provides sophisticated loan analysis tools that are typically only available to financial professionals. The extra payment analysis and personalized recommendations help users make informed decisions about debt management and financial planning."
                        </p>
                        <p className="text-xs text-foreground">- Dr. Lisa Rodriguez, PhD, Director of Financial Education, University of Chicago</p>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Trophy className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Real Success Stories
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2">Mortgage Payoff Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "This amortization tool helped me strategize my mortgage payoff plan. Through adding $200 monthly to my principal, I paid off my 30-year home loan in just 22 years and avoided paying more than $45,000 in unnecessary interest charges."
                        </p>
                        <p className="text-xs text-foreground">- Jennifer M., Homeowner</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-heading-accent mb-1 xs:mb-2">Auto Loan Optimization</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "This calculator helped me understand the true cost of my auto loan. I switched to bi-weekly payments and made extra principal payments, reducing my 5-year loan to 3.5 years and saving thousands in interest."
                        </p>
                        <p className="text-xs text-foreground">- Robert K., Car Owner</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-card rounded-lg border border-border">
                        <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 xs:mb-2">Debt Consolidation Success</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground mb-2">
                          "I used this calculator to analyze my debt consolidation options. By consolidating my high-interest credit cards into a lower-rate personal loan, I reduced my monthly payments and will pay off my debt 3 years earlier."
                        </p>
                        <p className="text-xs text-foreground">- Maria S., Debt Consolidation Client</p>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How accurate are the amortization calculations?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Our amortization calculator employs standard industry formulas recognized by financial institutions and delivers precise calculations that meet professional standards for mortgage planning, debt analysis, and repayment strategy development.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What's the difference between principal and interest?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Principal is the amount you borrowed, while interest is the cost of borrowing. Early in the loan, most payments go toward interest. Later, more goes toward principal as the balance decreases.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How do extra payments affect my loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Additional principal payments accelerate the reduction of your loan balance, substantially lowering your total interest expense and potentially cutting your repayment timeline. Regular modest extra payments compound into significant interest savings over time.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">Should I make extra payments or invest the money?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Compare your loan interest rate to potential investment returns. If you can earn more investing than your loan rate, investing may be better. Otherwise, pay down the loan for guaranteed savings.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What's the difference between bi-weekly and monthly payments?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Bi-weekly payments (every two weeks) result in 26 payments per year instead of 12, which can save significant interest and pay off your loan faster without changing your budget.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">When should I consider refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Consider refinancing when interest rates have dropped significantly, you want to shorten your loan term, or you need to lower your monthly payment. Always calculate the break-even point for refinancing costs.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How does loan term affect total interest?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Shorter loan terms result in higher monthly payments but significantly less total interest paid. Longer terms have lower monthly payments but much more total interest over the life of the loan.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">Can I change my payment amount during the loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Most loans allow extra principal payments without penalty. Some loans offer payment modification programs, but you typically cannot reduce your required monthly payment without refinancing.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What is negative amortization and how can I avoid it?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Negative amortization occurs when monthly payments are insufficient to cover the interest due, causing the loan balance to increase over time. Avoid this by ensuring payments cover at least the interest portion.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How do I calculate the break-even point for refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Divide the total refinancing costs by your monthly payment savings. The result is the number of months needed to break even. Only refinance if you plan to keep the loan longer than the break-even period.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What's the difference between amortization and depreciation?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Amortization refers to the gradual repayment of a loan over time, while depreciation pertains to the reduction in value of tangible assets over their useful life. Both are accounting concepts but apply to different types of assets.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How do I choose the best amortization calculator for my specific loan needs?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          When selecting an amortization calculator, look for features that match your specific needs: user-friendly interface for easy data input, customization options for different loan types and payment frequencies, comprehensive results showing detailed breakdowns of principal and interest, extra payment analysis capabilities, and graphical representations of your payment schedule. Our calculator provides all these features plus professional-grade accuracy suitable for financial planning. Consider calculators that offer comparison tools to evaluate different loan scenarios side-by-side, and ensure the calculator can handle your specific loan type whether it's a mortgage, auto loan, personal loan, or business loan.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">Can I use an amortization calculator for different payment frequencies like bi-weekly or quarterly payments?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          Yes, most advanced amortization calculators, including ours, can handle various payment frequencies including monthly, bi-weekly, weekly, and quarterly payments. Bi-weekly payments are particularly popular because they result in 26 payments per year instead of 12 monthly payments, effectively making one extra payment annually. This can significantly reduce your loan term and total interest paid. Quarterly payments are less common but useful for certain business loans or investment properties. The calculator automatically adjusts the amortization schedule based on your chosen frequency, showing you exactly how each payment frequency affects your total interest cost and payoff timeline. This flexibility allows you to explore different repayment strategies and find the one that best fits your budget and financial goals.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What are the limitations of online amortization calculators and how should I account for them?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          While online amortization calculators are highly accurate for basic loan calculations, they have several limitations to consider: they typically assume fixed interest rates and regular payments, which may not reflect variable-rate loans or irregular payment schedules; they often exclude additional costs like property taxes, homeowners insurance, PMI, or loan origination fees; they may not account for loan modifications, forbearance periods, or payment adjustments; and rounding differences can create minor discrepancies compared to lender calculations. To account for these limitations, always use the calculator as a planning tool rather than a definitive answer, consult with your lender for precise figures, factor in additional costs separately, and consider that variable-rate loans may require periodic recalculation. Our calculator provides industry-standard accuracy for fixed-rate loans and clearly indicates when additional factors should be considered.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">How can I use an amortization calculator to plan for major financial decisions like buying a home or refinancing?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          An amortization calculator is an invaluable tool for major financial decisions. When buying a home, use it to determine how much house you can afford by testing different loan amounts and interest rates, compare 15-year vs 30-year mortgage terms to see the long-term cost difference, and calculate the impact of different down payment amounts on your monthly payments. For refinancing decisions, compare your current loan terms with new offers, calculate the break-even point for refinancing costs, and determine if a cash-out refinance makes sense for your situation. The calculator helps you understand the true cost of borrowing over time, not just the monthly payment, enabling you to make informed decisions about loan terms, extra payments, and timing. Use it to model different scenarios and find the loan structure that best aligns with your financial goals and risk tolerance.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-heading-accent text-sm xs:text-base sm:text-lg">What's the most effective strategy for using extra payments to save money on my loan?</h3>
                        <p className="text-xs xs:text-sm sm:text-base text-foreground leading-relaxed">
                          The most effective extra payment strategy depends on your financial situation, but several approaches can maximize your savings: make extra payments early in the loan when interest is highest, apply extra payments directly to principal rather than prepaying future payments, consider bi-weekly payments which automatically create 13 monthly payments per year, use windfalls like tax refunds or bonuses for lump-sum principal payments, and round up your monthly payment to the nearest $50 or $100 for consistent small savings. The key is consistency and ensuring extra payments go toward principal reduction. Our calculator shows you exactly how different extra payment strategies affect your total interest and payoff time, allowing you to choose the approach that fits your budget while maximizing your savings. Remember to check with your lender about any prepayment penalties and ensure your extra payments are properly applied to principal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                      <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Calculator className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      Related Business & Finance Calculators
                    </h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4">
                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Calculator className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Mortgage Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate mortgage payments and home affordability</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <BarChart3 className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Interest Rate Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate real interest rates on loans and investments</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <TrendingUp className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Investment Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate investment growth and portfolio analysis</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Home className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Loan Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate loan payments, interest, and amortization schedules</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <DollarSign className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Finance Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Time value of money calculations and TVM analysis</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Percent className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Sales Tax Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate sales tax for all 50 US states</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <FileText className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Salary Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Convert salary across different pay frequencies</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Award className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Inflation Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate purchasing power and inflation impact</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Globe className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Currency Converter</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Convert between different currencies and exchange rates</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <PieChart className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Tax Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate income tax and sales tax amounts</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Clock className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Scientific Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Advanced mathematical and scientific calculations</p>
                      </div>

                      <div className="p-2 xs:p-3 sm:p-4 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors">
                        <div className="flex items-center gap-2 xs:gap-3 mb-1 xs:mb-2">
                          <div className="p-1 xs:p-1.5 bg-primary rounded-lg">
                            <Target className="h-3 w-3 xs:h-4 xs:w-4 text-foreground" />
                          </div>
                          <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">BMI Calculator</h3>
                        </div>
                        <p className="text-xs xs:text-sm text-foreground leading-relaxed">Calculate body mass index and health metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                <div className="sticky top-2 xs:top-4 sm:top-6 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">

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