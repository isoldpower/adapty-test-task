"use client"

import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "cn:flex cn:h-full cn:w-full cn:data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "cn:relative cn:flex cn:w-px cn:items-center cn:justify-center cn:bg-border cn:after:absolute cn:after:inset-y-0 cn:after:left-1/2 cn:after:w-1 cn:after:-translate-x-1/2 cn:focus-visible:outline-none cn:focus-visible:ring-1 cn:focus-visible:ring-ring cn:focus-visible:ring-offset-1 cn:data-[panel-group-direction=vertical]:h-px cn:data-[panel-group-direction=vertical]:w-full cn:data-[panel-group-direction=vertical]:after:left-0 cn:data-[panel-group-direction=vertical]:after:h-1 cn:data-[panel-group-direction=vertical]:after:w-full cn:data-[panel-group-direction=vertical]:after:-translate-y-1/2 cn:data-[panel-group-direction=vertical]:after:translate-x-0 cn:[&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="cn:z-10 cn:flex cn:h-4 cn:w-3 cn:items-center cn:justify-center cn:rounded-sm cn:border cn:bg-border">
        <GripVertical className="cn:h-2.5 cn:w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
