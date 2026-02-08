import { forwardRef } from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { buttonVariants } from "@shared/ui-toolkit/@shadcn/ui/button"

import type { ComponentProps } from "react"
import type { ButtonProps } from "@shared/ui-toolkit/@shadcn/ui/button"


const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("cn:mx-auto cn:flex cn:w-full cn:justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = forwardRef<
  HTMLUListElement,
  ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("cn:flex cn:flex-row cn:items-center cn:gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = forwardRef<
  HTMLLIElement,
  ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("cn:", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("cn:gap-1 cn:pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="cn:h-4 cn:w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("cn:gap-1 cn:pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="cn:h-4 cn:w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("cn:flex cn:h-9 cn:w-9 cn:items-center cn:justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="cn:h-4 cn:w-4" />
    <span className="cn:sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
