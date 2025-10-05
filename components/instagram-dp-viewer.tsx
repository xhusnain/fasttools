"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function InstagramDpViewer() {
  const [username, setUsername] = useState("")
  const [profilePic, setProfilePic] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleView = () => {
    setLoading(true)
    setError(null)
    setProfilePic(null)

    setTimeout(() => {
      // Note: This is a placeholder. In production, you'd need to use Instagram's API
      // or a third-party service that provides this functionality legally
      const cleanUsername = username.replace("@", "").trim()

      if (cleanUsername) {
        // This is a demo URL - in production, you'd fetch the actual profile picture
        setProfilePic(`/placeholder.svg?height=400&width=400&query=Instagram profile picture for ${cleanUsername}`)
      } else {
        setError("Please enter a valid username")
      }
      setLoading(false)
    }, 1000)
  }

  const downloadImage = () => {
    if (profilePic) {
      const link = document.createElement("a")
      link.href = profilePic
      link.download = `${username}-profile-picture.jpg`
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-amber-50 border-amber-200">
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-amber-900">Important Notice</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              This tool is for educational purposes only. Please respect user privacy and Instagram's terms of service.
              Only view profile pictures of public accounts.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-sm font-medium text-foreground">
              Instagram Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="@username or username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 h-11 text-base"
            />
          </div>

          <Button
            onClick={handleView}
            disabled={!username || loading}
            className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Loading Profile Picture...
              </>
            ) : (
              "View Profile Picture"
            )}
          </Button>

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      </Card>

      {profilePic && (
        <Card className="p-6 bg-card border-border shadow-sm animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Profile Picture</h3>
            <div className="flex flex-col items-center gap-4">
              <img
                src={profilePic || "/placeholder.svg"}
                alt={`${username} profile picture`}
                className="w-full max-w-md rounded-lg border border-border shadow-md"
              />
              <Button onClick={downloadImage} className="w-full max-w-md h-11 text-base font-medium">
                <Download className="mr-2 h-5 w-5" />
                Download HD Image
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter an Instagram username (with or without @)</li>
          <li>• Click "View Profile Picture" to load the image</li>
          <li>• Download the high-quality version if needed</li>
          <li>• Only works for public Instagram accounts</li>
        </ul>
      </Card>
    </div>
  )
}
