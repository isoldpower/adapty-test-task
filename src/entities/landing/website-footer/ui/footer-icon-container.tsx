import type {BaseHTMLAttributes} from "react";
import {cn} from "@shared/lib/utils.ts";

type IconContainerProps = BaseHTMLAttributes<HTMLDivElement>;

function IconContainer({
    children,
    className,
    ...props
}: IconContainerProps) {
    return (
        <div className={cn("p-4", className)} {...props}>
            {children}
        </div>
    );
}


export { IconContainer };