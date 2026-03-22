import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
import { HeroSearchSection } from "@/components/common/hero-search-section"

import { CategoriesSkeleton } from "@/components/skeletons/categories-skeleton"
import { categories } from "@/app/data/categories-data"

import { createMetadata } from "@/lib/metadata-base"
import { SquareAd } from "@/components/ads/square-ad"

const HomeCategories = dynamic(() => import('@/components/common/home-categories').then(mod => ({ default: mod.HomeCategories })), {
  loading: () => <CategoriesSkeleton />
})
const HomeRichContent = dynamic(() => import('@/components/common/home-rich-content').then(mod => ({ default: mod.HomeRichContent })))

export const metadata: Metadata = createMetadata({
  title: "FastTools - Free Online Tools | Calculators, Converters, Developer Tools",
  description: "Free online tools: calculators, converters, developer tools, SEO tools, image tools & more. No signup, instant results. All tools run locally in your browser.",
  path: "/",
  includeSchema: false,
})



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - The First WebMCP AI-Agent Ready Free Online Tools Platform",
    description: "FastTools is the world's first WebMCP-enabled tools platform. all free online tools — calculators, converters, crypto, PDF, developer tools — all fully interactable by AI agents via the Web Model Context Protocol.",
    url: "https://www.fasttools.store",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      description: "The world's first WebMCP-enabled free online tools platform. AI agents can discover, fill, and use all all tools automatically."
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: "en-US",
    isFamilyFriendly: true,
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
        }
      ]
    },
    about: {
      "@type": "Thing",
      name: "WebMCP-Enabled Free Online Tools",
      description: "The first tools platform with full Web Model Context Protocol (WebMCP) support. AI agents can discover, interact with, and read results from all all tools automatically — no manual integration needed."
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
          name: "What is WebMCP and how does FastTools use it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WebMCP (Web Model Context Protocol) is a browser standard that lets AI agents interact with web tools programmatically. FastTools is the world's first platform to fully implement WebMCP — AI agents can discover all all tools via API, navigate to any tool page, fill inputs (including Radix UI selects, switches, and toggles), click action buttons, and read structured results. Every tool works automatically without manual integration."
          }
        },
        {
          "@type": "Question",
          name: "How can AI agents use FastTools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agents follow a 4-step workflow: 1) Discover tools via GET /api/webmcp/tools which returns all all tools with input schemas. 2) Navigate to the tool page. 3) Call __describe to discover form fields, then __fill to populate inputs. 4) Call __click to trigger calculations and __results to read output. Realtime tools like temperature converter skip the click step entirely. The entire process works without modifying any individual tool component."
          }
        },
        {
          "@type": "Question",
          name: "What AI tools are available for free content generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our free AI tools include AI caption generator, AI lyrics generator, AI pet name generator, and QR code generator. All tools use advanced AI technology to generate high-quality content instantly without any cost. Every AI tool is WebMCP-enabled, so AI agents can also use them programmatically."
          }
        },
        {
          "@type": "Question",
          name: "Is my data safe when using these online tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. No registration required, no data collection, and no tracking. WebMCP interactions also happen entirely client-side — the AI agent interacts with the DOM in your browser, not with any server."
          }
        },
        {
          "@type": "Question",
          name: "What categories of tools are available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer 10+ categories including AI Tools, Calculators, Converters, Crypto Tools, SEO Tools, Image Tools, Developer Tools, Finance Tools, Social Media Tools, PDF Tools, and Fun Tools. All all tools across every category are WebMCP-enabled and work on mobile, tablet, and desktop."
          }
        },
        {
          "@type": "Question",
          name: "What types of tools can AI agents interact with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agents can interact with button-click tools (BMI calculator, loan calculator), realtime tools (temperature converter, hash generator), generator tools (UUID, token, RSA key generators), and API-dependent tools (currency converter, YouTube tags extractor). File-upload tools like PDF compressor require manual user interaction. Each tool's interaction mode is exposed in the discovery API."
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
            <span className="block mb-2">Every Free Online</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 animate-gradient-x">
              Tools, Instantly.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            Free calculators, converters, developer tools, SEO tools & more.
            No signup required. <strong className="text-foreground">Private, secure, instant results</strong> — all processing happens in your browser.
          </p>

          {/* Central Search Bar & Quick Access Tags */}
          <HeroSearchSection />

        </div>
      </section>

      {/* Categories Section - Lazy Loaded */}
      <div className="relative z-10">
        <HomeCategories categories={categories} />
      </div>

      {/* Ad between categories and content */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <SquareAd />
      </div>

      <HomeRichContent />

    </div>
  )
}
