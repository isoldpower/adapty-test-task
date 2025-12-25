import {cn} from "@shared/lib/utils.ts";

interface HeroSectionTitleProps {
    children: React.ReactNode
}

function HeroSectionTitle({
    children
}: HeroSectionTitleProps) {
    return (
        <h1 className={cn(
            "mb-6 text-balance font-bold tracking-tight text-foreground",
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl",
            "leading-[0.95]",
            "bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        )}>
            {children}
        </h1>
    )
}

export { HeroSectionTitle };
export type { HeroSectionTitleProps };