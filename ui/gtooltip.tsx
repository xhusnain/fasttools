"use client"

import * as React from "react"
import * as GTooltipPrimitive from "@radix-ui/react-tooltip"

const GTooltipProvider = GTooltipPrimitive.Provider

const GTooltip = GTooltipPrimitive.Root

const GTooltipTrigger = GTooltipPrimitive.Trigger

const GTooltipContent = React.forwardRef<
  React.ElementRef<typeof GTooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof GTooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <GTooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
    {...props}
  />
))
GTooltipContent.displayName = GTooltipPrimitive.Content.displayName

export { GTooltip, GTooltipTrigger, GTooltipContent, GTooltipProvider }

