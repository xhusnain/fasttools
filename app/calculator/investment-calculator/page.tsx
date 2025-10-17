import { Metadata } from "next"
import InvestmentCalculator from "@/components/investment-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Investment Calculator | Free Online Investment Analysis | Portfolio Planning | FastTools",
  description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.",
  keywords: [
    "investment calculator",
    "portfolio calculator",
    "investment analysis",
    "return rate calculator",
    "compound interest calculator",
    "investment planning",
    "portfolio planning",
    "investment calculator",
    "portfolio calculator",
    "investment analysis",
    "return rate",
    "compound interest",
    "investment planning",
    "portfolio planning",
    "investment computation",
    "portfolio computation",
    "investment analysis computation",
    "return rate computation",
    "compound interest computation",
    "investment planning computation",
    "portfolio planning computation",
    "investment calculation",
    "portfolio calculation",
    "investment analysis calculation",
    "return rate calculation",
    "compound interest calculation",
    "investment planning calculation",
    "portfolio planning calculation",
    "investment evaluation",
    "portfolio evaluation",
    "investment analysis evaluation",
    "return rate evaluation",
    "compound interest evaluation",
    "investment planning evaluation",
    "portfolio planning evaluation",
    "investment assessment",
    "portfolio assessment",
    "investment analysis assessment",
    "return rate assessment",
    "compound interest assessment",
    "investment planning assessment",
    "portfolio planning assessment",
    "investment tool",
    "portfolio tool",
    "investment analysis tool",
    "return rate tool",
    "compound interest tool",
    "investment planning tool",
    "portfolio planning tool",
    "investment calculator tool",
    "portfolio calculator tool",
    "investment analysis calculator tool",
    "return rate calculator tool",
    "compound interest calculator tool",
    "investment planning calculator tool",
    "portfolio planning calculator tool",
    "investment calculator app",
    "portfolio calculator app",
    "investment analysis calculator app",
    "return rate calculator app",
    "compound interest calculator app",
    "investment planning calculator app",
    "portfolio planning calculator app",
    "investment calculator website",
    "portfolio calculator website",
    "investment analysis calculator website",
    "return rate calculator website",
    "compound interest calculator website",
    "investment planning calculator website",
    "portfolio planning calculator website",
    "investment calculator online",
    "portfolio calculator online",
    "investment analysis calculator online",
    "return rate calculator online",
    "compound interest calculator online",
    "investment planning calculator online",
    "portfolio planning calculator online",
    "investment calculator free",
    "portfolio calculator free",
    "investment analysis calculator free",
    "return rate calculator free",
    "compound interest calculator free",
    "investment planning calculator free",
    "portfolio planning calculator free",
    "investment calculator accurate",
    "portfolio calculator accurate",
    "investment analysis calculator accurate",
    "return rate calculator accurate",
    "compound interest calculator accurate",
    "investment planning calculator accurate",
    "portfolio planning calculator accurate",
    "investment calculator professional",
    "portfolio calculator professional",
    "investment analysis calculator professional",
    "return rate calculator professional",
    "compound interest calculator professional",
    "investment planning calculator professional",
    "portfolio planning calculator professional",
    "investment calculator advanced",
    "portfolio calculator advanced",
    "investment analysis calculator advanced",
    "return rate calculator advanced",
    "compound interest calculator advanced",
    "investment planning calculator advanced",
    "portfolio planning calculator advanced",
    "investment calculator comprehensive",
    "portfolio calculator comprehensive",
    "investment analysis calculator comprehensive",
    "return rate calculator comprehensive",
    "compound interest calculator comprehensive",
    "investment planning calculator comprehensive",
    "portfolio planning calculator comprehensive",
    "investment calculator detailed",
    "portfolio calculator detailed",
    "investment analysis calculator detailed",
    "return rate calculator detailed",
    "compound interest calculator detailed",
    "investment planning calculator detailed",
    "portfolio planning calculator detailed",
    "investment calculator complete",
    "portfolio calculator complete",
    "investment analysis calculator complete",
    "return rate calculator complete",
    "compound interest calculator complete",
    "investment planning calculator complete",
    "portfolio planning calculator complete",
    "investment calculator full",
    "portfolio calculator full",
    "investment analysis calculator full",
    "return rate calculator full",
    "compound interest calculator full",
    "investment planning calculator full",
    "portfolio planning calculator full",
    "investment calculator total",
    "portfolio calculator total",
    "investment analysis calculator total",
    "return rate calculator total",
    "compound interest calculator total",
    "investment planning calculator total",
    "portfolio planning calculator total",
    "investment calculator entire",
    "portfolio calculator entire",
    "investment analysis calculator entire",
    "return rate calculator entire",
    "compound interest calculator entire",
    "investment planning calculator entire",
    "portfolio planning calculator entire",
    "investment calculator whole",
    "portfolio calculator whole",
    "investment analysis calculator whole",
    "return rate calculator whole",
    "compound interest calculator whole",
    "investment planning calculator whole",
    "portfolio planning calculator whole",
    "investment calculator complete",
    "portfolio calculator complete",
    "investment analysis calculator complete",
    "return rate calculator complete",
    "compound interest calculator complete",
    "investment planning calculator complete",
    "portfolio planning calculator complete",
    "investment calculator comprehensive",
    "portfolio calculator comprehensive",
    "investment analysis calculator comprehensive",
    "return rate calculator comprehensive",
    "compound interest calculator comprehensive",
    "investment planning calculator comprehensive",
    "portfolio planning calculator comprehensive",
    "investment calculator detailed",
    "portfolio calculator detailed",
    "investment analysis calculator detailed",
    "return rate calculator detailed",
    "compound interest calculator detailed",
    "investment planning calculator detailed",
    "portfolio planning calculator detailed",
    "investment calculator thorough",
    "portfolio calculator thorough",
    "investment analysis calculator thorough",
    "return rate calculator thorough",
    "compound interest calculator thorough",
    "investment planning calculator thorough",
    "portfolio planning calculator thorough",
    "investment calculator extensive",
    "portfolio calculator extensive",
    "investment analysis calculator extensive",
    "return rate calculator extensive",
    "compound interest calculator extensive",
    "investment planning calculator extensive",
    "portfolio planning calculator extensive"
  ],
  openGraph: {
    title: "Investment Calculator | Free Online Investment Analysis | Portfolio Planning | FastTools",
    description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.",
    type: "website",
    url: "https://fasttools.store/calculator/investment-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Investment Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Calculator | Free Online Investment Analysis | Portfolio Planning | FastTools",
    description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/investment-calculator"
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

export default function InvestmentCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Investment Calculator",
          description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.",
          url: "https://fasttools.store/calculator/investment-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Multiple calculation modes",
            "Compound interest calculations",
            "Investment accumulation schedules",
            "Portfolio analysis",
            "Return rate calculations",
            "Investment scenario comparisons",
            "Professional recommendations",
            "Risk management strategies"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Investment Calculator - Professional Portfolio Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <InvestmentCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Investment Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Choose Calculation Type</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>End Amount:</strong> Calculate future value of your investment</li>
                      <li><strong>Return Rate:</strong> Find required return rate for your goal</li>
                      <li><strong>Starting Amount:</strong> Calculate initial investment needed</li>
                      <li><strong>Additional Contribution:</strong> Find required regular contributions</li>
                      <li><strong>Investment Length:</strong> Calculate time needed to reach goal</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Enter Your Data</h3>
                    <p className="text-muted-foreground">Input the known values and leave the field you want to calculate blank. The calculator will solve for the missing variable.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Review Results</h3>
                    <p className="text-muted-foreground">Analyze the calculated value, accumulation schedule, and personalized investment recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Investment Types Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Types of Investments</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Stocks & Equities</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Individual company stocks</li>
                        <li>• Mutual funds and ETFs</li>
                        <li>• Growth and value stocks</li>
                        <li>• Dividend-paying stocks</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Bonds & Fixed Income</h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Government bonds</li>
                        <li>• Corporate bonds</li>
                        <li>• Municipal bonds</li>
                        <li>• Treasury Inflation-Protected Securities (TIPS)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Real Estate</h3>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• Rental properties</li>
                        <li>• Real Estate Investment Trusts (REITs)</li>
                        <li>• Real estate crowdfunding</li>
                        <li>• Commercial real estate</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Alternative Investments</h3>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Commodities (gold, silver, oil)</li>
                        <li>• Cryptocurrency</li>
                        <li>• Private equity</li>
                        <li>• Hedge funds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investment Strategies Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Investment Strategies</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Conservative Strategy</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• 60% Bonds, 40% Stocks</li>
                        <li>• Focus on capital preservation</li>
                        <li>• Lower risk, steady returns</li>
                        <li>• Suitable for near-retirement</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Balanced Strategy</h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• 50% Stocks, 50% Bonds</li>
                        <li>• Moderate risk and return</li>
                        <li>• Diversified portfolio</li>
                        <li>• Suitable for middle-aged investors</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Aggressive Strategy</h3>
                      <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                        <li>• 80% Stocks, 20% Bonds</li>
                        <li>• Higher risk, higher potential returns</li>
                        <li>• Growth-focused approach</li>
                        <li>• Suitable for young investors</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Growth Strategy</h3>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• 90% Stocks, 10% Bonds</li>
                        <li>• Maximum growth potential</li>
                        <li>• High risk tolerance required</li>
                        <li>• Long-term investment horizon</li>
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
                    <h3 className="text-lg font-semibold mb-2">How accurate are the investment calculations?</h3>
                    <p className="text-muted-foreground">
                      Our calculator uses professional-grade financial formulas and compound interest calculations. The results are highly accurate and suitable for investment planning and analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between compound frequencies?</h3>
                    <p className="text-muted-foreground">
                      Compound frequency determines how often interest is calculated and added to your investment. More frequent compounding (daily vs. annually) results in higher returns due to the power of compound interest.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Can I use this for retirement planning?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! This calculator is perfect for retirement planning. Calculate how much you need to save, what return rate to target, or how long it will take to reach your retirement goals.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I choose the right investment strategy?</h3>
                    <p className="text-muted-foreground">
                      Consider your age, risk tolerance, investment timeline, and financial goals. Our calculator provides personalized recommendations based on your inputs to help guide your investment decisions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between contribution timing options?</h3>
                    <p className="text-muted-foreground">
                      "End of Period" means contributions are made at the end of each period, while "Beginning of Period" means contributions are made at the start. Beginning-of-period contributions earn more interest over time.
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
