"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const toggleVariants = cva(
  "cn:inline-flex cn:items-center cn:justify-center cn:gap-2 cn:rounded-md cn:text-sm cn:font-medium cn:transition-colors cn:hover:bg-muted cn:hover:text-muted-foreground cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:data-[state=on]:bg-accent cn:data-[state=on]:text-accent-foreground cn:[&_svg]:pointer-events-none cn:[&_svg]:size-4 cn:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cn:bg-transparent",
        outline:
          "cn:border cn:border-input cn:bg-transparent cn:shadow-sm cn:hover:bg-accent cn:hover:text-accent-foreground",
      },
      size: {
        default: "cn:h-9 cn:px-2 cn:min-w-9",
        sm: "cn:h-8 cn:px-1.5 cn:min-w-8",
        lg: "cn:h-10 cn:px-2.5 cn:min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
