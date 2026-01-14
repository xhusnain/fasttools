import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import BodyFatCalculator from "@/components/health/body-fat-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

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
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is Body Fat Percentage?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Your <strong>Body Fat Percentage</strong> is the total mass of fat divided by your total body mass, multiplied by 100. Body fat includes <em>essential body fat</em> and <em>storage body fat</em>. Unlike weight or BMI, body fat percentage is a better indicator of health and athletic performance because it distinguishes between lean muscle mass and fat mass.
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">Body Fat Categories (ACE Standards)</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            The American Council on Exercise (ACE) provides these standard ranges for body composition classification:
          </p>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Women</th>
                <th className="p-3 text-left">Men</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">Essential Fat</td>
                <td className="p-3">10-13%</td>
                <td className="p-3">2-5%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Athletes</td>
                <td className="p-3">14-20%</td>
                <td className="p-3">6-13%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Fitness</td>
                <td className="p-3">21-24%</td>
                <td className="p-3">14-17%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Average</td>
                <td className="p-3">25-31%</td>
                <td className="p-3">18-24%</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Obese</td>
                <td className="p-3 text-red-500">32%+</td>
                <td className="p-3 text-red-500">25%+</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-l-4 border-red-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-red-800 dark:text-red-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: Essential Fat vs. Storage Fat
          </h4>
          <p className="italic text-red-700 dark:text-red-300">
            "It's a myth that 'zero' body fat is the goal. <strong>Essential fat</strong> is required for life and reproductive functions. It protects internal organs and stores vitamins. Women have higher essential fat requirements (10-13%) than men (2-5%) primarily due to hormonal and reproductive needs. <strong>Storage fat</strong> is the accumulation of adipose tissue that serves as energy reserve."
          </p>
          <p className="text-sm font-semibold text-red-600 dark:text-red-400 mt-2">— FastTools Sports Science Team</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">Measurement Tips</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Neck:</strong> Measure below the larynx (Adam's apple). Keep the tape flat.</li>
            <li><strong>Waist (Men):</strong> Measure at the navel level.</li>
            <li><strong>Waist (Women):</strong> Measure at the narrowest point above the navel.</li>
            <li><strong>Hips (Women):</strong> Measure at the widest part of the buttocks.</li>
            <li><strong>Consistency:</strong> Measure at the same time of day, preferably morning before eating.</li>
          </ul>

        </section>
      </div>
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
