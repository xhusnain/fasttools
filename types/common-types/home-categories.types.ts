export interface Category {
    id: string
    name: string
    description: string
    icon: any
    iconBg: string
    iconColor: string
    borderColor: string
    hoverBorder: string
    glowColor: string
    href: string
    tools: Array<{
        title: string
        description: string
        href: string
        icon: any
        badge: string
        badgeColor: string
    }>
}

export interface HomeCategoriesProps {
    categories: Category[]
}
