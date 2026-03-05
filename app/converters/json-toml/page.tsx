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
    "Convert JSON to TOML and TOML to JSON for configuration and developer tooling workflows.",
  metaTitle: "JSON to TOML Converter (with TOML to JSON)",
  metaDescription:
    "Free JSON to TOML converter with reverse TOML to JSON support. Useful for pyproject.toml, Cargo.toml, and app config files.",
  path: "/converters/json-toml",
  keywords: [
    "json to toml converter",
    "toml to json converter",
    "json config converter",
    "pyproject toml",
    "cargo toml",
    "toml formatter",
  ],

  header: {
    title: "JSON to TOML Converter",
    description:
      "Convert JSON and TOML quickly for project configuration and deployment workflows.",
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
      "Two-way converter for JSON and TOML data formats.",
    alternateName: ["JSON TOML Converter", "TOML JSON Converter"],
    featureList: [
      "JSON to TOML conversion",
      "TOML to JSON conversion",
      "Config-friendly output",
      "Live conversion",
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
      "A JSON to TOML Converter is a free tool that transforms JSON objects into TOML configuration format for tools that require TOML input.",
    quickAnswer:
      "Paste JSON to instantly convert it to TOML format, or paste TOML to convert back to JSON. Handles nested objects, arrays, and all standard data types. Copy or download the converted output.",
    keyTakeaways: [
      "Converts JSON objects to TOML tables and vice versa",
      "TOML is required by Cargo (Rust), pyproject (Python), and Hugo",
      "JSON arrays map to TOML arrays, nested objects to [table] sections",
      "Handles strings, numbers, booleans, and null values correctly",
      "Useful when migrating configuration between JSON-based and TOML-based tools",
    ],
    overview:
      "Use this converter to move configuration data between JSON and TOML. It is helpful when integrating tools that depend on different config standards.",

    howToSteps: [
      "Paste JSON to produce TOML output.",
      "Paste TOML to convert back to JSON.",
      "Copy the output into your target config file.",
    ],

    features: [
      "Two-way JSON and TOML conversion",
      "Formatted conversion output",
      "Live conversion updates",
      "Browser-based processing",
      "Fast copy-to-clipboard workflow",
    ],

    useCases: [
      "Creating TOML configs from JSON sources",
      "Converting TOML configs for API tooling",
      "Migrating app settings across toolchains",
      "Debugging configuration structure issues",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON is common in web and API ecosystems, while TOML is frequently
          used in project configuration. This tool simplifies conversion between
          both formats for engineering teams.
        </p>
      </div>
    ),

    proTip:
      "When converting to TOML, check section grouping and key paths to ensure they align with your target application's expected structure.",

    faqs: [
      {
        question: "Can I convert JSON directly to TOML?",
        answer:
          "Yes. Paste JSON in the input panel and the tool generates TOML output instantly.",
      },
      {
        question: "Does it also convert TOML back to JSON?",
        answer: "Yes. Reverse conversion is built in.",
      },
      {
        question: "Is this useful for pyproject.toml or Cargo.toml work?",
        answer:
          "Yes. It is useful for editing, comparing, and migrating TOML-based project configuration.",
      },
      {
        question: "Is my data processed locally?",
        answer: "Yes. Conversion runs in your browser.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free with no signup requirement.",
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
