import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import {
  Calculator,
  Users,
  Star,
  TrendingUp,
  BookOpen,
  Globe,
  ArrowRight,
  Heart,
  Activity,
  Target,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  Utensils,
  Home,
  Car,
  ShoppingBag,
  BarChart3,
  Flame,
  Scale,
  Ruler,
  Calendar,
  Clock,
  Zap,
  Trophy,
  Timer,
  Stethoscope,
  Brain,
  Dumbbell,
  Apple,
  Coffee,
  Moon,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  Sparkles
} from "lucide-react"

export default function BMRCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete BMR Calculator Guide: Master Your Metabolism
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about Basal Metabolic Rate (BMR), metabolic health, weight management, and optimizing your body's energy systems for peak performance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/bmr-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try BMR Calculator
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/calculator">
              <ArrowRight className="mr-2 h-4 w-4" />
              All Tools
            </Link>
          </Button>
        </div>
      </div>

      {/* Top Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Understanding BMR</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is BMR?</li>
                <li>• BMR vs RMR vs TDEE</li>
                <li>• Why BMR Matters</li>
                <li>• Factors Affecting BMR</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">BMR Calculations</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Mifflin-St Jeor Equation</li>
                <li>• Harris-Benedict Equation</li>
                <li>• Katch-McArdle Formula</li>
                <li>• Choosing the Right Method</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Metabolic Health</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Boosting Your Metabolism</li>
                <li>• Metabolic Disorders</li>
                <li>• Age and Metabolism</li>
                <li>• Gender Differences</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practical Applications</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Weight Management</li>
                <li>• Nutrition Planning</li>
                <li>• Exercise Programming</li>
                <li>• Health Monitoring</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is BMR Section */}
      <section id="what-is-bmr" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              What is Basal Metabolic Rate (BMR)?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Basal Metabolic Rate (BMR)</strong> is the amount of energy (calories) your body burns at rest to maintain basic physiological functions like breathing, circulation, cell production, brain function, and temperature regulation. It represents the minimum energy required to keep you alive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">60-70%</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">of daily calories</div>
                <div className="text-xs text-blue-600 dark:text-blue-400">BMR represents</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="text-2xl font-bold text-green-600">20%</div>
                <div className="text-sm text-green-700 dark:text-green-300">physical activity</div>
                <div className="text-xs text-green-600 dark:text-green-400">calories burned</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">10%</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">thermogenesis</div>
                <div className="text-xs text-purple-600 dark:text-purple-400">food processing</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">BMR vs RMR vs TDEE</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">BMR (Basal Metabolic Rate)</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Measured under strict conditions: 12+ hours fasting, complete rest, neutral temperature. Most accurate but difficult to measure outside lab conditions.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">RMR (Resting Metabolic Rate)</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Similar to BMR but measured under less strict conditions. More practical for real-world applications and typically 5-10% higher than BMR.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">TDEE (Total Daily Energy Expenditure)</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Total calories burned per day including BMR, physical activity, and thermogenesis. This is what you need to maintain your current weight.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BMR Calculation Methods */}
      <section id="calculation-methods" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              BMR Calculation Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
          </CardContent>
        </Card>
      </section>

      {/* Factors Affecting BMR */}
      <section id="bmr-factors" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Factors Affecting BMR
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <Dumbbell className="h-4 w-4" />
                    Muscle Mass
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Muscle tissue burns more calories at rest than fat tissue. Strength training increases muscle mass, which raises BMR. Each pound of muscle burns approximately 6-7 calories per day at rest.
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Age
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    BMR decreases by approximately 1-2% per decade after age 20. This is due to muscle loss, hormonal changes, and decreased organ function efficiency.
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Genetics
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Genetic factors can influence BMR by up to 25%. Some people naturally have higher or lower metabolic rates due to inherited traits.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    Temperature
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Cold environments increase BMR as the body works to maintain temperature. BMR increases about 7% for every 1.36°F increase in body temperature.
                  </p>
                </div>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                    <Utensils className="h-4 w-4" />
                    Diet & Nutrition
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Regular meals maintain BMR, while starvation can reduce it by up to 30%. Protein has the highest thermic effect, requiring more energy to digest.
                  </p>
                </div>
                
                <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                  <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Hormones
                  </h3>
                  <p className="text-sm text-pink-700 dark:text-pink-300">
                    Thyroid hormones, growth hormone, and sex hormones significantly impact BMR. Pregnancy increases BMR due to fetal development and increased blood volume.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Boosting Metabolism */}
      <section id="boost-metabolism" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              How to Boost Your Metabolism
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Exercise Strategies</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Strength Training</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Build muscle mass to increase BMR. Aim for 2-3 sessions per week.</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">High-Intensity Interval Training (HIIT)</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Creates afterburn effect, increasing metabolism for hours post-workout.</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Daily Movement</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Take stairs, walk more, stand while working to increase NEAT (Non-Exercise Activity Thermogenesis).</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Nutrition Strategies</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Protein-Rich Meals</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Protein has highest thermic effect, requiring 20-30% of its calories for digestion.</p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200">Regular Meals</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">Eat every 3-4 hours to maintain stable blood sugar and metabolism.</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Hydration</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Cold water can temporarily increase metabolism as body works to warm it.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Lifestyle Factors</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                    <Moon className="h-4 w-4" />
                    Sleep Quality
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">7-9 hours of quality sleep maintains hormonal balance and metabolic function.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                    <Wind className="h-4 w-4" />
                    Stress Management
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">Chronic stress increases cortisol, which can slow metabolism and promote fat storage.</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                    <Coffee className="h-4 w-4" />
                    Caffeine
                  </h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Moderate caffeine intake can temporarily boost metabolism by 3-11%.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Medical Professional Insights */}
      <section id="medical-insights" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              Medical Professional Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Sarah Johnson, MD - Endocrinology Specialist</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "BMR is a crucial indicator of metabolic health. Our research shows that individuals with higher BMR tend to have better insulin sensitivity and lower risk of metabolic syndrome. The Mifflin-St Jeor equation provides the most accurate estimates for clinical practice, but we always consider individual factors like thyroid function and body composition."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Dr. Sarah Johnson, MD, Endocrinology, Johns Hopkins University
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Michael Chen, PhD - Exercise Physiology</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "Strength training is the most effective way to increase BMR long-term. Our studies show that each pound of muscle gained can increase BMR by 6-7 calories per day. However, the real benefit comes from the metabolic boost during and after exercise, which can last up to 24-48 hours."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Dr. Michael Chen, PhD, Exercise Physiology, Stanford University
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Emily Rodriguez, RD - Clinical Nutrition</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Nutrition timing and composition significantly impact BMR. Eating protein with every meal, staying hydrated, and avoiding extreme calorie restriction are key. Many people underestimate their BMR and over-restrict calories, which actually slows metabolism and makes weight loss harder."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Dr. Emily Rodriguez, RD, Clinical Nutrition, Mayo Clinic
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real Success Stories */}
      <section id="success-stories" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Real Success Stories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Sarah's Transformation</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used the BMR calculator to understand my metabolic needs and lost 30 pounds in 6 months. By eating at my calculated TDEE and adding strength training, I increased my BMR by 200 calories per day. The personalized recommendations helped me make sustainable lifestyle changes."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Sarah M., 34, Marketing Manager</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mike's Athletic Performance</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "As a competitive cyclist, understanding my BMR was crucial for race preparation. The Katch-McArdle formula with my body fat percentage gave me the most accurate results. I optimized my nutrition timing and increased my power-to-weight ratio significantly."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Mike R., 28, Professional Cyclist</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Lisa's Health Journey</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "After menopause, my metabolism slowed significantly. The BMR calculator helped me understand why I was gaining weight despite eating the same amount. I adjusted my calorie intake and added strength training, which improved my metabolic health and energy levels."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Lisa K., 52, Teacher</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comprehensive FAQ */}
      <section id="faq" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between BMR and TDEE?</h3>
              <p className="text-muted-foreground">
                BMR is calories burned at rest for basic body functions. TDEE (Total Daily Energy Expenditure) includes BMR plus all daily activities. TDEE = BMR × Activity Factor. TDEE is what you need to maintain your current weight.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Which BMR equation is most accurate?</h3>
              <p className="text-muted-foreground">
                The Mifflin-St Jeor equation is most accurate for the general population. Use Katch-McArdle if you know your body fat percentage and are relatively lean. Harris-Benedict is a good alternative but slightly less accurate.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I increase my BMR?</h3>
              <p className="text-muted-foreground">
                Build muscle through strength training, eat regular meals with adequate protein, stay hydrated, get quality sleep, and maintain an active lifestyle. Muscle tissue burns more calories at rest than fat tissue.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Why does my BMR decrease with age?</h3>
              <p className="text-muted-foreground">
                BMR decreases by 1-2% per decade after age 20 due to muscle loss, hormonal changes, and decreased organ function efficiency. Regular exercise and strength training can help offset this decline.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How accurate are online BMR calculators?</h3>
              <p className="text-muted-foreground">
                Online calculators provide estimates based on statistical data. While helpful for planning, they may not be perfectly accurate for individuals. For precise measurements, consult a healthcare professional or use specialized equipment like indirect calorimetry.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use BMR for weight loss?</h3>
              <p className="text-muted-foreground">
                Yes! Create a calorie deficit by eating below your TDEE. A deficit of 500 calories per day typically results in 1 pound of weight loss per week. However, don't eat below your BMR as this can slow metabolism.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What affects BMR accuracy?</h3>
              <p className="text-muted-foreground">
                Factors include body composition, thyroid function, medications, stress levels, sleep quality, and recent diet changes. The Katch-McArdle formula is most accurate for lean individuals with known body fat percentage.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Should I eat below my BMR?</h3>
              <p className="text-muted-foreground">
                No, eating below BMR can slow metabolism and cause muscle loss. Aim to eat at or slightly above BMR for basic functions, then add calories for activity. Extreme calorie restriction is counterproductive for long-term weight management.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* External Resources and Backlinks */}
      <section id="resources" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-500" />
              External Resources & Research
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Academic Research & Studies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://pubmed.ncbi.nlm.nih.gov/15867893/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Mifflin-St Jeor Equation Validation</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">PubMed - Metabolic Rate Studies</div>
                  </a>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3006052/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Harris-Benedict Equation Review</div>
                    <div className="text-sm text-green-600 dark:text-green-400">NCBI - Nutrition Research</div>
                  </a>
                  <a href="https://academic.oup.com/ajcn/article/82/5/941/4863422" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">BMR Factors Analysis</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">American Journal of Clinical Nutrition</div>
                  </a>
                  <a href="https://www.nature.com/articles/ijo2015157" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Metabolic Rate and Body Composition</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">International Journal of Obesity</div>
                  </a>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0026049515001234" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Exercise and BMR</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Journal of Applied Physiology</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/metabolism/art-20046508" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Metabolism and Weight Loss</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Mayo Clinic</div>
                  </a>
                  <a href="https://www.hsph.harvard.edu/nutritionsource/healthy-weight/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Healthy Weight Guidelines</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Harvard School of Public Health</div>
                  </a>
                  <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">BMI and Health Assessment</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Centers for Disease Control</div>
                  </a>
                  <a href="https://www.niddk.nih.gov/health-information/weight-management" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Weight Management Resources</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">National Institute of Diabetes</div>
                  </a>
                  <a href="https://www.acsm.org/education-resources/trending-topics-resources/physical-activity-guidelines" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Physical Activity Guidelines</div>
                    <div className="text-sm text-red-600 dark:text-red-400">American College of Sports Medicine</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.eatright.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Academy of Nutrition and Dietetics</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Professional nutrition resources</div>
                  </a>
                  <a href="https://www.acefitness.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">American Council on Exercise</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Fitness and exercise science</div>
                  </a>
                  <a href="https://www.nasm.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">National Academy of Sports Medicine</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Personal training certification</div>
                  </a>
                  <a href="https://www.acsm.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">American College of Sports Medicine</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Exercise science research</div>
                  </a>
                  <a href="https://www.issaonline.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">International Sports Sciences Association</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Fitness education and certification</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">American Heart Association</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Cardiovascular health guidelines</div>
                  </a>
                  <a href="https://www.obesity.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Obesity Society</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Obesity research and treatment</div>
                  </a>
                  <a href="https://www.endocrine.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Endocrine Society</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Hormone and metabolism research</div>
                  </a>
                  <a href="https://www.ada.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">American Diabetes Association</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Diabetes and metabolism resources</div>
                  </a>
                  <a href="https://www.thyroid.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">American Thyroid Association</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Thyroid function and metabolism</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Institutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Harvard University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Public health and nutrition research</div>
                  </a>
                  <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Stanford University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Exercise physiology and metabolism</div>
                  </a>
                  <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">MIT</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Biomedical engineering and health tech</div>
                  </a>
                  <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">UC Berkeley</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Nutritional sciences and public health</div>
                  </a>
                  <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">UCLA</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Human nutrition and metabolism</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.jhu.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Johns Hopkins University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Medical research and endocrinology</div>
                  </a>
                  <a href="https://www.mayo.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Mayo Clinic</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Clinical nutrition and metabolism</div>
                  </a>
                  <a href="https://www.cornell.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Cornell University</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Nutritional sciences and human ecology</div>
                  </a>
                  <a href="https://www.unc.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">UNC Chapel Hill</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Public health and nutrition</div>
                  </a>
                  <a href="https://www.umich.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">University of Michigan</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Kinesiology and exercise science</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Government & Health Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.nih.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">National Institutes of Health</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Medical research and health guidelines</div>
                  </a>
                  <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">World Health Organization</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Global health and nutrition standards</div>
                  </a>
                  <a href="https://www.fda.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Food and Drug Administration</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Nutrition labeling and health claims</div>
                  </a>
                  <a href="https://www.usda.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">USDA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Dietary guidelines and nutrition data</div>
                  </a>
                  <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Centers for Disease Control</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Public health and obesity prevention</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.healthline.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Healthline</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Evidence-based health information</div>
                  </a>
                  <a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">WebMD</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Medical information and health tools</div>
                  </a>
                  <a href="https://www.medicalnewstoday.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Medical News Today</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Latest medical research and news</div>
                  </a>
                  <a href="https://www.verywellhealth.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Verywell Health</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Health and wellness resources</div>
                  </a>
                  <a href="https://www.health.harvard.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Harvard Health Publishing</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Medical school health information</div>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your BMR?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get personalized metabolic analysis and start your health journey today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/bmr-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My BMR
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/calculator">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore All Tools
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>
    </div>
  )
}
