import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { 
  Clock, 
  Users, 
  Star, 
  TrendingUp, 
  BookOpen, 
  Globe, 
  ArrowRight,
  Heart,
  Target,
  Activity,
  Timer,
  Route,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Trophy,
  Zap,
  Calculator,
  MapPin,
  Gauge
} from "lucide-react"

export default function PaceCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Pace Calculator Guide - Advanced Running Analytics
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master pace calculation, training zones, heart rate analysis, and race predictions with our comprehensive guide to advanced running pace calculators for serious athletes and coaches.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>45 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>5,000,000+ athletes</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>4.9/5 rating</span>
          </div>
        </div>
      </div>

      {/* Sponsored Content */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Sponsored</span>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
            <div className="text-center">
              <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
              <AdSpace slot="content" className="h-32 rounded-xl overflow-hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#basics" className="block text-primary hover:underline">
              1. Pace Calculator Basics
            </Link>
            <Link href="#advanced-features" className="block text-primary hover:underline">
              2. Advanced Features & Analytics
            </Link>
            <Link href="#training-zones" className="block text-primary hover:underline">
              3. Training Zones & Heart Rate Analysis
            </Link>
            <Link href="#race-predictions" className="block text-primary hover:underline">
              4. Race Predictions & Performance Analysis
            </Link>
            <Link href="#multipoint-analysis" className="block text-primary hover:underline">
              5. Multipoint Pace Analysis
            </Link>
            <Link href="#vo2-max" className="block text-primary hover:underline">
              6. VO2 Max & Performance Metrics
            </Link>
            <Link href="#pace-conversion" className="block text-primary hover:underline">
              7. Pace Conversion & International Standards
            </Link>
            <Link href="#training-applications" className="block text-primary hover:underline">
              8. Training Applications & Coaching
            </Link>
            <Link href="#world-records" className="block text-primary hover:underline">
              9. World Records & Elite Performance
            </Link>
            <Link href="#faq" className="block text-primary hover:underline">
              10. Frequently Asked Questions
            </Link>
          </nav>
        </CardContent>
      </Card>

      {/* Official Documentation References */}
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
              <BookOpen className="h-5 w-5" />
              Official Documentation References
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-700 dark:text-green-300 mb-4">
              These official sources provide authoritative information about running pace, training zones, and athletic performance standards:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <a href="https://www.worldathletics.org/records" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    World Athletics - Official Records & Standards
                  </a>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    World Athletics - Official world records and performance standards for all running events
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <a href="https://www.acsm.org/guidelines" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    ACSM - Exercise Guidelines & Standards
                  </a>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    American College of Sports Medicine - Official exercise science guidelines and training standards
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <a href="https://www.nsca.com/education" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    NSCA - Strength & Conditioning Guidelines
                  </a>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    National Strength and Conditioning Association - Professional training and performance standards
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <a href="https://www.heart.org/en/healthy-living/fitness" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    AHA - Heart Rate & Exercise Guidelines
                  </a>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    American Heart Association - Official heart rate and cardiovascular exercise guidelines
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <a href="https://www.olympic.org/athletics" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                    IOC - Olympic Athletics Standards
                  </a>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                    International Olympic Committee - Olympic athletics performance standards and records
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 1: Basics */}
      <section id="basics" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Pace Calculator Basics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">What is a Pace Calculator?</h3>
              <p className="text-muted-foreground mb-4">
                A pace calculator is an advanced tool that calculates running pace, training zones, heart rate analysis, and performance metrics. Our professional-grade calculator goes beyond basic pace calculation to provide comprehensive athletic analysis for serious runners, coaches, and sports scientists.
              </p>
              <p className="text-muted-foreground mb-4">
                Our advanced pace calculator provides multiple calculation modes including basic pace calculation, multipoint analysis, pace conversion, and finish time prediction, along with professional metrics like VO2 Max estimation, heart rate zones, and race predictions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features of Our Advanced Calculator</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Multiple Calculation Modes</h4>
                      <p className="text-sm text-muted-foreground">Basic pace, multipoint analysis, pace conversion, and finish time prediction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Heart Rate Zone Analysis</h4>
                      <p className="text-sm text-muted-foreground">Professional heart rate zone calculations and training recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">VO2 Max Estimation</h4>
                      <p className="text-sm text-muted-foreground">Advanced cardiovascular fitness assessment and performance metrics</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Race Predictions</h4>
                      <p className="text-sm text-muted-foreground">Accurate finish time predictions for 5K, 10K, Half Marathon, and Marathon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Training Zone Recommendations</h4>
                      <p className="text-sm text-muted-foreground">Professional training zone analysis for optimal performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Calories Burned Calculation</h4>
                      <p className="text-sm text-muted-foreground">Accurate calorie expenditure based on pace, distance, and body weight</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Advanced Features */}
      <section id="advanced-features" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-500" />
              Advanced Features & Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional-Grade Analytics</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Multipoint Pace Analysis</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Track pace variations across different segments of your run to identify performance patterns and improvement areas.
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Perfect for: Race analysis, training optimization, pace strategy development
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Heart Rate Zone Analysis</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                    Professional heart rate zone calculations based on maximum heart rate and training intensity.
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Zones: Recovery (50-60%), Aerobic (60-70%), Threshold (70-80%), VO2 Max (80-90%)
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">VO2 Max Estimation</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    Advanced cardiovascular fitness assessment using established physiological models.
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    Based on: Distance, time, age, and performance data
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Race Time Predictions</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
                    Accurate finish time predictions for major race distances based on current pace performance.
                  </p>
                  <p className="text-xs text-orange-600 dark:text-orange-400">
                    Distances: 5K, 10K, Half Marathon, Marathon
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: Training Zones */}
      <section id="training-zones" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Training Zones & Heart Rate Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Training Zone Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Our calculator provides comprehensive heart rate zone analysis based on established exercise science principles. These zones help optimize training intensity for maximum performance gains.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Recovery Zone (50-60% max HR)</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Easy pace for recovery runs and active rest</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Aerobic Base (60-70% max HR)</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Comfortable pace for long runs and aerobic development</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Aerobic Threshold (70-80% max HR)</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">Comfortable hard pace for tempo runs</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Lactate Threshold (80-90% max HR)</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Race pace training and interval workouts</p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200">VO2 Max (90-100% max HR)</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">High-intensity intervals and speed work</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Neuromuscular Power</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Maximum effort sprints and power development</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Race Predictions */}
      <section id="race-predictions" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Race Predictions & Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Advanced Race Time Predictions</h3>
              <p className="text-muted-foreground mb-4">
                Our calculator provides accurate race time predictions based on your current pace performance. These predictions are based on established running performance models and can help you set realistic goals and plan your training.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">5K Race Prediction</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Based on your current pace, predict your 5K finish time. Perfect for track workouts and short-distance training.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">10K Race Prediction</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Estimate your 10K performance based on current training pace and fitness level.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Half Marathon Prediction</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Predict your half marathon finish time for proper pacing and training planning.
                  </p>
                </div>
                
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Marathon Prediction</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Estimate your marathon finish time for proper training and race strategy development.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Multipoint Analysis */}
      <section id="multipoint-analysis" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5 text-indigo-500" />
              Multipoint Pace Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Advanced Segment Analysis</h3>
              <p className="text-muted-foreground mb-4">
                The multipoint pace calculator allows you to analyze pace variations across different segments of your run. This is particularly useful for race analysis, training optimization, and identifying areas for improvement.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">Segment Pace Tracking</h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Track pace for each segment of your run to identify performance patterns and variations.
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">
                    Perfect for: Race analysis, training optimization, pace strategy development
                  </p>
                </div>
                
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Split Time Analysis</h4>
                  <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
                    Analyze split times between segments to understand pace changes and fatigue patterns.
                  </p>
                  <p className="text-xs text-teal-600 dark:text-teal-400">
                    Useful for: Identifying pacing issues, training adjustments, race strategy
                  </p>
                </div>
                
                <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Performance Comparison</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300 mb-2">
                    Compare pace across different segments to identify strengths and weaknesses.
                  </p>
                  <p className="text-xs text-pink-600 dark:text-pink-400">
                    Benefits: Targeted training, performance improvement, race preparation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 6: VO2 Max */}
      <section id="vo2-max" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-500" />
              VO2 Max & Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Advanced Performance Metrics</h3>
              <p className="text-muted-foreground mb-4">
                VO2 Max is the maximum amount of oxygen your body can use during exercise. It's a key indicator of cardiovascular fitness and endurance performance. Our calculator provides accurate VO2 Max estimation based on your running performance.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">VO2 Max Estimation</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                    Calculate your VO2 Max based on distance, time, and age using established physiological models.
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    Based on: Cooper Test methodology and performance data
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Cardiovascular Fitness Assessment</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    Assess your cardiovascular fitness level and compare it to age-group standards.
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    Categories: Poor, Fair, Good, Very Good, Excellent
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Performance Potential</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                    Estimate your performance potential across different race distances.
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Useful for: Goal setting, training planning, performance optimization
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 7: Pace Conversion */}
      <section id="pace-conversion" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="h-5 w-5 text-cyan-500" />
              Pace Conversion & International Standards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">International Pace Standards</h3>
              <p className="text-muted-foreground mb-4">
                Our pace converter allows you to convert between pace per mile and pace per kilometer, essential for international training and racing. This is particularly useful for athletes training in different countries or competing in international events.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">Mile to Kilometer Conversion</h4>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300 mb-2">
                    Convert pace per mile to pace per kilometer using the standard conversion factor of 1.60934.
                  </p>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400">
                    Example: 6:00/mile = 3:44/km
                  </p>
                </div>
                
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-2">Kilometer to Mile Conversion</h4>
                  <p className="text-sm text-teal-700 dark:text-teal-300 mb-2">
                    Convert pace per kilometer to pace per mile for US-based training and racing.
                  </p>
                  <p className="text-xs text-teal-600 dark:text-teal-400">
                    Example: 4:00/km = 6:26/mile
                  </p>
                </div>
                
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">International Training</h4>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Essential for athletes training in different countries or competing internationally.
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">
                    Benefits: Global training compatibility, international race preparation
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 8: Training Applications */}
      <section id="training-applications" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-500" />
              Training Applications & Coaching
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Professional Training Applications</h3>
              <p className="text-muted-foreground mb-4">
                Our advanced pace calculator is designed for serious athletes, coaches, and sports scientists. It provides the tools needed for professional-level training analysis and performance optimization.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">For Athletes</h4>
                    <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-1">
                      <li>• Pace optimization for races</li>
                      <li>• Training zone identification</li>
                      <li>• Performance tracking</li>
                      <li>• Goal setting and planning</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">For Coaches</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Athlete performance analysis</li>
                      <li>• Training program design</li>
                      <li>• Race strategy development</li>
                      <li>• Performance monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">For Sports Scientists</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Performance research</li>
                      <li>• Physiological analysis</li>
                      <li>• Training optimization</li>
                      <li>• Data collection and analysis</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">For Fitness Professionals</h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Client assessment</li>
                      <li>• Program design</li>
                      <li>• Progress tracking</li>
                      <li>• Performance evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 9: World Records */}
      <section id="world-records" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              World Records & Elite Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Elite Performance Standards</h3>
              <p className="text-muted-foreground mb-4">
                Understanding world record paces helps put your performance in perspective and provides benchmarks for elite-level training. These records represent the pinnacle of human running performance.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Distance</th>
                      <th className="text-left p-2">Men's WR Pace</th>
                      <th className="text-left p-2">Women's WR Pace</th>
                      <th className="text-left p-2">Men's Time</th>
                      <th className="text-left p-2">Women's Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">100 meters</td>
                      <td className="p-2">2:35/mile or 1:36/km</td>
                      <td className="p-2">2:49/mile or 1:45/km</td>
                      <td className="p-2">9.58s</td>
                      <td className="p-2">10.49s</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">200 meters</td>
                      <td className="p-2">2:35/mile or 1:36/km</td>
                      <td className="p-2">2:52/mile or 1:47/km</td>
                      <td className="p-2">19.19s</td>
                      <td className="p-2">21.34s</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">400 meters</td>
                      <td className="p-2">2:54/mile or 1:48/km</td>
                      <td className="p-2">3:12/mile or 1:59/km</td>
                      <td className="p-2">43.03s</td>
                      <td className="p-2">47.60s</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">800 meters</td>
                      <td className="p-2">3:23/mile or 2:06/km</td>
                      <td className="p-2">3:48/mile or 2:21/km</td>
                      <td className="p-2">1:40.91</td>
                      <td className="p-2">1:53.28</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">1,500 meters</td>
                      <td className="p-2">3:41/mile or 2:17/km</td>
                      <td className="p-2">4:07/mile or 2:34/km</td>
                      <td className="p-2">3:26.00</td>
                      <td className="p-2">3:49.11</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">1 mile</td>
                      <td className="p-2">3:43/mile or 2:19/km</td>
                      <td className="p-2">4:13/mile or 2:37/km</td>
                      <td className="p-2">3:43.13</td>
                      <td className="p-2">4:12.33</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">5K</td>
                      <td className="p-2">4:04/mile or 2:31/km</td>
                      <td className="p-2">4:34/mile or 2:50/km</td>
                      <td className="p-2">12:35.36</td>
                      <td className="p-2">14:06.62</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">10K</td>
                      <td className="p-2">4:14/mile or 2:38/km</td>
                      <td className="p-2">4:45/mile or 2:57/km</td>
                      <td className="p-2">26:11.00</td>
                      <td className="p-2">29:17.45</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Half Marathon</td>
                      <td className="p-2">4:27/mile or 2:46/km</td>
                      <td className="p-2">4:58/mile or 3:05/km</td>
                      <td className="p-2">57:31</td>
                      <td className="p-2">1:02:52</td>
                    </tr>
                    <tr>
                      <td className="p-2">Marathon</td>
                      <td className="p-2">4:41/mile or 2:55/km</td>
                      <td className="p-2">5:10/mile or 3:13/km</td>
                      <td className="p-2">2:01:39</td>
                      <td className="p-2">2:14:04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* External Backlinks Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-500" />
              External Resources & Backlinks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Professional Organizations</h3>
                <div className="space-y-2">
                  <Link href="https://www.worldathletics.org" className="block text-sm text-primary hover:underline">
                    World Athletics - Official Records
                  </Link>
                  <Link href="https://www.acsm.org" className="block text-sm text-primary hover:underline">
                    ACSM - Exercise Science Guidelines
                  </Link>
                  <Link href="https://www.nsca.com" className="block text-sm text-primary hover:underline">
                    NSCA - Strength & Conditioning
                  </Link>
                  <Link href="https://www.heart.org" className="block text-sm text-primary hover:underline">
                    AHA - Heart Rate Guidelines
                  </Link>
                  <Link href="https://www.olympic.org" className="block text-sm text-primary hover:underline">
                    IOC - Olympic Standards
                  </Link>
                  <Link href="https://www.usatf.org" className="block text-sm text-primary hover:underline">
                    USATF - Track & Field
                  </Link>
                  <Link href="https://www.iaaf.org" className="block text-sm text-primary hover:underline">
                    IAAF - Athletics Federation
                  </Link>
                  <Link href="https://www.runnersworld.com" className="block text-sm text-primary hover:underline">
                    Runner's World - Training Resources
                  </Link>
                  <Link href="https://www.runningusa.org" className="block text-sm text-primary hover:underline">
                    Running USA - Industry Resources
                  </Link>
                  <Link href="https://www.letsrun.com" className="block text-sm text-primary hover:underline">
                    Let's Run - Running Community
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Educational Institutions</h3>
                <div className="space-y-2">
                  <Link href="https://www.harvard.edu/athletics" className="block text-sm text-primary hover:underline">
                    Harvard - Athletics Program
                  </Link>
                  <Link href="https://www.stanford.edu/athletics" className="block text-sm text-primary hover:underline">
                    Stanford - Track & Field
                  </Link>
                  <Link href="https://www.berkeley.edu/athletics" className="block text-sm text-primary hover:underline">
                    UC Berkeley - Athletics
                  </Link>
                  <Link href="https://www.ucla.edu/athletics" className="block text-sm text-primary hover:underline">
                    UCLA - Athletics Program
                  </Link>
                  <Link href="https://www.usc.edu/athletics" className="block text-sm text-primary hover:underline">
                    USC - Athletics Department
                  </Link>
                  <Link href="https://www.oregon.edu/athletics" className="block text-sm text-primary hover:underline">
                    Oregon - Track & Field
                  </Link>
                  <Link href="https://www.colorado.edu/athletics" className="block text-sm text-primary hover:underline">
                    Colorado - Athletics
                  </Link>
                  <Link href="https://www.arizona.edu/athletics" className="block text-sm text-primary hover:underline">
                    Arizona - Athletics Program
                  </Link>
                  <Link href="https://www.texas.edu/athletics" className="block text-sm text-primary hover:underline">
                    Texas - Athletics Department
                  </Link>
                  <Link href="https://www.florida.edu/athletics" className="block text-sm text-primary hover:underline">
                    Florida - Athletics Program
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sports Science Resources</h3>
                <div className="space-y-2">
                  <Link href="https://www.sportsci.org" className="block text-sm text-primary hover:underline">
                    Sports Science - Research
                  </Link>
                  <Link href="https://www.exercise-science.org" className="block text-sm text-primary hover:underline">
                    Exercise Science Society
                  </Link>
                  <Link href="https://www.physiology.org" className="block text-sm text-primary hover:underline">
                    Physiology Society
                  </Link>
                  <Link href="https://www.biomechanics.org" className="block text-sm text-primary hover:underline">
                    Biomechanics Research
                  </Link>
                  <Link href="https://www.sportsmedicine.org" className="block text-sm text-primary hover:underline">
                    Sports Medicine Institute
                  </Link>
                  <Link href="https://www.runningresearch.org" className="block text-sm text-primary hover:underline">
                    Running Research Center
                  </Link>
                  <Link href="https://www.performance.org" className="block text-sm text-primary hover:underline">
                    Performance Institute
                  </Link>
                  <Link href="https://www.athleticperformance.org" className="block text-sm text-primary hover:underline">
                    Athletic Performance
                  </Link>
                  <Link href="https://www.endurance.org" className="block text-sm text-primary hover:underline">
                    Endurance Research
                  </Link>
                  <Link href="https://www.cardio.org" className="block text-sm text-primary hover:underline">
                    Cardiovascular Research
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Training Resources</h3>
                <div className="space-y-2">
                  <Link href="https://www.strava.com" className="block text-sm text-primary hover:underline">
                    Strava - Training Platform
                  </Link>
                  <Link href="https://www.garmin.com" className="block text-sm text-primary hover:underline">
                    Garmin - GPS Training
                  </Link>
                  <Link href="https://www.polar.com" className="block text-sm text-primary hover:underline">
                    Polar - Heart Rate Training
                  </Link>
                  <Link href="https://www.suunto.com" className="block text-sm text-primary hover:underline">
                    Suunto - Sports Watches
                  </Link>
                  <Link href="https://www.nike.com" className="block text-sm text-primary hover:underline">
                    Nike - Training App
                  </Link>
                  <Link href="https://www.adidas.com" className="block text-sm text-primary hover:underline">
                    Adidas - Running App
                  </Link>
                  <Link href="https://www.underarmour.com" className="block text-sm text-primary hover:underline">
                    Under Armour - Training
                  </Link>
                  <Link href="https://www.newbalance.com" className="block text-sm text-primary hover:underline">
                    New Balance - Running
                  </Link>
                  <Link href="https://www.brooksrunning.com" className="block text-sm text-primary hover:underline">
                    Brooks - Running Shoes
                  </Link>
                  <Link href="https://www.asics.com" className="block text-sm text-primary hover:underline">
                    ASICS - Running Gear
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Additional Resources</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <Link href="https://www.pacecalculator.org" className="block text-primary hover:underline">
                  Pace Calculator
                </Link>
                <Link href="https://www.runningpace.org" className="block text-primary hover:underline">
                  Running Pace
                </Link>
                <Link href="https://www.marathonpace.org" className="block text-primary hover:underline">
                  Marathon Pace
                </Link>
                <Link href="https://www.5kpace.org" className="block text-primary hover:underline">
                  5K Pace Calculator
                </Link>
                <Link href="https://www.10kpace.org" className="block text-primary hover:underline">
                  10K Pace Calculator
                </Link>
                <Link href="https://www.halfmarathonpace.org" className="block text-primary hover:underline">
                  Half Marathon Pace
                </Link>
                <Link href="https://www.runningzones.org" className="block text-primary hover:underline">
                  Running Zones
                </Link>
                <Link href="https://www.heartratezones.org" className="block text-primary hover:underline">
                  Heart Rate Zones
                </Link>
                <Link href="https://www.vo2max.org" className="block text-primary hover:underline">
                  VO2 Max Calculator
                </Link>
                <Link href="https://www.runningperformance.org" className="block text-primary hover:underline">
                  Running Performance
                </Link>
                <Link href="https://www.athletictraining.org" className="block text-primary hover:underline">
                  Athletic Training
                </Link>
                <Link href="https://www.sportsperformance.org" className="block text-primary hover:underline">
                  Sports Performance
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-500" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How accurate is the pace calculator?
                </h3>
                <p className="text-muted-foreground">
                  Our calculator provides highly accurate pace calculations based on established running formulas. The heart rate zones and VO2 Max estimates are based on professional exercise science models used by elite coaches and sports scientists.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What's the difference between pace per mile and pace per kilometer?
                </h3>
                <p className="text-muted-foreground">
                  Pace per mile is commonly used in the US, while pace per kilometer is used internationally. 1 mile = 1.60934 kilometers, so a 6:00/mile pace equals approximately 3:44/km pace. Our converter handles both units seamlessly.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How do I use the multipoint calculator?
                </h3>
                <p className="text-muted-foreground">
                  Enter the distance and time for each segment of your run. The calculator will show your pace for each segment and help you analyze performance variations throughout your run. This is perfect for race analysis and training optimization.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What is VO2 Max and why is it important?
                </h3>
                <p className="text-muted-foreground">
                  VO2 Max is the maximum amount of oxygen your body can use during exercise. It's a key indicator of cardiovascular fitness and endurance performance. Higher VO2 Max generally correlates with better running performance across all distances.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How can I improve my running pace?
                </h3>
                <p className="text-muted-foreground">
                  Focus on consistent training, proper recovery, and varied workouts including easy runs, tempo runs, intervals, and long runs. Use the training zones to structure your workouts effectively and track your progress over time.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What are the different heart rate zones?
                </h3>
                <p className="text-muted-foreground">
                  The five main heart rate zones are: Recovery (50-60% max HR), Aerobic Base (60-70% max HR), Aerobic Threshold (70-80% max HR), Lactate Threshold (80-90% max HR), and VO2 Max (90-100% max HR). Each zone serves different training purposes.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How do I calculate my maximum heart rate?
                </h3>
                <p className="text-muted-foreground">
                  The most common formula is 220 - age, though this is a rough estimate. For more accuracy, consider a professional fitness test. Our calculator uses this formula but can be adjusted for individual variations.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I use this calculator for different sports?
                </h3>
                <p className="text-muted-foreground">
                  While designed for running, the pace calculator can be adapted for cycling, swimming, and other endurance sports. The heart rate zones and training principles apply across different aerobic activities.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How often should I recalculate my pace?
                </h3>
                <p className="text-muted-foreground">
                  Recalculate your pace regularly as your fitness improves. For serious athletes, weekly pace analysis helps track progress and adjust training. Use the multipoint calculator for detailed race analysis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What's the best way to use this calculator for training?
                </h3>
                <p className="text-muted-foreground">
                  Use the basic calculator for daily training pace, the multipoint calculator for race analysis, and the training zones to structure your workouts. Combine with heart rate monitoring for optimal training effectiveness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <div className="text-center mb-12">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
              Ready to Use Our Advanced Pace Calculator?
            </h2>
            <p className="text-blue-700 dark:text-blue-300 mb-6">
              Calculate running pace, training zones, heart rate analysis, race predictions, and VO2 Max with our professional-grade pace calculator. Perfect for serious athletes and coaches.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/calculator/pace-calculator">
                Try Our Pace Calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
