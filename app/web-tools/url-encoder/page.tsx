import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UrlEncoder = dynamic(
  () =>
    import("@/components/web-tools/url-encoder").then((mod) => mod.UrlEncoder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Encode/decode URL-formatted strings",
  description:
    "Free URL encode decode online. Percent-encoded. encode decode url formatted strings javascript. URL encode, decode url java, c#. No signup.",
  metaTitle: "URL Encode Decode Online - Free Percent-Encoded Tool",
  metaDescription:
    "Free URL encode decode online. Encode decode url formatted strings. Percent-encoded. For JavaScript, Java, C#. Decode URL encoded string. No signup.",
  path: "/web-tools/url-encoder",

  header: {
    title: "Encode/decode URL-formatted strings",
    description:
      "Encode text to URL-encoded format (also known as \"percent-encoded\"), or decode from it.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    {
      label: "URL Encoder Decoder",
      href: "/web-tools/url-encoder",
    },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free URL encode decode online. Encode decode url formatted strings. Percent-encoded. For JavaScript, Java, C#.",
    alternateName: [
      "URL Encoder Decoder",
      "URL Encode Decode Online",
      "Encode Decode URL Formatted Strings",
    ],
    featureList: [
      "URL encode",
      "URL decode",
      "Percent-encoded format",
      "For JavaScript, Java, C#",
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
      "Free url encode decode online. Encode text to percent-encoded format or decode url encoded string back to plain text. Works as encode decode url formatted strings javascript, url decode java, and url decode c# alternative. Decode url javascript, url encode online—no signup.",

    howToSteps: [
      "Encode: Enter your string in the Encode panel. The percent-encoded output appears instantly.",
      "Decode: Enter your encoded string in the Decode panel. The decoded text appears instantly.",
      "Copy encoded or decoded result with one click.",
    ],

    features: [
      "URL encode: Convert spaces and special characters to %XX format",
      "URL decode: Convert percent-encoded strings back to plain text",
      "Live conversion: Results update as you type",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Query strings: url encode parameters for safe URLs.",
      "encode decode url formatted strings javascript: Use instead of encodeURIComponent/decodeURIComponent.",
      "url decode java, url decode c#: Same result without opening an IDE.",
      "decode url encoded string: Paste percent-encoded text to get plain text.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          URL encoding (percent-encoding) converts special characters, spaces,
          and non-ASCII symbols into a web-friendly format for safe transmission.
          Use encodeURIComponent in JavaScript, URLEncoder in Java, or
          HttpUtility.UrlEncode in C#. This tool works as an online alternative.
        </p>
      </div>
    ),

    proTip:
      "Spaces become %20, colons become %3A. Use this for query strings, path segments, and any URL component that needs encoding.",

    faqs: [
      {
        question: "How do I encode a URL?",
        answer:
          "Paste your text in the Encode panel. The URL-encoded (percent-encoded) output appears instantly. Spaces become %20, special characters become %XX. Copy with one click. This free url encode online tool handles all characters.",
      },
      {
        question: "How do I decode a URL encoded string?",
        answer:
          "Paste your encoded string (e.g. Hello%20world%20%3A)) in the Decode panel. The decoded text appears instantly. This decode url encoded string tool handles percent-encoding. Copy with one click.",
      },
      {
        question: "How to decode URL in JavaScript?",
        answer:
          "Use decodeURIComponent() in JavaScript. Or use this free url encode decode online tool—paste encoded string and get decoded text. Ideal for decode url javascript workflows when you need a quick conversion.",
      },
      {
        question: "How to decode URL in Java?",
        answer:
          "Use java.net.URLDecoder.decode() in Java. This free url decode java alternative works online—paste encoded string and get decoded text. No IDE or Maven needed.",
      },
      {
        question: "How to decode URL in C#?",
        answer:
          "Use HttpUtility.UrlDecode() or Uri.UnescapeDataString() in C#. This free url decode c# alternative works online—paste encoded string and get decoded text.",
      },
      {
        question: "Is this URL encoder free?",
        answer:
          "Yes. This URL encode decode tool is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for encode decode url formatted strings online workflows.",
      },
    ],

    additionalContent: [
      {
        heading: "Encode Decode URL Formatted Strings Online",
        content:
          "This encode decode url formatted strings online tool converts between plain text and percent-encoded format. Use it for url encode or url decode without writing code. Works as encode decode url formatted strings javascript, url decode java, and url decode c# alternative. Decode url encoded string or url encode online in seconds. Supports decode url javascript workflows and html decode–style percent decoding.",
      },
      {
        heading: "URL Encode Online — JavaScript, Java, C#",
        content:
          "Need url encode online or decode url encoded string? Paste in either panel. For decode url javascript use decodeURIComponent; for url decode java use URLDecoder.decode; for url decode c# use HttpUtility.UrlDecode or Uri.UnescapeDataString. This free url encode decode online tool gives the same result in your browser—no IDE required.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UrlEncoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UrlEncoder />
        </div>
      )}
    />
  )
}
