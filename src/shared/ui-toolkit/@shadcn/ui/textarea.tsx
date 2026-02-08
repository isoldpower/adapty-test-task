import * as React from "react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "cn:flex cn:min-h-[60px] cn:w-full cn:rounded-md cn:border cn:border-input cn:bg-transparent cn:px-3 cn:py-2 cn:text-base cn:shadow-sm cn:placeholder:text-muted-foreground cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:cursor-not-allowed cn:disabled:opacity-50 cn:md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
