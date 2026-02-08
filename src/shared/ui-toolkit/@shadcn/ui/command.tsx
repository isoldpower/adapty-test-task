"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Dialog, DialogContent } from "@shared/ui-toolkit/@shadcn/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "cn:flex cn:h-full cn:w-full cn:flex-col cn:overflow-hidden cn:rounded-md cn:bg-popover cn:text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="cn:overflow-hidden cn:p-0">
        <Command className="cn:[&_[cmdk-group-heading]]:px-2 cn:[&_[cmdk-group-heading]]:font-medium cn:[&_[cmdk-group-heading]]:text-muted-foreground cn:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 cn:[&_[cmdk-group]]:px-2 cn:[&_[cmdk-input-wrapper]_svg]:h-5 cn:[&_[cmdk-input-wrapper]_svg]:w-5 cn:[&_[cmdk-input]]:h-12 cn:[&_[cmdk-item]]:px-2 cn:[&_[cmdk-item]]:py-3 cn:[&_[cmdk-item]_svg]:h-5 cn:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="cn:flex cn:items-center cn:border-b cn:px-3" cmdk-input-wrapper="">
    <Search className="cn:mr-2 cn:h-4 cn:w-4 cn:shrink-0 cn:opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "cn:flex cn:h-10 cn:w-full cn:rounded-md cn:bg-transparent cn:py-3 cn:text-sm cn:outline-none cn:placeholder:text-muted-foreground cn:disabled:cursor-not-allowed cn:disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("cn:max-h-[300px] cn:overflow-y-auto cn:overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="cn:py-6 cn:text-center cn:text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "cn:overflow-hidden cn:p-1 cn:text-foreground cn:[&_[cmdk-group-heading]]:px-2 cn:[&_[cmdk-group-heading]]:py-1.5 cn:[&_[cmdk-group-heading]]:text-xs cn:[&_[cmdk-group-heading]]:font-medium cn:[&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("cn:-mx-1 cn:h-px cn:bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "cn:relative cn:flex cn:cursor-default cn:gap-2 cn:select-none cn:items-center cn:rounded-sm cn:px-2 cn:py-1.5 cn:text-sm cn:outline-none cn:data-[disabled=true]:pointer-events-none cn:data-[selected=true]:bg-accent cn:data-[selected=true]:text-accent-foreground cn:data-[disabled=true]:opacity-50 cn:[&_svg]:pointer-events-none cn:[&_svg]:size-4 cn:[&_svg]:shrink-0",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
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
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
