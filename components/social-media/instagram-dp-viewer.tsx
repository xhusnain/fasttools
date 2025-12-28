"use client"

/**
 * Instagram DP Viewer Component
 * 
 * IMPORTANT: This component demonstrates how to integrate with Instagram's API,
 * but the implementation should be used responsibly and legally.
 * 
 * Key Points:
 * 1. The `?__a=1` endpoint is unofficial and may violate Instagram's ToS
 * 2. CORS restrictions will likely prevent direct browser requests
 * 3. For production use, implement Instagram's official Graph API
 * 4. Always respect user privacy and copyright laws
 * 5. This is for educational purposes only
 * 
 * Production Implementation Requirements:
 * - Use Instagram's official Graph API
 * - Implement proper authentication (OAuth 2.0)
 * - Handle rate limiting and error responses
 * - Respect Instagram's Terms of Service
 * - Implement proper CORS handling via backend proxy
 * - Add comprehensive error handling and logging
 */

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"

import { Download, AlertCircle, User, Eye, Shield, Clock, CheckCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

export function InstagramDpViewer() {
  const [username, setUsername] = useState("")
  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [timerActive, setTimerActive] = useState(false)
  const [remainingTime, setRemainingTime] = useState(0)
  const [timerProgress, setTimerProgress] = useState(0)
  const [requestId, setRequestId] = useState<string | null>(null)
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null)
  const [downloading, setDownloading] = useState(false)

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval)
      }
    }
  }, [timerInterval])

  // Timer management functions
  const startTimer = async () => {
    try {
      const response = await fetch('/api/instagram/timer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.replace('@', '').trim() })
      })

      const data = await response.json()

      if (data.success) {
        setRequestId(data.requestId)
        setTimerActive(true)
        setRemainingTime(data.remainingTime)
        setTimerProgress(0)

        // Start countdown interval
        const interval = setInterval(async () => {
          const statusResponse = await fetch(`/api/instagram/timer?requestId=${data.requestId}`)
          const statusData = await statusResponse.json()

          if (statusData.success) {
            setRemainingTime(statusData.remainingTime)
            setTimerProgress(statusData.progress)

            if (!statusData.isActive) {
              // Timer finished, fetch the actual data
              setTimerActive(false)
              clearInterval(interval)
              setTimerInterval(null)
              await fetchProfileData()
            }
          }
        }, 1000)

        setTimerInterval(interval)
      } else {
        setError(data.error || 'Failed to start timer')
        setRemainingTime(data.remainingTime || 0)
      }
    } catch (error) {
      console.error('Timer start error:', error)
      setError('Failed to start timer')
    }
  }

  const fetchProfileData = async () => {
    try {
      const cleanUsername = username.replace("@", "").trim()
      const response = await fetch(`/api/instagram/profile?username=${cleanUsername}`)
      const data = await response.json()

      if (data.success) {
        setProfileData(data.data)
        setError(null)
      } else {
        setError(data.error || 'Failed to fetch profile')
      }
    } catch (error) {
      console.error('Profile fetch error:', error)
      setError('Failed to fetch profile')
    } finally {
      setLoading(false)
    }
  }

  const handleView = async () => {
    setLoading(true)
    setError(null)
    setProfileData(null)

    try {
      const cleanUsername = username.replace("@", "").trim()

      if (!cleanUsername) {
        setError("Please enter a valid username")
        setLoading(false)
        return
      }

      // Start the timer-based rate limiting
      await startTimer()

    } catch (error) {
      console.error('Error:', error)
      setError("An error occurred while processing your request")
      setLoading(false)
    }
  }

  // Production-ready Instagram profile fetching
  const fetchInstagramProfile = async (username: string) => {
    try {
      console.log(`Fetching profile for: ${username}`)

      const response = await fetch(`/api/instagram/profile?username=${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log(`Response status: ${response.status}`)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      if (!data.success || !data.data) {
        throw new Error('Invalid response from server')
      }

      return data.data

    } catch (error) {
      console.error('Instagram API Error:', error)
      throw error
    }
  }

  const downloadImage = async () => {
    if (!profileData?.profilePicUrl) return

    setDownloading(true)

    try {
      // Method 1: Try to fetch and create blob URL for direct download
      try {
        const response = await fetch(profileData.profilePicUrl, {
          mode: 'cors',
          credentials: 'omit',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        })

        if (response.ok) {
          const blob = await response.blob()
          const url = window.URL.createObjectURL(blob)

          const link = document.createElement('a')
          link.href = url
          link.download = `${profileData.username}-profile-picture.jpg`
          link.style.display = 'none'

          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          // Clean up the blob URL
          setTimeout(() => {
            window.URL.revokeObjectURL(url)
          }, 1000)

          setDownloading(false)
          return
        }
      } catch (fetchError) {
        console.log('Direct fetch failed, trying alternative method')
      }

      // Method 2: Use window.open with download attribute
      const link = document.createElement('a')
      link.href = profileData.profilePicUrl
      link.download = `${profileData.username}-profile-picture.jpg`
      link.target = '_blank'
      link.style.display = 'none'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setDownloading(false)

    } catch (error) {
      console.error('Download error:', error)
      setError('Failed to download image. Please try right-clicking on the image and selecting "Save image as".')
      setDownloading(false)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Important Notice GCard */}
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

      {/* Main Viewer GCard */}
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
                placeholder="@username or username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <GButton
              onClick={handleView}
              disabled={!username || loading || timerActive}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {timerActive ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  <span className="hidden sm:inline">Processing... {remainingTime}s</span>
                  <span className="sm:hidden">{remainingTime}s</span>
                </>
              ) : loading ? (
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

            {/* Timer Progress Bar */}
            {timerActive && (
              <div className="w-full mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                  <span>Processing request...</span>
                  <span>{timerProgress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/90 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${timerProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  Please wait {remainingTime} seconds for the result...
                </p>
              </div>
            )}

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
        <GCard className="p-4 sm:p-6 bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Profile Information</h3>

            {/* Profile Picture */}
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative">
                <img
                  src={profileData.profilePicUrl}
                  alt={`${profileData.username} profile picture`}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-border shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={async () => {
                    try {
                      // Try to fetch and create blob URL for direct download
                      const response = await fetch(profileData.profilePicUrl, {
                        mode: 'cors',
                        credentials: 'omit',
                        headers: {
                          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                        }
                      })

                      if (response.ok) {
                        const blob = await response.blob()
                        const url = window.URL.createObjectURL(blob)

                        const link = document.createElement('a')
                        link.href = url
                        link.download = `${profileData.username}-profile-picture.jpg`
                        link.style.display = 'none'

                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)

                        setTimeout(() => {
                          window.URL.revokeObjectURL(url)
                        }, 1000)

                        return
                      }
                    } catch (fetchError) {
                      console.log('Direct fetch failed, trying alternative method')
                    }

                    // Fallback: Use direct link
                    const link = document.createElement('a')
                    link.href = profileData.profilePicUrl
                    link.download = `${profileData.username}-profile-picture.jpg`
                    link.target = '_blank'
                    link.style.display = 'none'

                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  title="Click to download or right-click to save"
                />
                {profileData.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                {/* Show placeholder indicator */}
                {profileData.profilePicUrl?.includes('via.placeholder.com') && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <AlertCircle className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Download Instructions */}
              <p className="text-xs text-muted-foreground text-center">
                💡 Click the image above or use the download button below<br />
                <span className="text-foreground">⚠️ May open in new tab due to browser security</span>
              </p>

              {/* Profile Details */}
              <div className="text-center space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-foreground">{profileData.fullName}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">@{profileData.username}</p>
                {profileData.biography && (
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">{profileData.biography}</p>
                )}
                {/* Show API restriction notice */}
                {profileData.biography?.includes('Instagram API restricted') && (
                  <div className="mt-3 p-2 bg-primary/20 border border-primary/30 rounded-lg">
                    <p className="text-xs text-foreground">
                      ⚠️ Instagram API is restricted. Showing placeholder profile picture.
                    </p>
                  </div>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">{profileData.posts.toLocaleString()}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">{profileData.followers.toLocaleString()}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-lg sm:text-xl font-bold text-foreground">{profileData.following.toLocaleString()}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Following</p>
                </div>
              </div>

              {/* Download GButton */}
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
          <li>• Enter an Instagram username (with or without @)</li>
          <li>• Click "View Profile Picture" to load the image</li>
          <li>• Download the high-quality version if needed</li>
          <li>• Only works for public Instagram accounts</li>
        </ul>
      </GCard>
    </div>
  )
}
