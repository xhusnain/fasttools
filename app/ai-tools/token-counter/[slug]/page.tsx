import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { tokenVariants } from "../token-variants"

const TokenCounter = dynamic(
  () => import("@/components/ai/token-counter").then((mod) => mod.TokenCounter),
  { loading: () => <ToolLoader /> }
)

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(tokenVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = tokenVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    keywords: variant.keywords,
    alternates: {
      canonical: `/ai-tools/token-counter/${slug}`,
    },
  }
}

export default async function TokenCounterVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = tokenVariants[slug]

  if (!variant) {
    notFound()
  }

  const siblingVariantLinks = Object.values(tokenVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/ai-tools/token-counter/${item.slug}` }))

  const relatedTools = [
    { name: "LLM Token Counter", href: "/ai-tools/token-counter" },
    ...siblingVariantLinks,
    { name: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
    { name: "LLM VRAM Calculator", href: "/ai-tools/llm-vram-calculator" },
    { name: "All AI Tools", href: "/ai-tools" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/ai-tools/token-counter/${slug}`,

    schemaOptions: {
      applicationCategory: "DeveloperApplication",
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
      { label: "AI Tools", href: "/ai-tools" },
      { label: "LLM Token Counter", href: "/ai-tools/token-counter" },
      { label: variant.headerTitle, href: `/ai-tools/token-counter/${slug}` },
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
          question: "Is this token counter free?",
          answer: "Yes — free with no limits, no signup, and no account.",
        },
        {
          question: "Is my text uploaded anywhere?",
          answer:
            "No. Counting runs entirely in your browser; the text you paste never leaves your device.",
        },
      ],

      relatedTools,
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<TokenCounter defaultModel={variant.defaultModel} />)} />
}
