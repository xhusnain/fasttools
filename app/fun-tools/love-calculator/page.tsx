import { LoveCalculator } from "@/components/love-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Users, Zap, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Love Calculator | Love Compatibility & Match Percentage | FastTools",
  description:
    "Fun love compatibility calculator. Enter two names to see your match percentage and share the result with friends.",
  keywords: [
    // Primary Keywords (20)
    "love calculator",
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
    "free love calculator",
    "online love meter",
    "romance compatibility",
    "love test",
    "relationship test",
    "couple test",
    "love match test",
    "compatibility calculator",
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
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
    title: "Free Love Calculator | Love Compatibility & Match Percentage | FastTools",
    description: "Fun love compatibility calculator. Enter two names to see your match percentage and share the result with friends.",
    url: "https://fasttools.store/fun-tools/love-calculator",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Love Calculator - Love Compatibility & Match Percentage",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Love Calculator | Love Compatibility & Match Percentage | FastTools",
    description: "Fun love compatibility calculator. Enter two names to see your match percentage and share the result with friends.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Love Calculator",
      alternateName: "Love Compatibility Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/fun-tools/love-calculator",
      description:
        "Fun love compatibility calculator that shows a match percentage based on names.",
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
        "Match percentage", 
        "Share result",
        "Love compatibility",
        "Relationship calculator",
        "Fun love test",
        "Couple compatibility",
        "Romance calculator",
        "Name compatibility",
        "Love match test"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/fun-tools/love-calculator",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "love calculator, free love calculator, love compatibility, love match, relationship calculator, love percentage, compatibility test",
      about: {
        "@type": "Thing",
        name: "Love and Relationship Entertainment",
        description: "Free online tools for love compatibility testing, relationship fun, and entertainment"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
}

export default function LoveCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Love Calculator", href: "/fun-tools/love-calculator" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Love Calculator - Free Love Compatibility Test</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Calculate the love compatibility between two people. Just for fun - see your love match percentage!
            </p>
            
            {/* Enhanced SEO Stats */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Fun & Free</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                <span>500K+ Tests</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Target className="h-4 w-4" />
                <span>Share Results</span>
              </div>
            </div>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <LoveCalculator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Love Calculator</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Love Calculator is a fun and entertaining tool that calculates the love compatibility between two
                people based on their names. While it's just for entertainment purposes, it's a great way to have fun
                with friends and share on social media!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">How It Works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter the first person's name</li>
                <li>Enter the second person's name</li>
                <li>Click "Calculate Love Match" to see your compatibility percentage</li>
                <li>Share your results with friends!</li>
              </ol>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Note: This is purely for entertainment purposes and should not be taken seriously!
              </p>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Related Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><Link href="/fun-tools/anniversary">Anniversary Calculator</Link></li>
                <li><Link href="/fun-tools/birthday-countdown">Birthday Countdown</Link></li>
              </ul>
            </div>

            {/* Enhanced SEO Content */}
            <div className="p-6 rounded-lg bg-muted/30 border border-border mt-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">Love Calculator Algorithm</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our love calculator uses advanced algorithms to determine compatibility based on name analysis, 
                character matching, and relationship psychology principles for accurate and fun results.
              </p>
              
              <h3 className="text-lg font-bold mb-3 text-foreground">How the Algorithm Works</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Analyzes character frequency in both names</li>
                <li>Calculates compatibility based on letter patterns</li>
                <li>Considers vowel and consonant distribution</li>
                <li>Applies relationship psychology principles</li>
                <li>Generates percentage based on multiple factors</li>
                <li>Provides fun and entertaining results</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Love Compatibility Factors</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Name Analysis:</strong> Character frequency and patterns</li>
                <li><strong>Vowel Harmony:</strong> Vowel distribution compatibility</li>
                <li><strong>Consonant Balance:</strong> Consonant pattern matching</li>
                <li><strong>Length Compatibility:</strong> Name length relationships</li>
                <li><strong>Character Uniqueness:</strong> Rare letter combinations</li>
                <li><strong>Overall Harmony:</strong> Combined compatibility score</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-muted/30 border border-border mt-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">Fun Love Calculator Features</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our love calculator offers entertaining features including instant results, social sharing, 
                and fun compatibility insights perfect for couples, friends, and social media engagement.
              </p>
              
              <h3 className="text-lg font-bold mb-3 text-foreground">Entertainment Features</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Instant love compatibility percentage</li>
                <li>Fun relationship insights and tips</li>
                <li>Social media sharing capabilities</li>
                <li>Multiple name combination testing</li>
                <li>Fun facts about name compatibility</li>
                <li>Entertainment for couples and friends</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Perfect For</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><strong>Couples:</strong> Fun relationship entertainment</li>
                <li><strong>Friends:</strong> Social media sharing and fun</li>
                <li><strong>Parties:</strong> Ice breaker and entertainment</li>
                <li><strong>Social Media:</strong> Viral content and engagement</li>
                <li><strong>Dating Apps:</strong> Conversation starters</li>
                <li><strong>Entertainment:</strong> Fun and lighthearted fun</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
