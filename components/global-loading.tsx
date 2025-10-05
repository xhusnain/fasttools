"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function GlobalLoading() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-primary/20">
      <div className="h-full bg-primary animate-loading-bar" />
    </div>
  )
}
