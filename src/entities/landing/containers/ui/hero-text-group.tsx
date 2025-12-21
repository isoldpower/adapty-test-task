import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type HeroTextGroupProps = BaseHTMLAttributes<HTMLDivElement>;

function HeroTextGroup({
    children,
    className,
    ...props
}: HeroTextGroupProps) {
    return (
        <div
            className={cn("flex flex-1 flex-col gap-xs text-center", "sm:text-left", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { HeroTextGroup };
export type { HeroTextGroupProps };