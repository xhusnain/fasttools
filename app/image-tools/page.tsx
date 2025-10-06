import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Beer as Blur, Crop, FileStack, Unlock, Monitor, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Image & File Tools - Free Online Image Editor & PDF Tools | FastTools",
  description:
    "Free online image and file utility tools including OCR converter, background blur, image cropper, PDF splitter, PDF merger, and PDF unlocker. Fast, secure, and easy to use.",
  keywords:
    "image to text, OCR converter, background blur, image cropper, PDF splitter, PDF merger, PDF unlocker, screenshot to text, online image editor, free PDF tools",
  openGraph: {
    title: "Image & File Tools - Free Online Image Editor & PDF Tools",
    description:
      "Free online image and file utility tools. Convert images to text, blur backgrounds, crop images, split/merge PDFs, and more.",
    type: "website",
  },
}

const imageTools = [
  {
    name: "Image to Text (OCR)",
    description: "Extract text from images using OCR technology. Perfect for digitizing documents and screenshots.",
    icon: FileText,
    href: "/image-tools/image-to-text",
    color: "text-blue-600",
  },
  {
    name: "Background Blur",
    description: "Blur image backgrounds with adjustable intensity. Create professional-looking photos instantly.",
    icon: Blur,
    href: "/image-tools/background-blur",
    color: "text-purple-600",
  },
  {
    name: "Image Cropper",
    description: "Crop images into circular or square shapes. Perfect for profile pictures and social media.",
    icon: Crop,
    href: "/image-tools/image-cropper",
    color: "text-green-600",
  },
  {
    name: "PDF Splitter & Merger",
    description: "Split large PDFs or merge multiple PDFs into one. Fast and secure processing.",
    icon: FileStack,
    href: "/image-tools/pdf-tools",
    color: "text-red-600",
  },
  {
    name: "PDF Unlocker",
    description: "Remove password protection from PDFs. Unlock your documents quickly and easily.",
    icon: Unlock,
    href: "/image-tools/pdf-unlocker",
    color: "text-orange-600",
  },
  {
    name: "Screenshot to Text",
    description: "Extract text from screenshots. Convert code snippets and error messages to editable text.",
    icon: Monitor,
    href: "/image-tools/screenshot-to-text",
    color: "text-cyan-600",
  },
]

export default function ImageToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
          ]}
        />

        <div className="mt-8 mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Image & File Utility Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Professional image editing and PDF tools. Extract text, blur backgrounds, crop images, and manage PDFs - all
            free and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {imageTools.map((tool, index) => (
            <Card
              key={tool.name}
              className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.description}</p>
                  <Button asChild variant="outline" size="sm" className="h-9 text-sm font-medium group bg-transparent">
                    <Link href={tool.href}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-3">Why Use Our Image & File Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All tools run directly in your browser for maximum privacy and security. No uploads to external servers,
              no data collection, and completely free to use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">100% Secure</p>
                <p className="text-muted-foreground">All processing happens locally</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">No Limits</p>
                <p className="text-muted-foreground">Use as many times as you want</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">Always Free</p>
                <p className="text-muted-foreground">No hidden fees or subscriptions</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
