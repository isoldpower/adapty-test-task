import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type InTextLinkHoverProps = BaseHTMLAttributes<HTMLDivElement>;

function InTextLinkHover({
    children,
    className,
    ...props
}: InTextLinkHoverProps) {
    return (
        <div className={cn("hover:text-gray-900 transition-colors", className)} {...props}>
            {children}
        </div>
    );
}

export { InTextLinkHover };
export type { InTextLinkHoverProps };