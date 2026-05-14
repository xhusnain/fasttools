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
  title: "FastTools - 200+ Free Online Tools | Calculators, Converters, PDF & AI Tools",
  description: "200+ free online tools: calculators, converters, PDF tools, AI generators, developer utilities & more. No signup, no uploads. Everything runs in your browser — private, fast, unlimited.",
  path: "/",
  includeSchema: false,
})



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - 200+ Free Online Tools | Calculators, Converters, PDF & AI Tools",
    description: "200+ free online tools — calculators, converters, PDF tools, AI generators, developer utilities & more. No signup, no uploads. Everything runs in your browser.",
    url: "https://www.fasttools.store",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      description: "Free online tools platform with 200+ calculators, converters, PDF tools, AI generators and developer utilities. All tools run locally in your browser."
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
      name: "Free Online Tools",
      description: "A collection of 200+ free browser-based tools including calculators, unit converters, PDF editors, AI content generators, developer utilities, and SEO analyzers."
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are all FastTools really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, every tool on FastTools is 100% free with no hidden costs, no \"Pro\" tier, and no credit card required. All 200+ tools — including PDF compressor, AI generators, calculators, and converters — are completely free to use with no usage limits."
          }
        },
        {
          "@type": "Question",
          name: "Do I need to create an account to use these tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. FastTools requires no signup, no login, and no email. Just open any tool and start using it immediately. There are no accounts, no subscriptions, and no registration walls."
          }
        },
        {
          "@type": "Question",
          name: "Is my data stored on your servers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. FastTools processes everything locally in your browser. Your files, text, and calculations never leave your device. We don't log inputs, store results, or track usage. When you close the tab, your data is gone."
          }
        },
        {
          "@type": "Question",
          name: "What types of tools does FastTools offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FastTools offers 200+ tools across 12 categories: Calculators (BMI, age, loan, GPA), Converters (currency, temperature, JSON/YAML), PDF Tools (compress, split, merge, sign), AI Tools (QR generator, caption generator, text detector), Developer Tools (JWT decoder, regex tester, JSON diff), Social Media Tools (Instagram DP viewer, YouTube channel checker), Finance Tools (tax, mortgage, tip calculator), and more."
          }
        },
        {
          "@type": "Question",
          name: "Can I use FastTools on my phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every tool is fully responsive and works on mobile phones, tablets, and desktop browsers. No app download needed — just visit fasttools.store in any modern browser."
          }
        },
        {
          "@type": "Question",
          name: "What is the best free PDF compressor online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FastTools offers a free PDF compressor that reduces file size directly in your browser. Unlike other tools, it doesn't upload your PDF to any server — compression happens locally on your device, making it faster and more private. It supports files up to 100MB with no daily limits."
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


          {/* Tool Count Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            200+ Free Tools — No Signup Required
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight mb-8">
            <span className="block mb-2">Free Online Tools</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 animate-gradient-x">
              Calculators, Converters & More
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            PDF tools, AI generators, developer utilities, finance calculators & SEO tools.
            <strong className="text-foreground"> 100% free, private & instant</strong> — everything runs in your browser, nothing uploaded.
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
