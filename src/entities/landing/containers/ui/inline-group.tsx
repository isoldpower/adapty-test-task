import {cn} from "@shared/lib/utils.ts";
import type {BaseHTMLAttributes} from "react";

type InlineGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    gap?: number;
};

function InlineGroup({
    gap,
    children,
    className,
    style,
    ...props
}: InlineGroupProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-start",
                "lg:items-center lg:flex-row",
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