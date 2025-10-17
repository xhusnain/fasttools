import { Metadata } from "next"
import MortgageCalculator from "@/components/mortgage-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Mortgage Calculator | Free Online Home Loan Calculator | EMI Calculator | FastTools",
  description: "Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.",
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "mortgage payment calculator",
    "house loan calculator",
    "mortgage calculator online",
    "home loan calculator online",
    "mortgage payment calculator online",
    "house loan calculator online",
    "mortgage calculator free",
    "home loan calculator free",
    "mortgage payment calculator free",
    "house loan calculator free",
    "mortgage calculator accurate",
    "home loan calculator accurate",
    "mortgage payment calculator accurate",
    "house loan calculator accurate",
    "mortgage calculator professional",
    "home loan calculator professional",
    "mortgage payment calculator professional",
    "house loan calculator professional",
    "mortgage calculator advanced",
    "home loan calculator advanced",
    "mortgage payment calculator advanced",
    "house loan calculator advanced",
    "mortgage calculator comprehensive",
    "home loan calculator comprehensive",
    "mortgage payment calculator comprehensive",
    "house loan calculator comprehensive",
    "mortgage calculator detailed",
    "home loan calculator detailed",
    "mortgage payment calculator detailed",
    "house loan calculator detailed",
    "mortgage calculator complete",
    "home loan calculator complete",
    "mortgage payment calculator complete",
    "house loan calculator complete",
    "mortgage calculator full",
    "home loan calculator full",
    "mortgage payment calculator full",
    "house loan calculator full",
    "mortgage calculator total",
    "home loan calculator total",
    "mortgage payment calculator total",
    "house loan calculator total",
    "mortgage calculator entire",
    "home loan calculator entire",
    "mortgage payment calculator entire",
    "house loan calculator entire",
    "mortgage calculator whole",
    "home loan calculator whole",
    "mortgage payment calculator whole",
    "house loan calculator whole",
    "mortgage calculator complete",
    "home loan calculator complete",
    "mortgage payment calculator complete",
    "house loan calculator complete",
    "mortgage calculator comprehensive",
    "home loan calculator comprehensive",
    "mortgage payment calculator comprehensive",
    "house loan calculator comprehensive",
    "mortgage calculator detailed",
    "home loan calculator detailed",
    "mortgage payment calculator detailed",
    "house loan calculator detailed",
    "mortgage calculator thorough",
    "home loan calculator thorough",
    "mortgage payment calculator thorough",
    "house loan calculator thorough",
    "mortgage calculator extensive",
    "home loan calculator extensive",
    "mortgage payment calculator extensive",
    "house loan calculator extensive"
  ],
  openGraph: {
    title: "Mortgage Calculator | Free Online Home Loan Calculator | EMI Calculator | FastTools",
    description: "Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.",
    type: "website",
    url: "https://fasttools.store/calculator/mortgage-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Mortgage Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator | Free Online Home Loan Calculator | EMI Calculator | FastTools",
    description: "Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/mortgage-calculator"
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

export default function MortgageCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Mortgage Calculator",
          description: "Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.",
          url: "https://fasttools.store/calculator/mortgage-calculator",
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
            "Property tax calculations",
            "Home insurance costs",
            "PMI calculations",
            "HOA fee calculations",
            "Payment optimization",
            "Scenario comparisons"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Mortgage Calculator - Professional Home Loan Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <MortgageCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Mortgage Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Basic Loan Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Home Price:</strong> The total purchase price of the home</li>
                      <li><strong>Down Payment:</strong> The percentage of home price paid upfront</li>
                      <li><strong>Loan Term:</strong> The number of years to repay the mortgage</li>
                      <li><strong>Interest Rate:</strong> The annual interest rate percentage</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Additional Costs</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Property Taxes:</strong> Annual property tax percentage</li>
                      <li><strong>Home Insurance:</strong> Annual home insurance cost</li>
                      <li><strong>PMI Insurance:</strong> Private mortgage insurance if down payment &lt; 20%</li>
                      <li><strong>HOA Fees:</strong> Homeowners association fees</li>
                      <li><strong>Other Costs:</strong> Additional annual costs like maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mortgage Types Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Types of Mortgages</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Fixed-Rate Mortgages</h3>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                          <li>• Interest rate remains constant</li>
                          <li>• Predictable monthly payments</li>
                          <li>• 15, 20, or 30-year terms</li>
                          <li>• Most common mortgage type</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Adjustable-Rate Mortgages</h3>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                          <li>• Interest rate can change</li>
                          <li>• Lower initial rates</li>
                          <li>• Rate adjustment periods</li>
                          <li>• Rate caps and limits</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Government-Backed Loans</h3>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                          <li>• FHA loans (3.5% down)</li>
                          <li>• VA loans (0% down for veterans)</li>
                          <li>• USDA loans (rural areas)</li>
                          <li>• Lower down payment requirements</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Jumbo Loans</h3>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                          <li>• Higher loan amounts</li>
                          <li>• Stricter qualification requirements</li>
                          <li>• Higher interest rates</li>
                          <li>• For expensive properties</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Strategies Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Mortgage Payment Strategies</h2>
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
                        <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Mortgage Management</h3>
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
                    <h3 className="text-lg font-semibold mb-2">What's included in a mortgage payment?</h3>
                    <p className="text-muted-foreground">
                      A mortgage payment typically includes principal, interest, property taxes, home insurance, and sometimes PMI (Private Mortgage Insurance) and HOA fees.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How much should I put down on a house?</h3>
                    <p className="text-muted-foreground">
                      While 20% down payment is ideal to avoid PMI, you can put down as little as 3-5% with certain loan programs. The higher your down payment, the lower your monthly payment and total interest.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between APR and interest rate?</h3>
                    <p className="text-muted-foreground">
                      The interest rate is the cost of borrowing money, while APR (Annual Percentage Rate) includes additional costs like fees, points, and closing costs. APR provides a more accurate picture of the total cost.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Should I choose a 15-year or 30-year mortgage?</h3>
                    <p className="text-muted-foreground">
                      15-year mortgages have higher monthly payments but lower interest rates and total interest paid. 30-year mortgages have lower monthly payments but higher total interest. Choose based on your budget and financial goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">When should I refinance my mortgage?</h3>
                    <p className="text-muted-foreground">
                      Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money.
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