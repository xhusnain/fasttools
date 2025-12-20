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
    overview: string
    howToSteps: string[]
    features: string[]
    aboutTool: string | React.ReactNode
    aboutToolText?: string
    proTip?: string
    useCases?: string[]
    faqs: FAQItem[]
    relatedTools?: RelatedTool[]
    video?: {
        id: string
        title?: string
        description?: string
    }
}


export interface ExpectedMetadata {
    title: string
    description: string
    path: string
}

export interface ToolPageLayoutProps {
    header: ToolHeaderConfig
    breadcrumbs?: BreadcrumbItem[]
    toolComponent: React.ReactNode
    toolContent: ToolContentData
    expectedMetadata?: ExpectedMetadata
    className?: string
}
