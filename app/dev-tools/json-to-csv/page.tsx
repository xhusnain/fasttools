import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const JSONToCSV = dynamic(
  () => import("@/components/dev-tools/json-to-csv").then((mod) => mod.JSONToCSV),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON to CSV Converter",
  description:
    "Convert JSON arrays and object data to CSV format for spreadsheet and reporting workflows.",
  metaTitle: "JSON to CSV Converter (Online)",
  metaDescription:
    "Convert JSON to CSV quickly for Excel, Sheets, and data pipelines. Useful for API exports and analytics workflows.",
  path: "/dev-tools/json-to-csv",
  keywords: [
    "json to csv converter",
    "convert json to csv",
    "json csv tool",
    "api json to csv",
    "data export converter",
  ],

  header: {
    title: "JSON to CSV Converter",
    description:
      "Transform JSON data into CSV output for analysis and spreadsheet workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Convert JSON structures to CSV output for reporting, spreadsheet, and ETL-style workflows.",
    featureList: [
      "JSON to CSV conversion",
      "Download/copy output workflow",
      "Spreadsheet-ready formatting",
      "API export support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JSON to CSV Converter is a free tool that transforms JSON arrays of objects into comma-separated values (CSV) format for use in spreadsheets and databases.",
    quickAnswer:
      "Paste a JSON array of objects to instantly convert it to CSV format. The tool auto-detects column headers from JSON keys, flattens nested objects, and lets you download the result as a .csv file.",
    keyTakeaways: [
      "Converts JSON arrays to CSV with auto-detected column headers",
      "Flattens nested JSON objects using dot notation (user.name)",
      "Handles arrays, nulls, and mixed data types gracefully",
      "Download result as .csv file for Excel, Google Sheets, or databases",
      "All processing runs locally — no data uploaded to servers",
    ],
    overview:
      "Use this converter to transform JSON payloads into CSV for spreadsheets, data analysis, and reporting pipelines. It is useful for API output handling and quick export operations.",

    howToSteps: [
      "Paste or upload JSON data in the input panel.",
      "Run conversion to generate CSV output.",
      "Review column mapping and value formatting.",
      "Copy or download the CSV file for downstream use.",
    ],

    features: [
      "JSON-to-CSV transformation",
      "Spreadsheet-compatible output",
      "Copy/download support",
      "Useful for API and analytics workflows",
      "Browser-based conversion utility",
    ],

    useCases: [
      "API data export to spreadsheets",
      "Ad hoc reporting workflows",
      "Data handoff to analysts",
      "ETL prototyping and validation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Conversion tools rank best when they produce predictable tabular
          output quickly. This page is optimized for that utility-first intent.
        </p>
        <p>
          It is particularly useful when API responses need rapid conversion
          into analyst-friendly CSV format without extra setup.
        </p>
      </div>
    ),

    proTip:
      "Validate delimiter, encoding, and header behavior before importing into downstream BI or spreadsheet pipelines.",

    faqs: [
      {
        question: "Can I convert nested JSON directly?",
        answer:
          "Nested structures may need flattening depending on desired CSV column layout.",
      },
      {
        question: "Is this useful for API export workflows?",
        answer:
          "Yes. It is commonly used to convert API responses into CSV for analysis.",
      },
      {
        question: "Will data types be preserved?",
        answer:
          "CSV is text-oriented, so type handling depends on the target application importing the file.",
      },
      {
        question: "Can I open the output in Excel or Google Sheets?",
        answer:
          "Yes. Generated CSV output is intended for spreadsheet import workflows.",
      },
      {
        question: "Does this replace full ETL tools?",
        answer:
          "No. It is a fast conversion utility for practical day-to-day data tasks.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonToCsvPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JSONToCSV />
        </div>
      )}
    />
  )
}
