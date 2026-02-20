import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { downloaderVariants } from "../instagram-variants"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(downloaderVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = downloaderVariants[slug]
  if (!variant) return {}

  return {
    title: `${variant.headerTitle} | Instagram Downloader`,
    description: `${variant.headerDescription} Use this variant page for focused Instagram download workflows.`,
    alternates: {
      canonical: `/social-media-tools/instagram-downloader/${slug}`,
    },
  }
}

export default async function InstagramDownloaderVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = downloaderVariants[slug]

  if (!variant) {
    notFound()
  }

  const toolConfig = createToolConfig({
    toolName: variant.headerTitle,
    description: `${variant.headerDescription} Built for focused Instagram media workflow tasks.`,
    metaTitle: `${variant.headerTitle} | Instagram Downloader`,
    metaDescription: `${variant.headerDescription} Process links in a concise browser workflow.`,
    path: `/social-media-tools/instagram-downloader/${slug}`,

    schemaOptions: {
      applicationCategory: "MultimediaApplication",
      description: "Instagram media variant downloader page for focused use cases.",
      featureList: [
        "Variant-specific Instagram workflow",
        "Link processing",
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
      { label: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { label: variant.headerTitle, href: `/social-media-tools/instagram-downloader/${slug}` },
    ],

    content: {
      overview:
        `This variant page focuses on ${variant.headerTitle.toLowerCase()} workflows. Paste an Instagram link, process available output, and continue your creator operations with a targeted tool setup.`,

      howToSteps: [
        "Copy the relevant Instagram URL for this workflow.",
        "Paste it into the input field above.",
        "Run processing and review available output.",
        "Download the file you need.",
      ],

      features: [
        `Focused ${variant.headerTitle.toLowerCase()} workflow`,
        "Fast URL processing",
        "Browser-based execution",
        "No additional software",
        "Cross-device support",
      ],

      useCases: [
        "Variant-specific creator tasks",
        "Social media operations",
        "Research and reference workflows",
        "Cross-platform content handling",
      ],

      aboutTool:
        "This route exists to match specific user intents while keeping the same reliable Instagram download workflow and internal linking structure.",

      proTip:
        "Use direct post/reel/story URLs to improve processing reliability.",

      faqs: [
        {
          question: "What is different about this variant page?",
          answer:
            "It is tuned for a narrower Instagram workflow while using the same core downloader engine.",
        },
        {
          question: "Can I use it on mobile browsers?",
          answer: "Yes. It supports modern mobile and desktop browsers.",
        },
        {
          question: "Do I need signup?",
          answer: "No. The tool itself does not require signup.",
        },
        {
          question: "Are all links supported?",
          answer:
            "Processing depends on link validity and source accessibility.",
        },
        {
          question: "Is this free?",
          answer: "Yes. It is available as a free utility.",
        },
      ],

      relatedTools: [
        { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
        { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
        { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="instagram" placeholder="https://www.instagram.com/p/..." />
      )}
    />
  )
}
