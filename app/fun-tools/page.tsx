import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Hash, Cake, PartyPopper } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
  description:
    "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  keywords: [
    // Primary Keywords (20)
    "fun tools",
    "free fun tools",
    "love calculator",
    "future age predictor",
    "birthday countdown",
    "anniversary calculator",
    "hashtag counter",
    "entertainment tools",
    "free online tools",
    "social media tools",
    "relationship tools",
    "celebration tools",
    "party tools",
    "fun calculators",
    "entertainment calculators",
    "social tools",
    "trending tools",
    "viral tools",
    "fun apps",
    "entertainment apps",
    
    // Secondary Keywords (20)
    "love calculator online",
    "future age predictor online",
    "birthday countdown online",
    "anniversary calculator online",
    "hashtag counter online",
    "entertainment tools online",
    "free online tools online",
    "social media tools online",
    "relationship tools online",
    "celebration tools online",
    "party tools online",
    "fun calculators online",
    "entertainment calculators online",
    "social tools online",
    "trending tools online",
    "viral tools online",
    "fun apps online",
    "entertainment apps online",
    "free fun tools online",
    "online fun tools",
    
    // Long-tail Keywords (20)
    "free online fun tools",
    "best fun tools online",
    "fun tools with live preview",
    "free fun tools tool online",
    "online fun tools free",
    "fun tools online free",
    "love calculator free online",
    "future age predictor free online",
    "birthday countdown free online",
    "anniversary calculator free online",
    "hashtag counter free online",
    "entertainment tools free online",
    "free online tools free online",
    "social media tools free online",
    "relationship tools free online",
    "celebration tools free online",
    "party tools free online",
    "fun calculators free online",
    "entertainment calculators free online",
    "social tools free online",
    
    // Additional SEO Keywords
    "trending tools",
    "viral tools",
    "fun apps",
    "entertainment apps",
    "love calculator online",
    "future age predictor online",
    "birthday countdown online",
    "anniversary calculator online",
    "hashtag counter online",
    "entertainment tools online",
    "free online tools online",
    "social media tools online",
    "relationship tools online",
    "celebration tools online",
    "party tools online",
    "fun calculators online",
    "entertainment calculators online",
    "social tools online",
    "trending tools online",
    "viral tools online",
    "fun apps online",
    "entertainment apps online",
    "free fun tools online",
    "online fun tools",
    "fun tools free",
    "love calculator free",
    "future age predictor free",
    "birthday countdown free",
    "anniversary calculator free",
    "hashtag counter free",
    "entertainment tools free",
    "free online tools free",
    "social media tools free",
    "relationship tools free",
    "celebration tools free",
    "party tools free",
    "fun calculators free",
    "entertainment calculators free",
    "social tools free",
    "trending tools free",
    "viral tools free",
    "fun apps free",
    "entertainment apps free",
    "free fun tools free",
    "fun tools tool",
    "love calculator tool",
    "future age predictor tool",
    "birthday countdown tool",
    "anniversary calculator tool",
    "hashtag counter tool",
    "entertainment tools tool",
    "free online tools tool",
    "social media tools tool",
    "relationship tools tool",
    "celebration tools tool",
    "party tools tool",
    "fun calculators tool",
    "entertainment calculators tool",
    "social tools tool",
    "trending tools tool",
    "viral tools tool",
    "fun apps tool",
    "entertainment apps tool",
    "free fun tools tool"
  ],
  openGraph: {
    title: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
    description:
      "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
    url: "https://fasttools.store/fun-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Fun Tools - Love Calculator, Birthday Countdown & More",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
    description: "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
    images: ["https://fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://fasttools.store/fun-tools",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
  description: "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  url: "https://fasttools.store/fun-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "Fun Tools Collection",
    description: "Comprehensive collection of free online fun tools and entertainment utilities for social media, relationships, and celebrations",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Future Age Predictor", description: "Discover how old you'll be in any future year", url: "https://fasttools.store/fun-tools/future-age" },
      { "@type": "ListItem", position: 2, name: "Love Calculator", description: "Calculate love compatibility between two people for fun", url: "https://fasttools.store/fun-tools/love-calculator" },
      { "@type": "ListItem", position: 3, name: "Instagram Hashtag Counter", description: "Count and extract hashtags from your Instagram posts", url: "https://fasttools.store/fun-tools/hashtag-counter" },
      { "@type": "ListItem", position: 4, name: "Birthday Countdown", description: "Real-time countdown to your next birthday celebration", url: "https://fasttools.store/fun-tools/birthday-countdown" },
      { "@type": "ListItem", position: 5, name: "Anniversary Calculator", description: "Calculate how long you've been together and when your next anniversary is", url: "https://fasttools.store/fun-tools/anniversary" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Fun Tools", item: "https://fasttools.store/fun-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "Entertainment and Fun Tools",
    description: "Free online tools for entertainment, social media, relationships, and celebrations"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://fasttools.store"
  }
}

export default function FunToolsPage() {
  const tools = [
    {
      title: "Future Age Predictor",
      description: "Discover how old you'll be in any future year. Fun way to visualize your future age!",
      icon: Calendar,
      href: "/fun-tools/future-age",
      popular: true,
    },
    {
      title: "Love Calculator",
      description: "Calculate love compatibility between two people. Just for fun - see your love match percentage!",
      icon: Heart,
      href: "/fun-tools/love-calculator",
      popular: true,
    },
    {
      title: "Instagram Hashtag Counter",
      description: "Count and extract hashtags from your Instagram posts. Perfect for social media management.",
      icon: Hash,
      href: "/fun-tools/hashtag-counter",
      popular: false,
    },
    {
      title: "Birthday Countdown",
      description: "Real-time countdown to your next birthday in days, hours, minutes, and seconds!",
      icon: Cake,
      href: "/fun-tools/birthday-countdown",
      popular: true,
    },
    {
      title: "Anniversary Calculator",
      description: "Calculate how long you've been together and when your next anniversary is.",
      icon: PartyPopper,
      href: "/fun-tools/anniversary",
      popular: false,
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
          ]}
        />

        <div className="max-w-6xl mx-auto mt-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-12 space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Fun & Trending Tools</h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover entertaining and fun online tools for social media, relationships, and celebrations. All tools
              are free and easy to use!
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={tool.href}
                className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    <Link href={tool.href}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second Ad Space - Between Tools and Content */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          {/* SEO Content Section */}
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Fun Tools?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our comprehensive collection of <strong>fun tools</strong> is designed to bring joy and entertainment to your daily life. From calculating love 
                compatibility to tracking birthdays and anniversaries, our <strong>free fun tools</strong> provide endless fun and social sharing 
                opportunities for everyone.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Free to use</strong> with no registration required</li>
                <li><strong>Mobile-friendly</strong> and responsive design for all devices</li>
                <li><strong>Easy sharing</strong> on social media platforms</li>
                <li><strong>No data sent to servers</strong> for maximum privacy</li>
                <li><strong>Always entertaining</strong> and fun for all ages</li>
                <li><strong>Perfect for social gatherings</strong> and parties</li>
                <li><strong>Viral and trending</strong> tools for social media</li>
                <li><strong>Instant results</strong> with real-time calculations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Comprehensive Fun Tool Categories</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>fun tools</strong> are organized into specialized categories to meet all your entertainment needs:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Relationship & Love Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Love calculator for compatibility testing, anniversary calculator for relationship milestones, 
                and relationship tools. Perfect for couples, friends, and family fun.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Celebration & Birthday Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Birthday countdown for upcoming celebrations, future age predictor for fun age calculations, 
                and celebration tools. Great for parties, events, and special occasions.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Social Media & Hashtag Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Instagram hashtag counter for social media management, hashtag tools for content creators, 
                and social media utilities. Essential for influencers and content creators.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Entertainment & Party Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fun calculators for parties, entertainment tools for social gatherings, 
                and viral tools for social media. Perfect for events and entertainment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Fun Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular <strong>fun tools</strong> that bring joy to thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Love Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate love compatibility between two people for fun. Perfect for couples and friends.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Birthday Countdown</h3>
                  <p className="text-sm text-muted-foreground">Real-time countdown to your next birthday celebration. Great for parties and events.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Future Age Predictor</h3>
                  <p className="text-sm text-muted-foreground">See how old you'll be in any future year. Fun way to visualize your future age.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Instagram Hashtag Counter</h3>
                  <p className="text-sm text-muted-foreground">Count and extract hashtags from your Instagram posts. Perfect for social media management.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Anniversary Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate how long you've been together and when your next anniversary is.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Entertainment Tools</h3>
                  <p className="text-sm text-muted-foreground">Fun and entertaining tools for parties, social gatherings, and viral content.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Advanced Fun Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>fun tools</strong> include advanced features for maximum entertainment:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Real-time Updates:</strong> Live countdowns and instant calculations</li>
                <li><strong>Social Sharing:</strong> Easy sharing on all social media platforms</li>
                <li><strong>Mobile Optimization:</strong> Perfect experience on all devices</li>
                <li><strong>No Registration:</strong> Use immediately without creating accounts</li>
                <li><strong>Privacy Focused:</strong> All calculations run locally in your browser</li>
                <li><strong>Viral Content:</strong> Tools designed for social media sharing</li>
                <li><strong>Entertainment Value:</strong> Fun and engaging for all ages</li>
                <li><strong>Trending Features:</strong> Tools that go viral on social media</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use Cases for Our Fun Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>free fun tools</strong> are perfect for various entertainment scenarios:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Social Media & Content Creation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Instagram hashtag management and counting</li>
                <li>Viral content creation for social media</li>
                <li>Trending tools for engagement</li>
                <li>Social media entertainment content</li>
                <li>Content creator utilities</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Parties & Celebrations</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Birthday countdowns and celebrations</li>
                <li>Anniversary tracking and planning</li>
                <li>Party entertainment and games</li>
                <li>Social gathering activities</li>
                <li>Event planning and fun</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Relationships & Fun</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Love compatibility testing for fun</li>
                <li>Relationship milestone tracking</li>
                <li>Couple entertainment and games</li>
                <li>Friendship and social bonding</li>
                <li>Family fun and activities</li>
              </ul>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
