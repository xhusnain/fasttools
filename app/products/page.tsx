import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Calculator,
  Sparkles,
  Wrench,
  Code,
  Image,
  FileText,
  Search,
  Globe,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Products - FastTools | All Free Online Tools Categories",
  description: "Explore all FastTools product categories including calculators, AI tools, converters, developer tools, image tools, PDF tools, SEO tools, and social media tools.",
  keywords: [
    "fasttools products",
    "online tools categories",
    "free tools collection",
    "digital tools categories",
    "productivity tools",
    "AI tools",
    "calculator tools",
    "converter tools",
    "developer tools",
    "image tools",
    "PDF tools",
    "SEO tools",
    "social media tools"
  ],
  openGraph: {
    title: "Products - FastTools | All Free Online Tools Categories",
    description: "Explore all FastTools product categories including calculators, AI tools, converters, developer tools, image tools, PDF tools, SEO tools, and social media tools.",
    type: "website",
    url: "https://www.fasttools.store/products",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/banner.png",
        width: 1200,
        height: 630,
        alt: "FastTools Products - All Tool Categories",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - FastTools | All Free Online Tools Categories",
    description: "Explore all FastTools product categories including calculators, AI tools, converters, developer tools, image tools, PDF tools, SEO tools, and social media tools.",
    images: ["https://www.fasttools.store/banner.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/products",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const categories = [
  {
    id: "calculators",
    name: "Professional Calculators",
    description: "Accurate calculators for finance, health, business, and personal use",
    icon: Calculator,
    href: "/calculator",
  },
  {
    id: "ai-tools",
    name: "AI-Powered Tools",
    description: "Intelligent tools powered by artificial intelligence",
    icon: Sparkles,
    href: "/ai-tools",
  },
  {
    id: "converters",
    name: "Smart Converters",
    description: "Convert between units, formats, and currencies instantly",
    icon: Wrench,
    href: "/converters",
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    description: "Professional tools for developers and designers",
    icon: Code,
    href: "/dev-tools",
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Professional image editing powered by AI",
    icon: Image,
    href: "/image-tools",
  },
  {
    id: "pdf-tools",
    name: "PDF Tools",
    description: "Complete PDF management solution",
    icon: FileText,
    href: "/pdf-tools",
  },
  {
    id: "seo-tools",
    name: "SEO Tools",
    description: "Optimize content for search engines",
    icon: Search,
    href: "/seo-tools",
  },
  {
    id: "social-media",
    name: "Social Media Tools",
    description: "Powerful social media management tools",
    icon: Globe,
    href: "/social-media-tools",
  },
]

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FastTools Products - All Tool Categories",
    description: "Complete collection of free online tools organized by category",
    url: "https://www.fasttools.store/products",
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      description: category.description,
      url: `https://www.fasttools.store${category.href}`
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Our Products"
                description="Explore our complete collection of free online tools organized by category. From calculators to AI generators, we have everything you need."
                titleSize="large"
                descriptionSize="medium"
                color="orange"
              />
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="bg-black border border-orange-500/40 rounded-xl p-6 hover:border-orange-500/70 transition-all duration-300 group relative h-full flex flex-col"
                  >
                    {/* Icon in top-right */}
                    <div className="absolute top-4 right-4">
                      <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-orange-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pr-12 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-green-500 mb-3 group-hover:text-green-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-orange-500 group-hover:text-orange-400 transition-colors">
                        <span className="text-sm font-bold">Try Now</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* More Coming Soon Section */}
            <div className="mt-16 md:mt-20 p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">More Coming Soon</h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                  We're constantly adding new tools to help you be more productive. If you need a tool that's not available, please email us and we'll make it for you.
                </p>
                <a
                  href="mailto:fasttools.store@outlook.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

