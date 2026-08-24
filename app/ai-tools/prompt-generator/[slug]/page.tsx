import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { promptVariants } from "../prompt-variants"

const AiPromptGenerator = dynamic(
  () => import("@/components/ai/ai-prompt-generator").then((mod) => mod.AiPromptGenerator),
  { loading: () => <ToolLoader /> }
)

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(promptVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = promptVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    keywords: variant.keywords,
    alternates: {
      canonical: `/ai-tools/prompt-generator/${slug}`,
    },
  }
}

export default async function PromptGeneratorVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = promptVariants[slug]

  if (!variant) {
    notFound()
  }

  const siblingVariantLinks = Object.values(promptVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/ai-tools/prompt-generator/${item.slug}` }))

  const relatedTools = [
    { name: "AI Prompt Generator", href: "/ai-tools/prompt-generator" },
    ...siblingVariantLinks,
    { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
    { name: "All AI Tools", href: "/ai-tools" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/ai-tools/prompt-generator/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
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
      { label: "AI Prompt Generator", href: "/ai-tools/prompt-generator" },
      { label: variant.headerTitle, href: `/ai-tools/prompt-generator/${slug}` },
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
          question: "Is this prompt generator free?",
          answer: "Yes — free and unlimited, with no signup or account.",
        },
        {
          question: "Does it run the generation itself?",
          answer:
            "No. It writes the prompt; you paste it into the model's own app. Your idea is sent only to our prompt-writing API, and nothing is stored.",
        },
      ],

      relatedTools,
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiPromptGenerator defaultTarget={variant.defaultTarget} />)} />
}
