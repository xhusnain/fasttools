import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TomlJsonConverter = dynamic(
  () =>
    import("@/components/converters/toml-json-converter").then(
      (mod) => mod.TomlJsonConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "TOML to JSON Converter",
  description:
    "Convert TOML to JSON and JSON to TOML instantly online. Supports pyproject.toml, Cargo.toml, Hugo config.toml, Netlify netlify.toml, and all TOML configuration files with full data type preservation.",
  metaTitle: "TOML to JSON Converter — Convert TOML Config Files Online Free (2026)",
  metaDescription:
    "Free TOML to JSON converter with bidirectional JSON to TOML support. Convert pyproject.toml, Cargo.toml, Hugo config.toml, and Netlify configs instantly. Preserves tables, arrays, datetimes. Browser-based, no signup.",
  path: "/converters/toml-json",

  header: {
    title: "TOML to JSON Converter",
    description:
      "Convert TOML to JSON and JSON to TOML instantly in your browser. Supports pyproject.toml, Cargo.toml, Hugo config.toml, Netlify netlify.toml, and all TOML configuration files with full preservation of tables, inline tables, arrays of tables, datetime values, and nested structures.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "TOML to JSON Converter", href: "/converters/toml-json" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way converter for TOML and JSON configuration data. Convert pyproject.toml, Cargo.toml, Hugo config.toml, and Netlify configs between TOML and JSON formats with full data type preservation.",
    alternateName: ["TOML JSON Converter", "JSON TOML Converter", "TOML Parser Online", "Convert TOML to JSON Online"],
    featureList: [
      "Bidirectional TOML to JSON and JSON to TOML conversion",
      "pyproject.toml and Cargo.toml config file conversion",
      "TOML table and inline table to JSON object mapping",
      "Array of tables to JSON array transformation",
      "Datetime, integer, float, and boolean type preservation",
      "Real-time parsing with syntax error detection",
      "Formatted JSON output with proper indentation",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A TOML to JSON Converter is a free online tool that transforms TOML (Tom's Obvious Minimal Language) configuration files into JSON (JavaScript Object Notation) format and vice versa. It maps TOML tables to JSON objects, arrays of tables to JSON arrays, and preserves all TOML data types including strings, integers, floats, booleans, datetimes, and inline tables.",
    quickAnswer:
      "Paste TOML content to instantly get the JSON equivalent with proper nesting and data type preservation. The converter maps TOML [tables] to JSON objects, [[arrays of tables]] to JSON arrays, inline tables to nested objects, and preserves datetime, integer, float, and boolean values. Reverse conversion from JSON to TOML is available in the same interface. Copy the formatted output or download it as a file.",
    keyTakeaways: [
      "Converts TOML [tables] to JSON objects, [[arrays of tables]] to JSON arrays, and inline tables to nested structures",
      "Preserves all TOML data types: strings, integers, floats, booleans, offset datetimes, local datetimes, and local dates",
      "Supports pyproject.toml, Cargo.toml, Hugo config.toml, Netlify netlify.toml, and all TOML v1.0 files",
      "JSON output is formatted with 2-space indentation for maximum readability",
      "100% client-side processing — configuration data never leaves your browser",
    ],
    overview:
      "This TOML to JSON converter is designed for developers working across Python, Rust, Go, and JavaScript ecosystems where configuration files frequently need to switch between formats. Convert pyproject.toml files to JSON for programmatic access in Node.js build scripts, transform Cargo.toml dependency manifests into JSON for analysis and migration tooling, switch Hugo config.toml files to JSON for templating systems that expect JSON input, convert Netlify netlify.toml settings to JSON for CI/CD pipeline configuration, and prepare TOML-based settings for REST APIs and web applications that consume JSON. The converter handles all TOML v1.0 features including dotted keys, multi-line strings, literal strings, inline tables, arrays of tables, and offset datetime values. Syntax errors are highlighted in real time so you can fix TOML structure issues before conversion.",

    howToSteps: [
      "Paste your TOML configuration content (pyproject.toml, Cargo.toml, config.toml, or any TOML file) into the TOML input panel.",
      "Review the auto-generated JSON output with properly mapped tables, arrays, and preserved data types.",
      "Alternatively, paste JSON in the JSON panel to convert it to clean TOML with proper table headers and key-value formatting.",
      "Copy the formatted output with one click or download it as a .json or .toml file for your project configuration.",
    ],

    features: [
      "Bidirectional TOML-to-JSON and JSON-to-TOML conversion in a single interface",
      "Full TOML v1.0 support: tables, inline tables, arrays of tables, dotted keys, and multi-line strings",
      "Data type preservation for strings, integers, floats, booleans, datetimes, and arrays",
      "Real-time parsing with instant output updates and descriptive syntax error messages",
      "Pretty-printed JSON output with consistent 2-space indentation",
      "One-click copy to clipboard and file download support",
      "100% browser-based processing with zero server data transmission",
    ],

    useCases: [
      "Converting pyproject.toml build configurations to JSON for Node.js scripts, CI/CD tooling, or programmatic dependency analysis",
      "Transforming Cargo.toml Rust package manifests into JSON for migration tools, dependency auditing, or cross-language build systems",
      "Switching Hugo static site generator config.toml files to JSON for theme configurations and templating engines",
      "Converting Netlify netlify.toml deployment settings to JSON for infrastructure-as-code pipelines and platform API integration",
      "Preparing TOML-formatted application settings as JSON payloads for REST APIs, web dashboards, or configuration management systems",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML (Tom's Obvious Minimal Language) was created by Tom Preston-Werner (GitHub co-founder) as a configuration file format that prioritizes human readability and unambiguous semantics. Unlike YAML, TOML does not rely on indentation for structure — it uses explicit [table] headers and key = value pairs, making it resistant to whitespace-related errors. TOML v1.0 (released 2021) is the stable specification used by modern tooling.
        </p>
        <p>
          TOML is the standard configuration format for several major ecosystems: Python uses pyproject.toml for project metadata, build system configuration, and tool settings (Black, Ruff, pytest, mypy); Rust uses Cargo.toml for package manifests, dependencies, and build profiles; Go uses go.toml in certain module management tools; Hugo uses config.toml for static site generator settings; and Netlify uses netlify.toml for deployment configuration, redirect rules, and build settings.
        </p>
        <p>
          JSON (JavaScript Object Notation), on the other hand, is the universal data interchange format used by REST APIs, web applications, package managers (package.json, composer.json), configuration tools, and virtually every programming language. Converting between TOML and JSON is necessary when integrating configuration data across different tooling ecosystems — for example, reading pyproject.toml settings in a Node.js build script, analyzing Cargo.toml dependencies with a JSON-based security scanner, or importing TOML-based feature flags into a JSON API configuration endpoint. This converter handles all these scenarios with full data type fidelity.
        </p>
      </div>
    ),

    proTip:
      "After converting pyproject.toml or Cargo.toml to JSON, run your ecosystem's config validation tool (e.g., 'python -m build --check' for Python or 'cargo check' for Rust) on the reverse-converted output to verify structural integrity. TOML datetime values are converted to ISO 8601 strings in JSON — ensure your consuming application parses them correctly.",

    faqs: [
      {
        question: "How do I convert pyproject.toml to JSON for programmatic access?",
        answer:
          "Paste the contents of your pyproject.toml file into the TOML input panel. The converter transforms all sections — [project], [build-system], [tool.black], [tool.pytest.ini_options], and other tool-specific tables — into a nested JSON object. Copy the JSON output for use in Node.js build scripts, CI/CD pipeline configurations, or any application that consumes JSON configuration data.",
      },
      {
        question: "Can I convert Cargo.toml Rust package manifests to JSON?",
        answer:
          "Yes. Paste your Cargo.toml content and the converter maps [package], [dependencies], [dev-dependencies], [features], and [profile] sections into JSON objects. This is useful for dependency auditing tools, cross-language build systems, and migration scripts that need to read Rust package configuration in JSON format.",
      },
      {
        question: "Does the converter handle TOML arrays of tables ([[double brackets]])?",
        answer:
          "Yes. TOML arrays of tables (defined with [[double.bracket.headers]]) are correctly converted to JSON arrays of objects. For example, [[tool.poetry.dependencies]] entries become a JSON array where each element is an object representing one dependency entry with all its key-value pairs preserved.",
      },
      {
        question: "How are TOML datetime values represented in the JSON output?",
        answer:
          "TOML supports four datetime types: offset datetime (2026-03-06T10:30:00-05:00), local datetime (2026-03-06T10:30:00), local date (2026-03-06), and local time (10:30:00). All datetime values are converted to ISO 8601 string representations in JSON, since JSON has no native datetime type. Your consuming application should parse these strings using appropriate date libraries.",
      },
      {
        question: "Can I convert JSON configuration files back to TOML format?",
        answer:
          "Yes. The converter supports bidirectional conversion. Paste JSON in the JSON panel and get clean TOML output with proper [table] headers, key-value formatting, and correct data type representation. This is useful for creating new TOML config files from existing JSON settings or migrating JSON-based configuration to TOML-based tooling.",
      },
      {
        question: "Is my TOML configuration data sent to a server during conversion?",
        answer:
          "No. All TOML parsing and JSON serialization happens entirely in your browser using client-side JavaScript. Your configuration data — including dependency versions, API endpoints, database settings, and any sensitive values — never leaves your machine. This makes the tool safe for converting production configuration files.",
      },
      {
        question: "What TOML features are supported by this converter?",
        answer:
          "The converter supports the full TOML v1.0 specification: standard tables, inline tables, arrays of tables, dotted keys, bare keys, quoted keys, multi-line basic strings, multi-line literal strings, integers (decimal, hex, octal, binary), floats (including inf and nan), booleans, offset datetimes, local datetimes, local dates, local times, arrays, and comments (stripped during conversion since JSON does not support comments).",
      },
    ],

    relatedTools: [
      { name: "JSON to TOML Converter", href: "/converters/json-toml" },
      { name: "TOML to YAML Converter", href: "/converters/toml-yaml" },
      { name: "YAML to TOML Converter", href: "/converters/yaml-toml" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TomlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <TomlJsonConverter />
        </div>
      )}
    />
  )
}
