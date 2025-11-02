"use client"

import { useState, useEffect } from "react"

const HERO_IMAGES = [
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/greg-rakozy-oMpAz-DN-9I-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-5477L9Z5eqI-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-6-jTZysYY_U-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-8Hjx3GNZYeA-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-E7q00J_8N7A-unsplash%20(1).jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-E7q00J_8N7A-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-HWIOLU7_O6w-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-O0dEH-UPj68-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-OVO8nK-7Rfs-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-Q1p7bh3SHj8-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-WKT3TE5AQu0-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-_SFJhRPzJHs-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-fDSqEWLRNFE-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-lEBDlbXLEgs-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-pd4lo70LdbI-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-rTZW4f02zY8-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-vltMzn0jqsA-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-whDrFMucHkc-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/nasa-yZygONrUBe8-unsplash.jpg",
  "https://pub-d1560d7595cc45af999542c1c57c16f4.r2.dev/nasa%20images%20/nasa%20images%20/shot-by-cerqueira-0o_GEzyargo-unsplash.jpg",
]

export function HeroSectionBg() {
  const [imageUrl, setImageUrl] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Pick a random image on mount
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length)
    setImageUrl(HERO_IMAGES[randomIndex])
    setLoading(false)
  }, [])

  if (loading || !imageUrl) {
    return (
      <div className="absolute inset-0 bg-black/20 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>
      </div>
    )
  }

  return (
    <>
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Space"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-40"
          loading="eager"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>
    </>
  )
}



