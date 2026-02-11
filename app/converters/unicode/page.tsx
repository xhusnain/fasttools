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
  toolName: "Text to Unicode",
  description:
    "Convert text to Unicode and Unicode to text. Parse text to Unicode code points (U+0048) and decode Unicode back to text. Free text to Unicode converter. No signup.",
  metaTitle: "Text to Unicode - Unicode to Text Converter Online Free",
  metaDescription:
    "Free text to Unicode converter. Convert text to Unicode code points and Unicode to text. Parse and convert text to unicode and vice-versa. No signup.",
  path: "/converters/unicode",
  keywords: [
    "text to unicode",
    "unicode to text",
    "text to unicode converter",
    "convert text to unicode",
    "convert unicode to text",
    "unicode converter",
    "text to unicode online",
  ],

  header: {
    title: "Text to Unicode",
    description:
      "Parse and convert text to unicode and vice-versa.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text to Unicode", href: "/converters/unicode" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Convert text to Unicode and Unicode to text. Parse text to Unicode code points and decode Unicode back to text. Free converter.",
    alternateName: [
      "Text to Unicode Converter",
      "Unicode to Text Converter",
      "Unicode Converter",
    ],
    featureList: [
      "Text to Unicode encoding",
      "Unicode to text decoding",
      "Copy unicode to clipboard",
      "Copy text to clipboard",
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
      "Convert text to Unicode and Unicode back to text. Type or paste text to get Unicode code points (e.g. Hello → U+0048 U+0065 U+006C U+006C U+006F). Paste Unicode (U+XXXX, \\uXXXX, &#72;) to decode to text. Free online text to Unicode converter. No signup required.",

    howToSteps: [
      "Text to Unicode: Enter your text. The Unicode code points (U+XXXX) appear instantly.",
      "Unicode to Text: Enter Unicode (U+0048 U+0065, or 72 101). The decoded text appears below.",
      "Click Copy unicode to clipboard or Copy text to clipboard to copy results.",
    ],

    features: [
      "Text to Unicode: Convert any text to U+ code points",
      "Unicode to text: Decode U+XXXX, \\uXXXX, &#DDD; to text",
      "Copy unicode to clipboard with one click",
      "Copy text to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Encoding: Convert text to Unicode for programming or data.",
      "Decoding: Convert Unicode code points (e.g. from APIs) back to readable text.",
      "Education: Understand Unicode and character encoding.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Unicode assigns a unique code point to every character across languages and symbols. This tool converts text to Unicode (U+XXXX format) and decodes Unicode back to text. Supports U+0048, \\u0048, &#72;, and decimal codes.
        </p>
      </div>
    ),

    proTip:
      "Unicode accepts U+0048, \\u0048, &#72; (decimal), &#x48; (hex), or space-separated decimal codes like 72 101 108.",

    faqs: [
      {
        question: "How to convert text to Unicode?",
        answer:
          "Enter your text in the Text to Unicode section. The tool outputs U+ code points for each character (e.g. Hello → U+0048 U+0065 U+006C U+006C U+006F). Copy the result.",
      },
      {
        question: "How to convert Unicode to text?",
        answer:
          "Paste Unicode in the Unicode to Text section. Supported formats: U+0048, \\u0048, &#72;, &#x48;, or space-separated decimals (72 101 108). The decoded text appears below.",
      },
      {
        question: "What is Unicode?",
        answer:
          "Unicode is a character encoding standard that assigns a unique code point to every character across languages and symbols. For example, 'H' is U+0048, 'e' is U+0065.",
      },
    ],

    relatedTools: [
      { name: "Text to ASCII Binary", href: "/converters/ascii-binary" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UnicodeConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UnicodeConverter />
        </div>
      )}
    />
  )
}
