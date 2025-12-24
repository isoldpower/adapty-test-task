import { cn } from "@shared/lib/utils.ts";
import { Children } from "react";

const textAndMediaGroupVariants = {
    normal: `
        grid 
        grid-cols-[380px_calc(100%_-_380px_-_var(--space-xl))] 
        gap-[var(--space-xl)]
        max-[991px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
        max-[991px]:gap-[var(--space-m)]
        max-[767px]:gap-[var(--space-s)]
        max-[575px]:grid-cols-[minmax(0,1fr)]
      `,
    reversed: `
        grid 
        grid-cols-[calc(100%_-_380px_-_var(--space-xl))_380px] 
        gap-[var(--space-xl)]
        [data-order='1']:order-2 [data-order='2']:order-1
        max-[991px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
        max-[991px]:gap-[var(--space-m)]
        max-[767px]:gap-[var(--space-s)]
        max-[575px]:grid-cols-[minmax(0,1fr)]
        max-[575px]:[data-order='1']:order-1
        max-[575px]:[data-order='2']:order-2
      `,
} as const;

interface TextAndMediaGroupProps {
    reversed?: boolean;
    children: React.ReactNode;
    breakEarly?: boolean;
}

function TextAndMediaGroup({
    reversed = false,
    breakEarly = false,
    children
}: TextAndMediaGroupProps) {
    return (
        <div className={cn(
            textAndMediaGroupVariants[reversed ? "reversed" : "normal"],
            breakEarly && "max-md:grid-cols-1",
        )}>
            {Children.toArray(children).map((child, i) => (
                <div data-order={i.toString()} key={i}>
                    {child}
                </div>
            ))}
        </div>
    )
}

export { TextAndMediaGroup };