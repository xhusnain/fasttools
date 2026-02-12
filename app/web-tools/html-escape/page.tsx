import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const HtmlEscape = dynamic(
  () =>
    import("@/components/web-tools/html-escape").then((mod) => mod.HtmlEscape),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Escape HTML entities",
  description:
    "Free HTML escape online. Escape html entities list. html escape js, php, python. Unescape html entities. HTML escape characters list. XSS prevention. No signup.",
  metaTitle: "Escape HTML Entities Online - Free, JS, PHP, Python",
  metaDescription:
    "Free HTML escape online. Escape html entities list, html escape characters list. html escape js, php, python. Unescape html entities. XSS prevention. No signup.",
  path: "/web-tools/html-escape",

  header: {
    title: "Escape HTML entities",
    description:
      "Escape special characters to HTML entities or unescape them. Prevents XSS, ensures correct display.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "Escape HTML Entities", href: "/web-tools/html-escape" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free HTML escape online. Escape html entities list. html escape js, php, python. Unescape html entities. XSS prevention.",
    alternateName: [
      "Escape HTML Entities Online",
      "HTML Escape Online",
      "HTML Escape Unescape Tool",
    ],
    featureList: [
      "Escape HTML entities",
      "Unescape HTML entities",
      "HTML escape characters list",
      "For JS, PHP, Python",
      "XSS prevention",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free html escape online. Use this escape html entities list to convert &lt; &gt; &amp; &quot; &#39; into safe entity names. Works as unescape html entities python, html escape js, and html escape php alternative. Matches the html escape characters list from W3Schools. Supports html escape unicode. Prevents XSS. No signup.",

    howToSteps: [
      "Escape: Paste your HTML or text in the Escape panel. Special characters become &lt; &gt; &amp; &quot; &#39;.",
      "Unescape: Paste escaped entities in the Unescape panel. Get plain text back.",
      "Copy escaped or unescaped result with one click.",
    ],

    features: [
      "Escape html entities: &lt; &gt; &amp; &quot; &#39; to entity names",
      "Unescape: Convert escaped entities back to plain text",
      "Full html escape characters list per W3Schools",
      "html escape js, html escape php, unescape html entities python compatible",
      "html escape unicode via decimal and hex references",
      "XSS prevention; 100% client-side, no data sent",
    ],

    useCases: [
      "Display user input safely: escape html entities before rendering to prevent XSS.",
      "html escape js: Use this html escape online tool instead of manual DOM or replace.",
      "html escape php: Quick check without PHP; same output as htmlspecialchars.",
      "unescape html entities python: Paste escaped text to get plain text without opening a shell.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          To escape html entities, convert special characters to entity names or
          numeric references so they display correctly and don&apos;t execute as
          code. The html escape characters list (W3Schools standard) includes:
          &lt; → &amp;lt;, &gt; → &amp;gt;, &amp; → &amp;amp;, &quot; →
          &amp;quot;, &#39; → &amp;#39;. For html escape js use
          createTextNode or replace; for html escape php use htmlspecialchars;
          for unescape html entities python use html.unescape. This html escape
          online tool does both escape and unescape without code.
        </p>
      </div>
    ),

    proTip:
      "Escape on output (before rendering), not on input. React and Angular auto-escape; use this for manual HTML or legacy templates.",

    faqs: [
      {
        question: "How to escape in HTML?",
        answer:
          "Replace &lt; with &amp;lt;, &gt; with &amp;gt;, &amp; with &amp;amp;, quotes with &amp;quot; and &amp;#39;. Paste your text in the Escape panel—this free html escape online tool does it instantly. Prevents XSS and ensures correct display.",
      },
      {
        question: "What are HTML entities?",
        answer:
          "HTML entities are codes that represent special characters. &amp;lt; is &lt;, &amp;gt; is &gt;, &amp;amp; is &amp;. Use this escape html entities list: &lt; &gt; &amp; &quot; &#39;. This tool escapes and unescapes them.",
      },
      {
        question: "How to unescape HTML entities in Python?",
        answer:
          "Use html.unescape() in Python. Or use this free unescape html entities python alternative—paste escaped text and get plain text. For escaping, use html.escape().",
      },
      {
        question: "How to escape HTML in JavaScript?",
        answer:
          "Create a text node or use replace. This free html escape js alternative works online—paste text and get escaped output. For manual code: replace /[&<>\"']/g with entity map.",
      },
      {
        question: "How to escape HTML in PHP?",
        answer:
          "Use htmlspecialchars() or htmlentities() in PHP. This free html escape php alternative works online—paste text and get escaped output. Laravel uses e() which calls htmlspecialchars.",
      },
      {
        question: "Is this HTML escape tool free?",
        answer:
          "Yes. This HTML escape/unescape tool is 100% free. Conversion runs in your browser—no data is sent to servers. No signup required. Use for html escape online, unescape html entities, XSS prevention.",
      },
    ],

    additionalContent: [
      {
        heading: "Escape HTML Entities List — W3Schools Standard",
        content:
          "The escape html entities list used by W3Schools and OWASP includes five core characters: less-than (&lt;) as &amp;lt;, greater-than (&gt;) as &amp;gt;, ampersand (&amp;) as &amp;amp;, double quote (\") as &amp;quot;, and single quote (') as &#39;. This html escape online tool converts all five instantly. Use it for html escape js, html escape php, or as an unescape html entities python alternative when working in the browser.",
      },
      {
        heading: "HTML Escape Characters List & Unicode Support",
        content:
          "The complete html escape characters list covers &lt; &gt; &amp; &quot; &#39;. For broader character support, html escape unicode handles extended characters via decimal (&#123;) and hex (&#x7B;) references. Whether you need html escape js, html escape php, or unescape html entities python—this free html escape online tool works without code.",
      },
      {
        heading: "HTML Escape Online — No Code Required",
        content:
          "This html escape online tool runs entirely in your browser. Paste text with special characters and get escaped output. Paste escaped entities to unescape. Ideal for quick html escape js or html escape php checks, or as an unescape html entities python workflow when you need instant conversion without opening a terminal.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlEscapePage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HtmlEscape />
        </div>
      )}
    />
  )
}
