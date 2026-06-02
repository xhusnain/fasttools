"use client"

import { useState, useEffect, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Eye,
  Globe,
  Lock,
  Maximize2,
  RotateCcw,
  Save,
  TrendingUp,
  User,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface InstagramProfileData {
  username: string;
  full_name: string;
  biography: string;
  followers: number;
  followees: number;
  posts_count: number;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  is_verified: boolean;
  is_private: boolean;
  external_url: string | null;
}

function normalizeInstagramLookup(input: string): string {
  const trimmed = input.trim()
  const urlMatch = trimmed.match(/(?:instagram\.com|instagr\.am)\/([a-zA-Z0-9._]+)/)
  const value = urlMatch?.[1] || trimmed.replace(/^@/, "")
  return value.replace(/\/+$/, "").toLowerCase()
}

export function InstagramDpViewer() {
  const [username, setUsername] = useState("")
  const [profileData, setProfileData] = useState<InstagramProfileData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [zoomOpen, setZoomOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(100)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (profileData && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [profileData])

  const fetchProfileData = async () => {
    try {
      if (!username?.trim()) {
        setError("Please enter a valid username or Instagram profile link")
        return
      }

      setLoading(true)
      setError(null)
      setProfileData(null)

      const normalizedUsername = normalizeInstagramLookup(username)
      const response = await fetch(`/api/instagram/profile?username=${encodeURIComponent(normalizedUsername)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch profile")
      }

      if (data.platform === 'Instagram' && data.data) {
        setProfileData(data.data)
      } else {
        throw new Error('Invalid response from server')
      }
      setError(null)
    } catch (error: any) {
      setError(error?.message || "Failed to fetch profile. Please try again.")
      setProfileData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleView = async () => {
    await fetchProfileData()
  }

  const getProxyImageUrl = (imageUrl: string): string => {
    return imageUrl ? `/api/instagram/image-proxy?url=${encodeURIComponent(imageUrl)}` : ''
  }

  // Self-contained fallback avatar (no external service). Used when Instagram
  // does not expose a profile picture for a logged-out request.
  const getInitialAvatar = (): string => {
    const letter = (profileData?.username?.charAt(0) || '?').toUpperCase()
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="400" height="400" fill="#2563eb"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="sans-serif" font-size="200" fill="#ffffff">${letter}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }

  const getProfilePictureUrl = (): string => {
    if (!profileData) return ''
    const imageUrl = profileData.profile_pic_url_hd || profileData.profile_pic_url
    return imageUrl ? getProxyImageUrl(imageUrl) : getInitialAvatar()
  }

  const openZoomViewer = () => {
    setZoomLevel(100)
    setZoomOpen(true)
  }

  const saveImage = async (quality: 'sd' | 'hd' = 'hd') => {
    if (!profileData) return

    const imageUrl = quality === 'hd'
      ? (profileData.profile_pic_url_hd || profileData.profile_pic_url)
      : profileData.profile_pic_url

    if (!imageUrl) return

    setSaving(true)

    try {
      const proxyUrl = `/api/instagram/image-proxy?url=${encodeURIComponent(imageUrl)}`
      const response = await fetch(proxyUrl)

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`)
      }

      const blob = await response.blob()
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = blobUrl
      link.download = `${profileData.username}-profile-picture-${quality}.jpg`
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
    } catch {
      setError('Failed to save image. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="w-full max-w-full overflow-hidden mx-auto space-y-4 sm:space-y-6">
      <GCard className="p-4 sm:p-6 bg-primary/5 border border-primary/20 shadow-sm max-w-full overflow-hidden">
        <div className="flex gap-3 sm:gap-4">
          <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-2 min-w-0 overflow-hidden">
            <p className="text-sm sm:text-base font-medium text-foreground truncate">Important Notice</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
              This tool is for educational purposes only. Please respect user privacy and Instagram's terms of service.
              It only works with profile pictures and does not access private posts, stories, or restricted content.
            </p>
          </div>
        </div>
      </GCard>

      <GCard className="border border-border bg-card shadow-sm max-w-full overflow-hidden">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <div className="text-center sm:text-left min-w-0 overflow-hidden">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground break-words">
                  Instagram DP Viewer
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base break-words">
                  View and save Instagram profile pictures in HD quality
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
                placeholder="@username or profile link"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleView()}
                className="h-10 sm:h-11 text-sm bg-white text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <GButton
              onClick={handleView}
              disabled={!username || loading}
              className="w-full h-10 sm:h-11 text-sm font-medium shadow-sm"
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
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Tip: use a valid Instagram username or profile URL, then try again.
                </p>
              </div>
            )}
          </div>
        </div>
      </GCard>

      {profileData && (
        <GCard ref={resultRef} className="p-4 sm:p-6 bg-card border border-border shadow-sm animate-fade-in max-w-full overflow-hidden">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Profile Information</h3>

            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative">
                <img
                  src={getProfilePictureUrl()}
                  alt={`${profileData.username} profile picture`}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white ring-1 ring-border shadow-sm object-cover cursor-zoom-in"
                  title={`${profileData.username} profile picture`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onClick={openZoomViewer}
                  onError={(e) => {
                    const target = e.currentTarget
                    if (profileData.profile_pic_url_hd && profileData.profile_pic_url && target.src.includes(encodeURIComponent(profileData.profile_pic_url_hd))) {
                      target.src = getProxyImageUrl(profileData.profile_pic_url)
                    } else if (target.src !== getInitialAvatar()) {
                      target.src = getInitialAvatar()
                    }
                  }}
                />
                {profileData.is_verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-card shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                {profileData.is_private && !profileData.is_verified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-muted rounded-full flex items-center justify-center border-2 border-card shadow-sm">
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

              <div className="w-full overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-2 font-medium">Metric</th>
                      <th className="px-4 py-2 font-medium">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Username</td>
                      <td className="px-4 py-2 font-bold text-foreground break-all">@{profileData.username}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Full Name</td>
                      <td className="px-4 py-2 font-bold text-foreground">{profileData.full_name || '—'}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Posts</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.posts_count || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Followers</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.followers || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Following</td>
                      <td className="px-4 py-2 font-bold text-foreground">{(profileData.followees || 0).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Verified</td>
                      <td className="px-4 py-2 font-bold text-foreground">{profileData.is_verified ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Account Type</td>
                      <td className="px-4 py-2 font-bold text-foreground">{profileData.is_private ? 'Private' : 'Public'}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground align-top">Bio</td>
                      <td className="px-4 py-2 font-medium text-foreground whitespace-pre-wrap break-words">{profileData.biography || '—'}</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-2 text-muted-foreground">Website</td>
                      <td className="px-4 py-2 font-medium text-foreground break-all">
                        {profileData.external_url ? (
                          <a
                            href={profileData.external_url.startsWith('http') ? profileData.external_url : `https://${profileData.external_url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {profileData.external_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                          </a>
                        ) : '—'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-full max-w-sm sm:max-w-md space-y-3">
                {(profileData.profile_pic_url_hd || profileData.profile_pic_url) && (
                  <GButton
                    onClick={openZoomViewer}
                    variant="outline"
                    className="w-full h-10 sm:h-11 text-sm font-medium"
                  >
                    <Maximize2 className="mr-2 h-4 w-4" />
                    <span>Zoom Full Size</span>
                  </GButton>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {profileData.profile_pic_url && (
                    <GButton
                      onClick={() => saveImage('sd')}
                      disabled={saving}
                      variant="outline"
                      className="w-full h-10 sm:h-11 text-sm font-medium"
                    >
                      {saving ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          <span>Save SD</span>
                        </>
                      )}
                    </GButton>
                  )}
                  {(profileData.profile_pic_url_hd || profileData.profile_pic_url) && (
                    <GButton
                      onClick={() => saveImage('hd')}
                      disabled={saving}
                      className="w-full h-10 sm:h-11 text-sm font-medium shadow-sm"
                    >
                      {saving ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          <span>Save HD</span>
                        </>
                      )}
                    </GButton>
                  )}
                </div>

                <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h4 className="font-bold text-primary text-sm">Related Social Tools</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Found the profile? Explore more tools!
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href="/social-media-tools/youtube-thumbnail"
                      className="flex items-center justify-between p-2 rounded bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                    >
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">YouTube Thumbnail Grabber</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a
                      href="/social-media-tools/tiktok-engagement-calculator"
                      className="flex items-center justify-between p-2 rounded bg-white border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
                    >
                      <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">TikTok Engagement Calculator</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GCard>
      )}

      {profileData && zoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${profileData.username} full-size profile picture`}
        >
          <div className="flex items-center justify-between gap-3 p-4 border-b border-border bg-card">
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-foreground truncate">
                @{profileData.username} profile picture
              </h3>
              <p className="text-xs text-muted-foreground">Zoom and inspect the full-size Instagram DP</p>
            </div>
            <GButton
              onClick={() => setZoomOpen(false)}
              variant="outline"
              className="h-10 w-10 p-0 flex-shrink-0"
              aria-label="Close zoom viewer"
            >
              <X className="h-4 w-4" />
            </GButton>
          </div>

          <div className="flex-1 min-h-0 overflow-auto">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-8">
              <img
                src={getProfilePictureUrl()}
                alt={`${profileData.username} full-size Instagram profile picture`}
                className="max-w-[92vw] max-h-[72vh] rounded-lg border border-border bg-card object-contain shadow-lg transition-transform duration-150"
                style={{ transform: `scale(${zoomLevel / 100})` }}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget
                  if (profileData.profile_pic_url_hd && profileData.profile_pic_url && target.src.includes(encodeURIComponent(profileData.profile_pic_url_hd))) {
                    target.src = getProxyImageUrl(profileData.profile_pic_url)
                  } else if (target.src !== getInitialAvatar()) {
                    target.src = getInitialAvatar()
                  }
                }}
              />
            </div>
          </div>

          <div className="border-t border-border bg-card p-4">
            <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <GButton
                  onClick={() => setZoomLevel((value) => Math.max(75, value - 25))}
                  variant="outline"
                  className="h-10 w-10 p-0"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </GButton>
                <GButton
                  onClick={() => setZoomLevel(100)}
                  variant="outline"
                  className="h-10 w-10 p-0"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="h-4 w-4" />
                </GButton>
                <GButton
                  onClick={() => setZoomLevel((value) => Math.min(300, value + 25))}
                  variant="outline"
                  className="h-10 w-10 p-0"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </GButton>
              </div>

              <div className="flex-1 flex items-center gap-3 min-w-0">
                <input
                  type="range"
                  min="75"
                  max="300"
                  step="25"
                  value={zoomLevel}
                  onChange={(event) => setZoomLevel(Number(event.target.value))}
                  className="w-full accent-primary"
                  aria-label="Profile picture zoom level"
                />
                <span className="w-12 text-right text-sm font-medium text-muted-foreground">
                  {zoomLevel}%
                </span>
              </div>

              <GButton
                onClick={() => saveImage('hd')}
                disabled={saving}
                className="h-10 text-sm font-medium"
              >
                {saving ? (
                  <>
                    <LoadingSpinner className="mr-2 h-4 w-4" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    <span>Save HD</span>
                  </>
                )}
              </GButton>
            </div>
          </div>
        </div>
      )}

      <GCard className="p-4 sm:p-6 bg-card border border-border shadow-sm">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">How to Use</h3>
        <ul className="list-disc space-y-2 sm:space-y-3 pl-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <li>Enter an Instagram username (with or without @) or paste a profile link</li>
          <li>Examples: <code className="text-xs bg-muted px-1 rounded">test</code> or <code className="text-xs bg-muted px-1 rounded">https://www.instagram.com/test</code></li>
          <li>Click "View Profile Picture" to load the image</li>
          <li>Save the high-quality version if needed</li>
          <li>Works for profile pictures on public and private accounts; it does not access private posts or stories</li>
        </ul>
      </GCard>
    </div>
  )
}
