"use client"

import { GBanner } from "@/components/g-banner"

export interface TiktokDownloaderProps {
  compact?: boolean
}

export function TiktokDownloader({ compact = false }: TiktokDownloaderProps) {
  return (
    <div className="space-y-6">
      <GBanner
        variant="medium"
        title="TikTok Downloader is Under Maintenance"
        description="We're currently improving this tool. Please check back soon for an enhanced experience."
      />
    </div>
  )
}
