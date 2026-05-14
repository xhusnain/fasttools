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
  metaTitle: "JSON to XML Converter — Transform JSON to XML Online Free",
  metaDescription:
    "Free JSON to XML converter with bidirectional XML to JSON support. Convert API payloads, SOAP requests, RSS feeds, and legacy system data instantly in your browser — no signup required.",
  path: "/converters/json-xml",

  header: {
    title: "JSON to XML Converter",
    description:
      "Convert JSON objects to well-formed XML documents and XML back to JSON instantly. Handles nested structures, arrays, special character escaping, and proper element formatting for SOAP APIs, RSS feeds, legacy system integrations, and data migration workflows.",
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
      "This free JSON to XML converter transforms JSON objects into well-formed XML documents and converts XML back to structured JSON with a single paste. It correctly maps JSON key-value pairs to XML elements, handles nested objects as child elements, converts JSON arrays to repeated XML elements with consistent tag names, and escapes special characters like ampersands, angle brackets, and quotes per XML specification. The tool is essential for developers working with SOAP web services, RSS/Atom feed generation, Android manifest files, Spring configuration, Maven POM files, and any integration between modern REST APIs (JSON) and legacy enterprise systems (XML). All conversion runs locally in your browser — no data is uploaded to any server.",

    howToSteps: [
      "Paste your JSON object or array into the input panel to instantly generate well-formed XML output with proper nesting and indentation.",
      "To convert XML to JSON, paste your XML document and the tool will parse elements, attributes, and text nodes into a clean JSON structure.",
      "Review the formatted output for correct element naming, array handling, and special character escaping.",
      "Copy the converted result with one click for use in API requests, configuration files, test payloads, or documentation.",
      "For large payloads, convert in sections to verify structure accuracy before combining.",
    ],

    features: [
      "Bidirectional JSON to XML and XML to JSON conversion in a single tool",
      "Deep nested structure handling with proper parent-child element mapping",
      "JSON array to repeated XML element conversion with consistent tag naming",
      "Special character escaping for &, <, >, \", and ' per XML specification",
      "Pretty-printed formatted output with proper indentation for readability",
      "100% browser-based processing — no data uploaded, no server-side storage",
    ],

    useCases: [
      "SOAP API integration — convert REST JSON responses to XML request bodies for legacy SOAP web services",
      "RSS and Atom feed generation — transform JSON content data into valid XML feed format",
      "Data migration — convert XML database exports to JSON for import into MongoDB, Elasticsearch, or modern NoSQL databases",
      "Configuration file conversion — switch between JSON and XML configs for Spring, Maven POM, Android manifests, and .NET",
      "API testing and QA — generate alternate payload formats for Postman, SoapUI, and integration test suites",
      "Enterprise system interoperability — bridge modern microservices (JSON) with legacy ERP and middleware systems (XML)",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            JSON vs XML: Key Differences for Developers
          </h3>
          <p>
            JSON (JavaScript Object Notation) and XML (eXtensible Markup Language) are both data interchange formats, but they serve different ecosystems. JSON uses key-value pairs with curly braces and square brackets, making it compact and natively parseable in JavaScript. XML uses opening and closing tags with optional attributes, making it more verbose but self-describing. JSON dominates modern REST APIs, frontend frameworks, and NoSQL databases. XML remains the standard for SOAP web services, RSS feeds, SVG graphics, XHTML, Microsoft Office formats (OOXML), Android layouts, and enterprise middleware like ESBs and message queues.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How JSON-to-XML Mapping Works
          </h3>
          <p>
            Converting JSON to XML requires mapping JSON data types to XML constructs. JSON objects become XML elements where each key becomes a child element tag. JSON arrays are converted to repeated elements with the same tag name. Primitive values (strings, numbers, booleans, null) become text content within elements. JSON has no native equivalent of XML attributes — during conversion, all data is represented as elements. When converting XML back to JSON, attributes are typically prefixed with @ to distinguish them from child elements. Namespaces, CDATA sections, and processing instructions require special handling during conversion.
          </p>
        </div>
      </div>
    ),

    proTip:
      "XML attributes have no direct JSON equivalent. When converting XML with attributes to JSON, they are typically prefixed with '@'. When going from JSON to XML, all values become elements — if you need attributes in the output, manually adjust the XML after conversion. For SOAP payloads, always verify the namespace declarations are correct.",

    faqs: [
      {
        question: "How does this tool convert JSON arrays to XML elements?",
        answer:
          "JSON arrays are converted to repeated XML elements with consistent tag names derived from the parent key. For example, a JSON array {\"items\": [\"apple\", \"banana\"]} becomes <items>apple</items><items>banana</items> in XML. Nested arrays and objects within arrays maintain their hierarchical structure in the XML output.",
      },
      {
        question: "Can I convert XML with attributes back to JSON?",
        answer:
          "Yes. When converting XML to JSON, element attributes are typically represented with an '@' prefix in the JSON output to distinguish them from child elements. For example, <book id=\"1\"> would produce {\"book\": {\"@id\": \"1\"}} in JSON. Text content is mapped to a text key.",
      },
      {
        question: "Is this JSON to XML converter suitable for SOAP API development?",
        answer:
          "Yes. You can convert JSON payloads to XML format for SOAP web service requests. However, SOAP requires specific namespace declarations and envelope structures — after conversion, you may need to wrap the output in SOAP envelope/body tags and add the correct xmlns attributes for your target service.",
      },
      {
        question: "How are special characters handled during JSON to XML conversion?",
        answer:
          "Special characters are automatically escaped per the XML specification: ampersand (&) becomes &amp;, less-than (<) becomes &lt;, greater-than (>) becomes &gt;, double quotes (\") become &quot;, and single quotes (') become &apos;. This ensures the generated XML is well-formed and parseable.",
      },
      {
        question: "Is my data safe? Does this tool upload JSON or XML to a server?",
        answer:
          "No. All conversion happens entirely in your browser using client-side JavaScript. No data is sent to any server, stored, or logged. This makes it safe for converting sensitive API payloads, configuration files, and proprietary data structures.",
      },
      {
        question: "What is the difference between JSON and XML for API data?",
        answer:
          "JSON is more compact, natively supported by JavaScript, and dominant in REST APIs and modern web applications. XML is more verbose but supports attributes, namespaces, schemas (XSD), and is required for SOAP services, RSS feeds, SVG, and many enterprise systems. JSON is typically 30-40% smaller than equivalent XML for the same data.",
      },
      {
        question: "Is this JSON to XML converter free to use?",
        answer:
          "Yes. This converter is completely free with no signup, no account, and no usage limits. It runs entirely in your browser for instant, private JSON-to-XML and XML-to-JSON transformations.",
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
