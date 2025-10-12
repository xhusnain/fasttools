import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Search, TrendingUp, BookOpen } from "lucide-react"


export default function SEOToolsGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete SEO Tools Guide",
    description: "Master SEO with our comprehensive guide to free SEO tools. Learn about keyword research, meta tags, content optimization, and use our free SEO tools for better rankings.",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://fasttools.store/guides/seo-tools-guide"
    },
    image: {
      "@type": "ImageObject",
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete SEO Tools Guide
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Master SEO with our comprehensive guide to free SEO tools. Learn about keyword research, 
            meta tags, content optimization, and use our free SEO tools for better rankings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>125,000+ readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <Link href="#what-is-seo" className="block text-primary hover:underline">
                1. What is SEO?
              </Link>
              <Link href="#essential-seo-tools" className="block text-primary hover:underline">
                2. Essential SEO Tools
              </Link>
              <Link href="#keyword-research" className="block text-primary hover:underline">
                3. Keyword Research
              </Link>
              <Link href="#on-page-seo" className="block text-primary hover:underline">
                4. On-Page SEO
              </Link>
              <Link href="#technical-seo" className="block text-primary hover:underline">
                5. Technical SEO
              </Link>
              <Link href="#content-optimization" className="block text-primary hover:underline">
                6. Content Optimization
              </Link>
              <Link href="#link-building" className="block text-primary hover:underline">
                7. Link Building
              </Link>
              <Link href="#seo-best-practices" className="block text-primary hover:underline">
                8. SEO Best Practices
              </Link>
            </nav>
          </CardContent>
        </Card>

        
        {/* Official Documentation References */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                <BookOpen className="h-5 w-5" />
                Official Documentation References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-700 dark:text-green-300 mb-4">
                These official sources provide authoritative information about seo tools:
              </p>
              <div className="space-y-3">
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://developers.google.com/search/docs" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Google Search Central Documentation
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Google - Official SEO guidelines and search engine optimization standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/WAI/standards-guidelines/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      W3C Web Accessibility Guidelines
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Official web accessibility standards and guidelines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://schema.org/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      Schema.org Structured Data
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Schema.org - Official structured data markup standards for SEO
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.ietf.org/rfc/rfc3986.txt" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      RFC 3986 - URI Generic Syntax
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Internet Engineering Task Force - Official URL and URI standards
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <a href="https://www.w3.org/TR/html5/" className="text-sm font-medium text-green-800 dark:text-green-200 hover:underline">
                      HTML5 Specification
                    </a>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      World Wide Web Consortium - Official HTML5 standards and semantic markup guidelines
                    </p>
                  </div>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </div>

{/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: What is SEO */}
          <section id="what-is-seo" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is SEO?</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Search Engine Optimization (SEO) is the practice of optimizing websites to improve their visibility 
              and ranking in search engine results pages (SERPs). It involves various techniques and strategies 
              to make your content more discoverable and relevant to search engines and users.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key SEO Components:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>On-Page SEO:</strong> Optimizing individual pages for search engines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Technical SEO:</strong> Website infrastructure and performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Content SEO:</strong> Creating valuable, relevant content for users</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Link Building:</strong> Acquiring high-quality backlinks from other websites</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              SEO is essential for digital marketing success, helping businesses increase organic traffic, 
              improve user experience, and build authority in their industry. With the right tools and strategies, 
              you can significantly improve your website's search engine rankings.
            </p>
          </section>

          {/* Section 2: Essential SEO Tools */}
          <section id="essential-seo-tools" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Essential SEO Tools</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-500" />
                    Keyword Research Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Discover the best keywords for your content and understand search volume, competition, and trends.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Google Keyword Planner</li>
                    <li>• Ubersuggest</li>
                    <li>• Answer The Public</li>
                    <li>• Google Trends</li>
                    <li>• Keyword density checker</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Meta Tag Generators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create optimized meta tags, titles, and descriptions for better search engine visibility.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Meta tag generator</li>
                    <li>• Title tag optimizer</li>
                    <li>• Description generator</li>
                    <li>• Open Graph tags</li>
                    <li>• Twitter cards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    Content Analysis Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Analyze your content for SEO optimization and identify areas for improvement.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Keyword density checker</li>
                    <li>• Content analyzer</li>
                    <li>• Readability checker</li>
                    <li>• Plagiarism detector</li>
                    <li>• Content gap analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    Technical SEO Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Monitor and optimize your website's technical performance for better search rankings.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Site speed analyzer</li>
                    <li>• Mobile-friendly test</li>
                    <li>• SSL checker</li>
                    <li>• Sitemap generator</li>
                    <li>• Robots.txt generator</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Keyword Research */}
          <section id="keyword-research" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Keyword Research</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Step-by-Step Keyword Research</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Brainstorm Seed Keywords</h4>
                    <p className="text-muted-foreground">Start with broad terms related to your business or content.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Use Keyword Tools</h4>
                    <p className="text-muted-foreground">Research search volume, competition, and related keywords.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Analyze Competitors</h4>
                    <p className="text-muted-foreground">See what keywords your competitors are targeting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Select Target Keywords</h4>
                    <p className="text-muted-foreground">Choose keywords with good search volume and manageable competition.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/seo-tools/keyword-density" className="flex items-center gap-2">
                  Try Our Keyword Density Checker
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* Section 4: On-Page SEO */}
          <section id="on-page-seo" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">On-Page SEO</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Title Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Title tags are crucial for SEO and should be optimized for both search engines and users:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Length:</strong> Keep between 50-60 characters</li>
                      <li>• <strong>Keywords:</strong> Include primary keyword near the beginning</li>
                      <li>• <strong>Branding:</strong> Include your brand name when relevant</li>
                      <li>• <strong>Uniqueness:</strong> Each page should have a unique title</li>
                      <li>• <strong>Readability:</strong> Make it compelling for users to click</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meta Descriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Meta descriptions provide a summary of your page content:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Length:</strong> Keep between 150-160 characters</li>
                      <li>• <strong>Keywords:</strong> Include relevant keywords naturally</li>
                      <li>• <strong>Call-to-Action:</strong> Encourage users to click</li>
                      <li>• <strong>Uniqueness:</strong> Each page should have a unique description</li>
                      <li>• <strong>Relevance:</strong> Accurately describe the page content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Header Tags (H1, H2, H3)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Proper header structure helps search engines understand your content:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>H1:</strong> One per page, include primary keyword</li>
                      <li>• <strong>H2:</strong> Main section headings, include secondary keywords</li>
                      <li>• <strong>H3:</strong> Subsection headings for better organization</li>
                      <li>• <strong>Hierarchy:</strong> Use headers in logical order (H1 → H2 → H3)</li>
                      <li>• <strong>Keywords:</strong> Include relevant keywords in headers</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Technical SEO */}
          <section id="technical-seo" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Technical SEO</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Site Speed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Page loading speed is a crucial ranking factor. Optimize your site for speed:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Optimize images (WebP, compression)</li>
                    <li>• Minimize CSS and JavaScript</li>
                    <li>• Use a Content Delivery Network (CDN)</li>
                    <li>• Enable browser caching</li>
                    <li>• Choose a fast hosting provider</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mobile Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    With mobile-first indexing, your site must be mobile-friendly:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Responsive design</li>
                    <li>• Touch-friendly buttons</li>
                    <li>• Fast mobile loading</li>
                    <li>• Readable text without zooming</li>
                    <li>• Easy navigation on mobile</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SSL Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    HTTPS is essential for security and SEO:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Encrypts data transmission</li>
                    <li>• Builds user trust</li>
                    <li>• Required for many features</li>
                    <li>• Google ranking factor</li>
                    <li>• Prevents security warnings</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>XML Sitemap</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Help search engines discover and index your pages:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Submit to Google Search Console</li>
                    <li>• Include all important pages</li>
                    <li>• Update regularly</li>
                    <li>• Use proper XML format</li>
                    <li>• Include last modification dates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 6: Content Optimization */}
          <section id="content-optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Content Optimization</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Content Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Write for users first</strong> - Create valuable, engaging content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Use keywords naturally</strong> - Avoid keyword stuffing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Include internal links</strong> - Connect related content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Add images with alt text</strong> - Improve accessibility and SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Update content regularly</strong> - Keep information fresh and relevant</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">Well-structured content is easier for search engines to understand:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Clear headings:</strong> Use H1, H2, H3 tags properly</li>
                      <li>• <strong>Short paragraphs:</strong> Keep paragraphs concise and readable</li>
                      <li>• <strong>Bullet points:</strong> Use lists for easy scanning</li>
                      <li>• <strong>White space:</strong> Include adequate spacing between sections</li>
                      <li>• <strong>Logical flow:</strong> Organize content in a logical sequence</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Link Building */}
          <section id="link-building" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Link Building</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Internal Linking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Connect pages within your website to improve user experience and SEO:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Link to related content</li>
                    <li>• Use descriptive anchor text</li>
                    <li>• Create topic clusters</li>
                    <li>• Link to important pages</li>
                    <li>• Use contextual links</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>External Linking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Link to authoritative external sources to provide value to users:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Link to credible sources</li>
                    <li>• Use nofollow for paid links</li>
                    <li>• Open links in new tabs</li>
                    <li>• Link to relevant content</li>
                    <li>• Provide context for links</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backlink Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Acquire high-quality backlinks from other websites:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Guest posting</li>
                    <li>• Resource page inclusion</li>
                    <li>• Broken link building</li>
                    <li>• Content marketing</li>
                    <li>• Digital PR</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Link Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Focus on quality over quantity when building links:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• High domain authority</li>
                    <li>• Relevant to your niche</li>
                    <li>• Natural anchor text</li>
                    <li>• Editorial placement</li>
                    <li>• Avoid spammy links</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: SEO Best Practices */}
          <section id="seo-best-practices" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">SEO Best Practices</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">✅ Do's</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Create valuable content</strong> that answers user questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Optimize for mobile</strong> - Most searches are mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Use HTTPS</strong> - Essential for security and SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Monitor performance</strong> - Track rankings and traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Build authority</strong> - Focus on E-A-T (Expertise, Authoritativeness, Trustworthiness)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">❌ Don'ts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span><strong>Don't keyword stuff</strong> - Use keywords naturally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span><strong>Don't buy links</strong> - Focus on earning quality backlinks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span><strong>Don't ignore user experience</strong> - UX is a ranking factor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span><strong>Don't create duplicate content</strong> - Each page should be unique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span>
                      <span><strong>Don't ignore technical SEO</strong> - Fix crawl errors and improve site speed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Optimize Your SEO?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Use our free SEO tools to improve your website's search engine rankings. 
              Generate meta tags, check keyword density, and optimize your content for better visibility.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/seo-tools" className="flex items-center gap-2">
                Try Our SEO Tools
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Related Tools */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Related Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Meta Tag Generator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate optimized meta tags, titles, and descriptions for your web pages.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/seo-tools/meta-tags">Try Meta Tag Generator</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Hashtag Generator</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate relevant hashtags for your social media posts to increase reach and engagement.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/seo-tools/hashtags">Try Hashtag Generator</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
