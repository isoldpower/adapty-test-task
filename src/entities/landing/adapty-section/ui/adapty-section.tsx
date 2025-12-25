import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";

type SectionVariant = 'warm' | 'cold' | 'default' | 'accent';

type AdaptySectionProps = BaseHTMLAttributes<HTMLElement> & {
    variant?: SectionVariant;
};

const sectionVariants: Record<SectionVariant, string> = {
    warm: "bg-a-bg-warm text-foreground",
    cold: "bg-a-bg-cold text-foreground",
    default: "bg-a-bg-website text-foreground",
    accent: "bg-a-bg-accent text-accent-foreground",
}

function AdaptySection({
    children,
    className,
    variant = 'default',
    ...props
}: AdaptySectionProps) {
    return (
        <section className={cn(
            className,
            sectionVariants[variant],
            "py-xl px-s border-none relative overflow-hidden",
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