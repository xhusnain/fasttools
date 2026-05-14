import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const LoremIpsumGenerator = dynamic(
  () => import("@/components/dev-tools/lorem-ipsum-generator").then((mod) => mod.LoremIpsumGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Lorem Ipsum Generator",
  description:
    "Generate placeholder text in paragraph, sentence, or word format for wireframes, prototypes, and publishing templates.",
  metaTitle: "Lorem Ipsum Generator — Paragraphs, Sentences, Words & HTML Markup",
  metaDescription:
    "Free Lorem Ipsum placeholder text generator. Paragraphs, sentences, words, or list items. Configurable count. Plain text, HTML markup with `<p>` tags, or markdown. Classic Lorem opener option. For designers, devs, and mockups.",
  path: "/seo-tools/lorem-ipsum",

  header: {
    title: "Lorem Ipsum Generator",
    description:
      "Create clean placeholder text quickly for mockups, UI testing, and draft layouts.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate placeholder text for design and development.",
    alternateName: [
      "Dummy Text Generator",
      "Placeholder Text Generator",
      "Filler Text Tool",
      "Mock Content Generator",
      "Lipsum Generator",
      "Mockup Text Tool",
      "Wireframe Text Generator",
      "Design Filler Generator",
      "HTML Lorem Ipsum",
      "Markdown Lorem Generator",
      "Bacon Ipsum Alternative",
      "Hipster Ipsum Alternative",
      "Lipsum.com Alternative",
      "Random Text Generator",
      "Test Content Generator",
    ],
    featureList: [
      "Generate paragraphs (1-100), sentences (1-200), or words (1-2000)",
      "Output as plain text, HTML with `<p>` tags, or Markdown",
      "Optional classic opener: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'",
      "Variable sentence length for realistic-looking copy",
      "Bulleted / numbered list mode for menu mockups",
      "One-click copy to clipboard",
      "Download as .txt or .html",
      "Counter showing words / chars / paragraphs in output",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Lorem Ipsum Generator is a free tool that creates placeholder text in paragraphs, sentences, or words for use in design mockups, wireframes, and development templates.",
    quickAnswer:
      "Select the amount (paragraphs, sentences, or words), set the count, and generate placeholder text instantly. Copy the Lorem Ipsum text for use in layouts, presentations, or code templates. Starts with the classic 'Lorem ipsum dolor sit amet.'",
    keyTakeaways: [
      "Generates placeholder text in paragraphs, sentences, or word counts",
      "Lorem Ipsum has been used since the 1500s for typesetting previews",
      "Based on a scrambled passage from Cicero's 'De Finibus Bonorum et Malorum'",
      "Standard in web design, graphic design, and document templates",
      "Customizable output length — from a few words to dozens of paragraphs",
    ],
    overview:
      "Lorem Ipsum is standard placeholder copy used to test layout, spacing, and typography before final content is ready. This generator helps teams create the exact amount of text needed for UI components, templates, and publication drafts.",

    howToSteps: [
      "Choose output type: paragraphs, sentences, or words.",
      "Set quantity for the layout you are testing.",
      "Generate and copy the output.",
      "Paste into your design file, CMS draft, or code template.",
    ],

    features: [
      "Paragraph, sentence, and word generation modes",
      "Adjustable output volume",
      "Fast regeneration for iteration",
      "Copy-ready output for design tools and editors",
      "Useful for web, product, and print workflows",
    ],

    useCases: [
      "Wireframes and high-fidelity mockups",
      "Testing responsive text blocks and overflow handling",
      "Template creation for CMS and design systems",
      "Preparing demo content for internal presentations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Placeholder content helps teams evaluate visual hierarchy without being
          biased by final wording. It keeps attention on structure, spacing,
          rhythm, and readability.
        </p>
        <p>
          When real copy is ready, replace placeholders with production text and
          re-test line breaks, truncation, and component behavior.
        </p>
      </div>
    ),

    proTip:
      "Test with short and long placeholder variants to ensure your layout handles real-world content length changes.",

    faqs: [
      {
        question: "What is Lorem Ipsum used for?",
        answer:
          "It is used as neutral placeholder text in design and development so teams can review layout and typography before final copy is available.",
      },
      {
        question: "Should Lorem Ipsum remain on published pages?",
        answer:
          "No. Replace placeholder text before launch to avoid user confusion and indexing low-value content.",
      },
      {
        question: "Can I use this for product UI testing?",
        answer:
          "Yes. It is useful for testing cards, modals, forms, article templates, and any component with dynamic text lengths.",
      },
      {
        question: "Does this tool support quick regeneration?",
        answer:
          "Yes. You can regenerate as often as needed while iterating on your design or template.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free and requires no signup.",
      },
    ],

    additionalContent: [
      {
        heading: "Design QA Tip",
        content:
          "Use mixed-length placeholder sets during responsive checks. A layout that works with one paragraph may break with four.",
      },
      {
        heading: "Publishing Reminder",
        content:
          "Before going live, run a final search in your codebase or CMS for `lorem` to ensure no placeholder content remains.",
      },
    ],

    relatedTools: [
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LoremIpsumGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LoremIpsumGenerator />)} />
}
