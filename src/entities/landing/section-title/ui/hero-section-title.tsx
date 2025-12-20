import {cn} from "@shared/lib/utils.ts";

interface HeroSectionTitleProps {
    children: React.ReactNode
}

function HeroSectionTitle({
    children
}: HeroSectionTitleProps) {
    return (
        <h1 className={cn(
            "mb-6 text-balance font-bold tracking-tight text-transparent",
            "lg:text-9xl lg:py-xs",
            "bg-gradient-to-br from-accent via-purple-500 to-accent bg-clip-text"
        )}>
            {children}
        </h1>
    )
}

export { HeroSectionTitle };
export type { HeroSectionTitleProps };