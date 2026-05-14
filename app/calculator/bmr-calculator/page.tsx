import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const BMRCalculator = dynamic(() => import("@/components/health/bmr-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const baseMetadata = createMetadata({
  title: "BMR Calculator — Basal Metabolic Rate, TDEE & Calorie Targets",
  description:
    "Free BMR calculator using Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Get your basal metabolic rate, TDEE for 5 activity levels, and calorie targets for weight loss, maintenance, or muscle gain. Private & instant.",
  path: "/calculator/bmr-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "BMR Calculator", href: "/calculator/bmr-calculator" }
  ],
  schemaOptions: {
    name: "BMR Calculator | Basal Metabolic Rate Calculator",
    alternateName: [
      "Basal Metabolic Rate Calculator",
      "Resting Metabolic Rate Calculator",
      "TDEE Calculator",
      "Calorie Burn Calculator",
      "Mifflin-St Jeor Calculator",
      "Harris-Benedict Calculator",
      "Katch-McArdle Calculator",
      "Daily Calorie Needs",
      "Maintenance Calorie Calculator",
      "Weight Loss Calorie Calculator",
      "Activity Multiplier Calculator",
      "RMR Estimator",
      "Energy Expenditure Calculator",
      "Macro Calorie Planner",
      "Fitness Calorie Tool",
    ],
    applicationCategory: "HealthApplication",
    featureList: [
      "BMR Calculation with Multiple Equations",
      "TDEE Analysis for Different Activity Levels",
      "Weight Management Calorie Targets",
      "Personalized Nutrition Recommendations",
      "Mifflin-St Jeor Equation",
      "Harris-Benedict Equation",
      "Katch-McArdle Formula"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  title: "BMR Calculator — Basal Metabolic Rate, TDEE & Calorie Targets",
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function BMRCalculatorPage() {
  const toolContent = {
    toolName: "BMR Calculator — Basal Metabolic Rate & TDEE Analysis",
    overview: "Calculate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) with our free advanced BMR calculator. Choose from three scientifically validated equations — Mifflin-St Jeor (most accurate for general population), Harris-Benedict (classic formula), and Katch-McArdle (best for athletes with known body fat %). Get precise calorie targets for weight loss, maintenance, or muscle gain across five activity levels from sedentary to extra active. Understand metabolic adaptation, build personalized nutrition plans, and track changes in your resting metabolic rate over time.",

    howToSteps: [
      "Enter Your Details: Input your age, gender, height (cm or inches), and weight (kg or lbs) for accurate metabolic rate estimation.",
      "Select BMR Equation: Choose Mifflin-St Jeor (recommended, ±10-15% accuracy), Harris-Benedict (classic), or Katch-McArdle (requires body fat %).",
      "Review Your BMR: See exactly how many calories your body burns at complete rest to maintain vital functions like breathing and circulation.",
      "Check TDEE by Activity Level: View total daily energy expenditure for sedentary (1.2x), lightly active (1.375x), moderately active (1.55x), very active (1.725x), and extra active (1.9x) lifestyles.",
      "Set Calorie Goals: Use calculated targets for fat loss (500 cal deficit), maintenance, or lean muscle gain (250-500 cal surplus)."
    ],

    features: [
      "Three BMR Equations: Mifflin-St Jeor (most accurate), Harris-Benedict (revised 1984), and Katch-McArdle (lean body mass based).",
      "TDEE Analysis: Calculate total daily energy expenditure across 5 activity multipliers (1.2x to 1.9x).",
      "Weight Management Targets: Specific calorie targets for fat loss (deficit), maintenance, and muscle gain (surplus).",
      "Activity Level Breakdown: Detailed calorie needs from sedentary desk job to physical labor and twice-daily training.",
      "Metabolic Adaptation Insights: Understand how starvation mode, muscle mass, age, and hormones affect your resting metabolism.",
      "Personalized Nutrition Tips: Evidence-based nutrition and lifestyle advice tailored to your BMR and TDEE results.",
      "Metric & Imperial Units: Full support for kg/cm and lbs/inches measurement systems.",
      "Mobile Responsive: Access your metabolic rate analysis on any device — phone, tablet, or desktop."
    ],

    useCases: [
      "Fat Loss Planning: Determine the exact calorie deficit (typically 500 kcal/day) needed to lose 1 lb of body fat per week safely.",
      "Muscle Hypertrophy: Calculate the calorie surplus (250-500 kcal above TDEE) combined with resistance training for lean mass gain.",
      "Maintenance Calories: Find your precise daily calorie intake to maintain current weight and body composition.",
      "Metabolic Health Tracking: Monitor BMR changes over time as you age, gain muscle, lose weight, or change activity levels.",
      "Meal Plan Design: Structure daily macronutrient intake (protein, carbs, fats) based on your specific TDEE and fitness goals.",
      "Athletic Performance: Adjust calorie and nutrient timing around training sessions based on your activity-adjusted TDEE."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is BMR?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong>BMR (Basal Metabolic Rate)</strong> is the minimum number of calories your body requires to function at rest. This includes vital processes such as breathing, blood circulation, cell production, and nutrient processing. Even if you spent the entire day in bed, your body would still burn these calories simply to stay alive.
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">Understanding BMR vs. TDEE</h3>
          <p className="mb-4 text-muted-foreground">
            While BMR reflects your resting energy needs, <strong>TDEE (Total Daily Energy Expenditure)</strong> accounts for your total daily burn, including exercise and daily movement. To find your TDEE, we multiply your BMR by an activity factor:
          </p>

          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Activity Level</th>
                <th className="p-3 text-left">Multiplier</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">Sedentary</td>
                <td className="p-3">1.2</td>
                <td className="p-3 text-muted-foreground">Minimal exercise or desk job</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Lightly Active</td>
                <td className="p-3">1.375</td>
                <td className="p-3 text-muted-foreground">Light exercise 1-3 days/week</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Moderately Active</td>
                <td className="p-3">1.55</td>
                <td className="p-3 text-muted-foreground">Moderate exercise 3-5 days/week</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Very Active</td>
                <td className="p-3">1.725</td>
                <td className="p-3 text-muted-foreground">Hard exercise 6-7 days/week</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Extra Active</td>
                <td className="p-3">1.9</td>
                <td className="p-3 text-muted-foreground">Physical job or 2x training/day</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-l-4 border-emerald-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: Metabolic Adaptation (Starvation Mode)
          </h4>
          <p className="italic text-emerald-700 dark:text-emerald-300">
            "When you consistently eat below your BMR, your body begins 'metabolic adaptation.' To preserve energy, it downregulates non-essential functions, making you feel cold, lethargic, and reducing your resting burn. This is why aggressive calorie cutting often leads to weight loss plateaus. The secret to sustainable fat loss is eating slightly below TDEE, but usually above or at your BMR."
          </p>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2">— FastTools Nutrition Team</p>
        </div>

        <section>
          <h3 className="font-semibold text-lg mb-2 mt-6 text-foreground">BMR Equations Explained</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Mifflin-St Jeor:</strong> The most accurate for the general population.</li>
            <li><strong>Harris-Benedict:</strong> A classic formula, good but can overestimate for some.</li>
            <li><strong>Katch-McArdle:</strong> Best for athletes and lean individuals (requires body fat %).</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Factors Affecting BMR</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Muscle Mass:</strong> Muscle burns more calories than fat, even at rest.</li>
            <li><strong>Age:</strong> Metabolism naturally slows down as you age.</li>
            <li><strong>Gender:</strong> Men typically have higher BMRs due to more muscle mass.</li>
            <li><strong>Genetics:</strong> Some people naturally have faster or slower metabolisms.</li>
            <li><strong>Hormones:</strong> Thyroid issues and other hormonal imbalances can affect BMR.</li>
          </ul>
        </section>
      </div>
    ),

    proTip: "Each pound of muscle burns approximately 6-7 calories per day at rest versus just 2 calories per pound of fat. Focus on progressive resistance training 3-4 times per week to build lean muscle mass — the single most effective way to permanently increase your BMR and eat more calories while maintaining or losing weight.",

    faqs: [
      {
        question: "Which BMR equation should I use for the most accurate results?",
        answer: "The Mifflin-St Jeor equation (developed in 1990) is considered the most accurate BMR formula for the general population, with accuracy within ±10-15%. If you are lean and know your body fat percentage, the Katch-McArdle formula is superior because it uses lean body mass rather than total body weight, providing more precise results for muscular individuals and athletes."
      },
      {
        question: "How accurate is this BMR calculator compared to lab testing?",
        answer: "Our BMR calculator provides estimates within ±10-15% of laboratory-measured values (indirect calorimetry). Population-based equations can't account for individual genetics, thyroid function, or exact muscle-to-fat ratio. Use the result as a starting point, then adjust by 100-200 calories based on your actual weight change over 2-3 weeks for personalized accuracy."
      },
      {
        question: "Is it safe to eat below my BMR for faster weight loss?",
        answer: "Eating below your BMR for extended periods is not recommended without medical supervision. Chronically under-eating triggers metabolic adaptation (starvation mode), causing your body to downregulate non-essential functions, reduce thyroid output, and conserve energy. This leads to muscle loss, fatigue, hormonal imbalances, and weight loss plateaus. Aim for a moderate 20-25% calorie deficit below TDEE while staying at or above BMR."
      },
      {
        question: "What is the difference between BMR and TDEE?",
        answer: "BMR (Basal Metabolic Rate) is the minimum calories your body burns at complete rest — just to keep you alive (breathing, circulation, cell production). TDEE (Total Daily Energy Expenditure) is your total daily calorie burn including BMR plus physical activity, thermic effect of food (~10%), and NEAT (non-exercise activity). TDEE = BMR x Activity Multiplier (1.2 to 1.9 depending on lifestyle)."
      },
      {
        question: "Why does BMR decrease with age and how can I prevent it?",
        answer: "BMR decreases with age primarily due to sarcopenia (age-related muscle loss of 3-8% per decade after 30), declining hormone levels (testosterone, estrogen, growth hormone), and reduced cellular metabolic activity. Counteract this with regular resistance training to preserve muscle mass, adequate protein intake (0.8-1g per pound of body weight), quality sleep (7-9 hours), and stress management."
      },
      {
        question: "How often should I recalculate my BMR and TDEE?",
        answer: "Recalculate your BMR every time you lose or gain 10+ pounds, change your activity level significantly, or every 2-3 months during active weight loss. A smaller body requires fewer calories to maintain, so your calorie targets need periodic adjustment to continue making progress toward your goals."
      },
      {
        question: "What is metabolic adaptation (starvation mode) and how do I avoid it?",
        answer: "Metabolic adaptation occurs when your body reduces energy expenditure in response to prolonged severe calorie restriction. Symptoms include feeling cold, lethargic, weak, and experiencing weight loss plateaus. Avoid it by maintaining a moderate calorie deficit (20-25% below TDEE), including diet breaks (eating at maintenance for 1-2 weeks periodically), preserving muscle mass through resistance training, and never eating below your BMR long-term."
      }
    ],

    relatedTools: [
      { name: "Calorie Calculator (daily intake)", href: "/calculator/calorie-calculator" },
      { name: "TDEE Macro Calculator", href: "/calculator/tdee-macro-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "Biological Age Calculator", href: "/calculator/biological-age-calculator" },
      { name: "Pace Calculator (runners)", href: "/calculator/pace-calculator" },
      { name: "Cortisol Peak Calculator", href: "/calculator/cortisol-peak-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "BMR Calculator — Basal Metabolic Rate & TDEE Analysis",
        description: "Calculate your BMR using Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Get TDEE for 5 activity levels, calorie targets for weight loss, maintenance, or muscle gain, and personalized metabolic insights. Free and private.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "BMR Calculator", href: "/calculator/bmr-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BMRCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "BMR Calculator — Basal Metabolic Rate, TDEE & Calorie Targets",
        description:
          "Free BMR calculator using Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Get your basal metabolic rate, TDEE for 5 activity levels, and calorie targets for weight loss, maintenance, or muscle gain. Private & instant.",
        path: "/calculator/bmr-calculator"
      }}
    />
  )
}
