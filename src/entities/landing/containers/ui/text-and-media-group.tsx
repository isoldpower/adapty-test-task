import classes from './Containers.module.scss';
import { cn } from "@shared/lib/utils.ts";
import { Children } from "react";


interface TextAndMediaGroupProps {
    reversed?: boolean;
    children: React.ReactNode;
    breakEarly?: boolean;
}

function TextAndMediaGroup({
    reversed = false,
    breakEarly = false,
    children
}: TextAndMediaGroupProps) {
    return (
        <div
            className={cn(
                classes.testimonialWithMedia__grid,
                "w-full items-center",
                breakEarly && classes.testimonialWithMedia__breakEarly,
            )}
            aria-details={reversed ? 'reversed' : undefined}
        >
            {Children.toArray(children).map((child, i) => (
                <div data-order={i.toString()}>
                    {child}
                </div>
            ))}
        </div>
    )
}

export { TextAndMediaGroup };