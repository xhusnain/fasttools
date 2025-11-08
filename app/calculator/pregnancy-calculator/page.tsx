import { Metadata } from "next"
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

      <div className="min-h-screen bg-card">
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
                description="Use our pregnancy tracking tool to monitor your journey. Receive estimated delivery dates, track how far along you are, get customized weight management advice, and access trimester-by-trimester support tailored to your needs."
                titleSize="medium"
              />
            </div>

            {}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
              <div>
                <PregnancyCalculator />

                {}
                <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">
                  {}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calculator className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                      </div>
                      Getting Started with Our Pregnancy Calculator
                    </h2>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Step 1: Pick Your Input Method</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">You have five choices: baby's expected arrival date, when your last period began, ultrasound imaging date, exact fertilization moment, or fertility treatment transfer date</p>
                        </div>
                        <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Step 2: Add Your Details</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Fill in the dates you know plus your height and weight details so the system can give you advice matched to your body</p>
                        </div>
                        <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Step 3: Review Your Results</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">View your full schedule timeline, recommended body weight ranges, and personalized tips suited to where you are in your journey</p>
                        </div>
                        <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                          <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Step 4: Keep Monitoring</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Return often to view significant events, weekly growth information, and fresh perspectives that update as time passes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Target className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                      </div>
                      What You Can Do With This Tool
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <Calculator className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Delivery Date Estimates</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Get reliable expected delivery dates through various proven calculation approaches</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <BarChart3 className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Week-by-Week Progress</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Watch your pregnancy advancement as each week passes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <TrendingUp className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Custom Weight Advice</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Receive weight management suggestions customized to your body mass index</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <BookOpen className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Three-Phase Support</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Get advice specifically designed for first, second, and third trimesters</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <Users className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Symptom Logging</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Keep tabs on how you're feeling and important health checkpoints</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 bg-heading-accent-border/10 rounded-lg">
                            <Clock className="h-3 w-3 text-heading-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-heading-accent text-sm md:text-base">Journey Overview</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Full timeline view showing all significant moments and developments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Home className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                      </div>
                      Who Benefits From This Tool
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Pregnant Women</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Follow your journey from start to finish</li>
                          <li>• Receive body weight suggestions made just for you</li>
                          <li>• Observe how you feel and how baby grows</li>
                          <li>• Organize doctor visits and health checkups</li>
                          <li>• Find tips matched to your current phase</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Medical Professionals</h3>
                        <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                          <li>• Double-check timeline accuracy and visit planning</li>
                          <li>• Share educational resources with patients</li>
                          <li>• Watch how pregnancies advance over time</li>
                          <li>• Create organized visit calendars</li>
                          <li>• Follow changes in body weight and wellness numbers</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How reliable are the results from this tool?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          This tool generates predictions using established healthcare formulas. When you have ultrasound results showing how far along you are, that gives the most precise answers. Generally speaking, delivery date predictions tend to be correct within about one to two weeks.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What separates pregnancy age from fertilization age?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Pregnancy age begins counting from when your last period started, which is what doctors typically use. Fertilization age counts the real time since the egg and sperm joined, which usually comes out to around two weeks shorter than pregnancy age.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Which input option should I select?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Go with whatever you're most confident about. Ultrasound scans offer the highest precision, then your doctor's due date estimate, then your period start date. If you're certain when conception happened or you went through IVF treatment, those options will give you the best accuracy.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Do the weight suggestions adapt to my situation?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Absolutely! These weight ranges use your body mass index before pregnancy and stick to respected medical organization standards. Everything adjusts to match your unique body composition and overall wellness.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Is this something I can keep using from start to finish?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes, definitely! The tool refreshes its suggestions as you move through different stages. Come back each week to refresh and see updated phase-specific advice, symptom expectations, and important moments.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What tips help me get the most precise answers?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Pick the input method you trust most (ultrasound beats due date, which beats period date), type in correct body measurements so BMI calculations work properly, refresh weekly by running new calculations, and remember that your doctor's personalized medical guidance always comes first.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How frequently should I refresh my data?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Weekly updates work best. Each refresh brings you the latest phase-specific tips, current symptom info, upcoming important moments, and customized advice. This keeps everything aligned with where you are now as your little one keeps growing.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What input options exist and how do their precision levels compare?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          You can input information five different ways: predicted birth date, menstrual cycle start, imaging scan date, confirmed fertilization date, or fertility procedure transfer date. Imaging scans give the tightest window (about three to five days), next comes birth date predictions (around one to two weeks), then cycle dates. Precision differs for each approach, so go with whichever one you trust most.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How does this tool customize weight suggestions for me?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          The system examines your starting body mass index and uses established healthcare standards to create personalized weight ranges. These recommendations match your individual body type, present wellness situation, and current pregnancy phase, all designed to promote optimal health for both you and your growing baby.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What details should I input to maximize precision?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          For optimum accuracy, input whichever date data you trust most (imaging scan dates showing how far along you are work best), enter honest physical measurements so body mass calculations function properly, and refresh regularly as time goes by to keep recommendations up-to-date.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Does this assist with getting ready and organizing ahead?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Absolutely! It supports thorough preparation by keeping tabs on essential doctor appointments and health checks, delivering phase-by-phase tips for eating and staying active, watching for significant developmental moments, and sharing tailored suggestions suited to wherever you are in the process.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How is this better than tools that just tell you a delivery date?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          This enhanced version does much more than calculate dates. You get trimester-by-trimester support, BMI-based weight guidance, symptom observation features, baby growth tracking, thorough pregnancy insights, and custom advice that matches exactly where you are right now.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How does it follow baby's growth each week?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Week by week, it watches how your little one is developing, sharing specifics about size changes, how organs are forming, and key developmental moments. Progress tracking includes visual cues and personalized details based on how many weeks along you are and which phase you're in.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Which important moments does it keep track of?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          It monitors significant moments like baby development phases, essential doctor visits, required health screenings, body transformation milestones, and wellness suggestions. You'll see weekly summaries covering growth updates, dates to remember, and what's coming up next at every stage.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How does it help organize medical visits?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          It maintains a log of required doctor visits and medical screenings, offering you a full schedule of future appointments aligned with where you are now. This simplifies planning for crucial medical tests, diagnostic imaging, and consultations with your healthcare providers throughout your entire experience.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What kinds of symptoms show up during various phases?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          It shares phase-by-phase symptom details covering typical experiences such as nausea, low energy, emotional shifts, and physical transformations. You'll also find coping strategies and explanations for each phase, helping you know what's typical versus when you should reach out to your doctor.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How precise are delivery date predictions?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          These predictions work with the standard nine-month timeline (approximately 38-40 weeks) counting from your period's first day. In practice, just about 5% of babies show up exactly on their predicted day. Most arrive somewhere between roughly two weeks before or after that date, which is perfectly normal.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Does this work for pregnancies from fertility treatments?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes! It includes an option for IVF transfer dates to get the most precise timeline for IVF pregnancies. This approach uses your embryo transfer date and factors in whether the embryo was fresh, frozen, or a blastocyst to deliver accurate fertilization and delivery estimates.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What eating advice does it give?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          It delivers phase-by-phase eating suggestions covering critical nutrients such as folic acid, iron, calcium, and protein. You'll also learn which foods to skip, smart approaches for managing weight gain, and meal planning ideas customized to your current stage and personal requirements.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How does it assist with staying active safely?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          It suggests safe movement options for each phase, covering suitable activities, recommended effort levels, and necessary adjustments. The tool looks at your fitness background before pregnancy and shares tips for keeping your body healthy while prioritizing safety for you and your growing baby.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What if the predicted date doesn't feel right?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          If something seems off about the date, talk to your doctor. They might revise it using ultrasound measurements, particularly when done early in pregnancy. Remember these are just estimates, and only around 5% of babies arrive exactly on the predicted day. Most come within approximately two weeks of that date.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">Will this work if I'm expecting more than one baby?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Yes, it handles twin and multiple pregnancies. Keep in mind that twins usually arrive sooner (typically around weeks 36-37) compared to single babies. The tool will still show an estimated date, but your medical team will watch you more carefully and might change expectations for multiples.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">How can I watch baby grow each week?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          You'll receive comprehensive weekly information about your baby's progress including length measurements, approximate weight, and key growth milestones. Track organ formation, activity patterns, and physical feelings you may notice. Visual references and developmental comparisons are also provided.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-heading-accent text-base md:text-lg">What sets this apart from other pregnancy tools?</h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          This version brings together multiple input methods, custom weight guidance, phase-specific tips, baby growth monitoring, eating and activity suggestions, plus continuous help all the way through. Think of it as your all-in-one resource for the entire experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
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
                          className="p-2 md:p-3 bg-card rounded-lg border border-border hover:bg-secondary hover:border-heading-accent-border/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-3 w-3 text-foreground group-hover:text-heading-accent" />
                            <h3 className="font-semibold text-heading-accent text-xs md:text-sm group-hover:text-heading-accent">{name}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-foreground">{desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="space-y-4 lg:space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
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
