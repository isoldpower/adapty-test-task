import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type TrustedCompanyHoverProps = BaseHTMLAttributes<HTMLDivElement>;

function TrustedCompanyHover({
    children,
    className,
    ...props
}: TrustedCompanyHoverProps) {
    return (
        <div
            className={cn("grayscale transition-all hover:grayscale-0 opacity-60 hover:opacity-100", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { TrustedCompanyHover };
export type { TrustedCompanyHoverProps };