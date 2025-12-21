import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type CarouselButtonHoverProps = BaseHTMLAttributes<HTMLDivElement>;

function CarouselButtonHover({
    children,
    className,
    ...props
}: CarouselButtonHoverProps) {
    return (
        <div
            className={cn("text-white hover:text-gray-300 transition-colors", className)}
            {...props}
        >
            {children}
        </div>
    );
}

export { CarouselButtonHover };
export type { CarouselButtonHoverProps };