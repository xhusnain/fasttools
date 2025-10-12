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
  Square,
  Pi,
  Target,
  Award,
  Lightbulb
} from "lucide-react"

export default function ScientificCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Scientific Calculator Guide - Master Advanced Mathematics
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Learn everything about scientific calculators: trigonometric functions, logarithmic operations, statistical calculations, and advanced mathematical concepts. Perfect for students, engineers, and professionals.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>30 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>1M+ students helped</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>4.9/5 rating</span>
          </div>
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
              These official sources provide authoritative information about mathematical functions and scientific calculations:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <Link href="https://www.nist.gov/pml/special-publication-811" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    NIST Special Publication 811 - Guide for the Use of the International System of Units
                  </Link>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    National Institute of Standards and Technology - Official mathematical constants and units
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
                    Wolfram Research - Comprehensive mathematical function definitions and properties
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
                    AMS - Professional mathematical society publications and standards
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
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="space-y-12">
        {/* What is a Scientific Calculator */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-500" />
                What is a Scientific Calculator? Complete Guide for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A scientific calculator is an advanced mathematical tool designed to perform complex calculations beyond basic arithmetic. Unlike standard calculators, scientific calculators include specialized functions for trigonometry, logarithms, statistical analysis, and engineering calculations.
              </p>
              <p className="text-muted-foreground mb-4">
                Our free online scientific calculator provides professional-grade functionality accessible from any device. Perfect for students studying mathematics, physics, chemistry, engineering, and advanced sciences.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Key Features for Students:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 dark:text-blue-300">
                  <li><strong>Trigonometric Functions:</strong> sin, cos, tan, asin, acos, atan for angle calculations</li>
                  <li><strong>Logarithmic Functions:</strong> ln (natural log), log (base 10), log₂ (binary log)</li>
                  <li><strong>Power and Root Functions:</strong> x², x³, √x, ∛x, xʸ for exponential calculations</li>
                  <li><strong>Statistical Functions:</strong> mean, standard deviation, variance for data analysis</li>
                  <li><strong>Memory Functions:</strong> M+, M-, MR, MC for storing intermediate results</li>
                  <li><strong>Mathematical Constants:</strong> π (pi), e (Euler's number), φ (golden ratio)</li>
                  <li><strong>Advanced Mathematics:</strong> factorial, combinations, permutations</li>
                  <li><strong>Angle Modes:</strong> Degrees and radians for different calculations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Trigonometric Functions Explained */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Trigonometric Functions - Complete Student Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Trigonometric functions are essential for solving problems involving angles, triangles, and periodic phenomena. Understanding these functions is crucial for students in mathematics, physics, and engineering.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Basic Trigonometric Functions</h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Sine Function (sin)</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          The sine of an angle represents the ratio of the opposite side to the hypotenuse in a right triangle. 
                          <strong>Example:</strong> sin(30°) = 0.5, sin(90°) = 1
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Cosine Function (cos)</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          The cosine of an angle represents the ratio of the adjacent side to the hypotenuse in a right triangle.
                          <strong>Example:</strong> cos(60°) = 0.5, cos(0°) = 1
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Tangent Function (tan)</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          The tangent of an angle represents the ratio of the opposite side to the adjacent side in a right triangle.
                          <strong>Example:</strong> tan(45°) = 1, tan(30°) = 0.577
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Inverse Trigonometric Functions</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Arcsin (sin⁻¹)</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Returns the angle whose sine is the given value. Used to find angles from sine ratios.
                          <strong>Example:</strong> arcsin(0.5) = 30°
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Arccos (cos⁻¹)</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Returns the angle whose cosine is the given value. Used to find angles from cosine ratios.
                          <strong>Example:</strong> arccos(0.5) = 60°
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Arctan (tan⁻¹)</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Returns the angle whose tangent is the given value. Used to find angles from tangent ratios.
                          <strong>Example:</strong> arctan(1) = 45°
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Common Trigonometric Values Students Should Know:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p><strong>0°:</strong> sin=0, cos=1, tan=0</p>
                      <p><strong>30°:</strong> sin=0.5, cos=0.866, tan=0.577</p>
                    </div>
                    <div>
                      <p><strong>45°:</strong> sin=0.707, cos=0.707, tan=1</p>
                      <p><strong>60°:</strong> sin=0.866, cos=0.5, tan=1.732</p>
                    </div>
                    <div>
                      <p><strong>90°:</strong> sin=1, cos=0, tan=∞</p>
                      <p><strong>180°:</strong> sin=0, cos=-1, tan=0</p>
                    </div>
                    <div>
                      <p><strong>270°:</strong> sin=-1, cos=0, tan=∞</p>
                      <p><strong>360°:</strong> sin=0, cos=1, tan=0</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Logarithmic Functions Explained */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                Logarithmic Functions - Student Learning Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Logarithmic functions are fundamental in mathematics, science, and engineering. They help solve exponential equations and model growth and decay processes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Types of Logarithms</h3>
                    <div className="space-y-3">
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Natural Logarithm (ln)</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Base e logarithm, where e ≈ 2.718. Used in calculus, physics, and natural growth models.
                          <strong>Examples:</strong> ln(e) = 1, ln(1) = 0, ln(2.718) = 1
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Common Logarithm (log)</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Base 10 logarithm. Used in scientific notation and pH calculations in chemistry.
                          <strong>Examples:</strong> log(100) = 2, log(10) = 1, log(1) = 0
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Binary Logarithm (log₂)</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Base 2 logarithm. Used in computer science, information theory, and binary calculations.
                          <strong>Examples:</strong> log₂(8) = 3, log₂(4) = 2, log₂(2) = 1
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Exponential Functions</h3>
                    <div className="space-y-3">
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200">Natural Exponential (eˣ)</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          e raised to the power of x. Used in compound interest, population growth, and radioactive decay.
                          <strong>Examples:</strong> e¹ = 2.718, e⁰ = 1, e^(ln(2)) = 2
                        </p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200">Power of 10 (10ˣ)</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          10 raised to the power of x. Used in scientific notation and logarithmic scales.
                          <strong>Examples:</strong> 10² = 100, 10¹ = 10, 10⁰ = 1
                        </p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200">Power of 2 (2ˣ)</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          2 raised to the power of x. Used in computer science, binary systems, and doubling problems.
                          <strong>Examples:</strong> 2³ = 8, 2² = 4, 2¹ = 2
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold mb-2 text-indigo-800 dark:text-indigo-200">Logarithm Properties for Students:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Product Rule:</strong> log(ab) = log(a) + log(b)</p>
                      <p><strong>Quotient Rule:</strong> log(a/b) = log(a) - log(b)</p>
                      <p><strong>Power Rule:</strong> log(aⁿ) = n·log(a)</p>
                    </div>
                    <div>
                      <p><strong>Change of Base:</strong> logₐ(x) = log(x)/log(a)</p>
                      <p><strong>Natural Log:</strong> ln(x) = log(x)/log(e)</p>
                      <p><strong>Common Values:</strong> ln(1)=0, ln(e)=1</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mathematical Constants Explained */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pi className="h-5 w-5 text-orange-500" />
                Mathematical Constants - Essential Knowledge for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Mathematical constants are fundamental values that appear throughout mathematics, science, and engineering. Understanding these constants is essential for students in advanced mathematics and science courses.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-lg text-orange-800 dark:text-orange-200 mb-3">Pi (π)</h3>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                      <strong>Value:</strong> π ≈ 3.14159
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                      <strong>Definition:</strong> The ratio of a circle's circumference to its diameter.
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      <strong>Uses:</strong> Geometry, trigonometry, physics, engineering calculations involving circles and periodic functions.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-lg text-green-800 dark:text-green-200 mb-3">Euler's Number (e)</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      <strong>Value:</strong> e ≈ 2.71828
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      <strong>Definition:</strong> The base of natural logarithms, defined as the limit of (1 + 1/n)ⁿ as n approaches infinity.
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>Uses:</strong> Calculus, compound interest, population growth, radioactive decay, probability theory.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-200 mb-3">Golden Ratio (φ)</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                      <strong>Value:</strong> φ ≈ 1.61803
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                      <strong>Definition:</strong> The ratio where the sum of two quantities equals the ratio of the larger to the smaller.
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      <strong>Uses:</strong> Art, architecture, nature patterns, Fibonacci sequences, optimization problems.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Statistical Functions Guide */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-red-500" />
                Statistical Functions - Data Analysis for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Statistical functions help students analyze data, understand patterns, and make informed decisions. These functions are essential for research, experiments, and data interpretation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Basic Statistical Functions</h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Mean (Average)</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          The sum of all values divided by the number of values. Used to find the central tendency of a dataset.
                          <strong>Formula:</strong> Mean = (x₁ + x₂ + ... + xₙ) / n
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Standard Deviation</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Measures how spread out the data is from the mean. Lower values indicate data points are closer to the mean.
                          <strong>Use:</strong> Quality control, test scores analysis, scientific measurements.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Variance</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          The square of the standard deviation. Measures the average squared deviation from the mean.
                          <strong>Use:</strong> Risk analysis, portfolio management, scientific research.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Advanced Statistical Concepts</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Correlation Coefficient</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Measures the strength and direction of linear relationship between two variables.
                          <strong>Range:</strong> -1 to +1 (perfect negative to perfect positive correlation)
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Regression Analysis</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Finds the best-fit line through data points to predict future values.
                          <strong>Use:</strong> Economics, biology, psychology, business forecasting.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Probability Distributions</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Mathematical functions that describe the likelihood of different outcomes.
                          <strong>Types:</strong> Normal, binomial, Poisson distributions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Memory Functions Guide */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Memory Functions - Calculator Memory Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Memory functions allow students to store and retrieve values during complex calculations. This is especially useful for multi-step problems and cumulative calculations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Memory Operations</h3>
                    <div className="space-y-3">
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">M+ (Memory Add)</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Adds the current display value to memory. Useful for cumulative calculations and running totals.
                          <strong>Example:</strong> Store 5, then add 3 → Memory = 8
                        </p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">M- (Memory Subtract)</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Subtracts the current display value from memory. Useful for running differences and adjustments.
                          <strong>Example:</strong> Memory = 10, subtract 2 → Memory = 8
                        </p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">MR (Memory Recall)</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Displays the value stored in memory. Brings the stored value to the current display.
                          <strong>Use:</strong> Retrieve stored intermediate results for further calculations.
                        </p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">MC (Memory Clear)</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300">
                          Clears the memory to zero. Resets the memory for new calculations.
                          <strong>Use:</strong> Start fresh calculations or clear accumulated values.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Practical Examples for Students</h3>
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Running Total</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Calculate the sum of multiple numbers: 5 + 3 + 7 + 2
                          <br />• Enter 5, press M+
                          <br />• Enter 3, press M+
                          <br />• Enter 7, press M+
                          <br />• Enter 2, press M+
                          <br />• Press MR to see total: 17
                        </p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Complex Calculations</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Store intermediate results: (5 × 3) + (7 × 2)
                          <br />• Calculate 5 × 3 = 15, press M+
                          <br />• Calculate 7 × 2 = 14, press M+
                          <br />• Press MR to see result: 29
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Angle Modes Guide */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-indigo-500" />
                Angle Modes - Degrees vs Radians for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Understanding angle modes is crucial for students working with trigonometric functions. The choice between degrees and radians depends on the context and subject matter.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-semibold text-lg text-indigo-800 dark:text-indigo-200 mb-3">Degrees Mode</h3>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                      <strong>Definition:</strong> A full circle is divided into 360 degrees.
                    </p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                      <strong>Common Values:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                      <li>0° = 0 radians</li>
                      <li>90° = π/2 radians</li>
                      <li>180° = π radians</li>
                      <li>270° = 3π/2 radians</li>
                      <li>360° = 2π radians</li>
                    </ul>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">
                      <strong>Best for:</strong> Geometry, navigation, construction, everyday measurements.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-200 mb-3">Radians Mode</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                      <strong>Definition:</strong> Based on the radius of a circle. A full circle is 2π radians.
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                      <strong>Common Values:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-purple-700 dark:text-purple-300 mb-2">
                      <li>0 radians = 0°</li>
                      <li>π/6 radians = 30°</li>
                      <li>π/4 radians = 45°</li>
                      <li>π/3 radians = 60°</li>
                      <li>π/2 radians = 90°</li>
                    </ul>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      <strong>Best for:</strong> Calculus, physics, advanced mathematics, computer graphics.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-950/20 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Conversion Formula for Students:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Degrees to Radians:</strong> radians = degrees × (π/180)</p>
                      <p><strong>Example:</strong> 30° = 30 × (π/180) = π/6 radians</p>
                    </div>
                    <div>
                      <p><strong>Radians to Degrees:</strong> degrees = radians × (180/π)</p>
                      <p><strong>Example:</strong> π/4 radians = π/4 × (180/π) = 45°</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Practical Applications */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-teal-500" />
                Practical Applications - Real-World Examples for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Scientific calculators are used in various fields. Understanding these applications helps students see the relevance of mathematical concepts in real-world scenarios.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Engineering Applications</h3>
                    <div className="space-y-3">
                      <div className="bg-teal-50 dark:bg-teal-950/20 p-3 rounded-lg border border-teal-200 dark:border-teal-800">
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200">Structural Engineering</h4>
                        <p className="text-sm text-teal-700 dark:text-teal-300">
                          Calculate forces, stresses, and deflections in buildings and bridges using trigonometric functions and advanced mathematics.
                        </p>
                      </div>
                      <div className="bg-teal-50 dark:bg-teal-950/20 p-3 rounded-lg border border-teal-200 dark:border-teal-800">
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200">Electrical Engineering</h4>
                        <p className="text-sm text-teal-700 dark:text-teal-300">
                          Analyze AC circuits, impedance calculations, and signal processing using complex numbers and trigonometric functions.
                        </p>
                      </div>
                      <div className="bg-teal-50 dark:bg-teal-950/20 p-3 rounded-lg border border-teal-200 dark:border-teal-800">
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200">Mechanical Engineering</h4>
                        <p className="text-sm text-teal-700 dark:text-teal-300">
                          Design gears, calculate torque, analyze vibrations, and optimize mechanical systems using advanced mathematical functions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Scientific Applications</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Physics</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Calculate wave equations, quantum mechanics, thermodynamics, and relativity using exponential and logarithmic functions.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Chemistry</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Determine pH levels, reaction rates, equilibrium constants, and molecular structures using logarithmic and statistical functions.
                        </p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Biology</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Model population growth, analyze genetic data, calculate enzyme kinetics, and study ecological systems using exponential functions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Study Tips and Best Practices */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-pink-500" />
                Study Tips - How to Master Scientific Calculator Functions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Mastering scientific calculator functions requires practice and understanding. Here are proven study techniques and best practices for students.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Learning Strategies</h3>
                    <div className="space-y-3">
                      <div className="bg-pink-50 dark:bg-pink-950/20 p-3 rounded-lg border border-pink-200 dark:border-pink-800">
                        <h4 className="font-semibold text-pink-800 dark:text-pink-200">Start with Basics</h4>
                        <p className="text-sm text-pink-700 dark:text-pink-300">
                          Master basic arithmetic before moving to advanced functions. Practice with simple problems to build confidence.
                        </p>
                      </div>
                      <div className="bg-pink-50 dark:bg-pink-950/20 p-3 rounded-lg border border-pink-200 dark:border-pink-800">
                        <h4 className="font-semibold text-pink-800 dark:text-pink-200">Practice Regularly</h4>
                        <p className="text-sm text-pink-700 dark:text-pink-300">
                          Use the calculator daily for homework and practice problems. Regular use builds familiarity and speed.
                        </p>
                      </div>
                      <div className="bg-pink-50 dark:bg-pink-950/20 p-3 rounded-lg border border-pink-200 dark:border-pink-800">
                        <h4 className="font-semibold text-pink-800 dark:text-pink-200">Understand Functions</h4>
                        <p className="text-sm text-pink-700 dark:text-pink-300">
                          Don't just memorize button sequences. Understand what each function does and when to use it.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Common Mistakes to Avoid</h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Wrong Angle Mode</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Always check if you're in degrees or radians mode. This is the most common source of errors in trigonometry.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Order of Operations</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Use parentheses to ensure correct order of operations. Remember PEMDAS: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction.
                        </p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200">Memory Management</h4>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Clear memory between different problems to avoid carrying over values from previous calculations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* External Resources */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                Additional Learning Resources for Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Educational Websites</h3>
                  <div className="space-y-2">
                    <Link href="https://www.khanacademy.org/math" className="block text-sm text-primary hover:underline">
                      Khan Academy - Free Math Courses
                    </Link>
                    <Link href="https://www.coursera.org/courses?query=mathematics" className="block text-sm text-primary hover:underline">
                      Coursera - Mathematics Courses
                    </Link>
                    <Link href="https://www.edx.org/course/subject/math" className="block text-sm text-primary hover:underline">
                      edX - University Math Courses
                    </Link>
                    <Link href="https://www.wolframalpha.com/" className="block text-sm text-primary hover:underline">
                      Wolfram Alpha - Computational Knowledge Engine
                    </Link>
                    <Link href="https://www.desmos.com/calculator" className="block text-sm text-primary hover:underline">
                      Desmos - Graphing Calculator
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Organizations</h3>
                  <div className="space-y-2">
                    <Link href="https://www.maa.org/" className="block text-sm text-primary hover:underline">
                      Mathematical Association of America
                    </Link>
                    <Link href="https://www.ams.org/" className="block text-sm text-primary hover:underline">
                      American Mathematical Society
                    </Link>
                    <Link href="https://www.ieee.org/" className="block text-sm text-primary hover:underline">
                      IEEE - Institute of Electrical Engineers
                    </Link>
                    <Link href="https://www.asme.org/" className="block text-sm text-primary hover:underline">
                      ASME - American Society of Mechanical Engineers
                    </Link>
                    <Link href="https://www.aiche.org/" className="block text-sm text-primary hover:underline">
                      AIChE - American Institute of Chemical Engineers
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Recommended Study Materials</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Textbooks:</strong> Stewart Calculus, Thomas Calculus, Larson Precalculus</p>
                    <p><strong>Online Tools:</strong> GeoGebra, Symbolab, Mathway</p>
                  </div>
                  <div>
                    <p><strong>Practice Problems:</strong> Schaum's Outlines, Barron's Test Prep</p>
                    <p><strong>Video Tutorials:</strong> YouTube math channels, MIT OpenCourseWare</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-500" />
                Frequently Asked Questions - Student Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What's the difference between a basic and scientific calculator?</h3>
                    <p className="text-sm text-muted-foreground">
                      A basic calculator performs simple arithmetic (+, -, ×, ÷), while a scientific calculator includes advanced functions like trigonometry, logarithms, powers, roots, and statistical calculations. Scientific calculators are essential for advanced mathematics, science, and engineering courses.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">How do I know when to use degrees vs radians?</h3>
                    <p className="text-sm text-muted-foreground">
                      Use degrees for geometry, navigation, and everyday measurements. Use radians for calculus, physics, and advanced mathematics. Most high school geometry uses degrees, while college calculus typically uses radians.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">What's the difference between ln and log?</h3>
                    <p className="text-sm text-muted-foreground">
                      ln is the natural logarithm (base e ≈ 2.718), used in calculus and natural growth models. log is the common logarithm (base 10), used in scientific notation and pH calculations. Understanding both is important for advanced mathematics.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">How do I use memory functions effectively?</h3>
                    <p className="text-sm text-muted-foreground">
                      Use M+ to add values to memory, M- to subtract, MR to recall stored values, and MC to clear memory. Memory is useful for cumulative calculations, storing intermediate results, and complex multi-step problems.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Can I use this calculator for standardized tests?</h3>
                    <p className="text-sm text-muted-foreground">
                      This calculator is perfect for practice and homework. For actual standardized tests (SAT, ACT, AP exams), check the specific calculator policies as they may have restrictions on certain functions or require approved models.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                Ready to Master Scientific Calculations?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Practice with our free scientific calculator and master advanced mathematical functions. Perfect for students, engineers, and professionals.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/tools/scientific-calculator">
                  Try Our Scientific Calculator Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}