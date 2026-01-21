import type { Metadata } from "next"
import Link from "next/link"
import dynamic from "next/dynamic"
import { GButton } from "@/ui/gbutton"
import { GToolCard } from "@/ui/gtool-card"


import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
import { HeroBoxes } from "@/components/common/hero-boxes"
import { HeroSearchSection } from "@/components/common/hero-search-section"

const HomeCategories = dynamic(() => import('@/components/common/home-categories').then(mod => ({ default: mod.HomeCategories })), {
  loading: () => <div className="py-24 text-center"><LoadingToolsText /></div>
})
const HomeFAQSection = dynamic(() => import('@/components/common/home-faq-section').then(mod => ({ default: mod.HomeFAQSection })), {
  loading: () => <div className="py-20 text-center"><LoadingFAQText /></div>
})
import { DictionarySearch } from "@/components/dictionary/DictionarySearch"

import { ClickFortifyAd } from "@/components/custom-ads/cf-ads/ClickFortifyAd"
import { LoadingToolsText, LoadingFAQText } from "@/components/common/loading-text"

import { createMetadata } from "@/lib/metadata-base"
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = createMetadata({
  title: "FastTools - Free Online Tools & Productivity Platform",
  description: "FastTools offers 1000+ free online tools: AI generators, calculators, converters & SEO utilities. Instant access, no registration required.",
  path: "/",
  includeSchema: false,
})


export default async function Home() {
  const t = await getTranslations('hero');
  const tDict = await getTranslations('dictionary');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools Store | Digital Tools, AI Generator, Calculator, Converter & SEO Tools",
    description: "FastTools is a free online tools store offering 1000+ digital tools including AI generators, calculators, converters, SEO tools, image tools, developer tools, and productivity utilities. Fast, accurate, easy to use digital tools with no registration required. Access tools store online for instant results.",
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
            text: "Our free AI tools include AI caption generator for social media posts, AI meme generator for viral content, AI hashtag suggester for better reach, AI song lyrics generator for creative writing, and AI pet name generator for naming pets. All tools use advanced AI technology to generate high-quality, relevant content instantly without any cost."
          }
        },
        {
          "@type": "Question",
          name: "How accurate are the currency exchange rates in your converter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our currency converter provides real-time exchange rates updated every minute from reliable financial data sources. We support 160+ currencies including USD, EUR, GBP, JPY, and more. The rates are accurate for travel, business, and investment purposes, with historical data and trend analysis available for informed decision-making."
          }
        },
        {
          "@type": "Question",
          name: "What financial calculators can help with loan and investment planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer comprehensive financial calculators including loan calculator for mortgage planning, EMI calculator for monthly payments, investment calculator for returns analysis, retirement calculator for long-term planning, compound interest calculator for savings growth, and tax calculator for income tax estimation. All calculators use professional-grade formulas compatible with BA II Plus and HP 12CP financial calculators."
          }
        },
        {
          "@type": "Question",
          name: "How can SEO tools improve my website's search engine rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our SEO tools help optimize your website with meta tag generator for better search snippets, keyword density checker for content optimization, hashtag generator for social media reach, and blog title generator for click-worthy headlines. These tools analyze your content, suggest improvements, and help you rank higher in Google search results for better organic traffic."
          }
        },
        {
          "@type": "Question",
          name: "What image processing tools are available for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our image tools include image cropper for resizing and cropping photos, image converter for format conversion, image to text OCR for extracting text from images, background blur for photo editing, and QR code generator for creating QR codes. All tools work in your browser without uploading files, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          name: "What developer tools can help with coding and web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our developer tools include HTML beautifier for code formatting, JSON formatter for data validation, regex tester for pattern matching, JWT decoder for token analysis, base64 encoder/decoder for data encoding, and 1000+ free color palettes with HEX codes for design. These tools help developers write better code, debug more effectively, and streamline their development workflow."
          }
        },
        {
          "@type": "Question",
          name: "Is my data safe when using these online tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. We use privacy-first architecture where sensitive information like documents, images, and personal data never leaves your device. No registration required, no data collection, and no tracking - just pure, secure tool functionality."
          }
        },
        {
          "@type": "Question",
          name: "What categories of tools are available on FastTools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer 10+ categories including AI Tools for content generation, Calculators for financial planning, Converters for data transformation, SEO Tools for website optimization, Image Tools for photo editing, Developer Tools for coding, Finance Tools for business calculations, Social Media Tools for marketing, and Fun Tools for entertainment. Each category contains 15-50+ specialized tools for different use cases."
          }
        },
        {
          "@type": "Question",
          name: "Can businesses use these tools for professional purposes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our tools are designed for professional use with business-grade accuracy and reliability. Many businesses use our financial calculators for loan analysis, currency converter for international trade, SEO tools for digital marketing, AI tools for content creation, and developer tools for web development. All tools are free for commercial use with no restrictions or watermarks."
          }
        },
        {
          "@type": "Question",
          name: "Do these tools work on mobile devices and tablets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our tools are mobile-optimized and work perfectly on smartphones, tablets, and desktop computers. Our responsive design ensures optimal performance across all devices with touch-friendly interfaces, fast loading times, and offline functionality for many tools. Access your favorite tools anywhere, anytime without any app downloads or installations."
          }
        },
        {
          "@type": "Question",
          name: "How to use tool app",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A tool app helps you perform a specific digital task such as editing, generating, or managing files. To use a tool app effectively, start by identifying what problem it solves — for example, resizing images, converting files, or generating content. On FastTools, no account is required — simply visit the tool you need, follow the intuitive interface, and start working immediately. All tools provide instant results with export, save, and sharing options so your output can be used across other platforms."
          }
        },
        {
          "@type": "Question",
          name: "How to use digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital tools are online applications designed to make your work faster and more efficient. Begin by choosing a reliable tool that matches your goal — such as design, writing, analytics, or automation. On FastTools, you can access 1000+ digital tools without registration. Learn each tool's interface through our simple, user-friendly design, and integrate them into your daily workflow. All our tools work directly in your browser and process data locally, helping you stay organized and productive wherever you work."
          }
        },
        {
          "@type": "Question",
          name: "What are the most used digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most used digital tools on FastTools include AI generators for content creation (caption generator, lyrics generator, hashtag generator), currency and unit converters for data transformation, financial calculators (loan, mortgage, investment, tax calculators), SEO tools (meta tag generator, keyword density checker), image processing tools (background remover, image converter, OCR), and developer tools (HTML beautifier, JSON formatter, JWT decoder). FastTools offers 1000+ free tools that simplify complex tasks and improve efficiency across all fields — all accessible instantly without registration."
          }
        },
        {
          "@type": "Question",
          name: "How to organize or store your digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To organize your digital tools, start by categorizing them — for example: design, writing, analytics, and automation. FastTools makes this easy with clear categories like AI Tools, Calculators, Converters, SEO Tools, Image Tools, Developer Tools, and more. Bookmark your favorite FastTools pages in your browser for quick access. Since all tools work directly in your browser without requiring accounts or installations, you can access them instantly from any device. Regularly explore our tool directory to discover new tools that can streamline your workflow and keep your digital toolkit efficient and up-to-date."
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

      <section className="relative min-h-[90vh] flex items-center justify-center px-4 bg-background pt-12 md:pt-0">
        <PremiumHeroBackground />

        {/* Floating Tool Icons Background Effect */}
        <HeroBoxes />

        <div className="container mx-auto max-w-5xl relative z-20 py-12 lg:py-24 flex flex-col items-center text-center">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-sm font-bold mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
            </span>
            <span>{t('newBadge')}</span>
          </div>

          <div className="relative">
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight mb-8">
              <span className="block mb-2">{t('title')}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-500 animate-gradient-x">
                {t('premiumTools')}
              </span>
            </h1>

            {/* Left Ad - Desktop Only */}
            <div className="hidden 2xl:block absolute -left-80 top-0 shrink-0">
              <ClickFortifyAd className="shadow-primary/10" />
            </div>

            {/* Right Ad - Desktop Only */}
            <div className="hidden 2xl:block absolute -right-80 top-0 shrink-0">
              <ClickFortifyAd className="shadow-primary/10" />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-12 px-4">
            {t('subtitle')}
          </p>

          {/* Central Search Bar & Quick Access Tags */}
          <HeroSearchSection />

        </div>
      </section>

      {/* Dictionary Search Section */}
      <section className="relative z-10 py-12 md:py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Column - Dictionary Tool */}
            <div className="w-full">
              <DictionarySearch />
            </div>

            {/* Right Column - Text Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8 order-first lg:order-last px-4 lg:px-0">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs sm:text-sm font-medium mb-2 mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {tDict('badge')}
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-[1.1] tracking-tight">
                  <span className="block">
                    {tDict('title1')}
                  </span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x pb-2">
                    {tDict('title2')}
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {(() => {
                    const desc = tDict('description', { instant: tDict('instant') });
                    const instantText = tDict('instant');
                    const parts = desc.split(instantText);
                    return (
                      <>
                        {parts[0]}
                        <strong className="text-foreground">{instantText}</strong>
                        {parts[1]}
                      </>
                    );
                  })()}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Categories Section - Lazy Loaded */}
      <div className="-mt-12 relative z-10">
        <HomeCategories />
      </div>

      <HomeFAQSection />
    </div>
  )
}

