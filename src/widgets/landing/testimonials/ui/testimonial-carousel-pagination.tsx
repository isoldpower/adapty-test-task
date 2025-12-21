import {
    TestimonialCarouselPaginationDot,
    TestimonialCarouselPaginationDotTransition
} from "@features/landing/testimonial-carousel";
import { CenteredGroup } from "@entities/landing/containers";
import { TestimonialCarouselDot } from "@entities/landing/testimonials-carousel";

import type { CEOTestimonial } from "../types";


interface CEOTestimonialCarouselPaginationProps {
    testimonials: CEOTestimonial[]
}

function CEOTestimonialCarouselPagination({
    testimonials
}: CEOTestimonialCarouselPaginationProps) {
    return (
        <CenteredGroup orientation="horizontal" className="justify-center gap-3">
            {testimonials.map((_, index) => (
                <TestimonialCarouselPaginationDot index={index}>
                    <TestimonialCarouselPaginationDotTransition index={index}>
                        <TestimonialCarouselDot />
                    </TestimonialCarouselPaginationDotTransition>
                </TestimonialCarouselPaginationDot>
            ))}
        </CenteredGroup>
    );
}

export { CEOTestimonialCarouselPagination };
export type { CEOTestimonial };