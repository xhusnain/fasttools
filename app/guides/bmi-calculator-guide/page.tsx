"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { Activity, Calculator, Heart, Target, Scale, TrendingUp, AlertTriangle, CheckCircle, Info, Zap, Sparkles, BookOpen, ExternalLink, Calendar, Users, Star, Globe, Shield, Lightbulb, BarChart3, ArrowRight } from "lucide-react"

export default function BMICalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete BMI Calculator Guide with Personalized Health Recommendations | FastTools",
    description: "Master BMI calculation with personalized health guidance. Learn BMI formulas, get custom nutrition plans, workout recommendations, and equipment suggestions based on your BMI category.",
    author: {
      "@type": "Organization",
      name: "FastTools"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    mainEntity: {
      "@type": "WebApplication",
      name: "BMI Calculator with Personalized Health Guidance",
      description: "Advanced BMI calculator providing personalized nutrition plans, workout recommendations, and health guidance based on BMI categories",
      url: "https://fasttools.store/tools/bmi-calculator",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      featureList: [
        "Personalized nutrition recommendations",
        "Custom workout plans based on BMI",
        "Equipment suggestions for fitness goals",
        "Age and gender-specific health advice",
        "BMI Prime and Ponderal Index calculations",
        "Risk assessment and health implications"
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Activity className="h-4 w-4" />
                  <span>Complete BMI Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
                  BMI Calculator Guide with Personalized Health Recommendations
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Master Body Mass Index calculation with personalized health guidance. Get custom nutrition plans, 
                  workout recommendations, equipment suggestions, and age-specific advice based on your BMI category.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Free Calculator</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Heart className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Health Focused</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                    <Target className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">Accurate Results</span>
                  </div>
                </div>
                
                {/* Try BMI Calculator Button */}
                <div className="mt-8">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 text-lg">
                    <Link href="/tools/bmi-calculator">
                      <Calculator className="mr-2 h-5 w-5" />
                      Try BMI Calculator
                    </Link>
                  </Button>
                </div>
              </div>

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
                      These official sources provide authoritative information about BMI calculation, health standards, and medical guidelines:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                            WHO - Obesity and Overweight Fact Sheet
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            World Health Organization - Official BMI classification standards and health guidelines
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                            CDC - BMI Calculator and Information
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            Centers for Disease Control and Prevention - Official BMI calculation methods and health recommendations
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                            NHLBI - BMI Calculator and Guidelines
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            National Heart, Lung, and Blood Institute - Official BMI standards and cardiovascular health guidelines
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <a href="https://www.ada.org/en/science-research/ada-seal-of-acceptance/ada-seal-products" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                            ADA - American Diabetes Association Guidelines
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            American Diabetes Association - Official diabetes prevention and BMI correlation guidelines
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <a href="https://www.heart.org/en/healthy-living/healthy-eating/lose-weight/bmi-calculator" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                            AHA - American Heart Association BMI Guidelines
                          </a>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                            American Heart Association - Official cardiovascular health and BMI correlation standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Personalized Health Guidance Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="h-8 w-8 text-pink-600" />
                  Personalized Health Guidance Based on BMI Results
                </h2>
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-2xl p-8 border border-pink-200 dark:border-pink-800">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                    Our advanced BMI calculator provides personalized health recommendations based on your specific BMI category, 
                    age, and gender. Get custom nutrition plans, workout suggestions, and equipment recommendations tailored to your health goals.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 border border-pink-200 dark:border-pink-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <Target className="h-5 w-5 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Underweight Guidance</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• Healthy weight gain nutrition plans</li>
                        <li>• Lean protein and healthy fat recommendations</li>
                        <li>• Light cardio + strength training routines</li>
                        <li>• Essential gym equipment for muscle building</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 border border-pink-200 dark:border-pink-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Normal Weight Plan</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• Maintenance nutrition strategies</li>
                        <li>• Balanced diet recommendations</li>
                        <li>• 150 min cardio + strength training</li>
                        <li>• Equipment for fitness maintenance</li>
                      </ul>
                    </div>

                    <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 border border-pink-200 dark:border-pink-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                          <TrendingUp className="h-5 w-5 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Weight Loss Plan</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li>• Calorie deficit nutrition plans</li>
                        <li>• High-protein, fiber-rich foods</li>
                        <li>• 45-60 min cardio 5-6x/week</li>
                        <li>• Equipment for weight loss goals</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-xl font-bold text-indigo-800 dark:text-indigo-200 mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Age & Gender-Specific Recommendations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Age 50+ Considerations</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                          Focus on maintaining muscle mass, bone health, and joint-friendly exercises. 
                          Professional guidance recommended for personalized plans.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">Gender-Specific Advice</h4>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400">
                          Women: Weight-bearing exercises for bone health. Men: Cardiovascular health and muscle mass maintenance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mathematical Calculation Section */}
              <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Calculator className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200">How to Calculate BMI Using Math</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">BMI Formula</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg border border-slate-600">
                        <div className="text-white font-mono text-lg mb-2">Metric Units (kg/m²):</div>
                        <div className="text-slate-300 font-mono text-xl">BMI = weight(kg) ÷ height(m)²</div>
                      </div>
                      <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg border border-slate-600">
                        <div className="text-white font-mono text-lg mb-2">Imperial Units (lbs/in²):</div>
                        <div className="text-slate-300 font-mono text-xl">BMI = (weight(lbs) ÷ height(in)²) × 703</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">Step-by-Step Calculation</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Measure your weight</strong> in kilograms (kg) or pounds (lbs)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Measure your height</strong> in meters (m) or inches (in)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Square your height</strong> (height × height)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Divide weight by height squared</strong>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>For imperial units:</strong> multiply by 703
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">Example Calculation</h3>
                    <div className="space-y-3">
                      <div className="text-slate-700 dark:text-slate-300">
                        <strong>Person:</strong> 70 kg, 1.75 m tall
                      </div>
                      <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg border border-slate-600">
                        <div className="text-white font-mono">BMI = 70 ÷ (1.75)²</div>
                        <div className="text-slate-300 font-mono">BMI = 70 ÷ 3.0625</div>
                        <div className="text-slate-300 font-mono">BMI = 22.9 kg/m²</div>
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <strong>Result:</strong> Normal weight (18.5 - 24.9)
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BMI Categories */}
              <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">BMI Categories & Classifications</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-green-200 dark:border-green-700">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">Adult BMI Categories (WHO)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                        <span className="text-red-800 dark:text-red-200 font-medium">Severe Thinness</span>
                        <span className="text-red-600 font-bold">&lt; 16</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                        <span className="text-orange-800 dark:text-orange-200 font-medium">Moderate Thinness</span>
                        <span className="text-orange-600 font-bold">16 - 17</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                        <span className="text-yellow-800 dark:text-yellow-200 font-medium">Mild Thinness</span>
                        <span className="text-yellow-600 font-bold">17 - 18.5</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                        <span className="text-green-800 dark:text-green-200 font-medium">Normal Weight</span>
                        <span className="text-green-600 font-bold">18.5 - 25</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                        <span className="text-orange-800 dark:text-orange-200 font-medium">Overweight</span>
                        <span className="text-orange-600 font-bold">25 - 30</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                        <span className="text-red-800 dark:text-red-200 font-medium">Obese Class I</span>
                        <span className="text-red-600 font-bold">30 - 35</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                        <span className="text-red-800 dark:text-red-200 font-medium">Obese Class II</span>
                        <span className="text-red-600 font-bold">35 - 40</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                        <span className="text-red-800 dark:text-red-200 font-medium">Obese Class III</span>
                        <span className="text-red-600 font-bold">&gt; 40</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-green-200 dark:border-green-700">
                    <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">BMI Prime & Ponderal Index</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">BMI Prime</h4>
                        <div className="text-sm text-blue-700 dark:text-blue-300 mb-2">BMI Prime = BMI ÷ 25</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400">
                          • &lt; 0.74: Underweight<br/>
                          • 0.74 - 1.0: Normal<br/>
                          • &gt; 1.0: Overweight<br/>
                          • &gt; 1.2: Obese
                        </div>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Ponderal Index</h4>
                        <div className="text-sm text-purple-700 dark:text-purple-300 mb-2">PI = weight ÷ height³</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400">
                          More accurate for very tall or short individuals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Health Implications */}
              <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-8 border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">Health Implications & Risks</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Risks of Being Overweight
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">High blood pressure</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Type II diabetes</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Coronary heart disease</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Stroke</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Sleep apnea</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Certain cancers</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-amber-200 dark:border-amber-700">
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Risks of Being Underweight
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Malnutrition</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Vitamin deficiencies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Osteoporosis</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Decreased immune function</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Growth issues (children)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-amber-700 dark:text-amber-300">Reproductive issues</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BMI Limitations */}
              <section className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-8 border-2 border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    <Shield className="h-6 w-6 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">BMI Limitations & Considerations</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Important Limitations</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Muscle vs Fat:</strong> BMI doesn't distinguish between muscle and fat mass
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Body Composition:</strong> Athletes may have high BMI due to muscle mass
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Age & Gender:</strong> BMI interpretation varies by age and gender
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <div className="text-slate-700 dark:text-slate-300">
                          <strong>Ethnicity:</strong> Different ethnic groups may have different healthy BMI ranges
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      When to Use Additional Measurements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Consider Additional Tests:</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">
                          • Waist circumference<br/>
                          • Body fat percentage<br/>
                          • Waist-to-hip ratio<br/>
                          • Medical consultation
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-blue-800 dark:text-blue-200">Professional Assessment:</div>
                        <div className="text-sm text-blue-700 dark:text-blue-300">
                          • Healthcare provider evaluation<br/>
                          • Comprehensive health screening<br/>
                          • Personalized health plan<br/>
                          • Regular monitoring
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Competitor Comparison */}
              <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200">BMI Calculator Comparison</h2>
                </div>
                
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-purple-200 dark:border-purple-700">
                          <th className="text-left py-3 px-4 font-semibold text-purple-800 dark:text-purple-200">Feature</th>
                          <th className="text-center py-3 px-4 font-semibold text-purple-800 dark:text-purple-200">FastTools</th>
                          <th className="text-center py-3 px-4 font-semibold text-purple-800 dark:text-purple-200">Calculator.net</th>
                          <th className="text-center py-3 px-4 font-semibold text-purple-800 dark:text-purple-200">CalculatorSoup</th>
                          <th className="text-center py-3 px-4 font-semibold text-purple-800 dark:text-purple-200">CalculateStuff</th>
                        </tr>
                      </thead>
                      <tbody className="space-y-2">
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Personalized Health Guidance</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Custom Nutrition Plans</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Workout Recommendations</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Equipment Suggestions</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Age & Gender Specific</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">BMI Prime</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Ponderal Index</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Health Recommendations</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                          <td className="text-center py-3 px-4"><span className="text-red-500">✗</span></td>
                        </tr>
                        <tr className="border-b border-purple-100 dark:border-purple-800">
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Mobile Responsive</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm text-purple-700 dark:text-purple-300">Free to Use</td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                          <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Resource Directory */}
              <section className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-2xl p-8 border-2 border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                    <Globe className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-cyan-800 dark:text-cyan-200">BMI Calculator Resources</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-cyan-200 dark:border-cyan-700">
                    <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-4">Top BMI Calculator Websites</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.calculator.net/bmi-calculator.html" className="text-cyan-600 hover:underline text-sm">Calculator.net BMI Calculator</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.calculatorsoup.com/calculators/health/bmi-calculator.php" className="text-cyan-600 hover:underline text-sm">CalculatorSoup BMI Calculator</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.calculatestuff.com/health/bmi-calculator" className="text-cyan-600 hover:underline text-sm">CalculateStuff BMI Calculator</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm" className="text-cyan-600 hover:underline text-sm">NIH BMI Calculator</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" className="text-cyan-600 hover:underline text-sm">CDC BMI Information</a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 border border-cyan-200 dark:border-cyan-700">
                    <h3 className="text-lg font-semibold text-cyan-800 dark:text-cyan-200 mb-4">Health Organizations</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" className="text-cyan-600 hover:underline text-sm">WHO Obesity Guidelines</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.heart.org/en/healthy-living/healthy-eating/lose-weight/bmi-calculator" className="text-cyan-600 hover:underline text-sm">American Heart Association</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/bmi-calculator/itt-20084938" className="text-cyan-600 hover:underline text-sm">Mayo Clinic BMI Guide</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-cyan-600" />
                        <a href="https://www.webmd.com/diet/body-bmi-calculator" className="text-cyan-600 hover:underline text-sm">WebMD BMI Calculator</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related Tools */}
              <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-2xl p-8 border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">Related Health Calculators</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Activity className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">Body Fat Calculator</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Calculate body fat percentage using various methods</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">Ideal Weight Calculator</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Find your ideal weight range based on height and frame</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Heart className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">Calorie Calculator</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Calculate daily calorie needs for weight management</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <Scale className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">Waist-to-Hip Ratio</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Calculate waist-to-hip ratio for health assessment</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">BMR Calculator</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Calculate Basal Metabolic Rate for weight planning</p>
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-800 dark:text-indigo-200">Health Guides</span>
                    </div>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">Comprehensive health and fitness guides</p>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar with Ads */}
            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Sponsored Content</h3>
                </div>
                <div className="space-y-6">
                  <AdSpace slot="sidebar" className="h-96 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-64 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-64 rounded-xl overflow-hidden" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

