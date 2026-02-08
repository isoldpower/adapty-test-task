import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Separator } from "@shared/ui-toolkit/@shadcn/ui/separator"

const buttonGroupVariants = cva(
  "cn:flex cn:w-fit cn:items-stretch cn:has-[>[data-slot=button-group]]:gap-2 cn:[&>*]:focus-visible:relative cn:[&>*]:focus-visible:z-10 cn:has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md cn:[&>[data-slot=select-trigger]:not([class*=w-])]:w-fit cn:[&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal:
          "cn:[&>*:not(:first-child)]:rounded-l-none cn:[&>*:not(:first-child)]:border-l-0 cn:[&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "cn:flex-col cn:[&>*:not(:first-child)]:rounded-t-none cn:[&>*:not(:first-child)]:border-t-0 cn:[&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "cn:bg-muted cn:shadow-xs cn:flex cn:items-center cn:gap-2 cn:rounded-md cn:border cn:px-4 cn:text-sm cn:font-medium cn:[&_svg:not([class*=size-])]:size-4 cn:[&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "cn:bg-input cn:relative cn:!m-0 cn:self-stretch cn:data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
