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
    "Convert YAML to TOML and TOML to YAML online. Handles nested mappings, sequences, anchors, and all data types for Kubernetes, Docker Compose, Ansible, Cargo.toml, and pyproject.toml workflows.",
  metaTitle: "YAML to TOML Converter -- Convert YAML to TOML Online Free",
  metaDescription:
    "Free YAML to TOML converter with bidirectional TOML to YAML support. Convert Kubernetes, Docker Compose, and Ansible YAML configs to TOML format. Handles nested mappings, sequences, and all data types. No signup.",
  path: "/converters/yaml-to-toml",

  header: {
    title: "YAML to TOML Converter",
    description:
      "Convert YAML to TOML and TOML to YAML instantly. Supports nested mappings, sequences, multiline strings, booleans, integers, floats, and datetime values for Kubernetes, Docker Compose, Ansible, Cargo.toml, pyproject.toml, and CI/CD pipeline configuration.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "YAML to TOML Converter", href: "/converters/yaml-to-toml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online bidirectional converter for YAML and TOML configuration formats with support for nested structures, sequences, and all standard data types.",
    alternateName: ["YAML TOML Converter", "TOML YAML Converter", "YAML to TOML Online", "Config Format Converter"],
    featureList: [
      "YAML to TOML conversion with nested mapping and sequence support",
      "TOML to YAML reverse conversion with indentation formatting",
      "Handles all data types: strings, integers, floats, booleans, datetime, arrays",
      "Live real-time conversion with syntax validation",
      "Copy and download converted output",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A YAML to TOML Converter is a free online tool that transforms YAML (YAML Ain't Markup Language) configuration files into TOML (Tom's Obvious Minimal Language) format and converts TOML back to YAML, preserving nested structures, data types, and semantic meaning across both formats.",
    quickAnswer:
      "Paste your YAML content to instantly convert it to properly formatted TOML output, or paste TOML to convert back to YAML with correct indentation. The tool preserves all data types including strings, integers, floats, booleans, datetime values, arrays, and nested mappings. YAML indented blocks become TOML [table] sections, YAML sequences become TOML arrays, and YAML anchors are resolved before conversion. Copy the result to clipboard or download as a file.",
    keyTakeaways: [
      "Converts YAML to TOML and TOML to YAML bidirectionally with real-time output",
      "Preserves all data types: strings, integers, floats, booleans, arrays, datetime, and nested tables",
      "YAML uses indentation-based nesting while TOML uses explicit [table] headers and dotted keys",
      "YAML dominates in Kubernetes, Docker Compose, Ansible, and GitHub Actions; TOML is standard for Cargo.toml and pyproject.toml",
      "All conversion runs 100% client-side in your browser with no data transmitted to servers",
    ],
    overview:
      "This free YAML to TOML converter lets you transform configuration data between two of the most widely used config file formats in modern software development. YAML (YAML Ain't Markup Language) is the standard configuration format for Kubernetes manifests, Docker Compose files, Ansible playbooks, GitHub Actions workflows, and many CI/CD pipelines. TOML (Tom's Obvious Minimal Language) is the required format for Rust's Cargo.toml package management, Python's pyproject.toml (PEP 518), Hugo static site configuration, and Netlify deployment settings. When migrating between these ecosystems, refactoring infrastructure-as-code, or standardizing configuration across teams, this converter eliminates manual reformatting. It correctly maps YAML nested mappings to TOML [table] sections, YAML sequences to TOML arrays, and resolves YAML anchors and aliases before conversion. All processing runs client-side in your browser.",

    howToSteps: [
      "Paste your YAML content into the input panel -- the converter validates syntax and highlights any parsing errors in real time.",
      "View the generated TOML output with proper [table] sections, [[array of tables]], and correctly typed values matching your YAML structure.",
      "Switch to TOML-to-YAML mode by pasting TOML input to get properly indented YAML output with correct mapping and sequence formatting.",
      "Copy the converted output to clipboard or download it as a .toml or .yaml file for direct use in your project configuration.",
      "Verify the output structure by checking that nested keys, arrays, and data types are correctly represented in the target format.",
    ],

    features: [
      "Bidirectional YAML to TOML and TOML to YAML conversion with full data type preservation",
      "Properly formatted output with correct TOML [table] sections or YAML indentation hierarchy",
      "Live real-time conversion with instant syntax validation and error highlighting",
      "Handles nested mappings, sequences, multiline strings, and complex data structures",
      "100% browser-based client-side processing -- no configuration data sent to servers",
      "One-click copy-to-clipboard and file download for converted output",
    ],

    useCases: [
      "Converting Kubernetes YAML manifests to TOML format when migrating to TOML-based orchestration tools",
      "Transforming Docker Compose YAML files to TOML for tools that prefer TOML configuration",
      "Migrating Ansible playbook configuration sections between YAML and TOML formats",
      "Converting CI/CD pipeline configs (GitHub Actions YAML, GitLab CI YAML) to TOML-based deployment platforms",
      "Standardizing configuration format across teams where some projects use YAML and others use TOML",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML and TOML are both human-readable configuration formats, but they
          serve different ecosystems and use fundamentally different syntax
          approaches. YAML uses indentation-based nesting (similar to Python),
          supports complex features like anchors (&amp;), aliases (*), and multi-document
          streams, and is the dominant format for infrastructure-as-code tools
          including Kubernetes, Docker Compose, Ansible, GitHub Actions, and
          CircleCI.
        </p>
        <p>
          TOML uses explicit [table] headers and dotted key paths for structure,
          making it impossible to break formatting with incorrect indentation.
          TOML natively supports typed values including ISO 8601 datetime, and
          distinguishes between integers and floats. It is the required
          configuration format for Rust's Cargo package manager (Cargo.toml),
          Python's modern packaging standard PEP 518 (pyproject.toml), Hugo
          static site generators, and Netlify deployment configuration.
        </p>
        <p>
          When converting between these formats, several structural mappings
          occur. YAML nested mappings become TOML [table] sections with dotted
          key paths. YAML sequences (lists) become TOML arrays. YAML sequences
          of mappings become TOML arrays of tables using [[double.bracket]]
          syntax. YAML multiline strings (using | or &gt; indicators) map to TOML
          multiline basic strings or literal strings. This converter handles all
          these mappings automatically, resolves YAML anchors before conversion,
          and produces clean, valid output ready for use in your target tool or
          framework.
        </p>
      </div>
    ),

    proTip:
      "After converting YAML to TOML, validate the output with your target tool (run 'cargo check' for Cargo.toml or 'python -m build' for pyproject.toml). YAML allows duplicate keys (last value wins), but TOML forbids them -- if your YAML has duplicate keys, the converter will use the last occurrence. Also note that YAML's 'yes/no/on/off' boolean aliases are converted to TOML's strict 'true/false' format.",

    faqs: [
      {
        question: "How do I convert YAML to TOML format online?",
        answer:
          "Paste your YAML content into the input panel and the converter instantly generates valid TOML output. YAML nested mappings become TOML [table] sections, sequences become arrays, and all data types (strings, numbers, booleans, datetime) are correctly mapped. Copy the result or download it as a .toml file.",
      },
      {
        question: "Does this converter support TOML to YAML conversion too?",
        answer:
          "Yes. This is a bidirectional converter. Switch to TOML-to-YAML mode, paste your TOML content, and get properly indented YAML output. This is useful for converting Cargo.toml or pyproject.toml files into YAML format for tools like Kubernetes, Ansible, or Docker Compose that require YAML input.",
      },
      {
        question: "How does YAML structure map to TOML format?",
        answer:
          "YAML nested mappings become TOML [table] sections with dotted key paths (e.g., YAML 'database: host: localhost' becomes TOML '[database]\\nhost = \"localhost\"'). YAML sequences become TOML arrays. YAML sequences of mappings become TOML arrays of tables using [[double.bracket]] syntax. Scalar values (strings, numbers, booleans) are directly converted with proper TOML typing.",
      },
      {
        question: "Can I convert Kubernetes YAML to TOML with this tool?",
        answer:
          "Yes. You can paste any valid YAML content including Kubernetes manifests, Docker Compose files, Ansible playbooks, or GitHub Actions workflows and convert them to TOML format. The converter handles all standard YAML features including nested mappings, sequences, multiline strings, and typed values.",
      },
      {
        question: "Does the converter handle YAML anchors and aliases?",
        answer:
          "YAML anchors (&anchor) and aliases (*anchor) are resolved during conversion. The referenced values are expanded inline in the TOML output, since TOML does not have an equivalent reference mechanism. This means the TOML output will contain the full values at each location where an alias was used.",
      },
      {
        question: "Is my YAML or TOML configuration data sent to a server?",
        answer:
          "No. All conversion processing runs entirely in your browser using client-side JavaScript. Your configuration data, environment variables, API keys, database credentials, and other sensitive content never leave your device. This makes the converter safe for use with private infrastructure configuration.",
      },
      {
        question: "Is this YAML to TOML converter free to use?",
        answer:
          "Yes. This converter is 100% free with no signup, no account registration, and no usage limits. Convert as many YAML and TOML files as you need for your development, DevOps, and infrastructure configuration workflows.",
      },
    ],

    relatedTools: [
      { name: "TOML to YAML Converter", href: "/converters/toml-to-yaml" },
      { name: "JSON to TOML Converter", href: "/converters/json-to-toml" },
      { name: "TOML to JSON Converter", href: "/converters/toml-to-json" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-to-json" },
      { name: "JSON to YAML Converter", href: "/converters/json-to-yaml" },
      { name: "JSON to XML Converter", href: "/converters/xml-to-json" },
      { name: "XML to JSON Converter", href: "/converters/xml-to-json" },
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
