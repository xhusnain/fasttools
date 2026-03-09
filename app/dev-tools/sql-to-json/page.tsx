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
  metaTitle: "SQL to JSON Converter — Convert SQL Results to JSON Online Free (2026)",
  metaDescription:
    "Free online SQL to JSON converter. Transform SQL query results and INSERT statements into JSON arrays and objects. Type-aware conversion with column-to-key mapping. No upload needed.",
  path: "/dev-tools/sql-to-json",

  header: {
    title: "SQL to JSON Converter",
    description:
      "Convert SQL INSERT statements and query results into structured JSON arrays and objects. Maps SQL columns to JSON keys with type-aware value conversion. All processing runs locally in your browser.",
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
    definition:
      "A SQL to JSON Converter is a free tool that transforms SQL query results or CREATE TABLE statements into structured JSON format.",
    quickAnswer:
      "Paste SQL output (SELECT results or CREATE TABLE statements) to instantly convert it to JSON. The tool maps rows to JSON objects and columns to keys. Copy the formatted JSON output.",
    keyTakeaways: [
      "Converts SQL SELECT results to JSON arrays of objects",
      "Parses CREATE TABLE statements into JSON schema definitions",
      "Maps SQL column names to JSON keys automatically",
      "Handles common SQL data types: VARCHAR, INT, DATE, BOOLEAN",
      "Useful for building REST APIs from database query results",
    ],
    overview:
      "Convert SQL to JSON format with this free online tool. Paste SQL INSERT statements, CREATE TABLE definitions, or query results to instantly transform them into structured JSON arrays and objects. The converter maps SQL column names to JSON keys and performs type-aware conversion — integers, booleans, nulls, and strings are mapped to their appropriate JSON types. Useful for building REST API mock data from database dumps, migrating relational data to NoSQL databases, creating seed data for tests, and bridging SQL-based backends with JSON-consuming frontends.",

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
