import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UserAgentParser } from "@/components/dev-tools/user-agent-parser"

const toolConfig = createToolConfig({
  toolName: "User-Agent Parser",
  description:
    "User-agent parser online. Parse user agent string to detect Browser, Engine, OS, CPU, Device. ua-parser-js alternative. user agent parser python, java, typescript, npm, example. Free.",
  metaTitle: "User-Agent Parser Online | Parse UA String - Browser, OS, Device, CPU",
  metaDescription:
    "Free user-agent parser online. Parse any user agent string to detect Browser, Engine, OS, CPU, Device type/model. ua-parser-js, user agent parser python, java, typescript, npm, example. No signup.",
  path: "/dev-tools/user-agent-parser",

  header: {
    title: "User-agent parser",
    description:
      "Detect and parse Browser, Engine, OS, CPU, and Device type/model from an user-agent string.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "User-agent parser online. Parse user agent string to detect Browser, Engine, OS, CPU, Device. ua-parser-js alternative. user agent parser python, java, typescript, npm, example.",
    alternateName: [
      "User Agent Parser",
      "User-Agent Parser Online",
      "UA Parser",
      "ua-parser-js",
      "Parse User Agent String",
      "User Agent Parser Online",
      "User Agent String Parser",
    ],
    featureList: [
      "Parse user agent string - Browser, Engine, OS, CPU, Device",
      "user agent parser online - No signup, instant results",
      "ua-parser-js compatible output",
      "user agent parser example - Use my browser button",
      "Detect browser name and version",
      "Detect OS name and version",
      "Detect device model, vendor, type",
      "Detect CPU architecture",
      "100% client-side, privacy-safe",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "User-agent parser parses any HTTP User-Agent header to extract Browser, Engine, OS, CPU, and Device information. Use this user agent parser online to make User-Agent strings human-readable. Compatible with ua-parser-js output. user agent parser python, user agent parser java, user agent parser typescript, user agent parser npm, user agent parser c#, user agent parser example. Free user agent parser online.",

    howToSteps: [
      "Paste a user agent string in the input, or click 'Use my browser' to parse your current browser's UA.",
      "View parsed results: Browser (name, version), Engine, OS, Device (model, vendor, type), CPU architecture.",
      "Copy the UA string or parsed values for debugging, analytics, or device detection logic.",
    ],

    features: [
      "user agent parser online: Parse any UA string instantly in the browser",
      "ua-parser-js: Same structure as ua-parser-js library output",
      "user agent parser example: Pre-filled sample UA, Use my browser button",
      "Detect Browser: Chrome, Safari, Firefox, Edge, Opera, and more",
      "Detect Engine: Blink, WebKit, Gecko, etc.",
      "Detect OS: Windows, Mac OS, Linux, Android, iOS",
      "Detect Device: Model, vendor, type (mobile, tablet, desktop)",
      "Detect CPU: x64, arm, ia32, etc.",
    ],

    useCases: [
      "user agent parser python: Reference for parsing UA in Python (user-agents, python-user-agents)",
      "user agent parser java: Reference for User-Agent parsing in Java",
      "user agent parser typescript: Test output structure for ua-parser-js or similar libs",
      "user agent parser npm: ua-parser-js, my-ua-parser - test UA strings before integrating",
      "user agent parser c#: Validate UA parsing logic in C# / .NET",
      "user agent parser github: Open-source UA parsing - verify regex patterns",
      "Analytics: Understand traffic by browser, OS, device",
      "Device detection: Adapt UI for mobile vs desktop",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          A user-agent parser converts raw User-Agent strings into structured
          data: Browser (name, version), Engine, OS, Device (model, vendor,
          type), and CPU. The User-Agent header is sent with every HTTP request
          and identifies the client. This user agent parser online uses
          ua-parser-js logic to detect browsers (Chrome, Safari, Firefox, Edge),
          engines (Blink, WebKit, Gecko), OS (Windows, Mac OS, Linux, Android,
          iOS), devices (mobile, tablet, desktop), and CPU architecture.
        </p>
        <p>
          Use it as a user agent parser example, or to validate UA parsing in
          user agent parser python, user agent parser java, user agent parser
          typescript, user agent parser npm, user agent parser c# projects.
          ua-parser-js on npm provides the same detection for Node.js and
          browser.
        </p>
      </div>
    ),

    proTip:
      "Use 'Use my browser' to instantly parse your current UA. For server-side parsing in Node.js, use ua-parser-js npm package. For Python, try user-agents or python-user-agents.",

    faqs: [
      {
        question: "What is a user agent parser?",
        answer:
          "A user agent parser is a tool or library that parses the HTTP User-Agent string to extract structured information such as browser name/version, engine, OS, device type/model, and CPU architecture. Use this user agent parser online for instant results.",
      },
      {
        question: "What is a user agent in HTML?",
        answer:
          "The User-Agent is an HTTP header sent by the client (browser, app, bot) that identifies the software making the request. It typically includes browser name, version, OS, and engine. Parsing it helps with analytics and device detection.",
      },
      {
        question: "What is ua-parser-js?",
        answer:
          "ua-parser-js is a popular JavaScript library (npm) that parses user agent strings to detect browser, engine, OS, CPU, and device. This tool provides user agent parser online output compatible with ua-parser-js structure.",
      },
      {
        question: "What's a user agent string used for?",
        answer:
          "User agent strings identify the client software. Uses include: analytics (browser/OS stats), device detection (mobile vs desktop), compatibility checks, bot detection, and content adaptation.",
      },
      {
        question: "Where can I parse user agent online?",
        answer:
          "Use this user agent parser online. Paste any UA string or click 'Use my browser' to parse. No signup. Instant results for Browser, Engine, OS, Device, CPU.",
      },
      {
        question: "Is there a user agent parser for Python?",
        answer:
          "Yes. Libraries like user-agents and python-user-agents parse UA in Python. This user agent parser online helps you test UA strings and verify expected output before integrating in Python.",
      },
      {
        question: "Is there a user agent parser for Java?",
        answer:
          "Yes. Java libraries like User-Agent-Utils and ua-parser parse UA strings. Use this user agent parser online to validate UA strings and compare output with your Java parser.",
      },
      {
        question: "Is there a user agent parser for TypeScript?",
        answer:
          "ua-parser-js has TypeScript definitions. Use this user agent parser online to test UA strings and verify structure before using ua-parser-js or my-ua-parser in your TypeScript project.",
      },
    ],

    additionalContent: [
      {
        heading: "user agent parser online — Free & instant",
        content:
          "This user agent parser online works entirely in the browser. No server uploads. Paste any UA string or use your current browser's UA. Output matches ua-parser-js format: browser.name, browser.version, engine.name, os.name, os.version, device.model, device.vendor, device.type, cpu.architecture.",
      },
      {
        heading: "user agent parser npm, python, java, typescript, c#",
        content:
          "For programmatic parsing: npm has ua-parser-js and my-ua-parser. Python has user-agents and python-user-agents. Java has User-Agent-Utils. C# has UAParser. Use this tool as a user agent parser example to validate UA strings across implementations.",
      },
    ],

    relatedTools: [
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "URL Parser", href: "/dev-tools/url-parser" },
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
