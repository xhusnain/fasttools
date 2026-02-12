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
    "Free my device information online. Get device information pc, mobile. Screen size, user agent, pixel ratio. device information android, samsung. No signup.",
  metaTitle: "Device Information Online - Screen, User Agent, My Device Info",
  metaDescription:
    "Free my device information online. Get device information pc and mobile. Screen size, pixel ratio, user agent. device information android, samsung. No signup.",
  path: "/web-tools/device-info",

  header: {
    title: "Device information",
    description:
      "Get information about your current device (screen size, pixel ratio, user agent, ...).",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Device Information", href: "/web-tools/device-info" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free my device information online. device information pc, mobile. Screen, user agent, pixel ratio.",
    alternateName: [
      "Device Information Tool",
      "My Device Information Online",
      "Device Info Online",
    ],
    featureList: [
      "Screen size, orientation, pixel ratio",
      "User agent, browser vendor, platform",
      "device information pc and mobile",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free my device information online. Get device information pc, device information android, and mobile. View screen size, pixel ratio, orientation, user agent, browser vendor, platform. Works as my device information google alternative. No device information app or device info apk needed. No signup.",

    howToSteps: [
      "Open this page on the device you want to inspect.",
      "Device information loads automatically: screen size, orientation, color depth, pixel ratio, window size.",
      "View device details: browser vendor, languages, platform, user agent. Copy user agent with one click.",
    ],

    features: [
      "Screen: size, orientation, orientation angle, color depth, pixel ratio, window size",
      "Device: browser vendor, languages, platform, user agent, OS",
      "Works on device information pc and my mobile device information",
      "device information android, device information samsung compatible",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "my device information online: Check screen and browser details without my device information google.",
      "device information pc: Inspect display resolution, pixel ratio, and user agent on desktop.",
      "my mobile device information: View device information android or device information samsung on your phone.",
      "device information code: Use as reference for responsive design or feature detection.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          This device information tool shows your browser and screen details
          client-side. Get my device information online without a device
          information app or device info apk. Works on device information pc and
          my mobile device information. Shows screen size, orientation, pixel
          ratio, user agent, browser vendor, platform. Similar to my device
          information google or device information for android apps—but runs in
          the browser. No signup, no installation.
        </p>
      </div>
    ),

    proTip:
      "Use this my device information online tool to debug responsive layouts, verify pixel ratio for retina displays, or copy your user agent for support requests.",

    faqs: [
      {
        question: "How can I get my device information?",
        answer:
          "Use this free my device information online tool. Open the page on your device—screen size, pixel ratio, user agent, browser vendor, and more load automatically. Works on device information pc and my mobile device information. No device information app or device info apk required.",
      },
      {
        question: "Where do I find device information?",
        answer:
          "On this page. Open fasttools.store/web-tools/device-info on your PC or phone. Device information loads instantly: screen size, orientation, user agent, platform. For device information android or device information samsung, open in Chrome or Samsung Internet.",
      },
      {
        question: "What is device information?",
        answer:
          "Device information includes screen size, pixel ratio, orientation, user agent, browser vendor, platform, and OS. This my device information online tool displays all of that. Useful for device information pc, my mobile device information, or device information for android troubleshooting.",
      },
      {
        question: "Is there a device information app or device info apk?",
        answer:
          "You don't need a device information app or device info apk. This my device information online tool runs in your browser. Works on device information android, device information samsung, and device information pc. No install, no signup.",
      },
      {
        question: "How does my device information online compare to find my device?",
        answer:
          "Find my device (e.g. Google) helps locate lost phones. This tool shows technical device information: screen, user agent, platform. Use for debugging, responsive design, or support. Free my device information online.",
      },
    ],

    additionalContent: [
      {
        heading: "My Device Information Online — PC & Mobile",
        content:
          "Get my device information online on device information pc or my mobile device information. This tool shows screen size, pixel ratio, orientation, user agent, browser vendor, languages, platform. No device information app or device info apk. Works for device information android and device information samsung. Free, client-side.",
      },
      {
        heading: "Device Information for Android & Samsung",
        content:
          "Open this page on your Android or Samsung phone to view device information for android. See screen size, pixel ratio, user agent. Same as my device information online on PC. No device information code or device information app needed.",
      },
    ],

    relatedTools: [
      { name: "My Info (Location)", href: "/my-info" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
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
