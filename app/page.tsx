import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
import { HeroSearchSection } from "@/components/common/hero-search-section"

import { CategoriesSkeleton } from "@/components/skeletons/categories-skeleton"
import { categories } from "@/app/data/categories-data"

import { createMetadata } from "@/lib/metadata-base"

const HomeCategories = dynamic(() => import('@/components/common/home-categories').then(mod => ({ default: mod.HomeCategories })), {
  loading: () => <CategoriesSkeleton />
})
const HomeRichContent = dynamic(() => import('@/components/common/home-rich-content').then(mod => ({ default: mod.HomeRichContent })))

export const metadata: Metadata = createMetadata({
  title: "FastTools - The #1 Free Online Tools Platform (No Signup)",
  description: "Build faster with 1000+ premium free tools. AI generators, PDF editors, and SEO analyzers. Private, secure, and instant access. Try it now.",
  path: "/",
  includeSchema: false,
})


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools Store | Digital Tools, AI Generator, Calculator, Converter & SEO Tools",
    description: "FastTools is a free online tools store offering 1000+ digital tools including AI generators, calculators, converters, SEO tools, image tools, developer tools, and productivity utilities.",
    url: "https://www.fasttools.store",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      description: "Leading provider of free online tools and utilities for productivity, conversion, and content creation"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    datePublished: "2024-01-01",
    dateModified: "2025-01-15",
    inLanguage: "en-US",
    isFamilyFriendly: "true",
    copyrightYear: new Date().getFullYear().toString(),
    copyrightHolder: {
      "@type": "Organization",
      name: "FastTools"
    },
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "General Public"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main"
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools Store",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Free Online Tools Store - Digital Tools",
          item: "https://www.fasttools.store"
        }
      ]
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fasttools.store/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    about: {
      "@type": "Thing",
      name: "Free Online Tools",
      description: "Comprehensive collection of free online tools and utilities for productivity, conversion, and content creation"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "fasttools",
      url: "https://www.fasttools.store"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What AI tools are available for free content generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our free AI tools include AI caption generator, AI lyrics generator, AI pet name generator, and QR code generator. All tools use advanced AI technology to generate high-quality content instantly without any cost."
          }
        },
        {
          "@type": "Question",
          name: "How accurate are the currency exchange rates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our currency converter provides real-time exchange rates updated every minute from reliable financial data sources. We support 160+ currencies with accurate rates for travel, business, and investment purposes."
          }
        },
        {
          "@type": "Question",
          name: "Is my data safe when using these online tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. No registration required, no data collection, and no tracking."
          }
        },
        {
          "@type": "Question",
          name: "What categories of tools are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer 10+ categories including AI Tools, Calculators, Converters, SEO Tools, Image Tools, Developer Tools, Finance Tools, Social Media Tools, and Fun Tools. Each category contains 15-50+ specialized tools."
          }
        },
        {
          "@type": "Question",
          name: "Do these tools work on mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our tools are mobile-optimized and work perfectly on smartphones, tablets, and desktop computers. Access your favorite tools anywhere, anytime without any app downloads."
          }
        }
      ]
    }
  }

  return (
    <div className="bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[85vh] flex items-center justify-center px-4 bg-background pt-12 md:pt-0">
        <PremiumHeroBackground />

        <div className="container mx-auto max-w-5xl relative z-20 py-12 lg:py-24 flex flex-col items-center text-center">

          {/* Top Badge */}


          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight mb-8">
            <span className="block mb-2">Build faster with</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 animate-gradient-x">
              premium tools.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            Access <strong className="text-foreground">1000+ free online tools</strong> for developers, designers, and creators.
            Process data locally for maximum security and speed.
          </p>

          {/* Central Search Bar & Quick Access Tags */}
          <HeroSearchSection />

        </div>
      </section>

      {/* Categories Section - Lazy Loaded */}
      <div className="relative z-10">
        <HomeCategories categories={categories} />
      </div>

      <HomeRichContent />
    </div>
  )
}
