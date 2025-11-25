import React from 'react'
import { cn } from "@/lib/utils"

interface GHeaderProps {
  title: string
  description: string
  titleSize?: 'small' | 'medium' | 'large'
  descriptionSize?: 'small' | 'medium' | 'large'
  centered?: boolean
  color?: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
  className?: string
}

export function GHeader({
  title,
  description,
  titleSize = 'small',
  descriptionSize = 'small',
  centered = true,
  color = 'orange',
  className
}: GHeaderProps) {
  // Color classes
  const titleColors = {
    orange: 'text-foreground',
    green: 'text-heading-accent',
    blue: 'text-foreground',
    purple: 'text-foreground',
    pink: 'text-foreground',
    red: 'text-foreground'
  }

  const descColors = {
    orange: 'text-foreground',
    green: 'text-heading-accent/80',
    blue: 'text-foreground',
    purple: 'text-foreground',
    pink: 'text-foreground',
    red: 'text-foreground'
  }

  // Title size classes
  const titleClasses = {
    small: 'text-xl sm:text-2xl md:text-3xl font-bold',
    medium: 'text-3xl sm:text-4xl md:text-5xl font-black',
    large: 'text-4xl sm:text-5xl md:text-6xl font-black'
  }

  // Description size classes
  const descClasses = {
    small: 'text-sm sm:text-base',
    medium: 'text-base sm:text-lg',
    large: 'text-lg sm:text-xl'
  }

  const containerClass = centered ? 'text-center' : 'text-left'
  const maxWidthClass = centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'

  return (
    <div className={cn(`${containerClass} space-y-4 sm:space-y-6 w-full`, className)}>
      <h1 className={`${titleClasses[titleSize]} ${titleColors[color]} leading-tight px-2 break-words hyphens-auto`}>
        {title}
      </h1>
      <p className={`${descClasses[descriptionSize]} ${descColors[color]} leading-relaxed ${maxWidthClass} px-4 break-words`}>
        {description}
      </p>
    </div>
  )
}
