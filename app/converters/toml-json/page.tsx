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
    "Free TOML to JSON converter online. toml2json CLI alternative. For Python, npm. JSON to TOML. pyproject.toml, Cargo.toml. No signup.",
  metaTitle: "TOML to JSON Converter Online - Free, Python, npm, CLI",
  metaDescription:
    "Free TOML to JSON converter online. toml2json CLI alternative. TOML to JSON for Python, npm. JSON to TOML. pyproject.toml, Cargo.toml. No signup.",
  path: "/converters/toml-json",
  keywords: [
    "toml to json converter online",
    "toml to json online",
    "toml to json",
    "toml to json cli",
    "toml to json python",
    "toml to json npm",
    "toml to json github",
    "toml to yaml",
    "yaml to json",
    "python toml",
    "toml",
    "json to toml",
  ],

  header: {
    title: "TOML to JSON converter",
    description: "Parse and convert TOML to JSON.",
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
      "Free TOML to JSON converter online. toml2json CLI alternative. For Python, npm. JSON to TOML. pyproject.toml, Cargo.toml.",
    alternateName: [
      "TOML to JSON Converter Online",
      "TOML to JSON Converter",
      "TOML to JSON",
      "toml2json",
      "JSON to TOML Converter",
    ],
    featureList: [
      "TOML to JSON converter online",
      "JSON to TOML converter",
      "toml2json CLI alternative",
      "For Python, npm, pyproject.toml, Cargo.toml",
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
      "Free TOML to JSON converter online. Convert TOML to JSON for Python (pyproject.toml), Rust (Cargo.toml). toml2json CLI alternative. JSON to TOML supported. Paste TOML or JSON for instant conversion. No signup required.",

    howToSteps: [
      "TOML to JSON: Paste your TOML in the Your TOML panel. The JSON output appears instantly.",
      "JSON to TOML: Paste your JSON in the Your JSON panel. The TOML output appears instantly.",
      "Copy JSON or TOML to clipboard with one click.",
    ],

    features: [
      "TOML to JSON: Convert TOML configs to JSON format",
      "JSON to TOML: Convert JSON to TOML format",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "pyproject.toml: Convert TOML to JSON for Python tooling.",
      "Cargo.toml: Convert Rust config to JSON for processing.",
      "Golang: Convert TOML to JSON without CLI tools.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML (Tom&apos;s Obvious, Minimal Language) and JSON are both data
          formats. TOML is used for config files like pyproject.toml and
          Cargo.toml; JSON is used in APIs and web apps. This converter
          transforms between them instantly. Use as a toml2json CLI alternative
          or for Python toml parsing.
        </p>
      </div>
    ),

    proTip:
      "TOML uses [section] tables and key = value pairs. JSON uses braces and brackets. This tool parses TOML and outputs valid, formatted JSON.",

    faqs: [
      {
        question: "Is JSON valid in TOML?",
        answer:
          "No. TOML and JSON are different formats. TOML uses [tables] and key = value; JSON uses {} and []. This free TOML to JSON converter online transforms TOML into valid JSON. Paste TOML in the Your TOML panel and get JSON output instantly.",
      },
      {
        question: "How to parse a TOML file?",
        answer:
          "Paste your TOML content in the Your TOML panel. This TOML to JSON converter parses TOML and outputs JSON. For Python: use the toml library. For npm: use @iarna/toml. This tool works as a toml2json online converter—no install needed.",
      },
      {
        question: "How to convert TOML to JSON in Python?",
        answer:
          "Use this free TOML to JSON converter online—paste TOML and get JSON. For Python code: use the toml library (json.dumps(toml.loads(toml_str))). This tool replaces the need for toml to json python scripts.",
      },
      {
        question: "Is there a toml2json npm alternative?",
        answer:
          "Yes. This TOML to JSON converter online works as a toml2json npm alternative—no install needed. Paste TOML and get JSON instantly. For Node.js: use @iarna/toml (TOML.parse) then JSON.stringify.",
      },
      {
        question: "What opens TOML files?",
        answer:
          "TOML files are text files. Open with any text editor. To convert TOML to JSON, paste the content into this free TOML to JSON converter online. Supports pyproject.toml, Cargo.toml, and any TOML config.",
      },
      {
        question: "Is this TOML to JSON converter free?",
        answer:
          "Yes. This TOML to JSON converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Python, npm, CLI workflows, pyproject.toml, or Cargo.toml.",
      },
    ],

    additionalContent: [
      {
        heading: "TOML to JSON CLI Alternative",
        content:
          "Use this free TOML to JSON converter online as a toml2json CLI alternative. Paste TOML and get JSON instantly—no installation. For CLI: use toml2json (Rust), or Python toml + json modules. This tool handles quick conversions in the browser.",
      },
      {
        heading: "TOML to JSON for Python (pyproject.toml)",
        content:
          "Convert pyproject.toml or any Python toml config to JSON. Paste TOML in the Your TOML panel—the TOML to JSON python workflow is covered. Use for tooling, config processing, or migrating from TOML to JSON.",
      },
      {
        heading: "TOML to YAML and YAML to JSON",
        content:
          "For TOML to YAML, use our YAML to TOML converter in reverse—paste TOML and get YAML. For YAML to JSON, use our YAML to JSON converter. This tool focuses on TOML to JSON and JSON to TOML. All free and client-side.",
      },
    ],

    relatedTools: [
      { name: "JSON to TOML Converter", href: "/converters/json-toml" },
      { name: "YAML to TOML", href: "/converters/yaml-toml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TomlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TomlJsonConverter />
        </div>
      )}
    />
  )
}
