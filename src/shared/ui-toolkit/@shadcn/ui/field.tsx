"use client"

import { useMemo } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@shared/ui-toolkit/@shadcn/lib/utils"
import { Label } from "@shared/ui-toolkit/@shadcn/ui/label"
import { Separator } from "@shared/ui-toolkit/@shadcn/ui/separator"

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "cn:flex cn:flex-col cn:gap-6",
        "cn:has-[>[data-slot=checkbox-group]]:gap-3 cn:has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "cn:mb-3 cn:font-medium",
        "cn:data-[variant=legend]:text-base",
        "cn:data-[variant=label]:text-sm",
        className
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "cn:group/field-group cn:@container/field-group cn:flex cn:w-full cn:flex-col cn:gap-7 cn:data-[slot=checkbox-group]:gap-3 cn:[&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  "cn:group/field cn:data-[invalid=true]:text-destructive cn:flex cn:w-full cn:gap-3",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start",
        ],
        responsive: [
          "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "cn:group/field-content cn:flex cn:flex-1 cn:flex-col cn:gap-1.5 cn:leading-snug",
        className
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "cn:group/field-label cn:peer/field-label cn:flex cn:w-fit cn:gap-2 cn:leading-snug cn:group-data-[disabled=true]/field:opacity-50",
        "cn:has-[>[data-slot=field]]:w-full cn:has-[>[data-slot=field]]:flex-col cn:has-[>[data-slot=field]]:rounded-md cn:has-[>[data-slot=field]]:border cn:[&>[data-slot=field]]:p-4",
        "cn:has-data-[state=checked]:bg-primary/5 cn:has-data-[state=checked]:border-primary cn:dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "cn:flex cn:w-fit cn:items-center cn:gap-2 cn:text-sm cn:font-medium cn:leading-snug cn:group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "cn:text-muted-foreground cn:text-sm cn:font-normal cn:leading-normal cn:group-has-[[data-orientation=horizontal]]/field:text-balance",
        "cn:nth-last-2:-mt-1 cn:last:mt-0 cn:[[data-variant=legend]+&]:-mt-1.5",
        "cn:[&>a:hover]:text-primary cn:[&>a]:underline cn:[&>a]:underline-offset-4",
        className
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "cn:relative cn:-my-2 cn:h-5 cn:text-sm cn:group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}
    >
      <Separator className="cn:absolute cn:inset-0 cn:top-1/2" />
      {children && (
        <span
          className="cn:bg-background cn:text-muted-foreground cn:relative cn:mx-auto cn:block cn:w-fit cn:px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors?.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="cn:ml-4 cn:flex cn:list-disc cn:flex-col cn:gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("cn:text-destructive cn:text-sm cn:font-normal", className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
