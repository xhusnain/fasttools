import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GImage } from "@/ui/gimage"
import { GTable } from "@/ui/gtable"

const AgeCalculator = dynamic(
  () => import("@/components/calculators/age-calculator").then((mod) => mod.AgeCalculator),
  { loading: () => <ToolLoader /> }
)
import {
  Clock, Activity, Lightbulb, Zap, Hourglass, HelpCircle, Calendar, Baby, Brain, Target, BookOpen, Shield, Globe, Users, TrendingUp, Star
} from "lucide-react"

const baseMetadata = createMetadata({
  title: "Age Calculator — Exact Age in Years, Months, Days, Hours & Seconds",
  description:
    "Free online age calculator to find your exact age in years, months, weeks, days, hours, minutes & seconds. Includes zodiac signs, birthday countdown, leap year handling & ISO 8601 format for passports and legal documents. 100% private.",
  path: "/calculator/age-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Age Calculator", href: "/calculator/age-calculator" }
  ],
  schemaOptions: {
    name: "Exact Age Calculator - Seconds, Minutes & Days",
    alternateName: [
      "Date of Birth Calculator",
      "How Old Am I Calculator",
      "Birthday Age Calculator",
      "Precise Age Calculator",
      "Age in Days Calculator",
      "Age in Hours Calculator",
      "Age Difference Calculator",
      "Zodiac Sign Calculator",
      "Chinese Zodiac Calculator",
      "Birthday Countdown Tool",
      "Passport Age Calculator",
      "Visa Age Calculator",
      "Retirement Age Checker",
      "Birthday Weekday Finder",
      "Lifetime Stats Calculator",
    ],
    applicationCategory: "UtilityApplication",
    featureList: [
      "Precise Calculations: Accurate to the second",
      "Zodiac Signs: Western & Chinese",
      "Birthday Countdown: Visual progress bar",
      "Fun Statistics: Total heartbeats & breaths",
      "Day of Birth: Find your birth weekday",
      "Official Format: For passports & visas",
      "100% Private: Client-side calculation"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Age Calculator — Exact Age in Years, Months, Days, Hours & Seconds",
  description: "Free online age calculator to find your exact age in years, months, weeks, days, hours, minutes & seconds. Includes zodiac signs, birthday countdown, leap year handling & ISO 8601 format for passports and legal documents. 100% private.",
  applicationName: "FastTools",
  category: "Date & Time",
}

export default function AgeCalculatorPage() {
  const toolContent = {
    toolName: "Age Calculator — Find Your Exact Age Instantly",
    definition:
      "An age calculator finds exact age from a birth date to today or any target date in years, months, days, and smaller time units.",
    quickAnswer:
      "Enter your date of birth and choose today's date or a custom target date to calculate exact age. The calculator returns age in years, months, days, weeks, hours, minutes, and seconds, with leap years handled automatically.",
    keyTakeaways: [
      "Exact age depends on birth date, target date, leap years, and month lengths",
      "Use years, months, and days format for passports, visas, school enrollment, and legal forms",
      "Future-age mode answers questions like how old you will be in 2030 or 2050",
      "Birthday countdown shows the time remaining until your next birthday",
      "All calculations run in the browser without storing birth dates",
    ],
    overview: "Calculate your exact age in years, months, weeks, days, hours, minutes, and seconds with our free online age calculator. Perfect for passport applications, visa forms, birthday countdown planning, retirement eligibility checks, and milestone tracking. The calculator automatically handles leap years, varying month lengths (28-31 days), and ISO 8601 date intervals. Get your chronological age, Western & Chinese zodiac signs, birth weekday, estimated lifetime heartbeats and breaths, and next birthday countdown — all computed instantly in your browser with complete privacy.",

    howToSteps: [
      "Enter Your Birth Date: Select your exact date of birth (day, month, year) using the date picker or type it manually.",
      "Choose Target Date: Defaults to today's date — or pick any past or future date for age-on-date calculations (e.g., visa application date, wedding date).",
      "View Instant Age Breakdown: See your precise age in years, months, days, hours, minutes, and seconds with zodiac signs, birthday countdown, and lifetime statistics."
    ],

    features: [
      "Second-Level Precision: Calculate exact age accurate to the second with automatic leap year and varying month-length handling.",
      "Western & Chinese Zodiac: Instant Sun Sign and Chinese Zodiac animal determination based on your birth date.",
      "Birthday Countdown Timer: Visual progress bar showing exact days, hours, and minutes until your next birthday.",
      "Lifetime Statistics: Estimated total heartbeats (80 bpm), breaths (16/min), and total days lived since birth.",
      "Birth Weekday Finder: Discover which day of the week you were born using Zeller's congruence algorithm.",
      "Official Document Format: Age formatted as 'Years + Months + Days' for passports, visas, insurance, and legal forms.",
      "100% Client-Side Privacy: All age calculations run in your browser — no data is stored, tracked, or transmitted to any server."
    ],

    useCases: [
      "Passport & Visa Applications: Get the exact 'Years, Months, Days' age format required by immigration agencies and consulates worldwide.",
      "Birthday Milestone Planning: Precisely plan 18th, 21st, 30th, 40th, 50th, and 60th birthday celebrations with day-accurate countdowns.",
      "Retirement Eligibility: Calculate exact years, months, and days until Social Security, pension, or 401(k) retirement age thresholds.",
      "Legal Age Verification: Verify age for voting rights, driving license eligibility, alcohol purchase age, and legal contract signing.",
      "School Enrollment Cutoffs: Determine your child's exact age on enrollment cutoff dates for kindergarten and grade-school admission.",
      "Age Gap Calculation: Calculate precise age differences between partners, siblings, or family members in years, months, and days."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            What is an Age Calculator? Understanding Precise Age Calculation
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            An age calculator computes your exact age from your date of birth to any target date, providing precise results in years, months, days, hours, minutes, and even seconds. Unlike manual calculations that are prone to errors with leap years and varying month lengths, our calculator automatically handles all calendar complexities and provides results in multiple formats—perfect for official documents, birthday planning, milestone tracking, or simply satisfying your curiosity about how long you've been alive.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our age calculator follows the <strong>ISO 8601 standard</strong> for date intervals, ensuring international accuracy and compliance with official document requirements. Whether you need to calculate your age for a passport application, determine eligibility for retirement benefits, plan a milestone celebration, or calculate age differences between family members, our tool provides instant, accurate results with complete privacy—all calculations happen in your browser, and your data never leaves your device.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Why Accuracy Matters: ISO 8601 Standards and Legal Compliance
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our calculator follows the <strong>ISO 8601 standard</strong> for date intervals, ensuring:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Correct Handling of Leap Years</h4>
                <p className="text-sm text-muted-foreground">Automatically accounts for February 29th in 366-day leap years. For people born on February 29th, the calculator correctly handles age increments in non-leap years (typically treating the birthday as March 1st for legal purposes), ensuring accurate age calculations for contracts, passports, and legal documents.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Adjustment for Varying Month Lengths</h4>
                <p className="text-sm text-muted-foreground">Accurately handles months with 28, 30, or 31 days, ensuring precise calculations regardless of birth month or target date. This eliminates errors that commonly occur in manual calculations when crossing month boundaries.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Precise Day-Level Calculation</h4>
                <p className="text-sm text-muted-foreground">Accounts for the exact day, providing results accurate to the second. This precision is essential for official documents like passport applications, visa forms, insurance policies, and school enrollment where exact "Years + Months + Days" format is legally required.</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <strong>Pro Tip:</strong> Use this for "Age on Date" calculations for school enrollment or official forms. Government agencies require your exact completed age in the "Years + Months + Days" format, and our calculator provides this automatically.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Calculate Your Exact Age: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to calculate your exact age instantly using our free calculator:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Birth Date</h4>
                <p className="text-sm text-muted-foreground">Select day, month, and year from the date picker. Use the date when you were actually born. If you don't know the exact date, use an approximate date, though this will affect accuracy for official document purposes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Choose Your Target Date (Optional)</h4>
                <p className="text-sm text-muted-foreground">The calculator defaults to today's date, but you can select any past or future date. This is perfect for calculating age on a specific date (e.g., "How old will I be on my wedding date?" or "What was my age on this historical event?").</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Get Instant, Comprehensive Results</h4>
                <p className="text-sm text-muted-foreground">View your exact age breakdown in years, months, days, hours, minutes, and seconds. The calculator also displays your Western and Chinese Zodiac signs, total days lived, next birthday countdown, biological statistics (estimated heartbeats and breaths), and the day of the week you were born.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Understanding Your Age Calculator Results: Complete Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-lg border border-border bg-card">
              <GImage
                src="/images/chronological_vs_biological_age_1765976611179.png"
                alt="Comparison chart of chronological vs biological age metrics"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">Chronological Age</span>
                    <span className="text-sm text-muted-foreground">The exact time elapsed since your birth, measured by the calendar.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">Total Days Lived</span>
                    <span className="text-sm text-muted-foreground">Complete count of all days you've been alive.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block">Next Birthday</span>
                    <span className="text-sm text-muted-foreground">Countdown to your upcoming birthday with days remaining.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Activity className="w-5 h-5 text-green-600 shrink-0" />
                  <div>
                    <span className="font-semibold block">Biological Statistics</span>
                    <span className="text-sm text-muted-foreground">Fun estimates based on average heart rate (80 bpm) and breathing rate (16 breaths/min).</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Baby className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="font-semibold block">Birth Day</span>
                    <span className="text-sm text-muted-foreground">The specific weekday you were born (Monday, Tuesday, etc.).</span>
                  </div>
                </li>
              </ul>
              <div className="p-3 mt-4 bg-muted/50 rounded-lg text-sm italic">
                "Did you know? People born on Tuesdays are statistically more likely to be math-inclined!"
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            Common Use Cases & Age Milestones: When Exact Age Matters
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">From official documents to life planning, knowing your exact age is crucial. Here are the most important age milestones and use cases where precise age calculation is essential:</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 font-bold text-right text-lg">18</div>
              <div className="flex-1 bg-secondary rounded-lg p-3 relative ml-4 border-l-4 border-primary">
                <h4 className="font-semibold text-sm">Legal Adulthood</h4>
                <p className="text-xs text-muted-foreground">Voting rights, signing contracts (Global)</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 font-bold text-right text-lg">21</div>
              <div className="flex-1 bg-secondary rounded-lg p-3 relative ml-4 border-l-4 border-blue-500">
                <h4 className="font-semibold text-sm">Full Independence</h4>
                <p className="text-xs text-muted-foreground">Standard age for additional privileges in many countries.</p>
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 font-bold text-right text-lg">65</div>
              <div className="flex-1 bg-secondary rounded-lg p-3 relative ml-4 border-l-4 border-green-500">
                <h4 className="font-semibold text-sm">Retirement Eligibility</h4>
                <p className="text-xs text-muted-foreground">Standard retirement age (varies by country).</p>
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <Zap className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Valid for Official Documents</h3>
                <p className="text-muted-foreground mb-4">
                  Government agencies require your exact completed age in "Years + Months + Days". This format is critical for:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 p-2 rounded border">
                    <span className="text-green-500">✓</span> Passport Applications
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 p-2 rounded border">
                    <span className="text-green-500">✓</span> Visa Entry Forms
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 p-2 rounded border">
                    <span className="text-green-500">✓</span> Insurance Policies
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white dark:bg-slate-800 p-2 rounded border">
                    <span className="text-green-500">✓</span> School/University Enrollment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Generational Cohorts: Understanding Your Cultural Context
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your birth year defines your generation, which shapes your cultural context, technical adaptability, worldview, and shared experiences. Understanding your generational cohort helps you connect with historical events, technological changes, and social movements that occurred during your formative years.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3">Generation Name</th>
                  <th className="p-3">Birth Years</th>
                  <th className="p-3">Core Defining Trait</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-blue-600">Gen Alpha</td>
                  <td className="p-3">2013 –</td>
                  <td className="p-3">Digital Natives</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-600">Gen Z (Zoomers)</td>
                  <td className="p-3">1997 – 2012</td>
                  <td className="p-3">Internet & Mobile First</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-green-600">Millennials</td>
                  <td className="p-3">1981 – 1996</td>
                  <td className="p-3">Tech & Info Adapters</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-orange-600">Gen X</td>
                  <td className="p-3">1965 – 1980</td>
                  <td className="p-3">Independent & Skeptical</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-600">Baby Boomers</td>
                  <td className="p-3">1946 – 1964</td>
                  <td className="p-3">Focused & Competitive</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Birth Date Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our age calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All age calculations happen directly in your browser. Your birth date and age results never leave your device or get transmitted to our servers. No data is sent over the internet during calculation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your information. There's no database of your age calculations, no analytics on your usage, and no way for us to access your birth date or age results.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Tracking or Cookies</h4>
                <p className="text-sm text-muted-foreground">We don't use cookies, tracking pixels, or analytics to monitor your usage of the age calculator. Your browsing and personal information remain completely private while using our tool.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: The Leap Year Anomaly and Legal Accuracy
          </h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg">
            <p className="italic text-blue-700 dark:text-blue-300 leading-relaxed">
              "Calculating age seems simple until you hit a leap year (Feb 29). Legally, 'age' increments on March 1st in non-leap years for those born on Feb 29. Our calculator follows international ISO-8601 logic to ensure legal accuracy for contracts and passports. This precision is essential when your age determines eligibility for rights, benefits, or legal requirements."
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Engineering</p>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is this age calculator?",
        answer: "100% accurate. We use ISO 8601 standards and account for all leap years and varying month lengths. Results are formatted exactly as required for official documents. The calculator handles all edge cases including leap years, varying month lengths (28-31 days), and century transitions."
      },
      {
        question: "Can I use this for legal documents?",
        answer: "Yes. The calculator provides the exact \"Years, Months, Days\" format required by passport agencies, visa applications, and university enrollment forms. This format is internationally recognized and accepted by government agencies, educational institutions, and legal entities worldwide."
      },
      {
        question: "How do I calculate my age on a specific future date?",
        answer: "Simply change the 'Target Date' field in the calculator to your desired future date. This is perfect for determining exactly how old you will be for an upcoming wedding, graduation, retirement eligibility, or any milestone event. The calculator works for any date in the past or future."
      },
      {
        question: "What's the difference between chronological and biological age?",
        answer: "Chronological age is the exact time since birth (what this tool calculates). Biological age refers to your body's internal aging based on health markers like cell condition, fitness, and lifestyle factors. While chronological age is fixed, biological age can be influenced by health choices and may differ from chronological age."
      },
      {
        question: "How do you calculate heartbeats and breaths?",
        answer: "We use medical averages: approximately 80 heartbeats per minute and 16 breaths per minute. These are multiplied by your total minutes alive to provide a fun statistical estimate. Note that actual rates vary by individual, activity level, and health conditions, so these are approximate averages."
      },
      {
        question: "How does the Zodiac calculation work?",
        answer: "Western Zodiac (Sun Sign) is determined by your birth day and month, following traditional astrological dates. Chinese Zodiac is based on your birth year in the lunar calendar, following a 12-year cycle. All calculations happen automatically when you enter your birth date."
      },
      {
        question: "What about February 29th birthdays?",
        answer: "The calculator correctly handles leap day birthdays. For age calculations in non-leap years, your birthday is treated as February 28th or March 1st, depending on the legal standard in your region (most commonly March 1st). This ensures accurate age calculations for leap day babies."
      },
      {
        question: "Is my information stored or tracked?",
        answer: "No. All calculations happen directly in your browser. We never store, track, or transmit your birth date. Your privacy is completely protected. The calculator works entirely client-side, meaning your data never leaves your device."
      },
      {
        question: "Can I calculate age differences between two people?",
        answer: "Yes! Enter one person's birth date, then change the target date to the other person's birth date. The result shows the exact age difference in years, months, and days. This is perfect for calculating age gaps between family members, partners, or friends."
      },
      {
        question: "What time zone does the calculator use?",
        answer: "The calculator uses your local time zone for date calculations. When you select a date, it's interpreted in your browser's local time. For precise calculations, ensure your device's date and time settings are correct."
      },
      {
        question: "Can I calculate my age in different units?",
        answer: "Yes! The calculator displays your age in years, months, days, hours, minutes, and even seconds. You can see your total age in days lived, weeks lived, and get fun statistics like estimated heartbeats and breaths throughout your lifetime."
      },
      {
        question: "How does the birthday countdown work?",
        answer: "The birthday countdown shows the exact number of days until your next birthday, displayed as a visual progress bar. It automatically calculates from today to your next birthday, helping you plan celebrations and track the time remaining until your special day."
      },
      {
        question: "What is the 'Day of Birth' feature?",
        answer: "The 'Day of Birth' feature tells you which day of the week you were born (Monday, Tuesday, etc.). This is calculated using the Zeller's congruence algorithm, which accurately determines the weekday for any date in history or the future."
      },
      {
        question: "Can I use this calculator for historical dates?",
        answer: "Yes! The calculator works for any date, including historical dates far in the past. You can calculate ages for historical figures, family genealogy research, or any date you're curious about. The calculator handles dates from ancient history to far future dates."
      },
      {
        question: "What format is used for official documents?",
        answer: "The calculator provides results in the \"Years, Months, Days\" format (e.g., \"25 years, 3 months, 15 days\"), which is the standard format required by passport agencies, visa applications, immigration forms, and many legal documents worldwide."
      },
      {
        question: "How do leap years affect age calculations?",
        answer: "Leap years add an extra day (February 29th) every four years. Our calculator automatically accounts for all leap years, ensuring accurate calculations. If you were born on February 29th, the calculator correctly handles your age in non-leap years according to legal standards."
      },
      {
        question: "Can I calculate age for someone else?",
        answer: "Absolutely! Simply enter their birth date instead of yours. The calculator works for any person, any date. This is useful for parents calculating children's ages, caregivers tracking elderly relatives, or anyone needing to calculate another person's age."
      },
      {
        question: "What are the Western Zodiac signs?",
        answer: "Western Zodiac (Sun Signs) include: Aries (March 21-April 19), Taurus (April 20-May 20), Gemini (May 21-June 20), Cancer (June 21-July 22), Leo (July 23-August 22), Virgo (August 23-September 22), Libra (September 23-October 22), Scorpio (October 23-November 21), Sagittarius (November 22-December 21), Capricorn (December 22-January 19), Aquarius (January 20-February 18), and Pisces (February 19-March 20)."
      },
      {
        question: "What are the Chinese Zodiac signs?",
        answer: "Chinese Zodiac follows a 12-year cycle: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig. Your sign is determined by your birth year in the lunar calendar. The calculator automatically determines your Chinese Zodiac sign based on your birth year."
      },
      {
        question: "How accurate are the heartbeat and breath estimates?",
        answer: "The estimates use medical averages: 80 heartbeats per minute (resting heart rate) and 16 breaths per minute (normal breathing rate). These are multiplied by your total minutes alive. Actual rates vary significantly by individual, activity level, fitness, age, and health conditions, so these are approximate fun statistics."
      },
      {
        question: "Can I calculate my age in weeks?",
        answer: "Yes! The calculator shows your total age in weeks. Simply look at the \"Days Lived\" result and divide by 7, or the calculator may display weeks directly. This is useful for tracking baby ages, pregnancy milestones, or understanding your life in different time units."
      },
      {
        question: "What if I don't know my exact birth time?",
        answer: "The calculator works perfectly with just your birth date. Birth time is only needed for detailed astrological charts, not for age calculations. You can calculate your exact age using just the date (day, month, year) without needing the specific time of birth."
      },
      {
        question: "Can I use this for retirement planning?",
        answer: "Yes! Set the target date to your planned retirement date to see exactly how old you'll be. This helps with retirement planning, understanding years until retirement, and calculating eligibility for retirement benefits. Combine with our Retirement Calculator for comprehensive planning."
      },
      {
        question: "How do I calculate age for visa applications?",
        answer: "Enter your birth date and set the target date to the visa application date. The calculator will show your exact age in the \"Years, Months, Days\" format required by most visa applications. This format is internationally recognized and accepted by immigration authorities."
      },
      {
        question: "What's the oldest age I can calculate?",
        answer: "The calculator can handle any age, from newborns (days old) to the oldest verified human ages (over 120 years). There's no practical upper limit—the calculator works for any date range, making it useful for genealogy research, historical calculations, or future planning."
      },
      {
        question: "Can I calculate age for future dates?",
        answer: "Yes! The calculator works for any date, past or future. Simply set your target date to a future date to see how old you (or someone else) will be on that date. This is perfect for planning milestones, events, or understanding future age requirements."
      },
      {
        question: "How does the calculator handle different calendar systems?",
        answer: "The calculator uses the Gregorian calendar (the standard international calendar). For dates before 1582, it uses the proleptic Gregorian calendar. If you need calculations for other calendar systems (Julian, Islamic, Hebrew, etc.), you may need to convert the date first to the Gregorian calendar."
      },
      {
        question: "Is this calculator free to use?",
        answer: "Yes, completely free! There are no charges, subscriptions, or hidden fees. You can use the calculator unlimited times for any purpose—personal, educational, or commercial. No registration or account creation is required."
      },
      {
        question: "Can I use this on mobile devices?",
        answer: "Absolutely! The calculator is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The interface adapts to your screen size, making it easy to use on any device, anywhere, anytime."
      },
      {
        question: "How do I calculate age for academic purposes?",
        answer: "Enter the student's birth date and set the target date to the enrollment date or academic year start date. The calculator provides the exact age in the format required by most educational institutions. This is useful for school enrollment, university applications, and age-requirement verification."
      },
      {
        question: "What makes this calculator different from others?",
        answer: "Our calculator provides comprehensive results including zodiac signs, fun statistics, birthday countdown, and multiple time units. It's 100% private (client-side only), handles all edge cases correctly (leap years, varying months), and provides results in official document formats. Plus, it's completely free with no limitations."
      }
    ],

    relatedTools: [
      { name: "Future Age Calculator", href: "/fun-tools/future-age" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Time Duration Calculator", href: "/calculator/time-duration" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Biological Age Calculator", href: "/calculator/biological-age-calculator" },
      { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Age Calculator — Exact Age in Years, Months & Days",
        description: "Calculate your exact age in years, months, weeks, days, hours, minutes & seconds. Includes Western & Chinese zodiac signs, birthday countdown, leap year handling, and ISO 8601 format for passports. Free, instant, and 100% private.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Age Calculator", href: "/calculator/age-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AgeCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Age Calculator — Exact Age in Years, Months, Days, Hours & Seconds",
        description: "Free online age calculator to find your exact age in years, months, weeks, days, hours, minutes & seconds. Includes zodiac signs, birthday countdown, leap year handling & ISO 8601 format for passports and legal documents. 100% private.",
        path: "/calculator/age-calculator"
      }}
    />
  )
}
