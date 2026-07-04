import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { dpVariants } from "../dp-variants"

const InstagramDpViewer = dynamic(
  () => import("@/components/social-media/instagram-dp-viewer").then((mod) => mod.InstagramDpViewer),
  { loading: () => <ToolLoader /> }
)

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(dpVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = dpVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/instagram-dp/${slug}`,
    },
  }
}

export default async function InstagramDpVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = dpVariants[slug]

  if (!variant) {
    notFound()
  }

  // Full sibling mesh: every variant links every other variant so none is
  // orphaned (zoom/anonymous previously received zero sibling links).
  const relatedVariantLinks = Object.values(dpVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/instagram-dp/${item.slug}` }))

  // Pass authority from this high-traffic DP page out to related (page-2) social
  // tools. All are genuinely relevant to the same creator / Instagram audience —
  // contextual, not link-stuffing.
  const relatedSocialTools = [
    { name: "Hashtag Counter — Instagram, TikTok & X", href: "/social-media-tools/hashtag-counter" },
    { name: "YouTube Channel Name & Handle Checker", href: "/social-media-tools/channel-checker" },
    { name: "Link-in-Bio Generator", href: "/social-media-tools/link-in-bio" },
    { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
    { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/instagram-dp/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: `${variant.headerTitle} variant page for focused Instagram profile-picture workflows.`,
      featureList: [
        `${variant.headerTitle} workflow`,
        "Username-based profile-picture lookup",
        "Save to device option",
        "Browser-based utility",
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: variant.headerTitle,
      description: variant.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
    },

    breadcrumbs: [
      { label: "Social Media Tools", href: "/social-media-tools" },
      { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
      { label: variant.headerTitle, href: `/social-media-tools/instagram-dp/${slug}` },
    ],

    content: {
      overview: variant.overviewText,

      howToSteps: variant.howToSteps || [
        "Enter the Instagram username in the viewer input.",
        "Run lookup to load profile-picture output.",
        "Inspect the full-size preview.",
        "Save a copy for reference if needed.",
      ],

      features: variant.featureOverrides || [
        `${variant.headerTitle} intent targeting`,
        "Username-based lookup",
        "Fast preview and save workflow",
        "No-login browser utility",
        "Desktop and mobile support",
      ],

      useCases: [
        "Check how a profile photo looks in full resolution before following",
        "Creator and brand profile checks",
        "Save a copy of your own DP when the original photo is lost",
        "Editorial and design reference workflows",
      ],

      aboutTool: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How It Works</h3>
            <p>
              Instagram shows profile pictures as tiny thumbnails, but the full-resolution photo (up to 1080×1080 pixels) is publicly available for every account. Enter a username and this tool fetches that full-size image so you can {variant.headerTitle.toLowerCase().includes("download") ? "save it in original quality" : "view it in full detail"} — no Instagram login, no app install.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Scope and Limits</h3>
            <p>
              This tool only shows profile pictures, which Instagram keeps publicly visible on every account. It does not — and cannot — access private posts, stories, reels, or any other restricted content.
            </p>
          </div>
        </div>
      ),

      proTip:
        "Type the exact username (the @handle, not the display name) or paste the full profile link for the most reliable lookup.",

      faqs: [
        ...(variant.faqOverrides || []),
        {
          question: "Does this work on mobile browsers?",
          answer: "Yes. It works in any browser on phones, tablets, and desktops — no app needed.",
        },
        {
          question: "Do I need to log in to use this page?",
          answer: "No. Just enter a username — no Instagram account or login is required.",
        },
        {
          question: "Will every username return a picture?",
          answer:
            "Any existing, active account returns its profile picture. Deleted, deactivated, or misspelled usernames return nothing — double-check the exact @handle.",
        },
        {
          question: "Is this free?",
          answer: "Yes. It is completely free, with no signup and no watermark.",
        },
      ],

      relatedTools: [
        { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
        ...relatedVariantLinks,
        ...relatedSocialTools,
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
