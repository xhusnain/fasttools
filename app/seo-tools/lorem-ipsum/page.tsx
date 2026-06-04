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
    "Generate plain-text Lorem Ipsum paragraphs for wireframes, prototypes, mockups, and draft layouts.",
  metaTitle: "Lorem Ipsum Generator — Plain Text Paragraphs for Mockups",
  metaDescription:
    "Free Lorem Ipsum generator for placeholder paragraphs. Choose 1-10 paragraphs, generate plain text, and copy it for designs, wireframes, CMS drafts, and mockups.",
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
      "Random Text Generator",
      "Test Content Generator",
    ],
    featureList: [
      "Generate 1-10 Lorem Ipsum paragraphs",
      "Plain text output for easy pasting",
      "Classic Lorem Ipsum starter paragraph included",
      "Cycles through five standard placeholder paragraphs for longer output",
      "One-click copy to clipboard",
      "Fast regeneration for design iteration",
      "No signup required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Lorem Ipsum Generator creates placeholder paragraphs for design mockups, wireframes, development templates, and draft layouts.",
    quickAnswer:
      "Enter the number of paragraphs, generate Lorem Ipsum, and copy the plain-text output into your design file, CMS draft, or code template.",
    keyTakeaways: [
      "Generates 1-10 plain-text Lorem Ipsum paragraphs",
      "Lorem Ipsum has been used since the 1500s for typesetting previews",
      "Based on a scrambled passage from Cicero's 'De Finibus Bonorum et Malorum'",
      "Standard in web design, graphic design, and document templates",
      "Useful for testing layout rhythm, overflow, and responsive text blocks",
    ],
    overview:
      "Lorem Ipsum is standard placeholder copy used to test layout, spacing, and typography before final content is ready. This generator helps teams create the exact amount of text needed for UI components, templates, and publication drafts.",

    howToSteps: [
      "Enter how many paragraphs you need, from 1 to 10.",
      "Generate and copy the output.",
      "Paste into your design file, CMS draft, or code template.",
    ],

    features: [
      "Plain-text paragraph generation",
      "Adjustable paragraph count from 1 to 10",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Origin: 500 Years of Placeholder Text</h3>
          <p>
            Lorem Ipsum is not random gibberish — it&apos;s scrambled Latin from <em>De Finibus Bonorum et Malorum</em> (&quot;On the Ends of Good and Evil&quot;), a 45 BC essay by Roman philosopher and statesman <strong>Cicero</strong>. The opening line of section 1.10.32 reads &quot;<em>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...</em>&quot; — translating roughly to &quot;Nor is there anyone who loves pain itself, who seeks after it...&quot;. In the 1500s, an unknown printer scrambled this passage to create dummy type for typesetting samples, and the corrupted version (starting &quot;Lorem ipsum dolor sit amet...&quot;) became the printing industry&apos;s standard placeholder. Adobe popularized it digitally in the 1980s by including it in PageMaker and InDesign. It&apos;s now in literally every design tool: Figma, Sketch, Adobe XD, Microsoft Word, Google Docs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Designers Use Lorem Ipsum Instead of Real Words</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Removes meaning bias:</strong> Real English text makes viewers focus on the content (&quot;Is this offensive? Accurate? Funny?&quot;) instead of the visual hierarchy. Lorem Ipsum&apos;s nonsense lets you evaluate <em>spacing, rhythm, type pairing, line height</em> without distraction.</li>
            <li><strong>Realistic character distribution:</strong> Lorem Ipsum has a similar letter distribution to English, including ascenders, descenders, capitals, and punctuation — giving an accurate sense of how real copy will visually render.</li>
            <li><strong>Variable length:</strong> Mimics actual prose with short and long words mixed naturally, exposing line-break issues that &quot;same word repeated&quot; placeholders miss.</li>
            <li><strong>Industry expectation:</strong> Stakeholders / clients recognize Lorem Ipsum as &quot;not final copy,&quot; preventing premature copy critique during design review.</li>
            <li><strong>Internationally recognized:</strong> Works across language teams — Lorem Ipsum is universal in design tooling.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When NOT to Use Lorem Ipsum</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Production pages:</strong> Critical — Lorem Ipsum should never reach public servers. Google indexes it as low-quality content and it can harm SEO. Always replace before launch.</li>
            <li><strong>Stakeholder approval rounds:</strong> Real copy (or at least the copy direction) is needed for stakeholder approval since they may make decisions about layout based on word length / tone.</li>
            <li><strong>Accessibility testing:</strong> Screen reader testing needs real content to verify pronunciation, navigation flow, and skip-link logic.</li>
            <li><strong>SEO testing:</strong> Heading hierarchy and content-related layout choices need real keywords / phrasing to validate.</li>
            <li><strong>User testing:</strong> Real users will say &quot;but what does it say?&quot; — comprehension testing requires comprehensible content.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Alternative Placeholder Text Styles</h3>
          <p>Beyond classic Latin Lorem Ipsum, several alternative placeholder styles exist for specific situations:</p>
          <table className="w-full border-collapse text-sm mt-3">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Style</th>
                <th className="text-left py-2 px-2 text-foreground">Sample</th>
                <th className="text-left py-2 px-2 text-foreground">Use case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Classic Lorem Ipsum</strong></td>
                <td className="py-2 px-2">&quot;Lorem ipsum dolor sit amet...&quot;</td>
                <td className="py-2 px-2">Default for any design</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Bacon Ipsum</td>
                <td className="py-2 px-2">&quot;Bacon ipsum dolor amet pork chop...&quot;</td>
                <td className="py-2 px-2">Food / restaurant mockups</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Cupcake Ipsum</td>
                <td className="py-2 px-2">&quot;Cupcake ipsum dolor sit amet lemon...&quot;</td>
                <td className="py-2 px-2">Sweet shops / dessert sites</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Hipster Ipsum</td>
                <td className="py-2 px-2">&quot;Artisan ipsum dolor sit amet kale chips...&quot;</td>
                <td className="py-2 px-2">Lifestyle / boutique brands</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Pirate Ipsum</td>
                <td className="py-2 px-2">&quot;Yarrr ye scallywag dolor sit amet...&quot;</td>
                <td className="py-2 px-2">Themed sites, games</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Corporate Ipsum</td>
                <td className="py-2 px-2">&quot;Synergize verticals dolor sit amet...&quot;</td>
                <td className="py-2 px-2">B2B / enterprise mockups</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Real content drafts</td>
                <td className="py-2 px-2">Actual draft copy (best for late-stage design)</td>
                <td className="py-2 px-2">Pre-launch QA, stakeholder rev</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Lorem Ipsum in Modern Tooling</h3>
          <p>
            Most developers use Lorem Ipsum within design workflows: Figma&apos;s built-in &quot;Lorem ipsum&quot; plugin, Sketch&apos;s &quot;Data Populator,&quot; Adobe XD&apos;s &quot;Repeat Grid&quot; with built-in placeholder, or just paste from a generator like this one. For developers, many code editors include shortcuts: VS Code supports <code>lorem10</code> as an Emmet abbreviation that generates 10 words of Lorem Ipsum, or <code>p*5&gt;lorem</code> to generate 5 paragraphs of `&lt;p&gt;` tags with Lorem inside. Modern responsive web frameworks (Tailwind, Bootstrap, Material UI) ship sample mockups with Lorem Ipsum baked in.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Testing Layouts with Variable Length</h3>
          <p>
            The most common mistake in design: using a single &quot;just right&quot; placeholder length and only catching layout issues when real content arrives. Best practice:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Short variant:</strong> 1-2 sentences for headlines / hero text</li>
            <li><strong>Standard variant:</strong> 2-3 paragraphs for body content</li>
            <li><strong>Long variant:</strong> 6+ paragraphs to test overflow / scroll / truncation</li>
            <li><strong>Edge cases:</strong> single word headline, 200-character heading, empty state</li>
          </ul>
          <p className="mt-3">
            Generate each variant separately to test how your design responds. Components with fixed heights or grid layouts especially need long-text testing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When Real Copy Arrives</h3>
          <p>
            When real copy is ready, replace placeholders carefully — real word lengths often surprise you. Test line breaks, truncation rules, and component behavior. The transition from Lorem Ipsum to real copy is where many designs &quot;break&quot;: brand names are short or super long, technical terms have unusual character counts, real headlines are punchier or wordier than the placeholder. Plan for both extremes.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Test layouts with at least 3 length variants: short (1 sentence), medium (1 paragraph), and long (5+ paragraphs). Real-world content is rarely 'just right' — short brand names break carousels, long product descriptions break grid layouts. For SEO-sensitive sites, never deploy Lorem Ipsum to production — Google can index it and it counts as 'thin content' against your domain. Always replace placeholder text in QA before launch, and add 'lorem' to your pre-launch checklist.",

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
