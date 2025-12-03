"use client"

import * as React from "react"
import * as GAccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const GAccordion = GAccordionPrimitive.Root

const GAccordionItem = React.forwardRef<
  React.ElementRef<typeof GAccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof GAccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <GAccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
GAccordionItem.displayName = "GAccordionItem"

const GAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof GAccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof GAccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <GAccordionPrimitive.Header className="flex">
    <GAccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </GAccordionPrimitive.Trigger>
  </GAccordionPrimitive.Header>
))
GAccordionTrigger.displayName = GAccordionPrimitive.Trigger.displayName

const GAccordionContent = React.forwardRef<
  React.ElementRef<typeof GAccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof GAccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GAccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </GAccordionPrimitive.Content>
))

GAccordionContent.displayName = GAccordionPrimitive.Content.displayName

export { GAccordion, GAccordionItem, GAccordionTrigger, GAccordionContent }
