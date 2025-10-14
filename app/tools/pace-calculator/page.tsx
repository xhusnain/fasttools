import { Metadata } from "next"
import PaceCalculator from "@/components/pace-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Pace Calculator | Advanced Running Pace Calculator | Free Online Tool | FastTools",
  description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes. Free, accurate, and comprehensive.",
  keywords: [
    "pace calculator",
    "running pace calculator",
    "running pace",
    "pace per mile",
    "pace per kilometer",
    "running pace per mile",
    "running pace per km",
    "marathon pace calculator",
    "5k pace calculator",
    "10k pace calculator",
    "half marathon pace",
    "marathon pace",
    "running pace conversion",
    "pace converter",
    "running speed calculator",
    "race pace calculator",
    "training pace calculator",
    "running pace analysis",
    "pace per mile calculator",
    "pace per km calculator",
    "running pace tool",
    "pace calculation",
    "running pace formula",
    "pace time distance",
    "running pace guide",
    "pace training",
    "running pace zones",
    "heart rate zones",
    "VO2 max calculator",
    "running performance",
    "athletic pace calculator",
    "professional pace calculator",
    "advanced pace calculator",
    "pace calculator online",
    "free pace calculator",
    "running pace estimator",
    "pace prediction",
    "race pace predictor",
    "running pace trainer",
    "pace coaching tool",
    "running analytics",
    "pace metrics",
    "running data analysis",
    "pace optimization",
    "running performance analysis",
    "pace improvement",
    "running pace strategy",
    "pace planning",
    "running pace guide",
    "pace training zones",
    "running pace zones",
    "pace heart rate",
    "running pace heart rate",
    "pace and heart rate",
    "running pace analysis tool"
  ],
  openGraph: {
    title: "Pace Calculator | Advanced Running Pace Calculator | Free Online Tool | FastTools",
    description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes.",
    type: "website",
    url: "https://fasttools.store/tools/pace-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pace Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pace Calculator | Advanced Running Pace Calculator | Free Online Tool | FastTools",
    description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/pace-calculator"
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

export default function PaceCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pace Calculator",
          description: "Advanced running pace calculator with training zones, heart rate analysis, race predictions, and VO2 Max estimation for serious athletes and coaches.",
          url: "https://fasttools.store/tools/pace-calculator",
          applicationCategory: "SportsApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Basic pace calculation",
            "Multipoint pace analysis",
            "Pace conversion",
            "Finish time prediction",
            "Heart rate zone analysis",
            "Training zone recommendations",
            "VO2 Max estimation",
            "Race time predictions",
            "Calories burned calculation",
            "Advanced athletic metrics"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Pace Calculator - Professional Running Tool
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and serious athletes.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <PaceCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Advanced Pace Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Basic Pace Calculation</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Enter your time in hours:minutes:seconds format (e.g., 0:50:25)</li>
                      <li>Enter your distance in kilometers or miles</li>
                      <li>Add your weight and age for advanced metrics</li>
                      <li>Get instant pace, speed, heart rate zones, and training recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Multipoint Analysis</h3>
                    <p className="text-muted-foreground">Track pace for different segments of your run to analyze performance variations and identify improvement areas.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pace Conversion</h3>
                    <p className="text-muted-foreground">Convert between pace per mile and pace per kilometer for international training and racing.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Finish Time Prediction</h3>
                    <p className="text-muted-foreground">Estimate your finish time based on current pace and remaining distance.</p>
                  </div>
                </div>
              </div>

              {/* Advanced Features Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Professional Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Training Analysis</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Heart rate zone analysis (Recovery, Aerobic, Threshold, VO2 Max)</li>
                      <li>• Training zone recommendations</li>
                      <li>• VO2 Max estimation</li>
                      <li>• Calories burned calculation</li>
                      <li>• Race time predictions for 5K, 10K, Half Marathon, Marathon</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Athletic Metrics</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Advanced pace analysis</li>
                      <li>• Speed and pace conversion</li>
                      <li>• Multipoint segment analysis</li>
                      <li>• Performance tracking</li>
                      <li>• Training optimization insights</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* World Records Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">World Record Paces</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Distance</th>
                        <th className="text-left p-2">Men's WR Pace</th>
                        <th className="text-left p-2">Women's WR Pace</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">100 meters</td>
                        <td className="p-2">2:35/mile or 1:36/km</td>
                        <td className="p-2">2:49/mile or 1:45/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">200 meters</td>
                        <td className="p-2">2:35/mile or 1:36/km</td>
                        <td className="p-2">2:52/mile or 1:47/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">400 meters</td>
                        <td className="p-2">2:54/mile or 1:48/km</td>
                        <td className="p-2">3:12/mile or 1:59/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">800 meters</td>
                        <td className="p-2">3:23/mile or 2:06/km</td>
                        <td className="p-2">3:48/mile or 2:21/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">1,500 meters</td>
                        <td className="p-2">3:41/mile or 2:17/km</td>
                        <td className="p-2">4:07/mile or 2:34/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">1 mile</td>
                        <td className="p-2">3:43/mile or 2:19/km</td>
                        <td className="p-2">4:13/mile or 2:37/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">5K</td>
                        <td className="p-2">4:04/mile or 2:31/km</td>
                        <td className="p-2">4:34/mile or 2:50/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">10K</td>
                        <td className="p-2">4:14/mile or 2:38/km</td>
                        <td className="p-2">4:45/mile or 2:57/km</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Half Marathon</td>
                        <td className="p-2">4:27/mile or 2:46/km</td>
                        <td className="p-2">4:58/mile or 3:05/km</td>
                      </tr>
                      <tr>
                        <td className="p-2">Marathon</td>
                        <td className="p-2">4:41/mile or 2:55/km</td>
                        <td className="p-2">5:10/mile or 3:13/km</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Training Zones Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Training Zones & Heart Rate</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Recovery Zone (50-60% max HR)</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">Easy pace for recovery runs, active rest, and building aerobic base.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Aerobic Base (60-70% max HR)</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Comfortable pace for long runs and building aerobic fitness.</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Aerobic Threshold (70-80% max HR)</h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Comfortable hard pace for tempo runs and threshold training.</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Lactate Threshold (80-90% max HR)</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300">Race pace training and interval workouts.</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">VO2 Max (90-100% max HR)</h3>
                      <p className="text-sm text-red-700 dark:text-red-300">High-intensity intervals and speed work.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate is the pace calculator?</h3>
                    <p className="text-muted-foreground">
                      Our calculator provides highly accurate pace calculations based on standard running formulas. The heart rate zones and VO2 Max estimates are based on established physiological models used by professional coaches and sports scientists.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between pace per mile and pace per kilometer?</h3>
                    <p className="text-muted-foreground">
                      Pace per mile is commonly used in the US, while pace per kilometer is used internationally. 1 mile = 1.60934 kilometers, so a 6:00/mile pace equals approximately 3:44/km pace.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I use the multipoint calculator?</h3>
                    <p className="text-muted-foreground">
                      Enter the distance and time for each segment of your run. The calculator will show your pace for each segment and help you analyze performance variations throughout your run.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What is VO2 Max and why is it important?</h3>
                    <p className="text-muted-foreground">
                      VO2 Max is the maximum amount of oxygen your body can use during exercise. It's a key indicator of cardiovascular fitness and endurance performance. Higher VO2 Max generally correlates with better running performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How can I improve my running pace?</h3>
                    <p className="text-muted-foreground">
                      Focus on consistent training, proper recovery, and varied workouts including easy runs, tempo runs, intervals, and long runs. Use the training zones to structure your workouts effectively.
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
