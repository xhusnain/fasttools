import { Metadata } from "next"
import PregnancyConceptionCalculator from "@/components/pregnancy-conception-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Pregnancy Conception Calculator | Free Online Pregnancy Tool | FastTools",
  description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights. Free, accurate, and comprehensive pregnancy tracking tool.",
  keywords: [
    "pregnancy conception calculator",
    "conception date calculator",
    "when did I conceive",
    "pregnancy calculator",
    "due date calculator",
    "gestational age calculator",
    "pregnancy week by week",
    "trimester calculator",
    "pregnancy symptoms tracker",
    "prenatal care calculator",
    "pregnancy nutrition guide",
    "pregnancy exercise recommendations",
    "fetal development tracker",
    "pregnancy milestones",
    "conception date range",
    "pregnancy timeline",
    "maternal health calculator",
    "pregnancy planning tool",
    "fertility calculator",
    "pregnancy health tracker",
    "pregnancy due date calculator",
    "conception date range calculator",
    "pregnancy week calculator",
    "prenatal care guide",
    "pregnancy nutrition calculator",
    "pregnancy exercise guide",
    "maternal health tracker",
    "pregnancy development tracker",
    "conception timing calculator",
    "pregnancy health monitor"
  ],
  openGraph: {
    title: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights.",
    type: "website",
    url: "https://fasttools.store/tools/pregnancy-conception-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pregnancy Conception Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/pregnancy-conception-calculator"
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

export default function PregnancyConceptionCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pregnancy Conception Calculator",
          description: "Advanced pregnancy conception calculator with personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights.",
          url: "https://fasttools.store/tools/pregnancy-conception-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Conception date calculation",
            "Trimester determination",
            "Pregnancy symptoms tracking",
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
            Pregnancy Conception Calculator - Free Online Pregnancy Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your conception date with our advanced pregnancy calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive week-by-week pregnancy insights.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <PregnancyConceptionCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Pregnancy Conception Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Choose Calculation Method</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Due Date:</strong> Enter your expected due date to calculate conception date</li>
                      <li><strong>Last Menstrual Period:</strong> Enter the first day of your last period</li>
                      <li><strong>Ultrasound Date:</strong> Enter ultrasound date and gestational age for most accurate results</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Enter Your Information</h3>
                    <p className="text-muted-foreground">Provide the required dates and information based on your chosen method.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Get Personalized Results</h3>
                    <p className="text-muted-foreground">Receive detailed conception date, trimester information, symptoms, and personalized recommendations.</p>
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
                      <li>• Calculate exact conception date for pregnancy tracking</li>
                      <li>• Understand current trimester and pregnancy stage</li>
                      <li>• Get personalized nutrition and exercise recommendations</li>
                      <li>• Track pregnancy symptoms and milestones</li>
                      <li>• Plan prenatal care and appointments</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">For Healthcare Providers</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Verify gestational age calculations</li>
                      <li>• Plan prenatal care schedules</li>
                      <li>• Provide patient education materials</li>
                      <li>• Track pregnancy progression</li>
                      <li>• Identify high-risk pregnancy factors</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate is the conception date calculation?</h3>
                    <p className="text-muted-foreground">
                      Our calculator provides estimates based on standard medical calculations. The most accurate method is using ultrasound data with gestational age. Conception typically occurs 11-21 days after the first day of your last menstrual period.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is the difference between conception date and gestational age?</h3>
                    <p className="text-muted-foreground">
                      Conception date is when fertilization actually occurred. Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers for pregnancy dating.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Why is there a conception date range?</h3>
                    <p className="text-muted-foreground">
                      Sperm can survive in the female reproductive tract for 3-5 days, so the conception date range accounts for this window of fertility. The range helps identify the most likely days when conception occurred.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Can I use this calculator if I have irregular periods?</h3>
                    <p className="text-muted-foreground">
                      For irregular periods, the ultrasound method with gestational age is most accurate. If you don't have ultrasound data, the due date method can provide estimates, but consult your healthcare provider for the most accurate dating.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Are the recommendations personalized to my pregnancy stage?</h3>
                    <p className="text-muted-foreground">
                      Yes! Our calculator provides trimester-specific recommendations for nutrition, exercise, health, and lifestyle based on your current gestational age. These recommendations are tailored to your specific pregnancy stage.
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
