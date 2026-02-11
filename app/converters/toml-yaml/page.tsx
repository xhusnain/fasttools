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
    "Free TOML to YAML converter online. Convert TOML to YAML for Hugo, Alacritty, pyproject.toml, Cargo.toml. YAML vs TOML. YAML to JSON. No signup.",
  metaTitle: "TOML to YAML Converter Online - Free, Hugo, Alacritty, Config",
  metaDescription:
    "Free TOML to YAML converter online. Convert TOML to YAML for Hugo, Alacritty, pyproject.toml, Cargo.toml. YAML vs TOML. No signup.",
  path: "/converters/toml-yaml",
  keywords: [
    "toml to yaml online",
    "toml to yaml converter online",
    "toml to yaml",
    "toml to yaml github",
    "alacritty yaml to toml",
    "json to toml",
    "yaml to json",
    "yaml vs toml",
  ],

  header: {
    title: "TOML to YAML converter",
    description: "Parse and convert TOML to YAML.",
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
      "Free TOML to YAML converter online. Convert TOML to YAML for Hugo, Alacritty, pyproject.toml, Cargo.toml. YAML vs TOML.",
    alternateName: [
      "TOML to YAML Converter Online",
      "TOML to YAML Converter",
      "TOML to YAML",
      "YAML to TOML Converter",
    ],
    featureList: [
      "TOML to YAML converter online",
      "YAML to TOML converter",
      "Hugo, Alacritty config conversion",
      "pyproject.toml, Cargo.toml support",
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
      "Free TOML to YAML converter online. Convert TOML to YAML for Hugo config, Alacritty, Python (pyproject.toml), Rust (Cargo.toml). YAML vs TOML comparison. Paste TOML or YAML for instant conversion. No signup required.",

    howToSteps: [
      "TOML to YAML: Paste your TOML in the Your TOML panel. The YAML output appears instantly.",
      "YAML to TOML: Paste your YAML in the Your YAML panel. The TOML output appears instantly.",
      "Copy YAML or TOML to clipboard with one click.",
    ],

    features: [
      "TOML to YAML: Convert TOML configs to YAML format",
      "YAML to TOML: Convert YAML to TOML format",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Hugo: Convert config.toml or front matter to YAML.",
      "Alacritty: Convert alacritty.toml to alacritty.yml.",
      "pyproject.toml / Cargo.toml: Switch between TOML and YAML formats.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML and YAML are human-readable config formats. TOML is used by
          Python (pyproject.toml), Rust (Cargo.toml), and Hugo; YAML is used by
          Alacritty, Kubernetes, and Ansible. This converter transforms between
          them instantly. YAML vs TOML: TOML is minimal and explicit; YAML is
          flexible and indentation-based.
        </p>
      </div>
    ),

    proTip:
      "For Hugo: use convert toYAML for front matter. For Alacritty: paste alacritty.toml and get alacritty.yml. Both directions supported.",

    faqs: [
      {
        question: "Is TOML the same as YAML?",
        answer:
          "No. TOML and YAML are different formats. TOML uses [tables] and key = value; YAML uses indentation and colons. This free TOML to YAML converter online transforms between them. Paste TOML in the Your TOML panel to get YAML, or paste YAML to get TOML.",
      },
      {
        question: "How to parse a TOML file?",
        answer:
          "Paste your TOML content in the Your TOML panel. This TOML to YAML converter parses TOML and outputs YAML. For Python: use the toml library. For npm: use @iarna/toml. This tool works as an online converter—no install needed.",
      },
      {
        question: "Can I convert JSON to YAML?",
        answer:
          "Yes. Use our YAML to JSON converter for JSON to YAML. This tool focuses on TOML to YAML and YAML to TOML. For config format conversions, we have JSON to TOML, TOML to JSON, and YAML to JSON tools.",
      },
      {
        question: "Is JSON valid in TOML?",
        answer:
          "No. TOML and JSON are different formats. Use our TOML to JSON converter for that direction. This tool converts TOML to YAML and YAML to TOML—ideal for Hugo, Alacritty, and config migrations.",
      },
      {
        question: "How to convert Alacritty TOML to YAML?",
        answer:
          "Paste your alacritty.toml content in the Your TOML panel. The YAML output appears instantly. Copy and save as alacritty.yml. This free TOML to YAML converter online handles Alacritty config conversion.",
      },
      {
        question: "Is this TOML to YAML converter free?",
        answer:
          "Yes. This TOML to YAML converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Hugo, Alacritty, pyproject.toml, Cargo.toml, or any TOML/YAML conversion.",
      },
    ],

    additionalContent: [
      {
        heading: "TOML to YAML for Hugo",
        content:
          "Convert Hugo config.toml or front matter to YAML. Paste TOML in the Your TOML panel—the YAML output appears instantly. Hugo supports convert toYAML for front matter; this tool helps with config and bulk conversion. Free and client-side.",
      },
      {
        heading: "Alacritty YAML to TOML",
        content:
          "For Alacritty yaml to toml (converting alacritty.yml to alacritty.toml), paste YAML in the Your YAML panel. For TOML to YAML (alacritty.toml to alacritty.yml), paste TOML in the left panel. This free TOML to YAML converter online supports both directions.",
      },
      {
        heading: "YAML vs TOML",
        content:
          "YAML vs TOML: YAML uses indentation and colons; TOML uses [section] tables and key = value. TOML is used by Python (pyproject.toml), Rust (Cargo.toml), Hugo. YAML is used by Alacritty, Kubernetes, Ansible. This converter helps you switch between formats.",
      },
    ],

    relatedTools: [
      { name: "YAML to TOML", href: "/converters/yaml-toml" },
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
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TomlYamlConverter />
        </div>
      )}
    />
  )
}
