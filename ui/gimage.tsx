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

    // Optimize sizes for better LCP - provide responsive sizes
    const optimizedSizes = sizes || (useFill 
        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        : undefined)

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
            sizes={optimizedSizes}
            // Performance optimizations
            quality={preload ? 90 : 85} // Higher quality for above-fold images
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            {...props}
        />
    )
}
