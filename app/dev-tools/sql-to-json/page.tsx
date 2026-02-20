import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const SQLToJSON = dynamic(
  () => import("@/components/dev-tools/sql-to-json").then((mod) => mod.SQLToJSON),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "SQL to JSON Converter",
  description:
    "Convert SQL INSERT statements into JSON objects for API mocks, migration tasks, and data workflows.",
  metaTitle: "SQL to JSON Converter (INSERT Statements)",
  metaDescription:
    "Convert SQL INSERT data to JSON in-browser with quick parsing and copy-ready output.",
  path: "/dev-tools/sql-to-json",
  keywords: [
    "sql to json converter",
    "convert sql insert to json",
    "sql dump to json",
    "database export to json",
    "insert statement parser",
  ],

  header: {
    title: "SQL to JSON Converter",
    description:
      "Transform SQL INSERT data into structured JSON for integration and analysis tasks.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "SQL INSERT to JSON conversion utility for database migration and API development workflows.",
    featureList: [
      "SQL INSERT parsing",
      "Structured JSON output",
      "Type-aware value conversion",
      "Browser-based data transformation",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this converter to turn SQL INSERT statements into JSON arrays and objects. It is useful when moving relational data into API payloads, tests, or frontend mock data.",

    howToSteps: [
      "Paste SQL INSERT statements into the input field.",
      "Run conversion to parse rows and column values.",
      "Review generated JSON output and validate structure.",
      "Copy or export JSON for downstream workflows.",
    ],

    features: [
      "SQL INSERT statement conversion",
      "Structured JSON output",
      "Practical migration workflow",
      "Copy-ready result format",
      "Runs directly in the browser",
    ],

    useCases: [
      "Database export conversion for APIs",
      "Mock payload generation",
      "Seed data preparation for test suites",
      "Data handoff between backend and frontend teams",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          SQL-to-JSON pages perform best when they prioritize reliable conversion
          steps over long generic copy. This page is optimized for utility intent
          and quick execution.
        </p>
        <p>
          It helps teams bridge SQL-centric datasets into JSON-based systems with
          less manual editing and fewer transformation errors.
        </p>
      </div>
    ),

    proTip:
      "Validate column names and null handling after conversion before importing into production pipelines.",

    faqs: [
      {
        question: "Which SQL input format is expected?",
        answer:
          "The main workflow targets SQL INSERT statements containing row data.",
      },
      {
        question: "Can I use this for API mock generation?",
        answer:
          "Yes. It is commonly used to convert database exports into mock JSON payloads.",
      },
      {
        question: "Does conversion preserve numeric and boolean values?",
        answer:
          "The parser is designed for type-aware conversion so numeric-like values map appropriately.",
      },
      {
        question: "Can I process large dumps in one pass?",
        answer:
          "For very large files, chunking input may improve reviewability and troubleshooting.",
      },
      {
        question: "Is this a replacement for full ETL tooling?",
        answer:
          "No. It is a fast utility for focused transformation tasks and developer workflows.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SQLToJSONPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SQLToJSON />
        </div>
      )}
    />
  )
}
