import { cloneElement } from "react";
import { CarouselContent } from "@shared/ui-toolkit";
import {
    TestimonialCarouselShell
} from "@entities/landing/testimonials-carousel";
import { TestimonialCarouselItemTransition } from "@features/landing/testimonial-carousel";

import type { CEOTestimonial } from "../types";
import type { ReactElement } from "react";


interface CEOTestimonialCarouselProps {
    testimonials: CEOTestimonial[]
    item: ReactElement<{ testimonial: CEOTestimonial }>
}

function CEOTestimonialCarousel({
    testimonials,
    item
}: CEOTestimonialCarouselProps) {
    return (
        <TestimonialCarouselShell>
            <CarouselContent aria-label="CEO Testimonials Carousel">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCarouselItemTransition index={index} key={index}>
                        {cloneElement(item, {
                            ...item.props,
                            testimonial
                        })}
                    </TestimonialCarouselItemTransition>
                ))}
            </CarouselContent>
        </TestimonialCarouselShell>
    );
}

export { CEOTestimonialCarousel };
export type { CEOTestimonial };