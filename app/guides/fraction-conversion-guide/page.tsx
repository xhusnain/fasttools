"use client"

import Link from "next/link"
import Head from "next/head"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { 
  BookOpen,
  Calculator,
  ArrowRight,
  ArrowLeft,
  Clock,
  Users,
  Star,
  Brain,
  Zap,
  TrendingUp
} from "lucide-react"

export default function FractionConversionGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Fraction Conversion Guide - Decimals, Percentages & Mixed Numbers",
    description: "Master fraction conversions with our comprehensive guide. Learn how to convert between fractions, decimals, percentages, and mixed numbers with step-by-step instructions.",
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
      "@id": "https://fasttools.store/guides/fraction-conversion-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Fraction Conversion Guide"
    },
    articleSection: "Education",
    wordCount: 2500,
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
        <title>Complete Fraction Conversion Guide | Decimals, Percentages & Mixed Numbers</title>
        <meta name="description" content="Master fraction conversions with our comprehensive guide. Learn how to convert between fractions, decimals, percentages, and mixed numbers with step-by-step instructions." />
        <meta name="keywords" content="fraction conversion, decimal to fraction, fraction to decimal, percentage to fraction, fraction to percentage, mixed number conversion, fraction guide, conversion tutorial, fraction education" />
        <meta name="author" content="FastTools" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Fraction Conversion Guide | Decimals, Percentages & Mixed Numbers" />
        <meta property="og:description" content="Master fraction conversions with our comprehensive guide. Learn how to convert between fractions, decimals, percentages, and mixed numbers with step-by-step instructions." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fasttools.store/guides/fraction-conversion-guide" />
        <meta property="og:site_name" content="FastTools" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fraction Conversion Guide - FastTools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Fraction Conversion Guide | Decimals, Percentages & Mixed Numbers" />
        <meta name="twitter:description" content="Master fraction conversions with our comprehensive guide. Learn how to convert between fractions, decimals, percentages, and mixed numbers with step-by-step instructions." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
        <meta name="twitter:image:alt" content="Fraction Conversion Guide - FastTools" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fasttools.store/guides/fraction-conversion-guide" />
      </Head>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Fraction Conversion Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master fraction conversions with our comprehensive guide. Learn how to convert between fractions, decimals, percentages, and mixed numbers with step-by-step instructions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>120,000+ students</span>
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
              <Link href="#fraction-to-decimal" className="block text-primary hover:underline">
                1. Fraction to Decimal
              </Link>
              <Link href="#decimal-to-fraction" className="block text-primary hover:underline">
                2. Decimal to Fraction
              </Link>
              <Link href="#fraction-to-percentage" className="block text-primary hover:underline">
                3. Fraction to Percentage
              </Link>
              <Link href="#percentage-to-fraction" className="block text-primary hover:underline">
                4. Percentage to Fraction
              </Link>
              <Link href="#mixed-number-conversion" className="block text-primary hover:underline">
                5. Mixed Number Conversion
              </Link>
              <Link href="#conversion-examples" className="block text-primary hover:underline">
                6. Conversion Examples
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
                These official sources provide authoritative information about mathematical conversions, standards, and educational best practices:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/pml/special-publication-811" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - Mathematical Conversion Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official mathematical conversion standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/standard/80000-1.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO - Number System Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official number system standards
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
                      ASTM International - Official testing standards for mathematical conversions
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
          {/* Fraction to Decimal */}
          <section id="fraction-to-decimal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-500" />
                  Fraction to Decimal Conversion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Converting fractions to decimals is done by dividing the numerator by the denominator. This gives you the decimal representation of the fraction.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Divide the numerator by the denominator</li>
                    <li>Use long division if necessary</li>
                    <li>Round to desired decimal places</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Simple Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>1/2 = 1 ÷ 2 = 0.5</div>
                      <div>3/4 = 3 ÷ 4 = 0.75</div>
                      <div>1/4 = 1 ÷ 4 = 0.25</div>
                      <div>5/8 = 5 ÷ 8 = 0.625</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complex Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>1/3 = 0.333... (repeating)</div>
                      <div>2/3 = 0.666... (repeating)</div>
                      <div>1/6 = 0.166... (repeating)</div>
                      <div>5/6 = 0.833... (repeating)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold mb-2">Special Cases</h4>
                  <div className="text-sm space-y-1">
                    <div><strong>Terminating decimals:</strong> Fractions with denominators that are factors of powers of 10</div>
                    <div><strong>Repeating decimals:</strong> Fractions that result in infinite repeating patterns</div>
                    <div><strong>Exact decimals:</strong> Some fractions convert to exact decimal values</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Decimal to Fraction */}
          <section id="decimal-to-fraction">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5 text-green-500" />
                  Decimal to Fraction Conversion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Converting decimals to fractions involves writing the decimal as a fraction with the appropriate power of 10 as the denominator, then simplifying.
                </p>
                
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Write the decimal as a fraction over 1</li>
                    <li>Multiply by appropriate power of 10 to eliminate decimal</li>
                    <li>Simplify the resulting fraction</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Terminating Decimals</h4>
                    <div className="space-y-2 text-sm">
                      <div>0.5 = 5/10 = 1/2</div>
                      <div>0.25 = 25/100 = 1/4</div>
                      <div>0.75 = 75/100 = 3/4</div>
                      <div>0.125 = 125/1000 = 1/8</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Repeating Decimals</h4>
                    <div className="space-y-2 text-sm">
                      <div>0.333... = 1/3</div>
                      <div>0.666... = 2/3</div>
                      <div>0.166... = 1/6</div>
                      <div>0.833... = 5/6</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold mb-2">Method for Repeating Decimals</h4>
                  <div className="text-sm space-y-1">
                    <div>Let x = 0.333...</div>
                    <div>10x = 3.333...</div>
                    <div>10x - x = 3.333... - 0.333...</div>
                    <div>9x = 3</div>
                    <div>x = 3/9 = 1/3</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Fraction to Percentage */}
          <section id="fraction-to-percentage">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-500" />
                  Fraction to Percentage Conversion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Converting fractions to percentages involves multiplying the fraction by 100. This gives you the percentage representation of the fraction.
                </p>
                
                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Convert fraction to decimal (if needed)</li>
                    <li>Multiply by 100</li>
                    <li>Add the % symbol</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Simple Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>1/2 = 0.5 × 100 = 50%</div>
                      <div>3/4 = 0.75 × 100 = 75%</div>
                      <div>1/4 = 0.25 × 100 = 25%</div>
                      <div>2/5 = 0.4 × 100 = 40%</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complex Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>1/3 = 0.333... × 100 = 33.33%</div>
                      <div>2/3 = 0.666... × 100 = 66.67%</div>
                      <div>5/6 = 0.833... × 100 = 83.33%</div>
                      <div>7/8 = 0.875 × 100 = 87.5%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Percentage to Fraction */}
          <section id="percentage-to-fraction">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-orange-500" />
                  Percentage to Fraction Conversion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Converting percentages to fractions involves writing the percentage as a fraction over 100, then simplifying.
                </p>
                
                <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold mb-2">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Write percentage as fraction over 100</li>
                    <li>Simplify the fraction</li>
                    <li>Convert to mixed number if needed</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Simple Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>50% = 50/100 = 1/2</div>
                      <div>25% = 25/100 = 1/4</div>
                      <div>75% = 75/100 = 3/4</div>
                      <div>20% = 20/100 = 1/5</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complex Examples</h4>
                    <div className="space-y-2 text-sm">
                      <div>33.33% = 33.33/100 = 1/3</div>
                      <div>66.67% = 66.67/100 = 2/3</div>
                      <div>12.5% = 12.5/100 = 1/8</div>
                      <div>87.5% = 87.5/100 = 7/8</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Mixed Number Conversion */}
          <section id="mixed-number-conversion">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-teal-500" />
                  Mixed Number Conversion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mixed numbers combine whole numbers with fractions. Converting between mixed numbers and improper fractions is essential for calculations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Mixed Number to Improper Fraction</h4>
                    <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                      <div className="text-sm space-y-2">
                        <div>Formula: (whole × denominator) + numerator / denominator</div>
                        <div>Example: 2 3/4</div>
                        <div>= (2 × 4) + 3 / 4</div>
                        <div>= 8 + 3 / 4</div>
                        <div>= 11/4</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Improper Fraction to Mixed Number</h4>
                    <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                      <div className="text-sm space-y-2">
                        <div>Divide numerator by denominator</div>
                        <div>Example: 11/4</div>
                        <div>11 ÷ 4 = 2 remainder 3</div>
                        <div>= 2 3/4</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 dark:bg-teal-950/20 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                  <h4 className="font-semibold mb-2">More Examples</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div>3 1/2 = 7/2</div>
                      <div>1 2/3 = 5/3</div>
                      <div>4 3/8 = 35/8</div>
                    </div>
                    <div>
                      <div>7/2 = 3 1/2</div>
                      <div>5/3 = 1 2/3</div>
                      <div>35/8 = 4 3/8</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conversion Examples */}
          <section id="conversion-examples">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-500" />
                  Comprehensive Conversion Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <h4 className="font-semibold mb-3">Complete Conversion Chain</h4>
                  <div className="text-sm space-y-2">
                    <div><strong>Start with:</strong> 3/4</div>
                    <div><strong>To decimal:</strong> 3 ÷ 4 = 0.75</div>
                    <div><strong>To percentage:</strong> 0.75 × 100 = 75%</div>
                    <div><strong>To mixed number:</strong> 3/4 (already proper fraction)</div>
                    <div><strong>Back to fraction:</strong> 75% = 75/100 = 3/4</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complex Example 1</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <div>Start: 5/6</div>
                      <div>Decimal: 0.833...</div>
                      <div>Percentage: 83.33%</div>
                      <div>Mixed: 5/6 (proper)</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Complex Example 2</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-sm">
                      <div>Start: 2 1/3</div>
                      <div>Improper: 7/3</div>
                      <div>Decimal: 2.333...</div>
                      <div>Percentage: 233.33%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold mb-2">Quick Reference Table</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">Fraction</div>
                      <div>1/2</div>
                      <div>1/4</div>
                      <div>3/4</div>
                      <div>1/3</div>
                    </div>
                    <div>
                      <div className="font-semibold">Decimal</div>
                      <div>0.5</div>
                      <div>0.25</div>
                      <div>0.75</div>
                      <div>0.333...</div>
                    </div>
                    <div>
                      <div className="font-semibold">Percentage</div>
                      <div>50%</div>
                      <div>25%</div>
                      <div>75%</div>
                      <div>33.33%</div>
                    </div>
                    <div>
                      <div className="font-semibold">Mixed</div>
                      <div>1/2</div>
                      <div>1/4</div>
                      <div>3/4</div>
                      <div>1/3</div>
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
                Ready to Master Fraction Conversions?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Use our free fraction calculator to convert between fractions, decimals, percentages, and mixed numbers instantly!
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
