import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Sparkles, QrCode, Music, ImageIcon, Heart, Hash } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tools - Free AI-Powered Generators | FastTools",
  description:
    "Discover free AI-powered tools including meme generator, QR art generator, song lyrics generator, image caption generator, pet name generator, and hashtag suggester.",
  keywords:
    "AI tools, meme generator, QR code generator, lyrics generator, caption generator, pet names, hashtag generator, AI content creation",
}

const aiTools = [
  {
    title: "AI Meme Generator",
    description: "Generate funny meme text with AI for any topic or style",
    href: "/ai-tools/meme-generator",
    icon: Sparkles,
  },
  {
    title: "AI QR Art Generator",
    description: "Create beautiful, customizable QR codes with artistic styling",
    href: "/ai-tools/qr-generator",
    icon: QrCode,
  },
  {
    title: "AI Song Lyrics Generator",
    description: "Generate creative song lyrics for any theme, genre, or mood",
    href: "/ai-tools/lyrics-generator",
    icon: Music,
  },
  {
    title: "AI Image Caption Generator",
    description: "Create engaging social media captions for your images with AI",
    href: "/ai-tools/caption-generator",
    icon: ImageIcon,
  },
  {
    title: "AI Pet Name Generator",
    description: "Find the perfect name for your pet with AI-powered suggestions",
    href: "/ai-tools/pet-names",
    icon: Heart,
  },
  {
    title: "AI Hashtag Suggester",
    description: "Get relevant hashtag suggestions based on your caption or content",
    href: "/ai-tools/hashtag-suggester",
    icon: Hash,
  },
]

export default function AiToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
        ]}
      />

      <div className="mt-8 space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI-Powered Tools</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Harness the power of artificial intelligence with our collection of free AI tools. Generate creative
            content, enhance your social media presence, and discover unique ideas with cutting-edge AI technology.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
