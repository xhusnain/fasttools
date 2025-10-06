import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About FastTools - Free Online Tools & Calculators for Everyone",
  description: "Learn about FastTools and our mission to provide 50+ free, easy-to-use online tools including age calculator, BMI calculator, loan calculator, and more. No registration required.",
  keywords: [
    "about toolifyhub",
    "free online tools",
    "online calculators",
    "age calculator",
    "BMI calculator", 
    "loan calculator",
    "mission",
    "values",
    "company"
  ],
  openGraph: {
    title: "About FastTools - Free Online Tools & Calculators",
    description: "Learn about FastTools and our mission to provide 50+ free, easy-to-use online tools for everyone.",
    type: "website",
    url: "https://fasttools.store/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FastTools - Free Online Tools",
    description: "Learn about FastTools and our mission to provide free, easy-to-use online tools for everyone.",
  },
  alternates: {
    canonical: "https://fasttools.store/about",
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About FastTools",
    description: "Learn about FastTools and our mission to provide free, easy-to-use online tools for everyone.",
    url: "https://fasttools.store/about",
    mainEntity: {
      "@type": "Organization",
      name: "fasttools.store",
      description: "Free online tools and calculators for everyone. Access 50+ free tools including age calculator, BMI calculator, loan calculator, and more.",
      url: "https://fasttools.store",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hello@fasttools.store"
      }
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://fasttools.store/about"
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About fasttools.store</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We're on a mission to make everyday tasks easier with free, powerful online tools.
          </p>
        </div>

        <div className="prose prose-slate max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            fasttools.store was created with a simple goal: to provide everyone with access to high-quality, free online
            tools that make life easier. We believe that useful tools shouldn't be locked behind paywalls or complicated
            interfaces.
          </p>

          <p className="text-lg leading-relaxed">
            Our tools are designed to be fast, accurate, and incredibly easy to use. Whether you're calculating your
            age, converting units, or performing any other common task, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide free, accessible tools that help people accomplish everyday tasks quickly and easily.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Simplicity, accessibility, and quality. We believe great tools should be available to everyone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Fast, accurate, and user-friendly. Every tool is optimized for speed and ease of use.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  )
}
