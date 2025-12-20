import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface GImageProps extends Omit<ImageProps, "priority"> {
    className?: string
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down"
    preload?: boolean
    /** 
     * When true, uses fill mode (requires relative parent container).
     * When false, uses width/height mode (better for LCP).
     */
    fill?: boolean
}

export function GImage({
    className,
    alt,
    fit = "cover",
    fill,
    preload,
    loading,
    sizes,
    ...props
}: GImageProps) {
    // Determine if we should use fill mode
    // Use fill if explicitly set to true, or if no width/height provided
    const useFill = fill === true || (fill !== false && !props.width && !props.height)

    return (
        <Image
            className={cn(
                "transition-opacity duration-300",
                fit ? `object-${fit}` : "",
                className
            )}
            alt={alt}
            fill={useFill}
            priority={preload}
            loading={preload ? undefined : (loading || "lazy")}
            sizes={sizes || (useFill ? "(max-width: 768px) 100vw, 800px" : undefined)}
            {...props}
        />
    )
}
