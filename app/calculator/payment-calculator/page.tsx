import { Metadata } from "next"
import PaymentCalculator from "@/components/payment-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Payment Calculator | Free Online Loan Payment Calculator | EMI Calculator | FastTools",
  description: "Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.",
  keywords: [
    "payment calculator",
    "loan payment calculator",
    "emi calculator",
    "monthly payment calculator",
    "loan calculator",
    "payment calculator online",
    "loan payment calculator online",
    "emi calculator online",
    "monthly payment calculator online",
    "loan calculator online",
    "payment calculator free",
    "loan payment calculator free",
    "emi calculator free",
    "monthly payment calculator free",
    "loan calculator free",
    "payment calculator accurate",
    "loan payment calculator accurate",
    "emi calculator accurate",
    "monthly payment calculator accurate",
    "loan calculator accurate",
    "payment calculator professional",
    "loan payment calculator professional",
    "emi calculator professional",
    "monthly payment calculator professional",
    "loan calculator professional",
    "payment calculator advanced",
    "loan payment calculator advanced",
    "emi calculator advanced",
    "monthly payment calculator advanced",
    "loan calculator advanced",
    "payment calculator comprehensive",
    "loan payment calculator comprehensive",
    "emi calculator comprehensive",
    "monthly payment calculator comprehensive",
    "loan calculator comprehensive",
    "payment calculator detailed",
    "loan payment calculator detailed",
    "emi calculator detailed",
    "monthly payment calculator detailed",
    "loan calculator detailed",
    "payment calculator complete",
    "loan payment calculator complete",
    "emi calculator complete",
    "monthly payment calculator complete",
    "loan calculator complete",
    "payment calculator full",
    "loan payment calculator full",
    "emi calculator full",
    "monthly payment calculator full",
    "loan calculator full",
    "payment calculator total",
    "loan payment calculator total",
    "emi calculator total",
    "monthly payment calculator total",
    "loan calculator total",
    "payment calculator entire",
    "loan payment calculator entire",
    "emi calculator entire",
    "monthly payment calculator entire",
    "loan calculator entire",
    "payment calculator whole",
    "loan payment calculator whole",
    "emi calculator whole",
    "monthly payment calculator whole",
    "loan calculator whole",
    "payment calculator complete",
    "loan payment calculator complete",
    "emi calculator complete",
    "monthly payment calculator complete",
    "loan calculator complete",
    "payment calculator comprehensive",
    "loan payment calculator comprehensive",
    "emi calculator comprehensive",
    "monthly payment calculator comprehensive",
    "loan calculator comprehensive",
    "payment calculator detailed",
    "loan payment calculator detailed",
    "emi calculator detailed",
    "monthly payment calculator detailed",
    "loan calculator detailed",
    "payment calculator thorough",
    "loan payment calculator thorough",
    "emi calculator thorough",
    "monthly payment calculator thorough",
    "loan calculator thorough",
    "payment calculator extensive",
    "loan payment calculator extensive",
    "emi calculator extensive",
    "monthly payment calculator extensive",
    "loan calculator extensive"
  ],
  openGraph: {
    title: "Payment Calculator | Free Online Loan Payment Calculator | EMI Calculator | FastTools",
    description: "Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.",
    type: "website",
    url: "https://fasttools.store/calculator/payment-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Payment Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Calculator | Free Online Loan Payment Calculator | EMI Calculator | FastTools",
    description: "Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/payment-calculator"
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

export default function PaymentCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Payment Calculator",
          description: "Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.",
          url: "https://fasttools.store/calculator/payment-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Monthly payment calculations",
            "Loan term calculations",
            "Amortization schedules",
            "Interest rate analysis",
            "Payment optimization",
            "Scenario comparisons",
            "Fixed term calculations",
            "Fixed payment calculations"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Payment Calculator - Professional Loan Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <PaymentCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Payment Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fixed Term Mode</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Enter Loan Amount:</strong> The total amount you want to borrow</li>
                      <li><strong>Enter Loan Term:</strong> The number of years to repay the loan</li>
                      <li><strong>Enter Interest Rate:</strong> The annual interest rate percentage</li>
                      <li><strong>Calculate:</strong> Get your monthly payment and total interest</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fixed Payment Mode</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Enter Loan Amount:</strong> The total amount you want to borrow</li>
                      <li><strong>Enter Monthly Payment:</strong> The amount you can afford to pay monthly</li>
                      <li><strong>Enter Interest Rate:</strong> The annual interest rate percentage</li>
                      <li><strong>Calculate:</strong> See how long it will take to pay off the loan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Loan Types Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Types of Loans</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Mortgages</h3>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Home purchase loans</li>
                          <li>• Refinancing options</li>
                          <li>• Fixed and adjustable rates</li>
                          <li>• 15, 20, or 30-year terms</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Auto Loans</h3>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• New and used car financing</li>
                          <li>• 12 to 96 month terms</li>
                          <li>• Competitive interest rates</li>
                          <li>• Dealer and bank financing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Personal Loans</h3>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• Unsecured personal loans</li>
                          <li>• Debt consolidation</li>
                          <li>• Home improvement</li>
                          <li>• Emergency expenses</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Student Loans</h3>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Federal and private loans</li>
                          <li>• Income-driven repayment</li>
                          <li>• Loan forgiveness programs</li>
                          <li>• Refinancing options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Strategies Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Payment Optimization Strategies</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Extra Payments</h3>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Make one extra payment per year</li>
                          <li>• Round up to the nearest $100</li>
                          <li>• Apply windfalls to principal</li>
                          <li>• Use bi-weekly payment schedule</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refinancing</h3>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Lower interest rates</li>
                          <li>• Shorter loan terms</li>
                          <li>• Cash-out refinancing</li>
                          <li>• Rate and term refinancing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Payment Timing</h3>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• Pay early in the month</li>
                          <li>• Use automatic payments</li>
                          <li>• Consider bi-weekly payments</li>
                          <li>• Pay more frequently</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Loan Management</h3>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Monitor interest rates</li>
                          <li>• Track payment progress</li>
                          <li>• Consider loan consolidation</li>
                          <li>• Review loan terms annually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between interest rate and APR?</h3>
                    <p className="text-muted-foreground">
                      The interest rate is the cost of borrowing the principal amount, while APR (Annual Percentage Rate) includes additional costs like fees, points, and closing costs. APR provides a more accurate picture of the total cost of a loan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Should I choose a shorter or longer loan term?</h3>
                    <p className="text-muted-foreground">
                      Shorter terms typically have lower interest rates and less total interest paid, but higher monthly payments. Longer terms have lower monthly payments but more total interest. Choose based on your budget and financial goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do extra payments affect my loan?</h3>
                    <p className="text-muted-foreground">
                      Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term. Even small extra payments can save thousands in interest over the life of the loan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">When should I refinance my loan?</h3>
                    <p className="text-muted-foreground">
                      Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between fixed and variable rates?</h3>
                    <p className="text-muted-foreground">
                      Fixed rates remain constant throughout the loan term, providing predictable payments. Variable rates can change based on market conditions, potentially offering lower initial rates but with payment uncertainty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
