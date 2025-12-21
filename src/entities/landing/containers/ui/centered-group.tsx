import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type CenteredGroupProps = BaseHTMLAttributes<HTMLDivElement>;

function CenteredGroup({
    children,
    className,
    ...props
}: CenteredGroupProps) {
    return (
        <div
            className={cn("w-full flex flex-col items-center", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { CenteredGroup };
export type { CenteredGroupProps };