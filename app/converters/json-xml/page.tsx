import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const JsonXmlConverter = dynamic(
  () =>
    import("@/components/converters/json-xml-converter").then(
      (mod) => mod.JsonXmlConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON to XML Converter",
  description:
    "Convert JSON to XML and XML to JSON for API integrations and legacy data formats.",
  metaTitle: "JSON to XML Converter (with XML to JSON)",
  metaDescription:
    "Free JSON to XML converter with XML to JSON support. Convert payloads for APIs, integrations, and data migration workflows.",
  path: "/converters/json-xml",
  keywords: [
    "json to xml converter",
    "xml to json converter",
    "json xml converter",
    "api format converter",
    "xml payload converter",
    "data transformation",
  ],

  header: {
    title: "JSON to XML Converter",
    description:
      "Convert between JSON and XML quickly for integration, migration, and testing tasks.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "JSON to XML Converter", href: "/converters/json-xml" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way JSON and XML converter for developers and data workflows.",
    alternateName: ["JSON XML Converter", "XML JSON Converter"],
    featureList: [
      "JSON to XML conversion",
      "XML to JSON conversion",
      "Formatted output",
      "Live conversion panel",
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
      "A JSON to XML Converter is a free tool that transforms JSON objects into well-formed XML documents for use in SOAP APIs, legacy systems, and XML-based workflows.",
    quickAnswer:
      "Paste JSON to instantly convert it to XML format. The converter maps JSON objects to XML elements, arrays to repeated elements, and preserves the data hierarchy. Copy or download the XML output.",
    keyTakeaways: [
      "Converts JSON objects to XML elements with proper nesting",
      "JSON arrays map to repeated XML elements with consistent tag names",
      "Useful for SOAP API payloads, RSS feeds, and legacy system integration",
      "Generates well-formed XML with proper escaping of special characters",
      "All conversion runs locally in your browser",
    ],
    overview:
      "Use this converter to transform data between JSON and XML formats. It is useful when modern APIs and legacy systems need compatible payload formats.",

    howToSteps: [
      "Paste JSON to generate XML output.",
      "Paste XML to convert back into JSON.",
      "Copy the result and use it in your application or test workflow.",
    ],

    features: [
      "Two-way JSON and XML conversion",
      "Nested structure handling",
      "Readable formatted output",
      "In-browser conversion",
      "Copy-ready results",
    ],

    useCases: [
      "Integrating JSON-based and XML-based services",
      "Migrating payload formats",
      "QA testing with alternate response formats",
      "Preparing data for legacy enterprise systems",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON is common in modern web applications, while XML is still used in
          many enterprise and legacy interfaces. This tool helps bridge those
          ecosystems with fast two-way conversion.
        </p>
      </div>
    ),

    proTip:
      "When XML attributes matter, verify how they are represented in JSON after conversion.",

    faqs: [
      {
        question: "Can I convert JSON arrays to XML?",
        answer:
          "Yes. Arrays are converted based on the converter's mapping rules and represented in XML output.",
      },
      {
        question: "Does this tool also convert XML back to JSON?",
        answer: "Yes. XML to JSON conversion is available in the same page.",
      },
      {
        question: "Is this suitable for API testing?",
        answer:
          "Yes. It is useful for quickly generating alternate payload formats during API integration and QA.",
      },
      {
        question: "Is my data uploaded?",
        answer: "No. Conversion runs in your browser.",
      },
      {
        question: "Is the converter free?",
        answer: "Yes. It is free to use with no signup.",
      },
    ],

    relatedTools: [
      { name: "XML to JSON Converter", href: "/converters/xml-json" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonXmlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <JsonXmlConverter />
        </div>
      )}
    />
  )
}
