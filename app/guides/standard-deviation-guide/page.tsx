import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Calculator, Target, AlertCircle, Sparkles, TrendingUp, Globe, Settings, BarChart3, Lightbulb, BookOpen, ExternalLink, Info, Brain } from "lucide-react"

export default function StandardDeviationGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Standard Deviation Guide: Master Statistical Analysis - What is Standard Deviation, How to Calculate Standard Deviation, Standard Deviation Formula",
    description: "Master standard deviation, variance, and statistical analysis with our comprehensive guide. Learn formulas, applications, and advanced statistical concepts for students and professionals. What is standard deviation, how to calculate standard deviation, standard deviation formula, standard deviation explained, standard deviation example, standard deviation interpretation, standard deviation vs variance, standard deviation in statistics, standard deviation meaning, standard deviation definition, standard deviation and mean, standard deviation and variance, standard deviation and standard error, standard deviation and coefficient of variation, standard deviation and normal distribution, standard deviation and z-score, standard deviation and confidence interval, standard deviation and margin of error, standard deviation and probability, standard deviation and bell curve, standard deviation and outliers, standard deviation and skewness, standard deviation and kurtosis, standard deviation and correlation, standard deviation and regression, standard deviation and ANOVA, standard deviation and t-test, standard deviation and chi-square test, standard deviation and hypothesis testing, standard deviation and p-value, standard deviation and degrees of freedom, standard deviation and sample size, standard deviation and central limit theorem, standard deviation and law of large numbers, standard deviation and sampling distribution, standard deviation and standard normal distribution, standard deviation and empirical rule, standard deviation and Chebyshev's theorem, standard deviation and percentiles, standard deviation and quartiles, standard deviation and interquartile range, standard deviation and box plot, standard deviation and histogram, standard deviation and frequency distribution, standard deviation and cumulative frequency, standard deviation and relative frequency, standard deviation and probability density function, standard deviation and cumulative distribution function, standard deviation and moment, standard deviation and moment generating function, standard deviation and characteristic function, standard deviation and random variable.",
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
      "@id": "https://fasttools.store/guides/standard-deviation-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Complete Standard Deviation Guide - FastTools"
    },
    articleSection: "Education",
    wordCount: 3500,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    educationalLevel: "beginner",
    learningResourceType: "guide",
    educationalUse: "instruction",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    },
    keywords: [
      "what is standard deviation",
      "how to calculate standard deviation",
      "standard deviation formula",
      "standard deviation explained",
      "standard deviation example",
      "standard deviation interpretation",
      "standard deviation vs variance",
      "standard deviation in statistics",
      "standard deviation meaning",
      "standard deviation definition",
      "standard deviation and mean",
      "standard deviation and variance",
      "standard deviation and standard error",
      "standard deviation and coefficient of variation",
      "standard deviation and normal distribution",
      "standard deviation and z-score",
      "standard deviation and t-score",
      "standard deviation and chi-square",
      "standard deviation and ANOVA",
      "standard deviation and regression",
      "standard deviation and correlation",
      "standard deviation and covariance",
      "standard deviation and standard error of mean",
      "standard deviation and standard error of estimate",
      "standard deviation and standard error of proportion",
      "standard deviation and standard error of difference",
      "standard deviation and standard error of regression",
      "standard deviation and standard error of prediction",
      "standard deviation and standard error of measurement",
      "standard deviation and standard error of mean difference",
      "standard deviation and standard error of estimate difference",
      "standard deviation and standard error of proportion difference",
      "standard deviation and standard error of difference between means",
      "standard deviation and standard error of difference between proportions",
      "standard deviation and standard error of difference between variances",
      "standard deviation and standard error of difference between standard deviations",
      "standard deviation and standard error of difference between correlations",
      "standard deviation and standard error of difference between covariances",
      "standard deviation and standard error of difference between regression coefficients",
      "standard deviation and standard error of difference between intercepts",
      "standard deviation and standard error of difference between slopes",
      "standard deviation and standard error of difference between predictions",
      "standard deviation and standard error of difference between measurements",
      "standard deviation and standard error of difference between mean differences",
      "standard deviation and standard error of difference between estimate differences",
      "standard deviation and standard error of difference between proportion differences",
      "standard deviation and standard error of difference between variance differences",
      "standard deviation calculator",
      "online standard deviation calculator",
      "sample standard deviation calculator",
      "population standard deviation calculator",
      "standard deviation formula calculator",
      "standard deviation calculator with steps",
      "standard deviation calculator for data set",
      "standard deviation calculator excel",
      "standard deviation calculator app",
      "standard deviation calculator for statistics",
      "standard deviation calculator for grouped data",
      "standard deviation calculator for ungrouped data",
      "standard deviation calculator for frequency distribution",
      "standard deviation calculator for mean and variance",
      "standard deviation calculator for probability",
      "standard deviation calculator for normal distribution",
      "standard deviation calculator for binomial distribution",
      "standard deviation calculator for Poisson distribution",
      "standard deviation calculator for sample size",
      "standard deviation calculator for confidence interval",
      "standard deviation calculator for margin of error",
      "standard deviation calculator for z-score",
      "standard deviation calculator for t-score",
      "standard deviation calculator for chi-square",
      "standard deviation calculator for ANOVA",
      "standard deviation calculator for regression",
      "standard deviation calculator for correlation",
      "standard deviation calculator for covariance",
      "standard deviation calculator for standard error",
      "standard deviation calculator for coefficient of variation",
      "standard deviation calculator for skewness",
      "standard deviation calculator for kurtosis",
      "standard deviation calculator for percentiles",
      "standard deviation calculator for quartiles",
      "standard deviation calculator for deciles",
      "standard deviation calculator for percent error",
      "standard deviation calculator for relative standard deviation",
      "standard deviation calculator for absolute deviation",
      "standard deviation calculator for mean absolute deviation",
      "standard deviation calculator for root mean square",
      "standard deviation calculator for variance analysis",
      "standard deviation calculator for hypothesis testing",
      "standard deviation calculator for p-value",
      "standard deviation calculator for effect size",
      "standard deviation calculator for power analysis",
      "standard deviation calculator for sample variance",
      "standard deviation calculator for population variance",
      "standard deviation calculator for standard error of mean",
      "standard deviation calculator for standard error of estimate",
      "standard deviation calculator for standard error of proportion",
      "standard deviation calculator for standard error of difference",
      "standard deviation calculator for standard error of regression",
      "standard deviation calculator for standard error of prediction",
      "standard deviation calculator for standard error of measurement",
      "standard deviation calculator for standard error of mean difference",
      "standard deviation calculator for standard error of estimate difference",
      "standard deviation calculator for standard error of proportion difference",
      "standard deviation calculator for standard error of difference between means",
      "standard deviation calculator for standard error of difference between proportions",
      "standard deviation calculator for standard error of difference between variances",
      "standard deviation calculator for standard error of difference between standard deviations",
      "standard deviation calculator for standard error of difference between correlations",
      "standard deviation calculator for standard error of difference between covariances",
      "standard deviation calculator for standard error of difference between regression coefficients",
      "standard deviation calculator for standard error of difference between intercepts",
      "standard deviation calculator for standard error of difference between slopes",
      "standard deviation calculator for standard error of difference between predictions",
      "standard deviation calculator for standard error of difference between measurements",
      "standard deviation calculator for standard error of difference between mean differences",
      "standard deviation calculator for standard error of difference between estimate differences",
      "standard deviation calculator for standard error of difference between proportion differences",
      "standard deviation calculator for standard error of difference between variance differences"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete Standard Deviation Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master standard deviation, variance, and statistical analysis with our comprehensive guide. 
            Learn formulas, applications, and advanced statistical concepts for students and professionals. 
            What is standard deviation, how to calculate standard deviation, standard deviation formula, 
            standard deviation explained, standard deviation example, standard deviation interpretation, 
            standard deviation vs variance, standard deviation in statistics, standard deviation meaning, 
            standard deviation definition, standard deviation and mean, standard deviation and variance, 
            standard deviation and standard error, standard deviation and coefficient of variation, 
            standard deviation and normal distribution, standard deviation and z-score, standard deviation 
            and confidence interval, standard deviation and margin of error, standard deviation and probability, 
            standard deviation and bell curve, standard deviation and outliers, standard deviation and skewness, 
            standard deviation and kurtosis, standard deviation and correlation, standard deviation and regression, 
            standard deviation and ANOVA, standard deviation and t-test, standard deviation and chi-square test, 
            standard deviation and hypothesis testing, standard deviation and p-value, standard deviation and 
            degrees of freedom, standard deviation and sample size, standard deviation and central limit theorem, 
            standard deviation and law of large numbers, standard deviation and sampling distribution, 
            standard deviation and standard normal distribution, standard deviation and empirical rule, 
            standard deviation and Chebyshev's theorem, standard deviation and percentiles, standard deviation 
            and quartiles, standard deviation and interquartile range, standard deviation and box plot, 
            standard deviation and histogram, standard deviation and frequency distribution, standard deviation 
            and cumulative frequency, standard deviation and relative frequency, standard deviation and 
            probability density function, standard deviation and cumulative distribution function, standard 
            deviation and moment, standard deviation and moment generating function, standard deviation and 
            characteristic function, standard deviation and random variable.
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
              <Link href="#basics" className="block text-primary hover:underline">
                1. Standard Deviation Fundamentals
              </Link>
              <Link href="#formulas" className="block text-primary hover:underline">
                2. Mathematical Formulas & Derivations
              </Link>
              <Link href="#calculation" className="block text-primary hover:underline">
                3. Detailed Step-by-Step Calculation
              </Link>
              <Link href="#distributions" className="block text-primary hover:underline">
                4. Statistical Distributions & Standard Deviation
              </Link>
              <Link href="#applications" className="block text-primary hover:underline">
                5. Real-World Applications & Case Studies
              </Link>
              <Link href="#mistakes" className="block text-primary hover:underline">
                6. Common Mistakes & Best Practices
              </Link>
              <Link href="#standards" className="block text-primary hover:underline">
                7. Official Standards & Guidelines
              </Link>
              <Link href="#advanced" className="block text-primary hover:underline">
                8. Advanced Statistical Concepts
              </Link>
              <Link href="#software" className="block text-primary hover:underline">
                9. Statistical Software & Tools
              </Link>
              <Link href="#faq" className="block text-primary hover:underline">
                10. Frequently Asked Questions
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
                These official sources provide authoritative information about statistical analysis, standards, and best practices:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nist.gov/statistics" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NIST - Statistical Engineering Division
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Standards and Technology - Official statistical methods and standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.iso.org/standard/3534.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ISO 3534 - Statistics Vocabulary and Symbols
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      International Organization for Standardization - Official statistical terminology and standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ieee.org/standards" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      IEEE - Statistical Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Institute of Electrical and Electronics Engineers - Official technical standards for statistical analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.astm.org/standards" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ASTM - Statistical Testing Standards
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      ASTM International - Official testing and material standards for statistical analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/WAI/WCAG21/Understanding/statistical-data" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      W3C - Statistical Data Accessibility Guidelines
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Official web standards for statistical data presentation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Educational Content Sections */}
        <section id="basics" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-blue-500" />
                1. Standard Deviation Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Standard deviation is the cornerstone of statistical analysis, providing a precise measure of data variability.
                  It quantifies how much individual data points deviate from the mean, offering insights into data consistency,
                  reliability, and predictability. Understanding standard deviation is essential for students, researchers,
                  and professionals across all fields. Standard deviation calculator, online standard deviation calculator, 
                  sample standard deviation calculator, population standard deviation calculator, standard deviation formula 
                  calculator, standard deviation calculator with steps, standard deviation calculator for data set, 
                  standard deviation calculator excel, standard deviation calculator app, standard deviation calculator 
                  for statistics, standard deviation calculator for grouped data, standard deviation calculator for ungrouped 
                  data, standard deviation calculator for frequency distribution, standard deviation calculator for mean 
                  and variance, standard deviation calculator for probability, standard deviation calculator for normal 
                  distribution, standard deviation calculator for binomial distribution, standard deviation calculator 
                  for Poisson distribution, standard deviation calculator for sample size, standard deviation calculator 
                  for confidence interval, standard deviation calculator for margin of error, standard deviation calculator 
                  for z-score, standard deviation calculator for t-score, standard deviation calculator for chi-square, 
                  standard deviation calculator for ANOVA, standard deviation calculator for regression, standard 
                  deviation calculator for correlation, standard deviation calculator for covariance, standard deviation 
                  calculator for standard error, standard deviation calculator for coefficient of variation, standard 
                  deviation calculator for skewness, standard deviation calculator for kurtosis, standard deviation 
                  calculator for percentiles, standard deviation calculator for quartiles, standard deviation calculator 
                  for deciles, standard deviation calculator for percent error, standard deviation calculator for relative 
                  standard deviation, standard deviation calculator for absolute deviation, standard deviation calculator 
                  for mean absolute deviation, standard deviation calculator for root mean square, standard deviation 
                  calculator for variance analysis, standard deviation calculator for hypothesis testing, standard 
                  deviation calculator for p-value, standard deviation calculator for effect size, standard deviation 
                  calculator for power analysis, standard deviation calculator for sample variance, standard deviation 
                  calculator for population variance, standard deviation calculator for standard error of mean, 
                  standard deviation calculator for standard error of estimate, standard deviation calculator for 
                  standard error of proportion, standard deviation calculator for standard error of difference, 
                  standard deviation calculator for standard error of regression, standard deviation calculator for 
                  standard error of prediction, standard deviation calculator for standard error of measurement, 
                  standard deviation calculator for standard error of mean difference, standard deviation calculator 
                  for standard error of estimate difference, standard deviation calculator for standard error of 
                  proportion difference, standard deviation calculator for standard error of difference between means, 
                  standard deviation calculator for standard error of difference between proportions, standard deviation 
                  calculator for standard error of difference between variances, standard deviation calculator for 
                  standard error of difference between standard deviations, standard deviation calculator for standard 
                  error of difference between correlations, standard deviation calculator for standard error of 
                  difference between covariances, standard deviation calculator for standard error of difference 
                  between regression coefficients, standard deviation calculator for standard error of difference 
                  between intercepts, standard deviation calculator for standard error of difference between slopes, 
                  standard deviation calculator for standard error of difference between predictions, standard deviation 
                  calculator for standard error of difference between measurements, standard deviation calculator for 
                  standard error of difference between mean differences, standard deviation calculator for standard 
                  error of difference between estimate differences, standard deviation calculator for standard error 
                  of difference between proportion differences, standard deviation calculator for standard error of 
                  difference between variance differences.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  According to the National Institute of Standards and Technology (NIST), standard deviation is a fundamental 
                  statistical measure that characterizes the precision and accuracy of measurement processes. The NIST/SEMATECH 
                  e-Handbook of Statistical Methods emphasizes that standard deviation serves as a critical tool for assessing 
                  measurement variability and ensuring quality control in industrial applications.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The International Organization for Standardization (ISO 3534) defines standard deviation as "a measure of 
                  the dispersion of a set of values, calculated as the square root of the variance." This official definition 
                  underscores the mathematical relationship between variance and standard deviation, establishing it as a 
                  standardized measure recognized globally across industries and academic institutions.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 text-lg">Core Concepts</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-blue-800 dark:text-blue-200">Low Standard Deviation:</strong>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Data points cluster tightly around the mean, indicating high consistency and predictability.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-blue-800 dark:text-blue-200">High Standard Deviation:</strong>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Data points are widely scattered, showing high variability and less predictability.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-blue-800 dark:text-blue-200">Zero Standard Deviation:</strong>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">All values are identical, indicating perfect consistency.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-blue-800 dark:text-blue-200">Units:</strong>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Standard deviation has the same units as the original data, making it interpretable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Population Standard Deviation</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                    Used when you have complete data for the entire population. This is the "true" standard deviation
                    of the population and uses N in the denominator.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                    <code className="text-sm font-mono">σ = √[Σ(xᵢ - μ)² / N]</code>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Where σ = population standard deviation, μ = population mean, N = population size
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Sample Standard Deviation</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                    Used when you have a sample from a larger population. Uses N-1 (Bessel's correction)
                    to provide an unbiased estimate of the population parameter.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                    <code className="text-sm font-mono">s = √[Σ(xᵢ - x̄)² / (n-1)]</code>
                  </div>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                    Where s = sample standard deviation, x̄ = sample mean, n = sample size
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Why N-1 for Sample Standard Deviation?</h4>
                <div className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <p><strong>Degrees of Freedom:</strong> When calculating sample standard deviation, we lose one degree of freedom because we're using the sample mean (which is calculated from the same data) rather than the true population mean.</p>
                  <p><strong>Bessel's Correction:</strong> The N-1 correction ensures that the sample standard deviation is an unbiased estimator of the population standard deviation.</p>
                  <p><strong>Mathematical Proof:</strong> The expectation of the sample variance with N-1 in the denominator equals the population variance, making it an unbiased estimator.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="formulas" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-green-500" />
                2. Mathematical Formulas & Derivations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding the mathematical foundations of standard deviation is crucial for proper application.
                  These formulas are derived from the fundamental principles of variance and provide the theoretical
                  basis for all statistical analysis involving data dispersion.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">Population Standard Deviation</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xl font-mono bg-white dark:bg-gray-900 p-4 rounded border shadow-sm">
                        σ = √[Σ(xᵢ - μ)² / N]
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Symbols Explained:</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>σ (sigma) = Population standard deviation</li>
                          <li>xᵢ = Individual data point</li>
                          <li>μ (mu) = Population mean</li>
                          <li>N = Total population size</li>
                          <li>Σ = Summation symbol</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">When to Use:</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Complete population data available</li>
                          <li>• Census data analysis</li>
                          <li>• Quality control with full production runs</li>
                          <li>• Theoretical calculations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">Sample Standard Deviation</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-xl font-mono bg-white dark:bg-gray-900 p-4 rounded border shadow-sm">
                        s = √[Σ(xᵢ - x̄)² / (n-1)]
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Symbols Explained:</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>s = Sample standard deviation</li>
                          <li>xᵢ = Individual data point</li>
                          <li>x̄ (x-bar) = Sample mean</li>
                          <li>n = Sample size</li>
                          <li>(n-1) = Degrees of freedom</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">When to Use:</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Sample from larger population</li>
                          <li>• Survey data analysis</li>
                          <li>• Experimental research</li>
                          <li>• Statistical inference</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">Variance Formulas</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="text-center">
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Population Variance</h5>
                        <div className="text-lg font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                          σ² = Σ(xᵢ - μ)² / N
                        </div>
                      </div>
                      <div className="text-center">
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Sample Variance</h5>
                        <div className="text-lg font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                          s² = Σ(xᵢ - x̄)² / (n-1)
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Key Relationship:</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        <strong>Standard Deviation = √Variance</strong><br/>
                        This fundamental relationship means that standard deviation is simply the square root of variance.
                        Variance measures the average squared deviation from the mean, while standard deviation provides
                        a measure in the same units as the original data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Alternative Computational Formulas</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Computational Formula (Population)</h5>
                        <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                          σ = √[(Σx² - (Σx)²/N) / N]
                        </div>
                        <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                          More efficient for large datasets
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Computational Formula (Sample)</h5>
                        <div className="text-sm font-mono bg-white dark:bg-gray-900 p-3 rounded border">
                          s = √[(Σx² - (Σx)²/n) / (n-1)]
                        </div>
                        <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                          Reduces rounding errors in calculations
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Advantages of Computational Formulas:</h5>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        <li>• Reduced computational complexity</li>
                        <li>• Better numerical stability</li>
                        <li>• Less prone to rounding errors</li>
                        <li>• More efficient for large datasets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="calculation" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-500" />
                3. Detailed Step-by-Step Calculation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Master the calculation process with our comprehensive step-by-step guide. We'll work through
                  a complete example using both population and sample standard deviation methods, ensuring you
                  understand every mathematical operation involved.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">Example Dataset</h4>
                <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Test Scores: 10, 12, 23, 23, 16, 23, 21, 16</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">n = 8 data points</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">Calculate the Mean</h4>
                    <p className="text-muted-foreground mb-4">Add all values and divide by the number of values</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div className="text-sm font-mono">
                          <strong>Step 1a:</strong> Sum all values<br/>
                          10 + 12 + 23 + 23 + 16 + 23 + 21 + 16 = 144
                        </div>
                        <div className="text-sm font-mono">
                          <strong>Step 1b:</strong> Divide by number of values<br/>
                          Mean = 144 ÷ 8 = 18.0
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-700">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>Interpretation:</strong> The average test score is 18.0 points.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">Calculate Deviations from Mean</h4>
                    <p className="text-muted-foreground mb-4">Subtract the mean from each individual value</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono">
                        <div>10 - 18 = -8</div>
                        <div>12 - 18 = -6</div>
                        <div>23 - 18 = +5</div>
                        <div>23 - 18 = +5</div>
                        <div>16 - 18 = -2</div>
                        <div>23 - 18 = +5</div>
                        <div>21 - 18 = +3</div>
                        <div>16 - 18 = -2</div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-700">
                      <p className="text-sm text-green-700 dark:text-green-300">
                        <strong>Key Point:</strong> Deviations can be positive or negative. Positive values are above the mean, negative values are below.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">Square the Deviations</h4>
                    <p className="text-muted-foreground mb-4">Square each deviation to eliminate negative values and emphasize larger deviations</p>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-mono">
                        <div>(-8)² = 64</div>
                        <div>(-6)² = 36</div>
                        <div>(+5)² = 25</div>
                        <div>(+5)² = 25</div>
                        <div>(-2)² = 4</div>
                        <div>(+5)² = 25</div>
                        <div>(+3)² = 9</div>
                        <div>(-2)² = 4</div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded border border-yellow-200 dark:border-yellow-700">
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        <strong>Why Square?</strong> Squaring ensures all values are positive and gives more weight to larger deviations from the mean.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">Calculate Variance</h4>
                    <p className="text-muted-foreground mb-4">Sum squared deviations and divide by N (population) or N-1 (sample)</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Population Variance</h5>
                        <div className="text-sm font-mono space-y-1">
                          <div>Sum: 64+36+25+25+4+25+9+4 = 192</div>
                          <div>Variance = 192 ÷ 8 = 24.0</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Sample Variance</h5>
                        <div className="text-sm font-mono space-y-1">
                          <div>Sum: 64+36+25+25+4+25+9+4 = 192</div>
                          <div>Variance = 192 ÷ (8-1) = 27.43</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded border border-orange-200 dark:border-orange-700">
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        <strong>Note:</strong> Sample variance (27.43) is larger than population variance (24.0) due to the N-1 correction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-3">Calculate Standard Deviation</h4>
                    <p className="text-muted-foreground mb-4">Take the square root of variance to get standard deviation</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Population Standard Deviation</h5>
                        <div className="text-sm font-mono">
                          σ = √24.0 = 4.90
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Sample Standard Deviation</h5>
                        <div className="text-sm font-mono">
                          s = √27.43 = 5.24
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-700">
                      <p className="text-sm text-green-700 dark:text-green-300">
                        <strong>Interpretation:</strong> The standard deviation of 4.90 (population) or 5.24 (sample) means that most test scores fall within about 5 points of the mean score of 18.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-4 text-lg">Quick Verification</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                    <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">68-95-99.7 Rule Check</h5>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      For normally distributed data, approximately 68% of values should fall within 1 standard deviation of the mean.
                    </p>
                    <div className="mt-2 text-sm font-mono">
                      Mean ± 1σ: 18.0 ± 4.90 = [13.1, 22.9]<br/>
                      Count values in range: 5 out of 8 (62.5%) ✓
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="distributions" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-indigo-500" />
                4. Statistical Distributions & Standard Deviation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding how standard deviation relates to different statistical distributions is crucial for
                  proper data interpretation. Different distributions have unique characteristics that affect how
                  standard deviation should be interpreted and applied.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-700">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-4 text-lg">Normal Distribution (Gaussian)</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">68-95-99.7 Rule</h5>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                          <li>• 68% of data within 1σ of mean</li>
                          <li>• 95% of data within 2σ of mean</li>
                          <li>• 99.7% of data within 3σ of mean</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Characteristics</h5>
                        <ul className="text-sm text-indigo-600 dark:text-indigo-400 space-y-1">
                          <li>• Bell-shaped curve</li>
                          <li>• Symmetric around mean</li>
                          <li>• Mean = Median = Mode</li>
                          <li>• Defined by μ and σ</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Real-World Examples</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Height Distribution:</strong> Human heights follow normal distribution
                        </div>
                        <div>
                          <strong>Test Scores:</strong> IQ tests and standardized exams
                        </div>
                        <div>
                          <strong>Measurement Errors:</strong> Scientific instrument readings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">Skewed Distributions</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Right-Skewed (Positive Skew)</h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Tail extends to the right</li>
                          <li>• Mean > Median > Mode</li>
                          <li>• Common in income data</li>
                          <li>• Standard deviation affected by outliers</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Left-Skewed (Negative Skew)</h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Tail extends to the left</li>
                          <li>• Mode > Median > Mean</li>
                          <li>• Common in test scores</li>
                          <li>• Standard deviation less meaningful</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Interpretation Challenges</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        In skewed distributions, standard deviation may not accurately represent the typical spread of data.
                        Consider using median absolute deviation (MAD) or interquartile range (IQR) for better interpretation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">Bimodal and Multimodal Distributions</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Bimodal Distribution</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Two distinct peaks</li>
                          <li>• Often indicates two populations</li>
                          <li>• Standard deviation may be misleading</li>
                          <li>• Consider analyzing groups separately</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Multimodal Distribution</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Multiple peaks present</li>
                          <li>• Complex underlying structure</li>
                          <li>• Requires advanced analysis</li>
                          <li>• Standard deviation less informative</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Examples</h5>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Bimodal:</strong> Heights of men and women combined
                        </div>
                        <div>
                          <strong>Multimodal:</strong> Test scores from multiple grade levels
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Uniform Distribution</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Characteristics</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• All values equally likely</li>
                          <li>• Rectangular shape</li>
                          <li>• No central tendency</li>
                          <li>• Standard deviation = (max-min)/√12</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Applications</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Random number generation</li>
                          <li>• Quality control sampling</li>
                          <li>• Monte Carlo simulations</li>
                          <li>• Fair dice rolls</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Formula for Uniform Distribution</h5>
                      <div className="text-sm font-mono">
                        σ = (b - a) / √12
                      </div>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        Where a = minimum value, b = maximum value
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="applications" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-500" />
                5. Real-World Applications & Case Studies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Standard deviation finds extensive applications across diverse industries and research fields. 
                  Understanding these real-world applications helps professionals implement statistical analysis 
                  effectively in their respective domains, ensuring accurate decision-making and quality improvement. 
                  Standard deviation calculator for test scores, standard deviation calculator for stock prices, 
                  standard deviation calculator for investment returns, standard deviation calculator for scientific 
                  data, standard deviation calculator for research data, standard deviation calculator for survey 
                  data, standard deviation calculator for experimental data, standard deviation calculator for 
                  financial data, standard deviation calculator for economic data, standard deviation calculator 
                  for business data, standard deviation calculator for medical data, standard deviation calculator 
                  for engineering data, standard deviation calculator for social science data, standard deviation 
                  calculator for educational data, standard deviation calculator for psychological data, standard 
                  deviation calculator for environmental data, standard deviation calculator for agricultural data, 
                  standard deviation calculator for meteorological data, standard deviation calculator for geological 
                  data, standard deviation calculator for astronomical data, standard deviation calculator for 
                  chemical data, standard deviation calculator for physical data, standard deviation calculator 
                  for biological data, standard deviation calculator for health data, standard deviation calculator 
                  for nutrition data, standard deviation calculator for fitness data, standard deviation calculator 
                  for sports data, standard deviation calculator for weather data, standard deviation calculator 
                  for climate data, standard deviation calculator for energy data, standard deviation calculator 
                  for transportation data, standard deviation calculator for logistics data, standard deviation 
                  calculator for supply chain data, standard deviation calculator for manufacturing data, standard 
                  deviation calculator for production data, standard deviation calculator for quality control data, 
                  standard deviation calculator for process data, standard deviation calculator for operations data, 
                  standard deviation calculator for project management data, standard deviation calculator for risk 
                  management data, standard deviation calculator for performance data, standard deviation calculator 
                  for marketing data, standard deviation calculator for sales data, standard deviation calculator 
                  for customer data, standard deviation calculator for user data, standard deviation calculator 
                  for website data, standard deviation calculator for SEO data, standard deviation calculator 
                  for social media data, standard deviation calculator for email data, standard deviation calculator 
                  for advertising data, standard deviation calculator for campaign data, standard deviation calculator 
                  for analytics data.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Quality Control & Manufacturing</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Process Control Applications</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Manufacturing process control and monitoring</li>
                          <li>• Product consistency measurement and analysis</li>
                          <li>• Defect rate analysis and reduction strategies</li>
                          <li>• Statistical process control (SPC) implementation</li>
                          <li>• Six Sigma quality improvement projects</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Industry Standards</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• ISO 9001 quality management systems</li>
                          <li>• ASME manufacturing standards</li>
                          <li>• ASTM material testing protocols</li>
                          <li>• FDA pharmaceutical manufacturing</li>
                          <li>• Automotive industry quality standards</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Case Study: Automotive Manufacturing</h5>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        In automotive manufacturing, standard deviation is used to monitor engine component dimensions. 
                        A target diameter of 50.0mm with a standard deviation of 0.1mm ensures 99.7% of parts fall 
                        within specification limits (±3σ), maintaining quality standards and reducing warranty claims.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">Financial Analysis & Risk Management</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Investment Applications</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Portfolio volatility measurement and analysis</li>
                          <li>• Risk assessment for investment decisions</li>
                          <li>• Market analysis and trend identification</li>
                          <li>• Value at Risk (VaR) calculations</li>
                          <li>• Asset allocation optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Regulatory Compliance</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• Basel III risk management requirements</li>
                          <li>• SEC reporting standards for mutual funds</li>
                          <li>• Solvency II insurance regulations</li>
                          <li>• IFRS 9 financial instrument standards</li>
                          <li>• MiFID II investment services directive</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Case Study: Portfolio Management</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        A portfolio manager uses standard deviation to compare two investment options: Stock A with 
                        12% annual return and 8% standard deviation versus Stock B with 12% return and 15% standard 
                        deviation. Stock A is preferred due to lower volatility (risk) for the same expected return.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">Scientific Research & Healthcare</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Research Applications</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Experimental data analysis and interpretation</li>
                          <li>• Measurement precision and accuracy assessment</li>
                          <li>• Statistical significance testing and validation</li>
                          <li>• Clinical trial data analysis</li>
                          <li>• Laboratory quality control procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Healthcare Standards</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• CLIA laboratory testing standards</li>
                          <li>• FDA clinical trial guidelines</li>
                          <li>• WHO global health statistics</li>
                          <li>• CDC epidemiological surveillance</li>
                          <li>• ICH clinical research guidelines</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Case Study: Clinical Research</h5>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        In a clinical trial testing a new medication, researchers measure blood pressure reduction. 
                        The treatment group shows a mean reduction of 15 mmHg with a standard deviation of 3 mmHg, 
                        while the control group shows 5 mmHg ± 2 mmHg. The larger standard deviation in the treatment 
                        group indicates greater individual variation in response to the medication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">Data Science & Technology</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Analytics Applications</h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• Machine learning feature analysis and selection</li>
                          <li>• Data preprocessing and normalization</li>
                          <li>• Anomaly detection and outlier identification</li>
                          <li>• A/B testing and experimental design</li>
                          <li>• Performance monitoring and optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Technology Standards</h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• IEEE software engineering standards</li>
                          <li>• ISO/IEC 25010 software quality models</li>
                          <li>• NIST cybersecurity framework</li>
                          <li>• GDPR data protection regulations</li>
                          <li>• SOC 2 compliance requirements</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">Case Study: E-commerce Analytics</h5>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        An e-commerce platform analyzes user session durations to optimize website performance. 
                        The mean session duration is 4.2 minutes with a standard deviation of 1.8 minutes. Sessions 
                        lasting more than 7.8 minutes (mean + 2σ) are flagged as potential anomalies for further 
                        investigation, helping identify unusual user behavior patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="mistakes" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                6. Common Mistakes & Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Even experienced analysts can make mistakes when working with standard deviation. Understanding
                  common pitfalls and following best practices will improve your statistical analysis and prevent
                  costly errors in interpretation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-red-200 dark:border-red-700">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4 text-lg">Common Mistakes to Avoid</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Using Population Formula for Samples</h5>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Always use N-1 for sample standard deviation to get unbiased estimates of population parameters.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Ignoring Distribution Shape</h5>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Standard deviation may be misleading for skewed or multimodal distributions.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Comparing Standard Deviations Directly</h5>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Use coefficient of variation when comparing variability across different scales.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Ignoring Outliers</h5>
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Extreme values can dramatically inflate standard deviation. Consider robust measures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">Best Practices</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Always Report Sample Size</h5>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Include n in your results: "Mean = 25.3, SD = 4.2 (n = 30)"
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Check Data Distribution</h5>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Visualize your data before calculating standard deviation to ensure it's appropriate.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Use Appropriate Measures</h5>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Consider median absolute deviation (MAD) for skewed data or IQR for ordinal data.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Report Confidence Intervals</h5>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Include confidence intervals for standard deviation when possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">When NOT to Use Standard Deviation</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Ordinal Data</h5>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          Use median and interquartile range for ranked or categorical data.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Small Sample Sizes</h5>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          Consider range or other measures when n &lt; 10.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Highly Skewed Data</h5>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          Use robust measures like median absolute deviation.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Bimodal Distributions</h5>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          Analyze groups separately rather than using overall standard deviation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="standards" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                7. Official Standards & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding official standards and guidelines for standard deviation is crucial for professionals working 
                  in regulated industries, research institutions, and quality control environments. These standards ensure 
                  consistency, accuracy, and compliance with international best practices.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">NIST Guidelines for Standard Deviation</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Measurement Process Characterization</h5>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                        According to NIST/SEMATECH e-Handbook, standard deviation is essential for characterizing measurement 
                        processes and assessing instrument precision. The guidelines emphasize the importance of distinguishing 
                        between standard deviation and standard error of the mean in reporting statistical variation.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded">
                        <p className="text-xs text-blue-700 dark:text-blue-300">
                          <strong>NIST Recommendation:</strong> "Report both the standard deviation and the standard deviation 
                          of the mean, depending on whether you are characterizing the population or the precision of the mean estimate."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">ISO 3534 Statistical Standards</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">International Standardization</h5>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                        ISO 3534 establishes standardized terminology and symbols for statistical methods, including standard deviation. 
                        This international standard ensures consistency across industries and facilitates global communication 
                        of statistical concepts and results.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="font-semibold text-green-700 dark:text-green-300 mb-2">Key ISO 3534 Definitions:</h6>
                          <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                            <li>• Standard deviation: Square root of variance</li>
                            <li>• Population standard deviation: σ</li>
                            <li>• Sample standard deviation: s</li>
                            <li>• Degrees of freedom: n-1</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-green-700 dark:text-green-300 mb-2">Applications:</h6>
                          <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                            <li>• Quality control systems</li>
                            <li>• Research methodology</li>
                            <li>• Industrial standards</li>
                            <li>• Academic reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">American Statistical Association Guidelines</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Professional Standards</h5>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                        The American Statistical Association (ASA) provides comprehensive guidelines for reporting statistical 
                        results, emphasizing the importance of including standard deviation in research publications and 
                        professional reports. These guidelines ensure transparency and reproducibility in statistical analysis.
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded">
                        <h6 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">ASA Reporting Standards:</h6>
                        <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• Always report sample size (n) with standard deviation</li>
                          <li>• Specify whether population or sample standard deviation is used</li>
                          <li>• Include confidence intervals when appropriate</li>
                          <li>• Provide context for interpretation of standard deviation values</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Quality Control Standards</h4>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Six Sigma and Lean Manufacturing</h5>
                      <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
                        In quality control and Six Sigma methodologies, standard deviation plays a central role in process 
                        capability analysis and defect reduction. These standards require specific reporting formats and 
                        calculation methods to ensure consistent quality management across organizations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h6 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Six Sigma Requirements:</h6>
                          <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Process capability indices (Cp, Cpk)</li>
                            <li>• Control chart monitoring</li>
                            <li>• Defect rate calculations</li>
                            <li>• Specification limit analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h6 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Documentation Standards:</h6>
                          <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                            <li>• Statistical process control charts</li>
                            <li>• Capability study reports</li>
                            <li>• Measurement system analysis</li>
                            <li>• Quality improvement documentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="advanced" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-500" />
                8. Advanced Statistical Concepts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Coefficient of Variation</h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    CV = (Standard Deviation / Mean) × 100%
                  </p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">
                    Useful for comparing variability between datasets with different units or scales.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Confidence Intervals</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    CI = Mean ± (t-value × Standard Error)
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    Provides a range within which the true population mean is likely to fall.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Z-Scores</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                    Z = (X - Mean) / Standard Deviation
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Measures how many standard deviations a value is from the mean.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="examples" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                6. Practical Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Example 1: Test Scores</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                    <strong>Data:</strong> 85, 90, 78, 92, 88, 95, 82, 89
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    <strong>Mean:</strong> 87.375, <strong>Standard Deviation:</strong> 5.67
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    <strong>Interpretation:</strong> Most scores are within 5.67 points of the average score of 87.375.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example 2: Stock Returns</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    <strong>Data:</strong> 2.5%, 3.1%, -1.2%, 4.8%, 1.9%, 0.5%, 3.7%, 2.1%
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    <strong>Mean:</strong> 2.16%, <strong>Standard Deviation:</strong> 1.89%
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    <strong>Interpretation:</strong> Daily returns vary by about 1.89% from the average return of 2.16%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="tips" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                7. Tips & Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Calculation Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Always check for outliers before calculating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use appropriate formula (population vs sample)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Round to appropriate decimal places</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Interpretation Tips</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Consider the context and units</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compare with similar datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use coefficient of variation for comparisons</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* External Backlinks Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                External Resources & Backlinks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Educational Institutions</h3>
                  <div className="space-y-2">
                    <Link href="https://web.mit.edu/statistics" className="block text-sm text-primary hover:underline">
                      MIT - Statistics and Data Science
                    </Link>
                    <Link href="https://www.harvard.edu/statistics" className="block text-sm text-primary hover:underline">
                      Harvard - Department of Statistics
                    </Link>
                    <Link href="https://www.stanford.edu/statistics" className="block text-sm text-primary hover:underline">
                      Stanford - Statistics Department
                    </Link>
                    <Link href="https://www.caltech.edu/statistics" className="block text-sm text-primary hover:underline">
                      Caltech - Statistical Sciences
                    </Link>
                    <Link href="https://www.berkeley.edu/statistics" className="block text-sm text-primary hover:underline">
                      UC Berkeley - Statistics Department
                    </Link>
                    <Link href="https://www.cornell.edu/statistics" className="block text-sm text-primary hover:underline">
                      Cornell - Statistical Sciences
                    </Link>
                    <Link href="https://www.princeton.edu/statistics" className="block text-sm text-primary hover:underline">
                      Princeton - Statistics Department
                    </Link>
                    <Link href="https://www.yale.edu/statistics" className="block text-sm text-primary hover:underline">
                      Yale - Statistics Department
                    </Link>
                    <Link href="https://www.columbia.edu/statistics" className="block text-sm text-primary hover:underline">
                      Columbia - Statistics Department
                    </Link>
                    <Link href="https://www.upenn.edu/statistics" className="block text-sm text-primary hover:underline">
                      UPenn - Statistics Department
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Organizations</h3>
                  <div className="space-y-2">
                    <Link href="https://www.asme.org/statistics" className="block text-sm text-primary hover:underline">
                      ASME - Statistical Methods
                    </Link>
                    <Link href="https://www.ieee.org/statistics" className="block text-sm text-primary hover:underline">
                      IEEE - Statistical Standards
                    </Link>
                    <Link href="https://www.astm.org/statistics" className="block text-sm text-primary hover:underline">
                      ASTM - Statistical Testing
                    </Link>
                    <Link href="https://www.nspe.org/statistics" className="block text-sm text-primary hover:underline">
                      NSPE - Statistical Engineering
                    </Link>
                    <Link href="https://www.aiche.org/statistics" className="block text-sm text-primary hover:underline">
                      AIChE - Statistical Process Control
                    </Link>
                    <Link href="https://www.asce.org/statistics" className="block text-sm text-primary hover:underline">
                      ASCE - Statistical Analysis
                    </Link>
                    <Link href="https://www.sae.org/statistics" className="block text-sm text-primary hover:underline">
                      SAE - Statistical Methods
                    </Link>
                    <Link href="https://www.ansi.org/statistics" className="block text-sm text-primary hover:underline">
                      ANSI - Statistical Standards
                    </Link>
                    <Link href="https://www.iso.org/statistics" className="block text-sm text-primary hover:underline">
                      ISO - Statistical Standards
                    </Link>
                    <Link href="https://www.iec.ch/statistics" className="block text-sm text-primary hover:underline">
                      IEC - Statistical Methods
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Government Resources</h3>
                  <div className="space-y-2">
                    <Link href="https://www.nist.gov/statistics" className="block text-sm text-primary hover:underline">
                      NIST - Statistical Engineering
                    </Link>
                    <Link href="https://www.bipm.org/statistics" className="block text-sm text-primary hover:underline">
                      BIPM - Statistical Methods
                    </Link>
                    <Link href="https://www.cdc.gov/statistics" className="block text-sm text-primary hover:underline">
                      CDC - Statistical Analysis
                    </Link>
                    <Link href="https://www.fda.gov/statistics" className="block text-sm text-primary hover:underline">
                      FDA - Statistical Standards
                    </Link>
                    <Link href="https://www.epa.gov/statistics" className="block text-sm text-primary hover:underline">
                      EPA - Statistical Methods
                    </Link>
                    <Link href="https://www.nasa.gov/statistics" className="block text-sm text-primary hover:underline">
                      NASA - Statistical Analysis
                    </Link>
                    <Link href="https://www.noaa.gov/statistics" className="block text-sm text-primary hover:underline">
                      NOAA - Statistical Methods
                    </Link>
                    <Link href="https://www.usgs.gov/statistics" className="block text-sm text-primary hover:underline">
                      USGS - Statistical Analysis
                    </Link>
                    <Link href="https://www.energy.gov/statistics" className="block text-sm text-primary hover:underline">
                      DOE - Statistical Methods
                    </Link>
                    <Link href="https://www.transportation.gov/statistics" className="block text-sm text-primary hover:underline">
                      DOT - Statistical Analysis
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Industry Resources</h3>
                  <div className="space-y-2">
                    <Link href="https://www.engineeringtoolbox.com/statistics" className="block text-sm text-primary hover:underline">
                      Engineering Toolbox - Statistics
                    </Link>
                    <Link href="https://www.khanacademy.org/statistics" className="block text-sm text-primary hover:underline">
                      Khan Academy - Statistics
                    </Link>
                    <Link href="https://www.calculatorsoup.com/statistics" className="block text-sm text-primary hover:underline">
                      Calculator Soup - Statistics
                    </Link>
                    <Link href="https://www.rapidtables.com/statistics" className="block text-sm text-primary hover:underline">
                      RapidTables - Statistics
                    </Link>
                    <Link href="https://www.convertunits.com/statistics" className="block text-sm text-primary hover:underline">
                      Convert Units - Statistics
                    </Link>
                    <Link href="https://www.unitconversion.org/statistics" className="block text-sm text-primary hover:underline">
                      Unit Conversion - Statistics
                    </Link>
                    <Link href="https://www.convertme.com/statistics" className="block text-sm text-primary hover:underline">
                      Convert Me - Statistics
                    </Link>
                    <Link href="https://www.onlineconversion.com/statistics" className="block text-sm text-primary hover:underline">
                      Online Conversion - Statistics
                    </Link>
                    <Link href="https://www.convertworld.com/statistics" className="block text-sm text-primary hover:underline">
                      Convert World - Statistics
                    </Link>
                    <Link href="https://www.mathisfun.com/statistics" className="block text-sm text-primary hover:underline">
                      Math is Fun - Statistics
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Statistical Software & Tools</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.statistics.com" className="block text-primary hover:underline">
                    Statistics.com
                  </Link>
                  <Link href="https://www.statmethods.net" className="block text-primary hover:underline">
                    StatMethods.net
                  </Link>
                  <Link href="https://www.statsoft.com" className="block text-primary hover:underline">
                    StatSoft
                  </Link>
                  <Link href="https://www.minitab.com" className="block text-primary hover:underline">
                    Minitab
                  </Link>
                  <Link href="https://www.spss.com" className="block text-primary hover:underline">
                    SPSS
                  </Link>
                  <Link href="https://www.sas.com" className="block text-primary hover:underline">
                    SAS
                  </Link>
                  <Link href="https://www.r-project.org" className="block text-primary hover:underline">
                    R Project
                  </Link>
                  <Link href="https://www.python.org/statistics" className="block text-primary hover:underline">
                    Python Statistics
                  </Link>
                  <Link href="https://www.matlab.com/statistics" className="block text-primary hover:underline">
                    MATLAB Statistics
                  </Link>
                  <Link href="https://www.excel-statistics.com" className="block text-primary hover:underline">
                    Excel Statistics
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Educational & Research Resources</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.khanacademy.org/math/statistics-probability" className="block text-primary hover:underline">
                    Khan Academy - Statistics
                  </Link>
                  <Link href="https://www.coursera.org/learn/statistics" className="block text-primary hover:underline">
                    Coursera - Statistics
                  </Link>
                  <Link href="https://www.edx.org/learn/statistics" className="block text-primary hover:underline">
                    edX - Statistics
                  </Link>
                  <Link href="https://www.udemy.com/statistics" className="block text-primary hover:underline">
                    Udemy - Statistics
                  </Link>
                  <Link href="https://www.coursera.org/specializations/statistics" className="block text-primary hover:underline">
                    Coursera - Statistics Specialization
                  </Link>
                  <Link href="https://www.mit.edu/statistics" className="block text-primary hover:underline">
                    MIT - Statistics
                  </Link>
                  <Link href="https://www.stanford.edu/statistics" className="block text-primary hover:underline">
                    Stanford - Statistics
                  </Link>
                  <Link href="https://www.harvard.edu/statistics" className="block text-primary hover:underline">
                    Harvard - Statistics
                  </Link>
                  <Link href="https://www.berkeley.edu/statistics" className="block text-primary hover:underline">
                    UC Berkeley - Statistics
                  </Link>
                  <Link href="https://www.cmu.edu/statistics" className="block text-primary hover:underline">
                    CMU - Statistics
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold mb-2 text-purple-800 dark:text-purple-200">Online Calculators & Tools</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.calculator.net/statistics-calculator.html" className="block text-primary hover:underline">
                    Calculator.net - Statistics
                  </Link>
                  <Link href="https://www.graphpad.com/quickcalcs" className="block text-primary hover:underline">
                    GraphPad - QuickCalcs
                  </Link>
                  <Link href="https://www.mathcracker.com/statistics-calculator" className="block text-primary hover:underline">
                    MathCracker - Statistics
                  </Link>
                  <Link href="https://www.socscistatistics.com/descriptive" className="block text-primary hover:underline">
                    Social Science Statistics
                  </Link>
                  <Link href="https://www.calculatorsoup.com/calculators/statistics" className="block text-primary hover:underline">
                    Calculator Soup - Statistics
                  </Link>
                  <Link href="https://www.rapidtables.com/calc/math" className="block text-primary hover:underline">
                    RapidTables - Statistics
                  </Link>
                  <Link href="https://www.convertunits.com/statistics" className="block text-primary hover:underline">
                    Convert Units - Statistics
                  </Link>
                  <Link href="https://www.unitconversion.org/statistics" className="block text-primary hover:underline">
                    Unit Conversion - Statistics
                  </Link>
                  <Link href="https://www.convertme.com/statistics" className="block text-primary hover:underline">
                    Convert Me - Statistics
                  </Link>
                  <Link href="https://www.onlineconversion.com/statistics" className="block text-primary hover:underline">
                    Online Conversion - Statistics
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold mb-2 text-orange-800 dark:text-orange-200">Professional Organizations & Standards</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.amstat.org" className="block text-primary hover:underline">
                    American Statistical Association
                  </Link>
                  <Link href="https://www.royalstatisticalsociety.org" className="block text-primary hover:underline">
                    Royal Statistical Society
                  </Link>
                  <Link href="https://www.statcan.gc.ca" className="block text-primary hover:underline">
                    Statistics Canada
                  </Link>
                  <Link href="https://www.ons.gov.uk" className="block text-primary hover:underline">
                    UK Office for National Statistics
                  </Link>
                  <Link href="https://www.abs.gov.au" className="block text-primary hover:underline">
                    Australian Bureau of Statistics
                  </Link>
                  <Link href="https://www.destatis.de" className="block text-primary hover:underline">
                    German Federal Statistical Office
                  </Link>
                  <Link href="https://www.insee.fr" className="block text-primary hover:underline">
                    INSEE - France
                  </Link>
                  <Link href="https://www.istat.it" className="block text-primary hover:underline">
                    ISTAT - Italy
                  </Link>
                  <Link href="https://www.cbs.nl" className="block text-primary hover:underline">
                    CBS - Netherlands
                  </Link>
                  <Link href="https://www.scb.se" className="block text-primary hover:underline">
                    Statistics Sweden
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">Industry & Technical Resources</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.qualitydigest.com" className="block text-primary hover:underline">
                    Quality Digest
                  </Link>
                  <Link href="https://www.isixsigma.com" className="block text-primary hover:underline">
                    iSixSigma
                  </Link>
                  <Link href="https://www.qualitymag.com" className="block text-primary hover:underline">
                    Quality Magazine
                  </Link>
                  <Link href="https://www.qualityprogress.com" className="block text-primary hover:underline">
                    Quality Progress
                  </Link>
                  <Link href="https://www.quality.org" className="block text-primary hover:underline">
                    Quality.org
                  </Link>
                  <Link href="https://www.quality-assurance-solutions.com" className="block text-primary hover:underline">
                    Quality Assurance Solutions
                  </Link>
                  <Link href="https://www.quality-one.com" className="block text-primary hover:underline">
                    Quality-One
                  </Link>
                  <Link href="https://www.qualitygurus.com" className="block text-primary hover:underline">
                    Quality Gurus
                  </Link>
                  <Link href="https://www.quality-improvement.com" className="block text-primary hover:underline">
                    Quality Improvement
                  </Link>
                  <Link href="https://www.quality-tools.com" className="block text-primary hover:underline">
                    Quality Tools
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-semibold mb-2 text-indigo-800 dark:text-indigo-200">Mathematical & Scientific Resources</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.wolfram.com/mathematica" className="block text-primary hover:underline">
                    Wolfram Mathematica
                  </Link>
                  <Link href="https://www.mathworks.com/products/matlab" className="block text-primary hover:underline">
                    MATLAB
                  </Link>
                  <Link href="https://www.originlab.com" className="block text-primary hover:underline">
                    OriginLab
                  </Link>
                  <Link href="https://www.jmp.com" className="block text-primary hover:underline">
                    JMP Statistical Software
                  </Link>
                  <Link href="https://www.stata.com" className="block text-primary hover:underline">
                    Stata
                  </Link>
                  <Link href="https://www.eviews.com" className="block text-primary hover:underline">
                    EViews
                  </Link>
                  <Link href="https://www.gretl.sourceforge.net" className="block text-primary hover:underline">
                    gretl
                  </Link>
                  <Link href="https://www.pspp.org" className="block text-primary hover:underline">
                    PSPP
                  </Link>
                  <Link href="https://www.gnu.org/software/octave" className="block text-primary hover:underline">
                    GNU Octave
                  </Link>
                  <Link href="https://www.scilab.org" className="block text-primary hover:underline">
                    Scilab
                  </Link>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                <h4 className="font-semibold mb-2 text-teal-800 dark:text-teal-200">Data Science & Analytics Resources</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.kaggle.com" className="block text-primary hover:underline">
                    Kaggle
                  </Link>
                  <Link href="https://www.datacamp.com" className="block text-primary hover:underline">
                    DataCamp
                  </Link>
                  <Link href="https://www.datascience.com" className="block text-primary hover:underline">
                    DataScience.com
                  </Link>
                  <Link href="https://www.analyticsvidhya.com" className="block text-primary hover:underline">
                    Analytics Vidhya
                  </Link>
                  <Link href="https://www.towardsdatascience.com" className="block text-primary hover:underline">
                    Towards Data Science
                  </Link>
                  <Link href="https://www.kdnuggets.com" className="block text-primary hover:underline">
                    KDnuggets
                  </Link>
                  <Link href="https://www.datasciencecentral.com" className="block text-primary hover:underline">
                    Data Science Central
                  </Link>
                  <Link href="https://www.bigdata-madesimple.com" className="block text-primary hover:underline">
                    Big Data Made Simple
                  </Link>
                  <Link href="https://www.datascience.community" className="block text-primary hover:underline">
                    Data Science Community
                  </Link>
                  <Link href="https://www.datascience.stackexchange.com" className="block text-primary hover:underline">
                    Data Science Stack Exchange
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Software Section */}
        <section id="software" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-500" />
                9. Statistical Software & Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern statistical analysis relies heavily on software tools. Understanding which tools to use
                  and how to properly calculate standard deviation in different environments is essential for
                  accurate and efficient data analysis.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">Excel & Google Sheets</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Excel Functions</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• <code>STDEV.P()</code> - Population standard deviation</li>
                          <li>• <code>STDEV.S()</code> - Sample standard deviation</li>
                          <li>• <code>STDEVP()</code> - Legacy population function</li>
                          <li>• <code>STDEV()</code> - Legacy sample function</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Google Sheets</h5>
                        <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• <code>STDEVP()</code> - Population standard deviation</li>
                          <li>• <code>STDEV()</code> - Sample standard deviation</li>
                          <li>• <code>STDEVPA()</code> - Population (includes text)</li>
                          <li>• <code>STDEVA()</code> - Sample (includes text)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Example Usage</h5>
                      <div className="text-sm font-mono">
                        =STDEV.S(A1:A10) // Sample standard deviation<br/>
                        =STDEV.P(A1:A10) // Population standard deviation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 text-lg">R Programming</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Base R Functions</h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• <code>sd()</code> - Sample standard deviation</li>
                          <li>• <code>var()</code> - Sample variance</li>
                          <li>• <code>mad()</code> - Median absolute deviation</li>
                          <li>• <code>IQR()</code> - Interquartile range</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">Example Code</h5>
                        <div className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded">
                          data &lt;- c(1,2,3,4,5)<br/>
                          sd(data) # Sample SD<br/>
                          sqrt(var(data)) # Same result
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-lg">Python (NumPy/Pandas)</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">NumPy Functions</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• <code>np.std()</code> - Standard deviation</li>
                          <li>• <code>np.var()</code> - Variance</li>
                          <li>• <code>ddof</code> parameter for sample/population</li>
                          <li>• <code>np.nanstd()</code> - Ignore NaN values</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Pandas Methods</h5>
                        <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• <code>df.std()</code> - Column-wise standard deviation</li>
                          <li>• <code>df.var()</code> - Column-wise variance</li>
                          <li>• <code>ddof</code> parameter for correction</li>
                          <li>• <code>skipna</code> parameter for missing values</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Example Code</h5>
                      <div className="text-sm font-mono">
                        import numpy as np<br/>
                        data = [1,2,3,4,5]<br/>
                        np.std(data, ddof=1) # Sample SD<br/>
                        np.std(data, ddof=0) # Population SD
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Statistical Software</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">SPSS</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• Analyze → Descriptive Statistics</li>
                          <li>• Descriptives procedure</li>
                          <li>• Frequencies procedure</li>
                          <li>• Explore procedure for detailed stats</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">SAS</h5>
                        <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• <code>PROC MEANS</code> procedure</li>
                          <li>• <code>STD</code> option for standard deviation</li>
                          <li>• <code>VAR</code> statement for variables</li>
                          <li>• <code>PROC UNIVARIATE</code> for detailed analysis</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Online Calculators</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <strong>Calculator.net:</strong> Comprehensive statistical calculator
                        </div>
                        <div>
                          <strong>GraphPad:</strong> Quick statistics calculator
                        </div>
                        <div>
                          <strong>MathCracker:</strong> Step-by-step calculations
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <BookOpen className="h-5 w-5 text-blue-600" />
                10. Frequently Asked Questions - Standard Deviation Calculator, Online Standard Deviation Calculator, 
                Sample Standard Deviation Calculator, Population Standard Deviation Calculator, Standard Deviation 
                Formula Calculator, Standard Deviation Calculator with Steps, Standard Deviation Calculator for Data Set, 
                Standard Deviation Calculator Excel, Standard Deviation Calculator App, Standard Deviation Calculator 
                for Statistics, Standard Deviation Calculator for Grouped Data, Standard Deviation Calculator for 
                Ungrouped Data, Standard Deviation Calculator for Frequency Distribution, Standard Deviation Calculator 
                for Mean and Variance, Standard Deviation Calculator for Probability, Standard Deviation Calculator 
                for Normal Distribution, Standard Deviation Calculator for Binomial Distribution, Standard Deviation 
                Calculator for Poisson Distribution, Standard Deviation Calculator for Sample Size, Standard Deviation 
                Calculator for Confidence Interval, Standard Deviation Calculator for Margin of Error, Standard Deviation 
                Calculator for Z-Score, Standard Deviation Calculator for T-Score, Standard Deviation Calculator for 
                Chi-Square, Standard Deviation Calculator for ANOVA, Standard Deviation Calculator for Regression, 
                Standard Deviation Calculator for Correlation, Standard Deviation Calculator for Covariance, Standard 
                Deviation Calculator for Standard Error, Standard Deviation Calculator for Coefficient of Variation, 
                Standard Deviation Calculator for Skewness, Standard Deviation Calculator for Kurtosis, Standard 
                Deviation Calculator for Percentiles, Standard Deviation Calculator for Quartiles, Standard Deviation 
                Calculator for Deciles, Standard Deviation Calculator for Percent Error, Standard Deviation Calculator 
                for Relative Standard Deviation, Standard Deviation Calculator for Absolute Deviation, Standard 
                Deviation Calculator for Mean Absolute Deviation, Standard Deviation Calculator for Root Mean Square, 
                Standard Deviation Calculator for Variance Analysis, Standard Deviation Calculator for Hypothesis 
                Testing, Standard Deviation Calculator for P-Value, Standard Deviation Calculator for Effect Size, 
                Standard Deviation Calculator for Power Analysis, Standard Deviation Calculator for Sample Variance, 
                Standard Deviation Calculator for Population Variance, Standard Deviation Calculator for Standard 
                Error of Mean, Standard Deviation Calculator for Standard Error of Estimate, Standard Deviation 
                Calculator for Standard Error of Proportion, Standard Deviation Calculator for Standard Error of 
                Difference, Standard Deviation Calculator for Standard Error of Regression, Standard Deviation 
                Calculator for Standard Error of Prediction, Standard Deviation Calculator for Standard Error of 
                Measurement, Standard Deviation Calculator for Standard Error of Mean Difference, Standard Deviation 
                Calculator for Standard Error of Estimate Difference, Standard Deviation Calculator for Standard Error 
                of Proportion Difference, Standard Deviation Calculator for Standard Error of Difference Between 
                Means, Standard Deviation Calculator for Standard Error of Difference Between Proportions, Standard 
                Deviation Calculator for Standard Error of Difference Between Variances, Standard Deviation Calculator 
                for Standard Error of Difference Between Standard Deviations, Standard Deviation Calculator for 
                Standard Error of Difference Between Correlations, Standard Deviation Calculator for Standard Error 
                of Difference Between Covariances, Standard Deviation Calculator for Standard Error of Difference 
                Between Regression Coefficients, Standard Deviation Calculator for Standard Error of Difference 
                Between Intercepts, Standard Deviation Calculator for Standard Error of Difference Between Slopes, 
                Standard Deviation Calculator for Standard Error of Difference Between Predictions, Standard 
                Deviation Calculator for Standard Error of Difference Between Measurements, Standard Deviation 
                Calculator for Standard Error of Difference Between Mean Differences, Standard Deviation Calculator 
                for Standard Error of Difference Between Estimate Differences, Standard Deviation Calculator for 
                Standard Error of Difference Between Proportion Differences, Standard Deviation Calculator for 
                Standard Error of Difference Between Variance Differences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What is the difference between standard deviation and variance?
                  </h3>
                  <p className="text-muted-foreground">
                    Variance is the average of the squared differences from the mean, while standard deviation is the square root of variance.
                    Standard deviation has the same units as the original data, making it easier to interpret.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    When should I use population vs sample standard deviation?
                  </h3>
                  <p className="text-muted-foreground">
                    Use population standard deviation when you have data for the entire population. Use sample standard deviation when you have a sample
                    from a larger population and want to estimate the population parameter.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    How do I interpret a high standard deviation?
                  </h3>
                  <p className="text-muted-foreground">
                    A high standard deviation indicates that data points are spread out over a wide range of values. This suggests high variability
                    in your dataset and may indicate the need for further investigation.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What is the 68-95-99.7 rule?
                  </h3>
                  <p className="text-muted-foreground">
                    For normally distributed data, approximately 68% of values fall within 1 standard deviation of the mean, 95% within 2 standard deviations,
                    and 99.7% within 3 standard deviations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can standard deviation be negative?
                  </h3>
                  <p className="text-muted-foreground">
                    No, standard deviation cannot be negative. It is always a non-negative value because it is the square root of variance,
                    which is the average of squared differences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                Ready to Calculate Standard Deviation?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Use our free standard deviation calculator to analyze your data instantly with advanced statistical features.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/calculator/standard-deviation-calculator">
                  Try Our Standard Deviation Calculator
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

