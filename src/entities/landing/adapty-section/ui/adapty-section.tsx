import type {BaseHTMLAttributes} from "react";
import {cn} from "@shared/lib/utils.ts";

type AdaptySectionProps = BaseHTMLAttributes<HTMLElement>;

function AdaptySection({
    children,
    className,
    ...props
}: AdaptySectionProps) {
    return (
        <section className={cn(
            className,
            "py-xl px-s",
            "xs:py-[calc(var(--section-space-s)+2px)] sm:px-[calc(var(--space-m)-4px)]",
            "sm:px-m",
            "lg:px-l",
            "xl:px-xl xl:py-xxl",
        )} {...props}>
            {children}
        </section>
    )
}

export { AdaptySection };
export type { AdaptySectionProps };
