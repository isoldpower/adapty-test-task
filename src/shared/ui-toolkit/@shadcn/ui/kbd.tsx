import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "cn:bg-muted cn:text-muted-foreground cn:pointer-events-none cn:inline-flex cn:h-5 cn:w-fit cn:min-w-5 cn:select-none cn:items-center cn:justify-center cn:gap-1 cn:rounded-sm cn:px-1 cn:font-sans cn:text-xs cn:font-medium",
        "cn:[&_svg:not([class*=size-])]:size-3",
        "cn:[[data-slot=tooltip-content]_&]:bg-background/20 cn:[[data-slot=tooltip-content]_&]:text-background cn:dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("cn:inline-flex cn:items-center cn:gap-1", className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
