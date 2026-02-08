import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

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