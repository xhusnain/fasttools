import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TomlYamlConverter = dynamic(
  () =>
    import("@/components/converters/toml-yaml-converter").then(
      (mod) => mod.TomlYamlConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "TOML to YAML Converter",
  description:
    "Convert TOML to YAML and YAML to TOML for configuration files and infrastructure workflows.",
  metaTitle: "TOML to YAML Converter (with YAML to TOML)",
  metaDescription:
    "Free TOML to YAML converter with reverse YAML to TOML support. Useful for config migration, devops workflows, and project setup.",
  path: "/converters/toml-yaml",
  keywords: [
    "toml to yaml converter",
    "yaml to toml converter",
    "config format converter",
    "hugo config converter",
    "alacritty config converter",
    "toml yaml tool",
  ],

  header: {
    title: "TOML to YAML Converter",
    description:
      "Convert configuration content between TOML and YAML in both directions.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "TOML to YAML Converter", href: "/converters/toml-yaml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way converter for TOML and YAML configuration files.",
    alternateName: ["TOML YAML Converter", "YAML TOML Converter"],
    featureList: [
      "TOML to YAML conversion",
      "YAML to TOML conversion",
      "Config-focused output",
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
      "A TOML to YAML Converter is a free tool that transforms TOML configuration files into YAML format for use in different tooling ecosystems.",
    quickAnswer:
      "Paste TOML content to instantly convert it to YAML format. The converter preserves all data types, nested tables, and array structures. Copy the result or download the converted file.",
    keyTakeaways: [
      "Converts TOML tables and arrays to YAML-equivalent structures",
      "YAML is widely used in Docker, Kubernetes, and CI/CD pipelines",
      "TOML is common in Rust, Python, and Hugo configurations",
      "Preserves strings, integers, floats, booleans, and datetime values",
      "Instant browser-based conversion with no server processing",
    ],
    overview:
      "This converter helps teams move config data between TOML and YAML formats. It is practical for project setup, infrastructure files, and environment-specific tooling.",

    howToSteps: [
      "Paste TOML content to generate YAML.",
      "Paste YAML content to generate TOML.",
      "Copy the result and apply it to your target config file.",
    ],

    features: [
      "Two-way TOML and YAML conversion",
      "Formatted config output",
      "Live conversion while editing",
      "Browser-based processing",
      "One-click copy support",
    ],

    useCases: [
      "Migrating service configuration formats",
      "Converting project setup files",
      "Testing config compatibility",
      "Standardizing config across teams",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML and YAML are both common in configuration workflows, but tools
          often require one specific format. This converter helps you switch
          between them safely and quickly.
        </p>
      </div>
    ),

    proTip:
      "After conversion, run your target application's config linter to verify expected structure and value types.",

    faqs: [
      {
        question: "Can I convert TOML configs to YAML?",
        answer:
          "Yes. Paste TOML input and copy the generated YAML output.",
      },
      {
        question: "Does the same tool convert YAML back to TOML?",
        answer: "Yes. It supports both directions.",
      },
      {
        question: "Is this useful for devops configuration work?",
        answer:
          "Yes. It helps with format migration and compatibility checks across tooling.",
      },
      {
        question: "Is conversion done server-side?",
        answer: "No. Conversion is performed in the browser.",
      },
      {
        question: "Is this converter free?",
        answer: "Yes. It is free and requires no signup.",
      },
    ],

    relatedTools: [
      { name: "YAML to TOML Converter", href: "/converters/yaml-toml" },
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "JSON to TOML Converter", href: "/converters/json-toml" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TomlYamlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <TomlYamlConverter />
        </div>
      )}
    />
  )
}
