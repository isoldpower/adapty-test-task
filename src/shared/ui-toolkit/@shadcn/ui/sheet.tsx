"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "cn:fixed cn:inset-0 cn:z-50 cn:bg-black/80 cn: cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "cn:fixed cn:z-50 cn:gap-4 cn:bg-background cn:p-6 cn:shadow-lg cn:transition cn:ease-in-out cn:data-[state=closed]:duration-300 cn:data-[state=open]:duration-500 cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "cn:inset-x-0 cn:top-0 cn:border-b cn:data-[state=closed]:slide-out-to-top cn:data-[state=open]:slide-in-from-top",
        bottom:
          "cn:inset-x-0 cn:bottom-0 cn:border-t cn:data-[state=closed]:slide-out-to-bottom cn:data-[state=open]:slide-in-from-bottom",
        left: "cn:inset-y-0 cn:left-0 cn:h-full cn:w-3/4 cn:border-r cn:data-[state=closed]:slide-out-to-left cn:data-[state=open]:slide-in-from-left cn:sm:max-w-sm",
        right:
          "cn:inset-y-0 cn:right-0 cn:h-full cn:w-3/4 cn:border-l cn:data-[state=closed]:slide-out-to-right cn:data-[state=open]:slide-in-from-right cn:sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      <SheetPrimitive.Close className="cn:absolute cn:right-4 cn:top-4 cn:rounded-sm cn:opacity-70 cn:ring-offset-background cn:transition-opacity cn:hover:opacity-100 cn:focus:outline-none cn:focus:ring-2 cn:focus:ring-ring cn:focus:ring-offset-2 cn:disabled:pointer-events-none cn:data-[state=open]:bg-secondary">
        <X className="cn:h-4 cn:w-4" />
        <span className="cn:sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "cn:flex cn:flex-col cn:space-y-2 cn:text-center cn:sm:text-left",
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "cn:flex cn:flex-col-reverse cn:sm:flex-row cn:sm:justify-end cn:sm:space-x-2",
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("cn:text-lg cn:font-semibold cn:text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("cn:text-sm cn:text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
