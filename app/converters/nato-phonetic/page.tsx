import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const NatoPhoneticConverter = dynamic(
  () =>
    import("@/components/converters/nato-phonetic-converter").then(
      (mod) => mod.NatoPhoneticConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "NATO Phonetic Converter",
  description:
    "Convert text to NATO phonetic alphabet words and decode NATO words back to plain text.",
  metaTitle: "NATO Phonetic Converter (Text to NATO and Back)",
  metaDescription:
    "Free NATO phonetic converter for text to Alpha Bravo format and NATO-to-text decoding. Supports letters and numbers.",
  path: "/converters/nato-phonetic",
  keywords: [
    "nato phonetic converter",
    "text to nato alphabet",
    "nato to text",
    "military alphabet converter",
    "alpha bravo charlie converter",
    "phonetic alphabet translator",
  ],

  header: {
    title: "NATO Phonetic Converter",
    description:
      "Translate text into NATO phonetic words and decode NATO words back into text.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "NATO Phonetic Converter", href: "/converters/nato-phonetic" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way NATO phonetic alphabet converter for text and code words.",
    alternateName: ["Military Alphabet Converter", "Text to NATO Converter"],
    featureList: [
      "Text to NATO conversion",
      "NATO to text decoding",
      "A-Z and 0-9 support",
      "Reference table",
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
      "Use this tool to convert plain text into NATO phonetic words (Alpha, Bravo, Charlie) and decode NATO words back to text. It is useful for calls, support workflows, aviation-style spelling, and radio clarity.",

    howToSteps: [
      "Enter text to generate NATO phonetic output.",
      "Paste NATO words to decode back into text.",
      "Use the built-in reference panel for quick lookup.",
      "Copy the converted result when ready.",
    ],

    features: [
      "Text-to-NATO conversion",
      "NATO-to-text decoding",
      "Support for letters and digits",
      "Interactive NATO reference grid",
      "One-click copy actions",
      "Browser-based processing",
    ],

    useCases: [
      "Spelling names over voice calls",
      "Customer support communication",
      "Learning NATO alphabet codes",
      "Improving clarity in noisy environments",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          The NATO phonetic alphabet replaces letters with standardized words to
          reduce misunderstanding in spoken communication. This converter helps
          you switch between plain text and NATO code words quickly.
        </p>
      </div>
    ),

    proTip:
      "Use the reference buttons to build accurate NATO strings for IDs, serials, and alphanumeric codes.",

    faqs: [
      {
        question: "Can I convert text to Alpha Bravo format?",
        answer:
          "Yes. Enter text and the converter outputs NATO phonetic words instantly.",
      },
      {
        question: "Can I decode NATO words back to text?",
        answer: "Yes. Paste NATO words and the tool decodes them to plain text.",
      },
      {
        question: "Are numbers supported?",
        answer:
          "Yes. The converter supports both letters (A-Z) and digits (0-9).",
      },
      {
        question: "Is this tool useful for call-center spelling workflows?",
        answer:
          "Yes. It helps reduce spelling confusion during phone-based communication.",
      },
      {
        question: "Is this NATO converter free?",
        answer: "Yes. It is free and requires no signup.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function NatoPhoneticConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <NatoPhoneticConverter />
        </div>
      )}
    />
  )
}
