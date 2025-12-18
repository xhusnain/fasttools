import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import CalorieCalculator from "@/components/health/calorie-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Calorie Calculator | Free Daily Calorie Needs Calculator",
  description:
    "Calculate your daily calorie needs with our advanced calculator. Get BMR, TDEE, weight management goals & personalized nutrition recommendations.",
  path: "/calculator/calorie-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Calorie Calculator", href: "/calculator/calorie-calculator" }
  ],
  schemaOptions: {
    name: "Calorie Calculator | Advanced Daily Calorie Needs Calculator",
    alternateName: "Professional Calorie Analysis Tool",
    applicationCategory: "HealthApplication",
    featureList: [
      "BMR Calculation with Multiple Equations",
      "TDEE Analysis for Different Activity Levels",
      "Weight Management Calorie Targets",
      "Zigzag Calorie Cycling Plans",
      "Food Energy Converter",
      "Personalized Nutrition Recommendations",
      "Meal Planning Guidance"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function CalorieCalculatorPage() {
  const toolContent = {
    toolName: "Calorie Calculator",
    overview: "Calculate your daily calorie needs with our advanced calorie calculator. Get BMR and TDEE analysis, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.",

    howToSteps: [
      "Enter your information: Age, gender, height, weight, and unit system.",
      "Select calculation method: Mifflin-St Jeor (recommended), Harris-Benedict, or Katch-McArdle.",
      "Choose activity level: From sedentary to extremely active to determine TDEE.",
      "Get comprehensive results: View BMR, TDEE, and calorie targets for weight loss or gain.",
      "Plan your nutrition: Use the insights to structure your meal plan and macros."
    ],

    features: [
      "Multiple Methods: Choose from Mifflin-St Jeor, Harris-Benedict, and Katch-McArdle equations.",
      "BMR & TDEE Analysis: Understand your baseline and total energy expenditure.",
      "Weight Goals: Specific calorie targets for maintenance, weight loss, and weight gain.",
      "Zigzag Cycling: Advanced plans to prevent metabolic adaptation.",
      "Activity Assessment: Accurate multipliers for different lifestyle levels.",
      "Personalized Tips: Nutrition guidance based on your specific goals.",
      "Macro Breakdown: Understand the balance of protein, carbs, and fats.",
      "Mobile Friendly: Track your needs on the go."
    ],

    useCases: [
      "Weight Loss: Determine the calorie deficit needed to lose weight safely.",
      "Muscle Gain: Calculate the surplus required for hypertrophy.",
      "Maintenance: Find the exact calories to stay at your current weight.",
      "Athletic Performance: Optimize fueling for training and competition.",
      "Meal Planning: Structure daily intake around your energy needs.",
      "Metabolic Health: Understand your body's energy requirements."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Calorie Calculation Methods</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Mifflin-St Jeor Equation:</strong> Developed in 1990, considered the most accurate for the general population.</li>
          <li><strong>Revised Harris-Benedict Equation:</strong> A classic formula, revised in 1984. Good alternative but slightly less accurate.</li>
          <li><strong>Katch-McArdle Formula:</strong> Best for lean individuals with known body fat percentage as it accounts for lean body mass.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Zigzag Calorie Cycling</h3>
        <p className="mb-4">
          Zigzag calorie cycling involves rotating between higher and lower calorie days. This technique helps prevent metabolic adaptation (plateaus) and provides psychological flexibility.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>High Days:</strong> +200-300 calories to boost metabolism and fuel workouts.</li>
          <li><strong>Low Days:</strong> -200-300 calories to create a larger deficit for fat loss.</li>
          <li><strong>Benefits:</strong> Maintains weight loss momentum and reduces diet fatigue.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding BMR vs. TDEE</h3>
        <p className="mb-4">
          <strong>BMR (Basal Metabolic Rate)</strong> is the calories you burn at complete rest (coma state). <strong>TDEE (Total Daily Energy Expenditure)</strong> is BMR plus calories burned from activity and digestion. TDEE is the number you should base your diet on.
        </p>
      </>
    ),

    proTip: "Don't eat back all your exercise calories. Fitness trackers often overestimate burns. A safe bet is to eat back only 50% of tracked exercise calories if you are trying to lose weight.",

    faqs: [
      {
        question: "Which equation should I use?",
        answer: "For most people, the Mifflin-St Jeor equation is the most accurate. If you are very lean and know your body fat percentage, Katch-McArdle is superior."
      },
      {
        question: "How accurate are these numbers?",
        answer: "They are estimates based on population averages. Your actual metabolism may vary by 10-15%. Use these numbers as a starting point and adjust based on your weight change over 2-3 weeks."
      },
      {
        question: "What is a safe calorie deficit?",
        answer: "A deficit of 500 calories per day typically results in 1 lb of weight loss per week. Avoid deficits larger than 1000 calories or eating below your BMR without medical supervision."
      },
      {
        question: "Should I count macros?",
        answer: "While calories determine weight change, macros (protein, fats, carbs) determine body composition and how you feel. Prioritizing protein is usually recommended for satiety and muscle retention."
      },
      {
        question: "What if I stop losing weight?",
        answer: "This is a plateau. It may be due to metabolic adaptation, water retention, or tracking errors. Try a diet break (eating at maintenance for a week) or zigzag calorie cycling to reset."
      },
      {
        question: "Does muscle burn more calories than fat?",
        answer: "Yes, muscle tissue is more metabolically active than fat tissue. Building muscle increases your BMR, allowing you to eat more calories while maintaining weight."
      },
      {
        question: "How do I calculate calories in homemade food?",
        answer: "Weigh raw ingredients and use a food database app. Sum the calories of all ingredients and divide by the number of servings."
      },
      {
        question: "What is 'Starvation Mode'?",
        answer: "It's a metabolic adaptation where the body slows down energy expenditure in response to severe calorie restriction. It's real but often exaggerated. Moderate deficits don't cause severe starvation mode."
      },
      {
        question: "Can I spot reduce fat?",
        answer: "No. You cannot target fat loss in specific areas (like belly fat) by diet or exercise alone. Fat loss occurs systematically across the body."
      },
      {
        question: "How often should I recalculate my calories?",
        answer: "Recalculate every 10-15 lbs of weight change, as your smaller body will require fewer calories to maintain."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Calorie Calculator - Advanced Daily Calorie Needs",
        description: "Calculate your daily calorie needs with our advanced calculator. Get BMR, TDEE, weight management goals & personalized nutrition recommendations.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Calorie Calculator", href: "/calculator/calorie-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CalorieCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Calorie Calculator - Daily Calorie Needs",
        description: "Calculate your daily calorie needs with our advanced calculator. Get BMR, TDEE, weight management goals & personalized nutrition recommendations.",
        path: "/calculator/calorie-calculator"
      }}
    />
  )
}