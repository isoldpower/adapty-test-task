import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type HeroSectionDescriptionProps = BaseHTMLAttributes<HTMLParagraphElement>;

function HeroSectionDescription({
    className,
    children,
    ...props
}: HeroSectionDescriptionProps) {
    return (
        <p className={cn(
            "text-pretty text-2xl md:text-3xl font-normal text-gray-600",
            "leading-relaxed max-w-3xl",
            className
        )} {...props}>
            {children}
        </p>
    )
}

export { HeroSectionDescription };
export type { HeroSectionDescriptionProps };