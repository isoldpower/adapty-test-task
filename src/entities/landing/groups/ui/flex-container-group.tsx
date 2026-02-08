import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type FlexContainerGroupProps = BaseHTMLAttributes<HTMLDivElement>;

function FlexContainerGroup({
    children,
    className,
    ...props
}: FlexContainerGroupProps) {
    return (
        <div
            className={cn("flex justify-around items-center flex-wrap gap-12", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { FlexContainerGroup };
export type { FlexContainerGroupProps };