import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type ParagraphTextProps = BaseHTMLAttributes<HTMLParagraphElement>;

function ParagraphText({
    className,
    children,
    ...props
}: ParagraphTextProps) {
    return (
        <p className={cn("text-lg lg:text-2xl leading-normal lg:leading-relaxed", className)} {...props}>
            {children}
        </p>
    )
}

export { ParagraphText };
export type { ParagraphTextProps };