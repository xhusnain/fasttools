import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YamlJsonConverter = dynamic(
  () =>
    import("@/components/converters/yaml-json-converter").then(
      (mod) => mod.YamlJsonConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YAML to JSON Converter",
  description:
    "Free YAML to JSON converter. Swagger YAML to JSON, OpenAPI YAML to JSON. YAML to JSON schema, Postman, Notepad++. JSON formatter & validator. No signup.",
  metaTitle: "YAML to JSON Converter Free - Swagger, OpenAPI, Postman, Schema",
  metaDescription:
    "Free YAML to JSON converter. Swagger YAML to JSON, OpenAPI YAML to JSON. Convert YAML to JSON for Postman, Notepad++. YAML to JSON schema. JSON formatter. No signup.",
  path: "/converters/yaml-json",
  keywords: [
    "yaml to json converter free",
    "yaml to json converter",
    "swagger yaml to json converter",
    "openapi yaml to json converter",
    "yaml to json schema",
    "convert yaml to json postman",
    "convert yaml to json notepad ++",
    "yaml to json online",
    "yaml to json example",
    "yaml to json cli",
    "yaml to xml",
    "json formatter",
    "json validator",
    "yaml to json",
    "json to yaml",
  ],

  header: {
    title: "YAML to JSON converter",
    description:
      "Simply convert YAML to JSON with this online live converter.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "YAML to JSON Converter", href: "/converters/yaml-json" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free YAML to JSON converter. Swagger YAML to JSON, OpenAPI YAML to JSON. YAML to JSON schema. Convert for Postman, Notepad++. JSON formatter.",
    alternateName: [
      "YAML to JSON Converter Free",
      "Swagger YAML to JSON Converter",
      "OpenAPI YAML to JSON Converter",
      "YAML to JSON Converter",
      "JSON to YAML Converter",
      "YAML JSON Converter",
    ],
    featureList: [
      "YAML to JSON converter free",
      "Swagger YAML to JSON conversion",
      "OpenAPI YAML to JSON conversion",
      "YAML to JSON schema support",
      "Convert YAML to JSON for Postman",
      "Live conversion as you type",
      "JSON formatter output",
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
      "Free YAML to JSON converter online. Convert Swagger YAML to JSON, OpenAPI YAML to JSON. YAML to JSON schema for Postman, Notepad++. Use as JSON formatter. Paste YAML or JSON for instant conversion. Supports nested objects, arrays. No signup required.",

    howToSteps: [
      "YAML to JSON: Paste your YAML in the left panel. The JSON output appears instantly.",
      "JSON to YAML: Paste your JSON in the right panel. The YAML output appears instantly.",
      "Copy JSON or YAML to clipboard with one click.",
    ],

    features: [
      "YAML to JSON: Convert YAML configuration to JSON",
      "JSON to YAML: Convert JSON to YAML format",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Config files: Convert YAML configs to JSON for APIs or tooling.",
      "APIs: Convert JSON API responses to YAML for configs.",
      "Development: Switch between formats for different tools.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML and JSON are both data serialization formats. YAML is human-readable and often used for config files; JSON is widely used in APIs and web apps. This tool converts between them instantly.
        </p>
      </div>
    ),

    proTip:
      "Both YAML and JSON support nested structures. Invalid syntax will show an error message to help you fix it.",

    faqs: [
      {
        question: "How to use Swagger YAML to JSON converter?",
        answer:
          "Paste your Swagger/OpenAPI YAML in the Your YAML panel. The JSON output appears instantly. Use this free YAML to JSON converter to convert Swagger specs to JSON for Postman, APIs, or tooling. Copy the result with one click.",
      },
      {
        question: "How to convert YAML to JSON for Postman?",
        answer:
          "Paste your YAML (e.g. OpenAPI/Swagger spec) in the Your YAML panel. The JSON output appears instantly. Copy it and import into Postman. This free YAML to JSON converter works like convert yaml to json postman tools.",
      },
      {
        question: "How to convert YAML to JSON in Notepad++?",
        answer:
          "Copy your YAML from Notepad++, paste it in this YAML to JSON converter. The JSON appears instantly. Copy the result back to Notepad++ or any editor. This free online tool replaces convert yaml to json notepad++ plugins.",
      },
      {
        question: "What is YAML to JSON schema?",
        answer:
          "YAML to JSON schema means converting YAML documents (including JSON Schema in YAML format) to JSON. Paste your YAML in the Your YAML panel—the tool outputs valid JSON. Supports nested structures and schema definitions.",
      },
      {
        question: "Is this YAML to JSON converter free?",
        answer:
          "Yes. This YAML to JSON converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use it for Swagger, OpenAPI, Postman, or any YAML/JSON conversion.",
      },
      {
        question: "How to convert OpenAPI YAML to JSON?",
        answer:
          "Paste your OpenAPI YAML spec in the Your YAML panel. The JSON output appears instantly. This OpenAPI YAML to JSON converter is free and works in your browser. Copy the result for use in APIs or Postman.",
      },
      {
        question: "Does this tool work as a JSON formatter?",
        answer:
          "Yes. The YAML to JSON output is pretty-printed (indented) JSON, which works as a JSON formatter. Paste YAML to get formatted JSON, or paste JSON in the right panel to convert to YAML.",
      },
    ],

    additionalContent: [
      {
        heading: "Swagger YAML to JSON Converter",
        content:
          "Use this tool as a Swagger YAML to JSON converter. Paste your Swagger/OpenAPI YAML spec and get JSON instantly. Ideal for importing into Postman, generating API clients, or converting between formats. Free and runs in your browser.",
      },
      {
        heading: "OpenAPI YAML to JSON Converter",
        content:
          "Convert OpenAPI YAML to JSON with this free online converter. Paste your OpenAPI 3.0 or Swagger 2.0 YAML and get valid JSON. Use for Postman imports, API documentation tools, or CI/CD pipelines. No signup required.",
      },
      {
        heading: "Convert YAML to JSON for Postman",
        content:
          "To convert YAML to JSON for Postman: paste your YAML (OpenAPI, Swagger, or any config) in the Your YAML panel. Copy the JSON output and import it into Postman. This replaces the need for convert yaml to json postman plugins.",
      },
      {
        heading: "YAML to JSON Example",
        content:
          "YAML to JSON example: 'name: John' becomes '{\"name\": \"John\"}'. Nested YAML converts to nested JSON. Arrays and objects are preserved. Paste any YAML in the tool to see the JSON equivalent instantly.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YamlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <YamlJsonConverter />
        </div>
      )}
    />
  )
}
