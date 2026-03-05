import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AiQrGenerator = dynamic(
  () => import("@/components/ai/ai-qr-generator").then((mod) => mod.AiQrGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "QR Code Generator",
  description:
    "Create QR codes for URLs, WiFi, vCards, messages, and location sharing with color/logo customization.",
  metaTitle: "Free QR Code Generator with Logo (URL, WiFi, vCard)",
  metaDescription:
    "Generate QR codes for URL, WiFi, vCard, email, SMS, WhatsApp, phone, location, and text. Customize colors, logo, and export format.",
  path: "/ai-tools/qr-generator",
  keywords: [
    "qr code generator",
    "qr code generator with logo",
    "wifi qr code generator",
    "vcard qr code",
    "free qr code maker",
    "static qr code",
  ],

  header: {
    title: "QR Code Generator",
    description:
      "Build custom QR codes for marketing, operations, and contact sharing in a single workflow.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "QR Code Generator", href: "/ai-tools/qr-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Generate and customize QR codes for links, WiFi credentials, contacts, and messaging actions.",
    alternateName: ["QR Maker", "WiFi QR Generator", "QR Code Creator"],
    featureList: [
      "Nine QR content types",
      "Logo embedding",
      "Color and size controls",
      "PNG/SVG export",
      "Bulk QR generation",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A QR Code Generator is a free tool that creates scannable QR codes for URLs, WiFi networks, contact cards (vCard), text, email, SMS, phone numbers, WhatsApp messages, and GPS locations.",
    quickAnswer:
      "Choose a QR type (URL, WiFi, vCard, etc.), enter your data, customize colors and logo, then download as PNG or SVG. The generated QR code is static — it works permanently as long as the destination exists. No account needed.",
    keyTakeaways: [
      "Supports 9 QR types: URL, WiFi, vCard, email, SMS, WhatsApp, phone, location, text",
      "Static QR codes never expire — they work as long as the destination URL is active",
      "Minimum print size: 2cm x 2cm for reliable scanning",
      "Use high error correction (H) when adding a logo to maintain scannability",
      "Export as SVG for print materials, PNG for digital use",
      "Always test QR codes on 2+ devices before publishing",
    ],
    overview:
      "Use this tool to generate scannable QR codes for web links, WiFi login, business contact data, and quick actions such as SMS or WhatsApp starts. The builder includes styling controls and export options so the same flow can be used for digital campaigns and print assets.",

    howToSteps: [
      "Choose a QR type such as URL, WiFi, vCard, email, or location.",
      "Enter the required data and verify the preview updates correctly.",
      "Customize colors, size, error-correction level, and optional center logo.",
      "Download the final code as PNG or SVG and test scan behavior on mobile.",
    ],

    features: [
      "Supports URL, text, WiFi, vCard, email, SMS, WhatsApp, phone, and geo formats",
      "Design controls for size, margin, colors, and transparent background",
      "Optional logo embedding with adjustable logo scale",
      "Download-ready output in PNG and SVG",
      "Bulk generation for multi-link workflows",
    ],

    useCases: [
      "Restaurant menus and table cards",
      "Event WiFi access cards",
      "Business cards with instant contact save",
      "Printed posters and packaging redirects",
      "Operational labels and support links",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          High-performing QR pages in search usually win by combining immediate
          utility with practical implementation guidance. This page is built for
          that intent: users can generate codes instantly and still access
          details on format selection, scan reliability, and deployment.
        </p>
        <p>
          For SEO and user trust, the page emphasizes accurate expectations:
          what type each QR format is best for, how to test before publishing,
          and why export/contrast decisions matter for scan success.
        </p>
      </div>
    ),

    proTip:
      "For print assets, test the final PNG/SVG on at least two phones and keep strong foreground/background contrast.",

    faqs: [
      {
        question: "What QR types can I generate?",
        answer:
          "You can create QR codes for URL, text, WiFi, vCard, email, SMS, WhatsApp, phone, and geolocation data.",
      },
      {
        question: "Should I download PNG or SVG?",
        answer:
          "Use PNG for quick digital publishing and SVG when you need sharp scaling for print or large-format materials.",
      },
      {
        question: "How large should a QR code be for print?",
        answer:
          "A common baseline is around 2 cm square or larger, depending on scan distance and camera quality.",
      },
      {
        question: "Can I add a logo in the center?",
        answer:
          "Yes. The tool supports logo uploads and size controls. Keep enough contrast and test the final scan path.",
      },
      {
        question: "Do generated static QR codes expire?",
        answer:
          "Static QR codes encode the data directly and do not rely on an editable redirect dashboard. They stay usable as long as the destination remains valid.",
      },
    ],

    additionalContent: [
      {
        heading: "Static vs Dynamic Planning",
        content:
          "For evergreen destinations (homepages, contact cards, basic WiFi access), static codes are often enough. If you need post-print destination control, consider a managed redirect strategy.",
      },
      {
        heading: "Pre-Publish QA Checklist",
        content:
          "Validate destination URL format, test with dark/light mode camera previews, and verify code clarity after compression in your final publishing channel.",
      },
    ],

    relatedTools: [
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function QrGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiQrGenerator />
        </div>
      )}
    />
  )
}
