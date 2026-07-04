import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const PregnancyConceptionCalculator = dynamic(() => import("@/components/health/pregnancy-conception-calculator"), {
  loading: () => <ToolLoader />
})
import { buildSchemas, createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const conceptionMetadataOptions = {
  title: "Conception Date Calculator — From Due Date or LMP",
  description:
    "Free conception calculator to estimate your conception date, fertile window, and pregnancy week from due date, last menstrual period, or ultrasound. Includes trimester guidance, nutrition tips, and milestone tracking.",
  path: "/calculator/pregnancy-conception-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" }
  ],
  schemaOptions: {
    name: "Pregnancy Conception Calculator | Free Online Pregnancy Tool",
    alternateName: [
      "Conception Calculator",
      "Date of Conception Calculator",
      "Estimated Conception Date",
      "When Did I Conceive Calculator",
      "Reverse Pregnancy Calculator",
    ],
    applicationCategory: "HealthApplication",
    featureList: [
      "Conception Date Calculation",
      "Trimester Determination",
      "Pregnancy Symptoms Tracking",
      "Nutrition Recommendations",
      "Exercise Guidelines",
      "Health Milestones",
      "Lifestyle Tips"
    ]
  }
}

const baseMetadata = createMetadata(conceptionMetadataOptions)
const schemas = buildSchemas(conceptionMetadataOptions)

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PregnancyConceptionCalculatorPage() {
  const toolContent = {
    toolName: "Pregnancy Conception Calculator",
    definition:
      "A pregnancy conception calculator estimates the likely conception date or fertile window from a due date, last menstrual period, or ultrasound dating information.",
    quickAnswer:
      "Enter your due date, LMP, or ultrasound date to estimate the probable conception date range. Because sperm can survive several days and ovulation timing varies, the result is best treated as a window rather than one exact date.",
    keyTakeaways: [
      "Conception is usually estimated around ovulation, not necessarily the intercourse date",
      "Gestational age is counted from LMP and is typically about two weeks ahead of fetal age",
      "Due-date based conception estimates work backward from about 266 days before delivery",
      "First-trimester ultrasound can improve dating when cycle history is uncertain",
      "Conception calculators estimate a range and cannot prove paternity or exact fertilization day",
    ],
    overview: "Reverse-calculate your probable conception date and fertile window using our free conception calculator. Enter your due date, last menstrual period (LMP), or first-trimester ultrasound date to estimate when fertilization occurred — accounting for the 3-5 day sperm survival window that separates intercourse date from actual conception. The tool also provides gestational vs. fetal age breakdowns, trimester-specific nutrition and exercise recommendations, and a complete milestone timeline from implantation through full term.",

    howToSteps: [
      "Choose Calculation Method: Select Due Date, Last Menstrual Period (LMP), or Ultrasound Date to reverse-calculate conception.",
      "Enter Your Information: Provide the relevant date — the calculator accounts for the 3-5 day sperm survival window to give a conception date range rather than a single day.",
      "Get Personalized Results: Receive your estimated conception date range, gestational age, fetal age, current trimester, and milestone timeline.",
      "Track Your Progress: Monitor pregnancy milestones from implantation (6-12 days post-conception) through heartbeat, quickening, viability, and full term.",
      "Review Recommendations: Check trimester-specific nutrition guidelines, safe exercise recommendations, and health tips tailored to your current pregnancy week."
    ],

    features: [
      "Conception Date Range: Calculate probable conception date accounting for the 3-5 day sperm survival fertile window.",
      "Multiple Input Methods: Reverse-calculate from due date, last menstrual period (LMP), or first-trimester ultrasound measurement.",
      "Gestational vs. Fetal Age: Display both gestational age (from LMP, ~2 weeks more) and fetal age (from conception) side by side.",
      "Trimester Classification: Automatically determine your current trimester and pregnancy stage with week-by-week progression.",
      "Milestone Timeline: Track key milestones — implantation, heartbeat, first movement, viability, and full-term readiness.",
      "Nutrition & Exercise Tips: Trimester-specific dietary guidelines and safe exercise recommendations.",
      "Mobile-Responsive: Access conception date results and pregnancy tracking on any device."
    ],

    useCases: [
      "Expectant Mothers: Calculate conception date and track pregnancy progress.",
      "Healthcare Providers: Verify gestational age and plan prenatal care.",
      "Family Planning: Understand fertility windows and conception timing.",
      "Health Monitoring: Track symptoms and milestones throughout pregnancy.",
      "Education: Learn about fetal development and maternal health."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is a Conception Calculator?</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            A <strong>Conception Calculator</strong> helps you estimate the date your baby was conceived based on your due date or last menstrual period. Understanding the conception date is useful for dating the pregnancy accurately, determining paternity, or simply knowing when your journey truly began.
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">Pregnancy Milestone Timeline (Estimates)</h3>
          <p className="mb-4 text-muted-foreground text-sm">
            Based on your estimated conception date, here are some key milestones you can expect:
          </p>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Milestone</th>
                <th className="p-3 text-left">Approx. Timing</th>
                <th className="p-3 text-left">Key Event</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">Implantation</td>
                <td className="p-3">6-12 days after conception</td>
                <td className="p-3 text-muted-foreground">Embryo attaches to uterus</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Heartbeat Starts</td>
                <td className="p-3">3-4 weeks after conception</td>
                <td className="p-3 text-muted-foreground">Cardiac activity begins (Week 6 LMP)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">First Movement</td>
                <td className="p-3">14-23 weeks after conception</td>
                <td className="p-3 text-muted-foreground">"Quickening" (Week 16-25 LMP)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Viability</td>
                <td className="p-3">22 weeks after conception</td>
                <td className="p-3 text-muted-foreground">Survival possible with medical care</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Full Term</td>
                <td className="p-3">35 weeks after conception</td>
                <td className="p-3 text-muted-foreground">Lungs and brain fully developed</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <div className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 border-l-4 border-teal-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-teal-800 dark:text-teal-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: The Sperm Life Span Factor
          </h4>
          <p className="italic text-teal-700 dark:text-teal-300">
            "It's important to differentiate between 'intercourse date' and 'conception date.' Sperm can survive inside the female reproductive tract for up to <strong>5 days</strong>. Conception (fertilization) only occurs when an egg is released during ovulation. This means you could have conceived up to 5 days after intercourse. Our calculator accounts for this window to give you the most accurate range possible."
          </p>
          <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-2">— FastTools Biology & Research Team</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">Gestational vs. Conception Age</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            <strong>Gestational Age:</strong> Measured from the first day of your last period. This is the standard used by doctors.<br />
            <strong>Conception Age:</strong> Measured from the actual date of fertilization. This is usually about 2 weeks less than gestational age.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3 Ways to Estimate Your Conception Date</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Inputs needed</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Last Menstrual Period (LMP)</td><td className="p-3">First day of last period</td><td className="p-3">±1–2 weeks</td><td className="p-3">Regular 28-day cycle, period date known</td></tr>
                <tr><td className="p-3 font-semibold">Due Date Reverse-Calc</td><td className="p-3">EDD (estimated due date)</td><td className="p-3">±3–5 days</td><td className="p-3">Already have an OB-confirmed due date</td></tr>
                <tr><td className="p-3 font-semibold">First-Trimester Ultrasound (CRL)</td><td className="p-3">CRL measurement in mm</td><td className="p-3">±3–5 days</td><td className="p-3">Most accurate for irregular cycles</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-sm text-muted-foreground">
            <strong>If methods disagree:</strong> ultrasound is the gold standard. If LMP and ultrasound estimates differ by more than 5–7 days in the first trimester, doctors revise the due date based on the ultrasound.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conception Date from Due Date — Quick Reference</h2>
          <p className="text-sm text-muted-foreground">
            The formula is <code>conception date ≈ due date − 266 days</code> (or due date − 38 weeks). For someone with a regular 28-day cycle, this gives the day of ovulation, which is when conception most likely happened.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Due date</th>
                  <th className="p-3 text-left">Likely conception date</th>
                  <th className="p-3 text-left">Fertile window (±5 days)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Jan 1, 2027</td><td className="p-3">Apr 10, 2026</td><td className="p-3">Apr 5 – Apr 15, 2026</td></tr>
                <tr><td className="p-3 font-semibold">Apr 1, 2027</td><td className="p-3">Jul 9, 2026</td><td className="p-3">Jul 4 – Jul 14, 2026</td></tr>
                <tr><td className="p-3 font-semibold">Jul 1, 2027</td><td className="p-3">Oct 8, 2026</td><td className="p-3">Oct 3 – Oct 13, 2026</td></tr>
                <tr><td className="p-3 font-semibold">Oct 1, 2027</td><td className="p-3">Jan 8, 2027</td><td className="p-3">Jan 3 – Jan 13, 2027</td></tr>
                <tr><td className="p-3 font-semibold">Dec 25, 2027</td><td className="p-3">Apr 2, 2027</td><td className="p-3">Mar 28 – Apr 7, 2027</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-sm text-muted-foreground italic">Use the calculator above for your exact due date — these are reference values.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">When Did I Conceive? — Answers by Due Month</h2>
          <p className="text-sm text-muted-foreground">
            Know your due month? Each page below gives the conception window for every due date in that month, with a day-by-day table:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {[
              "january", "february", "march", "april", "may", "june",
              "july", "august", "september", "october", "november", "december",
            ].map((month) => (
              <li key={month}>
                <a
                  href={`/calculator/pregnancy-conception-calculator/due-in-${month}`}
                  className="text-primary hover:underline capitalize"
                >
                  Due in {month}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    proTip: "First-trimester ultrasounds (weeks 6-13) provide the most accurate dating, within 5-7 days, because fetal growth is most uniform in early pregnancy. If your periods are irregular, always prefer ultrasound-based calculation over LMP to get a reliable conception date range.",

    faqs: [
      {
        question: "How accurate is this calculator?",
        answer: "It provides estimates based on standard medical formulas. Ultrasound dating is most accurate (±3-5 days), followed by due date (±1-2 weeks). LMP is least accurate for irregular cycles."
      },
      {
        question: "What medical guidance is this conception estimate based on?",
        answer: "The calculator uses standard pregnancy dating relationships: due date minus about 266 days for likely conception, LMP plus about 14 days for a regular 28-day cycle, and ultrasound-based dating when available. ACOG notes that first-trimester ultrasound using crown-rump length is the most accurate way to establish or confirm gestational age. Use this as an estimate and follow your clinician's dating if it differs."
      },
      {
        question: "Why is there a conception date range?",
        answer: "Because sperm can survive inside the body for 3-5 days, conception could have occurred on any of those days. The range covers this fertile window."
      },
      {
        question: "Can I use this if I have irregular periods?",
        answer: "Yes, but the Ultrasound method will be much more accurate than the Last Menstrual Period method for you."
      },
      {
        question: "Does it work for IVF?",
        answer: "For IVF, you likely know your exact transfer date. You can use the 'Due Date' method if your doctor gave you one, or simply subtract 266 days from your due date for a rough conception estimate."
      },
      {
        question: "What if my due date changes?",
        answer: "Due dates often change after an early ultrasound. If your doctor gives you a new due date, simply re-enter it into the calculator for updated conception estimates."
      },
      {
        question: "When does the first trimester end?",
        answer: "The first trimester ends at the completion of week 12. Week 13 marks the start of the second trimester."
      },
      {
        question: "Is it safe to exercise?",
        answer: "Generally yes, but always consult your doctor. Our tool provides general guidelines for safe exercises by trimester."
      },
      {
        question: "What foods should I avoid?",
        answer: "Common restrictions include raw meat/fish, unpasteurized dairy, and high-mercury fish. Our calculator offers specific nutrition tips."
      },
      {
        question: "How often should I check this tool?",
        answer: "Weekly check-ins are great to see new development milestones and get tips relevant to your current week of pregnancy."
      },
      {
        question: "Can it predict gender?",
        answer: "No, gender is determined at conception but can only be revealed by medical tests (ultrasound/blood test) later in pregnancy."
      },
      {
        question: "How do I find my conception date from my due date?",
        answer: "Subtract 266 days (or 38 weeks) from your estimated due date to get the most likely conception date. The fertile window spans roughly ±5 days around that date because sperm survive for up to 5 days before ovulation. Enter your due date in the calculator above for an exact answer with the fertile window included."
      },
      {
        question: "What's the difference between conception date and implantation date?",
        answer: "Conception is when the sperm fertilizes the egg (occurs in the fallopian tube, usually within 24 hours of ovulation). Implantation is when the fertilized embryo attaches to the uterus, typically 6–12 days later. Both happen close together but they're not the same event — conception age is measured from fertilization, not from implantation."
      },
      {
        question: "Why is my conception date 2 weeks after my last period?",
        answer: "Because ovulation in a standard 28-day cycle happens about 14 days after the first day of your last period. Doctors count pregnancy from the LMP (last menstrual period), but conception itself doesn't happen until ovulation — so 'gestational week 2' is actually conception week 0. This is why a 'pregnant 6 weeks' reading means about 4 weeks since conception."
      },
      {
        question: "Can the calculator help with IUI or IVF timing?",
        answer: "For IUI, your conception date is the IUI procedure date. For IVF, conception (fertilization in the lab) happens during the egg retrieval cycle — typically 3 or 5 days before embryo transfer, depending on whether you transferred a Day 3 or Day 5 (blastocyst) embryo. Enter the procedure date directly rather than using the LMP method."
      },
      {
        question: "How accurate is ultrasound-based conception dating?",
        answer: "Most accurate. First-trimester ultrasounds (weeks 6-13) measure the crown-rump length (CRL) of the embryo, which has very predictable growth — accuracy is ±3-5 days. After week 14, ultrasound dating becomes less accurate (±1-2 weeks) because fetal growth varies more between individuals. If your LMP estimate disagrees with the first-trimester ultrasound by more than 7 days, doctors revise the due date."
      }
    ],

    relatedTools: [
      { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" },
      { name: "Ovulation Calculator", href: "/calculator/ovulation-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Future Age Predictor", href: "/fun-tools/how-old-will-i-be" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/tdee-macro-calculator" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Conception Date Calculator — Find When You Conceived",
        description: "Free conception calculator to reverse-calculate your probable conception date and fertile window from a known due date, LMP, or ultrasound measurement. Get personalized trimester guidance, nutrition recommendations, safe exercise tips, and week-by-week pregnancy milestone tracking.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "pink"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pregnancy Conception Calculator", href: "/calculator/pregnancy-conception-calculator" }
      ]}
      schemas={schemas}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PregnancyConceptionCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Conception Date Calculator — From Due Date or LMP",
        description:
          "Free conception calculator to estimate your conception date, fertile window, and pregnancy week from due date, last menstrual period, or ultrasound. Includes trimester guidance, nutrition tips, and milestone tracking.",
        path: "/calculator/pregnancy-conception-calculator"
      }}
    />
  )
}
