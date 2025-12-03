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
    badgeColor = "bg-primary/90",
    iconBg = "bg-primary/10",
    iconColor = "text-primary",
    borderColor = "border-border",
    hoverBorder = "hover:border-primary/50",
    glowColor = "hover:shadow-[var(--secondary-accent)]/20",
    className,
    ctaText = "Use Tool",
    children,
    ...props
}: GToolCardProps) {
    if (children) {
        return (
            <div className={cn("relative rounded-2xl border bg-card transition-all duration-300", className)} {...props}>
                {children}
            </div>
        )
    }

    return (
        <Link href={href!} className={cn("group block h-full", className)}>
            <div
                className={cn(
                    "relative h-full rounded-2xl border bg-card p-6 space-y-4 transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-2xl",
                    "dark:bg-card/50 dark:hover:bg-card/80", // Subtle dark mode background change
                    borderColor,
                    hoverBorder,
                    glowColor
                )}
            >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Badge and Icon */}
                <div className="relative flex items-start justify-between z-10">
                    {badge ? (
                        <div
                            className={cn(
                                "px-3 py-1 rounded-full text-white text-[10px] uppercase tracking-wider font-bold shadow-sm",
                                badgeColor
                            )}
                        >
                            {badge}
                        </div>
                    ) : (
                        <div />
                    )}
                    <div
                        className={cn(
                            "p-3 rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                            iconBg,
                            borderColor
                        )}
                    >
                        {Icon && <Icon className={cn("h-6 w-6", iconColor)} />}
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
