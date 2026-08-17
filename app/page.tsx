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
  title: "FastTools — Free Instagram DP Viewer, YouTube Tools & Online Utilities",
  description: "Free online tools with no signup: Instagram DP viewer & Insta Zoom, YouTube channel name checker, thumbnail downloader, image converters, regex testers & more. Private, fast, unlimited.",
  path: "/",
  includeSchema: false,
})



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools — Free Instagram DP Viewer, YouTube Tools & Online Utilities",
    description: "Free online tools with no signup: Instagram DP viewer & Insta Zoom, YouTube channel name checker, thumbnail downloader, image converters & more. Everything runs in your browser.",
    url: "https://fasttools.store",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store",
      description: "Free online tools platform focused on Instagram and YouTube utilities, image converters, and developer tools. All tools run locally in your browser."
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    // Real last-content-change date. Never stamp new Date() here: it told
    // Google the homepage was "modified today" on every crawl (fake freshness).
    dateModified: "2026-08-17",
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
          item: "https://fasttools.store"
        }
      ]
    },
    about: {
      "@type": "Thing",
      name: "Free Online Tools",
      description: "Free browser-based tools: Instagram DP viewer and Insta Zoom, YouTube channel checker and thumbnail downloader, image format converters, crypto generators, and regex testers."
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are all FastTools really free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, every tool on FastTools is 100% free with no hidden costs, no \"Pro\" tier, and no credit card required. Every tool — including the Instagram DP viewer, YouTube name checker, and image converters — is completely free to use with no usage limits."
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
            text: "FastTools focuses on Social Media Tools (Instagram DP viewer, Insta Zoom, YouTube channel name checker, thumbnail downloader), Relationship Calculators (anniversary, future age, birthday countdown), Image Tools (AI image detector, background remover, HEIC/PNG/WebP/JPG converters), Crypto Tools (BIP39, OTP, RSA, UUID, bcrypt), Developer Tools (regex tester, MIME types, JWT decoder), a PayPal fee calculator, and a PDF signature checker."
          }
        },
        {
          "@type": "Question",
          name: "Can I use FastTools on my phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every tool is fully responsive and works on mobile phones, tablets, and desktop browsers. No app download needed — just visit fasttools.store in any modern browser."
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
            Free Tools — No Signup Required
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight mb-8">
            <span className="block mb-2">Free Online Tools</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-sky-500">
              Instagram, YouTube & More
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            Instagram DP viewer, YouTube name checker, image converters, crypto & developer utilities.
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
