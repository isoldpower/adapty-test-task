"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "cn:grid cn:place-content-center cn:peer cn:h-4 cn:w-4 cn:shrink-0 cn:rounded-sm cn:border cn:border-primary cn:shadow cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:cursor-not-allowed cn:disabled:opacity-50 cn:data-[state=checked]:bg-primary cn:data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("cn:grid cn:place-content-center cn:text-current")}
    >
      <Check className="cn:h-4 cn:w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
