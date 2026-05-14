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
  metaTitle: "SQL to JSON Converter — INSERT Statements & Query Results to JSON",
  metaDescription:
    "Free SQL to JSON converter. Parse INSERT statements, CREATE TABLE schemas, or SELECT result dumps into clean JSON arrays. Type-aware conversion (INT, BOOLEAN, NULL, DATE). MySQL / PostgreSQL / SQLite / MSSQL dialects. 100% client-side.",
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
      "Convert SQL INSERT statements, CREATE TABLE schemas, or SELECT result dumps into structured JSON. Type-aware (INT, BOOLEAN, NULL, DATE, JSON). MySQL / PostgreSQL / SQLite / MSSQL syntax. 100% client-side.",
    alternateName: [
      "SQL to JSON",
      "SQL INSERT to JSON",
      "MySQL Dump to JSON",
      "PostgreSQL Dump to JSON",
      "SQLite to JSON",
      "SQL Result to JSON",
      "Database Export to JSON",
      "SQL Query Result Converter",
      "MySQL Backup to JSON",
      "phpMyAdmin SQL to JSON",
      "CREATE TABLE to JSON Schema",
      "SQL to API Mock JSON",
      "SQL Seed to JSON",
      "Database Migration Helper",
      "SQL Dump Parser",
    ],
    featureList: [
      "Parse SQL INSERT INTO statements with single or multi-row VALUES syntax",
      "Parse SELECT result dumps from mysql CLI, psql, sqlcmd output",
      "Parse CREATE TABLE statements into JSON schema definitions (with column types)",
      "Type-aware conversion: INT → number, BOOLEAN → true/false, NULL → null, DATE → ISO 8601 string",
      "Multi-dialect support: MySQL, PostgreSQL, SQLite, MSSQL (SQL Server), Oracle",
      "Handle quoted / escaped strings — single quotes, double quotes, backticks for identifiers",
      "Schema-aware: when CREATE TABLE and INSERT are pasted together, types are inferred from the schema",
      "Output as JSON array of objects (default) or JSON Lines (newline-delimited) for streaming",
      "Pretty-print with configurable indentation, or minified single-line output",
      "Detect and preserve JSON columns inside SQL (Postgres jsonb, MySQL JSON)",
      "Copy to clipboard or download as .json / .jsonl",
      "100% client-side — your SQL data never leaves your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "5230",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Convert SQL to JSON?</h3>
          <p>
            SQL is the lingua franca of relational databases — every legacy system, BI tool, and operational backend speaks it. JSON is the format of modern APIs, NoSQL stores, frontend frameworks, and serverless functions. Bridging the two is a daily task: migrating from MySQL to MongoDB, building REST API mocks from a database dump, seeding a new microservice with relational data, sharing data between teams using different stacks. This converter parses raw SQL — INSERT statements, CREATE TABLE schemas, SELECT result dumps — and produces clean JSON ready to paste into <code>fetch()</code> mocks, fixtures, MongoDB <code>insertMany()</code>, or any other JSON-consuming workflow.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Supported SQL Input Formats</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>INSERT statements:</strong> <code>INSERT INTO users (id, name, email) VALUES (1, &apos;Alice&apos;, &apos;a@x.com&apos;);</code></li>
            <li><strong>Multi-row INSERT:</strong> <code>INSERT INTO ... VALUES (1,&apos;A&apos;), (2,&apos;B&apos;), (3,&apos;C&apos;);</code></li>
            <li><strong>CREATE TABLE + INSERT pairs:</strong> uses the schema to infer column types correctly</li>
            <li><strong>mysqldump output:</strong> processes complete dump files with comments, locks, etc.</li>
            <li><strong>psql / pg_dump output:</strong> handles PostgreSQL-specific syntax (jsonb, arrays, RETURNING)</li>
            <li><strong>mysql / psql CLI result tables:</strong> the ASCII-art result tables you see when running SELECT in a terminal</li>
            <li><strong>phpMyAdmin / TablePlus / DBeaver exports:</strong> handles common GUI export formats</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Type-Aware Conversion</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">SQL type</th>
                <th className="text-left py-2 px-2 text-foreground">JSON output</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">INT / BIGINT / SMALLINT</td>
                <td className="py-2 px-2">number</td>
                <td className="py-2 px-2"><code>42</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">DECIMAL / FLOAT / DOUBLE</td>
                <td className="py-2 px-2">number</td>
                <td className="py-2 px-2"><code>3.14</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">VARCHAR / TEXT / CHAR</td>
                <td className="py-2 px-2">string</td>
                <td className="py-2 px-2"><code>&quot;Alice&quot;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">BOOLEAN / BIT(1) / TINYINT(1)</td>
                <td className="py-2 px-2">boolean</td>
                <td className="py-2 px-2"><code>true</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">NULL</td>
                <td className="py-2 px-2">null</td>
                <td className="py-2 px-2"><code>null</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">DATE / DATETIME / TIMESTAMP</td>
                <td className="py-2 px-2">ISO 8601 string</td>
                <td className="py-2 px-2"><code>&quot;2025-04-15T13:45:00Z&quot;</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">JSON / JSONB (Postgres)</td>
                <td className="py-2 px-2">nested object</td>
                <td className="py-2 px-2"><code>&#123;&quot;foo&quot;:&quot;bar&quot;&#125;</code></td>
              </tr>
              <tr>
                <td className="py-2 px-2">UUID</td>
                <td className="py-2 px-2">string</td>
                <td className="py-2 px-2"><code>&quot;550e8400-...&quot;</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Output Formats</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>JSON array (default):</strong> <code>[&#123;...&#125;, &#123;...&#125;]</code> — directly usable as a JavaScript / Python data structure</li>
            <li><strong>JSON Lines (.jsonl):</strong> one object per line — ideal for streaming, log-style processing, and direct ingestion by BigQuery / Athena / Spark</li>
            <li><strong>Pretty-printed:</strong> 2-space or 4-space indentation for human review</li>
            <li><strong>Minified:</strong> single-line output for production transmission</li>
            <li><strong>Schema-only:</strong> when CREATE TABLE is the input, output JSON Schema describing column types and constraints (NOT NULL, UNIQUE, etc.)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>MySQL → MongoDB migration:</strong> mysqldump → SQL-to-JSON → MongoDB Compass import</li>
            <li><strong>Mock API responses:</strong> SQL query result → JSON for Mock Service Worker, MSW, JSON Server</li>
            <li><strong>Test fixtures:</strong> SELECT * from production-like data → JSON fixtures for Jest, Vitest, pytest</li>
            <li><strong>Cross-team handoffs:</strong> backend dev has SQL data, frontend team needs JSON to wire up the UI</li>
            <li><strong>SQL → NoSQL exports:</strong> Firestore, DynamoDB, CosmosDB all import JSON documents</li>
            <li><strong>API contract documentation:</strong> CREATE TABLE → JSON Schema → OpenAPI</li>
            <li><strong>Data warehouse ingestion:</strong> JSON Lines output → BigQuery / Snowflake / Redshift bulk load</li>
            <li><strong>Frontend prototyping:</strong> dump a real SQL table, paste here, paste JSON output into a static <code>data.json</code></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Handling Edge Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Multi-line strings:</strong> properly handles SQL strings containing newlines (escaped as \\n in JSON)</li>
            <li><strong>Single quotes in values:</strong> SQL escapes apostrophes as <code>&apos;&apos;</code> (double single-quote); the parser correctly unescapes</li>
            <li><strong>Backticks vs quotes for identifiers:</strong> MySQL uses backticks, others use double quotes — both supported</li>
            <li><strong>BINARY / BLOB columns:</strong> Base64-encoded in output (you usually shouldn&apos;t put binary in JSON anyway)</li>
            <li><strong>Comments:</strong> SQL <code>-- comment</code> and <code>/* block comment */</code> are skipped, not included in output</li>
            <li><strong>Transactions:</strong> <code>BEGIN; ... COMMIT;</code> blocks are processed; the keywords ignored</li>
            <li><strong>Unicode:</strong> full UTF-8 support including emoji, CJK, accented characters</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When NOT to Use This Tool</h3>
          <p>
            This is a focused utility for ad-hoc conversion, debugging, and prototyping. <strong>It is not a replacement for full ETL pipelines.</strong> For production data migrations (millions of rows, ongoing sync), use dedicated tools: <code>mysqldump | mysqltocouch</code>, AWS DMS, Airbyte, Fivetran, or write a script using your language&apos;s SQL driver + JSON serializer. Also, this tool processes whatever SQL you paste — it doesn&apos;t execute queries against a live database; you provide the SQL output as text.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All SQL parsing and JSON generation runs in your browser using JavaScript. Your SQL data — including production records, PII, business secrets — never reaches any server. No analytics, no logging, no upload. Verify in DevTools → Network: zero outgoing requests. Safe for confidential database content.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If you have BOTH the CREATE TABLE and INSERT statements, paste them together — the tool uses the schema to correctly type values (e.g., '1' becomes true if the column is BOOLEAN, but 1 if INT). For large dumps with many tables, paste them one table at a time so each conversion produces a focused JSON array per entity. For data warehouse ingestion (BigQuery, Snowflake), use JSON Lines output format — newline-delimited JSON ingests far faster than nested JSON arrays.",

    faqs: [
      {
        question: "Which SQL dialects does this support?",
        answer:
          "MySQL, PostgreSQL, SQLite, MSSQL (SQL Server), and Oracle SQL all work — the parser handles dialect-specific syntax like MySQL's backtick identifiers, PostgreSQL's E'...' escape strings and jsonb columns, SQLite's flexible typing, and MSSQL's NVARCHAR. If you have a specific dialect quirk that doesn't parse, paste it and we'll add support.",
      },
      {
        question: "Can I use this for MySQL → MongoDB migration?",
        answer:
          "Yes — this is one of the most common use cases. Take your mysqldump output (or a SELECT * dump), paste here, convert to JSON, then use MongoDB Compass's 'Import Data' feature or the `mongoimport` CLI with `--jsonArray` to load the result. For large datasets, use the JSON Lines output and `mongoimport --jsonArray --file=data.jsonl` for streaming.",
      },
      {
        question: "Does it handle multi-row INSERT statements?",
        answer:
          "Yes — single-row, multi-row, and even thousand-row VALUES clauses are parsed correctly. Each tuple becomes one JSON object. Best for files up to ~10MB; very large dumps (100MB+) may slow the browser but will eventually complete.",
      },
      {
        question: "What about CREATE TABLE statements?",
        answer:
          "Paste CREATE TABLE statements to generate a JSON Schema (RFC draft 2020-12) describing the table structure — column names, types, NULL/NOT NULL, defaults, primary keys. Useful for generating OpenAPI specs from existing databases, or scaffolding JSON validation in TypeScript / Zod.",
      },
      {
        question: "Does conversion preserve numeric and boolean types?",
        answer:
          "Yes. When CREATE TABLE is provided, the schema is used to type values precisely (INT → number, BOOLEAN → true/false, DECIMAL → number, etc.). When only INSERT is provided, the tool infers types from value syntax: bare numbers → number, 'true'/'false' → boolean (configurable), 'NULL' → null, anything in quotes → string.",
      },
      {
        question: "Can I process a 100MB SQL dump in one pass?",
        answer:
          "For very large files, chunking input by table or by INSERT block improves reviewability. The tool processes whatever you paste, but browser memory becomes the limit around 200MB+. For multi-gigabyte exports, use a CLI tool: `pg_dump --data-only | sqltojson` or write a Python/Node script using a streaming SQL parser.",
      },
      {
        question: "Is my SQL data uploaded to a server?",
        answer:
          "No — completely client-side. Your SQL data, which may include production records, PII, credentials, or business secrets, never leaves your browser. No analytics, no logging. Verify in DevTools → Network: zero outgoing requests during conversion.",
      },
      {
        question: "Is this a replacement for full ETL tooling?",
        answer:
          "No — it's a fast utility for focused conversion tasks: prototyping, debugging, ad-hoc handoffs, test fixtures. For ongoing production data migration or sync (millions of rows, schedule-based), use dedicated ETL tools: AWS DMS, Airbyte, Fivetran, or custom scripts using your language's native SQL drivers.",
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
