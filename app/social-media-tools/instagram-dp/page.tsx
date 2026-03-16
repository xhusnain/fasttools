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
    "View and download Instagram profile pictures in full size HD by username — free InstaDp profile picture downloader and insta DP zoomer.",
  metaTitle: "InstaDp — Instagram DP Viewer & Profile Picture Downloader Full Size HD (2026)",
  metaDescription:
    "Free InstaDp viewer to download Instagram profile pictures in full size HD. IG DP viewer HD, insta DP zoomer, and insta zoom DP tool — view, zoom, and save any profile picture by username. No login required.",
  path: "/social-media-tools/instagram-dp",

  header: {
    title: "InstaDp — Instagram Profile Picture Downloader & DP Viewer HD",
    description:
      "Free InstaDp tool to view and download Instagram profile pictures in full size HD. Insta DP zoomer and IG DP viewer — zoom, preview, and save any profile picture by username. No login required.",
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
      "InstaDp — Instagram profile picture downloader and DP viewer HD. View and download full-size IG profile pictures by username.",
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
      "An InstaDp viewer (Instagram DP Viewer) is a free online tool that lets you view and download Instagram profile pictures in full size HD without logging in. Also known as an IG DP viewer or insta DP zoomer, it enlarges profile photos so you can see and save them at full resolution.",
    quickAnswer:
      "InstaDp lets you see any Instagram profile picture in full size by entering a username. This free IG DP viewer HD tool supports zoom, full-size downloads, and works without login on any device.",
    keyTakeaways: [
      "View any Instagram profile picture in full size HD by entering a username",
      "InstaDp profile picture downloader with SD and HD quality options",
      "Free IG DP viewer — no Instagram login or account required",
      "Insta DP zoomer works on desktop and mobile browsers",
      "Insta zoom DP tool that does not access private posts, stories, or reels",
    ],
    overview:
      "View and download any Instagram profile picture in full size with this free InstaDp viewer and profile picture downloader. Instagram shows profile pictures as tiny circular avatars — this IG DP viewer HD tool enlarges them to full resolution so you can zoom in and see the complete image. Use the insta DP zoomer to enter any public username and instantly view their profile picture at full size. Whether you need an insta zoom DP tool for checking creator branding, verifying accounts, or saving reference images — this InstaDp full size viewer handles it all. No Instagram login, no app download — works in any browser on mobile and desktop.",

    howToSteps: [
      "Enter an Instagram username (with or without @).",
      "Run lookup to load available profile-picture output.",
      "Open and inspect the preview in full size.",
      "Download the image if you need a local copy.",
    ],

    features: [
      "InstaDp profile picture lookup by username",
      "Full-size HD profile-picture output (IG DP viewer HD)",
      "Insta DP zoomer with zoom-friendly preview",
      "Insta zoom DP with quick download action",
      "InstaDp full size browser-based utility (desktop and mobile)",
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
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is InstaDp / Instagram DP Viewer?</h3>
          <p>
            InstaDp (short for Instagram Display Picture) refers to tools that let you view Instagram profile pictures in full size. An IG DP viewer HD opens the profile image at full resolution so it can be zoomed, inspected, or downloaded. Whether you call it an insta DP zoomer, insta zoom DP tool, or InstaDp full size viewer — they all serve the same purpose: enlarging and downloading Instagram profile photos.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Private Account Clarification</h3>
          <p>
            This tool is limited to profile-picture visibility and does not unlock private posts, reels, or stories. If source visibility is restricted, lookup may fail.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Use an InstaDp Profile Picture Downloader?</h3>
          <p>
            Users search for &quot;instadp instagram profile picture downloader&quot;, &quot;ig dp viewer hd&quot;, &quot;instadp full size&quot;, &quot;insta dp zoomer&quot;, and &quot;insta zoom dp&quot; to view profile pictures beyond Instagram&apos;s tiny avatar crop. This tool serves all those intents — enter a username, zoom to full size, and download in HD quality.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use exact usernames and open profile links directly from Instagram to reduce lookup errors.",

    faqs: [
      {
        question: "What is InstaDp?",
        answer:
          "InstaDp (Insta DP) stands for Instagram Display Picture. It refers to an Instagram profile photo, and InstaDp tools like this one let you view and download profile pictures in full size HD.",
      },
      {
        question: "How do I view an Instagram profile picture in full size?",
        answer:
          "Enter the username in this InstaDp viewer, click View Profile Picture, and the IG DP viewer HD will display the full-size image. You can then download it in SD or HD quality.",
      },
      {
        question: "What is an insta DP zoomer?",
        answer:
          "An insta DP zoomer (also called insta zoom DP) is a tool that zooms and enlarges Instagram profile pictures beyond the small circular avatar shown on Instagram. This InstaDp full size viewer does exactly that.",
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
        question: "Is this InstaDp Instagram profile picture downloader free?",
        answer: "Yes. This IG DP viewer HD and profile picture downloader is completely free with no login required.",
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
