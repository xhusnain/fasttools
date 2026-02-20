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
    title: `${variant.headerTitle} | Instagram DP Viewer`,
    description: `${variant.headerDescription} Focused profile-picture workflow page.`,
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

  const toolConfig = createToolConfig({
    toolName: variant.headerTitle,
    description: `${variant.headerDescription} Use this route for focused profile-picture lookup workflows.`,
    metaTitle: `${variant.headerTitle} | Instagram DP Viewer`,
    metaDescription: `${variant.headerDescription} Browser-based lookup and download flow.`,
    path: `/social-media-tools/instagram-dp/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: "Instagram profile-picture variant page for focused lookup workflows.",
      featureList: [
        "Variant-specific profile-picture lookup",
        "Username-based search",
        "Download workflow",
        "No-install utility",
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
      overview:
        `This variant page focuses on ${variant.headerTitle.toLowerCase()} use cases. Enter a username, review available profile-picture output, and continue your social workflow quickly.`,

      howToSteps: [
        "Enter the target Instagram username.",
        "Run lookup and review the profile-picture output.",
        "Inspect the result in preview.",
        "Download if needed.",
      ],

      features: [
        `Focused ${variant.headerTitle.toLowerCase()} workflow`,
        "Username lookup",
        "Fast preview output",
        "Download option",
        "Cross-device browser support",
      ],

      useCases: [
        "Profile reference checks",
        "Brand asset review",
        "Creator research workflows",
        "Team handoff operations",
      ],

      aboutTool:
        "Variant routes support narrower search intents while preserving the same reliable lookup workflow and internal link structure.",

      proTip:
        "Use exact usernames to reduce lookup mismatches.",

      faqs: [
        {
          question: "Why are there variant pages for DP viewer?",
          answer:
            "They align with specific search intents while using the same core lookup functionality.",
        },
        {
          question: "Can I use this on phone browsers?",
          answer: "Yes. Mobile and desktop browsers are supported.",
        },
        {
          question: "Do I need signup?",
          answer: "No. This is a browser-based utility with no signup required.",
        },
        {
          question: "Will every username return a result?",
          answer:
            "Output depends on source availability and account visibility.",
        },
        {
          question: "Is this free?",
          answer: "Yes. It is available as a free utility.",
        },
      ],

      relatedTools: [
        { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
        { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
        { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
