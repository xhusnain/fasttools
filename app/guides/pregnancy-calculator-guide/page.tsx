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
  Baby,
  Stethoscope,
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  Activity,
  Utensils,
  Home,
  Car,
  ShoppingBag,
  Calculator,
  Target,
  BarChart3
} from "lucide-react"

export default function PregnancyCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Pregnancy Calculator Guide
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master pregnancy tracking with our comprehensive guide to pregnancy calculators, due date estimation, gestational age tracking, weight gain recommendations, and personalized pregnancy insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>40 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>2,000,000+ users</span>
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
              1. Pregnancy Calculator Basics
            </Link>
            <Link href="#how-to-use" className="block text-primary hover:underline">
              2. How to Use the Pregnancy Calculator
            </Link>
            <Link href="#calculation-methods" className="block text-primary hover:underline">
              3. Pregnancy Calculation Methods Explained
            </Link>
            <Link href="#weight-gain" className="block text-primary hover:underline">
              4. Pregnancy Weight Gain Guidelines
            </Link>
            <Link href="#trimester-tracking" className="block text-primary hover:underline">
              5. Trimester-by-Trimester Tracking
            </Link>
            <Link href="#pregnancy-milestones" className="block text-primary hover:underline">
              6. Pregnancy Milestones and Development
            </Link>
            <Link href="#prenatal-care" className="block text-primary hover:underline">
              7. Prenatal Care and Appointments
            </Link>
            <Link href="#pregnancy-symptoms" className="block text-primary hover:underline">
              8. Pregnancy Symptoms and Management
            </Link>
            <Link href="#nutrition-exercise" className="block text-primary hover:underline">
              9. Pregnancy Nutrition and Exercise
            </Link>
            <Link href="#pregnancy-planning" className="block text-primary hover:underline">
              10. Pregnancy Planning and Preparation
            </Link>
          </nav>
        </CardContent>
      </Card>

      {/* Section 1: Basics */}
      <section id="basics" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Pregnancy Calculator Basics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">What is a Pregnancy Calculator?</h3>
              <p className="text-muted-foreground mb-4">
                A pregnancy calculator is a comprehensive tool that helps track your pregnancy journey by estimating due dates, calculating gestational age, monitoring pregnancy progress, and providing personalized recommendations for nutrition, exercise, and health throughout your pregnancy.
              </p>
              <p className="text-muted-foreground mb-4">
                Our advanced pregnancy calculator goes beyond simple date calculations, offering trimester-specific guidance, weight gain recommendations based on your BMI, symptom tracking, and comprehensive pregnancy insights tailored to your specific stage.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features of Our Advanced Calculator</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Multiple Calculation Methods</h4>
                      <p className="text-sm text-muted-foreground">Due date, LMP, ultrasound, conception date, or IVF-based calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Weight Gain Recommendations</h4>
                      <p className="text-sm text-muted-foreground">Personalized based on pre-pregnancy BMI and Institute of Medicine guidelines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Pregnancy Progress Tracking</h4>
                      <p className="text-sm text-muted-foreground">Visual progress bar and milestone tracking throughout pregnancy</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Trimester-Specific Guidance</h4>
                      <p className="text-sm text-muted-foreground">Personalized recommendations for each pregnancy stage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Upcoming Appointments</h4>
                      <p className="text-sm text-muted-foreground">Track important prenatal visits and screenings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Fetal Development Tracking</h4>
                      <p className="text-sm text-muted-foreground">Monitor your baby's development week by week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: How to Use */}
      <section id="how-to-use" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-500" />
              How to Use the Pregnancy Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Step-by-Step Instructions</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium mb-2">Choose Your Calculation Method</h4>
                    <p className="text-muted-foreground">Select from five options: Due Date, Last Menstrual Period, Ultrasound Date, Conception Date, or IVF Transfer Date. Each method has different accuracy levels.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium mb-2">Enter Required Information</h4>
                    <p className="text-muted-foreground">Provide the dates and your weight/height information for personalized recommendations and accurate BMI-based weight gain guidance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium mb-2">Review Your Comprehensive Results</h4>
                    <p className="text-muted-foreground">Get detailed pregnancy schedule, weight gain recommendations, symptoms, fetal development, and personalized guidance for your pregnancy stage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Best Practices for Accurate Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">Use Most Accurate Method</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Ultrasound dating is most accurate, followed by due date, then LMP. Use the method with the most reliable information.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Enter Accurate Measurements</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Provide accurate weight and height measurements for personalized BMI-based weight gain recommendations.
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">Update Regularly</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Recalculate weekly to get updated trimester guidance, symptoms, and milestones as your pregnancy progresses.
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Consult Healthcare Provider</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Always discuss results with your healthcare provider for personalized medical advice and care planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
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
                  How accurate is the pregnancy calculator?
                </h3>
                <p className="text-muted-foreground">
                  Our calculator provides estimates based on standard medical calculations. The ultrasound method is most accurate (±3-5 days), followed by due date method (±1-2 weeks). The LMP method is least accurate for women with irregular cycles.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What's the difference between gestational age and conception age?
                </h3>
                <p className="text-muted-foreground">
                  Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers for pregnancy dating. Conception age is the actual time since fertilization occurred, which is typically about 2 weeks less than gestational age.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How do I know which calculation method to use?
                </h3>
                <p className="text-muted-foreground">
                  Use the method with the most accurate information you have. Ultrasound dating is most precise, followed by due date, then last menstrual period. If you know your exact conception date or had IVF, use those methods for the most accurate results.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Are the weight gain recommendations personalized?
                </h3>
                <p className="text-muted-foreground">
                  Yes! Our weight gain recommendations are based on your pre-pregnancy BMI and follow Institute of Medicine guidelines. The recommendations are tailored to your specific body type and health status.
                </p>
              </div>
              <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I use this calculator throughout my pregnancy?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! The calculator provides updated recommendations as your pregnancy progresses. You can recalculate weekly to get updated trimester guidance, symptoms, and milestones.
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
              Ready to Use Our Pregnancy Calculator?
            </h2>
            <p className="text-blue-700 dark:text-blue-300 mb-6">
              Track your pregnancy with our comprehensive calculator. Get due date estimates, gestational age, weight gain recommendations, and personalized pregnancy insights.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/calculator/pregnancy-calculator">
                Try Our Pregnancy Calculator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}