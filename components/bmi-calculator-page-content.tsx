"use client"

import { useState } from "react"
import { BMICalculator } from "@/components/bmi-calculator"
import { PersonalizedHealthGuidance } from "@/components/personalized-health-guidance"

interface BMIResult {
  bmi: number
  category: string
  color: string
  healthyRange: string
  bmiPrime: number
  ponderalIndex: number
  healthyWeightRange: string
  riskLevel: string
  recommendations: string[]
  age?: number
  gender?: string
}

export function BMICalculatorPageContent() {
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null)

  const handleResultChange = (result: BMIResult | null) => {
    setBmiResult(result)
  }

  return (
    <div className="space-y-8">
      <BMICalculator onResultChange={handleResultChange} />

      {/* How to Use BMI Calculator */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          How to Use BMI Calculator Online: Step-by-Step Guide
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Our free calculator works for women, men, and adults of all ages. The BMI formula uses your weight and height to provide accurate results. Whether you need metric (kg/cm) or imperial (lbs/in) measurements, our tool supports all unit systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heading-accent">BMI Calculator Calculation Steps</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium text-heading-accent">Select Unit System</h4>
                  <p className="text-sm text-muted-foreground">Choose between Metric (kg/cm) or Imperial (lbs/in) units. Our calculator supports both systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium text-heading-accent">Enter Your Measurements</h4>
                  <p className="text-sm text-muted-foreground">Input your weight and height accurately. For metric units, use kilograms and centimeters. The BMI formula will calculate your result automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium text-heading-accent">Add Optional Details</h4>
                  <p className="text-sm text-muted-foreground">Include age and gender for more personalized interpretations and recommendations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-medium text-heading-accent">Get Your Results</h4>
                  <p className="text-sm text-muted-foreground">View your BMI value, category classification, chart position, and personalized health recommendations.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-heading-accent">Pro Tips for Accurate Results</h3>
            <div className="space-y-3">
              <div className="p-3 bg-card rounded-lg border border-blue-800">
                <h4 className="font-medium text-foreground">Measure at the same time</h4>
                <p className="text-sm text-muted-foreground">Weigh yourself at the same time of day for consistency</p>
              </div>
              <div className="p-3 bg-card rounded-lg border border-green-800">
                <h4 className="font-medium text-heading-accent">Use accurate measurements</h4>
                <p className="text-sm text-muted-foreground">Ensure your scale and measuring tools are calibrated</p>
              </div>
              <div className="p-3 bg-card rounded-lg border border-orange-800">
                <h4 className="font-medium text-foreground">Consider body composition</h4>
                <p className="text-sm text-muted-foreground">Remember that BMI treats all body weight equally, so individuals with higher muscle density may have elevated BMI values despite having low body fat percentages</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Visual BMI Chart */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </span>
          BMI Calculator Chart: Range & Categories
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Our BMI chart shows the standard BMI ranges used by healthcare providers worldwide. This chart applies to adults, with separate considerations for women and men. The chart follows WHO standards for accurate health assessment.
        </p>

        {/* Visual BMI Scale */}
        <div className="mb-6 bg-card border border-border rounded-lg p-6">
          <div className="relative w-full h-12 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-500 rounded-lg overflow-hidden mb-4">
            <div className="absolute inset-0 flex items-center justify-between px-2 text-xs font-bold text-white">
              <span className="bg-black/30 px-2 py-1 rounded">Underweight<br />&lt;18.5</span>
              <span className="bg-black/30 px-2 py-1 rounded">Normal<br />18.5-24.9</span>
              <span className="bg-black/30 px-2 py-1 rounded">Overweight<br />25-29.9</span>
              <span className="bg-black/30 px-2 py-1 rounded">Obese<br />≥30</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="w-full h-3 bg-blue-400 rounded mb-2"></div>
              <p className="font-semibold text-blue-600">Underweight</p>
              <p className="text-xs text-muted-foreground">&lt; 18.5</p>
            </div>
            <div className="text-center">
              <div className="w-full h-3 bg-green-400 rounded mb-2"></div>
              <p className="font-semibold text-green-600">Normal</p>
              <p className="text-xs text-muted-foreground">18.5 - 24.9</p>
            </div>
            <div className="text-center">
              <div className="w-full h-3 bg-yellow-400 rounded mb-2"></div>
              <p className="font-semibold text-yellow-600">Overweight</p>
              <p className="text-xs text-muted-foreground">25 - 29.9</p>
            </div>
            <div className="text-center">
              <div className="w-full h-3 bg-red-500 rounded mb-2"></div>
              <p className="font-semibold text-red-600">Obese</p>
              <p className="text-xs text-muted-foreground">≥ 30</p>
            </div>
          </div>
        </div>

        {/* BMI Categories and Health Implications */}
        <h3 className="text-xl font-bold mb-4 text-foreground">What Do BMI Categories Mean for Your Health?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Underweight (&lt;18.5)</h3>
            <p className="text-sm text-muted-foreground mb-2">Health Risks:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Nutritional deficiencies</li>
              <li>• Weakened immune system</li>
              <li>• Osteoporosis risk</li>
              <li>• Fertility issues</li>
            </ul>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Normal (18.5-24.9)</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-2">Health Benefits:</p>
            <ul className="text-xs text-muted-foreground dark:text-muted-foreground space-y-1">
              <li>• Lower disease risk</li>
              <li>• Better mobility</li>
              <li>• Improved energy</li>
              <li>• Longevity</li>
            </ul>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Overweight (25-29.9)</h3>
            <p className="text-sm text-muted-foreground mb-2">Health Risks:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Type 2 diabetes</li>
              <li>• High blood pressure</li>
              <li>• Heart disease</li>
              <li>• Joint problems</li>
            </ul>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Obese Class I (30-34.9)</h3>
            <p className="text-sm text-muted-foreground mb-2">Health Risks:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Severe health complications</li>
              <li>• Sleep apnea</li>
              <li>• Cancer risk</li>
              <li>• Mental health issues</li>
            </ul>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Obese Class II (35-39.9)</h3>
            <p className="text-sm text-muted-foreground mb-2">Health Risks:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Very high health risks</li>
              <li>• Limited mobility</li>
              <li>• Quality of life impact</li>
              <li>• Medical intervention needed</li>
            </ul>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <h3 className="font-semibold text-heading-accent mb-2">Obese Class III (&gt;40)</h3>
            <p className="text-sm text-muted-foreground mb-2">Health Risks:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Extreme health risks</li>
              <li>• Life-threatening conditions</li>
              <li>• Immediate medical care</li>
              <li>• Specialized treatment</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Advanced BMI Metrics Explained */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </span>
          Advanced BMI Calculator Metrics: BMI Prime and Ponderal Index
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Beyond the standard BMI calculation, our tool provides advanced metrics. BMI Prime and Ponderal Index offer additional insights for women, men, and adults seeking comprehensive health assessment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-border rounded-xl">
            <h3 className="text-lg font-semibold text-heading-accent mb-3">What is BMI Prime?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              BMI Prime compares your BMI to the normal weight threshold (25 kg/m²). Healthcare providers use this ratio for quick health assessments. It shows how far you are from the healthy range.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              The World Health Organization recognizes BMI Prime as a useful metric. It simplifies weight status interpretation for medical professionals and patients.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div>• &lt;0.74: Underweight</div>
              <div>• 0.74-1.0: Normal weight</div>
              <div>• 1.0-1.2: Overweight</div>
              <div>• &gt;1.2: Obese</div>
            </div>
          </div>
          <div className="p-6 bg-card border border-border rounded-xl">
            <h3 className="text-lg font-semibold text-heading-accent mb-3">What is the Ponderal Index?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              The Ponderal Index uses height cubed instead of squared. This makes it more accurate for very tall or short individuals. Healthcare providers recommend it when BMI may be misleading.
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Medical professionals use Ponderal Index for body composition analysis. It's particularly useful for athletes and individuals with extreme heights.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div>• More accurate for extreme heights</div>
              <div>• Better for body composition analysis</div>
              <div>• Useful for athletes and tall individuals</div>
              <div>• Normal range: 11-14 kg/m³</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          </span>
          BMI Calculator vs Other Health Metrics: Comparison Guide
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          While our calculator provides accurate results, understanding how BMI compares to other metrics helps users make informed health decisions. Our calorie integration and body fat comparisons offer comprehensive health insights.
        </p>

        <div className="space-y-6">
          {/* BMI vs Body Fat Percentage */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-heading-accent mb-4">BMI vs Body Fat Percentage</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Metric</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">What It Measures</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Accuracy</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Best For</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Limitations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium text-foreground">BMI</td>
                    <td className="border border-border p-3 text-muted-foreground">Weight relative to height</td>
                    <td className="border border-border p-3 text-muted-foreground">General population screening</td>
                    <td className="border border-border p-3 text-muted-foreground">Quick health assessment, population studies</td>
                    <td className="border border-border p-3 text-muted-foreground">Doesn't distinguish muscle from fat</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border border-border p-3 font-medium text-foreground">Body Fat %</td>
                    <td className="border border-border p-3 text-muted-foreground">Actual fat tissue percentage</td>
                    <td className="border border-border p-3 text-muted-foreground">More precise for body composition</td>
                    <td className="border border-border p-3 text-muted-foreground">Athletes, fitness tracking, detailed analysis</td>
                    <td className="border border-border p-3 text-muted-foreground">Requires specialized equipment or measurements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Key Takeaway:</strong> Healthcare providers use BMI for quick screening, but body fat percentage provides more accurate body composition data. For athletes or muscular individuals, body fat percentage is more reliable than BMI alone. Use our <a href="/calculator/body-fat-calculator" className="text-heading-accent hover:underline">body fat calculator</a> alongside this BMI calculator for comprehensive health assessment.
              </p>
            </div>
          </div>

          {/* BMI vs Waist Circumference */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-heading-accent mb-4">BMI vs Waist Circumference</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border text-sm">
                <thead>
                  <tr className="bg-card">
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Metric</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">What It Measures</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Health Risk Indicator</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Best For</th>
                    <th className="border border-border p-3 text-left font-semibold text-foreground">Combined Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium text-foreground">BMI</td>
                    <td className="border border-border p-3 text-muted-foreground">Overall body weight relative to height</td>
                    <td className="border border-border p-3 text-muted-foreground">General weight-related health risks</td>
                    <td className="border border-border p-3 text-muted-foreground">Population health screening</td>
                    <td className="border border-border p-3 text-muted-foreground">Use with waist circumference for comprehensive assessment</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="border border-border p-3 font-medium text-foreground">Waist Circumference</td>
                    <td className="border border-border p-3 text-muted-foreground">Abdominal fat accumulation</td>
                    <td className="border border-border p-3 text-muted-foreground">Cardiovascular and metabolic disease risk</td>
                    <td className="border border-border p-3 text-muted-foreground">Identifying visceral fat and metabolic syndrome</td>
                    <td className="border border-border p-3 text-muted-foreground">Complements BMI by showing fat distribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Key Takeaway:</strong> Medical professionals recommend using both BMI and waist circumference together. A normal BMI with high waist circumference (normal weight obesity) still indicates increased health risks. Healthcare providers use this combination for comprehensive cardiovascular risk assessment. Combine BMI results with <a href="/calculator/calorie-calculator" className="text-heading-accent hover:underline">calorie calculator</a> and <a href="/calculator/bmr-calculator" className="text-heading-accent hover:underline">BMR calculator</a> for complete health planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Health Calculators */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Related Health & Fitness Calculators
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Use these complementary calculators alongside our BMI calculator for comprehensive health assessment. Our calorie and body fat integration help users achieve their health goals. Healthcare providers recommend combining multiple metrics for accurate health evaluation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/calculator/body-fat-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block group">
            <h3 className="font-semibold text-heading-accent mb-2 group-hover:text-orange-600 transition-colors">Body Fat Calculator</h3>
            <p className="text-sm text-muted-foreground">Calculate body fat percentage using various methods. Healthcare providers use body fat measurements alongside BMI for comprehensive health assessments. Essential for athletes and fitness enthusiasts.</p>
          </a>
          <a href="/calculator/calorie-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block group">
            <h3 className="font-semibold text-heading-accent mb-2 group-hover:text-orange-600 transition-colors">Calorie Calculator</h3>
            <p className="text-sm text-muted-foreground">Determine daily calorie needs for weight management. Medical professionals use calorie calculations to support BMI-based health goals. Works perfectly with BMI results.</p>
          </a>
          <a href="/calculator/bmr-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block group">
            <h3 className="font-semibold text-heading-accent mb-2 group-hover:text-orange-600 transition-colors">BMR Calculator</h3>
            <p className="text-sm text-muted-foreground">Calculate your Basal Metabolic Rate. Healthcare providers use BMR alongside BMI to understand metabolic health and weight management needs. Complete your health assessment toolkit.</p>
          </a>
          <a href="/calculator/pace-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block">
            <h3 className="font-semibold text-heading-accent mb-2">Pace Calculator</h3>
            <p className="text-sm text-muted-foreground">Calculate running pace and fitness metrics. Useful for tracking exercise goals alongside BMI monitoring.</p>
          </a>
          <a href="/calculator/pregnancy-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block">
            <h3 className="font-semibold text-heading-accent mb-2">Pregnancy Calculator</h3>
            <p className="text-sm text-muted-foreground">Track pregnancy timeline and health. Healthcare providers use pregnancy-specific metrics alongside BMI for maternal health assessment.</p>
          </a>
          <a href="/calculator/age-calculator" className="p-4 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow block">
            <h3 className="font-semibold text-heading-accent mb-2">Age Calculator</h3>
            <p className="text-sm text-muted-foreground">Calculate age accurately. Age is an important factor healthcare providers consider when interpreting BMI results.</p>
          </a>
        </div>

        {/* You Might Also Like Section */}
        <div className="mt-6 p-4 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-semibold text-heading-accent mb-3">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="/finance-tools/investment-calculator" className="text-sm text-muted-foreground hover:text-heading-accent transition-colors">
              → Investment Calculator - Plan your financial future
            </a>
            <a href="/finance-tools/retirement-calculator" className="text-sm text-muted-foreground hover:text-heading-accent transition-colors">
              → Retirement Calculator - Plan for long-term health and wealth
            </a>
            <a href="/finance-tools/tip-calculator" className="text-sm text-muted-foreground hover:text-heading-accent transition-colors">
              → Tip Calculator - Calculate tips and service charges
            </a>
            <a href="/finance-tools/bill-splitter" className="text-sm text-muted-foreground hover:text-heading-accent transition-colors">
              → Bill Splitter - Split expenses with friends
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Frequently Asked Questions About BMI
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-heading-accent mb-2">What is a healthy BMI range according to WHO?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              The World Health Organization defines a healthy BMI range as 18.5 to 24.9. Healthcare providers use this range to assess weight-related health risks.
            </p>
            <p className="text-sm text-muted-foreground">
              However, BMI should be considered alongside other factors like muscle mass, age, and overall health status.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-heading-accent mb-2">Can BMI be misleading for athletes and muscular individuals?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Yes, BMI can be misleading for athletes or very muscular individuals. Muscle tissue weighs more than fat tissue, which can skew BMI calculations.
            </p>
            <p className="text-sm text-muted-foreground">
              Healthcare providers recommend additional measurements like body fat percentage for athletes. Medical professionals use body composition analysis for accurate health assessments.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-heading-accent mb-2">How often should healthcare providers check BMI?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For most people, checking BMI monthly is sufficient. Healthcare providers recommend focusing on long-term trends rather than daily fluctuations.
            </p>
            <p className="text-sm text-muted-foreground">
              Daily fluctuations can be affected by water retention and other factors. Medical professionals use regular BMI monitoring for weight management tracking.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-heading-accent mb-2">What should you do if your BMI indicates overweight or obesity?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Consult with a healthcare professional to develop a safe weight management plan. Medical professionals can assess your health risks and create personalized strategies.
            </p>
            <p className="text-sm text-muted-foreground">
              Focus on sustainable lifestyle changes including diet and exercise. The World Health Organization emphasizes gradual weight loss for long-term health benefits.
            </p>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-heading-accent mb-2">Is BMI Prime more accurate than regular BMI calculations?</h3>
            <p className="text-sm text-muted-foreground mb-2">
              BMI Prime provides a quick ratio comparison to the normal BMI upper limit (25 kg/m²). Healthcare providers use it to simplify weight status interpretation.
            </p>
            <p className="text-sm text-muted-foreground">
              Both BMI and BMI Prime are useful for different purposes. Medical professionals often use both metrics for comprehensive health assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Personalized Health Guidance */}
      {bmiResult && (
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-foreground">Your Personalized Plan</span>
          </div>
          <PersonalizedHealthGuidance
            bmi={bmiResult.bmi}
            category={bmiResult.category}
            riskLevel={bmiResult.riskLevel}
            age={bmiResult.age}
            gender={bmiResult.gender}
          />
        </div>
      )}
    </div>
  )
}
