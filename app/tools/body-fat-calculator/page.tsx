import { Metadata } from "next"
import BodyFatCalculator from "@/components/body-fat-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Body Fat Calculator | Free Online Body Fat Percentage Calculator | FastTools",
  description: "Calculate your body fat percentage with our advanced body fat calculator. Uses U.S. Navy method and BMI method for accurate results. Get fat mass, lean mass, ideal body fat, and personalized health recommendations.",
  keywords: [
    "body fat calculator",
    "body fat percentage calculator",
    "body fat percentage",
    "body fat measurement",
    "fat mass calculator",
    "lean mass calculator",
    "body composition calculator",
    "navy body fat calculator",
    "bmi body fat calculator",
    "body fat analysis",
    "body fat test",
    "body fat assessment",
    "body fat measurement tool",
    "body fat percentage tool",
    "body fat calculator online",
    "free body fat calculator",
    "accurate body fat calculator",
    "body fat calculator navy method",
    "body fat calculator bmi method",
    "body fat calculator metric",
    "body fat calculator imperial",
    "body fat calculator male",
    "body fat calculator female",
    "body fat categories",
    "body fat ranges",
    "essential body fat",
    "athletic body fat",
    "fitness body fat",
    "average body fat",
    "obese body fat",
    "body fat health risks",
    "body fat recommendations",
    "body fat improvement plan",
    "body fat tracking",
    "body fat monitoring",
    "body fat goals",
    "body fat targets",
    "body fat reduction",
    "body fat loss",
    "body fat gain",
    "body fat maintenance",
    "body fat optimization",
    "body fat health",
    "body fat fitness",
    "body fat nutrition",
    "body fat exercise",
    "body fat lifestyle",
    "body fat calculator tool",
    "body fat calculator app",
    "body fat calculator website",
    "body fat calculator free",
    "body fat calculator accurate",
    "body fat calculator professional"
  ],
  openGraph: {
    title: "Body Fat Calculator | Free Online Body Fat Percentage Calculator | FastTools",
    description: "Calculate your body fat percentage with our advanced body fat calculator. Uses U.S. Navy method and BMI method for accurate results. Get fat mass, lean mass, ideal body fat, and personalized health recommendations.",
    type: "website",
    url: "https://fasttools.store/tools/body-fat-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Body Fat Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Fat Calculator | Free Online Body Fat Percentage Calculator | FastTools",
    description: "Calculate your body fat percentage with our advanced body fat calculator. Uses U.S. Navy method and BMI method for accurate results. Get fat mass, lean mass, ideal body fat, and personalized health recommendations.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/body-fat-calculator"
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

export default function BodyFatCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Body Fat Calculator",
          description: "Advanced body fat calculator using U.S. Navy method and BMI method for accurate body fat percentage estimation. Includes fat mass, lean mass, ideal body fat, and personalized health recommendations.",
          url: "https://fasttools.store/tools/body-fat-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "U.S. Navy method calculation",
            "BMI method calculation",
            "Body fat percentage estimation",
            "Fat mass and lean mass analysis",
            "Ideal body fat recommendations",
            "Body fat categories",
            "Health risk assessment",
            "Personalized recommendations",
            "Metric and imperial units",
            "Gender-specific calculations"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Body Fat Calculator - Professional Body Composition Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your body fat percentage with our advanced calculator using U.S. Navy method and BMI method. Get accurate fat mass, lean mass, ideal body fat, and personalized health recommendations for optimal body composition.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <BodyFatCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Body Fat Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Enter Your Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Enter your age (15-80 years)</li>
                      <li>Select your gender (male/female)</li>
                      <li>Enter your weight in kg or lbs</li>
                      <li>Enter your height in cm or ft/in</li>
                      <li>Choose your preferred unit system (metric/imperial)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Take Accurate Measurements</h3>
                    <p className="text-muted-foreground">For best results, measure to the nearest 1/4 inch (0.5 cm):</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Neck:</strong> Measure below the larynx, tape sloping downward</li>
                      <li><strong>Waist:</strong> Measure at navel level for men, smallest width for women</li>
                      <li><strong>Hip (Women only):</strong> Measure at the largest horizontal point</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Get Comprehensive Results</h3>
                    <p className="text-muted-foreground">Receive detailed analysis including body fat percentage, fat mass, lean mass, ideal body fat, health risks, and personalized recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Calculation Methods Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Body Fat Calculation Methods</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">U.S. Navy Method (Most Accurate)</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      Developed by the Naval Health Research Center in 1984. Uses circumference measurements and is considered the most accurate method for general population.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm font-mono">
                        <div className="mb-2"><strong>Men:</strong> BFP = 495 / (1.0324 - 0.19077×log10(waist-neck) + 0.15456×log10(height)) - 450</div>
                        <div><strong>Women:</strong> BFP = 495 / (1.29579 - 0.35004×log10(waist+hip-neck) + 0.22100×log10(height)) - 450</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">BMI Method (Alternative)</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      Uses BMI and age to estimate body fat percentage. Good alternative when circumference measurements are not available.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm font-mono">
                        <div className="mb-2"><strong>Men:</strong> BFP = 1.20 × BMI + 0.23 × Age - 16.2</div>
                        <div><strong>Women:</strong> BFP = 1.20 × BMI + 0.23 × Age - 5.4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body Fat Categories Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Body Fat Categories</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Category</th>
                        <th className="text-left p-2">Men</th>
                        <th className="text-left p-2">Women</th>
                        <th className="text-left p-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Essential Fat</td>
                        <td className="p-2">2-5%</td>
                        <td className="p-2">10-13%</td>
                        <td className="p-2">Minimum required for basic functions</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Athletes</td>
                        <td className="p-2">6-13%</td>
                        <td className="p-2">14-20%</td>
                        <td className="p-2">Elite athletic performance</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Fitness</td>
                        <td className="p-2">14-17%</td>
                        <td className="p-2">21-24%</td>
                        <td className="p-2">Healthy, fit individuals</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Average</td>
                        <td className="p-2">18-24%</td>
                        <td className="p-2">25-31%</td>
                        <td className="p-2">General population average</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Obese</td>
                        <td className="p-2">25%+</td>
                        <td className="p-2">32%+</td>
                        <td className="p-2">Increased health risks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between U.S. Navy and BMI methods?</h3>
                    <p className="text-muted-foreground">
                      The U.S. Navy method uses circumference measurements and is more accurate for most people. The BMI method uses height, weight, and age, making it easier to calculate but slightly less accurate.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate are body fat calculators?</h3>
                    <p className="text-muted-foreground">
                      Online calculators provide estimates based on statistical data. The U.S. Navy method is generally accurate within 3-5% for most people. For precise measurements, consider DEXA scans or hydrostatic weighing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's a healthy body fat percentage?</h3>
                    <p className="text-muted-foreground">
                      Healthy ranges vary by gender and age. For men: 8-19%, for women: 21-33%. Athletes typically have lower percentages, while older adults may have slightly higher healthy ranges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How can I reduce my body fat percentage?</h3>
                    <p className="text-muted-foreground">
                      Combine caloric deficit with strength training and cardio. Focus on whole foods, adequate protein, and consistent exercise. Aim for 1-2 pounds of fat loss per week for sustainable results.
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
