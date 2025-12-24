import { Children, useMemo } from "react";
import { cn } from "@shared/lib/utils.ts";

import type { BaseHTMLAttributes, ReactNode } from "react";


type FooterNavGridProps = BaseHTMLAttributes<HTMLDivElement> & {
    maxColumns?: number;
};

function FooterNavGrid({
    children,
    className,
    maxColumns = 5,
    ...props
}: FooterNavGridProps) {
    const childrenColumns = useMemo(() => {
        const elementsCount = Children.count(children);
        const maxColumnSize = Math.ceil(elementsCount / maxColumns);
        const minColumnSize = Math.floor(elementsCount / maxColumns);
        const maxSizedColumns = elementsCount - maxColumns * minColumnSize;

        return Children.toArray(children).reduce<ReactNode[][]>((acc, child) => {
            const currentColumn = acc[acc.length - 1];
            const maxCurrentSize = acc.length <= maxSizedColumns ? maxColumnSize : minColumnSize;

            if (currentColumn.length < maxCurrentSize) {
                currentColumn.push(child);
            } else {
                acc.push([child]);
            }

            return acc;
        }, [[]]);
    }, [children, maxColumns]);

    return (
        <div
            className={cn(
                "grid items-stretch grid-cols-1 gap-8",
                "min-[575px]:grid-cols-2",
                "md:grid-cols-3",
                "lg:grid-cols-4",
                "xl:grid-cols-5",
                className
            )}
            {...props}
        >
            {childrenColumns.map((column, index) => (
                <div key={index} className={cn("flex flex-col gap-12")}>
                    {column}
                </div>
            ))}
        </div>
    );
}

export { FooterNavGrid };
export type { FooterNavGridProps };