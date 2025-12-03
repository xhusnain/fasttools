import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary shadow-sm hover:shadow-md",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive shadow-sm hover:shadow-md",
                outline:
                    "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary shadow-sm hover:shadow-md",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary shadow-sm hover:shadow-md",
                ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-primary",
                link: "text-link underline-offset-4 hover:underline hover:text-link-hover focus-visible:ring-link",
                success:
                    "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent shadow-sm hover:shadow-md",
                warning:
                    "bg-[var(--tertiary-accent)] text-[var(--tertiary-accent-foreground)] hover:opacity-90 focus-visible:ring-[var(--tertiary-accent)] shadow-sm hover:shadow-md",
                info: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary shadow-sm hover:shadow-md"
            },
            size: {
                xs: "h-7 px-2.5 text-xs rounded-sm",
                sm: "h-8 px-3 text-sm rounded-md",
                default: "h-10 px-4 py-2 text-sm rounded-md",
                lg: "h-11 px-6 py-2.5 text-base rounded-md",
                xl: "h-12 px-8 py-3 text-lg rounded-lg",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

export interface GButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    enableGlow?: boolean
    enableHoverEffect?: boolean
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    customColor?: 'primary' | 'secondary' | 'accent' | 'destructive' | 'success'
}

const GButton = React.forwardRef<HTMLButtonElement, GButtonProps>(
    ({
        className,
        variant = "default",
        size,
        asChild = false,
        enableGlow = true,
        enableHoverEffect = true,
        isLoading = false,
        leftIcon,
        rightIcon,
        customColor,
        children,
        disabled,
        ...props
    }, ref) => {
        const Comp = asChild ? Slot : "button"

        const colorClasses = React.useMemo(() => {
            switch (customColor) {
                case 'primary':
                    return "bg-primary text-primary-foreground hover:bg-primary/90"
                case 'secondary':
                    return "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                case 'accent':
                    return "bg-accent text-accent-foreground hover:bg-accent/90"
                case 'destructive':
                    return "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                case 'success':
                    return "bg-[var(--secondary-accent)] text-[var(--secondary-accent-foreground)] hover:opacity-90"
                default:
                    return ""
            }
        }, [customColor])

        return (
            <Comp
                className={cn(
                    buttonVariants({ variant: customColor ? "default" : variant, size, className }),
                    "relative overflow-hidden transition-all duration-300",
                    enableHoverEffect && !isLoading && !disabled && "hover:-translate-y-0.5 active:translate-y-0",
                    enableGlow && variant === "default" && !customColor && "shadow-lg hover:shadow-primary/25",
                    // Add a subtle gradient overlay for default variant if no custom color
                    variant === "default" && !customColor && "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                    colorClasses
                )}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </Comp>
        )
    }
)
GButton.displayName = "GButton"

export { GButton, buttonVariants }
