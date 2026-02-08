import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type CarouselDotProps = BaseHTMLAttributes<HTMLDivElement>;

function TestimonialCarouselDot({
    className,
    ...props
}: CarouselDotProps) {
    return (
        <div className={cn("w-3 h-3 rounded-full bg-a-bg-website", className)} {...props} />
    );
}

export { TestimonialCarouselDot };