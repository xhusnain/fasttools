import { Roboto, Montserrat, Open_Sans } from 'next/font/google'

// Optimized font loading - reduced weights for better performance
// Only load essential weights to reduce font file size
export const roboto = Roboto({
    weight: ['400', '500', '700'], // Reduced from full range
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap', // Prevents invisible text during font load
    preload: true, // Preload critical font
    fallback: ['system-ui', 'arial'], // Fallback fonts
    adjustFontFallback: true, // Better font fallback
})

export const montserrat = Montserrat({
    weight: ['400', '600', '700'], // Reduced weights
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
    preload: false, // Not critical, don't preload
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
})

export const openSans = Open_Sans({
    weight: ['400', '600', '700'], // Reduced from 6 weights to 3
    subsets: ['latin'],
    variable: '--font-open-sans',
    display: 'swap',
    preload: false, // Not critical, don't preload
    fallback: ['system-ui', 'arial'],
    adjustFontFallback: true,
})
