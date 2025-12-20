import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import PregnancyConceptionCalculator from "@/components/health/pregnancy-conception-calculator"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "Conception Calculator - Find Conception Date",
  description:
    "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, and week-by-week pregnancy insights.",
  path: "/calculator/pregnancy-conception-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" }
  ],
  schemaOptions: {
    name: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    alternateName: "Advanced Pregnancy Calculator with Trimester Guidance",
    applicationCategory: "HealthApplication",
    featureList: [
      "Conception Date Calculation",
      "Trimester Determination",
      "Pregnancy Symptoms Tracking",
      "Nutrition Recommendations",
      "Exercise Guidelines",
      "Health Milestones",
      "Lifestyle Tips"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PregnancyConceptionCalculatorPage() {
  const toolContent = {
    toolName: "Pregnancy Conception Calculator",
    overview: "Calculate your conception date with our advanced pregnancy calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive week-by-week pregnancy insights.",

    howToSteps: [
      "Choose Calculation Method: Select Due Date, Last Menstrual Period, or Ultrasound Date.",
      "Enter Your Information: Provide the required dates based on your chosen method.",
      "Get Personalized Results: Receive detailed conception date estimates and trimester info.",
      "Track Your Progress: Monitor pregnancy milestones and get week-by-week insights.",
      "Review Recommendations: Check nutrition, exercise, and health tips for your stage."
    ],

    features: [
      "Accurate Conception Date: Calculate precise conception date using multiple methods.",
      "Trimester Analysis: Determine current trimester and pregnancy stage.",
      "Health Tracking: Monitor pregnancy symptoms and health milestones.",
      "Nutrition Guide: Get personalized nutrition recommendations.",
      "Exercise Guidelines: Safe exercise recommendations for each trimester.",
      "Week-by-Week: Detailed pregnancy progression tracking.",
      "Mobile Friendly: Access your pregnancy data anywhere."
    ],

    useCases: [
      "Expectant Mothers: Calculate conception date and track pregnancy progress.",
      "Healthcare Providers: Verify gestational age and plan prenatal care.",
      "Family Planning: Understand fertility windows and conception timing.",
      "Health Monitoring: Track symptoms and milestones throughout pregnancy.",
      "Education: Learn about fetal development and maternal health."
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Conception Dating</h3>
        <p className="mb-4">
          Conception typically occurs about 11-21 days after the first day of your last menstrual period. However, sperm can survive for up to 5 days, creating a "fertile window." Our calculator estimates the most likely conception date range based on your inputs.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Gestational vs. Conception Age</h3>
        <p className="mb-4">
          <strong>Gestational Age:</strong> Measured from the first day of your last period. This is the standard used by doctors.<br />
          <strong>Conception Age:</strong> Measured from the actual date of fertilization. This is usually about 2 weeks less than gestational age.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Why Use Multiple Methods?</h3>
        <p className="mb-4">
          Different women have different cycle lengths and information available. By offering calculations based on Due Date, LMP, and Ultrasound, we ensure you can use the most accurate data you have to get the best estimate.
        </p>
      </>
    ),

    proTip: "If you have an ultrasound date, use that! Early ultrasounds are generally the most accurate way to date a pregnancy, especially if you have irregular periods.",

    faqs: [
      {
        question: "How accurate is this calculator?",
        answer: "It provides estimates based on standard medical formulas. Ultrasound dating is most accurate (±3-5 days), followed by due date (±1-2 weeks). LMP is least accurate for irregular cycles."
      },
      {
        question: "Why is there a conception date range?",
        answer: "Because sperm can survive inside the body for 3-5 days, conception could have occurred on any of those days. The range covers this fertile window."
      },
      {
        question: "Can I use this if I have irregular periods?",
        answer: "Yes, but the Ultrasound method will be much more accurate than the Last Menstrual Period method for you."
      },
      {
        question: "Does it work for IVF?",
        answer: "For IVF, you likely know your exact transfer date. You can use the 'Due Date' method if your doctor gave you one, or simply subtract 266 days from your due date for a rough conception estimate."
      },
      {
        question: "What if my due date changes?",
        answer: "Due dates often change after an early ultrasound. If your doctor gives you a new due date, simply re-enter it into the calculator for updated conception estimates."
      },
      {
        question: "When does the first trimester end?",
        answer: "The first trimester ends at the completion of week 12. Week 13 marks the start of the second trimester."
      },
      {
        question: "Is it safe to exercise?",
        answer: "Generally yes, but always consult your doctor. Our tool provides general guidelines for safe exercises by trimester."
      },
      {
        question: "What foods should I avoid?",
        answer: "Common restrictions include raw meat/fish, unpasteurized dairy, and high-mercury fish. Our calculator offers specific nutrition tips."
      },
      {
        question: "How often should I check this tool?",
        answer: "Weekly check-ins are great to see new development milestones and get tips relevant to your current week of pregnancy."
      },
      {
        question: "Can it predict gender?",
        answer: "No, gender is determined at conception but can only be revealed by medical tests (ultrasound/blood test) later in pregnancy."
      }
    ],

    relatedTools: [
      { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Pregnancy Conception Calculator",
        description: "Calculate your conception date with our advanced pregnancy calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive week-by-week pregnancy insights.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "pink"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PregnancyConceptionCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Pregnancy Conception Calculator | Free Online Tool",
        description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, and week-by-week pregnancy insights.",
        path: "/calculator/pregnancy-conception-calculator"
      }}
    />
  )
}
