"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "cn:fixed cn:inset-0 cn:z-50 cn:bg-black/80 cn: cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "cn:fixed cn:left-[50%] cn:top-[50%] cn:z-50 cn:grid cn:w-full cn:max-w-lg cn:translate-x-[-50%] cn:translate-y-[-50%] cn:gap-4 cn:border cn:bg-background cn:p-6 cn:shadow-lg cn:duration-200 cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[state=closed]:slide-out-to-left-1/2 cn:data-[state=closed]:slide-out-to-top-[48%] cn:data-[state=open]:slide-in-from-left-1/2 cn:data-[state=open]:slide-in-from-top-[48%] cn:sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="cn:absolute cn:right-4 cn:top-4 cn:rounded-sm cn:opacity-70 cn:ring-offset-background cn:transition-opacity cn:hover:opacity-100 cn:focus:outline-none cn:focus:ring-2 cn:focus:ring-ring cn:focus:ring-offset-2 cn:disabled:pointer-events-none cn:data-[state=open]:bg-accent cn:data-[state=open]:text-muted-foreground">
        <X className="cn:h-4 cn:w-4" />
        <span className="cn:sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "cn:flex cn:flex-col cn:space-y-1.5 cn:text-center cn:sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
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
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "cn:text-lg cn:font-semibold cn:leading-none cn:tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("cn:text-sm cn:text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
