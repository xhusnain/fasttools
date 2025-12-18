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
    howToSteps: (string | { title: string; description: string })[]
    features: (string | { title: string; description: string; icon?: string })[]
    aboutTool: string | React.ReactNode | { title: string; content: string }
    aboutToolText?: string
    proTip?: string
    useCases?: (string | { title: string; description: string })[]
    faqs: FAQItem[]
    relatedTools?: RelatedTool[]
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
