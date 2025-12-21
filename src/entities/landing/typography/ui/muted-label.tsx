import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type MutedLabelProps = BaseHTMLAttributes<HTMLParagraphElement>;

function MutedLabel({
    className,
    children,
    ...props
}: MutedLabelProps) {
    return (
        <p className={cn("text-lg lg:text-2xl text-muted-foreground font-normal", className)} {...props}>
            {children}
        </p>
    )
}

export { MutedLabel };
export type { MutedLabelProps };