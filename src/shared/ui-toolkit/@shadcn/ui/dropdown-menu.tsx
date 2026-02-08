"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "cn:flex cn:cursor-default cn:select-none cn:items-center cn:gap-2 cn:rounded-sm cn:px-2 cn:py-1.5 cn:text-sm cn:outline-none cn:focus:bg-accent cn:data-[state=open]:bg-accent cn:[&_svg]:pointer-events-none cn:[&_svg]:size-4 cn:[&_svg]:shrink-0",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="cn:ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "cn:z-50 cn:min-w-[8rem] cn:overflow-hidden cn:rounded-md cn:border cn:bg-popover cn:p-1 cn:text-popover-foreground cn:shadow-lg cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-dropdown-menu-content-transform-origin]",
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "cn:z-50 cn:max-h-[var(--radix-dropdown-menu-content-available-height)] cn:min-w-[8rem] cn:overflow-y-auto cn:overflow-x-hidden cn:rounded-md cn:border cn:bg-popover cn:p-1 cn:text-popover-foreground cn:shadow-md",
        "cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:gap-2 cn:rounded-sm cn:px-2 cn:py-1.5 cn:text-sm cn:outline-none cn:transition-colors cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50 cn:[&>svg]:size-4 cn:[&>svg]:shrink-0",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:py-1.5 cn:pl-8 cn:pr-2 cn:text-sm cn:outline-none cn:transition-colors cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="cn:absolute cn:left-2 cn:flex cn:h-3.5 cn:w-3.5 cn:items-center cn:justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="cn:h-4 cn:w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:py-1.5 cn:pl-8 cn:pr-2 cn:text-sm cn:outline-none cn:transition-colors cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="cn:absolute cn:left-2 cn:flex cn:h-3.5 cn:w-3.5 cn:items-center cn:justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="cn:h-2 cn:w-2 cn:fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "cn:px-2 cn:py-1.5 cn:text-sm cn:font-semibold",
      inset && "cn:pl-8",
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("cn:-mx-1 cn:my-1 cn:h-px cn:bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("cn:ml-auto cn:text-xs cn:tracking-widest cn:opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
