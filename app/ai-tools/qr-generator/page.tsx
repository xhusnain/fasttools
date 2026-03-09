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
  metaTitle: "QR Code Generator — Create QR Codes with Logo & Colors Free (2026)",
  metaDescription:
    "Generate free QR codes for URLs, WiFi passwords, vCards, email, SMS, WhatsApp, phone, and GPS location. Custom colors, logo embedding, PNG/SVG export. No signup — 9 QR types with error correction and bulk generation.",
  path: "/ai-tools/qr-generator",

  header: {
    title: "QR Code Generator",
    description:
      "Create custom QR codes for URLs, WiFi network credentials, vCard contact cards, email addresses, SMS messages, WhatsApp links, phone numbers, GPS locations, and plain text. Customize foreground/background colors, embed your logo, adjust error correction levels (L/M/Q/H), and export as high-resolution PNG or scalable SVG for print and digital use.",
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
      "This free QR code generator creates scannable codes for 9 different data types: website URLs, WiFi network credentials (SSID, password, encryption type), vCard contact cards (name, phone, email, address), email compose links, SMS pre-filled messages, WhatsApp click-to-chat links, phone dial shortcuts, GPS coordinates for location sharing, and plain text. Each QR code is fully customizable with foreground and background colors, optional center logo embedding, adjustable error correction levels (Low 7%, Medium 15%, Quartile 25%, High 30% data recovery), and configurable size and margin settings. Export as PNG for digital use (websites, social media, email signatures) or SVG for print materials (business cards, posters, packaging, menus, flyers) with pixel-perfect scaling at any size. All QR codes are static — they encode data directly and work permanently without any server dependency, redirect service, or expiration date. Minimum recommended print size: 2cm x 2cm (0.8 inches) for reliable scanning.",

    howToSteps: [
      "Select a QR code type: URL (website link), WiFi (network name, password, encryption), vCard (contact info), email, SMS, WhatsApp, phone number, GPS location, or plain text.",
      "Enter the required data — the live preview updates instantly so you can verify the QR code content before finalizing.",
      "Customize appearance: set foreground and background colors for brand consistency, upload a center logo (PNG/JPG), select error correction level (use H/High when adding logos), and adjust code size and quiet zone margin.",
      "Download as PNG (web, email, social media) or SVG (print materials, packaging, business cards), then test-scan with 2+ different phones before publishing to ensure reliable readability.",
    ],

    features: [
      "9 QR code types: URL, plain text, WiFi credentials, vCard contact card, email, SMS, WhatsApp, phone number, and GPS geolocation",
      "Custom color picker for foreground and background — match your brand colors for marketing consistency",
      "Logo embedding with adjustable scale — center your company logo, app icon, or profile picture inside the QR code",
      "4 error correction levels: Low (7%), Medium (15%), Quartile (25%), High (30%) — higher levels allow more design overlay while staying scannable",
      "PNG and SVG export formats — PNG for digital channels, SVG for lossless print scaling at any resolution",
      "Configurable QR code size (100-1000px) and quiet zone margin for optimal scan distance compatibility",
      "Bulk QR generation for creating multiple codes in a single workflow — ideal for inventory labels, multi-page menus, or event badge sets",
      "Instant live preview that updates as you type — verify content accuracy before downloading",
      "100% client-side generation — your data is never uploaded to any server",
    ],

    useCases: [
      "Restaurant digital menus — guests scan table QR codes to view menu, daily specials, and allergen info on their phones",
      "WiFi QR codes for hotels, offices, Airbnb rentals, and events — guests connect instantly without typing passwords",
      "Business cards with vCard QR codes — new contacts save your name, phone, email, company, and address with one scan",
      "Product packaging and labels — link to user manuals, warranty registration, recipe ideas, or authenticity verification",
      "Event badges and tickets — encode attendee info, session schedules, or check-in URLs for conference management",
      "Real estate signs and flyers — link to virtual tours, property details, and agent contact information",
      "Marketing campaigns — trackable URLs on posters, magazine ads, direct mail, and billboard advertising",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          QR codes (Quick Response codes) are two-dimensional barcodes invented
          by Denso Wave in 1994 for automotive manufacturing tracking. They encode
          data in a matrix of black and white squares that smartphone cameras can
          decode instantly. QR codes use Reed-Solomon error correction — the same
          mathematics used in CDs and DVDs — to remain scannable even when partially
          damaged or obscured. This is why you can place a logo in the center: the
          error correction algorithm reconstructs the hidden data modules. The four
          error correction levels (L/M/Q/H) control how much redundancy is added,
          with High (H) allowing up to 30% of the code area to be obscured while
          maintaining scannability.
        </p>
        <p>
          Static QR codes — like those generated by this tool — encode data directly
          into the code pattern. They work permanently with no server dependency,
          subscription cost, or expiration date. Dynamic QR codes (offered by paid
          services) use a redirect URL that can be changed after printing, but
          require an active server. For permanent destinations like your website
          homepage, contact card, or WiFi credentials, static codes are the better
          choice — they are faster to scan, more reliable, and completely free.
          Always test generated QR codes on multiple devices (iPhone and Android)
          and in the actual lighting/distance conditions where they will be scanned.
        </p>
      </div>
    ),

    proTip:
      "Always use error correction level H (High, 30%) when embedding a logo, and maintain a minimum 4:1 contrast ratio between foreground and background colors. For print, export SVG and scale to at least 2cm x 2cm — larger for outdoor signage where scan distance exceeds 30cm. Test the final file on both iPhone (iOS Camera) and Android (Google Lens) before publishing.",

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
