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
    "Free JSON to XML converter online. json to xml formatter, python, java, npm. XML to JSON. json formatter. No signup.",
  metaTitle: "JSON to XML Converter Online - Free, Python, Java, npm, C#",
  metaDescription:
    "Free JSON to XML converter online. json to xml formatter, python, java, npm, c#. XML to JSON. json formatter. No signup.",
  path: "/converters/json-xml",
  keywords: [
    "json to xml converter",
    "json to xml online",
    "json to xml",
    "json to xml formatter",
    "json to xml python",
    "json to xml java",
    "json to xml npm",
    "json to xml c#",
    "json to xml-js",
    "xml to json",
    "json formatter",
    "json to xml github",
    "json to xml linux",
  ],

  header: {
    title: "JSON to XML converter",
    description: "Convert JSON to XML.",
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
      "Free JSON to XML converter online. json to xml formatter, python, java, npm, c#. XML to JSON.",
    alternateName: [
      "JSON to XML Converter Online",
      "JSON to XML Converter",
      "JSON to XML",
      "JSON to XML Formatter",
      "XML to JSON Converter",
    ],
    featureList: [
      "JSON to XML converter online",
      "XML to JSON converter",
      "JSON to XML formatter",
      "For Python, Java, npm, C#",
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
      "Free JSON to XML converter online. Convert JSON to XML for Python, Java, npm, C#. JSON to XML formatter. XML to JSON supported. Use _attributes for XML attributes. No signup required.",

    howToSteps: [
      "JSON to XML: Paste your JSON in the Your JSON content panel. The XML output appears instantly.",
      "XML to JSON: Paste your XML in the Your XML content panel. The JSON output appears instantly.",
      "Copy XML or JSON to clipboard with one click.",
    ],

    features: [
      "JSON to XML: Convert JSON to XML format",
      "XML to JSON: Convert XML to JSON format",
      "Attributes: Use _attributes in JSON for XML attributes",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "APIs: Convert JSON responses to XML for legacy systems.",
      "Python: json to xml python without external libs.",
      "Java: json to xml java alternative to Jackson.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON and XML are both data formats. JSON uses objects and arrays; XML
          uses tags and attributes. This converter transforms between them. Use
          _attributes in JSON for XML attributes. Use as json to xml python,
          java, npm, or c# alternative—no install needed.
        </p>
      </div>
    ),

    proTip:
      'Use _attributes in JSON for XML attributes. Example: {"a": {"_attributes": {"x": "1"}, "b": "hello"}} becomes <a x="1"><b>hello</b></a>.',

    faqs: [
      {
        question: "How do I convert JSON to XML?",
        answer:
          "Paste your JSON in the Your JSON content panel. The XML output appears instantly. This free JSON to XML converter online handles nested objects, arrays, and _attributes for XML attributes. No json to xml python or npm install needed.",
      },
      {
        question: "Is there a JSON to XML formatter online?",
        answer:
          "Yes. This JSON to XML converter works as a json to xml formatter—paste JSON and get formatted XML. The output is properly indented and valid XML. Copy with one click.",
      },
      {
        question: "How to convert JSON to XML in Python?",
        answer:
          "Use this free JSON to XML converter online—paste JSON and get XML. For Python code: use dicttoxml or json + custom serialization. This tool replaces the need for json to xml python scripts.",
      },
      {
        question: "How to convert JSON to XML in Java?",
        answer:
          "Use this free JSON to XML converter online—paste JSON and get XML. For Java: use Jackson XmlMapper or org.json. This tool works as a json to xml java alternative for quick conversions.",
      },
      {
        question: "Is there a json to xml npm package alternative?",
        answer:
          "Yes. This JSON to XML converter online works as a json to xml npm alternative—no install needed. Paste JSON and get XML in the browser. For Node.js: use fast-xml-parser or xml2js.",
      },
      {
        question: "Is this JSON to XML converter free?",
        answer:
          "Yes. This JSON to XML converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Python, Java, npm, C#, or any JSON/XML conversion.",
      },
    ],

    additionalContent: [
      {
        heading: "JSON to XML Python",
        content:
          "Use this free JSON to XML converter online as a json to xml python alternative. Paste JSON and get XML instantly—no pip install. For Python code: use dicttoxml or custom serialization. Handles nested objects and arrays.",
      },
      {
        heading: "JSON to XML Java",
        content:
          "This JSON to XML converter works as a json to xml java alternative. No Maven or Gradle needed—paste JSON and get XML in the browser. For Java: use Jackson XmlMapper. Ideal for quick conversions.",
      },
      {
        heading: "JSON to XML Formatter",
        content:
          "Use as a JSON to XML formatter—paste JSON and get formatted, indented XML. Works as a json formatter for XML output. Handles _attributes for XML attributes. Free and client-side.",
      },
    ],

    relatedTools: [
      { name: "XML to JSON Converter", href: "/converters/xml-json" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonXmlConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JsonXmlConverter />
        </div>
      )}
    />
  )
}
