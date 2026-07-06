import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { thumbnailVariants } from "../thumbnail-variants"

const YoutubeThumbnailDownloader = dynamic(
  () => import("@/components/social-media/youtube-thumbnail-downloader").then((mod) => mod.YoutubeThumbnailDownloader),
  { loading: () => <ToolLoader /> }
)

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(thumbnailVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = thumbnailVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    keywords: variant.keywords,
    alternates: {
      canonical: `/social-media-tools/youtube-thumbnail/${slug}`,
    },
  }
}

export default async function YoutubeThumbnailVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = thumbnailVariants[slug]

  if (!variant) {
    notFound()
  }

  // Full-mesh cluster: every variant links to the hub AND all sibling variants,
  // so the 8 thumbnail pages form one tightly interlinked topic cluster.
  const siblingVariantLinks = Object.values(thumbnailVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/youtube-thumbnail/${item.slug}` }))

  const relatedTools = [
    { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
    ...siblingVariantLinks,
    { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
    { name: "All Social Media Tools", href: "/social-media-tools" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/youtube-thumbnail/${slug}`,

    schemaOptions: {
      applicationCategory: "MultimediaApplication",
      description: `${variant.headerTitle} — ${variant.definition}`,
      alternateName: variant.keywords,
      featureList: variant.featureOverrides,
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
      { label: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { label: variant.headerTitle, href: `/social-media-tools/youtube-thumbnail/${slug}` },
    ],

    content: {
      definition: variant.definition,
      quickAnswer: variant.quickAnswer,
      keyTakeaways: variant.keyTakeaways,
      overview: variant.overviewText,
      howToSteps: variant.howToSteps,
      features: variant.featureOverrides,
      useCases: variant.useCases,

      aboutTool: (
        <div className="space-y-6 text-muted-foreground">
          {variant.aboutSections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{section.heading}</h3>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      ),

      proTip: variant.proTip,

      faqs: [
        ...variant.faqOverrides,
        {
          question: "Is this YouTube thumbnail tool free?",
          answer:
            "Yes. It's 100% free with no limits, no registration, and no watermarks added to the thumbnail images.",
        },
        {
          question: "Do I need a YouTube account or any software?",
          answer:
            "No. Thumbnails are public images served by YouTube's CDN. The tool runs entirely in your browser — no login, extension, or install required.",
        },
        {
          question: "Can I use downloaded thumbnails on my own site?",
          answer:
            "Thumbnails are publicly accessible, and editorial uses like reviews, criticism, and news reporting may fall under fair use. For commercial reuse, get permission from the video's creator, who owns the image.",
        },
      ],

      relatedTools,
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeThumbnailDownloader />)} />
}
