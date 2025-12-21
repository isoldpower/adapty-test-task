import { useCarouselContext } from "@shared/ui-toolkit";
import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type TestimonialCarouselPaginationDotTransitionProps = BaseHTMLAttributes<HTMLDivElement> & {
    index: number;
};

function TestimonialCarouselPaginationDotTransition({
    index,
    children,
    className,
    ...props
}: TestimonialCarouselPaginationDotTransitionProps) {
    const { currentIndex } = useCarouselContext();

    return (
        <div
            className={cn(
                "transition-colors",
                index === currentIndex ? "opacity-100 scale-125" : "opacity-70 hover:opacity-90",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { TestimonialCarouselPaginationDotTransition };
export type { TestimonialCarouselPaginationDotTransitionProps };