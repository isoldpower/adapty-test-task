"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "cn:flex cn:h-9 cn:w-full cn:items-center cn:justify-between cn:whitespace-nowrap cn:rounded-md cn:border cn:border-input cn:bg-transparent cn:px-3 cn:py-2 cn:text-sm cn:shadow-sm cn:ring-offset-background cn:data-[placeholder]:text-muted-foreground cn:focus:outline-none cn:focus:ring-1 cn:focus:ring-ring cn:disabled:cursor-not-allowed cn:disabled:opacity-50 cn:[&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="cn:h-4 cn:w-4 cn:opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "cn:flex cn:cursor-default cn:items-center cn:justify-center cn:py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="cn:h-4 cn:w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "cn:flex cn:cursor-default cn:items-center cn:justify-center cn:py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="cn:h-4 cn:w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "cn:relative cn:z-50 cn:max-h-[--radix-select-content-available-height] cn:min-w-[8rem] cn:overflow-y-auto cn:overflow-x-hidden cn:rounded-md cn:border cn:bg-popover cn:text-popover-foreground cn:shadow-md cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:fade-out-0 cn:data-[state=open]:fade-in-0 cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-95 cn:data-[side=bottom]:slide-in-from-top-2 cn:data-[side=left]:slide-in-from-right-2 cn:data-[side=right]:slide-in-from-left-2 cn:data-[side=top]:slide-in-from-bottom-2 cn:origin-[--radix-select-content-transform-origin]",
        position === "popper" &&
          "cn:data-[side=bottom]:translate-y-1 cn:data-[side=left]:-translate-x-1 cn:data-[side=right]:translate-x-1 cn:data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "cn:p-1",
          position === "popper" &&
            "cn:h-[var(--radix-select-trigger-height)] cn:w-full cn:min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("cn:px-2 cn:py-1.5 cn:text-sm cn:font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:w-full cn:cursor-default cn:select-none cn:items-center cn:rounded-sm cn:py-1.5 cn:pl-2 cn:pr-8 cn:text-sm cn:outline-none cn:focus:bg-accent cn:focus:text-accent-foreground cn:data-[disabled]:pointer-events-none cn:data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="cn:absolute cn:right-2 cn:flex cn:h-3.5 cn:w-3.5 cn:items-center cn:justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="cn:h-4 cn:w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("cn:-mx-1 cn:my-1 cn:h-px cn:bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
