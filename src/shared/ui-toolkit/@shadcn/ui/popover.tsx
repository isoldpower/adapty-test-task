"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "cn:z-50 cn:w-72 cn:rounded-md cn:border cn:bg-popover cn:p-4 cn:text-popover-foreground cn:shadow-md cn:outline-none cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-popover-content-transform-origin]",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
