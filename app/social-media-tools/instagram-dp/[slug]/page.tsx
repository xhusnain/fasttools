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
    .slice(0, 2)
    .map((item) => ({ name: item.headerTitle, href: `/social-media-tools/instagram-dp/${item.slug}` }))

  // Pass authority from this high-traffic DP page out to related (page-2) social
  // tools. All are genuinely relevant to the same creator / Instagram audience —
  // contextual, not link-stuffing.
  const relatedSocialTools = [
    { name: "Hashtag Counter — Instagram, TikTok & X", href: "/social-media-tools/hashtag-counter" },
    { name: "YouTube Channel Name & Handle Checker", href: "/social-media-tools/channel-checker" },
    { name: "Link-in-Bio Generator", href: "/social-media-tools/link-in-bio" },
    { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
    { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
  ]

  const toolConfig = createToolConfig({
    toolName: variant.toolName,
    description: variant.metaDescription,
    metaTitle: variant.metaTitle,
    metaDescription: variant.metaDescription,
    path: `/social-media-tools/instagram-dp/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: "Free browser tool that loads the full-size Instagram profile picture for any username, with zoom and save options. No login required.",
      featureList: [
        "Full-size profile picture preview",
        "Username-based profile-picture lookup",
        "Save to device option",
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
        "Save a copy for reference if needed.",
      ],

      features: variant.featureOverrides || [
        "Full-size profile picture preview",
        "Username-based lookup",
        "Fast preview and save workflow",
        "No-login browser utility",
        "Desktop and mobile support",
      ],

      useCases: [
        "Check who is behind an unfamiliar follow request or DM before responding",
        "Review a creator's or brand's avatar at full size for research or audits",
        "Save a reference copy of a profile photo for design or editorial work",
        "Check how your own profile picture looks before and after Instagram's circular crop",
      ],

      aboutTool: (
        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">How It Works</h3>
            <p>
              Enter a username and the tool requests the profile image directly from Instagram&apos;s servers, where the original is stored at up to 1080&times;1080 pixels — far larger than the small circle shown in the app. The full-size photo loads in your browser, where you can zoom in or save a copy. Nothing is installed and no Instagram login is involved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Scope and Limits</h3>
            <p>
              This page is limited to profile pictures and does not provide access to private posts, stories, or restricted account content. Profile photos themselves are publicly visible on Instagram regardless of an account&apos;s privacy settings, which is why they can be shown here.
            </p>
          </div>
        </div>
      ),

      proTip:
        "Use exact usernames and canonical Instagram profile links for best lookup accuracy.",

      faqs: [
        ...(variant.faqOverrides || []),
        {
          question: "Is this a different tool from the main Instagram DP viewer?",
          answer:
            "No — it is the same viewer. This page just focuses on one specific way people use it, with instructions written for that situation.",
        },
        {
          question: "Can I use this on mobile browsers?",
          answer: "Yes. It works in mobile and desktop browsers with no app install.",
        },
        {
          question: "Do I need to log in to use this page?",
          answer: "No. You never enter your Instagram credentials, and you don't need an Instagram account at all.",
        },
        {
          question: "Will every username return a picture?",
          answer:
            "Almost always, yes. A lookup can fail if the username is misspelled, the account was deleted or deactivated, or Instagram temporarily rate-limits requests — retrying after a short wait usually resolves it.",
        },
        {
          question: "Is this free?",
          answer: "Yes. It is free to use, with no signup and no daily limit.",
        },
      ],

      relatedTools: [
        { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
        ...relatedVariantLinks,
        ...relatedSocialTools,
        { name: "All Social Media Tools", href: "/social-media-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<InstagramDpViewer />)} />
}
