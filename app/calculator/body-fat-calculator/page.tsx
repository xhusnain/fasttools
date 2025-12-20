import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import BodyFatCalculator from "@/components/health/body-fat-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Body Fat Calculator | Free Body Fat Percentage Calculator",
  description:
    "Calculate your body fat percentage with advanced calculator. Uses U.S. Navy method & BMI method for accurate results with health recommendations.",
  path: "/calculator/body-fat-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
  ],
  schemaOptions: {
    name: "Body Fat Calculator | Advanced Body Fat Percentage Calculator",
    alternateName: "Professional Body Composition Analysis Tool",
    applicationCategory: "HealthApplication",
    featureList: [
      "U.S. Navy Method Calculation",
      "BMI Method Calculation",
      "Body Fat Percentage Estimation",
      "Fat Mass and Lean Mass Analysis",
      "Ideal Body Fat Recommendations",
      "Body Fat Categories and Ranges",
      "Health Risk Assessment"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function BodyFatCalculatorPage() {
  const toolContent = {
    toolName: "Body Fat Calculator",
    overview: "Calculate your body fat percentage with our advanced body fat calculator. Get accurate body composition analysis, fat mass and lean mass, ideal body fat recommendations, and personalized health insights for optimal fitness and health.",

    howToSteps: [
      "Enter your information: Age, gender, height, and weight.",
      "Take measurements: Measure neck, waist, and hip (for women) circumference.",
      "Select method: Choose U.S. Navy method (recommended) or BMI method.",
      "Get results: View your body fat percentage, fat mass, and lean mass.",
      "Review recommendations: See your body fat category and health insights."
    ],

    features: [
      "Multiple Methods: U.S. Navy method (most accurate) and BMI method.",
      "Body Composition: Detailed breakdown of fat mass vs. lean muscle mass.",
      "Health Assessment: Categorizes your body fat level (e.g., Athletic, Fitness, Average).",
      "Personalized Tips: Recommendations based on your specific results.",
      "Gender Specific: Tailored calculations for men and women.",
      "Metric & Imperial: Support for cm/kg and in/lbs.",
      "Visual Charts: Easy-to-understand progress tracking.",
      "Mobile Friendly: Check your stats anywhere."
    ],

    useCases: [
      "Fitness Tracking: Monitor changes in body composition, not just weight.",
      "Weight Loss: Ensure you are losing fat, not muscle.",
      "Muscle Building: Track lean mass gains during bulking phases.",
      "Health Monitoring: Assess risk factors associated with high or low body fat.",
      "Athletic Performance: Optimize body composition for your sport.",
      "Medical Assessment: Screen for obesity-related health risks."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Body Fat Categories (ACE Standards)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse mb-6">
            <thead>
              <tr className="border-b">
                <th className="py-2">Description</th>
                <th className="py-2">Women</th>
                <th className="py-2">Men</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Essential Fat</td>
                <td className="py-2">10-13%</td>
                <td className="py-2">2-5%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Athletes</td>
                <td className="py-2">14-20%</td>
                <td className="py-2">6-13%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Fitness</td>
                <td className="py-2">21-24%</td>
                <td className="py-2">14-17%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Average</td>
                <td className="py-2">25-31%</td>
                <td className="py-2">18-24%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Obese</td>
                <td className="py-2">32%+</td>
                <td className="py-2">25%+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Measurement Tips</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Neck:</strong> Measure below the larynx (Adam's apple). Keep the tape flat.</li>
          <li><strong>Waist (Men):</strong> Measure at the navel level.</li>
          <li><strong>Waist (Women):</strong> Measure at the narrowest point above the navel.</li>
          <li><strong>Hips (Women):</strong> Measure at the widest part of the buttocks.</li>
          <li><strong>Consistency:</strong> Measure at the same time of day, preferably morning before eating.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Why Body Fat Percentage Matters</h3>
        <p className="mb-4">
          Body weight alone doesn't tell the whole story. Two people can weigh the same but have vastly different body compositions. A lower body fat percentage generally indicates better metabolic health, while excess body fat (especially visceral fat) is linked to higher risks of heart disease and diabetes.
        </p>
      </>
    ),

    proTip: "Hydration levels can affect measurements. For the most consistent results, measure yourself first thing in the morning after using the restroom but before eating or drinking.",

    faqs: [
      {
        question: "How accurate is the U.S. Navy Method?",
        answer: "It is widely considered one of the most accurate ways to estimate body fat without specialized equipment, typically within 3-4% of DEXA scan results."
      },
      {
        question: "What is a healthy body fat percentage?",
        answer: "For men, 14-24% is generally considered healthy. For women, 21-31% is considered healthy. Athletes often have lower percentages."
      },
      {
        question: "Can I spot reduce fat?",
        answer: "No. Fat loss occurs systemically. You cannot target specific areas like the belly or thighs for fat loss through exercise alone."
      },
      {
        question: "Why is my body fat percentage higher than I expected?",
        answer: "Many people underestimate their body fat. 'Normal' weight obesity (skinny fat) is common, where weight is normal but muscle mass is low and fat is high."
      },
      {
        question: "How often should I measure?",
        answer: "Every 2-4 weeks. Body composition changes slowly, and daily measurements can be misleading due to water weight fluctuations."
      },
      {
        question: "What is the difference between fat mass and lean mass?",
        answer: "Fat mass is the total weight of fat in your body. Lean mass is everything else: muscle, bone, water, organs, etc."
      },
      {
        question: "Does muscle weigh more than fat?",
        answer: "A pound is a pound. However, muscle is much denser than fat, so it takes up less space. This is why you can look leaner without losing weight if you build muscle."
      },
      {
        question: "Is BMI or Body Fat Percentage better?",
        answer: "Body Fat Percentage is generally better because it distinguishes between muscle and fat. BMI can misclassify muscular individuals as overweight."
      },
      {
        question: "What is visceral fat?",
        answer: "Visceral fat is stored around your internal organs. It is more dangerous than subcutaneous fat (under the skin) and is linked to metabolic diseases."
      },
      {
        question: "How can I lower my body fat?",
        answer: "A combination of a caloric deficit (eating fewer calories than you burn) and resistance training (to preserve muscle) is the most effective method."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Body Fat Calculator - Advanced Body Composition Analysis",
        description: "Calculate your body fat percentage with our advanced body fat calculator. Get accurate body composition analysis, fat mass and lean mass, ideal body fat recommendations, and personalized health insights.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BodyFatCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Body Fat Calculator - Estimate Body Fat %",
        description: "Calculate your body fat percentage with advanced calculator. Uses U.S. Navy method & BMI method for accurate results with health recommendations.",
        path: "/calculator/body-fat-calculator"
      }}
    />
  )
}
