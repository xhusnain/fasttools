import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const AnniversaryCalculator = dynamic(
  () => import("@/components/calculators/anniversary-calculator").then((mod) => mod.AnniversaryCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Monthsary Calculator",
  description:
    "Calculate how many months you have been together, find your exact monthsary date each month, and track monthly relationship milestones.",
  metaTitle: "Monthsary Calculator — How to Know Your Monthsary Date (Free)",
  metaDescription:
    "Your monthsary is the same day-of-month you got together, every month. Enter your start date to count total months together, see your next monthsary date, and track milestones — free.",
  path: "/fun-tools/monthsary-calculator",

  header: {
    title: "Monthsary Calculator",
    description:
      "Count how many months you have been together, find your next monthsary date, and track monthly milestones from your start date.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Anniversary Calculator", href: "/fun-tools/anniversary-calculator" },
    { label: "Monthsary Calculator", href: "/fun-tools/monthsary-calculator" },
  ],

  schemaOptions: {
    applicationCategory: "LifestyleApplication",
    description:
      "Relationship monthsary calculator for total months together, next monthly anniversary date, days remaining, and milestone tracking.",
    alternateName: [
      "Monthly Anniversary Calculator",
      "Months Together Calculator",
      "How Many Months Together Calculator",
      "Monthsary Date Finder",
    ],
    featureList: [
      "Total months together calculation",
      "Next monthsary date",
      "Days remaining until next monthsary",
      "Years, months, days relationship duration",
      "Dating, wedding, friendship, and work milestones",
      "Browser-based private calculation",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A monthsary is a monthly anniversary — the same day-of-month as your relationship start date, celebrated each month. A Monthsary Calculator counts how many full months have passed since that date and shows your next monthsary.",
    quickAnswer:
      "Your monthsary date is the same day of the month you got together: started dating on March 14, your monthsary is the 14th of every month. Enter your start date above to count your total months together, see the exact next monthsary date, and track milestones like the 6th, 12th, and 1000-day marks.",
    keyTakeaways: [
      "Monthsary = the same day-of-month as your start date, every month (started the 14th → every 14th)",
      "If your start day is the 29th–31st, celebrate on the last day of shorter months",
      "The 12th monthsary is your first anniversary",
      "Counts total months, exact duration, and days until the next monthsary",
      "All calculation happens in your browser — no personal date is stored",
    ],
    overview:
      "A monthsary is a monthly anniversary, celebrated most in the Philippines and across South and Southeast Asia, where month-by-month milestones are a big part of dating culture. This free monthsary calculator turns your start date into a clear timeline: total months together, exact duration in years, months, and days, your next monthsary date, and the milestones ahead. It's useful for early-stage dating, long-distance relationships, wedding month counts, and captions where you want the exact month count — \"happy 8th monthsary\" needs the right number.",

    howToSteps: [
      "Choose the date your relationship, friendship, wedding, or milestone started.",
      "Run the calculator to see the total months and exact duration.",
      "Check the next monthsary date and how many days remain.",
      "Use the milestone results to plan gifts, captions, reminders, or celebrations.",
    ],

    features: [
      "Total months together calculation",
      "Next monthsary countdown",
      "Exact years, months, days, hours, minutes, and seconds",
      "Milestone tracking for 1 month, 6 months, 12 months, 1000 days, and more",
      "Works on mobile and desktop",
      "No signup and no personal data storage",
    ],

    useCases: [
      "Couples tracking monthly relationship milestones",
      "Planning monthsary gifts, dinner dates, or social captions",
      "Checking how many months have passed since a wedding date",
      "Friendship and work anniversary month counting",
      "Finding the next monthly milestone after a start date",
    ],

    aboutTool: (
      <div className="space-y-8 text-muted-foreground">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How to Know Your Monthsary Date</h2>
          <p>
            Your monthsary date is simply <strong>the same day of the month as the day you got together</strong>.
            If you became official on June 9, your monthsary is the 9th of every month — July 9 is your
            first monthsary, August 9 your second, and so on. It is <em>not</em> every 30 days: month
            lengths differ, but the monthsary day stays fixed on the calendar.
          </p>
          <p>
            Not sure what your start date was? The usual sources, in order of reliability: the day you
            (or your partner) said yes / made it official — check your chat history for the exact date;
            the timestamp of your first couple photo or the relationship status change on social media;
            or, for arranged and long-distance relationships, the first call or first meeting. Pick one,
            agree on it together, and enter it above — the calculator gives you every monthsary date
            from then on.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Got together on</th>
                  <th className="p-3 text-left">Your monthsary is</th>
                  <th className="p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">1st–28th</td><td className="p-3">Same day every month</td><td className="p-3">Started Jan 15 → monthsary every 15th</td></tr>
                <tr><td className="p-3 font-semibold">29th</td><td className="p-3">29th; Feb 28 in non-leap years</td><td className="p-3">Started Aug 29 → Feb 28 (or 29)</td></tr>
                <tr><td className="p-3 font-semibold">30th</td><td className="p-3">30th; last day of February</td><td className="p-3">Started Nov 30 → Feb 28/29</td></tr>
                <tr><td className="p-3 font-semibold">31st</td><td className="p-3">31st; last day of shorter months</td><td className="p-3">Started Jan 31 → Apr 30, Feb 28…</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Monthsary vs Anniversary</h2>
          <p>
            An <strong>anniversary</strong> marks a yearly milestone; a <strong>monthsary</strong> marks
            the same date each month. If a relationship started on March 14, the first monthsary is
            April 14, the second is May 14, and the twelfth monthsary is the first full anniversary.
            The word is a portmanteau of <em>month</em> and <em>anniversary</em> — not in most
            dictionaries, but firmly established in Philippine English and widely used across South and
            Southeast Asia. For yearly milestones (silver, golden, gift themes), use the{" "}
            <a href="/fun-tools/anniversary-calculator" className="text-primary hover:underline">
              Anniversary Calculator
            </a>{" "}
            — this page is the month-by-month one.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Monthsary Milestones Worth Celebrating</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Milestone</th>
                  <th className="p-3 text-left">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">1st monthsary</td><td className="p-3">The classic first celebration — handwritten note, home-cooked dinner</td></tr>
                <tr><td className="p-3 font-semibold">3rd monthsary</td><td className="p-3">First &quot;serious&quot; marker — many couples make it a proper date night</td></tr>
                <tr><td className="p-3 font-semibold">6th monthsary</td><td className="p-3">Half-year — often the meet-the-family milestone</td></tr>
                <tr><td className="p-3 font-semibold">100 days</td><td className="p-3">Big in Korean and East Asian dating culture (photoshoots, matching gifts) — ≈ 3⅓ months</td></tr>
                <tr><td className="p-3 font-semibold">12th monthsary</td><td className="p-3">Your first anniversary — the monthsary count &quot;graduates&quot;</td></tr>
                <tr><td className="p-3 font-semibold">18th &amp; 24th</td><td className="p-3">Year-and-a-half and two years — commonly captioned in months (&quot;18 months with you&quot;)</td></tr>
                <tr><td className="p-3 font-semibold">1000 days</td><td className="p-3">≈ 32.9 months — the &quot;deep love&quot; milestone; the calculator shows the exact date</td></tr>
              </tbody>
            </GTable>
          </div>
          <p>
            The calculator lists your exact dates for each of these from your start date — no manual
            counting across different month lengths.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Getting the Caption Number Right</h2>
          <p>
            The most common monthsary mistake is an off-by-one in the caption. The rule: you{" "}
            <strong>complete</strong> a month on the monthly date, so on July 9 a couple who started
            June 9 celebrates their <em>1st</em> monthsary (one full month), not their &quot;first day of
            month two.&quot; For longer relationships the total-months figure reads better than fractions
            of years: 19 months, not &quot;1.58 years.&quot; The calculator&apos;s total-months output is
            exactly this caption number.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Set a monthly phone reminder on your monthsary day and let the calculator settle the number. For captions, use total months while under two years (\"14 months ♥\") and switch to years-months after (\"2 years, 3 months\").",

    faqs: [
      {
        question: "How do I know my monthsary date?",
        answer:
          "It's the same day of the month as your start date: became a couple on the 14th, your monthsary is the 14th of every month. If you're unsure of the start date, check your chat history, first couple photo, or the day you made it official — then enter it in the calculator to get every monthsary date and your total months together.",
      },
      {
        question: "What does monthsary mean?",
        answer:
          "Monthsary means a monthly anniversary — a blend of 'month' and 'anniversary'. It's most widely used in the Philippines and across South and Southeast Asia for relationship milestones celebrated every month on the start date's day.",
      },
      {
        question: "Is a monthsary every 30 days or the same date each month?",
        answer:
          "The same date each month, not every 30 days. Started on January 15? Your monthsaries are February 15, March 15, and so on — the gap is sometimes 28 days, sometimes 31, but the date stays fixed.",
      },
      {
        question: "What's our monthsary if we got together on the 31st?",
        answer:
          "In months without a 31st, celebrate on the month's last day: April 30, June 30, and February 28 (29 in leap years). The calculator normalizes these shorter months automatically so your total-month count stays right.",
      },
      {
        question: "Is a 12-month monthsary the same as a 1-year anniversary?",
        answer:
          "Yes. The twelfth monthly milestone is the first yearly anniversary. Many couples keep counting monthsaries after that; others switch to yearly anniversaries — the calculator tracks both counts.",
      },
      {
        question: "Can I use this for work or friendship milestones?",
        answer:
          "Yes. The calculator works with any start date, so it can count friendship months, work months, project milestones, or relationship months.",
      },
      {
        question: "Does the calculator store my relationship date?",
        answer:
          "No. The calculation runs locally in your browser and does not store or upload your date.",
      },
    ],

    relatedTools: [
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary-calculator" },
      { name: "Love Calculator", href: "/calculator/love-calculator" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Future Age Calculator", href: "/fun-tools/how-old-will-i-be" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration Calculator", href: "/calculator/time-duration" },
      { name: "All Fun Tools", href: "/fun-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MonthsaryCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AnniversaryCalculator />)} />
}
