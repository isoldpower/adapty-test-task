"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Button } from "@shared/ui-toolkit/@shadcn/ui/button"
import { Input } from "@shared/ui-toolkit/@shadcn/ui/input"
import { Textarea } from "@shared/ui-toolkit/@shadcn/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "cn:group/input-group cn:border-input cn:dark:bg-input/30 cn:shadow-xs cn:relative cn:flex cn:w-full cn:items-center cn:rounded-md cn:border cn:outline-none cn:transition-[color,box-shadow]",
        "cn:h-9 cn:has-[>textarea]:h-auto",

        // Variants based on alignment.
        "cn:has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "cn:has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "cn:has-[>[data-align=block-start]]:h-auto cn:has-[>[data-align=block-start]]:flex-col cn:has-[>[data-align=block-start]]:[&>input]:pb-3",
        "cn:has-[>[data-align=block-end]]:h-auto cn:has-[>[data-align=block-end]]:flex-col cn:has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus state.
        "cn:has-[[data-slot=input-group-control]:focus-visible]:ring-ring cn:has-[[data-slot=input-group-control]:focus-visible]:ring-1",

        // Error state.
        "cn:has-[[data-slot][aria-invalid=true]]:ring-destructive/20 cn:has-[[data-slot][aria-invalid=true]]:border-destructive cn:dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",

        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "cn:text-muted-foreground cn:flex cn:h-auto cn:cursor-text cn:select-none cn:items-center cn:justify-center cn:gap-2 cn:py-1.5 cn:text-sm cn:font-medium cn:group-data-[disabled=true]/input-group:opacity-50 cn:[&>kbd]:rounded-[calc(var(--radius)-5px)] cn:[&>svg:not([class*=size-])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "cn:order-first cn:pl-3 cn:has-[>button]:ml-[-0.45rem] cn:has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "cn:order-last cn:pr-3 cn:has-[>button]:mr-[-0.4rem] cn:has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "cn:[.border-b]:pb-3 cn:order-first cn:w-full cn:justify-start cn:px-3 cn:pt-3 cn:group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "cn:[.border-t]:pt-3 cn:order-last cn:w-full cn:justify-start cn:px-3 cn:pb-3 cn:group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  "cn:flex cn:items-center cn:gap-2 cn:text-sm cn:shadow-none",
  {
    variants: {
      size: {
        xs: "cn:h-6 cn:gap-1 cn:rounded-[calc(var(--radius)-5px)] cn:px-2 cn:has-[>svg]:px-2 cn:[&>svg:not([class*=size-])]:size-3.5",
        sm: "cn:h-8 cn:gap-1.5 cn:rounded-md cn:px-2.5 cn:has-[>svg]:px-2.5",
        "icon-xs":
          "cn:size-6 cn:rounded-[calc(var(--radius)-5px)] cn:p-0 cn:has-[>svg]:p-0",
        "icon-sm": "cn:size-8 cn:p-0 cn:has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
)

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "cn:text-muted-foreground cn:flex cn:items-center cn:gap-2 cn:text-sm cn:[&_svg:not([class*=size-])]:size-4 cn:[&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "cn:flex-1 cn:rounded-none cn:border-0 cn:bg-transparent cn:shadow-none cn:focus-visible:ring-0 cn:dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "cn:flex-1 cn:resize-none cn:rounded-none cn:border-0 cn:bg-transparent cn:py-3 cn:shadow-none cn:focus-visible:ring-0 cn:dark:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
