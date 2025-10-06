import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calculator,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  Calendar,
  Activity,
  DollarSign,
  Percent,
  Wallet,
  Music,
  Heart,
  Hash,
  Crop,
  Image,
  FileText,
  Globe,
  Palette,
  Code,
  Search,
  Settings,
} from "lucide-react"
import { AdSpace } from "@/components/ad-space"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools for Everyone",
    description: "fasttools.store offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
    url: "https://fasttools.store",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools",
      description: "Collection of free online tools and utilities",
      numberOfItems: 40,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Text Case Converter",
          description: "Convert text between different cases (uppercase, lowercase, title case)",
          url: "https://fasttools.store/converters/text-case"
        },
        {
          "@type": "ListItem", 
          position: 2,
          name: "Image to Text (OCR)",
          description: "Extract text from images using optical character recognition",
          url: "https://fasttools.store/image-tools/image-to-text"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "QR Code Generator", 
          description: "Generate QR codes for URLs, text, and contact information",
          url: "https://fasttools.store/ai-tools/qr-generator"
        }
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        }
      ]
    }
  }

  const tools = [
    {
      title: "Text Case Converter",
      description: "Convert text between uppercase, lowercase, title case, and more. Perfect for formatting documents and social media posts.",
      icon: Calculator,
      href: "/converters/text-case",
      popular: true,
    },
    {
      title: "Image to Text (OCR)",
      description: "Extract text from images using advanced optical character recognition. Works with photos, screenshots, and scanned documents.",
      icon: Activity,
      href: "/image-tools/image-to-text",
      popular: true,
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes for URLs, text, contact information, and more. Customize colors, size, and error correction level.",
      icon: Target,
      href: "/ai-tools/qr-generator",
      popular: true,
    },
    {
      title: "File Size Converter",
      description: "Convert between different file size units (KB, MB, GB, TB). Perfect for understanding storage requirements and data transfer.",
      icon: Clock,
      href: "/converters/file-size",
      popular: false,
    },
    {
      title: "Currency Converter",
      description: "Convert between different currencies with real-time exchange rates. Supports 160+ currencies worldwide.",
      icon: DollarSign,
      href: "/converters/currency",
      popular: true,
    },
    {
      title: "Temperature Converter",
      description: "Convert between Celsius, Fahrenheit, and Kelvin. Perfect for cooking, weather, and scientific calculations.",
      icon: Percent,
      href: "/converters/temperature",
      popular: false,
    },
    {
      title: "Length Converter",
      description: "Convert between different length units (meters, feet, inches, yards, miles). Supports metric and imperial systems.",
      icon: TrendingUp,
      href: "/converters/length",
      popular: false,
    },
    {
      title: "Timezone Converter",
      description: "Convert time between different timezones. Perfect for scheduling meetings and coordinating with global teams.",
      icon: Calendar,
      href: "/converters/timezone",
      popular: false,
    },
    {
      title: "Meta Tag Generator",
      description: "Generate SEO meta tags for your website. Includes title, description, keywords, and Open Graph tags.",
      icon: Shield,
      href: "/seo-tools/meta-tags",
      popular: true,
    },
    {
      title: "Lorem Ipsum Generator",
      description: "Generate placeholder text for your designs and prototypes. Customize length, paragraphs, and formatting.",
      icon: Users,
      href: "/seo-tools/lorem-ipsum",
      popular: false,
    },
    {
      title: "Hashtag Generator",
      description: "Generate relevant hashtags for your social media posts. Improve reach and engagement across platforms.",
      icon: Zap,
      href: "/seo-tools/hashtags",
      popular: true,
    },
    {
      title: "Blog Title Generator",
      description: "Generate catchy blog post titles and headlines. Perfect for content creators and marketers.",
      icon: FileText,
      href: "/seo-tools/blog-titles",
      popular: false,
    },
    {
      title: "Keyword Density Checker",
      description: "Analyze keyword density in your content for SEO optimization. Get insights on keyword usage and distribution.",
      icon: Search,
      href: "/seo-tools/keyword-density",
      popular: false,
    },
    {
      title: "AI Meme Generator",
      description: "Create funny memes with AI-powered text generation. Choose from popular templates and customize your message.",
      icon: Image,
      href: "/ai-tools/meme-generator",
      popular: true,
    },
    {
      title: "AI Caption Generator",
      description: "Generate engaging captions for your social media posts. Perfect for Instagram, Facebook, and Twitter.",
      icon: FileText,
      href: "/ai-tools/caption-generator",
      popular: true,
    },
    {
      title: "AI Lyrics Generator",
      description: "Generate song lyrics with AI assistance. Perfect for songwriters, musicians, and creative writers.",
      icon: Music,
      href: "/ai-tools/lyrics-generator",
      popular: false,
    },
    {
      title: "Pet Name Generator",
      description: "Generate unique and creative names for your pets. Choose from different categories and styles.",
      icon: Heart,
      href: "/ai-tools/pet-names",
      popular: false,
    },
    {
      title: "Hashtag Suggester",
      description: "Get AI-powered hashtag suggestions for your content. Improve social media reach and engagement.",
      icon: Hash,
      href: "/ai-tools/hashtag-suggester",
      popular: false,
    },
    {
      title: "Image Cropper",
      description: "Crop and resize images online. Perfect for social media posts, profile pictures, and web graphics.",
      icon: Crop,
      href: "/image-tools/image-cropper",
      popular: true,
    },
    {
      title: "Background Blur",
      description: "Add blur effects to image backgrounds. Perfect for creating professional-looking photos and graphics.",
      icon: Image,
      href: "/image-tools/background-blur",
      popular: false,
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
        <AdSpace slot="header" className="mb-0" />

      <section className="container mx-auto px-4 lg:px-6 py-20 md:py-32">
        <AdSpace slot="header" className="mb-12 h-24" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Free Online Tools for Everyone</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] text-foreground animate-fade-in-up tracking-tight">
          FastTools - Your Digital Toolkit
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Access 40+ powerful, free online tools including text converters, image processors, AI generators, and productivity utilities — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/tools">
                Browse All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-medium hover:bg-accent transition-all duration-200 bg-transparent border-2"
            >
              <Link href="/converters/text-case">Try Text Converter</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border border-border/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Zap className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Lightning Fast</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  Get instant results with our optimized calculation tools. No waiting, no delays, just accurate
                  results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg shadow-secondary/20">
                  <Shield className="h-7 w-7 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">100% Free</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  All calculation tools are completely free to use. No hidden fees, no subscriptions, no registration
                  required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in bg-card/80 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Clock className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Always Available</CardTitle>
                <CardDescription className="leading-relaxed text-base text-muted-foreground">
                  Access our online tools anytime, anywhere, from any device. Mobile-friendly and responsive design.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Lightning Fast</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Get instant results with our optimized calculation tools. No waiting, no delays, just accurate
                  results.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in animation-delay-100">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 shadow-sm">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">100% Free</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  All calculation tools are completely free to use. No hidden fees, no subscriptions, no registration
                  required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-scale-in animation-delay-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-foreground">Always Available</CardTitle>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Access our online tools anytime, anywhere, from any device. Mobile-friendly and responsive design.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Our Tools?</h2>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              We're committed to providing the best free online calculation tools with accuracy, speed, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 animate-slide-in-left">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">Accurate Calculations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our calculators use precise algorithms to ensure 100% accurate results every time. Perfect for
                  financial planning, health tracking, and official documents.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">User-Friendly Interface</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simple, intuitive design that anyone can use. No technical knowledge required. Just input your data
                  and get instant results.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-left animation-delay-100">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">SEO Optimized</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All our tools are built with SEO best practices, ensuring fast loading times, mobile responsiveness,
                  and excellent search engine rankings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 animate-slide-in-right animation-delay-100">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">No Registration Needed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start using our tools immediately without creating an account. Your privacy is important to us, and we
                  don't collect unnecessary data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Tools Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A5A8A]/10 text-[#2A5A8A] text-sm font-medium mb-4 border border-[#2A5A8A]/20">
              <Shield className="h-4 w-4" />
              <span>100% Free & Public</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Public Tools for Everyone</h2>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our commitment to providing free, accessible tools for everyone. No registration, no hidden costs, just
              powerful calculators at your fingertips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-left">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Open Access</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  All our tools are publicly available without any barriers. No sign-up required, no email verification,
                  no payment walls. Just visit and start calculating immediately.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Privacy First</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Your data stays private. All calculations happen in your browser, and we don't store or track your
                  personal information. Use our tools with complete peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-left animation-delay-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Always Free</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  We believe essential tools should be free for everyone. No premium tiers, no feature limitations, no
                  trial periods. Every feature is available to every user, forever.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-border shadow-sm hover:shadow-md transition-all animate-slide-in-right animation-delay-100">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Target className="h-5 w-5 text-secondary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">Community Driven</CardTitle>
                </div>
                <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                  Built for the community, by the community. We continuously add new tools based on user feedback and
                  real-world needs. Your suggestions help us grow.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Replaced CTA with ad space */}
          <AdSpace slot="content" className="max-w-3xl mx-auto h-40 rounded-2xl border border-border animate-scale-in animation-delay-200" />
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our 20 Main Tools</h2>
              <p className="text-base text-muted-foreground text-pretty">
                Choose from our collection of free online tools and utilities
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
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      {tool.popular && (
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary flex items-center gap-1 border border-secondary/20">
                          <Star className="h-3 w-3 fill-current" />
                          Popular
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-sm text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
                    >
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
      </section>

      {/* FAQ moved to dedicated /faq page for SEO and clarity */}

      <section className="container mx-auto px-4 py-8">
        <AdSpace slot="footer" className="max-w-6xl mx-auto" />
      </section>

      {/* CTA removed for cleaner UX; reserved space for ads handled globally in layout */}
      </div>
    </>
  )
}
