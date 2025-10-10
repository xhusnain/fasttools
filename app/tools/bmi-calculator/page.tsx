import { BMICalculatorPageContent } from "@/components/bmi-calculator-page-content"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free BMI Calculator - Advanced Body Mass Index Calculator with BMI Prime & Ponderal Index | FastTools",
  description:
    "Calculate your BMI with our advanced BMI calculator featuring BMI Prime, Ponderal Index, health recommendations, and risk assessment. Supports metric/imperial units with comprehensive health analysis.",
  keywords: [
    "BMI calculator",
    "body mass index calculator",
    "BMI Prime calculator",
    "Ponderal Index calculator",
    "BMI chart",
    "health calculator",
    "weight calculator",
    "BMI formula",
    "free BMI calculator",
    "online BMI calculator",
    "BMI calculator metric",
    "BMI calculator imperial",
    "BMI categories",
    "BMI classification",
    "health assessment",
    "weight management",
    "BMI calculator with age",
    "BMI calculator with gender",
    "advanced BMI calculator",
    "BMI health recommendations",
    "health assessment",
    "weight category"
  ],
  openGraph: {
    title: "Free BMI Calculator - Advanced Body Mass Index Calculator with BMI Prime & Ponderal Index | FastTools",
    description: "Calculate your BMI with our advanced BMI calculator featuring BMI Prime, Ponderal Index, health recommendations, and risk assessment. Supports metric/imperial units with comprehensive health analysis.",
    type: "website",
    url: "https://fasttools.store/tools/bmi-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free BMI Calculator - Advanced Body Mass Index Calculator with BMI Prime & Ponderal Index",
    description: "Calculate your BMI with our advanced BMI calculator featuring BMI Prime, Ponderal Index, health recommendations, and risk assessment.",
  },
  alternates: {
    canonical: "https://fasttools.store/tools/bmi-calculator",
  },
}

export default function BMICalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Advanced BMI Calculator with BMI Prime & Ponderal Index",
    description: "Free online BMI calculator with advanced metrics including BMI Prime, Ponderal Index, health recommendations, and risk assessment. Supports metric and imperial units.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Organization",
      name: "FastTools"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    version: "2.0",
    featureList: [
      "BMI calculation with metric and imperial units",
      "BMI Prime calculation",
      "Ponderal Index calculation", 
      "Health recommendations based on BMI category",
      "Risk level assessment",
      "Healthy weight range calculation",
      "Age and gender considerations",
      "Mobile responsive design"
    ],
    screenshot: "https://fasttools.store/bmi-calculator-screenshot.png",
    softwareHelp: {
      "@type": "HowTo",
      name: "How to Use BMI Calculator",
      description: "Step-by-step guide to calculate your BMI",
      step: [
        {
          "@type": "HowToStep",
          name: "Select Units",
          text: "Choose between metric (kg/cm) or imperial (lbs/in) units"
        },
        {
          "@type": "HowToStep", 
          name: "Enter Weight",
          text: "Input your weight in the selected unit"
        },
        {
          "@type": "HowToStep",
          name: "Enter Height", 
          text: "Input your height in the selected unit"
        },
        {
          "@type": "HowToStep",
          name: "Optional Information",
          text: "Add age and gender for more personalized results"
        },
        {
          "@type": "HowToStep",
          name: "Calculate BMI",
          text: "Click calculate to get your BMI, BMI Prime, Ponderal Index, and health recommendations"
        }
      ]
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2500",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://fasttools.store/tools"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BMI Calculator",
          item: "https://fasttools.store/tools/bmi-calculator"
        }
      ]
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is BMI and how is it calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI (Body Mass Index) is a measure of body fat based on height and weight. It's calculated using the formula: BMI = weight(kg) ÷ height(m)² for metric units, or BMI = (weight(lbs) ÷ height(in)²) × 703 for imperial units."
        }
      },
      {
        "@type": "Question", 
        name: "What are the different BMI categories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI categories include: Underweight (<18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (≥30). These categories are further divided into subcategories like Severe Thinness, Moderate Thinness, and different classes of obesity."
        }
      },
      {
        "@type": "Question",
        name: "What is BMI Prime and how is it different from BMI?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "BMI Prime is the ratio of a person's BMI to the upper limit of normal BMI (25). It's calculated as BMI Prime = BMI ÷ 25. Values less than 0.74 indicate underweight, 0.74-1.0 is normal, and greater than 1.0 indicates overweight."
        }
      },
      {
        "@type": "Question",
        name: "What is the Ponderal Index and when should it be used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Ponderal Index (PI) is similar to BMI but uses height cubed instead of squared. It's more accurate for very tall or short individuals. PI = weight ÷ height³. It's particularly useful when BMI may not accurately reflect body composition."
        }
      },
      {
        "@type": "Question",
        name: "Are there limitations to using BMI as a health indicator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, BMI has limitations. It doesn't distinguish between muscle and fat mass, so athletes may have high BMI due to muscle. It also doesn't account for age, gender, ethnicity, or body composition. For comprehensive health assessment, consider additional measurements like waist circumference and body fat percentage."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: "BMI Calculator", href: "/tools/bmi-calculator" },
          ]}
        />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">BMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your Body Mass Index (BMI) to assess your weight category. Supports both metric (kg/cm) and
            imperial (lbs/in) units.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <BMICalculatorPageContent />

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
      </div>
    </>
  )
}
