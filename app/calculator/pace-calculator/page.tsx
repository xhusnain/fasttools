import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import PaceCalculator from "@/components/calculators/pace-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Pace Calculator - Running Speed & Pace",
  description:
    "Calculate running pace, training zones, heart rate zones, race predictions & VO2 Max. Perfect for runners, coaches & athletes.",
  path: "/calculator/pace-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pace Calculator", href: "/calculator/pace-calculator" }
  ],
  schemaOptions: {
    name: "Pace Calculator | Advanced Running Pace Calculator",
    alternateName: "Professional Running Tool with Training Zones",
    applicationCategory: "SportsApplication",
    featureList: [
      "Basic Pace Calculation",
      "Multipoint Pace Analysis",
      "Pace Conversion",
      "Finish Time Prediction",
      "Heart Rate Zone Analysis",
      "Training Zone Recommendations",
      "VO2 Max Estimation",
      "Race Time Predictions"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PaceCalculatorPage() {
  const toolContent = {
    toolName: "Pace Calculator",
    overview: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and serious athletes looking to optimize their performance.",

    howToSteps: [
      "Enter your time: Input hours, minutes, and seconds.",
      "Enter your distance: Choose from common race distances or enter a custom one.",
      "Calculate Pace: Instantly see your pace per mile and per kilometer.",
      "Analyze Splits: Use the multipoint tool to track pace variations.",
      "Get Training Zones: View your heart rate zones and training intensities."
    ],

    features: [
      "Pace Calculation: Accurate splits for any distance.",
      "Training Zones: Heart rate based zones for optimal training.",
      "VO2 Max Estimate: Assess your cardiovascular fitness.",
      "Race Predictor: Estimate finish times for 5K, 10K, Half, and Full Marathon.",
      "Multipoint Analysis: Track pace across different segments.",
      "Unit Conversion: Switch seamlessly between miles and kilometers.",
      "Performance Metrics: Advanced insights for serious athletes.",
      "Mobile Friendly: Check your pace on the go."
    ],

    useCases: [
      "Race Planning: Determine the pace needed to hit your goal time.",
      "Training: Set precise intensity zones for different workouts.",
      "Performance Analysis: Track improvements in speed and fitness.",
      "Coaching: Design personalized training plans for athletes.",
      "Marathon Prep: Calculate long run paces and race day strategy.",
      "Fitness Tracking: Monitor VO2 Max and heart rate trends."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is Running Pace?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong>Running Pace</strong> is the time it takes to cover a specific distance, typically measured in minutes per mile or minutes per kilometer. Unlike speed (miles per hour), pace helps runners regulate their effort during training and races to ensure they don't start too fast and "bonk" before the finish line.
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">Heart Rate Training Zones</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Zone 1 (Recovery):</strong> 50-60% Max HR. Easy effort, promotes recovery and blood flow.</li>
            <li><strong>Zone 2 (Aerobic Base):</strong> 60-70% Max HR. Builds endurance and burns fat. The foundation of training.</li>
            <li><strong>Zone 3 (Aerobic Threshold):</strong> 70-80% Max HR. Moderate effort, improves aerobic capacity.</li>
            <li><strong>Zone 4 (Lactate Threshold):</strong> 80-90% Max HR. Hard effort, raises the lactate threshold for speed.</li>
            <li><strong>Zone 5 (VO2 Max):</strong> 90-100% Max HR. Maximum effort, increases top-end speed and power.</li>
          </ul>
        </section>

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: Understanding Cardiac Drift
          </h4>
          <p className="italic text-blue-700 dark:text-blue-300">
            "Ever wonder why your heart rate keeps rising even when you maintain the same pace? This is called <strong>Cardiac Drift</strong>. As you run, your body temperature rises and you lose fluids via sweat. To cool you down, blood is diverted away from working muscles to the skin. This reduces stroke volume (amount of blood per beat), so your heart must beat faster to maintain oxygen delivery. In hot conditions, it's often better to train by <em>Perceived Effort</em> rather than just pace."
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Athletic Science Team</p>
        </div>

        <section>
          <h3 className="font-semibold text-xl mb-4 text-foreground">Race Pace & Time Reference</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Use this cheat sheet to quickly find your target race times based on your current training pace:
          </p>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Pace / Mile</th>
                <th className="p-3 text-left">Pace / Km</th>
                <th className="p-3 text-left">5K Time</th>
                <th className="p-3 text-left">Half Marathon</th>
                <th className="p-3 text-left">Full Marathon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">6:00 min</td>
                <td className="p-3">3:44 min</td>
                <td className="p-3">18:38</td>
                <td className="p-3">1:18:36</td>
                <td className="p-3">2:37:19</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">7:00 min</td>
                <td className="p-3">4:21 min</td>
                <td className="p-3">21:45</td>
                <td className="p-3">1:31:42</td>
                <td className="p-3">3:03:32</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">8:00 min</td>
                <td className="p-3">4:58 min</td>
                <td className="p-3">24:51</td>
                <td className="p-3">1:44:48</td>
                <td className="p-3">3:29:45</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">9:00 min</td>
                <td className="p-3">5:36 min</td>
                <td className="p-3">27:58</td>
                <td className="p-3">1:57:54</td>
                <td className="p-3">3:55:58</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">10:00 min</td>
                <td className="p-3">6:13 min</td>
                <td className="p-3">31:04</td>
                <td className="p-3">2:11:00</td>
                <td className="p-3">4:22:11</td>
              </tr>
            </tbody>
          </GTable>
        </section>
      </div>
    ),

    proTip: "Most runners run their easy days too hard. Keep your easy runs in Zone 2 (conversational pace) to build a massive aerobic base without overtraining. Save the hard efforts for specific workout days.",

    faqs: [
      {
        question: "How do I calculate my pace?",
        answer: "Divide your total time by the distance. For example, running 3 miles in 30 minutes is 30 / 3 = 10 minutes per mile."
      },
      {
        question: "What is a good running pace?",
        answer: "It varies widely. A beginner might run 10-12 minutes per mile, while an elite runner might run 5-6 minutes per mile. Focus on your own improvement."
      },
      {
        question: "How accurate are race predictors?",
        answer: "They are estimates based on the Riegel formula. They assume you have done the appropriate training for the longer distance. They are generally accurate within a few minutes."
      },
      {
        question: "What is 'Negative Splitting'?",
        answer: "Running the second half of a race faster than the first half. This is often the most efficient way to run a personal best."
      },
      {
        question: "How do I find my Max Heart Rate?",
        answer: "The formula 220 - Age is a rough estimate. A field test (running hard up a hill) or a lab test provides more accurate results."
      },
      {
        question: "Why is my GPS watch pace different?",
        answer: "GPS watches can have small errors due to signal interference. They also measure the total distance you ran, which might be longer than the official race course if you didn't run the tangents."
      },
      {
        question: "Should I train by pace or heart rate?",
        answer: "Heart rate is often better for easy runs and recovery, as it accounts for heat, stress, and fatigue. Pace is better for speed workouts and race specific training."
      },
      {
        question: "What is Lactate Threshold?",
        answer: "The intensity at which lactate begins to accumulate in the blood faster than it can be removed. Training at this pace improves your ability to sustain speed."
      },
      {
        question: "How does heat affect pace?",
        answer: "Heat increases cardiac drift, meaning your heart rate rises for the same pace. You should slow down in hot weather to maintain the same effort level."
      },
      {
        question: "What is the 80/20 rule?",
        answer: "A training philosophy where 80% of your running is done at low intensity (Zone 1-2) and 20% at high intensity (Zone 4-5). This is proven to maximize performance and minimize injury."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Pace Calculator - Advanced Running Pace & Zones",
        description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and serious athletes.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pace Calculator", href: "/calculator/pace-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PaceCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Pace Calculator | Free Advanced Running Pace Calculator",
        description: "Calculate running pace, training zones, heart rate zones, race predictions & VO2 Max. Perfect for runners, coaches & athletes.",
        path: "/calculator/pace-calculator"
      }}
    />
  )
}
