import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, FileText, Hash, Lightbulb, Search, Globe, Calculator } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free SEO Tools & Website Optimization | Meta Tags, Keyword Analysis | FastTools",
  description:
    "Professional SEO tools for website optimization. Free meta tag generator, keyword density checker, hashtag generator, blog title creator, and lorem ipsum generator. Improve search rankings and organic traffic.",
  keywords:
    "free seo tools, online seo tools, seo analyzer, website optimization, meta tag generator, keyword density checker, hashtag generator, blog title generator, lorem ipsum generator, seo checker, website seo analyzer, free keyword analyzer, meta tags generator, title tag generator, meta description generator, open graph generator, twitter card generator, schema markup generator, keyword frequency analyzer, on-page seo tools, technical seo tools, content optimization tools, seo audit tool, website speed test, mobile seo checker, local seo tools, backlink checker, seo score checker, website ranking tool, search engine optimization tools, seo analysis tool, website performance analyzer, seo testing tools, free website seo audit, seo optimization tools, digital marketing tools, content marketing tools, seo for bloggers, seo for developers, organic traffic tools, search ranking tools, seo monitoring tools, website traffic analyzer, seo reporting tools, seo dashboard, seo management tools, automated seo tools, seo workflow tools, seo productivity tools, seo collaboration tools",
  openGraph: {
    title: "Free SEO Tools & Website Optimization | Meta Tags, Keyword Analysis | FastTools",
    description: "Professional SEO tools for website optimization. Free meta tag generator, keyword density checker, hashtag generator, blog title creator, and lorem ipsum generator. Improve search rankings and organic traffic.",
    type: "website",
    url: "https://www.fasttools.store/seo-tools",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free SEO Tools - Website Optimization, Meta Tags, Keyword Analysis",
        type: "image/svg+xml",
      },
    ],
  },
  alternates: {
    canonical: "https://www.fasttools.store/seo-tools",
  },
}

export default function SEOToolsPage() {
  const tools = [
    {
      title: "Meta Tag Generator",
      description:
        "Create comprehensive meta tags with title, description, Open Graph, and Twitter card elements for enhanced search visibility.",
      icon: Code,
      href: "/seo-tools/meta-tags",
      color: "blue"
    },
    {
      title: "Lorem Ipsum Generator",
      description:
        "Create placeholder text for design mockups, prototypes, and content templates. Ideal for designers and developers.",
      icon: FileText,
      href: "/seo-tools/lorem-ipsum",
      color: "green"
    },
    {
      title: "Hashtag Generator",
      description:
        "Discover trending hashtags for social media content across Instagram, Twitter, Facebook, and LinkedIn to expand your audience reach.",
      icon: Hash,
      href: "/seo-tools/hashtags",
      color: "purple"
    },
    {
      title: "Blog Title Generator",
      description:
        "Craft compelling blog titles and headlines that capture attention and drive higher click-through rates from search results.",
      icon: Lightbulb,
      href: "/seo-tools/blog-titles",
      color: "yellow"
    },
    {
      title: "Keyword Density Checker",
      description:
        "Examine keyword distribution in your content to fine-tune SEO strategy. Identify keyword patterns and frequency for optimal content optimization.",
      icon: Search,
      href: "/seo-tools/keyword-density",
      color: "cyan"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <Code className="h-4 w-4 animate-pulse" />
                  <span>Professional SEO Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  SEO Tools & Content Helpers
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Advanced SEO utilities crafted for modern digital professionals. Our collection includes 
                  intelligent meta tag builders, content analysis tools, and social media optimizers that help 
                  elevate your online presence and drive meaningful engagement.
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">5+ Tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">Global Use</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Calculator className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">Professional</span>
                  </div>
                </div>
          </div>

              {/* Mobile/Tablet Ad - Top of Page */}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
          </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card
                    key={`seo-tools-${tool.href}`}
                    className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-fade-in-up group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="p-3 pb-1">
                      <div className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-primary/10 border border-primary/20">
                          <tool.icon className="h-4 w-4 text-primary" />
                  </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-sm md:text-base font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{tool.title}</CardTitle>
                          <CardDescription className="leading-relaxed text-[11px] md:text-xs text-muted-foreground line-clamp-2">
                    {tool.description}
                  </CardDescription>
                        </div>
                      </div>
                </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <Button asChild className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white group-hover:bg-accent group-hover:text-white">
                        <Link href={tool.href} className="flex items-center justify-center gap-1">
                      Use Tool
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

              {/* Mobile/Tablet Ad - After cards */}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
          </div>

              {/* Research and Use Cases */}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Our SEO Tool Technology</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Our tools combine intuitive interfaces with sophisticated processing engines. We validate user inputs, 
                    examine content structures, and implement specialized optimization techniques to deliver consistent, 
                    reliable results. When real-time data is required (like trending hashtags), we synchronize information 
                    across consistent timeframes to prevent erratic outputs.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Smart Processing Engine</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Meta tag creation employs smart algorithms that craft optimized titles, descriptions, and social media tags.
                    Keyword analysis utilizes advanced text examination to spot frequency trends and enhancement opportunities.
                    Hashtag discovery considers current trends and platform-specific needs automatically.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Precision-Focused Design</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our calculations employ reliable formulas, appropriate character constraints, and SEO-focused accuracy. 
                    Meta tags follow search engine standards; keyword analysis provides detailed frequency data and timestamps; 
                    and all results remain reproducible with identical inputs.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Expert Strategies and Applications</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Discover effective methods to maximize these tools' potential—whether you're creating, refining, or developing content.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Streamlined Workflow</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Leverage meta tag utilities to maintain consistent titles and descriptions throughout your website. Combine keyword 
                    analysis with content reviews when enhancing existing pages. For content strategy, utilize blog title creators to 
                    develop multiple headline options for performance testing.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Content Strategy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Develop engaging titles using clear SEO principles, then verify hashtag relevance for social platforms.
                    Lorem ipsum utilities assist in creating uniform placeholder content while keyword analysis guarantees ideal 
                    distribution without uncertainty.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Multi-Platform Optimization</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professionals can efficiently verify content optimization and social media effectiveness. Content creators can 
                    strategize across platforms using dependable meta tag and hashtag utilities. Developers can maintain content 
                    uniformity across platforms with reliable SEO tools.
                  </p>
                </div>

                {/* FAQ Section (matches calculator theme) */}
                <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Search className="h-4 w-4 text-accent" />
                    </div>
                    Common Questions About Our SEO Tools
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What makes meta tags effective for search visibility?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our meta tag builder produces optimized elements following current search engine guidelines. Effective titles stay under 60 characters, descriptions range 150-160 characters, and incorporate your target keyword naturally. The system automatically validates these criteria and suggests enhancements.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How should I balance keyword usage in content?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">While there's no universal keyword density formula, our keyword analyzer helps you discover the optimal balance. Typically, target 1-2% density for your main keyword, incorporating natural variations and related terms throughout your content. The tool precisely identifies where to adjust keyword placement for maximum effectiveness.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the optimal hashtag strategy for different platforms?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Platform-specific hashtag strategies vary significantly. Instagram permits up to 30 hashtags, though 5-10 targeted hashtags typically yield better results. Twitter performs optimally with 1-2 hashtags, while LinkedIn favors 3-5 professional hashtags. Our hashtag discovery tool helps you identify the perfect combination for each platform.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Are these tools suitable for e-commerce optimization?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Definitely! Our tools excel at e-commerce enhancement. Utilize the meta tag builder for product pages, the keyword analyzer for product descriptions, and the blog title creator for content marketing initiatives. These utilities enhance product discoverability and attract more qualified visitors.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">When should I review my content optimization?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">We suggest conducting content reviews monthly or when you observe ranking fluctuations. Employ our tools to uncover enhancement opportunities, refresh meta tags for underperforming pages, and ensure your content maintains competitiveness in search results. Consistent reviews help sustain and elevate your SEO performance continuously.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What exactly is SEO and why should I care about it?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Search Engine Optimization (SEO) is the art and science of making your website more discoverable when people search for topics related to your business. Think of it as making your website "speak" the same language as search engines like Google. When someone types "best coffee shops near me" into Google, SEO helps ensure your coffee shop appears in those results. This matters because most people never scroll past the first page of search results, so being visible there can dramatically increase your customer base. SEO isn't just about getting more visitors—it's about attracting the right visitors who are genuinely interested in what you offer. Unlike paid advertising that stops working when you stop paying, good SEO creates lasting visibility that continues working for your business around the clock.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do search engines actually decide which websites to show first?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Search engines use incredibly sophisticated systems that work like digital librarians, constantly scanning the web to understand what each page is about and how helpful it might be to someone searching. They consider hundreds of different signals, but the main ones include relevance (does your content match what someone is looking for?), authority (do other reputable sites link to yours?), user experience (do people stay on your page or bounce away quickly?), and technical quality (does your site load fast and work well on mobile devices?). It's like a restaurant review system—search engines look at multiple factors to determine if your website deserves a "five-star" ranking. The goal is always to show users the most helpful, trustworthy, and relevant results first. This is why creating genuinely useful content and ensuring your website provides a great user experience are so important for SEO success.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the difference between on-page and off-page SEO?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Think of on-page SEO as everything you can control directly on your website—it's like decorating and organizing your storefront. This includes optimizing your page titles, writing compelling meta descriptions, using proper headings, creating high-quality content, and ensuring your images have descriptive alt text. It's about making your website as clear and helpful as possible for both visitors and search engines. Off-page SEO, on the other hand, is like building your reputation in the community—it's what happens outside your website that influences how search engines view your site. This primarily involves earning backlinks from other reputable websites, getting mentioned in online publications, and building a positive online presence through social media and reviews. Both are essential: on-page SEO ensures your content is optimized, while off-page SEO builds trust and authority. It's like having a great product (on-page) and a strong reputation (off-page)—you need both to succeed.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Why does my website need to be mobile-friendly for SEO?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Mobile-friendliness is crucial because more than half of all web traffic now comes from mobile devices, and Google has shifted to "mobile-first indexing," meaning they primarily use the mobile version of your site to determine rankings. If your website doesn't work well on phones and tablets, you're essentially turning away a huge portion of potential customers. A mobile-friendly site loads quickly on smaller screens, has text that's easy to read without zooming, and has buttons and links that are easy to tap with fingers. Search engines prioritize mobile-friendly sites because they want to provide users with the best possible experience. If someone searches for your business on their phone and your site is hard to use, they'll likely leave quickly, which sends negative signals to search engines about your site's quality. Our tools help ensure your meta tags and content work perfectly across all devices, giving you the best chance of ranking well in mobile search results.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are backlinks and why do they matter so much for SEO?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Backlinks are essentially votes of confidence from other websites—when another site links to your content, it's like them saying "this is worth checking out." Search engines view backlinks as endorsements, similar to how word-of-mouth recommendations work in real life. If reputable websites in your industry link to your content, search engines assume your content must be valuable and trustworthy. However, not all backlinks are created equal. A link from a well-known industry publication carries much more weight than a link from a random blog with no authority. Quality always trumps quantity when it comes to backlinks. Search engines have become very sophisticated at detecting artificial or low-quality backlinks, so focus on earning natural links through creating genuinely useful content that others want to share. Our content optimization tools help you create the kind of high-quality content that naturally attracts these valuable backlinks, making your SEO efforts more effective and sustainable.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How long does it take to see results from SEO efforts?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">SEO is a marathon, not a sprint—it typically takes 3-6 months to see significant improvements, and sometimes up to a year for competitive keywords. This timeline exists because search engines need time to discover your content, understand its value, and adjust their rankings accordingly. Think of it like building a reputation in a new community; it takes time for people to recognize your expertise and trust your recommendations. However, some improvements can be seen sooner, such as better click-through rates from improved meta descriptions or increased time on page from better content. The key is consistency and patience. While you're waiting for rankings to improve, focus on creating valuable content, optimizing your existing pages, and building relationships in your industry. Our tools help you make the most of this waiting period by ensuring every piece of content you create is optimized for success when search engines do recognize your efforts.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the difference between local SEO and regular SEO?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Local SEO is specifically designed to help businesses appear in searches that include location-based terms, like "restaurants near me" or "dentist in downtown." While regular SEO focuses on ranking for broad, national keywords, local SEO targets customers in your specific geographic area. Local SEO involves optimizing your Google My Business profile, ensuring your business information is consistent across all online directories, collecting positive reviews, and creating location-specific content. For example, a pizza restaurant would use regular SEO to rank for "best pizza recipes" but local SEO to rank for "pizza delivery in [your city]." Local SEO is often easier to achieve results with because you're competing against fewer businesses in a smaller geographic area. Our tools help you optimize both your local presence and broader content strategy, ensuring you capture customers whether they're searching for your specific services or general topics related to your business.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I tell if my SEO is actually working?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Measuring SEO success requires tracking multiple metrics over time, not just looking at rankings. Start by monitoring your organic traffic in Google Analytics—this shows how many people find your site through search engines. Track which keywords are bringing visitors to your site and how those visitors behave once they arrive. Are they staying on your site, reading your content, and taking desired actions? Other important metrics include click-through rates from search results (how often people click on your listing when they see it), bounce rate (how quickly people leave your site), and conversion rate (how many visitors become customers). Set up Google Search Console to see exactly how your site appears in search results and identify opportunities for improvement. Remember, SEO success isn't just about ranking higher—it's about attracting the right visitors who engage with your content and become customers. Our tools help you create content that not only ranks well but also converts visitors into customers.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the biggest SEO mistakes that hurt website rankings?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The most common SEO mistakes include keyword stuffing (overusing keywords unnaturally), ignoring mobile optimization, having duplicate content across multiple pages, using generic or missing meta descriptions, and neglecting site speed. Keyword stuffing makes content unreadable and can actually hurt your rankings, while mobile-unfriendly sites lose significant traffic. Duplicate content confuses search engines about which version to rank, and poor meta descriptions reduce click-through rates from search results. Another major mistake is creating thin, low-quality content just to have more pages—search engines prefer fewer pages of high-quality content over many pages of mediocre content. Technical issues like broken links, slow loading times, and poor site structure also significantly impact rankings. Many businesses also make the mistake of focusing only on rankings without considering user experience—if people can't easily navigate your site or find what they need, they'll leave quickly, sending negative signals to search engines. Our tools help you avoid these common pitfalls by ensuring your content is optimized, unique, and user-friendly.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Should I hire an SEO expert or can I do it myself?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Whether to hire an SEO expert depends on your time, budget, and technical comfort level. If you're just starting out or have a small business, you can often handle basic SEO yourself using tools like ours, especially for on-page optimization tasks like creating meta tags, optimizing content, and improving site structure. However, SEO experts can be valuable for complex technical issues, competitive keyword research, link building strategies, and staying updated with constantly changing search engine algorithms. They also bring experience and can often achieve results faster than someone learning SEO from scratch. Consider your goals: if you're competing in a highly competitive industry or need to rank for very popular keywords, professional help might be worth the investment. For local businesses or niche markets, DIY SEO with quality tools can be very effective. The key is to start with the basics, measure your results, and scale up your efforts (or hire help) as your business grows. Our tools are designed to give you professional-level optimization capabilities without requiring extensive SEO knowledge.</p>
                    </div>
                  </div>
                  <div className="mt-6 block xl:hidden">
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
            <div className="hidden lg:block w-72">
              <div className="sticky top-32 space-y-6">
              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
              <div>
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
