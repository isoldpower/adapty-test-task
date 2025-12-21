import type { BaseHTMLAttributes } from "react";
import { cn } from "@shared/lib/utils.ts";


type BigImageContainerProps = BaseHTMLAttributes<HTMLDivElement>;

function BigImageContainer({
    className,
    children,
    ...props
}: BigImageContainerProps) {
    return (
        <div className={cn("flex-shrink-0 w-full flex items-center justify-center", className)} {...props}>
            <div className="w-full max-w-[480px] md:max-w-[400px] lg:max-w-[300px] max-h-full">
                {children}
            </div>
        </div>
    );
}

export { BigImageContainer };