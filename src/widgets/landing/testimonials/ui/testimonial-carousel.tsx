import { cloneElement } from "react";
import { CarouselContent, CarouselNext, CarouselPrevious } from "@shared/ui-toolkit";
import {
    TestimonialCarouselNext,
    TestimonialCarouselPrevious,
    TestimonialCarouselShell
} from "@entities/landing/testimonials-carousel";
import { TestimonialCarouselItemTransition } from "@features/landing/testimonial-carousel";
import { CarouselButtonHover } from "@features/landing/hover-animations";

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
            <CarouselButtonHover>
                <CarouselPrevious>
                    <TestimonialCarouselPrevious />
                </CarouselPrevious>
            </CarouselButtonHover>
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCarouselItemTransition index={index}>
                        {cloneElement(item, {
                            ...item.props,
                            testimonial,
                            key: index
                        })}
                    </TestimonialCarouselItemTransition>
                ))}
            </CarouselContent>
            <CarouselButtonHover>
                <CarouselNext>
                    <TestimonialCarouselNext />
                </CarouselNext>
            </CarouselButtonHover>
        </TestimonialCarouselShell>
    );
}

export { CEOTestimonialCarousel };
export type { CEOTestimonial };