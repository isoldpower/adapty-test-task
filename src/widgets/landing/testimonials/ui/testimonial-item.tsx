import { ResponsivePicture } from "@entities/landing/responsive-picture";
import { BigImageContainer } from "@entities/landing/testimonial";

import type { CEOTestimonial } from "../types.ts";
import { TextMediaGroup } from "@entities/landing/containers";


interface CEOTestimonialItemProps {
    testimonial?: CEOTestimonial;
}

function CEOTestimonialItem({
    testimonial
}: CEOTestimonialItemProps) {
    return testimonial ? (
        <TextMediaGroup className="w-full">
            <BigImageContainer>
                <ResponsivePicture
                    alt={testimonial.author + "'s avatar"}
                    className="rounded-lg object-cover"
                    sources={[
                        { srcSet: testimonial.avatar.src, type: 'image/webp' },
                    ]}
                    {...testimonial.avatar}
                />
            </BigImageContainer>
            <div className="flex flex-col items-start gap-8">
                <p className="text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed text-gray-900">
                    "{testimonial.quote}"
                </p>
                <div>
                    <p className="text-3xl font-semibold text-gray-900">
                        {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                </div>
                <img
                    src={testimonial.logoSrc}
                    alt="Company logo"
                    className="h-16 w-auto object-contain bg-a-black-light-x2 p-4 rounded-lg"
                />
            </div>
        </TextMediaGroup>
    ) : null;
}

export { CEOTestimonialItem };