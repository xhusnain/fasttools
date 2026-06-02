import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Link from "next/link"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "btn-primary",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md transition-all duration-200",
                outline:
                    "btn-outline",
                secondary:
                    "btn-secondary",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                success:
                    "bg-primary text-primary-foreground hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200",
                warning:
                    "bg-slate-700 text-white hover:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-200",
                info: "bg-primary text-primary-foreground hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200"
            },
            size: {
                xs: "h-7 px-2.5 text-xs rounded-md",
                sm: "h-8 px-3 text-sm rounded-lg",
                default: "h-10 px-4 py-2 text-sm rounded-lg",
                lg: "h-11 px-6 py-2.5 text-base rounded-lg",
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
    href?: string
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
        href,
        ...props
    }, ref) => {
        const Comp = asChild ? Slot : (href ? Link : "button")

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
                    return "bg-primary text-primary-foreground hover:bg-blue-700"
                default:
                    return ""
            }
        }, [customColor])

        const Component = Comp as any
        return (
            <Component
                className={cn(
                    buttonVariants({ variant: customColor ? "default" : variant, size, className }),
                    "relative overflow-hidden transition-all duration-300",
                    enableHoverEffect && !isLoading && !disabled && "hover:-translate-y-0.5 active:translate-y-0",
                    colorClasses
                )}
                ref={ref as any}
                disabled={disabled || isLoading}
                {...(href ? { href } : {})}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </Component>
        )
    }
)
GButton.displayName = "GButton"

export { GButton, buttonVariants }
