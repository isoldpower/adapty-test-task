import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type CenteredGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal";
};

function CenteredGroup({
    children,
    className,
    orientation = "vertical",
    ...props
}: CenteredGroupProps) {
    return (
        <div
            className={cn(
                "w-full flex items-center",
                orientation === "vertical" ? "flex-col" : "flex-row",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { CenteredGroup };
export type { CenteredGroupProps };