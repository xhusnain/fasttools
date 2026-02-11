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
    "Free XML to JSON converter online. xml to json python, npm, nodejs, java. XML to JSON viewer, library. JSON to XML. No signup.",
  metaTitle: "XML to JSON Converter Online - Free, Python, npm, Node.js, Java",
  metaDescription:
    "Free XML to JSON converter online. xml to json python, npm, nodejs, java, react. XML to JSON viewer, library. JSON to XML. No signup.",
  path: "/converters/xml-json",
  keywords: [
    "xml to json converter",
    "xml to json",
    "xml to json python",
    "xml to json npm",
    "xml to json java",
    "xml to json viewer",
    "xml to json library",
    "xml to json nodejs",
    "xml to json cli",
    "xml to json vscode",
    "json to xml",
    "javascript xml to json",
    "xml to json github",
    "xml to json linux",
    "xml to json react",
  ],

  header: {
    title: "XML to JSON converter",
    description: "Convert XML to JSON.",
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
      "Free XML to JSON converter online. xml to json python, npm, nodejs, java. XML to JSON viewer. JSON to XML.",
    alternateName: [
      "XML to JSON Converter Online",
      "XML to JSON Converter",
      "XML to JSON",
      "JSON to XML Converter",
    ],
    featureList: [
      "XML to JSON converter online",
      "JSON to XML converter",
      "Handles attributes and nested elements",
      "For Python, npm, Node.js, Java",
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
      "Free XML to JSON converter online. Convert XML to JSON for Python, npm, Node.js, Java, React. XML to JSON viewer and library alternative. JSON to XML supported. Handles attributes and nested elements. No signup required.",

    howToSteps: [
      "XML to JSON: Paste your XML in the Your XML content panel. The JSON output appears instantly.",
      "JSON to XML: Paste your JSON in the Your JSON content panel. The XML output appears instantly.",
      "Copy JSON or XML to clipboard with one click.",
    ],

    features: [
      "XML to JSON: Convert XML to JSON format",
      "JSON to XML: Convert JSON to XML format",
      "Attributes: XML attributes become _attributes in JSON",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "APIs: Convert XML API responses to JSON.",
      "Python: xml to json python without external libs.",
      "Node.js: xml to json nodejs in the browser.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          XML and JSON are both data formats. XML uses tags and attributes;
          JSON uses objects and arrays. This converter transforms between them.
          XML attributes map to _attributes in JSON. Use as xml to json python,
          npm, nodejs, or java alternative—no install needed.
        </p>
      </div>
    ),

    proTip:
      'XML attributes appear as _attributes in JSON. For example, <a x="1"/> becomes {"a": {"_attributes": {"x": "1"}}}.',

    faqs: [
      {
        question: "How do I convert XML to JSON?",
        answer:
          "Paste your XML in the Your XML content panel. The JSON output appears instantly. This free XML to JSON converter online handles attributes, nested elements, and namespaces. Copy the result with one click. No xml to json python or npm install needed.",
      },
      {
        question: "Can YAML be converted to JSON?",
        answer:
          "Yes. Use our YAML to JSON converter. This tool focuses on XML to JSON and JSON to XML. For config format conversions we have YAML to JSON, TOML to JSON, and more.",
      },
      {
        question: "How do I make my file JSON?",
        answer:
          "Paste your XML in the Your XML content panel. The converted JSON appears instantly. Click Copy JSON to clipboard to use the result. This XML to JSON converter works as an xml to json library alternative.",
      },
      {
        question: "What is a JSON converter?",
        answer:
          "A JSON converter transforms data to or from JSON. This XML to JSON converter converts XML to JSON and JSON to XML. Free, client-side, no signup. Use for xml to json python, npm, nodejs, java workflows.",
      },
      {
        question: "How to convert XML to JSON in Python?",
        answer:
          "Use this free XML to JSON converter online—paste XML and get JSON. For Python code: use xml.etree.ElementTree or the xmltodict library. This tool replaces the need for xml to json python scripts.",
      },
      {
        question: "Is this XML to JSON converter free?",
        answer:
          "Yes. This XML to JSON converter is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for Python, npm, Node.js, Java, React, or any XML/JSON conversion.",
      },
    ],

    additionalContent: [
      {
        heading: "XML to JSON Python",
        content:
          "Use this free XML to JSON converter online as an xml to json python alternative. Paste XML and get JSON instantly—no pip install. For Python code: use xml.etree.ElementTree or xmltodict. This tool handles attributes and nested elements.",
      },
      {
        heading: "XML to JSON npm and Node.js",
        content:
          "This XML to JSON converter works as an xml to json npm alternative. No node_modules needed—paste XML and get JSON in the browser. For Node.js: use xml2js or fast-xml-parser. Ideal for xml to json nodejs workflows.",
      },
      {
        heading: "XML to JSON Viewer and Library",
        content:
          "Use as an XML to JSON viewer—paste XML and view the JSON structure. Works as an xml to json library alternative for quick conversions. Handles attributes (_attributes), nested elements, and arrays. Free and client-side.",
      },
    ],

    relatedTools: [
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function XmlJsonConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <XmlJsonConverter />
        </div>
      )}
    />
  )
}
