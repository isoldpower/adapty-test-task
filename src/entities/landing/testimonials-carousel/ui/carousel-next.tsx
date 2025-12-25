import type { ButtonHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";
import { ChevronRight } from "lucide-react";

type CarouselNextProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'aria-label'>;

function TestimonialCarouselNext({
    className,
    ...props
}: CarouselNextProps) {
    return (
        <button
            type="button"
            className={cn("text-gray-900 flex-shrink-0", className)}
            aria-label="Next testimonial button"
            {...props}
        >
            <ChevronRight className="w-14 h-14 lg:w-20 lg:h-20" strokeWidth={3} />
        </button>
    );
}

export { TestimonialCarouselNext };