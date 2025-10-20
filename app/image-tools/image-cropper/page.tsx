import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageCropper } from "@/components/image-cropper"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Online Image Cropper | Circle & Square Crop Tool | FastTools",
  description:
    "Crop images online for free. Create circular profile pictures or square posts. Fast and easy—no software needed.",
  keywords: [
    // Primary Keywords (20)
    "image cropper",
    "free image cropper",
    "crop image online",
    "circular crop",
    "square crop",
    "profile picture cropper",
    "avatar maker",
    "social media crop",
    "instagram crop",
    "twitter profile crop",
    "linkedin profile crop",
    "youtube thumbnail crop",
    "crop to aspect ratio",
    "1:1 square",
    "circle mask",
    "round avatar",
    "crop preview",
    "download cropped image",
    "free online crop tool",
    "online crop tool",
    
    // Secondary Keywords (20)
    "image cropper online",
    "crop image online online",
    "circular crop online",
    "square crop online",
    "profile picture cropper online",
    "avatar maker online",
    "social media crop online",
    "instagram crop online",
    "twitter profile crop online",
    "linkedin profile crop online",
    "youtube thumbnail crop online",
    "crop to aspect ratio online",
    "1:1 square online",
    "circle mask online",
    "round avatar online",
    "crop preview online",
    "download cropped image online",
    "free online crop tool online",
    "online crop tool online",
    "image cropper tool online",
    
    // Long-tail Keywords (20)
    "free online image cropper",
    "best image cropper online",
    "image cropper with live preview",
    "free image cropper tool online",
    "online image cropper free",
    "image cropper online free",
    "crop image online free online",
    "circular crop free online",
    "square crop free online",
    "profile picture cropper free online",
    "avatar maker free online",
    "social media crop free online",
    "instagram crop free online",
    "twitter profile crop free online",
    "linkedin profile crop free online",
    "youtube thumbnail crop free online",
    "crop to aspect ratio free online",
    "1:1 square free online",
    "circle mask free online",
    "round avatar free online",
    
    // Additional SEO Keywords
    "crop preview",
    "download cropped image",
    "free online crop tool",
    "online crop tool",
    "image cropper tool",
    "image cropper online",
    "crop image online online",
    "circular crop online",
    "square crop online",
    "profile picture cropper online",
    "avatar maker online",
    "social media crop online",
    "instagram crop online",
    "twitter profile crop online",
    "linkedin profile crop online",
    "youtube thumbnail crop online",
    "crop to aspect ratio online",
    "1:1 square online",
    "circle mask online",
    "round avatar online",
    "crop preview online",
    "download cropped image online",
    "free online crop tool online",
    "online crop tool online",
    "image cropper tool online",
    "image cropper free",
    "crop image online free",
    "circular crop free",
    "square crop free",
    "profile picture cropper free",
    "avatar maker free",
    "social media crop free",
    "instagram crop free",
    "twitter profile crop free",
    "linkedin profile crop free",
    "youtube thumbnail crop free",
    "crop to aspect ratio free",
    "1:1 square free",
    "circle mask free",
    "round avatar free",
    "crop preview free",
    "download cropped image free",
    "free online crop tool free",
    "online crop tool free",
    "image cropper tool free",
    "image cropper tool",
    "crop image online tool",
    "circular crop tool",
    "square crop tool",
    "profile picture cropper tool",
    "avatar maker tool",
    "social media crop tool",
    "instagram crop tool",
    "twitter profile crop tool",
    "linkedin profile crop tool",
    "youtube thumbnail crop tool",
    "crop to aspect ratio tool",
    "1:1 square tool",
    "circle mask tool",
    "round avatar tool",
    "crop preview tool",
    "download cropped image tool",
    "free online crop tool tool",
    "online crop tool tool",
    "image cropper tool tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/image-cropper" },
  openGraph: {
    title: "Free Online Image Cropper | Circle & Square Crop Tool | FastTools",
    description: "Crop images online for free. Create circular profile pictures or square posts. Fast and easy—no software needed.",
    url: "https://www.fasttools.store/image-tools/image-cropper",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Online Image Cropper - Circle & Square Crop Tool",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Cropper | Circle & Square Crop Tool | FastTools",
    description: "Crop images online for free. Create circular profile pictures or square posts. Fast and easy—no software needed.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Online Image Cropper",
      alternateName: "Image Crop Tool",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/image-tools/image-cropper",
      description:
        "Crop images into circular or square shapes with live preview and download.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Circle crop", 
        "Square crop", 
        "Preview/Download",
        "Image cropper",
        "Crop image online",
        "Circular crop",
        "Square crop",
        "Profile picture cropper",
        "Avatar maker",
        "Social media crop"
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
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/image-tools/image-cropper",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "image cropper, free image cropper, crop image online, circular crop, square crop, profile picture cropper, avatar maker, social media crop",
      about: {
        "@type": "Thing",
        name: "Image Cropping and Editing",
        description: "Free online tools for image cropping, photo editing, and social media image preparation"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function ImageCropperPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "Image Cropper", href: "/image-tools/image-cropper" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Online Image Cropper</h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Crop images into circular or square shapes. Perfect for profile pictures, avatars, and social media posts.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageCropper />
          
          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Crop</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload an image and select circle or square crop.</li>
              <li>Adjust the crop area and download your new image.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/background-blur">Background Blur</Link></li>
              <li><Link href="/image-tools/image-to-text">Image to Text (OCR)</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
