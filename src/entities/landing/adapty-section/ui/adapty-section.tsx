import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";
import { GridBackground } from "@entities/landing/grid-background";
import { InteractiveGridBackground } from "@entities/landing/interactive-grid-background";

type SectionVariant = 'default' | 'subtle' | 'muted' | 'grid' | 'hero' | 'feature';

type AdaptySectionProps = BaseHTMLAttributes<HTMLElement> & {
    variant?: SectionVariant;
    showGrid?: boolean;
    gridVariant?: 'default' | 'subtle' | 'dense';
    interactiveGrid?: boolean;
    gridOpacity?: number;
};

const sectionVariants: Record<SectionVariant, string> = {
    default: "bg-white text-foreground",
    subtle: "bg-gray-50/50 text-foreground",
    muted: "bg-gray-50 text-foreground",
    grid: "bg-white text-foreground",
    hero: "bg-gradient-to-b from-white via-gray-50/30 to-white text-foreground",
    feature: "bg-gradient-to-br from-gray-50 via-white to-gray-50/50 text-foreground",
}

function AdaptySection({
    children,
    className,
    variant = 'default',
    showGrid = false,
    gridVariant = 'default',
    interactiveGrid = false,
    gridOpacity,
    ...props
}: AdaptySectionProps) {
    const shouldShowGrid = showGrid || variant === 'grid' || variant === 'hero' || variant === 'feature';
    
    return (
        <section className={cn(
            className,
            sectionVariants[variant],
            "py-16 px-4 border-none relative overflow-hidden bg-a-bg-accent",
            "sm:py-20 sm:px-6",
            "md:py-24 md:px-8",
            "lg:py-32 lg:px-12",
            "xl:py-40 xl:px-16",
        )} {...props}>
            {shouldShowGrid && (
                interactiveGrid ? (
                    <InteractiveGridBackground activeOpacity={0.05} variant={gridVariant} />
                ) : (
                    <GridBackground opacity={gridOpacity} variant={gridVariant} />
                )
            )}
            <div className="w-full relative z-10">
                {children}
            </div>
        </section>
    )
}

export { AdaptySection };
export type { AdaptySectionProps };
