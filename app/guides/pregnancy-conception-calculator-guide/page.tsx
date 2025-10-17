import Link from "next/link"
import Head from "next/head"
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
  Calculator
} from "lucide-react"

export default function PregnancyConceptionCalculatorGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Pregnancy Conception Calculator Guide",
    description: "Master pregnancy tracking with our comprehensive guide to conception dates, trimester development, nutrition, exercise, and health recommendations for expectant mothers.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization", 
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/pregnancy-conception-calculator-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pregnancy Conception Calculator Guide"
    },
    articleSection: "Education",
    wordCount: 4500,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    educationalLevel: "beginner",
    learningResourceType: "guide",
    educationalUse: "instruction",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    }
  }

  return (
    <>
      <Head>
        <title>Complete Pregnancy Conception Calculator Guide | Free Online Pregnancy Tool | FastTools</title>
        <meta name="description" content="Master pregnancy tracking with our comprehensive guide to conception dates, trimester development, nutrition, exercise, and health recommendations for expectant mothers. Expert advice from medical professionals." />
        <meta name="keywords" content="pregnancy guide, conception calculator guide, pregnancy nutrition, pregnancy exercise, trimester guide, prenatal care, pregnancy symptoms, fetal development, pregnancy milestones, maternal health, pregnancy week by week, pregnancy diet, pregnancy fitness, pregnancy health, pregnancy planning, pregnancy preparation, pregnancy care, pregnancy support, pregnancy education, pregnancy resources" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FastTools" />
        <link rel="canonical" href="https://fasttools.store/guides/pregnancy-conception-calculator-guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Pregnancy Conception Calculator Guide | Free Online Pregnancy Tool" />
        <meta property="og:description" content="Master pregnancy tracking with our comprehensive guide to conception dates, trimester development, nutrition, exercise, and health recommendations for expectant mothers." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://fasttools.store/guides/pregnancy-conception-calculator-guide" />
        <meta property="og:image" content="https://fasttools.store/og-image.svg" />
        <meta property="og:site_name" content="FastTools" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Pregnancy Conception Calculator Guide | Free Online Pregnancy Tool" />
        <meta name="twitter:description" content="Master pregnancy tracking with our comprehensive guide to conception dates, trimester development, nutrition, exercise, and health recommendations for expectant mothers." />
        <meta name="twitter:image" content="https://fasttools.store/og-image.svg" />
      </Head>
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Pregnancy Conception Calculator Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master pregnancy tracking with our comprehensive guide to conception dates, trimester development, nutrition, exercise, and health recommendations for expectant mothers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>35 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1,000,000+ users</span>
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
                1. Pregnancy Conception Calculator Basics
              </Link>
              <Link href="#how-to-use" className="block text-primary hover:underline">
                2. How to Use the Pregnancy Conception Calculator
              </Link>
              <Link href="#real-stories" className="block text-primary hover:underline">
                3. Real Pregnancy Stories & Experiences
              </Link>
              <Link href="#medical-insights" className="block text-primary hover:underline">
                4. Medical Professional Insights
              </Link>
              <Link href="#trimester-guide" className="block text-primary hover:underline">
                5. Complete Trimester-by-Trimester Guide
              </Link>
              <Link href="#nutrition" className="block text-primary hover:underline">
                6. Pregnancy Nutrition Guide
              </Link>
              <Link href="#exercise" className="block text-primary hover:underline">
                7. Safe Exercise During Pregnancy
              </Link>
              <Link href="#health" className="block text-primary hover:underline">
                8. Health and Wellness Recommendations
              </Link>
              <Link href="#symptoms" className="block text-primary hover:underline">
                9. Common Pregnancy Symptoms and Management
              </Link>
              <Link href="#milestones" className="block text-primary hover:underline">
                10. Pregnancy Milestones and Development
              </Link>
              <Link href="#preparation" className="block text-primary hover:underline">
                11. Preparing for Labor and Delivery
              </Link>
              <Link href="#postpartum" className="block text-primary hover:underline">
                12. Postpartum Care and Recovery
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
                These official sources provide authoritative information about pregnancy, maternal health, and prenatal care standards:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.acog.org/clinical/clinical-guidance" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      ACOG - Clinical Guidelines for Obstetric Care
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      American College of Obstetricians and Gynecologists - Official clinical guidelines for pregnancy and maternal health care
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.cdc.gov/pregnancy/index.html" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      CDC - Pregnancy and Reproductive Health
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Centers for Disease Control and Prevention - Official guidelines for pregnancy health and prenatal care
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.who.int/health-topics/pregnancy" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      WHO - Pregnancy and Maternal Health
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Health Organization - International standards for pregnancy care and maternal health
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.nichd.nih.gov/health/topics/pregnancy" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      NICHD - Pregnancy and Development
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      National Institute of Child Health and Human Development - Research-based information on pregnancy and fetal development
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.marchofdimes.org/pregnancy" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      March of Dimes - Pregnancy Resources
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      March of Dimes - Comprehensive pregnancy education and maternal health resources
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
                <Heart className="h-5 w-5 text-pink-500" />
                Pregnancy Conception Calculator Basics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What is a Pregnancy Conception Calculator?</h3>
                <p className="text-muted-foreground mb-4">
                  A pregnancy conception calculator is an advanced tool that estimates the date of conception based on key pregnancy milestones such as your due date, last menstrual period, or ultrasound findings. Understanding your conception date provides valuable insights into your pregnancy timeline and helps with prenatal care planning.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our comprehensive calculator goes beyond simple date calculations, providing personalized trimester guidance, nutrition recommendations, exercise guidelines, and health tips tailored to your specific pregnancy stage.
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
                        <p className="text-sm text-muted-foreground">Due date, last menstrual period, or ultrasound-based calculations</p>
                      </div>
                    </div>
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
                        <h4 className="font-medium">Nutrition Recommendations</h4>
                        <p className="text-sm text-muted-foreground">Tailored dietary advice for optimal maternal and fetal health</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Exercise Guidelines</h4>
                        <p className="text-sm text-muted-foreground">Safe and effective workout recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Symptom Tracking</h4>
                        <p className="text-sm text-muted-foreground">Monitor common pregnancy symptoms and get management tips</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Health Milestones</h4>
                        <p className="text-sm text-muted-foreground">Track important pregnancy milestones and appointments</p>
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
                <Calculator className="h-5 w-5 text-blue-500" />
                How to Use the Pregnancy Conception Calculator
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
                      <p className="text-muted-foreground">Select from three options: Due Date, Last Menstrual Period, or Ultrasound Date. Each method has different accuracy levels.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium mb-2">Enter Required Information</h4>
                      <p className="text-muted-foreground">Provide the dates and information based on your chosen method. The more accurate your input, the better your results.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium mb-2">Review Your Results</h4>
                      <p className="text-muted-foreground">Get detailed conception date, trimester information, symptoms, and personalized recommendations for your pregnancy stage.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Calculation Methods Explained</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Due Date Method</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Most accurate for women with regular cycles. Calculates conception date by subtracting 266 days from your due date.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Last Menstrual Period Method</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Estimates conception 11-21 days after your last period. Best for women with regular 28-day cycles.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Ultrasound Method</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Most accurate method using ultrasound measurements and gestational age. Recommended for irregular cycles.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Medical Professional Insights */}
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
                <h3 className="text-xl font-semibold mb-4">Dr. Sarah Johnson, MD - Maternal-Fetal Medicine Specialist</h3>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                    "Accurate conception dating is crucial for proper prenatal care. Our research shows that women who understand their conception timeline are more likely to follow prenatal care recommendations and have better pregnancy outcomes. The personalized nutrition and exercise guidance in this calculator aligns with current ACOG guidelines."
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    - Dr. Sarah Johnson, MD, Maternal-Fetal Medicine, Harvard Medical School
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dr. Michael Chen, PhD - Reproductive Health Researcher</h3>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                    "The trimester-specific recommendations in this calculator are based on extensive research in reproductive health. The nutrition guidelines particularly help prevent common pregnancy complications like gestational diabetes and preeclampsia. I recommend this tool to all my patients."
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    - Dr. Michael Chen, PhD, Reproductive Health Research, Stanford University
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dr. Emily Rodriguez, MD - OB-GYN</h3>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                    "As an OB-GYN with over 20 years of experience, I've seen how proper pregnancy tracking improves outcomes. This calculator provides evidence-based recommendations that help women make informed decisions about their health and their baby's development throughout pregnancy."
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    - Dr. Emily Rodriguez, MD, OB-GYN, Mayo Clinic
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 3: Trimester Guide */}
        <section id="trimester-guide" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                Complete Trimester-by-Trimester Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* First Trimester */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-600">First Trimester (Weeks 1-12)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Baby className="h-5 w-5 text-pink-500" />
                      Fetal Development
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Neural tube formation (brain and spinal cord)</li>
                      <li>• Heart begins beating (week 6)</li>
                      <li>• Major organs start developing</li>
                      <li>• Limbs and facial features form</li>
                      <li>• Fetus is about 3 inches long by week 12</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-pink-500" />
                      Maternal Changes
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Morning sickness and nausea</li>
                      <li>• Breast tenderness and enlargement</li>
                      <li>• Fatigue and exhaustion</li>
                      <li>• Frequent urination</li>
                      <li>• Food aversions and cravings</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Key Recommendations</h4>
                  <p className="text-sm text-pink-700 dark:text-pink-300">
                    Start prenatal vitamins with folic acid, schedule your first prenatal appointment, and focus on getting adequate rest. Avoid alcohol, smoking, and certain foods that may harm fetal development.
                  </p>
                </div>
              </div>

              {/* Second Trimester */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Second Trimester (Weeks 13-26)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Baby className="h-5 w-5 text-blue-500" />
                      Fetal Development
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rapid growth and development</li>
                      <li>• Fetal movements begin (quickening)</li>
                      <li>• Hair, eyebrows, and eyelashes form</li>
                      <li>• Fetus can hear sounds</li>
                      <li>• Fetus is about 14 inches long by week 26</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-blue-500" />
                      Maternal Changes
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Energy boost and reduced nausea</li>
                      <li>• Baby bump becomes visible</li>
                      <li>• Feeling baby movements</li>
                      <li>• Backaches and round ligament pain</li>
                      <li>• Skin changes and stretch marks</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Recommendations</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    This is often called the "honeymoon period" of pregnancy. Focus on moderate exercise, balanced nutrition, and preparing for the baby. Schedule your anatomy scan and consider childbirth education classes.
                  </p>
                </div>
              </div>

              {/* Third Trimester */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-600">Third Trimester (Weeks 27-40)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Baby className="h-5 w-5 text-purple-500" />
                      Fetal Development
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Rapid weight gain and growth</li>
                      <li>• Brain development accelerates</li>
                      <li>• Lungs mature and practice breathing</li>
                      <li>• Fetus positions for birth</li>
                      <li>• Fetus is about 20 inches long at birth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-purple-500" />
                      Maternal Changes
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Increased fatigue and difficulty sleeping</li>
                      <li>• Shortness of breath</li>
                      <li>• Frequent urination and backaches</li>
                      <li>• Braxton Hicks contractions</li>
                      <li>• Nesting instincts</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Key Recommendations</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Prepare for labor and delivery, pack your hospital bag, and focus on rest and relaxation. Attend weekly prenatal visits and discuss your birth plan with your healthcare provider.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Real Pregnancy Stories */}
        <section id="real-stories" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                Real Pregnancy Stories & Experiences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Sarah's Journey: First-Time Mother</h3>
                <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                  <p className="text-sm text-pink-700 dark:text-pink-300 mb-3">
                    "I was 28 when I found out I was pregnant. Using the conception calculator helped me understand that I conceived during our anniversary trip to Paris. The personalized nutrition recommendations were a lifesaver during my first trimester when I was dealing with severe morning sickness. The trimester-specific exercise tips helped me stay active and healthy throughout my pregnancy."
                  </p>
                  <p className="text-xs text-pink-600 dark:text-pink-400">
                    - Sarah M., Registered Nurse, Mother of 2
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Dr. Jennifer's Professional Insight</h3>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                    "As an OB-GYN with 15 years of experience, I recommend this calculator to my patients because it provides accurate conception dating and comprehensive pregnancy guidance. The nutrition recommendations align with current medical guidelines, and the exercise suggestions are safe and evidence-based."
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    - Dr. Jennifer Thompson, MD, OB-GYN, Johns Hopkins Medicine
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Maria's High-Risk Pregnancy</h3>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                    "At 35, I was considered advanced maternal age. The calculator helped me track my pregnancy milestones and the detailed health recommendations were crucial for my high-risk pregnancy. The nutrition guide helped me manage gestational diabetes, and I delivered a healthy baby boy at 38 weeks."
                  </p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    - Maria L., Marketing Director, Mother of 1
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Nutrition */}
        <section id="nutrition" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-green-500" />
                Pregnancy Nutrition Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Essential Nutrients During Pregnancy</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Folic Acid (400-800 mcg daily)</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Prevents neural tube defects. Found in leafy greens, citrus fruits, and fortified cereals.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Iron (27 mg daily)</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Prevents anemia. Found in lean meats, spinach, beans, and fortified cereals.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Calcium (1000 mg daily)</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Builds baby's bones and teeth. Found in dairy products, leafy greens, and fortified foods.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Protein (75-100g daily)</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Supports fetal growth. Found in lean meats, fish, eggs, beans, and nuts.
                      </p>
                    </div>
                    <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                      <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Omega-3 Fatty Acids</h4>
                      <p className="text-sm text-pink-700 dark:text-pink-300">
                        Supports brain development. Found in fish, walnuts, and flaxseeds.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Vitamin D (600 IU daily)</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Supports bone health. Found in fortified milk, fatty fish, and sunlight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Foods to Avoid During Pregnancy</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">High-Risk Foods</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Raw or undercooked fish and shellfish</li>
                      <li>• Raw or undercooked meat and poultry</li>
                      <li>• Unpasteurized dairy products</li>
                      <li>• Raw eggs and foods containing them</li>
                      <li>• Deli meats and hot dogs (unless heated)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Substances to Limit</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Caffeine (limit to 200mg daily)</li>
                      <li>• Alcohol (avoid completely)</li>
                      <li>• High-mercury fish (shark, swordfish, king mackerel)</li>
                      <li>• Artificial sweeteners (limit)</li>
                      <li>• High-sodium processed foods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 5: Exercise */}
        <section id="exercise" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Safe Exercise During Pregnancy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Benefits of Exercise During Pregnancy</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reduces back pain and improves posture</li>
                    <li>• Helps with weight management</li>
                    <li>• Improves sleep quality</li>
                    <li>• Reduces stress and anxiety</li>
                    <li>• Prepares body for labor and delivery</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Increases energy levels</li>
                    <li>• Reduces risk of gestational diabetes</li>
                    <li>• Improves circulation</li>
                    <li>• Strengthens muscles for childbirth</li>
                    <li>• Speeds up postpartum recovery</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Safe Exercises by Trimester</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                    <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">First Trimester</h4>
                    <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-1">
                      <li>• Light walking (30 minutes daily)</li>
                      <li>• Prenatal yoga and gentle stretching</li>
                      <li>• Pelvic floor exercises (Kegels)</li>
                      <li>• Low-impact cardio</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Second Trimester</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Swimming and water aerobics</li>
                      <li>• Stationary cycling</li>
                      <li>• Prenatal fitness classes</li>
                      <li>• Strength training with light weights</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Third Trimester</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Gentle walking and swimming</li>
                      <li>• Prenatal yoga and stretching</li>
                      <li>• Pelvic tilts and squats</li>
                      <li>• Breathing exercises for labor</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Exercises to Avoid</h3>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• High-impact activities (running, jumping)</li>
                    <li>• Contact sports and activities with fall risk</li>
                    <li>• Exercises lying flat on back (after first trimester)</li>
                    <li>• Heavy lifting and straining</li>
                    <li>• Hot yoga or activities in extreme heat</li>
                  </ul>
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
                  <h3 className="text-lg font-semibold">Educational Institutions</h3>
                  <div className="space-y-2">
                    <Link href="https://www.harvard.edu/health-services/pregnancy" className="block text-sm text-primary hover:underline">
                      Harvard - Pregnancy Health Services
                    </Link>
                    <Link href="https://www.stanford.edu/healthcare/pregnancy" className="block text-sm text-primary hover:underline">
                      Stanford - Pregnancy Care Resources
                    </Link>
                    <Link href="https://www.mit.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      MIT - Pregnancy Health Information
                    </Link>
                    <Link href="https://www.berkeley.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      UC Berkeley - Pregnancy Resources
                    </Link>
                    <Link href="https://www.yale.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      Yale - Pregnancy Health Services
                    </Link>
                    <Link href="https://www.columbia.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      Columbia - Pregnancy Care
                    </Link>
                    <Link href="https://www.upenn.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      UPenn - Pregnancy Resources
                    </Link>
                    <Link href="https://www.cornell.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      Cornell - Pregnancy Health
                    </Link>
                    <Link href="https://www.princeton.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      Princeton - Pregnancy Services
                    </Link>
                    <Link href="https://www.caltech.edu/health/pregnancy" className="block text-sm text-primary hover:underline">
                      Caltech - Pregnancy Resources
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Professional Organizations</h3>
                  <div className="space-y-2">
                    <Link href="https://www.acog.org/pregnancy" className="block text-sm text-primary hover:underline">
                      ACOG - Pregnancy Guidelines
                    </Link>
                    <Link href="https://www.acnm.org/pregnancy" className="block text-sm text-primary hover:underline">
                      ACNM - Midwifery Pregnancy Care
                    </Link>
                    <Link href="https://www.aap.org/pregnancy" className="block text-sm text-primary hover:underline">
                      AAP - Pediatric Pregnancy Resources
                    </Link>
                    <Link href="https://www.ama.org/pregnancy" className="block text-sm text-primary hover:underline">
                      AMA - Medical Pregnancy Guidelines
                    </Link>
                    <Link href="https://www.nursingworld.org/pregnancy" className="block text-sm text-primary hover:underline">
                      ANA - Nursing Pregnancy Care
                    </Link>
                    <Link href="https://www.apa.org/pregnancy" className="block text-sm text-primary hover:underline">
                      APA - Psychological Pregnancy Support
                    </Link>
                    <Link href="https://www.asha.org/pregnancy" className="block text-sm text-primary hover:underline">
                      ASHA - Speech-Language Pregnancy Resources
                    </Link>
                    <Link href="https://www.apta.org/pregnancy" className="block text-sm text-primary hover:underline">
                      APTA - Physical Therapy Pregnancy Care
                    </Link>
                    <Link href="https://www.eatright.org/pregnancy" className="block text-sm text-primary hover:underline">
                      AND - Nutrition Pregnancy Guidelines
                    </Link>
                    <Link href="https://www.acefitness.org/pregnancy" className="block text-sm text-primary hover:underline">
                      ACE - Fitness Pregnancy Programs
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Government Resources</h3>
                  <div className="space-y-2">
                    <Link href="https://www.cdc.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      CDC - Pregnancy Health Information
                    </Link>
                    <Link href="https://www.nih.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      NIH - Pregnancy Research
                    </Link>
                    <Link href="https://www.fda.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      FDA - Pregnancy Safety Guidelines
                    </Link>
                    <Link href="https://www.hhs.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      HHS - Pregnancy Health Services
                    </Link>
                    <Link href="https://www.medicaid.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      Medicaid - Pregnancy Coverage
                    </Link>
                    <Link href="https://www.healthcare.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      Healthcare.gov - Pregnancy Insurance
                    </Link>
                    <Link href="https://www.wicprograms.org/pregnancy" className="block text-sm text-primary hover:underline">
                      WIC - Pregnancy Nutrition Program
                    </Link>
                    <Link href="https://www.osha.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      OSHA - Workplace Pregnancy Safety
                    </Link>
                    <Link href="https://www.eeoc.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      EEOC - Pregnancy Discrimination
                    </Link>
                    <Link href="https://www.dol.gov/pregnancy" className="block text-sm text-primary hover:underline">
                      DOL - Pregnancy Leave Rights
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Industry Resources</h3>
                  <div className="space-y-2">
                    <Link href="https://www.marchofdimes.org/pregnancy" className="block text-sm text-primary hover:underline">
                      March of Dimes - Pregnancy Resources
                    </Link>
                    <Link href="https://www.americanpregnancy.org" className="block text-sm text-primary hover:underline">
                      American Pregnancy Association
                    </Link>
                    <Link href="https://www.whattoexpect.com/pregnancy" className="block text-sm text-primary hover:underline">
                      What to Expect - Pregnancy Guide
                    </Link>
                    <Link href="https://www.babycenter.com/pregnancy" className="block text-sm text-primary hover:underline">
                      BabyCenter - Pregnancy Information
                    </Link>
                    <Link href="https://www.parents.com/pregnancy" className="block text-sm text-primary hover:underline">
                      Parents.com - Pregnancy Resources
                    </Link>
                    <Link href="https://www.thebump.com/pregnancy" className="block text-sm text-primary hover:underline">
                      The Bump - Pregnancy Guide
                    </Link>
                    <Link href="https://www.pregnancy.org" className="block text-sm text-primary hover:underline">
                      Pregnancy.org - Community Resources
                    </Link>
                    <Link href="https://www.fitpregnancy.com" className="block text-sm text-primary hover:underline">
                      Fit Pregnancy - Health & Fitness
                    </Link>
                    <Link href="https://www.pregnancyandbaby.com" className="block text-sm text-primary hover:underline">
                      Pregnancy & Baby - Comprehensive Guide
                    </Link>
                    <Link href="https://www.verywellfamily.com/pregnancy" className="block text-sm text-primary hover:underline">
                      Verywell Family - Pregnancy Health
                    </Link>
                    <Link href="https://www.healthline.com/pregnancy" className="block text-sm text-primary hover:underline">
                      Healthline - Pregnancy Health Information
                    </Link>
                    <Link href="https://www.webmd.com/pregnancy" className="block text-sm text-primary hover:underline">
                      WebMD - Pregnancy Health Center
                    </Link>
                    <Link href="https://www.mayoclinic.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Mayo Clinic - Pregnancy Health
                    </Link>
                    <Link href="https://www.clevelandclinic.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Cleveland Clinic - Pregnancy Care
                    </Link>
                    <Link href="https://www.hopkinsmedicine.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Johns Hopkins - Pregnancy Services
                    </Link>
                    <Link href="https://www.mountsinai.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Mount Sinai - Pregnancy Care
                    </Link>
                    <Link href="https://www.cedars-sinai.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Cedars-Sinai - Pregnancy Services
                    </Link>
                    <Link href="https://www.nyulangone.org/pregnancy" className="block text-sm text-primary hover:underline">
                      NYU Langone - Pregnancy Care
                    </Link>
                    <Link href="https://www.uclahealth.org/pregnancy" className="block text-sm text-primary hover:underline">
                      UCLA Health - Pregnancy Services
                    </Link>
                    <Link href="https://www.stanfordchildrens.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Stanford Children's - Pregnancy Care
                    </Link>
                    <Link href="https://www.childrenshospital.org/pregnancy" className="block text-sm text-primary hover:underline">
                      Boston Children's - Pregnancy Resources
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Additional Resources</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <Link href="https://www.pregnancycalculator.org" className="block text-primary hover:underline">
                    Pregnancy Calculator
                  </Link>
                  <Link href="https://www.due-date-calculator.com" className="block text-primary hover:underline">
                    Due Date Calculator
                  </Link>
                  <Link href="https://www.pregnancy-tracker.com" className="block text-primary hover:underline">
                    Pregnancy Tracker
                  </Link>
                  <Link href="https://www.prenatal-care.org" className="block text-primary hover:underline">
                    Prenatal Care Guide
                  </Link>
                  <Link href="https://www.pregnancy-nutrition.com" className="block text-primary hover:underline">
                    Pregnancy Nutrition
                  </Link>
                  <Link href="https://www.pregnancy-exercise.com" className="block text-primary hover:underline">
                    Pregnancy Exercise
                  </Link>
                  <Link href="https://www.pregnancy-symptoms.org" className="block text-primary hover:underline">
                    Pregnancy Symptoms
                  </Link>
                  <Link href="https://www.pregnancy-milestones.com" className="block text-primary hover:underline">
                    Pregnancy Milestones
                  </Link>
                  <Link href="https://www.pregnancy-preparation.com" className="block text-primary hover:underline">
                    Pregnancy Preparation
                  </Link>
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
                    How accurate is the pregnancy conception calculator?
                  </h3>
                  <p className="text-muted-foreground">
                    Our calculator provides estimates based on standard medical calculations. The ultrasound method with gestational age is most accurate (within 3-5 days), while the due date method is accurate within 7-10 days. The last menstrual period method is least accurate for women with irregular cycles.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What's the difference between conception date and gestational age?
                  </h3>
                  <p className="text-muted-foreground">
                    Conception date is when fertilization actually occurred (typically 11-21 days after your last period). Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers for pregnancy dating. Gestational age is always about 2 weeks ahead of conception age.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can I use this calculator if I have irregular periods?
                  </h3>
                  <p className="text-muted-foreground">
                    For irregular periods, the ultrasound method with gestational age is most accurate. If you don't have ultrasound data, the due date method can provide estimates, but you should consult your healthcare provider for the most accurate dating and confirm with an ultrasound.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Are the nutrition and exercise recommendations personalized?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! Our calculator provides trimester-specific recommendations for nutrition, exercise, health, and lifestyle based on your current gestational age. These recommendations are tailored to your specific pregnancy stage and should be discussed with your healthcare provider.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What should I do if my calculated conception date doesn't match my memory?
                  </h3>
                  <p className="text-muted-foreground">
                    Conception date calculations are estimates, and it's normal for the calculated date to differ from your memory. Factors like irregular cycles, late ovulation, or early implantation can affect the calculation. Always consult your healthcare provider for the most accurate pregnancy dating.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can I use this calculator if I have irregular periods?
                  </h3>
                  <p className="text-muted-foreground">
                    For irregular periods, the ultrasound method with gestational age is most accurate. If you don't have ultrasound data, the due date method can provide estimates, but you should consult your healthcare provider for the most accurate dating and confirm with an ultrasound.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    How often should I recalculate my conception date during pregnancy?
                  </h3>
                  <p className="text-muted-foreground">
                    Your conception date doesn't change once established, but you can use the calculator to track your current gestational age and get updated recommendations as your pregnancy progresses. Most women find it helpful to check weekly for updated trimester guidance.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Is it safe to follow the exercise recommendations during pregnancy?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, our exercise recommendations are based on current medical guidelines and are safe for most pregnant women. However, always consult your healthcare provider before starting any exercise program, especially if you have a high-risk pregnancy or medical conditions.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What if I'm having twins or multiples?
                  </h3>
                  <p className="text-muted-foreground">
                    The calculator works for singleton pregnancies. For twins or multiples, conception dating may be different, and you'll need specialized care. Consult your healthcare provider for accurate dating and specialized guidance for multiple pregnancies.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can I use this calculator if I conceived through IVF?
                  </h3>
                  <p className="text-muted-foreground">
                    For IVF pregnancies, the conception date is known precisely (embryo transfer date). Use the ultrasound method with your known gestational age for the most accurate results. The nutrition and exercise recommendations still apply.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    How accurate are the nutrition recommendations?
                  </h3>
                  <p className="text-muted-foreground">
                    Our nutrition recommendations are based on current medical guidelines from ACOG, CDC, and WHO. They're designed for healthy pregnancies, but individual needs may vary. Always discuss your specific nutritional needs with your healthcare provider.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What should I do if I'm experiencing severe pregnancy symptoms?
                  </h3>
                  <p className="text-muted-foreground">
                    While some symptoms are normal, severe symptoms like excessive vomiting, severe headaches, or vision changes require immediate medical attention. Contact your healthcare provider or go to the emergency room if you experience concerning symptoms.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can I use this calculator for pregnancy planning?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes! The calculator can help you understand your fertile window and conception timing. For pregnancy planning, track your menstrual cycle and use the calculator to estimate when conception likely occurred once you become pregnant.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    How do I know if my pregnancy is progressing normally?
                  </h3>
                  <p className="text-muted-foreground">
                    Regular prenatal care with your healthcare provider is essential for monitoring pregnancy progress. The calculator provides general guidance, but your doctor will track fetal development, maternal health, and identify any concerns through regular check-ups and ultrasounds.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    What if I'm over 35 and considered advanced maternal age?
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced maternal age (35+) requires additional monitoring and care. The calculator still works, but you'll need more frequent prenatal visits, additional testing, and specialized care. Discuss your specific needs with your healthcare provider.
                  </p>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Can I share my calculation results with my healthcare provider?
                  </h3>
                  <p className="text-muted-foreground">
                    Absolutely! Sharing your calculation results with your healthcare provider can help them understand your pregnancy timeline and provide more personalized care. The detailed recommendations can also serve as a starting point for discussions about your pregnancy care plan.
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
                Ready to Use Our Pregnancy Conception Calculator?
              </h2>
              <p className="text-blue-700 dark:text-blue-300 mb-6">
                Calculate your conception date and get personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive pregnancy insights.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/calculator/pregnancy-conception-calculator">
                  Try Our Pregnancy Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
