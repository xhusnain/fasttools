import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ListConverter = dynamic(
  () => import("@/components/converters/list-converter").then((mod) => mod.ListConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "List Converter",
  description:
    "Convert between comma-separated and line-separated lists with options for trim, dedupe, sort, and wrapping.",
  metaTitle: "List Converter (Comma, Lines, Sort, Dedupe)",
  metaDescription:
    "Free list converter to transform comma-separated and line-separated text. Trim, remove duplicates, sort, and format lists instantly.",
  path: "/converters/list-converter",
  keywords: [
    "list converter",
    "comma separated list converter",
    "list to comma separated",
    "column to comma list",
    "dedupe list",
    "sort list online",
  ],

  header: {
    title: "List Converter",
    description:
      "Transform and clean list data for spreadsheets, code, and content workflows.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "List Converter", href: "/converters/list-converter" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "List formatting tool for separator conversion, sorting, deduplication, and wrapping.",
    alternateName: ["Text List Converter", "Comma List Converter"],
    featureList: [
      "List separator conversion",
      "Trim and deduplicate items",
      "Sort options",
      "Prefix/suffix wrapping",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Use this tool to clean and transform list text for spreadsheets, code snippets, SQL inputs, and content workflows. You can switch separators, remove duplicates, sort entries, and apply formatting rules.",

    howToSteps: [
      "Paste source list input in the left panel.",
      "Choose formatting options like trim, dedupe, sort, and separators.",
      "Review transformed output in the right panel.",
      "Copy the result for immediate use.",
    ],

    features: [
      "Convert between comma-separated and line-separated formats",
      "Trim whitespace from list items",
      "Remove duplicate entries",
      "Sort alphabetically, numerically, or reverse",
      "Add prefix/suffix to items or full list",
      "Keep or collapse line breaks",
    ],

    useCases: [
      "Preparing Excel or CSV columns",
      "Creating SQL IN lists",
      "Formatting arrays for code",
      "Cleaning copied data before import",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          List data often arrives in inconsistent formats. This converter helps
          standardize inputs so they are easier to reuse across tools, docs, and
          development workflows.
        </p>
      </div>
    ),

    proTip:
      "Enable dedupe and trim before sorting for the cleanest final list output.",

    faqs: [
      {
        question: "Can I convert comma-separated text into lines?",
        answer:
          "Yes. Paste your input and set output behavior to keep line breaks.",
      },
      {
        question: "Can I convert a column list into comma-separated values?",
        answer:
          "Yes. Paste line items and set separator to comma.",
      },
      {
        question: "Does the tool remove duplicates?",
        answer:
          "Yes. Toggle the remove-duplicates option to keep unique entries only.",
      },
      {
        question: "Can I add quotes around each item?",
        answer:
          "Yes. Use item prefix and suffix settings to wrap each entry.",
      },
      {
        question: "Is this list converter free?",
        answer: "Yes. It is free and available without signup.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ListConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <ListConverter />
        </div>
      )}
    />
  )
}
