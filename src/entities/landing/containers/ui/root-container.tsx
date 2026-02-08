import { cn } from "@shared/lib/utilities";

import type { BaseHTMLAttributes } from "react";

type RootContainerProps = BaseHTMLAttributes<HTMLDivElement>;

function RootContainer({
    children,
    className,
    ...props
}: RootContainerProps) {
    return (
        <main
            className={cn(
                "min-h-screen max-w-screen overflow-x-hidden bg-a-bg-website text-a-text-website",
                className
            )}
            {...props}
        >
            {children}
        </main>
    );
}

export { RootContainer };