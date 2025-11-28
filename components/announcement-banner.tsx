import Link from "next/link"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Download, Music } from "lucide-react"

interface Announcement {
  id: string
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  isNew?: boolean
  isLive?: boolean
}

const announcements: Announcement[] = [
  {
    id: "ai-tools",
    title: "AI Tools Collection",
    description: "Generate captions, hashtags, lyrics, and memes with AI",
    href: "/ai-tools",
    icon: Sparkles,
    badge: "Popular"
  },
  {
    id: "tiktok-downloader",
    title: "TikTok Downloader is Live!",
    description: "Download TikTok videos without watermark - HD quality, fast & secure",
    href: "/social-media-tools/tiktok-downloader",
    icon: Download,
    badge: "New",
    isNew: true,
    isLive: true
  }
]

export function AnnouncementBanner() {
  const currentAnnouncement = announcements[0] // Show the first (most recent) announcement

  if (!currentAnnouncement) return null

  const IconComponent = currentAnnouncement.icon

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Professional square/rectangular design */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-border/50 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />

        <div className="relative">
          {/* Header with badges */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Professional icon container */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                {currentAnnouncement.isLive && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white" />
                )}
              </div>

              {/* Title and badges */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-foreground border-orange-400/30 text-xs font-medium px-2 py-1"
                  >
                    {currentAnnouncement.badge}
                  </Badge>
                  {currentAnnouncement.isLive && (
                    <Badge
                      variant="destructive"
                      className="bg-red-500 text-white border-red-400 text-xs font-medium px-2 py-1 animate-pulse"
                    >
                      LIVE
                    </Badge>
                  )}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {currentAnnouncement.title}
                </h3>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 rounded-xl font-semibold"
            >
              <Link href={currentAnnouncement.href} className="flex items-center gap-2">
                Try Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Description */}
          <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
            <p className="text-foreground text-sm leading-relaxed">
              {currentAnnouncement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Alternative compact version for smaller spaces
export function CompactAnnouncementBanner() {
  const currentAnnouncement = announcements[0]

  if (!currentAnnouncement) return null

  const IconComponent = currentAnnouncement.icon

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 shadow-lg border border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-red-500 rounded-lg flex items-center justify-center">
              <IconComponent className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">
                  {currentAnnouncement.title}
                </span>
                {currentAnnouncement.isLive && (
                  <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                    LIVE
                  </span>
                )}
              </div>
              <p className="text-foreground text-xs">
                {currentAnnouncement.description}
              </p>
            </div>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-gradient-to-r from-primary to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200 px-4 py-2 rounded-lg font-medium"
          >
            <Link href={currentAnnouncement.href} className="flex items-center gap-1">
              Try Now
              <ArrowRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
