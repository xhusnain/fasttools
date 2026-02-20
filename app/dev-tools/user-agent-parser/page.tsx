import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UserAgentParser } from "@/components/dev-tools/user-agent-parser"

const toolConfig = createToolConfig({
  toolName: "User-Agent Parser",
  description:
    "Parse user-agent strings into browser, OS, engine, CPU, and device details for debugging and analytics workflows.",
  metaTitle: "User-Agent Parser (Browser, OS, Device)",
  metaDescription:
    "Parse raw user-agent strings and inspect browser, OS, device, and CPU fields for QA and integration checks.",
  path: "/dev-tools/user-agent-parser",
  keywords: [
    "user agent parser",
    "parse user agent",
    "ua parser",
    "browser detection tool",
    "device detection from user agent",
  ],

  header: {
    title: "User-Agent Parser",
    description:
      "Decode raw user-agent strings into structured browser, OS, and device metadata.",
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
    overview:
      "Use this page to convert user-agent strings into readable device and browser fields. It is useful for analytics validation, support debugging, and cross-platform QA checks.",

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
