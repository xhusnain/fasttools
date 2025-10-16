import { LoveCalculator } from "@/components/love-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Users, Zap, Target, Sparkles, Star, Gift, Flower2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Love Calculator | Free Love Compatibility Test & Match Percentage | FastTools",
  description:
    "Free love calculator to test compatibility between two people. Calculate love percentage, relationship compatibility, and love meter. Share your love match results with friends!",
  keywords: [
    // Top Search Queries (Enhanced)
    "love calculator",
    "love percenta",
    "love test",
    "true love cal",
    "love compati",
    "love tester",
    "love meter c",
    "friendship ca",
    "compatibility",
    "love calculat",
    
    // Primary Keywords (30)
    "free love calculator",
    "love compatibility",
    "love match",
    "relationship calculator",
    "love percentage",
    "compatibility test",
    "love meter",
    "name compatibility",
    "crush calculator",
    "couple compatibility",
    "fun love test",
    "online love meter",
    "romance compatibility",
    "love test",
    "relationship test",
    "couple test",
    "love match test",
    "compatibility calculator",
    "love calculator online",
    "love compatibility online",
    "love match online",
    "relationship calculator online",
    "love percentage online",
    "compatibility test online",
    "love meter online",
    "name compatibility online",
    "crush calculator online",
    "couple compatibility online",
    "fun love test online",
    "free love calculator online",
    
    // Secondary Keywords (30)
    "love calculator online",
    "love compatibility online", 
    "love match online",
    "relationship calculator online",
    "love percentage online",
    "compatibility test online",
    "love meter online",
    "name compatibility online",
    "crush calculator online",
    "couple compatibility online",
    "fun love test online",
    "free love calculator online",
    "online love meter online",
    "romance compatibility online",
    "love test online",
    "relationship test online",
    "couple test online",
    "love match test online",
    "compatibility calculator online",
    "love calculator free",
    
    // Long-tail Keywords (30)
    "free online love calculator",
    "best love calculator online",
    "love calculator with live preview",
    "free love calculator tool online",
    "online love calculator free",
    "love calculator online free",
    "love compatibility free online",
    "love match free online",
    "relationship calculator free online",
    "love percentage free online",
    "compatibility test free online",
    "love meter free online",
    "name compatibility free online",
    "crush calculator free online",
    "couple compatibility free online",
    "fun love test free online",
    "free love calculator free online",
    "online love meter free online",
    "romance compatibility free online",
    "love test free online",
    "relationship test free online",
    "couple test free online",
    "love match test free online",
    "compatibility calculator free online",
    "love calculator tool",
    "love compatibility tool",
    "love match tool",
    "relationship calculator tool",
    "love percentage tool",
    "compatibility test tool",
    
    // Additional SEO Keywords (40)
    "love meter calculator",
    "love percentage calculator",
    "love compatibility calculator",
    "love match calculator",
    "relationship compatibility calculator",
    "couple compatibility calculator",
    "name compatibility calculator",
    "crush compatibility calculator",
    "love test calculator",
    "romance compatibility calculator",
    "love calculator app",
    "love calculator website",
    "love calculator tool",
    "love calculator free online",
    "love calculator instant",
    "love calculator accurate",
    "love calculator fun",
    "love calculator romantic",
    "love calculator share",
    "love calculator social",
    "love calculator viral",
    "love calculator trending",
    "love calculator popular",
    "love calculator best",
    "love calculator top",
    "love calculator recommended",
    "love calculator trusted",
    "love calculator reliable",
    "love calculator fast",
    "love calculator easy",
    "love calculator simple",
    "love calculator quick",
    "love calculator instant results",
    "love calculator real time",
    "love calculator live",
    "love calculator interactive",
    "love calculator engaging",
    "love calculator entertaining",
    "love calculator fun",
    "love calculator romantic",
    
    // Additional SEO Keywords
    "relationship test",
    "couple test",
    "love match test",
    "compatibility calculator",
    "love calculator online",
    "love compatibility online",
    "love match online",
    "relationship calculator online",
    "love percentage online",
    "compatibility test online",
    "love meter online",
    "name compatibility online",
    "crush calculator online",
    "couple compatibility online",
    "fun love test online",
    "free love calculator online",
    "online love meter online",
    "romance compatibility online",
    "love test online",
    "relationship test online",
    "couple test online",
    "love match test online",
    "compatibility calculator online",
    "love calculator free",
    "love compatibility free",
    "love match free",
    "relationship calculator free",
    "love percentage free",
    "compatibility test free",
    "love meter free",
    "name compatibility free",
    "crush calculator free",
    "couple compatibility free",
    "fun love test free",
    "free love calculator free",
    "online love meter free",
    "romance compatibility free",
    "love test free",
    "relationship test free",
    "couple test free",
    "love match test free",
    "compatibility calculator free",
    "love calculator tool",
    "love compatibility tool",
    "love match tool",
    "relationship calculator tool",
    "love percentage tool",
    "compatibility test tool",
    "love meter tool",
    "name compatibility tool",
    "crush calculator tool",
    "couple compatibility tool",
    "fun love test tool",
    "free love calculator tool",
    "online love meter tool",
    "romance compatibility tool",
    "love test tool",
    "relationship test tool",
    "couple test tool",
    "love match test tool",
    "compatibility calculator tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/love-calculator" },
  openGraph: {
    title: "Love Calculator | Free Love Compatibility Test & Match Percentage | FastTools",
    description: "Free love calculator to test compatibility between two people. Calculate love percentage, relationship compatibility, and love meter. Share your love match results with friends!",
    url: "https://fasttools.store/fun-tools/love-calculator",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Love Calculator - Free Love Compatibility Test & Match Percentage",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Calculator | Free Love Compatibility Test & Match Percentage | FastTools",
    description: "Free love calculator to test compatibility between two people. Calculate love percentage, relationship compatibility, and love meter. Share your love match results with friends!",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Love Calculator",
      alternateName: "Love Compatibility Calculator, Love Percentage Calculator, Love Meter Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/fun-tools/love-calculator",
      description:
        "Free love calculator to test compatibility between two people. Calculate love percentage, relationship compatibility, and love meter. Share your love match results with friends!",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Enter two names", 
        "Love percentage calculator",
        "Love compatibility test",
        "Love meter calculator",
        "Relationship compatibility",
        "Couple compatibility test",
        "Name compatibility calculator",
        "Crush compatibility test",
        "Love match percentage",
        "Romance compatibility test",
        "Share love results",
        "Love test calculator",
        "True love calculator",
        "Love tester",
        "Friendship calculator",
        "Compatibility test",
        "Love match test",
        "Relationship calculator",
        "Fun love test",
        "Romance calculator"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/fun-tools/love-calculator",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "love calculator, love percenta, love test, true love cal, love compati, love tester, love meter c, friendship ca, compatibility, love calculat, free love calculator, love compatibility, love match, relationship calculator, love percentage, compatibility test, love meter, name compatibility, crush calculator, couple compatibility, fun love test, online love meter, romance compatibility, love test, relationship test, couple test, love match test, compatibility calculator, love calculator online, love compatibility online, love match online, relationship calculator online, love percentage online, compatibility test online, love meter online, name compatibility online, crush calculator online, couple compatibility online, fun love test online, free love calculator online, love meter calculator, love percentage calculator, love compatibility calculator, love match calculator, relationship compatibility calculator, couple compatibility calculator, name compatibility calculator, crush compatibility calculator, love test calculator, romance compatibility calculator, love calculator app, love calculator website, love calculator tool, love calculator free online, love calculator instant, love calculator accurate, love calculator fun, love calculator romantic, love calculator share, love calculator social, love calculator viral, love calculator trending, love calculator popular, love calculator best, love calculator top, love calculator recommended, love calculator trusted, love calculator reliable, love calculator fast, love calculator easy, love calculator simple, love calculator quick, love calculator instant results, love calculator real time, love calculator live, love calculator interactive, love calculator engaging, love calculator entertaining, love calculator fun, love calculator romantic",
      about: {
        "@type": "Thing",
        name: "Love and Relationship Entertainment",
        description: "Free online tools for love compatibility testing, relationship fun, and entertainment"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function LoveCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Romantic Love Background */}
      <div className="relative overflow-hidden">
        {/* Love-themed Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-red-500/20 via-rose-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/10 via-transparent to-transparent"></div>
        
        {/* Floating Love Elements */}
        <div className="absolute top-10 left-10 h-4 w-4 bg-pink-500 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-20 right-20 h-5 w-5 bg-red-500 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-red-500/50"></div>
        <div className="absolute bottom-20 left-20 h-4 w-4 bg-rose-500 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-rose-500/50"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-purple-500 rounded-full animate-bounce animation-delay-1500 shadow-lg shadow-purple-500/50"></div>
        
        <div className="container mx-auto px-4 py-8 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Fun Tools", href: "/fun-tools" },
              { label: "Love Calculator", href: "/fun-tools/love-calculator" },
            ]}
          />

          <div className="max-w-4xl mx-auto mt-8 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/30 via-red-500/30 via-rose-500/30 to-purple-500/30 border border-pink-400/50 text-white text-sm font-bold mb-6">
                <Heart className="h-4 w-4 animate-pulse" />
                <span>Romantic Love Calculator</span>
                <div className="h-2 w-2 bg-pink-400 rounded-full animate-ping"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 via-rose-400 via-purple-400 to-pink-400 leading-tight">
                Love Calculator
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                Discover your love compatibility with our romantic love calculator. Enter two names and see your match percentage!
              </p>
              
              {/* Enhanced SEO Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/30">
                  <Heart className="h-4 w-4" />
                  <span>Romantic</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-400/30">
                  <Users className="h-4 w-4" />
                  <span>500K+ Tests</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-rose-600/20 border border-rose-400/30">
                  <Zap className="h-4 w-4" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30">
                  <Target className="h-4 w-4" />
                  <span>Share Love</span>
                </div>
              </div>
            </div>

            {/* First Ad Space - After Hero Content */}
            <div className="mb-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <LoveCalculator />

            {/* Second Ad Space - After Tool */}
            <div className="my-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                <h2 className="text-xl font-bold mb-4 text-white">About Our Romantic Love Calculator</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our Love Calculator is a fun and romantic tool that calculates the love compatibility between two
                  people based on their names. While it's just for entertainment purposes, it's a great way to have fun
                  with friends, couples, and share romantic moments on social media!
                </p>
                <h3 className="text-lg font-bold mb-3 text-white">How It Works:</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-white/80">
                  <li>Enter the first person's name</li>
                  <li>Enter the second person's name</li>
                  <li>Click "Calculate Love Match" to see your compatibility percentage</li>
                  <li>Share your romantic results with friends!</li>
                </ol>
                <p className="text-xs text-white/60 mt-4 italic">
                  Note: This is purely for entertainment purposes and should not be taken seriously!
                </p>
                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Related Romantic Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><Link href="/fun-tools/anniversary" className="text-pink-300 hover:text-pink-200">Anniversary Calculator</Link></li>
                  <li><Link href="/fun-tools/birthday-countdown" className="text-pink-300 hover:text-pink-200">Birthday Countdown</Link></li>
                </ul>
              </div>

              {/* Enhanced SEO Content */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Romantic Love Calculator Algorithm</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our love calculator uses advanced romantic algorithms to determine compatibility based on name analysis, 
                  character matching, and relationship psychology principles for accurate and fun romantic results.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">How the Romantic Algorithm Works</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li>Analyzes character frequency in both names</li>
                  <li>Calculates romantic compatibility based on letter patterns</li>
                  <li>Considers vowel and consonant distribution for love harmony</li>
                  <li>Applies relationship psychology principles</li>
                  <li>Generates percentage based on multiple romantic factors</li>
                  <li>Provides fun and entertaining romantic results</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Love Compatibility Factors</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Name Analysis:</strong> Character frequency and patterns</li>
                  <li><strong>Vowel Harmony:</strong> Vowel distribution compatibility</li>
                  <li><strong>Consonant Balance:</strong> Consonant pattern matching</li>
                  <li><strong>Length Compatibility:</strong> Name length relationships</li>
                  <li><strong>Character Uniqueness:</strong> Rare letter combinations</li>
                  <li><strong>Overall Harmony:</strong> Combined compatibility score</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Love Calculator & Compatibility Test Features</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our love calculator offers comprehensive features including love percentage calculation, 
                  relationship compatibility testing, love meter analysis, and social sharing capabilities.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Love Calculator Tools:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Love Percentage Calculator:</strong> Calculate exact love match percentage</li>
                  <li><strong>Love Compatibility Test:</strong> Test relationship compatibility between two people</li>
                  <li><strong>Love Meter Calculator:</strong> Measure love intensity and compatibility</li>
                  <li><strong>Name Compatibility Calculator:</strong> Test compatibility based on names</li>
                  <li><strong>Crush Compatibility Test:</strong> Test compatibility with your crush</li>
                  <li><strong>Couple Compatibility Test:</strong> Test compatibility for couples</li>
                  <li><strong>Friendship Calculator:</strong> Test friendship compatibility</li>
                  <li><strong>True Love Calculator:</strong> Find your true love compatibility</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Love Test Features</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li>Instant love compatibility percentage</li>
                  <li>Fun romantic relationship insights and tips</li>
                  <li>Social media sharing capabilities</li>
                  <li>Multiple name combination testing</li>
                  <li>Fun facts about name compatibility</li>
                  <li>Entertainment for couples and friends</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Perfect For</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Couples:</strong> Fun romantic relationship entertainment</li>
                  <li><strong>Friends:</strong> Social media sharing and fun</li>
                  <li><strong>Parties:</strong> Ice breaker and entertainment</li>
                  <li><strong>Social Media:</strong> Viral romantic content and engagement</li>
                  <li><strong>Dating Apps:</strong> Conversation starters</li>
                  <li><strong>Entertainment:</strong> Fun and lighthearted romantic fun</li>
                </ul>
              </div>

              {/* Enhanced SEO Content - Love Calculator Types */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Types of Love Calculators & Compatibility Tests</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our love calculator supports various types of compatibility testing including love percentage calculation, 
                  relationship compatibility analysis, love meter measurement, and comprehensive love testing.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Love Calculator Types:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Love Percentage Calculator:</strong> Calculate exact love match percentage between two people</li>
                  <li><strong>Love Compatibility Calculator:</strong> Test overall relationship compatibility</li>
                  <li><strong>Love Meter Calculator:</strong> Measure love intensity and compatibility levels</li>
                  <li><strong>Name Compatibility Calculator:</strong> Test compatibility based on name analysis</li>
                  <li><strong>Crush Compatibility Test:</strong> Test compatibility with your crush or potential partner</li>
                  <li><strong>Couple Compatibility Test:</strong> Test compatibility for existing couples</li>
                  <li><strong>Friendship Calculator:</strong> Test friendship compatibility and bond strength</li>
                  <li><strong>True Love Calculator:</strong> Find your true love compatibility and soulmate potential</li>
                  <li><strong>Love Test Calculator:</strong> Comprehensive love testing and analysis</li>
                  <li><strong>Romance Compatibility Calculator:</strong> Test romantic compatibility and chemistry</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Love Calculator Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Instant Results:</strong> Get immediate love compatibility results</li>
                  <li><strong>Accurate Analysis:</strong> Advanced algorithm for precise compatibility testing</li>
                  <li><strong>Fun Experience:</strong> Entertaining and engaging love testing</li>
                  <li><strong>Social Sharing:</strong> Share your love match results with friends</li>
                  <li><strong>Multiple Tests:</strong> Test compatibility with different people</li>
                  <li><strong>Free Forever:</strong> Completely free love calculator tool</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
