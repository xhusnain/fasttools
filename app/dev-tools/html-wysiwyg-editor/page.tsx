import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HtmlWysiwygEditor = dynamic(
  () => import("@/components/dev-tools/html-wysiwyg-editor").then((mod) => mod.HtmlWysiwygEditor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML WYSIWYG Editor",
  description:
    "Edit rich text and view generated HTML source side-by-side for content and UI workflows.",
  metaTitle: "HTML WYSIWYG Editor — Visual Rich-Text to Clean HTML Online",
  metaDescription:
    "Free WYSIWYG HTML editor. Compose with visual toolbar (headings, lists, tables, links, images, color) and get clean HTML source code. Perfect for CMS body fields, email templates, landing pages. 100% client-side, no signup.",
  path: "/dev-tools/html-wysiwyg-editor",

  header: {
    title: "HTML WYSIWYG Editor (Rich Text to HTML)",
    description:
      "Write and format rich text visually, then copy the clean HTML source code. Supports headings, bold, italic, lists, tables, links, and images. Perfect for CMS content, email templates, and web pages.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Visual WYSIWYG (What You See Is What You Get) HTML editor with live source code output. Compose rich text with toolbar — headings, bold, italic, underline, lists, tables, links, images, color — and get clean HTML. For CMS content, email templates, landing pages. 100% client-side.",
    alternateName: [
      "Visual HTML Editor",
      "Rich Text Editor",
      "WYSIWYG Online",
      "HTML Composer",
      "CMS-Style Editor",
      "Email Template Editor",
      "Landing Page HTML Maker",
      "Online HTML Writer",
      "TinyMCE Alternative",
      "CKEditor Alternative",
      "Quill Editor Alternative",
      "Froala Alternative",
      "TipTap-style Editor",
      "HTML Body Editor",
      "What You See Is What You Get HTML",
    ],
    featureList: [
      "Visual editing with toolbar — no HTML knowledge required",
      "Live HTML source code output as you type",
      "Switch between WYSIWYG view and HTML source view",
      "Formatting: bold, italic, underline, strikethrough, superscript, subscript",
      "Headings H1–H6, paragraph, blockquote, horizontal rules",
      "Ordered / unordered lists with nested indentation",
      "Tables with row / column add / delete and cell alignment",
      "Insert links, images, embed video URLs",
      "Text color, highlight, font size, font family controls",
      "Clean HTML output — no inline `style=` clutter from MS Word / Google Docs paste",
      "Paste-as-plain-text option to strip formatting noise",
      "Mobile-friendly editing on tablet / phone",
      "100% client-side — your content never leaves your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "7320",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML WYSIWYG Editor is a free tool that lets you create and edit HTML content visually without writing code, then export the clean HTML source.",
    quickAnswer:
      "Type and format text using the visual toolbar (bold, italic, headings, lists, links, images). The tool generates clean HTML code in real time. Switch between visual and source views. Copy the HTML output.",
    keyTakeaways: [
      "Visual editing with toolbar for formatting, links, images, and tables",
      "Real-time HTML source code generation as you edit",
      "Switch between WYSIWYG and source code views",
      "Clean HTML output without unnecessary tags or inline styles",
      "Useful for email templates, CMS content, and quick HTML prototyping",
    ],
    overview:
      "Create rich text content and generate clean HTML source code with this free online WYSIWYG editor. Format content visually using a toolbar — add headings, bold, italic, lists, tables, links, and images — then switch to source view to copy the generated HTML. Perfect for creating content for CMS platforms (WordPress, Shopify, Webflow), email templates, landing pages, and embedded HTML blocks. No coding knowledge needed — what you see is what you get.",

    howToSteps: [
      "Compose content using rich text controls.",
      "Inspect generated HTML source output.",
      "Adjust formatting or markup as needed.",
      "Copy output into your target platform.",
    ],

    features: [
      "Rich text authoring interface",
      "Live HTML source workflow",
      "Copy-ready output for integration",
      "Useful for CMS and email content tasks",
      "Browser-native editing utility",
    ],

    useCases: [
      "CMS body field preparation",
      "Email template drafting",
      "Landing page copy block creation",
      "Documentation and knowledge base editing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What WYSIWYG Editors Do</h3>
          <p>
            WYSIWYG (What You See Is What You Get) editors let you format text visually — bold, italic, headings, lists, links, images — and produce the underlying HTML code without you writing markup. The concept dates to 1974 (Xerox PARC&apos;s Bravo editor), commercialized in Microsoft Word and Adobe PageMaker in the 1980s, and ported to the web in the 1990s. Today, WYSIWYG editors power the content authoring experience in WordPress, Notion, Google Docs, Medium, Substack, and virtually every CMS. They make web content accessible to non-technical users.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use a WYSIWYG vs Markdown vs Code</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Approach</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
                <th className="text-left py-2 px-2 text-foreground">Trade-offs</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>WYSIWYG</strong></td>
                <td className="py-2 px-2">Non-technical content authors, marketing teams, executive content</td>
                <td className="py-2 px-2">Output HTML can be messy; copy-paste from Word brings garbage</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Markdown</td>
                <td className="py-2 px-2">Developers, technical writing, documentation, blogs</td>
                <td className="py-2 px-2">Learning curve; limited rich formatting</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Raw HTML</td>
                <td className="py-2 px-2">Complex layouts, custom components, email templates</td>
                <td className="py-2 px-2">Requires HTML knowledge; tedious</td>
              </tr>
              <tr>
                <td className="py-2 px-2">MDX (Markdown + JSX)</td>
                <td className="py-2 px-2">Developer documentation with interactive components</td>
                <td className="py-2 px-2">React stack only; complex tooling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common WYSIWYG Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Email templates:</strong> compose marketing emails visually; copy HTML to Mailchimp / ConvertKit / SendGrid template</li>
            <li><strong>WordPress / CMS content blocks:</strong> draft posts and pages with rich formatting</li>
            <li><strong>Landing page hero copy:</strong> structure heading hierarchy, bullet lists, CTAs</li>
            <li><strong>Knowledge base articles:</strong> Zendesk, Intercom, Help Scout articles benefit from visual editing</li>
            <li><strong>Course content (LMS):</strong> Moodle, Canvas, Teachable accept HTML for lesson content</li>
            <li><strong>Product descriptions:</strong> Shopify, WooCommerce product pages</li>
            <li><strong>FAQ entries:</strong> structured Q&amp;A with rich formatting</li>
            <li><strong>Blog post drafts:</strong> compose, format, paste HTML into your CMS</li>
            <li><strong>Internal documentation:</strong> Confluence-style rich text for team wikis</li>
            <li><strong>Newsletter content:</strong> Substack, beehiiv, ghost newsletter content</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The &quot;Word Paste&quot; Problem</h3>
          <p>
            When users paste content from Microsoft Word into a web editor, Word includes massive amounts of inline styling, namespace tags, and conditional CSS comments. A simple sentence pasted from Word might produce:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`<p class="MsoNormal" style="margin: 0in; font-family: 'Calibri',sans-serif;">
  <o:p>&nbsp;</o:p>
  <span lang=EN-US>Hello world</span>
</p>`}</code>
          </pre>
          <p className="mt-3">
            Modern editors strip this automatically via &quot;paste as plain text&quot; or transparent sanitization. <strong>Always check pasted content</strong> — Word artifacts in your CMS create rendering inconsistencies and bloat page weight by 5-10×.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HTML Output Quality Considerations</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Semantic tags:</strong> good editors output <code>&lt;strong&gt;</code> not <code>&lt;b&gt;</code>, <code>&lt;em&gt;</code> not <code>&lt;i&gt;</code> — semantic tags signal meaning to screen readers and SEO</li>
            <li><strong>Heading hierarchy:</strong> H1 → H2 → H3 in order; never skip levels. The editor should enforce this</li>
            <li><strong>Lists vs paragraphs:</strong> use <code>&lt;ul&gt;</code>/<code>&lt;ol&gt;</code> for actual lists, not styled paragraphs</li>
            <li><strong>No inline styles:</strong> CSS belongs in stylesheets, not <code>style=&quot;&quot;</code> attributes. Inline styles in user content fight your design system.</li>
            <li><strong>Link rel attributes:</strong> external links should have <code>rel=&quot;noopener&quot;</code> for security; some editors add <code>nofollow</code> by default</li>
            <li><strong>Alt text on images:</strong> required for accessibility and SEO; the editor should prompt for it</li>
            <li><strong>Class names:</strong> editor classes (e.g., <code>ck-content</code>) should not appear in output; strip on export</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">WYSIWYG vs Headless / Block Editors</h3>
          <p>The WYSIWYG landscape has evolved beyond classic toolbar editors:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Classic WYSIWYG (TinyMCE, CKEditor, Froala):</strong> traditional toolbar + canvas. Best for email / CMS body fields.</li>
            <li><strong>Block editors (Gutenberg / WordPress, Notion, ContentKit):</strong> content as discrete blocks (text, image, video, callout). Modern, structured output. Better for design systems.</li>
            <li><strong>Hybrid (Quill, ProseMirror, TipTap):</strong> framework-agnostic, customizable. Power most modern editors (Notion, Atlassian, Linear).</li>
            <li><strong>Markdown editors with preview (StackEdit, Dillinger):</strong> not WYSIWYG strictly, but offer side-by-side preview. Lower learning curve than raw HTML.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            This editor runs entirely in your browser. Content you type is not sent to any server. The rich-text-to-HTML conversion happens locally via contenteditable API. Safe for proprietary copy, internal documentation, or any content you don&apos;t want stored elsewhere.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Review generated HTML in the target environment, especially for email clients and CMS sanitization rules.",

    faqs: [
      {
        question: "Can I see the generated HTML while editing?",
        answer:
          "Yes. The tool is designed to pair rich editing with source-output visibility.",
      },
      {
        question: "Is this suitable for email template drafting?",
        answer:
          "Yes, though client-specific rendering tests are still recommended before sending production campaigns.",
      },
      {
        question: "Can I use the output in a CMS?",
        answer:
          "Yes. Copy the generated markup into compatible rich text or HTML-supported CMS fields.",
      },
      {
        question: "Does this replace full page builders?",
        answer:
          "No. It is optimized for content block authoring and source extraction, not full layout systems.",
      },
      {
        question: "Should I clean output before publishing?",
        answer:
          "A quick sanitization/validation pass is recommended, especially for strict security or style pipelines.",
      },
    ],

    relatedTools: [
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlWysiwygEditorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HtmlWysiwygEditor />
        </div>
      )}
    />
  )
}
