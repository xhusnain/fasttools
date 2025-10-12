import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { 
  Calculator, 
  BookOpen, 
  Globe, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Brain,
  Zap,
  Triangle,
  Ruler
} from "lucide-react"

export default function TriangleCalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Triangle Calculator Guide - Area, Perimeter, Angles & More",
    description: "Master triangle calculations with our comprehensive guide covering area, perimeter, angles, heights, medians, trigonometry, geometry formulas, and advanced geometric properties for students and professionals.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization", 
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/triangle-calculator-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Triangle Calculator Guide"
    },
    articleSection: "Education",
    wordCount: 4000,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    educationalLevel: "beginner",
    learningResourceType: "guide",
    educationalUse: "instruction",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    }
  }

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Triangle className="h-4 w-4" />
            Advanced Geometry Calculator
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Complete Triangle Calculator Guide
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8">
            Master triangle calculations with comprehensive formulas, examples, and professional techniques for students, engineers, and architects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>25 min read</span>
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
          
          {/* Try Triangle Calculator Button */}
          <div className="mt-8">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 text-lg">
              <Link href="/tools/triangle-calculator">
                <Triangle className="mr-2 h-5 w-5" />
                Try Triangle Calculator
              </Link>
            </Button>
          </div>
        </div>

        {/* Content Ad */}
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

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link href="#what-is-triangle" className="block text-primary hover:underline">
                1. What is a Triangle Calculator?
              </Link>
              <Link href="#triangle-types" className="block text-primary hover:underline">
                2. Triangle Types and Classification
              </Link>
              <Link href="#solving-methods" className="block text-primary hover:underline">
                3. Triangle Solving Methods (SSS, SAS, ASA, AAS, SSA)
              </Link>
              <Link href="#area-formulas" className="block text-primary hover:underline">
                4. Area Calculation Formulas
              </Link>
              <Link href="#advanced-properties" className="block text-primary hover:underline">
                5. Advanced Triangle Properties
              </Link>
              <Link href="#practical-examples" className="block text-primary hover:underline">
                6. Practical Examples and Applications
              </Link>
              <Link href="#faq" className="block text-primary hover:underline">
                7. Frequently Asked Questions
              </Link>
            </nav>
          </CardContent>
        </Card>

        {/* Official Documentation References */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <BookOpen className="h-5 w-5" />
                Official Documentation References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                These official sources provide authoritative information about triangle geometry, mathematical standards, and geometric calculations:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.nist.gov/pml/special-publication-811" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST Special Publication 811 - Guide for the Use of the International System of Units
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official mathematical constants and geometric standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://mathworld.wolfram.com/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Wolfram MathWorld - The Web's Most Extensive Mathematics Resource
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Wolfram Research - Comprehensive geometric function definitions and triangle properties
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.ams.org/publications/journals/notices" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      American Mathematical Society - Notices of the AMS
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      AMS - Professional mathematical society publications and geometric standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.ieee.org/education" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE Educational Resources - Engineering Mathematics
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Institute of Electrical and Electronics Engineers - Engineering calculation standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.calculator.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Calculator.org - Official Calculator Documentation
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Calculator.org - Standard calculator function definitions and usage guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.khanacademy.org/math/geometry" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Khan Academy - Geometry and Trigonometry
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Khan Academy - Free educational resources for triangle geometry and trigonometry
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.mathsisfun.com/geometry/triangles.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Math is Fun - Triangle Geometry
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Math is Fun - Interactive triangle geometry lessons and calculators
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.purplemath.com/modules/trig.htm" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Purplemath - Trigonometry and Triangles
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Purplemath - Comprehensive trigonometry and triangle solving tutorials
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <Link href="https://www.calculatorsoup.com/calculators/geometry-plane/triangle.php" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Calculator Soup - Triangle Calculator
                    </Link>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Calculator Soup - Professional triangle calculation tools and formulas
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What is a Triangle Calculator */}
          <section id="what-is-triangle" className="mb-16">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400 text-xl">
                  <Calculator className="h-6 w-6" />
                  What is a Triangle Calculator?
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
                  A triangle calculator is an advanced mathematical tool designed to solve triangle problems and calculate various geometric properties. Unlike basic calculators, it handles complex triangle solving methods including SSS (Side-Side-Side), SAS (Side-Angle-Side), ASA (Angle-Side-Angle), AAS (Angle-Angle-Side), and SSA (Side-Side-Angle) configurations. This comprehensive tool is essential for students, engineers, architects, and professionals working with geometry, trigonometry, surveying, and construction.
                </p>
                <h3 className="text-lg font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-200">Key Features of Our Triangle Calculator:</h3>
                <ul className="list-disc list-inside space-y-3 text-sm text-slate-600 dark:text-slate-400 ml-4">
                  <li>Calculate area using multiple formulas (Heron's formula, base×height, SAS formula)</li>
                  <li>Determine all angles from sides using Law of Cosines and Law of Sines</li>
                  <li>Calculate heights, medians, inradius, circumradius, and centroid</li>
                  <li>Classify triangle types (equilateral, isosceles, scalene, acute, right, obtuse)</li>
                  <li>Support for both degrees and radians with trigonometric functions</li>
                  <li>Professional-grade accuracy for engineering and construction applications</li>
                  <li>Pythagorean theorem calculations for right triangles</li>
                  <li>Advanced geometric properties including orthocenter and circumcenter</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Triangle Types and Classification */}
          <section id="triangle-types" className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Triangle className="h-5 w-5" />
                  Triangle Types and Classification
                </CardTitle>
              </CardHeader>
                      <CardContent>
                          <p className="mb-4 text-slate-700 dark:text-slate-300">
                              Understanding triangle classification is fundamental to geometry. Triangles can be classified by their sides and angles, each type having unique properties and applications.
                          </p>

                          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Classification by Sides:</h3>
                          <div className="grid md:grid-cols-3 gap-4 mb-6">
                              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Equilateral Triangle</h4>
                                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">All three sides are equal in length.</p>
                                  <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                                      <li>• All angles are 60°</li>
                                      <li>• Three lines of symmetry</li>
                                      <li>• Highest degree of regularity</li>
                                  </ul>
                              </div>
                              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Isosceles Triangle</h4>
                                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Two sides are equal in length.</p>
                                  <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                                      <li>• Two equal angles</li>
                                      <li>• One line of symmetry</li>
                                      <li>• Common in architecture</li>
                                  </ul>
                              </div>
                              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Scalene Triangle</h4>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">All sides have different lengths.</p>
                                  <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                                      <li>• All angles are different</li>
                                      <li>• No lines of symmetry</li>
                                      <li>• Most general triangle type</li>
                                  </ul>
                              </div>
                          </div>

                          <h3 className="text-lg font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">Classification by Angles:</h3>
                          <div className="grid md:grid-cols-3 gap-4">
                              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Acute Triangle</h4>
                                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">All angles are less than 90°.</p>
                                  <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                                      <li>• All angles &lt; 90°</li>
                                      <li>• Most common type</li>
                                      <li>• Used in trigonometry</li>
                                  </ul>
                              </div>
                              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Right Triangle</h4>
                                  <p className="text-sm text-red-700 dark:text-red-300 mb-2">One angle is exactly 90°.</p>
                                  <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                                      <li>• One 90° angle</li>
                                      <li>• Pythagorean theorem applies</li>
                                      <li>• Foundation of trigonometry</li>
                                  </ul>
                              </div>
                              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Obtuse Triangle</h4>
                                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">One angle is greater than 90°.</p>
                                  <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                                      <li>• One angle &gt; 90°</li>
                                      <li>• Less common in practice</li>
                                      <li>• Special geometric properties</li>
                                  </ul>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* Triangle Solving Methods */}
              <section id="solving-methods" className="mb-16">
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                              <Ruler className="h-5 w-5" />
                              Triangle Solving Methods (SSS, SAS, ASA, AAS, SSA)
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="mb-4 text-slate-700 dark:text-slate-300">
                              Triangle solving methods are systematic approaches to determine all unknown sides and angles of a triangle when given specific information. Each method has its own requirements and applications.
                          </p>

                          <div className="space-y-6">
                              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">SSS (Side-Side-Side)</h3>
                                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                      <strong>Given:</strong> All three sides of the triangle
                                  </p>
                                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                      <strong>Method:</strong> Use the Law of Cosines to find angles, then verify with Law of Sines
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-blue-600 dark:text-blue-400">
                                          A = arccos((b² + c² - a²) / (2bc))<br/>
                                          B = arccos((a² + c² - b²) / (2ac))<br/>
                                          C = arccos((a² + b² - c²) / (2ab))
                                      </code>
                                  </div>
                              </div>

                              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">SAS (Side-Angle-Side)</h3>
                                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                      <strong>Given:</strong> Two sides and the included angle
                                  </p>
                                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                      <strong>Method:</strong> Use Law of Cosines to find the third side, then Law of Sines for remaining angles
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-green-600 dark:text-green-400">
                                          c = √(a² + b² - 2ab cos(C))<br/>
                                          A = arcsin((a sin(C)) / c)<br/>
                                          B = 180° - A - C
                                      </code>
                                  </div>
                              </div>

                              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">ASA (Angle-Side-Angle)</h3>
                                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                                      <strong>Given:</strong> Two angles and the included side
                                  </p>
                                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                                      <strong>Method:</strong> Find the third angle, then use Law of Sines for remaining sides
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-purple-600 dark:text-purple-400">
                                          C = 180° - A - B<br/>
                                          b = (a sin(B)) / sin(A)<br/>
                                          c = (a sin(C)) / sin(A)
                                      </code>
                                  </div>
                              </div>

                              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">AAS (Angle-Angle-Side)</h3>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                                      <strong>Given:</strong> Two angles and a non-included side
                                  </p>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                                      <strong>Method:</strong> Find the third angle, then use Law of Sines for remaining sides
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-orange-600 dark:text-orange-400">
                                          C = 180° - A - B<br/>
                                          b = (a sin(B)) / sin(A)<br/>
                                          c = (a sin(C)) / sin(A)
                                      </code>
                                  </div>
                              </div>

                              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">SSA (Side-Side-Angle)</h3>
                                  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                                      <strong>Given:</strong> Two sides and a non-included angle
                                  </p>
                                  <p className="text-sm text-red-700 dark:text-red-300 mb-3">
                                      <strong>Method:</strong> Use Law of Sines (may have 0, 1, or 2 solutions)
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-red-600 dark:text-red-400">
                                          B = arcsin((b sin(A)) / a)<br/>
                                          C = 180° - A - B<br/>
                                          c = (a sin(C)) / sin(A)
                                      </code>
                                  </div>
                                  <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                                      <strong>Note:</strong> SSA can be ambiguous - check for multiple solutions
                                  </p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* Area Calculation Formulas */}
              <section id="area-formulas" className="mb-16">
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                              <Calculator className="h-5 w-5" />
                              Area Calculation Formulas
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="mb-4 text-slate-700 dark:text-slate-300">
                              Triangle area can be calculated using various formulas depending on the available information. Each method has specific advantages and use cases.
                          </p>

                          <div className="space-y-6">
                              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Heron's Formula</h3>
                                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                      <strong>When to use:</strong> When all three sides are known
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-blue-600 dark:text-blue-400">
                                          s = (a + b + c) / 2<br/>
                                          Area = √(s(s-a)(s-b)(s-c))
                                      </code>
                                  </div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                                      <strong>Advantage:</strong> No need for angles or heights
                                  </p>
                              </div>

                              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Base × Height Formula</h3>
                                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                      <strong>When to use:</strong> When base and height are known
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-green-600 dark:text-green-400">
                                          Area = (1/2) × base × height
                                      </code>
                                  </div>
                                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                                      <strong>Advantage:</strong> Most intuitive and commonly taught
                                  </p>
                              </div>

                              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">SAS Formula</h3>
                                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                                      <strong>When to use:</strong> When two sides and the included angle are known
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-purple-600 dark:text-purple-400">
                                          Area = (1/2) × a × b × sin(C)
                                      </code>
                                  </div>
                                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                                      <strong>Advantage:</strong> Direct calculation from sides and angle
                                  </p>
                              </div>

                              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">Coordinate Geometry Formula</h3>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                                      <strong>When to use:</strong> When vertices are given as coordinates
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-orange-600 dark:text-orange-400">
                                          Area = (1/2) |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|
                                      </code>
                                  </div>
                                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                                      <strong>Advantage:</strong> Works with any coordinate system
                                  </p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* Advanced Triangle Properties */}
              <section id="advanced-properties" className="mb-16">
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                              <Zap className="h-5 w-5" />
                              Advanced Triangle Properties
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="mb-4 text-slate-700 dark:text-slate-300">
                              Beyond basic area and perimeter calculations, triangles have many advanced geometric properties that are essential for engineering, architecture, and advanced mathematics.
                          </p>

                          <div className="space-y-6">
                              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Heights (Altitudes)</h3>
                                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                      The perpendicular distance from a vertex to the opposite side (or its extension).
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-blue-600 dark:text-blue-400">
                                          hₐ = (2 × Area) / a<br/>
                                          hᵦ = (2 × Area) / b<br/>
                                          hᶜ = (2 × Area) / c
                                      </code>
                                  </div>
                                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                                      <strong>Application:</strong> Used in construction, surveying, and 3D modeling
                                  </p>
                              </div>

                              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Medians</h3>
                                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                                      Line segments from a vertex to the midpoint of the opposite side.
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-green-600 dark:text-green-400">
                                          mₐ = (1/2)√(2b² + 2c² - a²)<br/>
                                          mᵦ = (1/2)√(2a² + 2c² - b²)<br/>
                                          mᶜ = (1/2)√(2a² + 2b² - c²)
                                      </code>
                                  </div>
                                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                                      <strong>Application:</strong> Center of mass calculations, structural analysis
                                  </p>
                              </div>

                              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Inradius and Circumradius</h3>
                                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                                      The radius of the inscribed circle (inradius) and circumscribed circle (circumradius).
                                  </p>
                                  <div className="bg-white dark:bg-slate-800 p-3 rounded border">
                                      <code className="text-sm text-purple-600 dark:text-purple-400">
                                          r = Area / s (inradius)<br/>
                                          R = (abc) / (4 × Area) (circumradius)
                                      </code>
                                  </div>
                                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                                      <strong>Application:</strong> Circle packing, optimization problems, geometric design
                                  </p>
                              </div>

                              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">Centroid, Circumcenter, and Orthocenter</h3>
                                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                                      Special points of intersection in triangles with unique properties.
                                  </p>
                                  <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                                      <li><strong>Centroid:</strong> Intersection of medians (center of mass)</li>
                                      <li><strong>Circumcenter:</strong> Intersection of perpendicular bisectors</li>
                                      <li><strong>Orthocenter:</strong> Intersection of altitudes</li>
                                      <li><strong>Incenter:</strong> Intersection of angle bisectors</li>
                                  </ul>
                                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                                      <strong>Application:</strong> Computer graphics, robotics, navigation systems
                                  </p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* Practical Examples and Applications */}
              <section id="practical-examples" className="mb-16">
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
                              <Brain className="h-5 w-5" />
                              Practical Examples and Applications
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="mb-4 text-slate-700 dark:text-slate-300">
                              Triangle calculations are essential in many real-world applications across various industries and academic disciplines.
                          </p>

                          <div className="space-y-6">
                              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">Engineering Applications</h3>
                                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                                      <li><strong>Structural Engineering:</strong> Calculating forces in truss systems, beam analysis</li>
                                      <li><strong>Civil Engineering:</strong> Surveying, land measurement, road construction</li>
                                      <li><strong>Mechanical Engineering:</strong> Gear design, linkage analysis, stress calculations</li>
                                      <li><strong>Electrical Engineering:</strong> Power system analysis, antenna design</li>
                                  </ul>
                              </div>

                              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Architecture and Construction</h3>
                                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                                      <li><strong>Roof Design:</strong> Calculating roof angles, material requirements</li>
                                      <li><strong>Foundation Planning:</strong> Load distribution, structural integrity</li>
                                      <li><strong>Interior Design:</strong> Space optimization, furniture placement</li>
                                      <li><strong>Landscaping:</strong> Garden design, irrigation planning</li>
                                  </ul>
                              </div>

                              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">Computer Graphics and Gaming</h3>
                                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                                      <li><strong>3D Modeling:</strong> Mesh generation, surface calculations</li>
                                      <li><strong>Game Development:</strong> Collision detection, physics simulation</li>
                                      <li><strong>Animation:</strong> Character rigging, motion capture</li>
                                      <li><strong>Virtual Reality:</strong> Spatial tracking, environment mapping</li>
                                  </ul>
                              </div>

                              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">Scientific Research</h3>
                                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                                      <li><strong>Physics:</strong> Vector analysis, force calculations, wave propagation</li>
                                      <li><strong>Chemistry:</strong> Molecular geometry, crystal structure analysis</li>
                                      <li><strong>Biology:</strong> Protein folding, DNA structure, evolutionary analysis</li>
                                      <li><strong>Astronomy:</strong> Celestial mechanics, orbital calculations</li>
                                  </ul>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="mb-16">
                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                              <BookOpen className="h-5 w-5" />
                              Frequently Asked Questions
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <div className="space-y-6">
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What is the difference between SSS, SAS, ASA, AAS, and SSA triangle solving methods?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      These are different combinations of given information for solving triangles:
                                      <br/>• <strong>SSS:</strong> All three sides known
                                      <br/>• <strong>SAS:</strong> Two sides and included angle
                                      <br/>• <strong>ASA:</strong> Two angles and included side
                                      <br/>• <strong>AAS:</strong> Two angles and non-included side
                                      <br/>• <strong>SSA:</strong> Two sides and non-included angle (can be ambiguous)
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      When should I use Heron's formula vs. the base×height formula?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      Use <strong>Heron's formula</strong> when you know all three sides but not the height. Use the <strong>base×height formula</strong> when you have a base and its corresponding height. Heron's formula is more versatile as it doesn't require calculating heights.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What is the Law of Sines and when is it used?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      The Law of Sines states that a/sin(A) = b/sin(B) = c/sin(C). It's used when you have:
                                      <br/>• Two angles and one side (ASA, AAS)
                                      <br/>• Two sides and a non-included angle (SSA)
                                      <br/>• To verify results from other methods
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What is the Law of Cosines and when is it used?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      The Law of Cosines states that c² = a² + b² - 2ab cos(C). It's used when you have:
                                      <br/>• All three sides (SSS) to find angles
                                      <br/>• Two sides and included angle (SAS) to find the third side
                                      <br/>• It's a generalization of the Pythagorean theorem
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      Why is the SSA case sometimes ambiguous?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      SSA can have 0, 1, or 2 solutions depending on the given values. This happens because the Law of Sines can produce multiple valid angles. You need to check if the triangle inequality holds and verify all solutions.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      How accurate are triangle calculator results?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      Our calculator provides results accurate to 6 decimal places, which is sufficient for most engineering, architectural, and scientific applications. For critical calculations, always verify results using multiple methods.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What is the Pythagorean theorem and when is it used?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse. It's used to find missing sides in right triangles and is fundamental to trigonometry, construction, and navigation.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      How do I calculate triangle area without height?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      Use Heron's formula: Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2. This formula only requires the three side lengths and works for any triangle type. It's particularly useful when height is difficult to measure.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What are the special right triangles?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      Special right triangles have predictable side ratios: 30°-60°-90° triangles have sides in ratio 1:√3:2, and 45°-45°-90° triangles have sides in ratio 1:1:√2. These are commonly used in trigonometry and construction.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      How do I find the centroid of a triangle?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      The centroid is the intersection point of all three medians. It's located at 2/3 of the distance from each vertex to the midpoint of the opposite side. The centroid is also the center of mass of the triangle.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      What is the difference between inradius and circumradius?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      The inradius (r) is the radius of the circle inscribed inside the triangle, while the circumradius (R) is the radius of the circle that passes through all three vertices. For any triangle, R ≥ 2r (Euler's inequality).
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      How do I solve triangles in surveying and engineering?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      In surveying, use the Law of Sines for distance measurements and the Law of Cosines for angle calculations. For engineering applications, consider factors like material properties, load distribution, and safety margins in your calculations.
                                  </p>
                              </div>
                              
                              <div>
                                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                      Can I use triangle calculators for 3D geometry?
                                  </h3>
                                  <p className="text-slate-600 dark:text-slate-400">
                                      While our calculator focuses on 2D triangles, the principles apply to 3D geometry. For 3D applications, you'll need to project triangles onto planes or use vector mathematics to handle spatial relationships.
                                  </p>
                              </div>
                          </div>
                      </CardContent>
                  </Card>
              </section>

              {/* Call to Action */}
              <div className="text-center mt-12">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Calculate Triangles?</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                      Use our advanced triangle calculator to solve complex geometric problems instantly...
                  </p>
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Link href="/tools/triangle-calculator">
                          Try Our Triangle Calculator
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
          </div>
      </div>
    </>
  )
}
