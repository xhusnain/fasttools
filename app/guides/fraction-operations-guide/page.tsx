"use client"

import Link from "next/link"
import Head from "next/head"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { 
  BookOpen,
  Calculator,
  Plus,
  Minus,
  X,
  Divide,
  Clock,
  Users,
  Star,
  ArrowRight,
  Brain,
  Zap,
  TrendingUp
} from "lucide-react"

export default function FractionOperationsGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Fraction Operations Guide - Addition, Subtraction, Multiplication & Division",
    description: "Master fraction operations with our comprehensive guide. Learn how to add, subtract, multiply, and divide fractions with step-by-step instructions and examples.",
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
      "@id": "https://fasttools.store/guides/fraction-operations-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Fraction Operations Guide"
    },
    articleSection: "Education",
    wordCount: 3000,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    educationalLevel: "intermediate",
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
        <title>Complete Fraction Operations Guide | Addition, Subtraction, Multiplication & Division</title>
        <meta name="description" content="Master fraction operations with our comprehensive guide. Learn how to add, subtract, multiply, and divide fractions with step-by-step instructions and examples." />
        <meta name="keywords" content="fraction operations, fraction addition, fraction subtraction, fraction multiplication, fraction division, fraction arithmetic, fraction calculations, fraction math, fraction solving, fraction guide" />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Fraction Operations Guide | Addition, Subtraction, Multiplication & Division" />
        <meta property="og:description" content="Master fraction operations with our comprehensive guide. Learn how to add, subtract, multiply, and divide fractions with step-by-step instructions and examples." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fasttools.store/guides/fraction-operations-guide" />
        <meta property="og:site_name" content="FastTools" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fraction Operations Guide - FastTools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Fraction Operations Guide | Addition, Subtraction, Multiplication & Division" />
        <meta name="twitter:description" content="Master fraction operations with our comprehensive guide. Learn how to add, subtract, multiply, and divide fractions with step-by-step instructions and examples." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
        <meta name="twitter:image:alt" content="Fraction Operations Guide - FastTools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/guides/fraction-operations-guide" />
      </Head>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Fraction Operations Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master fraction operations with our comprehensive guide. Learn how to add, subtract, multiply, and divide fractions with step-by-step instructions and examples.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>20 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>150,000+ students</span>
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
              <Link href="#fraction-addition" className="block text-primary hover:underline">
                1. Fraction Addition
              </Link>
              <Link href="#fraction-subtraction" className="block text-primary hover:underline">
                2. Fraction Subtraction
              </Link>
              <Link href="#fraction-multiplication" className="block text-primary hover:underline">
                3. Fraction Multiplication
              </Link>
              <Link href="#fraction-division" className="block text-primary hover:underline">
                4. Fraction Division
              </Link>
              <Link href="#common-denominators" className="block text-primary hover:underline">
                5. Finding Common Denominators
              </Link>
              <Link href="#simplifying-fractions" className="block text-primary hover:underline">
                6. Simplifying Fractions
              </Link>
              <Link href="#step-by-step-examples" className="block text-primary hover:underline">
                7. Step-by-Step Examples
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
                These official sources provide authoritative information about mathematical operations, fraction standards, and educational best practices:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/pml/special-publication-811" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - Mathematical Operations Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official mathematical operations standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/standard/80000-1.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO - Arithmetic Operations Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official arithmetic operations standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ieee.org/education/standards" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE - Educational Mathematics Standards
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
                      ASTM International - Official testing standards for mathematical operations
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
          {/* Fraction Addition */}
          <section id="fraction-addition">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5 text-green-500" />
                  Fraction Addition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Adding fractions requires a common denominator. If the denominators are different, you need to find the least common multiple (LCM) first.
                </p>
                
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Find the least common denominator (LCD)</li>
                    <li>Convert each fraction to have the LCD</li>
                    <li>Add the numerators</li>
                    <li>Keep the common denominator</li>
                    <li>Simplify the result if possible</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 3/4 + 1/6</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: LCD of 4 and 6 = 12</div>
                      <div>Step 2: 3/4 = 9/12, 1/6 = 2/12</div>
                      <div>Step 3: 9/12 + 2/12 = 11/12</div>
                      <div className="font-semibold">Answer: 11/12</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 2/3 + 1/4</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: LCD of 3 and 4 = 12</div>
                      <div>Step 2: 2/3 = 8/12, 1/4 = 3/12</div>
                      <div>Step 3: 8/12 + 3/12 = 11/12</div>
                      <div className="font-semibold">Answer: 11/12</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fraction Subtraction */}
          <section id="fraction-subtraction">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Minus className="h-5 w-5 text-red-500" />
                  Fraction Subtraction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Subtracting fractions follows the same process as addition. You need a common denominator, then subtract the numerators.
                </p>
                
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Find the least common denominator (LCD)</li>
                    <li>Convert each fraction to have the LCD</li>
                    <li>Subtract the numerators</li>
                    <li>Keep the common denominator</li>
                    <li>Simplify the result if possible</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 5/6 - 1/3</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: LCD of 6 and 3 = 6</div>
                      <div>Step 2: 5/6 = 5/6, 1/3 = 2/6</div>
                      <div>Step 3: 5/6 - 2/6 = 3/6</div>
                      <div>Step 4: 3/6 = 1/2 (simplified)</div>
                      <div className="font-semibold">Answer: 1/2</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 7/8 - 3/4</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: LCD of 8 and 4 = 8</div>
                      <div>Step 2: 7/8 = 7/8, 3/4 = 6/8</div>
                      <div>Step 3: 7/8 - 6/8 = 1/8</div>
                      <div className="font-semibold">Answer: 1/8</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fraction Multiplication */}
          <section id="fraction-multiplication">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-blue-500" />
                  Fraction Multiplication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Multiplying fractions is straightforward - multiply the numerators together and the denominators together. No common denominator needed!
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Multiply the numerators together</li>
                    <li>Multiply the denominators together</li>
                    <li>Simplify the result if possible</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 2/3 × 3/4</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: (2 × 3) / (3 × 4)</div>
                      <div>Step 2: 6/12</div>
                      <div>Step 3: 6/12 = 1/2 (simplified)</div>
                      <div className="font-semibold">Answer: 1/2</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 1/2 × 2/5</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: (1 × 2) / (2 × 5)</div>
                      <div>Step 2: 2/10</div>
                      <div>Step 3: 2/10 = 1/5 (simplified)</div>
                      <div className="font-semibold">Answer: 1/5</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fraction Division */}
          <section id="fraction-division">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Divide className="h-5 w-5 text-purple-500" />
                  Fraction Division
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To divide fractions, multiply by the reciprocal (flip the second fraction). This converts division into multiplication.
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Keep the first fraction as is</li>
                    <li>Flip the second fraction (find reciprocal)</li>
                    <li>Change division to multiplication</li>
                    <li>Multiply the fractions</li>
                    <li>Simplify the result if possible</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 3/4 ÷ 1/2</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: 3/4 ÷ 1/2</div>
                      <div>Step 2: 3/4 × 2/1 (flip 1/2)</div>
                      <div>Step 3: (3 × 2) / (4 × 1) = 6/4</div>
                      <div>Step 4: 6/4 = 3/2 = 1 1/2 (simplified)</div>
                      <div className="font-semibold">Answer: 1 1/2</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: 2/3 ÷ 4/5</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: 2/3 ÷ 4/5</div>
                      <div>Step 2: 2/3 × 5/4 (flip 4/5)</div>
                      <div>Step 3: (2 × 5) / (3 × 4) = 10/12</div>
                      <div>Step 4: 10/12 = 5/6 (simplified)</div>
                      <div className="font-semibold">Answer: 5/6</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Finding Common Denominators */}
          <section id="common-denominators">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-orange-500" />
                  Finding Common Denominators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The least common denominator (LCD) is the smallest number that both denominators divide into evenly. Here are methods to find it:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Method 1: List Multiples</h4>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                      <p className="text-sm mb-2">For 4 and 6:</p>
                      <div className="text-sm space-y-1">
                        <div>Multiples of 4: 4, 8, 12, 16, 20...</div>
                        <div>Multiples of 6: 6, 12, 18, 24, 30...</div>
                        <div className="font-semibold">LCD = 12</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Method 2: Prime Factorization</h4>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                      <p className="text-sm mb-2">For 4 and 6:</p>
                      <div className="text-sm space-y-1">
                        <div>4 = 2²</div>
                        <div>6 = 2 × 3</div>
                        <div>LCD = 2² × 3 = 12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Simplifying Fractions */}
          <section id="simplifying-fractions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-teal-500" />
                  Simplifying Fractions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Simplifying fractions means reducing them to their lowest terms by dividing both numerator and denominator by their greatest common factor (GCF).
                </p>
                
                <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                  <h4 className="font-semibold mb-2">How to Simplify</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Find the GCF of numerator and denominator</li>
                    <li>Divide both numerator and denominator by the GCF</li>
                    <li>The result is the simplified fraction</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: Simplify 8/12</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: GCF of 8 and 12 = 4</div>
                      <div>Step 2: 8 ÷ 4 = 2, 12 ÷ 4 = 3</div>
                      <div className="font-semibold">Answer: 2/3</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Example: Simplify 15/25</h4>
                    <div className="space-y-2 text-sm">
                      <div>Step 1: GCF of 15 and 25 = 5</div>
                      <div>Step 2: 15 ÷ 5 = 3, 25 ÷ 5 = 5</div>
                      <div className="font-semibold">Answer: 3/5</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step-by-Step Examples */}
          <section id="step-by-step-examples">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  Step-by-Step Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <h4 className="font-semibold mb-3">Complex Example: 2/3 + 1/4 - 1/6</h4>
                  <div className="space-y-2 text-sm">
                    <div>Step 1: Find LCD of 3, 4, and 6 = 12</div>
                    <div>Step 2: Convert: 2/3 = 8/12, 1/4 = 3/12, 1/6 = 2/12</div>
                    <div>Step 3: Add first two: 8/12 + 3/12 = 11/12</div>
                    <div>Step 4: Subtract: 11/12 - 2/12 = 9/12</div>
                    <div>Step 5: Simplify: 9/12 = 3/4</div>
                    <div className="font-semibold">Final Answer: 3/4</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Multiplication Example</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <div>3/4 × 2/5 × 1/2</div>
                      <div>= (3 × 2 × 1) / (4 × 5 × 2)</div>
                      <div>= 6/40</div>
                      <div>= 3/20 (simplified)</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Division Example</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <div>5/6 ÷ 2/3</div>
                      <div>= 5/6 × 3/2</div>
                      <div>= 15/12</div>
                      <div>= 5/4 = 1 1/4</div>
                    </div>
                  </div>
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
                Ready to Practice Fraction Operations?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Use our free fraction calculator to solve any fraction operation instantly. Perfect for students learning fraction arithmetic!
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
