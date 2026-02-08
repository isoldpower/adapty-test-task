"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:px-2 cn:py-1.5 cn:text-sm cn:outline-none cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[state=open]:bg-accent cn:data-[state=open]:text-accent-foreground",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="cn:ml-auto cn:h-4 cn:w-4" />
  </ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "cn:z-50 cn:min-w-[8rem] cn:overflow-hidden cn:rounded-md cn:border cn:bg-popover cn:p-1 cn:text-popover-foreground cn:shadow-lg cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-context-menu-content-transform-origin]",
      className
    )}
    {...props}
  />
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "cn:z-50 cn:max-h-[--radix-context-menu-content-available-height] cn:min-w-[8rem] cn:overflow-y-auto cn:overflow-x-hidden cn:rounded-md cn:border cn:bg-popover cn:p-1 cn:text-popover-foreground cn:shadow-md cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-context-menu-content-transform-origin]",
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:px-2 cn:py-1.5 cn:text-sm cn:outline-none cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:py-1.5 cn:pl-8 cn:pr-2 cn:text-sm cn:outline-none cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="cn:absolute cn:left-2 cn:flex cn:h-3.5 cn:w-3.5 cn:items-center cn:justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="cn:h-4 cn:w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:py-1.5 cn:pl-8 cn:pr-2 cn:text-sm cn:outline-none cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="cn:absolute cn:left-2 cn:flex cn:h-3.5 cn:w-3.5 cn:items-center cn:justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="cn:h-4 cn:w-4 cn:fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "cn:px-2 cn:py-1.5 cn:text-sm cn:font-semibold cn:text-foreground",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  />
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("cn:-mx-1 cn:my-1 cn:h-px cn:bg-border", className)}
    {...props}
  />
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "cn:ml-auto cn:text-xs cn:tracking-widest cn:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.displayName = "ContextMenuShortcut"

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
