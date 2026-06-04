import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UserAgentParser } from "@/components/dev-tools/user-agent-parser"

const toolConfig = createToolConfig({
  toolName: "User-Agent Parser",
  description:
    "Parse a user-agent string into browser, engine, operating system, device, and CPU details using ua-parser-js.",
  metaTitle: "User-Agent Parser - Browser, OS & Device Lookup | FastTools",
  metaDescription:
    "Parse your current browser user-agent or paste any UA string. Extract browser name/version, rendering engine, OS, device model/vendor/type, and CPU architecture.",
  path: "/dev-tools/user-agent-parser",

  header: {
    title: "User-Agent String Parser",
    description:
      "Decode your current browser user-agent or paste another string to identify browser, engine, OS, device, and CPU fields.",
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
      "User-agent parser powered by ua-parser-js. Detects the current browser UA and parses custom UA strings into browser, rendering engine, operating system, device, and CPU fields.",
    alternateName: [
      "User-Agent Decoder",
      "Browser Detector",
      "UA String Parser",
      "Device Detector",
      "User-Agent Lookup",
      "What's My User-Agent",
      "UA Parser Online",
      "Mobile Desktop Detector",
      "OS Detector from UA",
      "HTTP UA Inspector",
    ],
    featureList: [
      "Loads the current browser user-agent",
      "Parses pasted custom user-agent strings",
      "Shows browser name and version",
      "Shows rendering engine name and version",
      "Shows operating system name and version",
      "Shows device model, vendor, and type when available",
      "Shows CPU architecture when available",
      "Clear input and use-current-browser controls",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "7820",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A user-agent parser reads a browser or crawler user-agent string and extracts structured fields such as browser, version, operating system, engine, device, and CPU architecture.",

    quickAnswer:
      "The tool loads your current browser's user-agent automatically. You can also paste another UA string to parse its browser, engine, OS, device, and CPU fields.",

    keyTakeaways: [
      "Parses browser name/version, engine, OS, device, and CPU fields.",
      "Uses ua-parser-js parsing rules in the browser.",
      "Device and CPU details are shown only when the user-agent string contains enough information.",
      "User-agent strings can be spoofed, so use parsing for analytics and debugging, not security decisions.",
      "The current UI does not provide bot classification, preset lists, raw JSON export, or one-click copying.",
    ],

    overview:
      "Use this user-agent parser for support tickets, analytics QA, browser-specific bug reports, and quick environment checks. It fills the input with the current browser user-agent, parses it into cards, and updates as you paste another string. The output includes browser, rendering engine, operating system, device information when available, and CPU architecture when available.",

    howToSteps: [
      "Use the automatically loaded current browser user-agent or paste another UA string.",
      "Review the Browser, Engine, OS, Device, and CPU cards.",
      "Click Use my browser if you want to restore the current browser's value.",
      "Clear the field if you want to test a different string from a log or support ticket.",
      "Use the parsed values as debugging hints, not as security signals.",
    ],

    features: [
      {
        title: "Current Browser Detection",
        description:
          "The component loads navigator.userAgent on the client so you can quickly check your own browser environment.",
      },
      {
        title: "Custom UA Parsing",
        description:
          "Paste a user-agent string from logs, analytics, customer support, or a crawler request and parse it immediately.",
      },
      {
        title: "Browser, Engine, and OS Cards",
        description:
          "See browser name/version, rendering engine name/version, and operating system name/version when detected.",
      },
      {
        title: "Device and CPU Hints",
        description:
          "Display device model/vendor/type and CPU architecture when those fields are available in the parsed result.",
      },
    ],

    useCases: [
      "Identify a user's browser and OS from a support ticket.",
      "Check how a UA string is parsed for analytics QA.",
      "Compare desktop, mobile, and tablet user-agent strings.",
      "Debug browser-specific UI or API behavior.",
      "Document environment details in bug reports.",
    ],

    aboutTool:
      "User-agent strings are useful but messy. Many include compatibility tokens from older browser history, and users or bots can spoof them easily. For product behavior, prefer feature detection and responsive design checks. Use user-agent parsing mainly for reporting, debugging, and triage.",

    proTip:
      "When debugging a browser-specific issue, keep the original UA string along with parsed fields. The raw string can reveal details that a parser does not classify.",

    faqs: [
      {
        question: "What is a user-agent string?",
        answer:
          "It is a string sent by clients, usually in the HTTP User-Agent header, that describes the browser or software making a request.",
      },
      {
        question: "Can this detect my current browser?",
        answer:
          "Yes. The tool loads your current browser user-agent on the client and parses it automatically.",
      },
      {
        question: "Can user-agent strings be spoofed?",
        answer:
          "Yes. Any client can send a fake user-agent, so parsing should not be used for authentication, authorization, or security decisions.",
      },
      {
        question: "Why are some device fields empty?",
        answer:
          "Many user-agent strings do not include a specific model, vendor, device type, or CPU architecture. The parser only shows what it can infer.",
      },
      {
        question: "Does this classify bots or crawlers?",
        answer:
          "No. The current UI shows browser, engine, OS, device, and CPU fields only.",
      },
    ],

    relatedTools: [
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "MIME Types", href: "/dev-tools/mime-types" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "Keycode Info", href: "/dev-tools/keycode-info" },
      { name: "Device Information", href: "/web-tools/device-info" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
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
