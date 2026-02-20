import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OutlookSafelinkDecoder } from "@/components/web-tools/outlook-safelink-decoder"

const toolConfig = createToolConfig({
  toolName: "Outlook Safe Links Decoder",
  description:
    "Extract the original destination URL from Microsoft Outlook Safe Links for faster verification and security review.",
  metaTitle: "Outlook Safe Links Decoder Online",
  metaDescription:
    "Decode Microsoft Safe Links URLs from Outlook and Office 365 to reveal original destinations without manually parsing query strings.",
  path: "/web-tools/outlook-safelink-decoder",
  keywords: [
    "outlook safelink decoder",
    "safe links decoder",
    "office 365 safelinks",
    "safelinks.protection.outlook.com",
    "decode outlook link",
    "email link checker",
  ],

  header: {
    title: "Outlook Safe Links Decoder",
    description:
      "Reveal original URLs from Microsoft Safe Links used in Outlook and Office 365 emails.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Outlook Safe Links Decoder", href: "/web-tools/outlook-safelink-decoder" },
  ],

  schemaOptions: {
    applicationCategory: "SecurityApplication",
    description:
      "Decode Outlook Safe Links URLs to inspect original destinations.",
    alternateName: [
      "Safe Links Decoder",
      "Office 365 Safe Link Decoder",
      "Outlook Link Decoder",
    ],
    featureList: [
      "Decode safelinks.protection.outlook.com URLs",
      "Extract original destination parameter",
      "Supports office365 and outlook safe links formats",
      "Copy decoded URL",
      "Client-side processing",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Microsoft Safe Links rewrites email URLs for click-time scanning. This tool extracts the original destination from rewritten Safe Links URLs so you can review the target quickly during security checks, incident response, and support workflows.",

    howToSteps: [
      "Copy the full Safe Links URL from Outlook, Office 365 email, or Teams.",
      "Paste it into the decoder input field.",
      "Review and copy the extracted destination URL.",
    ],

    features: [
      "Decodes Safe Links URL formats used by Microsoft",
      "Extracts original `url` parameter automatically",
      "Shows validation errors for invalid links",
      "Fast copy action for decoded destination",
      "No account or setup required",
    ],

    useCases: [
      "Email security triage and phishing investigations",
      "Help desk verification of rewritten user-reported links",
      "Auditing campaign links after Outlook rewriting",
      "Documenting original destinations for compliance and incident logs",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Safe Links is part of Microsoft Defender for Office 365. It rewrites
          links so Microsoft can evaluate destination safety when a user clicks.
          The original destination is embedded inside query parameters.
        </p>
        <p>
          This decoder does not bypass security controls. It simply helps you
          inspect link destinations before visiting them.
        </p>
      </div>
    ),

    proTip:
      "Use this tool together with your email security workflow: decode first, then validate domain reputation before opening unknown links.",

    faqs: [
      {
        question: "What is an Outlook Safe Links URL?",
        answer:
          "It is a rewritten Microsoft Defender URL (often on `safelinks.protection.outlook.com`) that wraps the original destination for click-time threat checks.",
      },
      {
        question: "Does decoding disable Safe Links protection?",
        answer:
          "No. Decoding only reveals the destination string. It does not remove tenant policies or bypass Microsoft scanning controls.",
      },
      {
        question: "Can I decode links from different Microsoft regions?",
        answer:
          "Yes. Region prefixes can vary, but the Safe Links structure is supported as long as the URL follows Microsoft Safe Links patterns.",
      },
      {
        question: "Why would support teams use this?",
        answer:
          "It helps support and security teams quickly confirm link destinations reported by users without manually parsing long rewritten URLs.",
      },
      {
        question: "Is this decoder free?",
        answer:
          "Yes. It is free and available in-browser.",
      },
    ],

    additionalContent: [
      {
        heading: "Security Workflow Context",
        content:
          "Decoding is only one step in link analysis. After extraction, validate domain age, reputation, and destination intent before interacting with unknown content.",
      },
      {
        heading: "Why Rewritten URLs Cause Friction",
        content:
          "Safe Links improve protection but can obscure destination readability in tickets and reports. A decoder restores transparency for analysts and support teams.",
      },
    ],

    relatedTools: [
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "My Info", href: "/my-info" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function OutlookSafelinkDecoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <OutlookSafelinkDecoder />
        </div>
      )}
    />
  )
}
