"use client"

import Head from "next/head"
import TriangleCalculator from "@/components/triangle-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  Triangle, 
  BookOpen,
  TrendingUp,
  Clock,
  Users,
  Star,
  ArrowRight,
  Brain,
  Zap
} from "lucide-react"

// SEO Keywords - 100 priority-based keywords for triangle calculator
const seoKeywords = [
  // Primary Keywords (20 most important)
  "triangle calculator", "triangle area calculator", "triangle perimeter calculator", "triangle angle calculator",
  "right triangle calculator", "triangle sides calculator", "triangle height calculator", "triangle area formula",
  "triangle calculator online", "free triangle calculator", "triangle solver", "triangle properties calculator",
  "triangle type calculator", "triangle area finder", "triangle calculator app", "triangle math calculator",
  "triangle calculator tool", "triangle calculator free", "triangle calculator website", "triangle calculator math",
  
  // Secondary Keywords (30 important)
  "calculate triangle area", "calculate triangle perimeter", "calculate triangle angles", "calculate triangle sides",
  "triangle area formula calculator", "triangle perimeter formula", "triangle angle formula", "triangle side formula",
  "equilateral triangle calculator", "isosceles triangle calculator", "scalene triangle calculator", "right triangle solver",
  "triangle area calculation", "triangle perimeter calculation", "triangle angle calculation", "triangle side calculation",
  "triangle calculator with steps", "triangle calculator step by step", "triangle calculator detailed", "triangle calculator advanced",
  "triangle calculator professional", "triangle calculator accurate", "triangle calculator precise", "triangle calculator reliable",
  "triangle calculator fast", "triangle calculator quick", "triangle calculator easy", "triangle calculator simple",
  "triangle calculator user friendly", "triangle calculator intuitive",
  
  // Long-tail Keywords (30 specific)
  "how to calculate triangle area", "how to calculate triangle perimeter", "how to calculate triangle angles",
  "triangle area calculator with sides", "triangle perimeter calculator with sides", "triangle angle calculator with sides",
  "triangle calculator given sides", "triangle calculator given angles", "triangle calculator given area",
  "triangle calculator given perimeter", "triangle calculator given height", "triangle calculator given base",
  "triangle calculator for students", "triangle calculator for teachers", "triangle calculator for engineers",
  "triangle calculator for architects", "triangle calculator for builders", "triangle calculator for designers",
  "triangle calculator geometry", "triangle calculator trigonometry", "triangle calculator mathematics",
  "triangle calculator algebra", "triangle calculator calculus", "triangle calculator statistics",
  "triangle calculator physics", "triangle calculator engineering", "triangle calculator construction",
  "triangle calculator architecture", "triangle calculator design",
  
  // LSI Keywords (20 related)
  "triangle formulas", "triangle equations", "triangle theorems", "triangle laws", "triangle rules",
  "triangle properties", "triangle characteristics", "triangle features", "triangle attributes", "triangle elements",
  "triangle geometry", "triangle trigonometry", "triangle mathematics", "triangle algebra", "triangle calculus",
  "triangle statistics", "triangle probability", "triangle analysis", "triangle computation", "triangle calculation"
]

export default function TriangleCalculatorPage() {
  return (
    <>
      <Head>
        <title>Triangle Calculator | Free Online Geometry Tool - Calculate Area, Perimeter, Angles & More</title>
        <meta name="description" content="Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods. Free online geometry tool for students and professionals." />
        <meta name="keywords" content={seoKeywords.join(", ")} />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Triangle Calculator | Free Online Geometry Tool" />
        <meta property="og:description" content="Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fasttools.store/tools/triangle-calculator" />
        <meta property="og:site_name" content="FastTools" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Triangle Calculator - FastTools" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Triangle Calculator | Free Online Geometry Tool" />
        <meta name="twitter:description" content="Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
        <meta name="twitter:image:alt" content="Triangle Calculator - FastTools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/tools/triangle-calculator" />
      </Head>

      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Triangle Calculator",
            description: "Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.",
            url: "https://fasttools.store/tools/triangle-calculator",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            browserRequirements: "Requires JavaScript. Requires HTML5.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "Calculate triangle area using multiple formulas",
              "Calculate triangle perimeter and semiperimeter",
              "Calculate all triangle angles from sides",
              "Calculate triangle heights and medians",
              "Calculate inradius and circumradius",
              "Support for SSS, SAS, ASA, AAS, SSA methods",
              "Degree and radian angle units",
              "Triangle type classification",
              "Calculation history and copy results",
              "Professional-grade accuracy"
            ],
            audience: {
              "@type": "EducationalAudience",
              educationalRole: ["student", "teacher", "professional"]
            },
            educationalUse: "instruction",
            learningResourceType: "calculator",
            educationalLevel: "beginner"
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Triangle Calculator - Free Online Geometry Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Instant Results</span>
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
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="h-32 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <TriangleCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  How to Use Triangle Calculator
                </h2>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>Our advanced triangle calculator supports all major triangle solving methods:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>SSS (Side-Side-Side):</strong> Provide all three sides to calculate angles and area</li>
                    <li><strong>SAS (Side-Angle-Side):</strong> Provide two sides and the included angle</li>
                    <li><strong>ASA (Angle-Side-Angle):</strong> Provide two angles and the included side</li>
                    <li><strong>AAS (Angle-Angle-Side):</strong> Provide two angles and a non-included side</li>
                    <li><strong>SSA (Side-Side-Angle):</strong> Provide two sides and a non-included angle</li>
                  </ul>
                  <p>Simply enter your known values and click "Calculate" to get comprehensive triangle properties including area, perimeter, angles, heights, medians, inradius, and circumradius.</p>
                </div>
              </div>

              {/* Triangle Types Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Triangle className="h-6 w-6 text-green-600" />
                  Triangle Types & Properties
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">By Sides:</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li><strong>Equilateral:</strong> All three sides equal</li>
                      <li><strong>Isosceles:</strong> Two sides equal</li>
                      <li><strong>Scalene:</strong> All sides different lengths</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">By Angles:</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li><strong>Acute:</strong> All angles less than 90°</li>
                      <li><strong>Right:</strong> One angle exactly 90°</li>
                      <li><strong>Obtuse:</strong> One angle greater than 90°</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mathematical Formulas Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-purple-600" />
                  Key Mathematical Formulas
                </h2>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Area Formulas:</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 ml-4">
                      <li><strong>Heron's Formula:</strong> A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2</li>
                      <li><strong>Base × Height:</strong> A = ½ × base × height</li>
                      <li><strong>SAS Formula:</strong> A = ½ × a × b × sin(C)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Angle Formulas:</h3>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 ml-4">
                      <li><strong>Law of Cosines:</strong> c² = a² + b² - 2ab cos(C)</li>
                      <li><strong>Law of Sines:</strong> a/sin(A) = b/sin(B) = c/sin(C)</li>
                      <li><strong>Angle Sum:</strong> A + B + C = 180°</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      What triangle solving methods are supported?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our calculator supports all major triangle solving methods: SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), AAS (Angle-Angle-Side), and SSA (Side-Side-Angle). Simply provide any 3 values including at least one side.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      Can I use radians instead of degrees?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Yes! You can switch between degrees and radians using the angle unit selector. When radians are selected, you can enter angles as π/2, π/4, etc.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                      What additional properties does the calculator provide?
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Beyond basic area and perimeter, our calculator provides heights, medians, inradius, circumradius, triangle type classification, and comprehensive geometric properties for complete triangle analysis.
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
                      <a href="https://www.khanacademy.org/math/geometry" className="text-sm font-medium text-blue-800 dark:text-blue-200 hover:underline">
                        Khan Academy - Geometry & Trigonometry
                      </a>
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        Free comprehensive geometry courses and triangle tutorials
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.mathsisfun.com/geometry/triangles.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                        Math is Fun - Triangle Geometry
                      </a>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                        Interactive triangle lessons and visual explanations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.purplemath.com/modules/trig.htm" className="text-sm font-medium text-purple-800 dark:text-purple-200 hover:underline">
                        Purplemath - Trigonometry & Triangles
                      </a>
                      <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                        Advanced trigonometry and triangle solving techniques
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.calculatorsoup.com/calculators/geometry-plane/triangle.php" className="text-sm font-medium text-orange-800 dark:text-orange-200 hover:underline">
                        Calculator Soup - Triangle Calculator
                      </a>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        Professional triangle calculation tools and formulas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <a href="https://www.wolframalpha.com/examples/mathematics/geometry/triangles" className="text-sm font-medium text-teal-800 dark:text-teal-200 hover:underline">
                        Wolfram Alpha - Triangle Examples
                      </a>
                      <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                        Advanced triangle calculations and mathematical examples
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

        {/* Bottom Content Ad */}
        <div className="mt-12">
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="h-32 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
