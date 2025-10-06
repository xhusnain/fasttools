import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Heart, Hash, Cake, PartyPopper } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
          <div className="text-center mb-12 space-y-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Fun & Trending Tools</h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover entertaining and fun online tools for social media, relationships, and celebrations. All tools
              are free and easy to use!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={tool.href}
                className="border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all">
                    <Link href={tool.href}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
