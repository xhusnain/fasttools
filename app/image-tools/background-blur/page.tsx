import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageBackgroundBlur } from "@/components/image-background-blur"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ImageIcon, ArrowRight, Code, Globe, Image, Palette, Download, Upload, FileText, Crop, FileStack, Unlock } from "lucide-react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Background Blur Tool – Professional Photo Blur Effects Online | FastTools",
  description: "Create professional background blur effects instantly. Adjust blur intensity, preview results, and download high-quality images — free, fast, and secure online tool.",
  keywords: [
    // Primary Background Blur Keywords
    "background blur",
    "background blur tool",
    "blur background online",
    "photo blur effect",
    "image blur tool",
    "blur image online",
    "free background blur",
    "blur photo tool",
    "background blur online",
    "blur effect online",
    
    // Professional Photo Editing
    "professional photo blur",
    "portrait blur",
    "product photo blur",
    "social media blur",
    "bokeh effect",
    "blur intensity",
    "free photo blur",
    "image blur online",
    "photo blur online",
    "blur tool online",
    "blur effect online",
    "blur background tool",
    "blur photo tool",
    "blur image tool",
    
    // Secondary Keywords (20)
    "background blur online",
    "blur image online",
    "photo editor online",
    "image editing tool",
    "background removal",
    "photo enhancement",
    
    // Technical Keywords
    "blur filter",
    "gaussian blur",
    "depth of field",
    "focus effect",
    "background softening",
    "image processing",
    "photo manipulation",
    "visual effects",
    "image enhancement",
    "photo retouching",
    
    // Use Case Keywords
    "profile photo blur",
    "headshot blur",
    "product photography",
    "ecommerce photos",
    "social media photos",
    "marketing images",
    "advertising photos",
    "website images",
    "blog photos",
    "presentation images",
    
    // Platform Keywords
    "online photo editor",
    "free photo editor",
    "web photo editor",
    "browser photo editor",
    "cloud photo editor",
    "instant photo editor",
    "no download photo editor",
    "mobile photo editor",
    "desktop photo editor",
    "cross-platform photo editor",
    
    // Quality Keywords
    "high quality blur",
    "professional blur",
    "smooth blur",
    "natural blur",
    "realistic blur",
    "precise blur",
    "accurate blur",
    "clean blur",
    "sharp blur",
    "crisp blur",
    
    // Format Keywords
    "JPG blur",
    "PNG blur",
    "JPEG blur",
    "image format blur",
    "photo format blur",
    "web image blur",
    "print image blur",
    "social media format",
    "profile picture format",
    "thumbnail blur",
    
    // Speed Keywords
    "instant blur",
    "fast blur",
    "quick blur",
    "rapid blur",
    "immediate blur",
    "real-time blur",
    "live blur",
    "instant preview",
    "fast processing",
    "quick results",
    
    // Free Keywords
    "free blur tool",
    "free photo blur",
    "free image blur",
    "free background blur",
    "no cost blur",
    "unlimited blur",
    "free forever",
    "no subscription",
    "no registration",
    "no signup required"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/background-blur" },
  openGraph: {
    title: "Free Background Blur Tool – Professional Photo Blur Effects Online | FastTools",
    description: "Create professional background blur effects instantly. Adjust blur intensity, preview results, and download high-quality images — free, fast, and secure online tool.",
    url: "https://www.fasttools.store/image-tools/background-blur",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Free Background Blur Tool – Professional Photo Blur Effects Online | FastTools",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Background Blur Tool – Professional Photo Blur Effects Online | FastTools",
    description: "Create professional background blur effects instantly. Adjust blur intensity, preview results, and download high-quality images — free, fast, and secure online tool.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Free Background Blur Tool – Professional Photo Blur Effects Online",
      alternateName: ["Background Blur Tool", "Photo Blur Tool", "Image Blur Tool", "Blur Effect Tool"],
      applicationCategory: "UtilitiesApplication",
      operatingSystem: ["Web Browser", "Windows", "macOS", "Linux", "iOS", "Android"],
      url: "https://www.fasttools.store/image-tools/background-blur",
      description: "Create professional background blur effects instantly. Adjust blur intensity, preview results, and download high-quality images — free, fast, and secure online tool.",
      inLanguage: ["en", "es", "fr", "de", "zh", "ar", "pt", "ru", "ja", "ko", "hi", "it", "nl", "tr", "pl"],
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Adjustable blur intensity",
        "Real-time preview",
        "High-quality output",
        "Multiple image formats",
        "Instant processing",
        "Professional results",
        "Background blur",
        "Portrait blur",
        "Product photo blur",
        "Social media blur",
        "Bokeh effect",
        "Depth of field",
        "Focus enhancement",
        "Image enhancement",
        "Photo retouching",
        "Visual effects",
        "No registration required",
        "Cross-platform support",
        "Mobile-friendly",
        "Browser-based processing",
        "Privacy-focused",
        "No file upload",
        "Instant download",
        "Batch processing",
        "Quality preservation",
        "Format optimization",
        "Social media ready",
        "Print quality",
        "Web optimized",
        "Professional grade"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 60,
          height: 60
        }
      }
    }),
  },
}

export default function BackgroundBlurPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Image Tools", href: "/image-tools" },
              { label: "Background Blur", href: "/image-tools/background-blur" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Code className="h-4 w-4 animate-pulse" />
                    <span>Background Blur Tool</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Free Background Blur Tool – Professional Photo Blur Effects Online
                  </h1>

                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Create professional background blur effects instantly. Adjust blur intensity, preview results, and download high-quality images — free, fast, and secure online tool.
                  </p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">Instant Processing</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                      <Globe className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">All Devices</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <Image className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">High Quality</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <Palette className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Professional</span>
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

                {/* Tool Component */}
                <div className="animate-fade-in-up animation-delay-200">
                  <ImageBackgroundBlur />
                </div>

                {/* Mobile/Tablet Ad - After tool */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Advanced Background Blur Technology</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our background blur tool uses sophisticated image processing algorithms to create professional blur effects. The tool applies gaussian blur filters with adjustable intensity, depth of field simulation, and focus enhancement to produce natural-looking background blur effects perfect for portrait blur, product photo blur, and social media blur applications.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Intelligent Blur Processing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The blur effect online technology automatically detects background elements while preserving subject sharpness. Our image blur tool provides real-time preview, instant blur processing, and high-quality output suitable for professional photo blur, marketing images, and ecommerce photos.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Professional Results</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our background blur tool delivers professional-grade results suitable for commercial use, social media content, and personal projects. The tool maintains image quality while creating stunning bokeh effects that enhance your photos.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Background Blur Use Cases & Applications</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Discover practical applications for our background blur tool in photography, marketing, and creative projects.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Photography & Portraits</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Create stunning portrait photos with professional background blur effects. Perfect for headshots, profile photos, and social media content. Our tool helps photographers achieve studio-quality results without expensive equipment.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">E-commerce & Product Photos</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Enhance product photos with subtle background blur to make items stand out. Ideal for online stores, marketplaces, and product catalogs. Our tool helps create professional product photography that drives sales.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Social Media & Marketing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Create eye-catching social media posts and marketing materials with professional background blur effects. Perfect for Instagram, Facebook, LinkedIn, and other platforms where visual appeal matters.
                    </p>
                  </div>

                  {/* FAQ Section */}
                  <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-accent" />
                      </div>
                      Free Background Blur Tool: Complete Guide
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What types of images work best with background blur?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our background blur tool works excellently with portrait photos, product photography, headshot blur, and social media photos. The tool is optimized for images with clear subject-background separation, making it perfect for profile photo blur, marketing images, and advertising photos.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How does the blur intensity affect the final result?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">The blur intensity controls the strength of the background blur effect. Lower values create subtle background softening perfect for professional headshots, while higher values produce dramatic bokeh effects ideal for artistic portrait blur and creative social media photos.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use this tool for ecommerce product photos?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Our product photo blur tool is specifically designed for ecommerce photos, marketing images, and website images. The professional blur results help products stand out while maintaining high quality for print and web use.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Is the background blur tool free to use?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Yes, our free background blur tool is completely free with no registration required. You can process unlimited images with our blur photo tool, download high-quality results, and use the tool across all devices without any subscription or cost.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What image formats are supported?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our image blur tool supports all major formats including JPG blur, PNG blur, and JPEG blur processing. The tool maintains original quality while providing optimized output for web image blur, print image blur, and social media format requirements.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How fast is the background blur processing?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our instant blur technology provides real-time preview and fast processing. The tool delivers quick results with instant preview capabilities, making it perfect for rapid photo editing workflows and batch processing multiple images.</p>
                      </div>
                    </div>
                    <div className="mt-6 block xl:hidden">
                      <div className="text-center mb-2">
                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                      </div>
                      <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                    </div>
                  </div>

                  {/* Related Tools */}
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Related Image & File Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border border-border shadow hover:shadow-md transition-all duration-300">
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm font-semibold text-card-foreground">Image to Text (OCR)</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">Extract text from images with AI</CardDescription>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <Button asChild className="w-full h-8 text-xs font-semibold">
                            <Link href="/image-tools/image-to-text" className="flex items-center justify-center gap-1">
                              Use Tool
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-border shadow hover:shadow-md transition-all duration-300">
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm font-semibold text-card-foreground">Image Cropper</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground">Crop images to perfect shapes</CardDescription>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <Button asChild className="w-full h-8 text-xs font-semibold">
                            <Link href="/image-tools/image-cropper" className="flex items-center justify-center gap-1">
                              Use Tool
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop Sidebar with AdSense */}
              <div className="hidden lg:block w-72">
                <div className="sticky top-32 space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
                  
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
