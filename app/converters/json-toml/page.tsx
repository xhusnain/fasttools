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
    "Free JSON to TOML converter online. json2toml npm alternative. For Python, CLI. TOML to JSON. Streamlit secrets. pyproject.toml, Cargo.toml. No signup.",
  metaTitle: "JSON to TOML Converter Online - Free, Python, CLI, npm",
  metaDescription:
    "Free JSON to TOML converter online. json2toml npm alternative. For Python, CLI. TOML to JSON, TOML converter. Streamlit secrets, pyproject.toml, Cargo.toml. No signup.",
  path: "/converters/json-toml",
  keywords: [
    "json to toml converter online",
    "json to toml online",
    "json to toml",
    "json to toml cli",
    "json to toml python",
    "json to toml npm",
    "json to toml free",
    "json to toml github",
    "toml to json",
    "toml converter",
    "python toml",
    "yaml to toml",
  ],

  header: {
    title: "JSON to TOML",
    description: "Parse and convert JSON to TOML.",
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
      "Free JSON to TOML converter online. json2toml npm alternative. For Python, CLI. TOML to JSON. Streamlit secrets, pyproject.toml, Cargo.toml.",
    alternateName: [
      "JSON to TOML Converter Online",
      "JSON to TOML Converter",
      "JSON to TOML",
      "TOML Converter",
      "TOML to JSON Converter",
      "json2toml",
    ],
    featureList: [
      "JSON to TOML converter online",
      "TOML to JSON converter",
      "json2toml npm alternative",
      "For Python, CLI, Streamlit secrets",
      "pyproject.toml, Cargo.toml support",
      "Live conversion as you type",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free JSON to TOML converter online. Convert JSON to TOML for Python (pyproject.toml), Rust (Cargo.toml), Streamlit secrets. json2toml npm alternative. TOML to JSON supported. Paste JSON or TOML for instant conversion. No signup required.",

    howToSteps: [
      "JSON to TOML: Paste your JSON in the Your JSON panel. The TOML output appears instantly.",
      "TOML to JSON: Paste your TOML in the Your TOML panel. The JSON output appears instantly.",
      "Copy TOML or JSON to clipboard with one click.",
    ],

    features: [
      "JSON to TOML: Convert JSON to TOML format",
      "TOML to JSON: Convert TOML to JSON format",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Streamlit secrets: Convert JSON secrets to TOML format.",
      "pyproject.toml: Convert JSON config to TOML for Python projects.",
      "Cargo.toml: Switch between JSON and TOML for Rust configs.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON and TOML are both data formats. JSON is used in APIs and web
          apps; TOML (Tom&apos;s Obvious, Minimal Language) is popular for config
          files like pyproject.toml and Cargo.toml. This converter transforms
          between them instantly. Streamlit secrets often require JSON to TOML
          conversion.
        </p>
      </div>
    ),

    proTip:
      "TOML uses [section] tables and key = value pairs. JSON uses braces and brackets. This tool handles nested objects and arrays correctly.",

    faqs: [
      {
        question: "Is JSON valid in TOML?",
        answer:
          "No. JSON and TOML are different formats. JSON uses braces {} and brackets []; TOML uses [tables] and key = value. This free JSON to TOML converter online transforms JSON into valid TOML. Paste JSON in the Your JSON panel and get TOML output instantly.",
      },
      {
        question: "What is a TOML file format?",
        answer:
          "TOML (Tom's Obvious, Minimal Language) is a config format used by Python (pyproject.toml), Rust (Cargo.toml), and tools like Hugo. It uses [section] tables and key = value pairs. This JSON to TOML converter online helps you create TOML from JSON.",
      },
      {
        question: "How do I convert JSON to TOML in Python?",
        answer:
          "Use this free JSON to TOML converter online—paste JSON and get TOML. For Python code: use the toml library (toml.dump(json.loads(json_str))). This tool replaces the need for json to toml python scripts. Ideal for pyproject.toml and Streamlit secrets.",
      },
      {
        question: "How to use json2toml npm alternative?",
        answer:
          "This JSON to TOML converter online works as a json2toml npm alternative—no install needed. Paste JSON and get TOML instantly. For Node.js: use the json2toml package. This free tool runs in your browser.",
      },
      {
        question: "How to convert JSON to TOML for Streamlit secrets?",
        answer:
          "Streamlit secrets require TOML format. Paste your JSON secrets in the Your JSON panel. The TOML output appears instantly. Copy and save as .streamlit/secrets.toml. Reference format: [section] key_name = value.",
      },
      {
        question: "Is this JSON to TOML converter free?",
        answer:
          "Yes. This JSON to TOML converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Python, CLI, npm workflows, pyproject.toml, Cargo.toml, or Streamlit secrets.",
      },
    ],

    additionalContent: [
      {
        heading: "JSON to TOML CLI Alternative",
        content:
          "Use this free JSON to TOML converter online as a json to toml cli alternative. Paste JSON and get TOML instantly—no installation. For CLI: use json2toml (npm) or toml (Python). This tool works for quick conversions without setting up tools.",
      },
      {
        heading: "JSON to TOML for Python (pyproject.toml)",
        content:
          "Convert JSON to TOML for Python projects. pyproject.toml uses TOML. Paste JSON config in the Your JSON panel—the JSON to TOML python workflow is covered. Use for Python toml configs, tool settings, or migrating from JSON to TOML.",
      },
      {
        heading: "TOML Converter & TOML to JSON",
        content:
          "This TOML converter supports both JSON to TOML and TOML to JSON. Paste TOML in the Your TOML panel to get JSON. Use for parsing TOML configs, converting Cargo.toml or pyproject.toml to JSON, or integrating with JSON-based tools.",
      },
      {
        heading: "YAML to TOML and JSON to TOML",
        content:
          "For YAML to TOML, use our YAML to TOML converter. This tool focuses on JSON to TOML and TOML to JSON. JSON, YAML, and TOML are all config formats—choose the right converter for your format. All free and client-side.",
      },
    ],

    relatedTools: [
      { name: "YAML to TOML", href: "/converters/yaml-toml" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonTomlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JsonTomlConverter />
        </div>
      )}
    />
  )
}
