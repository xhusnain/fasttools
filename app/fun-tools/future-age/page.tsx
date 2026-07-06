import { Metadata } from 'next';
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const FutureAgePredictor = dynamic(
  () => import("@/components/calculators/future-age-predictor").then(mod => mod.FutureAgePredictor),
  { loading: () => <ToolLoader /> }
)
import { Calendar, Globe, Calculator, ArrowRight, CheckCircle, HelpCircle, Star, Clock, Sigma, Table as TableIcon, BookOpen, GitCompare } from "lucide-react"
import { GTable } from "@/ui/gtable"

const toolConfig = createToolConfig({
  toolName: "Future Age Calculator",
  description: "Calculate exactly how old you'll be on any future date. Free future age calculation tool with years, months, days, and life milestones.",
  metaTitle: "Future Age Calculator — How Old Will I Be on Any Future Date?",
  metaDescription: "Free future age calculator. How old will I be in 2030, 2040, 2050, or on my retirement date? Calculate your exact future age in years, months, days from any birth date. Leap-year aware. 100% client-side.",
  path: "/fun-tools/future-age",

  header: {
    title: "Future Age Calculator — How Old Will I Be on Any Future Date?",
    description: "Calculate exactly how old you'll be on any future date. Get your future age in years, months, and days for retirement planning, milestone birthdays, or future event planning. Free future age calculation — instant and accurate.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Future Age Calculator", href: "/fun-tools/future-age" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Future age calculator: calculate exactly how old you'll be on any future date. Years, months, days output plus total elapsed days / weeks / months. Leap-year aware. 100% client-side.",
    alternateName: [
      "How Old Will I Be Calculator",
      "Future Age Calculation",
      "Future Age Estimator",
      "Age in 2030 Calculator",
      "Age in 2040 Calculator",
      "Age in 2050 Calculator",
      "Age in 2100 Calculator",
      "Retirement Age Calculator",
      "Age on Specific Date",
      "Date to Age Calculator",
      "Age Predictor",
      "Future Self Age Tool",
      "Anniversary Age Calculator",
      "Kids Future Age Tool",
      "Age Time Travel Calculator",
      "Birthday in X Years",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A future age calculator is a free tool that performs future age calculation — taking your birth date and a future target date, then computing exactly how old you will be on that future date in years, months, and days.",
    quickAnswer:
      "Enter your birth date and any future date to see exactly how old you will be. The future age calculator handles leap years, varying month lengths, and gives results in years, months, and days. Works for any year — 2030, 2050, 2100, or your retirement date.",
    keyTakeaways: [
      "Future age = future date − birth date, with leap-year and month-length normalization",
      "Output in years, months, days — plus total elapsed days, weeks, and months",
      "Works for any future date: 2030, 2040, 2050, 2100, retirement age, milestone birthdays, kids' future ages",
      "Handles every February 29 correctly (years divisible by 4 but not 100, except 400)",
      "100% client-side — your birth date never leaves your browser, no signup",
      "Bidirectional: works for past dates too, so it doubles as a date-difference age tool",
    ],
    overview: "This future age calculator answers the simple question: how old will I be on a future date? Enter your birth date and a target date — the tool returns your exact future age in years, months, and days, plus the total elapsed days, weeks, and months. Future age calculation uses precise calendar arithmetic, accounting for leap years and varying month lengths, so the result is accurate whether you're checking your age in 2030, on your 50th wedding anniversary, on your retirement date, or in the year 3000. All math happens in your browser — nothing is sent to a server.",

    howToSteps: [
      "Enter Birth Date: Select your birth date using the simple date picker.",
      "Choose Target Year: Enter the future year you want to know your age for.",
      "Get Instant Results: See exactly how old you'll be in years, months, and days.",
      "View Milestones: Discover what life stage or milestones you might reach by that age.",
      "Share Your Future: Share your age prediction with friends or on social media."
    ],

    features: [
      "Precise Age Calculation: Calculates exact age in years, months, and days.",
      "Leap Year Accurate: Automatically handles leap years for perfect precision.",
      "Instant Results: No waiting, get your future age immediately.",
      "Milestone Insights: See relevant life milestones for your future age.",
      "Privacy Focused: All calculations happen in your browser; no data is stored.",
      "Mobile Friendly: Works perfectly on phones, tablets, and desktops.",
      "Shareable Results: Easily copy and share your future age prediction.",
      "Global Compatibility: Works with any birth date and future year."
    ],

    useCases: [
      "Retirement Planning: Calculate your exact age for retirement goals.",
      "Event Planning: Know how old you'll be for future weddings or anniversaries.",
      "Education Planning: Determine ages for graduation or school start dates.",
      "Financial Goals: Align savings targets with specific future ages.",
      "Just for Fun: See how old you'll be in the year 2050 or 3000!",
      "Family Planning: Calculate ages of children or parents for future events."
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sigma className="h-6 w-6 text-primary" />
            How Future Age Is Calculated (Formula + Worked Example)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Future age calculation is the arithmetic of subtracting your birth date from a target future date, then normalizing the result into years, months, and days. The formula has three parts because months have different lengths (28–31 days) and years are sometimes 366 days long:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed">
            <div><strong>Step 1.</strong> years = future.year − birth.year</div>
            <div><strong>Step 2.</strong> if (future.month, future.day) is earlier in the calendar than (birth.month, birth.day): years −= 1</div>
            <div><strong>Step 3.</strong> months = (future.month − birth.month + 12) mod 12, adjust further if day numbers carry</div>
            <div><strong>Step 4.</strong> days = remainder after years and months are subtracted, using the actual length of the preceding month</div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Worked example.</strong> Birth date 1990-08-15, target date 2050-03-01. Year difference is 60. Since March 1 is before August 15 in the calendar, subtract one — you'll be <strong>59</strong> years, 6 months, and 14 days old on that date. February has 28 days (29 in leap years like 2052), which the tool handles automatically.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Leap year rule.</strong> A year is a leap year if it's divisible by 4, except century years (1900, 2100) which must also be divisible by 400. So 2000 was a leap year, 2100 will not be, and 2400 will be. The tool accounts for every leap year between your birth and target date.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TableIcon className="h-6 w-6 text-primary" />
            Quick Future Age Lookup
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Common future-year scenarios. Use the calculator above for your exact birth date — the table below shows the age someone born in the year on the left would be on January 1 of the future year across the top.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Born in</th>
                  <th className="p-3 text-left">Age in 2030</th>
                  <th className="p-3 text-left">Age in 2040</th>
                  <th className="p-3 text-left">Age in 2050</th>
                  <th className="p-3 text-left">Age in 2075</th>
                  <th className="p-3 text-left">Age in 2100</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">1980</td><td className="p-3">50</td><td className="p-3">60</td><td className="p-3">70</td><td className="p-3">95</td><td className="p-3">120</td></tr>
                <tr><td className="p-3 font-semibold">1990</td><td className="p-3">40</td><td className="p-3">50</td><td className="p-3">60</td><td className="p-3">85</td><td className="p-3">110</td></tr>
                <tr><td className="p-3 font-semibold">2000</td><td className="p-3">30</td><td className="p-3">40</td><td className="p-3">50</td><td className="p-3">75</td><td className="p-3">100</td></tr>
                <tr><td className="p-3 font-semibold">2005</td><td className="p-3">25</td><td className="p-3">35</td><td className="p-3">45</td><td className="p-3">70</td><td className="p-3">95</td></tr>
                <tr><td className="p-3 font-semibold">2010</td><td className="p-3">20</td><td className="p-3">30</td><td className="p-3">40</td><td className="p-3">65</td><td className="p-3">90</td></tr>
                <tr><td className="p-3 font-semibold">2015</td><td className="p-3">15</td><td className="p-3">25</td><td className="p-3">35</td><td className="p-3">60</td><td className="p-3">85</td></tr>
                <tr><td className="p-3 font-semibold">2020</td><td className="p-3">10</td><td className="p-3">20</td><td className="p-3">30</td><td className="p-3">55</td><td className="p-3">80</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            A few quick worked examples: a 10-year-old in 2026 turns 14 in 2030 and 34 in 2050. A 12-year-old today will be 16 in 2030 and 36 in 2050, while an 11-year-old will be about 35 in 2050 and 85 in 2100. The method is always the same — add the gap between the current year and the target year to your current age, then subtract one if your birthday hasn't happened yet in the target year.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            The Same Tool, Many Names
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Different people search for this exact tool using different phrasings — they all mean the same thing. This calculator answers all of them:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>future age calculator</em> / <em>future age calculation</em></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>how old will I be?</em> / <em>how old will I be in [year]?</em></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>age in 2030 / 2040 / 2050 calculator</em></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>age future</em> / <em>age of future</em> / <em>future age prediction</em></span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>retirement age calculator</em> (use your retirement date as target)</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" /><span><em>milestone birthday calculator</em> (50th, 100th, etc.)</span></li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <GitCompare className="h-6 w-6 text-primary" />
            FastTools vs Other Free Future Age Calculators
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            How this tool compares to the most popular free future-age calculators on the web today:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left text-green-600">FastTools</th>
                  <th className="p-3 text-left">EasyCalculation</th>
                  <th className="p-3 text-left">Calculator.net</th>
                  <th className="p-3 text-left">MyAgeCalculator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Years + months + days output</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Leap-year accurate</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">Total elapsed days/weeks/months</td><td className="p-3 text-green-600">✓</td><td className="p-3">partial</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">100% client-side (private)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">No signup, no ads in tool</td><td className="p-3 text-green-600">✓</td><td className="p-3">ads</td><td className="p-3">ads</td><td className="p-3">ads</td></tr>
                <tr><td className="p-3 font-semibold">Formula explained on page</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Future year up to</td><td className="p-3 text-green-600">unlimited</td><td className="p-3">3000</td><td className="p-3">unlimited</td><td className="p-3">3000</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Why People Look Up Their Future Age
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />Retirement &amp; pension planning</h4>
              <p className="text-sm text-muted-foreground">Most US retirees claim Social Security at 62–67. Knowing your age on a specific retirement date helps you align savings, healthcare, and pension timelines.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2"><Star className="h-4 w-4 text-primary" />Milestone birthdays</h4>
              <p className="text-sm text-muted-foreground">Pinpoint the exact date you turn 30, 40, 50, or 100. Useful for party planning, anniversaries, and bucket-list deadlines.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />Future events &amp; weddings</h4>
              <p className="text-sm text-muted-foreground">How old will your kids be at their high-school graduation? How old will you be at your silver anniversary? Concrete numbers help long-term planning feel real.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2"><Calculator className="h-4 w-4 text-primary" />School math homework</h4>
              <p className="text-sm text-muted-foreground">Future age calculation is a classic introductory date-arithmetic problem. Use the worked example above to check your work — or your kid's.</p>
            </div>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How is future age calculated?",
        answer: "Future age = target date − birth date, normalized into years, months, and days. Algorithmically: subtract birth year from target year, then if the target month/day is earlier in the calendar than your birth month/day, subtract one more year. Compute remaining months and days from there, using the actual length of each intervening month and accounting for every leap year between the two dates. Our calculator handles all of this automatically."
      },
      {
        question: "How old will I be in 2030?",
        answer: "If you're born in 2000 you'll be 30 in 2030. Born in 1995 → 35. Born in 1990 → 40. Born in 1985 → 45. Born in 1980 → 50. Born in 1975 → 55. Born in 1970 → 60. Enter your exact birth date above for the precise answer in years, months, and days on any specific date in 2030 — including whether you'll have had your birthday yet that year."
      },
      {
        question: "How old will I be in 2050?",
        answer: "Add 50 minus your current age, roughly. Precisely: 2050 − birth year, minus one if your birthday in 2050 hasn't happened yet by the target date. Someone born in 1990 will be 60 in 2050. Born in 2000 → 50. Born in 2010 → 40. Born in 2020 → 30. Use the calculator above for an exact answer including months and days."
      },
      {
        question: "If I am 11 now, how old will I be in 2050?",
        answer: "If you're 11 in 2026, you'll be about 35 in 2050 — or 34 if your birthday hasn't come around yet that year. The general method: subtract the current year from the target year (2050 − 2026 = 24) and add that to your current age (11 + 24 = 35). The same trick works for any year — the same 11-year-old would be about 85 in 2100. Enter your exact birth date above for an answer precise to the day."
      },
      {
        question: "How do I calculate my age on a future date?",
        answer: "Subtract your birth year from the future year, then subtract one more if the future date falls before your birthday in that year. For example, someone born in June 1995 will be 2040 − 1995 − 1 = 44 on March 1, 2040, because their June birthday won't have happened yet. The calculator above does this automatically and also gives the exact remaining months and days."
      },
      {
        question: "How accurate are future age calculations?",
        answer: "Mathematically exact. The tool uses calendar arithmetic that accounts for leap years (every year divisible by 4, except century years not divisible by 400), the varying lengths of months (28–31 days), and DST/timezone-independent date math. The only thing it can't account for is humans living past 122 years — the verified maximum human lifespan as of 2026."
      },
      {
        question: "What is a leap year and how does it affect future age?",
        answer: "A leap year has 366 days instead of 365 — February 29 is added. Leap years occur every 4 years, except century years (like 1900 or 2100) which must also be divisible by 400. So 2000 was a leap year, 2100 won't be, 2400 will be. The calculator counts every leap year between your birth date and target date so the day-count is correct, even across multiple centuries."
      },
      {
        question: "Can I use this for retirement planning?",
        answer: "Yes — that's one of the most common uses. Enter your birth date and the date you plan to retire to see your exact age on that date. Most US retirees claim Social Security between 62 and 67. Couples can use it to coordinate timing — for example, retiring together when the younger partner reaches 60 and the older one reaches 65."
      },
      {
        question: "How do I calculate my child's future age?",
        answer: "Enter your child's birth date as the birth date and the future event (high-school graduation, college start, wedding, etc.) as the target date. This is useful for planning college savings (529 plans), milestone birthdays, and long-term family events."
      },
      {
        question: "Can I calculate someone's past age (how old they were on a past date)?",
        answer: "Yes. The same math works both directions — enter any target date, past or future. This is useful for working out how old someone was at a historical event, on a specific photo's date, at a wedding, or at the time of a document."
      },
      {
        question: "Is this future age calculator free?",
        answer: "Yes, 100% free with no signup, no email required, no ads inside the calculator itself, and no usage limits. Calculate as many future ages as you want for as many people as you want."
      },
      {
        question: "Is my birth date stored anywhere?",
        answer: "No. The calculation runs entirely in your browser using JavaScript date arithmetic. Your birth date is never sent to our servers, never logged, and never stored. Close the tab and the data is gone."
      },
      {
        question: "Why does the result say my age in years, months, and days instead of just years?",
        answer: "Because for most planning purposes, the partial year matters. If you're saving for retirement at 65 and right now you'd be 64 years 11 months, your timeline is very different from 'almost 65'. Some target dates are also between birthdays, so a years-only answer would round in misleading ways."
      },
      {
        question: "How is this different from an age calculator?",
        answer: "An age calculator typically shows how old you are today. A future age calculator lets you pick any target date — today, tomorrow, your retirement date, the year 2100 — and shows your age on that date. It's age math with a freely chosen second date. We have a dedicated current-age tool too (linked under Related Tools)."
      },
      {
        question: "Can I calculate ages further than 100 years out?",
        answer: "Yes. There's no upper limit. You can enter target dates in 2200, 3000, 9999 — the math works the same. Useful for thought experiments (\"how old would I be at the next millennium?\") or science-fiction worldbuilding. The output is still exact to the day."
      },
      {
        question: "Can I share my future age result?",
        answer: "Yes. Copy the result text and paste it into messages, social media, planning docs, or a birthday card. Many users share future-age screenshots when announcing milestone birthdays or retirement dates."
      },
      {
        question: "Does it work for any time zone?",
        answer: "Yes — date arithmetic is timezone-independent (a date is a date in every time zone). The exact moment of your birthday will land at different wall-clock times around the world, but the calendar date your age changes is the same everywhere the Gregorian calendar is used."
      }
    ],

    relatedTools: [
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Love Calculator", href: "/calculator/love-calculator" },
      { name: "All Fun Tools", href: "/fun-tools" },
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function FutureAgePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<FutureAgePredictor />)} />
}
