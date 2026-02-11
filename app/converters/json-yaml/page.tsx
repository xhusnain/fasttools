import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const JsonYamlConverter = dynamic(
  () =>
    import("@/components/converters/json-yaml-converter").then(
      (mod) => mod.JsonYamlConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON to YAML Converter",
  description:
    "Free JSON to YAML converter online. Swagger, OpenAPI JSON to YAML. JSON to YAML schema. For Python, VSCode, CLI. JSON formatter. No signup.",
  metaTitle: "JSON to YAML Converter Online - Swagger, OpenAPI, Python Free",
  metaDescription:
    "Free JSON to YAML converter online. Swagger JSON to YAML, OpenAPI JSON to YAML. For Python, VSCode, CLI. JSON to YAML schema. No signup.",
  path: "/converters/json-yaml",
  keywords: [
    "json to yaml converter online",
    "json to yaml converter",
    "json to yaml converter swagger",
    "openapi json to yaml converter",
    "json to yaml converter python",
    "json to yaml converter vscode",
    "json to yaml converter cli",
    "json to yaml converter npm",
    "json to yaml converter linux",
    "json to yaml converter github",
    "json to yaml schema",
    "json formatter",
    "json to yaml",
  ],

  header: {
    title: "JSON to YAML converter",
    description:
      "Simply convert JSON to YAML with this online live converter.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "JSON to YAML Converter", href: "/converters/json-yaml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free JSON to YAML converter online. Swagger, OpenAPI JSON to YAML. For Python, VSCode, CLI. JSON to YAML schema.",
    alternateName: [
      "JSON to YAML Converter Online",
      "JSON to YAML Converter Swagger",
      "OpenAPI JSON to YAML Converter",
      "JSON to YAML Converter Python",
      "JSON to YAML Converter",
      "YAML to JSON Converter",
    ],
    featureList: [
      "JSON to YAML converter online",
      "Swagger JSON to YAML",
      "OpenAPI JSON to YAML",
      "JSON to YAML schema support",
      "For Python, VSCode, CLI",
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
      "Free JSON to YAML converter online. Convert JSON to YAML for Swagger, OpenAPI, Python, VSCode, CLI. Use as JSON to YAML schema converter or JSON formatter. Paste JSON and get YAML instantly. Supports complex JSON structures. No signup required.",

    howToSteps: [
      "JSON to YAML: Paste your JSON in the Your JSON panel. The YAML output appears instantly.",
      "YAML to JSON: Paste your YAML in the Your YAML panel. The JSON output appears instantly.",
      "Copy YAML or JSON to clipboard with one click.",
    ],

    features: [
      "JSON to YAML: Convert JSON to YAML format",
      "YAML to JSON: Convert YAML to JSON format",
      "Swagger/OpenAPI: Convert API specs between JSON and YAML",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "APIs: Convert Swagger/OpenAPI JSON specs to YAML.",
      "Python: Convert JSON to YAML for config files.",
      "VSCode/CLI: Use for development workflows.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON and YAML are both data formats. JSON is used in APIs and web apps; YAML is popular for config files. This converter transforms between them instantly. JSON is valid YAML—so conversion is always possible when JSON is well-formed.
        </p>
      </div>
    ),

    proTip:
      "JSON is a subset of YAML 1.2, so valid JSON is always valid YAML. This tool converts JSON to readable YAML format.",

    faqs: [
      {
        question: "Can I convert JSON to YAML?",
        answer:
          "Yes. Paste your JSON in the Your JSON panel. The YAML output appears instantly. This free JSON to YAML converter online handles nested objects, arrays, and all JSON types. Copy the result with one click.",
      },
      {
        question: "Can you put JSON in YAML?",
        answer:
          "Yes. JSON is valid YAML 1.2—you can embed JSON directly in YAML. This tool converts JSON to readable YAML format with proper indentation. Paste JSON and get YAML output.",
      },
      {
        question: "Is JSON valid in YAML?",
        answer:
          "Yes. YAML 1.2 includes JSON as a subset. Valid JSON is always valid YAML. This converter transforms JSON into human-readable YAML format with indentation and colons.",
      },
      {
        question: "Is JSON always convertible to YAML?",
        answer:
          "Yes. Valid JSON can always be converted to YAML. This free JSON to YAML converter online handles all JSON structures. Invalid JSON will show an error to help you fix syntax.",
      },
      {
        question: "How to use JSON to YAML converter for Swagger?",
        answer:
          "Paste your Swagger or OpenAPI JSON spec in the Your JSON panel. The YAML output appears instantly. Use this JSON to YAML converter swagger tool for API specs. Copy and use in tools that require YAML.",
      },
      {
        question: "How to convert JSON to YAML in Python?",
        answer:
          "Use this free JSON to YAML converter online—paste JSON and get YAML. For Python code: use PyYAML (yaml.dump(json.loads(json_str))). This tool replaces the need for json to yaml converter python scripts.",
      },
      {
        question: "Is this JSON to YAML converter free?",
        answer:
          "Yes. This JSON to YAML converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Swagger, OpenAPI, Python, VSCode, or CLI workflows.",
      },
    ],

    additionalContent: [
      {
        heading: "JSON to YAML Converter Swagger",
        content:
          "Use this as a JSON to YAML converter for Swagger and OpenAPI specs. Paste your API JSON and get YAML instantly. Ideal for OpenAPI JSON to YAML conversion, importing into tools that expect YAML, or switching between formats. Free and runs in your browser.",
      },
      {
        heading: "JSON to YAML Schema",
        content:
          "Convert JSON Schema or any JSON structure to YAML. Paste your JSON in the Your JSON panel—the JSON to YAML schema conversion outputs valid YAML. Supports nested objects, arrays, and all standard JSON types. Use for config files, API specs, or data migration.",
      },
      {
        heading: "JSON to YAML Converter for Python, VSCode, CLI",
        content:
          "This JSON to YAML converter works for Python projects, VSCode workflows, and CLI usage. Paste JSON from any source—APIs, files, or clipboard. Get YAML for pyproject.toml, config files, or tooling. No json to yaml converter python script or VSCode extension needed—use this free online tool.",
      },
    ],

    relatedTools: [
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "YAML to TOML", href: "/converters/yaml-toml" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonYamlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JsonYamlConverter />
        </div>
      )}
    />
  )
}
