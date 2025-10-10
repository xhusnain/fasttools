"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdSpace } from "@/components/ad-space"
import { Calculator, Home, Car, CreditCard, GraduationCap, DollarSign, Percent, Clock, Target, TrendingUp, PieChart, BarChart3, Calendar, Users, Star, Globe, Shield, Lightbulb, AlertCircle, Info, CheckCircle, ExternalLink } from "lucide-react"

export default function EMICalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete EMI Calculator Guide | Free EMI Calculation Tools | FastTools",
    description: "Master EMI calculation with our comprehensive guide. Learn EMI formulas, amortization schedules, loan types, and use our free EMI calculator tool for home loans, car loans, and personal loans.",
    author: {
      "@type": "Organization",
      name: "FastTools"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    mainEntity: {
      "@type": "WebApplication",
      name: "EMI Calculator with Amortization Schedule",
      description: "Advanced EMI calculator providing detailed amortization schedules, yearly payment breakdown, and comprehensive loan analysis for all types of loans",
      url: "https://fasttools.store/tools/loan-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      featureList: [
        "Detailed amortization schedule",
        "Yearly and monthly payment breakdown",
        "Multiple loan type support",
        "EMI in arrears and advance calculation",
        "Visual payment analysis",
        "Export and share functionality"
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calculator className="h-4 w-4" />
                  <span>Complete EMI Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                  EMI Calculator Guide
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Master Equated Monthly Installment calculation with our comprehensive guide. Learn EMI formulas, 
                  amortization schedules, loan types, and advanced calculation methods.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Free Calculator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Target className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Accurate Results</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <BarChart3 className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Detailed Schedule</span>
                  </div>
                </div>
              </div>

              {/* Mathematical Calculation Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Calculator className="h-8 w-8 text-blue-600" />
                  How to Calculate EMI Using Math
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">EMI Calculation Formula</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800 dark:bg-slate-700 p-6 rounded-xl border border-slate-600">
                      <h4 className="text-white font-semibold mb-4 text-lg">Standard EMI Formula</h4>
                      <div className="text-white font-mono text-xl mb-4">
                        EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
                      </div>
                      <div className="text-slate-300 space-y-2">
                        <div><strong>P</strong> = Principal Loan Amount</div>
                        <div><strong>r</strong> = Monthly Interest Rate (Annual Rate ÷ 12 ÷ 100)</div>
                        <div><strong>n</strong> = Loan Tenure in Months</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Example Calculation</h4>
                        <div className="space-y-2 text-sm">
                          <div>Loan Amount: ₹50,00,000</div>
                          <div>Interest Rate: 9% per annum</div>
                          <div>Tenure: 20 years (240 months)</div>
                          <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                            <div>Monthly Rate: 9 ÷ 12 ÷ 100 = 0.0075</div>
                            <div>EMI = ₹44,986</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 border border-green-200 dark:border-green-700">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Key Points</h4>
                        <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                          <li>• EMI remains constant throughout loan tenure</li>
                          <li>• Principal component increases over time</li>
                          <li>• Interest component decreases over time</li>
                          <li>• Total interest = (EMI × n) - Principal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Loan Types and Features */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Home className="h-8 w-8 text-green-600" />
                  Types of Loans and EMI Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Home className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">Home Loan EMI</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                      <li>• Tenure: 5-30 years</li>
                      <li>• Interest Rate: 6.5% - 12%</li>
                      <li>• Tax benefits on interest and principal</li>
                      <li>• Prepayment options available</li>
                      <li>• Floating and fixed rate options</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <Car className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800 dark:text-green-200">Car Loan EMI</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li>• Tenure: 1-7 years</li>
                      <li>• Interest Rate: 7% - 15%</li>
                      <li>• EMI in Arrears or Advance</li>
                      <li>• Balloon payment options</li>
                      <li>• Quick approval process</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">Personal Loan EMI</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                      <li>• Tenure: 1-5 years</li>
                      <li>• Interest Rate: 10% - 24%</li>
                      <li>• No collateral required</li>
                      <li>• Quick disbursal</li>
                      <li>• Flexible repayment options</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">Education Loan EMI</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                      <li>• Tenure: 5-15 years</li>
                      <li>• Interest Rate: 6% - 14%</li>
                      <li>• Moratorium period available</li>
                      <li>• Tax benefits on interest</li>
                      <li>• Subsidized rates for meritorious students</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Amortization Schedule Explanation */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                  Understanding Amortization Schedule
                </h2>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">What is Amortization?</h3>
                        <p className="text-purple-700 dark:text-purple-300 mb-4">
                          Amortization is the process of paying off a loan through regular payments over time. 
                          Each payment consists of both principal and interest components.
                        </p>
                        <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg border border-slate-600">
                          <div className="text-white font-mono text-sm">
                            <div>Month 1: Interest = ₹37,500, Principal = ₹7,486</div>
                            <div>Month 120: Interest = ₹22,500, Principal = ₹22,486</div>
                            <div>Month 240: Interest = ₹375, Principal = ₹44,611</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-4">Key Components</h3>
                        <div className="space-y-3">
                          <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <div className="font-semibold text-purple-800 dark:text-purple-200">Principal Payment</div>
                            <div className="text-sm text-purple-700 dark:text-purple-300">Amount that reduces the loan balance</div>
                          </div>
                          <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <div className="font-semibold text-purple-800 dark:text-purple-200">Interest Payment</div>
                            <div className="text-sm text-purple-700 dark:text-purple-300">Cost of borrowing the money</div>
                          </div>
                          <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <div className="font-semibold text-purple-800 dark:text-purple-200">Outstanding Balance</div>
                            <div className="text-sm text-purple-700 dark:text-purple-300">Remaining loan amount after each payment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* EMI vs Other Payment Methods */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  EMI vs Other Payment Methods
                </h2>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-200 dark:border-green-700">
                          <th className="text-left py-3 px-4 font-semibold text-green-800 dark:text-green-200">Payment Method</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-800 dark:text-green-200">EMI</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-800 dark:text-green-200">Step-up EMI</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-800 dark:text-green-200">Step-down EMI</th>
                          <th className="text-center py-3 px-4 font-semibold text-green-800 dark:text-green-200">Balloon Payment</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="py-3 px-4 text-sm text-green-700 dark:text-green-300">Monthly Payment</td>
                          <td className="text-center py-3 px-4 text-sm">Fixed</td>
                          <td className="text-center py-3 px-4 text-sm">Increases</td>
                          <td className="text-center py-3 px-4 text-sm">Decreases</td>
                          <td className="text-center py-3 px-4 text-sm">Lower + Final</td>
                        </tr>
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="py-3 px-4 text-sm text-green-700 dark:text-green-300">Total Interest</td>
                          <td className="text-center py-3 px-4 text-sm">Standard</td>
                          <td className="text-center py-3 px-4 text-sm">Lower</td>
                          <td className="text-center py-3 px-4 text-sm">Higher</td>
                          <td className="text-center py-3 px-4 text-sm">Higher</td>
                        </tr>
                        <tr className="border-b border-green-100 dark:border-green-800">
                          <td className="py-3 px-4 text-sm text-green-700 dark:text-green-300">Suitability</td>
                          <td className="text-center py-3 px-4 text-sm">All borrowers</td>
                          <td className="text-center py-3 px-4 text-sm">Young professionals</td>
                          <td className="text-center py-3 px-4 text-sm">Senior citizens</td>
                          <td className="text-center py-3 px-4 text-sm">Business owners</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Competitor Comparison */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Star className="h-8 w-8 text-yellow-600" />
                  EMI Calculator Comparison
                </h2>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-2xl p-8 border-2 border-yellow-200 dark:border-yellow-800">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-yellow-200 dark:border-yellow-700">
                          <th className="text-left py-3 px-4 font-semibold text-yellow-800 dark:text-yellow-200">Feature</th>
                          <th className="text-center py-3 px-4 font-semibold text-yellow-800 dark:text-yellow-200">FastTools</th>
                          <th className="text-center py-3 px-4 font-semibold text-yellow-800 dark:text-yellow-200">Calculator.net</th>
                          <th className="text-center py-3 px-4 font-semibold text-yellow-800 dark:text-yellow-200">CalculatorSoup</th>
                          <th className="text-center py-3 px-4 font-semibold text-yellow-800 dark:text-yellow-200">EMICalculator.net</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">Amortization Schedule</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">Yearly Breakdown</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">Multiple Loan Types</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">EMI in Advance</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">Visual Charts</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-yellow-100 dark:border-yellow-800">
                          <td className="py-3 px-4 text-sm text-yellow-700 dark:text-yellow-300">Export Results</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Resource Directory */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="h-8 w-8 text-indigo-600" />
                  Top EMI Calculator Resources
                </h2>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border-2 border-indigo-200 dark:border-indigo-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">EMI Calculator Directories</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://emicalculator.net" className="text-blue-600 hover:underline text-sm">
                            EMI Calculator.net - Comprehensive EMI tools
                          </a>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://calculator.net" className="text-blue-600 hover:underline text-sm">
                            Calculator.net - Multi-purpose calculators
                          </a>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://calculatorsoup.com" className="text-blue-600 hover:underline text-sm">
                            CalculatorSoup - Financial calculators
                          </a>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://bankbazaar.com" className="text-blue-600 hover:underline text-sm">
                            BankBazaar - Loan comparison platform
                          </a>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://paisabazaar.com" className="text-blue-600 hover:underline text-sm">
                            PaisaBazaar - Financial services marketplace
                          </a>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <a href="https://policybazaar.com" className="text-blue-600 hover:underline text-sm">
                            PolicyBazaar - Insurance and loan platform
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Mobile EMI Calculator Apps</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <div className="text-sm text-indigo-700 dark:text-indigo-300">
                            <strong>EMI Calculator by BankBazaar</strong><br/>
                            Free Android & iOS app with loan comparison
                          </div>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <div className="text-sm text-indigo-700 dark:text-indigo-300">
                            <strong>Loan EMI Calculator</strong><br/>
                            Simple and user-friendly interface
                          </div>
                        </div>
                        <div className="p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                          <div className="text-sm text-indigo-700 dark:text-indigo-300">
                            <strong>Financial Calculator Pro</strong><br/>
                            Advanced financial calculations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Tools */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-pink-600" />
                  Related Financial Calculators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Calculator className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-800 dark:text-blue-200">Compound Interest Calculator</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Calculate compound interest on investments</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-800 dark:text-green-200">SIP Calculator</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">Calculate Systematic Investment Plan returns</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-purple-800 dark:text-purple-200">FD Calculator</span>
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Calculate Fixed Deposit maturity amount</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3 mb-2">
                      <PieChart className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-orange-800 dark:text-orange-200">PPF Calculator</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Calculate Public Provident Fund returns</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-800">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="h-5 w-5 text-pink-600" />
                      <span className="font-semibold text-pink-800 dark:text-pink-200">Tax Calculator</span>
                    </div>
                    <p className="text-sm text-pink-700 dark:text-pink-300">Calculate income tax and deductions</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-cyan-600" />
                      <span className="font-semibold text-cyan-800 dark:text-cyan-200">Retirement Calculator</span>
                    </div>
                    <p className="text-sm text-cyan-700 dark:text-cyan-300">Plan for retirement savings and goals</p>
                  </div>
                </div>
              </section>
            </article>

            {/* Right Sidebar */}
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
                  <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                </div>

                {/* EMI Tips */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">EMI Tips</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Lower EMI</div>
                      <div className="text-xs text-green-700 dark:text-green-300">Choose longer tenure for lower monthly payments</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Prepayment</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">Make prepayments to reduce total interest</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <div className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Compare Rates</div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">Compare interest rates from multiple lenders</div>
                    </div>
                  </div>
                </div>

                {/* Loan Types Quick Guide */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Home className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Loan Types</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Home className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Home Loan</span>
                      </div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">6.5% - 12% | 5-30 years</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-1">
                        <Car className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800 dark:text-green-200">Car Loan</span>
                      </div>
                      <div className="text-xs text-green-700 dark:text-green-300">7% - 15% | 1-7 years</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                      <div className="flex items-center gap-2 mb-1">
                        <CreditCard className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Personal Loan</span>
                      </div>
                      <div className="text-xs text-purple-700 dark:text-purple-300">10% - 24% | 1-5 years</div>
                    </div>
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
