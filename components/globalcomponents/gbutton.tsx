import * as React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface GButtonProps extends ButtonProps {
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
            <Button
                ref={ref}
                variant={customColor ? "default" : variant} // Override variant if customColor is set, otherwise use passed variant
                size={size}
                disabled={disabled || isLoading}
                className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    enableHoverEffect && !isLoading && !disabled && "hover:-translate-y-0.5 active:translate-y-0",
                    enableGlow && variant === "default" && !customColor && "shadow-lg hover:shadow-primary/25",
                    // Add a subtle gradient overlay for default variant if no custom color
                    variant === "default" && !customColor && "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary",
                    colorClasses,
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
            </Button>
        )
    }
)
GButton.displayName = "GButton"

export { GButton }
