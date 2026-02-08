"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Button, buttonVariants } from "@shared/ui-toolkit/@shadcn/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "cn:bg-background cn:group/calendar cn:p-3 cn:[--cell-size:2rem] cn:[[data-slot=card-content]_&]:bg-transparent cn:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("cn:w-fit", defaultClassNames.root),
        months: cn(
          "cn:relative cn:flex cn:flex-col cn:gap-4 cn:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("cn:flex cn:w-full cn:flex-col cn:gap-4", defaultClassNames.month),
        nav: cn(
          "cn:absolute cn:inset-x-0 cn:top-0 cn:flex cn:w-full cn:items-center cn:justify-between cn:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "cn:h-[--cell-size] cn:w-[--cell-size] cn:select-none cn:p-0 cn:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "cn:h-[--cell-size] cn:w-[--cell-size] cn:select-none cn:p-0 cn:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "cn:flex cn:h-[--cell-size] cn:w-full cn:items-center cn:justify-center cn:px-[--cell-size]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "cn:flex cn:h-[--cell-size] cn:w-full cn:items-center cn:justify-center cn:gap-1.5 cn:text-sm cn:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "cn:has-focus:border-ring cn:border-input cn:shadow-xs cn:has-focus:ring-ring/50 cn:has-focus:ring-[3px] cn:relative cn:rounded-md cn:border",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "cn:bg-popover cn:absolute cn:inset-0 cn:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "cn:select-none cn:font-medium",
          captionLayout === "label"
            ? "cn:text-sm"
            : "cn:[&>svg]:text-muted-foreground cn:flex cn:h-8 cn:items-center cn:gap-1 cn:rounded-md cn:pl-2 cn:pr-1 cn:text-sm cn:[&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "cn:w-full cn:border-collapse",
        weekdays: cn("cn:flex", defaultClassNames.weekdays),
        weekday: cn(
          "cn:text-muted-foreground cn:flex-1 cn:select-none cn:rounded-md cn:text-[0.8rem] cn:font-normal",
          defaultClassNames.weekday
        ),
        week: cn("cn:mt-2 cn:flex cn:w-full", defaultClassNames.week),
        week_number_header: cn(
          "cn:w-[--cell-size] cn:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "cn:text-muted-foreground cn:select-none cn:text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: cn(
          "cn:group/day cn:relative cn:aspect-square cn:h-full cn:w-full cn:select-none cn:p-0 cn:text-center cn:[&:first-child[data-selected=true]_button]:rounded-l-md cn:[&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "cn:bg-accent cn:rounded-l-md",
          defaultClassNames.range_start
        ),
        range_middle: cn("cn:rounded-none", defaultClassNames.range_middle),
        range_end: cn("cn:bg-accent cn:rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "cn:bg-accent cn:text-accent-foreground cn:rounded-md cn:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "cn:text-muted-foreground cn:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "cn:text-muted-foreground cn:opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("cn:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("cn:size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("cn:size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("cn:size-4", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="cn:flex cn:size-[--cell-size] cn:items-center cn:justify-center cn:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "cn:data-[selected-single=true]:bg-primary cn:data-[selected-single=true]:text-primary-foreground cn:data-[range-middle=true]:bg-accent cn:data-[range-middle=true]:text-accent-foreground cn:data-[range-start=true]:bg-primary cn:data-[range-start=true]:text-primary-foreground cn:data-[range-end=true]:bg-primary cn:data-[range-end=true]:text-primary-foreground cn:group-data-[focused=true]/day:border-ring cn:group-data-[focused=true]/day:ring-ring/50 cn:flex cn:aspect-square cn:h-auto cn:w-full cn:min-w-[--cell-size] cn:flex-col cn:gap-1 cn:font-normal cn:leading-none cn:data-[range-end=true]:rounded-md cn:data-[range-middle=true]:rounded-none cn:data-[range-start=true]:rounded-md cn:group-data-[focused=true]/day:relative cn:group-data-[focused=true]/day:z-10 cn:group-data-[focused=true]/day:ring-[3px] cn:[&>span]:text-xs cn:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
