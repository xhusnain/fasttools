import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { checkerVariants } from "../checker-variants"

const YoutubeChannelChecker = dynamic(
  () => import("@/components/social-media/youtube-channel-checker").then((mod) => mod.YoutubeChannelChecker),
  { loading: () => <ToolLoader /> }
)

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(checkerVariants).map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const variant = checkerVariants[slug]
  if (!variant) return {}

  return {
    title: variant.metaTitle,
    description: variant.metaDescription,
    alternates: {
      canonical: `/social-media-tools/channel-checker/${slug}`,
    },
  }
}

export default async function ChannelCheckerVariantPage(props: Props) {
  const { slug } = await props.params
  const variant = checkerVariants[slug]

  if (!variant) {
    notFound()
  }

  const relatedVariantLinks = Object.values(checkerVariants)
    .filter((item) => item.slug !== slug)
    .slice(0, 4)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/channel-checker/${item.slug}` }))

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/channel-checker/${slug}`,

    schemaOptions: {
      applicationCategory: "WebApplication",
      description: `${variant.headerTitle} — focused YouTube handle and channel name availability checker.`,
      featureList: [
        "Handle and channel name availability check",
        "Handle format validation (length, characters)",
        "Instant browser-based lookup",
        "No login required",
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
      { label: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
      { label: variant.headerTitle, href: `/social-media-tools/channel-checker/${slug}` },
    ],

    content: {
      definition:
        `${variant.headerTitle} is a free tool for checking whether a YouTube @handle, username, or matching channel URL is valid and already taken.`,
      quickAnswer:
        `Enter the YouTube name or @handle you want to check. The tool validates the format, checks the public handle URL, and helps you decide whether to claim it or try a better variation.`,
      keyTakeaways: [
        "YouTube display names can repeat, but @handles must be unique",
        "Handles become public URLs like youtube.com/@yourname",
        "A valid handle is 3-30 characters and can use letters, numbers, underscores, hyphens, and periods",
        "Short, brandable handles are harder to find, so test variations before launch",
        "Check the same name on Instagram, TikTok, and X before finalizing a brand",
      ],
      overview: variant.overviewText,

      howToSteps: variant.howToSteps || [
        "Enter the YouTube handle or channel name you want to check.",
        "Click check to run an availability lookup.",
        "Review the result to see if the name is taken or available.",
        "Try alternatives if needed and check again.",
      ],

      features: variant.featureOverrides || [
        "Handle and channel name validation",
        "Format check against YouTube's handle rules",
        "Fast check-and-iterate workflow",
        "No login or account required",
        "Desktop and mobile support",
      ],

      useCases: [
        "Creators choosing a YouTube handle before channel launch",
        "Brands verifying handle availability for campaigns",
        "Agencies checking multiple names for client channels",
        "Cross-platform handle consistency planning",
      ],

      aboutTool: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What This Checker Helps You Decide</h3>
            <p>
              Use this page when you already have a YouTube name idea and need to know whether it can work as a public handle. It checks the part that matters most for availability: the unique @handle used in your channel URL, comments, mentions, and Shorts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">YouTube Handle vs Channel Name</h3>
            <p>
              A YouTube handle is your unique @username (e.g., @YourBrand) that appears in your channel URL and comments. A channel name (display name) is what viewers see on your channel page. Handles must be unique; display names do not. This tool checks handle availability since that is the constraint that matters.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">What To Try If Your Name Is Taken</h3>
            <p>
              Keep the name readable before adding random numbers. Try a niche word, location, creator name, brand suffix, or a short separator such as a period or underscore. For example, if @travel is taken, try @travelwithmaya, @travel.us, or @maya_travels before falling back to long numeric endings.
            </p>
          </div>
        </div>
      ),

      proTip:
        "Check the same handle on Instagram, TikTok, and X to ensure cross-platform brand consistency before claiming it on YouTube.",

      faqs: [
        ...(variant.faqOverrides || []),
        {
          question: "Is this tool free to use?",
          answer: "Yes. All handle checks are free with no registration or login required.",
        },
        {
          question: "Can I check multiple handles at once?",
          answer:
            "You can check handles one at a time, but the tool is designed for fast iteration — check one, adjust, and check another in seconds.",
        },
        {
          question: "Does this work on mobile devices?",
          answer: "Yes. The checker works in all modern mobile and desktop browsers.",
        },
        {
          question: "Do I need a YouTube account to check handle availability?",
          answer: "No. You can check handle availability without any YouTube or Google account.",
        },
      ],

      relatedTools: [
        { name: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
        ...relatedVariantLinks,
        { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelChecker />)} />
}
