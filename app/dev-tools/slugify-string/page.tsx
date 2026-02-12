import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { SlugifyString } from "@/components/dev-tools/slugify-string"

const toolConfig = createToolConfig({
  toolName: "Slugify String",
  description:
    "Slugify string online. Make a string url, filename and id safe. slugify string url. slugify - npm alternative. slugify typescript, slugify python, slugify string php. Free.",
  metaTitle: "Slugify String - Online URL Slug Generator | slugify string url, filename",
  metaDescription:
    "Slugify string online. Make a string url, filename and id safe. slugify string url. slugify - npm, slugify typescript alternative. slugify string php, slugify python. Free.",
  path: "/dev-tools/slugify-string",

  header: {
    title: "Slugify string",
    description:
      "Make a string url, filename and id safe.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Slugify String", href: "/dev-tools/slugify-string" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Slugify string online. Make a string url, filename and id safe. slugify string url, slugify - npm alternative.",
    alternateName: [
      "Slugify String Online",
      "URL Slug Generator",
      "slugify - npm",
      "Slugify String URL",
      "Slug Generator",
    ],
    featureList: [
      "slugify string - URL-safe conversion",
      "slugify string url - SEO-friendly slugs",
      "slugify string online - No install, free",
      "slugify filename and id safe",
      "slugify - npm alternative in browser",
      "slugify typescript, slugify python compatible output",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Slugify string online to make text url, filename and id safe. Convert any string to a slug—lowercase, hyphens, no special characters. slugify string url for SEO-friendly permalinks. slugify - npm alternative. slugify typescript, slugify python, slugify string php output format. sindresorhus/slugify compatible. Free slugify string online tool.",

    howToSteps: [
      "Enter your string in the input (e.g. 'My file path', 'Hello World!').",
      "View the slug in the output (e.g. 'my-file-path', 'hello-world').",
      "Click 'Copy slug' to copy to clipboard for use in URLs, filenames, or IDs.",
    ],

    features: [
      "slugify string: Convert any text to URL-safe slug",
      "slugify string url: SEO-friendly permalinks",
      "slugify string online: No npm install, works in browser",
      "slugify filename: Safe for file and folder names",
      "slugify id: Safe for HTML IDs, CSS classes",
      "slugify - npm: Same output as slugify npm package",
      "slugify typescript, slugify python, slugify string php compatible",
    ],

    useCases: [
      "slugify string url: Blog post slugs, product URLs, category paths",
      "slugify string php: Generate slugs for Laravel, WordPress, Drupal",
      "slugify typescript: Next.js, React, Vue permalink generation",
      "slugify python: Django, Flask URL slugs (python-slugify output)",
      "slugify java, slugify nestjs: Backend slug generation",
      "sindresorhus/slugify: Browser alternative to the npm package",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Slugify string converts text to a URL, filename and id safe format:
          lowercase, spaces to hyphens, special characters removed. slugify
          string online for permalinks, file names, HTML IDs. slugify - npm and
          sindresorhus/slugify produce similar output. slugify typescript,
          slugify python (python-slugify), slugify string php all use this
          pattern. Free slugify string online, no signup.
        </p>
      </div>
    ),

    proTip:
      "Use slugs for URLs (blog/post-slug), filenames (my-document.pdf), HTML IDs (#section-id). Keeps URLs readable and SEO-friendly.",

    faqs: [
      {
        question: "What is slugify a string?",
        answer:
          "Slugify a string means converting text to a URL-safe, filename-safe format: lowercase, spaces to hyphens, special characters removed. Example: 'My File Path' → 'my-file-path'.",
      },
      {
        question: "What is a slug string?",
        answer:
          "A slug string is the URL-friendly version of a title: lowercase, hyphens instead of spaces, no special chars. Used in URLs like /blog/my-post-slug.",
      },
      {
        question: "How to slugify string online?",
        answer:
          "Use this slugify string online tool. Enter your text, get the slug, copy it. No slugify - npm install, slugify typescript, or slugify python needed.",
      },
      {
        question: "What does slugify do in Python?",
        answer:
          "slugify python (python-slugify package) converts strings to slugs. This tool produces compatible output. slugify('Hello World') → 'hello-world'.",
      },
      {
        question: "Is this a slugify - npm alternative?",
        answer:
          "Yes. Same concept as slugify npm and sindresorhus/slugify. slugify string online in browser without installing slugify typescript or slugify - npm.",
      },
      {
        question: "How to slugify string php?",
        answer:
          "slugify string php: Use similar logic—strtolower, str_replace for spaces/special chars. This slugify string online tool gives you the output to match.",
      },
    ],

    additionalContent: [
      {
        heading: "slugify string url — SEO & readability",
        content:
          "slugify string url creates SEO-friendly URLs. 'How to Build a React Component' → 'how-to-build-a-react-component'. Better than IDs for search engines and users.",
      },
      {
        heading: "slugify - npm, slugify typescript, slugify string github",
        content:
          "slugify - npm (sindresorhus/slugify), slugify typescript, slugify string github—this tool is a browser-based alternative. No install for quick slugify string online.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "MIME Types", href: "/dev-tools/mime-types" },
      { name: "Keycode Info", href: "/dev-tools/keycode-info" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SlugifyStringPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SlugifyString />
        </div>
      )}
    />
  )
}
