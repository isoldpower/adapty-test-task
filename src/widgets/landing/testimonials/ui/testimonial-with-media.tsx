import classes from './Testomial.module.scss';
import {cn} from "@shared/lib/utils.ts";

interface TestimonialWithMediaProps {
    reversed?: boolean;
    media: React.ReactNode;
    testimonial: React.ReactNode;
}

function TestimonialWithMedia({
    reversed = false,
    testimonial,
    media
}: TestimonialWithMediaProps) {
    return (
        <div className={cn(classes.testimonialWithMedia__grid, "w-full")} aria-details={reversed ? 'reversed' : undefined}>
            <div>
                {reversed ? media : testimonial}
            </div>
            <div>
                {reversed ? testimonial : media}
            </div>
        </div>
    )
}

export { TestimonialWithMedia };