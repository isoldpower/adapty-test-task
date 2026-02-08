"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "cn:peer cn:inline-flex cn:h-5 cn:w-9 cn:shrink-0 cn:cursor-pointer cn:items-center cn:rounded-full cn:border-2 cn:border-transparent cn:shadow-sm cn:transition-colors cn:focus-visible:outline-none cn:focus-visible:ring-2 cn:focus-visible:ring-ring cn:focus-visible:ring-offset-2 cn:focus-visible:ring-offset-background cn:disabled:cursor-not-allowed cn:disabled:opacity-50 cn:data-[state=checked]:bg-primary cn:data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "cn:pointer-events-none cn:block cn:h-4 cn:w-4 cn:rounded-full cn:bg-background cn:shadow-lg cn:ring-0 cn:transition-transform cn:data-[state=checked]:translate-x-4 cn:data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
