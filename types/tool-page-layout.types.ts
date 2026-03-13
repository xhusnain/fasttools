import React from 'react'

export interface FAQItem {
    question: string
    answer: string
}

export interface RelatedTool {
    name: string
    href: string
}

import { BreadcrumbItem } from "@/types/common-types/breadcrumbs.types"

export interface ToolHeaderConfig {
    title: string
    description: string
    titleSize?: 'small' | 'medium' | 'large'
    descriptionSize?: 'small' | 'medium' | 'large'
    centered?: boolean
    color?: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
}

export interface ToolContentData {
    toolName: string
    overview: string | React.ReactNode
    /** One-sentence definition AI systems can quote directly. Rendered in a <dfn> block. */
    definition?: string
    /** Concise 1-2 sentence answer to "What is [tool]?" for AI extraction. */
    quickAnswer?: string
    /** Key takeaways displayed as a scannable list at the top. */
    keyTakeaways?: string[]
    howToSteps: (string | { title: string; description: string })[]
    features: (string | { title: string; description: string; icon?: string })[]
    aboutTool: string | React.ReactNode | { title: string; content: string }
    aboutToolText?: string
    proTip?: string
    useCases?: (string | { title: string; description: string })[]
    faqs: FAQItem[]
    relatedTools?: RelatedTool[]
    video?: {
        id: string
        title?: string
        description?: string
    }
    additionalContent?: Array<{
        heading: string
        content: string
    }>
}


export interface ExpectedMetadata {
    title: string
    description: string
    path: string
}

export interface ToolPageLayoutProps {
    header: ToolHeaderConfig
    breadcrumbs?: BreadcrumbItem[]
    heroImage?: string
    toolComponent: React.ReactNode
    /** JSON-LD structured data schemas to render as <script type="application/ld+json"> tags */
    schemas?: any[]
    toolContent: ToolContentData
    expectedMetadata?: ExpectedMetadata
    className?: string
}
