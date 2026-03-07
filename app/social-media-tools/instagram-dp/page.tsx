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
    "View and download Instagram profile pictures in full size by username with a fast browser workflow.",
  metaTitle: "Instagram DP Viewer & Downloader (Full Size HD)",
  metaDescription:
    "View Instagram profile pictures in full size and download by username. Insta DP viewer with zoom-friendly output and no login required.",
  path: "/social-media-tools/instagram-dp",
  keywords: [
    "instagram dp viewer",
    "insta dp viewer",
    "instagram profile picture viewer",
    "instagram profile picture downloader",
    "view instagram profile picture full size",
    "instagram dp download",
    "instagram pfp viewer",
  ],

  header: {
    title: "Instagram DP Viewer & Profile Picture Downloader",
    description:
      "Enter a username to view full-size profile-picture output and download if available.",
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
      "Instagram DP viewer and downloader for full-size profile picture lookup by username.",
    featureList: [
      "Username-based DP lookup",
      "Full-size profile-picture view",
      "Download workflow",
      "Mobile and desktop browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An Instagram DP Viewer is a free online tool that lets you view and download Instagram profile pictures (display pictures) in full size without logging in.",
    quickAnswer:
      "An Instagram DP Viewer lets you see any Instagram profile picture in full size by entering a username. It works without login, supports HD downloads, and is completely free.",
    keyTakeaways: [
      "View any Instagram profile picture in full size by entering a username",
      "Download profile pictures in SD or HD quality",
      "No Instagram login or account required",
      "Works on desktop and mobile browsers",
      "Does not access private posts, stories, or reels",
    ],
    overview:
      "Instagram DP Viewer helps you open profile pictures in larger size than the in-app avatar preview. Use it to check profile branding, review creator assets, and save reference copies in your workflow.",

    howToSteps: [
      "Enter an Instagram username (with or without @).",
      "Run lookup to load available profile-picture output.",
      "Open and inspect the preview in full size.",
      "Download the image if you need a local copy.",
    ],

    features: [
      "Insta DP lookup by username",
      "Full-size profile-picture output",
      "Zoom-friendly preview workflow",
      "Quick download action",
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
            DP means display picture (profile picture). An Instagram DP viewer opens the profile image in larger size so it can be inspected or downloaded for reference use.
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
            Most users search variants like &quot;insta dp viewer&quot;, &quot;profile picture downloader&quot;, or &quot;view full size Instagram profile photo&quot;. This page is structured around those intents with direct input, fast output, and related long-tail variant pages.
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
          "Enter the username in the viewer, run lookup, then open the preview and download if needed.",
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
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Tags Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "Hashtag Generator", href: "/social-media-tools/hashtag-counter" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function InstagramDpPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
