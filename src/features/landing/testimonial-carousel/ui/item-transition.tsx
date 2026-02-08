import { cn } from "@shared/lib/utilities";
import { useCarouselContext } from "@shared/ui-toolkit";

import type { BaseHTMLAttributes } from "react";

type TestimonialCarouselItemTransitionProps = BaseHTMLAttributes<HTMLDivElement> & {
    index: number;
};

function TestimonialCarouselItemTransition({
    index,
    children,
    className,
    ...props
}: TestimonialCarouselItemTransitionProps) {
    const { currentIndex } = useCarouselContext();

    return (
        <div
            className={cn(
                "ease-linear",
                index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute pointer-events-none",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export { TestimonialCarouselItemTransition };
export type { TestimonialCarouselItemTransitionProps };