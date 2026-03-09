import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const PregnancyCalculator = dynamic(() => import("@/components/health/pregnancy-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Calculator, Target, BookOpen, Shield, Users, TrendingUp, Info, AlertTriangle, CheckCircle, Zap, Heart, Calendar, Baby } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Pregnancy Calculator — Due Date & Week-by-Week Tracker Free (2026)",
  description:
    "Free pregnancy calculator to estimate your due date, track gestational age week by week, get IOM weight gain recommendations by BMI, and receive trimester-specific guidance using LMP, ultrasound, conception, or IVF transfer dates.",
  path: "/calculator/pregnancy-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
  ],
  schemaOptions: {
    name: "Pregnancy Calculator | Free Online Pregnancy Tracking Tool",
    alternateName: "Advanced Pregnancy Calculator with Comprehensive Tracking",
    applicationCategory: "HealthApplication",
    featureList: [
      "Due Date Calculation",
      "Gestational Age Tracking",
      "Weight Gain Recommendations",
      "Trimester Guidance",
      "Pregnancy Progress Tracking",
      "Symptom Monitoring",
      "Nutrition Recommendations"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PregnancyCalculatorPage() {
  const toolContent = {
    toolName: "Pregnancy Calculator",
    overview: "Calculate your estimated due date, track gestational age week by week, and receive personalized IOM weight gain recommendations based on pre-pregnancy BMI with our free pregnancy calculator. Supporting five calculation methods — last menstrual period (LMP), known due date, first-trimester ultrasound (Crown-Rump Length), conception date, and IVF transfer date (Day 3 or Day 5) — this tool uses Naegele's Rule and standard medical formulas to provide accurate trimester guidance, symptom tracking, milestone timelines, and nutrition tips for expectant mothers.",

    howToSteps: [
      "Pick Your Input Method: Choose from five calculation methods — known due date, last menstrual period (LMP), first-trimester ultrasound date, conception date, or IVF embryo transfer (Day 3 or Day 5).",
      "Add Your Details: Enter the relevant dates plus your pre-pregnancy height and weight so the tool can calculate BMI-based weight gain ranges.",
      "Review Your Results: See your estimated due date (EDD), current gestational week and day, trimester stage, and fetal age.",
      "Check Recommendations: View personalized IOM weight gain guidelines, trimester-specific nutrition advice, safe exercise tips, and upcoming milestone dates.",
      "Monitor Progress: Return weekly to track your baby's size comparisons, developmental milestones, and common symptoms for your current week of pregnancy."
    ],

    features: [
      "Five Calculation Methods: Support for LMP (Naegele's Rule), known due date, first-trimester ultrasound (CRL), conception date, and IVF transfer (Day 3/Day 5).",
      "Week-by-Week Tracking: Detailed gestational age updates with baby's size comparisons and developmental milestones each week.",
      "BMI-Based Weight Management: Personalized IOM weight gain ranges for underweight, normal, overweight, and obese pre-pregnancy BMI categories.",
      "Trimester-Specific Guides: Targeted advice, symptoms, and health tips for First (1-12 wk), Second (13-26 wk), and Third (27-40 wk) trimesters.",
      "Symptom Information: Common symptoms mapped to your current gestational week to help you know what to expect.",
      "Milestone Timeline: Key dates for blood tests, anatomy scan (20 wk), glucose screening (24-28 wk), and other prenatal checkpoints.",
      "Mobile-Responsive Design: Track your pregnancy journey on smartphones, tablets, and desktops anywhere, anytime."
    ],

    useCases: [
      "Due Date Estimation: Find out when your baby is likely to arrive.",
      "Progress Monitoring: Know exactly how many weeks and days along you are.",
      "Health Tracking: Ensure your weight gain is within healthy ranges.",
      "Planning: Schedule doctor visits and prepare for upcoming milestones.",
      "Education: Learn about fetal development and maternal changes.",
      "IVF Tracking: Specialized calculations for assisted reproduction."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            What is a Pregnancy Calculator? Understanding Pregnancy Tracking
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A <strong>Pregnancy Calculator</strong> estimates important dates in your pregnancy journey, such as your due date, current week of gestation, and milestone dates for scans and tests. Most tools use the <em>Naegele's Rule</em>, which adds nine months and seven days to the first day of your last menstrual period (LMP). Understanding pregnancy calculations helps you track your journey, plan appointments, and monitor your baby's development.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our pregnancy calculator supports multiple calculation methods (LMP, due date, ultrasound date, conception date, IVF transfer) to provide accurate estimates tailored to your situation. Whether you're tracking your first pregnancy, monitoring an IVF pregnancy, or planning your journey, our calculator provides comprehensive information including gestational age, trimester guidance, weight gain recommendations, and milestone tracking.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Weight Gain Guidelines: IOM Recommendations by BMI
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Healthy weight gain is crucial for both mother and baby. The Institute of Medicine (IOM) recommends the following ranges based on your pre-pregnancy BMI:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Pre-Pregnancy BMI</th>
                  <th className="p-3 text-left">Classification</th>
                  <th className="p-3 text-left">Rec. Weight Gain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">Less than 18.5</td>
                  <td className="p-3 text-muted-foreground">Underweight</td>
                  <td className="p-3">28 – 40 lbs (13 – 18 kg)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">18.5 – 24.9</td>
                  <td className="p-3 text-muted-foreground">Normal Weight</td>
                  <td className="p-3">25 – 35 lbs (11 – 16 kg)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">25.0 – 29.9</td>
                  <td className="p-3 text-muted-foreground">Overweight</td>
                  <td className="p-3">15 – 25 lbs (7 – 11 kg)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">30.0 or more</td>
                  <td className="p-3 text-muted-foreground">Obese</td>
                  <td className="p-3">11 – 20 lbs (5 – 9 kg)</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: Naegele's Rule vs. Ultrasound Dating
          </h2>
          <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 border-l-4 border-pink-500 rounded-lg">
            <p className="italic text-pink-700 dark:text-pink-300 leading-relaxed">
              "While most pregnancy calculators use <strong>Naegele's Rule</strong> (based on your last period), it assumes a perfect 28-day cycle with ovulation on day 14. If your cycle is irregular, this can be off by several days. This is why doctors consider the <strong>First Trimester Ultrasound</strong> (specifically the Crown-Rump Length) to be the gold standard for dating, as fetal growth is most uniform in early pregnancy. For the most accurate due date, use ultrasound dating when available."
            </p>
            <p className="text-sm font-semibold text-pink-600 dark:text-pink-400 mt-2">— FastTools Women's Health Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Trimester Breakdown: Understanding Your Pregnancy Journey
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding the three trimesters helps you track your pregnancy journey and know what to expect:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>First Trimester (Weeks 1-12):</strong> Rapid development, organ formation, and early symptoms like morning sickness.</li>
            <li><strong>Second Trimester (Weeks 13-26):</strong> Often called the "honeymoon phase," energy returns, and you may feel the baby move.</li>
            <li><strong>Third Trimester (Weeks 27-40):</strong> Baby grows significantly, preparing for birth. Discomfort may increase as due date approaches.</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How to Use the Pregnancy Calculator: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to track your pregnancy accurately:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Pick Your Input Method</h4>
                <p className="text-sm text-muted-foreground">Choose from due date, last menstrual period (LMP), ultrasound date, conception date, or IVF transfer date. Use the method that provides the most accurate information for your situation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Add Your Details</h4>
                <p className="text-sm text-muted-foreground">Enter the relevant dates and your pre-pregnancy height and weight. This information helps calculate gestational age, due date, and personalized weight gain recommendations.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Review Your Results</h4>
                <p className="text-sm text-muted-foreground">See your estimated due date, current week of gestation, trimester, and gestational age. The calculator provides comprehensive information about your pregnancy timeline.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Check Recommendations</h4>
                <p className="text-sm text-muted-foreground">View personalized weight gain advice, trimester-specific guidance, and health tips based on your current stage of pregnancy. These recommendations help ensure a healthy pregnancy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Monitor Progress</h4>
                <p className="text-sm text-muted-foreground">Return weekly to track your baby's growth, monitor your milestones, and stay informed about your pregnancy journey. The calculator helps you stay connected with your pregnancy timeline.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Important Pregnancy Calculator Reminders
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding important reminders helps you use pregnancy calculators safely and effectively:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Due Dates Are Estimates, Not Deadlines</h4>
                <p className="text-sm text-muted-foreground">Only about 5% of babies are born on their exact due date. Most arrive within a window of two weeks before or after. Due dates provide guidance, but actual delivery dates vary naturally.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Always Consult Your Healthcare Provider</h4>
                <p className="text-sm text-muted-foreground">Pregnancy calculators provide estimates and general guidance, but they cannot replace professional medical advice. Always consult your healthcare provider for personalized medical guidance, especially for high-risk pregnancies or specific health conditions.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Ultrasound Dating Is Most Accurate</h4>
                <p className="text-sm text-muted-foreground">First-trimester ultrasound dating (Crown-Rump Length) is the gold standard for pregnancy dating. If your healthcare provider adjusts your due date based on ultrasound, trust that date over calculator estimates.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Individual Circumstances Vary</h4>
                <p className="text-sm text-muted-foreground">Pregnancy experiences vary widely between individuals. Weight gain, symptoms, and development timelines are general guidelines. Your healthcare provider can provide personalized recommendations based on your specific circumstances.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Pregnancy Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our pregnancy calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All pregnancy calculations happen directly in your browser using JavaScript. Your dates, weight, height, and calculation results never leave your device or get transmitted to our servers. No data is sent over the internet during calculations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage or Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your pregnancy data. There's no database of your dates, calculations, or personal information, and no way for us to access your pregnancy details or results. Your privacy is completely protected while using our tool.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Safe for Personal Use</h4>
                <p className="text-sm text-muted-foreground">You can use the calculator with confidence for tracking your pregnancy journey, planning appointments, and monitoring your progress. All calculations happen locally, ensuring your personal pregnancy information remains private and secure.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: "Due dates are estimates, not deadlines — only about 5% of babies arrive on their exact EDD. If your cycle is irregular, ask your provider for a first-trimester ultrasound (weeks 6-13) to date the pregnancy using Crown-Rump Length, which is accurate to within 5-7 days and considered the clinical gold standard.",

    faqs: [
      {
        question: "How accurate is this calculator?",
        answer: "It uses standard medical formulas. Ultrasound dating in the first trimester is the most accurate method, but LMP and conception dates provide very good estimates."
      },
      {
        question: "What if I don't know my exact conception date?",
        answer: "That's common! Use the 'First Day of Last Period' method, which is the standard way doctors date pregnancies."
      },
      {
        question: "Does this work for IVF pregnancies?",
        answer: "Yes, select the 'IVF Transfer Date' option. You can specify if it was a Day 3 or Day 5 transfer for precise calculations."
      },
      {
        question: "How is pregnancy weight gain calculated?",
        answer: "We use your pre-pregnancy height and weight to calculate your BMI, then apply the Institute of Medicine's guidelines for recommended weight gain ranges."
      },
      {
        question: "Can I use this for twins?",
        answer: "The dating timeline remains the same, but weight gain recommendations and delivery expectations (often earlier) differ for multiples. Consult your doctor for specific twin guidance."
      },
      {
        question: "What is 'Gestational Age'?",
        answer: "It's the age of the pregnancy measured from the last menstrual period. 'Fetal Age' is measured from conception and is about 2 weeks less."
      },
      {
        question: "Why did my due date change?",
        answer: "Doctors often adjust due dates based on early ultrasound measurements, which are more accurate than LMP dates if your cycle is irregular."
      },
      {
        question: "When should I see a doctor?",
        answer: "You should schedule your first prenatal appointment as soon as you have a positive home pregnancy test, usually around 8 weeks."
      },
      {
        question: "Is it safe to exercise?",
        answer: "Generally, yes! Moderate exercise is beneficial. However, always check with your healthcare provider before starting or continuing an exercise routine."
      },
      {
        question: "What foods should I avoid?",
        answer: "Avoid raw meat/fish, unpasteurized dairy, high-mercury fish, and alcohol. Limit caffeine. Our tool provides more specific nutrition tips."
      },
      {
        question: "How to calculate due date from last menstrual period?",
        answer: "To calculate due date from last menstrual period (LMP), use Naegele's Rule: add 9 months and 7 days to the first day of your last period. For example, if your LMP was January 1st, your due date is approximately October 8th. Our calculator automates this calculation—just enter your LMP date to get your estimated due date."
      },
      {
        question: "How to calculate pregnancy weeks from due date?",
        answer: "To calculate pregnancy weeks from due date, subtract your current date from the due date, then add 40 weeks (full term). For example, if your due date is October 8th and today is July 8th, you're approximately 28 weeks pregnant. Our calculator automatically calculates your current week when you enter your due date or LMP."
      },
      {
        question: "How many weeks am I pregnant?",
        answer: "To find out how many weeks you're pregnant, use our pregnancy calculator by entering your last menstrual period date, due date, conception date, or ultrasound date. The calculator will instantly show your current week of gestation, gestational age, and trimester. Most calculators use Naegele's Rule (LMP + 9 months + 7 days) or ultrasound dating for accuracy."
      },
      {
        question: "How to calculate gestational age?",
        answer: "Gestational age is calculated from the first day of your last menstrual period (LMP) to the current date. Formula: Gestational Age = (Current Date - LMP Date) in weeks and days. For example, if your LMP was 12 weeks ago, your gestational age is 12 weeks. Our calculator automatically calculates gestational age when you enter your LMP or other relevant dates."
      },
      {
        question: "How accurate is due date calculator?",
        answer: "Due date calculators using Naegele's Rule (LMP-based) are accurate within 3-5 days for women with regular 28-day cycles. Ultrasound dating in the first trimester (Crown-Rump Length) is more accurate, with accuracy within 5-7 days. However, only about 5% of babies are born on their exact due date—most arrive within two weeks before or after. Our calculator provides estimates that match standard medical calculations."
      },
      {
        question: "How to calculate conception date?",
        answer: "To calculate conception date from due date, subtract 266 days (38 weeks) from your due date. To calculate from LMP, conception typically occurs about 14 days after the first day of your last period (assuming a 28-day cycle). Our calculator includes a conception date calculator that automatically calculates conception date from various input methods."
      },
      {
        question: "What is a pregnancy due date calculator?",
        answer: "A pregnancy due date calculator is a tool that estimates your baby's due date based on your last menstrual period, conception date, ultrasound date, or IVF transfer date. Most calculators use Naegele's Rule (LMP + 9 months + 7 days) or ultrasound measurements. Our calculator supports multiple calculation methods for accurate due date estimation."
      },
      {
        question: "How to calculate pregnancy from conception date?",
        answer: "To calculate pregnancy from conception date, add 266 days (38 weeks) to your conception date to get your due date. For gestational age, count weeks from conception date (fetal age). Note: gestational age is typically measured from LMP, which is about 2 weeks before conception. Our calculator handles both gestational age (from LMP) and fetal age (from conception) calculations."
      },
      {
        question: "How to calculate pregnancy weeks from LMP?",
        answer: "To calculate pregnancy weeks from LMP (Last Menstrual Period), count the number of weeks from the first day of your last period to today. For example, if your LMP was 14 weeks ago, you're 14 weeks pregnant. Our calculator automatically calculates pregnancy weeks when you enter your LMP date, showing both weeks and days for precision."
      },
      {
        question: "What is Naegele's rule?",
        answer: "Naegele's Rule is a standard method for calculating due dates. It adds 9 months and 7 days to the first day of your last menstrual period. Formula: Due Date = LMP + 9 months + 7 days. This rule assumes a 28-day cycle with ovulation on day 14. Our calculator uses Naegele's Rule for LMP-based calculations, which is the standard method used by healthcare providers."
      },
      {
        question: "How to calculate IVF pregnancy due date?",
        answer: "To calculate IVF pregnancy due date, use the embryo transfer date instead of LMP. For Day 5 blastocyst transfers, add 263 days (37 weeks + 4 days) to the transfer date. For Day 3 embryo transfers, add 261 days (37 weeks + 2 days). Our calculator supports IVF pregnancy calculations—select the IVF transfer date option and specify Day 3 or Day 5 transfer for accurate due date estimation."
      },
      {
        question: "How many weeks is full term pregnancy?",
        answer: "Full-term pregnancy is 39-40 weeks from the last menstrual period. A baby is considered full-term at 37-42 weeks gestation. Babies born before 37 weeks are preterm, and babies born after 42 weeks are post-term. Our calculator shows your current gestational age and how many weeks remain until full term, helping you track your pregnancy progress."
      },
      {
        question: "How to calculate pregnancy trimester?",
        answer: "Pregnancy is divided into three trimesters: First trimester (weeks 1-12), Second trimester (weeks 13-26), and Third trimester (weeks 27-40). To calculate which trimester you're in, count weeks from your LMP. Our calculator automatically shows which trimester you're currently in based on your gestational age, providing trimester-specific guidance and information."
      },
      {
        question: "What is the difference between gestational age and fetal age?",
        answer: "Gestational age is measured from the first day of your last menstrual period (LMP) and is about 2 weeks more than fetal age. Fetal age (also called conception age) is measured from the actual date of conception. For example, at 12 weeks gestational age, the fetal age is approximately 10 weeks. Our calculator shows gestational age, which is the standard measurement used by healthcare providers."
      },
      {
        question: "How to calculate pregnancy weight gain by trimester?",
        answer: "Pregnancy weight gain varies by trimester: First trimester (1-4.5 lbs), Second trimester (1 lb/week or 12-14 lbs total), Third trimester (1 lb/week or 8-10 lbs total). Total weight gain depends on your pre-pregnancy BMI. Our calculator provides personalized weight gain recommendations based on your BMI and shows trimester-specific guidance for healthy weight management."
      },
      {
        question: "How accurate is ultrasound dating?",
        answer: "Ultrasound dating is most accurate in the first trimester (weeks 6-13), with accuracy within 5-7 days using Crown-Rump Length (CRL) measurements. Second trimester ultrasound (weeks 14-26) is accurate within 7-14 days. Third trimester ultrasound is less accurate for dating. Our calculator supports ultrasound-based calculations for more accurate due date estimation when ultrasound data is available."
      },
      {
        question: "How to calculate pregnancy days?",
        answer: "To calculate pregnancy days, count the number of days from the first day of your last menstrual period to today. For example, if your LMP was 100 days ago, you're 100 days pregnant (approximately 14 weeks and 2 days). Our calculator shows both weeks and days for precise pregnancy tracking, making it easy to know exactly how far along you are."
      },
      {
        question: "Can pregnancy calculator work for irregular periods?",
        answer: "Pregnancy calculators based on LMP assume a regular 28-day cycle, so they may be less accurate for irregular periods. For irregular cycles, use ultrasound dating (most accurate) or conception date if known. Our calculator supports multiple input methods (LMP, ultrasound, conception date, IVF) to provide accurate estimates even with irregular cycles—just use the most accurate date available."
      },
      {
        question: "How to calculate pregnancy milestones?",
        answer: "Pregnancy milestones are calculated based on gestational age from LMP. Key milestones include: 12 weeks (end of first trimester, lower miscarriage risk), 20 weeks (mid-pregnancy anatomy scan), 24 weeks (viability milestone), 28 weeks (third trimester begins), 37 weeks (full term). Our calculator shows important milestones and key dates for tests, scans, and baby development based on your gestational age."
      },
      {
        question: "What is estimated delivery date (EDD)?",
        answer: "Estimated Delivery Date (EDD) is another term for due date—the date your baby is expected to be born. EDD is typically calculated using Naegele's Rule (LMP + 9 months + 7 days) or ultrasound dating. Only about 5% of babies are born exactly on their EDD, with most arriving within two weeks before or after. Our calculator provides EDD estimates based on multiple calculation methods."
      },
      {
        question: "How to calculate pregnancy from ovulation date?",
        answer: "To calculate pregnancy from ovulation date, add 266 days (38 weeks) to your ovulation date to get your due date. For gestational age, add 2 weeks to your ovulation-based calculation (since gestational age is measured from LMP, which is about 2 weeks before ovulation). Our calculator can calculate pregnancy from conception/ovulation dates when you select that input method."
      },
      {
        question: "How many weeks until due date?",
        answer: "To find how many weeks until your due date, subtract your current date from your due date. For example, if your due date is 20 weeks away, you're approximately 20 weeks pregnant (halfway through pregnancy). Our calculator automatically shows weeks remaining until your due date and your current gestational age when you enter your LMP or due date."
      },
      {
        question: "How to calculate pregnancy progress percentage?",
        answer: "To calculate pregnancy progress percentage, divide your current gestational age (in weeks) by 40 (full term) and multiply by 100. For example, at 20 weeks: (20 / 40) × 100 = 50% complete. Our calculator shows your pregnancy progress including gestational age, weeks completed, and weeks remaining until your due date."
      },
      {
        question: "What is crown-rump length (CRL)?",
        answer: "Crown-Rump Length (CRL) is the measurement from the top of the baby's head (crown) to the bottom of the buttocks (rump) in the first trimester. CRL is the most accurate method for dating pregnancy, with accuracy within 5-7 days when measured between weeks 6-13. Our calculator supports ultrasound dating using CRL measurements for the most accurate due date calculation."
      },
      {
        question: "How to calculate pregnancy from missed period?",
        answer: "To calculate pregnancy from missed period, use the first day of your last menstrual period (the period before the missed one) as your LMP date. Apply Naegele's Rule (LMP + 9 months + 7 days) to get your due date. If you've just missed your period, you're approximately 4-6 weeks pregnant. Our calculator uses LMP for accurate pregnancy dating—enter the first day of your last period before the missed period."
      },
      {
        question: "Is pregnancy calculator free to use?",
        answer: "Yes, our pregnancy calculator is completely free with no charges, subscriptions, or registration required. You can calculate unlimited due dates, track your pregnancy progress, access all features (gestational age, trimester guidance, weight gain recommendations), and use the tool for personal pregnancy tracking without any cost. All features are available without limitations."
      },
      {
        question: "Can I use pregnancy calculator on mobile?",
        answer: "Yes! Our pregnancy calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. The calculator is optimized for touch screens, making it easy to enter dates and view results on the go. You can use it during your pregnancy journey for tracking progress, checking milestones, or monitoring your due date, wherever you are."
      },
      {
        question: "How accurate is pregnancy weight gain calculator?",
        answer: "Our pregnancy weight gain calculator uses Institute of Medicine (IOM) guidelines based on pre-pregnancy BMI, which are the standard recommendations used by healthcare providers. The recommendations are accurate for general guidance, but individual circumstances vary. Always consult your healthcare provider for personalized weight gain recommendations, especially for high-risk pregnancies or specific health conditions."
      },
      {
        question: "What is the best pregnancy calculator?",
        answer: "The best pregnancy calculator is free, accurate, easy to use, supports multiple calculation methods (LMP, ultrasound, conception, IVF), provides comprehensive information (due date, gestational age, trimester, weight gain), works on all devices, processes data locally for privacy, and offers regular updates. Our calculator meets all these criteria—it's completely free, accurate, user-friendly, and privacy-focused, making it perfect for pregnancy tracking."
      }
    ],

    relatedTools: [
      { name: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Pregnancy Calculator — Due Date & Week-by-Week Tracker (2026)",
        description: "Free pregnancy due date calculator supporting LMP, ultrasound, conception, and IVF transfer date methods. Track gestational age week by week, get personalized IOM weight gain recommendations based on pre-pregnancy BMI, and access trimester-specific health guidance and milestone timelines.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "pink"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PregnancyCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Pregnancy Calculator — Due Date & Week-by-Week Tracker Free (2026)",
        description: "Free pregnancy calculator to estimate your due date, track gestational age week by week, get IOM weight gain recommendations by BMI, and receive trimester-specific guidance using LMP, ultrasound, conception, or IVF transfer dates.",
        path: "/calculator/pregnancy-calculator"
      }}
    />
  )
}
