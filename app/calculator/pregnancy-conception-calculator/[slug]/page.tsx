import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { conceptionVariants } from "../conception-variants"

const PregnancyConceptionCalculator = dynamic(
  () => import("@/components/health/pregnancy-conception-calculator"),
  { loading: () => <ToolLoader /> }
)

// Non-leap reference pair (due 2027 → conception 2026) so the computed table
// matches the month windows written in conception-variants.ts. Leap years shift
// dates crossing Feb 29 by one day; the calculator handles that exactly.
const REFERENCE_DUE_YEAR = 2027
const DAY_MS = 24 * 60 * 60 * 1000
const CONCEPTION_OFFSET_DAYS = 266

const monthDay = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric" })

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(conceptionVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = conceptionVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    keywords: variant.keywords,
    alternates: {
      canonical: `/calculator/pregnancy-conception-calculator/${slug}`,
    },
  }
}

export default async function ConceptionVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = conceptionVariants[slug]

  if (!variant) {
    notFound()
  }

  const { monthName, monthIndex } = variant

  const lastDay = new Date(REFERENCE_DUE_YEAR, monthIndex + 1, 0).getDate()
  const dueDays = [1, 5, 10, 15, 20, 25, lastDay].filter(
    (d, i, arr) => d <= lastDay && arr.indexOf(d) === i
  )
  const tableRows = dueDays.map((day) => {
    const due = new Date(REFERENCE_DUE_YEAR, monthIndex, day)
    const conception = new Date(due.getTime() - CONCEPTION_OFFSET_DAYS * DAY_MS)
    const windowStart = new Date(conception.getTime() - 5 * DAY_MS)
    const windowEnd = new Date(conception.getTime() + 5 * DAY_MS)
    return {
      dueLabel: `${monthName} ${day}`,
      conceptionLabel: monthDay(conception),
      windowLabel: `${monthDay(windowStart)} – ${monthDay(windowEnd)}`,
      previousYear: conception.getFullYear() < REFERENCE_DUE_YEAR,
    }
  })

  const siblingLinks = Object.values(conceptionVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      name: `Due in ${item.monthName}`,
      href: `/calculator/pregnancy-conception-calculator/${item.slug}`,
    }))

  const relatedTools = [
    {
      name: "Conception Date Calculator (any due date)",
      href: "/calculator/pregnancy-conception-calculator",
    },
    ...siblingLinks,
    { name: "Ovulation Calculator", href: "/calculator/ovulation-calculator" },
    { name: "Pregnancy Calculator", href: "/calculator/pregnancy-calculator" },
    { name: "Date Difference Calculator", href: "/calculator/date-difference" },
  ]

  const toolConfig = createToolConfig({
    toolName: `When Did I Conceive If Due in ${monthName}`,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/calculator/pregnancy-conception-calculator/${slug}`,

    schemaOptions: {
      applicationCategory: "HealthApplication",
      description: variant.quickAnswer,
      alternateName: variant.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: `Due in ${monthName} — When Did I Conceive?`,
      description: variant.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
      color: "pink",
    },

    breadcrumbs: [
      { label: "Calculator", href: "/calculator" },
      {
        label: "Pregnancy Conception Calculator",
        href: "/calculator/pregnancy-conception-calculator",
      },
      {
        label: `Due in ${monthName}`,
        href: `/calculator/pregnancy-conception-calculator/${slug}`,
      },
    ],

    content: {
      definition: `If your due date is in ${monthName}, your likely conception date is your due date minus 266 days (38 weeks) — ${variant.conceptionWindow} — with a ±5-day fertile window on either side.`,
      quickAnswer: variant.quickAnswer,
      keyTakeaways: [
        `${monthName} due date → conception ${variant.conceptionWindow}`,
        "Formula: conception date ≈ due date − 266 days (38 weeks)",
        "The realistic answer is a ±5-day window — sperm survive up to 5 days before ovulation",
        "Gestational age (from LMP) runs about 2 weeks ahead of time since conception",
        "First-trimester ultrasound is the most accurate dating method (±3–5 days)",
      ],
      overview: variant.overviewText,

      howToSteps: [
        "Find your exact due date row in the table below for the likely conception date.",
        "Or enter your due date in the calculator above for the exact, leap-year-aware answer.",
        "Treat the result as a window: conception happens at ovulation, up to 5 days after intercourse.",
        "If an ultrasound has revised your due date, use the revised date — it's the more accurate anchor.",
      ],

      aboutTool: (
        <div className="space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Conception Date for Every {monthName} Due Date
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Computed as due date − 266 days. The window column adds the ±5-day fertile window
              around the likely ovulation/conception day:
            </p>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">Due date</th>
                    <th className="p-3 text-left">Likely conception</th>
                    <th className="p-3 text-left">Fertile window</th>
                    <th className="p-3 text-left">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {tableRows.map((row) => (
                    <tr key={row.dueLabel}>
                      <td className="p-3 font-semibold">{row.dueLabel}</td>
                      <td className="p-3">{row.conceptionLabel}</td>
                      <td className="p-3">{row.windowLabel}</td>
                      <td className="p-3 text-muted-foreground">
                        {row.previousYear ? "previous year" : "same year"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Dates use a non-leap reference year and can shift by one day when the 266-day span
              crosses February 29 — the calculator above computes your exact dates.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{variant.aboutHeading}</h2>
            <p className="text-base text-muted-foreground leading-relaxed">{variant.aboutBody}</p>
          </article>
        </div>
      ),

      proTip:
        "Your due date is the anchor for all conception math — if a first-trimester ultrasound revised it, always use the revised date. Ultrasound dating is accurate to ±3–5 days; the original LMP-based date can be off by 1–2 weeks with irregular cycles.",

      faqs: [
        ...variant.faqOverrides,
        {
          question: "Can this tell me the exact day I conceived?",
          answer:
            "No method can. Conception happens at ovulation, which can follow intercourse by up to 5 days — so even a perfectly dated pregnancy has a several-day conception window. The date shown is the most likely day; the window around it is the honest answer.",
        },
        {
          question: "Does this prove who the father is?",
          answer:
            "No. Conception windows are estimates and can overlap multiple possible dates. Paternity can only be established by DNA testing — prenatal or after birth. Use this tool for dating the pregnancy, not for legal or paternity conclusions.",
        },
      ],

      relatedTools,
    },
  })

  return (
    <ToolPageLayout {...toolConfig.getLayoutProps(<PregnancyConceptionCalculator />)} />
  )
}
