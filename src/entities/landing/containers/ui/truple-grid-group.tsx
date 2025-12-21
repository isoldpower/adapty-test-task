import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' | 'none';

type TrupleGridGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
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
        sm: 'sm:grid-cols-3',
        md: 'md:grid-cols-3',
        lg: 'lg:grid-cols-3',
        xl: 'xl:grid-cols-3',
        '2xl': '2xl:grid-cols-3',
        none: '',
        all: 'grid-cols-3',
    },
}

function TrupleGridGroup({
    children,
    className,
    firstBreakpoint = 'sm',
    secondBreakpoint = 'md',
    ...props
}: TrupleGridGroupProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1",
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

export { TrupleGridGroup };
export type { TrupleGridGroupProps };