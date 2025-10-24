import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FabricImageEditorClient } from "@/components/fabric/FabricImageEditorClient"
import { NavbarFooterHider } from "@/components/navbar-footer-hider"
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
      <NavbarFooterHider />
      <div className="h-screen bg-background">
        <div className="w-full">

          <div className="max-w-full mx-auto h-full">
            <div className="h-full">
              {/* Tool Component */}
              <div className="h-full">
                <FabricImageEditorClient />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
