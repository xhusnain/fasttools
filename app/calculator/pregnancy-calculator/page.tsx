import { Metadata } from "next"
import PregnancyCalculator from "@/components/pregnancy-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Percent, Award, Globe, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Pregnancy Calculator | Free Online Tracking Tool",
  description: "FastTools Pregnancy Calculator - Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, and trimester guidance.",
    keywords: [
        "fasttools",
        "fast tools",
        "pregnancy conception calculator",
        "conception date calculator",
        "when did I conceive calculator",
        "pregnancy conception date calculator",
        "estimated conception date calculator",
        "conception calculator",
        "due date and conception calculator",
        "IVF conception calculator",
        "reverse due date calculator",
        "conception week calculator",
        "fertility calculator",
        "ovulation conception calculator",
        "pregnancy week and conception calculator",
        "conception window calculator",
        "calculate date of conception",
        "conception date estimator",
        "pregnancy conception estimator",
        "pregnancy due date from conception calculator",
        "calculate when you conceived",
        "pregnancy calculator by conception date",
        "how to calculate conception date",
        "pregnancy conception day calculator",
        "conception predictor",
        "pregnancy conception timeline calculator",
        "pregnancy and fertility calculator",
        "pregnancy conception tool",
        "pregnancy conception app",
        "calculate conception week",
        "accurate conception date calculator",
        "pregnancy calculator",
        "pregnancy tracker",
        "due date calculator",
        "pregnancy due date calculator",
        "pregnancy week calculator",
        "LMP pregnancy calculator",
        "pregnancy calculator by last period",
        "baby due date calculator",
        "pregnancy ovulation calculator",
        "IVF due date calculator",
        "how far along am I calculator",
        "pregnancy week by week calculator",
        "pregnancy calendar",
        "pregnancy countdown calculator",
        "pregnancy timeline calculator",
        "pregnancy week estimator",
        // Additional Pregnancy Calculator Keywords
        "Pregnancy Calculator",
        "pregnancy due date calculator",
        "pregnancy conception calculator",
        "pregnancy conception",
        "due date calculator",
        "conception calculator",
        "lmp",
        "edd calculation",
        "ovulation calculator",
        "calculation on fertile period",
        "click here for assistance calculating the gestational age for your keepsake"
    ],

  openGraph: {
    title: "Pregnancy Calculator | Free Online Tracking Tool | FastTools",
    description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights.",
    type: "website",
    url: "https://www.fasttools.store/calculator/pregnancy-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pregnancy Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Calculator | Free Online Tracking Tool | FastTools",
    description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/pregnancy-calculator"
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

export default function PregnancyCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool - Advanced Pregnancy Calculator with Comprehensive Tracking",
          description: "Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, and trimester guidance.",
          url: "https://www.fasttools.store/calculator/pregnancy-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Due Date Calculation",
            "Gestational Age Tracking",
            "Weight Gain Recommendations",
            "Trimester Guidance",
            "Pregnancy Progress Tracking",
            "Symptom Monitoring",
            "Nutrition Recommendations",
            "Exercise Guidelines",
            "Health Milestones",
            "Lifestyle Tips",
            "Pregnancy Week by Week",
            "Fetal Development Tracking",
            "Prenatal Care Planning",
            "Pregnancy Milestones",
            "Health Recommendations",
            "Pregnancy Planning Tool",
            "Pregnancy Health Tracker",
            "Pregnancy Development Tracker",
            "Pregnancy Timeline",
            "Maternal Health Monitoring"
          ],
          keywords: [
            "pregnancy calculator",
            "pregnancy tracker",
            "due date calculator",
            "gestational age calculator",
            "pregnancy week by week",
            "pregnancy schedule",
            "pregnancy weight gain",
            "pregnancy progress",
            "pregnancy milestones",
            "pregnancy appointments",
            "pregnancy symptoms",
            "pregnancy nutrition",
            "pregnancy exercise",
            "pregnancy health",
            "pregnancy planning",
            "pregnancy management",
            "pregnancy care",
            "pregnancy support",
            "pregnancy education",
            "pregnancy resources",
            "pregnancy timeline",
            "pregnancy development",
            "fetal development",
            "prenatal care",
            "maternal health",
            "pregnancy monitoring",
            "pregnancy tracking",
            "pregnancy insights",
            "pregnancy guidance",
            "pregnancy recommendations"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-3 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader 
                title="Pregnancy Calculator - Free Online Pregnancy Tracking Tool"
                description="Track your pregnancy with our comprehensive pregnancy calculator. Get due date estimates, gestational age, weight gain recommendations, trimester guidance, and personalized pregnancy insights."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-slate-700 rounded-xl shadow-sm bg-black" />
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
              <div>
                <PregnancyCalculator />
            
                {/* Educational Content Sections */}
                <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">
                  {/* How to Use Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                      </div>
                      How to Use Pregnancy Calculator
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="p-3 md:p-4 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-2 text-sm md:text-base">1. Choose Calculation Method</h3>
                          <p className="text-xs md:text-sm text-slate-400">Select from Due Date, Last Menstrual Period, Ultrasound Date, Conception Date, or IVF methods</p>
                        </div>
                        <div className="p-3 md:p-4 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-2 text-sm md:text-base">2. Enter Your Information</h3>
                          <p className="text-xs md:text-sm text-slate-400">Provide the required dates and weight/height information for personalized recommendations</p>
                        </div>
                        <div className="p-3 md:p-4 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-2 text-sm md:text-base">3. Get Comprehensive Results</h3>
                          <p className="text-xs md:text-sm text-slate-400">Receive detailed pregnancy schedule, weight gain recommendations, and personalized guidance</p>
                        </div>
                        <div className="p-3 md:p-4 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-2 text-sm md:text-base">4. Track Your Progress</h3>
                          <p className="text-xs md:text-sm text-slate-400">Monitor pregnancy milestones and get week-by-week insights throughout your journey</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Target className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <Calculator className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Due Date Calculation</h3>
                            <p className="text-xs md:text-sm text-slate-400">Accurate due date estimates using multiple calculation methods</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Gestational Age Tracking</h3>
                            <p className="text-xs md:text-sm text-slate-400">Monitor your pregnancy progress week by week</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <TrendingUp className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Weight Gain Recommendations</h3>
                            <p className="text-xs md:text-sm text-slate-400">Personalized weight gain guidance based on your BMI</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <BookOpen className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Trimester Guidance</h3>
                            <p className="text-xs md:text-sm text-slate-400">Stage-specific recommendations for each trimester</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <Users className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Symptom Monitoring</h3>
                            <p className="text-xs md:text-sm text-slate-400">Track pregnancy symptoms and health milestones</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-green-500/10 rounded-lg">
                            <Clock className="h-3 w-3 text-green-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-green-500 text-sm md:text-base">Progress Tracking</h3>
                            <p className="text-xs md:text-sm text-slate-400">Comprehensive pregnancy timeline and milestone tracking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Home className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">For Expectant Mothers</h3>
                        <ul className="space-y-2 text-sm md:text-base text-slate-400">
                          <li>• Track pregnancy progress and milestones</li>
                          <li>• Get personalized weight gain recommendations</li>
                          <li>• Monitor pregnancy symptoms and development</li>
                          <li>• Plan prenatal appointments and care</li>
                          <li>• Access trimester-specific guidance</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">For Healthcare Providers</h3>
                        <ul className="space-y-2 text-sm md:text-base text-slate-400">
                          <li>• Verify pregnancy dating and scheduling</li>
                          <li>• Provide patient education materials</li>
                          <li>• Track pregnancy progression</li>
                          <li>• Plan prenatal care schedules</li>
                          <li>• Monitor weight gain and health metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-orange-500">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How accurate is the pregnancy calculator?</h3>
                        <p className="text-sm md:text-base text-slate-400">
                          Our calculator provides estimates based on standard medical calculations. The most accurate method is using ultrasound data with gestational age. Due date calculations are typically accurate within 1-2 weeks for most pregnancies.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What's the difference between gestational age and conception age?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers. Conception age is the actual time since fertilization occurred, which is typically about 2 weeks less than gestational age.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How do I know which calculation method to use?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Use the method with the most accurate information you have. Ultrasound dating is most precise, followed by due date, then last menstrual period. If you know your exact conception date or had IVF, use those methods for the most accurate results.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">Are the weight gain recommendations personalized?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our weight gain recommendations are based on your pre-pregnancy BMI and follow Institute of Medicine guidelines. The recommendations are tailored to your specific body type and health status.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">Can I use this calculator throughout my pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Absolutely! The calculator provides updated recommendations as your pregnancy progresses. You can recalculate weekly to get updated trimester guidance, symptoms, and milestones.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What are the best practices for accurate pregnancy calculator results?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Use the most accurate method available (ultrasound dating is most precise, followed by due date, then LMP), enter accurate weight and height measurements for personalized BMI-based recommendations, update regularly by recalculating weekly, and always consult your healthcare provider for personalized medical advice.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How often should I recalculate my pregnancy information?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          We recommend recalculating weekly to get updated trimester guidance, symptoms, milestones, and personalized recommendations. This ensures you receive the most current and relevant information as your pregnancy progresses and your baby develops.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What calculation methods are available and which is most accurate?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator offers five methods: Due Date, Last Menstrual Period, Ultrasound Date, Conception Date, and IVF Transfer Date. Ultrasound dating is most accurate (±3-5 days), followed by due date method (±1-2 weeks), then LMP method. Each method has different accuracy levels, so use the one with your most reliable information.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How does the calculator provide personalized weight gain recommendations?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator uses your pre-pregnancy BMI and follows Institute of Medicine guidelines to provide personalized weight gain recommendations. The recommendations are tailored to your specific body type, health status, and pregnancy stage, ensuring optimal maternal and fetal health throughout your pregnancy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What information do I need to enter for the most accurate results?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          For the most accurate results, provide the most reliable date information you have (ultrasound date with gestational age is best), accurate weight and height measurements for personalized BMI-based recommendations, and update your information regularly as your pregnancy progresses for the most current guidance.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">Can the calculator help with pregnancy planning and preparation?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our calculator helps with comprehensive pregnancy planning by tracking important prenatal visits and screenings, providing trimester-specific guidance for nutrition and exercise, monitoring pregnancy milestones, and offering personalized recommendations for each stage of your pregnancy journey.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What makes this pregnancy calculator different from basic due date calculators?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our advanced calculator goes beyond simple date calculations, offering trimester-specific guidance, weight gain recommendations based on your BMI, symptom tracking, fetal development monitoring, comprehensive pregnancy insights, and personalized recommendations tailored to your specific pregnancy stage.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How does the calculator track fetal development week by week?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator monitors your baby's development week by week, providing detailed information about fetal growth, organ development, and important milestones. It tracks pregnancy progress with visual indicators and personalized insights based on your current gestational age and pregnancy stage.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What pregnancy milestones does the calculator track?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator tracks important pregnancy milestones including fetal development stages, key appointments, screening tests, physical changes, and health recommendations. It provides week-by-week updates on your baby's growth, important dates, and what to expect at each stage of your pregnancy journey.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How does the calculator help with prenatal care planning?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator tracks important prenatal visits and screenings, providing a comprehensive schedule of upcoming appointments based on your pregnancy stage. It helps you plan for essential tests, ultrasounds, and healthcare provider visits throughout your pregnancy journey.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What pregnancy symptoms can I expect at different stages?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator provides trimester-specific symptom information, including common symptoms like morning sickness, fatigue, mood changes, and physical changes. It offers management tips and guidance for each pregnancy stage, helping you understand what's normal and when to consult your healthcare provider.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How accurate are the due date calculations?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Due date calculations are based on the standard 280-day (40-week) pregnancy duration from the first day of your last menstrual period. However, only about 5% of babies are born on their exact due date. Most babies are born within 2 weeks before or after the due date, which is considered normal.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">Can I use this calculator for IVF pregnancies?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our calculator includes an IVF transfer date method for the most accurate dating of IVF pregnancies. This method uses the embryo transfer date and accounts for the specific type of embryo (fresh, frozen, or blastocyst) to provide precise conception and due date calculations.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What nutrition guidance does the pregnancy calculator provide?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator offers trimester-specific nutrition recommendations, including essential nutrients like folic acid, iron, calcium, and protein. It provides guidance on foods to avoid, healthy weight gain strategies, and meal planning tips tailored to your pregnancy stage and individual needs.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How does the calculator help with exercise planning during pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides safe exercise recommendations for each trimester, including appropriate activities, intensity levels, and modifications. It considers your pre-pregnancy fitness level and offers guidance on maintaining physical health while ensuring safety for both you and your baby.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What should I do if my due date seems wrong?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          If you suspect your due date is incorrect, consult your healthcare provider. They may adjust it based on ultrasound measurements, especially if done in the first trimester. Due dates are estimates, and only about 5% of babies are born on their exact due date. Most arrive within 2 weeks before or after.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">Can I use this calculator for twins or multiples?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes, our calculator works for twin and multiple pregnancies. However, twins are often born earlier (around 36-37 weeks) than singletons. The calculator will show your due date, but your healthcare provider will monitor your pregnancy more closely and may adjust expectations for multiple births.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">How can I track my baby's development week by week?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides detailed week-by-week fetal development information, including your baby's size, weight, and major developmental milestones. It tracks organ development, movement patterns, and what you can expect to feel at each stage. You can also see ultrasound images and development comparisons.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-green-500 text-base md:text-lg">What makes this pregnancy calculator different from others?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator offers comprehensive features including multiple calculation methods, personalized weight gain recommendations, trimester-specific guidance, fetal development tracking, nutrition and exercise advice, and ongoing support throughout your entire pregnancy journey. It's designed to be your complete pregnancy companion.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                      </div>
                      Related Health & Pregnancy Calculators
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { name: "Pregnancy Conception Calculator", desc: "Calculate conception date and pregnancy timeline", href: "/calculator/pregnancy-conception-calculator", icon: Target },
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                        { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                        { name: "Calorie Calculator", desc: "Calculate daily calorie needs", href: "/calculator/calorie-calculator", icon: TrendingUp },
                        { name: "Body Fat Calculator", desc: "Calculate body fat percentage", href: "/calculator/body-fat-calculator", icon: BarChart3 },
                        { name: "BMR Calculator", desc: "Calculate Basal Metabolic Rate", href: "/calculator/bmr-calculator", icon: Home },
                        { name: "Pace Calculator", desc: "Calculate running pace and speed", href: "/calculator/pace-calculator", icon: Clock },
                        { name: "Investment Calculator", desc: "Calculate investment returns", href: "/calculator/investment-calculator", icon: DollarSign },
                        { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                        { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                        { name: "Tax Calculator", desc: "Calculate income tax", href: "/calculator/tax-calculator", icon: FileText }
                      ].map(({ name, desc, icon: Icon, href }) => (
                        <a
                          key={href}
                          href={href}
                          className="p-2 md:p-3 bg-black rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-green-500/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3 w-3 text-green-500 group-hover:text-green-500" />
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm group-hover:text-green-500">{name}</h3>
                          </div>
                          <p className="text-xs text-slate-400 group-hover:text-slate-300">{desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-4 lg:space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-slate-400 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-slate-700 rounded-xl shadow-sm bg-black" />
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
