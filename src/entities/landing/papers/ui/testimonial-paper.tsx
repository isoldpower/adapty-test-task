import type { ComponentProps, SVGAttributes } from "react";
import { Card } from "@shared/ui-toolkit";
import { cn } from "@shared/lib/utils.ts";

type QuoteIconProps = SVGAttributes<SVGElement>;

function QuoteIcon({
    className,
    ...props
}: QuoteIconProps) {
    return (
        <svg
            className={cn("w-[24px] h-[24px] lg:w-12 lg:h-12", className)}
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
        >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
        </svg>
    );
}

type TestimonialPaperProps = ComponentProps<typeof Card>;

function TestimonialPaper({
    children,
    className,
    ...props
}: TestimonialPaperProps) {
    return (
        <Card
            className={cn(
                "border! shadow-none! bg-transparent rounded-2xl p-4 lg:p-10 relative",
                className
            )}
            {...props}
        >
            <QuoteIcon className={cn(
                "absolute -top-4 z-10 p-2 mb-6 lg:-top-6",
                "text-neutral-700"
            )} />
            {children}
        </Card>
    );
}

export { TestimonialPaper };