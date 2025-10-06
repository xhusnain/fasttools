import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageBackgroundBlur } from "@/components/image-background-blur"

export const metadata: Metadata = {
  title: "Image Background Blur Tool - Free Online Photo Editor | FastTools",
  description:
    "Blur image backgrounds online for free. Adjust blur intensity and create professional-looking photos instantly. No software installation required.",
  keywords: "background blur, blur image, photo editor, blur background online, image blur tool, free photo blur",
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

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageBackgroundBlur />
        </div>
      </div>
    </div>
  )
}
