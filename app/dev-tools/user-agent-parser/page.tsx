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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a User-Agent String?</h3>
          <p>
            A <strong>user-agent string</strong> is an HTTP header browsers send with every request, identifying themselves to servers. It contains browser name, version, rendering engine, operating system, and sometimes device info. The format dates to early 1990s and is famously chaotic — modern user-agents include misleading historical tokens because some servers used them to deliver browser-specific content. A 2025 Chrome on Windows might say <code>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</code> — name-checking Mozilla, Apple WebKit, KHTML, Gecko, and Safari, even though it&apos;s only Chrome.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why User-Agent Strings Are a Mess</h3>
          <p>
            Each token in a modern UA is a historical artifact:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>&quot;Mozilla/5.0&quot;:</strong> originally Netscape 5.0 (never released). Every browser claims it because sites used to send modern HTML only to Mozilla-identified browsers.</li>
            <li><strong>&quot;AppleWebKit&quot;:</strong> Safari&apos;s engine. Chrome forked WebKit into Blink in 2013 but still claims AppleWebKit for compatibility.</li>
            <li><strong>&quot;KHTML, like Gecko&quot;:</strong> KDE&apos;s browser engine (predecessor of WebKit). The &quot;like Gecko&quot; part is for sites that checked for Mozilla&apos;s Gecko engine.</li>
            <li><strong>&quot;Chrome/...&quot;:</strong> the actual browser identifier. THIS is what matters.</li>
            <li><strong>&quot;Safari/...&quot;:</strong> appended because some sites required Safari to render correctly.</li>
          </ul>
          <p className="mt-3">
            The result: parsing UA strings reliably requires regex matching against known browser fingerprints. UAParser.js and similar libraries maintain regularly-updated rules to extract real browser/OS info from this historical chaos.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">User-Agent Use Cases (and Anti-Patterns)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>✓ Analytics:</strong> classify visitors by browser / OS / device for reporting. Tolerable inaccuracy.</li>
            <li><strong>✓ Bug triage:</strong> a support ticket says &quot;site broken&quot; — UA tells you Safari 14 on iPhone 12, so you can reproduce.</li>
            <li><strong>✓ Bot detection:</strong> Googlebot, Bingbot, GPTBot, ClaudeBot all identify themselves in UA. Block bad bots, allow good ones.</li>
            <li><strong>✓ Marketing / SEO:</strong> distinguish search-engine crawlers from real users in logs.</li>
            <li><strong>✗ Feature gating:</strong> NEVER use UA to decide if a browser supports a feature. Use feature detection: <code>if (&apos;serviceWorker&apos; in navigator) ...</code>. UA-based feature flags break when browsers change.</li>
            <li><strong>✗ Security decisions:</strong> UA is trivially spoofed. Curl <code>--user-agent</code>, browser dev tools, every scraper sends fake UAs. Never authenticate or authorize based on UA.</li>
            <li><strong>✗ Mobile / desktop UI switching:</strong> use CSS media queries / viewport size, not UA. UA can&apos;t tell &quot;iPad in landscape&quot; from &quot;laptop with small browser window.&quot;</li>
            <li><strong>✗ Bot blocking based on UA only:</strong> attackers spoof; legitimate tools (curl, automation) get blocked. Pair UA with behavioral analysis.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Bots and Their User-Agents</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Bot</th>
                <th className="text-left py-2 px-2 text-foreground">User-Agent token</th>
                <th className="text-left py-2 px-2 text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">Googlebot</td><td className="py-2 px-2"><code>Googlebot/2.1</code></td><td className="py-2 px-2">Search indexing</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Bingbot</td><td className="py-2 px-2"><code>bingbot/2.0</code></td><td className="py-2 px-2">Microsoft / Bing search</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">DuckDuckBot</td><td className="py-2 px-2"><code>DuckDuckBot/1.1</code></td><td className="py-2 px-2">DuckDuckGo search</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Applebot</td><td className="py-2 px-2"><code>Applebot/0.1</code></td><td className="py-2 px-2">Siri / Apple Search</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">FacebookExternalHit</td><td className="py-2 px-2"><code>facebookexternalhit/1.1</code></td><td className="py-2 px-2">Link previews on FB</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Twitterbot</td><td className="py-2 px-2"><code>Twitterbot/1.0</code></td><td className="py-2 px-2">Link cards on X</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>GPTBot</strong></td><td className="py-2 px-2"><code>GPTBot</code></td><td className="py-2 px-2">OpenAI training crawler</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>ClaudeBot</strong></td><td className="py-2 px-2"><code>ClaudeBot</code></td><td className="py-2 px-2">Anthropic training</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>PerplexityBot</strong></td><td className="py-2 px-2"><code>PerplexityBot</code></td><td className="py-2 px-2">Perplexity AI search</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">CCBot</td><td className="py-2 px-2"><code>CCBot/2.0</code></td><td className="py-2 px-2">Common Crawl (LLM training data)</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Bytespider</td><td className="py-2 px-2"><code>Bytespider</code></td><td className="py-2 px-2">ByteDance / TikTok crawler</td></tr>
              <tr><td className="py-2 px-2">AhrefsBot</td><td className="py-2 px-2"><code>AhrefsBot/7.0</code></td><td className="py-2 px-2">SEO backlink crawler</td></tr>
            </tbody>
          </table>
          <p className="mt-3">
            Block AI training bots in <code>robots.txt</code> if you don&apos;t want your content used for LLM training: <code>User-agent: GPTBot</code> / <code>Disallow: /</code>.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Client Hints: The UA Replacement</h3>
          <p>
            Google&apos;s <strong>User-Agent Client Hints</strong> (UA-CH) is the modern replacement for parsing UA strings. Instead of a single long UA string, browsers send structured headers: <code>Sec-CH-UA</code>, <code>Sec-CH-UA-Mobile</code>, <code>Sec-CH-UA-Platform</code>, etc. These are explicitly intended to provide accurate browser metadata while reducing fingerprinting surface. Chrome started reducing UA detail in 2023 — the new structured hints are the long-term solution. For server-side parsing, support both the legacy UA string and the new Client Hints. For client-side, prefer feature detection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UA Spoofing and Privacy</h3>
          <p>
            Any user can change their browser&apos;s user-agent string. Reasons people do it:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Bypass mobile-only restrictions:</strong> get desktop UI on phone</li>
            <li><strong>Test responsive design:</strong> browser dev tools include UA spoofing</li>
            <li><strong>Privacy / anti-fingerprinting:</strong> Tor Browser deliberately uses a generic UA</li>
            <li><strong>Scraping / automation:</strong> headless browsers may spoof to look like real users</li>
            <li><strong>Compatibility:</strong> dodge UA-based site restrictions (e.g., &quot;Chrome only&quot; sites that work fine in Firefox)</li>
          </ul>
          <p className="mt-3">
            Implications: <strong>don&apos;t rely on UA for security or feature decisions</strong>. Use it for analytics / triage only, where some inaccuracy is tolerable.
          </p>
        </div>
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
