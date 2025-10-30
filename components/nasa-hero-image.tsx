"use client"

import { useEffect, useState } from "react"

interface NasaImage {
  url: string
  title: string
  explanation: string
  date: string
}

export function NasaHeroImage() {
  const [image, setImage] = useState<NasaImage | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/nasa-image')
        const data = await response.json()
        
        // Always set image if it exists in response, regardless of success flag
        if (data.image) {
          setImage(data.image)
        } else {
          console.error('No image in response:', data)
        }
      } catch (error) {
        console.error('Error fetching NASA image:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [])

  if (loading) {
    return (
      <div className="absolute inset-0 bg-black/20 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>
      </div>
    )
  }

  if (!image) {
    return null
  }

  return (
    <>
      {/* NASA Image Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={image.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
      
      {/* Optional: Floating info badge */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-orange-400/80 font-semibold">NASA Space Image</span>
        </div>
      </div>
    </>
  )
}
