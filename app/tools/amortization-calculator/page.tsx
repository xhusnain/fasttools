import { Metadata } from "next"
import AmortizationCalculator from "@/components/amortization-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Amortization Calculator | Free Online Loan Payment Calculator | Mortgage Calculator | FastTools",
  description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate - from low-rate mortgages to high-risk loans and payday loans.",
  keywords: [
    "amortization calculator",
    "loan calculator",
    "mortgage calculator",
    "payment calculator",
    "loan amortization",
    "mortgage amortization",
    "loan payment calculator",
    "mortgage payment calculator",
    "auto loan calculator",
    "personal loan calculator",
    "amortization schedule",
    "loan schedule",
    "mortgage schedule",
    "payment schedule",
    "interest calculator",
    "principal calculator",
    "loan analysis",
    "mortgage analysis",
    "payment analysis",
    "loan planning",
    "mortgage planning",
    "debt planning",
    "loan optimization",
    "mortgage optimization",
    "payment optimization",
    "extra payment calculator",
    "biweekly payment calculator",
    "loan payoff calculator",
    "mortgage payoff calculator",
    "debt payoff calculator",
    "loan comparison",
    "mortgage comparison",
    "payment comparison",
    "loan refinancing",
    "mortgage refinancing",
    "refinancing calculator",
    "loan consolidation",
    "debt consolidation",
    "loan management",
    "mortgage management",
    "debt management",
    "financial planning",
    "loan planning",
    "mortgage planning",
    "debt planning",
    "loan strategy",
    "mortgage strategy",
    "payment strategy",
    "loan advice",
    "mortgage advice",
    "financial advice",
    "loan tips",
    "mortgage tips",
    "payment tips",
    "loan help",
    "mortgage help",
    "financial help",
    "loan guide",
    "mortgage guide",
    "payment guide",
    "loan tutorial",
    "mortgage tutorial",
    "payment tutorial",
    "loan education",
    "mortgage education",
    "financial education",
    "loan knowledge",
    "mortgage knowledge",
    "financial knowledge",
    "loan information",
    "mortgage information",
    "financial information",
    "loan resources",
    "mortgage resources",
    "financial resources",
    "loan tools",
    "mortgage tools",
    "financial tools",
    "loan software",
    "mortgage software",
    "financial software",
    "loan app",
    "mortgage app",
    "financial app",
    "loan website",
    "mortgage website",
    "financial website",
    "loan online",
    "mortgage online",
    "financial online",
    "loan free",
    "mortgage free",
    "financial free",
    "loan accurate",
    "mortgage accurate",
    "financial accurate",
    "loan professional",
    "mortgage professional",
    "financial professional",
    "loan advanced",
    "mortgage advanced",
    "financial advanced",
    "loan comprehensive",
    "mortgage comprehensive",
    "financial comprehensive",
    "loan detailed",
    "mortgage detailed",
    "financial detailed",
    "loan complete",
    "mortgage complete",
    "financial complete",
    "loan full",
    "mortgage full",
    "financial full",
    "loan total",
    "mortgage total",
    "financial total",
    "loan entire",
    "mortgage entire",
    "financial entire",
    "loan whole",
    "mortgage whole",
    "financial whole",
    "loan complete",
    "mortgage complete",
    "financial complete",
    "loan comprehensive",
    "mortgage comprehensive",
    "financial comprehensive",
    "loan detailed",
    "mortgage detailed",
    "financial detailed",
    "loan thorough",
    "mortgage thorough",
    "financial thorough",
    "loan extensive",
    "mortgage extensive",
    "financial extensive"
  ],
  openGraph: {
    title: "Amortization Calculator | Free Online Loan Payment Calculator | Mortgage Calculator | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate - from low-rate mortgages to high-risk loans and payday loans.",
    type: "website",
    url: "https://fasttools.store/tools/amortization-calculator",
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
    title: "Amortization Calculator | Free Online Loan Payment Calculator | Mortgage Calculator | FastTools",
    description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate - from low-rate mortgages to high-risk loans and payday loans.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/amortization-calculator"
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
          name: "Amortization Calculator",
          description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate - from low-rate mortgages to high-risk loans and payday loans.",
          url: "https://fasttools.store/tools/amortization-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Monthly payment calculations",
            "Amortization schedules",
            "Extra payment analysis",
            "Interest and principal breakdowns",
            "Payment optimization",
            "Loan comparison tools",
            "Refinancing analysis",
            "Debt reduction strategies"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Amortization Calculator - Professional Loan Analysis
          </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for loans of any amount and interest rate - from low-rate mortgages to high-risk loans and payday loans.
            </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <AmortizationCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Amortization Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Enter Loan Details</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Loan Amount:</strong> Total amount borrowed</li>
                      <li><strong>Loan Term:</strong> Number of years for repayment</li>
                      <li><strong>Interest Rate:</strong> Annual interest rate percentage</li>
                      <li><strong>Extra Payment:</strong> Additional monthly payment (optional)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Review Results</h3>
                    <p className="text-muted-foreground">Analyze your monthly payment, total interest, and detailed amortization schedule to understand your loan structure.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Optimize Payments</h3>
                    <p className="text-muted-foreground">Use the extra payment analysis and personalized recommendations to optimize your loan strategy.</p>
                  </div>
                </div>
              </div>

              {/* Loan Types Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Types of Loans</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Mortgage Loans</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Conventional mortgages</li>
                        <li>• FHA loans</li>
                        <li>• VA loans</li>
                        <li>• Jumbo loans</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Auto Loans</h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• New car loans</li>
                        <li>• Used car loans</li>
                        <li>• Refinancing loans</li>
                        <li>• Lease buyouts</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Personal Loans</h3>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Debt consolidation</li>
                        <li>• Home improvement</li>
                        <li>• Medical expenses</li>
                        <li>• Education costs</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Business Loans</h3>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
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
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Payment Strategies</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Extra Payments</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Round up monthly payments</li>
                        <li>• Make bi-weekly payments</li>
                        <li>• Use windfalls for extra payments</li>
                        <li>• Apply bonuses to principal</li>
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
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Debt Consolidation</h3>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Combine multiple debts</li>
                        <li>• Lower overall interest rate</li>
                        <li>• Simplify payments</li>
                        <li>• Improve credit score</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Budget Optimization</h3>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Create detailed budget</li>
                        <li>• Identify extra payment opportunities</li>
                        <li>• Track progress monthly</li>
                        <li>• Celebrate milestones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate are the amortization calculations?</h3>
                    <p className="text-muted-foreground">
                      Our calculator uses industry-standard amortization formulas and provides highly accurate results suitable for financial planning and loan analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between principal and interest?</h3>
                    <p className="text-muted-foreground">
                      Principal is the amount you borrowed, while interest is the cost of borrowing. Early in the loan, most payments go toward interest. Later, more goes toward principal.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do extra payments affect my loan?</h3>
                    <p className="text-muted-foreground">
                      Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term significantly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Should I make extra payments or invest the money?</h3>
                    <p className="text-muted-foreground">
                      Compare your loan interest rate to potential investment returns. If you can earn more investing than your loan rate, investing may be better. Otherwise, pay down the loan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between bi-weekly and monthly payments?</h3>
                    <p className="text-muted-foreground">
                      Bi-weekly payments (every two weeks) result in 26 payments per year instead of 12, which can save significant interest and pay off your loan faster.
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
