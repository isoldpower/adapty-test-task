import { cn } from "@shared/lib/utils.ts";

import type { BaseHTMLAttributes } from "react";

type TextMediaGroupProps = BaseHTMLAttributes<HTMLDivElement>;

function TextMediaGroup({
    children,
    className,
    ...props
}: TextMediaGroupProps) {
    return (
        <article
            className={cn(
                "grid grid-cols-1 items-center gap-8",
                "md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-12",
                "lg:grid-cols-2",
                className
            )}
            {...props}
        >
            {children}
        </article>
    );
}

export { TextMediaGroup };
export type { TextMediaGroupProps };