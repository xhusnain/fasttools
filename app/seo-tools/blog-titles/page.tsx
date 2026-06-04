import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const BlogTitleGenerator = dynamic(
  () => import("@/components/ai/blog-title-generator").then((mod) => mod.BlogTitleGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Blog Title Generator",
  description:
    "Generate headline ideas for articles, landing pages, and campaigns with intent-focused wording and SEO-friendly structure.",
  metaTitle: "Blog Title Generator — SEO Headlines, Listicles, How-To & Guide Titles",
  metaDescription:
    "Free blog title generator. Enter a topic or keyword and get 30 headline ideas using how-to, listicle, comparison, guide, trend, problem, and beginner templates.",
  path: "/seo-tools/blog-titles",

  header: {
    title: "Blog Title Generator",
    description:
      "Generate 30 blog post title ideas from a keyword or topic, including how-to, listicle, question, comparison, guide, beginner, advanced, tool, trend, and problem-solving formats.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Blog Title Generator", href: "/seo-tools/blog-titles" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate blog and article title ideas for SEO and editorial workflows.",
    alternateName: [
      "Headline Generator",
      "SEO Title Generator",
      "Article Title Creator",
      "Listicle Title Generator",
      "How-To Title Generator",
      "Blog Post Idea Generator",
      "Content Title Brainstorm Tool",
      "Article Headline Ideas",
      "Content Headline Generator",
    ],
    featureList: [
      "Generates 30 shuffled title ideas per click",
      "Uses templates for how-to, guide, listicle, question, comparison, expert, trend, problem, benefit, case study, beginner, advanced, tools, mistakes, quick, comprehensive, practical, and innovative angles",
      "Copies individual title ideas to clipboard",
      "Works from a single keyword or topic input",
      "Useful for blog posts, article briefs, content calendars, and headline brainstorming",
      "Free and no signup required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Blog Title Generator is a free tool that creates click-worthy headline ideas for blog posts, articles, and content marketing based on your topic or keyword.",
    quickAnswer:
      "Enter your topic or main keyword and generate 30 headline ideas instantly. Review the list, copy the title you like, and edit it to match the exact search intent of your article.",
    keyTakeaways: [
      "Generates 30 title ideas from one keyword or topic",
      "Includes how-to, listicle, question, comparison, guide, and trend-style templates",
      "Copy individual titles and refine them for your target query",
      "Best titles match search intent, make a specific promise, and fit the page content",
      "Use generated ideas as drafts, not final claims you cannot support",
    ],
    overview:
      "This free blog title generator creates 30 headline ideas from a keyword or topic using a broad set of editorial templates. It helps writers and SEO teams move from a blank page to workable title options for how-to guides, listicles, comparison posts, beginner guides, advanced tutorials, trend pieces, mistake posts, tool roundups, and practical articles. Use the output as a brainstorming list, then edit the title for search intent, accuracy, length, and the real value your article provides.",

    howToSteps: [
      "Enter your primary keyword, topic, or subject matter (e.g., 'email marketing', 'React performance optimization', 'meal prep for beginners') into the generator input.",
      "Click Generate Blog Titles to create 30 shuffled title ideas from the available templates.",
      "Review the generated headline ideas and choose titles that best match your target search intent and audience expectations.",
      "Edit the title for accuracy, specificity, and length before publishing.",
      "Copy your chosen title and use it in your blog post, content brief, editorial calendar, or as an A/B test variant for underperforming existing content.",
    ],

    features: [
      "30 headline ideas per generation",
      "Template families for guides, lists, questions, comparisons, trends, mistakes, tools, and practical examples",
      "One-click copy for each generated title",
      "Fast regeneration for multiple brainstorming passes",
      "Useful for article briefs, editorial planning, content refreshes, and title testing ideas",
      "No registration required",
    ],

    useCases: [
      "Editorial calendar planning — generate headline ideas for an entire month of blog content from your keyword strategy",
      "Refreshing underperforming blog titles — create new title variants for pages with high impressions but low CTR in Google Search Console",
      "Content brief creation — define compelling H1 titles and working headlines before assigning articles to writers",
      "A/B testing article titles — generate multiple headline options to split-test in email campaigns and social media posts",
      "YouTube and video title optimization — create click-worthy video titles with numbers, questions, and curiosity-driven phrasing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Headlines Matter More Than Anything Else</h3>
          <p>
            David Ogilvy famously said: <em>&quot;On average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar.&quot;</em> In digital terms: the headline is the only piece of content most people see. It determines click-through from search results, social feeds, email previews. A great article with a weak headline gets 1/10th the traffic of a mediocre article with a strong headline. <strong>The headline is your highest-leverage content investment.</strong>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">High-Performing Headline Patterns</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Pattern</th>
                <th className="text-left py-2 px-2 text-foreground">Example</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Numbered listicle</strong></td>
                <td className="py-2 px-2">&quot;7 Proven Email Subject Lines That Get 50% Open Rates&quot;</td>
                <td className="py-2 px-2">High CTR; promises scannability</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>How-to</strong></td>
                <td className="py-2 px-2">&quot;How to Set Up Google Analytics 4 in 10 Minutes&quot;</td>
                <td className="py-2 px-2">Tutorial / instructional content</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Question</strong></td>
                <td className="py-2 px-2">&quot;Why Is My Email Open Rate Below 15%? (Diagnosis Guide)&quot;</td>
                <td className="py-2 px-2">Matches PAA queries; problem-solving</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Ultimate guide</strong></td>
                <td className="py-2 px-2">&quot;The Ultimate Guide to Cold Email (40+ Templates)&quot;</td>
                <td className="py-2 px-2">Long-form authority content</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Comparison / vs</strong></td>
                <td className="py-2 px-2">&quot;Mailchimp vs ConvertKit: Which Is Right for Your Business?&quot;</td>
                <td className="py-2 px-2">Commercial-intent / decision queries</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Case study</strong></td>
                <td className="py-2 px-2">&quot;How We Grew Our Newsletter from 0 to 10K in 6 Months&quot;</td>
                <td className="py-2 px-2">Authority + curiosity gap</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Mistake / warning</strong></td>
                <td className="py-2 px-2">&quot;5 SEO Mistakes That Are Killing Your Rankings (And How to Fix Them)&quot;</td>
                <td className="py-2 px-2">Fear-driven; outperforms positive framings</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Contrarian</strong></td>
                <td className="py-2 px-2">&quot;Why Email Marketing Is Better Than Ever&quot;</td>
                <td className="py-2 px-2">Pattern interrupt; thought leadership</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Data-driven</strong></td>
                <td className="py-2 px-2">&quot;We Analyzed 10,000 Email Subject Lines. Here&apos;s What Works.&quot;</td>
                <td className="py-2 px-2">Research-backed authority</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong>Personal story</strong></td>
                <td className="py-2 px-2">&quot;I Sent 1,000 Cold Emails. Here&apos;s What I Learned.&quot;</td>
                <td className="py-2 px-2">Engaging narrative; high shareability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Headline Quality Checklist</h3>
          <p>A generated title is a draft. Before publishing, check whether it passes these editorial tests:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Intent match:</strong> the title should fit what the searcher wants to do or learn.</li>
            <li><strong>Specificity:</strong> replace vague promises with clear scope, examples, audience, or outcome.</li>
            <li><strong>Accuracy:</strong> do not promise data, templates, tools, or case studies the article does not contain.</li>
            <li><strong>Readable length:</strong> keep the most important words near the front so truncation does not hide the point.</li>
            <li><strong>Natural language:</strong> avoid keyword stuffing and awkward repeated phrases.</li>
            <li><strong>Freshness:</strong> use a year only when the article is genuinely maintained for that year.</li>
            <li><strong>Brand fit:</strong> match the tone of the site and audience instead of chasing generic clickbait.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Title Optimization for Google SERP</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Length:</strong> 50-60 characters or ~580 pixels wide. Anything longer truncates with &quot;...&quot;</li>
            <li><strong>Front-load the primary keyword:</strong> Google weights early words more heavily. &quot;Email Marketing Guide&quot; → put &quot;Email Marketing&quot; first.</li>
            <li><strong>Match search intent precisely:</strong> a query for &quot;email marketing software&quot; needs a title focused on tools, not strategy.</li>
            <li><strong>Brand in title (optional):</strong> append &quot;| Your Brand&quot; for brand awareness — but watch character budget.</li>
            <li><strong>Title ≠ H1 always:</strong> the meta title (in <code>&lt;title&gt;</code>) is for SERP; the H1 is for on-page. They can differ if the SERP-optimized version is too short for clarity on the page.</li>
            <li><strong>Avoid clickbait:</strong> Google&apos;s helpful content update penalizes content that doesn&apos;t deliver on the title&apos;s promise.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Headline Mistakes</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vague intrigue:</strong> &quot;You Won&apos;t Believe What Happened Next&quot; — feels spammy and gets low CTR with sophisticated audiences</li>
            <li><strong>Generic terms:</strong> &quot;Email Marketing Tips&quot; — competes against millions; be specific</li>
            <li><strong>Keyword stuffing:</strong> &quot;Email Marketing | Best Email Marketing Software for Email Marketing&quot;</li>
            <li><strong>Misleading promises:</strong> if the title says &quot;10 tips&quot; but content has 3, you&apos;ll lose trust and SEO ranking</li>
            <li><strong>Front-loading branded terms:</strong> only do this if your brand is searched for itself; otherwise prioritize keywords</li>
            <li><strong>All caps (most platforms):</strong> reads as SHOUTING; tolerated only on YouTube where it&apos;s normalized</li>
            <li><strong>Special character abuse:</strong> 🔥💯⚡️ emojis work in moderation; overuse looks desperate</li>
            <li><strong>Tense / number agreement:</strong> &quot;5 Tips For Improving Your SEO&quot; vs &quot;5 Tip For Improve Your SEO&quot; — proofread!</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Optimal Title Length Reference</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Google SERP:</strong> 50-60 characters</li>
            <li><strong>Bing SERP:</strong> 60-65 characters</li>
            <li><strong>YouTube title:</strong> 60 characters before mobile truncation</li>
            <li><strong>Twitter/X share card:</strong> 60-70 characters</li>
            <li><strong>LinkedIn share card:</strong> 90 characters</li>
            <li><strong>Email subject line (mobile):</strong> 30-40 characters before truncation</li>
            <li><strong>Pinterest pin title:</strong> 100 characters max</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Generate 10-20 headline options, then score each against three criteria: (1) Does the primary keyword appear in the first 30 characters? (2) Does the title accurately match the search intent behind your target query? (3) Is the total length under 60 characters for full Google SERP display? After publishing, monitor impressions vs. clicks in Google Search Console — if a page has high impressions but CTR below 3%, A/B test a new title variant before rewriting the entire article.",

    faqs: [
      {
        question: "What makes a good SEO blog title that ranks and gets clicks?",
        answer:
          "An effective SEO blog title includes the primary keyword front-loaded in the first 30 characters, stays under 60 characters total for full Google SERP display, accurately matches the search intent of the target query, uses power words or numbers to trigger emotional engagement, and makes a clear promise about the content value. The title should be specific (e.g., '7 Proven Email Subject Line Formulas' vs. 'Email Tips') and avoid vague or clickbait phrasing that increases bounce rate.",
      },
      {
        question: "How long should a blog post title be for SEO?",
        answer:
          "Keep blog titles under 60 characters (approximately 580 pixels wide) for full display in Google search results. Titles exceeding this length are truncated with ellipsis, potentially cutting off keywords and compelling phrasing. For social media sharing, titles under 70 characters perform best. The ideal range for both SEO and engagement is 6-13 words or 50-60 characters.",
      },
      {
        question: "Should I put my target keyword at the beginning of the blog title?",
        answer:
          "Yes, front-loading your primary keyword is an SEO best practice. Placing the keyword in the first 30 characters ensures it remains visible even if the title gets truncated in SERPs. It also signals strong topical relevance to search engines. Example: 'React Performance: 10 Optimization Tips' front-loads 'React Performance' rather than burying it at the end.",
      },
      {
        question: "Do numbers in blog titles really increase click-through rate?",
        answer:
          "Numbers can help when they set clear expectations, such as '7 examples' or '10 steps.' They are not a magic ranking factor. Use a number only when the article actually contains that many items and the list format matches the search intent.",
      },
      {
        question: "How do I improve blog post click-through rate (CTR) with better titles?",
        answer:
          "Check Google Search Console for pages with high impressions but CTR below 3-5%. Generate new title variants using this tool, focusing on stronger power words, more specific numbers, clearer intent matching, and better keyword positioning. Update the title tag and H1, then monitor CTR changes over 2-4 weeks. This is often the highest-ROI SEO tactic — improving CTR without changing rankings directly increases organic traffic.",
      },
      {
        question: "Can I use this generator for email subject lines and YouTube video titles?",
        answer:
          "Yes. The headline formulas (question-based, numbered lists, how-to, comparison) work across content formats. For email subject lines, prefer titles under 50 characters for mobile display. For YouTube titles, front-load keywords and keep under 70 characters. For social media posts, use curiosity-driven and emotional phrasing. The generator produces versatile headlines adaptable to any platform.",
      },
      {
        question: "Is this blog title generator free?",
        answer:
          "Yes. It is free to use without signup. Enter a topic, generate 30 headline ideas, and copy any title you want to refine.",
      },
    ],

    additionalContent: [
      {
        heading: "Editorial Workflow Tip",
        content:
          "Use generated headlines at the outline stage, not just after writing. Early title testing helps shape stronger structure and intent alignment from the start.",
      },
      {
        heading: "Performance Review Loop",
        content:
          "After publishing, monitor impressions and CTR in Search Console. If a page underperforms, test a clearer title variant before rewriting the full article.",
      },
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BlogTitleGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<BlogTitleGenerator />)} />
}
