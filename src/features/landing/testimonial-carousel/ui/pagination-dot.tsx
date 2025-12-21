import { useCarouselContext } from "@shared/ui-toolkit";
import { useCallback } from "react";
import type { ButtonHTMLAttributes } from "react";

type TestimonialCarouselPaginationDotProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    index: number;
}

function TestimonialCarouselPaginationDot ({
    index,
    children,
    ...props
}: TestimonialCarouselPaginationDotProps) {
    const { goToSlide } = useCarouselContext();

    const handleClick = useCallback(() => {
        goToSlide(index);
    }, [goToSlide, index]);

    return (
        <button onClick={handleClick} aria-label={`Go to testimonial ${(index + 1).toString()}`} {...props}>
            {children}
        </button>
    );
}

export { TestimonialCarouselPaginationDot };