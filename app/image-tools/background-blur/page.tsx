import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageBackgroundBlur } from "@/components/image-background-blur"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Image Background Blur — Online Photo Blur Tool | SmartToolboxes",
  description:
    "Blur image backgrounds online. Adjust intensity for profile photos, product shots, and social media posts.",
  keywords: [
    "background blur",
    "blur image",
    "photo editor",
    "blur background online",
    "image blur tool",
    "photo blur effect",
    "portrait blur",
    "product photo blur",
    "social media blur",
    "bokeh effect",
    "blur intensity",
    "free photo blur"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/background-blur" },
  openGraph: {
    title: "Image Background Blur — Online Tool",
    description: "Add professional blur effects to images for profiles and posts.",
    url: "https://www.fasttools.store/image-tools/background-blur",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Image Background Blur", description: "Blur image backgrounds online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Image Background Blur",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/background-blur",
      description:
        "Apply adjustable background blur to images for profile and product photos.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Adjustable blur", "Preview", "Copy/Save"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function BackgroundBlurPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "Background Blur", href: "/image-tools/background-blur" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Image Background Blur Tool
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Add professional blur effects to your images. Adjust intensity from subtle to dramatic for perfect results.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageBackgroundBlur />
          
          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload an image and adjust the blur intensity.</li>
              <li>Preview results and save or copy the blurred image.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/image-cropper">Image Cropper</Link></li>
              <li><Link href="/image-tools/image-to-text">Image to Text (OCR)</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
