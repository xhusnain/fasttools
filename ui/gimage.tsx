import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface GImageProps extends Omit<ImageProps, "fill" | "priority"> {
    className?: string
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down"
    fill?: boolean
    preload?: boolean
}

export function GImage({
    className,
    alt,
    fit = "cover",
    fill = true,
    preload,
    ...props
}: GImageProps) {
    return (
        <Image
            className={cn(
                "transition-opacity duration-300",
                fit ? `object-${fit}` : "",
                className
            )}
            alt={alt}
            fill={fill}
            priority={preload}
            {...props}
        />
    )
}
