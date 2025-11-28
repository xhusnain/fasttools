import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import PregnancyCalculator from "@/components/pregnancy-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Pregnancy Calculator | Free Online Tracking Tool",
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
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Pregnancy Timelines</h3>
        <p className="mb-4">
          Pregnancy is typically measured from the first day of your last menstrual period (LMP), lasting about 40 weeks. However, conception usually occurs about 2 weeks after the LMP. Our calculator adjusts for these differences to give you the most accurate timeline.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Trimester Breakdown</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>First Trimester (Weeks 1-12):</strong> Rapid development, organ formation, and early symptoms like morning sickness.</li>
          <li><strong>Second Trimester (Weeks 13-26):</strong> Often called the "honeymoon phase," energy returns, and you may feel the baby move.</li>
          <li><strong>Third Trimester (Weeks 27-40):</strong> Baby grows significantly, preparing for birth. Discomfort may increase as due date approaches.</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Weight Gain Guidelines</h3>
        <p className="mb-4">
          Healthy weight gain depends on your pre-pregnancy BMI. Underweight women may need to gain more, while overweight women may need to gain less. Our tool provides specific ranges based on Institute of Medicine guidelines to support a healthy pregnancy.
        </p>
      </>
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
