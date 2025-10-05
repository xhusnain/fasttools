"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function TiktokDownloader() {
  const [videoUrl, setVideoUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const handleDownload = () => {
    setLoading(true)
    setTimeout(() => {
      // Note: This is a placeholder for demonstration
      // In production, you would need to implement proper TikTok video downloading
      // through legal means and with proper attribution
      alert(
        "TikTok video download functionality requires backend implementation with proper API access and legal compliance.",
      )
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-red-50 border-red-200">
        <div className="flex gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm font-medium text-red-900">Legal Disclaimer</p>
            <p className="text-sm text-red-800 leading-relaxed">
              Downloading TikTok videos may violate copyright laws and TikTok's terms of service. This tool is for
              educational purposes only. Always respect content creators' rights and only download videos you have
              permission to use. Use downloaded content responsibly and give proper credit to original creators.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="video-url" className="text-sm font-medium text-foreground">
              TikTok Video URL
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.tiktok.com/@username/video/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-2 h-11 text-base"
            />
          </div>

          <Button
            onClick={handleDownload}
            disabled={!videoUrl || loading}
            className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download Video (No Watermark)
              </>
            )}
          </Button>
        </div>
      </Card>

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• This tool requires backend implementation for full functionality</li>
          <li>• Always respect copyright and content creator rights</li>
          <li>• Only download videos you have permission to use</li>
          <li>• Give proper credit to original creators when sharing</li>
          <li>• Check TikTok's terms of service before downloading</li>
        </ul>
      </Card>
    </div>
  )
}
