import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type OneLineGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    gap?: number;
};

function OneLineGroup({
    children,
    className,
    style,
    gap = 12,
    ...props
}: OneLineGroupProps) {
    return (
        <div
            className={cn("flex justify-around items-center", className)}
            style={{ ...style, gap: `calc(var(--spacing) * ${gap.toString()})` }}
            {...props}
        >
            {children}
        </div>
    );
}

export { OneLineGroup };
export type { OneLineGroupProps };