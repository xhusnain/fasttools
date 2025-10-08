import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Hash, Cake, PartyPopper } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fun Tools - Free Online Entertainment Tools | FastTools",
  description:
    "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  keywords:
    "fun tools, love calculator, future age predictor, birthday countdown, anniversary calculator, hashtag counter, entertainment tools, free online tools",
  openGraph: {
    title: "Fun Tools - Free Online Entertainment Tools",
    description:
      "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, and more!",
    type: "website",
  },
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
                Our fun tools are designed to bring joy and entertainment to your daily life. From calculating love 
                compatibility to tracking birthdays and anniversaries, our tools provide endless fun and social sharing 
                opportunities.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Free to use with no registration required</li>
                <li>Mobile-friendly and responsive design</li>
                <li>Easy sharing on social media</li>
                <li>No data sent to servers for privacy</li>
                <li>Always entertaining and fun</li>
                <li>Perfect for social gatherings and parties</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Fun Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular fun tools that bring joy to thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Love Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate love compatibility between two people for fun.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Birthday Countdown</h3>
                  <p className="text-sm text-muted-foreground">Real-time countdown to your next birthday celebration.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Future Age Predictor</h3>
                  <p className="text-sm text-muted-foreground">See how old you'll be in any future year.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Instagram Hashtag Counter</h3>
                  <p className="text-sm text-muted-foreground">Count and extract hashtags from your Instagram posts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
