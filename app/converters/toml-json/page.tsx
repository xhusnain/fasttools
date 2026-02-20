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
    "Convert TOML to JSON and JSON to TOML for config workflows like pyproject.toml and Cargo.toml.",
  metaTitle: "TOML to JSON Converter (with JSON to TOML)",
  metaDescription:
    "Free TOML to JSON converter with reverse JSON to TOML support. Useful for pyproject.toml, Cargo.toml, and config tooling.",
  path: "/converters/toml-json",
  keywords: [
    "toml to json converter",
    "json to toml converter",
    "pyproject toml converter",
    "cargo toml converter",
    "config format converter",
    "toml parser",
  ],

  header: {
    title: "TOML to JSON Converter",
    description:
      "Convert TOML and JSON formats for development, automation, and configuration management.",
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
      "Two-way converter for TOML and JSON configuration data.",
    alternateName: ["TOML JSON Converter", "JSON TOML Converter"],
    featureList: [
      "TOML to JSON conversion",
      "JSON to TOML conversion",
      "Config-focused conversion",
      "Live output",
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
      "Use this converter to transform TOML config files into JSON and back. It is useful for projects that mix tooling ecosystems and file format requirements.",

    howToSteps: [
      "Paste TOML content to generate JSON output.",
      "Paste JSON content to generate TOML output.",
      "Copy and use the result in your project config files.",
    ],

    features: [
      "Two-way TOML and JSON conversion",
      "Formatted output for readability",
      "Live conversion updates",
      "Browser-based processing",
      "One-click copy actions",
    ],

    useCases: [
      "Working with pyproject.toml and Cargo.toml",
      "Converting config files for internal tools",
      "Preparing structured data for scripts",
      "Debugging configuration format issues",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML is popular for developer configuration, while JSON is common in
          APIs and scripting. This converter helps teams move settings and data
          between both formats without manual rewrite.
        </p>
      </div>
    ),

    proTip:
      "After conversion, run your project's config validation to confirm key names and types still match expectations.",

    faqs: [
      {
        question: "Can I convert pyproject.toml to JSON?",
        answer:
          "Yes. Paste TOML content and copy the generated JSON output.",
      },
      {
        question: "Does this tool convert JSON to TOML too?",
        answer: "Yes. Two-way conversion is included in the same interface.",
      },
      {
        question: "Can I use it for Cargo.toml files?",
        answer:
          "Yes. It can convert Cargo.toml content to JSON and back for analysis or migration workflows.",
      },
      {
        question: "Is it browser-based?",
        answer: "Yes. Conversion runs in-browser.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is free and requires no signup.",
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
