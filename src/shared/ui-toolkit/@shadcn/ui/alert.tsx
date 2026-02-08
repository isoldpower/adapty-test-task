import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const alertVariants = cva(
  "cn:relative cn:w-full cn:rounded-lg cn:border cn:px-4 cn:py-3 cn:text-sm cn:[&>svg+div]:translate-y-[-3px] cn:[&>svg]:absolute cn:[&>svg]:left-4 cn:[&>svg]:top-4 cn:[&>svg]:text-foreground cn:[&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "cn:bg-background cn:text-foreground",
        destructive:
          "cn:border-destructive/50 cn:text-destructive cn:dark:border-destructive cn:[&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("cn:mb-1 cn:font-medium cn:leading-none cn:tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("cn:text-sm cn:[&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
