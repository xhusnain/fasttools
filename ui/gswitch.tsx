"use client"

import * as React from "react"
import * as GSwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const GSwitch = React.forwardRef<
    React.ElementRef<typeof GSwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof GSwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <GSwitchPrimitives.Root
        className={cn(
            "peer inline-flex h-6 w-11 min-h-0 min-w-0 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-zinc-800",
            className
        )}
        {...props}
        ref={ref}
    >
        <GSwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5"
            )}
        />
    </GSwitchPrimitives.Root>
))
GSwitch.displayName = GSwitchPrimitives.Root.displayName

export { GSwitch }
