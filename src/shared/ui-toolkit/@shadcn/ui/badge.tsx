import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const badgeVariants = cva(
  "cn:inline-flex cn:items-center cn:rounded-md cn:border cn:px-2.5 cn:py-0.5 cn:text-xs cn:font-semibold cn:transition-colors cn:focus:outline-none cn:focus:ring-2 cn:focus:ring-ring cn:focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "cn:border-transparent cn:bg-primary cn:text-primary-foreground cn:shadow cn:hover:bg-primary/80",
        secondary:
          "cn:border-transparent cn:bg-secondary cn:text-secondary-foreground cn:hover:bg-secondary/80",
        destructive:
          "cn:border-transparent cn:bg-destructive cn:text-destructive-foreground cn:shadow cn:hover:bg-destructive/80",
        outline: "cn:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
