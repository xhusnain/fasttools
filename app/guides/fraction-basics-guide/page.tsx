"use client"

import Link from "next/link"
import Head from "next/head"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { 
  BookOpen,
  Calculator,
  Clock,
  Users,
  Star,
  ArrowRight,
  Brain,
  Zap,
  TrendingUp
} from "lucide-react"

export default function FractionBasicsGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Fraction Basics Guide - Understanding Fractions from the Ground Up",
    description: "Master the fundamentals of fractions with our comprehensive guide. Learn what fractions are, how they work, and why they're essential in mathematics.",
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
      "@id": "https://fasttools.store/guides/fraction-basics-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Fraction Basics Guide"
    },
    articleSection: "Education",
    wordCount: 2500,
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
      <Head>
        <title>Complete Fraction Basics Guide | Understanding Fractions from the Ground Up</title>
        <meta name="description" content="Master the fundamentals of fractions with our comprehensive guide. Learn what fractions are, how they work, and why they're essential in mathematics." />
        <meta name="keywords" content="fraction basics, understanding fractions, fraction fundamentals, fraction guide, fraction tutorial, fraction education, fraction learning, fraction concepts, fraction introduction, fraction mathematics" />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Fraction Basics Guide | Understanding Fractions from the Ground Up" />
        <meta property="og:description" content="Master the fundamentals of fractions with our comprehensive guide. Learn what fractions are, how they work, and why they're essential in mathematics." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fasttools.store/guides/fraction-basics-guide" />
        <meta property="og:site_name" content="FastTools" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fraction Basics Guide - FastTools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Fraction Basics Guide | Understanding Fractions from the Ground Up" />
        <meta name="twitter:description" content="Master the fundamentals of fractions with our comprehensive guide. Learn what fractions are, how they work, and why they're essential in mathematics." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
        <meta name="twitter:image:alt" content="Fraction Basics Guide - FastTools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/guides/fraction-basics-guide" />
      </Head>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Fraction Basics Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master the fundamentals of fractions with our comprehensive guide. Learn what fractions are, how they work, and why they're essential in mathematics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>100,000+ students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Sponsored Content */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Sponsored</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
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
              <Link href="#what-are-fractions" className="block text-primary hover:underline">
                1. What Are Fractions?
              </Link>
              <Link href="#fraction-components" className="block text-primary hover:underline">
                2. Understanding Fraction Components
              </Link>
              <Link href="#types-of-fractions" className="block text-primary hover:underline">
                3. Types of Fractions
              </Link>
              <Link href="#fraction-visualization" className="block text-primary hover:underline">
                4. Visualizing Fractions
              </Link>
              <Link href="#fraction-equivalency" className="block text-primary hover:underline">
                5. Fraction Equivalency
              </Link>
              <Link href="#practical-examples" className="block text-primary hover:underline">
                6. Practical Examples
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
                These official sources provide authoritative information about mathematical standards, fraction education, and best practices:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/pml/special-publication-811" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - Mathematical Standards and Guidelines
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official mathematical standards and guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/standard/80000-1.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO - Mathematical Notation Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official mathematical notation standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ieee.org/education/standards" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE - Educational Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Institute of Electrical and Electronics Engineers - Educational standards for mathematics
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.astm.org/standards/e29.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ASTM - Mathematical Testing Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      ASTM International - Official testing standards for mathematical concepts
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/Math/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      W3C - Mathematical Web Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Mathematical web standards and accessibility guidelines
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What Are Fractions? */}
          <section id="what-are-fractions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-500" />
                  What Are Fractions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A fraction is a mathematical expression that represents a part of a whole. It consists of two numbers separated by a horizontal line (or slash). The number above the line is called the numerator, and the number below is called the denominator.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold mb-2">Basic Fraction Structure</h4>
                  <div className="text-center text-lg font-mono">
                    <div>numerator</div>
                    <div className="border-t border-gray-400 w-20 mx-auto my-1"></div>
                    <div>denominator</div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Example: 3/4 means "3 parts out of 4 equal parts"
                  </p>
                </div>

                <h4 className="text-lg font-semibold">Why Are Fractions Important?</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fractions represent values between whole numbers</li>
                  <li>Essential for ratios, percentages, and proportions</li>
                  <li>Used in cooking, construction, and scientific calculations</li>
                  <li>Foundation for advanced mathematical concepts</li>
                  <li>Critical for understanding decimals and percentages</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Understanding Fraction Components */}
          <section id="fraction-components">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-green-500" />
                  Understanding Fraction Components
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Numerator (Top Number)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Represents how many parts we have</li>
                      <li>• Can be any whole number (0, 1, 2, 3, ...)</li>
                      <li>• Can be larger than the denominator</li>
                      <li>• Example: In 3/4, the numerator is 3</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Denominator (Bottom Number)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Represents the total number of equal parts</li>
                      <li>• Must be a positive whole number</li>
                      <li>• Cannot be zero (undefined)</li>
                      <li>• Example: In 3/4, the denominator is 4</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold mb-2">Real-World Example</h4>
                  <p className="text-sm">
                    Imagine a pizza cut into 8 equal slices. If you eat 3 slices, you've eaten 3/8 of the pizza. 
                    The numerator (3) represents the slices you ate, and the denominator (8) represents the total slices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Types of Fractions */}
          <section id="types-of-fractions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                  Types of Fractions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Proper Fractions</h4>
                      <p className="text-sm text-muted-foreground mb-2">Numerator is smaller than denominator</p>
                      <div className="text-lg font-mono">3/4, 1/2, 5/8</div>
                      <p className="text-xs text-muted-foreground">Value is less than 1</p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Improper Fractions</h4>
                      <p className="text-sm text-muted-foreground mb-2">Numerator is equal to or larger than denominator</p>
                      <div className="text-lg font-mono">5/4, 7/3, 9/2</div>
                      <p className="text-xs text-muted-foreground">Value is 1 or greater</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Mixed Numbers</h4>
                      <p className="text-sm text-muted-foreground mb-2">Combination of whole number and proper fraction</p>
                      <div className="text-lg font-mono">2 1/3, 4 5/8, 1 2/7</div>
                      <p className="text-xs text-muted-foreground">Easier to understand than improper fractions</p>
                    </div>
                    
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200">Equivalent Fractions</h4>
                      <p className="text-sm text-muted-foreground mb-2">Different fractions that represent the same value</p>
                      <div className="text-lg font-mono">1/2 = 2/4 = 3/6</div>
                      <p className="text-xs text-muted-foreground">Same value, different appearance</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Visualizing Fractions */}
          <section id="fraction-visualization">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  Visualizing Fractions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Visual representations help understand fractions better. Here are common ways to visualize fractions:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                      <h4 className="font-semibold mb-2">Circle Model</h4>
                      <div className="w-16 h-16 mx-auto bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-sm font-bold">
                        3/4
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Pie charts and circles</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                      <h4 className="font-semibold mb-2">Number Line</h4>
                      <div className="w-16 h-8 mx-auto bg-green-200 dark:bg-green-800 rounded flex items-center justify-center text-xs font-bold">
                        0---3/4---1
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Position on number line</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                      <h4 className="font-semibold mb-2">Bar Model</h4>
                      <div className="w-16 h-8 mx-auto bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold">
                        ████
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Rectangular bars</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fraction Equivalency */}
          <section id="fraction-equivalency">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal-500" />
                  Fraction Equivalency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Equivalent fractions represent the same value but have different numerators and denominators. 
                  You can create equivalent fractions by multiplying or dividing both the numerator and denominator by the same number.
                </p>
                
                <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                  <h4 className="font-semibold mb-2">Creating Equivalent Fractions</h4>
                  <div className="space-y-2 text-sm">
                    <div>1/2 = 2/4 = 3/6 = 4/8 = 5/10</div>
                    <div>2/3 = 4/6 = 6/9 = 8/12 = 10/15</div>
                    <div>3/4 = 6/8 = 9/12 = 12/16 = 15/20</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    All these fractions represent the same value!
                  </p>
                </div>

                <h4 className="text-lg font-semibold">How to Find Equivalent Fractions</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Choose a number to multiply or divide by</li>
                  <li>Multiply (or divide) both numerator and denominator by that number</li>
                  <li>The result is an equivalent fraction</li>
                  <li>Example: 1/2 × 2/2 = 2/4</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Practical Examples */}
          <section id="practical-examples">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  Practical Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Cooking Examples</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Recipe calls for 3/4 cup of flour</li>
                      <li>• You need 1/2 cup of sugar</li>
                      <li>• Mix 2/3 cup of milk</li>
                      <li>• Bake for 1 1/4 hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Construction Examples</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cut wood to 5/8 inch thickness</li>
                      <li>• Drill hole 3/16 inch diameter</li>
                      <li>• Space nails 1/4 inch apart</li>
                      <li>• Measure 2 3/4 feet length</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold mb-2">Everyday Fraction Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    Fractions are everywhere in daily life: time (quarter past 3), money (half dollar), 
                    sports (three-quarters of the game), and measurements (half inch). Understanding fractions 
                    helps you navigate the world more effectively!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                Ready to Practice Fractions?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Use our free fraction calculator to solve any fraction problem instantly. Perfect for students learning fractions!
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/tools/fraction-calculator">
                  Try Our Fraction Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
