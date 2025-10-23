import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Hash, Cake, PartyPopper, Code, Globe, Calculator } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fun Tools | Love Calculator, Birthday Countdown | FastTools",
  description:
    "Fun and entertaining online tools: Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator. Free and easy to use!",
  keywords: [
      "fun tools",
      "free online tools",
      "love calculator",
      "future age predictor",
      "birthday countdown",
      "anniversary calculator",
      "hashtag counter",
      "entertainment tools",
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
      "online fun tools",
      "free fun tools online",
      "online entertainment tools",
      "online social media tools",
      "online party tools",
      "free online calculators",
      "online celebration tools",
      "free online fun apps",
      "online viral tools",
      "online trending tools"
  ],
  openGraph: {
    title: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
    description:
      "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
    url: "https://www.fasttools.store/fun-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
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
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/fun-tools",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools",
  description: "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  url: "https://www.fasttools.store/fun-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "Fun Tools Collection",
    description: "Comprehensive collection of free online fun tools and entertainment utilities for social media, relationships, and celebrations",
    numberOfItems: 3,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Future Age Predictor", description: "Discover how old you'll be in any future year", url: "https://www.fasttools.store/fun-tools/future-age" },
      { "@type": "ListItem", position: 2, name: "Birthday Countdown", description: "Real-time countdown to your next birthday celebration", url: "https://www.fasttools.store/fun-tools/birthday-countdown" },
      { "@type": "ListItem", position: 3, name: "Anniversary Calculator", description: "Calculate how long you've been together and when your next anniversary is", url: "https://www.fasttools.store/fun-tools/anniversary" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Fun Tools", item: "https://www.fasttools.store/fun-tools" }
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
    url: "https://www.fasttools.store"
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
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Fun Tools", href: "/fun-tools" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Code className="h-4 w-4 animate-pulse" />
                    <span>Fun & Entertainment Tools</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Fun Tools & Social Helpers
                  </h1>

                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Enjoy playful, privacy-friendly tools for celebrations, relationships, and social content. All free, fast, and easy to use.
                  </p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">4+ Tools</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                      <Globe className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">Global Use</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <Calculator className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">Free Forever</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <ArrowRight className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Just for Fun</span>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet Ad - Top of Page */}
                <div className="block xl:hidden mb-6">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <Card
                      key={`fun-tools-${tool.href}`}
                      className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-fade-in-up group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="p-3 pb-1">
                        <div className="flex items-start gap-3">
                          <div className="h-9 w-9 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-primary/10 border border-primary/20">
                            <tool.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-sm md:text-base font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{tool.title}</CardTitle>
                            <CardDescription className="leading-relaxed text-[11px] md:text-xs text-muted-foreground line-clamp-2">
                              {tool.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        <Button asChild className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white group-hover:bg-accent group-hover:text-white">
                          <Link href={tool.href} className="flex items-center justify-center gap-1">
                            Use Tool
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mobile/Tablet Ad - After cards */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Our Fun Tool Technology</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our playful tools pair intuitive UIs with reliable, client-side logic. Inputs are validated and
                      calculations are performed locally for speed and privacy, delivering consistent results every time.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Smart, Lightweight Engine</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Countdowns tick in real time, date math stays precise, and text utilities process instantly — all
                      tuned for responsiveness across devices.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Delightful by Design</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clear layouts, accessible controls, and friendly micro-interactions keep experiences fast and fun
                      while remaining dependable.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Ideas and Use Cases</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Try these ways to make the most of the collection.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Celebrations</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Run a birthday countdown for events, preview future ages for milestones, and share fun moments
                      with friends.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Social Content</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Manage hashtags cleanly, generate timely posts, and keep audiences engaged with lighthearted tools.
                    </p>
                  </div>

                  {/* FAQ Section (matches calculator theme) */}
                  <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-accent" />
                      </div>
                      Complete Guide to Fun Tools: Everything You Need to Know
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What exactly are fun tools and why should I use them?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Fun tools are interactive applications designed to entertain, engage, and sometimes educate users through playful experiences. Unlike traditional productivity software, these tools prioritize enjoyment while still providing practical value. They're perfect for breaking up monotonous routines, sparking creativity, and adding moments of joy to your day. Whether you're planning a birthday celebration, tracking relationship milestones, or managing social media content, fun tools transform ordinary tasks into engaging experiences. They're particularly valuable for content creators, event planners, and anyone looking to inject more personality into their digital interactions.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How do love calculators actually work and are they accurate?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Love calculators use various algorithms based on name compatibility, numerology, or random number generation to create entertaining results. While they're not scientifically accurate predictors of relationship success, they serve as delightful conversation starters and fun activities for couples and friends. The calculations typically involve analyzing letter patterns in names, applying mathematical formulas, or using predetermined algorithms that generate percentages. These tools are designed purely for entertainment purposes and should never be taken as serious relationship advice. They work best as icebreakers, party games, or lighthearted ways to celebrate relationships. The real value lies in the shared laughter and bonding experience they create rather than any predictive accuracy.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the best way to use birthday countdown tools for events?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Birthday countdown tools excel at building anticipation and excitement for upcoming celebrations. They're perfect for creating social media posts, planning surprise parties, or simply adding excitement to the days leading up to special occasions. Use them to coordinate with friends and family by sharing countdown screenshots, create themed content for social media platforms, or build excitement for milestone birthdays. Many people find these tools helpful for planning purposes, as they provide clear timelines for organizing parties, purchasing gifts, or arranging special activities. The visual countdown format makes time feel more tangible and exciting, especially for children or anyone who enjoys the anticipation of special events.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can anniversary calculators help strengthen relationships?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Anniversary calculators serve multiple purposes beyond simple date tracking. They help couples celebrate milestones, plan special occasions, and maintain awareness of their relationship timeline. By calculating exact durations in various formats (days, weeks, months, years), these tools provide concrete data that can be meaningful for relationship milestones. They're particularly useful for planning anniversary celebrations, creating personalized gifts based on relationship duration, or simply appreciating how much time has been invested in the relationship. Many couples use these calculations for social media posts, creating memory books, or planning future celebrations. The tools can also help identify upcoming milestone anniversaries that deserve special recognition.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Why are hashtag counters essential for social media success?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Hashtag counters are crucial tools for social media optimization and content strategy. They help users understand hashtag usage patterns, avoid over-tagging, and optimize posts for maximum reach. By analyzing hashtag frequency and distribution, these tools enable content creators to make informed decisions about their social media strategy. They're particularly valuable for Instagram users, where hashtag limits and effectiveness vary significantly. The counters help identify trending hashtags, avoid banned or shadowbanned tags, and maintain optimal hashtag density. For businesses and influencers, these tools provide data-driven insights that can improve engagement rates and follower growth. They also help maintain brand consistency by tracking hashtag performance across campaigns.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Are these tools safe to use and do they protect my privacy?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our fun tools prioritize user privacy and security by operating entirely within your browser. All calculations, countdowns, and analyses happen locally on your device, meaning no personal data is transmitted to external servers. This client-side processing ensures that your names, dates, and other inputs remain completely private. The tools don't require account creation, email addresses, or any personal information beyond what you choose to input. This approach eliminates concerns about data breaches, unauthorized access, or unwanted marketing communications. Users can confidently use these tools for personal, professional, or social purposes without worrying about privacy implications. The local processing also ensures faster performance and eliminates dependency on internet connectivity for core functionality.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I integrate these tools into my daily routine effectively?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Integrating fun tools into your daily routine can enhance productivity while adding enjoyment to mundane tasks. Use birthday countdowns to plan ahead for celebrations and gift purchases, employ anniversary calculators to maintain relationship awareness and plan special moments, and utilize hashtag counters during content creation sessions. These tools work best when used intentionally rather than randomly. Set specific times for checking countdowns, use calculators during planning sessions, and incorporate hashtag analysis into your social media workflow. The key is to view these tools as enhancements to existing activities rather than distractions. They can serve as motivation boosters, relationship maintenance aids, and content optimization helpers when used strategically.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What makes these tools different from other online calculators?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our fun tools distinguish themselves through their focus on entertainment value, user experience, and practical application. Unlike traditional calculators that prioritize only functionality, these tools combine accuracy with engaging interfaces and meaningful results. They're designed with social sharing in mind, featuring results that are both informative and shareable. The tools prioritize speed and simplicity, delivering instant results without complex setup or learning curves. They're optimized for mobile use, ensuring consistent performance across all devices. The combination of privacy-focused design, entertainment value, and practical utility creates a unique user experience that serves both personal enjoyment and professional needs. Each tool is crafted to provide maximum value with minimal effort, making them accessible to users of all technical skill levels.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Can these tools help with content creation and social media strategy?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! These tools are invaluable for content creators, social media managers, and digital marketers. Birthday countdowns provide engaging content opportunities, anniversary calculators offer relationship-focused content ideas, and hashtag counters optimize social media performance. Content creators can use countdown tools to build anticipation for product launches, events, or personal milestones. Anniversary calculators help create relationship-focused content that resonates with audiences. Hashtag counters provide data-driven insights for improving reach and engagement. The tools generate shareable results that can become content themselves, from countdown screenshots to compatibility results. They also provide timing insights that help optimize posting schedules and content planning.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I choose the right fun tool for my specific needs?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Selecting the appropriate fun tool depends on your goals, audience, and use case. For personal entertainment and relationship activities, love calculators and anniversary tools work perfectly. Event planners and party organizers benefit most from birthday countdown tools for building excitement and coordinating timing. Social media professionals and content creators should prioritize hashtag counters for optimization and strategy development. Consider your primary use case: are you planning celebrations, managing social media, strengthening relationships, or creating content? Each tool excels in specific scenarios. Love calculators work best for couples, friends, and social gatherings. Countdown tools are ideal for event planning and anticipation building. Anniversary calculators serve relationship maintenance and milestone celebration needs. Hashtag counters are essential for social media optimization and content strategy.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the most creative ways to use these tools beyond their basic functions?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">These tools offer numerous creative applications beyond their primary purposes. Use love calculators as icebreakers in team-building exercises, party games, or classroom activities. Birthday countdowns can track project deadlines, product launches, or personal goals with a fun twist. Anniversary calculators work for tracking business partnerships, pet adoptions, or friendship milestones. Hashtag counters can analyze competitor strategies, track campaign performance, or identify trending topics beyond social media. Content creators can use countdown tools to build anticipation for blog posts, videos, or product releases. Teachers can incorporate these tools into lessons about time, relationships, or social media literacy. The key is to think beyond traditional uses and explore how these tools can enhance various aspects of personal and professional life.</p>
                      </div>
                    </div>
                    <div className="mt-6 block xl:hidden">
                      <div className="text-center mb-2">
                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                      </div>
                      <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
              <div className="hidden lg:block w-72">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
