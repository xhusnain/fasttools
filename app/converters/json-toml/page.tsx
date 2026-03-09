import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const JsonTomlConverter = dynamic(
  () =>
    import("@/components/converters/json-toml-converter").then(
      (mod) => mod.JsonTomlConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON to TOML Converter",
  description:
    "Convert JSON to TOML and TOML to JSON online. Handles nested objects, arrays, inline tables, and all TOML data types for Cargo.toml, pyproject.toml, Hugo, and config file workflows.",
  metaTitle: "JSON to TOML Converter -- Convert JSON to TOML Online Free (2026)",
  metaDescription:
    "Free JSON to TOML converter with bidirectional TOML to JSON support. Convert nested objects, arrays, and tables for Cargo.toml, pyproject.toml, Hugo configs. Browser-based, no signup.",
  path: "/converters/json-toml",

  header: {
    title: "JSON to TOML Converter",
    description:
      "Convert JSON to TOML and TOML to JSON instantly. Supports nested objects, arrays, inline tables, strings, integers, floats, booleans, and datetime values for Cargo.toml, pyproject.toml, Hugo, and CI/CD configuration files.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "JSON to TOML Converter", href: "/converters/json-toml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online bidirectional converter for JSON and TOML data formats with support for nested tables, arrays, and all TOML v1.0 data types.",
    alternateName: ["JSON TOML Converter", "TOML JSON Converter", "JSON to TOML Online", "TOML Converter"],
    featureList: [
      "JSON to TOML conversion with nested table support",
      "TOML to JSON reverse conversion",
      "Handles arrays, inline tables, and all TOML v1.0 data types",
      "Live real-time conversion with syntax validation",
      "Copy and download converted output",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A JSON to TOML Converter is a free online tool that transforms JSON objects into TOML (Tom's Obvious Minimal Language) configuration format and converts TOML back to JSON, supporting nested tables, arrays, inline tables, and all TOML v1.0 data types.",
    quickAnswer:
      "Paste JSON to instantly convert it to properly formatted TOML output, or paste TOML to convert back to JSON. The converter handles nested objects (mapped to TOML [table] sections), arrays (including arrays of tables [[table]]), strings, integers, floats, booleans, and datetime values. Copy or download the converted output for direct use in your project configuration files.",
    keyTakeaways: [
      "Converts JSON objects to TOML tables and arrays with correct [section] and [[array]] syntax",
      "TOML is required by Cargo.toml (Rust), pyproject.toml (Python/PEP 518), Hugo (Go), and Netlify config",
      "JSON arrays map to TOML arrays, nested objects become [table] sections, arrays of objects become [[table]]",
      "Preserves data types: strings, integers, floats, booleans, and ISO 8601 datetime values",
      "Essential when migrating configuration between JSON-based APIs and TOML-based build tools",
    ],
    overview:
      "This free JSON to TOML converter lets you transform JSON data into valid TOML configuration format and convert TOML back to JSON with full bidirectional support. JSON (JavaScript Object Notation) is the standard data interchange format for web APIs and Node.js configurations, while TOML (Tom's Obvious Minimal Language) is the preferred configuration format for Rust projects (Cargo.toml), Python packaging (pyproject.toml / PEP 518), Hugo static sites, Netlify deployment configs, and many DevOps tools. The converter correctly maps JSON objects to TOML tables with [section] headers, JSON arrays to TOML arrays, and nested object arrays to [[array of tables]] syntax. All conversion runs client-side in your browser with zero data transmitted to any server.",

    howToSteps: [
      "Paste your JSON data into the input panel -- the converter validates syntax and highlights any errors in real time.",
      "View the generated TOML output with proper [table] sections, [[array of tables]], and correctly typed values.",
      "Switch to TOML-to-JSON mode by pasting TOML input to get formatted JSON output with proper nesting.",
      "Copy the converted output to clipboard or download it as a file for direct use in your project configuration.",
      "Verify the output structure matches your target tool's expected TOML schema (e.g., Cargo.toml, pyproject.toml).",
    ],

    features: [
      "Bidirectional JSON to TOML and TOML to JSON conversion with full data type preservation",
      "Properly formatted TOML output with [table] sections and [[array of tables]] syntax",
      "Live real-time conversion with instant syntax validation and error highlighting",
      "100% browser-based client-side processing -- no data sent to servers",
      "One-click copy-to-clipboard and file download for converted output",
      "Handles deeply nested objects, mixed arrays, inline tables, and multiline strings",
    ],

    useCases: [
      "Creating Cargo.toml configuration from JSON API responses or package.json equivalents for Rust projects",
      "Generating pyproject.toml files from existing JSON-based Python project configurations (setuptools to PEP 518 migration)",
      "Converting Hugo site configuration between JSON and TOML formats during theme or framework migrations",
      "Transforming CI/CD pipeline configuration between JSON-based tools and TOML-based deployment platforms like Netlify",
      "Debugging and validating TOML configuration structure by converting to human-readable JSON for inspection",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML (Tom's Obvious Minimal Language) was created by Tom Preston-Werner,
          co-founder of GitHub, as a human-readable configuration file format. Unlike
          JSON, TOML supports comments, has explicit date/time types, and uses a
          clear table-based structure with [section] headers that maps naturally to
          hash tables and dictionaries in most programming languages.
        </p>
        <p>
          The key structural differences between JSON and TOML matter during conversion.
          JSON objects become TOML tables with [section.subsection] dotted key paths.
          JSON arrays of objects become TOML arrays of tables using [[double.bracket]]
          syntax. TOML natively supports ISO 8601 datetime values (2026-03-06T10:30:00Z),
          while JSON represents dates as plain strings. TOML also distinguishes between
          integers and floats, whereas JSON has a single number type.
        </p>
        <p>
          This converter is essential for developers working across ecosystems. Rust
          projects use Cargo.toml for package management and build configuration.
          Python's modern packaging standard (PEP 518) uses pyproject.toml for build
          system requirements, project metadata, and tool configuration. Hugo static
          site generators accept TOML, YAML, or JSON for site configuration. Netlify
          uses netlify.toml for deployment settings. When migrating between these
          ecosystems or building tools that bridge them, this JSON to TOML converter
          eliminates manual reformatting and reduces syntax errors.
        </p>
      </div>
    ),

    proTip:
      "When converting JSON to TOML for Cargo.toml or pyproject.toml, verify that the output [table] sections match the expected schema. TOML requires all keys within a table to appear before the next [table] header -- if your JSON has interleaved keys, the converter handles reordering automatically.",

    faqs: [
      {
        question: "How do I convert JSON to TOML format online?",
        answer:
          "Paste your JSON data into the input panel and the converter instantly generates valid TOML output with proper [table] sections, [[array of tables]] syntax, and correctly typed values. You can copy the result to clipboard or download it as a .toml file for direct use in your project.",
      },
      {
        question: "Does this converter support TOML to JSON conversion too?",
        answer:
          "Yes. This is a bidirectional converter. Switch to TOML-to-JSON mode, paste your TOML content, and get properly formatted JSON output. This is useful for converting Cargo.toml or pyproject.toml files into JSON for API consumption or programmatic processing.",
      },
      {
        question: "Can I use this for Cargo.toml and pyproject.toml files?",
        answer:
          "Yes. The converter generates valid TOML that works with Cargo (Rust package manager), pyproject.toml (Python PEP 518), Hugo site configs, Netlify deployment files, and any other tool that uses TOML v1.0 format. It correctly handles [dependencies], [[bin]], [tool.poetry], and other common TOML table patterns.",
      },
      {
        question: "How does JSON map to TOML structure?",
        answer:
          "JSON objects become TOML tables with [section] headers. Nested objects use dotted paths like [parent.child]. JSON arrays of primitives become TOML arrays (values = [1, 2, 3]). JSON arrays of objects become TOML arrays of tables using [[double.bracket]] syntax. Strings, numbers, booleans, and null values are converted to their TOML equivalents.",
      },
      {
        question: "Is my JSON or TOML data sent to a server during conversion?",
        answer:
          "No. All conversion processing runs entirely in your browser using client-side JavaScript. Your configuration data, API keys, secrets, and other sensitive content never leave your device. This makes the converter safe for use with private project configurations.",
      },
      {
        question: "What TOML data types does the converter support?",
        answer:
          "The converter supports all TOML v1.0 data types: strings (basic and literal), integers, floats, booleans, ISO 8601 datetime values, arrays, inline tables, and standard tables. It correctly distinguishes between integer and float number types and preserves the semantic meaning of your data during conversion.",
      },
      {
        question: "Is this JSON to TOML converter free to use?",
        answer:
          "Yes. This converter is 100% free with no signup, no account registration, and no usage limits. Convert as many JSON and TOML files as you need for your development workflow.",
      },
    ],

    relatedTools: [
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "YAML to TOML Converter", href: "/converters/yaml-toml" },
      { name: "TOML to YAML Converter", href: "/converters/toml-yaml" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonTomlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <JsonTomlConverter />
        </div>
      )}
    />
  )
}
