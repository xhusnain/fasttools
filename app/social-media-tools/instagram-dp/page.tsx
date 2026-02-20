import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const InstagramDpViewer = dynamic(
  () => import("@/components/social-media/instagram-dp-viewer").then((mod) => mod.InstagramDpViewer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Instagram DP Viewer",
  description:
    "View and download publicly available Instagram profile pictures in a focused browser workflow.",
  metaTitle: "Instagram DP Viewer (Profile Picture Tool)",
  metaDescription:
    "Enter an Instagram username to view and download available profile picture output.",
  path: "/social-media-tools/instagram-dp",
  keywords: [
    "instagram dp viewer",
    "instagram profile picture viewer",
    "view insta dp",
    "instagram dp download",
    "ig profile picture tool",
  ],

  header: {
    title: "Instagram DP Viewer",
    description:
      "Lookup and view profile-picture output from Instagram usernames.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Instagram profile-picture viewer for browser-based lookup and download workflows.",
    featureList: [
      "Username lookup",
      "Profile picture view",
      "Download workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to view profile-picture output from Instagram usernames for reference, review, and creator workflow tasks.",

    howToSteps: [
      "Enter the Instagram username.",
      "Run lookup and view the profile image output.",
      "Inspect the image in the preview panel.",
      "Download if needed.",
    ],

    features: [
      "Username-based profile lookup",
      "Profile-image viewing",
      "Download support",
      "Quick browser workflow",
      "Cross-device compatibility",
    ],

    useCases: [
      "Creator profile reference",
      "Brand asset checks",
      "Social account research",
      "Team review workflows",
    ],

    aboutTool:
      "The page is optimized for utility intent with a straightforward username-to-image lookup process and concise usage guidance.",

    proTip:
      "Use exact usernames to reduce lookup errors.",

    faqs: [
      {
        question: "What input should I use?",
        answer:
          "Enter a valid Instagram username with or without the @ symbol.",
      },
      {
        question: "Can I use this on phone browsers?",
        answer: "Yes. The tool supports modern mobile browsers.",
      },
      {
        question: "Is signup required?",
        answer: "No. It is available without signup.",
      },
      {
        question: "Will every username return a result?",
        answer:
          "Results depend on account visibility and source availability.",
      },
      {
        question: "Is it free?",
        answer: "Yes. It is offered as a free utility.",
      },
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function InstagramDpPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
