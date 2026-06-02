'use client'

import * as React from 'react'
import * as GSelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function GSelect({
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Root>) {
  return <GSelectPrimitive.Root data-slot="select" {...props} />
}

function GSelectGroup({
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Group>) {
  return <GSelectPrimitive.Group data-slot="select-group" {...props} />
}

function GSelectValue({
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Value>) {
  return <GSelectPrimitive.Value data-slot="select-value" {...props} />
}

function GSelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <GSelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground hover:border-primary/40 focus-visible:border-primary focus-visible:ring-ring/25 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-white px-3 py-2 text-sm whitespace-nowrap shadow-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <GSelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </GSelectPrimitive.Icon>
    </GSelectPrimitive.Trigger>
  )
}

function GSelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Content>) {
  return (
    <GSelectPrimitive.Portal>
      <GSelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <GSelectScrollUpButton />
        <GSelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </GSelectPrimitive.Viewport>
        <GSelectScrollDownButton />
      </GSelectPrimitive.Content>
    </GSelectPrimitive.Portal>
  )
}

function GSelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Label>) {
  return (
    <GSelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function GSelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Item>) {
  return (
    <GSelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <GSelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </GSelectPrimitive.ItemIndicator>
      </span>
      <GSelectPrimitive.ItemText>{children}</GSelectPrimitive.ItemText>
    </GSelectPrimitive.Item>
  )
}

function GSelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.Separator>) {
  return (
    <GSelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function GSelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.ScrollUpButton>) {
  return (
    <GSelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </GSelectPrimitive.ScrollUpButton>
  )
}

function GSelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof GSelectPrimitive.ScrollDownButton>) {
  return (
    <GSelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </GSelectPrimitive.ScrollDownButton>
  )
}

export {
  GSelect,
  GSelectContent,
  GSelectGroup,
  GSelectItem,
  GSelectLabel,
  GSelectScrollDownButton,
  GSelectScrollUpButton,
  GSelectSeparator,
  GSelectTrigger,
  GSelectValue,
}
