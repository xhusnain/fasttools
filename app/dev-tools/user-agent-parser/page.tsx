import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UserAgentParser } from "@/components/dev-tools/user-agent-parser"

const toolConfig = createToolConfig({
  toolName: "User-Agent Parser",
  description:
    "Parse user-agent strings into browser, OS, engine, CPU, and device details for debugging and analytics workflows.",
  metaTitle: "User-Agent Parser — Parse Browser, OS & Device Info Free (2026)",
  metaDescription:
    "Free user-agent string parser. Decode any user-agent to see browser name/version, operating system, device type, and engine details. Useful for analytics QA and debugging.",
  path: "/dev-tools/user-agent-parser",

  header: {
    title: "User-Agent String Parser",
    description:
      "Parse any user-agent string to extract browser name and version, operating system, device type, CPU architecture, and rendering engine. Useful for analytics validation, device-specific debugging, and cross-browser QA.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "User-agent parsing utility for browser, operating system, device, engine, and CPU inspection.",
    featureList: [
      "User-agent string parsing",
      "Browser and OS extraction",
      "Device and CPU detection",
      "Analytics and QA debugging workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A User Agent Parser is a free tool that decodes browser user-agent strings to identify the browser name, version, operating system, device type, and rendering engine.",
    quickAnswer:
      "Your current user-agent string is detected automatically. You can also paste any user-agent string to parse it. The tool extracts browser, OS, device, and engine details instantly.",
    keyTakeaways: [
      "Parses browser name, version, OS, device type, and rendering engine",
      "Auto-detects your current browser's user-agent string",
      "Identifies bots and crawlers (Googlebot, Bingbot, etc.)",
      "User-agent strings follow the HTTP/1.1 specification (RFC 7231)",
      "Useful for debugging browser-specific issues and analytics filtering",
    ],
    overview:
      "Parse and decode user-agent strings with this free online tool. Paste any user-agent string to instantly extract structured information — browser name and version, operating system and version, device type (desktop, mobile, tablet), CPU architecture, and rendering engine (Blink, Gecko, WebKit). Your current browser's user-agent is automatically detected and parsed. Useful for web analytics validation, device-specific bug reports, customer support debugging, and cross-browser testing.",

    howToSteps: [
      "Paste a user-agent string or use your current browser value.",
      "Review parsed browser, OS, engine, device, and CPU fields.",
      "Compare parsed values with expected behavior in your app.",
      "Copy data into bug reports or analytics QA notes.",
    ],

    features: [
      "UA string parsing in browser",
      "Browser/OS/device field extraction",
      "Useful for analytics and support troubleshooting",
      "Quick copy workflow for debugging",
      "No-install utility flow",
    ],

    useCases: [
      "Analytics dimension validation",
      "Customer environment debugging",
      "Mobile vs desktop behavior checks",
      "Cross-browser QA triage",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          User-agent analysis works best when parsed values are easy to read and
          compare. This page is optimized for quick triage and practical QA use.
        </p>
        <p>
          It helps teams identify platform-specific issues faster by turning raw
          UA headers into structured metadata.
        </p>
      </div>
    ),

    proTip:
      "Treat user-agent detection as a heuristic and combine it with feature detection for critical behavior.",

    faqs: [
      {
        question: "What is a user-agent string?",
        answer:
          "It is an HTTP header that describes the client software and platform making a request.",
      },
      {
        question: "Can parsing identify exact devices reliably?",
        answer:
          "It can identify many devices, but some user-agent strings are incomplete or intentionally generic.",
      },
      {
        question: "Is this useful for analytics QA?",
        answer:
          "Yes. It helps verify how incoming traffic is classified by browser and OS.",
      },
      {
        question: "Should I rely only on user-agent detection?",
        answer:
          "No. Use feature detection alongside UA parsing for critical product logic.",
      },
      {
        question: "Can I use this for support debugging?",
        answer:
          "Yes. It is useful for quickly identifying a user's runtime environment during issue triage.",
      },
    ],

    relatedTools: [
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UserAgentParserPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UserAgentParser />
        </div>
      )}
    />
  )
}
