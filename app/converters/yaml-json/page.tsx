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
    "Convert YAML to JSON and JSON to YAML in your browser for config, API, and automation workflows.",
  metaTitle: "YAML to JSON Converter (with JSON to YAML)",
  metaDescription:
    "Free YAML to JSON converter with reverse JSON to YAML support. Useful for OpenAPI, config files, and developer workflows.",
  path: "/converters/yaml-json",
  keywords: [
    "yaml to json converter",
    "json to yaml converter",
    "openapi yaml to json",
    "yaml parser",
    "json formatter",
    "developer converter",
  ],

  header: {
    title: "YAML to JSON Converter",
    description:
      "Convert YAML and JSON instantly for API specs, config files, and engineering workflows.",
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
      "Browser-based YAML to JSON and JSON to YAML converter for developers.",
    alternateName: ["YAML JSON Converter", "JSON YAML Converter"],
    featureList: [
      "YAML to JSON conversion",
      "JSON to YAML conversion",
      "Live parsing and output",
      "Copy-ready formatted result",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A YAML to JSON Converter is a free tool that transforms YAML configuration files into JSON format for APIs, JavaScript apps, and data processing pipelines.",
    quickAnswer:
      "Paste YAML content to instantly get formatted JSON output. The converter handles multi-line strings, anchors, aliases, and all YAML data types. Copy the JSON result or download it as a file.",
    keyTakeaways: [
      "Converts YAML indentation-based format to JSON brace-based format",
      "Handles YAML anchors (&), aliases (*), and multi-line strings",
      "JSON output is formatted with 2-space indentation for readability",
      "Useful for converting Kubernetes manifests to JSON for API calls",
      "Browser-based processing with no server uploads",
    ],
    overview:
      "Use this tool when you need to switch between YAML and JSON formats quickly. It is helpful for OpenAPI documents, deployment configs, CI files, and API payload checks.",

    howToSteps: [
      "Paste YAML in the YAML panel to generate JSON.",
      "Paste JSON in the JSON panel to generate YAML.",
      "Review formatting and copy the output.",
    ],

    features: [
      "Two-way YAML and JSON conversion",
      "Live output updates while editing",
      "Formatted output for readability",
      "Client-side processing",
      "One-click copy actions",
    ],

    useCases: [
      "Converting OpenAPI specs",
      "Switching CI/CD config formats",
      "Preparing test payloads",
      "Normalizing config files across teams",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML is human-friendly for configuration, while JSON is common in APIs
          and application data exchange. This converter helps you move between
          both without manual reformatting.
        </p>
      </div>
    ),

    proTip:
      "Validate structure after conversion, especially when working with deeply nested arrays and objects.",

    faqs: [
      {
        question: "Can I convert OpenAPI YAML to JSON?",
        answer:
          "Yes. Paste your YAML spec and copy the generated JSON output for tooling that requires JSON.",
      },
      {
        question: "Does this also convert JSON back to YAML?",
        answer:
          "Yes. The converter supports both directions in the same interface.",
      },
      {
        question: "Is data uploaded to a server?",
        answer:
          "No. Conversion happens in your browser.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is free with no signup requirement.",
      },
      {
        question: "What if input syntax is invalid?",
        answer:
          "The tool surfaces parse errors so you can fix structure and rerun conversion.",
      },
    ],

    relatedTools: [
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "JSON to XML Converter", href: "/converters/json-xml" },
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YamlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <YamlJsonConverter />
        </div>
      )}
    />
  )
}
