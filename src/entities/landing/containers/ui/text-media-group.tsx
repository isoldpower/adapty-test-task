import { cn } from "@shared/lib/utils.ts";
import classes from './Containers.module.scss';

import type { BaseHTMLAttributes } from "react";

type TextMediaGroupProps = BaseHTMLAttributes<HTMLDivElement>;

function TextMediaGroup({
    children,
    className,
    ...props
}: TextMediaGroupProps) {
    return (
        <article
            className={cn(classes.textMediaGroup__gridContainer, className)}
            {...props}
        >
            {children}
        </article>
    );
}

export { TextMediaGroup };
export type { TextMediaGroupProps };