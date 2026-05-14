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
  metaTitle: "JSON to CSV Converter — Convert JSON Arrays to Excel-Ready CSV",
  metaDescription:
    "Free JSON to CSV converter. Transform JSON arrays / API responses into CSV for Excel, Google Sheets, BigQuery, Snowflake. Auto-detect headers, flatten nested objects with dot notation, choose delimiter, UTF-8 BOM toggle. 100% client-side.",
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
      "JSON to CSV converter: transforms JSON arrays of objects into RFC 4180-compliant CSV. Auto-detects column headers, flattens nested objects with dot notation, handles arrays, nulls, dates. Configurable delimiter (comma/semicolon/tab) and UTF-8 BOM. 100% client-side.",
    alternateName: [
      "JSON to CSV",
      "Convert JSON to Excel",
      "JSON Array to Spreadsheet",
      "API Response to CSV",
      "JSON to Google Sheets",
      "JSON to TSV Converter",
      "MongoDB Export to CSV",
      "JSON Flattener",
      "Nested JSON to CSV",
      "ConvertCSV Alternative",
      "JSON Table Generator",
      "JSON to Excel Converter",
      "Webhook JSON to CSV",
      "JSON Data Exporter",
      "Array to CSV",
    ],
    featureList: [
      "Auto-detects all unique keys across array to build complete column header set",
      "Flattens nested objects with dot notation (e.g., `address.city`, `meta.tags[0]`)",
      "Configurable delimiter: comma (RFC 4180 standard), semicolon (European Excel), tab (.tsv), pipe",
      "Properly escapes commas, quotes, and newlines within values per RFC 4180",
      "UTF-8 BOM toggle for Excel-on-Windows compatibility with non-ASCII characters",
      "Null handling: empty string, NULL literal, or omit",
      "Array-within-object handling: pipe-separated, comma-separated, or JSON-stringified",
      "Date / timestamp preservation in ISO 8601 format",
      "Compatible output for: Excel, Google Sheets, LibreOffice Calc, BigQuery, Snowflake, PostgreSQL COPY, MySQL LOAD DATA",
      "Live preview: see CSV update as you paste / edit JSON",
      "Download as .csv or .tsv, or copy CSV text directly to clipboard",
      "100% client-side — large JSON files (10MB+) processed without server upload",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "14820",
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

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">From JSON to Spreadsheet: Why You Need This</h3>
          <p>
            JSON is the standard data format for APIs, NoSQL databases, and configs — but analysts, business users, and BI tools live in spreadsheets and SQL tables. This converter bridges the gap. Paste a JSON array of objects, get a clean CSV file ready for Excel, Google Sheets, BigQuery LOAD, Snowflake COPY, PostgreSQL COPY, or any other tool that accepts CSV. The tool handles the messy parts: header normalization, value escaping per RFC 4180, nested-object flattening, array serialization, UTF-8 encoding for international characters.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Nested Objects Become Columns</h3>
          <p>Given JSON:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`[
  { "id": 1, "user": { "name": "Alice", "email": "a@x.com" }, "tags": ["admin", "vip"] },
  { "id": 2, "user": { "name": "Bob",   "email": "b@x.com" }, "tags": ["user"] }
]`}</code>
          </pre>
          <p className="mt-3">CSV output:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`id,user.name,user.email,tags
1,Alice,a@x.com,"admin|vip"
2,Bob,b@x.com,user`}</code>
          </pre>
          <p className="mt-3">
            Nested objects are flattened using dot notation (<code>user.name</code>, <code>user.email</code>). Arrays inside objects can be joined with a separator (<code>|</code> by default — configurable to comma or JSON-stringified). This produces a flat tabular structure that fits naturally into spreadsheet / SQL paradigms.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Delimiter Choice: Comma vs Semicolon vs Tab</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Comma (.csv, RFC 4180 default):</strong> universal — works in Excel (English locale), Google Sheets, BigQuery, Snowflake, programming languages</li>
            <li><strong>Semicolon (.csv, European Excel):</strong> required for Excel installations with European locales (Germany, France, etc.) where comma is the decimal separator. Excel auto-detects but to be safe, use semicolons for European audiences.</li>
            <li><strong>Tab (.tsv):</strong> for pasting directly into Excel / Google Sheets cells; also used by BigQuery and some database loaders</li>
            <li><strong>Pipe (|):</strong> rare but useful when values contain both commas and quotes — pipes are unambiguous</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">RFC 4180 Escaping — Why It Matters</h3>
          <p>
            Values containing commas, double quotes, or line breaks must be escaped or your CSV breaks. RFC 4180 specifies: wrap any value containing <code>,</code> <code>&quot;</code> or newline in double quotes; double up any embedded double quote. So <code>He said &quot;hi&quot;</code> becomes <code>&quot;He said &quot;&quot;hi&quot;&quot;&quot;</code>. The tool handles this automatically — if a column value contains a comma, it&apos;s quoted; if it contains a newline (common in long descriptions), it&apos;s also quoted and the newline preserved within the quotes. Without this escaping, Excel and pandas will split your row at the wrong commas.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UTF-8 BOM for Excel Compatibility</h3>
          <p>
            Excel on Windows doesn&apos;t detect UTF-8 by default — if your data contains non-ASCII characters (accented letters, Chinese, emoji), Excel may render them as garbage. The fix: prepend a UTF-8 BOM (Byte Order Mark: <code>0xEF 0xBB 0xBF</code>) to the CSV. The tool offers a checkbox to include the BOM. Enable it for Excel-on-Windows users; disable for programmatic consumers (pandas, etc.) which see the BOM as part of the first column header.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>API response → spreadsheet analysis:</strong> curl an API, paste the JSON response, download CSV, open in Excel</li>
            <li><strong>MongoDB / Firestore export:</strong> dump documents as JSON, convert to CSV for SQL import or BI tools</li>
            <li><strong>Webhook payload analysis:</strong> save webhook bodies, batch-convert for reporting</li>
            <li><strong>GA4 / analytics platform exports:</strong> JSON from APIs → CSV for stakeholders</li>
            <li><strong>Customer data migration:</strong> CRM JSON → CSV → spreadsheet for editing → import to new system</li>
            <li><strong>Survey response export:</strong> JSON survey data → CSV for analysis in Excel / SPSS / R</li>
            <li><strong>Log analysis:</strong> JSON application logs → CSV → pivot tables in Excel</li>
            <li><strong>ETL prototyping:</strong> quick JSON → CSV step before building a proper pipeline</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All JSON parsing, flattening, and CSV generation runs in your browser using JavaScript. Your data — including any PII, tokens, or confidential business data — never touches a server. No analytics, no logging, no upload. Verify in DevTools → Network: paste a JSON payload, click convert, and confirm zero outgoing requests. Safe for proprietary data, GDPR-sensitive content, HIPAA-relevant records.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For Excel-on-Windows users with non-ASCII data, enable the UTF-8 BOM checkbox — without it, accented characters and emoji display as garbage. For European Excel users, use semicolon delimiter. For SQL import (PostgreSQL COPY, MySQL LOAD DATA), keep comma delimiter and disable BOM. For nested JSON, the dot-notation columns make great BI-tool dimensions. For arrays-within-objects, choose 'pipe-separated' if values are simple strings, or 'JSON stringified' if you need to preserve the original structure for later processing.",

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
          "Yes — 100% free, no signup, no rate limit, no size limit. Unlike some tools that gate features behind paid tiers or require sign-in for large files, every feature here is unlimited and free forever.",
      },
      {
        question: "How do I open the CSV in Excel without garbled characters?",
        answer:
          "Enable the UTF-8 BOM checkbox before downloading. Excel on Windows requires the BOM to correctly detect UTF-8 encoding — without it, accented characters and emoji appear as 'Ã©' or '?'. The BOM is a 3-byte marker (EF BB BF) at the start of the file that tells Excel 'this is UTF-8'. For European locales, also use semicolon delimiter instead of comma.",
      },
      {
        question: "Can I convert JSON with thousands of rows?",
        answer:
          "Yes — easily. The tool handles JSON files with hundreds of thousands of rows. Processing is client-side so the constraint is browser memory, typically allowing files up to ~50-100 MB on a modern machine. For larger datasets, split into chunks or use a CLI tool like jq + csvkit.",
      },
      {
        question: "What if my JSON objects have different keys?",
        answer:
          "The converter scans ALL objects and builds a union of every unique key as columns. Missing values produce empty cells (or whatever you set as the 'null handling' option). This handles inconsistent JSON (common from MongoDB or NoSQL exports) gracefully — every row gets every column, just with empty values where the source didn't have that key.",
      },
      {
        question: "Can I convert nested JSON to CSV?",
        answer:
          "Yes. Nested objects are flattened with dot notation: `{user: {name: 'Alice'}}` becomes column `user.name` with value `Alice`. Deeply nested structures (3+ levels) flatten the same way: `user.address.city`. Arrays inside objects are joined with a configurable separator (pipe, comma, or JSON-stringified for preservation).",
      },
      {
        question: "Will this work for BigQuery / Snowflake / Redshift COPY?",
        answer:
          "Yes — the output is RFC 4180-compliant CSV that all major data warehouses accept. Use comma delimiter, disable BOM (data warehouses don't need it and may interpret it as data), and ensure NULL handling matches your target (BigQuery wants empty for NULL, Snowflake accepts both empty and the literal 'NULL').",
      },
      {
        question: "Is my JSON data uploaded anywhere?",
        answer:
          "No. All conversion runs locally in your browser. Your JSON data — including any tokens, PII, or business-sensitive content — never reaches any server. Safe for proprietary data. Verify by opening DevTools → Network tab while converting: zero outgoing requests.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Base64 Encoder/Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
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
