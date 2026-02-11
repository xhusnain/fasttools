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
  toolName: "YAML to TOML",
  description:
    "Free YAML to TOML converter online. Ansible convert YAML to TOML. TOML formatter, format TOML online. YAML vs TOML example. JSON to TOML. No signup.",
  metaTitle: "YAML to TOML Online - Convert YAML to TOML, TOML Formatter Free",
  metaDescription:
    "Free YAML to TOML converter online. Ansible convert YAML to TOML. TOML formatter, format TOML online. YAML vs TOML example. JSON to TOML. No signup.",
  path: "/converters/yaml-toml",
  keywords: [
    "yaml to toml online",
    "yaml to toml",
    "yaml to toml converter",
    "ansible convert yaml to toml",
    "yaml vs toml example",
    "toml vs yaml for config",
    "json to toml",
    "format toml online",
    "toml formatter",
    "convert yaml to toml",
    "toml to yaml",
  ],

  header: {
        title: "YAML to TOML",
    description:
      "Parse and convert YAML to TOML.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "YAML to TOML", href: "/converters/yaml-toml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free YAML to TOML converter online. Ansible convert YAML to TOML. TOML formatter, format TOML online. YAML vs TOML. JSON to TOML.",
    alternateName: [
      "YAML to TOML Online",
      "YAML to TOML Converter",
      "TOML Formatter",
      "Format TOML Online",
      "JSON to TOML Converter",
      "TOML to YAML Converter",
    ],
    featureList: [
      "YAML to TOML online conversion",
      "Ansible convert YAML to TOML",
      "TOML formatter output",
      "Format TOML online",
      "JSON to TOML conversion",
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
      "Free YAML to TOML converter online. Convert YAML to TOML for Ansible, Python (pyproject.toml), Rust (Cargo.toml). Use as TOML formatter or format TOML online. YAML vs TOML example included. JSON to TOML and TOML to YAML supported. Paste YAML or TOML for instant conversion. No signup required.",

    howToSteps: [
      "YAML to TOML: Paste your YAML in the Your YAML panel. The TOML output appears instantly.",
      "TOML to YAML: Paste your TOML in the Your TOML panel. The YAML output appears instantly.",
      "Copy TOML or YAML to clipboard with one click.",
    ],

    features: [
      "YAML to TOML: Convert YAML configs to TOML format",
      "TOML to YAML: Convert TOML to YAML format",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Config files: Convert YAML configs to TOML for Python, Rust, or other tools.",
      "pyproject.toml: Convert YAML to TOML for Python projects.",
      "Cargo.toml: Switch between YAML and TOML formats.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML and TOML are human-readable config formats. TOML is used by Python (pyproject.toml), Rust (Cargo.toml), and many tools. This converter transforms between YAML and TOML instantly.
        </p>
      </div>
    ),

    proTip:
      "Both YAML and TOML support nested structures. Invalid syntax will show an error message.",

    faqs: [
      {
        question: "How to use YAML to TOML online?",
        answer:
          "Paste your YAML in the Your YAML panel. The TOML output appears instantly. Use this free YAML to TOML online converter for config files, Ansible, pyproject.toml, or Cargo.toml. Copy the result with one click.",
      },
      {
        question: "How to convert Ansible YAML to TOML?",
        answer:
          "Paste your Ansible YAML playbook or vars in the Your YAML panel. This tool works as an Ansible convert YAML to TOML converter—output appears instantly. Use for migrating Ansible configs to TOML or other tools that require TOML.",
      },
      {
        question: "What is YAML vs TOML example?",
        answer:
          "YAML vs TOML example: YAML uses indentation (user, then name: John). TOML uses [tables] and key = value ([user] name = John). This converter shows both—paste YAML to see the TOML equivalent, or paste TOML to see YAML.",
      },
      {
        question: "TOML vs YAML for config—which to use?",
        answer:
          "TOML vs YAML for config: TOML is minimal, explicit, used by Python (pyproject.toml), Rust (Cargo.toml). YAML is flexible, indentation-based. Use this tool to convert between them. TOML has better native date/time support; YAML is more concise for nested data.",
      },
      {
        question: "How to format TOML online?",
        answer:
          "Paste your TOML in the Your TOML panel and convert to YAML, or paste YAML to get formatted TOML. This free format TOML online tool outputs clean, indented TOML. Works as a TOML formatter for config files.",
      },
      {
        question: "How to convert JSON to TOML?",
        answer:
          "Convert JSON to TOML: use our YAML to JSON converter first to get YAML, then paste that YAML here. Or use the TOML to YAML panel—paste TOML and get YAML. For direct JSON to TOML, paste JSON as YAML (JSON is valid YAML) in the Your YAML panel.",
      },
      {
        question: "Is this YAML to TOML converter free?",
        answer:
          "Yes. This YAML to TOML converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Ansible, Python, Rust, or any YAML/TOML conversion.",
      },
    ],

    additionalContent: [
      {
        heading: "Ansible Convert YAML to TOML",
        content:
          "Use this tool to convert Ansible YAML to TOML. Paste your Ansible playbook, vars, or inventory in YAML format. The TOML output appears instantly. Free and runs in your browser—no data sent to servers. Ideal for migrating Ansible configs or using TOML in tooling.",
      },
      {
        heading: "YAML vs TOML Example",
        content:
          "YAML vs TOML example: YAML uses indentation and colons. TOML uses [section] tables and key = value pairs. TOML is more explicit; YAML is more compact. This converter transforms between them instantly. Paste YAML to see TOML, or TOML to see YAML.",
      },
      {
        heading: "TOML Formatter & Format TOML Online",
        content:
          "Use this tool as a TOML formatter. Paste YAML to get formatted TOML output, or paste TOML in the right panel to convert to YAML. The output is clean, properly indented TOML—ideal for format TOML online needs. Free and client-side.",
      },
      {
        heading: "TOML vs YAML for Config",
        content:
          "TOML vs YAML for config: TOML is minimal, used by Python (pyproject.toml), Rust (Cargo.toml), and Hugo. YAML is flexible, used by Ansible, Kubernetes, and CI/CD. This converter helps you switch between formats. Paste either format for instant conversion.",
      },
    ],

    relatedTools: [
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YamlTomlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <YamlTomlConverter />
        </div>
      )}
    />
  )
}
