"use client"

import { useState } from "react"
import { BMICalculator } from "@/components/bmi-calculator"
import { PersonalizedHealthGuidance } from "@/components/personalized-health-guidance"
import { AdSpace } from "@/components/ad-space"

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
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-8">
      <div className="space-y-8">
        <BMICalculator onResultChange={handleResultChange} />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-32" />
        </div>

        {/* Content Ad Between Sections */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-32" />
        </div>

        {/* How to Use BMI Calculator */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            How to Use Our BMI Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Step-by-Step Guide</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Select Unit System</h4>
                    <p className="text-sm text-muted-foreground">Choose between Metric (kg/cm) or Imperial (lbs/in) units</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Enter Your Measurements</h4>
                    <p className="text-sm text-muted-foreground">Input your weight and height accurately</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Add Optional Details</h4>
                    <p className="text-sm text-muted-foreground">Include age and gender for more personalized results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Get Your Results</h4>
                    <p className="text-sm text-muted-foreground">View your BMI, category, and personalized recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Pro Tips for Accurate Results</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200">Measure at the same time</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Weigh yourself at the same time of day for consistency</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-800 dark:text-green-200">Use accurate measurements</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Ensure your scale and measuring tools are calibrated</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-medium text-purple-800 dark:text-purple-200">Consider body composition</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">BMI doesn't distinguish between muscle and fat mass</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Ad Between Sections */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-32" />
        </div>

        {/* BMI Categories and Health Implications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            BMI Categories & Health Implications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Underweight (&lt;18.5)</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">Health Risks:</p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li>• Nutritional deficiencies</li>
                <li>• Weakened immune system</li>
                <li>• Osteoporosis risk</li>
                <li>• Fertility issues</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Normal (18.5-24.9)</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">Health Benefits:</p>
              <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                <li>• Lower disease risk</li>
                <li>• Better mobility</li>
                <li>• Improved energy</li>
                <li>• Longevity</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Overweight (25-29.9)</h3>
              <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">Health Risks:</p>
              <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                <li>• Type 2 diabetes</li>
                <li>• High blood pressure</li>
                <li>• Heart disease</li>
                <li>• Joint problems</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Obese Class I (30-34.9)</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">Health Risks:</p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li>• Severe health complications</li>
                <li>• Sleep apnea</li>
                <li>• Cancer risk</li>
                <li>• Mental health issues</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Obese Class II (35-39.9)</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">Health Risks:</p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li>• Very high health risks</li>
                <li>• Limited mobility</li>
                <li>• Quality of life impact</li>
                <li>• Medical intervention needed</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Obese Class III (&gt;40)</h3>
              <p className="text-sm text-red-700 dark:text-red-300 mb-2">Health Risks:</p>
              <ul className="text-xs text-red-600 dark:text-red-400 space-y-1">
                <li>• Extreme health risks</li>
                <li>• Life-threatening conditions</li>
                <li>• Immediate medical care</li>
                <li>• Specialized treatment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Ad Between Sections */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-32" />
        </div>

        {/* Advanced BMI Metrics Explained */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            Advanced BMI Metrics Explained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">BMI Prime</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                BMI Prime is the ratio of your BMI to the upper limit of normal BMI (25). It provides a quick assessment of how much your BMI differs from the normal range.
              </p>
              <div className="space-y-2 text-xs text-blue-600 dark:text-blue-400">
                <div>• &lt;0.74: Underweight</div>
                <div>• 0.74-1.0: Normal weight</div>
                <div>• 1.0-1.2: Overweight</div>
                <div>• &gt;1.2: Obese</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">Ponderal Index</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                The Ponderal Index uses height cubed instead of squared, making it more reliable for very tall or short individuals where BMI may be misleading.
              </p>
              <div className="space-y-2 text-xs text-green-600 dark:text-green-400">
                <div>• More accurate for extreme heights</div>
                <div>• Better for body composition analysis</div>
                <div>• Useful for athletes and tall individuals</div>
                <div>• Normal range: 11-14 kg/m³</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Ad Before FAQ */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-32" />
        </div>

        {/* Related Health Calculators */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
              <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Related Health Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Body Fat Calculator</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">Calculate body fat percentage using various methods</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Calorie Calculator</h3>
              <p className="text-sm text-green-700 dark:text-green-300">Determine daily calorie needs for weight management</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Ideal Weight Calculator</h3>
              <p className="text-sm text-purple-700 dark:text-purple-300">Find your ideal weight based on height and frame</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">BMR Calculator</h3>
              <p className="text-sm text-orange-700 dark:text-orange-300">Calculate your Basal Metabolic Rate</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Waist-to-Hip Ratio</h3>
              <p className="text-sm text-pink-700 dark:text-pink-300">Assess body fat distribution and health risks</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Macro Calculator</h3>
              <p className="text-sm text-cyan-700 dark:text-cyan-300">Calculate macronutrient needs for your goals</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What is a healthy BMI range?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                A healthy BMI typically falls between 18.5 and 24.9. However, BMI should be considered alongside other factors like muscle mass, age, and overall health.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Can BMI be misleading for athletes?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, BMI can be misleading for athletes or very muscular individuals because muscle weighs more than fat. Consider additional measurements like body fat percentage.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">How often should I check my BMI?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For most people, checking BMI monthly is sufficient. Focus more on long-term trends rather than daily fluctuations, which can be affected by water retention and other factors.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What should I do if my BMI is in the overweight or obese range?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Consult with a healthcare professional to develop a safe and effective weight management plan. Focus on sustainable lifestyle changes including diet and exercise.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Is BMI Prime more accurate than regular BMI?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                BMI Prime provides a quick ratio comparison to the normal BMI upper limit (25), making it easier to understand how far you are from the normal range. Both metrics are useful for different purposes.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Right Sidebar - Personalized Health Guidance */}
      <div className="space-y-6">
        {/* Sticky Sidebar Container */}
        <div className="sticky top-4 space-y-6">
          {/* Top Sidebar Ad */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
            </div>
            <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
          </div>

          {/* Personalized Health Guidance */}
          {bmiResult && (
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Your Personalized Plan</span>
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

          {/* Middle Sidebar Ad */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Recommended</span>
            </div>
            <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
          </div>

          {/* Bottom Sidebar Ad */}
          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Featured</span>
            </div>
            <AdSpace slot="sidebar" className="h-60 rounded-xl overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}
