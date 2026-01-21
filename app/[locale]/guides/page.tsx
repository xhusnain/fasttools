import type { Metadata } from "next"
import { getAllGuides } from '@/components/guide/guide'
import GuidesClientPage from '@/components/guide/GuidesClientPage'
import { createMetadata } from "@/lib/metadata-base"

export const metadata: Metadata = createMetadata({
    title: 'Learn How to Build Tools & Earn Online | FastTools Guides',
    description: 'FastTools empowers you to become a creator! Step-by-step guides to build professional online tools, monetize your skills, and start earning online.',
    path: '/guides',
    breadcrumbs: [
        { label: 'Guides', href: '/guides' }
    ]
})

export default async function GuidesIndex() {
    const guides = getAllGuides()

    return <GuidesClientPage allGuides={guides} />
}
