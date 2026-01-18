import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MetaTagGenerator = dynamic(
  () => import("@/components/dev-tools/meta-tag-generator").then(mod => mod.MetaTagGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Meta Tag Generator",
  description: "Generate SEO-friendly meta tags for your website. Create title, description, keywords, and social media tags (Open Graph, Twitter Cards) instantly.",
  metaTitle: "Meta Tag Generator | Free SEO & Social Media Tags Tool",
  metaDescription: "Create perfect meta tags for SEO and social media. Generate Title, Description, Open Graph, and Twitter Card tags to boost your search rankings and click-through rates.",
  path: "/seo-tools/meta-tags",

  header: {
    title: "Meta Tag Generator",
    description: "Boost your SEO and social media presence with perfectly formatted meta tags. Generate essential HTML tags for Google, Facebook, Twitter, and LinkedIn in seconds.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Meta Tag Generator", href: "/seo-tools/meta-tags" },
  ],

  content: {
    overview: "Meta tags are the backbone of technical SEO, telling search engines and social platforms how to display your content. Our Meta Tag Generator simplifies this process by creating all the necessary HTML code for you. From standard SEO tags like title and description to social media protocols like Open Graph (Facebook/LinkedIn) and Twitter Cards, this tool ensures your pages look professional and clickable everywhere they're shared.",

    howToSteps: [
      "Fill in your website details (Title, Description, Keywords).",
      "Add social media info for Open Graph and Twitter Card support.",
      "Preview how your page will look in search results and on social feeds.",
      "Click 'Generate Meta Tags' to create the HTML code.",
      "Copy the code and paste it into the <head> section of your website."
    ],

    features: [
      "All-in-One Generation: Creates SEO, Open Graph, and Twitter Card tags simultaneously",
      "Live Preview: See exactly how your link will appear on Google, Facebook, and Twitter",
      "Character Counters: Real-time validation for optimal title and description lengths",
      "Robots Control: Easily configure index/noindex and follow/nofollow directives",
      "Viewport Settings: Ensure mobile responsiveness with correct viewport tags",
      "Author & Copyright: Add ownership metadata to your pages",
      "One-Click Copy: Instantly grab the generated HTML code",
      "Validation: Alerts you if your content is too long or too short",
      "Privacy-Focused: All generation happens locally in your browser",
      "Universal Compatibility: Works with HTML5, WordPress, React, Next.js, and more"
    ],

    useCases: [
      "New Website Launch: Create base metadata for all your core pages",
      "Blog Optimization: Generate unique social cards for every article",
      "SEO Audits: Fix missing or poorly formatted tags on existing pages",
      "Social Media Marketing: Control exactly how your links look when shared",
      "Developer Workflow: Quickly generate boilerplate <head> code",
      "Agency Work: Standardize meta tags across client websites",
      "E-commerce: Create rich product previews for social sharing",
      "Personal Branding: Ensure your portfolio looks professional on LinkedIn",
      "Content Migration: Regenerate tags when moving to a new CMS",
      "A/B Testing: Experiment with different titles and descriptions"
    ],

    aboutTool: "This tool bridges the gap between content and code. While you focus on writing a compelling title and description, our generator handles the technical syntax. It follows the latest best practices from Google, Facebook, and Twitter, ensuring your tags are valid and effective. We've also included character limits based on current search engine display standards (approx. 60 chars for titles, 160 for descriptions) to prevent your text from getting cut off.",

    proTip: "Your meta description is your 'ad copy' in search results. While it doesn't directly affect rankings, a compelling description improves your Click-Through Rate (CTR). Use active voice and include a call to action (e.g., 'Learn more', 'Get started', 'Read now') to encourage users to click.",

    faqs: [
      {
        question: "What are meta tags?",
        answer: "Meta tags are snippets of text that describe a page's content. They don't appear on the page itself but only in the page's source code. Search engines use them to understand what the page is about."
      },
      {
        question: "Why do I need Open Graph tags?",
        answer: "Open Graph tags (og:title, og:image, etc.) control how your content looks when shared on Facebook, LinkedIn, and other platforms. Without them, social networks might pick a random image or text, making your shared link look unprofessional."
      },
      {
        question: "What is the ideal length for a meta description?",
        answer: "Google typically displays up to 155-160 characters. If your description is longer, it may be truncated with an ellipsis (...). Our tool includes a counter to help you stay within this safe range."
      },
      {
        question: "Do meta keywords still matter?",
        answer: "Google hasn't used the 'keywords' meta tag for ranking since 2009. However, some smaller search engines and internal site search systems might still use them. We include the option for completeness, but don't prioritize it over high-quality content."
      },
      {
        question: "Where do I paste this code?",
        answer: "Paste the generated code between the opening <head> and closing </head> tags of your HTML document. If you use a CMS like WordPress, you might use an SEO plugin where you can paste just the text values instead of the full HTML."
      },
      {
        question: "What is a Twitter Card?",
        answer: "Similar to Open Graph, Twitter Cards allow you to attach rich photos, videos, and media experiences to Tweets that drive traffic to your website. Our tool generates the 'summary_large_image' card format by default for maximum visual impact."
      },
      {
        question: "Can I use this for React or Next.js?",
        answer: "Yes! While the output is standard HTML, you can easily adapt the values for React Helmet or Next.js's Metadata API. The content principles remain exactly the same."
      },
      {
        question: "What does 'robots' meta tag do?",
        answer: "It gives instructions to search engine crawlers. 'index, follow' tells them to list the page and follow its links. 'noindex' tells them to hide the page from search results (useful for private pages or thank-you pages)."
      },
      {
        question: "Why isn't my image showing up on social media?",
        answer: "Ensure your 'og:image' URL is an absolute path (e.g., https://example.com/image.jpg), not a relative one (/image.jpg). Social networks can't access relative paths. Our tool reminds you to use full URLs."
      },
      {
        question: "Is this tool free?",
        answer: "Yes, completely free. You can generate tags for as many pages as you like without any cost or registration."
      }
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },

      { name: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function MetaTagGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<MetaTagGenerator />)} />
}
