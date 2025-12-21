import { cn } from "@shared/lib/utils.ts";
import type { BaseHTMLAttributes } from "react";

type Orientation = 'direct' | 'backward';

type FooterDividerProps = Omit<BaseHTMLAttributes<HTMLDivElement>, 'children'> & {
    orientation: Orientation;
};

const dividerVariants: Record<Orientation, string> = {
    direct: "mt-6 mb-l sm:mt-xs sm:mb-m",
    backward: "mb-6 mt-l sm:mb-xs sm:mt-m"
}

function FooterDivider({
    className,
    orientation,
    ...props
}: FooterDividerProps) {
    return (
        <div className={cn(
            "h-[1px] w-full border-t border-white/8",
            dividerVariants[orientation],
            className
        )} {...props} />
    );
}

export { FooterDivider };