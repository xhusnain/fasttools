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
    .slice(0, 4)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/instagram-dp/${item.slug}` }))

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
        "Download option",
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
        "Download if a local copy is needed.",
      ],

      features: variant.featureOverrides || [
        `${variant.headerTitle} intent targeting`,
        "Username-based lookup",
        "Fast preview and download workflow",
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
            <h3 className="text-lg font-semibold text-foreground mb-2">Variant Intent</h3>
            <p>
              This page targets users searching for {variant.headerTitle.toLowerCase()} and related query variants. It keeps the same core viewer functionality while narrowing copy and metadata to a specific intent cluster.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Keyword Focus</h3>
            <p>
              Primary terms for this route include: {(variant.keywords || ["instagram dp viewer", "insta dp viewer", "instagram profile picture viewer"]).slice(0, 3).join(", ")}. This helps avoid duplicate intent across DP pages and improves long-tail topical coverage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Scope and Limits</h3>
            <p>
              This page is limited to profile-picture workflows and does not provide access to private posts, stories, or restricted account content.
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
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
