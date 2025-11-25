export interface FAQItem {
    question: string
    answer: string
}

export interface RelatedTool {
    name: string
    href: string
}

export interface BreadcrumbItem {
    label: string
    href: string
}

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
    aboutTool: string
    proTip?: string
    useCases?: string[]
    faqs: FAQItem[]
    relatedTools?: RelatedTool[]
}

export interface AdConfig {
    showMobileAd?: boolean
    showSidebarAd?: boolean
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
    adConfig?: AdConfig
    expectedMetadata?: ExpectedMetadata
    className?: string
}
