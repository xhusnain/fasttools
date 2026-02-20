import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const LinkInBioGenerator = dynamic(
  () => import("@/components/social-media/link-in-bio-generator").then((mod) => mod.LinkInBioGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Link in Bio Generator",
  description:
    "Create a single bio page with multiple links for social profiles, campaigns, and creator funnels.",
  metaTitle: "Link in Bio Generator (Free Bio Page Tool)",
  metaDescription:
    "Build a customizable link-in-bio page for Instagram, TikTok, YouTube, and other social profiles.",
  path: "/social-media-tools/link-in-bio",
  keywords: [
    "link in bio",
    "bio page generator",
    "social bio links",
    "creator link page",
    "instagram bio link tool",
  ],

  header: {
    title: "Link in Bio Generator",
    description:
      "Build a clean multi-link bio page for social traffic and campaign routing.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
  ],

  schemaOptions: {
    applicationCategory: "DesignApplication",
    description:
      "Link-in-bio page generator for creator and campaign traffic routing workflows.",
    featureList: [
      "Multi-link bio page",
      "Customization options",
      "Mobile-friendly output",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this generator to create a single destination page that routes social traffic to your key links, products, profiles, and campaigns.",

    howToSteps: [
      "Add profile name and short description.",
      "Insert links you want to feature.",
      "Customize styling and ordering.",
      "Publish or export for your bio URL workflow.",
    ],

    features: [
      "Multi-link bio page creation",
      "Visual customization options",
      "Mobile-first layout support",
      "Campaign routing workflow",
      "Browser-based tool",
    ],

    useCases: [
      "Creator profile hubs",
      "Influencer campaign routing",
      "Small business social funnels",
      "Event or launch link collections",
    ],

    aboutTool:
      "This tool is structured for utility intent: quickly build, customize, and deploy a bio page that consolidates high-priority social destinations.",

    proTip:
      "Keep top links action-focused and reorder them by campaign priority each month.",

    faqs: [
      {
        question: "Who should use a link-in-bio page?",
        answer:
          "Creators, businesses, and marketers who need to route social traffic to multiple destinations.",
      },
      {
        question: "Can I update links over time?",
        answer: "Yes. You can revise and reorder links as campaigns change.",
      },
      {
        question: "Is it mobile-friendly?",
        answer: "Yes. The output is designed for mobile social traffic.",
      },
      {
        question: "Can I use it across multiple platforms?",
        answer: "Yes. It works for Instagram, TikTok, YouTube, and more.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LinkInBioPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LinkInBioGenerator />)} />
}
