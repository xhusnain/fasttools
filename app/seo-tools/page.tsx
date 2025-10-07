import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, FileText, Hash, Lightbulb, Search } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free SEO Tools & Content Helpers | Meta Tags, Lorem Ipsum, Hashtags",
  description:
    "Free online SEO tools and content helpers. Generate meta tags, lorem ipsum text, hashtags, blog titles, and check keyword density for better SEO optimization.",
  keywords:
    "seo tools, meta tag generator, meta tags, title tag generator, meta description generator, open graph generator, twitter card generator, schema markup generator, json-ld generator, sitemap generator, robots.txt generator, canonical url generator, hreflang generator, keyword density checker, keyword frequency analyzer, seo analyzer, on-page seo tools, technical seo tools, content optimization tools, content helpers, lorem ipsum generator, placeholder text generator, hashtag generator, hashtag ideas, hashtag finder, blog title generator, headline generator, seo headline ideas, copywriting helper, serp preview tool, search snippet preview, url slug generator, readable url generator, image alt text generator, accessibility text generator, internal linking ideas, keyword clustering, nlp keywords, long-tail keyword ideas, content brief generator, content outline generator, readability checker, flesch reading ease, seo checklist, website optimization, improve click-through rate, improve meta tags, optimize titles, optimize descriptions, seo for bloggers, seo for developers, content marketing tools, digital marketing tools, free seo tools, online seo tools, fast seo tools, web tools for seo",
  openGraph: {
    title: "Free SEO Tools & Content Helpers",
    description: "Generate meta tags, lorem ipsum, hashtags, and more with our free SEO tools",
    type: "website",
  },
}

export default function SEOToolsPage() {
  const tools = [
    {
      title: "Meta Tag Generator",
      description:
        "Generate SEO-friendly meta tags including title, description, Open Graph, and Twitter cards for better search engine visibility.",
      icon: Code,
      href: "/seo-tools/meta-tags",
    },
    {
      title: "Lorem Ipsum Generator",
      description:
        "Generate placeholder text for your designs, mockups, and prototypes. Perfect for web designers and developers.",
      icon: FileText,
      href: "/seo-tools/lorem-ipsum",
    },
    {
      title: "Hashtag Generator",
      description:
        "Generate relevant hashtags for your social media posts on Instagram, Twitter, Facebook, and LinkedIn to increase reach.",
      icon: Hash,
      href: "/seo-tools/hashtags",
    },
    {
      title: "Blog Title Generator",
      description:
        "Generate catchy, SEO-friendly blog titles and headlines that attract readers and improve click-through rates.",
      icon: Lightbulb,
      href: "/seo-tools/blog-titles",
    },
    {
      title: "Keyword Density Checker",
      description:
        "Analyze keyword density in your content to optimize for SEO. Find the most used keywords and their frequency.",
      icon: Search,
      href: "/seo-tools/keyword-density",
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">SEO Tools & Content Helpers</h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Free online SEO tools to optimize your content, generate meta tags, create placeholder text, and improve
              your search engine rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={tool.href}
                className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all">
                    <Link href={tool.href}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
            <h2 className="text-2xl font-semibold text-foreground">About Our Free SEO Tools</h2>
            <p className="text-muted-foreground">
              Our collection of free SEO tools helps marketers, bloggers, and developers optimize pages quickly. From
              generating perfect meta tags to analyzing keyword density and producing on-brand headlines, these tools
              streamline on-page optimization and content workflows.
            </p>
            <h3 className="text-xl font-semibold text-foreground">What You Can Do</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Create complete meta tags including Open Graph and Twitter Cards in seconds</li>
              <li>Analyze keyword usage to avoid over-optimization and improve readability</li>
              <li>Generate readable titles and headlines that boost CTR on search results</li>
              <li>Produce clean placeholder text and content outlines for faster prototyping</li>
              <li>Discover relevant hashtags to expand reach across social platforms</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Best Practices</h3>
            <p className="text-muted-foreground">
              Keep titles under 60 characters, write compelling meta descriptions around 150–160 characters, and use 1–2
              primary keywords naturally. Always include descriptive alt text for images, and ensure every page has a
              single canonical URL.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Popular Use Cases</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Launching a new blog post with optimized title, description, and internal links</li>
              <li>Auditing a landing page for keyword density and readability issues</li>
              <li>Preparing social share previews with accurate Open Graph data</li>
              <li>Generating content outlines and briefs for writers and stakeholders</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
