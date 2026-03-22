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
    "View Instagram profile pictures in full size by username with a fast browser workflow.",
  metaTitle: "Instagram DP Viewer — Full Size HD Profile Picture (Free)",
  metaDescription:
    "View Instagram profile pictures in full size by username. Insta DP viewer with zoom-friendly output and no login required. Save images for reference.",
  path: "/social-media-tools/instagram-dp",

  header: {
    title: "Instagram DP Viewer — View Full Size Profile Pictures",
    description:
      "Enter a username to view full-size profile pictures. Save a copy for reference if needed.",
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
      "Instagram DP viewer for full-size profile picture lookup by username.",
    featureList: [
      "Username-based DP lookup",
      "Full-size profile-picture view",
      "Save to device option",
      "Mobile and desktop browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Instagram DP Viewer helps you open profile pictures in larger size than the in-app avatar preview. Use it to check profile branding, review creator assets, and save reference copies in your workflow.",

    howToSteps: [
      "Enter an Instagram username (with or without @).",
      "Run lookup to load available profile-picture output.",
      "Open and inspect the preview in full size.",
      "Save the image if you need a local copy for reference.",
    ],

    features: [
      "Insta DP lookup by username",
      "Full-size profile-picture output",
      "Zoom-friendly preview workflow",
      "Quick save action",
      "Browser-based utility (desktop and mobile)",
    ],

    useCases: [
      "Creator and influencer profile research",
      "Brand profile-image review",
      "Social account verification workflows",
      "Editorial and design reference tasks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is an Instagram DP Viewer?</h3>
          <p>
            DP means display picture (profile picture). An Instagram DP viewer opens the profile image in larger size so it can be inspected or saved for reference use.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Private Account Clarification</h3>
          <p>
            This tool is limited to profile-picture visibility and does not unlock private posts, reels, or stories. If source visibility is restricted, lookup may fail.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why This Matters for SEO and Creator Workflows</h3>
          <p>
            Most users search variants like "insta dp viewer", "view instagram profile picture", or "view full size Instagram profile photo". This page is structured around those intents with direct input, fast output, and related long-tail variant pages.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use exact usernames and open profile links directly from Instagram to reduce lookup errors.",

    faqs: [
      {
        question: "What is Insta DP?",
        answer:
          "Insta DP refers to an Instagram display picture, meaning the account profile photo.",
      },
      {
        question: "How do I view an Instagram profile picture in full size?",
        answer:
          "Enter the username in the viewer, run lookup, then open the preview and save if needed.",
      },
      {
        question: "Does this work for private accounts?",
        answer:
          "It only applies to profile-picture visibility and does not provide access to private posts or stories.",
      },
      {
        question: "Do users get notified when I view a DP?",
        answer:
          "Profile-picture lookup does not trigger a standard Instagram profile-photo notification flow.",
      },
      {
        question: "Can I use this on iPhone and Android?",
        answer: "Yes. It works in modern mobile and desktop browsers.",
      },
      {
        question: "Is login required?",
        answer: "No. This tool is designed for no-login browser usage.",
      },
      {
        question: "Is Instagram DP Viewer free?",
        answer: "Yes. The tool is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "Private Instagram DP Viewer", href: "/social-media-tools/instagram-dp/private-account" },
      { name: "Instagram DP Viewer HD 1080p", href: "/social-media-tools/instagram-dp/hd-1080p" },
      { name: "Insta Zoom Profile Picture Viewer", href: "/social-media-tools/instagram-dp/zoom-profile-picture" },
      { name: "Anonymous Instagram DP Viewer", href: "/social-media-tools/instagram-dp/anonymous-viewer" },
      { name: "Instagram DP Viewer for PC", href: "/social-media-tools/instagram-dp/pc-viewer" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function InstagramDpPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
