import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type IconContainerProps = BaseHTMLAttributes<HTMLDivElement>;

function IconContainer({
    children,
    className,
    ...props
}: IconContainerProps) {
    return (
        <div className={cn("p-4", className)} {...props}>
            {children}
        </div>
    );
}


export { IconContainer };