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

  const relatedVariantLinks = Object.values(dpVariants)
    .filter((item) => item.slug !== slug)
    .slice(0, 2)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/instagram-dp/${item.slug}` }))

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
        "Long-tail keyword intent matching",
        "Creator and brand profile checks",
        "Editorial and design reference workflows",
        "Team operations with variant-specific routing",
      ],

      aboutTool: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What This Page Helps With</h3>
            <p>
              {variant.overviewText} Enter a username or profile URL, then use the viewer to load the profile picture, inspect it at a larger size, and save the available image when needed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What You Can View</h3>
            <p>
              This tool focuses on Instagram profile pictures, also called DPs, PFPs, profile photos, or avatars. It can show the public profile image and basic profile context such as username, account status, and visible profile stats.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What It Cannot Access</h3>
            <p>
              This page does not unlock private posts, stories, reels, messages, follower lists, or restricted content. If an account is private, only the profile picture surface may be visible.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Tips for Best Results</h3>
            <p>
              Use the exact Instagram username, including dots or underscores, or paste the full profile URL. If a profile picture does not load, check the spelling and try again after a minute because Instagram image availability can change.
            </p>
          </div>
        </div>
      ),

      proTip:
        "Use exact usernames and canonical Instagram profile links for best lookup accuracy.",

      faqs: [
        ...(variant.faqOverrides || []),
        {
          question: "What makes this variant different from the main DP page?",
          answer:
            "It targets a narrower query cluster while using the same underlying viewer workflow.",
        },
        {
          question: "Can I use this variant on mobile browsers?",
          answer: "Yes. Mobile and desktop browsers are supported.",
        },
        {
          question: "Do I need to login to use this page?",
          answer: "No. It is designed for no-login usage.",
        },
        {
          question: "Will every username return output?",
          answer:
            "Output depends on source availability and account visibility.",
        },
        {
          question: "Is this free?",
          answer: "Yes. This variant page is free to use.",
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
