'use client'

import { useEffect } from 'react'

interface DeferredScriptProps {
  src: string
  id?: string
  crossOrigin?: string
  onLoad?: () => void
}

/**
 * DeferredScript - Loads scripts after page load for better performance
 * Improves LCP and FID/INP by deferring non-critical scripts
 */
export function DeferredScript({ src, id, crossOrigin, onLoad }: DeferredScriptProps) {
  useEffect(() => {
    // Only load after page is interactive
    if (typeof window === 'undefined') return

    // Check if script already exists
    if (id && document.getElementById(id)) {
      return
    }

    // Wait for page to be interactive
    const loadScript = () => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.defer = true
      
      if (id) script.id = id
      if (crossOrigin) script.crossOrigin = crossOrigin
      
      if (onLoad) {
        script.onload = onLoad
      }

      document.body.appendChild(script)
    }

    // Load immediately if page is already interactive, otherwise wait
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Use requestIdleCallback for better performance, fallback to setTimeout
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadScript, { timeout: 2000 })
      } else {
        setTimeout(loadScript, 1)
      }
    } else {
      window.addEventListener('load', () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadScript, { timeout: 2000 })
        } else {
          setTimeout(loadScript, 1)
        }
      })
    }
  }, [src, id, crossOrigin, onLoad])

  return null
}
