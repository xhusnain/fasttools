import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageCropper } from "@/components/image-cropper"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Online Image Cropper — Circle & Square Crop Tool | SmartToolboxes",
  description:
    "Crop images online for free. Create circular profile pictures or square posts. Fast and easy—no software needed.",
  keywords: [
    "image cropper",
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
    "free online crop tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/image-cropper" },
  openGraph: {
    title: "Online Image Cropper — Circle & Square",
    description: "Crop images into circle or square with live preview.",
    url: "https://www.fasttools.store/image-tools/image-cropper",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Online Image Cropper", description: "Create circular avatars and square posts." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Online Image Cropper",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/image-cropper",
      description:
        "Crop images into circular or square shapes with live preview and download.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Circle crop", "Square crop", "Preview/Download"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
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

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageCropper />
          
          {/* Center Content Ad */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24" />
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

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
