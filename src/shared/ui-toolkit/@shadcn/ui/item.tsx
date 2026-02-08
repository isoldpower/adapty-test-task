import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Separator } from "@shared/ui-toolkit/@shadcn/ui/separator"

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("cn:group/item-group cn:flex cn:flex-col", className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("cn:my-0", className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  "cn:group/item cn:[a]:hover:bg-accent/50 cn:focus-visible:border-ring cn:focus-visible:ring-ring/50 cn:[a]:transition-colors cn:flex cn:flex-wrap cn:items-center cn:rounded-md cn:border cn:border-transparent cn:text-sm cn:outline-none cn:transition-colors cn:duration-100 cn:focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "cn:bg-transparent",
        outline: "cn:border-border",
        muted: "cn:bg-muted/50",
      },
      size: {
        default: "cn:gap-4 cn:p-4 cn:",
        sm: "cn:gap-2.5 cn:px-4 cn:py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  "cn:flex cn:shrink-0 cn:items-center cn:justify-center cn:gap-2 cn:group-has-[[data-slot=item-description]]/item:translate-y-0.5 cn:group-has-[[data-slot=item-description]]/item:self-start cn:[&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "cn:bg-transparent",
        icon: "cn:bg-muted cn:size-8 cn:rounded-sm cn:border cn:[&_svg:not([class*=size-])]:size-4",
        image:
          "cn:size-10 cn:overflow-hidden cn:rounded-sm cn:[&_img]:size-full cn:[&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "cn:flex cn:flex-1 cn:flex-col cn:gap-1 cn:[&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "cn:flex cn:w-fit cn:items-center cn:gap-2 cn:text-sm cn:font-medium cn:leading-snug",
        className
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "cn:text-muted-foreground cn:line-clamp-2 cn:text-balance cn:text-sm cn:font-normal cn:leading-normal",
        "cn:[&>a:hover]:text-primary cn:[&>a]:underline cn:[&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-actions"
      className={cn("cn:flex cn:items-center cn:gap-2", className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        "cn:flex cn:basis-full cn:items-center cn:justify-between cn:gap-2",
        className
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        "cn:flex cn:basis-full cn:items-center cn:justify-between cn:gap-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
