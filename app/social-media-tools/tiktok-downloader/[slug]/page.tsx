import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { tiktokVariants } from "../tiktok-variants"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(tiktokVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = tiktokVariants[slug]
  if (!variant) return {}

  return {
    title: `${variant.headerTitle} | TikTok Downloader`,
    description: `${variant.headerDescription} Focused TikTok workflow page.`,
    alternates: {
      canonical: `/social-media-tools/tiktok-downloader/${slug}`,
    },
  }
}

export default async function TiktokVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = tiktokVariants[slug]

  if (!variant) {
    notFound()
  }

  const toolConfig = createToolConfig({
    toolName: variant.headerTitle,
    description: `${variant.headerDescription} Built for focused TikTok media tasks.`,
    metaTitle: `${variant.headerTitle} | TikTok Downloader`,
    metaDescription: `${variant.headerDescription} Process links quickly in-browser.`,
    path: `/social-media-tools/tiktok-downloader/${variant.slug}`,

    schemaOptions: {
      applicationCategory: "MultimediaApplication",
      description: "TikTok variant downloader page for focused media workflows.",
      featureList: [
        "Variant-specific TikTok workflow",
        "URL processing",
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
      { label: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { label: variant.headerTitle, href: `/social-media-tools/tiktok-downloader/${variant.slug}` },
    ],

    content: {
      overview:
        `This variant page supports ${variant.headerTitle.toLowerCase()} workflows. Paste a TikTok link, process available output, and continue your creator workflow with minimal friction.`,

      howToSteps: [
        "Copy the relevant TikTok URL.",
        "Paste it into the input field.",
        "Run processing and review output.",
        "Download the available file.",
      ],

      features: [
        `Focused ${variant.headerTitle.toLowerCase()} workflow`,
        "Quick URL processing",
        "Cross-device browser support",
        "No software install",
        "Simple copy/paste flow",
      ],

      useCases: [
        "Variant-specific creator tasks",
        "Social content operations",
        "Reference and research workflows",
        "Campaign execution support",
      ],

      aboutTool:
        "Variant routes map to narrower intent clusters while preserving consistent downloader behavior and internal linking.",

      proTip:
        "Use direct post URLs instead of shortened redirects when possible.",

      faqs: [
        {
          question: "Why does this variant page exist?",
          answer:
            "It targets specific TikTok use cases while using the same core downloader engine.",
        },
        {
          question: "Can I use this on mobile browsers?",
          answer: "Yes. Mobile and desktop browsers are supported.",
        },
        {
          question: "Do I need signup?",
          answer: "No. Signup is not required for tool usage.",
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
        { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
        { name: "CapCut Downloader", href: "/social-media-tools/capcut-downloader" },
        { name: "Douyin Downloader", href: "/social-media-tools/douyin-downloader" },
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="tiktok" placeholder="https://www.tiktok.com/@username/video/..." />
      )}
    />
  )
}
