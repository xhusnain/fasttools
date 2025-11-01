import React from 'react'

interface GHeaderProps {
  title: string
  description: string
  titleSize?: 'small' | 'medium' | 'large'
  descriptionSize?: 'small' | 'medium' | 'large'
  centered?: boolean
  color?: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
}

export function GHeader({
  title,
  description,
  titleSize = 'large',
  descriptionSize = 'medium',
  centered = true,
  color = 'orange'
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
    small: 'text-2xl sm:text-3xl md:text-4xl font-black',
    medium: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black',
    large: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black'
  }

  // Description size classes
  const descClasses = {
    small: 'text-base sm:text-lg',
    medium: 'text-lg md:text-xl',
    large: 'text-xl md:text-2xl lg:text-3xl'
  }

  const containerClass = centered ? 'text-center' : 'text-left'
  const maxWidthClass = centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'

  return (
    <div className={`${containerClass} space-y-4 sm:space-y-6 w-full`}>
      <h1 className={`${titleClasses[titleSize]} ${titleColors[color]} leading-tight px-2 break-words hyphens-auto`}>
        {title}
      </h1>
      <p className={`${descClasses[descriptionSize]} ${descColors[color]} leading-relaxed ${maxWidthClass} px-4 break-words`}>
        {description}
      </p>
    </div>
  )
}
