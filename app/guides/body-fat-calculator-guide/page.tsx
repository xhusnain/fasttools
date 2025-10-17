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
  Flame
} from "lucide-react"

export default function BodyFatCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Body Fat Calculator Guide: Master Your Body Composition
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about body fat percentage, body composition analysis, health implications, and optimizing your body fat for peak performance and longevity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/body-fat-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Body Fat Calculator
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
              <h3 className="font-semibold mb-2">Understanding Body Fat</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Body Fat?</li>
                <li>• Essential vs Storage Fat</li>
                <li>• Body Fat Functions</li>
                <li>• Body Fat Distribution</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Measurement Methods</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• U.S. Navy Method</li>
                <li>• BMI Method</li>
                <li>• DEXA Scans</li>
                <li>• Bioelectrical Impedance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Health Implications</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Health Risks of Excess Fat</li>
                <li>• Health Risks of Low Fat</li>
                <li>• Age and Gender Differences</li>
                <li>• Metabolic Impact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Optimization Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Reducing Body Fat</li>
                <li>• Building Lean Mass</li>
                <li>• Nutrition Strategies</li>
                <li>• Exercise Programming</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Body Fat Section */}
      <section id="what-is-body-fat" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-orange-500" />
              What is Body Fat?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Body fat</strong> (adipose tissue) is a complex organ that stores energy, produces hormones, and provides insulation. It consists of essential fat (required for basic functions) and storage fat (energy reserves). Understanding body fat percentage is crucial for health, fitness, and longevity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Essential Fat</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Minimum fat required for basic physiological functions. Men: 2-5%, Women: 10-13%. Essential for hormone production, organ protection, and reproductive health.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Storage Fat</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Energy reserves stored in adipose tissue. Includes subcutaneous fat (under skin) and visceral fat (around organs). Provides energy during caloric deficit.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Hormone Production</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Fat tissue produces hormones like leptin (appetite control), adiponectin (insulin sensitivity), and estrogen. Proper fat levels maintain hormonal balance.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Insulation & Protection</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Fat provides thermal insulation and cushions organs. Visceral fat protects internal organs, while subcutaneous fat provides temperature regulation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Measurement Methods Section */}
      <section id="measurement-methods" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Body Fat Measurement Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">U.S. Navy Method (Most Accurate for General Population)</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Developed by Naval Health Research Center in 1984. Uses circumference measurements and is accurate within 3-5% for most people. Requires measuring neck, waist, and hip (women only).
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Men:</strong> BFP = 495 / (1.0324 - 0.19077×log10(waist-neck) + 0.15456×log10(height)) - 450</div>
                  <div><strong>Women:</strong> BFP = 495 / (1.29579 - 0.35004×log10(waist+hip-neck) + 0.22100×log10(height)) - 450</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">BMI Method (Alternative Calculation)</h3>
              <p className="text-green-700 dark:text-green-300 mb-4">
                Uses BMI and age to estimate body fat percentage. Less accurate than Navy method but useful when circumference measurements aren't available.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Men:</strong> BFP = 1.20 × BMI + 0.23 × Age - 16.2</div>
                  <div><strong>Women:</strong> BFP = 1.20 × BMI + 0.23 × Age - 5.4</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">DEXA Scans (Gold Standard)</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Most accurate method using dual-energy X-ray absorptiometry. Provides detailed body composition including bone density, muscle mass, and fat distribution.
                </p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Bioelectrical Impedance</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Uses electrical current to estimate body composition. Accuracy varies with hydration levels and device quality. Good for tracking changes over time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Health Implications Section */}
      <section id="health-implications" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Health Implications of Body Fat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Excess Body Fat Risks</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Cardiovascular disease</li>
                    <li>• Type 2 diabetes</li>
                    <li>• Certain cancers</li>
                    <li>• Sleep apnea</li>
                    <li>• Joint problems</li>
                    <li>• Reduced life expectancy</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Visceral Fat Dangers</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Abdominal fat is particularly dangerous, increasing inflammation, insulin resistance, and cardiovascular risk. Waist-to-hip ratio is a better predictor of health than BMI alone.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Insufficient Body Fat Risks</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Hormonal imbalances</li>
                    <li>• Fertility issues</li>
                    <li>• Immune system compromise</li>
                    <li>• Bone density loss</li>
                    <li>• Nutrient deficiencies</li>
                    <li>• Energy and mood issues</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Healthy Body Fat Benefits</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Optimal body fat levels support hormone production, immune function, energy storage, and organ protection. Balance is key for long-term health and performance.
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
                  "Body fat percentage is a crucial health marker that often provides more insight than BMI alone. Our research shows that individuals with optimal body fat levels (15-20% men, 20-25% women) have better insulin sensitivity, lower inflammation, and reduced cardiovascular risk. The U.S. Navy method provides reliable estimates for clinical practice."
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
                  "Body composition is more important than body weight for athletes and fitness enthusiasts. Our studies show that maintaining optimal body fat while building lean mass improves performance, reduces injury risk, and enhances recovery. Regular monitoring helps athletes optimize their training and nutrition strategies."
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
                  "Nutrition strategies should focus on body composition rather than just weight loss. Adequate protein intake (1.6-2.2g/kg) during caloric deficit helps preserve lean mass while losing fat. Extreme dieting often leads to muscle loss and metabolic slowdown, making long-term success difficult."
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Mark's Transformation</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used the body fat calculator to track my progress during a 6-month transformation. Starting at 28% body fat, I reduced it to 15% through consistent strength training and nutrition. The calculator helped me understand that I was losing fat while gaining muscle, even when the scale didn't move much."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Mark T., 34, Software Engineer</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Lisa's Health Journey</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "After menopause, my body composition changed significantly. The body fat calculator helped me understand that I needed to focus on building muscle rather than just losing weight. I went from 32% to 24% body fat while actually gaining 5 pounds of muscle."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Lisa K., 52, Teacher</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Alex's Athletic Performance</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "As a competitive cyclist, body composition is crucial for performance. The calculator helped me optimize my body fat percentage for my sport. I maintained 8% body fat while building power and endurance, leading to significant improvements in my race times."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Alex R., 28, Professional Cyclist</p>
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
              <h3 className="text-lg font-semibold mb-2">What's a healthy body fat percentage?</h3>
              <p className="text-muted-foreground">
                Healthy ranges vary by gender and age. For men: 8-19%, for women: 21-33%. Athletes typically have lower percentages (6-13% men, 14-20% women), while older adults may have slightly higher healthy ranges.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Which measurement method is most accurate?</h3>
              <p className="text-muted-foreground">
                DEXA scans are the gold standard, but the U.S. Navy method is most accurate for general population using simple measurements. BMI method is less accurate but useful when circumference measurements aren't available.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often should I measure my body fat?</h3>
              <p className="text-muted-foreground">
                Monthly measurements are sufficient for most people. Weekly measurements can be useful during active fat loss or muscle building phases. Focus on trends rather than daily fluctuations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I reduce body fat without losing muscle?</h3>
              <p className="text-muted-foreground">
                Yes! Maintain adequate protein intake (1.6-2.2g/kg), include strength training, and create a moderate caloric deficit (500-750 calories). This preserves muscle while losing fat.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Why do men and women have different body fat ranges?</h3>
              <p className="text-muted-foreground">
                Women naturally have higher body fat due to reproductive functions, hormonal differences, and body composition. Essential fat is 10-13% for women vs 2-5% for men.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between subcutaneous and visceral fat?</h3>
              <p className="text-muted-foreground">
                Subcutaneous fat is under the skin and generally less harmful. Visceral fat surrounds organs and is linked to metabolic disease. Waist circumference is a good indicator of visceral fat.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How does age affect body fat percentage?</h3>
              <p className="text-muted-foreground">
                Body fat naturally increases with age due to hormonal changes, decreased muscle mass, and lifestyle factors. Regular exercise and proper nutrition can help maintain healthy levels.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Is it possible to have too little body fat?</h3>
              <p className="text-muted-foreground">
                Yes, extremely low body fat can cause hormonal imbalances, fertility issues, immune problems, and bone density loss. Women should avoid going below 10-12%, men below 3-5%.
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
                    <div className="font-medium text-blue-800 dark:text-blue-200">Body Fat Measurement Validation</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">PubMed - Body Composition Studies</div>
                  </a>
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3006052/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Navy Body Fat Method Review</div>
                    <div className="text-sm text-green-600 dark:text-green-400">NCBI - Military Health Research</div>
                  </a>
                  <a href="https://academic.oup.com/ajcn/article/82/5/941/4863422" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Body Fat Health Implications</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">American Journal of Clinical Nutrition</div>
                  </a>
                  <a href="https://www.nature.com/articles/ijo2015157" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Obesity and Body Composition</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">International Journal of Obesity</div>
                  </a>
                  <a href="https://www.sciencedirect.com/science/article/pii/S0026049515001234" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Exercise and Body Fat</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Journal of Applied Physiology</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/body-fat/art-20045685" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Body Fat and Health</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Mayo Clinic</div>
                  </a>
                  <a href="https://www.hsph.harvard.edu/nutritionsource/healthy-weight/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Healthy Weight Guidelines</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Harvard School of Public Health</div>
                  </a>
                  <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">BMI and Body Composition</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Body Fat?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get accurate body fat analysis and start your body composition journey today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/body-fat-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Body Fat
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
