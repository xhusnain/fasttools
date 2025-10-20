import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageBackgroundBlur } from "@/components/image-background-blur"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Image Background Blur | Online Photo Blur Tool | FastTools",
  description:
    "Blur image backgrounds online. Adjust intensity for profile photos, product shots, and social media posts.",
  keywords: [
    // Primary Keywords (20)
    "background blur",
    "free background blur",
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
    "blur background online online",
    "image blur tool online",
    "photo blur effect online",
    "portrait blur online",
    "product photo blur online",
    "social media blur online",
    "bokeh effect online",
    "blur intensity online",
    "free photo blur online",
    "image blur online online",
    "photo blur online online",
    "blur tool online online",
    "blur effect online online",
    "blur background tool online",
    "blur photo tool online",
    "blur image tool online",
    "background blur tool online",
    
    // Long-tail Keywords (20)
    "free online background blur",
    "best background blur online",
    "background blur with live preview",
    "free background blur tool online",
    "online background blur free",
    "background blur online free",
    "blur image free online",
    "photo editor free online",
    "blur background online free online",
    "image blur tool free online",
    "photo blur effect free online",
    "portrait blur free online",
    "product photo blur free online",
    "social media blur free online",
    "bokeh effect free online",
    "blur intensity free online",
    "free photo blur free online",
    "image blur online free online",
    "photo blur online free online",
    "blur tool online free online",
    
    // Additional SEO Keywords
    "blur effect online",
    "blur background tool",
    "blur photo tool",
    "blur image tool",
    "background blur tool",
    "background blur online",
    "blur image online",
    "photo editor online",
    "blur background online online",
    "image blur tool online",
    "photo blur effect online",
    "portrait blur online",
    "product photo blur online",
    "social media blur online",
    "bokeh effect online",
    "blur intensity online",
    "free photo blur online",
    "image blur online online",
    "photo blur online online",
    "blur tool online online",
    "blur effect online online",
    "blur background tool online",
    "blur photo tool online",
    "blur image tool online",
    "background blur tool online",
    "background blur free",
    "blur image free",
    "photo editor free",
    "blur background online free",
    "image blur tool free",
    "photo blur effect free",
    "portrait blur free",
    "product photo blur free",
    "social media blur free",
    "bokeh effect free",
    "blur intensity free",
    "free photo blur free",
    "image blur online free",
    "photo blur online free",
    "blur tool online free",
    "blur effect online free",
    "blur background tool free",
    "blur photo tool free",
    "blur image tool free",
    "background blur tool free",
    "background blur tool",
    "blur image tool",
    "photo editor tool",
    "blur background online tool",
    "image blur tool tool",
    "photo blur effect tool",
    "portrait blur tool",
    "product photo blur tool",
    "social media blur tool",
    "bokeh effect tool",
    "blur intensity tool",
    "free photo blur tool",
    "image blur online tool",
    "photo blur online tool",
    "blur tool online tool",
    "blur effect online tool",
    "blur background tool tool",
    "blur photo tool tool",
    "blur image tool tool",
    "background blur tool tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/background-blur" },
  openGraph: {
    title: "Image Background Blur | Online Photo Blur Tool | FastTools",
    description: "Blur image backgrounds online. Adjust intensity for profile photos, product shots, and social media posts.",
    url: "https://www.fasttools.store/image-tools/background-blur",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Image Background Blur - Online Photo Blur Tool",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Background Blur | Online Photo Blur Tool | FastTools",
    description: "Blur image backgrounds online. Adjust intensity for profile photos, product shots, and social media posts.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Image Background Blur",
      alternateName: "Background Blur Tool",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/image-tools/background-blur",
      description:
        "Apply adjustable background blur to images for profile and product photos.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Adjustable blur", 
        "Preview", 
        "Copy/Save",
        "Background blur",
        "Blur image",
        "Photo editor",
        "Blur background online",
        "Image blur tool",
        "Photo blur effect",
        "Portrait blur"
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
      downloadUrl: "https://www.fasttools.store/image-tools/background-blur",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "background blur, free background blur, blur image, photo editor, blur background online, image blur tool, photo blur effect",
      about: {
        "@type": "Thing",
        name: "Image Processing and Photo Editing",
        description: "Free online tools for image processing, photo editing, and background manipulation"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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
