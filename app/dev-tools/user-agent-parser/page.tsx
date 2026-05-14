import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UserAgentParser } from "@/components/dev-tools/user-agent-parser"

const toolConfig = createToolConfig({
  toolName: "User-Agent Parser",
  description:
    "Parse user-agent strings into browser, OS, engine, CPU, and device details for debugging and analytics workflows.",
  metaTitle: "User-Agent Parser — Browser, OS, Engine & Device Detector Online",
  metaDescription:
    "Free user-agent parser. Decode any user-agent string into browser name + version, OS, device type, rendering engine (Blink / Gecko / WebKit), CPU architecture, and bot detection. Auto-detects your current UA. 100% client-side.",
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
      "User-agent string parser. Auto-detects current browser UA. Extracts browser name + version, OS + version, device type, CPU architecture, rendering engine, bot identification. Built on the same parsing rules as UAParser.js. 100% client-side.",
    alternateName: [
      "User-Agent Decoder",
      "Browser Detector",
      "UA String Parser",
      "Device Detector",
      "User-Agent Lookup",
      "What's My User-Agent",
      "UA Parser Online",
      "Browser Fingerprint Tool",
      "Bot Detector",
      "Mobile / Desktop Detector",
      "OS Detector from UA",
      "Whatsmyua Alternative",
      "User Agent Tester",
      "HTTP UA Inspector",
      "Crawler Identifier",
    ],
    featureList: [
      "Auto-detects your current browser's user-agent on page load",
      "Parse any custom UA string by pasting / typing",
      "Extracts: browser name + version, OS name + version, device type, CPU architecture, engine",
      "Identifies major bots and crawlers: Googlebot, Bingbot, Slurp, DuckDuckBot, Applebot, FacebookExternalHit, etc.",
      "Identifies AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bytespider",
      "Engine detection: Blink (Chrome/Edge/Opera), Gecko (Firefox), WebKit (Safari)",
      "Device classification: desktop, mobile, tablet, smart TV, embedded",
      "Common UA presets: latest Chrome / Firefox / Safari / Edge / mobile",
      "JSON output: parsed UA as structured JSON ready for tests / analytics",
      "Cross-validate analytics filters: paste a sample UA to see how GA / Mixpanel would classify it",
      "100% client-side — UA strings parsed in your browser, never logged",
      "Free, no signup, no rate limit",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "7820",
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
