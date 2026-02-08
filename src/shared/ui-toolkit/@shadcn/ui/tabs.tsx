"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "cn:inline-flex cn:h-9 cn:items-center cn:justify-center cn:rounded-lg cn:bg-muted cn:p-1 cn:text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "cn:inline-flex cn:items-center cn:justify-center cn:whitespace-nowrap cn:rounded-md cn:px-3 cn:py-1 cn:text-sm cn:font-medium cn:ring-offset-background cn:transition-all cn:focus-visible:outline-none cn:focus-visible:ring-2 cn:focus-visible:ring-ring cn:focus-visible:ring-offset-2 cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:data-[state=active]:bg-background cn:data-[state=active]:text-foreground cn:data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "cn:mt-2 cn:ring-offset-background cn:focus-visible:outline-none cn:focus-visible:ring-2 cn:focus-visible:ring-ring cn:focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
