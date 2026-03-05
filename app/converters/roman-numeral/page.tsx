import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

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
    "Convert numbers and dates to Roman numerals and decode Roman numerals back to numbers.",
  metaTitle: "Roman Numeral Converter (Numbers and Dates)",
  metaDescription:
    "Free Roman numeral converter for number-to-Roman, Roman-to-number, and date conversion workflows.",
  path: "/converters/roman-numeral",
  keywords: [
    "roman numeral converter",
    "number to roman numeral",
    "roman to number",
    "date to roman numeral",
    "roman numeral chart",
    "roman numeral date converter",
  ],

  header: {
    title: "Roman Numeral Converter",
    description:
      "Convert numbers and calendar dates to Roman numerals with instant reverse conversion.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Roman Numeral Converter", href: "/converters/roman-numeral" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Roman numeral conversion for numbers and date formats.",
    alternateName: ["Number to Roman Converter", "Roman to Number Converter"],
    featureList: [
      "Number to Roman conversion",
      "Roman to number conversion",
      "Date to Roman conversion",
      "Copy-ready output",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Roman Numeral Converter is a free tool that converts numbers and dates to Roman numerals and decodes Roman numerals back to standard numbers.",
    quickAnswer:
      "Enter a number (1–3999) to see its Roman numeral equivalent, or type a Roman numeral to convert it back to a number. Date conversion mode transforms full dates into Roman numeral format.",
    keyTakeaways: [
      "Converts numbers 1–3999 to Roman numerals and back",
      "Seven base symbols: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)",
      "Subtractive notation: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900",
      "Date conversion mode for years, months, and full dates",
      "Commonly used in clocks, outlines, movie titles, and historical dates",
    ],
    overview:
      "Use this tool to convert integers and dates into Roman numerals and decode Roman input back to numbers. It is useful for dates, design references, tattoos, educational work, and historical notation.",

    howToSteps: [
      "Enter a number to get its Roman numeral output.",
      "Enter Roman numerals to decode into numeric form.",
      "Use the date controls to format birthdays or events in Roman notation.",
      "Copy output for documentation, design, or print use.",
    ],

    features: [
      "Two-way number and Roman conversion",
      "Date-to-Roman formatter",
      "Input validation for Roman symbols",
      "Quick examples and copy actions",
      "Browser-based conversion",
    ],

    useCases: [
      "Converting years for design and branding",
      "Formatting memorable dates",
      "Educational practice",
      "Verifying Roman numeral strings",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Roman numerals are still used in publishing, clocks, events, and
          stylistic date representation. This converter simplifies both forward
          and reverse conversion so you can validate values quickly.
        </p>
      </div>
    ),

    proTip:
      "For date formatting, keep separators consistent so Roman date strings remain readable.",

    faqs: [
      {
        question: "Can I convert a date into Roman numerals?",
        answer:
          "Yes. Use the date section to generate Roman-formatted month, day, and year values.",
      },
      {
        question: "Can I decode Roman numerals back to numbers?",
        answer:
          "Yes. Paste Roman input and the tool converts it into numeric output.",
      },
      {
        question: "Does the tool validate Roman input?",
        answer:
          "Yes. Invalid Roman patterns are flagged so you can correct input.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is free and does not require signup.",
      },
      {
        question: "Can I use this for educational purposes?",
        answer: "Yes. It is suitable for learning and quick verification tasks.",
      },
    ],

    relatedTools: [
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "List Converter", href: "/converters/list-converter" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RomanNumeralConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<RomanNumeralConverter />)} />
}
