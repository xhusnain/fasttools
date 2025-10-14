import { PercentageCalculator } from "@/components/percentage-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Percent, Calculator, TrendingUp, TrendingDown, Target, DollarSign, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Plus, CheckCircle, BookOpen, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Percentage Calculator | Free Online Math Tool | FastTools",
  description:
    "Calculate percentages instantly with our advanced percentage calculator. Features: basic percentage, increase/decrease, markup/margin, compound interest, percentage difference. Free online math tool with step-by-step formulas.",
  keywords: [
    "percentage calculator",
    "percent calculator", 
    "percentage formula",
    "calculate percentage",
    "percentage increase calculator",
    "percentage decrease calculator",
    "markup calculator",
    "margin calculator",
    "compound interest calculator",
    "percentage difference calculator",
    "math calculator",
    "free percentage tool",
    "online percentage calculator",
    "percentage math",
    "percentage problems",
    "percentage examples",
    "percentage solutions",
    "percentage calculations",
    "percentage formulas",
    "percentage equations"
  ],
  openGraph: {
    title: "Advanced Percentage Calculator | Free Online Math Tool",
    description: "Calculate percentages instantly with our advanced calculator. Features: basic percentage, increase/decrease, markup/margin, compound interest, percentage difference.",
    type: "website",
    url: "https://fasttools.store/tools/percentage-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Percentage Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Percentage Calculator | Free Online Math Tool",
    description: "Calculate percentages instantly with our advanced calculator. Features: basic percentage, increase/decrease, markup/margin, compound interest.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/percentage-calculator"
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
}

export default function PercentageCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Percentage Calculator", href: "/tools/percentage-calculator" },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Percentage Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate percentages instantly with our comprehensive percentage calculator. Features: basic percentage, increase/decrease, markup/margin, compound interest, percentage difference. Perfect for discounts, tips, grades, statistics, business calculations, and everyday math.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          <div>
            <PercentageCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Recommended</div>
                    <AdSpace slot="content" className="w-full h-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* How to Use Section */}
            <div className="mt-12 space-y-8">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  How to Use Our Advanced Percentage Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">1. Select Calculation Type</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Choose from 7 different percentage calculation types</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">2. Enter Values</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">Input your numbers in the appropriate fields</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">3. Get Results</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">View detailed calculation with formulas</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">4. Copy & Share</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300">Copy results or share calculations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation Types */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Calculator className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  Percentage Calculation Types
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { type: "Basic Percentage", icon: Percent, desc: "Find what percentage of a number is", example: "25% of 1000 = 250" },
                    { type: "Percentage Increase", icon: TrendingUp, desc: "Calculate increase by percentage", example: "1000 + 10% = 1100" },
                    { type: "Percentage Decrease", icon: TrendingDown, desc: "Calculate decrease by percentage", example: "1000 - 10% = 900" },
                    { type: "Percentage Difference", icon: Target, desc: "Find difference between two values", example: "Difference between 100 and 120 = 18.18%" },
                    { type: "Markup Calculation", icon: DollarSign, desc: "Calculate selling price with markup", example: "Cost $100 + 25% markup = $125" },
                    { type: "Margin Calculation", icon: BarChart3, desc: "Calculate cost from selling price", example: "Selling $125 - 20% margin = $100" },
                    { type: "Compound Interest", icon: PieChart, desc: "Calculate compound interest", example: "$1000 at 5% for 3 years = $1157.63" }
                  ].map(({ type, icon: Icon, desc, example }) => (
                    <div key={type} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">{type}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{desc}</p>
                      <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Use Cases */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  Common Use Cases for Percentage Calculator
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Business & Finance</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calculate discounts and sales prices</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Determine markup and profit margins</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calculate tax rates and tips</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Analyze growth rates and trends</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Education & Statistics</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calculate test scores and grades</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Analyze survey results</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calculate compound interest</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Compare data sets and changes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is the difference between markup and margin?",
                      a: "Markup is calculated on cost price (Cost × Markup% = Selling Price), while margin is calculated on selling price (Selling Price × Margin% = Cost)."
                    },
                    {
                      q: "How do I calculate percentage increase?",
                      a: "Use the formula: ((New Value - Original Value) / Original Value) × 100. Our calculator does this automatically."
                    },
                    {
                      q: "What is compound interest?",
                      a: "Compound interest is interest calculated on the initial principal and accumulated interest from previous periods. Formula: A = P(1 + r/n)^(nt)."
                    },
                    {
                      q: "How accurate are the calculations?",
                      a: "Our calculator uses precise mathematical formulas and provides results accurate to 2 decimal places for most calculations."
                    }
                  ].map(({ q, a }, index) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                      <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{q}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Sticky Sidebar Container */}
            <div className="sticky top-4 space-y-6">
              {/* Top Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* Percentage Tips */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Percent className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Percentage Tips</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Quick Calculations</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">10% = divide by 10, 25% = divide by 4</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Business Use</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Markup vs Margin calculations</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Compound Interest</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">A = P(1 + r/n)^(nt)</div>
                  </div>
                </div>
              </div>

              {/* Math Formulas */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <Calculator className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Key Formulas</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Basic %</span>
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">P% × V = Result</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-green-800 dark:text-green-200">Increase</span>
                    </div>
                    <div className="text-xs text-green-700 dark:text-green-300">V + (V × P%) = New</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Difference</span>
                    </div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">|V1-V2|/Avg × 100</div>
                  </div>
                </div>
              </div>

              {/* Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Recommended</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
