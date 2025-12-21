import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

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