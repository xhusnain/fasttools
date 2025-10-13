import { Metadata } from "next"
import { StandardDeviationCalculator } from "@/components/standard-deviation-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Star, Clock, Target, Brain, AlertCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Standard Deviation Calculator | Free Online Statistics Tool - Population & Sample Standard Deviation Calculator with Steps",
  description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes, quartiles, outliers detection, and comprehensive analysis. Online standard deviation calculator for data sets, grouped data, ungrouped data, frequency distribution, normal distribution, binomial distribution, confidence interval, margin of error, z-score, t-score, ANOVA, regression, correlation, coefficient of variation, skewness, kurtosis, percentiles, quartiles, hypothesis testing, p-value, effect size, power analysis, sample variance, population variance, standard error, variance analysis, statistics calculator, probability calculator, data analysis tool.",
  keywords: [
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
    "standard deviation calculator for standard error of difference between variance differences",
    "variance calculator",
    "statistics calculator",
    "mean calculator",
    "confidence interval calculator",
    "quartiles calculator",
    "outliers detection",
    "statistical analysis",
    "coefficient of variation",
    "skewness calculator",
    "kurtosis calculator",
    "z-score calculator",
    "percentiles calculator",
    "statistical measures",
    "data analysis tool",
    "free statistics calculator",
    "online statistics tool",
    "mathematical statistics"
  ],
  openGraph: {
    title: "Standard Deviation Calculator | Free Online Statistics Tool - Population & Sample Standard Deviation Calculator with Steps",
    description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes, quartiles, outliers detection, and comprehensive analysis. Online standard deviation calculator for data sets, grouped data, ungrouped data, frequency distribution, normal distribution, binomial distribution, confidence interval, margin of error, z-score, t-score, ANOVA, regression, correlation, coefficient of variation, skewness, kurtosis, percentiles, quartiles, hypothesis testing, p-value, effect size, power analysis, sample variance, population variance, standard error, variance analysis, statistics calculator, probability calculator, data analysis tool.",
    type: "website",
    url: "https://fasttools.store/tools/standard-deviation-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Standard Deviation Calculator - FastTools - Population & Sample Standard Deviation Calculator with Steps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Deviation Calculator | Free Online Statistics Tool - Population & Sample Standard Deviation Calculator with Steps",
    description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes, quartiles, outliers detection, and comprehensive analysis. Online standard deviation calculator for data sets, grouped data, ungrouped data, frequency distribution, normal distribution, binomial distribution, confidence interval, margin of error, z-score, t-score, ANOVA, regression, correlation, coefficient of variation, skewness, kurtosis, percentiles, quartiles, hypothesis testing, p-value, effect size, power analysis, sample variance, population variance, standard error, variance analysis, statistics calculator, probability calculator, data analysis tool.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/standard-deviation-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function StandardDeviationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Standard Deviation Calculator | Free Online Statistics Tool - Population & Sample Standard Deviation Calculator with Steps",
          description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes, quartiles, outliers detection, and comprehensive analysis. Online standard deviation calculator for data sets, grouped data, ungrouped data, frequency distribution, normal distribution, binomial distribution, confidence interval, margin of error, z-score, t-score, ANOVA, regression, correlation, coefficient of variation, skewness, kurtosis, percentiles, quartiles, hypothesis testing, p-value, effect size, power analysis, sample variance, population variance, standard error, variance analysis, statistics calculator, probability calculator, data analysis tool.",
          url: "https://fasttools.store/tools/standard-deviation-calculator",
          applicationCategory: "UtilityApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Standard Deviation Calculation",
            "Population Standard Deviation",
            "Sample Standard Deviation", 
            "Variance Calculation",
            "Mean and Median Calculation",
            "Confidence Intervals",
            "Quartiles Analysis",
            "Outliers Detection",
            "Population vs Sample Modes",
            "Statistical Distribution Analysis",
            "Z-Score Calculation",
            "T-Score Calculation",
            "Chi-Square Analysis",
            "ANOVA Support",
            "Regression Analysis",
            "Correlation Analysis",
            "Coefficient of Variation",
            "Skewness and Kurtosis",
            "Percentiles and Quartiles",
            "Hypothesis Testing",
            "P-Value Calculation",
            "Effect Size Analysis",
            "Power Analysis",
            "Sample Variance",
            "Population Variance",
            "Standard Error Calculation",
            "Export Results",
            "Calculation History"
          ],
          keywords: [
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
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://fasttools.store"
          }
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Standard Deviation Calculator - Free Online Statistics Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate standard deviation, variance, mean, confidence intervals, and comprehensive statistical analysis instantly. 
            Advanced calculator with population and sample modes, quartiles, outliers detection, and detailed distribution analysis.
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
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>100% Accurate</span>
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
            <StandardDeviationCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-blue-500" />
                  How to Use Standard Deviation Calculator
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Step-by-Step Instructions</h3>
                      <ol className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                          <span>Enter your data points separated by commas, spaces, or new lines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                          <span>Choose between Population or Sample standard deviation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                          <span>Select your desired confidence level (90%, 95%, or 99%)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                          <span>Click "Calculate Statistics" to get comprehensive results</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">5</span>
                          <span>Explore detailed statistics across multiple tabs</span>
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Example Input</h3>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p className="text-sm font-mono text-gray-700 dark:text-gray-300">
                          10, 12, 23, 23, 16, 23, 21, 16
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          This will calculate standard deviation, variance, mean, and other statistics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                  Advanced Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-600 dark:text-green-400">Statistical Measures</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Mean, Median, and Mode calculation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Standard Deviation (Population & Sample)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Variance and Range analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Coefficient of Variation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Skewness and Kurtosis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Advanced Analysis</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Quartiles and IQR calculation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Outliers detection and analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Confidence Intervals (90%, 95%, 99%)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Z-scores and Percentiles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Distribution analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Use Cases Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                  Common Use Cases
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-600 dark:text-orange-400">Academic & Research</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Statistical analysis for research papers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Quality control in manufacturing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Financial risk assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Market research and surveys</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Professional Applications</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data science and analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Performance measurement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Investment portfolio analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Scientific experiments and trials</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-indigo-500" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What is the difference between population and sample standard deviation?
                    </h3>
                    <p className="text-muted-foreground">
                      Population standard deviation uses N in the denominator and is used when you have data for the entire population. 
                      Sample standard deviation uses N-1 in the denominator and is used when you have a sample from a larger population. 
                      The sample standard deviation provides a better estimate of the population parameter.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      How do I interpret the confidence interval?
                    </h3>
                    <p className="text-muted-foreground">
                      A confidence interval provides a range of values within which the true population mean is likely to fall. 
                      For example, a 95% confidence interval means we are 95% confident that the true mean lies within the calculated range.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What do outliers indicate in my data?
                    </h3>
                    <p className="text-muted-foreground">
                      Outliers are data points that fall significantly outside the normal range of your dataset. 
                      They can indicate measurement errors, special conditions, or important variations that need further investigation.
                    </p>
                  </div>
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      What is the coefficient of variation and why is it useful?
                    </h3>
                    <p className="text-muted-foreground">
                      The coefficient of variation (CV) is the ratio of standard deviation to mean, expressed as a percentage. 
                      It's useful for comparing the relative variability of datasets with different units or scales.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Can I export my calculation results?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes! You can export your results in JSON format or copy individual values to your clipboard. 
                      The calculator also maintains a history of your recent calculations for easy reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
              </div>

              {/* Related Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/tools/percentage-calculator" className="block text-sm text-primary hover:underline">
                    Percentage Calculator
                  </Link>
                  <Link href="/tools/scientific-calculator" className="block text-sm text-primary hover:underline">
                    Scientific Calculator
                  </Link>
                  <Link href="/tools/compound-interest" className="block text-sm text-primary hover:underline">
                    Compound Interest Calculator
                  </Link>
                  <Link href="/tools/loan-calculator" className="block text-sm text-primary hover:underline">
                    Loan Calculator
                  </Link>
                  <Link href="/tools/tax-calculator" className="block text-sm text-primary hover:underline">
                    Tax Calculator
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-500" />
                    Calculator Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Population & Sample modes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Confidence intervals</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Outliers detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Quartiles analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Export results</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Calculation history</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
