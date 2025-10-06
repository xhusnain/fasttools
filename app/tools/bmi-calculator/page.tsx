import { BMICalculator } from "@/components/bmi-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free BMI Calculator - Calculate Body Mass Index | Health Tool | FastTools",
  description:
    "Calculate your BMI (Body Mass Index) instantly with our free BMI calculator. Supports metric and imperial units. Check if you're underweight, normal, overweight, or obese. Fast, accurate, and easy to use.",
  keywords: [
    "BMI calculator",
    "body mass index calculator",
    "BMI chart",
    "health calculator",
    "weight calculator",
    "BMI formula",
    "free BMI calculator",
    "online BMI calculator",
    "BMI calculator metric",
    "BMI calculator imperial",
    "health assessment",
    "weight category"
  ],
  openGraph: {
    title: "Free BMI Calculator - Calculate Body Mass Index | FastTools",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator. Supports metric and imperial units.",
    type: "website",
    url: "https://fasttools.store/tools/bmi-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free BMI Calculator - Calculate Body Mass Index",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator.",
  },
  alternates: {
    canonical: "https://fasttools.store/tools/bmi-calculator",
  },
}

export default function BMICalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BMI Calculator",
    description: "Free online BMI calculator to calculate your Body Mass Index. Supports metric and imperial units.",
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: "BMI Calculator", href: "/tools/bmi-calculator" },
          ]}
        />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">BMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your Body Mass Index (BMI) to assess your weight category. Supports both metric (kg/cm) and
            imperial (lbs/in) units.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <BMICalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
