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
    "seo tools, meta tag generator, lorem ipsum generator, hashtag generator, blog title generator, keyword density checker, content tools, seo optimization",
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
        </div>
      </div>
    </div>
  )
}
