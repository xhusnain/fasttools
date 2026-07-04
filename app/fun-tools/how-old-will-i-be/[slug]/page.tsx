import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { ageVariants } from "../age-variants"

const FutureAgePredictor = dynamic(
  () => import("@/components/calculators/future-age-predictor").then((mod) => mod.FutureAgePredictor),
  { loading: () => <ToolLoader /> }
)

// Pinned so tables and the "if I am X now" prose in age-variants.ts agree.
// Bump once a year (the variants' worked examples reference the same year).
const CURRENT_YEAR = 2026

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(ageVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = ageVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    keywords: variant.keywords,
    alternates: {
      canonical: `/fun-tools/how-old-will-i-be/${slug}`,
    },
  }
}

export default async function FutureAgeVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = ageVariants[slug]

  if (!variant) {
    notFound()
  }

  const { targetYear } = variant
  const gap = targetYear - CURRENT_YEAR

  // "If you are X now" rows — the query shape GSC shows ("if i am 11 now…").
  const currentAges = [5, 8, 10, 11, 12, 13, 15, 17, 20, 25, 30, 40, 50]
  // "Born in year" rows.
  const birthYears = [1970, 1980, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025]

  const siblingVariantLinks = Object.values(ageVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/fun-tools/how-old-will-i-be/${item.slug}` }))

  const relatedTools = [
    { name: "Future Age Calculator (any year)", href: "/fun-tools/how-old-will-i-be" },
    ...siblingVariantLinks,
    { name: "Age Calculator", href: "/calculator/age-calculator" },
    { name: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
    { name: "Anniversary Calculator", href: "/fun-tools/anniversary-calculator" },
    { name: "Date Difference Calculator", href: "/calculator/date-difference" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/fun-tools/how-old-will-i-be/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: variant.definition,
      alternateName: variant.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: variant.headerTitle,
      description: variant.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
    },

    breadcrumbs: [
      { label: "Fun Tools", href: "/fun-tools" },
      { label: "Future Age Calculator", href: "/fun-tools/how-old-will-i-be" },
      { label: variant.headerTitle, href: `/fun-tools/how-old-will-i-be/${slug}` },
    ],

    content: {
      definition: variant.definition,
      quickAnswer: variant.quickAnswer,
      keyTakeaways: variant.keyTakeaways,
      overview: variant.overviewText,

      howToSteps: [
        `Enter your birth date — or anyone else's — in the calculator above.`,
        `The target year is already set to ${targetYear}; adjust it if you want a different year.`,
        `Read your exact age in ${targetYear} in years, months, and days.`,
        `For a specific date in ${targetYear}, remember ages change on birthdays — the tool accounts for it.`,
      ],

      aboutTool: (
        <div className="space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              If You Are … Now, Your Age in {targetYear}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {targetYear} is {gap} years away from {CURRENT_YEAR}, so add {gap} to your current age
              (you&apos;ll be one year younger on {targetYear} dates before your birthday):
            </p>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">Age now ({CURRENT_YEAR})</th>
                    <th className="p-3 text-left">Age in {targetYear}</th>
                    <th className="p-3 text-left">Born around</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {currentAges.map((age) => (
                    <tr key={age}>
                      <td className="p-3 font-semibold">{age}</td>
                      <td className="p-3">{age + gap}</td>
                      <td className="p-3">{CURRENT_YEAR - age}</td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Age in {targetYear} by Birth Year
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              The age shown is reached on your birthday in {targetYear} — before that day you are one
              year younger:
            </p>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">Born in</th>
                    <th className="p-3 text-left">Age in {targetYear}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {birthYears.map((year) => (
                    <tr key={year}>
                      <td className="p-3 font-semibold">{year}</td>
                      <td className="p-3">{targetYear - year}</td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
          </article>

          {variant.aboutSections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      ),

      proTip: variant.proTip,

      faqs: [
        ...variant.faqOverrides,
        {
          question: "How do I get the exact answer instead of a rough one?",
          answer:
            "Enter your full birth date in the calculator above. Year subtraction only gets you within a year; the calculator accounts for your birthday, month lengths, and leap years, and returns your age in years, months, and days on any exact date.",
        },
        {
          question: "Is my birth date stored anywhere?",
          answer:
            "No. The calculation runs entirely in your browser. Your birth date is never sent to a server, never logged, and never stored.",
        },
      ],

      relatedTools,
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(<FutureAgePredictor defaultTargetYear={String(targetYear)} />)}
    />
  )
}
