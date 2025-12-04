import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { getCurrentYear } from "@/lib/utils"
import { GToolCard } from "@/ui/gtool-card"

import { Calendar, Cake, PartyPopper, Code, Globe, Calculator, ArrowRight, Heart } from "lucide-react"

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

const toolConfig = createToolConfig({
  toolName: "Fun Tools & Social Helpers",
  description: "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  metaTitle: `Free Fun Tools | Love Calculator, Birthday Countdown & More | FastTools`,
  metaDescription: "Discover fun and entertaining online tools including Love Calculator, Future Age Predictor, Birthday Countdown, Anniversary Calculator, and Instagram Hashtag Counter. Free and easy to use!",
  path: "/fun-tools",
  keywords: [
    "fun tools", "free online tools", "love calculator", "future age predictor",
    "birthday countdown", "anniversary calculator", "hashtag counter",
    "entertainment tools", "social media tools", "relationship tools",
    "celebration tools", "party tools", "fun calculators",
    "entertainment calculators", "social tools", "trending tools",
    "viral tools", "fun apps", "entertainment apps", "online fun tools",
    "free fun tools online", "online entertainment tools",
    "online social media tools", "online party tools",
    "free online calculators", "online celebration tools",
    "free online fun apps", "online viral tools", "online trending tools"
  ],

  header: {
    title: `Fun Tools & Social Helpers`,
    description: "Enjoy playful, privacy-friendly tools for celebrations, relationships, and social content. All free, fast, and easy to use.",
    titleSize: "large",
    descriptionSize: "medium",
    badge: "Fun & Entertainment Tools",
  },

  breadcrumbs: [
    { label: "Fun Tools", href: "/fun-tools" },
  ],

  content: {
    overview: "Our collection of fun tools is designed to add a spark of joy and utility to your daily life. Whether you're planning a celebration, tracking relationship milestones, or just curious about the future, we have a tool for you. Built with privacy and speed in mind, these tools run directly in your browser, ensuring your personal moments stay personal.",

    howToSteps: [
      "Browse the Collection: Explore our range of fun and social tools listed below.",
      "Select a Tool: Click on the card of the tool that interests you.",
      "Enter Your Details: Input dates, names, or other required information.",
      "Get Instant Results: See your countdowns, predictions, or calculations immediately.",
      "Share the Fun: Use built-in sharing features to send results to friends and family."
    ],

    features: [
      "Instant Calculations: No waiting, get results immediately.",
      "Privacy First: All data stays on your device, nothing is sent to servers.",
      "Mobile Optimized: Works perfectly on your phone for on-the-go fun.",
      "Shareable Results: Easily share outcomes with your social circle.",
      "User Friendly: Simple, intuitive interfaces for everyone.",
      "Always Free: No subscriptions or hidden fees, ever."
    ],

    useCases: [
      "Celebrations: Plan birthdays and anniversaries with precision.",
      "Social Media: Create engaging content with accurate data.",
      "Relationships: Track milestones and celebrate special dates.",
      "Future Planning: Visualize future ages for long-term goals.",
      "Entertainment: Have fun with friends predicting future ages.",
      "Event Coordination: Use countdowns to keep planning on track."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Our Fun Tool Technology
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our playful tools pair intuitive UIs with reliable, client-side logic. Inputs are validated and calculations are performed locally for speed and privacy, delivering consistent results every time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary" />
                Smart, Lightweight Engine
              </h4>
              <p className="text-sm text-muted-foreground">
                Countdowns tick in real time, date math stays precise, and text utilities process instantly — all tuned for responsiveness across devices.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Delightful by Design
              </h4>
              <p className="text-sm text-muted-foreground">
                Clear layouts, accessible controls, and friendly micro-interactions keep experiences fast and fun while remaining dependable.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Ideas and Use Cases
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Try these ways to make the most of the collection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <PartyPopper className="h-4 w-4 text-primary" />
                Celebrations
              </h4>
              <p className="text-sm text-muted-foreground">
                Run a birthday countdown for events, preview future ages for milestones, and share fun moments with friends.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                Social Content
              </h4>
              <p className="text-sm text-muted-foreground">
                Manage hashtags cleanly, generate timely posts, and keep audiences engaged with lighthearted tools.
              </p>
            </div>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "What exactly are fun tools and why should I use them?",
        answer: "Fun tools are interactive applications designed to entertain, engage, and sometimes educate users through playful experiences. Unlike traditional productivity software, these tools prioritize enjoyment while still providing practical value. They're perfect for breaking up monotonous routines, sparking creativity, and adding moments of joy to your day."
      },
      {
        question: "Are these tools safe to use and do they protect my privacy?",
        answer: "Our fun tools prioritize user privacy and security by operating entirely within your browser. All calculations, countdowns, and analyses happen locally on your device, meaning no personal data is transmitted to external servers. This client-side processing ensures that your names, dates, and other inputs remain completely private."
      },
      {
        question: "Can I use these tools on mobile devices?",
        answer: "Yes! All our fun tools are fully responsive and optimized for mobile devices. Whether you're using a smartphone, tablet, or desktop, you'll get the same smooth, interactive experience."
      },
      {
        question: "Do I need to register or pay to use these tools?",
        answer: "No, all our fun tools are completely free to use and require no registration. You can start using them immediately without creating an account or providing an email address."
      },
      {
        question: "Can these tools help with content creation and social media strategy?",
        answer: "Absolutely! These tools are invaluable for content creators. Birthday countdowns provide engaging content opportunities, anniversary calculators offer relationship-focused content ideas, and hashtag counters optimize social media performance."
      },
      {
        question: "How accurate are the calculations?",
        answer: "Our tools use precise algorithms and date libraries to ensure high accuracy. Whether it's calculating days until a birthday, determining future age, or counting hashtags, you can rely on the results."
      },
      {
        question: "Can I share the results from these tools?",
        answer: "Yes, most of our tools have built-in sharing features or generate results that are easy to copy and paste into social media posts, messages, or emails."
      },
      {
        question: "What makes these tools different from other online calculators?",
        answer: "Our fun tools distinguish themselves through their focus on entertainment value, user experience, and practical application. They combine accuracy with engaging interfaces and meaningful results, designed with social sharing and privacy in mind."
      }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function FunToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <GToolCard
              key={`fun-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
