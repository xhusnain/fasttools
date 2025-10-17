import { Metadata } from "next"
import PregnancyCalculator from "@/components/pregnancy-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool | FastTools",
  description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights. Free, accurate, and comprehensive.",
  keywords: [
    "pregnancy calculator",
    "pregnancy tracker",
    "due date calculator",
    "gestational age calculator",
    "pregnancy week by week",
    "pregnancy schedule",
    "pregnancy weight gain",
    "pregnancy progress",
    "pregnancy milestones",
    "pregnancy appointments",
    "pregnancy symptoms",
    "pregnancy nutrition",
    "pregnancy exercise",
    "pregnancy health",
    "pregnancy planning",
    "pregnancy management",
    "pregnancy care",
    "pregnancy support",
    "pregnancy education",
    "pregnancy resources",
    "pregnancy timeline",
    "pregnancy development",
    "fetal development",
    "prenatal care",
    "maternal health",
    "pregnancy monitoring",
    "pregnancy tracking",
    "pregnancy insights",
    "pregnancy guidance",
    "pregnancy recommendations"
  ],
  openGraph: {
    title: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool | FastTools",
    description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights.",
    type: "website",
    url: "https://fasttools.store/calculator/pregnancy-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pregnancy Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool | FastTools",
    description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/pregnancy-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function PregnancyCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pregnancy Calculator",
          description: "Comprehensive pregnancy tracking calculator with due date estimates, gestational age, weight gain recommendations, and personalized pregnancy insights.",
          url: "https://fasttools.store/calculator/pregnancy-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Due date calculation",
            "Gestational age tracking",
            "Weight gain recommendations",
            "Trimester guidance",
            "Pregnancy progress tracking",
            "Symptom monitoring",
            "Nutrition recommendations",
            "Exercise guidelines",
            "Health milestones",
            "Lifestyle tips"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pregnancy Calculator - Free Online Pregnancy Tracking Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your pregnancy with our comprehensive calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <PregnancyCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Pregnancy Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Choose Calculation Method</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Due Date:</strong> Enter your expected due date for most accurate results</li>
                      <li><strong>Last Menstrual Period:</strong> Enter the first day of your last period</li>
                      <li><strong>Ultrasound Date:</strong> Enter ultrasound date and gestational age for precise tracking</li>
                      <li><strong>Conception Date:</strong> Enter the exact date of conception if known</li>
                      <li><strong>IVF Transfer Date:</strong> Enter embryo transfer date for IVF pregnancies</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Enter Your Information</h3>
                    <p className="text-muted-foreground">Provide the required dates and your weight/height information for personalized recommendations.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Get Comprehensive Results</h3>
                    <p className="text-muted-foreground">Receive detailed pregnancy schedule, weight gain recommendations, symptoms, and personalized guidance.</p>
                  </div>
                </div>
              </div>

              {/* Use Cases Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">For Expectant Mothers</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Track pregnancy progress and milestones</li>
                      <li>• Get personalized weight gain recommendations</li>
                      <li>• Monitor pregnancy symptoms and development</li>
                      <li>• Plan prenatal appointments and care</li>
                      <li>• Access trimester-specific guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">For Healthcare Providers</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Verify pregnancy dating and scheduling</li>
                      <li>• Provide patient education materials</li>
                      <li>• Track pregnancy progression</li>
                      <li>• Plan prenatal care schedules</li>
                      <li>• Monitor weight gain and health metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate is the pregnancy calculator?</h3>
                    <p className="text-muted-foreground">
                      Our calculator provides estimates based on standard medical calculations. The most accurate method is using ultrasound data with gestational age. Due date calculations are typically accurate within 1-2 weeks for most pregnancies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between gestational age and conception age?</h3>
                    <p className="text-muted-foreground">
                      Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers. Conception age is the actual time since fertilization occurred, which is typically about 2 weeks less than gestational age.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I know which calculation method to use?</h3>
                    <p className="text-muted-foreground">
                      Use the method with the most accurate information you have. Ultrasound dating is most precise, followed by due date, then last menstrual period. If you know your exact conception date or had IVF, use those methods for the most accurate results.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Are the weight gain recommendations personalized?</h3>
                    <p className="text-muted-foreground">
                      Yes! Our weight gain recommendations are based on your pre-pregnancy BMI and follow Institute of Medicine guidelines. The recommendations are tailored to your specific body type and health status.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Can I use this calculator throughout my pregnancy?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! The calculator provides updated recommendations as your pregnancy progresses. You can recalculate weekly to get updated trimester guidance, symptoms, and milestones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
