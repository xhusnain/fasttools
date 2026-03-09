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
  metaTitle: "JSON to CSV Converter — Convert JSON to CSV Online Free (2026)",
  metaDescription:
    "Convert JSON to CSV online for free. Transform JSON arrays into CSV files for Excel, Google Sheets, and databases. Handles nested objects, auto-detects headers. No upload needed.",
  path: "/dev-tools/json-to-csv",

  header: {
    title: "JSON to CSV Converter",
    description:
      "Convert JSON arrays to CSV format for Excel, Google Sheets, and databases. Auto-detects column headers from JSON keys, flattens nested objects, and lets you download as .csv — free, no data uploaded.",
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
      "Convert JSON to CSV format instantly with this free online converter. Paste a JSON array of objects and the tool auto-detects column headers from JSON keys, flattens nested objects using dot notation, and generates a clean CSV file ready for Excel, Google Sheets, or database import. Handles arrays, null values, and mixed data types. Download the result as a .csv file or copy to clipboard. All processing runs locally in your browser — no data uploaded to any server.",

    howToSteps: [
      "Paste your JSON data (array of objects) into the input panel.",
      "The tool auto-detects column headers from JSON keys and generates CSV output.",
      "Review the CSV preview — check column mapping and value formatting.",
      "Download the .csv file or copy the CSV text to clipboard for Excel, Sheets, or database import.",
    ],

    features: [
      "Auto-detect column headers from JSON object keys",
      "Flatten nested JSON objects using dot notation (e.g., user.name)",
      "Handle arrays, nulls, booleans, and mixed data types",
      "Download as .csv file or copy CSV text to clipboard",
      "100% client-side processing — no data uploaded to servers",
      "Supports large JSON datasets with thousands of records",
    ],

    useCases: [
      "Convert API JSON responses to CSV for analysis in Excel or Google Sheets",
      "Export database query results from JSON to CSV for business reporting",
      "Transform webhook payload data into spreadsheet-friendly format",
      "Convert MongoDB/CouchDB JSON exports to CSV for data migration",
      "Prepare JSON data for import into SQL databases or BI tools",
    ],

    aboutTool:
      "JSON is the standard data format for APIs and web applications, but analysts and business users work in spreadsheets. This converter bridges the gap by transforming JSON arrays into tabular CSV format. The tool handles common JSON patterns: flat objects become rows with key-based headers, nested objects are flattened using dot notation (e.g., address.city becomes a column named 'address.city'), and arrays within objects are serialized as comma-separated values within cells. All conversion runs in your browser using JavaScript — no data is uploaded to any server, making it safe for sensitive data.",

    proTip:
      "For best results, ensure your JSON is an array of objects with consistent keys. If your JSON has deeply nested structures, consider flattening it first for cleaner CSV columns. When importing into Excel, use 'Data → From Text/CSV' to correctly handle delimiters and encoding.",

    faqs: [
      {
        question: "How do I convert JSON to CSV?",
        answer:
          "Paste your JSON array of objects into the input field. The tool automatically generates CSV with column headers from JSON keys. Download the .csv file or copy the text to clipboard.",
      },
      {
        question: "Can this handle nested JSON objects?",
        answer:
          "Yes. Nested objects are flattened using dot notation — for example, {user: {name: 'John'}} becomes a column named 'user.name' with value 'John'.",
      },
      {
        question: "Can I open the CSV output in Excel or Google Sheets?",
        answer:
          "Yes. Download the .csv file and open it directly in Excel, Google Sheets, LibreOffice Calc, or any spreadsheet application.",
      },
      {
        question: "Is my JSON data uploaded to a server?",
        answer:
          "No. All conversion runs locally in your browser. No data is sent to any server — this makes it safe for sensitive or proprietary data.",
      },
      {
        question: "What JSON format does this converter expect?",
        answer:
          "The converter works best with JSON arrays of objects, like [{\"name\":\"John\",\"age\":30},{\"name\":\"Jane\",\"age\":25}]. Each object becomes a CSV row, and keys become column headers.",
      },
      {
        question: "Is this JSON to CSV converter free?",
        answer:
          "Yes. Completely free with no limits on data size, no registration, and no server-side processing.",
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
