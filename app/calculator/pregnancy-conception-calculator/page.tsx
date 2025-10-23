import { Metadata } from "next"
import PregnancyConceptionCalculator from "@/components/pregnancy-conception-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, AlertCircle, Home, DollarSign, FileText, Percent, Award, Globe, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Pregnancy Conception Calculator | Free Online Tool | FastTools",
  description: "Calculate your conception date with advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, and week-by-week pregnancy insights.",
  keywords: [
    "pregnancy conception calculator",
    "conception date calculator",
    "when did I conceive",
    "pregnancy calculator",
    "due date calculator",
    "gestational age calculator",
    "pregnancy week by week",
    "trimester calculator",
    "pregnancy symptoms tracker",
    "prenatal care calculator",
    "pregnancy nutrition guide",
    "pregnancy exercise recommendations",
    "fetal development tracker",
    "pregnancy milestones",
    "conception date range",
    "pregnancy timeline",
    "maternal health calculator",
    "pregnancy planning tool",
    "fertility calculator",
    "pregnancy health tracker",
    "pregnancy due date calculator",
    "conception date range calculator",
    "pregnancy week calculator",
    "prenatal care guide",
    "pregnancy nutrition calculator",
    "pregnancy exercise guide",
    "maternal health tracker",
    "pregnancy development tracker",
    "conception timing calculator",
    "pregnancy health monitor",
      "pregnancy calculator",
      "due date calculator",
      "pregnancy due date calculator",
      "pregnancy week calculator",
      "pregnancy month calculator",
      "how far along am I calculator",
      "pregnancy week by week calculator",
      "pregnancy tracker",
      "pregnancy conception calculator",
      "pregnancy calendar",
      "pregnancy countdown calculator",
      "gestational age calculator",
      "estimated delivery date calculator",
      "LMP pregnancy calculator",
      "pregnancy calculator by last period",
      "pregnancy timeline calculator",
      "baby due date calculator",
      "pregnancy ovulation calculator",
      "pregnancy stage calculator",
      "pregnancy planner tool",
      "pregnancy app online",
      "IVF due date calculator",
      "pregnancy week estimator",
      "pregnancy schedule calculator",
      "calculate pregnancy weeks",
      "pregnancy calculator for women",
      "pregnancy age calculator",
      "pregnancy days calculator",
      "pregnancy milestone calculator",
      "pregnancy and birth calculator"
  ],
  openGraph: {
    title: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights.",
    type: "website",
    url: "https://www.fasttools.store/calculator/pregnancy-conception-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Pregnancy Conception Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, exercise recommendations, and week-by-week pregnancy insights.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/pregnancy-conception-calculator"
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

export default function PregnancyConceptionCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Pregnancy Conception Calculator | Free Online Pregnancy Tool - Advanced Pregnancy Calculator with Trimester Guidance",
          description: "Calculate your conception date with our advanced pregnancy conception calculator. Get personalized trimester guidance, nutrition tips, and week-by-week pregnancy insights.",
          url: "https://www.fasttools.store/calculator/pregnancy-conception-calculator",
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Conception Date Calculation",
            "Trimester Determination",
            "Pregnancy Symptoms Tracking",
            "Nutrition Recommendations",
            "Exercise Guidelines",
            "Health Milestones",
            "Lifestyle Tips",
            "Due Date Calculation",
            "Gestational Age Calculator",
            "Pregnancy Week by Week",
            "Prenatal Care Planning",
            "Fetal Development Tracking",
            "Maternal Health Monitoring",
            "Pregnancy Timeline",
            "Conception Date Range",
            "Pregnancy Milestones",
            "Health Recommendations",
            "Pregnancy Planning Tool",
            "Fertility Calculator",
            "Pregnancy Health Tracker"
          ],
          keywords: [
            "pregnancy conception calculator",
            "conception date calculator",
            "when did I conceive",
            "pregnancy calculator",
            "due date calculator",
            "gestational age calculator",
            "pregnancy week by week",
            "trimester calculator",
            "pregnancy symptoms tracker",
            "prenatal care calculator",
            "pregnancy nutrition guide",
            "pregnancy exercise recommendations",
            "fetal development tracker",
            "pregnancy milestones",
            "conception date range",
            "pregnancy timeline",
            "maternal health calculator",
            "pregnancy planning tool",
            "fertility calculator",
            "pregnancy health tracker",
            "pregnancy due date calculator",
            "conception date range calculator",
            "pregnancy week calculator",
            "prenatal care guide",
            "pregnancy nutrition calculator",
            "pregnancy exercise guide",
            "maternal health tracker",
            "pregnancy development tracker",
            "conception timing calculator",
            "pregnancy health monitor"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="container mx-auto px-3 py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" },
            ]}
          />

          <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-yellow-400">Pregnancy Conception Calculator - Free Online Pregnancy Tool</h1>
              <p className="text-base md:text-lg text-muted-foreground text-pretty leading-relaxed">
                <strong>Calculate your conception date</strong> with our <strong>advanced pregnancy calculator</strong>. Get <strong>personalized trimester guidance</strong>, <strong>nutrition tips</strong>, <strong>exercise recommendations</strong>, and <strong>comprehensive week-by-week pregnancy insights</strong>.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
              <div>
                <PregnancyConceptionCalculator />
                
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
                      How to Use Pregnancy Conception Calculator
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">1. Choose Calculation Method</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Select from Due Date, Last Menstrual Period, or Ultrasound Date methods</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">2. Enter Your Information</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Provide the required dates and information based on your chosen method</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">3. Get Personalized Results</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Receive detailed conception date, trimester information, and recommendations</p>
                        </div>
                        <div className="p-3 md:p-4 bg-secondary/50 rounded-lg border border-border">
                          <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">4. Track Your Progress</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Monitor pregnancy milestones and get week-by-week insights</p>
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
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Accurate Conception Date</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Calculate precise conception date using multiple methods</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Trimester Analysis</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Determine current trimester and pregnancy stage</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                            <TrendingUp className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Health Tracking</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Monitor pregnancy symptoms and health milestones</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                            <BookOpen className="h-3 w-3 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Nutrition Guide</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Get personalized nutrition recommendations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-red-100 dark:bg-red-900/20 rounded-lg">
                            <Users className="h-3 w-3 text-red-600 dark:text-red-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Exercise Guidelines</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Safe exercise recommendations for each trimester</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                            <Clock className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm md:text-base">Week-by-Week</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Detailed pregnancy progression tracking</p>
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
                        <h3 className="font-semibold text-foreground text-base md:text-lg">For Expectant Mothers</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Calculate exact conception date for pregnancy tracking</li>
                          <li>• Understand current trimester and pregnancy stage</li>
                          <li>• Get personalized nutrition and exercise recommendations</li>
                          <li>• Track pregnancy symptoms and milestones</li>
                          <li>• Plan prenatal care and appointments</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">For Healthcare Providers</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Verify gestational age calculations</li>
                          <li>• Plan prenatal care schedules</li>
                          <li>• Provide patient education materials</li>
                          <li>• Track pregnancy progression</li>
                          <li>• Identify high-risk pregnancy factors</li>
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
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How accurate is the pregnancy conception calculator?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our pregnancy conception calculator provides estimates based on standard medical calculations. The ultrasound method is most accurate (±3-5 days), followed by due date method (±1-2 weeks). The LMP method is least accurate for women with irregular cycles. Conception typically occurs 11-21 days after the first day of your last menstrual period.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What's the difference between gestational age and conception age?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Gestational age is calculated from the first day of your last menstrual period and is used by healthcare providers for pregnancy dating. Conception age is the actual time since fertilization occurred, which is typically about 2 weeks less than gestational age. Our calculator helps you understand both measurements.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I know which calculation method to use for conception date?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Use the method with the most accurate information you have. Ultrasound dating is most precise, followed by due date, then last menstrual period. If you know your exact conception date or had IVF, use those methods for the most accurate results. Our calculator offers multiple methods to ensure accuracy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Why is there a conception date range instead of an exact date?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Sperm can survive in the female reproductive tract for 3-5 days, so the conception date range accounts for this window of fertility. The range helps identify the most likely days when conception occurred. This is why our calculator provides a range rather than a single date.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I use this calculator if I have irregular periods?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          For irregular periods, the ultrasound method with gestational age is most accurate. If you don't have ultrasound data, the due date method can provide estimates, but consult your healthcare provider for the most accurate dating. Our calculator adapts to different menstrual cycle patterns.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Are the pregnancy recommendations personalized to my stage?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our calculator provides trimester-specific recommendations for nutrition, exercise, health, and lifestyle based on your current gestational age. The recommendations are tailored to your specific pregnancy stage and follow Institute of Medicine guidelines for optimal maternal and fetal health.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How does the pregnancy calculator track fetal development?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator monitors your baby's development week by week, providing detailed information about fetal growth, organ development, and important milestones. It tracks pregnancy progress with visual indicators and personalized insights based on your conception date and current gestational age.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What weight gain recommendations does the calculator provide?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides personalized weight gain recommendations based on your pre-pregnancy BMI and follows Institute of Medicine guidelines. The recommendations are tailored to your specific body type, health status, and pregnancy stage, ensuring optimal maternal and fetal health throughout your pregnancy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I use this calculator throughout my entire pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Absolutely! The calculator provides updated recommendations as your pregnancy progresses. You can recalculate weekly to get updated trimester guidance, symptoms, milestones, and personalized recommendations. It's designed to be your companion throughout all 40 weeks of pregnancy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How does the calculator help with prenatal care planning?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator tracks important prenatal visits and screenings, providing a comprehensive schedule of upcoming appointments based on your pregnancy stage. It helps you plan for essential tests, ultrasounds, and healthcare provider visits throughout your pregnancy journey.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What pregnancy symptoms can I expect at different stages?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator provides trimester-specific symptom information, including common symptoms like morning sickness, fatigue, mood changes, and physical changes. It offers management tips and guidance for each pregnancy stage, helping you understand what's normal and when to consult your healthcare provider.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How accurate are the due date calculations?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Due date calculations are based on the standard 280-day (40-week) pregnancy duration from the first day of your last menstrual period. However, only about 5% of babies are born on their exact due date. Most babies are born within 2 weeks before or after the due date, which is considered normal.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I use this calculator for IVF pregnancies?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! Our calculator includes an IVF transfer date method for the most accurate dating of IVF pregnancies. This method uses the embryo transfer date and accounts for the specific type of embryo (fresh, frozen, or blastocyst) to provide precise conception and due date calculations.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What nutrition guidance does the pregnancy calculator provide?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator offers trimester-specific nutrition recommendations, including essential nutrients like folic acid, iron, calcium, and protein. It provides guidance on foods to avoid, healthy weight gain strategies, and meal planning tips tailored to your pregnancy stage and individual needs.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How does the calculator help with exercise planning during pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides safe exercise recommendations for each trimester, including appropriate activities, intensity levels, and modifications. It considers your pre-pregnancy fitness level and offers guidance on maintaining physical health while ensuring safety for both you and your baby.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What pregnancy milestones does the calculator track?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The calculator tracks important pregnancy milestones including fetal development stages, key appointments, screening tests, and physical changes. It provides week-by-week updates on your baby's growth, important dates, and what to expect at each stage of your pregnancy journey.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How often should I recalculate my pregnancy information?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          We recommend recalculating weekly to get updated trimester guidance, symptoms, milestones, and personalized recommendations. This ensures you receive the most current and relevant information as your pregnancy progresses and your baby develops.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can the calculator help identify high-risk pregnancy factors?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          While our calculator provides general guidance and tracking, it cannot replace medical advice. It can help identify when to consult your healthcare provider about certain symptoms or concerns. Always discuss any questions or concerns with your medical professional for personalized care.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What makes this pregnancy calculator different from others?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator offers comprehensive features including multiple calculation methods, personalized weight gain recommendations, trimester-specific guidance, fetal development tracking, nutrition and exercise advice, and ongoing support throughout your entire pregnancy journey. It's designed to be your complete pregnancy companion.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How far along am I in my pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator determines your pregnancy progress by calculating gestational age from your last menstrual period or conception date. It shows your current week, trimester, and how many weeks remain until your due date. You can also see your baby's development stage and size at your current pregnancy week.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the early signs of pregnancy I should look for?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Early pregnancy signs include missed period, morning sickness, breast tenderness, fatigue, frequent urination, food aversions or cravings, mood swings, and light spotting. These symptoms typically appear 1-2 weeks after conception. However, every woman's experience is different, and some may not experience all symptoms.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I calculate my pregnancy weeks without knowing my last period?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! If you know your conception date, you can add 266 days (38 weeks) to get your due date. If you have ultrasound data with gestational age, that's the most accurate method. Our calculator offers multiple input options including due date, ultrasound date, and conception date for women with irregular periods or uncertain LMP dates.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What's the difference between pregnancy weeks and months?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Pregnancy is measured in weeks (40 weeks total) rather than months because it's more precise. The first trimester is weeks 1-12, second trimester is weeks 13-26, and third trimester is weeks 27-40. Our calculator shows both your current week and approximate month, helping you understand your pregnancy stage better.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I know if I'm having a boy or girl?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The only way to know your baby's gender is through medical tests like ultrasound (usually at 18-20 weeks), blood tests, or genetic testing. Our calculator focuses on pregnancy tracking and development rather than gender prediction. Gender is determined at conception and doesn't change based on symptoms or timing.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What should I do if my due date seems wrong?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          If you suspect your due date is incorrect, consult your healthcare provider. They may adjust it based on ultrasound measurements, especially if done in the first trimester. Due dates are estimates, and only about 5% of babies are born on their exact due date. Most arrive within 2 weeks before or after.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I use this calculator for twins or multiples?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes, our calculator works for twin and multiple pregnancies. However, twins are often born earlier (around 36-37 weeks) than singletons. The calculator will show your due date, but your healthcare provider will monitor your pregnancy more closely and may adjust expectations for multiple births.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What are the signs of labor I should watch for?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Early labor signs include lightening (baby dropping lower), loss of mucus plug, nesting instinct, and Braxton Hicks contractions. Active labor signs are regular contractions (5 minutes apart), water breaking, lower back pain, and cervical dilation. Call your doctor if contractions are regular, water breaks, or you have heavy bleeding.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How much weight should I gain during pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Weight gain depends on your pre-pregnancy BMI: Underweight (28-40 lbs), Normal weight (25-35 lbs), Overweight (15-25 lbs), Obese (11-20 lbs). Our calculator provides personalized recommendations based on your BMI and follows Institute of Medicine guidelines for optimal maternal and fetal health.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What exercises are safe during pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Safe exercises include walking, swimming, prenatal yoga, stationary cycling, and low-impact aerobics. Aim for 30 minutes of moderate activity daily. Avoid contact sports, high-fall risk activities, hot yoga, and heavy weight lifting. Always consult your healthcare provider before starting any exercise program during pregnancy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">When should I start taking prenatal vitamins?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Start taking prenatal vitamins before conception if possible, or as soon as you find out you're pregnant. Key nutrients include folic acid (400-800 mcg), iron, calcium, and DHA. Our calculator provides trimester-specific nutrition guidance and reminds you about important supplements for each stage of pregnancy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">Can I travel while pregnant?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Travel is generally safe during the second trimester (weeks 14-28) when morning sickness has subsided and energy levels are higher. Avoid travel after 36 weeks and check with your airline for pregnancy restrictions. Our calculator helps you plan travel around your pregnancy milestones and important appointments.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What foods should I avoid during pregnancy?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Avoid raw fish, undercooked meat, unpasteurized dairy, deli meats, high-mercury fish, raw eggs, and excessive caffeine. Limit alcohol completely and avoid smoking. Our calculator provides trimester-specific nutrition guidance, including foods to avoid and essential nutrients needed for healthy fetal development.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can I track my baby's development week by week?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Our calculator provides detailed week-by-week fetal development information, including your baby's size, weight, and major developmental milestones. It tracks organ development, movement patterns, and what you can expect to feel at each stage. You can also see ultrasound images and development comparisons.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What should I pack in my hospital bag?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Pack comfortable clothes, toiletries, nursing bras, going-home outfit for baby, car seat, important documents, and snacks. Our calculator provides a comprehensive hospital bag checklist based on your due date and helps you prepare for delivery day with personalized recommendations.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How do I prepare for breastfeeding?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Attend breastfeeding classes, learn proper latch techniques, prepare your nipples (avoid harsh soaps), and gather supplies like nursing bras and breast pads. Our calculator provides breastfeeding preparation tips and connects you with resources for successful nursing based on your pregnancy timeline.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">What should I expect at my first prenatal appointment?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Your first appointment typically includes confirming pregnancy, health history review, physical exam, blood tests, urine tests, and possibly an ultrasound. Our calculator helps you prepare for appointments by tracking what to expect at each visit and reminding you of important questions to ask your healthcare provider.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-base md:text-lg">How can I manage pregnancy anxiety and stress?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Practice relaxation techniques, maintain a support system, stay informed but not overwhelmed, exercise regularly (with doctor's approval), and consider prenatal yoga or meditation. Our calculator provides stress management tips and connects you with resources for emotional support throughout your pregnancy journey.
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
                      Related Health & Pregnancy Calculators
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                        { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                        { name: "Pregnancy Calculator", desc: "Calculate pregnancy due date", href: "/calculator/pregnancy-calculator", icon: Target },
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
  )
}
