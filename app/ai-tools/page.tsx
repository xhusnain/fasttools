import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { QrCode, Music, ImageIcon, Heart, ArrowRight } from "lucide-react"

// Auto-update year
const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Best Free AI Tools ${currentYear} | AI Apps for Work & Design`,
  description:
    `Best free AI tools ${currentYear} for content creation & social media. QR codes, lyrics, captions & pet names. Create instantly with AI.`,
  keywords:
    `ai tools, best ai tools ${currentYear}, free ai tools, ai tools for business, ai productivity tools, ai content creation tools, ai tools for writing, ai tools for students, ai tools list, ai tools directory, top ai tools, ai tools for marketing, generative ai tools, ai image generator, ai video generator, ai tools online, ai tools free, ai tools app, best ai software, ai automation tools, AI QR code generator, QR code generator, QR art generator, custom QR code, artistic QR codes, branded QR codes, QR code design, scannable QR codes, free QR code maker, AI lyrics generator, song lyrics generator, songwriting tool, music lyrics creator, rap lyrics generator, song writer AI, lyric maker, AI caption generator, social media caption generator, Instagram caption generator, caption ideas, photo caption generator, engaging captions, caption writer, AI pet name generator, pet name generator, dog name generator, cat name generator, unique pet names, creative pet names, pet naming ideas, AI for social media, AI marketing tools, AI content tools, free QR generator`,
  alternates: {
    canonical: "https://www.fasttools.store/ai-tools",
  },
  openGraph: {
    title: `Best Free AI Tools in ${currentYear} | Top Artificial Intelligence Apps for Work, Design & Business`,
    description: `Discover the best free AI tools in ${currentYear} for content creation, social media marketing, and business. Free AI QR code creator, lyrics generator, caption maker, and pet name suggester. Create amazing content instantly with AI.`,
    url: "https://www.fasttools.store/ai-tools",
    type: "website",
    images: [
      {
        url: "https://www.fasttools.store/og-images/ai-tools.png",
        width: 1200,
        height: 630,
        alt: `Best Free AI Tools in ${currentYear} | Top Artificial Intelligence Apps for Work, Design & Business`,
      },
    ],
  },
}

const aiTools = [
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
]

export default function AiToolsPage() {
  const toolContent = {
    toolName: "AI Tools",
    overview: `Welcome to your ultimate resource for discovering powerful artificial intelligence solutions. Our comprehensive directory features the best free AI tools specifically designed for content creation, social media marketing, and business productivity. Whether you're a student exploring new technologies, a business owner seeking automation solutions, or a marketer looking to enhance campaigns, you'll find professional-grade tools that won't cost you a penny. Our collection includes cutting-edge generative AI applications, productivity enhancers, and content creation platforms that rival expensive commercial software. Everything is accessible online without registration requirements, making it easier than ever to leverage artificial intelligence for your projects. From creative writing assistance to visual content generation, discover how modern AI technology can transform your workflow and boost your productivity in ${currentYear}.`,
    howToSteps: [
      "Select the AI tool that matches your creative or business needs from the grid above.",
      "Enter your specific requirements, prompts, or preferences into the tool's interface.",
      "Let our advanced AI models process your input and generate professional-quality results instantly.",
      "Copy, download, or use your AI-generated content directly in your projects without any cost or attribution requirements."
    ],
    features: [
      "100% Free AI Tools",
      "No Registration Required",
      "Instant Content Generation",
      "Professional Quality Output",
      "Mobile-Optimized Interface",
      "Privacy-Focused Processing"
    ],
    aboutTool: `
      ### AI Meme Generator - Create Funny Memes & Viral Content
      Transform your social media presence with our intelligent meme creation platform. This powerful generator analyzes trending topics and cultural moments to produce hilarious, shareable content that resonates with audiences across Instagram, TikTok, Facebook, and Twitter. Social media managers, content creators, and digital marketers rely on this tool to maintain consistent posting schedules without sacrificing quality or humor.

      ### AI QR Code Generator - Custom QR Codes & Artistic QR Design
      Bridge the gap between physical and digital marketing with intelligent QR code creation. Our advanced generator produces visually stunning, fully scannable codes that incorporate your brand colors, logos, and artistic styling while maintaining perfect functionality. Unlike basic QR generators, this tool uses artificial intelligence to optimize every code for maximum scannability across different devices and lighting conditions.

      ### AI Lyrics Generator - Songwriting Tool & Music Creation
      Overcome writer's block and explore new creative directions with intelligent lyric generation. This sophisticated songwriting assistant helps musicians, producers, and content creators craft professional lyrics across all genres - from hip-hop and rap to pop, rock, country, R&B, and electronic music. The system understands song structure, including verse-chorus-bridge composition, rhyme schemes, meter, and genre-specific conventions.

      ### AI Caption Generator - Instagram Captions & Social Media Content
      Never stare at a blank caption box again. Our intelligent caption writer analyzes your images and creates compelling, platform-optimized content that drives engagement across Instagram, TikTok, Facebook, Twitter, and LinkedIn. The system generates captions in various tones - professional for corporate accounts, casual for personal brands, humorous for entertainment content, and inspirational for lifestyle influencers.

      ### AI Pet Name Generator - Dog Names, Cat Names & Creative Pet Naming
      Find the perfect name for your new companion with intelligent name suggestion technology. This comprehensive platform offers thousands of creative options for dogs, cats, birds, rabbits, hamsters, and exotic pets. The system analyzes your pet's breed, size, color, personality traits, and your personal preferences to suggest names that truly fit.
    `,
    faqs: [
      {
        question: "What are AI tools and how do they work?",
        answer: `AI tools are software applications powered by artificial intelligence that automate tasks, generate content, and enhance creativity using machine learning algorithms. The best ai tools ${currentYear} process massive datasets to identify patterns, learn from examples, and generate human-like outputs. Our ai tools directory includes free ai tools that use natural language processing (NLP), computer vision, and generative AI models.`
      },
      {
        question: `Are AI tools really free to use in ${currentYear}?`,
        answer: `Yes! Our ai tools free platform provides unlimited access to all features without registration, subscriptions, or hidden costs. Unlike other ai tools list platforms that offer limited free trials, our free ai tools include full functionality for the viral meme maker, free QR code maker, songwriting tool, Instagram caption generator, dog name generator, and hashtag research tool.`
      },
      {
        question: `What are the best AI tools for business in ${currentYear}?`,
        answer: `The best ai tools for business in ${currentYear} include our comprehensive suite of ai content creation tools and ai automation tools designed for maximum ROI. Businesses use our viral meme maker and funny meme generator as ai tools for marketing to create memes online that engage customers and increase brand awareness.`
      },
      {
        question: "How can students benefit from AI tools?",
        answer: `Students discover ai tools for students across our platform that enhance learning, creativity, and productivity in ${currentYear}. The AI lyrics generator and songwriting tool help music students learn song structure, rhyme schemes, and lyrical composition through the song writer AI and lyric maker. Design students use the free QR code maker to create custom QR code projects.`
      },
      {
        question: "What's the difference between AI tools and traditional software?",
        answer: `Traditional software follows explicit programmed rules, while ai tools use machine learning to learn patterns and generate creative outputs. Our best ai tools ${currentYear} leverage generative ai tools technology that creates entirely new content rather than following templates. When you use a traditional meme creator, you manually write text; our AI meme generator analyzes successful memes to create engaging captions automatically.`
      },
      {
        question: "How do I create viral memes using AI tools?",
        answer: "Creating viral content with our viral meme maker and AI meme generator involves understanding platform trends, audience preferences, and timing. The funny meme generator uses ai tools for marketing insights to create memes online that resonate with target demographics. Start by selecting relevant topics - the meme creator online analyzes trending subjects across Instagram, TikTok, Twitter, and Reddit."
      },
      {
        question: "What makes a QR code scannable and how does AI help?",
        answer: "Scannable QR codes require sufficient contrast, appropriate size, error correction, and clear quiet zones around the code. Our AI QR code generator and free QR code maker use ai automation tools to optimize these factors while creating visually appealing designs. The custom QR code creator analyzes color combinations to ensure branded QR codes maintain scannability."
      },
      {
        question: "Can AI really write good song lyrics and music?",
        answer: "Yes, the AI lyrics generator and songwriting tool create professional-quality lyrics across all genres using advanced ai tools for writing algorithms. Our song lyrics generator analyzes millions of successful songs to understand structure, rhyme schemes, metaphors, and emotional resonance. The lyric maker creates verses, choruses, and bridges that follow genre conventions."
      },
      {
        question: "How do I write engaging Instagram captions with AI?",
        answer: "The Instagram caption generator and social media caption generator use ai tools for marketing to create engaging captions that drive comments, shares, and saves. Our photo caption generator analyzes your image content, brand voice, target audience, and platform trends to generate caption ideas optimized for engagement."
      },
      {
        question: "How do I choose the perfect pet name using AI?",
        answer: "The AI pet name generator, dog name generator, and cat name generator use ai content creation tools to suggest creative pet names and unique pet names based on multiple factors. Our pet naming ideas platform analyzes your pet's breed, size, color, personality traits, and your preferences to generate creative pet names that fit perfectly."
      }
    ],
    useCases: [
      "Content creators generating viral memes and captions",
      "Businesses creating branded QR codes for marketing",
      "Musicians overcoming writer's block with lyric generation",
      "Social media managers maintaining consistent posting schedules",
      "Pet owners finding unique names for new companions",
      "Students exploring AI technology and creative writing"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free AI Tools – QR Codes, Lyrics, Captions & Pet Names",
        description: "Essential AI-powered content creation tools. Create QR codes, write lyrics, craft captions, and find perfect pet names — all free, fast, and powered by AI. No signup required.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
      ]}
      toolComponent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiTools.map((tool, index) => (
            <Card
              key={`ai-tools-${tool.href}`}
              className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-3 pb-1">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-primary/10 border border-primary/20">
                    <tool.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm md:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{tool.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-[11px] md:text-xs text-muted-foreground line-clamp-2">
                      {tool.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <Button asChild className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white group-hover:bg-accent group-hover:text-foreground">
                  <Link href={tool.href} className="flex items-center justify-center gap-1">
                    Use Tool
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `Best Free AI Tools ${currentYear} | AI Apps for Work & Design`,
        description: `Best free AI tools ${currentYear} for content creation & social media. QR codes, lyrics, captions & pet names. Create instantly with AI.`,
        path: "/ai-tools"
      }}
    />
  )
}
