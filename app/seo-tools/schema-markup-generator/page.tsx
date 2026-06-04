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
      "Generate JSON-LD structured data for 11 schema types. Fill in the form, copy the code, paste it into your HTML, and validate before publishing.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Schema Markup Generator", href: "/seo-tools/schema-markup-generator" },
  ],

  content: {
    definition:
      "A Schema Markup Generator creates JSON-LD structured data code for a web page without manually writing Schema.org markup.",

    quickAnswer:
      "Select a schema type, fill in the form fields, and copy the JSON-LD script tag. Paste it into your page and validate it with Google's Rich Results Test or Schema Markup Validator before publishing.",

    keyTakeaways: [
      "Schema markup helps search engines understand the entities and content on a page",
      "Google officially recommends JSON-LD format over Microdata or RDFa",
      "Structured data must describe content that is visible on the page",
      "Valid markup can make eligible pages qualify for rich-result appearances",
      "FAQ rich results are limited to well-known government and health sites",
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
      "Generate FAQ schema for visible question-and-answer sections",
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
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Schema Markup Matters</h3>
          <p>
            Schema markup gives search engines explicit clues about the page: what type of content it is,
            who created it, what product or event it describes, what breadcrumbs lead to it, and which
            visible details are important. It does not guarantee a rich result or a ranking boost, but valid
            structured data can make eligible content easier for search systems to interpret and display.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">FAQ and HowTo Rich Results Update</h3>
          <p>
            FAQ rich results are now limited to well-known, authoritative government-focused and health-focused
            sites. HowTo rich results were removed from Google Search earlier. You can still create FAQPage
            and HowTo JSON-LD when it accurately describes visible page content, but do not expect those types
            to create a visual rich result for a normal commercial site.
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
          <h3 className="text-lg font-semibold text-foreground mb-2">Schema Rules to Avoid Errors</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Markup must match visible content:</strong> do not add schema for information users cannot see on the page.</li>
            <li><strong>Required fields matter:</strong> incomplete markup may be valid JSON but still ineligible for a rich result.</li>
            <li><strong>FAQPage is restricted:</strong> ordinary commercial pages should not expect FAQ rich-result display.</li>
            <li><strong>Use real ratings only:</strong> add AggregateRating only when the page shows genuine review data.</li>
            <li><strong>Keep dynamic data synced:</strong> prices, availability, dates, and modified times should match the page.</li>
            <li><strong>Validate before publishing:</strong> use both the Rich Results Test and Schema Markup Validator when possible.</li>
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
          <h3 className="text-lg font-semibold text-foreground mb-2">Schema and Content Quality</h3>
          <p>
            Structured data supports clear interpretation, but it does not replace useful page content. The visible page still needs accurate facts, original explanation, helpful media where relevant, and a good user experience. Treat JSON-LD as a clean label for content that already exists, not as a way to create relevance that the page does not earn.
          </p>
        </div>
      </div>
    ),

    proTip:
      "You can add multiple JSON-LD script blocks to a single page. For example, an article page should have Article schema, BreadcrumbList schema, and Organization schema. Each goes in its own <script type=\"application/ld+json\"> tag.",

    faqs: [
      {
        question: "What is schema markup and why is it important for SEO?",
        answer:
          "Schema markup is structured data code, often JSON-LD, added to web pages to help search engines understand the page's content. Valid structured data can make eligible pages qualify for richer search appearances, but it does not guarantee them.",
      },
      {
        question: "What is JSON-LD and why does Google prefer it?",
        answer:
          "JSON-LD (JavaScript Object Notation for Linked Data) is a lightweight structured data format added as a script tag. Google officially recommends JSON-LD because it can be added without modifying HTML structure, making it easier to implement and maintain than Microdata or RDFa.",
      },
      {
        question: "Does schema markup directly improve search rankings?",
        answer:
          "Schema markup is not a direct ranking factor. It can help search engines understand eligible content and may enable richer appearances when the page follows Google's guidelines.",
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
          "Structured data can clarify what a page contains, but there is no special schema shortcut for AI search visibility. Useful, crawlable, accurate content remains the main requirement.",
      },
      {
        question: "What happened to FAQ and HowTo rich results?",
        answer:
          "FAQ rich results are limited to well-known authoritative government and health websites. HowTo rich results were removed from Google Search. You can still mark up visible FAQ or step content, but normal commercial pages should not expect these rich-result displays.",
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
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SchemaMarkupGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<SchemaMarkupGenerator />)} />
}
