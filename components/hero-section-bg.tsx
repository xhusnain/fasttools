"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Theme-based hero images
const HERO_IMAGES = {
  dark: "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/greg-rakozy-oMpAz-DN-9I-unsplash.jpg",
  light: "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-HWIOLU7_O6w-unsplash.jpg",
}

export function HeroSectionBg() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Handle hydration - only show theme-based image after mount
  useEffect(() => {
    setMounted(true)
    
    // Preload both images to ensure they're cached
    const preloadImages = () => {
      const images = [HERO_IMAGES.dark, HERO_IMAGES.light]
      images.forEach((src) => {
        const img = new Image()
        img.onload = () => {
          // Image loaded successfully
        }
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`)
        }
        img.src = src
      })
    }
    
    preloadImages()
  }, [])
  
  // Use resolvedTheme to handle SSR and default to dark if undefined
  const currentTheme = mounted ? (resolvedTheme || theme || "dark") : "dark"
  const imageUrl = currentTheme === "dark" ? HERO_IMAGES.dark : HERO_IMAGES.light

  // Reset error state when theme changes
  useEffect(() => {
    setImageError(false)
    setImageLoaded(false)
  }, [currentTheme])

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.complete && img.naturalHeight !== 0) {
      setImageLoaded(true)
      setImageError(false)
    }
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load hero image: ${imageUrl}`)
    setImageError(true)
    setImageLoaded(false)
  }

  // Check if image is already loaded (cached)
  useEffect(() => {
    if (!mounted || !imageUrl) return
    
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
      setImageError(false)
    }
    img.onerror = () => {
      setImageError(true)
      setImageLoaded(false)
    }
    img.src = imageUrl
    
    // If image is already cached, check immediately
    if (img.complete) {
      if (img.naturalHeight !== 0) {
        setImageLoaded(true)
        setImageError(false)
      } else {
        setImageError(true)
        setImageLoaded(false)
      }
    }
  }, [mounted, imageUrl])

  return (
    <>
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageUrl}
          alt={currentTheme === "dark" ? "Space and stars background image for FastTools hero section" : "Astronomical space background image for FastTools hero section"}
          className={`absolute inset-0 w-full h-full object-cover ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300 ease-in-out`}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {/* Fallback gradient background - shows when image is loading or on error */}
        <div 
          className={`absolute inset-0 w-full h-full bg-gradient-to-br ${
            currentTheme === "dark" 
              ? "from-slate-900 via-slate-800 to-slate-900" 
              : "from-slate-100 via-slate-50 to-slate-100"
          } ${imageError || !imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}
        />
      </div>
    </>
  )
}



