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
    "Convert JSON to YAML and YAML to JSON for API specs, config files, and developer workflows.",
  metaTitle: "JSON to YAML Converter (with YAML to JSON)",
  metaDescription:
    "Free JSON to YAML converter with reverse YAML to JSON support. Useful for OpenAPI, config management, and automation.",
  path: "/converters/json-yaml",
  keywords: [
    "json to yaml converter",
    "yaml to json converter",
    "openapi json to yaml",
    "json parser",
    "yaml formatter",
    "developer tools",
  ],

  header: {
    title: "JSON to YAML Converter",
    description:
      "Convert JSON and YAML quickly for engineering workflows and configuration maintenance.",
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
      "Browser-based converter for JSON to YAML and YAML to JSON transformations.",
    alternateName: ["JSON YAML Converter", "YAML JSON Converter"],
    featureList: [
      "JSON to YAML conversion",
      "YAML to JSON conversion",
      "Live conversion updates",
      "Formatted output",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "This converter helps teams move structured data between JSON and YAML formats. It is practical for API docs, deployment configs, and development tooling.",

    howToSteps: [
      "Paste JSON to get YAML output instantly.",
      "Paste YAML to convert back into JSON.",
      "Copy the result into your project or tooling.",
    ],

    features: [
      "Two-way JSON and YAML conversion",
      "Live parsing and formatted output",
      "Copy-ready conversion panels",
      "Client-side processing",
      "Fast for iterative editing",
    ],

    useCases: [
      "OpenAPI spec conversion",
      "Configuration format migration",
      "Integration payload preparation",
      "Developer QA and debugging",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON is a common API format, while YAML is often preferred for
          readability in config and infrastructure files. This tool reduces the
          friction of switching formats during development and deployment.
        </p>
      </div>
    ),

    proTip:
      "If conversion fails, validate your source syntax first, then rerun conversion on clean input.",

    faqs: [
      {
        question: "Can I convert API JSON specs into YAML?",
        answer:
          "Yes. Paste JSON in the input panel and copy the generated YAML for tooling or documentation.",
      },
      {
        question: "Does this page support reverse conversion too?",
        answer:
          "Yes. YAML to JSON conversion is available in the same tool.",
      },
      {
        question: "Is this converter browser-only?",
        answer:
          "Yes. Conversion runs in-browser with no account required.",
      },
      {
        question: "Can I use this for large config files?",
        answer:
          "Yes, but very large files may be easier to manage in chunks for quick troubleshooting.",
      },
      {
        question: "Is JSON always convertible to YAML?",
        answer:
          "Valid JSON can be converted to YAML directly.",
      },
    ],

    relatedTools: [
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "JSON to TOML Converter", href: "/converters/json-toml" },
      { name: "JSON to XML Converter", href: "/converters/json-xml" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonYamlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <JsonYamlConverter />
        </div>
      )}
    />
  )
}
