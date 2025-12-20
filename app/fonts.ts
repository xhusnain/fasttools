import { Roboto, Montserrat } from 'next/font/google'

export const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-roboto',
    display: 'swap',
})

export const montserrat = Montserrat({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})
