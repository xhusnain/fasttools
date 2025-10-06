import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO FAQ - Search Engine Optimization Questions & Answers | FastTools",
  description:
    "Comprehensive SEO FAQ: answers to 100+ search engine optimization questions covering keywords, on-page SEO, technical SEO, backlinks, content strategy, Core Web Vitals, schema, crawling & indexing.",
  alternates: { canonical: "https://fasttools.store/faq" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "SEO FAQ - Search Engine Optimization Q&A",
    description:
      "100+ SEO questions with concise, practical answers: keyword research, link building, on-page SEO, technical SEO, Core Web Vitals, Site speed, schema",
    url: "https://fasttools.store/faq",
    type: "article",
  },
}

type QA = { question: string; answer: string }

const faqs: QA[] = [
  { question: "What is SEO (Search Engine Optimization)?", answer: "SEO is the practice of optimizing a website to improve rankings on search engine results pages (SERPs), increase organic traffic, and enhance discoverability." },
  { question: "Why is SEO important for websites?", answer: "SEO drives sustainable, high-intent organic traffic, reduces dependency on paid ads, and improves user experience through technical and content best practices." },
  { question: "What are keywords in SEO?", answer: "Keywords are search terms users type into search engines. Mapping relevant keywords to pages helps search engines understand content intent and rank appropriately." },
  { question: "What is keyword research?", answer: "Keyword research identifies relevant queries with search volume and intent. Use tools to find head terms and long-tail keywords that match user needs." },
  { question: "What are long-tail keywords?", answer: "Long-tail keywords are longer, specific queries with lower competition and higher conversion intent, ideal for targeted pages and blog posts." },
  { question: "What is search intent?", answer: "Search intent describes the user goal behind a query: informational, navigational, transactional, or commercial investigation. Align content to the dominant intent." },
  { question: "What is on-page SEO?", answer: "On-page SEO includes optimizing titles, meta descriptions, headings, internal links, content depth, schema, images, and Core Web Vitals elements on each page." },
  { question: "How to write SEO-friendly titles?", answer: "Place primary keywords near the start, keep 50–60 characters, reflect search intent, and use compelling value without clickbait." },
  { question: "What is a meta description?", answer: "A meta description summarizes a page in ~150–160 characters to improve CTR. Use action verbs, benefits, and relevant keywords naturally." },
  { question: "How important are H1 and headings for SEO?", answer: "Use one H1 reflecting the primary topic, followed by hierarchical H2–H3 headings. Clear structure helps crawlers and users scan content." },
  { question: "What is technical SEO?", answer: "Technical SEO ensures pages are crawlable, indexable, fast, secure, and structured using best practices such as XML sitemaps, robots rules, and schema markup." },
  { question: "How does site speed affect SEO?", answer: "Faster pages improve user experience and Core Web Vitals, which can positively impact rankings and conversions." },
  { question: "What are Core Web Vitals?", answer: "Core Web Vitals measure loading (LCP), interactivity (INP), and visual stability (CLS). Optimize images, scripts, and layout shifts to pass thresholds." },
  { question: "What is mobile-first indexing?", answer: "Google primarily uses the mobile version of content for indexing and ranking. Ensure responsive design and parity between mobile and desktop content." },
  { question: "What is crawling in SEO?", answer: "Crawling is when search engine bots discover pages by following links and sitemaps. Proper internal linking and server responses aid discovery." },
  { question: "What is indexing?", answer: "Indexing is the process of storing and organizing crawled pages. Pages can be excluded due to noindex, canonicalization, or quality issues." },
  { question: "How to submit a sitemap?", answer: "Host an XML sitemap at /sitemap.xml and reference it in robots.txt. Submit the sitemap in Google Search Console and Bing Webmaster Tools." },
  { question: "What is robots.txt?", answer: "robots.txt provides crawl directives. Allow important directories, disallow private paths, and include the sitemap URL." },
  { question: "What are canonical tags?", answer: "Canonical tags indicate the preferred URL for duplicate or similar content, consolidating signals and preventing duplicate indexing." },
  { question: "What is duplicate content?", answer: "Duplicate content is substantially similar content across URLs. Use canonicalization, redirects, or content differentiation to resolve." },
  { question: "What is schema markup?", answer: "Schema markup (structured data) helps search engines understand content types like FAQPage, Product, Article, and can enable rich results." },
  { question: "What is FAQ schema?", answer: "FAQ schema uses Question and Answer entities to represent Q&A content, improving eligibility for rich results where applicable." },
  { question: "Do FAQs help SEO?", answer: "FAQs can improve topical relevance, internal linking opportunities, and capture long-tail queries; ensure content is helpful and accurate." },
  { question: "What is E-E-A-T?", answer: "Experience, Expertise, Authoritativeness, Trustworthiness. Demonstrate real-world expertise, cite sources, and provide transparent authorship and policies." },
  { question: "How do backlinks affect SEO?", answer: "Backlinks pass authority and trust. Focus on relevant, high-quality links from authoritative sites rather than volume." },
  { question: "What is link building?", answer: "Ethical link building includes digital PR, resource pages, unlinked mentions, partnerships, and high-value content that earns references." },
  { question: "What is anchor text?", answer: "Anchor text provides context for linked pages. Keep it descriptive and natural; avoid over-optimized exact-match patterns." },
  { question: "What is internal linking?", answer: "Internal links distribute PageRank, help crawling, and connect related topics. Use descriptive anchors and ensure important pages are reachable." },
  { question: "What is a 301 redirect?", answer: "A 301 is a permanent redirect that consolidates signals to a new URL. Use for migrations, canonicalization, and content moves." },
  { question: "What is a 404 page?", answer: "A 404 indicates a page not found. Provide helpful navigation and consider redirecting to the most relevant resource when appropriate." },
  { question: "How to handle 410 vs 404?", answer: "410 means Gone (intentional removal); 404 means Not Found (unknown). Use 410 for permanently removed content you won’t replace." },
  { question: "What is sitemap index vs sitemap?", answer: "A sitemap index references multiple sitemaps for large sites. Standard sitemaps list URLs with metadata like lastmod and priority." },
  { question: "What is page experience?", answer: "Page experience covers mobile friendliness, HTTPS, safe browsing, intrusive interstitials, and Core Web Vitals." },
  { question: "How does HTTPS impact SEO?", answer: "HTTPS is a lightweight ranking signal and critical for user trust and data integrity." },
  { question: "What is crawl budget?", answer: "Crawl budget is how many URLs bots will crawl within a timeframe. Improve internal linking, fix errors, and avoid infinite spaces to optimize." },
  { question: "What is robots meta tag?", answer: "The robots meta tag controls indexing and snippet behavior (index, follow, noindex, nosnippet, max-snippet, etc.)." },
  { question: "What is an XML sitemap?", answer: "An XML sitemap lists important URLs for discovery. Keep it updated and exclude blocked or noindexed URLs." },
  { question: "How to optimize images for SEO?", answer: "Compress images, use modern formats (WebP/AVIF), set width/height, lazy-load, descriptive filenames, and alt text." },
  { question: "What is alt text?", answer: "Alt text describes images for accessibility and search. Be concise, descriptive, and avoid keyword stuffing." },
  { question: "What is structured data validation?", answer: "Use Rich Results Test and Schema.org validators to confirm syntax, coverage, and eligibility for enhancements." },
  { question: "What is JavaScript SEO?", answer: "JavaScript SEO ensures rendered content is indexable. Use server-side rendering or hydration-friendly frameworks and avoid blocking resources." },
  { question: "How to improve indexing for JS-heavy sites?", answer: "Pre-render or SSR critical content, avoid client-only routes for primary content, and ensure links are semantic anchors." },
  { question: "What is thin content?", answer: "Thin content provides little value. Expand with helpful details, visuals, examples, and clear answers to user questions." },
  { question: "What is doorway pages?", answer: "Doorway pages are low-value pages created solely to rank for variations; they harm UX and can be penalized." },
  { question: "How to avoid keyword stuffing?", answer: "Write naturally, focus on topics and entities, and use synonyms. Optimize for intent, not density percentages." },
  { question: "What are LSI keywords?", answer: "Commonly used term referring to related concepts and entities. Use semantically related phrases to improve topical coverage." },
  { question: "What is topical authority?", answer: "Topical authority is the perceived expertise on a subject area. Build clusters of comprehensive, interlinked content covering the topic." },
  { question: "What is a content cluster?", answer: "A hub-and-spoke structure with a pillar page and related subpages that interlink to build topical depth and rankings." },
  { question: "How often should I update content?", answer: "Update when information changes or performance declines. Refresh data, improve examples, and add FAQs to match evolving intent." },
  { question: "What is a canonical vs duplicate?", answer: "Canonical is the preferred page among duplicates. Set rel=canonical to the chosen URL; consolidate content when possible." },
  { question: "What is the difference between index and follow?", answer: "Index controls inclusion in SERPs; follow controls whether links on the page pass signals. Most public pages should be index, follow." },
  { question: "What is hreflang?", answer: "hreflang tags indicate language/region targeting for international SEO, helping serve the correct version to users." },
  { question: "How to do local SEO?", answer: "Optimize Google Business Profile, NAP consistency, local citations, localized content, reviews, and location pages." },
  { question: "What is page speed optimization?", answer: "Minify resources, defer non-critical JS, preload key assets, use CDN, compress images, and optimize fonts." },
  { question: "What is sitemap priority?", answer: "Priority hints relative importance but is advisory. Focus on internal linking and navigation to signal importance." },
  { question: "What is a canonical homepage URL?", answer: "Choose a single version (with or without www, trailing slash convention) and ensure consistent linking and redirects." },
  { question: "How to handle pagination for SEO?", answer: "Use clear internal links, consistent titles, and avoid thin paginated pages. Consider canonicalizing to view-all when appropriate." },
  { question: "What is faceted navigation SEO?", answer: "Facets can create infinite URLs. Use noindex, canonical, parameter handling, and server rules to prevent crawl traps." },
  { question: "What is duplicate URL parameters?", answer: "Parameters can generate duplicates. Normalize URLs, set canonical tags, and configure parameter handling in Search Console." },
  { question: "What is site architecture?", answer: "A logical, shallow structure improves crawl efficiency and user navigation. Group related content into clear categories." },
  { question: "How to measure SEO performance?", answer: "Track clicks, impressions, CTR (Search Console), sessions and conversions (Analytics), and rankings with reliable tools." },
  { question: "What is a title tag?", answer: "An HTML element that defines the page title shown in SERPs and browser tabs. Keep concise and relevant to intent." },
  { question: "How to optimize meta tags?", answer: "Use descriptive titles and meta descriptions aligned to keywords and intent; avoid duplication across URLs." },
  { question: "What is content pruning?", answer: "Remove or consolidate low-performing content to improve overall quality, crawl efficiency, and topical authority." },
  { question: "What is a sitemap for images and videos?", answer: "Specialized sitemaps provide additional metadata for images and videos, aiding discovery and rich features." },
  { question: "What is server response code 200 vs 304?", answer: "200 serves content; 304 indicates Not Modified enabling client caching and bandwidth savings." },
  { question: "Does domain age matter for SEO?", answer: "Not directly. Quality content, links, UX, and technical health outweigh domain age." },
  { question: "What is a disavow file?", answer: "A last-resort tool to signal ignoring manipulative links. Use sparingly and only when necessary." },
  { question: "What is keyword cannibalization?", answer: "Multiple pages targeting the same query compete. Consolidate or differentiate content and internal anchors." },
  { question: "What is a featured snippet?", answer: "A highlighted SERP answer box. Structure concise answers, use lists/tables, and target question-style queries." },
  { question: "How to get sitelinks?", answer: "Clear site architecture, branded queries, and structured navigation help. Google generates sitelinks automatically." },
  { question: "What is an orphan page?", answer: "A page without internal links. Add links from relevant pages and sitemaps to ensure discovery." },
  { question: "What is a sitemap lastmod?", answer: "lastmod indicates last update time. Keep accurate to help search engines prioritize recrawling." },
  { question: "What is rendering for SEO?", answer: "Ensure primary content is present in HTML or renderable by bots. Avoid requiring user interactions to reveal content." },
  { question: "What is CLS (Cumulative Layout Shift)?", answer: "CLS measures visual stability. Reserve space for images/ads, avoid injecting content above the fold after load." },
  { question: "What is LCP (Largest Contentful Paint)?", answer: "LCP measures load speed of the largest visible element. Optimize server response, images, and critical CSS." },
  { question: "What is INP (Interaction to Next Paint)?", answer: "INP measures responsiveness to user input. Reduce long tasks, optimize JS, and prioritize main-thread work." },
  { question: "Do social signals impact SEO?", answer: "Indirectly. Social exposure can drive visits and links, which can improve visibility." },
  { question: "What is duplicate title tags?", answer: "Duplicate titles confuse relevance. Make titles unique and intent-aligned for each URL." },
  { question: "How to use breadcrumbs for SEO?", answer: "Use breadcrumb schema and UI to clarify hierarchy, improve internal linking, and enhance snippets." },
  { question: "What is a sitemap for large sites?", answer: "Use a sitemap index and split sitemaps by sections to keep files under limits and updated." },
  { question: "What is canonicalization after migration?", answer: "After changing URLs, set 301s and confirm canonical tags point to the new destination until signals consolidate." },
  { question: "How to reduce bounce rate?", answer: "Match intent, improve above-the-fold clarity, speed up load, and provide next-step CTAs and internal links." },
  { question: "What is the ideal URL structure for SEO?", answer: "Short, readable, hyphen-separated slugs reflecting content topics; avoid unnecessary parameters and IDs." },
  { question: "What is image sitemap vs alt text?", answer: "Alt text supports accessibility and relevance; image sitemaps enhance discovery. Use both when possible." },
  { question: "How to audit technical SEO?", answer: "Crawl the site, check status codes, CWV, sitemaps, robots, canonicals, duplicates, structured data, and internal linking." },
  { question: "What is semantic SEO?", answer: "Semantic SEO focuses on entities, relationships, and context rather than only exact-match keywords." },
  { question: "What is passage indexing?", answer: "Google can surface relevant passages from long pages. Clear headings and focused sections improve visibility." },
  { question: "What is a redirect chain?", answer: "Multiple sequential redirects. Collapse chains to a single 301 to reduce latency and signal loss." },
  { question: "How to handle 302 vs 301 for SEO?", answer: "Use 301 for permanent moves; 302 for temporary changes. Persistent 302s may be treated as 301s, but use correctly." },
  { question: "What is a canonical to self?", answer: "Self-referencing canonicals help confirm the preferred URL and reduce duplication risks." },
  { question: "What is content freshness?", answer: "Freshness matters for time-sensitive topics. Update timestamps, data, and examples when intent requires recency." },
  { question: "How to optimize for voice search?", answer: "Use conversational questions, concise answers, schema, and fast mobile performance." },
  { question: "What is a sitemap location?", answer: "Typically /sitemap.xml. Reference it in robots.txt and submit in Search Console." },
  { question: "What is an XML vs HTML sitemap?", answer: "XML for bots; HTML for users. Both can coexist to aid discoverability and navigation." },
  { question: "How to fix crawling anomalies?", answer: "Check server logs, verify robots rules, stabilize responses, and reduce duplicate URL parameters." },
  { question: "What is soft 404?", answer: "A page returns 200 but looks like missing content. Serve 404/410 for genuine missing pages or add value." },
  { question: "How to handle international targeting?", answer: "Use hreflang, localized content, ccTLD/subfolders, and region-specific links and metadata." },
  { question: "What is a canonical for parameters?", answer: "Point parameterized URLs to a canonical without parameters if they don’t change core content." },
  { question: "What is a sitemap for news?", answer: "A news sitemap lists recent articles for Google News eligibility within the last 48 hours." },
  { question: "How to evaluate backlinks?", answer: "Assess relevance, authority, topical alignment, anchor diversity, and natural acquisition patterns." },
  { question: "What is indexing coverage report?", answer: "Search Console report showing indexed, excluded, and error pages to guide fixes." },
  { question: "What is sitewide noindex?", answer: "A robots meta or HTTP header that blocks indexing for all pages; remove immediately if accidental." },
  { question: "How to use nofollow links?", answer: "Nofollow signals not to pass PageRank. Use for untrusted, paid, or user-generated links along with sponsored/ugc attributes." },
  { question: "What is structured data for products?", answer: "Product schema adds price, availability, and rating information, enabling rich results for e-commerce." },
  { question: "What is sitemap changefreq?", answer: "Hint about update frequency. Not guaranteed to affect crawling cadence; accuracy still helps." },
  { question: "What is a robots header?", answer: "HTTP X-Robots-Tag header controls indexing at the resource level; useful for non-HTML assets." },
  { question: "What is a canonical for HTTP vs HTTPS?", answer: "Force HTTPS with redirects and use HTTPS in canonicals and sitemaps." },
  { question: "What is duplicate content across languages?", answer: "Provide translated content and map with hreflang; avoid automatic machine translations without review." },
  { question: "How to improve CTR from SERPs?", answer: "Write compelling titles/descriptions, use schema for enhancements, and match search intent tightly." },
  { question: "What is a knowledge graph entity?", answer: "Entities represent real-world things. Use structured data and consistent naming to reinforce entity understanding." },
  { question: "How to optimize headers for SEO?", answer: "Use descriptive H2/H3s with related entities and questions; avoid vague labels like 'Introduction'." },
  { question: "What is crawl delay?", answer: "A legacy directive for some bots. Use server resources wisely and scale infrastructure if needed." },
  { question: "What is a sitemap for static sites?", answer: "Generate at build time and update when URLs change. Keep URLs absolute with correct canonicalization." },
  { question: "What is log file analysis in SEO?", answer: "Analyzing server logs reveals how bots crawl your site, highlighting errors, priorities, and waste." },
  { question: "How to handle JavaScript redirects?", answer: "Prefer server-side 301s. JS redirects can be slower and less reliable for bots." },
  { question: "What is a canonical for trailing slashes?", answer: "Pick a convention and keep internal links consistent; redirect the other to reduce duplicates." },
]

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">SEO Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Actionable answers to common search engine optimization questions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((qa, i) => (
              <details key={i} className="border border-border/60 rounded-lg overflow-hidden">
                <summary className="cursor-pointer select-none px-4 py-3 font-semibold text-foreground hover:bg-muted/50">
                  {qa.question}
                </summary>
                <div className="px-4 pb-4 text-muted-foreground leading-relaxed">{qa.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


