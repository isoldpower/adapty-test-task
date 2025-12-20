import type React from "react"
import { cn } from "../../../lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 xs:px-5 sm:px-6 md:px-8", className)}>{children}</div>
}
