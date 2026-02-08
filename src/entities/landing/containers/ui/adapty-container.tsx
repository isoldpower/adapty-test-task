import { cn } from "@shared/lib/utilities";
import { Container } from "@shared/ui-toolkit";

import type React from "react";

interface AdaptyContainerProps {
    children: React.ReactNode
    className?: string
}

function AdaptyContainer({
    children,
    className,
    ...props
}: AdaptyContainerProps) {
    return (
        <Container className={cn("max-w-full w-[1100px] flex flex-col mx-auto items-start border-none", className)} {...props}>
            {children}
        </Container>
    );
};

export { AdaptyContainer };
export type { AdaptyContainerProps };