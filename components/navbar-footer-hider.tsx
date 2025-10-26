"use client"

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Utility component to hide navbar and footer for specific tools
 * Add tool URLs to the respective arrays to hide navbar/footer for those tools only
 */
export function NavbarFooterHider() {
  const pathname = usePathname()

  // Function to hide navbar for specific tools
  const hideNavbar = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true
      // Add more tool URLs here as needed
      // Examples:
      // case '/image-tools/photo-editor':
      //   return true
      // case '/design-tools/canva-clone':
      //   return true
      // case '/video-tools/editor':
      //   return true
      default:
        return false
    }
  }

  // Function to hide footer for specific tools
  const hideFooter = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true
      // Add more tool URLs here as needed
      // Examples:
      // case '/image-tools/photo-editor':
      //   return true
      // case '/design-tools/canva-clone':
      //   return true
      // case '/video-tools/editor':
      //   return true
      default:
        return false
    }
  }

  useEffect(() => {
    const shouldHideNavbar = hideNavbar(pathname)
    const shouldHideFooter = hideFooter(pathname)

    // Hide/show navbar
    const navbar = document.querySelector('nav') || document.querySelector('[data-navbar]')
    if (navbar) {
      navbar.style.display = shouldHideNavbar ? 'none' : ''
    }

    // Hide/show footer
    const footer = document.querySelector('footer') || document.querySelector('[data-footer]')
    if (footer) {
      footer.style.display = shouldHideFooter ? 'none' : ''
    }

    // Also try to hide common navbar/footer selectors
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

    // Hide navbar elements
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

    // Hide footer elements
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

    // Cleanup function to restore elements when component unmounts
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

  // This component doesn't render anything, it just manages visibility
  return null
}

/**
 * Hook version for more granular control
 * Usage: const { hideNavbar, hideFooter } = useNavbarFooterHider()
 */
export function useNavbarFooterHider() {
  const pathname = usePathname()

  const hideNavbar = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true
      // Add more tool URLs here as needed
      // Examples:
      // case '/image-tools/photo-editor':
      //   return true
      // case '/design-tools/canva-clone':
      //   return true
      // case '/video-tools/editor':
      //   return true
      default:
        return false
    }
  }

  const hideFooter = (path: string): boolean => {
    switch (path) {
      case '/image-tools/photo-editor':
        return true
      // Add more tool URLs here as needed
      // Examples:
      // case '/image-tools/photo-editor':
      //   return true
      // case '/design-tools/canva-clone':
      //   return true
      // case '/video-tools/editor':
      //   return true
      default:
        return false
    }
  }

  return {
    hideNavbar: hideNavbar(pathname),
    hideFooter: hideFooter(pathname)
  }
}
