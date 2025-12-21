import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type ItemsGroupProps = BaseHTMLAttributes<HTMLDivElement> & {
    orientation?: "vertical" | "horizontal";
};

function ItemsGroup({
    children,
    className,
    orientation = "vertical",
    ...props
}: ItemsGroupProps) {
    return (
        <div
            className={cn(
                "w-full flex items-start",
                orientation === "vertical" ? "flex-col" : "flex-row",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { ItemsGroup };
export type { ItemsGroupProps };