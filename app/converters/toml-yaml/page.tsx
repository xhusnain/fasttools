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
    "Convert TOML to YAML and YAML to TOML instantly online. Migrate configuration files between Rust/Python TOML ecosystems and Kubernetes/Docker/CI-CD YAML ecosystems with full data type preservation.",
  metaTitle: "TOML to YAML Converter — Convert Config Files Between Formats Free",
  metaDescription:
    "Free TOML to YAML converter with bidirectional YAML to TOML support. Migrate configs between Cargo.toml, pyproject.toml and Kubernetes YAML, Docker Compose, GitHub Actions. Preserves tables, arrays, datetimes. No signup.",
  path: "/converters/toml-yaml",

  header: {
    title: "TOML to YAML Converter",
    description:
      "Convert TOML to YAML and YAML to TOML instantly in your browser. Migrate configuration files between TOML-based ecosystems (Cargo.toml, pyproject.toml, Hugo, Netlify) and YAML-based ecosystems (Kubernetes, Docker Compose, GitHub Actions, Ansible) with full data type and structure preservation.",
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
      "Two-way converter for TOML and YAML configuration files. Migrate configs between Rust, Python, Hugo TOML ecosystems and Kubernetes, Docker, CI/CD YAML ecosystems with full data type preservation.",
    alternateName: ["TOML YAML Converter", "YAML TOML Converter", "TOML to YAML Online", "Config Format Converter"],
    featureList: [
      "Bidirectional TOML to YAML and YAML to TOML conversion",
      "Cargo.toml and pyproject.toml to YAML migration",
      "TOML table to YAML mapping hierarchy conversion",
      "Array of tables to YAML sequence transformation",
      "Datetime, integer, float, and boolean type preservation",
      "Real-time parsing with syntax error detection",
      "Formatted YAML output with proper indentation",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A TOML to YAML Converter is a free online tool that transforms TOML (Tom's Obvious Minimal Language) configuration files into YAML (YAML Ain't Markup Language) format and vice versa. It maps TOML tables to YAML mappings, TOML arrays of tables to YAML sequences, and preserves all data types including strings, integers, floats, booleans, and datetime values across both formats.",
    quickAnswer:
      "Paste TOML content to instantly convert it to YAML with proper indentation hierarchy. The converter maps TOML [tables] to YAML mapping keys, [[arrays of tables]] to YAML sequences, inline tables to nested mappings, and preserves all data types. Reverse conversion from YAML to TOML is available in the same interface. Copy the formatted output or download it as a file for your project.",
    keyTakeaways: [
      "Converts TOML [tables] to YAML indented mappings and [[arrays of tables]] to YAML sequences with proper nesting",
      "YAML is the standard format for Kubernetes, Docker Compose, GitHub Actions, Ansible, and CI/CD pipelines",
      "TOML is the standard format for Rust (Cargo.toml), Python (pyproject.toml), Hugo (config.toml), and Netlify (netlify.toml)",
      "Preserves all data types: strings, integers, floats, booleans, offset datetimes, local datetimes, and arrays",
      "100% browser-based conversion — configuration data with sensitive values never leaves your machine",
    ],
    overview:
      "This TOML to YAML converter bridges the two most popular configuration format ecosystems in modern software development. Convert Cargo.toml Rust package manifests to YAML for integration with Kubernetes deployment pipelines, transform pyproject.toml Python build configurations to YAML for CI/CD workflow files, migrate Hugo config.toml static site settings to YAML for Netlify/Vercel deployment configs, and convert Netlify netlify.toml settings to YAML for infrastructure-as-code tools like Ansible. The reverse direction is equally useful: convert Kubernetes YAML manifests to TOML for Rust-based orchestration tools, transform Docker Compose YAML to TOML for custom deployment scripts, and convert GitHub Actions workflow YAML to TOML for project-specific tooling. The converter handles all TOML v1.0 and YAML 1.2 features with full data type fidelity.",

    howToSteps: [
      "Paste your TOML configuration content (Cargo.toml, pyproject.toml, config.toml, or any TOML file) into the TOML input panel.",
      "Review the auto-generated YAML output with properly mapped table hierarchies, sequences, and preserved data types.",
      "Alternatively, paste YAML content (Kubernetes manifests, Docker Compose, CI/CD configs) to convert it to clean TOML with proper [table] headers.",
      "Copy the formatted output with one click or download it as a .yaml or .toml file for your project configuration.",
    ],

    features: [
      "Bidirectional TOML-to-YAML and YAML-to-TOML conversion in a single interface",
      "Full TOML v1.0 support: tables, inline tables, arrays of tables, dotted keys, and multi-line strings",
      "Full YAML 1.2 support: mappings, sequences, block scalars, flow collections, and anchors",
      "Data type preservation for strings, integers, floats, booleans, datetimes, and nested arrays",
      "Real-time parsing with instant output updates and descriptive syntax error messages",
      "One-click copy to clipboard and file download support for both formats",
      "100% browser-based processing with zero server data transmission",
    ],

    useCases: [
      "Migrating Cargo.toml Rust package configurations to YAML for Kubernetes deployment pipelines and Helm chart values",
      "Converting pyproject.toml Python build settings to YAML for GitHub Actions, GitLab CI, or CircleCI workflow definitions",
      "Transforming Hugo config.toml static site settings to YAML for compatibility with Netlify, Vercel, or AWS Amplify deployment configs",
      "Converting Kubernetes YAML manifests or Docker Compose files to TOML for Rust-based infrastructure tools and custom orchestration scripts",
      "Standardizing configuration file formats across polyglot development teams that use both TOML-based and YAML-based tooling",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          TOML and YAML are both human-readable configuration formats, but they serve different ecosystems and have distinct design philosophies. TOML uses explicit [table] headers and key = value pairs with no indentation sensitivity, making it resistant to whitespace errors. YAML uses indentation-based hierarchy with minimal syntax, making it concise but sensitive to spacing. Each format dominates specific tooling ecosystems.
        </p>
        <p>
          TOML is the standard configuration format for Rust (Cargo.toml for package manifests and dependencies), Python (pyproject.toml for project metadata, build systems, and tool configuration), Hugo (config.toml for static site generator settings), Netlify (netlify.toml for deployment and redirect rules), and Deno (deno.json often has TOML alternatives). YAML is the standard for Kubernetes (deployment, service, and ingress manifests), Docker Compose (multi-container application definitions), GitHub Actions and GitLab CI (workflow and pipeline definitions), Ansible (playbooks and inventory files), Helm (chart values and templates), and CloudFormation (AWS infrastructure-as-code templates).
        </p>
        <p>
          Converting between these formats is necessary when integrating tools across ecosystems — for example, extracting dependency information from Cargo.toml to generate Kubernetes deployment labels in YAML, converting pyproject.toml build settings into GitHub Actions workflow steps, or importing Kubernetes YAML configuration values into a TOML-based application settings file. This converter handles all structural mappings between the formats while preserving data types, nested hierarchies, and array structures.
        </p>
      </div>
    ),

    proTip:
      "After converting between TOML and YAML, run your target tool's config validation (e.g., 'cargo check' for Cargo.toml, 'kubectl apply --dry-run' for Kubernetes YAML, or 'yamllint' for general YAML validation) to verify the converted output meets the expected schema. YAML comments and TOML comments are both stripped during cross-format conversion since neither format preserves the other's comment syntax.",

    faqs: [
      {
        question: "How do I convert Cargo.toml or pyproject.toml to YAML format?",
        answer:
          "Paste the contents of your Cargo.toml or pyproject.toml file into the TOML input panel. The converter transforms all sections — [package], [dependencies], [build-system], [tool.*] tables — into a properly indented YAML hierarchy. Copy the YAML output for use in Kubernetes configs, CI/CD pipelines, or any YAML-consuming tool.",
      },
      {
        question: "Can I convert Kubernetes YAML or Docker Compose files to TOML?",
        answer:
          "Yes. Paste Kubernetes manifest YAML or Docker Compose file content into the YAML panel. The converter generates TOML with proper [table] headers, key-value pairs, and [[arrays of tables]] for list structures. This is useful for Rust-based infrastructure tools, custom orchestration scripts, and TOML-native configuration systems.",
      },
      {
        question: "How does the converter map TOML tables to YAML structure?",
        answer:
          "TOML [tables] become YAML mapping keys with indented child properties. TOML [[arrays of tables]] become YAML sequences (- prefixed items) of mappings. Inline tables become nested YAML mappings. Dotted keys (a.b.c = value) are expanded into nested YAML hierarchy (a: > b: > c: value). All structural relationships are preserved during conversion.",
      },
      {
        question: "Are TOML datetime values preserved when converting to YAML?",
        answer:
          "Yes. TOML offset datetimes (2026-03-06T10:30:00-05:00), local datetimes, local dates, and local times are all converted to their YAML equivalents as properly formatted timestamp strings. Both TOML and YAML have native datetime support, so type fidelity is maintained during conversion in both directions.",
      },
      {
        question: "Is my configuration data sent to a server during TOML-to-YAML conversion?",
        answer:
          "No. All parsing and conversion happens entirely in your browser using client-side JavaScript. Configuration data containing API keys, database credentials, deployment secrets, or any sensitive values never leaves your machine. This makes the tool safe for converting production infrastructure configurations.",
      },
      {
        question: "What happens to comments when converting between TOML and YAML?",
        answer:
          "Comments are stripped during cross-format conversion. TOML uses # for comments and YAML also uses #, but since comments are not part of the data structure in either format, they cannot be preserved during serialization to the other format. If your comments contain important documentation, save them separately before converting.",
      },
      {
        question: "Is this TOML to YAML converter free to use?",
        answer:
          "Yes. The converter is completely free with no signup, no account creation, and no usage limits. All conversions run instantly in your browser. Use it for as many configuration file migrations, format comparisons, and DevOps workflows as you need.",
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
