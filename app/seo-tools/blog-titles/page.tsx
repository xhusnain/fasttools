import { BlogTitleGenerator } from "@/components/blog-title-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Blog Title Generator | Create Catchy Headlines Online",
  description:
    "Generate SEO-friendly blog titles and headlines that attract readers. Create engaging titles for your blog posts, articles, and content marketing.",
  keywords: "blog title generator, headline generator, seo titles, catchy headlines, content marketing",
  openGraph: {
    title: "Free Blog Title Generator - Create Catchy Headlines",
    description: "Generate engaging blog titles that improve click-through rates",
    type: "website",
  },
}

export default function BlogTitleGeneratorPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Blog Title Generator", href: "/seo-tools/blog-titles" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Blog Title Generator</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Generate catchy, SEO-friendly blog titles that attract readers and improve click-through rates.
            </p>
          </div>

          <AdSpace slot="content" className="mb-8 h-24" />

          <BlogTitleGenerator />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tips for Great Blog Titles</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A compelling blog title is crucial for attracting readers and improving SEO. Good titles are clear,
              specific, and promise value to the reader.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
