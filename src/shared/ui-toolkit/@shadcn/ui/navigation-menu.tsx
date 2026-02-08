import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "cn:relative cn:z-10 cn:flex cn:max-w-max cn:flex-1 cn:items-center cn:justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "cn:group cn:flex cn:flex-1 cn:list-none cn:items-center cn:justify-center cn:space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "cn:group cn:inline-flex cn:h-9 cn:w-max cn:items-center cn:justify-center cn:rounded-md cn:bg-background cn:px-4 cn:py-2 cn:text-sm cn:font-medium cn:transition-colors cn:hover:bg-accent cn:hover:text-accent-foreground cn:focus:bg-accent cn:focus:text-accent-foreground cn:focus:outline-none cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:data-[state=open]:text-accent-foreground cn:data-[state=open]:bg-accent/50 cn:data-[state=open]:hover:bg-accent cn:data-[state=open]:focus:bg-accent"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "cn:group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="cn:relative cn:top-[1px] cn:ml-1 cn:h-3 cn:w-3 cn:transition cn:duration-300 cn:group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "cn:left-0 cn:top-0 cn:w-full cn:data-[motion^=from-]:animate-in cn:data-[motion^=to-]:animate-out cn:data-[motion^=from-]:fade-in cn:data-[motion^=to-]:fade-out cn:data-[motion=from-end]:slide-in-from-right-52 cn:data-[motion=from-start]:slide-in-from-left-52 cn:data-[motion=to-end]:slide-out-to-right-52 cn:data-[motion=to-start]:slide-out-to-left-52 cn:md:absolute cn:md:w-auto cn:",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("cn:absolute cn:left-0 cn:top-full cn:flex cn:justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "cn:origin-top-center cn:relative cn:mt-1.5 cn:h-[var(--radix-navigation-menu-viewport-height)] cn:w-full cn:overflow-hidden cn:rounded-md cn:border cn:bg-popover cn:text-popover-foreground cn:shadow cn:data-[state=open]:animate-in cn:data-[state=closed]:animate-out cn:data-[state=closed]:zoom-out-95 cn:data-[state=open]:zoom-in-90 cn:md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "cn:top-full cn:z-[1] cn:flex cn:h-1.5 cn:items-end cn:justify-center cn:overflow-hidden cn:data-[state=visible]:animate-in cn:data-[state=hidden]:animate-out cn:data-[state=hidden]:fade-out cn:data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="cn:relative cn:top-[60%] cn:h-2 cn:w-2 cn:rotate-45 cn:rounded-tl-sm cn:bg-border cn:shadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
