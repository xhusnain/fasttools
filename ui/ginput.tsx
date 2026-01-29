import * as React from 'react'

import { cn } from '@/lib/utils'

interface GInputProps extends React.ComponentProps<'input'> {
  enableFocusRing?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const GInput = React.forwardRef<HTMLInputElement, GInputProps>(
  ({ className, type, enableFocusRing = true, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "input",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            !enableFocusRing && "focus-visible:ring-0 focus:shadow-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    )
  }
)

export { GInput }
