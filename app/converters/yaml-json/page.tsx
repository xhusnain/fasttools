import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YamlJsonConverter = dynamic(
  () =>
    import("@/components/converters/yaml-json-converter").then(
      (mod) => mod.YamlJsonConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YAML to JSON Converter",
  description:
    "Convert YAML to JSON and JSON to YAML instantly online. Supports OpenAPI specs, Kubernetes manifests, Docker Compose files, CI/CD pipelines, and all YAML configuration formats with real-time parsing.",
  metaTitle: "YAML to JSON Converter — Convert YAML Config Files Online Free (2026)",
  metaDescription:
    "Free YAML to JSON converter with bidirectional JSON to YAML support. Convert OpenAPI specs, Kubernetes manifests, Docker Compose, GitHub Actions, and CI/CD configs instantly. Browser-based, no signup.",
  path: "/converters/yaml-json",

  header: {
    title: "YAML to JSON Converter",
    description:
      "Convert YAML to JSON and JSON to YAML instantly in your browser. Supports OpenAPI 3.x specs, Kubernetes manifests, Docker Compose files, Ansible playbooks, GitHub Actions workflows, and all YAML configuration formats with real-time validation and formatted output.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "YAML to JSON Converter", href: "/converters/yaml-json" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser-based YAML to JSON and JSON to YAML converter for developers. Convert OpenAPI specs, Kubernetes manifests, Docker Compose files, and CI/CD pipeline configurations between YAML and JSON formats.",
    alternateName: ["YAML JSON Converter", "JSON YAML Converter", "YAML Parser Online", "Convert YAML to JSON Online"],
    featureList: [
      "Bidirectional YAML to JSON and JSON to YAML conversion",
      "OpenAPI 3.x specification format conversion",
      "Kubernetes manifest YAML to JSON transformation",
      "Real-time parsing with syntax error highlighting",
      "Formatted JSON output with 2-space indentation",
      "YAML anchor and alias resolution",
      "Multi-document YAML support",
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
      "A YAML to JSON Converter is a free online tool that transforms YAML (YAML Ain't Markup Language) configuration files into JSON (JavaScript Object Notation) format and vice versa. It handles OpenAPI specifications, Kubernetes manifests, Docker Compose files, Ansible playbooks, and all standard YAML data structures including anchors, aliases, multi-line strings, and nested mappings.",
    quickAnswer:
      "Paste YAML content to instantly get formatted JSON output with proper indentation. The converter resolves YAML anchors (&) and aliases (*), preserves multi-line strings (literal | and folded >), handles all YAML data types including timestamps and null values, and outputs clean JSON with 2-space indentation. Reverse conversion from JSON to YAML is available in the same interface.",
    keyTakeaways: [
      "Bidirectional conversion between YAML indentation-based syntax and JSON brace-based syntax",
      "Resolves YAML anchors (&), aliases (*), merge keys (<<), and multi-line string blocks",
      "JSON output is pretty-printed with 2-space indentation for maximum readability",
      "Converts Kubernetes manifests, OpenAPI 3.x specs, and Docker Compose files to JSON for API consumption",
      "100% client-side processing — your YAML configuration data never leaves the browser",
    ],
    overview:
      "This YAML to JSON converter is built for developers who work with configuration files across multiple ecosystems. Whether you need to convert an OpenAPI 3.x specification from YAML to JSON for Swagger UI, transform Kubernetes deployment manifests into JSON for kubectl API calls, switch GitHub Actions or GitLab CI workflow files between formats, or prepare Docker Compose configurations for JSON-based tooling, this converter handles it instantly. The tool supports all YAML 1.2 features including flow mappings, block scalars, tagged values, and complex nested structures with anchors and aliases. JSON output is formatted with consistent indentation so you can paste it directly into your codebase, API testing tools like Postman, or configuration management systems.",

    howToSteps: [
      "Paste your YAML content (OpenAPI spec, Kubernetes manifest, Docker Compose file, or any YAML config) into the YAML input panel.",
      "Review the auto-generated JSON output with proper formatting, nested object structure, and resolved anchors/aliases.",
      "Alternatively, paste JSON in the JSON panel to convert it to clean YAML with proper indentation hierarchy.",
      "Copy the formatted output with one click or download it as a .json or .yaml file for your project.",
    ],

    features: [
      "Bidirectional YAML-to-JSON and JSON-to-YAML conversion in a single interface",
      "Real-time parsing with instant output updates as you type or edit",
      "YAML anchor/alias resolution and multi-line string handling (literal and folded blocks)",
      "Pretty-printed JSON output with configurable indentation for readability",
      "Syntax error detection with descriptive error messages and line numbers",
      "One-click copy to clipboard and file download support",
      "100% client-side browser processing with zero server data transmission",
    ],

    useCases: [
      "Converting OpenAPI 3.x YAML specifications to JSON for Swagger UI, Redoc, or API gateway imports",
      "Transforming Kubernetes deployment, service, and ingress manifests from YAML to JSON for kubectl API calls",
      "Switching GitHub Actions, GitLab CI/CD, or CircleCI pipeline configs between YAML and JSON formats",
      "Preparing Docker Compose files as JSON for programmatic container orchestration workflows",
      "Normalizing configuration file formats across polyglot development teams and microservice architectures",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          YAML (YAML Ain't Markup Language) and JSON (JavaScript Object Notation) are the two most widely used data serialization formats in modern software development. YAML uses indentation-based syntax that is human-readable and ideal for configuration files, while JSON uses brace-based syntax that is natively parsed by JavaScript and preferred by REST APIs, web applications, and data interchange protocols.
        </p>
        <p>
          YAML is the default format for Kubernetes manifests, Docker Compose files, Ansible playbooks, GitHub Actions workflows, GitLab CI/CD pipelines, Helm charts, and OpenAPI specifications. JSON is required by most REST APIs, npm package.json files, VS Code settings, Terraform state files, and browser-based applications. This converter bridges both ecosystems by transforming YAML's indentation hierarchy into JSON's nested object structure while preserving all data types, including strings, integers, floats, booleans, null values, arrays, and timestamps.
        </p>
        <p>
          The converter handles advanced YAML features such as anchors (&amp;anchor) and aliases (*alias) for reusable configuration blocks, merge keys (&lt;&lt;) for inheritance patterns, multi-line strings using literal block scalars (|) and folded block scalars (&gt;), flow mappings and sequences, and tagged values. All processing runs entirely in your browser using JavaScript-based YAML parsing, so sensitive configuration data containing API keys, database credentials, or infrastructure details is never transmitted to any server.
        </p>
      </div>
    ),

    proTip:
      "When converting Kubernetes manifests or OpenAPI specs, validate the JSON output against the target schema using tools like kubeval or swagger-cli to catch structural issues before deployment. For multi-document YAML files (separated by ---), convert each document individually for the cleanest JSON output.",

    faqs: [
      {
        question: "How do I convert an OpenAPI YAML specification to JSON format?",
        answer:
          "Paste your complete OpenAPI 3.x YAML specification into the YAML input panel. The converter transforms the entire spec — including paths, schemas, security definitions, and server configurations — into properly structured JSON. The output is compatible with Swagger UI, Redoc, Postman, and API gateway import tools that require JSON-formatted OpenAPI documents.",
      },
      {
        question: "Can I convert Kubernetes YAML manifests to JSON for kubectl?",
        answer:
          "Yes. Paste any Kubernetes manifest (Deployment, Service, ConfigMap, Ingress, etc.) and get JSON output that can be used with kubectl apply -f or sent directly to the Kubernetes API server. The converter preserves all Kubernetes-specific fields including apiVersion, kind, metadata, spec, and nested container configurations.",
      },
      {
        question: "Does the YAML to JSON converter handle anchors, aliases, and merge keys?",
        answer:
          "Yes. The converter fully resolves YAML anchors (&anchor_name), aliases (*anchor_name), and merge keys (<<) during conversion. Referenced values are expanded inline in the JSON output, so all inherited and reused configuration blocks appear as complete objects in the resulting JSON structure.",
      },
      {
        question: "Can I convert JSON back to YAML with this tool?",
        answer:
          "Yes. The converter supports bidirectional conversion. Paste JSON in the JSON panel and get clean YAML output with proper indentation hierarchy, correct data type representation, and readable formatting suitable for Kubernetes configs, Docker Compose files, or any YAML-based configuration system.",
      },
      {
        question: "Is my YAML configuration data sent to a server during conversion?",
        answer:
          "No. All YAML parsing and JSON serialization happens entirely in your browser using client-side JavaScript. Your configuration data — including any API keys, database credentials, or infrastructure secrets — never leaves your machine. This makes the tool safe for converting sensitive DevOps and infrastructure configurations.",
      },
      {
        question: "What YAML features and data types are supported by this converter?",
        answer:
          "The converter supports all YAML 1.2 data types including strings, integers, floats, booleans, null values, timestamps, binary data, and sequences. It handles block scalars (literal | and folded >), flow mappings, flow sequences, comments (stripped during conversion since JSON does not support comments), tagged values, and complex nested structures with unlimited depth.",
      },
      {
        question: "How do I convert Docker Compose or GitHub Actions YAML files to JSON?",
        answer:
          "Paste the contents of your docker-compose.yml or .github/workflows/*.yml file into the YAML panel. The converter transforms services, volumes, networks, environment variables, job definitions, step configurations, and all nested structures into properly formatted JSON. This is useful for programmatic manipulation, CI/CD tooling integration, or migrating to JSON-based orchestration systems.",
      },
    ],

    relatedTools: [
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "JSON to XML Converter", href: "/converters/json-xml" },
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YamlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <YamlJsonConverter />
        </div>
      )}
    />
  )
}
