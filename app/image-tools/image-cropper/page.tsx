import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageCropper } from "@/components/image-cropper"

export const metadata: Metadata = {
  title: "Online Image Cropper - Circular & Square Crop Tool | FastTools",
  description:
    "Crop images online for free. Create circular profile pictures or square social media posts. Fast, easy, and no software needed.",
  keywords:
    "image cropper, crop image online, circular crop, square crop, profile picture cropper, avatar maker, online crop tool",
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

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageCropper />
        </div>
      </div>
    </div>
  )
}
