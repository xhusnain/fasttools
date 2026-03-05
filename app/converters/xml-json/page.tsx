import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const XmlJsonConverter = dynamic(
  () =>
    import("@/components/converters/xml-json-converter").then(
      (mod) => mod.XmlJsonConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "XML to JSON Converter",
  description:
    "Convert XML to JSON and JSON to XML for API modernization and data transformation workflows.",
  metaTitle: "XML to JSON Converter (with JSON to XML)",
  metaDescription:
    "Free XML to JSON converter with reverse JSON to XML support. Useful for API integration, migration, and debugging.",
  path: "/converters/xml-json",
  keywords: [
    "xml to json converter",
    "json to xml converter",
    "xml json converter",
    "xml parser online",
    "api payload converter",
    "legacy data conversion",
  ],

  header: {
    title: "XML to JSON Converter",
    description:
      "Convert XML and JSON in both directions for integration, migration, and testing workflows.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "XML to JSON Converter", href: "/converters/xml-json" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way converter for XML to JSON and JSON to XML transformations.",
    alternateName: ["XML JSON Converter", "JSON XML Converter"],
    featureList: [
      "XML to JSON conversion",
      "JSON to XML conversion",
      "Formatted output",
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
      "An XML to JSON Converter is a free tool that transforms XML documents into JSON format for use in modern APIs, JavaScript applications, and data pipelines.",
    quickAnswer:
      "Paste XML content to instantly get structured JSON output. The converter preserves elements, attributes, text content, and nesting hierarchy. Copy the formatted JSON or download it as a file.",
    keyTakeaways: [
      "Converts XML elements to JSON objects with proper nesting",
      "Handles attributes, text nodes, CDATA sections, and namespaces",
      "JSON is preferred by REST APIs while XML is used in SOAP and legacy systems",
      "Useful for migrating data between XML-based and JSON-based systems",
      "Browser-based processing — no data leaves your machine",
    ],
    overview:
      "This converter helps transform XML structures into JSON and convert JSON back to XML when required by downstream systems.",

    howToSteps: [
      "Paste XML to generate JSON output.",
      "Paste JSON to generate XML output.",
      "Copy the converted payload into your application workflow.",
    ],

    features: [
      "Two-way XML and JSON conversion",
      "Support for nested data structures",
      "Formatted conversion output",
      "Fast browser-based processing",
      "Copy-ready results",
    ],

    useCases: [
      "Migrating legacy XML services",
      "Testing JSON-first applications with XML sources",
      "Converting enterprise payload formats",
      "Debugging integration issues",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          XML remains common in enterprise systems, while JSON dominates modern
          frontend and API workflows. This tool helps teams move between both
          formats without manual structure rewriting.
        </p>
      </div>
    ),

    proTip:
      "After conversion, validate object keys and arrays to confirm they match the target system's expected schema.",

    faqs: [
      {
        question: "Can this converter handle nested XML?",
        answer:
          "Yes. Nested tags are converted into nested JSON objects according to the tool's mapping behavior.",
      },
      {
        question: "Can I convert back from JSON to XML?",
        answer:
          "Yes. The tool supports both XML to JSON and JSON to XML.",
      },
      {
        question: "Is this useful for API migration projects?",
        answer:
          "Yes. It helps teams transform payloads when moving from XML-based services to JSON-based APIs.",
      },
      {
        question: "Does conversion happen locally?",
        answer: "Yes. Conversion runs in the browser.",
      },
      {
        question: "Is it free?",
        answer: "Yes. It is free and available without signup.",
      },
    ],

    relatedTools: [
      { name: "JSON to XML Converter", href: "/converters/json-xml" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function XmlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <XmlJsonConverter />
        </div>
      )}
    />
  )
}
