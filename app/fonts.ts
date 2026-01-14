import { Roboto, Montserrat, Open_Sans } from 'next/font/google'

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

export const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: '--font-open-sans',
    display: 'swap',
})
