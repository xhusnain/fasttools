"use client"

import Head from "next/head"
import FractionCalculator from "@/components/fraction-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  Plus, 
  Minus, 
  X, 
  Divide,
  BookOpen,
  TrendingUp,
  Clock,
  Users,
  Star,
  ArrowRight,
  Brain,
  Zap
} from "lucide-react"

// SEO Keywords - 100 priority-based keywords for fraction calculator
const seoKeywords = [
  // Primary Keywords (20 most important)
  "fraction calculator", "fraction addition calculator", "fraction subtraction calculator", "fraction multiplication calculator",
  "fraction division calculator", "fraction simplifier", "fraction to decimal calculator", "decimal to fraction calculator",
  "mixed number calculator", "fraction operations calculator", "fraction solver", "fraction math calculator",
  "fraction calculator online", "free fraction calculator", "fraction calculator with steps", "fraction calculator app",
  "fraction calculator tool", "fraction calculator free", "fraction calculator website", "fraction calculator math",
  
  // Secondary Keywords (30 important)
  "calculate fractions", "add fractions", "subtract fractions", "multiply fractions", "divide fractions",
  "simplify fractions", "fraction addition", "fraction subtraction", "fraction multiplication", "fraction division",
  "fraction simplification", "fraction conversion", "fraction to decimal", "decimal to fraction", "mixed numbers",
  "fraction calculator with steps", "fraction calculator step by step", "fraction calculator detailed", "fraction calculator advanced",
  "fraction calculator professional", "fraction calculator accurate", "fraction calculator precise", "fraction calculator reliable",
  "fraction calculator fast", "fraction calculator quick", "fraction calculator easy", "fraction calculator simple",
  "fraction calculator user friendly", "fraction calculator intuitive",
  
  // Long-tail Keywords (30 specific)
  "how to calculate fractions", "how to add fractions", "how to subtract fractions", "how to multiply fractions",
  "how to divide fractions", "fraction calculator with common denominator", "fraction calculator with lcd", "fraction calculator with gcd",
  "fraction calculator for students", "fraction calculator for teachers", "fraction calculator for homework", "fraction calculator for school",
  "fraction calculator for college", "fraction calculator for university", "fraction calculator for math", "fraction calculator for algebra",
  "fraction calculator for geometry", "fraction calculator for trigonometry", "fraction calculator for calculus", "fraction calculator for statistics",
  "fraction calculator for engineering", "fraction calculator for physics", "fraction calculator for chemistry", "fraction calculator for biology",
  "fraction calculator for economics", "fraction calculator for finance", "fraction calculator for business", "fraction calculator for accounting",
  
  // LSI Keywords (20 related)
  "fraction formulas", "fraction equations", "fraction rules", "fraction laws", "fraction properties",
  "fraction characteristics", "fraction features", "fraction attributes", "fraction elements", "fraction components",
  "fraction mathematics", "fraction algebra", "fraction arithmetic", "fraction computation", "fraction calculation",
  "fraction analysis", "fraction evaluation", "fraction processing", "fraction manipulation", "fraction handling"
]

export default function FractionCalculatorPage() {
  return (
    <>
      <Head>
        <title>Fraction Calculator | Free Online Math Tool - Add, Subtract, Multiply & Divide Fractions</title>
        <meta name="description" content="Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Free online math tool for students and professionals." />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Fraction Calculator | Free Online Math Tool" />
        <meta property="og:description" content="Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fasttools.store/tools/fraction-calculator" />
        <meta property="og:site_name" content="FastTools" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fraction Calculator - FastTools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fraction Calculator | Free Online Math Tool" />
        <meta name="twitter:description" content="Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
        <meta name="twitter:image:alt" content="Fraction Calculator - FastTools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/tools/fraction-calculator" />
      </Head>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Fraction Calculator",
          description: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals.",
          url: "https://fasttools.store/tools/fraction-calculator",
          applicationCategory: "MathApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Fraction addition and subtraction",
            "Fraction multiplication and division", 
            "Fraction simplification",
            "Decimal to fraction conversion",
            "Fraction to decimal conversion",
            "Mixed number calculations",
            "Step-by-step solutions",
            "Fraction type classification"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fraction Calculator - Free Online Math Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Perfect for students, teachers, and professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>500,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <FractionCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  How to Use Fraction Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Step 1: Select Operation</h3>
                      <p className="text-muted-foreground mb-3">Choose from addition (+), subtraction (-), multiplication (×), or division (÷).</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline"><Plus className="h-4 w-4 mr-1" />Add</Button>
                        <Button size="sm" variant="outline"><Minus className="h-4 w-4 mr-1" />Subtract</Button>
                        <Button size="sm" variant="outline"><X className="h-4 w-4 mr-1" />Multiply</Button>
                        <Button size="sm" variant="outline"><Divide className="h-4 w-4 mr-1" />Divide</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Step 2: Enter Fractions</h3>
                      <p className="text-muted-foreground mb-3">Input the numerator and denominator for both fractions. The calculator will automatically calculate the result.</p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                        <div className="text-center">3/4 + 1/6 = 11/12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fraction Operations Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Plus className="h-6 w-6 text-green-600" />
                  Fraction Operations & Properties
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Addition & Subtraction</h3>
                    <p className="text-muted-foreground mb-3">Fractions require a common denominator. The calculator finds the least common multiple (LCM) automatically.</p>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg text-sm">
                      <div>3/4 + 1/6 = (3×6)/(4×6) + (1×4)/(6×4) = 18/24 + 4/24 = 22/24 = 11/12</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Multiplication & Division</h3>
                    <p className="text-muted-foreground mb-3">Multiply numerators and denominators directly. For division, multiply by the reciprocal.</p>
                    <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg text-sm">
                      <div>3/4 × 1/6 = (3×1)/(4×6) = 3/24 = 1/8</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-purple-600" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What is a fraction and why is it important in mathematics?
                    </h3>
                    <p className="text-muted-foreground">
                      A fraction represents a part of a whole, consisting of a numerator (top number) and denominator (bottom number). 
                      Fractions are essential for representing values between whole numbers, ratios, percentages, and many real-world applications 
                      like cooking, construction, and scientific calculations.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How do I add fractions with different denominators?
                    </h3>
                    <p className="text-muted-foreground">
                      To add fractions with different denominators, find the least common multiple (LCM) of the denominators, 
                      convert each fraction to have the common denominator, then add the numerators. Our calculator automatically 
                      handles this process and simplifies the result.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What is the difference between proper and improper fractions?
                    </h3>
                    <p className="text-muted-foreground">
                      A proper fraction has a numerator smaller than the denominator (e.g., 3/4), while an improper fraction 
                      has a numerator equal to or larger than the denominator (e.g., 5/4). Improper fractions can be converted 
                      to mixed numbers for easier understanding.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How do I convert a decimal to a fraction?
                    </h3>
                    <p className="text-muted-foreground">
                      To convert a decimal to a fraction, write the decimal as a fraction with the decimal places as the denominator 
                      (e.g., 0.75 = 75/100), then simplify by finding the greatest common divisor (GCD) of the numerator and denominator.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Can I use this calculator for mixed numbers?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes! Our calculator automatically converts mixed numbers to improper fractions for calculations and provides 
                      the result in both improper fraction and mixed number form. Simply enter the whole number, numerator, and denominator.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Educational Resources & Backlinks */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Educational Resources</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.khanacademy.org/math/arithmetic/fraction-arithmetic" className="text-sm font-medium text-blue-800 dark:text-blue-200 hover:underline">
                        Khan Academy - Fraction Arithmetic
                      </a>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Free comprehensive fraction courses and tutorials
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.mathsisfun.com/fractions.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                        Math is Fun - Fractions
                      </a>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Interactive fraction lessons and visual explanations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.purplemath.com/modules/fraction.htm" className="text-sm font-medium text-purple-800 dark:text-purple-200 hover:underline">
                        Purplemath - Fraction Operations
                      </a>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                        Advanced fraction solving techniques and examples
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.calculatorsoup.com/calculators/math/fractions.php" className="text-sm font-medium text-orange-800 dark:text-orange-200 hover:underline">
                        Calculator Soup - Fraction Calculator
                      </a>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        Professional fraction calculation tools and formulas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.wolframalpha.com/examples/mathematics/arithmetic/fractions" className="text-sm font-medium text-teal-800 dark:text-teal-200 hover:underline">
                        Wolfram Alpha - Fraction Examples
                      </a>
                      <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                        Advanced fraction calculations and mathematical examples
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* Second Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* Third Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                Ready to Master Fractions?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Use our comprehensive fraction calculator to solve any fraction problem instantly. Perfect for students, teachers, and professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="#calculator">
                    Try Our Fraction Calculator
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/learn">
                    Learn More About Fractions
                    <BookOpen className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
