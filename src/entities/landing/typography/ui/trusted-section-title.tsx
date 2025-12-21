import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type TrustedSectionTitleProps = BaseHTMLAttributes<HTMLParagraphElement>;

function TrustedSectionTitle({
    className,
    children,
    ...props
}: TrustedSectionTitleProps) {
    return (
        <p className={cn(
            "text-center text-3xl font-thin text-muted-foreground tracking-wider",
            className
        )} {...props}>
            {children}
        </p>
    );
}

export { TrustedSectionTitle };
export type { TrustedSectionTitleProps };