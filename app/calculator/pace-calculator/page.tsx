import { Metadata } from "next"
import PaceCalculator from "@/components/pace-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Percent, Award, Globe, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Pace Calculator | Advanced Running Pace Calculator | Free Online Tool | FastTools",
  description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes. Free, accurate, and comprehensive.",
    keywords: [
        "pace calculator",
        "running pace calculator",
        "running pace",
        "pace per mile",
        "pace per kilometer",
        "pace per km",
        "pace per mile calculator",
        "pace per km calculator",
        "running pace per mile",
        "running pace per km",
        "marathon pace calculator",
        "half marathon pace calculator",
        "5k pace calculator",
        "10k pace calculator",
        "ultramarathon pace calculator",
        "race pace calculator",
        "race time predictor",
        "running speed calculator",
        "pace converter",
        "running pace conversion",
        "running time calculator",
        "distance pace calculator",
        "pace and time calculator",
        "pace to speed calculator",
        "training pace calculator",
        "average pace calculator",
        "pace chart",
        "pace table",
        "running pace chart",
        "marathon pace chart",
        "race pace chart",
        "running pace guide",
        "pace planning tool",
        "running goal calculator",
        "running performance calculator",
        "race finish time predictor",
        "pace time distance calculator",
        "running pace estimator",
        "running pace trainer",
        "advanced pace calculator",
        "professional pace calculator",
        "pace analysis tool",
        "running analytics",
        "running data analysis",
        "running performance analysis",
        "pace zones calculator",
        "heart rate zones",
        "pace heart rate calculator",
        "VO2 max pace calculator",
        "running training calculator",
        "run pace planner",
        "race predictor tool",
        "pace improvement tracker",
        "pace optimization tool",
        "running pace strategy",
        "running pace app",
        "free pace calculator",
        "online pace calculator",
        "running calculator online",
        "marathon time calculator",
        "run time estimator",
        "running distance calculator"
    ],

  openGraph: {
    title: "Pace Calculator | Advanced Running Pace Calculator | Free Online Tool | FastTools",
    description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes.",
    type: "website",
    url: "https://fasttools.store/calculator/pace-calculator",
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
    canonical: "https://fasttools.store/calculator/pace-calculator"
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
          name: "Pace Calculator | Advanced Running Pace Calculator - Professional Running Tool with Training Zones",
          description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes. Free, accurate, and comprehensive running analysis tool.",
          url: "https://fasttools.store/calculator/pace-calculator",
          applicationCategory: "SportsApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Basic Pace Calculation",
            "Multipoint Pace Analysis",
            "Pace Conversion",
            "Finish Time Prediction",
            "Heart Rate Zone Analysis",
            "Training Zone Recommendations",
            "VO2 Max Estimation",
            "Race Time Predictions",
            "Calories Burned Calculation",
            "Advanced Athletic Metrics",
            "Running Performance Analysis",
            "Training Zone Optimization",
            "Heart Rate Monitoring",
            "Race Strategy Planning",
            "Performance Tracking",
            "Running Analytics",
            "Pace Training Zones",
            "Athletic Performance Metrics",
            "Running Data Analysis",
            "Training Optimization"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Pace Calculator", href: "/calculator/pace-calculator" },
            ]}
          />

          <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-yellow-400">Pace Calculator - Advanced Running Pace Calculator</h1>
              <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                <strong>Calculate running pace</strong>, <strong>training zones</strong>, <strong>heart rate zones</strong>, <strong>race predictions</strong>, and <strong>VO2 Max</strong> with our <strong>advanced pace calculator</strong>. Perfect for <strong>runners</strong>, <strong>coaches</strong>, and <strong>serious athletes</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
              <div>
                <PaceCalculator />
                
                {/* Mobile/Tablet AdSpace */}
                <div className="my-6 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
                </div>
            
                {/* Educational Content Sections */}
                <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                  {/* How to Use Section */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calculator className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      How to Use Pace Calculator
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">1. Basic Pace Calculation</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Enter time in hours:minutes:seconds format and distance to get instant pace, speed, and training recommendations</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">2. Multipoint Analysis</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Track pace for different segments of your run to analyze performance variations and identify improvement areas</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">3. Pace Conversion</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Convert between pace per mile and pace per kilometer for international training and racing</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">4. Advanced Metrics</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Get heart rate zones, VO2 Max estimation, calories burned, and race time predictions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Target className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg">
                            <Calculator className="h-3 w-3 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Pace Calculation</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Accurate pace calculations for any distance and time combination</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Training Zones</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Heart rate zone analysis and training zone recommendations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <TrendingUp className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">VO2 Max Estimation</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Advanced cardiovascular fitness assessment and performance metrics</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <BookOpen className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Race Predictions</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Accurate race time predictions for 5K, 10K, half marathon, and marathon</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-red-100 dark:bg-red-900/20 rounded-lg">
                            <Users className="h-3 w-3 text-red-600 dark:text-red-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Performance Analysis</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Comprehensive running performance analysis and optimization insights</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                            <Clock className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Multipoint Tracking</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Track pace variations across different segments of your run</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Home className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">For Runners</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Calculate accurate running pace for any distance</li>
                          <li>• Track training progress and performance improvements</li>
                          <li>• Plan race strategies and pacing</li>
                          <li>• Monitor heart rate zones during training</li>
                          <li>• Analyze running data and optimize performance</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">For Coaches</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Design training programs and workouts</li>
                          <li>• Monitor athlete performance and progress</li>
                          <li>• Calculate training zones and intensities</li>
                          <li>• Predict race times and set goals</li>
                          <li>• Analyze running data and provide feedback</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How accurate is the pace calculator?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides highly accurate pace calculations based on standard running formulas. The heart rate zones and VO2 Max estimates are based on established physiological models used by professional coaches and sports scientists.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What's the difference between pace per mile and pace per kilometer?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Pace per mile is commonly used in the US, while pace per kilometer is used internationally. 1 mile = 1.60934 kilometers, so a 6:00/mile pace equals approximately 3:44/km pace.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I use the multipoint calculator?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Enter the distance and time for each segment of your run. The calculator will show your pace for each segment and help you analyze performance variations throughout your run.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What is VO2 Max and why is it important?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          VO2 Max is the maximum amount of oxygen your body can use during exercise. It's a key indicator of cardiovascular fitness and endurance performance. Higher VO2 Max generally correlates with better running performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can I improve my running pace?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Focus on consistent training, proper recovery, and varied workouts including easy runs, tempo runs, intervals, and long runs. Use the training zones to structure your workouts effectively.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the different training zones and how do I use them?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Training zones are based on heart rate percentages: Recovery (50-60%), Aerobic Base (60-70%), Aerobic Threshold (70-80%), Lactate Threshold (80-90%), and VO2 Max (90-100%). Each zone serves different training purposes for optimal performance development.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I calculate my maximum heart rate?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The most common formula is 220 minus your age, but this is an estimate. For more accuracy, consider a professional fitness test. Our calculator uses this standard formula but you can input your known max HR for more precise zone calculations.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I use this calculator for different types of running?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our calculator works for all types of running including road running, trail running, track running, and treadmill running. The pace calculations and training zones apply to any running surface or environment.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How accurate are the race time predictions?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Race time predictions are based on established running performance formulas and are generally accurate within 2-5% for most runners. However, factors like weather, course difficulty, and training status can affect actual race performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What information do I need to get the most accurate results?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          For the most accurate results, provide your exact time and distance, accurate weight and age for calorie calculations, and your known maximum heart rate if available. The more accurate your input data, the more precise your results will be.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the five main heart rate training zones and their benefits?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The five main heart rate zones are: Recovery (50-60% max HR) for easy recovery runs and active rest, Aerobic Base (60-70% max HR) for long runs and aerobic development, Aerobic Threshold (70-80% max HR) for comfortable hard tempo runs, Lactate Threshold (80-90% max HR) for race pace training and intervals, and VO2 Max (90-100% max HR) for high-intensity speed work and power development.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How does VO2 Max estimation work in the pace calculator?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our VO2 Max estimation uses established physiological models based on your distance, time, and age. It's calculated using Cooper Test methodology and performance data to assess your cardiovascular fitness level. Higher VO2 Max generally correlates with better running performance across all distances and helps estimate your performance potential.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the world record paces for major running distances?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          World record paces include: 5K (4:04/mile or 2:31/km), 10K (4:14/mile or 2:38/km), Half Marathon (4:27/mile or 2:46/km), and Marathon (4:41/mile or 2:55/km) for men. Women's records are: 5K (4:34/mile or 2:50/km), 10K (4:45/mile or 2:57/km), Half Marathon (4:58/mile or 3:05/km), and Marathon (5:10/mile or 3:13/km). These represent the pinnacle of human running performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How accurate are race time predictions for different distances?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Race time predictions are based on established running performance models and are generally accurate within 2-5% for most runners. The predictions work for 5K, 10K, Half Marathon, and Marathon distances. However, factors like weather, course difficulty, training status, and individual variations can affect actual race performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What is the standard conversion between pace per mile and pace per kilometer?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The standard conversion factor is 1 mile = 1.60934 kilometers. To convert pace per mile to pace per kilometer, multiply by 0.621371. For example, 6:00/mile equals approximately 3:44/km pace, and 4:00/km equals approximately 6:26/mile. This is essential for international training and racing.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can I use multipoint pace analysis to improve my running?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Multipoint pace analysis tracks pace variations across different segments of your run to identify performance patterns, fatigue points, and improvement areas. It's perfect for race analysis, training optimization, and pace strategy development. You can compare pace across segments to identify strengths and weaknesses for targeted training.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What cardiovascular fitness categories does the calculator assess?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator assesses cardiovascular fitness using five categories: Poor, Fair, Good, Very Good, and Excellent. These categories are based on your VO2 Max estimation and compare your fitness level to age-group standards. This helps you understand your current fitness level and set realistic performance goals.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I calculate calories burned during running?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator calculates calories burned based on your pace, distance, and body weight using established metabolic formulas. The calculation considers your running speed, body weight, and exercise duration to provide accurate calorie expenditure estimates. This helps with nutrition planning and weight management during training.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What professional organizations' standards does the calculator follow?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator follows standards from World Athletics for official records, American College of Sports Medicine (ACSM) for exercise guidelines, National Strength and Conditioning Association (NSCA) for training standards, American Heart Association (AHA) for heart rate guidelines, and International Olympic Committee (IOC) for Olympic athletics standards.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can coaches use this calculator for athlete development?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Coaches can use this calculator for athlete performance analysis, training program design, race strategy development, and performance monitoring. It provides tools for designing training programs, calculating training zones and intensities, predicting race times, setting goals, and analyzing running data to provide targeted feedback for athlete development.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the benefits of using training zones for running?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Training zones optimize training intensity for maximum performance gains. They help structure workouts effectively, prevent overtraining, ensure proper recovery, and target specific physiological adaptations. Each zone serves different training purposes: aerobic base building, lactate threshold improvement, VO2 max development, and neuromuscular power enhancement.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How does the calculator help with international training and racing?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator provides pace conversion between miles and kilometers, essential for athletes training in different countries or competing internationally. It offers global training compatibility, international race preparation, and seamless conversion between US and international pace standards. This is particularly useful for elite athletes and international competitors.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What performance metrics does the advanced calculator provide?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The advanced calculator provides comprehensive performance metrics including pace calculations, heart rate zone analysis, VO2 Max estimation, race time predictions, calories burned calculation, training zone recommendations, multipoint segment analysis, performance tracking, and training optimization insights. These metrics help serious athletes optimize their training and performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can I use the calculator for race strategy development?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Use the calculator to predict race times for different distances, analyze pace variations across race segments, develop pacing strategies based on your fitness level, and practice race-specific pacing. The multipoint analysis helps identify where you typically slow down or speed up, allowing you to develop targeted race strategies for optimal performance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What makes this pace calculator different from basic pace calculators?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our advanced calculator goes beyond basic pace calculation to provide professional-grade analytics including heart rate zone analysis, VO2 Max estimation, race predictions, multipoint analysis, training zone recommendations, and comprehensive performance metrics. It's designed for serious athletes, coaches, and sports scientists who need detailed performance analysis and optimization tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      </div>
                      Related Fitness & Health Calculators
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                        { name: "Calorie Calculator", desc: "Calculate daily calorie needs", href: "/calculator/calorie-calculator", icon: TrendingUp },
                        { name: "Body Fat Calculator", desc: "Calculate body fat percentage", href: "/calculator/body-fat-calculator", icon: BarChart3 },
                        { name: "BMR Calculator", desc: "Calculate Basal Metabolic Rate", href: "/calculator/bmr-calculator", icon: Home },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                        { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                        { name: "Investment Calculator", desc: "Calculate investment returns", href: "/calculator/investment-calculator", icon: DollarSign },
                        { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                        { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                        { name: "Tax Calculator", desc: "Calculate income tax", href: "/calculator/tax-calculator", icon: FileText },
                        { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                        { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                      ].map(({ name, desc, icon: Icon, href }) => (
                        <a
                          key={name}
                          href={href}
                          className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3 w-3 text-primary group-hover:text-primary/80" />
                            <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary">{name}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground">{desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-4 lg:space-y-6">
                <div className="sticky top-4 space-y-4 lg:space-y-6">
                  {/* Sidebar Ad 1 */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-64 md:h-80 rounded-lg overflow-hidden" />
                  </div>
                  
                  {/* Sidebar Ad 2 */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <AdSpace slot="sidebar" className="h-64 md:h-80 rounded-lg overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
