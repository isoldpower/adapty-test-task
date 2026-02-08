import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const buttonVariants = cva(
  "cn:inline-flex cn:items-center cn:justify-center cn:gap-2 cn:whitespace-nowrap cn:rounded-md cn:text-sm cn:font-medium cn:transition-colors cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:[&_svg]:pointer-events-none cn:[&_svg]:size-4 cn:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "cn:bg-primary cn:text-primary-foreground cn:shadow cn:hover:bg-primary/90",
        destructive:
          "cn:bg-destructive cn:text-destructive-foreground cn:shadow-sm cn:hover:bg-destructive/90",
        outline:
          "cn:border cn:border-input cn:bg-background cn:shadow-sm cn:hover:bg-accent cn:hover:text-accent-foreground",
        secondary:
          "cn:bg-secondary cn:text-secondary-foreground cn:shadow-sm cn:hover:bg-secondary/80",
        ghost: "cn:hover:bg-accent cn:hover:text-accent-foreground",
        link: "cn:text-primary cn:underline-offset-4 cn:hover:underline",
      },
      size: {
        default: "cn:h-9 cn:px-4 cn:py-2",
        sm: "cn:h-8 cn:rounded-md cn:px-3 cn:text-xs",
        lg: "cn:h-10 cn:rounded-md cn:px-8",
        icon: "cn:h-9 cn:w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
