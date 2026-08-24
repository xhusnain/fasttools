import Link from "next/link"
import { GButton } from "@/ui/gbutton"
import { GToolCard } from "@/ui/gtool-card"

import { Calculator, Home, Search, Image, Download, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found - 404",
  description: "The page you're looking for doesn't exist. Browse our free online tools including calculators, converters, and more.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full flex items-center justify-center bg-primary/10">
              <Calculator className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Popular Tools */}
          <div className="text-left w-full">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Search className="h-6 w-6" />
              Popular Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <GToolCard
                title="HEIC to JPG Converter"
                description="Convert iPhone HEIC photos to JPG right in your browser — private, batch up to 100, no upload"
                href="/image-tools/heic-to-jpg"
                icon={Image}
                badge="Popular"
                badgeColor="bg-pink-500/90"
              />
              <GToolCard
                title="YouTube Channel Checker"
                description="Check YouTube handle and channel-name availability instantly before you launch your channel"
                href="/social-media-tools/channel-checker"
                icon={Search}
                badge="YouTube"
                badgeColor="bg-blue-500/90"
              />
              <GToolCard
                title="YouTube Thumbnail Downloader"
                description="Download YouTube video thumbnails in every quality size, from default up to full HD and 4K maxres"
                href="/social-media-tools/youtube-thumbnail"
                icon={Download}
                badge="YouTube"
                badgeColor="bg-red-500/90"
              />
              <GToolCard
                title="Anniversary Calculator"
                description="Calculate how long you've been together and see upcoming relationship milestones worth celebrating"
                href="/fun-tools/anniversary"
                icon={Heart}
                badge="Love"
                badgeColor="bg-pink-500/90"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <GButton size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </GButton>
            </Link>
            <Link href="/calculator">
              <GButton variant="outline" size="lg" className="w-full sm:w-auto">
                <Search className="mr-2 h-4 w-4" />
                Browse All Tools
              </GButton>
            </Link>
          </div>

          {/* Help Text */}
          <div className="text-sm text-muted-foreground">
            <p>
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-link hover:text-link-hover hover:underline font-medium">
                contact us
              </Link>{" "}
              and we'll help you find what you're looking for.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

