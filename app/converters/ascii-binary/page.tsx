import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AsciiBinaryConverter = dynamic(
  () =>
    import("@/components/converters/ascii-binary-converter").then(
      (mod) => mod.AsciiBinaryConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "ASCII Binary Converter",
  description:
    "Convert text to 8-bit ASCII binary and decode binary back to readable text.",
  metaTitle: "ASCII Binary Converter (Text to Binary and Binary to Text)",
  metaDescription:
    "Free ASCII binary converter for text to binary and binary to text. Supports 8-bit groups and instant copy-ready output.",
  path: "/converters/ascii-binary",
  keywords: [
    "ascii binary converter",
    "text to binary",
    "binary to text",
    "ascii to binary",
    "binary decoder",
    "8 bit binary converter",
  ],

  header: {
    title: "ASCII Binary Converter",
    description:
      "Encode text into binary and decode binary strings into plain text instantly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "ASCII Binary Converter", href: "/converters/ascii-binary" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser-based converter for text to ASCII binary and binary to text decoding.",
    alternateName: ["Text to Binary Converter", "Binary to Text Converter"],
    featureList: [
      "Text to binary conversion",
      "Binary to text decoding",
      "8-bit group validation",
      "Copy-ready outputs",
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
      "Use this tool to convert text into ASCII binary and decode binary values back to readable text. It is useful for learning encoding basics, debugging payloads, and checking binary message formats.",

    howToSteps: [
      "Enter plain text in the text input panel.",
      "Copy the generated binary output in 8-bit groups.",
      "Paste binary in the decode panel to convert it back to text.",
      "Fix invalid input if the binary validator reports an error.",
    ],

    features: [
      "Text to 8-bit ASCII binary",
      "Binary to text decoding",
      "Input validation for binary format",
      "One-click copy actions",
      "Client-side conversion",
    ],

    useCases: [
      "Learning ASCII and binary encoding",
      "Debugging encoded strings",
      "Preparing technical examples for docs",
      "Validating binary payload fragments",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          ASCII maps characters to numeric codes. This converter renders those
          codes in binary form and decodes binary groups back into text, making
          it practical for both education and quick debugging tasks.
        </p>
      </div>
    ),

    proTip:
      "Use space-separated 8-bit groups for clearer decoding and easier manual inspection.",

    faqs: [
      {
        question: "Can I convert text to binary instantly?",
        answer:
          "Yes. Type text in the input panel and the binary output is generated immediately.",
      },
      {
        question: "What format should binary input use?",
        answer:
          "Use valid 8-bit groups, with or without spaces between groups.",
      },
      {
        question: "Does this decode binary back to text?",
        answer:
          "Yes. Paste binary in the decoder panel to convert it back to readable text.",
      },
      {
        question: "Is this ASCII binary tool free?",
        answer: "Yes. It is free and requires no signup.",
      },
      {
        question: "Is conversion done in the browser?",
        answer: "Yes. Processing happens client-side.",
      },
    ],

    relatedTools: [
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AsciiBinaryConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <AsciiBinaryConverter />
        </div>
      )}
    />
  )
}
