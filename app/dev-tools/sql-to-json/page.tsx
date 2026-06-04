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
  toolName: "SQL INSERT to JSON Converter",
  description:
    "Convert simple SQL INSERT INTO statements into a formatted JSON array for API mocks, fixtures, and quick data handoffs.",
  metaTitle: "SQL INSERT to JSON Converter - Convert VALUES Rows Online",
  metaDescription:
    "Convert SQL INSERT INTO statements to JSON arrays online. Paste INSERT rows with columns and VALUES, then copy or download formatted JSON for mocks, fixtures, and data handoffs.",
  path: "/dev-tools/sql-to-json",

  header: {
    title: "SQL INSERT to JSON Converter",
    description:
      "Paste a simple INSERT INTO statement and convert its VALUES rows into a JSON array. Best for seed data, API mocks, and small table exports.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "SQL INSERT to JSON Converter", href: "/dev-tools/sql-to-json" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Browser-based SQL INSERT to JSON converter for simple INSERT INTO table (columns) VALUES (...) statements. Converts rows into a formatted JSON array with basic literal type detection.",
    alternateName: [
      "SQL to JSON",
      "SQL INSERT to JSON",
      "INSERT Statement to JSON",
      "SQL Values to JSON",
      "SQL Seed Data to JSON",
      "SQL Fixture Converter",
      "Database Insert to JSON",
      "SQL to API Mock JSON",
    ],
    featureList: [
      "Converts INSERT INTO table (columns) VALUES (...) statements",
      "Supports single-row and multi-row VALUES syntax",
      "Maps SQL column names to JSON object keys",
      "Converts NULL, true, false, numbers, and quoted strings",
      "Outputs a formatted JSON array",
      "Copy JSON to clipboard",
      "Download the result as data.json",
      "Includes sample INSERT data for quick testing",
      "Runs conversion in the browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "5230",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A SQL INSERT to JSON converter turns rows from an INSERT INTO ... VALUES statement into JSON objects, using the listed SQL columns as JSON keys.",
    quickAnswer:
      "Paste an INSERT INTO table (columns) VALUES (...); statement, click Convert to JSON, then copy or download the formatted JSON array. The converter is designed for simple INSERT statements, not full SQL dumps or SELECT result tables.",
    keyTakeaways: [
      "Converts simple SQL INSERT statements into JSON arrays",
      "Supports multi-row VALUES lists when column names are included",
      "Maps columns such as id, name, and email to JSON object keys",
      "Detects basic values: NULL, true, false, numbers, and quoted strings",
      "Best for API mocks, test fixtures, seed data, and small table handoffs",
    ],
    overview:
      "Use this SQL INSERT to JSON converter when you have a small INSERT statement and need JSON quickly. The tool reads statements in the form INSERT INTO table (column1, column2) VALUES (...), (...); and converts each VALUES tuple into one JSON object. It is useful for turning seed data into fixtures, preparing mock API responses, sharing small database examples with a frontend team, or cleaning up example records for documentation. It does not execute SQL and it is not a full database dump parser.",

    howToSteps: [
      "Paste an INSERT INTO statement with a column list and VALUES rows.",
      "Make sure the statement ends with a semicolon.",
      "Click Convert to JSON.",
      "Review the generated JSON array.",
      "Copy the JSON or download it as data.json.",
    ],

    features: [
      "SQL INSERT statement conversion",
      "Multi-row VALUES support",
      "Column-to-key JSON mapping",
      "Basic SQL literal conversion",
      "Formatted JSON output",
      "Copy and download actions",
      "Sample data loader",
    ],

    useCases: [
      "Convert SQL seed data into JSON fixtures",
      "Build mock REST API payloads from example table rows",
      "Share small database examples with frontend developers",
      "Prepare demo data for JavaScript, TypeScript, Python, or Node projects",
      "Turn simple INSERT exports into copy-ready JSON for documentation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Converter Accepts</h3>
          <p>
            This page is focused on one common workflow: converting simple SQL{" "}
            <code>INSERT INTO</code> statements into JSON. The input should include a table name,
            a parenthesized column list, a <code>VALUES</code> clause, and a semicolon.
          </p>
          <pre className="bg-muted p-3 rounded mt-3 text-xs overflow-x-auto">
            <code>{`INSERT INTO users (id, name, active) VALUES
(1, 'Alice', true),
(2, 'Bob', false);`}</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Values Are Converted</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">SQL value</th>
                <th className="text-left py-2 px-2 text-foreground">JSON value</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>NULL</code></td>
                <td className="py-2 px-2">null</td>
                <td className="py-2 px-2"><code>null</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>true</code> / <code>false</code></td>
                <td className="py-2 px-2">boolean</td>
                <td className="py-2 px-2"><code>true</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Bare numbers</td>
                <td className="py-2 px-2">number</td>
                <td className="py-2 px-2"><code>42</code></td>
              </tr>
              <tr>
                <td className="py-2 px-2">Single- or double-quoted text</td>
                <td className="py-2 px-2">string</td>
                <td className="py-2 px-2"><code>&quot;Alice&quot;</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Best Uses</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>API mocks:</strong> convert sample rows into JSON for mock endpoints.</li>
            <li><strong>Test fixtures:</strong> turn seed data into a JSON file for Jest, Vitest, Playwright, or pytest.</li>
            <li><strong>Frontend handoff:</strong> share realistic records without asking someone to connect to a database.</li>
            <li><strong>Documentation:</strong> convert small SQL examples into JSON examples for API docs.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limits to Know</h3>
          <p>
            This is not a SQL engine and it does not parse every database dialect. It does not
            convert <code>CREATE TABLE</code> schemas, terminal-style <code>SELECT</code> result
            tables, stored procedures, full dumps, transactions, comments, or dialect-specific
            clauses such as <code>RETURNING</code> or <code>ON CONFLICT</code>. Complex strings,
            nested parentheses, functions, binary values, and unusual escaping may need cleanup
            before conversion. For production migrations or very large exports, use a script or
            database export library that understands your database format.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy Note</h3>
          <p>
            The conversion logic runs in your browser after the page loads; the tool does not need
            to send your SQL to a conversion API. Still, avoid pasting passwords, private customer
            data, or regulated records into any web tool unless your own security policy allows it.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If conversion fails, check three things first: the input starts with INSERT INTO, the column list is present, and the statement ends with a semicolon. For a large export, paste one table's INSERT block at a time so the JSON stays easy to review.",

    faqs: [
      {
        question: "What SQL format does this converter support?",
        answer:
          "It supports simple INSERT INTO table (columns) VALUES (...); statements, including multi-row VALUES lists. It expects the column names to be present in the INSERT statement.",
      },
      {
        question: "Can it convert CREATE TABLE statements?",
        answer:
          "No. This tool converts INSERT rows into JSON objects. It does not generate JSON Schema from CREATE TABLE definitions.",
      },
      {
        question: "Can it convert SELECT query results?",
        answer:
          "No. It does not parse terminal tables or pasted SELECT output. If you need JSON from a live query, use your database driver, SQL client export option, or a script that serializes result rows to JSON.",
      },
      {
        question: "Does it handle multi-row INSERT statements?",
        answer:
          "Yes. A VALUES list such as (1, 'A'), (2, 'B'), (3, 'C') is converted into three JSON objects when the INSERT statement includes matching column names.",
      },
      {
        question: "How are SQL values typed?",
        answer:
          "NULL becomes null, true and false become booleans, bare numeric values become numbers, and quoted values become strings. Dates and timestamps inside quotes remain strings.",
      },
      {
        question: "Why did my SQL fail to parse?",
        answer:
          "Most failures happen when the input is missing a semicolon, lacks the column list, includes a full dump with comments or transactions, or uses complex expressions inside VALUES. Try isolating one simple INSERT block first.",
      },
      {
        question: "Is this a replacement for ETL or database migration tools?",
        answer:
          "No. It is a quick utility for small conversion tasks, fixtures, mocks, and examples. For production data migration, use a database export pipeline, a SQL driver, or a streaming parser built for your database.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "Base64 Encoder/Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
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
