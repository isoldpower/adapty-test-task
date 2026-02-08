import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type CarouselShellProps = BaseHTMLAttributes<HTMLDivElement>;

function TestimonialCarouselShell({
    className,
    children,
    ...props
}: CarouselShellProps) {
    return (
        <div className={cn("flex items-center gap-4 lg:gap-20", className)} {...props}>
            {children}
        </div>
    );
}

export { TestimonialCarouselShell };