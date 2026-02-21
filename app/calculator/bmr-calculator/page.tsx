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
  title: "BMR Calculator | Free Basal Metabolic Rate Calculator",
  description:
    "Calculate your Basal Metabolic Rate (BMR), TDEE estimate, and calorie targets for weight loss, maintenance, or gain.",
  path: "/calculator/bmr-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "BMR Calculator", href: "/calculator/bmr-calculator" }
  ],
  schemaOptions: {
    name: "BMR Calculator | Basal Metabolic Rate Calculator",
    alternateName: "Professional Metabolic Analysis Tool",
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
  title: "BMR Calculator | Free Basal Metabolic Rate Calculator",
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function BMRCalculatorPage() {
  const toolContent = {
    toolName: "BMR Calculator",
    overview: "Calculate your Basal Metabolic Rate (BMR) with our advanced calculator. Get accurate calorie needs, TDEE analysis, weight management goals, and personalized nutrition recommendations for optimal health and fitness.",

    howToSteps: [
      "Enter your details: Age, gender, height, and weight.",
      "Select equation: Mifflin-St Jeor (recommended), Harris-Benedict, or Katch-McArdle.",
      "Review BMR: See how many calories your body burns at rest.",
      "Check TDEE: Understand your total daily energy expenditure based on activity.",
      "Set goals: Use the calorie targets for weight loss, maintenance, or muscle gain."
    ],

    features: [
      "Multiple Equations: Choose the formula that best fits your body type.",
      "TDEE Analysis: Calculate total energy needs based on activity level.",
      "Weight Goals: Specific calorie targets for losing, maintaining, or gaining weight.",
      "Activity Levels: Detailed breakdown from sedentary to extra active.",
      "Metabolic Insights: Understand the factors affecting your metabolism.",
      "Personalized Tips: Nutrition and lifestyle advice based on your results.",
      "Metric & Imperial: Support for all measurement systems.",
      "Mobile Friendly: Access your metabolic data anywhere."
    ],

    useCases: [
      "Weight Loss: Determine the calorie deficit needed to lose fat.",
      "Muscle Building: Calculate the surplus required for hypertrophy.",
      "Maintenance: Find your exact maintenance calories.",
      "Health Monitoring: Track changes in your metabolic rate over time.",
      "Meal Planning: Base your diet on your specific energy needs.",
      "Fitness Programming: Adjust calorie intake based on activity level."
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

    proTip: "To increase your BMR, focus on strength training. Building muscle is the most effective way to permanently boost your resting metabolic rate, allowing you to eat more calories while maintaining your weight.",

    faqs: [
      {
        question: "Which BMR equation is best?",
        answer: "For most people, the Mifflin-St Jeor equation is considered the most accurate. If you are very lean and know your body fat percentage, Katch-McArdle is superior."
      },
      {
        question: "How accurate is this calculator?",
        answer: "It provides an estimate based on population averages. Your actual BMR may vary by 10-15%. Use it as a starting point and adjust based on real-world results."
      },
      {
        question: "Can I eat below my BMR to lose weight faster?",
        answer: "It is generally not recommended to eat below your BMR for extended periods. This can slow down your metabolism, cause muscle loss, and lead to nutrient deficiencies."
      },
      {
        question: "Does exercise increase BMR?",
        answer: "Exercise burns calories (increasing TDEE), but only strength training that builds muscle will significantly increase your BMR (resting burn) long-term."
      },
      {
        question: "Why does BMR decrease with age?",
        answer: "As we age, we tend to lose muscle mass and hormonal activity decreases, both of which contribute to a slower metabolic rate."
      },
      {
        question: "How often should I recalculate my BMR?",
        answer: "Recalculate every time you lose or gain significant weight (e.g., 10 lbs), as a smaller body requires fewer calories to maintain."
      },
      {
        question: "What is 'Starvation Mode'?",
        answer: "It's a metabolic adaptation where the body slows down energy expenditure to preserve energy during severe calorie restriction. Moderate deficits don't typically cause this."
      },
      {
        question: "Do men have higher BMRs than women?",
        answer: "Generally, yes. Men tend to have more muscle mass and less body fat than women of the same weight, leading to a higher metabolic rate."
      },
      {
        question: "Does drinking water boost BMR?",
        answer: "Drinking cold water can temporarily boost metabolism slightly as the body works to warm it up, but the effect is minimal for overall weight loss."
      },
      {
        question: "How do I use BMR for weight gain?",
        answer: "To gain weight (muscle), you need to eat in a surplus. Aim for 250-500 calories above your TDEE combined with resistance training."
      }
    ],

    relatedTools: [
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "BMR Calculator - Advanced Basal Metabolic Rate Analysis",
        description: "Calculate your BMR (Basal Metabolic Rate) with our advanced calculator. Get accurate calorie needs, TDEE analysis, weight management goals, and personalized nutrition recommendations.",
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
        title: "BMR Calculator - Calculate Metabolic Rate",
        description:
          "Calculate your Basal Metabolic Rate (BMR), TDEE estimate, and calorie targets for weight loss, maintenance, or gain.",
        path: "/calculator/bmr-calculator"
      }}
    />
  )
}
