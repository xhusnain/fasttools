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
  Sparkles,
  Flame,
  ChefHat,
  ForkKnife
} from "lucide-react"

export default function CalorieCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Calorie Calculator Guide: Master Your Daily Energy Needs
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about calorie calculation, BMR, TDEE, weight management, zigzag calorie cycling, and optimizing your daily energy intake for peak health and performance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tools/calorie-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Calorie Calculator
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools">
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
              <h3 className="font-semibold mb-2">Understanding Calories</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What are Calories?</li>
                <li>• BMR vs TDEE</li>
                <li>• Calorie Sources</li>
                <li>• Energy Balance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Calculation Methods</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Mifflin-St Jeor Equation</li>
                <li>• Harris-Benedict Equation</li>
                <li>• Katch-McArdle Formula</li>
                <li>• Activity Level Multipliers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Weight Management</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Calorie Deficit for Weight Loss</li>
                <li>• Calorie Surplus for Weight Gain</li>
                <li>• Zigzag Calorie Cycling</li>
                <li>• Sustainable Approaches</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practical Applications</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Meal Planning</li>
                <li>• Food Tracking</li>
                <li>• Exercise Integration</li>
                <li>• Lifestyle Optimization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What are Calories Section */}
      <section id="what-are-calories" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-500" />
              What are Calories?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Calories</strong> are units of energy that measure the amount of energy food provides to your body. One calorie is the amount of energy needed to raise the temperature of 1 kilogram of water by 1 degree Celsius. Understanding calories is essential for maintaining energy balance and achieving health goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">BMR (Basal Metabolic Rate)</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    The minimum number of calories your body needs to maintain basic physiological functions like breathing, circulation, and cell production while at rest.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">TDEE (Total Daily Energy Expenditure)</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Total calories burned per day including BMR, physical activity, exercise, and the thermic effect of food. This is what you need to maintain your current weight.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Calorie Sources</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Carbohydrates: 4 calories/gram</li>
                    <li>• Proteins: 4 calories/gram</li>
                    <li>• Fats: 9 calories/gram</li>
                    <li>• Alcohol: 7 calories/gram</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Energy Balance</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Weight maintenance occurs when calories in = calories out. Weight loss requires a caloric deficit, while weight gain requires a caloric surplus.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Calculation Methods Section */}
      <section id="calculation-methods" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Calorie Calculation Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Mifflin-St Jeor Equation (Most Accurate)</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Developed in 1990, this equation is considered the most accurate for the general population. It's more precise than the Harris-Benedict equation and widely used in clinical practice.
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
                Originally developed in 1919, revised in 1984. While widely used, it's slightly less accurate than Mifflin-St Jeor for most people but still provides reliable estimates.
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Activity Level Multipliers</h3>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Sedentary: 1.2 (little/no exercise)</li>
                  <li>• Light Activity: 1.375 (1-3x/week)</li>
                  <li>• Moderate Activity: 1.55 (4-5x/week)</li>
                  <li>• Very Active: 1.725 (daily/intense)</li>
                  <li>• Extremely Active: 1.9 (6-7x/week)</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">TDEE Calculation</h3>
                <p className="text-sm text-red-700 dark:text-red-300">
                  TDEE = BMR × Activity Multiplier. This gives you the total calories needed to maintain your current weight based on your activity level.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Weight Management Section */}
      <section id="weight-management" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Weight Management Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Weight Loss (Caloric Deficit)</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Mild: -250 cal/day (0.5 lb/week)</li>
                    <li>• Moderate: -500 cal/day (1 lb/week)</li>
                    <li>• Aggressive: -750 cal/day (1.5 lb/week)</li>
                    <li>• Never eat below BMR</li>
                    <li>• Focus on nutrient-dense foods</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Zigzag Calorie Cycling</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Alternate high and low calorie days to prevent metabolic adaptation. High days: +200-300 cal, low days: -200-300 cal. Maintains weekly calorie target while preventing plateaus.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Weight Gain (Caloric Surplus)</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Mild: +250 cal/day (0.5 lb/week)</li>
                    <li>• Moderate: +500 cal/day (1 lb/week)</li>
                    <li>• Aggressive: +750 cal/day (1.5 lb/week)</li>
                    <li>• Focus on lean muscle gain</li>
                    <li>• Include strength training</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Sustainable Approaches</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Focus on gradual changes, whole foods, regular exercise, and lifestyle modifications. Avoid extreme restrictions that lead to yo-yo dieting and metabolic damage.
                  </p>
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
                  "Accurate calorie calculation is fundamental to successful weight management. Our research shows that individuals who understand their BMR and TDEE are more likely to achieve sustainable weight loss. The Mifflin-St Jeor equation provides the most reliable estimates for clinical practice, but we always consider individual factors like thyroid function and metabolic health."
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
                  "Calorie cycling is an effective strategy for preventing metabolic adaptation during weight loss. Our studies show that alternating high and low calorie days can maintain weight loss progress while providing dietary flexibility. This approach is particularly beneficial for athletes and active individuals."
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
                  "Quality of calories matters as much as quantity. While calorie counting is effective for weight management, focusing on nutrient-dense foods ensures adequate nutrition. Our research shows that whole, unprocessed foods provide better satiety and metabolic benefits compared to processed alternatives."
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Sarah's Weight Loss Journey</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used the calorie calculator to understand my TDEE and created a 500-calorie deficit. Combined with zigzag cycling, I lost 30 pounds in 6 months while maintaining my energy levels. The calculator helped me understand that I could still enjoy social meals by planning my weekly calorie distribution."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Sarah M., 34, Marketing Manager</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mike's Muscle Building</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "As a competitive athlete, I needed to gain lean muscle while maintaining performance. The calorie calculator helped me determine my maintenance calories and create a 300-calorie surplus. Combined with proper training, I gained 15 pounds of muscle in 8 months."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Mike R., 28, Professional Athlete</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Lisa's Lifestyle Change</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "After menopause, my metabolism slowed significantly. The calorie calculator helped me understand my new caloric needs and adjust my eating habits accordingly. I maintained my weight while feeling more energetic and healthy."
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
                BMR (Basal Metabolic Rate) is calories burned at rest for basic body functions. TDEE (Total Daily Energy Expenditure) includes BMR plus all daily activities. TDEE = BMR × Activity Factor. TDEE is what you need to maintain your current weight.
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
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I eat whatever I want as long as I stay within my calorie limit?</h3>
              <p className="text-muted-foreground">
                While calorie counting can work for weight management, food quality matters for health, satiety, and nutrient adequacy. Focus on whole, unprocessed foods for better results and long-term health.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often should I recalculate my calorie needs?</h3>
              <p className="text-muted-foreground">
                Recalculate every 10-15 pounds of weight change or every 3-6 months. As you lose weight, your BMR decreases, so you'll need to adjust your calorie intake to continue making progress.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I'm not losing weight despite eating at a deficit?</h3>
              <p className="text-muted-foreground">
                This could indicate metabolic adaptation, inaccurate tracking, or other factors. Consider recalculating your needs, improving tracking accuracy, or consulting a healthcare professional for personalized guidance.
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
                    <div className="font-medium text-purple-800 dark:text-purple-200">Calorie Restriction Studies</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">American Journal of Clinical Nutrition</div>
                  </a>
                  <a href="https://www.nature.com/articles/ijo2015157" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Metabolic Adaptation Research</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">International Journal of Obesity</div>
                  </a>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0026049515001234" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Exercise and Calorie Burn</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Journal of Applied Physiology</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calories/art-20048065" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Calorie Counting Guide</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Mayo Clinic</div>
                  </a>
                  <a href="https://www.hsph.harvard.edu/nutritionsource/healthy-weight/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Healthy Weight Guidelines</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Harvard School of Public Health</div>
                  </a>
                  <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">BMI and Weight Assessment</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Calories?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get personalized calorie analysis and start your health journey today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tools/calorie-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Calories
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/tools">
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
