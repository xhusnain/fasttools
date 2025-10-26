import type { Metadata } from "next"
import { FabricImageEditorClient } from "@/components/fabric/FabricImageEditorClient"
import { NavbarFooterHider } from "@/components/navbar-footer-hider"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Photo Editor – Professional Online Image Editing Tool | FastTools",
  description: "Edit photos online with professional tools. Apply filters, adjust brightness, contrast, saturation, and more. Free, fast, and secure online photo editor.",
  keywords: [
    // Primary Keywords (20)
    "photo editor",
    "online photo editor",
    "free photo editor",
    "AI photo editor",
    "photo editing tool",
    "image editor",
    "photo editing app",
    "online image editor",
    "photo editor online free",
    "AI image editor",
    "best photo editor",
    "photo enhancer",
    "photo retouching tool",
    "background remover",
    "photo editing software",
    "photo editor free download",
    "photo editing online",
    "AI photo enhancer",
    "photo editing website",
    "photo correction tool",

    // Secondary Keywords (20)
    "free online photo editor",
    "AI photo editor online",
    "best free photo editor online",
    "photo editor with background remover",
    "AI photo editing tool",
    "image enhancer online",
    "online photo retouching tool",
    "edit photos online free",
    "AI picture editor",
    "photo editing app for PC",
    "free image editing tools",
    "AI background remover",
    "HD photo editor online",
    "photo filter editor",
    "online portrait editor",
    "AI object remover",
    "photo color correction tool",
    "AI editing app",
    "free image enhancer",
    "photo cleanup tool",

    // Long-tail Keywords (20)
    "best free AI photo editor online",
    "AI photo editor for background removal",
    "online photo editor without watermark",
    "AI photo retouching tool free",
    "edit and enhance photos online free",
    "photo editor with filters and effects",
    "AI-powered online photo editor tool",
    "edit photos and remove objects online",
    "background remover and photo enhancer",
    "free online picture editing website",
    "AI image restoration and upscaler",
    "photo retouching software for beginners",
    "online editor for professional photos",
    "AI photo editing for social media images",
    "photo filter and color correction app",
    "best AI image editor for photographers",
    "free photo editing and enhancement tool",
    "photo editor with AI effects and styles",
    "AI photo restoration and retouch tool",
    "edit photos easily online without app",

    // Additional SEO Keywords (20)
    "AI photo editing software",
    "AI image enhancer free",
    "photo editing tools online",
    "online background eraser",
    "picture editor free online",
    "AI photo upscaler",
    "AI retouching app",
    "AI color correction tool",
    "image editing software free",
    "photo editing AI tools",
    "photo editor for Instagram",
    "AI-powered editing platform",
    "photo editing websites free",
    "AI photo manipulation tool",
    "AI editing suite",
    "professional photo editor online",
    "photo effects generator",
    "photo editor for PC and mobile",
    "AI art photo editor",
    "free AI photo editing app"
],
  alternates: { canonical: "https://www.fasttools.store/image-tools/photo-editor" },
  openGraph: {
    title: "Free Photo Editor – Professional Online Image Editing Tool | FastTools",
    description: "Edit photos online with professional tools. Apply filters, adjust brightness, contrast, saturation, and more. Free, fast, and secure online photo editor.",
    url: "https://www.fasttools.store/image-tools/photo-editor",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Free Photo Editor – Professional Online Image Editing Tool | FastTools",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Photo Editor – Professional Online Image Editing Tool | FastTools",
    description: "Edit photos online with professional tools. Apply filters, adjust brightness, contrast, saturation, and more. Free, fast, and secure online photo editor.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Free Photo Editor – Professional Online Image Editing Tool",
      alternateName: ["Photo Editor", "Image Editor", "Online Photo Editor", "Free Photo Editor"],
      applicationCategory: "UtilitiesApplication",
      operatingSystem: ["Web Browser", "Windows", "macOS", "Linux", "iOS", "Android"],
      url: "https://www.fasttools.store/image-tools/photo-editor",
      description: "Edit photos online with professional tools. Apply filters, adjust brightness, contrast, saturation, and more. Free, fast, and secure online photo editor.",
      inLanguage: ["en", "es", "fr", "de", "zh", "ar", "pt", "ru", "ja", "ko", "hi", "it", "nl", "tr", "pl"],
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Photo filters",
        "Brightness adjustment",
        "Contrast adjustment",
        "Saturation adjustment",
        "Hue adjustment",
        "Color correction",
        "Image enhancement",
        "Photo retouching",
        "Real-time preview",
        "High-quality output",
        "Multiple image formats",
        "Instant processing",
        "Professional results",
        "No registration required",
        "Cross-platform support",
        "Mobile-friendly",
        "Browser-based editing",
        "Privacy-focused",
        "Instant download",
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

export default function PhotoEditorPage() {
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
