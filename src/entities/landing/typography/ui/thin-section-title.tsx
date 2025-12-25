import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type ThinSectionTitleProps = BaseHTMLAttributes<HTMLHeadingElement>;

function ThinSectionTitle({
    className,
    children,
    ...props
}: ThinSectionTitleProps) {
    return (
        <h2 className={cn(
            "font-semibold tracking-tight text-center text-balance",
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            "leading-tight",
            className
        )} {...props}>
            {children}
        </h2>
    )
}

export { ThinSectionTitle };
export type { ThinSectionTitleProps };