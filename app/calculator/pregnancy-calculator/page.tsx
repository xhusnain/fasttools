import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import PregnancyCalculator from "@/components/health/pregnancy-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Pregnancy Calculator - Track Your Due Date",
  description:
    "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, and trimester guidance.",
  path: "/calculator/pregnancy-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
  ],
  schemaOptions: {
    name: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool",
    alternateName: "Advanced Pregnancy Calculator with Comprehensive Tracking",
    applicationCategory: "HealthApplication",
    featureList: [
      "Due Date Calculation",
      "Gestational Age Tracking",
      "Weight Gain Recommendations",
      "Trimester Guidance",
      "Pregnancy Progress Tracking",
      "Symptom Monitoring",
      "Nutrition Recommendations"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PregnancyCalculatorPage() {
  const toolContent = {
    toolName: "Pregnancy Calculator",
    overview: "Use our pregnancy tracking tool to monitor your journey. Receive estimated delivery dates, track how far along you are, get customized weight management advice, and access trimester-by-trimester support tailored to your needs.",

    howToSteps: [
      "Pick Your Input Method: Choose from due date, last period, ultrasound date, conception date, or IVF transfer.",
      "Add Your Details: Enter the relevant dates and your pre-pregnancy height/weight.",
      "Review Your Results: See your estimated due date, current week, and trimester.",
      "Check Recommendations: View personalized weight gain advice and health tips.",
      "Monitor Progress: Return weekly to track baby's growth and your milestones."
    ],

    features: [
      "Multiple Calculation Methods: Support for LMP, Due Date, Ultrasound, Conception, and IVF.",
      "Week-by-Week Tracking: Detailed updates on baby's size and development.",
      "Weight Management: Personalized weight gain ranges based on BMI.",
      "Trimester Guides: Specific advice for First, Second, and Third trimesters.",
      "Symptom Tracker: Information on common symptoms for your current stage.",
      "Milestone Timeline: Key dates for tests, scans, and baby's development.",
      "Mobile Friendly: Track your pregnancy anywhere, anytime."
    ],

    useCases: [
      "Due Date Estimation: Find out when your baby is likely to arrive.",
      "Progress Monitoring: Know exactly how many weeks and days along you are.",
      "Health Tracking: Ensure your weight gain is within healthy ranges.",
      "Planning: Schedule doctor visits and prepare for upcoming milestones.",
      "Education: Learn about fetal development and maternal changes.",
      "IVF Tracking: Specialized calculations for assisted reproduction."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is a Pregnancy Calculator?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            A <strong>Pregnancy Calculator</strong> estimate important dates in your pregnancy journey, such as your due date, current week of gestation, and milestone dates for scans and tests. Most tools use the <em>Naegele's Rule</em>, which adds nine months and seven days to the first day of your last menstrual period (LMP).
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">Weight Gain Guidelines (IOM)</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Healthy weight gain is crucial for both mother and baby. The Institute of Medicine (IOM) recommends the following ranges based on your pre-pregnancy BMI:
          </p>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Pre-Pregnancy BMI</th>
                <th className="p-3 text-left">Classification</th>
                <th className="p-3 text-left">Rec. Weight Gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">Less than 18.5</td>
                <td className="p-3 text-muted-foreground">Underweight</td>
                <td className="p-3">28 – 40 lbs (13 – 18 kg)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">18.5 – 24.9</td>
                <td className="p-3 text-muted-foreground">Normal Weight</td>
                <td className="p-3">25 – 35 lbs (11 – 16 kg)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">25.0 – 29.9</td>
                <td className="p-3 text-muted-foreground">Overweight</td>
                <td className="p-3">15 – 25 lbs (7 – 11 kg)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">30.0 or more</td>
                <td className="p-3 text-muted-foreground">Obese</td>
                <td className="p-3">11 – 20 lbs (5 – 9 kg)</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border-l-4 border-pink-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-pink-800 dark:text-pink-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: Naegele's Rule vs. Ultrasound
          </h4>
          <p className="italic text-pink-700 dark:text-pink-300">
            "While most pregnancy calculators use <strong>Naegele's Rule</strong> (based on your last period), it assumes a perfect 28-day cycle with ovulation on day 14. If your cycle is irregular, this can be off by several days. This is why doctors consider the <strong>First Trimester Ultrasound</strong> (specifically the Crown-Rump Length) to be the gold standard for dating, as fetal growth is most uniform in early pregnancy."
          </p>
          <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mt-2">— FastTools Women's Health Team</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">Trimester Breakdown</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>First Trimester (Weeks 1-12):</strong> Rapid development, organ formation, and early symptoms like morning sickness.</li>
            <li><strong>Second Trimester (Weeks 13-26):</strong> Often called the "honeymoon phase," energy returns, and you may feel the baby move.</li>
            <li><strong>Third Trimester (Weeks 27-40):</strong> Baby grows significantly, preparing for birth. Discomfort may increase as due date approaches.</li>
          </ul>
        </section>
      </div>
    ),

    proTip: "Due dates are estimates, not deadlines! Only about 5% of babies are born on their exact due date. Most arrive within a window of two weeks before or after.",

    faqs: [
      {
        question: "How accurate is this calculator?",
        answer: "It uses standard medical formulas. Ultrasound dating in the first trimester is the most accurate method, but LMP and conception dates provide very good estimates."
      },
      {
        question: "What if I don't know my exact conception date?",
        answer: "That's common! Use the 'First Day of Last Period' method, which is the standard way doctors date pregnancies."
      },
      {
        question: "Does this work for IVF pregnancies?",
        answer: "Yes, select the 'IVF Transfer Date' option. You can specify if it was a Day 3 or Day 5 transfer for precise calculations."
      },
      {
        question: "How is pregnancy weight gain calculated?",
        answer: "We use your pre-pregnancy height and weight to calculate your BMI, then apply the Institute of Medicine's guidelines for recommended weight gain ranges."
      },
      {
        question: "Can I use this for twins?",
        answer: "The dating timeline remains the same, but weight gain recommendations and delivery expectations (often earlier) differ for multiples. Consult your doctor for specific twin guidance."
      },
      {
        question: "What is 'Gestational Age'?",
        answer: "It's the age of the pregnancy measured from the last menstrual period. 'Fetal Age' is measured from conception and is about 2 weeks less."
      },
      {
        question: "Why did my due date change?",
        answer: "Doctors often adjust due dates based on early ultrasound measurements, which are more accurate than LMP dates if your cycle is irregular."
      },
      {
        question: "When should I see a doctor?",
        answer: "You should schedule your first prenatal appointment as soon as you have a positive home pregnancy test, usually around 8 weeks."
      },
      {
        question: "Is it safe to exercise?",
        answer: "Generally, yes! Moderate exercise is beneficial. However, always check with your healthcare provider before starting or continuing an exercise routine."
      },
      {
        question: "What foods should I avoid?",
        answer: "Avoid raw meat/fish, unpasteurized dairy, high-mercury fish, and alcohol. Limit caffeine. Our tool provides more specific nutrition tips."
      }
    ],

    relatedTools: [
      { name: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Pregnancy Calculator - Track Your Journey",
        description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, and trimester guidance.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "pink"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PregnancyCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Pregnancy Calculator | Free Online Tracking Tool",
        description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, and trimester guidance.",
        path: "/calculator/pregnancy-calculator"
      }}
    />
  )
}
