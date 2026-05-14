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
  metaTitle: "JSON to YAML Converter — Transform JSON to YAML Online Free",
  metaDescription:
    "Free JSON to YAML converter with bidirectional YAML to JSON support. Convert OpenAPI specs, Docker Compose files, Kubernetes manifests, GitHub Actions workflows, and CI/CD configs instantly in your browser — no signup required.",
  path: "/converters/json-yaml",

  header: {
    title: "JSON to YAML Converter",
    description:
      "Convert JSON to clean, indented YAML and YAML back to valid JSON instantly. Handles nested objects, arrays, strings, numbers, booleans, and null values with proper formatting for OpenAPI specs, Docker Compose files, Kubernetes manifests, GitHub Actions, and CI/CD pipeline configs.",
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
    definition:
      "A JSON to YAML Converter is a free tool that transforms JSON data into YAML format for configuration files, CI/CD pipelines, and infrastructure-as-code workflows.",
    quickAnswer:
      "Paste JSON to instantly convert it to clean YAML output, or paste YAML to convert back to JSON. The tool preserves data types, nested structures, and array formatting. Copy the result with one click.",
    keyTakeaways: [
      "Converts JSON to YAML and YAML to JSON in real time",
      "YAML uses indentation instead of braces — more human-readable",
      "YAML is the standard for Docker Compose, Kubernetes, and GitHub Actions",
      "Preserves strings, numbers, booleans, null, arrays, and nested objects",
      "Useful for converting API responses into deployment configs",
    ],
    overview:
      "This free JSON to YAML converter transforms JSON objects into clean, properly indented YAML output and converts YAML documents back to valid JSON with a single paste. It preserves all data types including strings, numbers, booleans, null values, nested objects, and arrays with correct YAML formatting. The tool is essential for DevOps engineers converting API response JSON into Docker Compose files, Kubernetes deployment manifests, Helm chart values, GitHub Actions workflows, GitLab CI configs, and Ansible playbooks. It is equally useful for backend developers converting OpenAPI/Swagger specifications between JSON and YAML formats, and for anyone migrating configuration files between JSON-based tools and YAML-based infrastructure. All conversion runs locally in your browser with no data uploaded to any server.",

    howToSteps: [
      "Paste your JSON object or array into the input panel to instantly generate clean, properly indented YAML output.",
      "To convert YAML to JSON, paste your YAML document and the tool will produce valid, formatted JSON with proper braces and brackets.",
      "Review the output for correct indentation levels, array formatting (YAML uses dashes), and data type preservation.",
      "Copy the converted result with one click for use in Docker Compose, Kubernetes, GitHub Actions, OpenAPI specs, or any config file.",
      "For large configurations, convert sections individually to verify structure before combining into the final file.",
    ],

    features: [
      "Bidirectional JSON to YAML and YAML to JSON conversion in a single tool",
      "Proper YAML indentation with consistent 2-space formatting for readability",
      "Full data type preservation — strings, numbers, booleans, null, arrays, and deeply nested objects",
      "Live parsing with real-time output that updates as you edit the input",
      "One-click copy to clipboard for instant use in config files, API docs, and deployment manifests",
      "100% client-side processing in your browser — no data uploaded, no server storage, no signup required",
    ],

    useCases: [
      "OpenAPI/Swagger spec conversion — switch API documentation between JSON and YAML formats used by Swagger Editor, Redoc, and Stoplight",
      "Docker Compose — convert JSON config objects to docker-compose.yml YAML format for container orchestration",
      "Kubernetes manifests — transform JSON deployment configs into YAML for kubectl apply, Helm charts, and Kustomize",
      "CI/CD pipelines — convert config objects to YAML for GitHub Actions workflows, GitLab CI, CircleCI, and Azure Pipelines",
      "Ansible and infrastructure-as-code — prepare YAML playbooks and variable files from JSON data sources",
      "Configuration migration — switch application configs between JSON (package.json, tsconfig) and YAML (docker-compose, k8s) formats",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            JSON vs YAML: Key Differences for DevOps and Development
          </h3>
          <p>
            JSON (JavaScript Object Notation) uses curly braces, square brackets, and quoted keys to represent structured data. It is strict, unambiguous, and natively parsed by JavaScript. YAML (YAML Ain&apos;t Markup Language) uses indentation instead of braces, making it more human-readable for configuration files. YAML supports comments (# syntax), multi-line strings, and anchors/aliases for reusable blocks — features JSON lacks. JSON is the standard for REST API payloads, package.json, tsconfig.json, and browser-based data exchange. YAML dominates DevOps tooling: Docker Compose, Kubernetes, Helm, GitHub Actions, GitLab CI, Ansible, and CloudFormation all use YAML as their primary configuration format.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How JSON-to-YAML Mapping Works
          </h3>
          <p>
            JSON objects become YAML mappings with key-value pairs on separate lines, using indentation to show nesting depth. JSON arrays become YAML sequences with dash (-) prefixed items. JSON strings, numbers, booleans, and null map directly to their YAML equivalents. YAML adds features not available in JSON: comments for documentation, multi-line strings using pipe (|) or angle bracket (&gt;) syntax, and anchors (&amp;name) with aliases (*name) for referencing repeated values. When converting from YAML to JSON, comments are stripped and anchors are resolved to their values since JSON has no equivalent constructs.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If your YAML-to-JSON conversion fails, the most common cause is incorrect indentation — YAML is whitespace-sensitive and requires consistent indentation (use spaces, never tabs). Validate your YAML indentation first, then retry. For JSON-to-YAML, ensure your JSON is valid (no trailing commas, all keys quoted) before converting.",

    faqs: [
      {
        question: "How do I convert a JSON API response to YAML format?",
        answer:
          "Paste your JSON API response into the input panel and the tool instantly generates clean, indented YAML output. This is useful for converting OpenAPI/Swagger specs, REST API response schemas, and JSON config objects into YAML format for documentation, Docker Compose, or Kubernetes manifests. Copy the result with one click.",
      },
      {
        question: "Can I convert YAML back to JSON with this tool?",
        answer:
          "Yes. This tool supports bidirectional conversion — paste YAML to get valid JSON output, or paste JSON to get YAML. YAML comments (lines starting with #) are stripped during YAML-to-JSON conversion since JSON does not support comments. All data types, nesting, and arrays are preserved in both directions.",
      },
      {
        question: "Does this JSON to YAML converter handle nested objects and arrays correctly?",
        answer:
          "Yes. The converter correctly maps JSON nested objects to YAML indented blocks and JSON arrays to YAML sequences (dash-prefixed items). Even deeply nested structures with mixed objects and arrays are properly formatted with consistent indentation in the YAML output.",
      },
      {
        question: "Can I use this tool to convert Docker Compose or Kubernetes configs?",
        answer:
          "Yes. This is one of the primary use cases. Convert JSON config objects to docker-compose.yml format, Kubernetes deployment YAML, Helm values.yaml, or any YAML-based infrastructure config. You can also convert existing YAML configs to JSON for programmatic manipulation or API consumption.",
      },
      {
        question: "Why does my YAML to JSON conversion fail?",
        answer:
          "The most common cause is incorrect YAML indentation. YAML is whitespace-sensitive — it requires consistent indentation using spaces (never tabs). Other common issues include missing colons after keys, incorrect list item formatting (items must start with '- '), and unquoted special characters. Fix the indentation and retry the conversion.",
      },
      {
        question: "What is the difference between JSON and YAML for configuration files?",
        answer:
          "JSON is strict and unambiguous but verbose (requires braces, brackets, quotes, and commas). YAML is more human-readable, uses indentation for structure, and supports comments. YAML is typically 15-30% shorter than equivalent JSON. JSON is better for API data exchange and machine parsing; YAML is preferred for configuration files that humans frequently read and edit. Docker, Kubernetes, GitHub Actions, and Ansible all chose YAML for its readability.",
      },
      {
        question: "Is this JSON to YAML converter free and private?",
        answer:
          "Yes. This converter is completely free with no signup, no account, and no usage limits. All conversion runs locally in your browser — no data is sent to any server. This makes it safe for converting sensitive configuration files, API keys, deployment secrets, and proprietary infrastructure configs.",
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
