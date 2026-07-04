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
  metaTitle: "Device Info — Browser, Screen & User Agent",
  metaDescription:
    "Free device info checker. Auto-detect browser name + version, screen resolution, viewport, device pixel ratio (DPR), OS, user agent, touch / pointer support, preferred language, timezone, network connection type. 100% client-side.",
  path: "/web-tools/device-info",

  header: {
    title: "Device Information",
    description:
      "Instantly detect and display your complete device fingerprint — browser name, version, and rendering engine, screen resolution and viewport dimensions, device pixel ratio (DPR), operating system and version, user agent string, touch/pointer support, preferred language, timezone, and network connection type — all from browser APIs with no installation required.",
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
    alternateName: [
      "Browser Detector",
      "Screen Resolution Checker",
      "What Browser Am I Using",
      "User Agent Viewer",
      "Device Fingerprint Inspector",
    ],
    featureList: [
      "Browser: name, version, rendering engine, engine version",
      "Screen: resolution (width × height), available, color depth, pixel depth",
      "Viewport: inner width × height (current visible area)",
      "Device pixel ratio (DPR) — critical for retina / HiDPI debugging",
      "OS: name and version (Windows 11, macOS Sonoma, iOS 17, Android 14, etc.)",
      "User agent: full UA string + parsed components",
      "Input: touch support, pointer type (mouse / pen / touch), max touch points",
      "Locale: preferred language, all accepted languages, timezone, time format",
      "Network: connection type (4G / 5G / WiFi), downlink speed, RTT, save-data flag",
      "WebRTC: optional local IP detection (relevant to fingerprint testing)",
      "Hardware: device memory (when reported), CPU cores",
      "Copy as JSON for tickets / bug reports",
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
      "This free device information checker provides a comprehensive real-time technical snapshot of your browser and device environment using standard browser APIs. Detect your browser name, version number, and rendering engine (Blink, Gecko, WebKit). View your screen resolution (physical pixels), CSS viewport dimensions, and device pixel ratio (DPR/Retina scaling factor) for responsive design debugging. Identify your operating system (Windows 10/11, macOS Sonoma/Sequoia, Linux, iOS, Android) and version. Copy the full user agent string for bug reports, support tickets, and compatibility testing. Check touch and pointer support capabilities, preferred language and locale settings, timezone information, and network connection type (WiFi, 4G, 5G) when available through the Network Information API. Essential for frontend developers debugging responsive layouts across devices, QA engineers documenting test environments, IT support teams collecting diagnostic information from end users, and web designers verifying CSS breakpoint behavior on different screen sizes.",

    howToSteps: [
      "Open this page on the device you want to inspect — works on desktop browsers (Chrome, Firefox, Safari, Edge), mobile phones (iOS Safari, Android Chrome), and tablets.",
      "Review the screen section for physical resolution, CSS viewport dimensions, device pixel ratio (DPR), screen orientation, and color depth.",
      "Check the browser section for browser name, version, rendering engine, user agent string, preferred language, and timezone.",
      "View OS detection results including operating system name, version, and platform architecture.",
      "Copy the full user agent string or any specific values for support tickets, bug reports, QA documentation, or compatibility testing records.",
    ],

    features: [
      "Screen resolution detection with physical pixel dimensions, CSS viewport size, and device pixel ratio (DPR/Retina scale)",
      "Browser identification including name, version number, rendering engine (Blink/Gecko/WebKit), and JavaScript engine",
      "Full user agent string display with one-click copy for bug reports and compatibility documentation",
      "Operating system detection for Windows, macOS, Linux, ChromeOS, iOS, and Android with version numbers",
      "Touch and pointer capability detection, screen orientation, color depth, and preferred language/locale",
      "Network connection type (WiFi, 4G, 5G, Ethernet) via Network Information API when browser-supported",
    ],

    useCases: [
      "Debugging responsive CSS layout issues by checking exact viewport dimensions, device pixel ratio, and screen orientation across different devices",
      "Collecting browser name, version, OS, and user agent string for detailed bug reports and QA test environment documentation",
      "IT help desk support — have end users visit this page and share their device info to speed up troubleshooting without manual question-and-answer",
      "Verifying mobile vs desktop vs tablet detection logic by comparing real device properties against your application's responsive breakpoints",
      "Testing user-agent-dependent code paths and browser feature detection during cross-browser compatibility development",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Information Browsers Expose</h3>
          <p>
            Modern web browsers expose device and environment data through several JavaScript APIs:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>navigator object:</strong> userAgent, platform, language, onLine, hardwareConcurrency (CPU cores), deviceMemory (RAM in GB)</li>
            <li><strong>screen object:</strong> width/height (physical display), availWidth/availHeight (excluding taskbar/dock), colorDepth, pixelDepth, orientation</li>
            <li><strong>window object:</strong> innerWidth/innerHeight (CSS viewport), outerWidth/outerHeight (full browser window), devicePixelRatio (DPR for Retina/HiDPI)</li>
            <li><strong>navigator.connection:</strong> connection type (4G/5G/WiFi), effective speed, downlink, RTT, saveData flag</li>
            <li><strong>Intl APIs:</strong> timezone, calendar, number format, currency preferences</li>
            <li><strong>matchMedia():</strong> CSS media query support — prefers-color-scheme, prefers-reduced-motion, hover capability</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Device Pixel Ratio (DPR) Explained</h3>
          <p>
            DPR is the most-confusing-yet-most-important number in modern web design. It&apos;s the ratio of physical display pixels to CSS pixels. <strong>DPR = 1</strong> on traditional displays — 1 CSS pixel = 1 physical pixel. <strong>DPR = 2</strong> on standard Retina displays — 1 CSS pixel = 2×2 = 4 physical pixels. <strong>DPR = 3</strong> on iPhone 12 Pro+ and similar — 1 CSS pixel = 3×3 = 9 physical pixels. <strong>Why it matters:</strong> a 1px CSS border is razor-thin on DPR 3 displays; a non-Retina image at 100×100 CSS pixels looks blurry on DPR 2 displays (must serve 200×200 source). Always serve <code>2x</code> and <code>3x</code> images via <code>srcset</code> for Retina compatibility.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common DPR Values by Device</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Device</th>
                <th className="text-left py-2 px-2 text-foreground">DPR</th>
                <th className="text-left py-2 px-2 text-foreground">CSS viewport</th>
                <th className="text-left py-2 px-2 text-foreground">Physical pixels</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">Standard desktop monitor</td><td className="py-2 px-2">1</td><td className="py-2 px-2">1920×1080</td><td className="py-2 px-2">1920×1080</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">MacBook Pro 14&quot;</td><td className="py-2 px-2">2</td><td className="py-2 px-2">1512×982</td><td className="py-2 px-2">3024×1964</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPhone 15</td><td className="py-2 px-2">3</td><td className="py-2 px-2">393×852</td><td className="py-2 px-2">1179×2556</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPhone 15 Pro Max</td><td className="py-2 px-2">3</td><td className="py-2 px-2">430×932</td><td className="py-2 px-2">1290×2796</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPad Pro 12.9&quot;</td><td className="py-2 px-2">2</td><td className="py-2 px-2">1024×1366</td><td className="py-2 px-2">2048×2732</td></tr>
              <tr><td className="py-2 px-2">Samsung Galaxy S23</td><td className="py-2 px-2">2.625</td><td className="py-2 px-2">412×915</td><td className="py-2 px-2">1080×2400</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Mobile Viewport Sizes</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Device</th>
                <th className="text-left py-2 px-2 text-foreground">Width (CSS)</th>
                <th className="text-left py-2 px-2 text-foreground">Height (CSS)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">iPhone SE / 8</td><td className="py-2 px-2">375</td><td className="py-2 px-2">667</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPhone X / 11 / 12 / 13</td><td className="py-2 px-2">375 / 390</td><td className="py-2 px-2">812 / 844</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPhone 14 / 15 Plus</td><td className="py-2 px-2">428 / 430</td><td className="py-2 px-2">926 / 932</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Galaxy S20-S23 (standard)</td><td className="py-2 px-2">360 / 412</td><td className="py-2 px-2">800 / 915</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Pixel 6/7/8</td><td className="py-2 px-2">412</td><td className="py-2 px-2">915</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPad Mini</td><td className="py-2 px-2">744</td><td className="py-2 px-2">1133</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">iPad Air / 10th gen</td><td className="py-2 px-2">820</td><td className="py-2 px-2">1180</td></tr>
              <tr><td className="py-2 px-2">iPad Pro 12.9&quot;</td><td className="py-2 px-2">1024</td><td className="py-2 px-2">1366</td></tr>
            </tbody>
          </table>
          <p className="mt-3">Use these as targets for your responsive CSS breakpoints. Common breakpoints: 360, 375, 414, 768, 1024, 1280, 1440px.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Debugging Workflow</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>User reports bug:</strong> &quot;site looks broken on my phone&quot;</li>
            <li><strong>Send them to this page:</strong> &quot;Open fasttools.store/web-tools/device-info on the affected device and paste the JSON output&quot;</li>
            <li><strong>Receive structured data:</strong> exact browser, OS, viewport, DPR — no back-and-forth</li>
            <li><strong>Reproduce in DevTools:</strong> use Chrome DevTools&apos; Device Toolbar to set viewport + DPR exactly</li>
            <li><strong>Test fixes against same params:</strong> verify the fix works at that specific configuration</li>
            <li><strong>Document fix in commit:</strong> &quot;Fixed broken nav on iPhone 15 (390×844, DPR 3, Safari 17.2)&quot;</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy &amp; Fingerprinting Note</h3>
          <p>
            The combination of all device properties exposed by browsers can uniquely identify a user — this is called <strong>browser fingerprinting</strong>. Common high-entropy fields: user agent + screen resolution + DPR + timezone + language + installed fonts + WebGL renderer. Privacy-focused browsers (Tor, Brave, Safari with ITP) reduce or randomize these properties to defeat fingerprinting. <strong>This tool only displays the info to you</strong> — none is sent to any server or stored. If you want to reduce your fingerprint, use Tor Browser, Brave, or Firefox with <code>privacy.resistFingerprinting</code> enabled.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When filing frontend bug reports, capture this device info output alongside a screenshot and browser console errors. Include the exact viewport dimensions, device pixel ratio, browser version, and OS — this eliminates 80% of the back-and-forth questions during triage and makes bugs reproducible on the first attempt.",

    faqs: [
      {
        question: "What device and browser information does this tool detect?",
        answer:
          "It detects and displays: browser name and version (Chrome, Firefox, Safari, Edge), rendering engine (Blink, Gecko, WebKit), operating system and version, full user agent string, screen resolution in physical pixels, CSS viewport dimensions, device pixel ratio (DPR/Retina scale), screen orientation, color depth, touch/pointer support, preferred language and locale, timezone, and network connection type when available.",
      },
      {
        question: "What is device pixel ratio (DPR) and why does it matter for web development?",
        answer:
          "Device pixel ratio is the ratio of physical display pixels to CSS pixels. A DPR of 2 (common on Retina displays) means each CSS pixel maps to a 2x2 grid of physical pixels. Understanding DPR is critical for responsive design — it affects image sharpness (use 2x images for Retina), CSS media queries using resolution/min-resolution, canvas rendering, and why layouts may appear different sizes on screens with identical CSS viewport dimensions.",
      },
      {
        question: "How do I find my user agent string for a bug report?",
        answer:
          "Open this page and the full user agent string is displayed automatically. Click the copy button to copy it to your clipboard. Include this string in bug reports, support tickets, and compatibility issue documentation so developers can identify your exact browser, version, OS, and rendering engine for reproduction.",
      },
      {
        question: "Can I check device info on my iPhone, Android phone, or tablet?",
        answer:
          "Yes. Open this page directly in any mobile browser (iOS Safari, Chrome for Android, Samsung Internet, Firefox Mobile) to see your mobile device's screen resolution, viewport dimensions, DPR, OS version, and user agent. This is especially useful for testing responsive layouts and debugging mobile-specific rendering issues.",
      },
      {
        question: "What is the difference between screen resolution and viewport size?",
        answer:
          "Screen resolution is the total physical pixel dimensions of your display (e.g., 2560x1440). Viewport size is the CSS pixel area available to the web page after accounting for browser chrome, toolbars, and scrollbars (e.g., 1440x900). Responsive CSS media queries use viewport dimensions, not screen resolution, which is why both values are important for debugging layout breakpoints.",
      },
      {
        question: "Is my device information stored or shared with any server?",
        answer:
          "No. All device detection runs 100% client-side using standard browser JavaScript APIs (navigator, screen, window objects). No data is transmitted to any server, stored in any database, or shared with third parties. The information is displayed only in your browser for your inspection.",
      },
      {
        question: "Is this device information checker free to use?",
        answer:
          "Yes, completely free with no signup, no installation, and no usage limits. Works instantly in any modern browser on desktop computers, laptops, tablets, and mobile phones.",
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
      { name: "User-Agent Parser", href: "/dev-tools/user-agent-parser" },
      { name: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker" },
      { name: "WHOIS & Domain Lookup", href: "/web-tools/whois-lookup" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "IP Subnet Calculator", href: "/calculator/ip-subnet-calculator" },
      { name: "Keycode Info", href: "/dev-tools/keycode-info" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
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
