"use client"

import { ScientificCalculator } from "@/components/scientific-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, Brain, Clock, Pi } from "lucide-react"
import { useState } from "react"
import Head from "next/head"

const seoKeywords = [

    "advanced scientific calculator", "scientific calculator", "online scientific calculator",
    "free scientific calculator", "scientific calculator online free",
    "math calculator", "scientific calculator app", "calculator online",
    "advanced calculator online", "online calculator free",
    "scientific calculator for students", "scientific calculator tool",
    "calculator website", "scientific calculator for engineers", "advanced calculator app",
    "scientific calculator with functions", "online math calculator", "advanced math calculator",
    "free online scientific calculator", "scientific calculator website",

    "trigonometry calculator", "logarithm calculator", "exponential calculator",
    "fraction calculator", "root calculator", "power calculator",
    "algebra calculator", "calculus calculator", "physics calculator",
    "engineering calculator", "statistics calculator", "complex number calculator",
    "matrix calculator", "vector calculator", "graphing calculator",
    "scientific notation calculator", "equation solver", "derivative calculator",
    "integral calculator", "function calculator",

    "casio fx 991ex calculator", "ti-30xs scientific calculator", "hp scientific calculator",
    "desmos scientific calculator", "geogebra calculator", "calculator.net scientific calculator",
    "symbolab calculator", "wolframalpha calculator", "sharp scientific calculator",
    "best scientific calculator 2025", "online casio calculator", "scientific calculator with shift solve",
    "calculator similar to casio fx 991", "natural textbook display calculator",
    "advanced programmable calculator",

    "how to use scientific calculator online", "free online advanced calculator",
    "scientific calculator for trigonometry", "scientific calculator with history",
    "best free scientific calculator online", "scientific calculator for mobile",
    "scientific calculator for pc", "online advanced calculator for students",
    "scientific calculator with graphing", "scientific calculator for algebra",
    "scientific calculator with fractions", "advanced scientific calculator with steps",
    "scientific calculator without ads", "scientific calculator for physics problems",
    "online math tool for students", "calculator for exams online",
    "scientific calculator no download", "realistic scientific calculator interface",
    "scientific calculator 991es online", "scientific calculator with memory"
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
        <title>Scientific Calculator | Advanced Math Calculator | FastTools</title>
        <meta name="description" content="Free online scientific calculator with 70+ mathematical functions. Advanced trigonometry, logarithms, statistics, and engineering calculations. Professional-grade calculator for students, engineers, and scientists." />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

        {}
        <meta property="og:title" content="Scientific Calculator Online Free | Advanced Math Calculator" />
        <meta property="og:description" content="Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fasttools.store/calculator/scientific-calculator" />
        <meta property="og:image" content="https://www.fasttools.store/og-scientific-calculator.png" />
        <meta property="og:site_name" content="FastTools" />

        {}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scientific Calculator Online Free | Advanced Math Calculator" />
        <meta name="twitter:description" content="Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations." />
        <meta name="twitter:image" content="https://www.fasttools.store/og-scientific-calculator.png" />

        {}
        <link rel="canonical" href="https://www.fasttools.store/calculator/scientific-calculator" />

        {}
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
          url: "https://www.fasttools.store/calculator/scientific-calculator",
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
            url: "https://www.fasttools.store"
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

      <div className="bg-card">
        <div className="container mx-auto px-3 py-6 md:py-8">
        <Breadcrumbs items={[
          { label: "Calculator", href: "/calculator" },
          { label: "Scientific Calculator", href: "/calculator/scientific-calculator" }
        ]} />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader
                title="Advanced Scientific Calculator Online Free"
                description="Professional-grade scientific calculator with 70+ mathematical functions. Advanced trigonometry, logarithms, statistics, and engineering calculations. Free online calculator for students, engineers, and scientists. Compatible with CASIO, TI, Sharp, and HP calculator functions."
                titleSize="medium"
              />
        </div>

            {}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
            <div className="space-y-6">
              <ScientificCalculator
                history={history}
                setHistory={setHistory}
                clearHistory={clearHistory}
                copyResult={copyResult}
                currentDisplay={currentDisplay}
                setCurrentDisplay={setCurrentDisplay}
              />

              <div className="space-y-8 mt-6 md:mt-8">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <Calculator className="h-6 w-6 text-foreground" />
                    What is a Scientific Calculator?
                  </h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-muted-foreground mb-4">
                      A scientific calculator is an advanced mathematical tool designed for complex calculations beyond basic arithmetic.
                      Unlike standard calculators, scientific calculators include specialized functions for trigonometry, logarithms,
                      exponentials, statistics, and advanced mathematics.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Our free online scientific calculator provides all the functionality of professional calculators like CASIO fx-991EX,
                      TI-84 Plus, HP 35s, and Sharp EL-W516X. It's perfect for students, engineers, scientists, and anyone who needs
                      to perform advanced mathematical calculations.
                    </p>
                    <h3 className="text-lg font-semibold mb-3 text-heading-accent">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>70+ Mathematical Functions:</strong> Complete set of scientific, trigonometric, logarithmic, and statistical functions</li>
                      <li><strong>Professional Grade:</strong> Equivalent to high-end physical calculators</li>
                      <li><strong>Free to Use:</strong> No registration required, completely free online calculator</li>
                      <li><strong>Mobile Responsive:</strong> Works perfectly on desktop, tablet, and mobile devices</li>
                      <li><strong>Keyboard Support:</strong> Full keyboard shortcuts for efficient calculations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <Brain className="h-6 w-6 text-foreground" />
                    Mathematical Functions Guide
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Trigonometric Functions</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>sin, cos, tan:</strong> Basic trigonometric functions</li>
                        <li><strong>asin, acos, atan:</strong> Inverse trigonometric functions</li>
                        <li><strong>sinh, cosh, tanh:</strong> Hyperbolic functions</li>
                        <li><strong>Degrees/Radians:</strong> Toggle between angle modes</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Logarithmic Functions</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>ln:</strong> Natural logarithm (base e)</li>
                        <li><strong>log:</strong> Common logarithm (base 10)</li>
                        <li><strong>log₂:</strong> Binary logarithm (base 2)</li>
                        <li><strong>eˣ, 10ˣ:</strong> Exponential functions</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Power & Root Functions</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>x², x³:</strong> Square and cube functions</li>
                        <li><strong>√x, ∛x:</strong> Square root and cube root</li>
                        <li><strong>xʸ:</strong> Power function (x to the power of y)</li>
                        <li><strong>ʸ√x:</strong> Yth root of x</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Advanced Mathematics</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><strong>n!:</strong> Factorial function</li>
                        <li><strong>nCr, nPr:</strong> Combinations and permutations</li>
                        <li><strong>Γ:</strong> Gamma function</li>
                        <li><strong>erf, erfc:</strong> Error functions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <Pi className="h-6 w-6 text-foreground" />
                    Mathematical Constants
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-muted rounded-lg border border-border">
                      <div className="text-2xl font-bold text-heading-accent">π</div>
                      <div className="text-sm text-muted-foreground">Pi</div>
                      <div className="text-xs text-muted-foreground">3.14159265359</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg border border-border">
                      <div className="text-2xl font-bold text-heading-accent">e</div>
                      <div className="text-sm text-muted-foreground">Euler's Number</div>
                      <div className="text-xs text-muted-foreground">2.71828182846</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg border border-border">
                      <div className="text-2xl font-bold text-heading-accent">φ</div>
                      <div className="text-sm text-muted-foreground">Golden Ratio</div>
                      <div className="text-xs text-muted-foreground">1.61803398875</div>
                    </div>
                  </div>
                </div>

                {}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-xl font-bold mb-4 text-foreground">Quick Help & Usage Guide</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Basic Operations</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong>Arithmetic:</strong> Use +, -, ×, ÷ for standard calculations</li>
                        <li><strong>Memory:</strong> M+, M-, MR, MC to store and recall values</li>
                        <li><strong>Clear:</strong> AC to clear all, ⌫ for backspace</li>
                        <li><strong>History:</strong> View and reuse past calculations</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Advanced Features</h3>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong>Angle Modes:</strong> Toggle between Degrees and Radians</li>
                        <li><strong>Statistical:</strong> Use DATA, mean, std, var for data analysis</li>
                        <li><strong>Constants:</strong> Insert π, e, φ with one click</li>
                        <li><strong>Keyboard:</strong> Full keyboard shortcuts available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <Brain className="h-6 w-6 text-foreground" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        question: "What functions are available in this scientific calculator?",
                        answer: "Our calculator includes 70+ mathematical functions: trigonometric (sin, cos, tan, asin, acos, atan), hyperbolic (sinh, cosh, tanh), logarithmic (ln, log, log2), exponential (e^x, 10^x, 2^x), power and root functions (x^2, x^3, √x, ∛x, x^y), advanced mathematics (n!, nCr, nPr, Γ, erf), statistical functions, and mathematical constants (π, e, φ)."
                      },
                      {
                        question: "How does this calculator compare to physical scientific calculators?",
                        answer: "This online calculator provides equivalent functionality to professional calculators like CASIO fx-991EX, TI-84 Plus, HP 35s, and Sharp EL-W516X. It includes all standard scientific functions, memory operations, angle modes, and advanced mathematical capabilities found in high-end physical calculators."
                      },
                      {
                        question: "Can I use keyboard shortcuts with this calculator?",
                        answer: "Yes, the calculator supports full keyboard shortcuts for efficient calculations. You can use number keys, operators (+, -, *, /), function keys, and special keys like Enter for equals, Escape for clear, and arrow keys for navigation."
                      },
                      {
                        question: "What angle modes are supported?",
                        answer: "The calculator supports both Degrees and Radians angle modes. You can toggle between them using the DEG/RAD button. This is essential for trigonometric calculations where the angle unit affects the results."
                      },
                      {
                        question: "How do I use the memory functions?",
                        answer: "Memory functions include M+ (add to memory), M- (subtract from memory), MR (memory recall), and MC (memory clear). These allow you to store intermediate results and perform complex calculations that require multiple steps."
                      },
                      {
                        question: "What statistical functions are available?",
                        answer: "Statistical functions include mean calculation, standard deviation, variance, data entry and analysis, regression analysis, and probability calculations. These are essential for engineering, science, and mathematics coursework."
                      },
                      {
                        question: "How accurate are the calculations?",
                        answer: "The calculator provides high-precision calculations with floating-point arithmetic, suitable for professional and academic use. Results are displayed with appropriate precision based on the calculation complexity and input values."
                      },
                      {
                        question: "Can I save my calculation history?",
                        answer: "Yes, the calculator maintains a history of your calculations that you can view, copy, and reuse. The history persists during your session and can be cleared manually. You can also copy individual results to your clipboard."
                      },
                      {
                        question: "Is this calculator suitable for engineering students?",
                        answer: "Absolutely! This calculator includes all functions needed for engineering coursework: trigonometry, logarithms, exponentials, statistical analysis, complex number operations, and advanced mathematical functions required for calculus, physics, and engineering calculations."
                      },
                      {
                        question: "How do I calculate trigonometric functions?",
                        answer: "Use the sin, cos, tan buttons for basic trigonometric functions. For inverse functions, use asin, acos, atan. Make sure to set the correct angle mode (degrees or radians) before calculation. For hyperbolic functions, use sinh, cosh, tanh buttons."
                      },
                      {
                        question: "What are the mathematical constants available?",
                        answer: "The calculator includes π (pi ≈ 3.14159), e (Euler's number ≈ 2.71828), and φ (golden ratio ≈ 1.61803). These constants can be inserted directly into calculations with a single click."
                      },
                      {
                        question: "How do I perform logarithmic calculations?",
                        answer: "Use ln for natural logarithm (base e), log for common logarithm (base 10), and log2 for binary logarithm (base 2). For logarithmic functions with custom bases, use the logx function. For exponential functions, use e^x, 10^x, or 2^x buttons."
                      },
                      {
                        question: "Can I perform complex mathematical operations?",
                        answer: "Yes, the calculator supports complex operations including factorial (n!), combinations (nCr), permutations (nPr), gamma function (Γ), error functions (erf, erfc), and advanced statistical calculations. These are essential for advanced mathematics and engineering applications."
                      },
                      {
                        question: "How do I use the calculator on mobile devices?",
                        answer: "The calculator is fully responsive and works on all mobile devices. You can use touch input for buttons, and the interface automatically adjusts to your screen size. All functions are accessible through the mobile interface."
                      },
                      {
                        question: "Are there any restrictions on calculation frequency or usage?",
                        answer: "Our scientific calculator operates without usage restrictions, allowing you to execute calculations continuously throughout your session. There are no rate limits, subscription requirements, or hidden fees. Your calculation history persists during your active browser session, enabling you to reference previous results and perform extensive mathematical computations without interruption."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 bg-card">
                        <h3 className="font-semibold text-heading-accent mb-2">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <Calculator className="h-6 w-6 text-foreground" />
                    Related Math & Calculator Tools
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: "📊" },
                      { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: "⚖️" },
                      { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: "🎂" },
                      { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: "⏰" },
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: "🏠" },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", href: "/calculator/loan-calculator", icon: "💰" },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: "📋" },
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: "📈" },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: "🎯" },
                      { name: "IP Subnet Calculator", desc: "Calculate IP subnets and network ranges", href: "/calculator/ip-subnet-calculator", icon: "🌐" },
                      { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: "💱" },
                      { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: "🌡️" }
                    ].map(({ name, desc, icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="p-4 bg-card rounded-lg border border-border hover:bg-secondary hover:border-heading-accent-border/50 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{icon}</span>
                          <h3 className="font-semibold text-heading-accent group-hover:text-heading-accent">{name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground">{desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
          </div>

              {}
              <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                        <Clock className="h-3 w-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-semibold text-heading-accent">History</span>
                    </div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {history.length > 0 ? (
                        history.slice(0, 6).map((entry, index) => (
                          <div key={index} className="text-xs text-muted-foreground font-mono break-words p-2 bg-muted rounded border border-border">
                            {entry}
                          </div>
                        ))
                      ) : (
                        <div className="text-sm text-muted-foreground text-center py-4">
                          No calculations yet
                        </div>
                      )}
                    </div>
                    {history.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={clearHistory}
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors border border-border"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Clear
                        </button>
                        <button
                          onClick={copyResult}
                          className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors border border-border"
                        >
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy
                        </button>
                      </div>
                    )}
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
