import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

function Empty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "cn:flex cn:min-w-0 cn:flex-1 cn:flex-col cn:items-center cn:justify-center cn:gap-6 cn:text-balance cn:rounded-lg cn:border-dashed cn:p-6 cn:text-center cn:md:p-12",
        className
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        "cn:flex cn:max-w-sm cn:flex-col cn:items-center cn:gap-2 cn:text-center",
        className
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  "cn:mb-2 cn:flex cn:shrink-0 cn:items-center cn:justify-center cn:[&_svg]:pointer-events-none cn:[&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cn:bg-transparent",
        icon: "cn:bg-muted cn:text-foreground cn:flex cn:size-10 cn:shrink-0 cn:items-center cn:justify-center cn:rounded-lg cn:[&_svg:not([class*=size-])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn("cn:text-lg cn:font-medium cn:tracking-tight", className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "cn:text-muted-foreground cn:[&>a:hover]:text-primary cn:text-sm/relaxed cn:[&>a]:underline cn:[&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "cn:flex cn:w-full cn:min-w-0 cn:max-w-sm cn:flex-col cn:items-center cn:gap-4 cn:text-balance cn:text-sm",
        className
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
