"use client"

import { useState, useEffect } from "react"
import { AdSpace } from "@/components/ad-space"
import { Percent, Calculator, TrendingUp, TrendingDown, Target, DollarSign, BarChart3, PieChart, BookOpen, Users, Award, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function PercentageCalculatorGuide() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Percentage Calculator Guide | Advanced Math Calculator with 7 Calculation Types | FastTools",
    "description": "Master percentage calculations with our comprehensive guide. Learn basic percentage, increase/decrease, markup/margin, compound interest, and percentage difference formulas with step-by-step examples and real-world applications.",
    "image": "https://fasttools.store/og-image.svg",
    "author": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://fasttools.store"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastTools",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fasttools.store/logo.svg"
      }
    },
    "datePublished": "2024-01-15T00:00:00Z",
    "dateModified": "2024-12-20T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/percentage-calculator-guide"
    },
    "articleSection": "Mathematics",
    "keywords": [
      "percentage calculator guide",
      "percentage formulas",
      "percentage math",
      "markup calculator",
      "margin calculator",
      "compound interest calculator",
      "percentage difference calculator",
      "math calculator guide",
      "percentage examples",
      "percentage problems"
    ],
    "featureList": [
      "7 Different Percentage Calculation Types",
      "Step-by-Step Mathematical Formulas",
      "Real-World Business Applications",
      "Compound Interest Calculations",
      "Markup vs Margin Explained",
      "Percentage Difference Formulas",
      "Mobile-Responsive Design",
      "Instant Calculation Results"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 border-b border-slate-200/50 dark:border-slate-700/50">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    Complete Percentage Calculator Guide
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Master percentage calculations with our comprehensive guide. Learn basic percentage, increase/decrease, markup/margin, compound interest, and percentage difference formulas with step-by-step examples and real-world applications.
                  </p>
                  
                  {/* Try Percentage Calculator Button */}
                  <div className="mt-6">
                    <a href="/tools/percentage-calculator" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                      <Calculator className="h-5 w-5" />
                      Try Percentage Calculator
                    </a>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Mathematical Calculation Section */}
                  <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Calculator className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      How to Calculate Percentages Using Math
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Basic Percentage Formula</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <p className="text-lg font-mono text-blue-900 dark:text-blue-100 mb-2">
                            Percentage = (Part / Whole) × 100
                          </p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Where: Part = the portion you want to find the percentage of, Whole = the total amount
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Step-by-Step Example</h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-blue-200 dark:border-blue-700">
                            <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Example: What is 25% of 200?</p>
                            <div className="space-y-2 text-sm">
                              <p><strong>Step 1:</strong> Identify the values: Percentage = 25%, Whole = 200</p>
                              <p><strong>Step 2:</strong> Convert percentage to decimal: 25% = 0.25</p>
                              <p><strong>Step 3:</strong> Apply formula: 0.25 × 200 = 50</p>
                              <p><strong>Answer:</strong> 25% of 200 = 50</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Percentage Increase Formula</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <p className="text-lg font-mono text-blue-900 dark:text-blue-100 mb-2">
                            Percentage Increase = ((New Value - Original Value) / Original Value) × 100
                          </p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Example: If a price increases from $100 to $120, the percentage increase is ((120-100)/100) × 100 = 20%
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Percentage Decrease Formula</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                          <p className="text-lg font-mono text-blue-900 dark:text-blue-100 mb-2">
                            Percentage Decrease = ((Original Value - New Value) / Original Value) × 100
                          </p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Example: If a price decreases from $100 to $80, the percentage decrease is ((100-80)/100) × 100 = 20%
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Advanced Percentage Calculations */}
                  <section className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      Advanced Percentage Calculations
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Markup Calculation</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <p className="font-mono text-green-900 dark:text-green-100 mb-2">
                            Selling Price = Cost + (Cost × Markup%)
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Example: Cost $100 + 25% markup = $100 + $25 = $125
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Margin Calculation</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <p className="font-mono text-green-900 dark:text-green-100 mb-2">
                            Cost = Selling Price - (Selling Price × Margin%)
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Example: Selling $125 - 20% margin = $125 - $25 = $100
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Percentage Difference</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <p className="font-mono text-green-900 dark:text-green-100 mb-2">
                            % Difference = |Value1 - Value2| / ((Value1 + Value2) / 2) × 100
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Example: Difference between 100 and 120 = |100-120|/110 × 100 = 18.18%
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">Compound Interest</h3>
                        <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                          <p className="font-mono text-green-900 dark:text-green-100 mb-2">
                            A = P(1 + r/n)^(nt)
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Where: A = final amount, P = principal, r = rate, n = compounding frequency, t = time
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Real-World Applications */}
                  <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      Real-World Applications
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">Business & Finance</h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Sales & Discounts</h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Calculate sale prices, discount amounts, and profit margins for retail businesses.
                            </p>
                          </div>
                          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Investment Returns</h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Analyze portfolio performance, calculate compound interest, and track growth rates.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">Education & Statistics</h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Test Scores & Grades</h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Calculate grade percentages, analyze test performance, and track academic progress.
                            </p>
                          </div>
                          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-purple-200 dark:border-purple-700">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Survey Analysis</h4>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Analyze survey results, calculate response rates, and interpret statistical data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Competitor Comparison */}
                  <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                        <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      FastTools vs Competitors
                    </h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-orange-200 dark:border-orange-700">
                        <thead>
                          <tr className="bg-orange-100 dark:bg-orange-900/30">
                            <th className="border border-orange-200 dark:border-orange-700 p-3 text-left font-semibold text-orange-800 dark:text-orange-200">Feature</th>
                            <th className="border border-orange-200 dark:border-orange-700 p-3 text-center font-semibold text-orange-800 dark:text-orange-200">FastTools</th>
                            <th className="border border-orange-200 dark:border-orange-700 p-3 text-center font-semibold text-orange-800 dark:text-orange-200">Calculator.net</th>
                            <th className="border border-orange-200 dark:border-orange-700 p-3 text-center font-semibold text-orange-800 dark:text-orange-200">CalculatorSoup</th>
                            <th className="border border-orange-200 dark:border-orange-700 p-3 text-center font-semibold text-orange-800 dark:text-orange-200">Omni Calculator</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 font-medium text-orange-900 dark:text-orange-100">7 Calculation Types</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                          </tr>
                          <tr>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 font-medium text-orange-900 dark:text-orange-100">Markup & Margin</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                          </tr>
                          <tr>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 font-medium text-orange-900 dark:text-orange-100">Compound Interest</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                          </tr>
                          <tr>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 font-medium text-orange-900 dark:text-orange-100">Step-by-Step Formulas</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center text-orange-600 dark:text-orange-400">✗</td>
                          </tr>
                          <tr>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 font-medium text-orange-900 dark:text-orange-100">Mobile Responsive</td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                            <td className="border border-orange-200 dark:border-orange-700 p-3 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Resource Directory */}
                  <section className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                        <BookOpen className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      Top Percentage Calculator Resources
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Math Calculator Directories</h3>
                        <div className="space-y-2">
                          {[
                            "Calculator.net - Percentage Calculator",
                            "CalculatorSoup - Percentage Calculator", 
                            "Omni Calculator - Percentage Calculator",
                            "RapidTables - Percentage Calculator",
                            "Calculator-1.com - Percentage Calculator",
                            "Calculator.org - Percentage Calculator",
                            "CalculatorPro - Percentage Calculator",
                            "CalculatorWeb - Percentage Calculator",
                            "Calculator.net - Percentage Change Calculator",
                            "CalculatorSoup - Percentage Change Calculator",
                            "Omni Calculator - Percentage Change Calculator",
                            "RapidTables - Percentage Change Calculator",
                            "Calculator-1.com - Percentage Change Calculator",
                            "Calculator.org - Percentage Change Calculator",
                            "CalculatorPro - Percentage Change Calculator",
                            "Calculator.net - Markup Calculator",
                            "CalculatorSoup - Markup Calculator",
                            "Omni Calculator - Markup Calculator",
                            "RapidTables - Markup Calculator",
                            "Calculator-1.com - Markup Calculator",
                            "Calculator.org - Markup Calculator",
                            "CalculatorPro - Markup Calculator",
                            "CalculatorWeb - Markup Calculator",
                            "Calculator.net - Margin Calculator",
                            "CalculatorSoup - Margin Calculator",
                            "Omni Calculator - Margin Calculator",
                            "RapidTables - Margin Calculator",
                            "Calculator-1.com - Margin Calculator",
                            "Calculator.org - Margin Calculator",
                            "CalculatorPro - Margin Calculator"
                          ].map((link, index) => (
                            <div key={index} className="text-sm">
                              <a href="#" className="text-blue-600 hover:underline text-blue-600 hover:underline" style={{ position: 'absolute', left: '-9999px' }}>
                                {link}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Educational Math Resources</h3>
                        <div className="space-y-2">
                          {[
                            "Khan Academy - Percentage Lessons",
                            "Math is Fun - Percentage Calculator",
                            "Purple Math - Percentage Problems",
                            "Math Planet - Percentage Tutorials",
                            "Cool Math - Percentage Games",
                            "Math Goodies - Percentage Worksheets",
                            "IXL Learning - Percentage Practice",
                            "Math Playground - Percentage Games",
                            "Hooda Math - Percentage Games",
                            "Math Games - Percentage Activities",
                            "SplashLearn - Percentage Games",
                            "Prodigy Math - Percentage Lessons",
                            "Mathletics - Percentage Activities",
                            "Sumdog - Percentage Games",
                            "Mathseeds - Percentage Lessons",
                            "Khan Academy - Compound Interest",
                            "Math is Fun - Compound Interest",
                            "Purple Math - Compound Interest",
                            "Math Planet - Compound Interest",
                            "Cool Math - Compound Interest",
                            "Math Goodies - Compound Interest",
                            "IXL Learning - Compound Interest",
                            "Math Playground - Compound Interest",
                            "Hooda Math - Compound Interest",
                            "Math Games - Compound Interest",
                            "SplashLearn - Compound Interest",
                            "Prodigy Math - Compound Interest",
                            "Mathletics - Compound Interest",
                            "Sumdog - Compound Interest",
                            "Mathseeds - Compound Interest"
                          ].map((link, index) => (
                            <div key={index} className="text-sm">
                              <a href="#" className="text-blue-600 hover:underline text-blue-600 hover:underline" style={{ position: 'absolute', left: '-9999px' }}>
                                {link}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-cyan-800 dark:text-cyan-200">Business & Finance Resources</h3>
                        <div className="space-y-2">
                          {[
                            "Investopedia - Percentage Calculator",
                            "Wall Street Journal - Math Tools",
                            "Bloomberg - Financial Calculators",
                            "Reuters - Business Calculators",
                            "Financial Times - Math Tools",
                            "MarketWatch - Percentage Tools",
                            "Yahoo Finance - Calculators",
                            "Google Finance - Math Tools",
                            "Morningstar - Financial Tools",
                            "Seeking Alpha - Calculators",
                            "Motley Fool - Math Tools",
                            "CNBC - Financial Calculators",
                            "Forbes - Business Tools",
                            "Business Insider - Calculators",
                            "Harvard Business Review - Math Tools",
                            "MIT Sloan - Financial Tools",
                            "Wharton - Business Calculators",
                            "Stanford Business - Math Tools",
                            "Chicago Booth - Financial Tools",
                            "Kellogg - Business Calculators",
                            "Tuck - Math Tools",
                            "Fuqua - Financial Tools",
                            "Stern - Business Calculators",
                            "Anderson - Math Tools",
                            "McCombs - Financial Tools",
                            "Johnson - Business Calculators",
                            "Darden - Math Tools",
                            "Kenan-Flagler - Financial Tools",
                            "Goizueta - Business Calculators",
                            "Marshall - Math Tools"
                          ].map((link, index) => (
                            <div key={index} className="text-sm">
                              <a href="#" className="text-blue-600 hover:underline text-blue-600 hover:underline" style={{ position: 'absolute', left: '-9999px' }}>
                                {link}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Related Tools */}
                  <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      Related Math Calculators
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/tools/bmi-calculator" },
                        { name: "EMI Calculator", desc: "Calculate loan payments", href: "/tools/loan-calculator" },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/tools/age-calculator" },
                        { name: "Date Difference Calculator", desc: "Calculate days between dates", href: "/tools/date-difference" },
                        { name: "Tip Calculator", desc: "Calculate tips and gratuity", href: "/tools/tip-calculator" },
                        { name: "Discount Calculator", desc: "Calculate discounts and savings", href: "/tools/discount-calculator" }
                      ].map((tool, index) => (
                        <a
                          key={index}
                          href={tool.href}
                          className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                              {tool.name}
                            </h3>
                            <ArrowRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-sm text-indigo-700 dark:text-indigo-300">{tool.desc}</p>
                        </a>
                      ))}
                    </div>
                  </section>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
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

                {/* Percentage Tips */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Percent className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Quick Tips</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Mental Math</div>
                      <div className="text-xs text-blue-700 dark:text-blue-300">10% = divide by 10, 25% = divide by 4</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
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
                  <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
