import type { ButtonHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";
import { ChevronLeft } from "lucide-react";

type CarouselPreviousProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'aria-label'>;

function TestimonialCarouselPrevious({
    className,
    ...props
}: CarouselPreviousProps) {
    return (
        <button
            type="button"
            className={cn("flex-shrink-0 text-gray-900", className)}
            aria-label="Previous testimonial button"
            {...props}
        >
            <ChevronLeft className="w-14 h-14 lg:w-20 lg:h-20" strokeWidth={3}/>
        </button>
    );
}

export { TestimonialCarouselPrevious };