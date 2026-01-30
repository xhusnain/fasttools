"use client"

import { useState, useEffect, useRef } from "react"
import { HttpClient } from "@/services/api/http-client"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { Download, AlertCircle, User, Eye, Lock, Globe, CheckCircle2 } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import { downloadBlob } from "@/lib/download-utils"
import { env } from "@/config/env"

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

      const pythonApiUrl = env.pythonApiUrl || "http://localhost:8000";
      const apiUrl = `${pythonApiUrl}/api/instagram/user?username=${encodeURIComponent(extractedUsername)}`;

      const response = await HttpClient.get(
        apiUrl,
        {
          baseURL: '',
          timeout: 20000,
        }
      )

      if (response.data) {
        const backendData = response.data.data || response.data
        setProfileData(backendData)
        setError(null)
      } else {
        throw new Error('Invalid response from server')
      }
    } catch (error: any) {
      console.error("API Error:", error)
      let errorMessage = "Failed to fetch profile. Please try again."

      if (error && (error.message || error.details)) {
        if (error.details && (error.details.error || error.details.message)) {
          errorMessage = error.details.error || error.details.message
        } else if (error.message) {
          errorMessage = error.message
        }
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      setError(errorMessage)
      setProfileData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleView = async () => {
    await fetchProfileData()
  }

  const downloadImage = async (quality: 'sd' | 'hd' = 'hd') => {
    const imageUrl = quality === 'hd'
      ? (profileData?.profile_pic_url_hd || profileData?.profile_pic_url)
      : profileData?.profile_pic_url

    if (!imageUrl) return

    setDownloading(true)

    try {
      const response = await HttpClient.download(imageUrl, { baseURL: '' })

      const blob = response.data
      const blobUrl = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = blobUrl
      link.download = `${profileData.username}-profile-picture-${quality}.jpg`
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
      setDownloading(false)
    } catch (error) {
      console.error('Download error:', error)
      setError('Failed to download image. Please try again.')
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
                  src={profileData.profile_pic_url_hd || profileData.profile_pic_url}
                  alt={`${profileData.username} profile picture`}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-border shadow-lg object-cover"
                  title={`${profileData.username} profile picture`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.src = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${profileData.username.charAt(0).toUpperCase()}`
                  }}
                />
                {profileData.is_verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                {profileData.is_private && !profileData.is_verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-muted rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground">
                    {profileData.full_name || profileData.username}
                  </h4>
                  {profileData.is_verified && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 border border-primary/30">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">Verified</span>
                    </div>
                  )}
                  {profileData.is_private && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted border border-border">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Private</span>
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">@{profileData.username}</p>
                {profileData.biography && (
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto px-4">
                    {profileData.biography}
                  </p>
                )}
                {profileData.external_url && (
                  <a
                    href={profileData.external_url.startsWith('http') ? profileData.external_url : `https://${profileData.external_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:underline mt-1"
                  >
                    <Globe className="h-3 w-3" />
                    {profileData.external_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                )}
              </div>

              {/* Data Table for GEO Rules (Data Density) */}
              <div className="w-full overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 font-medium">Metric</th>
                      <th className="px-4 py-2 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-background">
                      <td className="px-4 py-2 text-muted-foreground">Posts</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.posts_count || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-2 text-muted-foreground">Followers</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.followers || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-2 text-muted-foreground">Following</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.followees || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-background">
                      <td className="px-4 py-2 text-muted-foreground">Account Type</td>
                      <td className="px-4 py-2 font-bold text-foreground">{profileData.is_private ? 'Private 🔒' : 'Public 🌍'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-full max-w-sm sm:max-w-md space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {profileData.profile_pic_url && (
                    <GButton
                      onClick={() => downloadImage('sd')}
                      disabled={downloading}
                      variant="outline"
                      className="w-full h-10 sm:h-11 text-sm font-medium"
                    >
                      {downloading ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download SD</span>
                        </>
                      )}
                    </GButton>
                  )}
                  {(profileData.profile_pic_url_hd || profileData.profile_pic_url) && (
                    <GButton
                      onClick={() => downloadImage('hd')}
                      disabled={downloading}
                      className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {downloading ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          <span>Download HD</span>
                        </>
                      )}
                    </GButton>
                  )}
                </div>

                {/* Cross-Sell Honey Pot */}
                <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🔥</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Trending Tools</h4>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400 mb-3">
                    Found the profile? Now download their content!
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href="/social-media-tools/tiktok-downloader"
                      className="flex items-center justify-between p-2 rounded bg-white dark:bg-card border border-green-100 dark:border-green-800 hover:shadow-sm transition-shadow group"
                    >
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">🎵 TikTok Downloader (No Watermark)</span>
                      <span className="text-xs text-muted-foreground">→</span>
                    </a>
                    <a
                      href="/social-media-tools/pinterest-downloader"
                      className="flex items-center justify-between p-2 rounded bg-white dark:bg-card border border-green-100 dark:border-green-800 hover:shadow-sm transition-shadow group"
                    >
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">📌 Pinterest Image & Video Saver</span>
                      <span className="text-xs text-muted-foreground">→</span>
                    </a>
                  </div>
                </div>
              </div>
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
