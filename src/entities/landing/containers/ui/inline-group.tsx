import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type Breakpoints = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all';

type InlineGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    gap?: number;
    breakpoint?: Breakpoints;
};

const breakpointVariants: Record<Breakpoints, string> = {
    sm: "sm:items-center sm:flex-row",
    md: "md:items-center md:flex-row",
    lg: "lg:items-center lg:flex-row",
    xl: "xl:items-center xl:flex-row",
    "2xl": "2xl:items-center 2xl:flex-row",
    none: "",
    all: "items-center flex-row",
}

function InlineGroup({
    gap,
    children,
    className,
    style,
    breakpoint = 'none',
    ...props
}: InlineGroupProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-start",
                breakpointVariants[breakpoint],
                className
            )}
            style={gap
                ? { gap: `calc(var(--spacing) * ${gap.toString()})`, ...style }
                : style
            }
            {...props}
        >
            {children}
        </div>
    );
}

export { InlineGroup };
export type { InlineGroupProps };