import { BMICalculatorPageContent } from "@/components/bmi-calculator-page-content"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Calculator } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BMI Calculator – Calculate Your Body Mass Index Instantly | FastTools",
  description:
    "Use our free BMI Calculator to quickly determine your Body Mass Index. Instantly find out if you're underweight, normal, overweight, or obese based on WHO standards. Accurate, fast, and perfect for fitness and health tracking.",
  keywords: [
    "BMI calculator",
    "body mass index calculator",
    "BMI calculator online",
    "calculate BMI",
    "BMI chart",
    "healthy BMI range",
    "BMI for men and women",
    "adult BMI calculator",
    "BMI calculator metric",
    "BMI calculator imperial",
    "calculate BMI by height and weight",
    "BMI interpretation",
    "ideal weight calculator",
    "BMI categories",
    "WHO BMI calculator",
    "BMI calculator free",
    "BMI calculator for fitness",
    "BMI result meaning",
    "BMI health checker",
    "accurate BMI calculator",
    "BMI normal range",
    "what is my BMI",
    "BMI formula",
    "free BMI calculator",
    "online BMI calculator",
    "BMI classification",
    "health assessment",
    "weight management",
    "BMI calculator with age",
    "BMI calculator with gender",
    "advanced BMI calculator",
    "BMI health recommendations",
    "weight category",
    "body fat calculator",
    "healthy lifestyle",
    "ideal weight",
    "instant results"
  ],
  openGraph: {
    title: "BMI Calculator – Calculate Your Body Mass Index Instantly | FastTools",
    description: "Use our free BMI Calculator to quickly determine your Body Mass Index. Instantly find out if you're underweight, normal, overweight, or obese based on WHO standards. Accurate, fast, and perfect for fitness and health tracking.",
    type: "website",
    url: "https://www.fasttools.store/calculator/bmi-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator – Calculate Your Body Mass Index Instantly",
    description: "Use our free BMI Calculator to quickly determine your Body Mass Index. Instantly find out if you're underweight, normal, overweight, or obese based on WHO standards.",
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/bmi-calculator",
  },
}

export default function BMICalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BMI Calculator – Calculate Your Body Mass Index Instantly",
    description: "Use our free BMI Calculator to quickly determine your Body Mass Index. Instantly find out if you're underweight, normal, overweight, or obese based on WHO standards. Accurate, fast, and perfect for fitness and health tracking.",
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
    screenshot: "https://www.fasttools.store/bmi-calculator-screenshot.png",
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
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculator",
          item: "https://www.fasttools.store/calculator"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BMI Calculator",
          item: "https://www.fasttools.store/calculator/bmi-calculator"
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
          text: "BMI categories include: Underweight (&lt;18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (≥30). These categories are further divided into subcategories like Severe Thinness, Moderate Thinness, and different classes of obesity."
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
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <Breadcrumbs
          items={[
            { label: "Calculator", href: "/calculator" },
            { label: "BMI Calculator", href: "/calculator/bmi-calculator" },
          ]}
        />

      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-500 text-white text-xs font-medium mb-4">
            <Calculator className="h-3 w-3" />
            <span>Professional BMI Calculator</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            BMI Calculator – Calculate Your Body Mass Index Instantly
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-3 sm:mt-4">
            The Body Mass Index (BMI) Calculator helps you measure your body fat based on your height and weight. It's an essential tool for tracking fitness goals, maintaining a healthy lifestyle, and understanding your health category. Whether you're planning a diet, monitoring progress, or checking your ideal weight range, this calculator provides instant, accurate results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <BMICalculatorPageContent />
            
            {/* Mobile Middle Ad */}
            <div className="my-8 lg:hidden">
              <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Advertisement</div>
                    <AdSpace slot="content" className="w-full h-32" />
                  </div>
              </div>
            </div>
            
            {/* Personalized 24-Hour Diet Plan Section */}
            <section className="mt-8 sm:mt-10 lg:mt-12 bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                </div>
                <span className="hidden sm:inline">Personalized 24-Hour Diet Plan</span>
                <span className="sm:hidden">Diet Plan</span>
              </h2>
              
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-200">
                  <strong>Note:</strong> These diet plans are general recommendations. For personalized nutrition advice, consult with a registered dietitian or healthcare provider.
                </p>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="min-w-full inline-block align-middle">
                  <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-left font-semibold text-slate-800 dark:text-slate-200 min-w-[80px]">Meal Time</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-left font-semibold text-slate-800 dark:text-slate-200 min-w-[120px]">Underweight<br/>(BMI &lt; 18.5)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-left font-semibold text-slate-800 dark:text-slate-200 min-w-[120px]">Normal Weight<br/>(BMI 18.5-24.9)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-left font-semibold text-slate-800 dark:text-slate-200 min-w-[120px]">Overweight<br/>(BMI 25-29.9)</th>
                        <th className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-left font-semibold text-slate-800 dark:text-slate-200 min-w-[120px]">Obese<br/>(BMI ≥ 30)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 font-medium text-slate-800 dark:text-slate-200">Breakfast<br/><span className="text-xs text-slate-500">(7:00-8:00 AM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>High-Calorie Smoothie</strong><br/>
                        • 1 banana + 2 tbsp almond butter<br/>
                        • 1 cup whole milk + 1/2 cup Greek yogurt<br/>
                        • 1 tbsp honey + mixed berries<br/>
                        <span className="text-xs text-slate-500">~600 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Balanced Breakfast</strong><br/>
                        • Greek yogurt with berries & nuts<br/>
                        • 2 tbsp chia seeds + 1 tbsp almonds<br/>
                        • 1 slice whole grain toast<br/>
                        <span className="text-xs text-slate-500">~450 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Protein-Rich Start</strong><br/>
                        • 2 scrambled eggs with spinach<br/>
                        • 1/2 avocado + 1 slice whole grain toast<br/>
                        • 1 cup mixed berries<br/>
                        <span className="text-xs text-slate-500">~400 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Light & Nutritious</strong><br/>
                        • 1/2 cup oatmeal with berries<br/>
                        • 1 tbsp flaxseeds + 1 cup low-fat milk<br/>
                        • 1 small apple<br/>
                        <span className="text-xs text-slate-500">~350 calories</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-4 font-medium text-slate-800 dark:text-slate-200">Morning Snack<br/><span className="text-xs text-slate-500">(10:00-10:30 AM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Energy Boost</strong><br/>
                        • Handful of mixed nuts (almonds, walnuts)<br/>
                        • 1/4 cup dried fruits<br/>
                        • 1 cup whole milk<br/>
                        <span className="text-xs text-slate-500">~300 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Healthy Snack</strong><br/>
                        • 1 medium apple with almond butter<br/>
                        • 1/4 cup mixed nuts<br/>
                        <span className="text-xs text-slate-500">~200 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Light Snack</strong><br/>
                        • 1 small apple with 1 tbsp peanut butter<br/>
                        • 1 cup green tea<br/>
                        <span className="text-xs text-slate-500">~150 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Low-Calorie Option</strong><br/>
                        • 1 cup carrot sticks with hummus<br/>
                        • 1 cup herbal tea<br/>
                        <span className="text-xs text-slate-500">~100 calories</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-4 font-medium text-slate-800 dark:text-slate-200">Lunch<br/><span className="text-xs text-slate-500">(12:00-1:00 PM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>High-Protein Lunch</strong><br/>
                        • Grilled chicken & avocado salad<br/>
                        • 1 cup quinoa + 1/4 cup olive oil<br/>
                        • 1 slice whole grain bread<br/>
                        <span className="text-xs text-slate-500">~700 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Balanced Bowl</strong><br/>
                        • Quinoa and black bean bowl<br/>
                        • 1/2 avocado + mixed vegetables<br/>
                        • 1 tbsp olive oil dressing<br/>
                        <span className="text-xs text-slate-500">~550 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Lean Protein</strong><br/>
                        • Grilled salmon with steamed vegetables<br/>
                        • 1/2 cup brown rice<br/>
                        • 1 tsp olive oil<br/>
                        <span className="text-xs text-slate-500">~450 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Light & Nutritious</strong><br/>
                        • Lentil soup with mixed greens<br/>
                        • 1 slice whole grain bread<br/>
                        • 1 cup vegetable broth<br/>
                        <span className="text-xs text-slate-500">~350 calories</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-4 font-medium text-slate-800 dark:text-slate-200">Afternoon Snack<br/><span className="text-xs text-slate-500">(3:00-4:00 PM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Calorie-Dense Snack</strong><br/>
                        • 1/2 cup trail mix (nuts, seeds, dried fruit)<br/>
                        • 1 cup whole milk<br/>
                        • 1 tbsp honey<br/>
                        <span className="text-xs text-slate-500">~400 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Protein Snack</strong><br/>
                        • 1 cup Greek yogurt with berries<br/>
                        • 1 tbsp chia seeds<br/>
                        <span className="text-xs text-slate-500">~200 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Healthy Snack</strong><br/>
                        • 1 medium apple with 1 tbsp almond butter<br/>
                        • 1 cup green tea<br/>
                        <span className="text-xs text-slate-500">~150 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Low-Calorie Snack</strong><br/>
                        • 1 cup cucumber slices<br/>
                        • 2 tbsp hummus<br/>
                        • 1 cup herbal tea<br/>
                        <span className="text-xs text-slate-500">~80 calories</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-4 font-medium text-slate-800 dark:text-slate-200">Dinner<br/><span className="text-xs text-slate-500">(6:00-7:00 PM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Hearty Dinner</strong><br/>
                        • Zucchini noodles with turkey meatballs<br/>
                        • 1 cup marinara sauce + 1/4 cup Parmesan<br/>
                        • 1 slice garlic bread<br/>
                        <span className="text-xs text-slate-500">~800 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Balanced Dinner</strong><br/>
                        • Baked chicken with sweet potato<br/>
                        • 1 cup Brussels sprouts<br/>
                        • 1 tsp olive oil<br/>
                        <span className="text-xs text-slate-500">~600 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Lean Protein Dinner</strong><br/>
                        • Stir-fried tofu with vegetables<br/>
                        • 1/2 cup brown rice<br/>
                        • 1 tbsp sesame oil<br/>
                        <span className="text-xs text-slate-500">~450 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Light Dinner</strong><br/>
                        • Grilled Portobello mushrooms<br/>
                        • 1/2 cup quinoa salad<br/>
                        • 1 cup mixed vegetables<br/>
                        <span className="text-xs text-slate-500">~300 calories</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-600 p-4 font-medium text-slate-800 dark:text-slate-200">Evening Snack<br/><span className="text-xs text-slate-500">(8:00-9:00 PM)</span></td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Pre-Bed Snack</strong><br/>
                        • 1 cup full-fat yogurt with honey<br/>
                        • 1/4 cup granola<br/>
                        • 1 small banana<br/>
                        <span className="text-xs text-slate-500">~350 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Light Evening Snack</strong><br/>
                        • 1 cup herbal tea<br/>
                        • 1 small handful of nuts<br/>
                        <span className="text-xs text-slate-500">~150 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Healthy Snack</strong><br/>
                        • 1 cup chamomile tea<br/>
                        • 1 small apple<br/>
                        <span className="text-xs text-slate-500">~100 calories</span>
                      </td>
                      <td className="border border-slate-300 dark:border-slate-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <strong>Minimal Snack</strong><br/>
                        • 1 cup herbal tea<br/>
                        • 1 small piece of fruit (optional)<br/>
                        <span className="text-xs text-slate-500">~50 calories</span>
                      </td>
                    </tr>
                  </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Daily Calorie Targets</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• <strong>Underweight:</strong> 2,200-2,800 calories</li>
                    <li>• <strong>Normal Weight:</strong> 1,800-2,200 calories</li>
                    <li>• <strong>Overweight:</strong> 1,500-1,800 calories</li>
                    <li>• <strong>Obese:</strong> 1,200-1,500 calories</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Nutrition Tips</h3>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Stay hydrated with 8-10 glasses of water daily</li>
                    <li>• Include protein in every meal</li>
                    <li>• Choose whole grains over refined carbs</li>
                    <li>• Limit processed foods and added sugars</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Comprehensive BMI FAQ Section */}
            <section className="mt-8 sm:mt-10 lg:mt-12 bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="hidden sm:inline">Understanding BMI: Essential Questions and Answers</span>
                <span className="sm:hidden">BMI FAQ</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q1: What exactly is BMI and why do healthcare providers use it?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI, or Body Mass Index, serves as a fundamental health screening tool that provides a numerical assessment of body weight relative to height. Medical professionals rely on BMI because it offers a quick, non-invasive method to identify potential health risks associated with weight status. The calculation involves dividing weight in kilograms by height in meters squared, creating a standardized measurement that helps categorize individuals into different weight classifications. This systematic approach allows healthcare providers to quickly assess whether someone might be at risk for weight-related health complications, making it an essential first step in comprehensive health evaluations.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q2: How do I calculate my BMI accurately at home?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    To obtain an accurate BMI measurement, you'll need precise measurements of both your weight and height. For weight, use a reliable digital scale and measure yourself at the same time of day, preferably in the morning after using the bathroom. For height, stand against a wall without shoes, ensuring your back is straight and your heels touch the wall. Have someone mark the top of your head and measure from the floor to that mark. Once you have both measurements, apply the formula: BMI = weight(kg) ÷ height(m)². For example, if you weigh 70 kg and are 1.75 meters tall, your BMI would be 70 ÷ (1.75)² = 22.9, placing you in the normal weight category.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q3: What do the different BMI categories actually mean for my health?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    The World Health Organization has established specific BMI ranges that correlate with different health risk levels. A BMI below 18.5 indicates underweight status, which may suggest nutritional deficiencies or underlying health conditions. The normal weight range of 18.5-24.9 represents the lowest risk category for weight-related health problems. Overweight status (25-29.9) indicates increased risk for developing conditions like type 2 diabetes and cardiovascular disease. Obesity is further classified into three categories: Class I (30-34.9), Class II (35-39.9), and Class III (40 and above), with each category representing progressively higher health risks and the need for more intensive medical intervention.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q4: Why might my BMI show I'm overweight when I'm actually very muscular?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    This is one of the most common concerns among athletes and physically active individuals. BMI calculations cannot distinguish between muscle mass and fat mass, which means someone with significant muscle development may register as overweight or even obese despite having low body fat percentages. This limitation occurs because muscle tissue is denser than fat tissue, so muscular individuals may have higher body weights that skew their BMI calculations. For athletes and highly active individuals, alternative assessments like body fat percentage measurements, waist-to-hip ratios, or professional body composition analysis provide more accurate health evaluations.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q5: Can I have a normal BMI but still be at risk for health problems?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Absolutely. This phenomenon, often called "normal weight obesity" or "skinny fat," occurs when individuals maintain normal BMI values but carry excess visceral fat around their abdominal organs. This type of fat distribution poses significant health risks, including increased likelihood of developing type 2 diabetes, cardiovascular disease, and metabolic syndrome. Waist circumference measurements and body composition analysis can help identify these hidden health risks that BMI alone might miss.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q6: How does age affect BMI interpretation?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI interpretation becomes more complex as we age due to natural changes in body composition. Older adults typically experience muscle mass loss (sarcopenia) and bone density changes, which can affect BMI accuracy. For individuals over 65, healthcare providers often consider additional factors like muscle strength, physical function, and nutritional status alongside BMI measurements. The focus shifts from just weight management to maintaining muscle mass and overall physical function.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q7: Are BMI standards the same for all ethnic groups?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    No, BMI thresholds vary significantly across different ethnic populations due to variations in body composition and associated health risks. Research shows that individuals of Asian descent may experience health complications at lower BMI values compared to those of European descent. For example, a BMI of 23 might indicate overweight status for someone of Asian heritage, while the same BMI would be considered normal for someone of European descent. Healthcare providers should consider these ethnic-specific guidelines when assessing health risks.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q8: What should I do if my BMI indicates I'm underweight?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Being underweight can pose serious health risks, including weakened immune function, osteoporosis, and nutritional deficiencies. If your BMI falls below 18.5, it's important to consult with healthcare professionals to rule out underlying medical conditions like hyperthyroidism, eating disorders, or chronic illnesses. Treatment typically involves working with a registered dietitian to develop a healthy weight gain plan that includes nutrient-dense foods, appropriate caloric intake, and strength training to build muscle mass safely.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q9: How does BMI relate to cardiovascular health specifically?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Higher BMI values are strongly associated with increased cardiovascular disease risk through multiple pathways. Excess body weight contributes to elevated blood pressure, abnormal cholesterol levels, and insulin resistance, all of which strain the cardiovascular system. The American Heart Association emphasizes that even modest weight reduction can significantly improve cardiovascular health markers. For individuals with BMI values above 25, cardiovascular risk assessment should include blood pressure monitoring, lipid profile testing, and glucose level evaluation.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q10: Can BMI be used during pregnancy?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI is not an appropriate health indicator during pregnancy due to natural and necessary weight gain that occurs to support fetal development. Healthcare providers use pre-pregnancy BMI to determine appropriate weight gain recommendations, but ongoing BMI monitoring during pregnancy can be misleading and potentially harmful. Instead, medical professionals focus on overall health indicators, appropriate weight gain patterns, and nutritional status to ensure healthy pregnancy outcomes.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q11: What are the limitations of BMI that I should know about?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI has several important limitations that users should understand. It cannot distinguish between muscle and fat mass, doesn't account for fat distribution patterns, and may not accurately reflect health status in certain populations like athletes, older adults, or individuals with specific medical conditions. BMI also doesn't consider factors like bone density, hydration status, or recent weight changes. These limitations highlight why BMI should be used as part of a comprehensive health assessment rather than as a standalone health indicator.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q12: How often should I check my BMI?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    The frequency of BMI monitoring depends on individual circumstances and health goals. For most adults, checking BMI every 3-6 months provides adequate tracking without becoming obsessive. Individuals actively working on weight management might benefit from monthly measurements, while those maintaining stable weight could check quarterly. However, it's important to remember that BMI is just one health indicator and should be combined with other assessments like waist circumference, blood pressure, and overall well-being.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q13: What alternative measurements complement BMI?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Several complementary measurements provide additional health insights beyond BMI. Waist circumference indicates abdominal fat accumulation, which is particularly important for cardiovascular risk assessment. Waist-to-hip ratio offers insights into fat distribution patterns, while body fat percentage measurements provide more detailed body composition information. For comprehensive health evaluation, healthcare providers may also consider blood pressure, cholesterol levels, blood glucose, and physical fitness assessments.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q14: How can I improve my BMI if it's in an unhealthy range?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Improving BMI requires a comprehensive approach that addresses both diet and physical activity. For individuals with high BMI values, gradual weight loss through calorie deficit combined with regular exercise typically produces the best long-term results. This might involve working with healthcare professionals to develop personalized nutrition plans, incorporating both cardiovascular and strength training exercises, and addressing any underlying medical conditions that might contribute to weight management challenges.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q15: Is BMI reliable for children and teenagers?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI interpretation for children and adolescents differs significantly from adult standards due to ongoing growth and development. Healthcare providers use age and sex-specific BMI percentiles rather than fixed categories. A child's BMI percentile indicates how their weight compares to other children of the same age and sex. Pediatric BMI assessment requires specialized growth charts and should be interpreted by healthcare professionals familiar with child development patterns.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q16: What role does genetics play in BMI and health risks?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Genetics significantly influence individual BMI values and how body weight affects health outcomes. Some individuals may have genetic predispositions that make weight management more challenging, while others might maintain healthy weights more easily. However, genetic factors don't determine health destiny – lifestyle choices, including diet and exercise, can significantly influence health outcomes regardless of genetic predispositions. Understanding your family history can help inform personalized health strategies.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q17: How does stress affect BMI and weight management?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Chronic stress can significantly impact BMI through multiple mechanisms. Stress hormones like cortisol can promote fat storage, particularly around the abdomen, and may increase appetite and cravings for high-calorie foods. Stress can also interfere with sleep quality, which affects hormones that regulate hunger and metabolism. Managing stress through techniques like meditation, regular exercise, and adequate sleep can support healthy BMI maintenance.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q18: What should I do if my BMI is normal but I still feel unhealthy?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    A normal BMI doesn't guarantee optimal health, and several factors could contribute to feeling unwell despite normal weight status. Consider evaluating other health indicators like blood pressure, cholesterol levels, blood glucose, sleep quality, stress levels, and overall fitness. Nutritional deficiencies, hormonal imbalances, or underlying medical conditions might also contribute to feeling unhealthy. Consulting with healthcare professionals for comprehensive health assessment can help identify and address these issues.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q19: How does medication affect BMI and weight management?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Many medications can influence weight and BMI through various mechanisms. Some medications may increase appetite, slow metabolism, or cause fluid retention, leading to weight gain. Others might suppress appetite or increase energy expenditure, potentially causing weight loss. If you're concerned about medication effects on your weight, discuss these concerns with your healthcare provider, who can help you understand potential side effects and develop strategies to manage them effectively.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q20: What's the relationship between BMI and life expectancy?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Research consistently shows that both extremely high and extremely low BMI values are associated with increased mortality risk. The lowest mortality risk typically occurs in the normal weight range (BMI 18.5-24.9), with risk increasing as BMI moves further from this range in either direction. However, the relationship between BMI and longevity is complex and influenced by factors like overall health status, fitness level, and lifestyle choices. Maintaining a healthy BMI through balanced nutrition and regular exercise generally supports longer, healthier life.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q21: Why does my BMI show overweight when I'm muscular?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI doesn't distinguish between muscle and fat mass. Athletes often have high BMI due to muscle mass. Consider body fat percentage or waist-to-hip ratio for more accurate assessment. This is a common concern for physically active individuals who have significant muscle development but low body fat percentages. Alternative assessments like body fat percentage measurements, waist-to-hip ratios, or professional body composition analysis provide more accurate health evaluations for muscular individuals.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q22: Is BMI accurate for older adults?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI interpretation varies by age and gender. For adults 50+, focus on maintaining muscle mass, bone health, and joint-friendly exercises. Professional guidance is recommended. Older adults typically experience muscle mass loss (sarcopenia) and bone density changes, which can affect BMI accuracy. Healthcare providers often consider additional factors like muscle strength, physical function, and nutritional status alongside BMI measurements for older adults.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q23: Why do different ethnic groups have different healthy BMI ranges?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Different ethnic groups may have different healthy BMI ranges due to body composition variations. Consult healthcare providers for personalized assessment. Research shows that individuals of Asian descent may experience health complications at lower BMI values compared to those of European descent. For example, a BMI of 23 might indicate overweight status for someone of Asian heritage, while the same BMI would be considered normal for someone of European descent.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q24: What should I do if my BMI shows I'm underweight?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Focus on healthy weight gain nutrition plans, lean protein and healthy fat recommendations, light cardio + strength training routines, and essential gym equipment for muscle building. Being underweight can pose serious health risks, including weakened immune function, osteoporosis, and nutritional deficiencies. It's important to consult with healthcare professionals to rule out underlying medical conditions and develop a safe, healthy weight gain plan.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q25: My BMI is normal but I still feel unhealthy - what should I do?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Consider additional measurements like waist circumference, body fat percentage, waist-to-hip ratio, and medical consultation for comprehensive health assessment. A normal BMI doesn't guarantee optimal health, and several factors could contribute to feeling unwell despite normal weight status. Consider evaluating other health indicators like blood pressure, cholesterol levels, blood glucose, sleep quality, stress levels, and overall fitness.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q26: How often should I check my BMI?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Regular monitoring is important, but BMI is just one indicator. Combine with other health metrics and regular healthcare provider evaluations for complete health picture. For most adults, checking BMI every 3-6 months provides adequate tracking without becoming obsessive. Individuals actively working on weight management might benefit from monthly measurements, while those maintaining stable weight could check quarterly.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q27: What's the difference between BMI Prime and regular BMI?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    BMI Prime = BMI ÷ 25. It provides a ratio where &lt; 0.74 is underweight, 0.74-1.0 is normal, &gt; 1.0 is overweight, and &gt; 1.2 is obese. BMI Prime offers a simplified way to understand BMI relative to the upper limit of the normal weight range (25 kg/m²). This ratio makes it easier to quickly assess how far above or below the normal weight threshold someone falls, providing a more intuitive understanding of weight status.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 sm:p-5 lg:p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">Q28: When should I see a doctor about my BMI?</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    If you're concerned about your BMI results, have health symptoms, or fall into extreme categories (severe thinness or obese), consult a healthcare provider for comprehensive health screening and personalized health plan. It's particularly important to seek medical advice if you experience unexplained weight changes, have a BMI below 16 or above 35, or if you have symptoms like fatigue, shortness of breath, or other health concerns regardless of your BMI.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Desktop Sticky Sidebar Container */}
            <div className="hidden lg:block sticky top-4 space-y-6">
              {/* Top Sidebar Ad */}
              <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Advertisement</div>
                  <AdSpace slot="sidebar" className="h-80 rounded-lg overflow-hidden" />
                </div>
              </div>

              {/* Additional Sidebar Ad */}
              <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Advertisement</div>
                  <AdSpace slot="sidebar" className="h-80 rounded-lg overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Ad */}
        <div className="mt-8 lg:hidden">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">Advertisement</div>
              <AdSpace slot="content" className="w-full h-32" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
