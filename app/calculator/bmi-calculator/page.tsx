import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { BMICalculatorPageContent } from "@/components/health/bmi-calculator-page-content"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "BMI Calculator - Free Body Mass Index Calculator | Check Your BMI",
  description:
    "Calculate your BMI (Body Mass Index) free with our accurate calculator. Get instant results, understand what your BMI means, see health risks by category, and get personalized recommendations. Based on WHO & CDC guidelines. Works for adults, teens, and includes Asian BMI thresholds.",
  path: "/calculator/bmi-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "BMI Calculator", href: "/calculator/bmi-calculator" }
  ],
  schemaOptions: {
    name: "Free BMI Calculator - Body Mass Index Calculator",
    alternateName: "Body Mass Index Calculator",
    applicationCategory: "HealthApplication",
    ratingValue: "4.9",
    ratingCount: "3420",
    featureList: [
      "Instant BMI calculation for adults and teenagers",
      "Personalized health action plan based on results",
      "Metric and Imperial units support (kg, cm, lbs, in)",
      "WHO & CDC standard BMI interpretations",
      "Visual BMI gauge for instant understanding",
      "Ethnic-specific guidelines (Asian BMI thresholds)",
      "BMI Prime and Ponderal Index calculations",
      "Healthy weight range calculator",
      "Completely free and privacy-focused",
      "Mobile-optimized health assessment"
    ]
  },
  faqs: [
    {
      question: "What is a healthy BMI range?",
      answer: "A healthy BMI range is 18.5 to 24.9 for most adults, according to the World Health Organization (WHO). This range is associated with the lowest risk of weight-related health problems like type 2 diabetes and heart disease."
    },
    {
      question: "How is BMI calculated?",
      answer: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For imperial measurements, the formula is (weight in pounds / height in inches²) × 703. For example, a person weighing 70kg at 1.75m would have a BMI of 22.9."
    },
    {
      question: "Is BMI accurate for athletes and muscular people?",
      answer: "BMI does not distinguish between muscle and fat. Since muscle is denser than fat, athletes and bodybuilders often have elevated BMI despite low body fat. For muscular individuals, body fat percentage measurement is a better health indicator."
    },
    {
      question: "What are the BMI categories according to WHO?",
      answer: "The WHO defines BMI categories as: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), Obese Class I (30-34.9), Obese Class II (35-39.9), and Obese Class III (40 and above)."
    },
    {
      question: "Are BMI standards different for Asian populations?",
      answer: "Yes. The WHO recommends lower BMI thresholds for Asian populations due to higher body fat percentage at lower BMI values. For Asians: Healthy (18.5-22.9), Overweight (23-24.9), and Obese (25+)."
    },
    {
      question: "Can I use this BMI calculator during pregnancy?",
      answer: "No, BMI should not be used to assess weight status during pregnancy. Pre-pregnancy BMI is used to determine healthy weight gain targets. Consult your healthcare provider for pregnancy-specific guidance."
    },
    {
      question: "What health risks are associated with high BMI?",
      answer: "High BMI is associated with increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, stroke, certain cancers (breast, colon, kidney), sleep apnea, osteoarthritis, and higher mortality rates according to CDC research."
    },
    {
      question: "What is BMI Prime?",
      answer: "BMI Prime is the ratio of your BMI to 25 (the upper limit of normal BMI). A BMI Prime of 1.0 means you are at the upper boundary of normal weight. Values below 1 indicate normal weight, while values above 1 indicate overweight or obesity."
    }
  ],
  howToSteps: [
    "Select your preferred measurement units (Metric: kg/cm or Imperial: lbs/inches)",
    "Enter your current weight accurately",
    "Enter your height measurement",
    "Optionally add your age and gender for more personalized health interpretations",
    "Click Calculate BMI to get your instant results",
    "Review your BMI category, healthy weight range, and personalized recommendations"
  ],
  toolName: "BMI Calculator"
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculators",
}

export default function BMICalculatorPage() {
  const toolContent = {
    toolName: "BMI Calculator",
    overview:
      "Our BMI Calculator provides a quick and accurate way to assess your body mass index. Designed for both adults and teenagers, this tool helps you understand your weight profile relative to your height, providing essential insights into your metabolic health and potential risks.",
    howToSteps: [
      {
        title: "Select Your Units",
        description: "Choose between Metric (kg/cm) or Imperial (lbs/in) systems."
      },
      {
        title: "Enter Height and Weight",
        description: "Input your current measurements accurately for precise results."
      },
      {
        title: "Add Demographics",
        description: "Include age and gender for personalized health interpretations."
      },
      {
        title: "Get Your Action Plan",
        description: "Instantly see your BMI category and receive tailored advice."
      }
    ],
    features: [
      {
        title: "Dual Unit Support",
        description: "Seamlessly switch between metric and imperial measurements.",
        icon: "Scale"
      },
      {
        title: "Dynamic Visuals",
        description: "Interactive gauge shows exactly where you fall on the BMI spectrum.",
        icon: "Activity"
      },
      {
        title: "Ethnic Clarity",
        description: "Supports specialized Asian BMI thresholds for accurate regional screening.",
        icon: "Globe"
      },
      {
        title: "Privacy First",
        description: "Your data is processed locally and never stored on our servers.",
        icon: "History"
      }
    ],
    useCases: [
      {
        title: "Weight Tracking",
        description: "Monitor your progress during weight loss or fitness journeys."
      },
      {
        title: "Health Screening",
        description: "Identify potential risks for diabetes or cardiovascular issues early."
      },
      {
        title: "Athletic Assessment",
        description: "Use alongside body fat metrics for a complete performance profile."
      }
    ],
    aboutTool: {
      title: "The Most Comprehensive Free BMI Tool Online",
      content: "Body Mass Index (BMI) is a global standard for assessing body composition. Our calculator is built on World Health Organization (WHO) and CDC guidelines to ensure medical-grade accuracy. It's not just a number—we provide a complete context of what that number means for your specific life stage and ethnicity."
    },
    proTip: "For the most accurate assessment, weigh yourself in the morning before breakfast and after using the bathroom. Consistency is key to tracking long-term trends.",
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer: "A healthy BMI range is 18.5 to 24.9 for most adults, according to the WHO. This range is associated with the lowest risk of weight-related health problems."
      },
      {
        question: "Can I have a normal BMI but still be unhealthy?",
        answer: "Yes. 'Normal weight obesity' occurs when someone has a healthy BMI but high body fat percentage and low muscle mass. Other factors like waist circumference and metabolic health are also important."
      },
      {
        question: "Why does my BMI say I'm overweight when I'm muscular?",
        answer: "BMI doesn't distinguish between muscle and fat. Since muscle is denser than fat, athletes often have elevated BMI despite low body fat. For muscular individuals, body fat percentage is a better indicator."
      },
      {
        question: "How often should I check my BMI?",
        answer: "For most people, checking BMI monthly or quarterly is sufficient to monitor progress while ignoring daily water-weight fluctuations."
      },
      {
        question: "Is BMI accurate for older adults?",
        answer: "interpretation changes with age. Research suggests a slightly higher BMI (25-27) may be protective and healthy for adults over 65."
      },
      {
        question: "What should I do if my BMI indicates obesity?",
        answer: "Consult a healthcare provider for a personalized evaluation. Focus on sustainable lifestyle changes like balanced nutrition and regular activity."
      },
      {
        question: "Are BMI standards the same for all ethnic groups?",
        answer: "No. Asian populations have higher health risks at lower BMI values (overweight at 23+, obese at 25+). The WHO recommends ethnic-specific thresholds for more accurate assessments."
      },
      {
        question: "Can I use this BMI calculator during pregnancy?",
        answer: "Do not use BMI to assess weight status during pregnancy. Pre-pregnancy BMI is used to determine healthy weight gain targets, but pregnancy weight gain is expected and healthy."
      }
    ],
    relatedTools: [
      {
        name: "Body Fat Calculator",
        href: "/calculator/body-fat-calculator",
        description: "Get more precise body composition data."
      },
      {
        name: "Calorie Calculator",
        href: "/calculator/calorie-calculator",
        description: "Plan your meals for healthy weight management."
      },
      {
        name: "BMR Calculator",
        href: "/calculator/bmr-calculator",
        description: "Find your baseline energy needs."
      }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "BMI Calculator - Free Body Mass Index Calculator",
        description: "Calculate your BMI (Body Mass Index) instantly with our free, accurate calculator. Get your results, understand what your BMI means, see health risks by category, and receive personalized recommendations based on WHO & CDC guidelines.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "BMI Calculator", href: "/calculator/bmi-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BMICalculatorPageContent />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "BMI Calculator - Free Body Mass Index Calculator | Check Your BMI",
        description: "Calculate your BMI (Body Mass Index) free with our accurate calculator. Get instant results, understand what your BMI means, see health risks by category, and get personalized recommendations. Based on WHO & CDC guidelines.",
        path: "/calculator/bmi-calculator"
      }}
    />
  )
}
