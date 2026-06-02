import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface GToolCardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string
    description?: string
    href?: string
    icon?: LucideIcon
    badge?: string
    badgeColor?: string
    iconBg?: string
    iconColor?: string
    borderColor?: string
    hoverBorder?: string
    glowColor?: string
    className?: string
    ctaText?: string
    children?: React.ReactNode
}

export function GToolCard({
    title,
    description,
    href,
    icon: Icon,
    badge,
    badgeColor: _badgeColor,
    iconBg: _iconBg,
    iconColor: _iconColor,
    borderColor: _borderColor,
    hoverBorder: _hoverBorder,
    glowColor: _glowColor,
    className,
    ctaText = "Use Tool",
    children,
    ...props
}: GToolCardProps) {
    if (children) {
        return (
            <div className={cn("relative rounded-lg border border-border bg-card shadow-sm transition-all duration-300", className)} {...props}>
                {children}
            </div>
        )
    }

    return (
        <Link href={href!} className={cn("group block h-full", className)}>
            <div
                className={cn(
                    "relative h-full rounded-lg border border-border bg-card p-6 space-y-4 shadow-sm transition-all duration-300",
                    "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                )}
            >
                <div className="absolute inset-0 rounded-lg bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Badge and Icon */}
                <div className="relative flex items-start justify-between z-10">
                    {badge ? (
                        <div
                            className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/10 text-[10px] uppercase tracking-wider font-bold"
                        >
                            {badge}
                        </div>
                    ) : (
                        <div />
                    )}
                    <div
                        className="p-3 rounded-lg border border-primary/15 bg-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    >
                        {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                </div>

                {/* Content */}
                <div className="relative space-y-3 z-10">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight tracking-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                        {description}
                    </p>
                </div>

                {/* Try Now */}
                <div className="relative flex items-center gap-2 text-primary font-semibold text-sm pt-2 z-10">
                    <span className="group-hover:underline decoration-2 underline-offset-4 decoration-primary/30">{ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    )
}
