"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:w-full cn:touch-none cn:select-none cn:items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="cn:relative cn:h-1.5 cn:w-full cn:grow cn:overflow-hidden cn:rounded-full cn:bg-primary/20">
      <SliderPrimitive.Range className="cn:absolute cn:h-full cn:bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="cn:block cn:h-4 cn:w-4 cn:rounded-full cn:border cn:border-primary/50 cn:bg-background cn:shadow cn:transition-colors cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:pointer-events-none cn:disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
