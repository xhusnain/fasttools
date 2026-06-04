import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AnniversaryCalculator = dynamic(
  () => import("@/components/calculators/anniversary-calculator").then((mod) => mod.AnniversaryCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Monthsary Calculator",
  description:
    "Calculate how many months you have been together and find your next monthly relationship milestone.",
  metaTitle: "Monthsary Calculator - Count Relationship Months Free",
  metaDescription:
    "Free monthsary calculator. Enter your relationship start date to count total months together, next monthsary date, days remaining, and relationship milestones.",
  path: "/fun-tools/monthsary-calculator",

  header: {
    title: "Monthsary Calculator",
    description:
      "Count how many months you have been together, find your next monthsary date, and track relationship milestones from your start date.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
    { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
    { label: "Monthsary Calculator", href: "/fun-tools/monthsary-calculator" },
  ],

  schemaOptions: {
    applicationCategory: "LifestyleApplication",
    description:
      "Relationship monthsary calculator for total months together, next monthly anniversary, days remaining, and milestone tracking.",
    alternateName: [
      "Monthly Anniversary Calculator",
      "Months Together Calculator",
      "Relationship Months Calculator",
      "How Many Months Together Calculator",
      "Monthsary Counter",
      "Dating Months Calculator",
      "Couple Months Tracker",
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
      "A Monthsary Calculator is a free relationship calculator that counts how many full months have passed since a start date and shows the next monthly anniversary.",
    quickAnswer:
      "Enter the date your relationship started to calculate your total months together, exact duration, and next monthsary date. The calculator works for dating, wedding, friendship, and work milestones.",
    keyTakeaways: [
      "Counts total full months from your start date",
      "Shows years, months, days, and days until the next monthly milestone",
      "Works for dating monthsaries, wedding monthsaries, friendships, and work anniversaries",
      "Handles different month lengths and leap years automatically",
      "All calculation happens in your browser, so no personal date is stored",
    ],
    overview:
      "A monthsary is a monthly anniversary, most often used by couples who celebrate the date their relationship started each month. This free monthsary calculator turns a start date into a clear relationship timeline: total months together, exact duration in years, months, and days, next monthsary date, and upcoming milestones. It is useful for early-stage dating, long-distance relationships, wedding month counts, friendship milestones, and social media captions where you want the exact month count.",

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
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Monthsary vs Anniversary</h3>
          <p>
            An anniversary usually marks a yearly milestone. A monthsary marks the same date each month. For example, if a relationship started on March 14, the first monthsary is April 14, the second is May 14, and the twelfth monthsary is the first full anniversary.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What To Do When A Month Has Fewer Days</h3>
          <p>
            Some start dates do not exist in every month, such as the 29th, 30th, or 31st. In that case, most people celebrate on the last day of the shorter month. The calculator normalizes calendar differences so the duration remains accurate.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Good Milestones To Track</h3>
          <p>
            Popular monthly milestones include 1 month, 3 months, 6 months, 9 months, 12 months, 18 months, 24 months, and 1000 days. For longer relationships, use the main anniversary calculator to track yearly milestones like silver and golden anniversaries.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For captions, use the total-month result for short relationships and the years-months-days result for longer ones. For example: 18 months together, or 1 year, 6 months, and 4 days.",

    faqs: [
      {
        question: "What does monthsary mean?",
        answer:
          "Monthsary means a monthly anniversary. It is commonly used for relationships, dating milestones, friendships, and other events people celebrate every month after the start date.",
      },
      {
        question: "How do I calculate my monthsary?",
        answer:
          "Count the number of full months between your start date and today. This calculator does that automatically and also shows your next monthly milestone date.",
      },
      {
        question: "Is a 12-month monthsary the same as a 1-year anniversary?",
        answer:
          "Yes. The twelfth monthly milestone is also the first yearly anniversary. After that, you can keep tracking months or switch to yearly anniversaries.",
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
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Future Age Predictor", href: "/fun-tools/future-age" },
      { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
      { name: "Love Calculator", href: "/calculator/love-calculator" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
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
