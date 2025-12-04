'use client'

import * as React from 'react'
import * as GProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function GProgress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof GProgressPrimitive.Root>) {
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
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </GProgressPrimitive.Root>
  )
}

export { GProgress }
