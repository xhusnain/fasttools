"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import { BookOpen, Calculator, Clock, Palette, Code, Zap, TrendingUp, Globe, Wrench, Sparkles, ArrowRight, Users, Star, Target } from "lucide-react"

// Dynamic imports for guide components
const AgeCalculatorGuide = dynamic(() => import("@/app/guides/age-calculator-guide/page"), { ssr: false })
const CurrencyConverterGuide = dynamic(() => import("@/app/guides/currency-converter-guide/page"), { ssr: false })
const SEOToolsGuide = dynamic(() => import("@/app/guides/seo-tools-guide/page"), { ssr: false })
const DeveloperToolsGuide = dynamic(() => import("@/app/guides/developer-tools-guide/page"), { ssr: false })
const AIToolsGuide = dynamic(() => import("@/app/guides/ai-caption-generator-guide/page"), { ssr: false })
const AgeInHoursGuide = dynamic(() => import("@/app/guides/age-in-hours-calculator-guide/page"), { ssr: false })
const LengthConverterGuide = dynamic(() => import("@/app/guides/length-converter-guide/page"), { ssr: false })
const TemperatureConverterGuide = dynamic(() => import("@/app/guides/temperature-converter-guide/page"), { ssr: false })
const MetaTagsGuide = dynamic(() => import("@/app/guides/meta-tags-guide/page"), { ssr: false })
const AIHashtagGuide = dynamic(() => import("@/app/guides/ai-hashtag-suggester-guide/page"), { ssr: false })
const JWTDecoderGuide = dynamic(() => import("@/app/guides/jwt-decoder-guide/page"), { ssr: false })
const BackgroundBlurGuide = dynamic(() => import("@/app/guides/background-blur-guide/page"), { ssr: false })
const ImageOCRGuide = dynamic(() => import("@/app/guides/image-to-text-ocr-guide/page"), { ssr: false })
const DiscountCalculatorGuide = dynamic(() => import("@/app/guides/discount-calculator-guide/page"), { ssr: false })
const TipCalculatorGuide = dynamic(() => import("@/app/guides/tip-calculator-guide/page"), { ssr: false })
const WorkdayCalculatorGuide = dynamic(() => import("@/app/guides/workday-calculator-guide/page"), { ssr: false })
const DateToDayGuide = dynamic(() => import("@/app/guides/date-to-day-finder-guide/page"), { ssr: false })
const ZodiacSignGuide = dynamic(() => import("@/app/guides/zodiac-sign-finder-guide/page"), { ssr: false })

export default function LearnPage() {
  const [selectedGuide, setSelectedGuide] = useState("age-calculator")

  // Handle SEO for client component
  useEffect(() => {
    document.title = "Learn | Comprehensive Guides & Tutorials | FastTools"
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master online tools with our comprehensive guides and tutorials. Learn how to use calculators, converters, SEO tools, and more with step-by-step instructions.')
    }
  }, [])

  const guides = [
    {
      id: "age-calculator",
      title: "Age Calculator Guide",
      href: "/guides/age-calculator-guide"
    },
    {
      id: "currency-converter",
      title: "Currency Converter Guide", 
      href: "/guides/currency-converter-guide"
    },
    {
      id: "seo-tools",
      title: "SEO Tools Guide",
      href: "/guides/seo-tools-guide"
    },
    {
      id: "developer-tools",
      title: "Developer Tools Guide",
      href: "/guides/developer-tools-guide"
    },
    {
      id: "ai-tools",
      title: "AI Tools Guide",
      href: "/guides/ai-caption-generator-guide"
    },
    {
      id: "age-in-hours",
      title: "Age in Hours Calculator Guide",
      href: "/guides/age-in-hours-calculator-guide"
    },
    {
      id: "length-converter",
      title: "Length Converter Guide",
      href: "/guides/length-converter-guide"
    },
    {
      id: "temperature-converter",
      title: "Temperature Converter Guide",
      href: "/guides/temperature-converter-guide"
    },
    {
      id: "meta-tags",
      title: "Meta Tags Guide",
      href: "/guides/meta-tags-guide"
    },
    {
      id: "ai-hashtag",
      title: "AI Hashtag Suggester Guide",
      href: "/guides/ai-hashtag-suggester-guide"
    },
    {
      id: "jwt-decoder",
      title: "JWT Decoder Guide",
      href: "/guides/jwt-decoder-guide"
    },
    {
      id: "background-blur",
      title: "Background Blur Guide",
      href: "/guides/background-blur-guide"
    },
    {
      id: "image-ocr",
      title: "Image to Text OCR Guide",
      href: "/guides/image-to-text-ocr-guide"
    },
    {
      id: "discount-calculator",
      title: "Discount Calculator Guide",
      href: "/guides/discount-calculator-guide"
    },
    {
      id: "tip-calculator",
      title: "Tip Calculator Guide",
      href: "/guides/tip-calculator-guide"
    },
    {
      id: "workday-calculator",
      title: "Workday Calculator Guide",
      href: "/guides/workday-calculator-guide"
    },
    {
      id: "date-to-day",
      title: "Date to Day Finder Guide",
      href: "/guides/date-to-day-finder-guide"
    },
    {
      id: "zodiac-sign",
      title: "Zodiac Sign Finder Guide",
      href: "/guides/zodiac-sign-finder-guide"
    }
  ]

  const handleGuideClick = (guideId: string) => {
    setSelectedGuide(guideId)
  }

  const renderGuide = () => {
    switch (selectedGuide) {
      case "age-calculator":
        return <AgeCalculatorGuide />
      case "currency-converter":
        return <CurrencyConverterGuide />
      case "seo-tools":
        return <SEOToolsGuide />
      case "developer-tools":
        return <DeveloperToolsGuide />
      case "ai-tools":
        return <AIToolsGuide />
      case "age-in-hours":
        return <AgeInHoursGuide />
      case "length-converter":
        return <LengthConverterGuide />
      case "temperature-converter":
        return <TemperatureConverterGuide />
      case "meta-tags":
        return <MetaTagsGuide />
      case "ai-hashtag":
        return <AIHashtagGuide />
      case "jwt-decoder":
        return <JWTDecoderGuide />
      case "background-blur":
        return <BackgroundBlurGuide />
      case "image-ocr":
        return <ImageOCRGuide />
      case "discount-calculator":
        return <DiscountCalculatorGuide />
      case "tip-calculator":
        return <TipCalculatorGuide />
      case "workday-calculator":
        return <WorkdayCalculatorGuide />
      case "date-to-day":
        return <DateToDayGuide />
      case "zodiac-sign":
        return <ZodiacSignGuide />
      default:
        return <AgeCalculatorGuide />
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Learn - Comprehensive Guides & Tutorials",
    description: "Master online tools with our comprehensive guides and tutorials. Learn how to use calculators, converters, SEO tools, and more with step-by-step instructions.",
    url: "https://fasttools.store/learn",
    mainEntity: {
      "@type": "ItemList",
      name: "Learning Guides",
      description: "Comprehensive guides for all FastTools",
      numberOfItems: 34,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Age Calculator Guide",
          url: "https://fasttools.store/guides/age-calculator-guide"
        },
        {
          "@type": "ListItem", 
          position: 2,
          name: "Currency Converter Guide",
          url: "https://fasttools.store/guides/currency-converter-guide"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SEO Tools Guide", 
          url: "https://fasttools.store/guides/seo-tools-guide"
        }
      ]
    }
  }


  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="container mx-auto px-6 py-12 max-w-full">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Premium Learning Hub</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Learn with FastTools
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Master our online tools with comprehensive guides and tutorials. Learn how to use calculators, 
              converters, SEO tools, and more with step-by-step instructions and real-world examples.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <BookOpen className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">34+ Guides</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Users className="h-4 w-4 text-green-600" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">50,000+ learners</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">4.9/5 rating</span>
              </div>
            </div>
          </div>

        {/* Main Content - Premium Layout */}
        <div className="flex gap-8">
          {/* Left Sidebar Navigation - Premium Design */}
          <aside className="w-72 flex-shrink-0">
            <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
              <nav className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 h-full shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Learning Guides</h3>
                </div>
                <ul className="space-y-0.5">
                  {guides.map((guide) => (
                    <li key={guide.id}>
                      <button
                        onClick={() => handleGuideClick(guide.id)}
                        className={`w-full flex items-center justify-between text-sm transition-all duration-200 py-2 px-3 rounded-lg group ${
                          selectedGuide === guide.id 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        {guide.title}
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content Area - Premium Design */}
          <div className="flex-1 min-w-0">
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {renderGuide()}
            </div>
          </div>

          {/* Right Sidebar with AdSense - Premium Design */}
          <aside className="w-72 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* AdSense Components - Premium Container */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">Sponsored Content</h3>
                </div>
                <div className="space-y-6">
                  <AdSpace slot="sidebar" className="h-96 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-64 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
                  <AdSpace slot="sidebar" className="h-64 rounded-xl overflow-hidden" />
                </div>
              </div>
            </div>
          </aside>
        </div>
        </div>
      </div>
    </>
  )
}
