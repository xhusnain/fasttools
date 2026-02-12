import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OutlookSafelinkDecoder } from "@/components/web-tools/outlook-safelink-decoder"

const toolConfig = createToolConfig({
  toolName: "Outlook Safelink Decoder",
  description:
    "Outlook safelink decoder. Decode Outlook SafeLink links to original URL. safelinks decoder o365, safe link decoder, safelinks url. Microsoft Safe Links test url. safelink checker. Free.",
  metaTitle: "Outlook Safelink Decoder - Decode SafeLinks URL Online | Free",
  metaDescription:
    "Free Outlook safelink decoder. Decode Outlook SafeLink links to original URL. safelinks decoder o365, safe link decoder, safelinks url. Microsoft Safe Links test url, safelink checker. No signup.",
  path: "/web-tools/outlook-safelink-decoder",

  header: {
    title: "Outlook Safelink decoder",
    description: "Decode Outlook SafeLink links",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Outlook Safelink Decoder", href: "/web-tools/outlook-safelink-decoder" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Outlook safelink decoder. Decode Outlook SafeLink links to original URL. safelinks decoder o365, safe link decoder, safelinks url.",
    alternateName: [
      "Outlook Safelink Decoder",
      "Safe Link Decoder",
      "SafeLinks Decoder O365",
      "Outlook Safelink Decoder iOS",
      "Safelinks URL Decoder",
      "Microsoft Safe Links Decoder",
      "Safelink Checker",
    ],
    featureList: [
      "Decode Outlook SafeLink links",
      "safelinks decoder o365",
      "safe link decoder - reveal original URL",
      "safelinks url decoder",
      "Microsoft Safe Links test url",
      "safelink checker",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Outlook safelink decoder reveals the original destination URL hidden inside Microsoft SafeLinks. SafeLinks (Office 365 ATP) rewrites email links to scan for threats. Use this safe link decoder to see where a link goes without clicking. safelinks decoder o365, outlook safelink decoder, safelinks url. Microsoft Safe Links test url. safelink checker. proofpoint url decoder alternative. Free.",

    howToSteps: [
      "Paste the SafeLinks URL (from Outlook, Teams, or Office 365 email) into the input field.",
      "The decoded original URL appears instantly in the output.",
      "Use the copy button to copy the decoded URL.",
    ],

    features: [
      "outlook safelink decoder: Decode SafeLinks to original URL",
      "safe link decoder: Reveal destination without clicking",
      "safelinks decoder o365: Works with Office 365 SafeLinks",
      "outlook safelink decoder ios: Use on iPhone, iPad",
      "safelinks url: Supports safelinks.protection.outlook.com and safelinks.office.com",
      "Microsoft Safe Links test url: Verify link destinations",
      "safelink checker: Check where rewritten links point",
      "proofpoint url decoder: Similar to Proofpoint URL decoder for SafeLinks",
    ],

    useCases: [
      "Verify link destination before clicking",
      "Microsoft Safe Links test url: Test SafeLinks behavior",
      "safelink checker: Audit email links",
      "Copy original URL for documentation or reporting",
      "outlook safelink decoder ios: Decode on mobile",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Microsoft SafeLinks (Office 365 Advanced Threat Protection) rewrites
          URLs in emails to redirect through Microsoft for scanning. The real
          destination is stored in the <code>url</code> query parameter. This
          Outlook safelink decoder extracts and decodes that parameter so you can
          see the original URL without clicking. Use as safelinks decoder o365,
          safe link decoder, or safelink checker. Works with outlook safelink
          decoder ios and desktop.
        </p>
        <p>
          SafeLinks URLs use domains like{" "}
          <code>*.safelinks.protection.outlook.com</code> or{" "}
          <code>safelinks.office.com</code>. This tool does not bypass Microsoft
          protection—it only reveals the destination for inspection. Similar to
          proofpoint url decoder for SafeLinks-style URLs.
        </p>
      </div>
    ),

    proTip:
      "Right-click a link in Outlook and choose 'Copy Hyperlink' or 'Copy Link Address' to get the SafeLinks URL, then paste it here to decode.",

    faqs: [
      {
        question: "What do Outlook SafeLinks do?",
        answer:
          "Outlook SafeLinks (Microsoft Defender for Office 365) rewrites URLs in emails so they pass through Microsoft for threat scanning. When you click, Microsoft checks the destination before redirecting. This protects against phishing and malware links.",
      },
      {
        question: "How do I find the original URL of a safelink in Outlook?",
        answer:
          "Use this Outlook safelink decoder. Copy the SafeLinks URL (right-click link → Copy Hyperlink), paste it here, and the original destination URL will be revealed without clicking.",
      },
      {
        question: "What is an example of a safelink URL?",
        answer:
          "Example: https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fexample.com%2Fpage&data=... The original URL (example.com/page) is in the url parameter. This tool decodes it.",
      },
      {
        question: "What is nam10 SafeLinks Protection Outlook?",
        answer:
          "nam10 is a Microsoft datacenter region code. SafeLinks URLs may use nam10, eur02, or other region prefixes (e.g. nam10.safelinks.protection.outlook.com). This decoder works with all SafeLinks regions.",
      },
      {
        question: "Is there an outlook safelink decoder app?",
        answer:
          "This Outlook safelink decoder runs in any web browser—no app install needed. Use it on outlook safelink decoder ios (Safari), Android, or desktop. Works like an outlook safelink decoder app in your browser.",
      },
    ],

    additionalContent: [
      {
        heading: "safelinks url — Format",
        content:
          "SafeLinks URLs look like: https://[region].safelinks.protection.outlook.com/?url=ENCODED_URL&data=... The url parameter contains the original link (URL-encoded). This tool extracts and decodes it. safelinks decoder o365, safe link decoder, safelink checker.",
      },
      {
        heading: "Microsoft Safe Links test url",
        content:
          "Use this tool as a Microsoft Safe Links test url utility—paste a SafeLinks URL to verify where it points. Safe for security review, link audits, and documentation. Does not bypass protection.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "Device Information", href: "/web-tools/device-info" },
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
