"use client"

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { CookieConsent } from './cookie-consent'

export function ConditionalHeader() {
  const pathname = usePathname()
  
  // Hide header for embed routes and embed-docs
  const isEmbedRoute = pathname.startsWith('/embed/') || pathname.startsWith('/embed-docs')
  
  if (isEmbedRoute) {
    return null
  }
  
  return <Header />
}

export function ConditionalFooter() {
  // No footer should be displayed
  return null
}

export function ConditionalCookieConsent() {
  const pathname = usePathname()
  
  // Hide cookie consent for embed routes and embed-docs
  const isEmbedRoute = pathname.startsWith('/embed/') || pathname.startsWith('/embed-docs')
  
  if (isEmbedRoute) {
    return null
  }
  
  return <CookieConsent />
}

