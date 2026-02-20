import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UnicodeConverter = dynamic(
  () =>
    import("@/components/converters/unicode-converter").then(
      (mod) => mod.UnicodeConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Unicode Converter",
  description:
    "Convert text to Unicode code points and decode Unicode sequences back to readable text.",
  metaTitle: "Unicode Converter (Text to Unicode and Unicode to Text)",
  metaDescription:
    "Free Unicode converter for text-to-code-point and Unicode-to-text decoding. Supports common Unicode input formats.",
  path: "/converters/unicode",
  keywords: [
    "unicode converter",
    "text to unicode",
    "unicode to text",
    "unicode code point converter",
    "uplus converter",
    "escape sequence decoder",
  ],

  header: {
    title: "Unicode Converter",
    description:
      "Convert plain text to Unicode code points and decode Unicode data back into text.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Unicode Converter", href: "/converters/unicode" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Unicode converter for code-point encoding and decoding.",
    alternateName: ["Text to Unicode Converter", "Unicode to Text Converter"],
    featureList: [
      "Text to Unicode conversion",
      "Unicode to text decoding",
      "Multiple Unicode input formats",
      "Copy-ready output",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Use this tool to convert text into Unicode code points and decode Unicode notation back into readable text. It is useful for debugging string encoding, developer workflows, and multilingual text handling.",

    howToSteps: [
      "Enter plain text to generate Unicode code points.",
      "Paste Unicode values in the decode panel.",
      "Review decoded output instantly.",
      "Copy converted results for use in code or docs.",
    ],

    features: [
      "Text-to-Unicode conversion",
      "Unicode-to-text decoding",
      "Common notation support (U+, escape sequences, entities)",
      "One-click copy actions",
      "Browser-based conversion",
    ],

    useCases: [
      "Debugging encoded strings",
      "Preparing escape sequences for development",
      "Analyzing multilingual character sets",
      "Validating Unicode payload snippets",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Unicode defines a universal code point for characters across writing
          systems and symbols. This converter helps bridge human-readable text
          and machine-readable Unicode notation.
        </p>
      </div>
    ),

    proTip:
      "When decoding mixed input, keep separators clear so each code point is parsed correctly.",

    faqs: [
      {
        question: "Can I convert text into Unicode code points?",
        answer:
          "Yes. Enter text and the tool outputs Unicode code point notation.",
      },
      {
        question: "Can I decode Unicode back to plain text?",
        answer: "Yes. Paste Unicode input and the decoder returns readable text.",
      },
      {
        question: "What Unicode formats are accepted?",
        answer:
          "The tool supports common Unicode formats, including code-point and escape-style input.",
      },
      {
        question: "Is conversion done locally?",
        answer: "Yes. Processing happens in your browser.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free and requires no signup.",
      },
    ],

    relatedTools: [
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UnicodeConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <UnicodeConverter />
        </div>
      )}
    />
  )
}
