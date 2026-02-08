import { ChevronLeft } from "lucide-react";

import { cn } from "@shared/lib/utilities";


import type { ButtonHTMLAttributes } from "react";

type CarouselPreviousProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "aria-label">;

function TestimonialCarouselPrevious({
    className,
    ...props
}: CarouselPreviousProps) {
    return (
        <button
            type="button"
            className={cn("flex-shrink-0", className)}
            aria-label="Previous testimonial button"
            {...props}
        >
            <ChevronLeft className="w-14 h-14 lg:w-20 lg:h-20" strokeWidth={3}/>
        </button>
    );
}

export { TestimonialCarouselPrevious };