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
  metaTitle: "Device Info — Browser, Screen Resolution, User Agent & OS Detector",
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
      "Viewport Dimensions Tool",
      "DPR Tester",
      "What Is My OS",
      "Browser Capabilities Tester",
      "WhatIsMyBrowser Alternative",
      "WhatsMyBrowser Alternative",
      "screensizecheck Alternative",
      "Mobile Device Detector",
      "Cross-Browser Debug Helper",
      "Responsive Design Tester",
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
        <p>
          Modern web browsers expose a rich set of device and environment information through JavaScript APIs. The navigator object provides user agent strings, platform identification, language preferences, online status, and hardware concurrency (CPU cores). The screen object reports physical display resolution, color depth, and pixel depth. The window object reveals CSS viewport dimensions (innerWidth/innerHeight) and device pixel ratio (devicePixelRatio) — the critical scaling factor that determines how CSS pixels map to physical display pixels on Retina, HiDPI, and high-density mobile screens. The Network Information API (navigator.connection) can report connection type, effective bandwidth, and round-trip time estimates on supporting browsers.
        </p>
        <p>
          This device information tool reads all available browser APIs and presents the data in a structured, human-readable format. It is designed for technical diagnostics, not user tracking — all data is read and displayed locally in your browser without being sent to any server. The information is especially valuable for web developers debugging why responsive layouts break at specific viewport sizes, QA engineers documenting exact test environments for reproducibility, IT support teams collecting device specifications from end users remotely, and designers verifying that their CSS breakpoints and media queries trigger correctly across real device screen sizes and pixel densities.
        </p>
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
