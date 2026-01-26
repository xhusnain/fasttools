"use client"

import { useState, useEffect, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { Download, AlertCircle, User, Eye, Shield } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import { downloadBlob } from "@/lib/download-utils"

export function InstagramDpViewer() {
  const [username, setUsername] = useState("")
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (profileData && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [profileData])

  const extractUsername = (input: string): string | null => {
    if (!input) return null
    
    const trimmed = input.trim()
    
    const urlPatterns = [
      /instagram\.com\/([a-zA-Z0-9._]+)/,
      /instagram\.com\/p\/([a-zA-Z0-9._]+)/,
      /^https?:\/\/(www\.)?instagram\.com\/([a-zA-Z0-9._]+)/,
    ]
    
    for (const pattern of urlPatterns) {
      const match = trimmed.match(pattern)
      if (match) {
        return (match[1] || match[2] || match[0]).split('?')[0].split('/').pop()?.toLowerCase() || null
      }
    }
    
    return trimmed.replace("@", "").toLowerCase()
  }

  const fetchProfileData = async () => {
    try {
      const extractedUsername = extractUsername(username)
      
      if (!extractedUsername) {
        setError("Please enter a valid username or Instagram profile link")
        return
      }

      setLoading(true)
      setError(null)
      setProfileData(null)

      const response = await fetch(`/api/instagram/profile?username=${encodeURIComponent(extractedUsername)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(20000),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to fetch profile: ${response.status}`)
      }

      const data = await response.json()

      if (data.success && data.data) {
        setProfileData(data.data)
        setError(null)
      } else {
        throw new Error(data.error || 'Invalid response from server')
      }
    } catch (error: any) {
      setError(error.message || 'Failed to fetch profile. Please try again.')
      setProfileData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleView = async () => {
    await fetchProfileData()
  }

  const downloadImage = async () => {
    if (!profileData?.profilePicUrl) return

    setDownloading(true)

    try {
      await downloadBlob(profileData.profilePicUrl, `${profileData.username}-profile-picture.jpg`)
      setDownloading(false)
    } catch (error) {
      setError('Failed to download image. Please try right-clicking on the image and selecting "Save image as".')
      setDownloading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <GCard className="p-4 sm:p-6 bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 shadow-lg">
        <div className="flex gap-3 sm:gap-4">
          <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-sm sm:text-base font-medium text-foreground">Important Notice</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              This tool is for educational purposes only. Please respect user privacy and Instagram's terms of service.
              Only view profile pictures of public accounts.
            </p>
          </div>
        </div>
      </GCard>

      <GCard className="border-2 border-border bg-card shadow-2xl">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center shadow-lg">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Instagram DP Viewer
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  View and download Instagram profile pictures in HD quality
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <GLabel htmlFor="username" className="text-sm font-medium text-foreground">
                Instagram Username
              </GLabel>
              <GInput
                id="username"
                type="text"
                placeholder="@username, username, or Instagram profile link"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleView()}
                className="h-10 sm:h-11 text-sm bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <GButton
              onClick={handleView}
              disabled={!username || loading}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading ? (
                <>
                  <LoadingSpinner className="mr-2" />
                  <span className="hidden sm:inline">Loading Profile Picture...</span>
                  <span className="sm:hidden">Loading...</span>
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">View Profile Picture</span>
                  <span className="sm:hidden">View DP</span>
                </>
              )}
            </GButton>

            {error && (
              <div className="p-4 rounded-lg bg-destructive/20 border border-destructive/30">
                <div className="flex items-center gap-2 text-destructive-foreground">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  💡 Alternative: Right-click on the profile picture and select "Save image as"
                </p>
              </div>
            )}
          </div>
        </div>
      </GCard>

      {profileData && (
        <GCard ref={resultRef} className="p-4 sm:p-6 bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Profile Information</h3>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative">
                <img
                  src={
                    profileData.profilePicUrl && 
                    (profileData.profilePicUrl.includes('cdninstagram.com') || 
                     profileData.profilePicUrl.includes('fbcdn.net') ||
                     profileData.isDefaultProfilePic ||
                     profileData.profilePicUrl.includes('anonymous') || 
                     profileData.profilePicUrl.includes('YW5vbnltb3VzX3Byb2ZpbGVfcGlj') ||
                     profileData.profilePicUrl.includes('anonymous_profile_pic'))
                      ? `/api/instagram/image-proxy?url=${encodeURIComponent(profileData.profilePicUrl)}`
                      : profileData.profilePicUrl
                  }
                  alt={`${profileData.username} profile picture`}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-border shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={downloadImage}
                  title="Click to download or right-click to save"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src
                    const target = e.currentTarget
                    
                    if (currentSrc.includes('/api/instagram/image-proxy')) {
                      target.src = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${profileData.username.charAt(0).toUpperCase()}`
                    } else if (profileData.profilePicUrl && !profileData.profilePicUrl.includes('placeholder')) {
                      target.src = `/api/instagram/image-proxy?url=${encodeURIComponent(profileData.profilePicUrl)}`
                    } else {
                      target.src = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${profileData.username.charAt(0).toUpperCase()}`
                    }
                  }}
                />
                {profileData.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground text-center">
                💡 Click the image above or use the download button below<br />
                <span className="text-foreground">⚠️ May open in new tab due to browser security</span>
              </p>

              <div className="text-center space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-foreground">{profileData.fullName || profileData.username}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">@{profileData.username}</p>
                {profileData.biography && (
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">{profileData.biography}</p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {(profileData.posts || 0).toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {(profileData.followers || 0).toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {(profileData.following || 0).toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Following</p>
                </div>
              </div>

              <GButton
                onClick={downloadImage}
                disabled={downloading}
                className="w-full max-w-sm sm:max-w-md h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {downloading ? (
                  <>
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Downloading...</span>
                    <span className="sm:hidden">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Download Profile Picture</span>
                    <span className="sm:hidden">Download</span>
                  </>
                )}
              </GButton>
            </div>
          </div>
        </GCard>
      )}

      <GCard className="p-4 sm:p-6 bg-card border border-border shadow-lg">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">How to Use</h3>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <li>• Enter an Instagram username (with or without @) or paste a profile link</li>
          <li>• Examples: <code className="text-xs bg-muted px-1 rounded">test</code> or <code className="text-xs bg-muted px-1 rounded">https://www.instagram.com/test</code></li>
          <li>• Click "View Profile Picture" to load the image</li>
          <li>• Download the high-quality version if needed</li>
          <li>• Only works for public Instagram accounts</li>
        </ul>
      </GCard>
    </div>
  )
}
