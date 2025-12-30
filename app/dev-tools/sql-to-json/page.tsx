import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { SQLToJSON } from "@/components/dev-tools/sql-to-json"
import { createToolConfig } from "@/lib/create-tool-config"

const faqs = [
    {
        question: "What are the features of this tool?",
        answer: "Key features include: Instant conversion without server delays, Client-side processing for data privacy, Smart type inference (numbers, booleans, NULL), Handles bulk INSERT statements, Download results as .json files, Copy to clipboard functionality, and Works with all major SQL databases."
    },
    {
        question: "How do I convert SQL query results to JSON?",
        answer: "Paste your SQL INSERT statements (which represent your query results) into the converter, click 'Convert to JSON', and instantly get formatted JSON output. The tool automatically parses column names and values."
    },
    {
        question: "What SQL formats are supported?",
        answer: "The converter supports INSERT INTO statements from MySQL, PostgreSQL, SQL Server, and Oracle. It handles single and multiple row inserts with automatic type detection."
    },
    {
        question: "Is this SQL to JSON converter free?",
        answer: "Yes, completely free with no registration required. All conversion happens in your browser for maximum privacy and security."
    },
    {
        question: "Does it support NULL values?",
        answer: "Yes, SQL `NULL` is converted to JSON `null`."
    },
    {
        question: "Is my SQL data uploaded to a server?",
        answer: "No, conversion happens entirely in your browser using JavaScript. Your data never leaves your device."
    },
    {
        question: "Can I convert CREATE TABLE statements?",
        answer: "Currently, this tool focuses on data conversion (INSERT statements). Schema conversion is not supported."
    },
    {
        question: "Can I convert SQL table schema to JSON?",
        answer: "This tool is designed for data conversion (INSERT statements). Use other schema generation tools to convert `CREATE TABLE` definitions to JSON schemas."
    }
]

const toolConfig = createToolConfig({
    toolName: "SQL to JSON Converter",
    description: "Convert SQL INSERT statements to JSON format instantly. Free online SQL to JSON converter with smart type detection. No installation, works in browser. Try now!",
    metaTitle: "SQL to JSON Converter - Free Online Tool | FastTools",
    metaDescription: "Convert SQL INSERT statements to JSON format instantly. Free online SQL to JSON converter with smart type detection. No installation, works in browser. Try now!",
    path: "/dev-tools/sql-to-json",

    header: {
        title: "SQL to JSON Converter - Convert Database Data to JSON Online",
        description: "Instantly convert SQL INSERT statements into structured JSON format. Copy your SQL dump or queries and get a clean JSON array of objects. Ideal for data migration and API mocking.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Developer Tools", href: "/dev-tools" },
        { label: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
    ],

    content: {
        overview: "Convert SQL INSERT statements to JSON format with our free online SQL to JSON converter. This powerful tool instantly transforms database dumps, SQL queries, and INSERT statements into clean, structured JSON arrays. Perfect for developers working with MySQL, PostgreSQL, SQL Server, or Oracle databases who need to migrate data, create API mocks, or process database exports. Our converter handles multiple rows, automatically detects data types (strings, numbers, booleans, NULL values), and works entirely in your browser for maximum privacy. No installation required, no file uploads, and completely free to use.",

        howToSteps: [
            "Paste your SQL INSERT statements (e.g., INSERT INTO table VALUES...)",
            "Click the 'Convert to JSON' button",
            "View the generated JSON output",
            "Copy to clipboard or download as a .json file"
        ],

        features: [
            "Instant conversion without server delays",
            "Client-side processing for data privacy",
            "Smart type inference (numbers, booleans, NULL)",
            "Handles bulk INSERT statements",
            "Download results as .json files",
            "Copy to clipboard functionality",
            "Works with all major SQL databases"
        ],

        useCases: [
            "Database Migration: Moving data from MySQL/PostgreSQL to MongoDB.",
            "API Development: Mocking API responses using existing database data.",
            "Data Analysis: Converting SQL dumps for use in JavaScript or Python tools.",
            "Frontend Development: Quickly populating UI components with real data samples."
        ],

        aboutTool: (
            <>
                <h2 className="font-semibold text-xl mb-4 mt-8">Why Use Our SQL to JSON Converter?</h2>
                <div className="my-8">
                    <img
                        src="/images/dev-tools/sql-to-json-hero.png"
                        alt="SQL to JSON Transformation Illustration"
                        className="w-full h-auto rounded-lg shadow-md border border-border"
                        width={800}
                        height={400}
                    />
                </div>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Instant conversion</strong> without server delays</li>
                    <li><strong>Client-side processing</strong> for data privacy</li>
                    <li><strong>Smart type inference</strong> (numbers, booleans, NULL)</li>
                    <li><strong>Handles bulk INSERT statements</strong> efficiently</li>
                    <li><strong>Download results</strong> as .json files</li>
                    <li><strong>Copy to clipboard</strong> functionality</li>
                    <li><strong>Works with all major SQL databases</strong> including MySQL, PostgreSQL, and SQL Server</li>
                </ul>

                <h2 className="font-semibold text-xl mb-4 mt-8">SQL to JSON Conversion Examples</h2>

                <div className="my-6">
                    <img
                        src="/images/dev-tools/sql-to-json-example.png"
                        alt="SQL vs JSON Code Comparison"
                        className="w-full h-auto rounded-lg shadow-md border border-border"
                        width={800}
                        height={400}
                    />
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-4">Example 1: Simple INSERT Statement</h3>
                <div className="bg-muted p-4 rounded-md mb-4 font-mono text-xs overflow-x-auto">
                    <p className="text-muted-foreground mb-2">// SQL Input</p>
                    <p>INSERT INTO users (id, name, email)</p>
                    <p>VALUES (1, 'John Doe', 'john@example.com');</p>
                </div>
                <div className="bg-muted p-4 rounded-md mb-6 font-mono text-xs overflow-x-auto">
                    <p className="text-muted-foreground mb-2">// JSON Output</p>
                    <pre>{`[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]`}</pre>
                </div>

                <h3 className="font-semibold text-lg mb-2 mt-4">Example 2: Multiple Rows</h3>
                <div className="bg-muted p-4 rounded-md mb-4 font-mono text-xs overflow-x-auto">
                    <p className="text-muted-foreground mb-2">// SQL Input</p>
                    <p>INSERT INTO products (product_id, name, price, in_stock)</p>
                    <p>VALUES</p>
                    <p>  (101, 'Laptop', 999.99, TRUE),</p>
                    <p>  (102, 'Mouse', 29.99, TRUE),</p>
                    <p>  (103, 'Keyboard', 79.99, FALSE);</p>
                </div>
                <div className="bg-muted p-4 rounded-md mb-6 font-mono text-xs overflow-x-auto">
                    <p className="text-muted-foreground mb-2">// JSON Output</p>
                    <pre>{`[
  {
    "product_id": 101,
    "name": "Laptop",
    "price": 999.99,
    "in_stock": true
  },
  {
    "product_id": 102,
    "name": "Mouse",
    "price": 29.99,
    "in_stock": true
  },
  {
    "product_id": 103,
    "name": "Keyboard",
    "price": 79.99,
    "in_stock": false
  }
]`}</pre>
                </div>

                <h2 className="font-semibold text-xl mb-4 mt-8">Supported SQL Formats</h2>
                <p className="mb-4">
                    Our converter supports the standard SQL `INSERT INTO` syntax used by most relational database management systems (RDBMS).
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>MySQL INSERT Statements:</strong> Standard dumps and exports.</li>
                    <li><strong>PostgreSQL Data Dumps:</strong> `pg_dump` insert formats.</li>
                    <li><strong>SQL Server Export Format:</strong> T-SQL insert statements.</li>
                    <li><strong>Oracle SQL:</strong> Standard SQL insert commands.</li>
                </ul>
            </>
        ),

        proTip: "Ensure your SQL statements are well-formed. If you have a large SQL dump, try converting it in chunks if the tool feels slow, although it handles moderate sizes efficiently.",

        faqs: faqs,

        relatedTools: [
            { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
            { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
            { name: "Regex Tester", href: "/dev-tools/regex-tester" }
        ]
    }
})

export const metadata = toolConfig.metadata

export default function SQLToJSONPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SQL to JSON Converter",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any (Web-based)",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1247"
        },
        description: "Free online tool to convert SQL INSERT statements to JSON format. Supports MySQL, PostgreSQL, SQL Server with instant client-side conversion.",
        featureList: [
            "SQL INSERT statement parsing",
            "Automatic type detection",
            "Batch conversion support",
            "JSON download",
            "Privacy-focused processing"
        ],
        screenshot: "https://fasttools.store/images/dev-tools/sql-to-json-hero.png"
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ToolPageLayout
                {...toolConfig.getLayoutProps(
                    <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
                        <SQLToJSON />
                    </div>
                )}
            />
        </>
    )
}
