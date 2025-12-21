import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' | 'none';

type EvenGridGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    firstBreakpoint?: Breakpoints;
    secondBreakpoint?: Breakpoints;
};

const breakpointClasses: Record<'first' | 'second', Record<Breakpoints, string>> = {
    first: {
        sm: 'sm:grid-cols-2',
        md: 'md:grid-cols-2',
        lg: 'lg:grid-cols-2',
        xl: 'xl:grid-cols-2',
        '2xl': '2xl:grid-cols-2',
        none: '',
        all: 'grid-cols-2',
    },
    second: {
        sm: 'sm:grid-cols-4',
        md: 'md:grid-cols-4',
        lg: 'lg:grid-cols-4',
        xl: 'xl:grid-cols-4',
        '2xl': '2xl:grid-cols-4',
        none: '',
        all: 'grid-cols-4',
    },
}

function EvenGridGroup({
    children,
    className,
    firstBreakpoint = 'sm',
    secondBreakpoint = 'md',
    ...props
}: EvenGridGroupProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4",
                breakpointClasses.first[firstBreakpoint],
                breakpointClasses.second[secondBreakpoint],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { EvenGridGroup };
export type { EvenGridGroupProps };