"use client"

import { ScientificCalculator } from "@/components/scientific-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Brain, Clock, Pi } from "lucide-react"
import { useState } from "react"
import Head from "next/head"
// Metadata handled by Head component

// SEO Keywords (Priority-based: 20 most important, then lower priority)
const seoKeywords = [
  // Tier 1 - Most Important (20 keywords)
  "scientific calculator", "online calculator", "free calculator", "math calculator", "calculator online",
  "scientific calculator online", "advanced calculator", "calculator free", "math tools", "calculator app",
  "scientific calculator free", "online scientific calculator", "calculator tool", "math calculator online", "free scientific calculator",
  "calculator website", "scientific calculator app", "math tools online", "calculator online free", "scientific calculator tool",
  
  // Tier 2 - High Priority (30 keywords)
  "trigonometry calculator", "logarithm calculator", "exponential calculator", "statistics calculator", "graphing calculator",
  "casio calculator", "ti calculator", "hp calculator", "calculator functions", "mathematical calculator",
  "engineering calculator", "physics calculator", "chemistry calculator", "algebra calculator", "calculus calculator",
  "scientific functions", "mathematical functions", "calculator buttons", "calculator operations", "calculator features",
  "online math tools", "math calculator free", "scientific calculator functions", "calculator online tool", "math calculator app",
  "free online calculator", "calculator online scientific", "scientific calculator online free", "math calculator tool", "online calculator free",
  
  // Tier 3 - Medium Priority (30 keywords)
  "sin cos tan calculator", "logarithmic functions", "exponential functions", "power functions", "root functions",
  "factorial calculator", "combination calculator", "permutation calculator", "gamma function", "error function",
  "hyperbolic functions", "inverse functions", "trigonometric functions", "logarithmic functions", "exponential functions",
  "mathematical constants", "pi calculator", "euler number", "golden ratio", "mathematical operations",
  "calculator history", "calculator memory", "calculator modes", "calculator settings", "calculator display",
  "scientific notation", "engineering notation", "calculator precision", "calculator accuracy", "calculator reliability",
  
  // Tier 4 - Lower Priority (20 keywords)
  "calculator tutorial", "calculator guide", "calculator help", "calculator instructions", "calculator manual",
  "calculator tips", "calculator tricks", "calculator shortcuts", "calculator keyboard", "calculator mouse",
  "calculator mobile", "calculator desktop", "calculator tablet", "calculator responsive", "calculator accessible",
  "calculator fast", "calculator quick", "calculator easy", "calculator simple", "calculator user-friendly"
]

export default function ScientificCalculatorPage() {
  const [history, setHistory] = useState<string[]>([])
  const [currentDisplay, setCurrentDisplay] = useState("0")

  const clearHistory = () => {
    setHistory([])
  }

  const copyResult = () => {
    navigator.clipboard.writeText(currentDisplay)
  }

  return (
    <>
      <Head>
        <title>Scientific Calculator Online Free | Advanced Math Calculator with 70+ Functions</title>
        <meta name="description" content="Free online scientific calculator with 70+ mathematical functions. Advanced trigonometry, logarithms, statistics, and engineering calculations. Professional-grade calculator for students, engineers, and scientists." />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Scientific Calculator Online Free | Advanced Math Calculator" />
        <meta property="og:description" content="Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fasttools.store/tools/scientific-calculator" />
        <meta property="og:image" content="https://fasttools.store/og-scientific-calculator.png" />
        <meta property="og:site_name" content="FastTools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scientific Calculator Online Free | Advanced Math Calculator" />
        <meta name="twitter:description" content="Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations." />
        <meta name="twitter:image" content="https://fasttools.store/og-scientific-calculator.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/tools/scientific-calculator" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Scientific Calculator Online Free",
          description: "Professional-grade scientific calculator with 70+ mathematical functions including trigonometry, logarithms, statistics, engineering calculations, and advanced mathematics. Free online calculator for students, engineers, and scientists.",
          url: "https://fasttools.store/tools/scientific-calculator",
          applicationCategory: "UtilityApplication",
          operatingSystem: "Any",
          browserRequirements: "Requires JavaScript. Works in all modern browsers.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          },
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://fasttools.store"
          },
          featureList: [
            "Trigonometric Functions (sin, cos, tan, asin, acos, atan)",
            "Hyperbolic Functions (sinh, cosh, tanh, asinh, acosh, atanh)",
            "Logarithmic Functions (ln, log, log2, logx)",
            "Exponential Functions (e^x, 10^x, 2^x)",
            "Power and Root Functions (x^2, x^3, √x, ∛x, x^y, y√x)",
            "Advanced Mathematics (n!, nCr, nPr, Γ, erf, erfc)",
            "Statistical Functions (mean, std, var, data analysis)",
            "Mathematical Constants (π, e, φ)",
            "Memory Functions (M+, M-, MR, MC)",
            "Angle Modes (Degrees/Radians)",
            "Scientific Notation Support",
            "Keyboard Shortcuts",
            "Calculation History",
            "Mobile Responsive Design"
          ],
          audience: {
            "@type": "Audience",
            audienceType: ["Students", "Engineers", "Scientists", "Mathematicians", "Researchers"]
          },
          educationalUse: "Calculator",
          learningResourceType: "Interactive Tool",
          educationalLevel: ["High School", "Undergraduate", "Graduate", "Professional"]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: "Tools", href: "/tools" },
          { label: "Scientific Calculator", href: "/tools/scientific-calculator" }
        ]} />
        
        {/* Header Section - Full Width at Top */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Scientific Calculator Online Free
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Professional-grade scientific calculator with 70+ mathematical functions. Advanced trigonometry, logarithms, 
            statistics, and engineering calculations. Free online calculator for students, engineers, and scientists. 
            Compatible with CASIO, TI, Sharp, and HP calculator functions.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Content - Calculator and Sidebar in One Line */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 lg:gap-8 items-start">
            <div className="space-y-6">
              <ScientificCalculator 
                history={history}
                setHistory={setHistory}
                clearHistory={clearHistory}
                copyResult={copyResult}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
              />
            
              {/* Educational Content Sections */}
              <div className="space-y-8">
                {/* What is a Scientific Calculator */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    What is a Scientific Calculator?
                  </h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A scientific calculator is an advanced mathematical tool designed for complex calculations beyond basic arithmetic. 
                      Unlike standard calculators, scientific calculators include specialized functions for trigonometry, logarithms, 
                      exponentials, statistics, and advanced mathematics.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Our free online scientific calculator provides all the functionality of professional calculators like CASIO fx-991EX, 
                      TI-84 Plus, HP 35s, and Sharp EL-W516X. It's perfect for students, engineers, scientists, and anyone who needs 
                      to perform advanced mathematical calculations.
                    </p>
                    <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                      <li><strong>70+ Mathematical Functions:</strong> Complete set of scientific, trigonometric, logarithmic, and statistical functions</li>
                      <li><strong>Professional Grade:</strong> Equivalent to high-end physical calculators</li>
                      <li><strong>Free to Use:</strong> No registration required, completely free online calculator</li>
                      <li><strong>Mobile Responsive:</strong> Works perfectly on desktop, tablet, and mobile devices</li>
                      <li><strong>Keyboard Support:</strong> Full keyboard shortcuts for efficient calculations</li>
                    </ul>
                  </div>
                </div>

                {/* Mathematical Functions Guide */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Brain className="h-6 w-6 text-green-600" />
                    Mathematical Functions Guide
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">Trigonometric Functions</h3>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><strong>sin, cos, tan:</strong> Basic trigonometric functions</li>
                        <li><strong>asin, acos, atan:</strong> Inverse trigonometric functions</li>
                        <li><strong>sinh, cosh, tanh:</strong> Hyperbolic functions</li>
                        <li><strong>Degrees/Radians:</strong> Toggle between angle modes</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">Logarithmic Functions</h3>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><strong>ln:</strong> Natural logarithm (base e)</li>
                        <li><strong>log:</strong> Common logarithm (base 10)</li>
                        <li><strong>log₂:</strong> Binary logarithm (base 2)</li>
                        <li><strong>eˣ, 10ˣ:</strong> Exponential functions</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-purple-600">Power & Root Functions</h3>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><strong>x², x³:</strong> Square and cube functions</li>
                        <li><strong>√x, ∛x:</strong> Square root and cube root</li>
                        <li><strong>xʸ:</strong> Power function (x to the power of y)</li>
                        <li><strong>ʸ√x:</strong> Yth root of x</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-orange-600">Advanced Mathematics</h3>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><strong>n!:</strong> Factorial function</li>
                        <li><strong>nCr, nPr:</strong> Combinations and permutations</li>
                        <li><strong>Γ:</strong> Gamma function</li>
                        <li><strong>erf, erfc:</strong> Error functions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mathematical Constants */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Pi className="h-6 w-6 text-red-600" />
                    Mathematical Constants
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">π</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Pi</div>
                      <div className="text-xs text-slate-500">3.14159265359</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">e</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Euler's Number</div>
                      <div className="text-xs text-slate-500">2.71828182846</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">φ</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Golden Ratio</div>
                      <div className="text-xs text-slate-500">1.61803398875</div>
                    </div>
                  </div>
                </div>

                {/* Quick Help Section */}
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                  <h2 className="text-xl font-bold mb-4">Quick Help & Usage Guide</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Basic Operations</h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                        <li><strong>Arithmetic:</strong> Use +, -, ×, ÷ for standard calculations</li>
                        <li><strong>Memory:</strong> M+, M-, MR, MC to store and recall values</li>
                        <li><strong>Clear:</strong> AC to clear all, ⌫ for backspace</li>
                        <li><strong>History:</strong> View and reuse past calculations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Advanced Features</h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                        <li><strong>Angle Modes:</strong> Toggle between Degrees and Radians</li>
                        <li><strong>Statistical:</strong> Use DATA, mean, std, var for data analysis</li>
                        <li><strong>Constants:</strong> Insert π, e, φ with one click</li>
                        <li><strong>Keyboard:</strong> Full keyboard shortcuts available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          
              {/* Sidebar */}
              <div className="space-y-6">
                <div className="sticky top-4 space-y-4 lg:space-y-6">
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

              {/* History */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">History</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {history.length > 0 ? (
                    history.slice(0, 6).map((entry, index) => (
                      <div key={index} className="text-xs text-slate-600 dark:text-slate-400 font-mono break-words p-2 bg-slate-100 dark:bg-slate-700 rounded">
                        {entry}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-slate-500 dark:text-slate-400 text-center py-4">
                      No calculations yet
                    </div>
                  )}
                </div>
                {history.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    <button 
                      onClick={clearHistory}
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Clear
                    </button>
                    <button 
                      onClick={copyResult}
                      className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </button>
                  </div>
                )}
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

              {/* Second Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* Third Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg border-2 border-dashed border-orange-300 dark:border-orange-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">Sponsored</div>
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
    </>
  )
}
