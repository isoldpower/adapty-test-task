import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

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