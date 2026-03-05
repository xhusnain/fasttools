import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YamlTomlConverter = dynamic(
  () =>
    import("@/components/converters/yaml-toml-converter").then(
      (mod) => mod.YamlTomlConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YAML to TOML Converter",
  description:
    "Convert YAML to TOML and TOML to YAML for configuration workflows across tooling ecosystems.",
  metaTitle: "YAML to TOML Converter (with TOML to YAML)",
  metaDescription:
    "Free YAML to TOML converter with reverse TOML to YAML support. Convert configuration formats for development and deployment workflows.",
  path: "/converters/yaml-toml",
  keywords: [
    "yaml to toml converter",
    "toml to yaml converter",
    "config converter",
    "devops config tools",
    "toml formatter",
    "yaml parser",
  ],

  header: {
    title: "YAML to TOML Converter",
    description:
      "Convert YAML and TOML data quickly for config standardization and migration tasks.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "YAML to TOML Converter", href: "/converters/yaml-toml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way converter for YAML and TOML configuration formats.",
    alternateName: ["YAML TOML Converter", "TOML YAML Converter"],
    featureList: [
      "YAML to TOML conversion",
      "TOML to YAML conversion",
      "Config-ready output",
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
      "A YAML to TOML Converter is a free tool that transforms YAML configuration files into TOML format and vice versa.",
    quickAnswer:
      "Paste your YAML content to instantly convert it to TOML, or paste TOML to convert to YAML. The tool preserves data types, nested structures, and comments where possible. Copy or download the result.",
    keyTakeaways: [
      "Converts YAML to TOML and TOML to YAML in real time",
      "Preserves data types: strings, numbers, booleans, arrays, and tables",
      "YAML uses indentation, TOML uses explicit [table] headers",
      "TOML is the standard for Rust (Cargo.toml) and Python (pyproject.toml)",
      "All conversion runs locally in your browser",
    ],
    overview:
      "Use this converter to switch between YAML and TOML formats in seconds. It helps when tools, frameworks, or teams use different configuration standards.",

    howToSteps: [
      "Paste YAML to get TOML output.",
      "Paste TOML to convert back into YAML.",
      "Copy the result into your config files.",
    ],

    features: [
      "Two-way YAML and TOML conversion",
      "Readable formatted output",
      "Live conversion updates",
      "Client-side processing",
      "Copy-ready results",
    ],

    useCases: [
      "Converting project and environment configs",
      "Migrating between tooling ecosystems",
      "Preparing CI/CD configuration files",
      "Validating configuration structure",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML is widely used in infrastructure and deployment files, while TOML
          is common in project-level configurations. This converter reduces
          manual reformatting when moving between both formats.
        </p>
      </div>
    ),

    proTip:
      "After conversion, run a syntax check with your target tool to confirm keys and value types are interpreted as expected.",

    faqs: [
      {
        question: "Can I convert YAML to TOML directly?",
        answer:
          "Yes. Paste YAML into the input panel and copy the generated TOML.",
      },
      {
        question: "Can I also convert TOML back to YAML here?",
        answer: "Yes. The converter supports both directions.",
      },
      {
        question: "Is this useful for configuration migration?",
        answer:
          "Yes. It helps teams migrate and standardize config files across tools.",
      },
      {
        question: "Is conversion local?",
        answer: "Yes. Conversion runs in your browser.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free and available without signup.",
      },
    ],

    relatedTools: [
      { name: "TOML to YAML Converter", href: "/converters/toml-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YamlTomlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <YamlTomlConverter />
        </div>
      )}
    />
  )
}
