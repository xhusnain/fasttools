import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const DeviceInfoTool = dynamic(
  () =>
    import("@/components/web-tools/device-info").then((mod) => mod.DeviceInfo),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Device Information",
  description:
    "View browser and device diagnostics including user agent, viewport, screen details, OS, and hardware signals.",
  metaTitle: "Device Information Checker (Browser, Screen, User Agent)",
  metaDescription:
    "Check your current device and browser details: user agent, screen size, pixel ratio, OS, language, and viewport metrics.",
  path: "/web-tools/device-info",
  keywords: [
    "device information",
    "user agent checker",
    "screen resolution checker",
    "browser info",
    "viewport size",
    "device diagnostics",
  ],

  header: {
    title: "Device Information",
    description:
      "See real-time browser and screen data for your current device.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Device Information", href: "/web-tools/device-info" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Inspect browser, screen, and system details directly in your browser.",
    alternateName: ["Browser Device Info", "User Agent and Screen Checker"],
    featureList: [
      "Screen and viewport dimensions",
      "Pixel ratio and orientation",
      "User agent and browser metadata",
      "OS and platform snapshot",
      "Client-side diagnostics",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Device Info Tool is a free tool that detects and displays your browser, operating system, screen resolution, device type, and network information.",
    quickAnswer:
      "Open the tool to instantly see your device details: browser name and version, OS, screen resolution, viewport size, device pixel ratio, touch support, language, timezone, and connection type. No installation needed.",
    keyTakeaways: [
      "Detects browser name, version, and rendering engine automatically",
      "Shows screen resolution, viewport size, and device pixel ratio",
      "Identifies OS (Windows, macOS, Linux, iOS, Android) and version",
      "Reports touch support, language, timezone, and connection type",
      "Useful for debugging responsive design and browser compatibility issues",
    ],
    overview:
      "This tool gives a quick technical snapshot of the browser and device currently visiting the page. It helps with responsive debugging, support triage, and QA checks across desktop and mobile environments.",

    howToSteps: [
      "Open this page from the device you want to inspect.",
      "Review screen and browser sections for resolution, pixel ratio, user agent, and OS data.",
      "Copy the user agent string when needed for support tickets or compatibility checks.",
    ],

    features: [
      "Screen size, orientation, and pixel ratio",
      "Viewport and browser metadata",
      "User agent and platform details",
      "Optional hardware and network hints when available",
      "No installation required",
    ],

    useCases: [
      "Debugging responsive layout differences between devices",
      "Collecting browser details for bug reports",
      "Validating mobile vs desktop environment assumptions",
      "Checking user-agent values during integration testing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Device and browser metadata can explain why a page behaves differently
          across environments. This tool surfaces high-value diagnostics in one
          place to speed up troubleshooting.
        </p>
        <p>
          Data is read from browser APIs on your current device. It is intended
          for technical checks, not user tracking.
        </p>
      </div>
    ),

    proTip:
      "Capture this output alongside screenshots when reporting frontend bugs to reduce back-and-forth during triage.",

    faqs: [
      {
        question: "What information does this tool show?",
        answer:
          "It shows screen metrics, orientation, viewport details, user agent, browser/platform data, and additional device hints when supported by your browser.",
      },
      {
        question: "Why do I need a user agent checker?",
        answer:
          "User agent strings are useful for compatibility debugging, support diagnostics, and testing conditional logic in analytics or application code.",
      },
      {
        question: "Can I use this on mobile devices?",
        answer:
          "Yes. Open the page directly on your phone or tablet to inspect mobile browser and screen values.",
      },
      {
        question: "Is this data shared externally?",
        answer:
          "For normal use, values are read and displayed in-browser so you can inspect them locally.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. It is free to use with no signup.",
      },
    ],

    additionalContent: [
      {
        heading: "Useful for Responsive QA",
        content:
          "Pair this output with CSS breakpoints to verify whether layout issues come from viewport width, pixel density, browser rendering differences, or device orientation.",
      },
      {
        heading: "Support Workflow",
        content:
          "When a user reports a bug, asking for user agent, OS, and viewport values can significantly reduce reproduction time. This page centralizes those values in one screen.",
      },
    ],

    relatedTools: [
      { name: "My Info", href: "/my-info" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "Auth Header Generator", href: "/web-tools/auth-generator" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DeviceInfoPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <DeviceInfoTool />
        </div>
      )}
    />
  )
}
