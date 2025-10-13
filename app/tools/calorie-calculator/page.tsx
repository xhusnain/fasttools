import { Metadata } from "next"
import CalorieCalculator from "@/components/calorie-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Calorie Calculator | Free Online Calorie Calculator | Daily Calorie Needs | FastTools",
  description: "Calculate your daily calorie needs with our advanced calorie calculator. Get BMR, TDEE, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.",
  keywords: [
    "calorie calculator",
    "daily calorie calculator",
    "calorie needs calculator",
    "calorie intake calculator",
    "calorie burn calculator",
    "calorie counter",
    "calorie tracker",
    "bmr calculator",
    "tdee calculator",
    "basal metabolic rate",
    "total daily energy expenditure",
    "calorie deficit calculator",
    "calorie surplus calculator",
    "weight loss calculator",
    "weight gain calculator",
    "calorie cycling",
    "zigzag diet",
    "calorie counting",
    "calorie management",
    "calorie planning",
    "calorie optimization",
    "calorie analysis",
    "calorie assessment",
    "calorie estimation",
    "calorie calculation",
    "calorie requirements",
    "calorie goals",
    "calorie targets",
    "calorie recommendations",
    "calorie guidelines",
    "calorie planning tool",
    "calorie calculator online",
    "free calorie calculator",
    "accurate calorie calculator",
    "professional calorie calculator",
    "advanced calorie calculator",
    "calorie calculator tool",
    "calorie calculator app",
    "calorie calculator website",
    "calorie calculator free",
    "calorie calculator accurate",
    "calorie calculator professional",
    "calorie calculator metric",
    "calorie calculator imperial",
    "calorie calculator male",
    "calorie calculator female",
    "calorie calculator age",
    "calorie calculator weight",
    "calorie calculator height",
    "calorie calculator activity",
    "calorie calculator exercise",
    "calorie calculator fitness",
    "calorie calculator health",
    "calorie calculator nutrition",
    "calorie calculator diet",
    "calorie calculator meal planning",
    "calorie calculator food",
    "calorie calculator energy",
    "calorie calculator metabolism",
    "calorie calculator body composition",
    "calorie calculator weight management",
    "calorie calculator lifestyle",
    "calorie calculator wellness"
  ],
  openGraph: {
    title: "Calorie Calculator | Free Online Calorie Calculator | Daily Calorie Needs | FastTools",
    description: "Calculate your daily calorie needs with our advanced calorie calculator. Get BMR, TDEE, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.",
    type: "website",
    url: "https://fasttools.store/tools/calorie-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Calorie Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Calorie Calculator | Free Online Calorie Calculator | Daily Calorie Needs | FastTools",
    description: "Calculate your daily calorie needs with our advanced calorie calculator. Get BMR, TDEE, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/calorie-calculator"
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

export default function CalorieCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Calorie Calculator",
          description: "Advanced calorie calculator with multiple calculation methods, BMR analysis, TDEE calculation, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.",
          url: "https://fasttools.store/tools/calorie-calculator",
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
            "Zigzag calorie cycling plans",
            "Food energy converter",
            "Personalized nutrition recommendations",
            "Meal planning guidance",
            "Mifflin-St Jeor equation",
            "Harris-Benedict equation",
            "Katch-McArdle formula"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Calorie Calculator - Professional Daily Calorie Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate your daily calorie needs with our advanced calculator using multiple proven equations. Get BMR, TDEE, weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health and fitness.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <CalorieCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Advanced Calorie Calculator</h2>
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
                    <p className="text-muted-foreground">Choose from three proven calorie equations:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Mifflin-St Jeor:</strong> Most accurate for general population</li>
                      <li><strong>Harris-Benedict:</strong> Classic equation, widely used</li>
                      <li><strong>Katch-McArdle:</strong> Most accurate for lean individuals (requires body fat %)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Choose Activity Level</h3>
                    <p className="text-muted-foreground">Select your activity level for accurate TDEE calculation:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li><strong>Sedentary:</strong> Little or no exercise</li>
                      <li><strong>Light Activity:</strong> Exercise 1-3 times/week</li>
                      <li><strong>Moderate Activity:</strong> Exercise 4-5 times/week</li>
                      <li><strong>Very Active:</strong> Daily exercise or intense 3-4x/week</li>
                      <li><strong>Extremely Active:</strong> Intense exercise 6-7x/week or physical job</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 4: Get Comprehensive Results</h3>
                    <p className="text-muted-foreground">Receive detailed analysis including BMR, TDEE, weight management goals, zigzag calorie cycling, meal plans, and personalized recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Calorie Equations Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Calorie Calculation Methods</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Mifflin-St Jeor Equation (Most Accurate)</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      Developed in 1990, this equation is considered the most accurate for the general population. It's more precise than the Harris-Benedict equation.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm font-mono">
                        <div className="mb-2"><strong>Men:</strong> BMR = 10W + 6.25H - 5A + 5</div>
                        <div><strong>Women:</strong> BMR = 10W + 6.25H - 5A - 161</div>
                        <div className="text-xs text-muted-foreground mt-2">
                          W = weight in kg, H = height in cm, A = age in years
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Revised Harris-Benedict Equation</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      Originally developed in 1919, revised in 1984. While widely used, it's slightly less accurate than Mifflin-St Jeor for most people.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm font-mono">
                        <div className="mb-2"><strong>Men:</strong> BMR = 13.397W + 4.799H - 5.677A + 88.362</div>
                        <div><strong>Women:</strong> BMR = 9.247W + 3.098H - 4.330A + 447.593</div>
                        <div className="text-xs text-muted-foreground mt-2">
                          W = weight in kg, H = height in cm, A = age in years
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Katch-McArdle Formula</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                      Most accurate for lean individuals with known body fat percentage. Takes lean body mass into account, making it superior for athletes and lean people.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm font-mono">
                        <div className="mb-2"><strong>Formula:</strong> BMR = 370 + 21.6(1 - F)W</div>
                        <div className="text-xs text-muted-foreground mt-2">
                          W = weight in kg, F = body fat percentage (as decimal)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zigzag Calorie Cycling Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Zigzag Calorie Cycling</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Zigzag calorie cycling is a weight loss approach that aims to counteract the human body's natural adaptive tendencies. By alternating high-calorie and low-calorie days, you prevent metabolic adaptation and maintain weight loss progress.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Benefits of Zigzag Cycling</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• Prevents metabolic adaptation</li>
                        <li>• Maintains weight loss progress</li>
                        <li>• Provides dietary flexibility</li>
                        <li>• Reduces diet fatigue</li>
                        <li>• Allows for social occasions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">How It Works</h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>• Alternate high and low calorie days</li>
                        <li>• Maintain weekly calorie target</li>
                        <li>• High days: +200-300 calories</li>
                        <li>• Low days: -200-300 calories</li>
                        <li>• Prevents metabolic slowdown</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between BMR and TDEE?</h3>
                    <p className="text-muted-foreground">
                      BMR (Basal Metabolic Rate) is calories burned at rest for basic body functions. TDEE (Total Daily Energy Expenditure) includes BMR plus all daily activities. TDEE = BMR × Activity Factor.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Which calorie equation should I use?</h3>
                    <p className="text-muted-foreground">
                      The Mifflin-St Jeor equation is most accurate for the general population. Use Katch-McArdle if you know your body fat percentage and are relatively lean. Harris-Benedict is a good alternative but slightly less accurate.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate are calorie calculators?</h3>
                    <p className="text-muted-foreground">
                      Online calorie calculators provide estimates based on statistical data. While helpful for planning, they may not be perfectly accurate for individuals. For precise measurements, consult a healthcare professional or use specialized equipment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is zigzag calorie cycling?</h3>
                    <p className="text-muted-foreground">
                      Zigzag calorie cycling involves alternating high-calorie and low-calorie days to prevent metabolic adaptation. This approach helps maintain weight loss progress and provides dietary flexibility while meeting weekly calorie targets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How many calories should I eat to lose weight?</h3>
                    <p className="text-muted-foreground">
                      For safe weight loss, create a caloric deficit of 500-750 calories per day. This typically results in 1-1.5 pounds of weight loss per week. Never eat below your BMR as this can slow metabolism.
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
