import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { OutlookSafelinkDecoder } from "@/components/web-tools/outlook-safelink-decoder"

const toolConfig = createToolConfig({
  toolName: "Outlook Safe Links Decoder",
  description:
    "Extract the original destination URL from Microsoft Outlook Safe Links for faster verification and security review.",
  metaTitle: "Outlook Safe Links Decoder — Reveal Original URLs from SafeLinks",
  metaDescription:
    "Free Outlook Safe Links decoder. Extract the original destination URL from safelinks.protection.outlook.com wrapped links (Office 365, Microsoft Defender for Office 365, Teams). For phishing triage, security analysis, IT support. 100% client-side.",
  path: "/web-tools/outlook-safelink-decoder",

  header: {
    title: "Outlook Safe Links Decoder",
    description:
      "Extract and reveal the original destination URL hidden inside Microsoft Outlook Safe Links (safelinks.protection.outlook.com) from Office 365 emails, Microsoft Teams messages, and Microsoft Defender for Office 365 rewritten links — essential for phishing investigations, email security triage, and IT support workflows.",
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
      "Microsoft Defender Link Decoder",
      "Email Phishing URL Reveal",
      "SafeLinks Extractor",
      "ATP Link Decoder",
      "MS Defender URL Unwrapper",
      "Teams Safe Link Decoder",
      "Original URL Extractor",
      "Wrapped Link Decoder",
      "Microsoft URL Unwrapper",
      "Email Security Link Tool",
      "Anti-Phishing Link Inspector",
      "Outlook Defender Decoder",
    ],
    featureList: [
      "Decodes safelinks.protection.outlook.com URLs to reveal original destination",
      "Supports regional variants: na01.safelinks, eur01.safelinks, etc.",
      "Bulk mode: paste a list of Safe Links, get all original URLs at once",
      "Extracts `url=` parameter and percent-decodes correctly",
      "Works with Office 365, Outlook.com, Microsoft Teams, OneDrive sharing links",
      "Compatible with Microsoft Defender for Office 365 link rewriting",
      "Shows extracted UTM parameters from the original URL for marketing audit",
      "Risk indicator: highlights suspicious destinations (typosquatting, URL shorteners)",
      "Copy decoded URL to clipboard",
      "100% client-side — wrapped URLs never sent to a server",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An Outlook SafeLink Decoder is a free tool that extracts the original URL from Microsoft Outlook SafeLinks (safelinks.protection.outlook.com) wrapped URLs.",
    quickAnswer:
      "Paste an Outlook SafeLink URL to instantly reveal the original destination URL hidden behind Microsoft's safe link protection. Copy the decoded URL. Works with all SafeLinks formats.",
    keyTakeaways: [
      "Decodes safelinks.protection.outlook.com wrapped URLs instantly",
      "Reveals the original destination URL behind Microsoft's protection layer",
      "SafeLinks is part of Microsoft Defender for Office 365",
      "Useful when you need the real URL for sharing or documentation",
      "All decoding runs locally — no URLs are sent to external servers",
    ],
    overview:
      "This free Outlook Safe Links decoder extracts the original destination URL from Microsoft's rewritten safelinks.protection.outlook.com URLs used in Office 365, Outlook.com, and Microsoft Teams. Microsoft Defender for Office 365 automatically rewrites hyperlinks in emails and messages to route clicks through Microsoft's real-time URL scanning infrastructure. While this protects against malicious links, the rewritten URLs are long, unreadable, and difficult to verify manually. This decoder parses the Safe Links URL structure, extracts the embedded 'url' parameter, URL-decodes it, and displays the clean original destination — enabling security analysts to perform phishing investigations, IT help desk teams to verify user-reported suspicious links, marketing teams to audit campaign link integrity after Office 365 rewriting, and compliance officers to document original destinations for incident response logs.",

    howToSteps: [
      "Right-click a Safe Links URL in Outlook, Office 365 email, or Microsoft Teams and copy the full link address (starts with safelinks.protection.outlook.com).",
      "Paste the complete Safe Links URL into the decoder input field — the tool accepts all regional Safe Links URL formats.",
      "The decoder automatically extracts and URL-decodes the original destination from the embedded 'url' parameter.",
      "Review the decoded destination URL to verify the domain, path, and query parameters before visiting.",
      "Copy the clean original URL with one click for documentation, incident reports, or sharing with end users.",
    ],

    features: [
      "Decodes all Microsoft Safe Links URL formats including safelinks.protection.outlook.com regional variants",
      "Automatically extracts and URL-decodes the embedded 'url' query parameter from rewritten links",
      "Validates input format and displays clear error messages for non-Safe Links URLs",
      "One-click copy for the decoded original destination URL",
      "Supports Safe Links from Outlook desktop, Outlook web app, Office 365, and Microsoft Teams",
      "100% client-side processing — pasted URLs are never sent to external servers",
    ],

    useCases: [
      "Phishing investigation and email security triage — decode suspicious Safe Links to inspect the actual destination domain before visiting",
      "IT help desk support — quickly verify user-reported links without manually parsing long safelinks.protection.outlook.com URLs",
      "Marketing campaign auditing — check that email campaign links still resolve to correct landing pages after Office 365 rewriting",
      "Compliance and incident response documentation — extract and log original destination URLs for security incident reports",
      "SOC analyst workflows — batch-decode Safe Links from phishing emails during threat analysis and indicator extraction",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Microsoft Safe Links is a core feature of Microsoft Defender for Office 365 (formerly Office 365 Advanced Threat Protection). When enabled by an organization&apos;s security administrator, Safe Links automatically rewrites URLs in incoming emails, Microsoft Teams messages, and Office documents. The rewritten URL routes through safelinks.protection.outlook.com, where Microsoft performs real-time URL scanning and reputation checking at the moment a user clicks — providing time-of-click protection against malicious links that may have been safe when the email was delivered but later weaponized. The original destination URL is embedded as an encoded query parameter within the rewritten Safe Links URL structure.
        </p>
        <p>
          This decoder does not bypass, disable, or circumvent Microsoft Defender&apos;s security scanning. It simply extracts and displays the original destination URL so security professionals, IT administrators, and end users can inspect where a link actually leads before visiting it. This transparency is especially valuable during phishing investigations where analysts need to quickly identify malicious domains, during help desk triage where support staff need to verify links reported by users, and during compliance audits where original destination documentation is required. The decoder runs entirely in your browser — no URLs are transmitted to external servers, ensuring sensitive link data from security investigations remains private.
        </p>
      </div>
    ),

    proTip:
      "After decoding a Safe Links URL, do not visit the destination immediately. First check the domain against threat intelligence feeds (VirusTotal, URLhaus), verify WHOIS registration age, and inspect the full URL path for suspicious patterns like typosquatting, URL shortener redirects, or credential harvesting paths (/login, /verify, /update-billing).",

    faqs: [
      {
        question: "What is a Microsoft Outlook Safe Links URL and why are email links rewritten?",
        answer:
          "Microsoft Safe Links is a security feature in Microsoft Defender for Office 365 that rewrites hyperlinks in emails and Teams messages to route through safelinks.protection.outlook.com. When a user clicks, Microsoft performs real-time URL scanning and reputation analysis to block malicious destinations — providing time-of-click protection against phishing, malware, and weaponized URLs.",
      },
      {
        question: "Does decoding a Safe Links URL disable Microsoft Defender protection?",
        answer:
          "No. Decoding only extracts and displays the original destination URL string. It does not remove Safe Links policies from your Office 365 tenant, bypass Microsoft's real-time scanning, or affect how Safe Links functions for any users in your organization.",
      },
      {
        question: "Can I decode Safe Links URLs from different Microsoft 365 regions and tenants?",
        answer:
          "Yes. Microsoft uses regional subdomains and tenant-specific URL patterns, but the Safe Links URL structure follows a consistent format. This decoder supports all standard safelinks.protection.outlook.com URL variants regardless of geographic region or tenant configuration.",
      },
      {
        question: "How do security analysts and SOC teams use a Safe Links decoder for phishing investigations?",
        answer:
          "During phishing triage, analysts extract Safe Links URLs from reported emails, decode them to reveal the actual destination domain, check the domain against threat intelligence platforms (VirusTotal, URLhaus, AbuseIPDB), analyze the URL path for credential harvesting indicators, and document the original IOCs (indicators of compromise) in incident response reports.",
      },
      {
        question: "Why do IT help desk teams need to decode Outlook Safe Links?",
        answer:
          "End users frequently report suspicious emails by sharing the Safe Links URL, which is long and unreadable. Help desk staff use this decoder to quickly extract the original destination, verify whether the link is legitimate, and provide a clear response — reducing ticket resolution time and improving user communication.",
      },
      {
        question: "Are the URLs I paste into this decoder stored or sent to any server?",
        answer:
          "No. All Safe Links decoding runs 100% client-side in your browser using JavaScript. No URLs, decoded destinations, or any data are transmitted to external servers — making this tool safe for handling sensitive links from security investigations and confidential email communications.",
      },
      {
        question: "Is this Outlook Safe Links decoder free to use?",
        answer:
          "Yes, completely free with no signup, no account required, and no usage limits. The tool works instantly in any modern browser on desktop and mobile devices.",
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
