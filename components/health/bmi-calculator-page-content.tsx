"use client"

import { useState } from "react"
import { BMICalculator } from "@/components/health/bmi-calculator"
import { PersonalizedActionPlan } from "@/components/health/personalized-action-plan"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { Info, AlertTriangle, Scale, Target, Activity, Heart, Globe, Calculator, ArrowRight } from "lucide-react"

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
    <div className="space-y-12 pb-12">
      {/* SECTION 1: Above the Fold (Hero Section) */}
      <BMICalculator onResultChange={handleResultChange} />

      {/* SECTION 2: Instant Understanding */}
      <section id="what-your-bmi-means">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <Activity className="h-5 w-5 text-muted-foreground" />
          </span>
          What Your BMI Means
        </h2>

        {/* Visual BMI Scale */}
        <div className="mb-8 bg-card border border-border rounded-lg p-6">
          <div className="relative w-full h-12 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-blue-400 to-red-500 rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
              <span className="bg-black/40 px-2 py-1 rounded z-10">Underweight</span>
              <span className="bg-black/40 px-2 py-1 rounded z-10">Normal</span>
              <span className="bg-black/40 px-2 py-1 rounded z-10">Overweight</span>
              <span className="bg-black/40 px-2 py-1 rounded z-10">Obese</span>
            </div>

            {/* Dynamic Pointer */}
            {bmiResult && (
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.8)] z-20 transition-all duration-1000 ease-out"
                style={{
                  left: `${Math.min(Math.max((bmiResult.bmi - 10) / (40 - 10) * 100, 0), 100)}%`,
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-[10px] border-transparent border-t-white" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-[10px] border-transparent border-b-white" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-900">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1">Underweight</h4>
              <p className="text-xs text-muted-foreground font-medium mb-2">&lt; 18.5 BMI</p>
              <p className="text-sm text-muted-foreground leading-relaxed">May indicate malnutrition. Focus on nutrient-dense calorie intake.</p>
            </div>
            <div className="p-4 rounded-xl border border-green-100 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900">
              <h4 className="font-bold text-green-600 dark:text-green-400 mb-1">Normal Weight</h4>
              <p className="text-xs text-muted-foreground font-medium mb-2">18.5 - 24.9 BMI</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Lowest health risk. Focus on maintenance and balanced activity.</p>
            </div>
            <div className="p-4 rounded-xl border border-yellow-100 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-900">
              <h4 className="font-bold text-yellow-600 dark:text-yellow-400 mb-1">Overweight</h4>
              <p className="text-xs text-muted-foreground font-medium mb-2">25 - 29.9 BMI</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Increased risk of diabetes and heart issues. Focus on safe fat loss.</p>
            </div>
            <div className="p-4 rounded-xl border border-red-100 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900">
              <h4 className="font-bold text-red-600 dark:text-red-400 mb-1">Obese</h4>
              <p className="text-xs text-muted-foreground font-medium mb-2">30+ BMI</p>
              <p className="text-sm text-muted-foreground leading-relaxed">High medical risk. Professional guidance highly recommended.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Your Personalized Next Steps */}
      {bmiResult && (
        <PersonalizedActionPlan
          bmi={bmiResult.bmi}
          category={bmiResult.category}
          riskLevel={bmiResult.riskLevel}
        />
      )}

      {/* SECTION 4: Understanding BMI */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <Info className="h-5 w-5 text-muted-foreground" />
          </span>
          Understanding Body Mass Index (BMI)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h3 className="text-lg font-bold text-heading-accent">What is BMI?</h3>
            <p className="text-muted-foreground">
              Body Mass Index (BMI) is a screening tool used by healthcare providers to estimate body fatness using your height and weight. While it doesn't measure body fat directly, it is highly correlated with more direct measures of body fat and serves as a quick assessment of weight-related health risks.
            </p>

            <h3 className="text-lg font-bold text-heading-accent mt-6">How BMI is Calculated</h3>
            <div className="bg-muted p-4 rounded-xl space-y-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="text-center p-3 bg-card border border-border rounded-lg flex-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Metric Formula</div>
                  <code className="text-sm">weight (kg) / [height (m)]²</code>
                </div>
                <div className="text-center p-3 bg-card border border-border rounded-lg flex-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Imperial Formula</div>
                  <code className="text-sm">(weight (lbs) / [height (in)]²) × 703</code>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                Example: Person weighing 70kg at 1.75m. Calculation: 70 / (1.75)² = 22.9 BMI.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-heading-accent">BMI Categories & Risk Levels</h3>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted text-left">
                    <th className="p-3 font-semibold">Category</th>
                    <th className="p-3 font-semibold">BMI Range</th>
                    <th className="p-3 font-semibold text-right">Health Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 text-blue-600 font-medium">Underweight</td>
                    <td className="p-3 text-muted-foreground">&lt; 18.5</td>
                    <td className="p-3 text-right text-muted-foreground">Increased</td>
                  </tr>
                  <tr className="bg-green-50/30 dark:bg-green-900/10">
                    <td className="p-3 text-green-600 font-bold">Normal Weight</td>
                    <td className="p-3 text-muted-foreground">18.5 - 24.9</td>
                    <td className="p-3 text-right text-green-600 font-bold">Lowest</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-yellow-600 font-medium">Overweight</td>
                    <td className="p-3 text-muted-foreground">25 - 29.9</td>
                    <td className="p-3 text-right text-muted-foreground">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-600 font-medium">Obese Class I</td>
                    <td className="p-3 text-muted-foreground">30 - 34.9</td>
                    <td className="p-3 text-right text-muted-foreground">High</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-red-600 font-medium">Obese Class II</td>
                    <td className="p-3 text-muted-foreground">35 - 39.9</td>
                    <td className="p-3 text-right text-muted-foreground">Very High</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-red-800 dark:text-red-400 font-bold">Obese Class III</td>
                    <td className="p-3 text-muted-foreground">40+</td>
                    <td className="p-3 text-right text-red-800 dark:text-red-400 font-bold">Extremely High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Important Limitations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
          </span>
          When BMI May Not Be Accurate
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Activity className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Athletes & Bodybuilders</h4>
            <p className="text-sm text-muted-foreground">High muscle mass can result in an "overweight" BMI despite low body fat. Use body fat % instead.</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Heart className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Older Adults (65+)</h4>
            <p className="text-sm text-muted-foreground">Natural muscle loss can mask fat levels. A slightly higher BMI (25-27) may actually be protective.</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Scale className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Growing Children</h4>
            <p className="text-sm text-muted-foreground">Children's BMI must be interpreted using age-and-sex-specific percentiles, not adult charts.</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Info className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Pregnancy</h4>
            <p className="text-sm text-muted-foreground">BMI is not applicable during pregnancy. Use your pre-pregnancy weight as a health baseline instead.</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Globe className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Ethnic Variations</h4>
            <p className="text-sm text-muted-foreground">Asian and Pacific Islander populations have different body fat distribution and lower health thresholds.</p>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-card space-y-2">
            <div className="p-2 w-fit bg-primary/10 rounded-lg"><Target className="h-5 w-5 text-primary" /></div>
            <h4 className="font-bold text-foreground">Bone Density</h4>
            <p className="text-sm text-muted-foreground">BMI treats all body weight equally and doesn't account for differences in bone structure or density.</p>
          </div>
        </div>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
            "BMI is a screening tool, not a diagnostic test. Always consult healthcare professionals for personalized health assessments."
          </p>
        </div>
      </section>

      {/* SECTION 6: Ethnic-Specific Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <Globe className="h-5 w-5 text-muted-foreground" />
          </span>
          BMI Guidelines for Different Ethnic Groups
        </h2>
        <div className="p-6 bg-card border border-border rounded-xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-heading-accent">Asian BMI Thresholds (WHO Recommendations)</h3>
            <p className="text-sm text-muted-foreground">
              Asian populations often have a higher body fat percentage at lower BMI values. The WHO suggests lower thresholds for diabetes and cardiovascular risk.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="p-3 font-semibold">Category</th>
                  <th className="p-3 font-semibold">Standard WHO</th>
                  <th className="p-3 font-semibold">Asian-Specific</th>
                  <th className="p-3 font-semibold text-right">Risk Factor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Healthy Range</td>
                  <td className="p-3 text-muted-foreground">18.5 - 24.9</td>
                  <td className="p-3 text-green-600 font-medium">18.5 - 22.9</td>
                  <td className="p-3 text-right text-muted-foreground">Lowest Risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Overweight</td>
                  <td className="p-3 text-muted-foreground">25 - 29.9</td>
                  <td className="p-3 text-yellow-600 font-medium">23 - 24.9</td>
                  <td className="p-3 text-right text-muted-foreground">Diabetes Risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Obese</td>
                  <td className="p-3 text-muted-foreground">30+</td>
                  <td className="p-3 text-red-600 font-medium">25+</td>
                  <td className="p-3 text-right text-muted-foreground">High CV Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground italic">Source: World Health Organization Expert Consultation (2004)</p>
        </div>
      </section>

      {/* SECTION 7: Beyond BMI */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <span className="p-2 bg-card rounded-lg">
            <Calculator className="h-5 w-5 text-muted-foreground" />
          </span>
          Complete Your Health Assessment
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Column 1: Body Composition */}
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-primary border-b border-primary/20 pb-2">
              <Scale className="h-4 w-4" /> Body Composition
            </h4>
            <a href="/calculator/body-fat-calculator" className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition-all group">
              <h5 className="font-bold text-sm mb-1 group-hover:text-primary">Body Fat Calculator</h5>
              <p className="text-xs text-muted-foreground">Identify actual body fat levels vs muscle mass.</p>
            </a>
            <a href="/calculator/bmr-calculator" className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition-all group">
              <h5 className="font-bold text-sm mb-1 group-hover:text-primary">BMR Calculator</h5>
              <p className="text-xs text-muted-foreground">Find your Basal Metabolic Rate for calorie needs.</p>
            </a>
          </div>

          {/* Column 2: Nutrition & Weight */}
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-primary border-b border-primary/20 pb-2">
              <Activity className="h-4 w-4" /> Nutrition & Weight
            </h4>
            <a href="/calculator/calorie-calculator" className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition-all group">
              <h5 className="font-bold text-sm mb-1 group-hover:text-primary">Calorie Calculator</h5>
              <p className="text-xs text-muted-foreground">Determine precise daily needs for your goals.</p>
            </a>
            <a href="/calculator/ideal-weight-calculator" className="block p-4 rounded-xl border border-border bg-card hover:border-primary transition-all group">
              <h5 className="font-bold text-sm mb-1 group-hover:text-primary">Ideal Weight</h5>
              <p className="text-xs text-muted-foreground">Find your targets based on multiple methods.</p>
            </a>
          </div>

          {/* Column 3: Recommended Checks */}
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2 text-primary border-b border-primary/20 pb-2">
              <Heart className="h-4 w-4" /> Essential Screenings
            </h4>
            <div className="p-4 rounded-xl border border-border bg-muted/30">
              <ul className="text-xs text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">• Waist circumference measurement</li>
                <li className="flex items-center gap-2">• Fasting blood glucose test</li>
                <li className="flex items-center gap-2">• Annual physical examination</li>
                <li className="flex items-center gap-2">• Blood pressure & Lipid panel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
