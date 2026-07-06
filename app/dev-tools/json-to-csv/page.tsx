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
    "Convert JSON arrays or objects to CSV with union headers, dot-notation flattening, delimiter choice, and optional UTF-8 BOM for spreadsheet workflows.",
  metaTitle: "JSON to CSV Converter - Convert JSON Arrays to Excel CSV",
  metaDescription:
    "Convert JSON to CSV online. Paste a JSON array or object, flatten nested objects with dot notation, choose comma/semicolon/tab delimiter, copy CSV, or download with optional UTF-8 BOM.",
  path: "/dev-tools/json-to-csv",

  header: {
    title: "JSON to CSV Converter",
    description:
      "Convert JSON arrays and objects into CSV for Excel, Google Sheets, reports, and data handoffs. Flattens nested objects and supports comma, semicolon, or tab delimiters.",
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
      "JSON to CSV converter for JSON arrays or single objects. Builds a union of all object keys, flattens nested objects with dot notation, JSON-stringifies arrays, escapes CSV values, supports comma/semicolon/tab delimiters, copies CSV, and downloads data.csv with optional UTF-8 BOM.",
    alternateName: [
      "JSON to CSV",
      "Convert JSON to Excel",
      "JSON Array to CSV",
      "JSON Array to Spreadsheet",
      "API Response to CSV",
      "JSON to Google Sheets",
      "JSON to TSV Converter",
      "Nested JSON to CSV",
      "JSON Table Generator",
      "JSON to Excel Converter",
      "Webhook JSON to CSV",
      "Array to CSV",
    ],
    featureList: [
      "Converts JSON arrays of objects to CSV rows",
      "Wraps a single JSON object as one CSV row",
      "Builds column headers from the union of keys across all rows",
      "Flattens nested objects with dot notation such as user.email",
      "Serializes arrays as JSON strings inside CSV cells",
      "Escapes delimiter characters, double quotes, and line breaks",
      "Delimiter options: comma, semicolon, and tab",
      "Optional UTF-8 BOM on download for Excel compatibility",
      "Copy CSV output to clipboard",
      "Download output as data.csv",
      "Browser-side conversion",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JSON to CSV converter transforms JSON values into comma-separated rows so the data can be opened in spreadsheets, reports, and database import workflows.",
    quickAnswer:
      "Paste a JSON array of objects, choose a delimiter, click Convert to CSV, then copy or download the output. Nested objects become dot-notation columns such as user.name, and arrays are kept as JSON strings inside cells.",
    keyTakeaways: [
      "Converts JSON arrays and single objects into CSV",
      "Builds headers from all object keys, not only the first row",
      "Flattens nested objects into dot-notation columns",
      "Supports comma, semicolon, and tab delimiters",
      "Can add a UTF-8 BOM to downloaded CSV files for Excel compatibility",
    ],
    overview:
      "Use this JSON to CSV converter when you need to move API responses, webhook payloads, exported records, or sample JSON into a spreadsheet-friendly format. The converter parses the JSON, flattens nested objects with dot notation, builds a full header row from every key found across the data, and escapes values so commas, quotes, and line breaks do not break the CSV. Arrays are preserved as JSON strings in their cells. You can copy the CSV text or download a data.csv file.",

    howToSteps: [
      "Paste a JSON array of objects, a single object, or a top-level primitive value.",
      "Choose the delimiter: comma, semicolon, or tab.",
      "Enable UTF-8 BOM if you plan to open the downloaded file in Excel on Windows.",
      "Click Convert to CSV.",
      "Copy the CSV text or download data.csv.",
    ],

    features: [
      "JSON array to CSV conversion",
      "Single-object JSON conversion",
      "Nested object flattening",
      "Union header detection",
      "Array values preserved as JSON strings",
      "CSV escaping for quotes, delimiters, and newlines",
      "Comma, semicolon, and tab delimiter modes",
      "Optional UTF-8 BOM on download",
      "Copy and download output",
    ],

    useCases: [
      "Convert API JSON responses into CSV for Excel or Google Sheets",
      "Turn webhook payloads into rows for reporting",
      "Prepare sample JSON data for CSV-based imports",
      "Flatten small MongoDB or NoSQL-style records for inspection",
      "Create quick CSV fixtures from JSON test data",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Nested JSON Becomes CSV</h3>
          <p>
            Nested objects are flattened with dot notation. A value such as{" "}
            <code>&#123;&quot;user&quot;:&#123;&quot;email&quot;:&quot;a@example.com&quot;&#125;&#125;</code>{" "}
            becomes a CSV column named <code>user.email</code>. This keeps nested API
            responses readable while still producing a flat table that spreadsheet tools can open.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Header Detection</h3>
          <p>
            The converter scans every row and builds a union of all keys it finds. If row one has
            <code>name</code> and row two has <code>email</code>, the output includes both columns.
            Missing values are left as empty cells. This is useful for NoSQL-style exports where
            records do not always share the same shape.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Arrays and Complex Values</h3>
          <p>
            Arrays are serialized as JSON strings inside their CSV cell, for example{" "}
            <code>[&quot;admin&quot;,&quot;editor&quot;]</code>. Empty objects are written as{" "}
            <code>&#123;&#125;</code>, and null or undefined values become empty cells. If your
            target system needs arrays split into multiple rows, transform the JSON before
            converting it to CSV.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Delimiter Choice</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Comma:</strong> standard CSV and the best default for most tools.</li>
            <li><strong>Semicolon:</strong> useful for spreadsheet locales where comma is a decimal separator.</li>
            <li><strong>Tab:</strong> useful for TSV-style output or pasting into spreadsheet cells.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">CSV Escaping</h3>
          <p>
            Values containing the selected delimiter, double quotes, or line breaks are wrapped in
            double quotes. Existing quotes are doubled, which is the standard CSV escaping pattern.
            This prevents values like <code>ACME, Inc.</code> or multi-line descriptions from
            splitting into the wrong columns.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Excel UTF-8 BOM</h3>
          <p>
            The UTF-8 BOM option adds a byte-order marker to downloaded files. This helps some
            Excel installations recognize non-ASCII text such as accented characters and emoji.
            Leave it off when another program complains about an unexpected marker in the first
            column name.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limits to Review</h3>
          <p>
            Conversion happens in the browser, so very large JSON payloads depend on browser memory
            and device speed. For production-scale exports, streaming conversion through a script,
            database export tool, or ETL pipeline is more reliable.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For Excel on Windows, enable the UTF-8 BOM before downloading if your data includes non-ASCII characters. For deeply nested or array-heavy data, review the flattened columns before importing into a database or BI tool.",

    faqs: [
      {
        question: "What JSON format works best?",
        answer:
          "A JSON array of objects works best, for example [{\"name\":\"John\"},{\"name\":\"Jane\"}]. A single object also works and becomes one CSV row.",
      },
      {
        question: "Can this handle nested JSON objects?",
        answer:
          "Yes. Nested objects are flattened with dot notation. For example, {\"user\":{\"name\":\"John\"}} becomes a column named user.name.",
      },
      {
        question: "How are arrays handled?",
        answer:
          "Arrays are written as JSON strings inside the CSV cell. If you need each array item as its own row, reshape the JSON before conversion.",
      },
      {
        question: "Can I use the output in Excel or Google Sheets?",
        answer:
          "Yes. Download the CSV file or copy the output and open it in Excel, Google Sheets, LibreOffice Calc, or another spreadsheet tool.",
      },
      {
        question: "Why should I use semicolon or tab output?",
        answer:
          "Semicolon output can be useful for spreadsheet locales that use comma as a decimal separator. Tab output is useful for TSV-style files or direct spreadsheet pasting.",
      },
      {
        question: "Is this a full ETL converter?",
        answer:
          "No. It is a quick browser tool for pasted JSON and small-to-medium handoffs. For large exports or recurring jobs, use a script or data pipeline.",
      },
    ],

    relatedTools: [
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
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
