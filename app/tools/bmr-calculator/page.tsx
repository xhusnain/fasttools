import { Metadata } from "next"
import BMRCalculator from "@/components/bmr-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "BMR Calculator | Basal Metabolic Rate Calculator | Free Online Tool | FastTools",
  description: "Calculate your BMR (Basal Metabolic Rate) with our advanced BMR calculator. Get accurate calorie needs, TDEE, weight management goals, and personalized nutrition recommendations. Free, professional-grade metabolic analysis.",
  keywords: [
    "bmr calculator",
    "basal metabolic rate calculator",
    "bmr calculation",
    "metabolic rate calculator",
    "calorie calculator",
    "tdee calculator",
    "basal metabolic rate",
    "bmr formula",
    "metabolism calculator",
    "calorie needs calculator",
    "weight loss calculator",
    "weight gain calculator",
    "mifflin st jeor",
    "harris benedict equation",
    "katch mcardle formula",
    "bmr test",
    "metabolic rate",
    "calorie burn calculator",
    "resting metabolic rate",
    "rmr calculator",
    "energy expenditure calculator",
    "bmr analysis",
    "metabolic analysis",
    "calorie requirements",
    "daily calorie needs",
    "bmr measurement",
    "metabolic health",
    "body composition calculator",
    "fat burning calculator",
    "metabolism boost",
    "bmr accuracy",
    "metabolic rate test",
    "calorie deficit calculator",
    "calorie surplus calculator",
    "weight management calculator",
    "nutrition calculator",
    "diet calculator",
    "fitness calculator",
    "health calculator",
    "metabolic calculator",
    "bmr online",
    "free bmr calculator",
    "accurate bmr calculator",
    "professional bmr calculator",
    "advanced bmr calculator",
    "bmr calculator tool",
    "metabolic rate tool",
    "calorie calculator tool",
    "bmr calculator online",
    "metabolic analysis tool",
    "calorie needs tool",
    "weight loss tool",
    "fitness tool",
    "health tool",
    "nutrition tool",
    "diet tool"
  ],
  openGraph: {
    title: "BMR Calculator | Basal Metabolic Rate Calculator | Free Online Tool | FastTools",
    description: "Calculate your BMR (Basal Metabolic Rate) with our advanced BMR calculator. Get accurate calorie needs, TDEE, weight management goals, and personalized nutrition recommendations.",
    type: "website",
    url: "https://fasttools.store/tools/bmr-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "BMR Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BMR Calculator | Basal Metabolic Rate Calculator | Free Online Tool | FastTools",
    description: "Calculate your BMR (Basal Metabolic Rate) with our advanced BMR calculator. Get accurate calorie needs, TDEE, weight management goals, and personalized nutrition recommendations.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/bmr-calculator"
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

export default function BMRCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "BMR Calculator",
          description: "Advanced BMR calculator with multiple calculation methods, TDEE analysis, weight management goals, and personalized nutrition recommendations for optimal health and fitness.",
          url: "https://fasttools.store/tools/bmr-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "BMR calculation with multiple equations",
            "TDEE analysis for different activity levels",
            "Weight management calorie targets",
            "Personalized nutrition recommendations",
            "Exercise and lifestyle guidance",
            "Mifflin-St Jeor equation",
            "Harris-Benedict equation",
            "Katch-McArdle formula",
            "Activity level analysis",
            "Metabolic health insights"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced BMR Calculator - Professional Metabolic Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your Basal Metabolic Rate (BMR) with our advanced calculator. Get accurate calorie needs, TDEE analysis, weight management goals, and personalized nutrition recommendations for optimal health and fitness.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <BMRCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Advanced BMR Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Enter Your Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Enter your age (15-80 years)</li>
                      <li>Select your gender (male/female)</li>
                      <li>Enter your height in cm or ft/in</li>
                      <li>Enter your weight in kg or lbs</li>
                      <li>Choose your preferred unit system (metric/imperial)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Select Calculation Method</h3>
                    <p className="text-muted-foreground">Choose from three proven BMR equations:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Mifflin-St Jeor:</strong> Most accurate for general population</li>
                      <li><strong>Harris-Benedict:</strong> Classic equation, widely used</li>
                      <li><strong>Katch-McArdle:</strong> Most accurate for lean individuals (requires body fat %)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Get Comprehensive Results</h3>
                    <p className="text-muted-foreground">Receive detailed analysis including BMR, TDEE, activity level calories, weight management goals, and personalized recommendations.</p>
                  </div>
                </div>
              </div>

              {/* BMR Equations Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">BMR Calculation Methods</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Mifflin-St Jeor Equation (Recommended)</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                      Most accurate equation for general population. Developed in 1990 and shown to be more accurate than Harris-Benedict.
                    </p>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      <strong>Men:</strong> BMR = 10W + 6.25H - 5A + 5<br/>
                      <strong>Women:</strong> BMR = 10W + 6.25H - 5A - 161
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">Revised Harris-Benedict Equation</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                      Classic equation revised in 1984. Good for general population but slightly less accurate than Mifflin-St Jeor.
                    </p>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      <strong>Men:</strong> BMR = 13.397W + 4.799H - 5.677A + 88.362<br/>
                      <strong>Women:</strong> BMR = 9.247W + 3.098H - 4.330A + 447.593
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">Katch-McArdle Formula</h3>
                    <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                      Most accurate for lean individuals with known body fat percentage. Takes lean body mass into account.
                    </p>
                    <div className="text-xs text-purple-600 dark:text-purple-400">
                      <strong>Formula:</strong> BMR = 370 + 21.6(1 - F)W<br/>
                      <em>Where F is body fat percentage</em>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Levels Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Activity Levels & TDEE Multipliers</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Activity Level</th>
                        <th className="text-left p-2">Multiplier</th>
                        <th className="text-left p-2">Description</th>
                        <th className="text-left p-2">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Sedentary</td>
                        <td className="p-2">1.2</td>
                        <td className="p-2">Little or no exercise</td>
                        <td className="p-2">Desk job, no exercise</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Light Activity</td>
                        <td className="p-2">1.375</td>
                        <td className="p-2">Exercise 1-3 times/week</td>
                        <td className="p-2">Light walking, yoga</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Moderate Activity</td>
                        <td className="p-2">1.55</td>
                        <td className="p-2">Exercise 4-5 times/week</td>
                        <td className="p-2">Regular gym workouts</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Very Active</td>
                        <td className="p-2">1.725</td>
                        <td className="p-2">Daily exercise or intense 3-4x/week</td>
                        <td className="p-2">Daily workouts, sports</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Extremely Active</td>
                        <td className="p-2">1.9</td>
                        <td className="p-2">Intense exercise 6-7x/week or physical job</td>
                        <td className="p-2">Athletes, manual labor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Factors Affecting BMR Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Factors Affecting BMR</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Muscle Mass</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        More muscle mass increases BMR. Anaerobic exercises like weight-lifting build muscle and increase resting energy consumption.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Age</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        BMR decreases with age. Elderly individuals have lower minimum caloric requirements for organ function.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Genetics</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Hereditary traits influence BMR. Some people naturally have higher or lower metabolic rates.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Weather</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Cold environments raise BMR due to energy needed for temperature regulation. Heat can also increase BMR.
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Diet</h3>
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Small, frequent meals increase BMR. Starvation can reduce BMR by up to 30% as the body conserves energy.
                      </p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                      <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Pregnancy</h3>
                      <p className="text-sm text-pink-700 dark:text-pink-300">
                        Pregnancy increases BMR due to supporting fetal development. Menopause can also affect BMR.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is BMR and why is it important?</h3>
                    <p className="text-muted-foreground">
                      BMR (Basal Metabolic Rate) is the number of calories your body burns at rest for basic functions like breathing, circulation, and cell production. It represents 60-70% of your total daily energy expenditure and is crucial for weight management.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Which BMR equation should I use?</h3>
                    <p className="text-muted-foreground">
                      The Mifflin-St Jeor equation is most accurate for the general population. Use Katch-McArdle if you know your body fat percentage and are relatively lean. Harris-Benedict is a good alternative but slightly less accurate.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate are BMR calculators?</h3>
                    <p className="text-muted-foreground">
                      Online BMR calculators provide estimates based on statistical data. While helpful for planning, they may not be perfectly accurate for individuals. For precise measurements, consult a healthcare professional or use specialized equipment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between BMR and TDEE?</h3>
                    <p className="text-muted-foreground">
                      BMR is calories burned at rest, while TDEE (Total Daily Energy Expenditure) includes all daily activities. TDEE = BMR × Activity Factor. TDEE is what you need to maintain your current weight.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How can I increase my BMR?</h3>
                    <p className="text-muted-foreground">
                      Build muscle through strength training, eat regular meals, stay hydrated, get adequate sleep, and maintain an active lifestyle. Muscle tissue burns more calories at rest than fat tissue.
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
