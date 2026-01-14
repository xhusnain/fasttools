import type { Metadata } from "next"
import { createMetadata } from "./metadata-base"
import type { ToolPageLayoutProps } from "@/types/tool-page-layout.types"

export interface UnifiedToolConfig {
    toolName: string
    description: string
    metaTitle?: string
    metaDescription?: string
    path: string
    keywords?: string[]
    video?: {
        id: string
        title?: string
        description?: string
    }
    heroImage?: string
    schemaOptions?: {
        applicationCategory?: string
        price?: string
        ratingValue?: string
        ratingCount?: string
        alternateName?: string
        featureList?: string[]
        softwareRequirements?: string
        operatingSystem?: string
        offers?: {
            "@type": string
            price: string
            priceCurrency: string
        }
    }
    header: {
        title: string
        description: string
        titleSize?: 'small' | 'medium' | 'large'
        descriptionSize?: 'small' | 'medium' | 'large'
        centered?: boolean
        color?: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
    }
    breadcrumbs?: Array<{
        label: string
        href: string
    }>
    content: {
        overview: string
        howToSteps?: string[]
        features?: string[]
        aboutTool: string | React.ReactNode
        aboutToolText?: string
        proTip?: string
        useCases?: string[]
        faqs: Array<{
            question: string
            answer: string
        }>
        relatedTools?: Array<{
            name: string
            href: string
        }>
    }
}

export function createToolConfig(config: UnifiedToolConfig) {
    const metadata: Metadata = createMetadata({
        title: config.metaTitle || config.toolName,
        description: config.metaDescription || config.description,
        path: config.path,
        toolName: config.toolName,
        faqs: config.content.faqs,
        howToSteps: config.content.howToSteps || [],
        video: config.video,
        schemaOptions: config.schemaOptions,
    })

    const getLayoutProps = (toolComponent: React.ReactNode): ToolPageLayoutProps => ({
        header: config.header,
        breadcrumbs: config.breadcrumbs,
        heroImage: config.heroImage,
        toolComponent,
        toolContent: {
            toolName: config.toolName,
            overview: config.content.overview,
            howToSteps: config.content.howToSteps || [],
            features: config.content.features || [],
            aboutTool: config.content.aboutTool,
            aboutToolText: config.content.aboutToolText,
            proTip: config.content.proTip,
            useCases: config.content.useCases,
            faqs: config.content.faqs,
            relatedTools: config.content.relatedTools,
            video: config.video,
        },
        expectedMetadata: {
            title: config.metaTitle || config.toolName,
            description: config.metaDescription || config.description,
            path: config.path,
        },
    })

    return {
        metadata,
        getLayoutProps,
    }
}
