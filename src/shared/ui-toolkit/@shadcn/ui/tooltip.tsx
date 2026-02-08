"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "cn:z-50 cn:overflow-hidden cn:rounded-md cn:bg-primary cn:px-3 cn:py-1.5 cn:text-xs cn:text-primary-foreground cn:animate-in cn:fade-in-0 cn:zoom-in-95 cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=closed]:zoom-out-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-tooltip-content-transform-origin]",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
