import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

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