import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type ThinSectionTitleProps = BaseHTMLAttributes<HTMLHeadingElement>;

function ThinSectionTitle({
    className,
    children,
    ...props
}: ThinSectionTitleProps) {
    return (
        <h2 className={cn("font-normal tracking-tight text-center text-balance", className)} {...props}>
            {children}
        </h2>
    )
}

export { ThinSectionTitle };
export type { ThinSectionTitleProps };