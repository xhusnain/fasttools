"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function NavbarFooterHider() {
  const pathname = usePathname()

  const hideNavbar = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true

      default:
        return false
    }
  }

  const hideFooter = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true

      default:
        return false
    }
  }

  useEffect(() => {
    const shouldHideNavbar = hideNavbar(pathname)
    const shouldHideFooter = hideFooter(pathname)

    const navbar = document.querySelector('nav') || document.querySelector('[data-navbar]')
    if (navbar) {
      navbar.style.display = shouldHideNavbar ? 'none' : ''
    }

    const footer = document.querySelector('footer') || document.querySelector('[data-footer]')
    if (footer) {
      footer.style.display = shouldHideFooter ? 'none' : ''
    }

    const commonNavbarSelectors = [
      'header',
      '.navbar',
      '.nav',
      '.header',
      '[role="banner"]'
    ]

    const commonFooterSelectors = [
      'footer',
      '.footer',
      '[role="contentinfo"]'
    ]

    if (shouldHideNavbar) {
      commonNavbarSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = 'none'
        })
      })
    } else {
      commonNavbarSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = ''
        })
      })
    }

    if (shouldHideFooter) {
      commonFooterSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = 'none'
        })
      })
    } else {
      commonFooterSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = ''
        })
      })
    }

    return () => {
      commonNavbarSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = ''
        })
      })

      commonFooterSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector)
        elements.forEach(el => {
          ;(el as HTMLElement).style.display = ''
        })
      })
    }
  }, [pathname])

  return null
}

export function useNavbarFooterHider() {
  const pathname = usePathname()

  const hideNavbar = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true

      default:
        return false
    }
  }

  const hideFooter = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true

      default:
        return false
    }
  }

  return {
    hideNavbar: hideNavbar(pathname),
    hideFooter: hideFooter(pathname)
  }
}
