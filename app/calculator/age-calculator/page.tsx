import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { AgeCalculator } from "@/components/calculators/age-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { GImage } from "@/ui/gimage"
import { GTable } from "@/ui/gtable"
import {
  Clock, Activity, Lightbulb, Zap, Hourglass, HelpCircle, Calendar, Baby, Brain
} from "lucide-react"

const baseMetadata = createMetadata({
  title: "Age Calculator - Calculate Exact Age Online (Free) 2026",
  description:
    "Free online Age Calculator. Calculate exact age instantly. Fast, accurate, and no signup required.",
  path: "/calculator/age-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Age Calculator", href: "/calculator/age-calculator" }
  ],
  schemaOptions: {
    name: "Calculate Your Exact Age in Seconds - Free Age Calculator",
    alternateName: "Precise Age Calculator",
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
  applicationName: "FastTools",
  category: "Date & Time",
}

export default function AgeCalculatorPage() {
  const toolContent = {
    toolName: "Calculate Your Exact Age Instantly",
    overview: "Get your precise age in years, months, days, and even seconds. Perfect for birthdays, legal documents, and milestone planning. Unlike manual calculations, it automatically handles leap years, varying month lengths, and provides results in multiple formats—perfect for official documents, birthday planning, or just satisfying your curiosity.",

    howToSteps: [
      "Enter Your Birth Date: Select day, month, and year from the date picker.",
      "Choose Target Date: Defaults to today, or pick any past or future date.",
      "Get Instant Results: View your age breakdown with zodiac signs and fun facts."
    ],

    features: [
      "Precise Calculations: Accurate to the second with automatic leap year handling.",
      "Zodiac Signs: Instant Western (Sun Sign) and Chinese Zodiac based on your birth date.",
      "Birthday Countdown: Visual progress bar showing days until your next birthday.",
      "Fun Statistics: Estimated total heartbeats, breaths, and days lived.",
      "Day of Birth: Find out which day of the week you were born.",
      "Official Format: Results formatted for passports, visas, and legal documents.",
      "100% Private: All calculations happen in your browser. We never store your data."
    ],

    useCases: [
      "Official Documents: Complete passport, visa, and government forms with exact age requirements.",
      "Milestone Planning: Plan 30th, 40th, 50th birthday celebrations with precision.",
      "Retirement Calculation: Determine exact years until retirement eligibility.",
      "Age Verification: Verify age for legal contracts, voting rights, or age-restricted services.",
      "Historical Context: Discover what world events occurred during your lifetime.",
      "Age Gap Calculation: Calculate exact age differences between family members or partners."
    ],

    aboutTool: (
      <div className="space-y-8">
        <div className="rounded-xl overflow-hidden shadow-sm border border-border/50">
          <GImage
            src="/images/age_calculator_hero_1765980011245.png"
            alt="FastTools Age Calculator - Accurately measure your age in years, months, and days"
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <article className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
            <HelpCircle className="w-5 h-5 text-primary" />
            What is an Age Calculator?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            An age calculator computes your exact age from your date of birth to any target date. Unlike manual calculations, it automatically handles leap years, varying month lengths, and provides results in multiple formats—perfect for official documents, birthday planning, or just satisfying your curiosity.
          </p>
        </article>

        <article className="bg-card p-6 rounded-xl border border-border/50 shadow-sm">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
            <Clock className="w-5 h-5 text-primary" />
            Why Accuracy Matters
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Our calculator follows the <strong>ISO 8601 standard</strong> for date intervals, ensuring:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
            <li><strong>Correct handling of leap years</strong> (February 29th in 366-day years)</li>
            <li><strong>Adjustment for months</strong> with 28, 30, or 31 days</li>
            <li><strong>Precise calculation</strong> accounting for the exact day</li>
          </ul>
          <div className="mt-6 relative rounded-xl overflow-hidden shadow-lg border border-border">
            <GImage
              src="/images/calculation-accuracy.png"
              alt="Visual representation of ISO 8601 date accuracy calculation"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <p className="text-muted-foreground mt-4">
            This precision is essential for official documents like passport applications, visa forms, insurance policies, and school enrollment where exact "Years + Months + Days" format is required.
          </p>
          <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <strong>Pro Tip:</strong> Use this for "Age on Date" calculations for school enrollment or official forms.
            </p>
          </div>
        </article>

        <article>
          <h3 className="text-xl font-semibold mb-4 text-center">How to Use</h3>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center list-none p-0 m-0">
            <li className="p-4 rounded-lg bg-background border border-border">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold mb-1">Enter Your Birth Date</h4>
              <p className="text-sm text-muted-foreground">Select day, month, and year from the date picker.</p>
            </li>
            <li className="p-4 rounded-lg bg-background border border-border">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold mb-1">Choose Target Date</h4>
              <p className="text-sm text-muted-foreground">Defaults to today, or pick any past or future date.</p>
            </li>
            <li className="p-4 rounded-lg bg-background border border-border">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-3">
                <span className="font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold mb-1">Get Instant Results</h4>
              <p className="text-sm text-muted-foreground">View your age breakdown with zodiac signs and fun facts.</p>
            </li>
          </ol>
          <div className="mt-6 relative rounded-xl overflow-hidden shadow-lg border border-border">
            <GImage
              src="/images/age_calculator_steps_1765976489023.png"
              alt="Diagram showing how the age calculator processes dates"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </article>

        <article>
          <h3 className="text-xl font-semibold mb-4">Understanding Your Results</h3>
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

        <article>
          <h3 className="text-xl font-semibold mb-4">Common Use Cases & Milestones</h3>
          <p className="text-muted-foreground mb-6">From official documents to life planning, knowing your exact age is crucial.</p>
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

        <article className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border p-5 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Hourglass className="w-5 h-5" />
              Why History Matters
            </h3>
            <p className="text-sm text-muted-foreground">
              Knowing your age allows you to connect with history. For example, if you are <strong>30 years old today</strong>, you were born around the dawn of the public internet.
            </p>
          </div>
          <div className="bg-card border p-5 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Global Generations
            </h3>
            <p className="text-sm text-muted-foreground">
              Your birth year defines your generation (Gen Z, Millennials, Gen X). This shapes your cultural context, technical adaptability, and worldview.
            </p>
          </div>
        </article>

        <div className="my-8">
          <h4 className="font-semibold text-lg mb-4">Generational Cohorts Reference (2025)</h4>
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
                <td className="p-3">2013 – 2025</td>
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

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: The Leap Year Anomaly
          </h4>
          <p className="italic text-blue-700 dark:text-blue-300">
            "Calculating age seems simple until you hit a leap year (Feb 29). Legally, 'age' increments on March 1st in non-leap years for those born on Feb 29. Our calculator follows international ISO-8601 logic to ensure legal accuracy for contracts and passports."
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Engineering</p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How accurate is this age calculator?",
        answer: "100% accurate. We use ISO 8601 standards and account for all leap years and varying month lengths. Results are formatted exactly as required for official documents."
      },
      {
        question: "Can I use this for legal documents?",
        answer: "Yes. The calculator provides the exact \"Years, Months, Days\" format required by passport agencies, visa applications, and university enrollment forms."
      },
      {
        question: "How do I calculate my age on a specific future date?",
        answer: "Simply change the 'Target Date' field in the calculator to your desired future date. This is perfect for determining exactly how old you will be for an upcoming wedding, graduation, or retirement eligibility."
      },
      {
        question: "What's the difference between chronological and biological age?",
        answer: "Chronological age is the exact time since birth (what this tool calculates). Biological age refers to your body's internal aging based on health markers like cell condition, fitness, and lifestyle factors."
      },
      {
        question: "How do you calculate heartbeats and breaths?",
        answer: "We use medical averages: approximately 80 heartbeats per minute and 16 breaths per minute. These are multiplied by your total minutes alive to provide a fun statistical estimate."
      },
      {
        question: "How does the Zodiac calculation work?",
        answer: "Western Zodiac (Sun Sign) is determined by your birth day and month. Chinese Zodiac is based on your birth year in the lunar calendar. All calculations happen automatically."
      },
      {
        question: "What about February 29th birthdays?",
        answer: "The calculator correctly handles leap day birthdays. For age calculations in non-leap years, your birthday is treated as February 28th or March 1st, depending on the legal standard in your region (most commonly March 1st)."
      },
      {
        question: "Is my information stored or tracked?",
        answer: "No. All calculations happen directly in your browser. We never store, track, or transmit your birth date. Your privacy is completely protected."
      }
    ],

    relatedTools: [
      { name: "Date Difference", href: "/calculator/date-difference" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Age Calculator",
        description: "Calculate your exact age, Western & Chinese Zodiac signs, and fun biological stats. Free, accurate, and instant.",
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
        title: "Age Calculator - Exact Age, Zodiac Signs & Fun Stats",
        description: "Calculate your exact age, Western & Chinese Zodiac signs, and fun biological stats (heartbeats, breaths). Features a live age ticker and birthday countdown.",
        path: "/calculator/age-calculator"
      }}
    />
  )
}
