import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const SchemaMarkupGenerator = dynamic(
  () => import("@/components/seo/schema-markup-generator").then((mod) => mod.SchemaMarkupGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Schema Markup Generator",
  description:
    "Generate valid JSON-LD structured data for 11 schema types. Article, FAQ, Product, LocalBusiness, Event, Recipe, and more. Free SEO tool.",
  metaTitle: "Schema Markup Generator — JSON-LD for Article, Product, FAQ, LocalBusiness",
  metaDescription:
    "Free JSON-LD schema markup generator. 11+ types: Article, Product, FAQPage, HowTo, LocalBusiness, Event, Recipe, Organization, Breadcrumb, VideoObject. Form-based builder, valid schema.org output, validates with Google Rich Results Test.",
  path: "/seo-tools/schema-markup-generator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free online schema markup generator that creates valid JSON-LD structured data for 11 schema types including Article, FAQPage, HowTo, LocalBusiness, Product, Event, Organization, Person, Recipe, BreadcrumbList, and VideoObject.",
    featureList: [
      "11 schema types: Article, FAQ, HowTo, LocalBusiness, Product, Event, Organization, Person, Recipe, Breadcrumb, Video",
      "Form-based visual builder with required/recommended field badges",
      "Real-time JSON-LD preview with script tag output",
      "One-click copy to clipboard (script tag or JSON only)",
      "Direct link to Google Rich Results Test for validation",
      "Support for nested schemas (Author, Publisher, Offer, AggregateRating)",
      "Array fields for FAQ questions, HowTo steps, breadcrumb items, and recipe ingredients",
      "LocalBusiness subtypes (Restaurant, Store, Medical, Legal, Financial, Real Estate)",
      "Product schema with price, availability, brand, and ratings",
      "No signup, no account required",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "JSON-LD Generator",
      "Schema.org Markup Builder",
      "Rich Snippets Generator",
      "Structured Data Generator",
      "Google Rich Results Helper",
      "Article Schema Generator",
      "Product Schema Generator",
      "LocalBusiness Schema Maker",
      "FAQ Schema Generator",
      "HowTo Schema Generator",
      "Recipe Schema Tool",
      "Event Schema Builder",
      "BreadcrumbList Generator",
      "Merkle Schema Markup Alternative",
      "TechnicalSEO Schema Alternative",
    ],
    ratingValue: "4.9",
    ratingCount: "11240",
  },

  header: {
    title: "Schema Markup Generator (JSON-LD)",
    description:
      "Generate valid JSON-LD structured data for 11 schema types. Fill in the form, copy the code, and paste it into your HTML for rich snippets.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Schema Markup Generator", href: "/seo-tools/schema-markup-generator" },
  ],

  content: {
    definition:
      "A Schema Markup Generator is a free tool that creates JSON-LD structured data code for your website without manual coding, helping search engines and AI systems understand your content to enable rich snippets, knowledge panels, and enhanced search visibility.",

    quickAnswer:
      "Select a schema type (Article, Product, FAQ, LocalBusiness, etc.), fill in the form fields, and click Copy to get the JSON-LD script tag. Paste it into your HTML head section and validate with Google Rich Results Test. Schema markup helps Google show rich snippets that increase click-through rates by 20-40%.",

    keyTakeaways: [
      "Schema markup (JSON-LD) helps Google and AI engines understand your content for rich snippets",
      "Google officially recommends JSON-LD format over Microdata or RDFa",
      "72% of first-page Google results use schema markup",
      "Rich snippets from schema increase click-through rates by 20-40%",
      "AI search engines (Google AI Overviews, ChatGPT, Perplexity) cite pages with structured data more often",
    ],

    overview:
      "This schema markup generator creates valid JSON-LD structured data for 11 commonly used Schema.org types. Select your content type, fill in the form fields, and copy the generated script tag to add to your website. The tool supports nested schemas (Author, Publisher, Offer, AggregateRating) and array fields for FAQ questions, recipe ingredients, breadcrumb items, and HowTo steps. Validate your output with Google Rich Results Test to confirm eligibility for enhanced search results.",

    howToSteps: [
      "Select the schema type that matches your content (Article, Product, FAQ, LocalBusiness, Event, Recipe, etc.).",
      "Fill in the form fields. Required fields are marked with a badge. Add as many optional fields as apply.",
      "Review the generated JSON-LD code in the preview panel. Toggle between Script Tag and JSON Only views.",
      "Click 'Copy Script Tag' and paste the code into your page's <head> section or before </body>. Validate with Google Rich Results Test.",
    ],

    features: [
      "11 schema types: Article, FAQPage, HowTo, LocalBusiness, Product, Event, Organization, Person, Recipe, BreadcrumbList, VideoObject",
      "Visual form builder with required/recommended field indicators",
      "Real-time JSON-LD preview that updates as you type",
      "Script tag and raw JSON output modes",
      "One-click copy to clipboard",
      "Direct link to Google Rich Results Test for validation",
      "Nested schema support (Author, Publisher, Offer, AggregateRating, GeoCoordinates)",
      "Dynamic array fields for FAQ Q&As, HowTo steps, breadcrumb items, recipe ingredients",
      "LocalBusiness subtypes (Restaurant, Store, Medical, Legal, Financial, Real Estate)",
      "Product schema with price, currency, availability, brand, SKU, ratings, and reviews",
    ],

    useCases: [
      "Add Article schema to blog posts for enhanced search appearance with author and date",
      "Generate FAQ schema to help AI engines understand your Q&A content",
      "Create Product schema for e-commerce pages with price, availability, and ratings",
      "Add LocalBusiness schema for Google Maps and local search visibility",
      "Generate Event schema for conferences, concerts, and meetups with ticket info",
      "Create Recipe schema for food blogs with ingredients, steps, and nutrition",
      "Add Organization schema to your homepage for knowledge panel eligibility",
      "Generate BreadcrumbList schema for improved site navigation in search results",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is Schema Markup?</h3>
          <p>
            Schema markup is structured data code added to web pages that helps search engines understand
            the meaning of your content. It uses the Schema.org vocabulary and is typically implemented as
            JSON-LD (JavaScript Object Notation for Linked Data) — a lightweight script tag that Google,
            Bing, and AI search engines read to generate rich snippets, knowledge panels, and enhanced
            search features. Google officially recommends JSON-LD over Microdata or RDFa.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Schema Markup Matters in 2026</h3>
          <p>
            In 2026, schema markup is more important than ever. 72% of first-page Google results use
            structured data, and pages with schema see 20-40% higher click-through rates from rich snippets.
            AI search engines (Google AI Overviews, ChatGPT, Perplexity) increasingly cite pages with
            structured data because it clearly describes what content is about, who wrote it, and when it
            was updated. Only ~17% of websites currently implement schema — a massive opportunity.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">FAQ and HowTo Rich Results Update</h3>
          <p>
            Google deprecated HowTo rich results in 2023-2024. FAQ rich results are now limited to
            authoritative government and health websites. However, implementing FAQPage and HowTo markup
            still helps AI engines understand your content structure, even without visual rich results in
            search. The markup remains valuable for AI search citation and content comprehension.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How to Validate Your Schema</h3>
          <p>
            After generating your JSON-LD, validate it using <strong>Google&apos;s Rich Results Test</strong> (<code>search.google.com/test/rich-results</code>) to check eligibility for rich results, and the <strong>Schema Markup Validator</strong> (<code>validator.schema.org</code>) for full Schema.org compliance. Fix any errors or warnings before publishing to ensure maximum search visibility. After deployment, use <strong>Google Search Console&apos;s Enhancements report</strong> to monitor rich result performance over time and fix any errors Google detects after crawling.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Schema Type Priority by Page Type</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Page type</th>
                <th className="text-left py-2 px-2 text-foreground">Primary schema</th>
                <th className="text-left py-2 px-2 text-foreground">Secondary schemas to add</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Blog post / article</td>
                <td className="py-2 px-2"><strong>Article</strong> (or BlogPosting)</td>
                <td className="py-2 px-2">Person (author), Organization (publisher), BreadcrumbList</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Product page</td>
                <td className="py-2 px-2"><strong>Product</strong></td>
                <td className="py-2 px-2">Offer (price), AggregateRating, Review, BreadcrumbList</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Local business</td>
                <td className="py-2 px-2"><strong>LocalBusiness</strong> (or subtype: Restaurant, Store, etc.)</td>
                <td className="py-2 px-2">PostalAddress, GeoCoordinates, OpeningHoursSpecification</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Homepage (company)</td>
                <td className="py-2 px-2"><strong>Organization</strong></td>
                <td className="py-2 px-2">WebSite (with SearchAction), ContactPoint</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Recipe</td>
                <td className="py-2 px-2"><strong>Recipe</strong></td>
                <td className="py-2 px-2">Person (chef), NutritionInformation, AggregateRating</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Event</td>
                <td className="py-2 px-2"><strong>Event</strong> (or subtype: Conference, Concert)</td>
                <td className="py-2 px-2">Place, Offer (tickets), Performer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Video</td>
                <td className="py-2 px-2"><strong>VideoObject</strong></td>
                <td className="py-2 px-2">Clip (timestamps), BroadcastEvent</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">FAQ / Help center page</td>
                <td className="py-2 px-2">FAQPage (gov/health only for rich results)</td>
                <td className="py-2 px-2">BreadcrumbList, Organization</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Person / Author page</td>
                <td className="py-2 px-2"><strong>Person</strong> (ProfilePage for E-E-A-T)</td>
                <td className="py-2 px-2">Organization (employer)</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Category / collection</td>
                <td className="py-2 px-2"><strong>BreadcrumbList</strong> + CollectionPage</td>
                <td className="py-2 px-2">ItemList (of products / articles)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Critical 2025-2026 Schema Updates</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>FAQPage is RESTRICTED:</strong> as of August 2023, FAQ rich results only appear for &quot;well-known authoritative government and health websites&quot;. Schema still helps AI engines understand structure, but no rich snippet visual benefit for commercial sites. Keep it for AI search; don&apos;t expect SERP enhancement.</li>
            <li><strong>HowTo is DEPRECATED:</strong> rich results fully removed September 2023. Google says it&apos;s not a ranking factor anymore. Schema markup is harmless to keep but no SEO benefit.</li>
            <li><strong>ProfilePage gains importance:</strong> Google&apos;s December 2025 E-E-A-T applies to ALL competitive queries. Author profile pages with ProfilePage + Person schema help establish expertise.</li>
            <li><strong>AggregateRating requires real reviews:</strong> Google detects fake ratings now; only use AggregateRating if you have genuine reviewer data.</li>
            <li><strong>VideoObject for SEO video search:</strong> Video schema is increasingly important as Google integrates video results into SERPs. Add Clip schema with seekToAction for chapter rich results.</li>
            <li><strong>Speakable schema (audio search):</strong> emerging — schema.org Speakable annotation helps voice assistants find relevant content for audio reading.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Microdata vs RDFa vs JSON-LD — Why JSON-LD Wins</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Format</th>
                <th className="text-left py-2 px-2 text-foreground">Where it lives</th>
                <th className="text-left py-2 px-2 text-foreground">Google preference</th>
                <th className="text-left py-2 px-2 text-foreground">Maintenance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>JSON-LD</strong></td>
                <td className="py-2 px-2">Separate <code>&lt;script&gt;</code> tag</td>
                <td className="py-2 px-2 text-green-500">Strongly recommended</td>
                <td className="py-2 px-2">Easy — change schema without touching HTML</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Microdata</td>
                <td className="py-2 px-2">Inline HTML attributes (itemscope / itemprop)</td>
                <td className="py-2 px-2 text-orange-500">Accepted</td>
                <td className="py-2 px-2">Harder — schema entangled with content</td>
              </tr>
              <tr>
                <td className="py-2 px-2">RDFa</td>
                <td className="py-2 px-2">Inline HTML attributes (vocab / typeof / property)</td>
                <td className="py-2 px-2 text-orange-500">Accepted but rarely used</td>
                <td className="py-2 px-2">Hardest — verbose syntax</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Always use JSON-LD for new implementations.</strong> Don&apos;t mix formats on the same page — Google can usually handle it, but it&apos;s a source of subtle errors. Migrate legacy Microdata pages to JSON-LD over time.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Implementation Mistakes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Schema for content NOT on the page:</strong> Google&apos;s docs explicitly say schema must describe content visible to users. Don&apos;t add FAQ schema for FAQs that aren&apos;t visible.</li>
            <li><strong>Missing required fields:</strong> each schema type has required and recommended fields. Article requires <code>headline</code>, <code>author</code>, <code>datePublished</code>. Product requires <code>name</code> + <code>image</code> + <code>description</code> + <code>offers</code>.</li>
            <li><strong>Mismatched data:</strong> if your schema says <code>aggregateRating: 4.5</code> but page displays 3.5, Google may consider it manipulative and ignore the schema entirely.</li>
            <li><strong>Multiple schemas conflicting:</strong> if you have two Article schemas on one page, Google picks one or ignores both.</li>
            <li><strong>Wrong nesting:</strong> Author should be a Person object nested in Article, not a separate top-level item.</li>
            <li><strong>Skipping breadcrumbs:</strong> BreadcrumbList schema improves SERP appearance for ~70% of pages — easy win, often skipped.</li>
            <li><strong>Forgetting to update dynamically:</strong> articles need <code>dateModified</code> updated when content changes; products need <code>price</code> kept in sync.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Schema for AI Search (GEO)</h3>
          <p>
            Generative Engine Optimization (GEO) — optimizing for AI search like ChatGPT, Perplexity, Claude, and Google AI Overviews — relies heavily on structured data. AI engines parse schema to understand <em>what</em> your page is, <em>who</em> wrote it, <em>when</em> it was updated, and <em>how authoritative</em> it is. To win citations from AI engines:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Person schema for authors:</strong> with sameAs links to Twitter / LinkedIn / Wikipedia for entity recognition</li>
            <li><strong>Organization schema with knowsAbout:</strong> tells AI what topics your brand is authoritative on</li>
            <li><strong>Article schema with all metadata:</strong> author, publisher, dates, image, articleSection</li>
            <li><strong>FAQPage even if no SERP benefit:</strong> AI engines still use it to extract Q&amp;A pairs</li>
            <li><strong>HowTo for instructional content:</strong> AI cites tools that have clean structured how-to content</li>
            <li><strong>VideoObject with transcript:</strong> AI engines now index video content via transcripts in VideoObject</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "You can add multiple JSON-LD script blocks to a single page. For example, an article page should have Article schema, BreadcrumbList schema, and Organization schema. Each goes in its own <script type=\"application/ld+json\"> tag.",

    faqs: [
      {
        question: "What is schema markup and why is it important for SEO?",
        answer:
          "Schema markup is structured data code (JSON-LD) added to web pages that helps search engines understand your content. It enables rich snippets (stars, prices, FAQs) in search results that increase click-through rates by 20-40%. In 2026, 72% of first-page Google results use schema markup.",
      },
      {
        question: "What is JSON-LD and why does Google prefer it?",
        answer:
          "JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight structured data format added as a script tag. Google officially recommends JSON-LD because it can be added without modifying HTML structure, making it easier to implement and maintain than Microdata or RDFa.",
      },
      {
        question: "Does schema markup directly improve search rankings?",
        answer:
          "Schema markup is not a direct ranking factor. However, it enables rich snippets that increase CTR by 20-40%, which indirectly improves rankings. AI engines like Google AI Overviews, ChatGPT, and Perplexity also cite pages with structured data more frequently.",
      },
      {
        question: "Which schema types are most important for SEO?",
        answer:
          "The highest-impact types are Article, Product, LocalBusiness, Organization, Event, Recipe, VideoObject, and BreadcrumbList. FAQ rich results are now limited to authoritative sites, and HowTo rich results have been deprecated by Google.",
      },
      {
        question: "How do I add schema markup to my website?",
        answer:
          "Generate your JSON-LD code using this tool, then paste the script tag into your page's <head> section or just before </body>. For WordPress, use plugins like Rank Math or Yoast. Always validate with Google's Rich Results Test before publishing.",
      },
      {
        question: "Can I use multiple schema types on one page?",
        answer:
          "Yes. You can include multiple JSON-LD script blocks on a single page. For example, an article page could have Article schema, BreadcrumbList schema, and Organization schema simultaneously.",
      },
      {
        question: "How do I test if my schema markup is valid?",
        answer:
          "Use Google's Rich Results Test (search.google.com/test/rich-results) to check rich result eligibility, and the Schema Markup Validator (validator.schema.org) for full Schema.org compliance.",
      },
      {
        question: "Does schema markup help with AI search engines?",
        answer:
          "Yes. Google, Microsoft, and ChatGPT confirmed they use structured data for generative AI features. Pages with schema markup are more often cited in AI-generated answers because structured data clearly describes content, authorship, and recency.",
      },
      {
        question: "What happened to FAQ and HowTo rich results?",
        answer:
          "Google deprecated HowTo rich results entirely in 2023-2024. FAQ rich results are now only shown for well-known authoritative government and health websites. However, the markup still helps AI engines understand your content.",
      },
      {
        question: "What is the difference between schema markup and rich snippets?",
        answer:
          "Schema markup is the code you add to pages (JSON-LD using Schema.org vocabulary). Rich snippets are the enhanced search result displays (stars, prices, images, FAQs) that Google shows when it reads your structured data.",
      },
    ],

    relatedTools: [
      { name: "Meta Tags Generator", href: "/seo-tools/meta-tags" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SchemaMarkupGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<SchemaMarkupGenerator />)} />
}
