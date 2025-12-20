import classes from './Testomial.module.scss';
import {cn} from "@shared/lib/utils.ts";

interface TestimonialWithMediaProps {
    reversed?: boolean;
    media: React.ReactNode;
    testimonial: React.ReactNode;
    breakEarly?: boolean;
}

function TestimonialWithMedia({
    reversed = false,
    testimonial,
    media,
    breakEarly = false
}: TestimonialWithMediaProps) {
    return (
        <div
            className={cn(
                classes.testimonialWithMedia__grid,
                "w-full items-center",
                breakEarly && classes.testimonialWithMedia__breakEarly,
            )}
            aria-details={reversed ? 'reversed' : undefined}
        >
            <div className={classes.first}>
                {testimonial}
            </div>
            <div className={classes.second}>
                {media}
            </div>
        </div>
    )
}

export { TestimonialWithMedia };