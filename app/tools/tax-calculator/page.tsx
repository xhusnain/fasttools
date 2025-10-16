import { TaxCalculator } from "@/components/tax-calculator"
import { AdSpace } from "@/components/ad-space"
import { 
  Calculator, Globe, DollarSign, TrendingUp, BarChart3, 
  PieChart, Target, Building, Users, Award, CheckCircle, 
  BookOpen, Zap, Sparkles, AlertTriangle, Info
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Tax Calculator | Multi-Country Income Tax Calculator | FastTools",
  description: "Calculate income tax for 9+ countries with real tax brackets. Advanced tax calculator with social security, additional taxes, and comprehensive breakdown. Free online tax calculator with accurate calculations.",
  keywords: "tax calculator, income tax calculator, multi country tax calculator, salary calculator, tax estimator, net salary calculator, tax brackets, social security calculator, tax breakdown, international tax calculator, US income tax calculator, UK income tax calculator, Canada income tax calculator, Australia income tax calculator, Germany income tax calculator, France income tax calculator, Japan income tax calculator, India income tax calculator, Pakistan income tax calculator, US tax brackets, UK tax brackets, Canada tax brackets, Australia tax brackets, Germany tax brackets, France tax brackets, Japan tax brackets, India tax brackets, Pakistan tax brackets, US federal tax, UK HMRC tax, Canada CRA tax, Australia ATO tax, Germany tax, France tax, Japan tax, India tax, Pakistan FBR tax, progressive tax calculator, marginal tax rate calculator, effective tax rate calculator, take home pay calculator, salary after tax calculator, tax deduction calculator, payroll tax calculator, income tax rates, tax calculation formula, tax planning calculator, financial planning tools",
  openGraph: {
    title: "Advanced Tax Calculator | Multi-Country Income Tax Calculator | FastTools",
    description: "Calculate income tax for 9+ countries with real tax brackets. Advanced tax calculator with social security, additional taxes, and comprehensive breakdown.",
    type: "website",
    url: "https://www.fasttools.store/tools/tax-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Tax Calculator - Multi-Country Income Tax Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Tax Calculator | Multi-Country Income Tax Calculator",
    description: "Calculate income tax for 9+ countries with real tax brackets. Advanced tax calculator with social security, additional taxes, and comprehensive breakdown.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/tools/tax-calculator"
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

export default function TaxCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Tax Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate income tax for 9+ countries with real tax brackets, social security, and additional taxes. 
            Get comprehensive tax breakdown, effective rates, and accurate net salary calculations.
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
          <div className="space-y-8">
            <TaxCalculator />
            
            {/* How to Use Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                How to Use Our Advanced Tax Calculator
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Select Your Country</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Choose from 8+ countries with real tax brackets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Enter Your Salary</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Input your annual gross salary in local currency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Custom Rate (Optional)</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Override with your own tax rate if needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100">Get Results</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">View comprehensive tax breakdown and net salary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported Countries */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                Supported Countries & Tax Systems
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <div key={index} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h3 className="font-semibold text-green-900 dark:text-green-100">{country.country}</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">{country.currency}</p>
                    <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                      {country.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                Advanced Calculation Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Progressive Tax Brackets</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Real tax brackets for each country with accurate calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Building className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Social Security</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Country-specific social security contributions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <PieChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Tax Breakdown</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Detailed breakdown by tax bracket and rate</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100">Custom Rates</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Override with your own tax rate for special cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Info className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Are the tax rates accurate and up-to-date?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Our calculator uses real tax brackets and rates for each country. However, tax laws change frequently, so please verify with your local tax authority for the most current information.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Can I use custom tax rates?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Yes! You can override the default country rates with your own custom tax rate for special circumstances or updated rates.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">What additional taxes are included?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">We include social security, Medicare, National Insurance, and other country-specific additional taxes in our calculations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Is this calculator free to use?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Yes, our advanced tax calculator is completely free to use with no registration required.</p>
                </div>
              </div>
            </div>

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
          </div>

          {/* Sidebar */}
          <div className="sticky top-4 space-y-6">
            {/* Top Sidebar Ad */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
              </div>
              <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
            </div>

            {/* Tax Tips */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <h3 className="text-lg font-semibold text-cyan-900 dark:text-cyan-100 mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Tax Tips
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">Tax rates vary by country and income level</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">Consider additional deductions and credits</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">Verify rates with local tax authority</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2"></div>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">Tax laws change frequently</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
              <h3 className="text-lg font-semibold text-pink-900 dark:text-pink-100 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Key Features
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">8+ Countries Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">Real Tax Brackets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">Social Security Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">Custom Tax Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">Detailed Breakdown</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-pink-600" />
                  <span className="text-sm text-pink-800 dark:text-pink-200">Mobile Responsive</span>
                </div>
              </div>
            </div>

            {/* Bottom Sidebar Ad */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
              </div>
              <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
            </div>
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
