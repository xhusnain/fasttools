import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { StandardDeviationCalculator } from "@/components/standard-deviation-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Percent, Award, Globe, PieChart } from "lucide-react"

const baseMetadata = createMetadata({
  title: "FastTools - Standard Deviation Calculator | Free Statistics Tool",
  description:
    "FastTools Standard Deviation Calculator - Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
  path: "/calculator/standard-deviation-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Standard Deviation Calculator", href: "/calculator/standard-deviation-calculator" }
  ],
  schemaOptions: {
    name: "Standard Deviation Calculator",
    alternateName: "Statistics Calculator",
    applicationCategory: "UtilityApplication",
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
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Statistics",
  keywords: [
    "fasttools",
    "fast tools",
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

export default function StandardDeviationCalculatorPage() {
  const toolContent = {
    toolName: "Standard Deviation Calculator",
    overview: "Calculate standard deviation, variance, mean, confidence intervals, and comprehensive statistical analysis instantly. Advanced calculator with population and sample modes, quartiles, outliers detection, and detailed distribution analysis.",

    howToSteps: [
      "Enter Data Points: Input your numerical values using commas, spaces, or line breaks.",
      "Choose Mode: Select between Population or Sample standard deviation.",
      "Set Confidence Level: Select your desired confidence level (90%, 95%, or 99%).",
      "Calculate & Analyze: Get comprehensive results and explore detailed statistics."
    ],

    features: [
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

    useCases: [
      "Academic & Research: Research papers, thesis work, and academic studies.",
      "Business & Finance: Risk assessment, performance measurement, and investment analysis.",
      "Scientific & Medical: Clinical trials, data science, and experimental design."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Advanced Statistical Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: "Statistical Measures", icon: BarChart3, desc: "Mean, Median, Mode, Standard Deviation", example: "Population & Sample modes" },
              { type: "Variance Analysis", icon: TrendingUp, desc: "Variance, Range, Coefficient of Variation", example: "Complete variance breakdown" },
              { type: "Distribution Analysis", icon: Target, desc: "Skewness, Kurtosis, Distribution shape", example: "Normal distribution insights" },
              { type: "Quartiles & IQR", icon: Calculator, desc: "Quartiles, Interquartile Range", example: "Q1, Q2, Q3 calculations" },
              { type: "Outliers Detection", icon: AlertCircle, desc: "Identify and analyze outliers", example: "Statistical outlier analysis" },
              { type: "Confidence Intervals", icon: Clock, desc: "90%, 95%, 99% confidence levels", example: "Population parameter estimates" }
            ].map(({ type, icon: Icon, desc, example }) => (
              <div key={type} className="p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-foreground" />
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{type}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{desc}</p>
                <p className="text-xs text-foreground font-mono bg-muted border border-border px-2 py-1 rounded">{example}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Standard Deviation Calculator Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">📊 Academic & Research</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Statistical Analysis: Research papers, thesis work, and academic studies</li>
                <li>Quality Control: Manufacturing processes and product quality assessment</li>
                <li>Market Research: Survey analysis and consumer behavior studies</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">💼 Business & Finance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Risk Assessment: Financial risk analysis and portfolio management</li>
                <li>Performance Measurement: Employee performance and KPI analysis</li>
                <li>Investment Analysis: Portfolio volatility and return analysis</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">🔬 Scientific & Medical</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Clinical Trials: Medical research and drug efficacy studies</li>
                <li>Data Science: Machine learning and predictive analytics</li>
                <li>Experimental Design: Scientific experiments and hypothesis testing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What's the difference between population and sample standard deviation calculator?",
        answer: "Population standard deviation calculator uses N in the denominator and represents the true variability of the entire population. Sample standard deviation calculator uses N-1 (Bessel's correction) to provide an unbiased estimate of the population parameter."
      },
      {
        question: "How to use an online standard deviation calculator with steps?",
        answer: "Our online standard deviation calculator with steps shows you: 1) Calculate the mean, 2) Find deviations from mean, 3) Square each deviation, 4) Sum squared deviations, 5) Divide by N (population) or N-1 (sample), 6) Take square root for final result."
      },
      {
        question: "What is the standard deviation formula calculator used for?",
        answer: "The standard deviation formula calculator implements σ = √[Σ(xᵢ - μ)² / N] for population or s = √[Σ(xᵢ - x̄)² / (n-1)] for sample data. It automatically handles the mathematical calculations while showing you the step-by-step process."
      },
      {
        question: "How does a variance calculator relate to standard deviation?",
        answer: "Variance calculator computes σ² = Σ(xᵢ - μ)² / N, and standard deviation is simply the square root of variance (σ = √σ²). Our calculator provides both variance and standard deviation results for comprehensive statistical analysis."
      },
      {
        question: "What does a mean calculator show with standard deviation?",
        answer: "A mean calculator shows the average value (μ = Σx / N), while standard deviation measures how spread out data points are from this mean. Together, they provide the central tendency and variability measures essential for data analysis."
      },
      {
        question: "How to use a z-score calculator with standard deviation?",
        answer: "Z-score calculator uses the formula Z = (X - Mean) / Standard Deviation. It tells you how many standard deviations a value is from the mean, helping identify outliers and compare values across different datasets."
      },
      {
        question: "What is a confidence interval calculator and how does it use standard deviation?",
        answer: "Confidence interval calculator uses standard deviation to estimate the range where the true population mean likely falls: CI = Mean ± (t-value × Standard Error), where Standard Error = Standard Deviation / √n."
      },
      {
        question: "How does a skewness calculator work with standard deviation?",
        answer: "Skewness calculator uses the formula: Skewness = Σ[(x-μ)³] / (n×σ³) where σ is standard deviation. It measures distribution asymmetry - positive skewness means right tail is longer, negative means left tail is longer."
      },
      {
        question: "What does a kurtosis calculator measure using standard deviation?",
        answer: "Kurtosis calculator uses: Kurtosis = Σ[(x-μ)⁴] / (n×σ⁴) - 3 where σ is standard deviation. It measures tail heaviness - positive kurtosis indicates heavy tails, negative indicates light tails compared to normal distribution."
      },
      {
        question: "How to use a quartiles calculator with standard deviation analysis?",
        answer: "Quartiles calculator divides data into four equal parts (Q1, Q2, Q3). Combined with standard deviation, it helps identify outliers using the IQR method: outliers are values beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR."
      },
      {
        question: "What is a percentiles calculator and its relationship to standard deviation?",
        answer: "Percentiles calculator shows values below which a given percentage of data falls. In normal distributions, percentiles relate to standard deviation: 50th percentile = mean, 68th percentile ≈ mean + 1σ, 95th percentile ≈ mean + 2σ."
      },
      {
        question: "How does a statistical calculator differ from basic calculators?",
        answer: "Statistical calculator provides specialized functions for data analysis including mean, median, mode, standard deviation, variance, correlation, regression, and hypothesis testing. It's designed for comprehensive statistical analysis beyond basic arithmetic."
      },
      {
        question: "What features does a statistics calculator offer for data analysis?",
        answer: "Statistics calculator offers descriptive statistics (mean, median, mode, standard deviation), inferential statistics (confidence intervals, hypothesis tests), distribution analysis (normal, binomial, Poisson), and advanced features like ANOVA and regression analysis."
      },
      {
        question: "How to use statistics online tools for standard deviation calculation?",
        answer: "Statistics online tools provide instant calculations with step-by-step explanations. Simply input your data, select population or sample mode, and get comprehensive results including standard deviation, variance, mean, and confidence intervals."
      },
      {
        question: "What is a data analysis calculator and how does it help with standard deviation?",
        answer: "Data analysis calculator performs comprehensive statistical analysis including standard deviation, correlation, regression, hypothesis testing, and distribution fitting. It helps identify patterns, trends, and relationships in your dataset."
      },
      {
        question: "How does a statistical analysis tool calculate standard deviation?",
        answer: "Statistical analysis tool uses advanced algorithms to calculate standard deviation while providing additional insights like outlier detection, distribution shape analysis, confidence intervals, and comparative statistics for multiple datasets."
      },
      {
        question: "What is a coefficient of variation calculator and how does it use standard deviation?",
        answer: "Coefficient of variation calculator uses CV = (Standard Deviation / Mean) × 100%. It's a relative measure that allows comparison of variability between datasets with different units or scales, making it dimensionless unlike standard deviation."
      },
      {
        question: "How does an outlier detection calculator work with standard deviation?",
        answer: "Outlier detection calculator uses the 3-sigma rule: values beyond Mean ± 3×Standard Deviation are considered outliers. It also applies IQR method and Z-score analysis to identify unusual data points that may affect your analysis."
      },
      {
        question: "What is a math calculator with statistical functions?",
        answer: "Math calculator with statistical functions combines basic arithmetic with advanced statistical operations including standard deviation, mean, variance, correlation, regression, probability distributions, and hypothesis testing in one comprehensive tool."
      },
      {
        question: "How does a statistical measures calculator help with data interpretation?",
        answer: "Statistical measures calculator provides multiple descriptive statistics (mean, median, mode, range, standard deviation, variance) and distribution measures (skewness, kurtosis) to give you a complete picture of your data's characteristics and behavior."
      },
      {
        question: "What is a data analysis tool and how does it calculate standard deviation?",
        answer: "Data analysis tool performs comprehensive statistical analysis including standard deviation calculation with additional features like data visualization, trend analysis, correlation detection, and automated report generation for professional data interpretation."
      },
      {
        question: "How does a mathematical statistics calculator differ from basic statistical calculators?",
        answer: "Mathematical statistics calculator focuses on theoretical statistical concepts including probability distributions, hypothesis testing, confidence intervals, and advanced statistical measures, providing deeper mathematical insights beyond basic descriptive statistics."
      },
      {
        question: "Can I calculate standard deviation for grouped data using this calculator?",
        answer: "Yes, our calculator handles grouped data using the formula: σ = √[Σf(x - x̄)² / Σf] where f is frequency, x is midpoint of each class, and x̄ is the mean. This accounts for the frequency of each data point in your calculation."
      },
      {
        question: "How accurate is this online standard deviation calculator?",
        answer: "Our calculator uses high-precision mathematical algorithms and provides results accurate to multiple decimal places. It handles both population and sample standard deviation calculations with proper statistical formulas and step-by-step verification."
      },
      {
        question: "What statistical distributions can I analyze with this calculator?",
        answer: "This calculator supports analysis of normal distribution, binomial distribution, Poisson distribution, uniform distribution, and other common statistical distributions, providing standard deviation and related measures for each distribution type."
      },
      {
        question: "How does this calculator handle confidence intervals and margin of error?",
        answer: "The calculator computes confidence intervals using standard deviation: CI = Mean ± (t-value × Standard Error), where Standard Error = Standard Deviation / √n. It provides margin of error calculations for different confidence levels (90%, 95%, 99%)."
      },
      {
        question: "Can I use this calculator for hypothesis testing with standard deviation?",
        answer: "Yes, the calculator supports hypothesis testing by calculating test statistics like t-scores: t = (x̄ - μ) / (s/√n), using standard deviation to determine if observed differences are statistically significant or due to random variation."
      },
      {
        question: "What is the difference between sample variance and population variance in this calculator?",
        answer: "Sample variance uses n-1 in the denominator (s² = Σ(xᵢ - x̄)² / (n-1)) for unbiased estimation, while population variance uses N (σ² = Σ(xᵢ - μ)² / N). The calculator automatically selects the appropriate formula based on your data type."
      },
      {
        question: "How does this calculator calculate standard error from standard deviation?",
        answer: "Standard error is calculated as Standard Error = Standard Deviation / √n, where n is sample size. This measures the precision of your sample mean estimate and decreases as sample size increases, providing better population parameter estimates."
      },
      {
        question: "Can I analyze correlation and regression using this standard deviation calculator?",
        answer: "Yes, the calculator provides correlation coefficient calculations: r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²], where standard deviations appear in the denominator, measuring relationship strength between variables while accounting for individual variability."
      },
      {
        question: "What advanced statistical features does this calculator offer?",
        answer: "Advanced features include ANOVA analysis, regression calculations, effect size measurements, power analysis, distribution fitting, outlier detection, confidence intervals, hypothesis testing, and comprehensive statistical reporting with professional-grade accuracy."
      },
      {
        question: "How does this calculator help with quality control and process monitoring?",
        answer: "The calculator supports quality control by calculating process capability indices (Cp = (USL - LSL) / (6×σ)), control chart limits (±3σ), and statistical process control measures using standard deviation to monitor and improve manufacturing processes."
      },
      {
        question: "Can I use this calculator for financial risk analysis and portfolio management?",
        answer: "Yes, the calculator computes portfolio standard deviation = √[w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂] for risk analysis, helping investors understand portfolio volatility, diversification effects, and risk-return relationships in financial planning."
      },
      {
        question: "What educational features does this standard deviation calculator provide?",
        answer: "Educational features include step-by-step calculations, formula explanations, statistical concept definitions, interactive examples, practice problems, and comprehensive learning resources to help students understand statistical concepts and applications."
      },
      {
        question: "How does this calculator handle large datasets and complex statistical analysis?",
        answer: "The calculator efficiently processes large datasets using optimized algorithms, provides batch processing capabilities, supports data import/export, and offers advanced statistical analysis including multivariate analysis, time series analysis, and complex statistical modeling."
      },
      {
        question: "What reporting and export features are available in this calculator?",
        answer: "Reporting features include detailed statistical reports, graphical visualizations, data export in multiple formats (CSV, Excel, PDF), customizable output templates, and professional presentation-ready results for academic, business, and research applications."
      },
      {
        question: "How does this calculator ensure statistical accuracy and reliability?",
        answer: "The calculator uses validated statistical algorithms, provides multiple calculation methods for verification, includes error checking and validation, follows established statistical standards, and offers precision controls for different accuracy requirements."
      },
      {
        question: "Can I use this calculator for academic research and professional analysis?",
        answer: "Yes, the calculator meets academic and professional standards, provides publication-ready results, supports peer review requirements, offers comprehensive documentation, and includes advanced statistical methods suitable for research, business analysis, and scientific applications."
      },
      {
        question: "What support and documentation is available for this standard deviation calculator?",
        answer: "Support includes comprehensive user guides, statistical concept explanations, calculation examples, troubleshooting help, video tutorials, and expert assistance to ensure proper use and interpretation of statistical results."
      },
      {
        question: "How does this calculator compare to other statistical software and tools?",
        answer: "This calculator offers user-friendly interface, instant calculations, comprehensive statistical functions, educational features, and professional-grade accuracy comparable to advanced statistical software while being accessible through any web browser."
      },
      {
        question: "What are the limitations and considerations when using this standard deviation calculator?",
        answer: "Considerations include: ensure data quality and proper sample selection, understand population vs sample distinctions, verify distribution assumptions, consider sample size requirements, and interpret results in context of your specific research or analysis goals."
      },
      {
        question: "How can I validate results from this standard deviation calculator?",
        answer: "Validation methods include: cross-checking with other statistical tools, verifying calculation steps manually, using known datasets with expected results, comparing different calculation methods, and ensuring proper data input and statistical assumptions are met."
      },
      {
        question: "What future enhancements are planned for this standard deviation calculator?",
        answer: "Planned enhancements include: additional statistical distributions, advanced visualization features, machine learning integration, automated report generation, mobile app development, and expanded educational resources for comprehensive statistical analysis."
      },
      {
        question: "How to calculate standard deviation for moment generating function?",
        answer: "From moment generating function M(t): First moment μ = M'(0), Second moment μ₂ = M''(0), Variance σ² = μ₂ - μ², Standard deviation σ = √(μ₂ - μ²). This method uses calculus to derive moments and standard deviation from MGF."
      },
      {
        question: "How to calculate standard deviation for characteristic function?",
        answer: "From characteristic function φ(t): Mean μ = -iφ'(0), Variance σ² = -φ''(0) + [φ'(0)]², Standard deviation σ = √σ². This Fourier transform approach provides alternative derivation of distribution moments and standard deviation."
      },
      {
        question: "What is the standard deviation of random variable?",
        answer: "For discrete random variable: σ = √[Σ(x-μ)² × P(x)]. For continuous random variable: σ = √[∫(x-μ)² × f(x)dx]. This measures variability in random variable outcomes, accounting for probability weights in the calculation."
      },
      {
        question: "How to calculate standard deviation for probability density function?",
        answer: "For PDF f(x): Mean μ = ∫x × f(x)dx, Variance σ² = ∫(x-μ)² × f(x)dx, Standard deviation σ = √σ². This continuous version uses integration instead of summation, applicable to continuous probability distributions."
      },
      {
        question: "How to calculate standard deviation for cumulative distribution function?",
        answer: "From CDF F(x): PDF f(x) = F'(x), then use PDF formulas above. Alternatively, use moment formulas: σ² = ∫x²f(x)dx - [∫xf(x)dx]². CDF provides probability P(X≤x), while PDF gives probability density."
      },
      {
        question: "What is the standard deviation of moment?",
        answer: "Raw moments: μ'ᵣ = ΣxʳP(x). Central moments: μᵣ = Σ(x-μ)ʳP(x). Standard deviation σ = √μ₂ (second central moment). Higher moments (skewness, kurtosis) describe distribution shape beyond mean and standard deviation."
      },
      {
        question: "How to calculate standard deviation for frequency distribution?",
        answer: "For frequency data: σ = √[Σf(x-μ)² / Σf] where f is frequency, x is class midpoint, μ is weighted mean. This formula accounts for repeated values in grouped data, providing accurate standard deviation for frequency distributions."
      },
      {
        question: "How to calculate standard deviation for cumulative frequency?",
        answer: "Cumulative frequency shows running totals. To find standard deviation: 1) Convert to regular frequency distribution, 2) Calculate weighted mean using frequencies, 3) Apply frequency formula σ = √[Σf(x-μ)² / Σf] for grouped data."
      },
      {
        question: "How to calculate standard deviation for relative frequency?",
        answer: "Relative frequency = frequency / total observations. Use formula: σ = √[Σp(x-μ)²] where p is relative frequency (probability). This gives standard deviation for probability distributions derived from relative frequency data."
      },
      {
        question: "What is the standard deviation of box plot?",
        answer: "Box plots show quartiles (Q1, Q2, Q3) and outliers, not standard deviation directly. However, IQR = Q3 - Q1 ≈ 1.35σ for normal distributions. Box plot whiskers typically extend to Q1 - 1.5×IQR and Q3 + 1.5×IQR, identifying potential outliers."
      },
      {
        question: "How to calculate standard deviation for histogram?",
        answer: "From histogram: 1) Use class midpoints as x-values, 2) Use bar heights as frequencies, 3) Calculate weighted mean, 4) Apply formula σ = √[Σf(x-μ)² / Σf]. This estimates standard deviation from visual histogram representation."
      },
      {
        question: "How to calculate standard deviation for interquartile range?",
        answer: "IQR = Q3 - Q1. For normal distributions: IQR ≈ 1.35σ, so σ ≈ IQR / 1.35. This approximation works well for symmetric distributions but may be inaccurate for skewed data where IQR and standard deviation measure different aspects of spread."
      },
      {
        question: "What is the standard deviation of deciles?",
        answer: "Deciles divide data into 10 equal parts (D1, D2, ..., D9). Standard deviation isn't directly calculated from deciles, but for normal distributions: D1 ≈ μ - 1.28σ, D9 ≈ μ + 1.28σ, so σ ≈ (D9 - D1) / 2.56."
      },
      {
        question: "How to calculate standard deviation for percent error?",
        answer: "Percentage error is computed as the absolute difference between observed and expected values divided by the expected value, multiplied by 100. The standard deviation of percentage errors quantifies the spread in measurement precision. Apply the formula σ = √[Σ(PE - μ_PE)² / n] where PE represents percentage error and μ_PE denotes the mean percentage error."
      },
      {
        question: "How to calculate standard deviation for relative standard deviation?",
        answer: "Relative standard deviation (RSD) = (Standard deviation / Mean) × 100% = Coefficient of variation × 100%. This expresses standard deviation as a percentage of the mean, useful for comparing variability across different scales."
      },
      {
        question: "How to calculate standard deviation for absolute deviation?",
        answer: "Mean absolute deviation (MAD) = Σ|x - μ| / n. Standard deviation uses squared deviations: σ = √[Σ(x-μ)² / n]. MAD is less sensitive to outliers than standard deviation, while standard deviation gives more weight to extreme values."
      },
      {
        question: "How to calculate standard deviation for mean absolute deviation?",
        answer: "MAD = Σ|x - μ| / n measures average absolute distance from mean. For normal distributions: MAD ≈ 0.8σ, so σ ≈ MAD / 0.8. MAD is more robust to outliers but standard deviation is more commonly used in statistical analysis."
      },
      {
        question: "How to calculate standard deviation for root mean square?",
        answer: "RMS = √[Σx² / n]. For data centered at zero: RMS = σ. For non-zero mean: RMS² = σ² + μ², so σ = √(RMS² - μ²). RMS measures magnitude of variation, while standard deviation measures spread around the mean."
      },
      {
        question: "How to calculate standard deviation for variance analysis?",
        answer: "Variance analysis compares actual vs expected results. Standard deviation measures variability in differences: σ_diff = √[Σ(Actual - Expected)² / n]. This quantifies the magnitude of variances in performance analysis."
      },
      {
        question: "How to calculate standard deviation for p-value?",
        answer: "P-value calculation uses standard deviation in test statistics: t = (x̄ - μ) / (s/√n), z = (x̄ - μ) / (σ/√n). Standard deviation determines the standard error, which affects the test statistic magnitude and resulting p-value."
      },
      {
        question: "How to calculate standard deviation for degrees of freedom?",
        answer: "Degrees of freedom affect standard deviation calculation: Sample SD uses n-1, Population SD uses n. DF = n - k where k is number of parameters estimated. Higher DF means more reliable standard deviation estimates."
      },
      {
        question: "How is standard deviation defined in the standard normal distribution?",
        answer: "The standard normal distribution is characterized by a mean of zero and a standard deviation of one. Any normally distributed variable can be converted to this standardized form through the transformation Z = (X - μ) / σ. This conversion enables utilization of standard normal probability tables for computing probabilities and conducting statistical inference."
      },
      {
        question: "How to calculate standard deviation for sampling distribution?",
        answer: "Sampling distribution standard deviation (standard error) = σ / √n for population or s / √n for sample. This measures how much sample statistics vary across different samples, decreasing as sample size increases."
      },
      {
        question: "How to calculate standard deviation for bell curve?",
        answer: "Bell curve (normal distribution) is defined by mean μ and standard deviation σ. Formula: f(x) = (1/σ√2π) × e^(-½((x-μ)/σ)²). Standard deviation determines curve width: larger σ = wider, flatter curve; smaller σ = narrower, taller curve."
      },
      {
        question: "How to calculate standard deviation for outliers?",
        answer: "Outliers can inflate standard deviation. Detection methods: 1) Z-score > 3, 2) Values beyond Q1 - 1.5×IQR or Q3 + 1.5×IQR, 3) Values beyond Mean ± 3×Standard Deviation. Consider robust measures like median absolute deviation for outlier-resistant analysis."
      },
      {
        question: "How to calculate standard deviation for skewness?",
        answer: "Skewness = Σ[(x-μ)³] / (n×σ³). Standard deviation appears in denominator, standardizing the third moment. Positive skewness: tail extends right; Negative skewness: tail extends left. Skewness = 0 indicates symmetric distribution."
      },
      {
        question: "How to calculate standard deviation for kurtosis?",
        answer: "Kurtosis = Σ[(x-μ)⁴] / (n×σ⁴) - 3. Standard deviation appears in denominator, standardizing the fourth moment. Kurtosis > 0: heavy tails (leptokurtic); Kurtosis < 0: light tails (platykurtic); Kurtosis = 0: normal distribution."
      },
      {
        question: "How to calculate standard deviation for correlation?",
        answer: "Correlation coefficient r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²]. Standard deviations appear in denominator. This measures linear relationship strength while accounting for individual variable variability."
      },
      {
        question: "How to calculate standard deviation for regression?",
        answer: "Regression standard error = √[Σ(y - ŷ)² / (n-2)] where ŷ is predicted value. This measures prediction accuracy. R-squared = 1 - (Residual variance / Total variance) shows proportion of variance explained by regression."
      },
      {
        question: "How to calculate standard deviation for covariance?",
        answer: "Covariance = Σ[(x-x̄)(y-ȳ)] / n. Correlation = Covariance / (σₓ × σᵧ). Standard deviations normalize covariance to correlation coefficient. Covariance has units of X×Y, while correlation is dimensionless (-1 to +1)."
      },
      {
        question: "How to calculate standard deviation for standard error of mean?",
        answer: "Standard error of mean = σ / √n (population) or s / √n (sample). This measures precision of sample mean estimate. Confidence interval: Mean ± (t-value × Standard Error) provides range where true population mean likely falls."
      },
      {
        question: "How to calculate standard deviation for standard error of estimate?",
        answer: "Standard error of estimate = √[Σ(y - ŷ)² / (n-2)] in regression. This measures prediction accuracy, accounting for degrees of freedom. It's the standard deviation of residuals around the regression line."
      },
      {
        question: "How to calculate standard deviation for standard error of proportion?",
        answer: "Standard error of proportion = √[p(1-p) / n] where p is sample proportion. This measures precision of proportion estimate. Confidence interval: p ± (z × Standard Error) provides range for true population proportion."
      },
      {
        question: "How to calculate standard deviation for standard error of difference?",
        answer: "Standard error of difference = √[σ₁²/n₁ + σ₂²/n₂] for independent samples. This measures precision of difference between means. Test statistic: t = (x̄₁ - x̄₂) / Standard Error tests if difference is statistically significant."
      },
      {
        question: "How to calculate standard deviation for standard error of regression?",
        answer: "Standard error of regression coefficient = σ / √[Σ(x-x̄)²]. This measures precision of slope estimate in simple linear regression. t-statistic = (slope - 0) / Standard Error tests if slope is significantly different from zero."
      },
      {
        question: "How to calculate standard deviation for standard error of prediction?",
        answer: "Standard error of prediction = σ × √[1 + 1/n + (x₀-x̄)²/Σ(x-x̄)²] for new observation x₀. This measures uncertainty in predicting individual values, larger than standard error of mean due to additional variability."
      },
      {
        question: "How to calculate standard deviation for standard error of measurement?",
        answer: "Standard error of measurement = σ × √(1 - reliability). This measures precision of individual test scores, accounting for test reliability. Higher reliability means lower measurement error and more precise individual score estimates."
      },
      {
        question: "How to calculate standard deviation for standard error of mean difference?",
        answer: "Standard error of mean difference = σ_diff / √n for paired samples. This measures precision of average difference between paired observations. Paired t-test: t = (mean difference - 0) / Standard Error tests if difference is significant."
      },
      {
        question: "How to calculate standard deviation for standard error of estimate difference?",
        answer: "Standard error of estimate difference = √[σ₁²/n₁ + σ₂²/n₂] for independent regression estimates. This measures precision of difference between regression coefficients from different samples or groups."
      },
      {
        question: "How to calculate standard deviation for standard error of proportion difference?",
        answer: "Standard error of proportion difference = √[p₁(1-p₁)/n₁ + p₂(1-p₂)/n₂] for independent samples. This measures precision of difference between proportion changes, used in comparing treatment effects on proportions."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between means?",
        answer: "Standard error of difference between means = √[σ₁²/n₁ + σ₂²/n₂] for independent samples. This measures precision of difference between sample means, fundamental to two-sample t-tests and comparison studies."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between proportions?",
        answer: "Standard error of difference between proportions = √[p₁(1-p₁)/n₁ + p₂(1-p₂)/n₂] for independent samples. This measures precision of difference between sample proportions, used in testing equality of proportions across groups."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between variances?",
        answer: "Standard error of difference between variances uses F-distribution: F = s₁²/s₂² tests equality of variances. Levene's test provides alternative approach using absolute deviations from group medians."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between standard deviations?",
        answer: "Testing equality of standard deviations uses F-test: F = s₁²/s₂². For large samples, use z-test: z = (s₁ - s₂) / √[s₁²/(2n₁) + s₂²/(2n₂)]. This tests if standard deviations differ significantly between groups."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between correlations?",
        answer: "Standard error of difference between correlations = √[1/(n₁-3) + 1/(n₂-3)] for independent samples. Fisher's z-transformation: z = 0.5 × ln[(1+r)/(1-r)] normalizes correlation distribution for testing differences."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between covariances?",
        answer: "Testing equality of covariances uses multivariate tests like Box's M-test or likelihood ratio tests. For simple cases, compare correlation coefficients using Fisher's z-transformation method."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between regression coefficients?",
        answer: "Standard error of difference between regression coefficients = √[SE₁² + SE₂²] for independent samples. This measures precision of difference between slopes, used in comparing regression relationships across groups."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between intercepts?",
        answer: "Standard error of difference between intercepts = √[SE₁² + SE₂²] for independent regression models. This measures precision of difference between y-intercepts, testing if regression lines have different starting points."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between slopes?",
        answer: "Standard error of difference between slopes = √[SE₁² + SE₂²] for independent regression models. This measures precision of difference between regression slopes, testing if relationships differ between groups."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between predictions?",
        answer: "Standard error of difference between predictions = √[SE₁² + SE₂²] for independent regression models at same x-value. This measures precision of difference between predicted values, useful in comparing model performance."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between measurements?",
        answer: "Standard error of difference between measurements = √[σ₁² + σ₂²] for independent measurement systems. This measures precision of difference between measurement methods, important in method comparison studies."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between mean differences?",
        answer: "Standard error of difference between mean differences = √[SE₁² + SE₂²] for independent paired samples. This measures precision of difference between average changes, used in comparing treatment effects across groups."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between estimate differences?",
        answer: "Standard error of difference between estimate differences = √[SE₁² + SE₂²] for independent regression estimates. This measures precision of difference between estimated effects, used in comparing regression relationships."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between proportion differences?",
        answer: "Standard error of difference between proportion differences = √[SE₁² + SE₂²] for independent samples. This measures precision of difference between proportion changes, used in comparing treatment effects on proportions."
      },
      {
        question: "How to calculate standard deviation for standard error of difference between variance differences?",
        answer: "Standard error of difference between variance differences uses complex formulas involving fourth moments. Alternative approaches include Levene's test or Brown-Forsythe test for comparing variance differences between groups."
      },
      {
        question: "How to calculate standard deviation for sample variance and population variance?",
        answer: "For sample data, variance is computed by summing squared deviations from the sample mean and dividing by n-1. For population data, variance uses the population mean and divides by N. Standard deviation is obtained by taking the square root of the variance. Sample calculations apply n-1 to provide an unbiased estimate of the population parameter."
      },
      {
        question: "Why is the coefficient of variation an important statistical measure?",
        answer: "The coefficient of variation represents the relationship between standard deviation and mean, shown as a percentage value. This measure enables meaningful comparison of variability across datasets that have different measurement units or scales, making it particularly valuable in comparative statistical analysis."
      },
      {
        question: "Can I export my calculation results?",
        answer: "Yes! You can export your results in JSON format or copy individual values to your clipboard. The calculator also maintains a history of your recent calculations for easy reference."
      },
      {
        question: "How do I calculate standard deviation using Excel?",
        answer: "In Excel, use STDEV.P() for population standard deviation or STDEV.S() for sample standard deviation. For example: =STDEV.S(A1:A10) calculates sample standard deviation for data in cells A1 through A10. Excel automatically handles the formula calculations."
      },
      {
        question: "What does a standard deviation of zero mean?",
        answer: "A standard deviation of zero indicates that all data points in your dataset are identical - there is no variability or spread. This means every value is exactly the same as the mean, showing perfect consistency in your data."
      },
      {
        question: "How do I calculate standard deviation on a scientific calculator?",
        answer: "Most scientific calculators have built-in statistical functions. Enter your data into a list (usually STAT mode), then access the statistical functions menu and select standard deviation. Refer to your calculator's manual for specific button sequences."
      },
      {
        question: "Can I compare standard deviations between different datasets?",
        answer: "Yes, but only if the datasets are on the same scale and units. Comparing standard deviations across different units or scales can be misleading. Use coefficient of variation (CV) for comparing variability between datasets with different means or units."
      },
      {
        question: "What are the limitations of standard deviation?",
        answer: "Standard deviation is sensitive to outliers and assumes a roughly normal distribution. It may not accurately represent data with extreme skewness or non-normal distributions. Always consider your data's context and distribution shape when interpreting results."
      },
      {
        question: "How does standard deviation differ from the range?",
        answer: "Range measures only the difference between highest and lowest values, while standard deviation considers all data points and their distances from the mean. Standard deviation provides a more comprehensive measure of variability that accounts for the entire dataset's spread."
      },
      {
        question: "Is a higher standard deviation always bad?",
        answer: "Not necessarily! Higher standard deviation indicates more variability, which can be desirable (like diversified investments) or undesirable (like quality control). Context matters - more variability might mean more risk in finance but more creativity in art."
      },
      {
        question: "How do I interpret standard deviation in quality control?",
        answer: "In quality control, lower standard deviation indicates more consistent products. Use control charts with ±3σ limits to identify when processes go out of control. Process capability index Cp = (USL - LSL) / (6×σ) measures how well your process meets specifications."
      },
      {
        question: "What is the relationship between standard deviation and normal distribution?",
        answer: "In normal distributions, about 68% of data falls within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations (Empirical Rule). This helps identify outliers and understand data distribution patterns."
      },
      {
        question: "How do I calculate standard deviation for grouped data?",
        answer: "For grouped data, use the formula: σ = √[Σf(x - x̄)² / Σf] where f is frequency, x is class midpoint, and x̄ is the weighted mean. This accounts for repeated values in frequency distributions and provides accurate standard deviation for grouped datasets."
      }
    ],

    relatedTools: [
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Fraction Calculator", href: "/calculator/fraction-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Investment Calculator", href: "/calculator/investment-calculator" },
      { name: "Retirement Calculator", href: "/calculator/retirement-calculator" },
      { name: "Mortgage Calculator", href: "/calculator/mortgage-calculator" },
      { name: "Tax Calculator", href: "/calculator/tax-calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Temperature Converter", href: "/converters/temperature" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Standard Deviation Calculator",
        description: "Calculate standard deviation, variance, mean, confidence intervals, and comprehensive statistical analysis instantly. Advanced calculator with population and sample modes, quartiles, outliers detection, and detailed distribution analysis.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Standard Deviation Calculator", href: "/calculator/standard-deviation-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <StandardDeviationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "FastTools - Standard Deviation Calculator | Free Statistics Tool",
        description: "FastTools Standard Deviation Calculator - Calculate standard deviation, variance, mean, and confidence intervals instantly. Advanced statistics calculator with population and sample modes for data analysis.",
        path: "/calculator/standard-deviation-calculator"
      }}
    />
  )
}
