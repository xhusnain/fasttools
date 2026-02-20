import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { pinterestVariants } from "../pinterest-variants"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(pinterestVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = pinterestVariants[slug]
  if (!variant) return {}

  return {
    title: `${variant.headerTitle} | Pinterest Downloader`,
    description: `${variant.headerDescription} Focused Pinterest workflow page.`,
    alternates: {
      canonical: `/social-media-tools/pinterest-downloader/${slug}`,
    },
  }
}

export default async function PinterestVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = pinterestVariants[slug]

  if (!variant) {
    notFound()
  }

  const toolConfig = createToolConfig({
    toolName: variant.headerTitle,
    description: `${variant.headerDescription} Built for focused Pinterest media workflows.`,
    metaTitle: `${variant.headerTitle} | Pinterest Downloader`,
    metaDescription: `${variant.headerDescription} Process pin links in-browser.`,
    path: `/social-media-tools/pinterest-downloader/${variant.slug}`,

    schemaOptions: {
      applicationCategory: "MultimediaApplication",
      description: "Pinterest media variant downloader page for focused use cases.",
      featureList: [
        "Variant-specific Pinterest workflow",
        "Pin URL processing",
        "Browser-based utility",
        "No-install flow",
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
      { label: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader" },
      { label: variant.headerTitle, href: `/social-media-tools/pinterest-downloader/${variant.slug}` },
    ],

    content: {
      overview:
        `This variant page targets ${variant.headerTitle.toLowerCase()} workflows. Paste a Pinterest link, process available output, and continue your content operations with a focused route.`,

      howToSteps: [
        "Copy the relevant Pinterest pin link.",
        "Paste it into the input field.",
        "Run processing and inspect output.",
        "Download the file you need.",
      ],

      features: [
        `Focused ${variant.headerTitle.toLowerCase()} workflow`,
        "Pin URL processing",
        "Fast browser execution",
        "Cross-device support",
        "No software install",
      ],

      useCases: [
        "Design and moodboard workflows",
        "Content research tasks",
        "Campaign asset reference",
        "Creative operations support",
      ],

      aboutTool:
        "Variant routes help target narrower user intents while preserving consistent downloader behavior and internal linking.",

      proTip:
        "Use full pin URLs for more reliable processing and output detection.",

      faqs: [
        {
          question: "Why are there variant Pinterest pages?",
          answer:
            "They map to specific media use cases while using the same underlying processing workflow.",
        },
        {
          question: "Can this be used on mobile browsers?",
          answer: "Yes. It supports modern mobile and desktop browsers.",
        },
        {
          question: "Do I need signup?",
          answer: "No. Signup is not required for basic usage.",
        },
        {
          question: "Are all links supported?",
          answer:
            "Processing depends on source visibility and link validity.",
        },
        {
          question: "Is this free?",
          answer: "Yes. It is available as a free utility.",
        },
      ],

      relatedTools: [
        { name: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader" },
        { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
        { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="pinterest" placeholder="https://www.pinterest.com/pin/..." />
      )}
    />
  )
}
