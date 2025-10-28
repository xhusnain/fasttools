import { Metadata } from "next"
import { StandardDeviationCalculator } from "@/components/standard-deviation-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Percent, Award, Globe, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Standard Deviation Calculator | Free Statistics Tool",
  description: "FastTools Standard Deviation Calculator - Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
    keywords: [
        "fasttools",
        "fast tools",
        "standard deviation calculator",
        "online standard deviation calculator",
        "sample standard deviation calculator",
        "population standard deviation calculator",
        "standard deviation calculator with steps",
        "standard deviation formula calculator",
        "variance calculator",
        "mean calculator",
        "z-score calculator",
        "confidence interval calculator",
        "skewness calculator",
        "kurtosis calculator",
        "quartiles calculator",
        "percentiles calculator",
        "statistical calculator",
        "statistics calculator",
        "statistics online",
        "data analysis calculator",
        "statistical analysis tool",
        "coefficient of variation calculator",
        "outlier detection calculator",
        "math calculator",
        "statistical measures calculator",
        "data analysis tool",
        "mathematical statistics"
    ],
  openGraph: {
    title: "Standard Deviation Calculator | Statistics Tool | FastTools",
    description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
    type: "website",
    url: "https://www.fasttools.store/calculator/standard-deviation-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Standard Deviation Calculator - FastTools - Population & Sample Standard Deviation Calculator with Steps"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard Deviation Calculator | Statistics Tool | FastTools",
    description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/standard-deviation-calculator"
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
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Standard Deviation Calculator | Free Online Statistics Tool - Population & Sample Standard Deviation Calculator with Steps",
          description: "Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
          url: "https://www.fasttools.store/calculator/standard-deviation-calculator",
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
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="container mx-auto px-3 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Standard Deviation Calculator", href: "/calculator/standard-deviation-calculator" },
            ]}
          />

          <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-yellow-400">Standard Deviation Calculator - Free Online Statistics Tool</h1>
              <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                <strong>Calculate standard deviation</strong>, <strong>variance</strong>, <strong>mean</strong>, <strong>confidence intervals</strong>, and <strong>comprehensive statistical analysis</strong> instantly. 
                Advanced calculator with <strong>population and sample modes</strong>, <strong>quartiles</strong>, <strong>outliers detection</strong>, and <strong>detailed distribution analysis</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
              <div>
                <StandardDeviationCalculator />
                
                {/* Mobile/Tablet AdSpace */}
                <div className="my-6 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
            </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
        </div>
            
            {/* Educational Content Sections */}
                <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
              {/* How to Use Section */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calculator className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                  How to Use Standard Deviation Calculator
                </h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">1. Enter Data Points</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Enter your data points separated by commas, spaces, or new lines</p>
                      </div>
                      <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">2. Choose Mode</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Select between Population or Sample standard deviation</p>
                      </div>
                      <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">3. Set Confidence Level</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Select your desired confidence level (90%, 95%, or 99%)</p>
                      </div>
                      <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                        <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">4. Calculate & Analyze</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Get comprehensive results and explore detailed statistics</p>
                      </div>
                    </div>
                    <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">Example Input</h3>
                      <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">10, 12, 23, 23, 16, 23, 21, 16</p>
                      <p className="text-xs md:text-sm text-muted-foreground mt-2">
                          This will calculate standard deviation, variance, mean, and other statistics
                        </p>
                  </div>
                </div>
              </div>

              {/* Features Section */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-yellow-400">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    Advanced Statistical Features
                </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {[
                      { type: "Statistical Measures", icon: BarChart3, desc: "Mean, Median, Mode, Standard Deviation", example: "Population & Sample modes" },
                      { type: "Variance Analysis", icon: TrendingUp, desc: "Variance, Range, Coefficient of Variation", example: "Complete variance breakdown" },
                      { type: "Distribution Analysis", icon: Target, desc: "Skewness, Kurtosis, Distribution shape", example: "Normal distribution insights" },
                      { type: "Quartiles & IQR", icon: Calculator, desc: "Quartiles, Interquartile Range", example: "Q1, Q2, Q3 calculations" },
                      { type: "Outliers Detection", icon: AlertCircle, desc: "Identify and analyze outliers", example: "Statistical outlier analysis" },
                      { type: "Confidence Intervals", icon: Clock, desc: "90%, 95%, 99% confidence levels", example: "Population parameter estimates" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <h3 className="font-semibold text-foreground text-sm md:text-base">{type}</h3>
                  </div>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{desc}</p>
                        <p className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">{example}</p>
                  </div>
                    ))}
                </div>
              </div>

              {/* Use Cases Section */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-yellow-400">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  Standard Deviation Calculator Use Cases
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">📊 Academic & Research</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Statistical Analysis</h4>
                        <p className="text-xs text-muted-foreground">Research papers, thesis work, and academic studies</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Quality Control</h4>
                        <p className="text-xs text-muted-foreground">Manufacturing processes and product quality assessment</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Market Research</h4>
                        <p className="text-xs text-muted-foreground">Survey analysis and consumer behavior studies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">💼 Business & Finance</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Risk Assessment</h4>
                        <p className="text-xs text-muted-foreground">Financial risk analysis and portfolio management</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Performance Measurement</h4>
                        <p className="text-xs text-muted-foreground">Employee performance and KPI analysis</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Investment Analysis</h4>
                        <p className="text-xs text-muted-foreground">Portfolio volatility and return analysis</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-foreground">🔬 Scientific & Medical</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Clinical Trials</h4>
                        <p className="text-xs text-muted-foreground">Medical research and drug efficacy studies</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Data Science</h4>
                        <p className="text-xs text-muted-foreground">Machine learning and predictive analytics</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Experimental Design</h4>
                        <p className="text-xs text-muted-foreground">Scientific experiments and hypothesis testing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-yellow-400">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {[
                    {
                      q: "What's the difference between population and sample standard deviation calculator?",
                      a: "Population standard deviation calculator uses N in the denominator and represents the true variability of the entire population. Sample standard deviation calculator uses N-1 (Bessel's correction) to provide an unbiased estimate of the population parameter."
                    },
                    {
                      q: "How to use an online standard deviation calculator with steps?",
                      a: "Our online standard deviation calculator with steps shows you: 1) Calculate the mean, 2) Find deviations from mean, 3) Square each deviation, 4) Sum squared deviations, 5) Divide by N (population) or N-1 (sample), 6) Take square root for final result."
                    },
                    {
                      q: "What is the standard deviation formula calculator used for?",
                      a: "The standard deviation formula calculator implements σ = √[Σ(xᵢ - μ)² / N] for population or s = √[Σ(xᵢ - x̄)² / (n-1)] for sample data. It automatically handles the mathematical calculations while showing you the step-by-step process."
                    },
                    {
                      q: "How does a variance calculator relate to standard deviation?",
                      a: "Variance calculator computes σ² = Σ(xᵢ - μ)² / N, and standard deviation is simply the square root of variance (σ = √σ²). Our calculator provides both variance and standard deviation results for comprehensive statistical analysis."
                    },
                    {
                      q: "What does a mean calculator show with standard deviation?",
                      a: "A mean calculator shows the average value (μ = Σx / N), while standard deviation measures how spread out data points are from this mean. Together, they provide the central tendency and variability measures essential for data analysis."
                    },
                    {
                      q: "How to use a z-score calculator with standard deviation?",
                      a: "Z-score calculator uses the formula Z = (X - Mean) / Standard Deviation. It tells you how many standard deviations a value is from the mean, helping identify outliers and compare values across different datasets."
                    },
                    {
                      q: "What is a confidence interval calculator and how does it use standard deviation?",
                      a: "Confidence interval calculator uses standard deviation to estimate the range where the true population mean likely falls: CI = Mean ± (t-value × Standard Error), where Standard Error = Standard Deviation / √n."
                    },
                    {
                      q: "How does a skewness calculator work with standard deviation?",
                      a: "Skewness calculator uses the formula: Skewness = Σ[(x-μ)³] / (n×σ³) where σ is standard deviation. It measures distribution asymmetry - positive skewness means right tail is longer, negative means left tail is longer."
                    },
                    {
                      q: "What does a kurtosis calculator measure using standard deviation?",
                      a: "Kurtosis calculator uses: Kurtosis = Σ[(x-μ)⁴] / (n×σ⁴) - 3 where σ is standard deviation. It measures tail heaviness - positive kurtosis indicates heavy tails, negative indicates light tails compared to normal distribution."
                    },
                    {
                      q: "How to use a quartiles calculator with standard deviation analysis?",
                      a: "Quartiles calculator divides data into four equal parts (Q1, Q2, Q3). Combined with standard deviation, it helps identify outliers using the IQR method: outliers are values beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR."
                    },
                    {
                      q: "What is a percentiles calculator and its relationship to standard deviation?",
                      a: "Percentiles calculator shows values below which a given percentage of data falls. In normal distributions, percentiles relate to standard deviation: 50th percentile = mean, 68th percentile ≈ mean + 1σ, 95th percentile ≈ mean + 2σ."
                    },
                    {
                      q: "How does a statistical calculator differ from basic calculators?",
                      a: "Statistical calculator provides specialized functions for data analysis including mean, median, mode, standard deviation, variance, correlation, regression, and hypothesis testing. It's designed for comprehensive statistical analysis beyond basic arithmetic."
                    },
                    {
                      q: "What features does a statistics calculator offer for data analysis?",
                      a: "Statistics calculator offers descriptive statistics (mean, median, mode, standard deviation), inferential statistics (confidence intervals, hypothesis tests), distribution analysis (normal, binomial, Poisson), and advanced features like ANOVA and regression analysis."
                    },
                    {
                      q: "How to use statistics online tools for standard deviation calculation?",
                      a: "Statistics online tools provide instant calculations with step-by-step explanations. Simply input your data, select population or sample mode, and get comprehensive results including standard deviation, variance, mean, and confidence intervals."
                    },
                    {
                      q: "What is a data analysis calculator and how does it help with standard deviation?",
                      a: "Data analysis calculator performs comprehensive statistical analysis including standard deviation, correlation, regression, hypothesis testing, and distribution fitting. It helps identify patterns, trends, and relationships in your dataset."
                    },
                    {
                      q: "How does a statistical analysis tool calculate standard deviation?",
                      a: "Statistical analysis tool uses advanced algorithms to calculate standard deviation while providing additional insights like outlier detection, distribution shape analysis, confidence intervals, and comparative statistics for multiple datasets."
                    },
                    {
                      q: "What is a coefficient of variation calculator and how does it use standard deviation?",
                      a: "Coefficient of variation calculator uses CV = (Standard Deviation / Mean) × 100%. It's a relative measure that allows comparison of variability between datasets with different units or scales, making it dimensionless unlike standard deviation."
                    },
                    {
                      q: "How does an outlier detection calculator work with standard deviation?",
                      a: "Outlier detection calculator uses the 3-sigma rule: values beyond Mean ± 3×Standard Deviation are considered outliers. It also applies IQR method and Z-score analysis to identify unusual data points that may affect your analysis."
                    },
                    {
                      q: "What is a math calculator with statistical functions?",
                      a: "Math calculator with statistical functions combines basic arithmetic with advanced statistical operations including standard deviation, mean, variance, correlation, regression, probability distributions, and hypothesis testing in one comprehensive tool."
                    },
                    {
                      q: "How does a statistical measures calculator help with data interpretation?",
                      a: "Statistical measures calculator provides multiple descriptive statistics (mean, median, mode, range, standard deviation, variance) and distribution measures (skewness, kurtosis) to give you a complete picture of your data's characteristics and behavior."
                    },
                    {
                      q: "What is a data analysis tool and how does it calculate standard deviation?",
                      a: "Data analysis tool performs comprehensive statistical analysis including standard deviation calculation with additional features like data visualization, trend analysis, correlation detection, and automated report generation for professional data interpretation."
                    },
                    {
                      q: "How does a mathematical statistics calculator differ from basic statistical calculators?",
                      a: "Mathematical statistics calculator focuses on theoretical statistical concepts including probability distributions, hypothesis testing, confidence intervals, and advanced statistical measures, providing deeper mathematical insights beyond basic descriptive statistics."
                    },
                    {
                      q: "Can I calculate standard deviation for grouped data using this calculator?",
                      a: "Yes, our calculator handles grouped data using the formula: σ = √[Σf(x - x̄)² / Σf] where f is frequency, x is midpoint of each class, and x̄ is the mean. This accounts for the frequency of each data point in your calculation."
                    },
                    {
                      q: "How accurate is this online standard deviation calculator?",
                      a: "Our calculator uses high-precision mathematical algorithms and provides results accurate to multiple decimal places. It handles both population and sample standard deviation calculations with proper statistical formulas and step-by-step verification."
                    },
                    {
                      q: "What statistical distributions can I analyze with this calculator?",
                      a: "This calculator supports analysis of normal distribution, binomial distribution, Poisson distribution, uniform distribution, and other common statistical distributions, providing standard deviation and related measures for each distribution type."
                    },
                    {
                      q: "How does this calculator handle confidence intervals and margin of error?",
                      a: "The calculator computes confidence intervals using standard deviation: CI = Mean ± (t-value × Standard Error), where Standard Error = Standard Deviation / √n. It provides margin of error calculations for different confidence levels (90%, 95%, 99%)."
                    },
                    {
                      q: "Can I use this calculator for hypothesis testing with standard deviation?",
                      a: "Yes, the calculator supports hypothesis testing by calculating test statistics like t-scores: t = (x̄ - μ) / (s/√n), using standard deviation to determine if observed differences are statistically significant or due to random variation."
                    },
                    {
                      q: "What is the difference between sample variance and population variance in this calculator?",
                      a: "Sample variance uses n-1 in the denominator (s² = Σ(xᵢ - x̄)² / (n-1)) for unbiased estimation, while population variance uses N (σ² = Σ(xᵢ - μ)² / N). The calculator automatically selects the appropriate formula based on your data type."
                    },
                    {
                      q: "How does this calculator calculate standard error from standard deviation?",
                      a: "Standard error is calculated as Standard Error = Standard Deviation / √n, where n is sample size. This measures the precision of your sample mean estimate and decreases as sample size increases, providing better population parameter estimates."
                    },
                    {
                      q: "Can I analyze correlation and regression using this standard deviation calculator?",
                      a: "Yes, the calculator provides correlation coefficient calculations: r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²], where standard deviations appear in the denominator, measuring relationship strength between variables while accounting for individual variability."
                    },
                    {
                      q: "What advanced statistical features does this calculator offer?",
                      a: "Advanced features include ANOVA analysis, regression calculations, effect size measurements, power analysis, distribution fitting, outlier detection, confidence intervals, hypothesis testing, and comprehensive statistical reporting with professional-grade accuracy."
                    },
                    {
                      q: "How does this calculator help with quality control and process monitoring?",
                      a: "The calculator supports quality control by calculating process capability indices (Cp = (USL - LSL) / (6×σ)), control chart limits (±3σ), and statistical process control measures using standard deviation to monitor and improve manufacturing processes."
                    },
                    {
                      q: "Can I use this calculator for financial risk analysis and portfolio management?",
                      a: "Yes, the calculator computes portfolio standard deviation = √[w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂] for risk analysis, helping investors understand portfolio volatility, diversification effects, and risk-return relationships in financial planning."
                    },
                    {
                      q: "What educational features does this standard deviation calculator provide?",
                      a: "Educational features include step-by-step calculations, formula explanations, statistical concept definitions, interactive examples, practice problems, and comprehensive learning resources to help students understand statistical concepts and applications."
                    },
                    {
                      q: "How does this calculator handle large datasets and complex statistical analysis?",
                      a: "The calculator efficiently processes large datasets using optimized algorithms, provides batch processing capabilities, supports data import/export, and offers advanced statistical analysis including multivariate analysis, time series analysis, and complex statistical modeling."
                    },
                    {
                      q: "What reporting and export features are available in this calculator?",
                      a: "Reporting features include detailed statistical reports, graphical visualizations, data export in multiple formats (CSV, Excel, PDF), customizable output templates, and professional presentation-ready results for academic, business, and research applications."
                    },
                    {
                      q: "How does this calculator ensure statistical accuracy and reliability?",
                      a: "The calculator uses validated statistical algorithms, provides multiple calculation methods for verification, includes error checking and validation, follows established statistical standards, and offers precision controls for different accuracy requirements."
                    },
                    {
                      q: "Can I use this calculator for academic research and professional analysis?",
                      a: "Yes, the calculator meets academic and professional standards, provides publication-ready results, supports peer review requirements, offers comprehensive documentation, and includes advanced statistical methods suitable for research, business analysis, and scientific applications."
                    },
                    {
                      q: "What support and documentation is available for this standard deviation calculator?",
                      a: "Support includes comprehensive user guides, statistical concept explanations, calculation examples, troubleshooting help, video tutorials, and expert assistance to ensure proper use and interpretation of statistical results."
                    },
                    {
                      q: "How does this calculator compare to other statistical software and tools?",
                      a: "This calculator offers user-friendly interface, instant calculations, comprehensive statistical functions, educational features, and professional-grade accuracy comparable to advanced statistical software while being accessible through any web browser."
                    },
                    {
                      q: "What are the limitations and considerations when using this standard deviation calculator?",
                      a: "Considerations include: ensure data quality and proper sample selection, understand population vs sample distinctions, verify distribution assumptions, consider sample size requirements, and interpret results in context of your specific research or analysis goals."
                    },
                    {
                      q: "How can I validate results from this standard deviation calculator?",
                      a: "Validation methods include: cross-checking with other statistical tools, verifying calculation steps manually, using known datasets with expected results, comparing different calculation methods, and ensuring proper data input and statistical assumptions are met."
                    },
                    {
                      q: "What future enhancements are planned for this standard deviation calculator?",
                      a: "Planned enhancements include: additional statistical distributions, advanced visualization features, machine learning integration, automated report generation, mobile app development, and expanded educational resources for comprehensive statistical analysis."
                    },
                    {
                      q: "How to calculate standard deviation for moment generating function?",
                      a: "From moment generating function M(t): First moment μ = M'(0), Second moment μ₂ = M''(0), Variance σ² = μ₂ - μ², Standard deviation σ = √(μ₂ - μ²). This method uses calculus to derive moments and standard deviation from MGF."
                    },
                    {
                      q: "How to calculate standard deviation for characteristic function?",
                      a: "From characteristic function φ(t): Mean μ = -iφ'(0), Variance σ² = -φ''(0) + [φ'(0)]², Standard deviation σ = √σ². This Fourier transform approach provides alternative derivation of distribution moments and standard deviation."
                    },
                    {
                      q: "What is the standard deviation of random variable?",
                      a: "For discrete random variable: σ = √[Σ(x-μ)² × P(x)]. For continuous random variable: σ = √[∫(x-μ)² × f(x)dx]. This measures variability in random variable outcomes, accounting for probability weights in the calculation."
                    },
                    {
                      q: "How to calculate standard deviation for probability density function?",
                      a: "For PDF f(x): Mean μ = ∫x × f(x)dx, Variance σ² = ∫(x-μ)² × f(x)dx, Standard deviation σ = √σ². This continuous version uses integration instead of summation, applicable to continuous probability distributions."
                    },
                    {
                      q: "How to calculate standard deviation for cumulative distribution function?",
                      a: "From CDF F(x): PDF f(x) = F'(x), then use PDF formulas above. Alternatively, use moment formulas: σ² = ∫x²f(x)dx - [∫xf(x)dx]². CDF provides probability P(X≤x), while PDF gives probability density."
                    },
                    {
                      q: "What is the standard deviation of moment?",
                      a: "Raw moments: μ'ᵣ = ΣxʳP(x). Central moments: μᵣ = Σ(x-μ)ʳP(x). Standard deviation σ = √μ₂ (second central moment). Higher moments (skewness, kurtosis) describe distribution shape beyond mean and standard deviation."
                    },
                    {
                      q: "How to calculate standard deviation for frequency distribution?",
                      a: "For frequency data: σ = √[Σf(x-μ)² / Σf] where f is frequency, x is class midpoint, μ is weighted mean. This formula accounts for repeated values in grouped data, providing accurate standard deviation for frequency distributions."
                    },
                    {
                      q: "How to calculate standard deviation for cumulative frequency?",
                      a: "Cumulative frequency shows running totals. To find standard deviation: 1) Convert to regular frequency distribution, 2) Calculate weighted mean using frequencies, 3) Apply frequency formula σ = √[Σf(x-μ)² / Σf] for grouped data."
                    },
                    {
                      q: "How to calculate standard deviation for relative frequency?",
                      a: "Relative frequency = frequency / total observations. Use formula: σ = √[Σp(x-μ)²] where p is relative frequency (probability). This gives standard deviation for probability distributions derived from relative frequency data."
                    },
                    {
                      q: "What is the standard deviation of box plot?",
                      a: "Box plots show quartiles (Q1, Q2, Q3) and outliers, not standard deviation directly. However, IQR = Q3 - Q1 ≈ 1.35σ for normal distributions. Box plot whiskers typically extend to Q1 - 1.5×IQR and Q3 + 1.5×IQR, identifying potential outliers."
                    },
                    {
                      q: "How to calculate standard deviation for histogram?",
                      a: "From histogram: 1) Use class midpoints as x-values, 2) Use bar heights as frequencies, 3) Calculate weighted mean, 4) Apply formula σ = √[Σf(x-μ)² / Σf]. This estimates standard deviation from visual histogram representation."
                    },
                    {
                      q: "How to calculate standard deviation for interquartile range?",
                      a: "IQR = Q3 - Q1. For normal distributions: IQR ≈ 1.35σ, so σ ≈ IQR / 1.35. This approximation works well for symmetric distributions but may be inaccurate for skewed data where IQR and standard deviation measure different aspects of spread."
                    },
                    {
                      q: "What is the standard deviation of deciles?",
                      a: "Deciles divide data into 10 equal parts (D1, D2, ..., D9). Standard deviation isn't directly calculated from deciles, but for normal distributions: D1 ≈ μ - 1.28σ, D9 ≈ μ + 1.28σ, so σ ≈ (D9 - D1) / 2.56."
                    },
                    {
                      q: "How to calculate standard deviation for percent error?",
                      a: "Percent error = |(Observed - Expected) / Expected| × 100%. Standard deviation of percent errors measures variability in measurement accuracy. Use σ = √[Σ(PE - μ_PE)² / n] where PE is percent error and μ_PE is mean percent error."
                    },
                    {
                      q: "How to calculate standard deviation for relative standard deviation?",
                      a: "Relative standard deviation (RSD) = (Standard deviation / Mean) × 100% = Coefficient of variation × 100%. This expresses standard deviation as a percentage of the mean, useful for comparing variability across different scales."
                    },
                    {
                      q: "How to calculate standard deviation for absolute deviation?",
                      a: "Mean absolute deviation (MAD) = Σ|x - μ| / n. Standard deviation uses squared deviations: σ = √[Σ(x-μ)² / n]. MAD is less sensitive to outliers than standard deviation, while standard deviation gives more weight to extreme values."
                    },
                    {
                      q: "How to calculate standard deviation for mean absolute deviation?",
                      a: "MAD = Σ|x - μ| / n measures average absolute distance from mean. For normal distributions: MAD ≈ 0.8σ, so σ ≈ MAD / 0.8. MAD is more robust to outliers but standard deviation is more commonly used in statistical analysis."
                    },
                    {
                      q: "How to calculate standard deviation for root mean square?",
                      a: "RMS = √[Σx² / n]. For data centered at zero: RMS = σ. For non-zero mean: RMS² = σ² + μ², so σ = √(RMS² - μ²). RMS measures magnitude of variation, while standard deviation measures spread around the mean."
                    },
                    {
                      q: "How to calculate standard deviation for variance analysis?",
                      a: "Variance analysis compares actual vs expected results. Standard deviation measures variability in differences: σ_diff = √[Σ(Actual - Expected)² / n]. This quantifies the magnitude of variances in performance analysis."
                    },
                    {
                      q: "How to calculate standard deviation for p-value?",
                      a: "P-value calculation uses standard deviation in test statistics: t = (x̄ - μ) / (s/√n), z = (x̄ - μ) / (σ/√n). Standard deviation determines the standard error, which affects the test statistic magnitude and resulting p-value."
                    },
                    {
                      q: "How to calculate standard deviation for degrees of freedom?",
                      a: "Degrees of freedom affect standard deviation calculation: Sample SD uses n-1, Population SD uses n. DF = n - k where k is number of parameters estimated. Higher DF means more reliable standard deviation estimates."
                    },
                    {
                      q: "What is the standard deviation of standard normal distribution?",
                      a: "Standard normal distribution has μ = 0 and σ = 1. Any normal distribution can be standardized: Z = (X - μ) / σ. This transformation allows using standard normal tables for probability calculations and statistical inference."
                    },
                    {
                      q: "How to calculate standard deviation for sampling distribution?",
                      a: "Sampling distribution standard deviation (standard error) = σ / √n for population or s / √n for sample. This measures how much sample statistics vary across different samples, decreasing as sample size increases."
                    },
                    {
                      q: "How to calculate standard deviation for bell curve?",
                      a: "Bell curve (normal distribution) is defined by mean μ and standard deviation σ. Formula: f(x) = (1/σ√2π) × e^(-½((x-μ)/σ)²). Standard deviation determines curve width: larger σ = wider, flatter curve; smaller σ = narrower, taller curve."
                    },
                    {
                      q: "How to calculate standard deviation for outliers?",
                      a: "Outliers can inflate standard deviation. Detection methods: 1) Z-score > 3, 2) Values beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR, 3) Values beyond Mean ± 3×Standard Deviation. Consider robust measures like median absolute deviation for outlier-resistant analysis."
                    },
                    {
                      q: "How to calculate standard deviation for skewness?",
                      a: "Skewness = Σ[(x-μ)³] / (n×σ³). Standard deviation appears in denominator, standardizing the third moment. Positive skewness: tail extends right; Negative skewness: tail extends left. Skewness = 0 indicates symmetric distribution."
                    },
                    {
                      q: "How to calculate standard deviation for kurtosis?",
                      a: "Kurtosis = Σ[(x-μ)⁴] / (n×σ⁴) - 3. Standard deviation appears in denominator, standardizing the fourth moment. Kurtosis > 0: heavy tails (leptokurtic); Kurtosis < 0: light tails (platykurtic); Kurtosis = 0: normal distribution."
                    },
                    {
                      q: "How to calculate standard deviation for correlation?",
                      a: "Correlation coefficient r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²]. Standard deviations appear in denominator. This measures linear relationship strength while accounting for individual variable variability."
                    },
                    {
                      q: "How to calculate standard deviation for regression?",
                      a: "Regression standard error = √[Σ(y - ŷ)² / (n-2)] where ŷ is predicted value. This measures prediction accuracy. R-squared = 1 - (Residual variance / Total variance) shows proportion of variance explained by regression."
                    },
                    {
                      q: "How to calculate standard deviation for covariance?",
                      a: "Covariance = Σ[(x-x̄)(y-ȳ)] / n. Correlation = Covariance / (σₓ × σᵧ). Standard deviations normalize covariance to correlation coefficient. Covariance has units of X×Y, while correlation is dimensionless (-1 to +1)."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of mean?",
                      a: "Standard error of mean = σ / √n (population) or s / √n (sample). This measures precision of sample mean estimate. Confidence interval: Mean ± (t-value × Standard Error) provides range where true population mean likely falls."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of estimate?",
                      a: "Standard error of estimate = √[Σ(y - ŷ)² / (n-2)] in regression. This measures prediction accuracy, accounting for degrees of freedom. It's the standard deviation of residuals around the regression line."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of proportion?",
                      a: "Standard error of proportion = √[p(1-p) / n] where p is sample proportion. This measures precision of proportion estimate. Confidence interval: p ± (z × Standard Error) provides range for true population proportion."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference?",
                      a: "Standard error of difference = √[σ₁²/n₁ + σ₂²/n₂] for independent samples. This measures precision of difference between means. Test statistic: t = (x̄₁ - x̄₂) / Standard Error tests if difference is statistically significant."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of regression?",
                      a: "Standard error of regression coefficient = σ / √[Σ(x-x̄)²]. This measures precision of slope estimate in simple linear regression. t-statistic = (slope - 0) / Standard Error tests if slope is significantly different from zero."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of prediction?",
                      a: "Standard error of prediction = σ × √[1 + 1/n + (x₀-x̄)²/Σ(x-x̄)²] for new observation x₀. This measures uncertainty in predicting individual values, larger than standard error of mean due to additional variability."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of measurement?",
                      a: "Standard error of measurement = σ × √(1 - reliability). This measures precision of individual test scores, accounting for test reliability. Higher reliability means lower measurement error and more precise individual score estimates."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of mean difference?",
                      a: "Standard error of mean difference = σ_diff / √n for paired samples. This measures precision of average difference between paired observations. Paired t-test: t = (mean difference - 0) / Standard Error tests if difference is significant."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of estimate difference?",
                      a: "Standard error of estimate difference = √[σ₁²/n₁ + σ₂²/n₂] for independent regression estimates. This measures precision of difference between regression coefficients from different samples or groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of proportion difference?",
                      a: "Standard error of proportion difference = √[p₁(1-p₁)/n₁ + p₂(1-p₂)/n₂] for independent samples. This measures precision of difference between proportions, used in testing equality of proportions across groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between means?",
                      a: "Standard error of difference between means = √[σ₁²/n₁ + σ₂²/n₂] for independent samples. This measures precision of difference between sample means, fundamental to two-sample t-tests and comparison studies."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between proportions?",
                      a: "Standard error of difference between proportions = √[p₁(1-p₁)/n₁ + p₂(1-p₂)/n₂] for independent samples. This measures precision of difference between sample proportions, used in testing equality of proportions across groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between variances?",
                      a: "Standard error of difference between variances uses F-distribution: F = s₁²/s₂² tests equality of variances. Levene's test provides alternative approach using absolute deviations from group medians."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between standard deviations?",
                      a: "Testing equality of standard deviations uses F-test: F = s₁²/s₂². For large samples, use z-test: z = (s₁ - s₂) / √[s₁²/(2n₁) + s₂²/(2n₂)]. This tests if standard deviations differ significantly between groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between correlations?",
                      a: "Standard error of difference between correlations = √[1/(n₁-3) + 1/(n₂-3)] for independent samples. Fisher's z-transformation: z = 0.5 × ln[(1+r)/(1-r)] normalizes correlation distribution for testing differences."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between covariances?",
                      a: "Testing equality of covariances uses multivariate tests like Box's M-test or likelihood ratio tests. For simple cases, compare correlation coefficients using Fisher's z-transformation method."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between regression coefficients?",
                      a: "Standard error of difference between regression coefficients = √[SE₁² + SE₂²] for independent samples. This measures precision of difference between slopes, used in comparing regression relationships across groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between intercepts?",
                      a: "Standard error of difference between intercepts = √[SE₁² + SE₂²] for independent regression models. This measures precision of difference between y-intercepts, testing if regression lines have different starting points."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between slopes?",
                      a: "Standard error of difference between slopes = √[SE₁² + SE₂²] for independent regression models. This measures precision of difference between regression slopes, testing if relationships differ between groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between predictions?",
                      a: "Standard error of difference between predictions = √[SE₁² + SE₂²] for independent regression models at same x-value. This measures precision of difference between predicted values, useful in comparing model performance."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between measurements?",
                      a: "Standard error of difference between measurements = √[σ₁² + σ₂²] for independent measurement systems. This measures precision of difference between measurement methods, important in method comparison studies."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between mean differences?",
                      a: "Standard error of difference between mean differences = √[SE₁² + SE₂²] for independent paired samples. This measures precision of difference between average changes, used in comparing treatment effects across groups."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between estimate differences?",
                      a: "Standard error of difference between estimate differences = √[SE₁² + SE₂²] for independent regression estimates. This measures precision of difference between estimated effects, used in comparing regression relationships."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between proportion differences?",
                      a: "Standard error of difference between proportion differences = √[SE₁² + SE₂²] for independent samples. This measures precision of difference between proportion changes, used in comparing treatment effects on proportions."
                    },
                    {
                      q: "How to calculate standard deviation for standard error of difference between variance differences?",
                      a: "Standard error of difference between variance differences uses complex formulas involving fourth moments. Alternative approaches include Levene's test or Brown-Forsythe test for comparing variance differences between groups."
                    },
                    {
                      q: "How to calculate standard deviation for sample variance and population variance?",
                      a: "Sample variance s² = Σ(x-x̄)² / (n-1), Population variance σ² = Σ(x-μ)² / N. Standard deviation is square root of variance: s = √s² for sample, σ = √σ² for population. Sample variance uses n-1 for unbiased estimation of population parameter."
                    },
                    {
                      q: "What is the coefficient of variation and why is it useful?",
                      a: "The coefficient of variation (CV) is the ratio of standard deviation to mean, expressed as a percentage. It's useful for comparing the relative variability of datasets with different units or scales."
                    },
                    {
                      q: "Can I export my calculation results?",
                      a: "Yes! You can export your results in JSON format or copy individual values to your clipboard. The calculator also maintains a history of your recent calculations for easy reference."
                    },
                    {
                      q: "How do I calculate standard deviation using Excel?",
                      a: "In Excel, use STDEV.P() for population standard deviation or STDEV.S() for sample standard deviation. For example: =STDEV.S(A1:A10) calculates sample standard deviation for data in cells A1 through A10. Excel automatically handles the formula calculations."
                    },
                    {
                      q: "What does a standard deviation of zero mean?",
                      a: "A standard deviation of zero indicates that all data points in your dataset are identical - there is no variability or spread. This means every value is exactly the same as the mean, showing perfect consistency in your data."
                    },
                    {
                      q: "How do I calculate standard deviation on a scientific calculator?",
                      a: "Most scientific calculators have built-in statistical functions. Enter your data into a list (usually STAT mode), then access the statistical functions menu and select standard deviation. Refer to your calculator's manual for specific button sequences."
                    },
                    {
                      q: "Can I compare standard deviations between different datasets?",
                      a: "Yes, but only if the datasets are on the same scale and units. Comparing standard deviations across different units or scales can be misleading. Use coefficient of variation (CV) for comparing variability between datasets with different means or units."
                    },
                    {
                      q: "What are the limitations of standard deviation?",
                      a: "Standard deviation is sensitive to outliers and assumes a roughly normal distribution. It may not accurately represent data with extreme skewness or non-normal distributions. Always consider your data's context and distribution shape when interpreting results."
                    },
                    {
                      q: "How does standard deviation differ from the range?",
                      a: "Range measures only the difference between highest and lowest values, while standard deviation considers all data points and their distances from the mean. Standard deviation provides a more comprehensive measure of variability that accounts for the entire dataset's spread."
                    },
                    {
                      q: "Is a higher standard deviation always bad?",
                      a: "Not necessarily! Higher standard deviation indicates more variability, which can be desirable (like diversified investments) or undesirable (like quality control). Context matters - more variability might mean more risk in finance but more creativity in art."
                    },
                    {
                      q: "How do I interpret standard deviation in quality control?",
                      a: "In quality control, lower standard deviation indicates more consistent products. Use control charts with ±3σ limits to identify when processes go out of control. Process capability index Cp = (USL - LSL) / (6×σ) measures how well your process meets specifications."
                    },
                    {
                      q: "What is the relationship between standard deviation and normal distribution?",
                      a: "In normal distributions, about 68% of data falls within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations (Empirical Rule). This helps identify outliers and understand data distribution patterns."
                    },
                    {
                      q: "How do I calculate standard deviation for grouped data?",
                      a: "For grouped data, use the formula: σ = √[Σf(x - x̄)² / Σf] where f is frequency, x is class midpoint, and x̄ is the weighted mean. This accounts for repeated values in frequency distributions and provides accurate standard deviation for grouped datasets."
                    }
                  ].map(({ q, a }, index) => (
                    <div key={index} className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">{q}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{a}</p>
                  </div>
                  ))}
                  </div>
                  </div>
                  </div>

            {/* Related Tools */}
            <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                Related Statistics & Math Calculators
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                {[
                  { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: Percent },
                  { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                  { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: Calculator },
                  { name: "Fraction Calculator", desc: "Calculate fractions and mixed numbers", href: "/calculator/fraction-calculator", icon: PieChart },
                  { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                  { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                  { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: TrendingUp },
                  { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                  { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                  { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: FileText },
                  { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                  { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                ].map(({ name, desc, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-3 w-3 text-primary group-hover:text-primary/80" />
                      <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary">{name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Bottom AdSpace */}
            <div className="my-8 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
