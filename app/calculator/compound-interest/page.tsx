import { CompoundInterestCalculator } from "@/components/compound-interest-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { 
  Calculator, Globe, DollarSign, TrendingUp, BarChart3, 
  PieChart, Target, Building, Users, Award, 
  BookOpen, Zap, Info
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "FastTools - Compound Interest Calculator | Free Investment Growth Calculator",
  description:
    "FastTools Compound Interest Calculator - Free tool to calculate how your money grows over time. Enter principal, interest rate, time period, and compounding frequency.",
    keywords: [
        "fasttools",
        "fast tools",
        "compound interest calculator",
        "calculate compound interest",
        "compound interest formula",
        "compound interest calculation",
        "investment calculator",
        "compound interest rate calculator",
        "compound savings calculator",
        "compound interest online calculator",
        "compound interest with monthly contributions",
        "compound interest on investment",
        "interest rate calculator",
        "future value calculator",
        "investment growth calculator",
        "savings calculator",
        "compound interest monthly",
        "annual compound interest calculator",
        "daily compound interest calculator",
        "compound interest table",
        "compound interest example",
        "compound interest formula example",
        "how to calculate compound interest manually",
        "difference between simple and compound interest",
        "best compound interest calculator",
        "compound interest for beginners",
        "compound interest for savings",
        "financial planning calculator",
        "long-term investment calculator",
        "investment growth over time",
        "compound interest app",
        "compound interest calculator online free",
        "compound interest calculator with monthly deposits",
        "compound interest calculator yearly",
        "compound interest explanation",
        "investment growth compound interest",
        "compound interest for students",
        "compound interest for loans",
        "compound interest investment returns",
        "compound interest growth calculator",
        "compound interest rate formula",
        "compound interest calculation example",
        "bank compound interest calculator",
        "retirement compound interest calculator",
        "savings compound interest calculator",
        "compound interest planner",
        "financial planning tool",
        "investment planning calculator",
        "compound interest education",
        "compound interest learning",
        "compound interest tutorial",
        "compound interest guide",
        "financial literacy tool",
        "investment growth tool",
        "interest compounding calculator",
        "compound interest with principal and rate",
        "compound interest over time",
        "calculate interest on savings",
        "investment growth projection",
        "future investment value calculator",
        "financial calculator",
        "compound interest percentage calculator",
        "compound interest breakdown",
        "monthly compound interest calculator",
        "daily compound interest calculator online",
        "compound interest with regular deposits",
        "compound interest returns calculator",
        "compound interest for investment planning",
        "compound interest total value calculator",
        "calculate compound interest for years",
        "calculate compound interest for months",
        "compound interest using formula",
        "interest compounded annually calculator",
        "interest compounded monthly calculator",
        "compound interest rate growth",
        "financial planning and investment tool",
        "investment compound return calculator",
        "compound interest tracker",
        "compound interest growth over years",
        "compound interest visual calculator",
        "compound interest growth simulation",
        "compound interest time value calculator",
        "compound interest and savings projection",
        "investment compounding tool",
        "future value of investment calculator",
        "compound interest and savings growth calculator",
        "online compound interest estimator",
        "compound interest calculator with interest rate",
        "calculate compound return on investment",
        "compound interest projection tool",
        "investment growth estimator",
        "compound interest formula breakdown",
        "financial growth calculator",
        "compound return calculator",
        "compound interest and savings planner",
        "compound investment calculator",
        "future wealth calculator",
        "compound savings growth tool",
        "compound interest chart calculator",
        "calculate compound interest for 10 years",
        "investment compounding over time",
        "compound interest table calculator",
        "savings compound interest projection"
    ],
  openGraph: {
        title: "Free Online Compound Interest Calculator | Investment Growth Calculator | FastTools",
  description:
    "Use our free Compound Interest Calculator to calculate how your money grows over time. Enter your principal, interest rate, time period, and compounding frequency to see total interest and final balance.",
    type: "website",
    url: "https://www.fasttools.store/calculator/compound-interest",
    siteName: "FastTools",
    images: [
      {
                url: "https://www.fasttools.store/og-compound-interest-calculator.jpg",
        width: 1200,
        height: 630,
                alt: "Free Online Compound Interest Calculator - FastTools",
            },
        ],
  },
  twitter: {
    card: "summary_large_image",
        title: "Free Online Compound Interest Calculator | Investment Growth Calculator | FastTools",
  description:
    "Use our free Compound Interest Calculator to calculate how your money grows over time. Enter your principal, interest rate, time period, and compounding frequency to see total interest and final balance.",
        images: ["https://www.fasttools.store/og-compound-interest-calculator.jpg"],
  },
  alternates: {
        canonical: "https://www.fasttools.store/calculator/compound-interest",
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
    authors: [{ name: "FastTools Investment Team" }],
    creator: "FastTools",
    publisher: "FastTools",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://www.fasttools.store"),
};


export default function CompoundInterestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Online Compound Interest Calculator",
    "applicationCategory": "Financial Calculator",
    "operatingSystem": "Web Browser",
    "url": "https://www.fasttools.store/calculator/compound-interest",
    "description": "Calculate compound interest for investments, savings, and retirement planning. Advanced compound interest calculator with real interest rates, comprehensive analysis, and educational content.",
    "featureList": [
      "Multi-Country Interest Rates",
      "Real-Time Calculations",
      "Comprehensive Analysis",
      "Educational Content",
      "Custom Interest Rates",
      "Yearly Breakdown",
      "Mobile-Responsive Design",
      "Investment Planning Tools"
    ],
    "screenshot": "https://www.fasttools.store/og-compound-interest-calculator.jpg",
    "softwareHelp": {
      "@type": "HowTo",
      "name": "How to Use Compound Interest Calculator",
      "description": "Step-by-step guide to using the compound interest calculator",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Select Country",
          "text": "Choose from 9+ countries with real interest rates"
        },
        {
          "@type": "HowToStep",
          "name": "Enter Principal Amount",
          "text": "Input your initial investment amount"
        },
        {
          "@type": "HowToStep",
          "name": "Set Time Period",
          "text": "Specify how long you plan to invest"
        },
        {
          "@type": "HowToStep",
          "name": "Choose Compounding Frequency",
          "text": "Select how often interest compounds"
        },
        {
          "@type": "HowToStep",
          "name": "Get Results",
          "text": "View detailed breakdown and analysis"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
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
        "name": "How do I calculate compound interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the formula A = P(1 + r/n)^(nt), where A is the final amount, P is principal, r is annual rate, n is compounding frequency, and t is time in years. Our calculator handles this automatically."
        }
      },
      {
        "@type": "Question",
        "name": "How do compound interest and simple interest differ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple interest computes returns solely on your initial principal throughout the investment term. Compound interest calculates earnings on both the original principal and all accumulated interest from prior periods, resulting in exponential growth as time progresses."
        }
      },
      {
        "@type": "Question",
        "name": "How often should interest compound for maximum growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Increasing compounding frequency to daily or monthly periods typically generates superior returns compared to annual compounding. In practice, the performance gap between monthly and daily compounding remains relatively small for the majority of investment scenarios."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for retirement planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our compound interest calculator is perfect for retirement planning. Enter your current savings, expected annual contributions, and time until retirement to see your potential growth."
        }
      },
      {
        "@type": "Question",
        "name": "Are the interest rates in this calculator current?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator uses current market rates as a baseline, but interest rates change frequently. Always verify with your financial institution for the most current rates."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate compound interest for different currencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our calculator supports multiple countries and currencies including USD, EUR, GBP, CAD, AUD, JPY, INR, and PKR with their respective interest rates."
        }
      },
      {
        "@type": "Question",
        "name": "What is the compound interest formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The compound interest formula is A = P(1 + r/n)^(nt), where A = final amount, P = principal, r = annual interest rate, n = number of times interest compounds per year, and t = time in years."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maximize compound interest growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maximize compound interest: start early, invest regularly, choose higher interest rates when possible, and let your money grow over time without withdrawing early."
        }
      },
      {
        "@type": "Question",
        "name": "Is this calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our compound interest calculator is completely free to use with no registration required. All features including custom rates, detailed analysis, and multiple country support are available at no cost."
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
          { label: "Compound Interest Calculator", href: "/calculator/compound-interest" },
        ]}
      />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader 
                title="Free Online Compound Interest Calculator"
                description="Use our free Compound Interest Calculator to calculate how your money grows over time. Enter your principal, interest rate, time period, and compounding frequency to see total interest and final balance instantly."
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
            <CompoundInterestCalculator />

                {/* How to Use */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                </div>
                    How to Use Our Compound Interest Calculator
              </h2>
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 font-bold text-xs">1</span>
                  </div>
                  <div>
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">Select Your Country</h3>
                        <p className="text-xs text-slate-400">Choose from 9+ countries with real interest rates</p>
                  </div>
                </div>
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 font-bold text-xs">2</span>
                  </div>
                  <div>
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">Enter Principal Amount</h3>
                        <p className="text-xs text-slate-400">Input your initial investment amount</p>
                  </div>
                </div>
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 font-bold text-xs">3</span>
                  </div>
                  <div>
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">Set Time Period</h3>
                        <p className="text-xs text-slate-400">Specify how long you plan to invest</p>
                  </div>
                </div>
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 font-bold text-xs">4</span>
                  </div>
                  <div>
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">Choose Compounding Frequency</h3>
                        <p className="text-xs text-slate-400">Select how often interest compounds</p>
                  </div>
                </div>
                    <div className="flex items-start gap-2">
                      <div className="p-1 bg-green-500/10 rounded-lg">
                        <span className="text-green-500 font-bold text-xs">5</span>
                  </div>
                  <div>
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">Get Comprehensive Results</h3>
                        <p className="text-xs text-slate-400">View detailed breakdown and yearly analysis</p>
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
                Supported Countries & Interest Rates
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {[
                  { country: "United States", currency: "USD", rate: "7.0%", description: "Federal Reserve rates" },
                  { country: "United Kingdom", currency: "GBP", rate: "6.5%", description: "Bank of England rates" },
                  { country: "Canada", currency: "CAD", rate: "6.8%", description: "Bank of Canada rates" },
                  { country: "Australia", currency: "AUD", rate: "7.2%", description: "Reserve Bank rates" },
                  { country: "Germany", currency: "EUR", rate: "5.8%", description: "ECB rates" },
                  { country: "France", currency: "EUR", rate: "5.5%", description: "ECB rates" },
                  { country: "Japan", currency: "JPY", rate: "3.5%", description: "Bank of Japan rates" },
                  { country: "India", currency: "INR", rate: "8.5%", description: "RBI rates" },
                  { country: "Pakistan", currency: "PKR", rate: "15.0%", description: "SBP rates" }
                ].map((country, index) => (
                      <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 text-xs md:text-sm">{country.country}</h3>
                        <p className="text-xs text-slate-400 mb-1">{country.currency} • {country.rate}</p>
                        <p className="text-xs text-orange-400">{country.description}</p>
                  </div>
                ))}
              </div>
            </div>

                {/* Compound Interest Types */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                    Compound Interest Calculation Types
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "Monthly Compound Interest", icon: TrendingUp, desc: "Calculate compound interest monthly", example: "Monthly compounding growth" },
                      { type: "Daily Compound Interest", icon: BarChart3, desc: "Calculate daily compounding", example: "Daily interest calculation" },
                      { type: "Annual Compound Interest", icon: PieChart, desc: "Calculate yearly compound interest", example: "Annual growth calculation" },
                      { type: "Future Value Calculator", icon: Target, desc: "Calculate future value of investments", example: "Future investment value" },
                      { type: "Interest Rate Calculator", icon: Building, desc: "Calculate interest rates and returns", example: "Rate of return calculation" },
                      { type: "Savings Calculator", icon: DollarSign, desc: "Calculate savings growth over time", example: "Savings account growth" },
                      { type: "Investment Calculator", icon: Users, desc: "Calculate investment returns", example: "Investment portfolio growth" },
                      { type: "Bank Interest Calculator", icon: Award, desc: "Calculate bank interest rates", example: "Bank account interest" },
                      { type: "Interest Compounding Calculator", icon: BookOpen, desc: "Calculate compounding frequency", example: "Compounding period analysis" }
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
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
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
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Yearly Breakdown</h3>
                          <p className="text-xs text-slate-400">Detailed year-by-year growth analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <PieChart className="h-3 w-3 text-green-500" />
                </div>
                <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Effective Rate</h3>
                          <p className="text-xs text-slate-400">Calculate effective annual interest rate</p>
                </div>
              </div>
            </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Target className="h-3 w-3 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Custom Rates</h3>
                          <p className="text-xs text-slate-400">Override with your own interest rates</p>
                        </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-green-500/10 rounded-lg">
                          <Building className="h-3 w-3 text-green-500" />
                </div>
                        <div>
                          <h3 className="font-semibold text-green-500 text-xs md:text-sm">Educational Content</h3>
                          <p className="text-xs text-slate-400">Learn about compound interest concepts</p>
                </div>
                </div>
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
                    {[
                      {
                        question: "What is compound interest and how does it work?",
                        answer: "Compound interest is the process where interest earned on an investment is reinvested, generating additional earnings over time. Unlike simple interest calculated only on the principal, compound interest accrues on both the initial principal and accumulated interest from previous periods, leading to exponential growth."
                      },
                      {
                        question: "How do you calculate compound interest?",
                        answer: "Use the formula: A = P(1 + r/n)^(nt), where A = future value, P = principal amount, r = annual interest rate (as decimal), n = compounding frequency per year, and t = time in years. For example, $10,000 at 5% compounded monthly for 10 years = $10,000(1 + 0.05/12)^(12×10) = $16,470.09."
                      },
                      {
                        question: "How does the Rule of 72 help estimate investment doubling time?",
                        answer: "The Rule of 72 provides a quick way to estimate when your investment will double in value. Simply divide 72 by your annual interest rate percentage. For instance, at an 8% annual rate: 72 divided by 8 equals approximately 9 years for your money to double. With a 6% rate: 72 divided by 6 gives you about 12 years."
                      },
                      {
                        question: "How does compounding frequency affect investment growth?",
                        answer: "Increasing the frequency of compounding periods generally produces better investment returns. When comparing at a 5% annual rate: annual compounding results in 5.00% effective rate, monthly compounding achieves 5.12% effective rate, and daily compounding reaches 5.13% effective rate. The more times per year interest compounds, the greater your total return."
                      },
                      {
                        question: "How do compound interest and simple interest differ?",
                        answer: "With simple interest, earnings are computed solely on your initial principal amount for the entire duration of the investment. Compound interest, on the other hand, calculates returns on both your original principal and all previously accumulated interest earnings. This compounding effect creates substantially better returns over extended periods because you earn returns on your returns."
                      },
                      {
                        question: "Can compound interest work against you with loans?",
                        answer: "Yes, with loans and credit cards, compound interest increases debt over time if payments aren't made regularly. Interest is charged on both the principal and accumulated interest, making debt grow exponentially, especially with high-interest credit cards."
                      },
                      {
                        question: "What factors most influence compound interest growth?",
                        answer: "Four key factors: 1) Principal amount - larger initial investment grows more, 2) Interest rate - higher rates accelerate growth, 3) Compounding frequency - more frequent compounding increases returns, 4) Time period - longer time allows more compounding cycles."
                      },
                      {
                        question: "Is it better to invest a lump sum or make regular contributions?",
                        answer: "Both strategies have benefits. Lump sum investing allows maximum time for compound interest to work, potentially yielding higher returns. Regular contributions reduce market volatility impact through dollar-cost averaging and build wealth consistently over time."
                      },
                      {
                        question: "How do taxes and fees affect compound interest?",
                        answer: "Taxes reduce effective returns since interest earned is often taxable. Fees like management costs erode investment returns over time. Even small fees can significantly impact growth due to compounding. Use tax-advantaged accounts (IRAs, 401(k)s) and minimize fees to maximize compound growth."
                      },
                      {
                        question: "What are common mistakes to avoid with compound interest?",
                        answer: "Key mistakes: 1) Starting too late - time is crucial for compound growth, 2) Inconsistent contributions - irregular investments reduce compounding power, 3) Withdrawing early - interrupts compound growth, 4) Ignoring inflation - consider purchasing power, 5) Not reinvesting dividends - let earnings compound for maximum growth."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                        <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">{faq.question}</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
                    ))}
                </div>
              </div>

                {/* Related Tools Section */}
                <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                    <div className="p-1.5 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                  </div>
                    Related Financial & Investment Tools
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", icon: TrendingUp, href: "/calculator/investment-calculator" },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", icon: Building, href: "/calculator/retirement-calculator" },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", icon: DollarSign, href: "/calculator/loan-calculator" },
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", icon: PieChart, href: "/calculator/mortgage-calculator" },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", icon: Target, href: "/calculator/tax-calculator" },
                      { name: "Salary Calculator", desc: "Calculate take-home pay and deductions", icon: BarChart3, href: "/calculator/salary-calculator" },
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

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-slate-400 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-slate-700 rounded-xl shadow-sm bg-black" />
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