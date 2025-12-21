import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type HeroSectionDescriptionProps = BaseHTMLAttributes<HTMLParagraphElement>;

function HeroSectionDescription({
    className,
    children,
    ...props
}: HeroSectionDescriptionProps) {
    return (
        <p className={cn("text-pretty text-3xl font-medium text-muted-foreground", className)} {...props}>
            {children}
        </p>
    )
}

export { HeroSectionDescription };
export type { HeroSectionDescriptionProps };