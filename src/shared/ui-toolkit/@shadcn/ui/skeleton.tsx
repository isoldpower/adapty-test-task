import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("cn:animate-pulse cn:rounded-md cn:bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
