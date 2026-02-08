"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@shared/ui-toolkit/@shadcn/lib/hooks/use-mobile"
import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Button } from "@shared/ui-toolkit/@shadcn/ui/button"
import { Input } from "@shared/ui-toolkit/@shadcn/ui/input"
import { Separator } from "@shared/ui-toolkit/@shadcn/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@shared/ui-toolkit/@shadcn/ui/sheet"
import { Skeleton } from "@shared/ui-toolkit/@shadcn/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/ui-toolkit/@shadcn/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContextProps = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "cn:group/sidebar-wrapper cn:flex cn:min-h-svh cn:w-full cn:has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "cn:flex cn:h-full cn:w-[--sidebar-width] cn:flex-col cn:bg-sidebar cn:text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="cn:w-[--sidebar-width] cn:bg-sidebar cn:p-0 cn:text-sidebar-foreground cn:[&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="cn:sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="cn:flex cn:h-full cn:w-full cn:flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="cn:group cn:peer cn:hidden cn:text-sidebar-foreground cn:md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "cn:relative cn:w-[--sidebar-width] cn:bg-transparent cn:transition-[width] cn:duration-200 cn:ease-linear",
            "cn:group-data-[collapsible=offcanvas]:w-0",
            "cn:group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "cn:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "cn:group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "cn:fixed cn:inset-y-0 cn:z-10 cn:hidden cn:h-svh cn:w-[--sidebar-width] cn:transition-[left,right,width] cn:duration-200 cn:ease-linear cn:md:flex",
            side === "left"
              ? "cn:left-0 cn:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "cn:right-0 cn:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "cn:p-2 cn:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "cn:group-data-[collapsible=icon]:w-[--sidebar-width-icon] cn:group-data-[side=left]:border-r cn:group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="cn:flex cn:h-full cn:w-full cn:flex-col cn:bg-sidebar cn:group-data-[variant=floating]:rounded-lg cn:group-data-[variant=floating]:border cn:group-data-[variant=floating]:border-sidebar-border cn:group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("cn:h-7 cn:w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="cn:sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "cn:absolute cn:inset-y-0 cn:z-20 cn:hidden cn:w-4 cn:-translate-x-1/2 cn:transition-all cn:ease-linear cn:after:absolute cn:after:inset-y-0 cn:after:left-1/2 cn:after:w-[2px] cn:hover:after:bg-sidebar-border cn:group-data-[side=left]:-right-4 cn:group-data-[side=right]:left-0 cn:sm:flex",
        "cn:[[data-side=left]_&]:cursor-w-resize cn:[[data-side=right]_&]:cursor-e-resize",
        "cn:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize cn:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "cn:group-data-[collapsible=offcanvas]:translate-x-0 cn:group-data-[collapsible=offcanvas]:after:left-full cn:group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "cn:[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "cn:[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props}
    />
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "cn:relative cn:flex cn:w-full cn:flex-1 cn:flex-col cn:bg-background",
        "cn:md:peer-data-[variant=inset]:m-2 cn:md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 cn:md:peer-data-[variant=inset]:ml-0 cn:md:peer-data-[variant=inset]:rounded-xl cn:md:peer-data-[variant=inset]:shadow",
        className
      )}
      {...props}
    />
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "cn:h-8 cn:w-full cn:bg-background cn:shadow-none cn:focus-visible:ring-2 cn:focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("cn:flex cn:flex-col cn:gap-2 cn:p-2", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("cn:flex cn:flex-col cn:gap-2 cn:p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("cn:mx-2 cn:w-auto cn:bg-sidebar-border", className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "cn:flex cn:min-h-0 cn:flex-1 cn:flex-col cn:gap-2 cn:overflow-auto cn:group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("cn:relative cn:flex cn:w-full cn:min-w-0 cn:flex-col cn:p-2", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "cn:flex cn:h-8 cn:shrink-0 cn:items-center cn:rounded-md cn:px-2 cn:text-xs cn:font-medium cn:text-sidebar-foreground/70 cn:outline-none cn:ring-sidebar-ring cn:transition-[margin,opacity] cn:duration-200 cn:ease-linear cn:focus-visible:ring-2 cn:[&>svg]:size-4 cn:[&>svg]:shrink-0",
        "cn:group-data-[collapsible=icon]:-mt-8 cn:group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "cn:absolute cn:right-3 cn:top-3.5 cn:flex cn:aspect-square cn:w-5 cn:items-center cn:justify-center cn:rounded-md cn:p-0 cn:text-sidebar-foreground cn:outline-none cn:ring-sidebar-ring cn:transition-transform cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground cn:focus-visible:ring-2 cn:[&>svg]:size-4 cn:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "cn:after:absolute cn:after:-inset-2 cn:after:md:hidden",
        "cn:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("cn:w-full cn:text-sm", className)}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("cn:flex cn:w-full cn:min-w-0 cn:flex-col cn:gap-1", className)}
    {...props}
  />
))
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("cn:group/menu-item cn:relative", className)}
    {...props}
  />
))
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "cn:peer/menu-button cn:flex cn:w-full cn:items-center cn:gap-2 cn:overflow-hidden cn:rounded-md cn:p-2 cn:text-left cn:text-sm cn:outline-none cn:ring-sidebar-ring cn:transition-[width,height,padding] cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground cn:focus-visible:ring-2 cn:active:bg-sidebar-accent cn:active:text-sidebar-accent-foreground cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 cn:aria-disabled:pointer-events-none cn:aria-disabled:opacity-50 cn:data-[active=true]:bg-sidebar-accent cn:data-[active=true]:font-medium cn:data-[active=true]:text-sidebar-accent-foreground cn:data-[state=open]:hover:bg-sidebar-accent cn:data-[state=open]:hover:text-sidebar-accent-foreground cn:group-data-[collapsible=icon]:!size-8 cn:group-data-[collapsible=icon]:!p-2 cn:[&>span:last-child]:truncate cn:[&>svg]:size-4 cn:[&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground",
        outline:
          "cn:bg-background cn:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground cn:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "cn:h-8 cn:text-sm",
        sm: "cn:h-7 cn:text-xs",
        lg: "cn:h-12 cn:text-sm cn:group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "cn:absolute cn:right-1 cn:top-1.5 cn:flex cn:aspect-square cn:w-5 cn:items-center cn:justify-center cn:rounded-md cn:p-0 cn:text-sidebar-foreground cn:outline-none cn:ring-sidebar-ring cn:transition-transform cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground cn:focus-visible:ring-2 cn:peer-hover/menu-button:text-sidebar-accent-foreground cn:[&>svg]:size-4 cn:[&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "cn:after:absolute cn:after:-inset-2 cn:after:md:hidden",
        "cn:peer-data-[size=sm]/menu-button:top-1",
        "cn:peer-data-[size=default]/menu-button:top-1.5",
        "cn:peer-data-[size=lg]/menu-button:top-2.5",
        "cn:group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "cn:group-focus-within/menu-item:opacity-100 cn:group-hover/menu-item:opacity-100 cn:data-[state=open]:opacity-100 cn:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground cn:md:opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      "cn:pointer-events-none cn:absolute cn:right-1 cn:flex cn:h-5 cn:min-w-5 cn:select-none cn:items-center cn:justify-center cn:rounded-md cn:px-1 cn:text-xs cn:font-medium cn:tabular-nums cn:text-sidebar-foreground",
      "cn:peer-hover/menu-button:text-sidebar-accent-foreground cn:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "cn:peer-data-[size=sm]/menu-button:top-1",
      "cn:peer-data-[size=default]/menu-button:top-1.5",
      "cn:peer-data-[size=lg]/menu-button:top-2.5",
      "cn:group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("cn:flex cn:h-8 cn:items-center cn:gap-2 cn:rounded-md cn:px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="cn:size-4 cn:rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="cn:h-4 cn:max-w-[--skeleton-width] cn:flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "cn:mx-3.5 cn:flex cn:min-w-0 cn:translate-x-px cn:flex-col cn:gap-1 cn:border-l cn:border-sidebar-border cn:px-2.5 cn:py-0.5",
      "cn:group-data-[collapsible=icon]:hidden",
      className
    )}
    {...props}
  />
))
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "cn:flex cn:h-7 cn:min-w-0 cn:-translate-x-px cn:items-center cn:gap-2 cn:overflow-hidden cn:rounded-md cn:px-2 cn:text-sidebar-foreground cn:outline-none cn:ring-sidebar-ring cn:hover:bg-sidebar-accent cn:hover:text-sidebar-accent-foreground cn:focus-visible:ring-2 cn:active:bg-sidebar-accent cn:active:text-sidebar-accent-foreground cn:disabled:pointer-events-none cn:disabled:opacity-50 cn:aria-disabled:pointer-events-none cn:aria-disabled:opacity-50 cn:[&>span:last-child]:truncate cn:[&>svg]:size-4 cn:[&>svg]:shrink-0 cn:[&>svg]:text-sidebar-accent-foreground",
        "cn:data-[active=true]:bg-sidebar-accent cn:data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "cn:text-xs",
        size === "md" && "cn:text-sm",
        "cn:group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
