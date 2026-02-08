import * as React from "react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "cn:flex cn:h-9 cn:w-full cn:rounded-md cn:border cn:border-input cn:bg-transparent cn:px-3 cn:py-1 cn:text-base cn:shadow-sm cn:transition-colors cn:file:border-0 cn:file:bg-transparent cn:file:text-sm cn:file:font-medium cn:file:text-foreground cn:placeholder:text-muted-foreground cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:cursor-not-allowed cn:disabled:opacity-50 cn:md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
