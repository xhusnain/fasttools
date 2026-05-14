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
    "Create a free link-in-bio page with multiple links for Instagram, TikTok, YouTube, and other social profiles. Free Linktree alternative — no account needed.",
  metaTitle: "Free Link in Bio Generator — Linktree Alternative for Instagram & TikTok",
  metaDescription:
    "Create a free link-in-bio page for Instagram, TikTok, and YouTube. Add multiple links, customize colors and layout. Free Linktree alternative — no signup required.",
  path: "/social-media-tools/link-in-bio",

  header: {
    title: "Free Link in Bio Page Generator",
    description:
      "Create a customizable link-in-bio landing page with multiple links for Instagram, TikTok, YouTube, and any social platform. Free Linktree alternative — no signup or subscription needed.",
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
      "Link-in-bio page generator and Linktree alternative for creators, influencers, and businesses. Build a multi-link landing page from one bio URL with custom colors, button styles, and mobile-first layout.",
    alternateName: [
      "Linktree Alternative",
      "Beacons Alternative",
      "Bio Link Generator",
      "Multi-Link Bio Maker",
      "Instagram Bio Link Tool",
      "TikTok Bio Page Generator",
      "Creator Landing Page Builder",
      "Bio URL Generator",
      "One Link Maker",
      "Carrd Alternative",
      "Solo.to Alternative",
      "Lnk.Bio Alternative",
      "Bio Page Creator",
      "Social Bio Link Page",
      "Influencer Landing Page Tool",
    ],
    ratingValue: "4.9",
    ratingCount: "6420",
    featureList: [
      "Create multi-link bio landing pages",
      "Customizable colors, fonts, and button styles",
      "Mobile-first responsive design",
      "Works with Instagram, TikTok, YouTube, X, and any platform",
      "Free Linktree and Beacons alternative",
      "No account or subscription required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Link in Bio Generator is a free tool that creates a customizable landing page with multiple links — designed to be used as the single bio link on Instagram, TikTok, YouTube, and other social media profiles where you can only share one URL.",
    quickAnswer:
      "Add your links, profile name, and short bio. Customize colors, button styles, and layout. Generate a shareable link-in-bio page instantly. Use the generated URL in your Instagram, TikTok, or YouTube bio to share multiple destinations from one link. No account or signup needed — a free alternative to Linktree.",
    keyTakeaways: [
      "Create a multi-link landing page for your social media bio in minutes",
      "Customizable colors, button styles, fonts, and layout to match your brand",
      "No account, subscription, or payment required — 100% free Linktree alternative",
      "Works with Instagram, TikTok, YouTube, X/Twitter, and any social platform",
      "Mobile-first responsive design optimized for social media traffic",
      "Add unlimited links: websites, products, social profiles, campaigns, music",
    ],
    overview:
      "Create your link-in-bio page for free with this online generator. Social media platforms like Instagram and TikTok only allow one link in your profile bio — this tool solves that by creating a landing page with all your important links. Add links to your website, online store, other social profiles, latest content, music, merch, and more. Customize the look with your brand colors, choose button styles, and arrange links in priority order. The generated bio page is mobile-first and loads fast for social media visitors. No signup, no monthly subscription, no ads — a completely free alternative to Linktree, Beacons, and Lnk.Bio.",

    howToSteps: [
      "Enter your profile name, photo, and a short bio description.",
      "Add your links with custom titles — website, social profiles, store, latest content, etc.",
      "Customize the design: choose colors, button styles, and layout to match your brand.",
      "Generate your link-in-bio page and copy the URL to paste in your Instagram, TikTok, or YouTube bio.",
    ],

    features: [
      "Create unlimited-link bio pages with custom titles for each link",
      "Full visual customization: colors, button styles, fonts, and backgrounds",
      "Mobile-first responsive design optimized for social media traffic",
      "Drag-and-drop link reordering for priority management",
      "No account signup, subscription, or payment required",
      "Works with Instagram, TikTok, YouTube, X, LinkedIn, and any platform",
    ],

    useCases: [
      "Creators and influencers sharing content, merch, and social links from Instagram bio",
      "Small businesses linking to their website, menu, booking page, and reviews from social profiles",
      "Musicians sharing streaming links (Spotify, Apple Music, YouTube) from one bio URL",
      "Event organizers sharing tickets, schedule, map, and sponsor links from social bio",
      "Freelancers and consultants linking to portfolio, booking, and testimonials from LinkedIn or X",
    ],

    aboutTool:
      "Instagram, TikTok, and most social platforms only allow one clickable link in your profile bio. Services like Linktree solve this by creating a landing page with multiple links — but they charge for customization and analytics. This free generator creates the same type of bio page without requiring an account, subscription, or payment. Customize the design to match your brand, add unlimited links with custom titles, and reorder them based on priority. The output is a mobile-optimized landing page that loads quickly for visitors tapping your bio link from social media apps.",

    proTip:
      "Put your highest-priority link at the top (latest content, active campaign, or product launch). Update your bio page monthly to keep links fresh and relevant. Use descriptive link titles like 'Shop My Favorites' instead of generic 'Click Here' to improve click-through rates.",

    faqs: [
      {
        question: "What is a link-in-bio page?",
        answer:
          "A link-in-bio page is a simple landing page with multiple clickable links, designed to be the single URL in your Instagram, TikTok, or YouTube bio. It lets you share multiple destinations (website, store, social profiles, content) from one link.",
      },
      {
        question: "Is this a free alternative to Linktree?",
        answer:
          "Yes. This generator creates the same type of multi-link bio page as Linktree, but it is completely free with no account required, no subscription fees, and full customization at no cost.",
      },
      {
        question: "Can I customize the colors and design?",
        answer:
          "Yes. Customize background colors, button styles, fonts, link icons, and layout to match your personal brand or business branding. All customization is free.",
      },
      {
        question: "Which social media platforms is this for?",
        answer:
          "It works with any platform that has a bio link field — Instagram, TikTok, YouTube, X/Twitter, LinkedIn, Threads, Facebook, Pinterest, and more. Copy the generated URL and paste it in your bio.",
      },
      {
        question: "How many links can I add?",
        answer:
          "There is no limit on the number of links. Add as many as you need — social profiles, website, store, music, videos, booking page, and more.",
      },
      {
        question: "Can I update my links after creating the page?",
        answer:
          "Yes. You can edit, reorder, add, or remove links anytime and regenerate your bio page with the updates.",
      },
      {
        question: "Is this link-in-bio generator free?",
        answer:
          "Yes. 100% free with no account required, no subscription, no ads, and no limits on links or customization.",
      },
      {
        question: "Is this a free alternative to Linktree or Beacons?",
        answer:
          "Yes — and one without the paid-feature paywall. Linktree's free tier shows their branding, limits analytics, and gates customization behind $5–$24/month plans. Beacons follows a similar freemium model. This generator produces a fully customizable link-in-bio page with no branding, no monthly cost, no signup, and no analytics-tracking on you (the user). The tradeoff: no cloud-saved profile — you generate, deploy, and host the page yourself."
      },
      {
        question: "Where do I host the link-in-bio page after generating?",
        answer:
          "Several free options: GitHub Pages (free, custom domain), Vercel (free hobby tier), Netlify (free starter), or Cloudflare Pages (free, unlimited bandwidth). Drop the generated HTML into a public repo and connect it to one of these hosts. For a custom domain like youname.com/links, point your existing site at the page."
      }
    ],

    relatedTools: [
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
      { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LinkInBioPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LinkInBioGenerator />)} />
}
