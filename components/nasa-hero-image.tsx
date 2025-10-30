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
    </>
  )
}
