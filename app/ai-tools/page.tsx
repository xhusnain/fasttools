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

      <div className="mt-8 space-y-8">
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">AI-Powered Tools</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Harness the power of artificial intelligence with our collection of free AI tools. Generate creative
              content, enhance your social media presence, and discover unique ideas with cutting-edge AI technology.
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="py-6">
            <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiTools.map((tool, index) => (
            <Link key={tool.href} href={tool.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 bg-card/80 backdrop-blur-sm">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors mb-3">{tool.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        {/* Second Ad Space - Between Tools and Content */}
        <div className="py-6">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        {/* SEO Content Section */}
        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our AI Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our AI-powered tools are designed to help you create professional content, enhance your digital presence, 
              and streamline your workflow. Whether you're a content creator, marketer, business owner, or creative professional, 
              our AI tools provide the perfect solution for your needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free to use with no registration required</li>
              <li>AI-powered content generation for all platforms</li>
              <li>Professional quality output every time</li>
              <li>Regular updates with new features and improvements</li>
              <li>Mobile-friendly and responsive design</li>
              <li>SEO-optimized for better discoverability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular AI Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover our most popular AI tools that help thousands of users create amazing content every day:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">AI Meme Generator</h3>
                <p className="text-sm text-muted-foreground">Create viral memes with AI-powered text generation for any template or situation.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">AI QR Code Generator</h3>
                <p className="text-sm text-muted-foreground">Generate beautiful, customizable QR codes with AI for marketing and business use.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">AI Caption Generator</h3>
                <p className="text-sm text-muted-foreground">Create engaging social media captions that boost engagement and drive traffic.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">AI Hashtag Suggester</h3>
                <p className="text-sm text-muted-foreground">Get AI-powered hashtag suggestions to improve your social media reach and engagement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Ad Space - Bottom Content */}
        <div className="py-8">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </div>
    </div>
  )
}
