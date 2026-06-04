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
    "Convert XML to JSON and JSON to XML instantly online. Transform SOAP responses, RSS feeds, SVG data, Android layouts, Maven POM files, and any XML document into structured JSON with attribute and namespace handling.",
  metaTitle: "XML to JSON Converter — Transform XML Documents to JSON Online Free",
  metaDescription:
    "Free XML to JSON converter with bidirectional JSON to XML support. Convert SOAP responses, RSS feeds, Maven POM, Android XML, and any XML document. Handles attributes, namespaces, CDATA, nested elements. No signup.",
  path: "/converters/xml-json",

  header: {
    title: "XML to JSON Converter",
    description:
      "Convert XML to JSON and JSON to XML instantly in your browser. Transform SOAP API responses, RSS/Atom feeds, Maven POM files, Android layout XML, SVG data, Spring configuration, and any XML document into structured JSON with proper attribute mapping, namespace handling, CDATA preservation, and nested element conversion.",
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
      "Two-way converter for XML to JSON and JSON to XML transformations. Convert SOAP responses, RSS feeds, Maven POM files, Android XML, and enterprise XML documents with attribute mapping and namespace handling.",
    alternateName: [
      "XML to JSON",
      "JSON to XML",
      "XML JSON Converter",
      "XML Parser Online",
      "SOAP to JSON Converter",
      "RSS Feed to JSON",
      "Atom Feed to JSON",
      "Maven POM Converter",
      "Android XML Converter",
      "Sitemap.xml Converter",
      "OPML to JSON",
      "WSDL Inspector",
      "XML2JS Tool",
      "Enterprise XML Helper",
      "Legacy API XML Modernizer",
    ],
    featureList: [
      "Bidirectional XML to JSON and JSON to XML conversion",
      "XML attribute to JSON property mapping",
      "XML namespace handling and preservation",
      "CDATA section content extraction",
      "Nested element to JSON object hierarchy conversion",
      "SOAP response to JSON transformation",
      "RSS/Atom feed to JSON conversion",
      "Real-time parsing with syntax error detection",
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
      "This XML to JSON converter is built for developers, analysts, and integration teams who need to turn verbose XML documents into JSON that is easier to inspect, test, and use in modern applications. Paste XML from a SOAP response, RSS or Atom feed, sitemap.xml file, Maven POM, Android layout, SVG snippet, WSDL document, or legacy enterprise export and get a structured JSON representation with nesting preserved. The reverse JSON to XML flow is available in the same interface for systems that still require XML request bodies or configuration files.",

    howToSteps: [
      "Paste the XML document into the input panel, including the root element.",
      "Review the generated JSON structure to confirm elements, attributes, and repeated nodes mapped correctly.",
      "Use the reverse converter when you need to turn JSON back into XML for a SOAP request, config file, or feed.",
      "Copy the formatted output into your API client, test fixture, migration script, or documentation.",
      "For large enterprise payloads, convert a small sample first so you can confirm the expected schema before converting the full file.",
    ],

    features: [
      "Two-way XML to JSON and JSON to XML conversion",
      "Nested element conversion with preserved parent-child hierarchy",
      "Attribute mapping so IDs, hrefs, namespaces, and metadata are not lost",
      "Repeated XML elements represented as JSON arrays where appropriate",
      "CDATA and text-node handling for mixed XML content",
      "Pretty formatted output for debugging, docs, and API testing",
      "Browser-based processing with no signup or account required",
    ],

    useCases: [
      "Converting SOAP XML responses into JSON for easier debugging in REST-first codebases",
      "Turning RSS, Atom, OPML, or sitemap.xml files into JSON for feed processing and audits",
      "Inspecting Maven POM, Android XML, Spring config, SVG, or WSDL files as structured JSON",
      "Creating JSON fixtures from XML exports during legacy system migrations",
      "Checking how attributes, namespaces, arrays, CDATA, and mixed content will map before writing production parser code",
      "Preparing XML examples for documentation, QA tests, Postman collections, or integration tickets",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How XML Maps To JSON</h3>
          <p>
            XML elements become JSON object keys, child elements become nested objects, and repeated sibling elements usually become arrays. Text content becomes a string value or a text field when the XML element also has attributes or child nodes. This keeps the original hierarchy readable while making the result easier to use in JavaScript, API clients, and data pipelines.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Attributes, Namespaces, and Text Nodes</h3>
          <p>
            XML can store data in attributes as well as elements, while JSON only has key-value pairs. Converters normally prefix attributes or group them under a special key so values like <code>id</code>, <code>href</code>, <code>xmlns</code>, and schema metadata are not lost. Namespaces can also appear in keys, so review namespaced XML carefully before using the result as an application schema.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common XML Sources People Convert</h3>
          <p>
            XML still appears in SOAP APIs, RSS feeds, Atom feeds, sitemap.xml files, SVG files, Android layouts, Maven POM files, WSDL definitions, Office document internals, and older ERP or middleware exports. JSON is usually easier to inspect in browser DevTools, Postman, Node.js scripts, frontend applications, and REST API workflows.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Conversion Pitfalls To Check</h3>
          <p>
            XML and JSON do not have a perfect one-to-one mapping. Empty tags, attributes, mixed text and child elements, repeated nodes, namespace declarations, comments, and CDATA can all affect the output shape. After conversion, check whether single repeated nodes became arrays consistently and whether attributes appear where your target system expects them.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After conversion, validate object keys, arrays, and attribute fields against the target system's expected schema before using the result in production code.",

    faqs: [
      {
        question: "How do I convert XML to JSON online?",
        answer:
          "Paste the XML document into the converter and the tool generates formatted JSON. The output preserves the element hierarchy and maps repeated XML elements into JSON structures you can copy into code, API tests, or documentation.",
      },
      {
        question: "Can this converter handle XML attributes?",
        answer:
          "Yes. XML attributes are preserved in the JSON output using the converter's attribute mapping format. Review those fields after conversion because JSON does not have a native attribute concept.",
      },
      {
        question: "Can I convert SOAP XML responses to JSON?",
        answer:
          "Yes. SOAP responses are a common use case. Convert the SOAP envelope or body to JSON, then inspect the generated object structure to find the response data you need.",
      },
      {
        question: "Does XML to JSON conversion preserve namespaces?",
        answer:
          "Namespace information is included according to the converter's mapping behavior, but namespaces may appear as prefixed keys or attribute fields. If your downstream system depends on namespaces, verify them manually after conversion.",
      },
      {
        question: "Why did one XML item become an object instead of an array?",
        answer:
          "Some converters only create arrays when the same element appears more than once. If your schema requires an array even for one item, adjust the output or normalize the JSON in your application code.",
      },
      {
        question: "Can I convert JSON back to XML?",
        answer:
          "Yes. Paste JSON into the reverse conversion panel to generate XML. For SOAP payloads or namespaced documents, you may still need to add specific envelope tags, namespace declarations, or attributes required by the target service.",
      },
      {
        question: "Is this useful for sitemap.xml or RSS feeds?",
        answer:
          "Yes. You can convert sitemap.xml, RSS, Atom, and OPML files into JSON to inspect URLs, feed items, dates, titles, descriptions, and metadata more easily.",
      },
      {
        question: "Is my XML uploaded to a server?",
        answer:
          "The tool is designed for browser-based conversion, so the workflow is private and immediate. For sensitive production payloads, still follow your organization's data-handling policy.",
      },
    ],

    relatedTools: [
      { name: "JSON to XML Converter", href: "/converters/json-xml" },
      { name: "JSON to YAML Converter", href: "/converters/json-yaml" },
      { name: "YAML to JSON Converter", href: "/converters/yaml-json" },
      { name: "TOML to JSON Converter", href: "/converters/toml-json" },
      { name: "JSON to TOML Converter", href: "/converters/json-toml" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
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
