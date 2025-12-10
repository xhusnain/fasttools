import Link from "next/link"
import dynamic from "next/dynamic"
import { GButton } from "@/ui/gbutton"
import { GToolCard } from "@/ui/gtool-card"


import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
import { TrustedBy } from "@/components/common/trusted-by"
import { FeatureBentoGrid } from "@/components/home/feature-bento-grid"
import { SecureProcessingSection } from "@/components/home/secure-processing-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"


const HomeFAQSection = dynamic(() => import('@/components/common/home-faq-section').then(mod => ({ default: mod.HomeFAQSection })), {
  loading: () => <div className="py-20 text-center">Loading FAQ...</div>
})
import {
  Calculator,
  Sparkles,
  Palette,
  Code,
  FileText,
  Search,
  DollarSign,
  Image,
  Smile,
  Globe,
  Wrench,
  Music,
  QrCode,
  Heart,
  Hash,
  Download,
  Calendar,
  Activity,
  Percent,
  Type,
  Ruler,
  Thermometer,
  Users,
  Star,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react"

import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "FastTools - Free Online Tools & Productivity Platform",
  description:
    "FastTools is your ultimate productivity platform offering 1000+ free online tools. Access AI generators, calculators, converters, and SEO tools instantly. No registration required.",
  path: "/",
  includeSchema: false,
})



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools Store | Digital Tools, AI Generator, Calculator, Converter & SEO Tools",
    description: "FastTools is a free online tools store offering 1000+ digital tools including AI generators, calculators, converters, SEO tools, image tools, developer tools, and productivity utilities. Fast, accurate, easy to use digital tools with no registration required. Access tools store online for instant results.",
    url: "https://www.fasttools.store",
    image: "https://www.fasttools.store/banner.png",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.png",
        width: 320,
        height: 80
      },
      description: "Leading provider of free online tools and utilities for productivity, conversion, and content creation"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.png",
        width: 320,
        height: 80
      }
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
      ],
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah Chen" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "We handle sensitive client contracts daily. The fact that no data ever leaves our device makes FastTools indispensable for our legal operations."
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Marcus Johnson" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "FastTools has completely replaced our paid subscriptions. The AI caption generator is unbelievably fast and accurate."
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "David Miller" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "I was skeptical about a browser-based PDF merger, but it processed a 500MB file instantly. Zero upload time is a game changer."
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Elena Rodriguez" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Finally, a dev toolkit that just works. The JSON formatter and Regex tester are part of my daily workflow. It's refreshing to use tools that don't track or store my code."
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James Wilson" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "We integrated the AI tools into our content pipeline. It's perfect for generating quick drafts for our GPT workflows without the privacy risks of public chatbots."
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Lisa Patich" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "The image compression is magic. Reduced our asset size by 80% without visible quality loss, and everything happened offline in the browser."
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



      {/* Hero Section - Background with Orange Text */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
        {/* Hero Background Image */}
        <PremiumHeroBackground />

        <div className="container mx-auto max-w-7xl relative z-10 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Spacer for Hexagon */}
          <div className="hidden lg:block" />

          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Main Heading - Professional & Trustworthy */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-2 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Professional Grade Tools
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight px-2 lg:px-0">
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-normal">
                  FastTools: 1000+ Free Online Tools
                </span>
                <span className="block">
                  Build faster with
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient-x pb-2">
                  premium tools.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Welcome to <strong className="text-foreground">FastTools</strong>, the premier <strong className="text-foreground">online tools platform</strong> designed for efficiency.
                Explore our massive collection of <strong className="text-foreground">web tools</strong> including <strong className="text-foreground">productivity tools</strong>, developer utilities, and AI generators.
                Experience the power of a complete digital toolkit that processes data locally for maximum security and speed.
              </p>
            </div>


          </div>
        </div>
      </section>



      {/* Trusted By Section */}
      <TrustedBy />

      {/* Feature Bento Grid */}
      <FeatureBentoGrid />

      {/* Secure Processing Section */}
      <SecureProcessingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section - Lazy Loaded */}
      <HomeFAQSection />
    </div>
  )
}

