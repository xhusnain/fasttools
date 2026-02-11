import { Metadata } from "next"
import dynamic from "next/dynamic"
import { arabicToRoman } from "@/lib/roman-numeral-converter"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { BookOpen, Code, Shield } from "lucide-react"

const RomanNumeralConverter = dynamic(
  () =>
    import("@/components/converters/roman-numeral-converter").then(
      (mod) => mod.RomanNumeralConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Roman Numeral Converter",
  description:
    "Convert numbers, dates, and birthdays to Roman numerals. Number to Roman, date of birth for tattoos. Supports 1 to 3,999,999.",
  metaTitle: "Roman Numeral Converter - Dates, Birthdays & Up to 3.9M",
  metaDescription:
    "Convert numbers to Roman numerals (1 to 3,999,999) and dates for tattoos. Includes Roman numerals 1-100 chart, vinculum notation for large numbers. Free converter.",
  path: "/converters/roman-numeral",
  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Convert numbers, dates, and birthdays to Roman numerals. Number to Roman, date of birth for tattoos. Roman numerals 1-100. Supports vinculum up to 3,999,999.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Roman numeral converter for dates and birthdays",
      "Number to Roman: 1 to 3,999,999 with vinculum",
      "Roman numerals 1-100 reference chart",
      "Tattoo date formatter (e.g., XII·XXV·MCMXC)",
      "Bidirectional conversion (Roman to number)",
      "100% free, no signup required",
    ],
  },
  header: {
    title: "Roman Numeral Converter",
    description:
      "Convert numbers to Roman numerals (I, V, X, L, C, D, M) and dates for tattoos. Supports 1 to 3,999,999 with vinculum notation.",
    titleSize: "medium",
    descriptionSize: "small",
  },
  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Roman Numeral Converter", href: "/converters/roman-numeral" },
  ],
  content: {
    overview:
      "Convert numbers and dates to Roman numerals online. Supports standard Roman numerals (I, V, X, L, C, D, M) from 1 to 3,999, plus vinculum notation for numbers up to 3,999,999. Perfect for tattoo dates, birthdays, copyright years, and learning. Most converters stop at 3,999; ours handles millions.",

    howToSteps: [
      "Date to Roman: Pick month, day, year and get Roman numerals for tattoos or jewelry (e.g. XII · XXV · MCMXC for 12/25/1990).",
      "Number to Roman: Enter a number from 1 to 3,999,999. The converter shows the Roman form.",
      "Roman to number or date: Enter Roman numerals. For dates use format like XII · XXV · MCMXC.",
      "Copy the result with one click.",
    ],

    features: [
      "Date & birthday to Roman numerals (tattoo-friendly)",
      "Number to Roman: 1–3,999,999",
      "Roman numerals 1–100 reference table",
      "Vinculum notation for numbers over 3,999",
      "Bidirectional conversion",
      "100% client-side, no signup",
    ],

    useCases: [
      "Tattoos: Convert date of birth to Roman numerals (e.g. XII · XXV · MCMXC).",
      "Birthdays: Turn birthdays into Roman format for jewelry or gifts.",
      "Education: Learn Roman numerals and vinculum notation.",
      "Copyright years: Convert years like 2025 to Roman (MMXXV).",
      "Quick lookups: 5 in Roman = V, 11 = XI, 25 = XXV.",
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">What are Roman numerals 1-100?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Roman numerals 1-10: I, II, III, IV, V, VI, VII, VIII, IX, X. Common values: 1=I, 5=V, 10=X, 11=XI, 25=XXV, 50=L, 100=C. See the full chart below.
          </p>
        </article>
        <article className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">How to convert date to Roman numerals for tattoo?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Enter your birthday (month/day/year) in the date converter above. Example: 12/25/1990 becomes XII·XXV·MCMXC. Copy and share with your tattoo artist.
          </p>
        </article>
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2" id="roman-numerals-1-100-chart">
            <BookOpen className="h-6 w-6 text-primary" />
            Roman Numerals 1-100 Chart
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Standard Roman numerals use I (1), V (5), X (10), L (50), C (100), D (500), M (1000)
            and only go up to MMMCMXCIX (3,999). Vinculum notation adds a horizontal bar over
            numerals to multiply by 1,000: Ī=1,000, V̄=5,000, X̄=10,000, L̄=50,000, C̄=100,000,
            D̄=500,000, M̄=1,000,000. This extends the range to 3,999,999.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Arabic</th>
                  <th className="p-3 text-left">Roman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  [0, "— (no zero)"],
                  ...Array.from({ length: 100 }, (_, i) => i + 1).map((n) => [n, arabicToRoman(n)] as const),
                  [500, "D"],
                  [1000, "M"],
                  [1990, "MCMXC"],
                  [2000, "MM"],
                  [2024, "MMXXIV"],
                  [2025, "MMXXV"],
                  [3999, "MMMCMXCIX"],
                  [4000, "ĪV̄"],
                  [5000, "V̄"],
                  [10000, "X̄"],
                  [1000000, "M̄"],
                  [4200000, "M̄M̄M̄M̄C̄C̄"],
                ].map(([arabic, roman]) => (
                  <tr key={arabic as number}>
                    <td className="p-3 font-mono">{arabic}</td>
                    <td className="p-3 font-mono">{roman}</td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All conversions run in your browser. No data is sent to servers.
          </p>
        </article>
      </div>
    ),

    proTip:
      "For date tattoos: pick your birthday in the Date section and copy the result (e.g. XII · XXV · MCMXC). For large numbers, type (V) for 5,000 or (X) for 10,000.",

    faqs: [
      {
        question: "What is 5 in Roman numerals?",
        answer:
          "5 in Roman numerals is V. Other common values: 1=I, 4=IV, 6=VI, 10=X.",
      },
      {
        question: "What is 11 in Roman numerals?",
        answer:
          "11 in Roman numerals is XI (10+1). Related: 10=X, 12=XII, 15=XV, 20=XX.",
      },
      {
        question: "What is 25 in Roman numerals?",
        answer:
          "25 in Roman numerals is XXV (10+10+5). Related: 20=XX, 24=XXIV, 30=XXX, 50=L.",
      },
      {
        question: "How to convert birthday to Roman numerals for tattoo?",
        answer:
          "Use the Date to Roman converter above. Select your birth month, day, and year. Common format: XII·XXV·MCMXC (December 25, 1990). Copy and show your tattoo artist.",
      },
      {
        question: "What is 0 in Roman numerals?",
        answer:
          "There is no zero in Roman numerals. The Roman number system had no symbol for zero and started at 1 (I).",
      },
      {
        question: "What are Roman numerals 1-100?",
        answer:
          "Roman numerals 1-10: I, II, III, IV, V, VI, VII, VIII, IX, X. 11=XI, 25=XXV, 50=L, 100=C. See the full 1-100 chart on this page.",
      },
      {
        question: "What is the maximum number for Roman numerals?",
        answer:
          "Standard Roman numerals (I, V, X, L, C, D, M) go up to 3,999. With vinculum notation, this converter supports up to 3,999,999.",
      },
      {
        question: "What is vinculum notation?",
        answer:
          "A vinculum is a horizontal bar over a Roman numeral that multiplies its value by 1,000. V̄ = 5,000, X̄ = 10,000, M̄ = 1,000,000.",
      },
      {
        question: "Can I convert my name to Roman letters?",
        answer:
          "Roman numerals represent numbers only, not letters. There is no standard way to write names in Roman numerals. For number-to-Roman conversion (e.g. birth year, age), use this converter.",
      },
      {
        question: "Can I use parentheses instead of vinculum?",
        answer:
          "Yes. (V) means 5,000, (X) means 10,000, (M) means 1,000,000. The converter accepts both vinculum and parentheses for input.",
      },
    ],

    relatedTools: [
      { name: "Roman Numerals 1-100 Chart", href: "/converters/roman-numeral#roman-numerals-1-100-chart" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Length Converter", href: "/converters/length" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RomanNumeralConverterPage() {
  return (
    <ToolPageLayout {...toolConfig.getLayoutProps(<RomanNumeralConverter />)} />
  )
}
