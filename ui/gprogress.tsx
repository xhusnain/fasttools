'use client'

import * as React from 'react'
import * as GProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

type GProgressProps = React.ComponentProps<typeof GProgressPrimitive.Root> & {
  indicatorClassName?: string
}

function GProgress({
  className,
  value,
  indicatorClassName,
  ...props
}: GProgressProps) {
  return (
    <GProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <GProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn("bg-primary h-full w-full flex-1 transition-all", indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </GProgressPrimitive.Root>
  )
}

export { GProgress }
